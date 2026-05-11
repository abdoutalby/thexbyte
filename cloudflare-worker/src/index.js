/**
 * TheXbyte — Cloudflare Worker
 * Handles contact form submissions and sends emails via Resend API.
 *
 * Environment secrets (set via Wrangler or Cloudflare dashboard):
 *   RESEND_API_KEY   — Your Resend API key (re_xxxxxxxxxxxx)
 *   TO_EMAIL         — Destination inbox  (e.g. hello@thexbyte.tn)
 *   FROM_EMAIL       — Verified sender     (e.g. noreply@send.thexbyte.tn)
 *   ALLOWED_ORIGIN   — Frontend origin     (e.g. https://thexbyte.tn)
 */

const ROUTES = new Set(['/contact']);

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';

    // ── CORS preflight ───────────────────────────────────────────────────────
    if (request.method === 'OPTIONS') {
      return corsOk(origin, env);
    }

    if (request.method !== 'POST') {
      return respond({ error: 'Method not allowed' }, 405, origin, env);
    }

    const { pathname } = new URL(request.url);

    if (!ROUTES.has(pathname)) {
      return respond({ error: 'Not found' }, 404, origin, env);
    }

    // ── Parse body ───────────────────────────────────────────────────────────
    let body;
    try {
      body = await request.json();
    } catch {
      return respond({ error: 'Invalid JSON body' }, 400, origin, env);
    }

    // ── Basic validation ─────────────────────────────────────────────────────
    if (!body.name || !body.email) {
      return respond({ error: 'name and email are required' }, 422, origin, env);
    }

    if (!isValidEmail(body.email)) {
      return respond({ error: 'Invalid email address' }, 422, origin, env);
    }

    // ── Build email ──────────────────────────────────────────────────────────
    const { subject, html } = buildEmail(body);

    // ── Send via Resend ──────────────────────────────────────────────────────
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: env.FROM_EMAIL || 'TheXbyte <noreply@send.thexbyte.tn>',
          to:   [env.TO_EMAIL   || 'hello@thexbyte.tn'],
          reply_to: body.email,
          subject,
          html,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error('Resend error:', err);
        return respond({ error: 'Failed to send email. Please try again.' }, 502, origin, env);
      }

      return respond({ success: true }, 200, origin, env);
    } catch (err) {
      console.error('Worker error:', err);
      return respond({ error: 'Internal server error' }, 500, origin, env);
    }
  },
};

// ── Email builder ─────────────────────────────────────────────────────────────

function buildEmail(b) {
  return {
    subject: `[Contact] New message from ${b.name}`,
    html: emailLayout('New Contact Message', `
      <p><strong>Name:</strong> ${esc(b.name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${esc(b.email)}">${esc(b.email)}</a></p>
      ${b.company ? `<p><strong>Company:</strong> ${esc(b.company)}</p>` : ''}
      <p><strong>Message:</strong></p>
      <blockquote style="border-left:4px solid #0d9488;margin:0;padding:12px 16px;background:#f0fdf9;border-radius:4px;">
        ${esc(b.message || '').replace(/\n/g, '<br>')}
      </blockquote>
    `),
  };
}

function emailLayout(title, content) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body
    style="font-family:system-ui,sans-serif;margin:0;padding:24px;background:#f8fafc;">
    <div style="max-width:600px;margin:auto;background:#fff;border-radius:12px;
      border:1px solid #e2e8f0;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#0d9488,#0891b2);padding:24px 32px;">
        <h1 style="color:#fff;margin:0;font-size:20px;">TheXbyte — ${esc(title)}</h1>
      </div>
      <div style="padding:32px;">${content}</div>
      <div style="padding:16px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;
        color:#64748b;font-size:12px;">
        This email was sent automatically from thexbyte.tn
      </div>
    </div>
  </body></html>`;
}

// ── Utilities ─────────────────────────────────────────────────────────────────

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email));
}

function corsHeaders(origin, env) {
  const allowed = env.ALLOWED_ORIGIN || 'https://thexbyte.tn';
  return {
    'Access-Control-Allow-Origin':  allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age':       '86400',
  };
}

function corsOk(origin, env) {
  return new Response(null, { status: 204, headers: corsHeaders(origin, env) });
}

function respond(body, status, origin, env) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(origin, env),
    },
  });
}

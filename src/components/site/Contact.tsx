import { useState } from "react";
import { Mail, MessageCircle, MapPin, Phone, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { SectionHeader } from "./WhatWeBuild";

// FormSubmit endpoint — delivers form submissions to this address.
// Configure Cloudflare Email Routing on thexbyte.tn so hello@thexbyte.com
// (or hello@thexbyte.tn) forwards to your real inbox.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/hello@thexbyte.com";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — silently drop bots
    if ((data.get("_honey") as string)?.length) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      message: data.get("message"),
      _subject: `New lead from ${data.get("name") || "website"}`,
      _template: "table",
      _captcha: "false",
    };

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const json = (await res.json()) as { success?: string | boolean };
      if (String(json.success) !== "true") {
        throw new Error("Submission was not accepted.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please email us directly.");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden border-b border-border py-20 sm:py-32">
      <div className="bg-dot pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="container-tight relative">
        <SectionHeader
          eyebrow="06 · Contact"
          title="Tell us what you want to build."
          subtitle="A short description of your problem is enough to start. We'll reply with concrete questions, not a sales pitch."
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard icon={Mail} label="Email" value="hello@thexbyte.com" href="mailto:hello@thexbyte.com" />
          <ContactCard icon={Phone} label="Phone" value="+216 21 238 537" href="tel:+21621238537" />
          <ContactCard icon={MessageCircle} label="WhatsApp" value="+216 21 238 537" href="https://wa.me/21621238537" />
          <ContactCard icon={MapPin} label="Location" value="Ariana Centre, Tunisia" />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2 rounded-xl border border-border bg-surface/60 p-6 sm:p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Direct channels
            </div>
            <h3 className="mt-3 text-lg font-semibold tracking-tight">Prefer email?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Write to{" "}
              <a href="mailto:hello@thexbyte.com" className="text-foreground underline-offset-4 hover:underline">
                hello@thexbyte.com
              </a>{" "}
              or{" "}
              <a href="mailto:support@thexbyte.com" className="text-foreground underline-offset-4 hover:underline">
                support@thexbyte.com
              </a>
              . We typically reply within one business day.
            </p>
            <div className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
              <div>Mon–Fri · 9:00 – 18:00</div>
              <div>Sat · 10:00 – 16:00</div>
              <div className="mt-2">Avenue 18 Janvier, Ariana Centre, Bureau C 408 — Tunisia</div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-xl border border-border bg-background p-6 sm:p-8"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required autoComplete="name" />
              <Field label="Email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="mt-4">
              <Field label="Company (optional)" name="company" autoComplete="organization" />
            </div>
            <div className="mt-4">
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  What do you want to build?
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  maxLength={2000}
                  placeholder="A few sentences about the problem, current stack, and timeline."
                  className="mt-2 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal/60"
                />
              </label>
            </div>

            {/* Honeypot for bots */}
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">
                We'll only use your details to reply to this enquiry.
              </p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send message <span aria-hidden>→</span>
                  </>
                )}
              </button>
            </div>

            {status === "success" && (
              <div
                role="status"
                className="mt-5 flex items-start gap-2 rounded-md border border-signal/40 bg-signal/5 p-3 text-sm text-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
                <div>
                  <div className="font-medium">Message received.</div>
                  <div className="text-muted-foreground">
                    Thanks — we'll get back to you at the email you provided within one business day.
                  </div>
                </div>
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                className="mt-5 flex items-start gap-2 rounded-md border border-destructive/40 bg-destructive/5 p-3 text-sm"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                <div>
                  <div className="font-medium text-destructive">Couldn't send your message.</div>
                  <div className="text-muted-foreground">
                    {errorMsg} You can email us directly at{" "}
                    <a href="mailto:hello@thexbyte.com" className="underline underline-offset-4">
                      hello@thexbyte.com
                    </a>
                    .
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        maxLength={200}
        className="mt-2 h-10 w-full rounded-md border border-border bg-transparent px-3 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal/60"
      />
    </label>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="rounded-lg border border-border bg-background p-5 transition-colors hover:border-signal/50">
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        <Icon className="h-3.5 w-3.5 text-signal" />
        {label}
      </div>
      <div className="mt-2 text-sm font-medium text-foreground">{value}</div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

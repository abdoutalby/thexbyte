import { trustMetrics, testimonials, teamMembers, certifications, clientLogos } from "@/content/site";
import { SectionHeader } from "./SectionHeader";

export function TrustMetrics() {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <div className="container-tight">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustMetrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-border bg-surface/60 p-6 text-center">
              <div className="text-3xl font-semibold tracking-tight text-signal">{m.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClientLogos() {
  return (
    <section className="border-b border-border py-12">
      <div className="container-tight">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Trusted across industries
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          {clientLogos.map((logo) => (
            <span
              key={logo}
              className="rounded-md border border-border bg-background px-4 py-2 text-sm text-muted-foreground"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Client Testimonials"
          title="What our clients say"
          align="center"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="rounded-xl border border-border bg-surface/60 p-6"
            >
              <p className="text-sm leading-relaxed text-foreground">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 border-t border-border pt-4">
                <cite className="not-italic">
                  <div className="text-sm font-medium">{t.author}</div>
                  <div className="text-xs text-muted-foreground">{t.company}</div>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <div className="container-tight">
        <SectionHeader eyebrow="Our Team" title="Senior engineers, no middle layer" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article key={member.name} className="rounded-xl border border-border bg-surface/60 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-signal/10 font-mono text-sm text-signal">
                {member.name.split(" ").map((w) => w[0]).join("")}
              </div>
              <h3 className="mt-4 font-semibold tracking-tight">{member.name}</h3>
              <p className="text-sm text-signal">{member.role}</p>
              <p className="mt-2 text-xs text-muted-foreground">{member.expertise}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CertificationsSection() {
  return (
    <section className="py-12">
      <div className="container-tight">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Certifications & Standards
        </p>
        <ul className="mt-4 flex flex-wrap gap-3">
          {certifications.map((c) => (
            <li
              key={c}
              className="rounded-md border border-border bg-surface/60 px-3 py-1.5 text-sm text-muted-foreground"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

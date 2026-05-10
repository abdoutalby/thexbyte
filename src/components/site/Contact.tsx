import { Mail, MessageCircle, MapPin } from "lucide-react";
import { SectionHeader } from "./WhatWeBuild";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-b border-border py-20 sm:py-32">
      <div className="bg-dot pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="container-tight relative">
        <SectionHeader
          eyebrow="06 · Contact"
          title="Tell us what you want to build."
          subtitle="A short description of your problem is enough to start. We'll reply with concrete questions, not a sales pitch."
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          <ContactCard
            icon={Mail}
            label="Email"
            value="hello@thexbyte.com"
            href="mailto:hello@thexbyte.com"
          />
          <ContactCard
            icon={MessageCircle}
            label="WhatsApp"
            value="+216 00 000 000"
            href="https://wa.me/21600000000"
          />
          <ContactCard
            icon={MapPin}
            label="Location"
            value="Tunis, Tunisia"
          />
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-xl border border-border bg-surface/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <div className="text-base font-semibold tracking-tight">Have a project in mind?</div>
            <p className="mt-1 text-sm text-muted-foreground">
              We're booking new engagements for the current quarter.
            </p>
          </div>
          <a
            href="mailto:hello@thexbyte.com?subject=New%20project"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            Start a project <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
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

import { Mail, MessageCircle, MapPin, Phone } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { LeadForm } from "@/components/shared/LeadForm";
import { CALENDLY_URL, company } from "@/content/site";

export function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact TheXbyte | Book a Free Consultation"
        description="Contact TheXbyte for custom software development. Book a free consultation, request a quote, or schedule a discovery call."
        path="/contact"
      />
      <div className="relative overflow-hidden border-b border-border py-16 sm:py-24">
        <div className="bg-dot pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="container-tight relative">
          <SectionHeader
            eyebrow="Contact"
            title="Tell us what you want to build"
            subtitle="Book a free consultation, request a quote, or schedule a discovery call. We reply within one business day."
          />

          <div className="mt-8">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Schedule a Discovery Call →
            </a>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <ContactCard icon={Mail} label="Email" value={company.email} href={`mailto:${company.email}`} />
            <ContactCard icon={Phone} label="Phone" value={company.phoneDisplay} href={`tel:${company.phone}`} />
            <ContactCard icon={MessageCircle} label="WhatsApp" value={company.phoneDisplay} href={`https://wa.me/${company.phone}`} />
            <ContactCard icon={MapPin} label="Location" value={`${company.address.city}, Tunisia`} />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2 rounded-xl border border-border bg-surface/60 p-6 sm:p-8">
              <h3 className="text-lg font-semibold tracking-tight">Office hours</h3>
              <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                <div>Mon–Fri · 9:00 – 18:00 (CET)</div>
                <div>Sat · 10:00 – 16:00</div>
                <div className="mt-4">{company.address.street}</div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <LeadForm title="Request a Quote" submitLabel="Send message" />
            </div>
          </div>
        </div>
      </div>
    </>
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

import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  TrustMetrics,
  TeamSection,
  CertificationsSection,
  Testimonials,
} from "@/components/shared/TrustSections";
import { CTASection } from "@/components/shared/CTASection";
import { company, COMPANY_PROFILE_URL } from "@/content/site";

export function AboutPage() {
  return (
    <>
      <SEOHead
        title="About TheXbyte | Software Engineering Studio"
        description="TheXbyte is a Tunisian engineering studio building software, IoT, and automation systems for startups and enterprises across Europe."
        path="/about"
      />
      <div className="border-b border-border py-16 sm:py-24">
        <div className="container-tight">
          <SectionHeader
            eyebrow="About"
            title="A premium engineering studio, by design"
            subtitle="We build software, IoT, and automation systems for operational businesses — and the startups serving them."
          />
          <div className="mt-10 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              TheXbyte is a Tunisian engineering studio founded in {company.foundingDate}. We serve clients
              across {company.markets.join(", ")} — delivering European-quality engineering with competitive
              rates and full timezone alignment.
            </p>
            <p>
              We're founder-led and intentionally small. Every project is delivered by the same senior engineers
              who scoped it. No account managers. No outsourced delivery. We'd rather ship one system that runs
              reliably for years than ten that demo well and decay in production.
            </p>
            <p>
              <a href={COMPANY_PROFILE_URL} className="text-signal hover:underline">
                Download our company profile (PDF)
              </a>
            </p>
          </div>
        </div>
      </div>
      <TrustMetrics />
      <TeamSection />
      <CertificationsSection />
      <Testimonials />
      <section className="border-b border-border py-12">
        <div className="container-tight text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background"
          >
            Discuss Your Project →
          </Link>
        </div>
      </section>
      <CTASection />
    </>
  );
}

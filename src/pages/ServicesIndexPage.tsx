import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";
import { allServices } from "@/content/services";

export function ServicesIndexPage() {
  return (
    <>
      <SEOHead
        title="Software Development Services | TheXbyte"
        description="Custom software, mobile apps, AI, IoT, cloud DevOps, MVP development, and dedicated teams. Premium engineering for startups and enterprises."
        path="/services"
      />
      <div className="border-b border-border py-16 sm:py-24">
        <div className="container-tight">
          <SectionHeader
            eyebrow="Services"
            title="Software development services"
            subtitle="Comprehensive engineering capabilities for every stage of your product journey."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {allServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group rounded-xl border border-border bg-surface/60 p-6 transition-colors hover:border-signal/50"
              >
                <h2 className="text-xl font-semibold tracking-tight group-hover:text-signal">{s.h1}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.metaDescription}</p>
                <span className="mt-4 inline-block text-sm font-medium text-signal">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}

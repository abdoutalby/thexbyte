import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";
import { allIndustries } from "@/content/industries";

export function IndustriesIndexPage() {
  return (
    <>
      <SEOHead
        title="Industries We Serve | TheXbyte"
        description="Software development for startups, logistics, manufacturing, healthcare, agriculture, education, and retail."
        path="/industries"
      />
      <div className="border-b border-border py-16 sm:py-24">
        <div className="container-tight">
          <SectionHeader
            eyebrow="Industries"
            title="Industry-specific software solutions"
            subtitle="Deep domain expertise combined with senior engineering across key verticals."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allIndustries.map((i) => (
              <Link
                key={i.slug}
                to={`/industries/${i.slug}`}
                className="group rounded-xl border border-border bg-surface/60 p-6 transition-colors hover:border-signal/50"
              >
                <h2 className="text-xl font-semibold tracking-tight group-hover:text-signal">{i.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{i.metaDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}

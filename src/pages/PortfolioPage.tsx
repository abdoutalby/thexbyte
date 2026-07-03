import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";
import { allCaseStudies } from "@/content/case-studies";

export function PortfolioPage() {
  return (
    <>
      <SEOHead
        title="Portfolio & Case Studies | TheXbyte"
        description="Explore TheXbyte case studies: IoT monitoring, smart irrigation, lab platforms, industrial dashboards, and more."
        path="/portfolio"
      />
      <div className="border-b border-border py-16 sm:py-24">
        <div className="container-tight">
          <SectionHeader
            eyebrow="Portfolio"
            title="Case studies"
            subtitle="Real systems deployed for operational businesses — architectures, results, and business impact."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {allCaseStudies.map((cs) => (
              <Link
                key={cs.slug}
                to={`/portfolio/${cs.slug}`}
                className="group rounded-xl border border-border bg-surface/60 p-6 transition-colors hover:border-signal/50"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">{cs.tag}</div>
                <h2 className="mt-3 text-xl font-semibold tracking-tight group-hover:text-signal">{cs.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{cs.overview[0]}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cs.technologies.slice(0, 4).map((t) => (
                    <span key={t} className="rounded border border-border px-2 py-0.5 font-mono text-[11px]">{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}

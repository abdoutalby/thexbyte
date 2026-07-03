import { Link } from "react-router-dom";
import type { CaseStudyContent } from "@/content/types";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SEOHead } from "@/components/seo/SEOHead";
import { CTASection } from "@/components/shared/CTASection";
import { servicesBySlug } from "@/content/services";

export function CaseStudyTemplate({ caseStudy }: { caseStudy: CaseStudyContent }) {
  const path = `/portfolio/${caseStudy.slug}`;

  return (
    <>
      <SEOHead title={caseStudy.metaTitle} description={caseStudy.metaDescription} path={path} />

      <article className="border-b border-border py-16 sm:py-24">
        <div className="container-tight">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Portfolio", href: "/portfolio" },
              { label: caseStudy.title },
            ]}
          />

          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">{caseStudy.tag}</div>
          <h1 className="mt-3 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {caseStudy.title}
          </h1>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
            {caseStudy.overview.map((p, i) => (
              <p key={i} className="mt-4 text-base leading-relaxed text-muted-foreground">{p}</p>
            ))}
          </section>

          <div className="mt-12 rounded-xl border border-border bg-surface/40 p-6 font-mono text-sm">
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Architecture</div>
            <p className="mt-2 text-foreground">{caseStudy.architecture}</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <section>
              <h2 className="text-xl font-semibold tracking-tight">Client Challenge</h2>
              <ul className="mt-4 space-y-3">
                {caseStudy.clientChallenge.map((c, i) => (
                  <li key={i} className="text-sm leading-relaxed text-muted-foreground">• {c}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold tracking-tight">Solution</h2>
              <ul className="mt-4 space-y-3">
                {caseStudy.solution.map((s, i) => (
                  <li key={i} className="text-sm leading-relaxed text-muted-foreground">• {s}</li>
                ))}
              </ul>
            </section>
          </div>

          <section className="mt-12">
            <h2 className="text-xl font-semibold tracking-tight">Architecture Details</h2>
            <ul className="mt-4 space-y-3">
              {caseStudy.architectureDetails.map((a, i) => (
                <li key={i} className="text-sm leading-relaxed text-muted-foreground">• {a}</li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold tracking-tight">Technologies</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {caseStudy.technologies.map((t) => (
                <span key={t} className="rounded-md border border-border bg-background px-3 py-1.5 font-mono text-sm">{t}</span>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold tracking-tight">Development Timeline</h2>
            <div className="mt-6 space-y-4">
              {caseStudy.timeline.map((t) => (
                <div key={t.phase} className="flex gap-4 rounded-lg border border-border bg-surface/40 p-4">
                  <span className="shrink-0 font-mono text-sm text-signal">{t.duration}</span>
                  <div>
                    <h3 className="font-medium">{t.phase}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold tracking-tight">Results</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {caseStudy.results.map((r) => (
                <div key={r.metric} className="rounded-xl border border-border bg-surface/60 p-5 text-center">
                  <div className="text-2xl font-semibold text-signal">{r.value}</div>
                  <div className="mt-1 text-sm font-medium">{r.metric}</div>
                  <p className="mt-2 text-xs text-muted-foreground">{r.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold tracking-tight">Business Impact</h2>
            <ul className="mt-4 space-y-3">
              {caseStudy.businessImpact.map((b, i) => (
                <li key={i} className="text-sm leading-relaxed text-muted-foreground">• {b}</li>
              ))}
            </ul>
          </section>

          <div className="mt-12 flex flex-wrap gap-2">
            {caseStudy.serviceSlugs.map((slug) => {
              const s = servicesBySlug[slug];
              return s ? (
                <Link key={slug} to={`/services/${slug}`} className="rounded-md border border-border px-3 py-1 text-sm hover:border-signal/50">
                  {s.title}
                </Link>
              ) : null;
            })}
          </div>
        </div>
      </article>

      <CTASection title="Want similar results for your project?" />
    </>
  );
}

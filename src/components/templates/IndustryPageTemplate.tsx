import { Link } from "react-router-dom";
import type { IndustryContent } from "@/content/types";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SEOHead } from "@/components/seo/SEOHead";
import { CTASection } from "@/components/shared/CTASection";
import { caseStudiesBySlug } from "@/content/case-studies";

export function IndustryPageTemplate({ industry }: { industry: IndustryContent }) {
  const path = `/industries/${industry.slug}`;

  return (
    <>
      <SEOHead title={industry.metaTitle} description={industry.metaDescription} path={path} />

      <article className="border-b border-border py-16 sm:py-24">
        <div className="container-tight">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: industry.title },
            ]}
          />

          <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{industry.h1}</h1>

          <div className="mt-8 max-w-4xl space-y-4">
            {industry.overview.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">{p}</p>
            ))}
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">Industry Challenges</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {industry.challenges.map((c) => (
                <div key={c.title} className="rounded-xl border border-border bg-surface/60 p-6">
                  <h3 className="font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">Software Opportunities</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {industry.opportunities.map((o) => (
                <div key={o.title} className="rounded-xl border border-border bg-surface/60 p-6">
                  <h3 className="font-semibold tracking-tight text-signal">{o.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">Recommended Solutions</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {industry.solutions.map((s) => (
                <Link
                  key={s.title}
                  to={s.href ?? "/services"}
                  className="group rounded-xl border border-border bg-surface/60 p-6 transition-colors hover:border-signal/50"
                >
                  <h3 className="font-semibold tracking-tight group-hover:text-signal">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">Relevant Technologies</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {industry.technologies.map((tech) => (
                <span key={tech} className="rounded-md border border-border bg-background px-3 py-1.5 font-mono text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">Case Studies</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[...new Set(industry.caseStudySlugs)].map((slug) => {
                const cs = caseStudiesBySlug[slug];
                if (!cs) return null;
                return (
                  <Link
                    key={slug}
                    to={`/portfolio/${slug}`}
                    className="group rounded-xl border border-border bg-surface/60 p-6 transition-colors hover:border-signal/50"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">{cs.tag}</div>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight group-hover:text-signal">{cs.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{cs.overview[0]}</p>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </article>

      <CTASection
        title={`Let's build for ${industry.title.toLowerCase()}`}
        subtitle="Schedule a discovery call to discuss your industry-specific challenges and how we can help."
      />
    </>
  );
}

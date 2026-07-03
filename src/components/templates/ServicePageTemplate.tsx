import { Link } from "react-router-dom";
import type { ServiceContent } from "@/content/types";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceSchema, FAQSchema } from "@/components/seo/StructuredData";
import { FAQSection } from "@/components/shared/FAQSection";
import { CTASection } from "@/components/shared/CTASection";
import { InternalLinks } from "@/components/shared/InternalLinks";
import { servicesBySlug } from "@/content/services";
import { industriesBySlug } from "@/content/industries";

export function ServicePageTemplate({ service }: { service: ServiceContent }) {
  const path = `/services/${service.slug}`;

  return (
    <>
      <SEOHead title={service.metaTitle} description={service.metaDescription} path={path} />
      <ServiceSchema name={service.h1} description={service.metaDescription} url={path} />
      <FAQSchema faq={service.faq} />

      <article className="border-b border-border py-16 sm:py-24">
        <div className="container-tight">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />

          <header className="max-w-4xl">
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{service.h1}</h1>
          </header>

          <section className="prose-section mt-12 max-w-4xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
            {service.overview.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">{p}</p>
            ))}
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">Business Challenges We Solve</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.challenges.map((c) => (
                <div key={c.title} className="rounded-xl border border-border bg-surface/60 p-6">
                  <h3 className="font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">Benefits</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.benefits.map((b) => (
                <div key={b.title} className="rounded-xl border border-border bg-surface/60 p-6">
                  <h3 className="font-semibold tracking-tight text-signal">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">Our Process</h2>
            <ol className="mt-8 space-y-4">
              {service.process.map((step) => (
                <li key={step.step} className="flex gap-4 rounded-xl border border-border bg-surface/40 p-6">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-signal/10 font-mono text-sm text-signal">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-semibold tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">Technologies</h2>
            {service.technologyOverview.map((p, i) => (
              <p key={i} className="mt-4 text-base leading-relaxed text-muted-foreground">{p}</p>
            ))}
            <div className="mt-6 flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span key={tech} className="rounded-md border border-border bg-background px-3 py-1.5 font-mono text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">Industries We Serve</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.industries.map((ind) => (
                <div key={ind.name} className="rounded-xl border border-border bg-surface/60 p-6">
                  <h3 className="font-semibold tracking-tight">{ind.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>

      <FAQSection faq={service.faq} />

      <InternalLinks
        title="Related Services"
        links={service.relatedServices
          .map((slug) => servicesBySlug[slug])
          .filter(Boolean)
          .map((s) => ({ label: s.title, href: `/services/${s.slug}`, description: s.metaDescription.slice(0, 100) }))}
      />

      <InternalLinks
        title="Industries"
        links={service.relatedIndustries
          .map((slug) => industriesBySlug[slug])
          .filter(Boolean)
          .map((i) => ({ label: i.title, href: `/industries/${i.slug}` }))}
      />

      <CTASection
        title={`Ready to start your ${service.title.toLowerCase()} project?`}
        subtitle="Book a free consultation with our engineering team. We'll discuss your requirements and recommend the best approach."
      />
    </>
  );
}

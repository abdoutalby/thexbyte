import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Hero } from "@/components/site/Hero";
import { TrustTechnologies } from "@/components/shared/TrustTechnologies";
import { WhyChooseUs } from "@/components/shared/WhyChooseUs";
import { HowWeWork } from "@/components/shared/HowWeWork";
import { TrustMetrics, ClientLogos, Testimonials } from "@/components/shared/TrustSections";
import { ProjectsPreview } from "@/components/site/ProjectsPreview";
import { CTASection } from "@/components/shared/CTASection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { allServices } from "@/content/services";
import { LeadForm } from "@/components/shared/LeadForm";
import { company } from "@/content/site";

export function HomePage() {
  return (
    <>
      <SEOHead
        title="Custom Software, Mobile Apps & AI Solutions | TheXbyte"
        description="TheXbyte helps startups and businesses design, build, and scale web applications, mobile apps, AI solutions, IoT platforms, and cloud infrastructure. Book a free consultation."
        path="/"
      />
      <Hero />
      <TrustTechnologies />
      <TrustMetrics />
      <WhyChooseUs />
      <HowWeWork />

      <section className="border-b border-border py-20 sm:py-28">
        <div className="container-tight">
          <SectionHeader
            eyebrow="Services"
            title="End-to-end software development"
            subtitle="From MVP to enterprise scale — we cover the full product lifecycle."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {allServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group rounded-xl border border-border bg-surface/60 p-5 transition-colors hover:border-signal/50"
              >
                <h3 className="font-semibold tracking-tight group-hover:text-signal">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.metaDescription}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/services" className="text-sm font-medium text-signal hover:underline">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      <ProjectsPreview />
      <ClientLogos />
      <Testimonials />

      <section className="border-b border-border py-20 sm:py-28">
        <div className="container-tight">
          <SectionHeader
            eyebrow="Contact"
            title="Tell us what you want to build"
            subtitle="A short description of your problem is enough to start."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">
                Email{" "}
                <a href={`mailto:${company.email}`} className="text-foreground hover:underline">
                  {company.email}
                </a>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Phone{" "}
                <a href={`tel:${company.phone}`} className="text-foreground hover:underline">
                  {company.phoneDisplay}
                </a>
              </p>
              <p className="mt-4 text-sm text-muted-foreground">{company.address.street}</p>
            </div>
            <LeadForm title="Request a Quote" />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

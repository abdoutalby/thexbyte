import { whyChooseUs } from "@/content/site";
import { SectionHeader } from "./SectionHeader";

export function WhyChooseUs() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Why Choose TheXbyte"
          title="A premium engineering partner, not a vendor"
          subtitle="Startups and enterprises across Europe trust us to design, build, and scale software that drives real business outcomes."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-border bg-surface/60 p-6 transition-colors hover:border-signal/50"
            >
              <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

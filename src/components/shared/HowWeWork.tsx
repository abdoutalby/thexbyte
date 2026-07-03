import { howWeWorkSteps } from "@/content/site";
import { SectionHeader } from "./SectionHeader";

export function HowWeWork() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <div className="container-tight">
        <SectionHeader
          eyebrow="How We Work"
          title="From discovery to long-term support"
          subtitle="A proven seven-step process that keeps projects on track and stakeholders aligned."
        />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {howWeWorkSteps.map((step) => (
            <li
              key={step.step}
              className="relative rounded-xl border border-border bg-surface/60 p-6"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                {String(step.step).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

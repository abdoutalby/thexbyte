import { trustedTechnologies } from "@/content/site";
import { SectionHeader } from "./SectionHeader";

export function TrustTechnologies() {
  return (
    <section className="border-b border-border py-12 sm:py-16">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Trusted Technologies"
          title="Built with production-proven tools"
          subtitle="We choose boring, well-understood technologies and use them exceptionally well."
          align="center"
        />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {trustedTechnologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-border bg-surface/60 px-4 py-2.5 font-mono text-sm text-foreground/90 transition-colors hover:border-signal/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

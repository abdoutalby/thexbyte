import { SectionHeader } from "./WhatWeBuild";

const principles = [
  {
    k: "Fast execution",
    v: "Small team, no middle layer. Decisions in hours, prototypes in weeks.",
  },
  {
    k: "Multidisciplinary engineering",
    v: "Firmware, backend, mobile, infrastructure — handled by people who've shipped each.",
  },
  {
    k: "Real-world systems",
    v: "We work on things that have to keep running on a Sunday at 3am, not just demos.",
  },
  {
    k: "Hardware + software integration",
    v: "Comfortable across the stack: PCBs and pipelines, MQTT and Modbus, Linux and PLCs.",
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-border py-20 sm:py-28">
      <div className="container-tight grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow="05 · Studio" title="A small engineering studio, by design." />
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              TheXbyte is a Tunisian engineering studio. We build software, IoT and automation
              systems for operational businesses — labs, farms, factories, service operators,
              and the startups serving them.
            </p>
            <p>
              We're founder-led and intentionally small. Every project is delivered by the
              same engineers who scoped it. No account managers. No outsourced delivery.
            </p>
            <p className="text-foreground">
              We'd rather ship one system that runs reliably for years than ten that
              demo well and decay in production.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface/60 p-6 sm:p-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
            How we work
          </div>
          <ul className="mt-5 divide-y divide-border">
            {principles.map((p) => (
              <li key={p.k} className="grid grid-cols-3 gap-4 py-4">
                <div className="col-span-1 text-sm font-medium tracking-tight">{p.k}</div>
                <div className="col-span-2 text-sm leading-relaxed text-muted-foreground">{p.v}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

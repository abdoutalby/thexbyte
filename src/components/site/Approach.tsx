import { motion } from "framer-motion";
import { SectionHeader } from "./WhatWeBuild";

const steps = [
  {
    n: "01",
    title: "Research",
    body: "Talk to operators, walk the floor, read the data. We refuse to build before we understand.",
  },
  {
    n: "02",
    title: "Architecture",
    body: "System diagrams, data contracts, failure modes. Decisions documented before code is written.",
  },
  {
    n: "03",
    title: "Prototype",
    body: "A vertical slice running on real hardware in weeks — not slides, not Figma flows.",
  },
  {
    n: "04",
    title: "Deployment",
    body: "Reproducible infrastructure, CI/CD, rollback paths. Shipped, not handed over.",
  },
  {
    n: "05",
    title: "Monitoring",
    body: "Logs, metrics, alerts. We know when something breaks before the client opens a ticket.",
  },
];

const tags = [
  "Docker", "MQTT", "Flutter", "Spring Boot", "ESP32",
  "Angular", "Linux", "CI/CD", "Real-time", "Postgres",
];

export function Approach() {
  return (
    <section id="approach" className="border-b border-border bg-surface/40 py-20 sm:py-28">
      <div className="container-tight">
        <SectionHeader
          eyebrow="02 · Process"
          title="An engineering approach, end to end."
          subtitle="No handoff between strategy and execution. The same engineers who design the system also deploy and operate it."
        />

        <div className="mt-12 grid gap-3 lg:grid-cols-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative rounded-lg border border-border bg-background p-5"
            >
              <div className="font-mono text-[11px] tracking-[0.2em] text-signal">{s.n}</div>
              <div className="mt-2 text-base font-semibold tracking-tight">{s.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="absolute right-3 top-1/2 hidden h-px w-3 -translate-y-1/2 bg-border lg:block"
                />
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

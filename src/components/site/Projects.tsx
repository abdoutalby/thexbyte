import { motion } from "framer-motion";
import { SectionHeader } from "./WhatWeBuild";

type Project = {
  tag: string;
  title: string;
  problem: string;
  architecture: string;
  stack: string[];
  outcome: string;
};

const projects: Project[] = [
  {
    tag: "Environmental · IoT",
    title: "Remote water quality monitoring",
    problem:
      "Field stations measuring pH, turbidity and dissolved oxygen had no remote visibility and required weekly manual readings.",
    architecture:
      "ESP32 nodes → cellular gateway → MQTT broker → time-series store → operator dashboard with thresholds and SMS alerts.",
    stack: ["ESP32", "MQTT", "InfluxDB", "Spring Boot", "Angular"],
    outcome: "Manual readings dropped from weekly to monthly; out-of-range events caught in under 2 minutes.",
  },
  {
    tag: "AgriTech · Automation",
    title: "Smart irrigation automation",
    problem:
      "A farm cooperative was over-irrigating crops based on a fixed schedule, wasting water and stressing pumps.",
    architecture:
      "Soil moisture sensors and flow meters feed a control loop that opens valves per zone, with a mobile app for overrides.",
    stack: ["STM32", "LoRa", "NestJS", "Flutter", "Postgres"],
    outcome: "~38% reduction in water consumption across three pilot zones in the first season.",
  },
  {
    tag: "Lab Operations · SaaS",
    title: "Laboratory operational platform",
    problem:
      "A clinical lab tracked samples across paper logs and three disconnected spreadsheets, with no audit trail.",
    architecture:
      "Sample lifecycle service, role-based access, barcode scanning on mobile, signed PDF reports, full audit log.",
    stack: ["Spring Boot", "Angular", "Postgres", "Docker"],
    outcome: "Sample turnaround time cut by 40%; audit-ready reporting for accreditation.",
  },
  {
    tag: "Industrial · Real-time",
    title: "Real-time industrial monitoring dashboard",
    problem:
      "A production line had no live view of machine state, OEE, or downtime causes — operators relied on end-of-shift reports.",
    architecture:
      "PLC bridge over OPC-UA, in-memory stream processor, websocket dashboard with per-line drill-downs.",
    stack: ["OPC-UA", "NestJS", "Redis", "React"],
    outcome: "Downtime root-cause identification time cut from hours to minutes.",
  },
  {
    tag: "Operational · SaaS",
    title: "Reservation and payment system",
    problem:
      "A multi-location service business was losing bookings to manual phone scheduling and missed deposits.",
    architecture:
      "Calendar service with conflict resolution, payment provider integration, transactional email and SMS.",
    stack: ["NestJS", "Postgres", "Stripe", "Flutter"],
    outcome: "No-show rate down by half; ~3× weekly bookings within two months of launch.",
  },
  {
    tag: "Embedded · Telemetry",
    title: "Embedded telemetry systems",
    problem:
      "Mobile equipment fleet had no remote diagnostics; failures were diagnosed on-site after they happened.",
    architecture:
      "Custom telemetry firmware over CAN bus, cellular uplink, fleet dashboard with predictive thresholds.",
    stack: ["ESP32", "CAN", "MQTT", "TimescaleDB"],
    outcome: "Service teams dispatched proactively; first-time-fix rate measurably improved.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="border-b border-border py-20 sm:py-28">
      <div className="container-tight">
        <SectionHeader
          eyebrow="03 · Selected work"
          title="Real systems, deployed."
          subtitle="A subset of recent work — sanitised for confidentiality, but the architectures are real."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface/60 p-6 transition-colors hover:border-signal/50"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                {p.tag}
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{p.title}</h3>

              <dl className="mt-5 space-y-3 text-sm">
                <Row k="Problem" v={p.problem} />
                <Row k="Architecture" v={p.architecture} />
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Stack
                  </dt>
                  <dd className="mt-1.5 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-foreground/90"
                      >
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>
                <Row k="Outcome" v={p.outcome} accent />
              </dl>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ k, v, accent = false }: { k: string; v: string; accent?: boolean }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {k}
      </dt>
      <dd
        className={
          "mt-1 leading-relaxed " +
          (accent ? "text-foreground" : "text-muted-foreground")
        }
      >
        {v}
      </dd>
    </div>
  );
}

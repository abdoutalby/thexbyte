import { motion } from "framer-motion";
import { SectionHeader } from "./WhatWeBuild";

const layers: { name: string; items: string[] }[] = [
  { name: "Mobile & Frontend", items: ["Flutter", "Angular", "React", "TypeScript"] },
  { name: "Backend", items: ["Spring Boot", "NestJS", "Node.js", "Java"] },
  { name: "Embedded & IoT", items: ["ESP32", "STM32", "MQTT", "LoRa"] },
  { name: "Data", items: ["MySQL", "Postgres", "Redis", "InfluxDB"] },
  { name: "Infrastructure", items: ["Docker", "Linux", "Apache", "Nginx"] },
  { name: "Ops & Network", items: ["Jenkins", "GitHub Actions", "Tailscale", "Grafana"] },
];

export function Stack() {
  return (
    <section id="stack" className="border-b border-border bg-surface/40 py-20 sm:py-28">
      <div className="container-tight">
        <SectionHeader
          eyebrow="04 · Stack"
          title="The stack we maintain in production."
          subtitle="We don't chase frameworks. We pick boring, well-understood tools and use them well."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="rounded-lg border border-border bg-background p-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {layer.name}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-signal/80 shadow-[0_0_10px_var(--signal)]" />
              </div>
              <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
                {layer.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-foreground/90">
                    <span className="font-mono text-[11px] text-signal">›</span>
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Architecture diagram */}
        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-background p-6 sm:p-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Reference architecture · IoT pipeline
          </div>
          <pre className="mt-4 overflow-x-auto font-mono text-[12px] leading-6 text-foreground/85">
{`  [ Sensor / ESP32 ] ──MQTT──▶ [ Broker ] ──▶ [ Stream Worker ]
                                                    │
                                                    ▼
                                          [ TimescaleDB / Postgres ]
                                                    │
                       ┌────────────────────────────┼────────────────────────────┐
                       ▼                            ▼                            ▼
                 [ REST API ]                [ Alert Engine ]              [ Dashboard ]
                  Spring Boot                 thresholds + SMS              Angular / React`}
          </pre>
        </div>
      </div>
    </section>
  );
}

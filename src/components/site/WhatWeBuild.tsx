import { motion } from "framer-motion";
import {
  Boxes,
  Cpu,
  Factory,
  Smartphone,
  Cloud,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Item = {
  icon: LucideIcon;
  title: string;
  body: string;
  meta: string;
};

const items: Item[] = [
  {
    icon: Boxes,
    title: "SaaS Platforms",
    body: "Multi-tenant operational platforms with role-based access, billing, audit trails and APIs that other teams can build on.",
    meta: "Spring Boot · NestJS · Postgres",
  },
  {
    icon: Cpu,
    title: "IoT & Embedded Systems",
    body: "Firmware, gateways and brokers — from a single ESP32 prototype to fleets of devices reporting telemetry over MQTT.",
    meta: "ESP32 · STM32 · MQTT · LoRa",
  },
  {
    icon: Factory,
    title: "Industrial Automation",
    body: "Control loops, PLC integrations and supervisory dashboards that replace spreadsheets and manual readings on the shop floor.",
    meta: "Modbus · OPC-UA · Node-RED",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    body: "Field-grade apps that work offline, sync reliably, and stay fast on the cheapest Android device a technician will ever own.",
    meta: "Flutter · Kotlin · Swift",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    body: "Reproducible environments on Linux servers we actually maintain. Containers, reverse proxies, backups, observability included.",
    meta: "Docker · Nginx · Jenkins · Tailscale",
  },
  {
    icon: Wrench,
    title: "Internal Operational Tools",
    body: "Back-office tools that absorb the messy reality of a business — inventory, scheduling, dispatching, reporting, integrations.",
    meta: "Angular · React · Postgres",
  },
];

export function WhatWeBuild() {
  return (
    <section id="what-we-build" className="border-b border-border py-20 sm:py-28">
      <div className="container-tight">
        <SectionHeader eyebrow="01 · Capabilities" title="What we build" />

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group relative bg-background p-6 transition-colors hover:bg-surface"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface-2 text-signal">
                  <it.icon className="h-4 w-4" />
                </div>
                <h3 className="text-base font-semibold tracking-tight">{it.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {it.body}
              </p>
              <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/80">
                {it.meta}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

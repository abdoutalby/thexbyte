import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--signal-soft), transparent 70%)" }}
      />

      <div className="container-tight relative pt-20 pb-24 sm:pt-28 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_12px_var(--signal)]" />
          Tunis · Engineering studio · est. 2024
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Engineering systems that{" "}
          <span className="text-signal">interact with the real world.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          TheXbyte builds operational software, IoT infrastructure, embedded systems and
          automation platforms for startups, labs and industrial businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            View Projects <span aria-hidden>→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-signal/60 hover:text-signal"
          >
            Start a Project
          </a>
        </motion.div>

        {/* Tech blueprint visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { k: "uptime", v: "99.97%", d: "industrial telemetry, last 90d" },
            { k: "latency", v: "< 80ms", d: "MQTT broker → dashboard" },
            { k: "devices", v: "ESP32 · STM32", d: "in production fleets" },
            { k: "stack", v: "Spring · Nest · Flutter", d: "across active platforms" },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-lg border border-border bg-surface/60 p-4"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.k}
              </div>
              <div className="mt-2 text-lg font-semibold tracking-tight">{s.v}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.d}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

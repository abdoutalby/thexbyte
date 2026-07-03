import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { allCaseStudies } from "@/content/case-studies";

export function ProjectsPreview() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Portfolio"
          title="Real systems, deployed."
          subtitle="A subset of recent work — sanitised for confidentiality, but the architectures are real."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {allCaseStudies.slice(0, 6).map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
            >
              <Link
                to={`/portfolio/${p.slug}`}
                className="group block h-full overflow-hidden rounded-xl border border-border bg-surface/60 p-6 transition-colors hover:border-signal/50"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">{p.tag}</div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight group-hover:text-signal">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.overview[0]}</p>
                <span className="mt-4 inline-block text-sm font-medium text-signal">
                  Read case study →
                </span>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-signal/60 hover:text-signal"
          >
            View all projects →
          </Link>
        </div>
      </div>
    </section>
  );
}

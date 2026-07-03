import { Link } from "react-router-dom";
import { CALENDLY_URL } from "@/content/site";

type CTASectionProps = {
  title?: string;
  subtitle?: string;
  variant?: "default" | "compact";
};

export function CTASection({
  title = "Ready to build something that lasts?",
  subtitle = "Book a free consultation with our engineering team. We'll discuss your goals, timeline, and the fastest path to production.",
  variant = "default",
}: CTASectionProps) {
  return (
    <section
      className={
        variant === "compact"
          ? "rounded-xl border border-signal/30 bg-signal/5 p-8 sm:p-10"
          : "border-y border-border bg-surface/40 py-20 sm:py-28"
      }
    >
      <div className={variant === "compact" ? "" : "container-tight"}>
        <div className={variant === "compact" ? "" : "mx-auto max-w-3xl text-center"}>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Book a Free Consultation
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-signal/60 hover:text-signal"
            >
              Request a Quote
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-signal/60 hover:text-signal"
            >
              Discuss Your Project
            </Link>
          </div>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            Or schedule a discovery call · No commitment required
          </p>
        </div>
      </div>
    </section>
  );
}

export function InlineCTA({ text = "Discuss Your Project" }: { text?: string }) {
  return (
    <Link
      to="/contact"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-signal transition-colors hover:text-foreground"
    >
      {text} <span aria-hidden>→</span>
    </Link>
  );
}

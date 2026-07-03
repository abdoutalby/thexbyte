import type { FAQItem } from "@/content/types";
import { SectionHeader } from "./SectionHeader";

export function FAQSection({ faq, title = "Frequently asked questions" }: { faq: FAQItem[]; title?: string }) {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="container-tight">
        <SectionHeader title={title} />
        <dl className="mt-10 space-y-6">
          {faq.map((item) => (
            <div key={item.question} className="rounded-xl border border-border bg-surface/60 p-6">
              <dt className="text-lg font-semibold tracking-tight">{item.question}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

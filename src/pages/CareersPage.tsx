import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";
import { company } from "@/content/site";

const openings = [
 /* {
    title: "Senior Full-Stack Developer",
    type: "Full-time · Remote/Hybrid · Tunis",
    stack: "Spring Boot, NestJS, React, PostgreSQL",
  },
  {
    title: "Flutter Mobile Developer",
    type: "Full-time · Remote/Hybrid · Tunis",
    stack: "Flutter, Dart, REST APIs, Firebase",
  },
  {
    title: "IoT / Embedded Engineer",
    type: "Full-time · Hybrid · Tunis",
    stack: "ESP32, MQTT, C/C++, LoRa",
  },
  {
    title: "DevOps Engineer",
    type: "Full-time · Remote · Tunis",
    stack: "Docker, Kubernetes, AWS, Terraform",
  }, */
];

export function CareersPage() {
  return (
    <>
      <SEOHead
        title="Careers at TheXbyte | Join Our Engineering Team"
        description="Join TheXbyte — senior engineering roles in full-stack, mobile, IoT, and DevOps. Based in Tunis, serving European clients."
        path="/careers"
      />
      <div className="border-b border-border py-16 sm:py-24">
        <div className="container-tight">
          <SectionHeader
            eyebrow="Careers"
            title="Build systems that matter"
            subtitle="Join a small, senior team shipping production software for startups and enterprises across Europe."
          />
          <div className="mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground">
            <p>
              We're always looking for experienced engineers who've shipped production systems — not just
              written tutorials. If you care about code quality, honest communication, and building things that
              keep running on a Sunday at 3am, we'd like to hear from you.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="rounded-xl border border-border bg-surface/60 p-6">
                <h2 className="text-lg font-semibold tracking-tight">{job.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{job.type}</p>
                <p className="mt-2 font-mono text-xs text-signal">{job.stack}</p>
                <a
                  href={`mailto:${company.email}?subject=Application: ${job.title}`}
                  className="mt-4 inline-block text-sm font-medium text-signal hover:underline"
                >
                  Apply via email →
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Don't see a matching role? Send your CV to{" "}
            <a href={`mailto:${company.email}`} className="text-foreground hover:underline">
              {company.email}
            </a>
          </p>
        </div>
      </div>
      <CTASection title="Not hiring but need a development partner?" subtitle="We work with companies across Europe as an extended engineering team." />
    </>
  );
}

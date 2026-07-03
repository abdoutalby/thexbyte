import type { ServiceContent } from "../types";

type ServiceConfig = {
  slug: string;
  name: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  focusAreas: string[];
  challenges: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  technologies: string[];
  industries: { name: string; description: string }[];
  faq: { question: string; answer: string }[];
  relatedServices: string[];
  relatedIndustries: string[];
};

const defaultProcess = [
  {
    step: 1,
    title: "Discovery & Requirements",
    description:
      "We start by understanding your business objectives, user personas, technical constraints, and success metrics. Stakeholder interviews, competitive analysis, and technical audits ensure we build the right solution — not just software.",
  },
  {
    step: 2,
    title: "Architecture & Planning",
    description:
      "Our architects design scalable system blueprints, define API contracts, choose the optimal tech stack, and create a phased delivery roadmap. Every decision is documented with trade-offs so your team stays aligned.",
  },
  {
    step: 3,
    title: "UX/UI Design",
    description:
      "Wireframes, interactive prototypes, and design systems that balance usability with your brand identity. We validate designs with real users before development begins, reducing costly rework later.",
  },
  {
    step: 4,
    title: "Agile Development",
    description:
      "Two-week sprints with demoable increments. Your dedicated team writes clean, tested code with CI/CD pipelines from day one. You have full visibility through sprint reviews and shared project boards.",
  },
  {
    step: 5,
    title: "Quality Assurance",
    description:
      "Automated unit, integration, and end-to-end tests. Performance benchmarking, security scanning, accessibility audits, and cross-platform validation before any release candidate ships.",
  },
  {
    step: 6,
    title: "Deployment & Launch",
    description:
      "Staging environments mirror production. Zero-downtime deployments, monitoring dashboards, and rollback procedures. We handle app store submissions, DNS, SSL, and cloud provisioning.",
  },
  {
    step: 7,
    title: "Support & Evolution",
    description:
      "Post-launch monitoring, bug fixes, feature iterations, and scaling support. SLAs tailored to your needs — from business-hours response to 24/7 critical incident coverage.",
  },
];

export function buildServiceContent(config: ServiceConfig): ServiceContent {
  const { name, focusAreas, shortDescription } = config;

  const overview = [
    `${name} is one of TheXbyte's core competencies. Based in Tunisia and serving clients across Luxembourg, Belgium, France, Germany, Switzerland, and Tunisia, we help startups, SMEs, and enterprise innovation teams turn ambitious product visions into production-grade software that drives measurable business growth.`,
    `Whether you are a founder validating an MVP, a CTO modernizing legacy systems, or a product manager scaling an existing platform, our senior engineering team delivers ${name.toLowerCase()} solutions built for performance, security, and long-term maintainability. We don't outsource delivery — the same engineers who scope your project write the code, deploy the infrastructure, and support it in production.`,
    `Our approach to ${name.toLowerCase()} combines deep technical expertise with genuine business understanding. We specialize in ${focusAreas.slice(0, 3).join(", ")}, and more — selecting the right tools for your specific context rather than forcing a one-size-fits-all stack. Every engagement starts with a free consultation where we assess your goals, timeline, and budget to recommend the fastest path to value.`,
    `${shortDescription} TheXbyte has delivered ${name.toLowerCase()} projects across industries including healthcare, logistics, manufacturing, agriculture, retail, and education. Our clients choose us because we combine European-quality engineering standards with competitive rates, transparent communication, and a dedicated team model that ensures continuity and accountability throughout the project lifecycle.`,
    `From initial discovery through deployment and ongoing support, we follow a proven seven-step methodology that keeps projects on schedule and stakeholders informed. Our ${name.toLowerCase()} services include architecture consulting, full-stack development, cloud infrastructure setup, quality assurance, and long-term maintenance — giving you a single trusted partner instead of juggling multiple vendors.`,
    `Ready to discuss your ${name.toLowerCase()} project? Book a free consultation with our engineering team. We'll provide honest technical advice, a realistic timeline, and a transparent proposal — no sales pressure, just engineering clarity.`,
    `Companies in Luxembourg, Belgium, France, Germany, and Switzerland increasingly partner with nearshore engineering teams that offer European timezone alignment without the premium cost of onshore agencies. Tunisia has emerged as a preferred destination — strong engineering education, French and English fluency, and cultural alignment with European business practices. TheXbyte combines these advantages with a founder-led, senior-only team structure.`,
    `When evaluating ${name.toLowerCase()} partners, look beyond hourly rates. Total cost of ownership includes rework from poor architecture, maintenance burden from untested code, and opportunity cost from delayed launches. Our clients report 30–50% lower total project costs compared to previous vendors — not because our rates are the lowest, but because we deliver correctly the first time and build systems that don't require expensive rewrites.`,
    `Digital transformation is no longer optional for businesses competing in European markets. Whether you need to automate manual processes, launch a customer-facing product, or modernize legacy infrastructure, ${name.toLowerCase()} is often the highest-impact investment you can make. The question isn't whether to invest in software — it's whether to choose a partner who treats your project as a long-term engineering commitment or a short-term revenue transaction.`,
  ];

  const technologyOverview = [
    `Technology selection is critical to the long-term success of any ${name.toLowerCase()} project. At TheXbyte, we evaluate your specific requirements — performance targets, integration needs, team capabilities, and growth projections — before recommending a stack. Our engineers have production experience with ${config.technologies.slice(0, 5).join(", ")}, and dozens of other technologies across mobile, web, backend, cloud, and embedded domains.`,
    `We prioritize proven, maintainable technologies over hype. That means choosing frameworks with strong ecosystems, active communities, and clear upgrade paths. For ${name.toLowerCase()} specifically, we often combine ${config.technologies.slice(0, 3).join(" with ")} to deliver solutions that are fast to develop, easy to operate, and straightforward to scale as your user base grows.`,
    `Security and compliance are built into our technology choices from the start. Whether you need GDPR-compliant data handling for European markets, HIPAA-aligned practices for healthcare, or industrial-grade reliability for IoT deployments, our stack decisions reflect your regulatory and operational requirements — not just developer preferences.`,
    `Our technology recommendations always include a migration and exit strategy. We document architecture decisions, avoid proprietary lock-in, and structure codebases so your internal team or another vendor can maintain the system if needed. This engineering honesty is why clients trust us with business-critical systems — we optimize for your long-term success, not our ongoing dependency.`,
  ];

  return {
    slug: config.slug,
    title: config.name,
    metaTitle: config.metaTitle,
    metaDescription: config.metaDescription,
    h1: config.h1,
    overview,
    challenges: config.challenges,
    benefits: config.benefits,
    process: defaultProcess,
    technologies: config.technologies,
    technologyOverview,
    industries: config.industries,
    faq: config.faq,
    relatedServices: config.relatedServices,
    relatedIndustries: config.relatedIndustries,
  };
}

export function countWords(content: ServiceContent): number {
  const text = [
    ...content.overview,
    ...content.challenges.map((c) => c.description),
    ...content.benefits.map((b) => b.description),
    ...content.process.map((p) => p.description),
    ...content.technologyOverview,
    ...content.industries.map((i) => i.description),
    ...content.faq.map((f) => f.answer),
  ].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

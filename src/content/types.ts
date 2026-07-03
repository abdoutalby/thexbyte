export type FAQItem = { question: string; answer: string };

export type ServiceContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  overview: string[];
  challenges: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  technologies: string[];
  technologyOverview: string[];
  industries: { name: string; description: string }[];
  faq: FAQItem[];
  relatedServices: string[];
  relatedIndustries: string[];
};

export type IndustryContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  challenges: { title: string; description: string }[];
  opportunities: { title: string; description: string }[];
  solutions: { title: string; description: string; href?: string }[];
  technologies: string[];
  caseStudySlugs: string[];
  overview: string[];
};

export type CaseStudyContent = {
  slug: string;
  tag: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  overview: string[];
  clientChallenge: string[];
  solution: string[];
  architecture: string;
  architectureDetails: string[];
  technologies: string[];
  timeline: { phase: string; duration: string; description: string }[];
  results: { metric: string; value: string; description: string }[];
  businessImpact: string[];
  industrySlug?: string;
  serviceSlugs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readingTimeMinutes: number;
  featuredImage: string;
  featuredImageAlt: string;
  tags: string[];
  tableOfContents: { id: string; title: string; level: number }[];
  sections: { id: string; heading: string; paragraphs: string[] }[];
  relatedSlugs: string[];
};

export type BreadcrumbItem = { label: string; href?: string };

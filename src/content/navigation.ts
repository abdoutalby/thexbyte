export const mainNav = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Custom Software", href: "/services/custom-software-development" },
      { label: "Flutter Development", href: "/services/flutter-development" },
      { label: "Java Spring Boot", href: "/services/java-spring-development" },
      { label: "AI Development", href: "/services/ai-development" },
      { label: "IoT Development", href: "/services/iot-development" },
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
      { label: "MVP Development", href: "/services/mvp-development" },
      { label: "Dedicated Teams", href: "/services/dedicated-development-team" },
      { label: "Software Maintenance", href: "/services/software-maintenance" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Startups", href: "/industries/startups" },
      { label: "Logistics", href: "/industries/logistics" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Agriculture", href: "/industries/agriculture" },
      { label: "Education", href: "/industries/education" },
      { label: "Retail", href: "/industries/retail" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: mainNav.find((n) => n.label === "Services")!.children!,
  industries: mainNav.find((n) => n.label === "Industries")!.children!,
  company: [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
};

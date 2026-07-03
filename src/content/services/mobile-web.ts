import { buildServiceContent } from "./buildServiceContent";

export const mobileAppDevelopment = buildServiceContent({
  slug: "mobile-app-development",
  name: "Mobile App Development",
  shortDescription:
    "We build native-quality mobile applications for iOS and Android that users love and businesses rely on.",
  metaTitle: "Mobile App Development Services | iOS & Android | TheXbyte",
  metaDescription:
    "Expert mobile app development for startups and enterprises. Native iOS, Android, and cross-platform apps with Flutter. Free consultation. Serving Europe & Tunisia.",
  h1: "Mobile App Development Services for Startups & Enterprises",
  focusAreas: [
    "cross-platform Flutter apps",
    "native iOS and Android development",
    "offline-first field applications",
    "enterprise mobile solutions",
    "app store optimization and deployment",
  ],
  challenges: [
    {
      title: "Fragmented device ecosystem",
      description:
        "Android alone spans thousands of device configurations. We test across representative device matrices and use responsive layouts, adaptive UI patterns, and automated device farm testing to ensure consistent experiences.",
    },
    {
      title: "Offline reliability",
      description:
        "Field workers, logistics drivers, and healthcare professionals need apps that work without connectivity. We implement robust offline-first architectures with intelligent sync, conflict resolution, and queue-based data persistence.",
    },
    {
      title: "App store approval delays",
      description:
        "Rejected submissions cost weeks. Our team knows Apple and Google review guidelines inside out, handles provisioning profiles, privacy manifests, and metadata optimization to get your app approved on the first submission.",
    },
    {
      title: "Performance on low-end devices",
      description:
        "Enterprise users often carry budget Android phones. We optimize rendering pipelines, lazy-load assets, minimize memory footprint, and profile performance on real low-spec devices — not just flagship simulators.",
    },
    {
      title: "Backend integration complexity",
      description:
        "Mobile apps rarely stand alone. We design clean API contracts, implement secure authentication flows (OAuth, biometric, SSO), handle push notifications, and integrate payment gateways, maps, and third-party SDKs seamlessly.",
    },
    {
      title: "Long-term maintenance burden",
      description:
        "OS updates break apps. We establish CI/CD pipelines for mobile, automate regression testing, monitor crash analytics, and provide ongoing maintenance packages so your app stays current with iOS and Android releases.",
    },
  ],
  benefits: [
    {
      title: "Faster time-to-market",
      description:
        "Cross-platform development with Flutter cuts delivery time by up to 40% compared to dual native builds, without sacrificing performance or platform-specific polish.",
    },
    {
      title: "Single codebase, dual platforms",
      description:
        "One Flutter codebase deploys to iOS, Android, and web. Reduced development cost, unified feature releases, and consistent UX across every touchpoint.",
    },
    {
      title: "Enterprise-grade security",
      description:
        "Certificate pinning, encrypted local storage, biometric authentication, and secure API communication protect sensitive business and user data on every device.",
    },
    {
      title: "Scalable architecture",
      description:
        "Clean architecture patterns (BLoC, Riverpod, MVVM) ensure your codebase grows with your product. Modular design makes adding features straightforward without technical debt accumulation.",
    },
    {
      title: "Analytics and growth tools",
      description:
        "Integrated analytics, A/B testing frameworks, push notification campaigns, and in-app messaging to drive user engagement and retention from launch day.",
    },
    {
      title: "Dedicated mobile team",
      description:
        "Senior Flutter and native developers assigned exclusively to your project. No rotating contractors — the same engineers from discovery through App Store launch and beyond.",
    },
  ],
  technologies: [
    "Flutter",
    "Dart",
    "Swift",
    "Kotlin",
    "React Native",
    "Firebase",
    "GraphQL",
    "REST APIs",
    "SQLite",
    "Hive",
    "Push Notifications",
    "App Store Connect",
    "Google Play Console",
  ],
  industries: [
    {
      name: "Healthcare",
      description:
        "HIPAA-aligned mobile apps for patient engagement, telemedicine, clinical workflows, and medical device integration with secure data handling.",
    },
    {
      name: "Logistics & Transportation",
      description:
        "Driver apps with GPS tracking, route optimization, proof-of-delivery capture, and real-time fleet management dashboards.",
    },
    {
      name: "Retail & E-commerce",
      description:
        "Shopping apps with personalized recommendations, secure checkout, loyalty programs, and omnichannel inventory synchronization.",
    },
    {
      name: "Agriculture",
      description:
        "Field apps for crop monitoring, irrigation control, livestock tracking, and cooperative management — designed for rural connectivity challenges.",
    },
    {
      name: "Manufacturing",
      description:
        "Shop floor mobile interfaces for quality inspection, maintenance ticketing, inventory scanning, and production line monitoring.",
    },
    {
      name: "Startups",
      description:
        "MVP mobile apps that validate product-market fit quickly, with architecture designed to scale from 100 to 100,000 users without rewrites.",
    },
  ],
  faq: [
    {
      question: "How much does mobile app development cost?",
      answer:
        "Mobile app development costs vary based on complexity, platform choice, and feature scope. A focused MVP typically ranges from €25,000 to €60,000, while enterprise applications with complex integrations, offline capabilities, and backend systems range from €60,000 to €200,000+. We provide detailed estimates after a free discovery consultation where we scope your requirements, recommend the optimal approach (Flutter vs native), and outline a phased delivery plan.",
    },
    {
      question: "Should I choose Flutter or native development?",
      answer:
        "Flutter is our recommended default for most business applications. It delivers near-native performance, single-codebase efficiency, and excellent UI customization. Choose native Swift/Kotlin when you need deep platform-specific APIs (advanced AR, specific hardware integrations) or when your organization mandates platform-native codebases. During discovery, we assess your requirements and recommend the approach that balances cost, timeline, and technical fit.",
    },
    {
      question: "How long does it take to build a mobile app?",
      answer:
        "An MVP with core features typically takes 8–14 weeks. Full-featured applications with backend integration, admin panels, and complex workflows require 4–8 months. We deliver working software in two-week sprint increments, so you see progress from week one and can launch with a minimum viable feature set while continuing development.",
    },
    {
      question: "Do you handle App Store and Google Play submission?",
      answer:
        "Yes. We manage the entire submission process including developer account setup, provisioning profiles, app signing, store listing optimization, screenshot creation, privacy policy compliance, and review response. Our experience with both stores means fewer rejections and faster approval times.",
    },
    {
      question: "Can you maintain and update an existing mobile app?",
      answer:
        "Absolutely. We take over existing Flutter, React Native, Swift, and Kotlin codebases. Our process starts with a technical audit to assess code quality, dependencies, and architecture. We then propose a maintenance plan covering OS compatibility updates, bug fixes, feature development, and performance optimization with transparent monthly reporting.",
    },
    {
      question: "Do you build apps for both European and Tunisian markets?",
      answer:
        "Yes. We serve clients across Luxembourg, Belgium, France, Germany, Switzerland, and Tunisia. Our team understands European GDPR requirements, multilingual app localization (French, German, English, Arabic), and the specific needs of businesses operating in North African markets. Time zone alignment with European clients ensures smooth collaboration.",
    },
  ],
  relatedServices: [
    "flutter-development",
    "web-development",
    "mvp-development",
    "dedicated-development-team",
  ],
  relatedIndustries: ["startups", "healthcare", "logistics", "retail"],
});

export const webDevelopment = buildServiceContent({
  slug: "web-development",
  name: "Web Application Development",
  shortDescription:
    "We build fast, secure, and scalable web applications using React, Angular, Vue, and modern backend frameworks.",
  metaTitle: "Web Application Development Services | React, Angular, Vue | TheXbyte",
  metaDescription:
    "Custom web application development for SaaS, portals, and enterprise platforms. React, Angular, Vue, Spring Boot, NestJS. Free consultation.",
  h1: "Web Application Development for Modern Businesses",
  focusAreas: [
    "SaaS platform development",
    "customer portals and dashboards",
    "real-time web applications",
    "progressive web apps (PWAs)",
    "API-first architecture",
  ],
  challenges: [
    {
      title: "Legacy system modernization",
      description:
        "Outdated monoliths slow innovation. We migrate legacy applications to modern microservice architectures incrementally — strangling the monolith without disrupting live operations or losing critical business data.",
    },
    {
      title: "Performance at scale",
      description:
        "Web apps that feel fast with 100 users grind to a halt at 10,000. We implement server-side rendering, edge caching, database query optimization, CDN strategies, and load testing to ensure sub-second response times at scale.",
    },
    {
      title: "Complex user permissions",
      description:
        "Enterprise apps need granular role-based access, multi-tenancy, audit trails, and SSO integration. We design authorization models that scale from simple roles to attribute-based access control without security gaps.",
    },
    {
      title: "Real-time data requirements",
      description:
        "Dashboards, chat systems, and collaborative tools need live data. We implement WebSocket architectures, server-sent events, and optimistic UI patterns that deliver instant updates without polling overhead.",
    },
    {
      title: "Cross-browser compatibility",
      description:
        "Your users run Chrome, Safari, Firefox, and Edge across desktop and tablet. We test systematically, use progressive enhancement, and ensure accessibility compliance (WCAG 2.1) across all supported browsers.",
    },
    {
      title: "Security vulnerabilities",
      description:
        "Web apps are prime attack targets. We implement OWASP best practices, input validation, CSRF protection, Content Security Policy headers, regular dependency audits, and penetration testing before launch.",
    },
  ],
  benefits: [
    {
      title: "Modern, responsive UI",
      description:
        "Pixel-perfect interfaces built with React, Angular, or Vue that adapt seamlessly across desktop, tablet, and mobile viewports with consistent user experience.",
    },
    {
      title: "API-first design",
      description:
        "Clean REST or GraphQL APIs that power your web app today and enable mobile apps, partner integrations, and IoT devices tomorrow without backend rewrites.",
    },
    {
      title: "Cloud-native deployment",
      description:
        "Containerized applications deployed on AWS, Azure, or self-hosted infrastructure with auto-scaling, health checks, and zero-downtime deployment pipelines.",
    },
    {
      title: "SEO-optimized architecture",
      description:
        "Server-side rendering and static generation strategies that ensure your web application ranks well in search engines — critical for SaaS customer acquisition.",
    },
    {
      title: "Integrated analytics",
      description:
        "Built-in event tracking, conversion funnels, and admin dashboards that give product teams actionable insights into user behavior and feature adoption.",
    },
    {
      title: "Continuous delivery",
      description:
        "Automated CI/CD pipelines with staging environments, automated testing gates, and rollback capabilities — ship features daily with confidence.",
    },
  ],
  technologies: [
    "React",
    "Angular",
    "Vue.js",
    "TypeScript",
    "Next.js",
    "NestJS",
    "Spring Boot",
    "PostgreSQL",
    "Redis",
    "Docker",
    "GraphQL",
    "WebSockets",
  ],
  industries: [
    {
      name: "SaaS & Startups",
      description:
        "Multi-tenant SaaS platforms with subscription billing, user onboarding, analytics dashboards, and API marketplaces.",
    },
    {
      name: "Healthcare",
      description:
        "Patient portals, clinical dashboards, telemedicine platforms, and lab management systems with compliance-ready audit trails.",
    },
    {
      name: "Education",
      description:
        "Learning management systems, student portals, assessment platforms, and virtual classroom tools with video integration.",
    },
    {
      name: "Logistics",
      description:
        "Fleet management dashboards, warehouse management systems, route planning tools, and customer tracking portals.",
    },
    {
      name: "Manufacturing",
      description:
        "Production monitoring dashboards, quality management systems, supply chain visibility tools, and maintenance scheduling platforms.",
    },
    {
      name: "Retail",
      description:
        "E-commerce platforms, inventory management systems, POS integrations, and customer loyalty program dashboards.",
    },
  ],
  faq: [
    {
      question: "React vs Angular vs Vue — which should I choose?",
      answer:
        "The choice depends on your project context. React offers the largest ecosystem and flexibility, ideal for startups and products needing rapid iteration. Angular provides a comprehensive framework with built-in tooling, excellent for large enterprise teams with strict coding standards. Vue balances simplicity and power, great for mid-size projects and teams new to modern frontend development. We recommend the framework that matches your team's skills, project complexity, and long-term maintenance needs — not industry trends.",
    },
    {
      question: "Can you build a SaaS platform from scratch?",
      answer:
        "Yes. SaaS development is one of our core strengths. We build multi-tenant architectures with subscription management (Stripe integration), role-based access control, usage metering, admin dashboards, API documentation, and onboarding flows. Our SaaS projects typically launch an MVP in 10–16 weeks with a scalable foundation that grows with your customer base.",
    },
    {
      question: "Do you provide ongoing web application maintenance?",
      answer:
        "We offer flexible maintenance packages including security patches, dependency updates, performance monitoring, bug fixes, and feature development. Our SLAs range from next-business-day response to 24/7 critical incident coverage. Most clients transition from initial development to a monthly retainer for continuous improvement.",
    },
    {
      question: "How do you ensure web application security?",
      answer:
        "Security is integrated throughout our development process: threat modeling during architecture, secure coding practices (OWASP Top 10), automated SAST/DAST scanning in CI/CD, dependency vulnerability monitoring, penetration testing before launch, and regular security audits during maintenance. We also implement GDPR-compliant data handling for European clients.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Integration is a core competency. We connect web applications with ERP systems (SAP, Odoo), CRM platforms (Salesforce, HubSpot), payment gateways, identity providers (Azure AD, Okta), IoT platforms, and custom APIs. Our API-first approach ensures clean integration points that don't create tight coupling or maintenance nightmares.",
    },
    {
      question: "What is the typical timeline for a web application project?",
      answer:
        "A focused MVP web application takes 10–16 weeks. Complex enterprise platforms with multiple user roles, integrations, and compliance requirements typically require 5–10 months. We use agile sprints with bi-weekly demos, so you see working software continuously and can adjust priorities based on user feedback and business needs.",
    },
  ],
  relatedServices: [
    "custom-software-development",
    "java-spring-development",
    "cloud-devops",
    "mvp-development",
  ],
  relatedIndustries: ["startups", "healthcare", "education", "retail"],
});

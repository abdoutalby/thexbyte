import { buildServiceContent } from "./buildServiceContent";

export const customSoftwareDevelopment = buildServiceContent({
  slug: "custom-software-development",
  name: "Custom Software Development",
  shortDescription:
    "Tailor-made software solutions designed around your unique business processes, not the other way around.",
  metaTitle: "Custom Software Development Company | Bespoke Solutions | TheXbyte",
  metaDescription:
    "Custom software development for startups and enterprises. Bespoke applications, ERP integrations, and business automation. Free consultation.",
  h1: "Custom Software Development Tailored to Your Business",
  focusAreas: [
    "business process automation",
    "enterprise application development",
    "legacy system modernization",
    "system integration and middleware",
    "workflow management platforms",
  ],
  challenges: [
    { title: "Off-the-shelf software limitations", description: "Generic SaaS products force your business into their workflows. Custom software mirrors your actual processes, eliminating workarounds, duplicate data entry, and the productivity tax of fighting your tools instead of using them." },
    { title: "Siloed data across departments", description: "Sales, operations, finance, and support each use different tools with no shared view. We build unified platforms with single sources of truth, real-time dashboards, and automated data flows between departments." },
    { title: "Manual processes eating productivity", description: "Spreadsheets, email chains, and paper forms don't scale. We automate repetitive workflows — approvals, reporting, scheduling, invoicing — freeing your team for high-value work." },
    { title: "Compliance and audit requirements", description: "Regulated industries need immutable audit trails, role-based access, data retention policies, and exportable compliance reports. We build these capabilities into the architecture, not as afterthoughts." },
    { title: "Scaling beyond current capacity", description: "Growth exposes software bottlenecks. Custom systems designed with scalability in mind handle 10x user growth without performance degradation or costly re-architecture." },
    { title: "Vendor lock-in risks", description: "Proprietary platforms trap you with escalating costs and limited flexibility. We build on open standards with documented APIs, clean codebases, and full IP ownership transferred to you." },
  ],
  benefits: [
    { title: "Perfect process fit", description: "Software that matches your workflows exactly — no compromises, no unused features, no missing capabilities that force manual workarounds." },
    { title: "Competitive advantage", description: "Custom software becomes a strategic asset. Unique capabilities your competitors can't replicate give you measurable market differentiation." },
    { title: "Full IP ownership", description: "You own the source code, documentation, and deployment infrastructure. No licensing fees, no vendor dependency, complete control over your technology asset." },
    { title: "Integration freedom", description: "Connect with any system — ERP, CRM, payment gateways, IoT devices, third-party APIs — through purpose-built integrations designed for reliability." },
    { title: "Lower total cost of ownership", description: "While initial investment exceeds off-the-shelf options, custom software eliminates per-seat licensing, reduces manual labor, and avoids costly workarounds over its 5–10 year lifespan." },
    { title: "Evolutionary development", description: "Start with core features and expand iteratively. Our agile approach lets you validate each module before investing in the next, reducing risk and maximizing ROI." },
  ],
  technologies: ["Java", "Spring Boot", "NestJS", "Node.js", "Angular", "React", "PostgreSQL", "MySQL", "Redis", "Docker", "RabbitMQ", "Elasticsearch"],
  industries: [
    { name: "Manufacturing", description: "Production planning, quality management, supply chain coordination, and shop floor data collection systems tailored to your factory layout." },
    { name: "Healthcare", description: "Clinical workflow systems, patient management platforms, lab information systems, and medical device integration software." },
    { name: "Logistics", description: "Warehouse management, fleet tracking, route optimization, customs documentation, and last-mile delivery coordination platforms." },
    { name: "Financial Services", description: "Portfolio management tools, compliance reporting systems, client onboarding platforms, and risk assessment dashboards." },
    { name: "Professional Services", description: "Project management, time tracking, billing automation, client portals, and resource allocation systems for consulting firms." },
    { name: "Government & Public Sector", description: "Citizen service portals, permit management systems, document workflow automation, and inter-agency data sharing platforms." },
  ],
  faq: [
    { question: "When should I choose custom software over off-the-shelf?", answer: "Choose custom when your processes are genuinely unique and competitive advantage depends on software capabilities no existing product offers. Choose off-the-shelf when standard workflows suffice and speed-to-market matters more than differentiation. We help you make this decision honestly during discovery — sometimes a hybrid approach (custom core + integrated SaaS tools) delivers the best ROI." },
    { question: "How do you manage custom software project scope?", answer: "We use agile methodology with fixed sprint cycles and flexible scope. Each sprint delivers working software you can evaluate. Change requests go through a transparent impact assessment process. This prevents scope creep while allowing your requirements to evolve based on user feedback and market changes." },
    { question: "What happens to the source code after project completion?", answer: "Full intellectual property and source code ownership transfers to you upon final payment. We deliver complete repositories, documentation, deployment scripts, and infrastructure-as-code. You can maintain the system internally, hire another vendor, or continue with our maintenance services." },
    { question: "Can you integrate custom software with our existing ERP?", answer: "Yes. We have experience integrating with SAP, Odoo, Microsoft Dynamics, Sage, and custom ERP systems. We design middleware layers that handle data mapping, synchronization schedules, error recovery, and monitoring — ensuring reliable bidirectional data flow without disrupting either system." },
    { question: "How do you estimate custom software development costs?", answer: "After discovery, we provide a detailed estimate broken down by module, with best-case and worst-case ranges. Typical custom software projects range from €40,000 for focused automation tools to €300,000+ for complex enterprise platforms. We recommend phased delivery to spread investment and validate ROI at each stage." },
    { question: "Do you offer dedicated development teams for long-term projects?", answer: "Yes. Our dedicated team model assigns senior developers exclusively to your project for months or years. This model works best for ongoing product development, large modernization programs, or companies building a permanent software capability without hiring in-house." },
  ],
  relatedServices: ["web-development", "java-spring-development", "dedicated-development-team", "software-maintenance"],
  relatedIndustries: ["manufacturing", "healthcare", "logistics", "startups"],
});

export const flutterDevelopment = buildServiceContent({
  slug: "flutter-development",
  name: "Flutter Development",
  shortDescription:
    "Cross-platform mobile and web applications with a single Flutter codebase — faster delivery, consistent UX, lower cost.",
  metaTitle: "Flutter Development Company | Cross-Platform Apps | TheXbyte",
  metaDescription:
    "Expert Flutter development for iOS, Android, and web. Single codebase, native performance. MVP to enterprise apps. Free consultation.",
  h1: "Professional Flutter Development Services",
  focusAreas: ["cross-platform mobile apps", "Flutter web applications", "Flutter desktop apps", "Flutter + Firebase backends", "Flutter module integration"],
  challenges: [
    { title: "Dual platform development costs", description: "Maintaining separate iOS and Android codebases doubles development time and cost. Flutter's single codebase reduces this by up to 50% while delivering native-quality performance on both platforms." },
    { title: "Inconsistent cross-platform UX", description: "Hybrid frameworks often feel non-native. Flutter renders its own UI components, ensuring pixel-perfect consistency across platforms while still respecting platform conventions for navigation and gestures." },
    { title: "Finding experienced Flutter developers", description: "The Flutter talent pool is growing but still limited compared to native developers. Our team includes Flutter specialists with production experience across healthcare, logistics, agriculture, and fintech projects." },
    { title: "Complex state management", description: "As Flutter apps grow, state management becomes critical. We implement BLoC, Riverpod, or Provider patterns based on app complexity — keeping code testable, predictable, and maintainable at scale." },
    { title: "Native feature requirements", description: "Some features need platform channels to access native APIs — Bluetooth, NFC, background services, platform-specific permissions. Our team bridges Flutter and native code seamlessly when required." },
    { title: "Performance optimization", description: "Poorly structured Flutter apps can jank on complex screens. We optimize widget rebuilds, implement lazy loading, profile with DevTools, and ensure 60fps performance even on mid-range devices." },
  ],
  benefits: [
    { title: "50% faster development", description: "One codebase for iOS, Android, web, and desktop means one team, one sprint cycle, one release — dramatically reducing time-to-market." },
    { title: "Hot reload productivity", description: "Flutter's hot reload lets developers see UI changes instantly, accelerating design iteration and reducing the feedback loop between design and development." },
    { title: "Beautiful, custom UI", description: "Flutter's widget system enables fully custom interfaces without fighting platform constraints. Material and Cupertino widgets provide native feel when needed; custom widgets deliver brand uniqueness." },
    { title: "Google-backed ecosystem", description: "Flutter is backed by Google with regular releases, growing package ecosystem (pub.dev), and long-term roadmap commitment — reducing technology risk for your investment." },
    { title: "Cost-effective scaling", description: "Adding features, fixing bugs, and releasing updates happen once for all platforms. Maintenance costs stay proportional to one codebase, not two or three." },
    { title: "Proven at scale", description: "Companies like Alibaba, BMW, and Google Pay use Flutter in production. We apply the same architectural patterns that make Flutter viable for enterprise-grade applications." },
  ],
  technologies: ["Flutter", "Dart", "Firebase", "Supabase", "GraphQL", "REST APIs", "BLoC", "Riverpod", "Hive", "SQLite", "Platform Channels", "Codemagic CI"],
  industries: [
    { name: "Startups", description: "MVP mobile apps that launch on both app stores simultaneously, validating product-market fit with minimal investment." },
    { name: "Healthcare", description: "Patient apps, clinical tools, and medical device interfaces with offline capabilities and secure data handling." },
    { name: "Agriculture", description: "Field monitoring apps, irrigation controllers, and cooperative management tools designed for outdoor use and intermittent connectivity." },
    { name: "Retail", description: "Shopping apps, loyalty programs, and in-store assistant tools with barcode scanning and payment integration." },
    { name: "Education", description: "Learning apps, quiz platforms, and student engagement tools with gamification and progress tracking." },
    { name: "Logistics", description: "Driver apps, delivery tracking, warehouse scanning tools, and fleet management interfaces." },
  ],
  faq: [
    { question: "Is Flutter suitable for enterprise applications?", answer: "Absolutely. Flutter powers enterprise apps at BMW, Alibaba, and Nubank. Its performance, testability, and single-codebase efficiency make it ideal for business applications. We use clean architecture patterns, comprehensive testing, and CI/CD pipelines that meet enterprise quality standards." },
    { question: "Can Flutter apps access native device features?", answer: "Yes. Flutter supports platform channels for accessing any native API — camera, GPS, Bluetooth, NFC, biometrics, background services, and more. We also leverage the extensive pub.dev ecosystem of pre-built plugins for common integrations." },
    { question: "How does Flutter compare to React Native?", answer: "Flutter offers more consistent UI rendering (no bridge to native components), better performance for animation-heavy apps, and a more cohesive development experience. React Native has a larger JavaScript developer pool. We recommend Flutter for most new projects where UI quality and performance matter; React Native when your team is deeply invested in JavaScript." },
    { question: "Can you migrate our existing app to Flutter?", answer: "Yes. We assess your current codebase, identify migration scope, and typically recommend incremental migration — building new features in Flutter while maintaining existing native code. Full rewrites are justified when the current app has significant technical debt or when cross-platform needs outweigh migration cost." },
    { question: "Do you use Flutter for web applications?", answer: "Flutter web is viable for internal tools, admin dashboards, and progressive web apps where code sharing with mobile is valuable. For public-facing SEO-critical websites, we typically recommend React or Next.js for the web frontend with Flutter for mobile — sharing the same backend APIs." },
    { question: "What Flutter architecture patterns do you use?", answer: "We primarily use BLoC for complex apps requiring strict separation of concerns, Riverpod for mid-complexity apps with reactive state needs, and clean architecture with repository patterns across all projects. The choice depends on team size, app complexity, and testing requirements." },
  ],
  relatedServices: ["mobile-app-development", "mvp-development", "web-development", "dedicated-development-team"],
  relatedIndustries: ["startups", "agriculture", "healthcare", "retail"],
});

export const javaSpringDevelopment = buildServiceContent({
  slug: "java-spring-development",
  name: "Java Spring Boot Development",
  shortDescription:
    "Enterprise-grade backend systems, microservices, and APIs built with Java Spring Boot — reliable, scalable, and maintainable.",
  metaTitle: "Java Spring Boot Development Services | Enterprise Backend | TheXbyte",
  metaDescription:
    "Expert Java Spring Boot development for enterprise APIs, microservices, and SaaS backends. Scalable, secure, production-ready. Free consultation.",
  h1: "Java Spring Boot Development for Enterprise Systems",
  focusAreas: ["RESTful API development", "microservices architecture", "enterprise SaaS backends", "Spring Security implementations", "database-driven applications"],
  challenges: [
    { title: "Monolithic architecture bottlenecks", description: "Monolithic Spring applications become impossible to deploy, test, and scale independently. We decompose monoliths into focused microservices with clear boundaries, event-driven communication, and independent deployment pipelines." },
    { title: "Security compliance requirements", description: "Enterprise applications face strict security requirements — OAuth2, JWT, SAML, role-based access, audit logging. Spring Security provides the foundation; we implement it correctly with defense-in-depth patterns." },
    { title: "Database performance at scale", description: "ORM misuse, missing indexes, and N+1 query problems kill performance. We optimize JPA/Hibernate configurations, implement read replicas, caching layers (Redis), and database sharding strategies for high-throughput systems." },
    { title: "Integration complexity", description: "Enterprise systems connect to dozens of external services — payment gateways, ERP systems, messaging platforms, legacy SOAP services. Spring Integration and Apache Camel provide robust integration patterns we implement daily." },
    { title: "Deployment and DevOps gaps", description: "Spring Boot apps need proper containerization, health checks, metrics endpoints, and CI/CD pipelines. We deliver production-ready deployments with Docker, Kubernetes, and comprehensive observability." },
    { title: "Legacy Java migration", description: "Older Java EE applications running on outdated servers need modernization. We migrate to Spring Boot incrementally, preserving business logic while gaining cloud-native capabilities, improved performance, and reduced infrastructure costs." },
  ],
  benefits: [
    { title: "Battle-tested reliability", description: "Spring Boot powers Netflix, Amazon, and thousands of enterprise systems. Its mature ecosystem, extensive documentation, and massive community reduce technology risk." },
    { title: "Microservices ready", description: "Spring Cloud provides service discovery, configuration management, circuit breakers, and API gateways — everything needed for distributed system architecture out of the box." },
    { title: "Comprehensive security", description: "Spring Security handles authentication, authorization, CSRF protection, and session management with configurable policies that meet enterprise compliance requirements." },
    { title: "Database flexibility", description: "JPA/Hibernate support for PostgreSQL, MySQL, Oracle, and MongoDB. Flyway/Liquibase for schema migrations. Connection pooling and transaction management built in." },
    { title: "Observability built-in", description: "Spring Actuator exposes health checks, metrics, and environment info. Integrates with Prometheus, Grafana, and ELK stack for production monitoring from day one." },
    { title: "Long-term maintainability", description: "Java's strong typing, Spring's convention-over-configuration, and comprehensive testing frameworks (JUnit, Mockito) ensure codebases remain maintainable as teams and requirements evolve." },
  ],
  technologies: ["Java 17+", "Spring Boot", "Spring Security", "Spring Cloud", "Spring Data JPA", "PostgreSQL", "MySQL", "Redis", "RabbitMQ", "Kafka", "Docker", "Kubernetes", "Maven", "Gradle"],
  industries: [
    { name: "Financial Services", description: "Transaction processing systems, portfolio management APIs, compliance reporting backends, and secure payment processing platforms." },
    { name: "Healthcare", description: "HL7/FHIR integration services, clinical data platforms, lab information system backends, and patient data management APIs." },
    { name: "Manufacturing", description: "Production data collection services, quality management APIs, supply chain integration middleware, and MES system backends." },
    { name: "SaaS Platforms", description: "Multi-tenant backend architectures with subscription management, usage metering, API rate limiting, and tenant isolation." },
    { name: "Government", description: "Citizen service APIs, document management backends, inter-agency data exchange services, and secure authentication systems." },
    { name: "Telecommunications", description: "Billing systems, provisioning APIs, network monitoring backends, and customer management platforms." },
  ],
  faq: [
    { question: "Why choose Spring Boot over Node.js or Python?", answer: "Spring Boot excels when you need strong typing, enterprise security, complex transaction management, and long-term maintainability. It's the standard for financial services, healthcare, and large-scale SaaS backends. Node.js suits real-time applications and rapid prototyping; Python suits data science integrations. We recommend Spring Boot when reliability, security, and team scalability are priorities." },
    { question: "Can you build microservices with Spring Boot?", answer: "Microservices are a core specialty. We design service boundaries using domain-driven design, implement inter-service communication (REST, gRPC, message queues), deploy with Docker and Kubernetes, and set up service mesh patterns with Spring Cloud Gateway, Eureka, and Config Server." },
    { question: "How do you handle database migrations in Spring Boot?", answer: "We use Flyway or Liquibase for version-controlled schema migrations integrated into CI/CD pipelines. Every database change is tracked, reversible, and tested in staging before production deployment — eliminating manual schema management and deployment surprises." },
    { question: "Do you provide Spring Boot performance optimization?", answer: "Yes. We profile applications with JProfiler and VisualVM, optimize JPA queries, implement caching strategies, tune JVM parameters, configure connection pools, and implement async processing where appropriate. Performance optimization is included in our development process, not treated as a separate phase." },
    { question: "Can you take over an existing Spring Boot codebase?", answer: "We regularly audit and take over existing Spring Boot projects. Our process includes code quality assessment, dependency audit, security review, test coverage analysis, and a prioritized improvement roadmap. We then provide ongoing development, maintenance, or team augmentation services." },
    { question: "What Java version do you use?", answer: "We develop on Java 17 LTS or Java 21 LTS — both with long-term support and modern language features (records, sealed classes, pattern matching). We assess your deployment environment and recommend the appropriate version during project setup." },
  ],
  relatedServices: ["custom-software-development", "web-development", "cloud-devops", "dedicated-development-team"],
  relatedIndustries: ["manufacturing", "healthcare", "logistics", "startups"],
});

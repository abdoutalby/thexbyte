import type { IndustryContent } from "../types";

const createIndustry = (config: Omit<IndustryContent, "overview"> & { overviewExtra?: string[] }): IndustryContent => ({
  ...config,
  overview: [
    `${config.title} organizations face unique digital challenges that generic software cannot address. TheXbyte combines deep industry understanding with senior engineering expertise to deliver solutions that solve real operational problems — not just technology for technology's sake.`,
    `Serving clients across Luxembourg, Belgium, France, Germany, Switzerland, and Tunisia, we understand the regulatory, cultural, and operational contexts that shape ${config.title.toLowerCase()} software requirements in European and North African markets.`,
    ...(config.overviewExtra ?? []),
  ],
});

export const startups = createIndustry({
  slug: "startups",
  title: "Startups",
  metaTitle: "Software Development for Startups | MVP & Scale | TheXbyte",
  metaDescription: "Software development partner for startups. MVP development, product scaling, dedicated teams. European quality, startup-friendly pricing.",
  h1: "Software Development for Startups",
  overviewExtra: [
    "From pre-seed MVP validation to Series A scaling, we provide the engineering capacity startups need without the overhead of building an in-house team too early. Our startup clients launch faster, iterate smarter, and scale confidently.",
  ],
  challenges: [
    { title: "Limited runway", description: "Every euro spent on development must maximize learning. We prioritize ruthlessly, recommend proven technology stacks, and deliver MVPs that validate hypotheses — not feature-complete products nobody asked for." },
    { title: "Technical co-founder gap", description: "Non-technical founders need a trusted engineering partner who translates business vision into architecture decisions. We act as your technical co-founder — honest about feasibility, timelines, and trade-offs." },
    { title: "Investor expectations", description: "Investors expect working products, not wireframes. We build demo-ready MVPs with the polish and functionality that support fundraising conversations and due diligence processes." },
    { title: "Scaling too early or too late", description: "Premature optimization wastes runway; delayed scaling loses market opportunity. We architect MVPs that scale to 10x users without rewrites, and know exactly when to invest in infrastructure upgrades." },
  ],
  opportunities: [
    { title: "Rapid MVP validation", description: "Launch a working product in 8–14 weeks to test product-market fit with real users before committing full runway to development." },
    { title: "Cross-platform reach", description: "Flutter and modern web frameworks let startups reach iOS, Android, and web users simultaneously — maximizing market coverage per development euro." },
    { title: "AI-powered differentiation", description: "Integrate AI capabilities — recommendation engines, NLP chatbots, predictive analytics — that create competitive moats early in your market journey." },
    { title: "Investor-ready architecture", description: "Clean codebases, documented architecture, and scalable infrastructure that demonstrate technical maturity during investor technical due diligence." },
  ],
  solutions: [
    { title: "MVP Development", description: "Focused product development that launches your core hypothesis to market fast.", href: "/services/mvp-development" },
    { title: "Flutter Mobile Apps", description: "Cross-platform mobile apps that launch on both app stores from a single codebase.", href: "/services/flutter-development" },
    { title: "Dedicated Startup Team", description: "Embedded engineers who grow with your startup from seed to Series A.", href: "/services/dedicated-development-team" },
    { title: "AI Feature Integration", description: "Practical AI capabilities that differentiate your product without AI-for-AI's-sake complexity.", href: "/services/ai-development" },
  ],
  technologies: ["Flutter", "React", "NestJS", "PostgreSQL", "Firebase", "Stripe", "Docker", "AWS"],
  caseStudySlugs: ["reservation-payment-system", "laboratory-operational-platform"],
});

export const logistics = createIndustry({
  slug: "logistics",
  title: "Logistics",
  metaTitle: "Logistics Software Development | Fleet & Warehouse | TheXbyte",
  metaDescription: "Custom logistics software: fleet management, warehouse systems, route optimization, tracking platforms. Free consultation.",
  h1: "Software Development for Logistics Companies",
  overviewExtra: ["Modern logistics demands real-time visibility, automated workflows, and integration across warehouses, fleets, and customer touchpoints."],
  challenges: [
    { title: "Fragmented visibility", description: "Shipments tracked in spreadsheets, phone calls, and disconnected systems create blind spots that delay deliveries and frustrate customers." },
    { title: "Manual route planning", description: "Human route planning can't optimize for traffic, vehicle capacity, delivery windows, and fuel costs simultaneously — especially at scale." },
    { title: "Last-mile complexity", description: "The most expensive and customer-visible logistics segment needs mobile tools, proof-of-delivery, and real-time customer communication." },
    { title: "Legacy TMS limitations", description: "Older transportation management systems lack API connectivity, mobile support, and the flexibility modern logistics operations require." },
  ],
  opportunities: [
    { title: "Real-time fleet tracking", description: "GPS-enabled dashboards with live vehicle positions, ETA predictions, and automated customer notifications." },
    { title: "Warehouse automation", description: "Barcode scanning, inventory management, pick-and-pack optimization, and ERP integration for warehouse operations." },
    { title: "Route optimization AI", description: "Machine learning algorithms that optimize routes dynamically based on traffic, capacity, and delivery priorities." },
    { title: "Customer self-service portals", description: "Tracking portals, delivery scheduling, and automated notifications that reduce support calls and improve satisfaction." },
  ],
  solutions: [
    { title: "Custom Logistics Platforms", href: "/services/custom-software-development", description: "Tailor-made TMS, WMS, and fleet management systems." },
    { title: "Mobile Driver Apps", href: "/services/mobile-app-development", description: "Field apps for drivers with navigation, scanning, and proof-of-delivery." },
    { title: "IoT Fleet Tracking", href: "/services/iot-development", description: "Telematics, cold chain monitoring, and asset tracking via connected devices." },
    { title: "Cloud Infrastructure", href: "/services/cloud-devops", description: "Scalable backend infrastructure for high-volume logistics data processing." },
  ],
  technologies: ["Flutter", "NestJS", "PostgreSQL", "Redis", "MQTT", "Google Maps API", "Docker", "React"],
  caseStudySlugs: ["embedded-telemetry-systems", "reservation-payment-system"],
});

export const manufacturing = createIndustry({
  slug: "manufacturing",
  title: "Manufacturing",
  metaTitle: "Manufacturing Software Development | Industry 4.0 | TheXbyte",
  metaDescription: "Manufacturing software: OEE dashboards, predictive maintenance, IoT monitoring, MES systems. Industry 4.0 solutions.",
  h1: "Software Development for Manufacturing",
  overviewExtra: ["Industry 4.0 transforms manufacturing through connected machines, real-time data, and intelligent automation — we build the software layer that makes it work."],
  challenges: [
    { title: "Production blind spots", description: "Without live OEE data, managers discover efficiency problems at end-of-shift — too late to intervene and too late to identify root causes." },
    { title: "Unplanned downtime", description: "Equipment failures without predictive maintenance cost thousands per hour. Reactive maintenance is expensive; preventive without data is wasteful." },
    { title: "Paper-based quality control", description: "Manual quality inspection records are error-prone, slow to analyze, and impossible to trace when defects appear in shipped products." },
    { title: "OT/IT integration gaps", description: "Production floor systems (PLCs, SCADA) and business systems (ERP, MES) operate in silos — preventing the data-driven decisions Industry 4.0 promises." },
  ],
  opportunities: [
    { title: "Real-time OEE dashboards", description: "Live production monitoring with per-line availability, performance, and quality metrics accessible from any device." },
    { title: "Predictive maintenance", description: "IoT sensors and ML models that predict equipment failures before they cause downtime — scheduling maintenance during planned stops." },
    { title: "Digital quality management", description: "Mobile inspection apps, automated SPC charts, defect tracking, and traceability from raw material to finished product." },
    { title: "Supply chain integration", description: "Connected inventory, production planning, and supplier coordination that reduces stockouts and excess inventory simultaneously." },
  ],
  solutions: [
    { title: "Industrial IoT Platforms", href: "/services/iot-development", description: "Sensor networks, MQTT pipelines, and real-time monitoring dashboards." },
    { title: "Custom MES Systems", href: "/services/custom-software-development", description: "Manufacturing execution systems tailored to your production processes." },
    { title: "AI Predictive Maintenance", href: "/services/ai-development", description: "Machine learning models that predict equipment failures from sensor data." },
    { title: "Real-time Dashboards", href: "/services/web-development", description: "Web-based production monitoring with PLC/OPC-UA integration." },
  ],
  technologies: ["OPC-UA", "Modbus", "MQTT", "ESP32", "NestJS", "Redis", "React", "InfluxDB", "TimescaleDB"],
  caseStudySlugs: ["industrial-monitoring-dashboard", "embedded-telemetry-systems"],
});

export const healthcare = createIndustry({
  slug: "healthcare",
  title: "Healthcare",
  metaTitle: "Healthcare Software Development | HIPAA & GDPR | TheXbyte",
  metaDescription: "Healthcare software development: patient platforms, lab systems, telemedicine, medical IoT. GDPR-compliant. Free consultation.",
  h1: "Software Development for Healthcare",
  overviewExtra: ["Healthcare software demands uncompromising security, regulatory compliance, and reliability — we build systems that meet these requirements while improving patient outcomes and operational efficiency."],
  challenges: [
    { title: "Regulatory compliance", description: "GDPR, HIPAA, and local healthcare regulations impose strict requirements on data handling, access control, audit trails, and patient consent management." },
    { title: "Legacy system integration", description: "HL7, FHIR, DICOM, and proprietary hospital systems require careful integration architecture that maintains data integrity across heterogeneous environments." },
    { title: "Clinical workflow complexity", description: "Healthcare workflows involve multiple roles, approval chains, and time-critical processes that generic software cannot accommodate." },
    { title: "Data security sensitivity", description: "Patient health data is among the most sensitive information categories — requiring encryption, access logging, and breach detection at every layer." },
  ],
  opportunities: [
    { title: "Digital patient engagement", description: "Patient portals, appointment scheduling, telemedicine platforms, and mobile health apps that improve access and satisfaction." },
    { title: "Lab automation", description: "Sample tracking, barcode workflows, result reporting, and accreditation-ready audit trails that eliminate paper-based lab operations." },
    { title: "Medical device integration", description: "Software that connects medical devices, wearables, and monitoring equipment to clinical workflows and EHR systems." },
    { title: "AI-assisted diagnostics", description: "Machine learning tools that assist clinical decision-making while maintaining human oversight and regulatory compliance." },
  ],
  solutions: [
    { title: "Healthcare SaaS Platforms", href: "/services/custom-software-development", description: "Clinical workflow systems, lab platforms, and patient management software." },
    { title: "Medical IoT", href: "/services/iot-development", description: "Connected medical devices, remote patient monitoring, and telemetry platforms." },
    { title: "Secure Backend Systems", href: "/services/java-spring-development", description: "Enterprise-grade APIs with Spring Security for healthcare data processing." },
    { title: "Mobile Health Apps", href: "/services/mobile-app-development", description: "Patient and clinician mobile applications with offline capabilities." },
  ],
  technologies: ["Spring Boot", "Angular", "Flutter", "PostgreSQL", "HL7/FHIR", "Docker", "Redis", "Python"],
  caseStudySlugs: ["laboratory-operational-platform", "remote-water-quality-monitoring"],
});

export const agriculture = createIndustry({
  slug: "agriculture",
  title: "Agriculture",
  metaTitle: "AgriTech Software Development | Smart Farming | TheXbyte",
  metaDescription: "AgriTech software: smart irrigation, crop monitoring, IoT sensors, farm management platforms. Free consultation.",
  h1: "Software Development for Agriculture & AgriTech",
  overviewExtra: ["Smart farming technology transforms agricultural productivity through IoT sensors, data-driven decisions, and automated control systems — we build the full stack from soil sensor to farm manager dashboard."],
  challenges: [
    { title: "Connectivity in rural areas", description: "Farm locations often lack reliable internet. Solutions must work offline, sync when connected, and use LoRa or cellular for remote sensor communication." },
    { title: "Water and resource waste", description: "Fixed-schedule irrigation overwaters some zones and underwater others — wasting water, energy, and crop yield potential." },
    { title: "Manual monitoring at scale", description: "Walking fields to check soil moisture, crop health, and equipment status doesn't scale beyond small plots." },
    { title: "Cooperative coordination", description: "Agricultural cooperatives need shared platforms for resource allocation, member management, and collective decision-making." },
  ],
  opportunities: [
    { title: "Smart irrigation systems", description: "Soil moisture-driven automated irrigation that reduces water consumption by 30–40% while improving crop yields." },
    { title: "Crop monitoring platforms", description: "Drone imagery, satellite data, and field sensors combined with AI for disease detection, yield prediction, and harvest optimization." },
    { title: "Farm management SaaS", description: "Digital platforms for crop planning, inventory tracking, equipment maintenance, and financial reporting." },
    { title: "Supply chain traceability", description: "Farm-to-table tracking that meets consumer transparency demands and export certification requirements." },
  ],
  solutions: [
    { title: "AgriTech IoT Systems", href: "/services/iot-development", description: "Sensor networks, irrigation controllers, and environmental monitoring platforms." },
    { title: "Farm Mobile Apps", href: "/services/flutter-development", description: "Field apps for monitoring, control, and cooperative management." },
    { title: "AI Crop Analytics", href: "/services/ai-development", description: "Disease detection, yield prediction, and resource optimization models." },
    { title: "Cloud Data Platforms", href: "/services/cloud-devops", description: "Scalable infrastructure for agricultural data collection and analysis." },
  ],
  technologies: ["ESP32", "LoRa", "MQTT", "Flutter", "NestJS", "PostgreSQL", "Python", "InfluxDB"],
  caseStudySlugs: ["smart-irrigation-automation", "remote-water-quality-monitoring"],
});

export const education = createIndustry({
  slug: "education",
  title: "Education",
  metaTitle: "EdTech Software Development | LMS & Learning Platforms | TheXbyte",
  metaDescription: "EdTech software development: LMS platforms, student portals, assessment tools, virtual classrooms. Free consultation.",
  h1: "Software Development for Education & EdTech",
  overviewExtra: ["Educational institutions and EdTech startups need engaging, accessible, and scalable platforms that improve learning outcomes while reducing administrative burden."],
  challenges: [
    { title: "Engagement and retention", description: "Online learning platforms struggle with student engagement. Poor UX, lack of interactivity, and missing progress feedback drive dropout rates." },
    { title: "Administrative overhead", description: "Enrollment, scheduling, grading, and reporting consume educator time that should focus on teaching and student support." },
    { title: "Accessibility requirements", description: "Educational platforms must serve diverse learners including those with disabilities — requiring WCAG compliance and multi-format content delivery." },
    { title: "Scalable content delivery", description: "Video lectures, interactive exercises, and assessment tools must perform reliably for thousands of concurrent users during peak enrollment periods." },
  ],
  opportunities: [
    { title: "Learning management systems", description: "Custom LMS platforms with course creation, progress tracking, assessment, and certification — tailored to your pedagogical approach." },
    { title: "Student engagement tools", description: "Gamification, interactive quizzes, peer collaboration features, and mobile learning apps that improve completion rates." },
    { title: "Administrative automation", description: "Enrollment workflows, scheduling optimization, grade management, and reporting dashboards that reduce administrative workload." },
    { title: "Virtual classroom platforms", description: "Video conferencing integration, whiteboard tools, breakout rooms, and session recording for hybrid and remote learning." },
  ],
  solutions: [
    { title: "EdTech Platform Development", href: "/services/web-development", description: "Web-based learning platforms with modern, accessible UI." },
    { title: "Mobile Learning Apps", href: "/services/mobile-app-development", description: "Student and teacher mobile apps for on-the-go learning." },
    { title: "Custom LMS", href: "/services/custom-software-development", description: "Tailor-made learning management systems for institutions." },
    { title: "MVP for EdTech Startups", href: "/services/mvp-development", description: "Fast-launch educational products for market validation." },
  ],
  technologies: ["React", "Angular", "Flutter", "NestJS", "PostgreSQL", "WebRTC", "AWS", "Redis"],
  caseStudySlugs: ["laboratory-operational-platform", "reservation-payment-system"],
});

export const retail = createIndustry({
  slug: "retail",
  title: "Retail",
  metaTitle: "Retail Software Development | E-commerce & POS | TheXbyte",
  metaDescription: "Retail software development: e-commerce platforms, inventory systems, loyalty apps, omnichannel solutions. Free consultation.",
  h1: "Software Development for Retail & E-commerce",
  overviewExtra: ["Retail success depends on seamless customer experiences across online and physical channels — backed by inventory accuracy, payment reliability, and data-driven merchandising."],
  challenges: [
    { title: "Omnichannel complexity", description: "Customers expect consistent experiences across web, mobile, and in-store — requiring synchronized inventory, pricing, and customer data." },
    { title: "Inventory inaccuracy", description: "Overselling, stockouts, and manual inventory counts erode margins and customer trust — especially during peak seasons." },
    { title: "Customer retention", description: "Acquiring customers is expensive; retaining them requires personalized experiences, loyalty programs, and seamless reordering." },
    { title: "Payment and checkout friction", description: "Cart abandonment rates exceed 70% industry-wide. Slow checkout, limited payment options, and poor mobile UX are primary drivers." },
  ],
  opportunities: [
    { title: "E-commerce platforms", description: "Custom online stores with personalized recommendations, flexible checkout, and integrated payment processing." },
    { title: "Loyalty and engagement apps", description: "Mobile apps with rewards programs, push notification campaigns, and personalized offers that drive repeat purchases." },
    { title: "Inventory management systems", description: "Real-time inventory across locations with automated reordering, supplier integration, and demand forecasting." },
    { title: "POS and in-store technology", description: "Modern point-of-sale systems integrated with e-commerce backends for unified customer and inventory data." },
  ],
  solutions: [
    { title: "E-commerce Development", href: "/services/web-development", description: "Custom online stores and marketplace platforms." },
    { title: "Retail Mobile Apps", href: "/services/flutter-development", description: "Shopping, loyalty, and in-store assistant applications." },
    { title: "Retail SaaS Platforms", href: "/services/custom-software-development", description: "Inventory, POS, and customer management systems." },
    { title: "AI Recommendations", href: "/services/ai-development", description: "Personalization engines and demand forecasting models." },
  ],
  technologies: ["React", "Flutter", "NestJS", "Stripe", "PostgreSQL", "Redis", "Elasticsearch", "AWS"],
  caseStudySlugs: ["reservation-payment-system", "reservation-payment-system"],
});

export const allIndustries: IndustryContent[] = [
  startups, logistics, manufacturing, healthcare, agriculture, education, retail,
];

export const industriesBySlug = Object.fromEntries(
  allIndustries.map((i) => [i.slug, i])
) as Record<string, IndustryContent>;

export function getIndustry(slug: string): IndustryContent | undefined {
  return industriesBySlug[slug];
}

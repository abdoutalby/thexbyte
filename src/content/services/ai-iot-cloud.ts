import { buildServiceContent } from "./buildServiceContent";

export const aiDevelopment = buildServiceContent({
  slug: "ai-development",
  name: "AI Development",
  shortDescription:
    "Practical AI solutions — machine learning models, NLP, computer vision, and intelligent automation integrated into your products.",
  metaTitle: "AI Development Services | Machine Learning & NLP | TheXbyte",
  metaDescription:
    "Custom AI development: ML models, NLP, computer vision, predictive analytics. Production-ready AI integrated into your software. Free consultation.",
  h1: "AI Development Services for Business Applications",
  focusAreas: ["machine learning model development", "natural language processing", "computer vision systems", "predictive analytics platforms", "AI-powered automation"],
  challenges: [
    { title: "AI hype vs practical value", description: "Many AI projects fail because they chase technology trends instead of solving real business problems. We start with measurable outcomes — cost reduction, accuracy improvement, time savings — and choose AI only when it's the right tool." },
    { title: "Data quality and availability", description: "ML models are only as good as their training data. We assess data readiness, implement cleaning pipelines, handle missing values and bias, and design data collection strategies when existing datasets are insufficient." },
    { title: "Production deployment complexity", description: "A Jupyter notebook prototype isn't a production system. We build ML pipelines with model versioning, A/B testing, monitoring for data drift, automated retraining, and fallback mechanisms when models underperform." },
    { title: "Integration with existing systems", description: "AI capabilities must integrate seamlessly with your current software — CRM, ERP, mobile apps, IoT platforms. We design API layers and event-driven architectures that embed intelligence without disrupting existing workflows." },
    { title: "Explainability and compliance", description: "Regulated industries require explainable AI decisions. We implement interpretable models, audit trails for AI-driven decisions, and documentation that satisfies compliance requirements in healthcare, finance, and legal sectors." },
    { title: "Cost-effective inference", description: "Running large models in production is expensive. We optimize model size, implement edge inference where appropriate, use efficient serving infrastructure, and design tiered processing that balances accuracy with cost." },
  ],
  benefits: [
    { title: "Problem-first approach", description: "We identify where AI delivers measurable ROI before writing code. No AI for AI's sake — every model targets a specific business outcome with defined success metrics." },
    { title: "End-to-end delivery", description: "From data pipeline to model training to API deployment to monitoring — we handle the complete ML lifecycle, not just the model development phase." },
    { title: "Production-grade infrastructure", description: "Model serving with auto-scaling, GPU optimization, batch and real-time inference pipelines, and comprehensive monitoring for accuracy degradation and data drift." },
    { title: "Hybrid AI architecture", description: "Combine rule-based systems with ML models, use LLMs for natural language tasks with traditional ML for structured predictions — the right tool for each sub-problem." },
    { title: "Continuous improvement", description: "Models improve over time with new data. We implement feedback loops, automated retraining pipelines, and performance dashboards that track model accuracy against business KPIs." },
    { title: "Ethical AI practices", description: "Bias detection, fairness testing, privacy-preserving techniques, and transparent decision documentation — responsible AI that protects your users and your reputation." },
  ],
  technologies: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "OpenAI API", "Hugging Face", "LangChain", "FastAPI", "MLflow", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
  industries: [
    { name: "Healthcare", description: "Diagnostic assistance, medical image analysis, patient risk scoring, clinical document processing, and drug interaction prediction systems." },
    { name: "Manufacturing", description: "Predictive maintenance, quality defect detection via computer vision, production optimization, and supply chain demand forecasting." },
    { name: "Retail", description: "Recommendation engines, demand forecasting, customer sentiment analysis, visual search, and dynamic pricing optimization." },
    { name: "Agriculture", description: "Crop disease detection from drone imagery, yield prediction models, soil analysis automation, and irrigation optimization algorithms." },
    { name: "Financial Services", description: "Fraud detection, credit risk scoring, document classification, algorithmic trading signals, and customer churn prediction." },
    { name: "Logistics", description: "Route optimization, delivery time prediction, warehouse automation vision systems, and demand forecasting for inventory management." },
  ],
  faq: [
    { question: "Do I need a large dataset to start an AI project?", answer: "Not necessarily. Transfer learning, pre-trained models, and few-shot learning techniques can deliver results with limited data. We assess your data during discovery and recommend approaches — from fine-tuning existing models to designing data collection strategies — that match your starting point." },
    { question: "How do you integrate AI into existing software?", answer: "We design AI as microservices accessible via REST APIs or message queues. Your existing application calls AI endpoints without architectural changes. For real-time needs, we implement edge inference or streaming pipelines. The integration layer handles authentication, rate limiting, and fallback to non-AI logic when models are unavailable." },
    { question: "What is the typical timeline for an AI project?", answer: "A focused AI feature (document classification, recommendation engine) takes 6–10 weeks including data preparation. Complex computer vision or NLP systems require 3–6 months. We deliver a working prototype in the first sprint so you can evaluate AI feasibility before committing to full development." },
    { question: "Can you use ChatGPT or other LLMs in our product?", answer: "Yes. We integrate OpenAI, Anthropic, and open-source LLMs via API for chatbots, document summarization, code generation, and natural language interfaces. We implement prompt engineering, RAG (Retrieval-Augmented Generation) for domain-specific knowledge, and guardrails for safe, accurate responses." },
    { question: "How do you ensure AI model accuracy in production?", answer: "We establish baseline metrics during development, implement A/B testing for model comparisons, monitor prediction distributions for data drift, set up automated alerts for accuracy degradation, and maintain retraining pipelines triggered by performance thresholds or scheduled intervals." },
    { question: "Is AI development cost-effective for SMEs?", answer: "Modern AI tooling has dramatically reduced costs. Pre-trained models, cloud ML services, and efficient fine-tuning make AI accessible for SMEs. We scope AI projects to deliver ROI within 6–12 months — starting with high-impact, low-complexity use cases and expanding based on measured results." },
  ],
  relatedServices: ["custom-software-development", "iot-development", "cloud-devops", "mvp-development"],
  relatedIndustries: ["healthcare", "manufacturing", "agriculture", "retail"],
});

export const iotDevelopment = buildServiceContent({
  slug: "iot-development",
  name: "IoT Development",
  shortDescription:
    "End-to-end IoT solutions — from ESP32 firmware to MQTT brokers, cloud pipelines, and real-time dashboards.",
  metaTitle: "IoT Development Services | ESP32, MQTT, Embedded | TheXbyte",
  metaDescription:
    "Full-stack IoT development: firmware, gateways, MQTT, cloud pipelines, dashboards. Industrial IoT & smart devices. Free consultation.",
  h1: "IoT Development — From Sensor to Dashboard",
  focusAreas: ["ESP32 and STM32 firmware", "MQTT broker infrastructure", "IoT cloud pipelines", "real-time monitoring dashboards", "edge computing solutions"],
  challenges: [
    { title: "Connectivity in harsh environments", description: "Industrial and agricultural IoT deployments face unreliable networks, extreme temperatures, and power constraints. We design devices with offline buffering, adaptive transmission rates, and low-power modes that maintain data integrity." },
    { title: "Scaling from prototype to fleet", description: "A working prototype with 5 devices fails differently at 5,000. We architect MQTT broker clusters, device provisioning at scale, OTA firmware updates, and fleet management from the first deployment." },
    { title: "Security at the edge", description: "IoT devices are attack vectors. We implement TLS encryption, certificate-based authentication, secure boot, encrypted firmware updates, and network segmentation that protects both devices and cloud infrastructure." },
    { title: "Data pipeline reliability", description: "Sensor data must flow reliably from device to dashboard — through brokers, stream processors, time-series databases, and alert engines. We build fault-tolerant pipelines with dead letter queues, retry logic, and data validation at every stage." },
    { title: "Hardware-software integration", description: "IoT projects fail at the boundary between firmware and cloud. Our multidisciplinary team handles PCB design review, sensor calibration, protocol selection, and cloud integration in one cohesive team." },
    { title: "Maintenance across distributed fleets", description: "Devices in the field need remote diagnostics, firmware updates, configuration changes, and health monitoring. We build device management platforms that reduce truck rolls and enable proactive maintenance." },
  ],
  benefits: [
    { title: "Full-stack IoT capability", description: "Firmware, backend, frontend, and infrastructure — one team handles the entire stack from sensor reading to executive dashboard." },
    { title: "Production-proven architectures", description: "MQTT broker clusters, time-series storage, stream processing, and alert engines we've deployed and operated in industrial, agricultural, and environmental monitoring projects." },
    { title: "Real-time visibility", description: "Live dashboards with threshold alerts, historical trending, predictive analytics, and mobile notifications — turning raw sensor data into actionable operational intelligence." },
    { title: "Edge intelligence", description: "Process data at the edge to reduce bandwidth, enable faster response times, and maintain operation during connectivity outages. Local decision-making for time-critical control loops." },
    { title: "Rapid prototyping", description: "Working IoT prototypes in 2–4 weeks using ESP32 dev boards, off-the-shelf sensors, and cloud infrastructure — validate concepts before custom hardware investment." },
    { title: "Long-term fleet support", description: "OTA updates, remote diagnostics, device health monitoring, and SLA-backed support for production IoT deployments running 24/7 in the field." },
  ],
  technologies: ["ESP32", "STM32", "MQTT", "LoRa", "Modbus", "OPC-UA", "InfluxDB", "TimescaleDB", "Spring Boot", "NestJS", "Angular", "React", "Docker", "Node-RED"],
  industries: [
    { name: "Agriculture", description: "Soil moisture monitoring, smart irrigation, weather stations, livestock tracking, and greenhouse automation systems." },
    { name: "Manufacturing", description: "Machine monitoring, predictive maintenance sensors, energy consumption tracking, and production line OEE measurement." },
    { name: "Environmental", description: "Water quality monitoring, air pollution sensors, waste management tracking, and environmental compliance reporting." },
    { name: "Smart Buildings", description: "HVAC optimization, occupancy sensing, energy management, and facility monitoring across multi-site portfolios." },
    { name: "Healthcare", description: "Medical device telemetry, cold chain monitoring, patient wearable integration, and hospital equipment tracking." },
    { name: "Logistics", description: "Cold chain tracking, asset location monitoring, container condition sensing, and fleet telematics integration." },
  ],
  faq: [
    { question: "What IoT platforms and protocols do you support?", answer: "We primarily work with MQTT (Mosquitto, EMQX, HiveMQ) for device communication, Modbus and OPC-UA for industrial integration, LoRa for long-range low-power applications, and HTTP/REST for cloud API integration. We select protocols based on your latency, bandwidth, power, and range requirements." },
    { question: "Can you develop custom firmware for ESP32?", answer: "ESP32 firmware is a core competency. We develop custom firmware using ESP-IDF and Arduino frameworks for sensor reading, wireless communication, power management, OTA updates, and local processing. We've deployed ESP32-based devices in environmental monitoring, agriculture, and industrial telemetry projects." },
    { question: "How do you handle IoT data storage?", answer: "Time-series data goes to InfluxDB or TimescaleDB optimized for sensor data patterns. Metadata and configuration use PostgreSQL. Real-time streams use Redis. We design retention policies, downsampling strategies, and archival pipelines that balance query performance with storage costs." },
    { question: "What is the typical cost of an IoT project?", answer: "IoT pilot projects with 5–20 devices typically range from €30,000 to €80,000 including firmware, cloud infrastructure, and dashboards. Production deployments with custom hardware, fleet management, and scaling infrastructure range from €80,000 to €300,000+. We recommend starting with a pilot to validate architecture before scaling investment." },
    { question: "Do you provide IoT cloud infrastructure management?", answer: "Yes. We deploy and manage MQTT brokers, stream processors, databases, and monitoring infrastructure on AWS, self-hosted Linux servers, or hybrid configurations. Our DevOps team handles scaling, backups, security patches, and 24/7 monitoring for production IoT platforms." },
    { question: "Can you integrate IoT data with our existing business systems?", answer: "Integration is essential for IoT ROI. We connect sensor data pipelines with ERP systems, maintenance management platforms, BI tools, and custom business applications through REST APIs, webhooks, and message queue integrations." },
  ],
  relatedServices: ["cloud-devops", "ai-development", "custom-software-development", "software-maintenance"],
  relatedIndustries: ["agriculture", "manufacturing", "logistics", "healthcare"],
});

export const cloudDevops = buildServiceContent({
  slug: "cloud-devops",
  name: "Cloud & DevOps",
  shortDescription:
    "Cloud infrastructure, CI/CD pipelines, container orchestration, and DevOps practices that keep your systems running reliably.",
  metaTitle: "Cloud & DevOps Services | AWS, Docker, Kubernetes | TheXbyte",
  metaDescription:
    "Cloud infrastructure, CI/CD, Docker, Kubernetes, AWS. Reliable deployments, monitoring, and scaling. Free consultation.",
  h1: "Cloud & DevOps Engineering Services",
  focusAreas: ["AWS cloud architecture", "Docker containerization", "Kubernetes orchestration", "CI/CD pipeline design", "infrastructure monitoring and observability"],
  challenges: [
    { title: "Manual deployment risks", description: "Manual deployments cause downtime, configuration drift, and human error. We implement automated CI/CD pipelines with staging environments, automated tests, and one-click rollbacks that eliminate deployment anxiety." },
    { title: "Infrastructure cost overruns", description: "Cloud bills spiral without proper architecture. We right-size instances, implement auto-scaling policies, use spot instances where appropriate, and set up cost monitoring alerts that prevent budget surprises." },
    { title: "Scaling under load", description: "Traffic spikes crash applications without proper scaling architecture. We design horizontal scaling with load balancers, auto-scaling groups, database read replicas, and CDN caching that handle 10x traffic spikes gracefully." },
    { title: "Security misconfigurations", description: "Cloud misconfigurations are the leading cause of data breaches. We implement least-privilege IAM policies, network segmentation, encryption at rest and in transit, secrets management, and regular security audits." },
    { title: "Monitoring blind spots", description: "You can't fix what you can't see. We deploy comprehensive observability — metrics (Prometheus/Grafana), logs (ELK/Loki), traces (Jaeger), and alerting (PagerDuty/Slack) that surface problems before users notice." },
    { title: "Disaster recovery gaps", description: "Without tested backup and recovery procedures, a single failure can destroy your business. We implement automated backups, multi-region redundancy, and regularly tested disaster recovery runbooks." },
  ],
  benefits: [
    { title: "99.9%+ uptime", description: "High-availability architectures with health checks, automatic failover, and redundancy across availability zones — keeping your applications accessible when it matters most." },
    { title: "10x faster deployments", description: "Automated CI/CD pipelines deploy code from commit to production in minutes, not days. Feature flags and canary releases minimize risk during rollouts." },
    { title: "Cost optimization", description: "Right-sized infrastructure, reserved instances, spot pricing, and auto-scaling policies that typically reduce cloud costs by 30–50% compared to unoptimized setups." },
    { title: "Infrastructure as Code", description: "Terraform and CloudFormation templates make infrastructure reproducible, version-controlled, and auditable. Spin up staging environments identical to production in minutes." },
    { title: "Security by default", description: "Security integrated into infrastructure design — not bolted on afterward. VPC isolation, WAF rules, secrets rotation, and compliance-ready configurations from day one." },
    { title: "24/7 monitoring", description: "Proactive alerting, on-call rotation setup, incident response runbooks, and post-mortem processes that minimize downtime and accelerate recovery." },
  ],
  technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "Nginx", "Prometheus", "Grafana", "ELK Stack", "Redis", "PostgreSQL", "Tailscale"],
  industries: [
    { name: "SaaS", description: "Multi-tenant cloud architectures with auto-scaling, tenant isolation, usage metering infrastructure, and global CDN deployment." },
    { name: "IoT", description: "MQTT broker clusters, time-series database infrastructure, stream processing pipelines, and device fleet management platforms." },
    { name: "E-commerce", description: "High-traffic web infrastructure, payment processing environments, inventory sync pipelines, and peak-load scaling for seasonal traffic." },
    { name: "Healthcare", description: "HIPAA-aligned cloud environments, encrypted data storage, audit logging infrastructure, and compliant backup systems." },
    { name: "Financial Services", description: "Secure transaction processing environments, PCI-compliant infrastructure, disaster recovery systems, and regulatory audit trails." },
    { name: "Manufacturing", description: "Edge-to-cloud pipelines, industrial data ingestion infrastructure, real-time processing platforms, and OT/IT network segmentation." },
  ],
  faq: [
    { question: "AWS vs self-hosted — which do you recommend?", answer: "AWS suits most SaaS and web applications needing global reach, managed services, and elastic scaling. Self-hosted Linux servers suit IoT platforms, data-sovereignty requirements, and cost-predictable workloads. We often recommend hybrid approaches — AWS for web frontends and self-hosted for data-intensive backend processing." },
    { question: "Can you migrate our application to the cloud?", answer: "Yes. We assess your current infrastructure, design a migration plan (lift-and-shift, re-platform, or re-architect), execute with minimal downtime, and validate performance in the new environment. Migration projects typically take 4–12 weeks depending on complexity." },
    { question: "Do you provide ongoing DevOps support?", answer: "We offer managed DevOps packages covering infrastructure monitoring, security patching, cost optimization, scaling adjustments, incident response, and CI/CD pipeline maintenance. SLAs range from business-hours support to 24/7 critical incident coverage." },
    { question: "How do you implement CI/CD pipelines?", answer: "We use GitHub Actions or Jenkins with automated testing gates, staging deployments, approval workflows for production, and automated rollback on health check failures. Every commit triggers linting, unit tests, integration tests, and security scanning before deployment." },
    { question: "Can you set up Kubernetes for our team?", answer: "We deploy and configure Kubernetes clusters (EKS, self-managed, or k3s for edge) with ingress controllers, cert-manager, monitoring stack, and GitOps workflows (ArgoCD/Flux). We also provide team training and runbooks for day-to-day cluster operations." },
    { question: "What monitoring tools do you implement?", answer: "Our standard observability stack includes Prometheus for metrics, Grafana for dashboards, Loki or ELK for logs, and Alertmanager for notifications. We customize dashboards for your specific KPIs and set up escalation policies that match your team's response capabilities." },
  ],
  relatedServices: ["java-spring-development", "custom-software-development", "iot-development", "software-maintenance"],
  relatedIndustries: ["startups", "manufacturing", "healthcare", "logistics"],
});

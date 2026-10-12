// Typed content for all Service Detail pages.
// Extracted and updated according to Document 3.pdf specifications.

export interface ServiceOffering {
    icon?: string;
    image?: string;
    title: string;
    description: string;
}

export interface WhyChooseUsItem {
    image: string;
    title: string;
    description: string;
}

export interface ProcessStep {
    number: string;
    title: string;
    description: string;
    angle: number;
}

export interface IntroPhoto {
    src: string;
    alt: string;
}

export interface TestimonialItem {
    id: number;
    name: string;
    role: string;
    image: string;
    review: string;
}

export interface PortfolioItem {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    alt: string;
}

export interface ServiceDetail {
    slug: string;
    title: string;
    metaDescription: string;
    hero: {
        highlightTitle: string;
        mainTitle: string;
        subtitle: string;
        description: string;
        ctaText: string;
        ctaLink: string;
        cardImages?: { src: string; alt: string }[];
    };
    intro: {
        badge: string;
        headingLines?: {
            segments: {
                text: string;
                bold?: boolean;
                gradient?: boolean;
            }[];
        }[];
        headingPlain: string;
        headingAccent: string;
        paragraphs: string[];
        photos: IntroPhoto[];
    };
    offerings: {
        title: string;
        subtitle: string;
        tagline: string;
        items: ServiceOffering[];
    };
    whyChooseUs: {
        titlePlain: string;
        titleAccent: string;
        items: WhyChooseUsItem[];
    };
    process: {
        title: string;
        subtitle: string;
        steps: ProcessStep[];
    };
    testimonials: TestimonialItem[];
    techStack: string[];
    portfolio: PortfolioItem[];
}

// Shared building blocks
const INTRO_PHOTOS_DEFAULT: IntroPhoto[] = [
    {
        src: "/images/hero-main.png",
        alt: "Enterprise software architecture and development workspace",
    },
    {
        src: "/images/hero-inset.png",
        alt: "Engineers collaborating on technical infrastructure",
    },
];

const SHARED_WHY_CHOOSE_US: WhyChooseUsItem[] = [
    {
        image: "/images/Experienced_Team.png",
        title: "Practitioner-Led Teams",
        description:
            "Work directly with senior software architects and operational directors without non-technical layers.",
    },
    {
        image: "/images/Business-Focused_Solutions.png",
        title: "Measurable Impact",
        description:
            "Architected around business targets, uptime thresholds, and operational velocity.",
    },
    {
        image: "/images/Modern_Technology.png",
        title: "Modern Tech Stack",
        description:
            "Clean architecture using Next.js, React, Node.js, Python, PostgreSQL, and distributed cloud services.",
    },
    {
        image: "/images/Scalable_Architecture.png",
        title: "Fault-Tolerant Scale",
        description:
            "Zero-downtime deployments and infrastructure that handles peak concurrency without degradation.",
    },
    {
        image: "/images/Quality_Assurance.png",
        title: "Rigorous QA & Security",
        description:
            "Automated regression testing, Core Web Vitals above 90, and strict zero-trust standards.",
    },
    {
        image: "/images/Long-Term-Support.png",
        title: "Long-Term Viability",
        description:
            "Documented pipelines, clean abstractions, and ongoing scaling support beyond launch.",
    },
];

export const sharedServiceTestimonials: TestimonialItem[] = [
    {
        id: 1,
        name: "Emily Carter",
        role: "CEO, BrightTech",
        image: "/images/homereview1.png",
        review:
            "Working with Void & Key was a fantastic experience. Their team delivered a fast, modern platform that exceeded our expectations.",
    },
    {
        id: 2,
        name: "James Wilson",
        role: "Founder, Nexa Labs",
        image: "/images/homereview2.png",
        review:
            "From planning to deployment, everything was handled professionally. Our platform is now faster, cleaner, and easier to scale.",
    },
    {
        id: 3,
        name: "Sophia Martinez",
        role: "Operations Director",
        image: "/images/homereview3.png",
        review:
            "The attention to detail and operational speed were outstanding. We cut customer resolution times in half.",
    },
];

export const sharedTechStack = [
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "PostgreSQL",
    "AWS",
    "Docker",
];

export const servicesDetail: Record<string, ServiceDetail> = {
    // ══════════════════════════════════════════════════════════════════════
    // 1. Web Development (Page 2 of Document 3.pdf)
    // ══════════════════════════════════════════════════════════════════════
    "web-development": {
        slug: "web-development",
        title: "Custom Web Application Development & Cloud Architecture | Void & Key",
        metaDescription:
            "End-to-end custom software engineering, modern JavaScript platforms, and scalable cloud APIs designed for enterprise performance and low latency.",
        hero: {
            highlightTitle: "WEB",
            mainTitle: "APPLICATIONS",
            subtitle: "DIGITAL ENGINEERING & CLOUD",
            description:
                "We engineer enterprise-grade web applications, SaaS platforms, and digital interfaces that handle high concurrency with sub-second performance.",
            ctaText: "Discuss Your Tech Stack",
            ctaLink: "/contact",
            cardImages: [
                { src: "/images/cyberpunk_image_1.png", alt: "Modern Software Architecture" },
                { src: "/images/cyberpunk_image_2.png", alt: "API & Microservices Engineering" },
                { src: "/images/cyberpunk_image_3.png", alt: "Cloud Infrastructure Setup" },
            ],
        },
        intro: {
            badge: "THE CHALLENGE",
            headingPlain: "Why Most Commercial Web Software ",
            headingAccent: "Degrades Over Time",
            paragraphs: [
                "Quick-turn agencies often deliver template-heavy code bases packed with bloated dependencies. The result: slow load times, fragile integrations, and technical debt that halts product releases after six months.",
                "Void & Key builds software like structural engineers build bridges. Every line of code is structured for maintainability, strict typing, responsive design across form factors, and seamless API extensibility.",
            ],
            photos: INTRO_PHOTOS_DEFAULT,
        },
        offerings: {
            title: "Our Engineering Pillars",
            subtitle:
                "Architectural standards that ensure resilience, speed, and maintainability across the software lifecycle.",
            tagline: "From decoupled microservices to high-performance frontend architecture.",
            items: [
                {
                    icon: "Layout",
                    image: "/images/custom_website.png",
                    title: "Clean Component Architecture",
                    description:
                        "Modern component systems (React, Next.js, TypeScript) structured around modular design systems that internal teams maintain effortlessly.",
                },
                {
                    icon: "Cpu",
                    image: "/images/api_integration.png",
                    title: "API-First & Microservices",
                    description:
                        "Decoupled backends built on Node.js, Python, and robust database layers (PostgreSQL, Redis) designed for instant serialization and high throughput.",
                },
                {
                    icon: "Shield",
                    image: "/images/maintance&support.png",
                    title: "Security & Performance by Default",
                    description:
                        "Core Web Vitals scores above 90, comprehensive OWASP protection, automated CI/CD pipelines, and global edge CDN deployments.",
                },
                {
                    icon: "Server",
                    image: "/images/web_application.png",
                    title: "Fault-Tolerant Infrastructure",
                    description:
                        "Distributed cloud architectures engineered for zero-downtime failover and seamless peak traffic auto-scaling.",
                },
                {
                    icon: "Layers",
                    image: "/images/cms_developement.png",
                    title: "Strict Typing & Testing",
                    description:
                        "Complete TypeScript strict-mode coverage paired with automated regression and integration testing suites.",
                },
                {
                    icon: "CheckCircle",
                    image: "/images/E-commerce.png",
                    title: "Zero-Bloat Frontends",
                    description:
                        "Lightweight bundles, optimized assets, and clean code paths eliminating unnecessary third-party overhead.",
                },
            ],
        },
        whyChooseUs: {
            titlePlain: "Why Choose ",
            titleAccent: "Our Engineering?",
            items: SHARED_WHY_CHOOSE_US,
        },
        process: {
            title: "Technical Workflow",
            subtitle: "From architectural blueprinting to managed scaling, our engineering lifecycle.",
            steps: [
                {
                    number: "01",
                    title: "Discover",
                    description: "Data schema mapping, latency targets, and threat modeling.",
                    angle: 0,
                },
                {
                    number: "02",
                    title: "Plan",
                    description: "Define scope, technical architecture, and shippable sprints.",
                    angle: 60,
                },
                {
                    number: "03",
                    title: "Engineer",
                    description: "Bi-weekly increments with automated regression testing.",
                    angle: 120,
                },
                {
                    number: "04",
                    title: "Deploy",
                    description: "Zero-downtime infrastructure setup with Datadog/CloudWatch metrics.",
                    angle: 180,
                },
                {
                    number: "05",
                    title: "Observe",
                    description: "Continuous Core Web Vitals monitoring and performance profiling.",
                    angle: 240,
                },
                {
                    number: "06",
                    title: "Scale",
                    description: "Thorough documentation and team knowledge transfers.",
                    angle: 300,
                },
            ],
        },
        testimonials: sharedServiceTestimonials,
        techStack: sharedTechStack,
        portfolio: [
            {
                id: "web-port-1",
                title: "Travel & Hospitality Booking Platform",
                category: "Web Development",
                description: "High-concurrency global booking engine built with Next.js, distributed edge caching, and real-time inventory management.",
                image: "/images/cyberpunk_image_1.png",
                alt: "Modern travel booking application architecture by Void & Key",
            },
            {
                id: "web-port-2",
                title: "Scalable Enterprise SaaS Dashboard",
                category: "Web Development",
                description: "Sub-second analytical control panel engineered with TypeScript, WebSockets, and resilient microservices architecture.",
                image: "/images/cyberpunk_image_2.png",
                alt: "Enterprise SaaS analytics platform by Void & Key",
            },
            {
                id: "web-port-3",
                title: "High-Throughput Cloud Commerce Portal",
                category: "Web Development",
                description: "Cloud-native digital storefront with zero-downtime deployment pipelines, headless CMS integration, and sub-second checkout.",
                image: "/images/cyberpunk_image_3.png",
                alt: "Cloud-native web commerce application by Void & Key",
            },
        ],
    },

    // ══════════════════════════════════════════════════════════════════════
    // 2. Customer Support Operations (Page 7-8 of Document 3.pdf)
    // ══════════════════════════════════════════════════════════════════════
    "customer-support": {
        slug: "customer-support",
        title: "Dedicated Technical & Customer Support Solutions | Void & Key",
        metaDescription:
            "Deliver high-touch, multi-channel customer resolution. Omnichannel tier 1-3 support teams trained in brand voice and technical problem-solving.",
        hero: {
            highlightTitle: "CUSTOMER",
            mainTitle: "SUPPORT OPERATIONS",
            subtitle: "RETENTION & BRAND ADVOCACY",
            description:
                "Eliminate scripted, frustrating support. We build trained, technically adept customer success units that represent your brand with clarity and empathy.",
            ctaText: "Scale Your Support Team",
            ctaLink: "/contact",
            cardImages: [
                { src: "/images/customer_support_left.png", alt: "Omnichannel Support Operations" },
                { src: "/images/customer_support_center.png", alt: "Tier 1 & Tier 2 Helpdesk" },
                { src: "/images/customer_support_right.png", alt: "Dedicated Account Advocates" },
            ],
        },
        intro: {
            badge: "THE DIFFERENCE",
            headingPlain: "Resolution Speed Over ",
            headingAccent: "Ticket Volume",
            paragraphs: [
                "Most outsourced support focuses on closing tickets as fast as possible, which often results in canned replies and irritated customers.",
                "Void & Key measures success by First Contact Resolution (FCR) and customer satisfaction (CSAT). Our teams undergo comprehensive onboarding in your product logic, software ecosystem, and escalation pathways.",
            ],
            photos: [
                { src: "/images/customer_support_left.png", alt: "Customer support specialist resolving inquiries" },
                { src: "/images/customer_support_right.png", alt: "Technical helpdesk monitoring ticket queues" },
            ],
        },
        offerings: {
            title: "Our Coverage",
            subtitle:
                "End-to-end technical helpdesk and account advocacy across all communication channels.",
            tagline: "White-glove support acting as an authentic extension of your brand, 24/7/365.",
            items: [
                {
                    icon: "MessageSquare",
                    image: "/images/custom_website.png",
                    title: "Omnichannel Operations",
                    description:
                        "Unified triage across Email, Live Chat, Ticketing (Zendesk, Intercom, Jira), and Voice.",
                },
                {
                    icon: "Headphones",
                    image: "/images/api_integration.png",
                    title: "Technical Helpdesk (Tier 1 & 2)",
                    description:
                        "API triage, bug reproduction, log gathering, and clear handoffs to your core engineering team.",
                },
                {
                    icon: "Users",
                    image: "/images/maintance&support.png",
                    title: "VIP & Enterprise Accounts",
                    description:
                        "Dedicated account advocates for high-value contractual SLAs and strategic enterprise accounts.",
                },
                {
                    icon: "BarChart3",
                    image: "/images/web_application.png",
                    title: "Continual Feedback Loops",
                    description:
                        "Weekly voice-of-customer reports detailing UX pain points and common defect patterns.",
                },
                {
                    icon: "Clock",
                    image: "/images/cms_developement.png",
                    title: "24/7/365 Coverage",
                    description:
                        "Round-the-clock availability guaranteeing critical response times and zero ticket backlogs.",
                },
                {
                    icon: "FileText",
                    image: "/images/E-commerce.png",
                    title: "Knowledge Base Management",
                    description:
                        "Continual documentation of edge cases and self-service troubleshooting guides.",
                },
            ],
        },
        whyChooseUs: {
            titlePlain: "Why Trust Our ",
            titleAccent: "Support Operations?",
            items: SHARED_WHY_CHOOSE_US,
        },
        process: {
            title: "Support Workflow",
            subtitle: "A structured process designed to maximize First Contact Resolution and customer satisfaction.",
            steps: [
                {
                    number: "01",
                    title: "Onboard",
                    description: "Understand product logic, software ecosystem, and escalation pathways.",
                    angle: 0,
                },
                {
                    number: "02",
                    title: "Triage",
                    description: "Unified channel routing across Email, Chat, Jira, and Voice.",
                    angle: 60,
                },
                {
                    number: "03",
                    title: "Diagnose",
                    description: "Reproduce bugs, gather logs, and isolate technical issues.",
                    angle: 120,
                },
                {
                    number: "04",
                    title: "Resolve",
                    description: "Deliver high-touch resolutions prioritizing First Contact Resolution.",
                    angle: 180,
                },
                {
                    number: "05",
                    title: "Feedback",
                    description: "Compile weekly voice-of-customer reports detailing UX defects.",
                    angle: 240,
                },
                {
                    number: "06",
                    title: "Optimize",
                    description: "Continually refine workflows to maintain peak CSAT scores.",
                    angle: 300,
                },
            ],
        },
        testimonials: sharedServiceTestimonials,
        techStack: ["Zendesk", "Intercom", "Jira", "Slack", "HubSpot", "Datadog"],
        portfolio: [
            {
                id: "support-port-1",
                title: "Global 24/7 Technical Operations Desk",
                category: "Customer Support",
                description: "Multi-tiered technical support unit delivering 98% First Contact Resolution and sub-5-minute SLA response times across global timezones.",
                image: "/images/customer_support_left.png",
                alt: "Global technical customer operations desk by Void & Key",
            },
            {
                id: "support-port-2",
                title: "Omnichannel Resolution & Live Hub",
                category: "Customer Support",
                description: "Integrated omnichannel support ecosystem spanning chat, voice, and ticketing systems, driving CSAT to 96.4%.",
                image: "/images/customer_support_center.png",
                alt: "Omnichannel support workspace and resolution desk by Void & Key",
            },
            {
                id: "support-port-3",
                title: "Enterprise Retention & SLA Escapes Center",
                category: "Customer Support",
                description: "Specialized high-touch retention squad reducing customer churn by 42% through proactive account recovery runbooks.",
                image: "/images/customer_support_right.png",
                alt: "Customer retention and escalation operations by Void & Key",
            },
        ],
    },

    // ══════════════════════════════════════════════════════════════════════
    // 3. Cybersecurity & Applied AI (Page 8-10 of Document 3.pdf)
    // ══════════════════════════════════════════════════════════════════════
    "ai-cybersecurity": {
        slug: "ai-cybersecurity",
        title: "Proactive Cybersecurity Solutions & Applied AI Automation | Void & Key",
        metaDescription:
            "Safeguard company assets and integrate pragmatic machine learning models that optimize decision-making while maintaining zero-trust security postures.",
        hero: {
            highlightTitle: "CYBERSECURITY",
            mainTitle: "& APPLIED AI",
            subtitle: "RESILIENCE & INTELLIGENCE",
            description:
                "Practical cybersecurity protocols to secure your attack perimeter, coupled with targeted AI integrations that eliminate manual analytical friction.",
            ctaText: "Request a Security Review",
            ctaLink: "/contact",
            cardImages: [
                { src: "/images/AI_Cybersecurity_1.png", alt: "Zero-Trust Architecture" },
                { src: "/images/AI_Cybersecurity_2.png", alt: "Pragmatic AI Models" },
                { src: "/images/AI_Cybersecurity_3.png", alt: "Cloud Threat Defense" },
            ],
        },
        intro: {
            badge: "RESILIENCE & INTELLIGENCE",
            headingPlain: "Zero-Trust Defense in an ",
            headingAccent: "Asymmetric Threat Landscape",
            paragraphs: [
                "Perimeter firewalls alone are no longer enough. Modern attack vectors target configuration gaps, supply chains, and employee credentials. We help companies implement defensive postures that keep assets secure without grinding employee productivity to a halt.",
                "We avoid speculative tech experiments. We focus on pragmatic, high-ROI AI deployment: natural language extraction pipelines, automated classification engines, and tailored internal search models that cut research times across your organization.",
            ],
            photos: [
                { src: "/images/AI_Cybersecurity_1.png", alt: "Cybersecurity engineer auditing cloud infrastructure" },
                { src: "/images/AI_Cybersecurity_2.png", alt: "AI data extraction and security telemetry" },
            ],
        },
        offerings: {
            title: "Cybersecurity & AI Capabilities",
            subtitle:
                "Proactive threat defense and purposeful machine learning models that deliver real operational utility.",
            tagline: "Zero-trust network architecture meets high-ROI artificial intelligence.",
            items: [
                {
                    icon: "ShieldAlert",
                    image: "/images/custom_website.png",
                    title: "Vulnerability Assessments",
                    description:
                        "Identifying logic flaws, code-level vulnerabilities, and exposed cloud buckets through thorough penetration testing.",
                },
                {
                    icon: "Lock",
                    image: "/images/api_integration.png",
                    title: "Zero-Trust Network Architecture",
                    description:
                        "Least-privilege access models, micro-segmentation, and enforced MFA/SSO configurations across your stack.",
                },
                {
                    icon: "Cloud",
                    image: "/images/maintance&support.png",
                    title: "Cloud Configuration Auditing",
                    description:
                        "Hardening AWS, GCP, and Azure environments against unauthorized privilege escalation and policy drift.",
                },
                {
                    icon: "Bot",
                    image: "/images/web_application.png",
                    title: "Workflow Automation (LLMs)",
                    description:
                        "Custom LLM-backed classification and routing pipelines tailored to streamline internal operational triage.",
                },
                {
                    icon: "Search",
                    image: "/images/cms_developement.png",
                    title: "Semantic Search & Retrieval",
                    description:
                        "Context-aware internal knowledge assistants grounded securely in your private company documentation.",
                },
                {
                    icon: "Database",
                    image: "/images/E-commerce.png",
                    title: "Data Pipeline Cleansing",
                    description:
                        "Automated anomaly detection and sanitization across incoming operational and financial data streams.",
                },
            ],
        },
        whyChooseUs: {
            titlePlain: "Why Partner With Us on ",
            titleAccent: "Security & AI?",
            items: SHARED_WHY_CHOOSE_US,
        },
        process: {
            title: "Security & AI Lifecycle",
            subtitle: "From audit to continuous protection, our hardened engineering protocol.",
            steps: [
                {
                    number: "01",
                    title: "Assess",
                    description: "Identify logic flaws, code vulnerabilities, and exposed buckets.",
                    angle: 0,
                },
                {
                    number: "02",
                    title: "Harden",
                    description: "Enforce zero-trust architecture and least-privilege cloud policies.",
                    angle: 60,
                },
                {
                    number: "03",
                    title: "Integrate",
                    description: "Deploy pragmatic LLM pipelines and automated classification models.",
                    angle: 120,
                },
                {
                    number: "04",
                    title: "Monitor",
                    description: "Set up real-time telemetry and anomaly detection workflows.",
                    angle: 180,
                },
                {
                    number: "05",
                    title: "Drill",
                    description: "Simulate incident responses with concrete disaster runbooks.",
                    angle: 240,
                },
                {
                    number: "06",
                    title: "Evolve",
                    description: "Continuous threat modeling and model retraining for accuracy.",
                    angle: 300,
                },
            ],
        },
        testimonials: sharedServiceTestimonials,
        techStack: ["AWS Security Hub", "Cloudflare", "OpenAI", "Python", "Docker", "PostgreSQL"],
        portfolio: [
            {
                id: "ai-port-1",
                title: "Zero-Trust Cloud Threat Intelligence",
                category: "AI & Cybersecurity",
                description: "Autonomous intrusion detection and continuous posture monitoring safeguarding multi-cloud infrastructure from zero-day threats.",
                image: "/images/AI_Cybersecurity_1.png",
                alt: "Zero-trust cybersecurity intelligence dashboard by Void & Key",
            },
            {
                id: "ai-port-2",
                title: "Applied LLM Workflow Automation Pipeline",
                category: "AI & Cybersecurity",
                description: "Production-grade generative AI orchestration engine cutting manual analytical research cycles by 85% with verifiable accuracy.",
                image: "/images/AI_Cybersecurity_2.png",
                alt: "Applied AI enterprise automation pipeline by Void & Key",
            },
            {
                id: "ai-port-3",
                title: "Continuous Compliance & Perimeter Telemetry",
                category: "AI & Cybersecurity",
                description: "Real-time SOC2 and ISO compliance verification pipeline with automated audit logging and instant anomaly mitigation.",
                image: "/images/AI_Cybersecurity_3.png",
                alt: "Cloud compliance and security telemetry platform by Void & Key",
            },
        ],
    },

    // ══════════════════════════════════════════════════════════════════════
    // 4. Billing & Financial Operations (Page 10-11 of Document 3.pdf)
    // ══════════════════════════════════════════════════════════════════════
    "billing-solutions": {
        slug: "billing-solutions",
        title: "Enterprise Billing Operations & Financial Workflow Management | Void & Key",
        metaDescription:
            "Accelerate cash flow and reduce dispute rates with automated invoicing, revenue reconciliation, and audit-ready billing management.",
        hero: {
            highlightTitle: "BILLING & REVENUE",
            mainTitle: "OPERATIONS",
            subtitle: "FINANCIAL ACCURACY",
            description:
                "Precision-driven billing and invoicing infrastructure designed to handle usage-based models, high invoice volumes, and multi-entity accounts.",
            ctaText: "Streamline Your Billing",
            ctaLink: "/contact",
            cardImages: [
                { src: "/images/Billing_Solutions_1.png", alt: "Usage-Based Invoicing Setup" },
                { src: "/images/Billing_Solutions_2.png", alt: "Automated Reconciliation" },
                { src: "/images/Billing_Solutions_3.png", alt: "Audit-Ready Financial Pipelines" },
            ],
        },
        intro: {
            badge: "FINANCIAL ACCURACY",
            headingPlain: "Clean Financial Workflows Mean ",
            headingAccent: "Predictable Cash Flow",
            paragraphs: [
                "As contract complexity scales, billing discrepancies compound. Unreconciled accounts, delayed dispute resolutions, and manual invoicing directly impede working capital.",
                "We deliver structured billing workflows that integrate cleanly with your ERP and payment gateways (Stripe, QuickBooks, NetSuite), maintaining audit compliance and accelerating payment cycles.",
            ],
            photos: [
                { src: "/images/Billing_Solutions_1.png", alt: "Financial analyst reconciling usage-based invoices" },
                { src: "/images/Billing_Solutions_2.png", alt: "Automated dunning and ERP synchronization dashboard" },
            ],
        },
        offerings: {
            title: "System Capabilities",
            subtitle:
                "Precision billing workflows, automated reconciliation, and audit-ready data pipelines tailored to complex models.",
            tagline: "Reduce dispute rates and accelerate cash collections without administrative burden.",
            items: [
                {
                    icon: "Receipt",
                    image: "/images/custom_website.png",
                    title: "Usage-Based & Tiered Billing",
                    description:
                        "Automated calculation of dynamic, consumption-based pricing models integrated directly into billing runs.",
                },
                {
                    icon: "RefreshCw",
                    image: "/images/api_integration.png",
                    title: "Collections & Dunning",
                    description:
                        "Respectful, automated dunning campaigns that minimize involuntary churn while maintaining customer goodwill.",
                },
                {
                    icon: "Scale",
                    image: "/images/maintance&support.png",
                    title: "Dispute Investigation",
                    description:
                        "Direct reconciliation of billing disputes backed by transparent usage logging and immutable audit trails.",
                },
                {
                    icon: "CreditCard",
                    image: "/images/web_application.png",
                    title: "Gateway & Merchant Monitoring",
                    description:
                        "Proactive monitoring of decline codes, interchange fees, and payment gateway variance structures.",
                },
                {
                    icon: "Building2",
                    image: "/images/cms_developement.png",
                    title: "Multi-Entity Consolidation",
                    description:
                        "Harmonize ledger entries across business units, subsidiaries, and international multi-currency transactions.",
                },
                {
                    icon: "CheckCircle",
                    image: "/images/E-commerce.png",
                    title: "Audit Compliance (GAAP)",
                    description:
                        "Clean, immutable revenue recognition data pipelines ready for external financial audits.",
                },
            ],
        },
        whyChooseUs: {
            titlePlain: "Why Outsource ",
            titleAccent: "Financial Workflows?",
            items: SHARED_WHY_CHOOSE_US,
        },
        process: {
            title: "Billing Workflow",
            subtitle: "Structured operations ensuring accuracy, compliance, and accelerated payment cycles.",
            steps: [
                {
                    number: "01",
                    title: "Ingest",
                    description: "Map contract terms, transaction logs, and consumption metrics.",
                    angle: 0,
                },
                {
                    number: "02",
                    title: "Calculate",
                    description: "Automate tiered and usage-based invoices via Stripe and ERP integrations.",
                    angle: 60,
                },
                {
                    number: "03",
                    title: "Reconcile",
                    description: "Run automated ledger balance checks and eliminate variance gaps.",
                    angle: 120,
                },
                {
                    number: "04",
                    title: "Collect",
                    description: "Deploy respectful dunning campaigns and dispute resolutions.",
                    angle: 180,
                },
                {
                    number: "05",
                    title: "Audit",
                    description: "Verify compliance pipelines for GAAP and revenue recognition.",
                    angle: 240,
                },
                {
                    number: "06",
                    title: "Optimize",
                    description: "Continuously track merchant fees, decline codes, and payment cycles.",
                    angle: 300,
                },
            ],
        },
        testimonials: sharedServiceTestimonials,
        techStack: ["Stripe", "QuickBooks", "NetSuite", "Python", "PostgreSQL", "Power BI"],
        portfolio: [
            {
                id: "billing-port-1",
                title: "Multi-Entity Revenue Reconciliation Engine",
                category: "Billing Solutions",
                description: "Automated general ledger syncing connecting Stripe, NetSuite, and banking feeds for 100% audit-ready financial close.",
                image: "/images/Billing_Solutions_1.png",
                alt: "Automated billing reconciliation platform by Void & Key",
            },
            {
                id: "billing-port-2",
                title: "Smart Subscription Dunning & Recovery System",
                category: "Billing Solutions",
                description: "Intelligent retry logic and proactive card updater workflows cutting involuntary subscriber churn by 65%.",
                image: "/images/Billing_Solutions_2.png",
                alt: "Subscription dunning and invoice recovery system by Void & Key",
            },
            {
                id: "billing-port-3",
                title: "Enterprise Invoicing & Dispute Portal",
                category: "Billing Solutions",
                description: "Streamlined merchant settlement interface reducing payment turnaround times from 45 days down to under 12 days.",
                image: "/images/Billing_Solutions_3.png",
                alt: "Enterprise financial invoicing and dispute operations by Void & Key",
            },
        ],
    },

    // ══════════════════════════════════════════════════════════════════════
    // 5. Back Office Operations (Page 11-13 of Document 3.pdf)
    // ══════════════════════════════════════════════════════════════════════
    "back-office-operations": {
        slug: "back-office-operations",
        title: "Managed Back-Office Operations & Business Process Outsourcing | Void & Key",
        metaDescription:
            "Scale operational capacity without ballooning internal headcount. Void & Key handles data pipelines, administrative workflows, and quality assurance.",
        hero: {
            highlightTitle: "MANAGED BACK-OFFICE",
            mainTitle: "OPERATIONS",
            subtitle: "BUSINESS INFRASTRUCTURE",
            description:
                "Offload repetitive, high-volume operational tasks to specialized teams and automated workflows that maintain 99.9% data accuracy.",
            ctaText: "Optimize Operations",
            ctaLink: "/contact",
            cardImages: [
                { src: "/images/Back_Office_Operations_1.png", alt: "Data capture and ingestion pipelines" },
                { src: "/images/Back_Office_Operations_2.png", alt: "Compliance and document verification" },
                { src: "/images/Back_Office_Operations_3.png", alt: "Database deduplication and CRM hygiene" },
            ],
        },
        intro: {
            badge: "VALUE PROPOSITION",
            headingPlain: "Growth Shouldn't Mean Runaway ",
            headingAccent: "Operational Overhead",
            paragraphs: [
                "When product volume spikes, back-office bottlenecks quickly follow: data ingestion stalls, manual verification backlogs pile up, and core staff gets dragged into administrative triage.",
                "Void & Key establishes dedicated, highly trained operational pods supported by custom workflow tooling. We absorb complex operational workloads, standardize procedural documentation, and guarantee service-level turnaround times.",
            ],
            photos: [
                { src: "/images/Back_Office_Operations_1.png", alt: "Operational pod verifying enterprise document queues" },
                { src: "/images/Back_Office_Operations_2.png", alt: "Automated data normalization and auditing dashboard" },
            ],
        },
        offerings: {
            title: "What We Manage",
            subtitle:
                "Eliminate workflow bottlenecks. We modernize and operate complex back-office systems to cut structural overhead by up to 40%.",
            tagline: "Dedicated operational pods supported by custom tooling and strict SLA guarantees.",
            items: [
                {
                    icon: "Database",
                    image: "/images/custom_website.png",
                    title: "Data Capture & Reconciliation",
                    description:
                        "Ingestion, auditing, and normalization of high-volume financial or operational records with 99.8%+ accuracy.",
                },
                {
                    icon: "FileCheck",
                    image: "/images/api_integration.png",
                    title: "Compliance & Verification",
                    description:
                        "Rigorous document validation and regulatory adherence queues built to handle strict industry compliance.",
                },
                {
                    icon: "Layers",
                    image: "/images/maintance&support.png",
                    title: "Database & CRM Hygiene",
                    description:
                        "Continuous deduplication, catalog refreshes, contact enrichment, and CRM pipeline maintenance.",
                },
                {
                    icon: "ShieldCheck",
                    image: "/images/web_application.png",
                    title: "Content & Platform Moderation",
                    description:
                        "Multi-tiered review workflows that safeguard platform integrity, policy adherence, and safety standards.",
                },
                {
                    icon: "Zap",
                    image: "/images/cms_developement.png",
                    title: "Workflow Automation",
                    description:
                        "Custom scripts and webhook triggers eliminating manual copy-paste overhead between legacy tools.",
                },
                {
                    icon: "Award",
                    image: "/images/E-commerce.png",
                    title: "SLA-Guaranteed Turnarounds",
                    description:
                        "Guaranteed 4-hour urgent queue turnaround times with weekly metric scorecards and transparent audits.",
                },
            ],
        },
        whyChooseUs: {
            titlePlain: "Why Choose Our ",
            titleAccent: "Operational Pods?",
            items: SHARED_WHY_CHOOSE_US,
        },
        process: {
            title: "Operational Lifecycle",
            subtitle: "A proven model ensuring precision, documentation, and predictable turnaround times.",
            steps: [
                {
                    number: "01",
                    title: "Map",
                    description: "Audit existing operational bottlenecks, workflows, and turnaround times.",
                    angle: 0,
                },
                {
                    number: "02",
                    title: "Standardize",
                    description: "Develop procedural documentation and SLA metrics for the dedicated pod.",
                    angle: 60,
                },
                {
                    number: "03",
                    title: "Ingest",
                    description: "Route data capture, document verification, and catalog maintenance queues.",
                    angle: 120,
                },
                {
                    number: "04",
                    title: "Audit",
                    description: "Perform continuous double-blind accuracy checks maintaining 99.8%+ quality.",
                    angle: 180,
                },
                {
                    number: "05",
                    title: "Automate",
                    description: "Deploy custom workflow tooling to eliminate procedural friction.",
                    angle: 240,
                },
                {
                    number: "06",
                    title: "Scale",
                    description: "Guarantee 4-hour urgent queue turnaround times as volume expands.",
                    angle: 300,
                },
            ],
        },
        testimonials: sharedServiceTestimonials,
        techStack: ["HubSpot", "Salesforce", "PostgreSQL", "Python", "Zapier", "Power BI"],
        portfolio: [
            {
                id: "backoffice-port-1",
                title: "High-Volume Data Processing Pipeline",
                category: "Back-Office Operations",
                description: "Standardized document indexing and extraction workflows processing 50,000+ monthly records with 99.8% precision.",
                image: "/images/Back_Office_Operations_1.png",
                alt: "Managed back-office data processing pipeline by Void & Key",
            },
            {
                id: "backoffice-port-2",
                title: "Cross-System CRM & ERP Data Architecture",
                category: "Back-Office Operations",
                description: "Continuous database deduplication and record verification bridging Salesforce, HubSpot, and custom backend systems.",
                image: "/images/Back_Office_Operations_2.png",
                alt: "Enterprise CRM and ERP data reconciliation by Void & Key",
            },
            {
                id: "backoffice-port-3",
                title: "SLA-Guaranteed Operational Queue Desk",
                category: "Back-Office Operations",
                description: "Dedicated operational units handling urgent customer account verifications and onboarding tickets under 4-hour SLAs.",
                image: "/images/Back_Office_Operations_3.png",
                alt: "Back-office operational triage and quality assurance by Void & Key",
            },
        ],
    },

    // ══════════════════════════════════════════════════════════════════════
    // 6. Social Media Management (Page 14-20 of Document 3.pdf)
    // ══════════════════════════════════════════════════════════════════════
    "social-media-management": {
        slug: "social-media-management",
        title: "Social Media Management Services | Void & Key",
        metaDescription:
            "Build a consistent, recognizable social presence with social media strategy, content creation, publishing, community management, and reporting from Void & Key.",
        hero: {
            highlightTitle: "SOCIAL MEDIA",
            mainTitle: "MANAGEMENT",
            subtitle: "A MORE THOUGHTFUL APPROACH",
            description:
                "We help businesses plan, create, and manage social content that gives people a reason to notice your brand, understand what you offer, and keep the conversation going.",
            ctaText: "Talk to Our Team",
            ctaLink: "/contact",
            cardImages: [
                { src: "/images/SocialMedia_Management_1.png", alt: "Social media creative design and branding" },
                { src: "/images/SocialMedia_Management_2.png", alt: "Editorial calendar and scheduled publishing" },
                { src: "/images/SocialMedia_Management_3.png", alt: "Audience engagement and community management" },
            ],
        },
        intro: {
            badge: "A MORE THOUGHTFUL APPROACH",
            headingPlain: "Show Up Consistently. Give People ",
            headingAccent: "Something Worth Engaging With",
            paragraphs: [
                "When social content is rushed or irregular, even a strong business can fade into the background. We help bring structure to your channels—from content ideas and visuals to scheduling and audience engagement.",
                "We start by learning your business, audience, voice, and goals. Then we create a practical plan your team can review and your audience can recognize. Whether you need help with a few channels or ongoing social media management, the work stays grounded in your brand and priorities.",
            ],
            photos: [
                { src: "/images/SocialMedia_Management_1.png", alt: "Social media strategist drafting branded content" },
                { src: "/images/SocialMedia_Management_2.png", alt: "Team reviewing social analytics and campaign calendars" },
            ],
        },
        offerings: {
            title: "Our Social Media Services",
            subtitle:
                "From planning to publishing, we help you manage the work behind a consistent and recognizable social presence.",
            tagline: "Creative work with a clear strategic purpose behind every post.",
            items: [
                {
                    icon: "Compass",
                    image: "/images/custom_website.png",
                    title: "Social Media Strategy",
                    description:
                        "Choose platforms, set priorities, and define content themes around your audience and business goals.",
                },
                {
                    icon: "PenTool",
                    image: "/images/api_integration.png",
                    title: "Content Creation",
                    description:
                        "Create platform-ready captions and graphics that reflect your brand and communicate clearly.",
                },
                {
                    icon: "Calendar",
                    image: "/images/maintance&support.png",
                    title: "Calendar & Publishing",
                    description:
                        "Plan posts ahead and maintain an organized, consistent publishing schedule across all active channels.",
                },
                {
                    icon: "MessageCircle",
                    image: "/images/web_application.png",
                    title: "Community Management",
                    description:
                        "Respond to comments and messages in your brand voice, and flag questions that need your team's attention.",
                },
                {
                    icon: "TrendingUp",
                    image: "/images/cms_developement.png",
                    title: "Paid Campaign Support",
                    description:
                        "Plan and manage agreed social campaigns. Advertising spend is separate from management fees.",
                },
                {
                    icon: "BarChart",
                    image: "/images/E-commerce.png",
                    title: "Analytics & Reporting",
                    description:
                        "Review relevant performance indicators, explain what they mean, and use those insights to guide future content.",
                },
            ],
        },
        whyChooseUs: {
            titlePlain: "Why Partner With Us on ",
            titleAccent: "Social Media?",
            items: [
                {
                    image: "/images/Experienced_Team.png",
                    title: "Your Voice Comes First",
                    description: "Content should sound like your business, not a generic template.",
                },
                {
                    image: "/images/Business-Focused_Solutions.png",
                    title: "A Plan That Fits",
                    description: "We agree on platforms, content needs, review steps, and a workable schedule.",
                },
                {
                    image: "/images/Modern_Technology.png",
                    title: "Connected Execution",
                    description: "Strategy, design, publishing, and reporting support the same priorities.",
                },
                {
                    image: "/images/Quality_Assurance.png",
                    title: "Clear Communication",
                    description: "Agreed approval steps help keep content accurate and on-brand.",
                },
                {
                    image: "/images/Scalable_Architecture.png",
                    title: "Consistent Publishing",
                    description: "No gaps or irregular rushes—reliable cadence across your target channels.",
                },
                {
                    image: "/images/Long-Term-Support.png",
                    title: "Transparent Reporting",
                    description: "Actionable monthly metric reviews without inflated vanity numbers.",
                },
            ],
        },
        process: {
            title: "How We Work",
            subtitle: "From first conversation to ongoing refinement, our collaborative social process.",
            steps: [
                {
                    number: "01",
                    title: "Learn",
                    description: "We discuss your business, audience, current channels, and priorities.",
                    angle: 0,
                },
                {
                    number: "02",
                    title: "Plan",
                    description: "We recommend suitable platforms, content themes, cadence, and workflow.",
                    angle: 60,
                },
                {
                    number: "03",
                    title: "Create",
                    description: "We prepare the agreed content and creative assets for your review.",
                    angle: 120,
                },
                {
                    number: "04",
                    title: "Publish",
                    description: "Once approved, content is scheduled or published across target channels.",
                    angle: 180,
                },
                {
                    number: "05",
                    title: "Engage",
                    description: "Respond to comments and audience interactions in your authentic voice.",
                    angle: 240,
                },
                {
                    number: "06",
                    title: "Refine",
                    description: "We review performance and adjust the approach for maximum business impact.",
                    angle: 300,
                },
            ],
        },
        testimonials: sharedServiceTestimonials,
        techStack: ["Meta Business Suite", "LinkedIn Campaign Manager", "Figma", "Canva", "Buffer", "Hootsuite"],
        portfolio: [
            {
                id: "social-port-1",
                title: "Brand Visual Identity & Content System",
                category: "Social Media Management",
                description: "Comprehensive creative design system, custom typography, and template architecture tailored for high engagement on LinkedIn & Instagram.",
                image: "/images/SocialMedia_Management_1.png",
                alt: "Social media visual branding and creative system by Void & Key",
            },
            {
                id: "social-port-2",
                title: "Multi-Channel Editorial & Campaign Launch",
                category: "Social Media Management",
                description: "Data-driven content calendar and scheduled publishing workflow generating 320% expansion in cross-platform organic reach.",
                image: "/images/SocialMedia_Management_2.png",
                alt: "Multi-channel editorial calendar and social scheduling by Void & Key",
            },
            {
                id: "social-port-3",
                title: "Community Growth & Narrative Strategy",
                category: "Social Media Management",
                description: "Proactive audience interaction, comment management, and authentic narrative storytelling building durable brand loyalty.",
                image: "/images/SocialMedia_Management_3.png",
                alt: "Audience engagement and community growth strategy by Void & Key",
            },
        ],
    },
};

export const serviceSlugs = Object.keys(servicesDetail);

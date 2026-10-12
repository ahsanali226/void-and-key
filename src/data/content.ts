export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const headerSolutions = [
  { label: "Web Engineering", href: "/services/web-development" },
  { label: "Managed Operations", href: "/services/back-office-operations" },
  { label: "Cybersecurity & AI", href: "/services/ai-cybersecurity" },
  { label: "Enterprise Support", href: "/services/customer-support" },
  { label: "Financial Systems", href: "/services/billing-solutions" },
];

export const coreValueProposition = {
  eyebrow: "BEYOND SURFACE-LEVEL DIGITAL",
  headline: "Technology is only as good as the operations supporting it.",
  paragraphs: [
    "Most consultancies build software that looks great on day one and breaks down on day ninety. Others manage operations without understanding modern tech infrastructure.",
    "Void & Key bridges that gap. We combine enterprise software architecture with rigorous operational execution. Whether you need resilient custom software, automated back-office workflows, or hardened cyber defense, we engineer solutions designed for long-term viability, not quick hand-offs.",
  ],
  capabilitiesMatrix: [
    {
      number: "01",
      title: "Web & Platform Engineering",
      description: "Built for speed, sub-second latency, and scalable concurrency.",
    },
    {
      number: "02",
      title: "Operational Resilience",
      description: "Back-office automation and tier-1 support that reduce overhead.",
    },
    {
      number: "03",
      title: "Threat Mitigation & AI",
      description: "Proactive threat surface reduction and purposeful workflow automation.",
    },
  ],
};

export const aboutServices = coreValueProposition.capabilitiesMatrix.map((item) => ({
  number: item.number,
  label: item.title,
  description: item.description,
}));

export const services = [
  {
    title: "Software & Web Architecture",
    slug: "web-development",
    description:
      "Modern web applications and microservices engineered with clean architecture, fault tolerance, and zero-bloat frontends.",
    image: "/images/webdevelopement.png",
    linkText: "Explore Web Engineering →",
  },
  {
    title: "Operational Infrastructure & Back Office",
    slug: "back-office-operations",
    description:
      "Eliminate workflow bottlenecks. We modernize and operate complex back-office systems to cut structural overhead by up to 40%.",
    image: "/images/backofficeoperation.png",
    linkText: "Discover Managed Operations →",
  },
  {
    title: "Applied AI & Information Security",
    slug: "ai-cybersecurity",
    description:
      "Deploy intelligence where it matters. Real-time threat detection, SOC workflows, and model deployment wrapped in strict compliance.",
    image: "/images/Aiandcybersecurity.png",
    linkText: "Review Security & AI →",
  },
  {
    title: "Dedicated Tier-1 to Tier-3 Support",
    slug: "customer-support",
    description:
      "White-glove technical and customer support operations that act as an authentic extension of your brand, 24/7/365.",
    image: "/images/customersupport.png",
    linkText: "Explore Support Operations →",
  },
  {
    title: "Billing & Revenue Operations",
    slug: "billing-solutions",
    description:
      "Precision billing workflows, automated reconciliation, and audit-ready data pipelines tailored to complex transaction models.",
    image: "/images/billingsolutionimg.png",
    linkText: "See Financial Systems →",
  },
  {
    title: "Social Media Management",
    slug: "social-media-management",
    description:
      "Build a consistent, recognizable social presence with social media strategy, content creation, publishing, community management, and reporting.",
    image: "/images/socialmediamangement.png",
    linkText: "Explore Social Media →",
  },
];

export const marqueeItems = [
  "Web Engineering",
  "Managed Operations",
  "Cybersecurity & AI",
  "Enterprise Support",
  "Financial Systems",
  "Clean Architecture",
  "Zero-Downtime Infrastructure",
];

export const caseStudies = [
  {
    number: "Study 01",
    title: "Global Travel Logistics Platform",
    challenge:
      "Legacy monolithic architecture causing checkout drop-offs and API timeouts during peak booking windows.",
    architecture:
      "Headless Next.js edge architecture backed by distributed Go microservices and Redis caching.",
    result:
      "64% reduction in page load latency; zero downtime during 4x seasonal traffic surges.",
    image: "/images/travelboooking.png",
  },
  {
    number: "Study 02",
    title: "Healthcare Back-Office Modernization",
    challenge:
      "Disconnected patient verification and manual billing queues causing 7-day payment lags.",
    architecture:
      "Automated ingestion pipeline integrated with secure EHR endpoints and automated reconciliation.",
    result:
      "78% faster claim approvals; operational overhead reduced by 35%.",
    image: "/images/dental.png",
  },
];

export const portfolioFilters = [
  "All",
  "Web Development",
  "UI/UX Design",
  "Branding",
  "Social Media Management",
  "Cybersecurity Services",
  "Back Office Operations",
];

export const portfolioItems = [
  {
    title: "Travel Booking",
    category: "Web Development",
    description:
      "A travel booking experience designed to help users explore options and move through the booking journey with clarity.",
    alt: "Travel booking website interface designed by Void & Key.",
    image: "/images/travelboooking.png",
  },
  {
    title: "Iconography & Visual Assets",
    category: "UI/UX Design",
    subcategory: "Iconography",
    description:
      "A custom iconography system and interface visual language designed for clear navigation and intuitive digital product interactions.",
    alt: "Custom UI/UX iconography design by Void & Key.",
    image: "/images/iconography.jpg",
  },
  {
    title: "Dental",
    category: "UI/UX Design",
    description:
      "A digital experience for a dental service, with clear navigation and user-focused presentation of information.",
    alt: "Dental service website and user interface design by Void & Key.",
    image: "/images/dental.png",
  },
  {
    title: "Social Media Post",
    category: "Social Media Management",
    description:
      "Branded social content created to give a business a consistent, recognizable way to communicate with its audience.",
    alt: "Branded social media post designed by Void & Key.",
    image: "/images/socialmediapost.png",
  },
  {
    title: "Brand Identity Guidelines",
    category: "Branding",
    description:
      "A visual identity reference that helps keep a brand’s look and feel consistent across its communications.",
    alt: "Brand identity guidelines designed by Void & Key.",
    image: "/images/brandidentityguideline.png",
  },
  {
    title: "Premium Hoodie Poster Design",
    category: "Social Media Management",
    description:
      "Promotional creative for a premium apparel product, designed to bring product details and brand presentation together.",
    alt: "Promotional poster design for a premium hoodie.",
    image: "/images/premiumhoodieposterdesgin.png",
  },
  {
    title: "Home Appliance Service App",
    category: "UI/UX Design",
    description:
      "An app concept for home appliance services, designed to help customers find and navigate service information.",
    alt: "Home appliance service app interface designed by Void & Key.",
    image: "/images/homeapplianceappservice.png",
  },
];

export const leadershipCulture = {
  eyebrow: "WHO BUILDS YOUR PRODUCT",
  headline: "Led by practitioners, not account handlers.",
  body: "At Void & Key, clients work directly with senior architects and operational directors. No layers of non-technical project managers translating requirements. Just direct collaboration with the people writing your code and securing your pipelines.",
};

export const team = [
  {
    role: "Managing Director & Architect",
    name: "Marzooq Lakhani",
    image: "/images/ceo.png",
  },
  {
    role: "Technology Director",
    name: "Talib Pirani",
    image: "/images/developer.png",
  },
  {
    role: "Engineering Lead",
    name: "Leslie Alexander",
    image: "/images/meetourcreativeteamimg.png",
  },
  {
    role: "Product Design Lead",
    name: "Courtney Henry",
    image: "/images/ui_ux_desginer.png",
  },
];

export const testimonials = [
  {
    name: "Emily Carter",
    role: "CEO, BrightTech",
    quote:
      "Working with Void & Key was a fantastic experience. Their team delivered a fast, modern platform that exceeded our expectations.",
    avatar: "/images/homereview1.png",
  },
  {
    name: "James Wilson",
    role: "Founder, Nexa Labs",
    quote:
      "From planning to deployment, everything was handled professionally. Our platform is now faster, cleaner, and easier to scale.",
    avatar: "/images/homereview2.png",
  },
  {
    name: "Sophia Martinez",
    role: "Operations Director",
    quote:
      "The attention to detail and operational speed were outstanding. We cut customer resolution times in half.",
    avatar: "/images/homereview3.png",
  },
];

export const techStack = [
  "Next.js",
  "React",
  "Node.js",
  "Python",
  "PostgreSQL",
  "AWS",
  "Docker",
];

export const footerLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const heroStats = {
  reviewsLabel: "Engineered for Uptime & Velocity",
  avatars: [
    "/images/homereview1.png",
    "/images/homereview2.png",
    "/images/homereview3.png",
  ],
};

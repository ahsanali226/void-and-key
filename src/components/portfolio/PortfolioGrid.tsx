"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  description: string;
  alt: string;
  image: string;
}

const portfolioProjects: ProjectItem[] = [
  {
    id: "proj-travel",
    title: "Travel Booking",
    category: "Web Development",
    description:
      "A travel booking experience designed to help users explore options and move through the booking journey with clarity.",
    alt: "Travel booking website interface designed by Void & Key.",
    image: "/images/travelboooking.png",
  },
  {
    id: "proj-iconography",
    title: "Iconography & Visual Assets",
    category: "UI/UX Design",
    subcategory: "Iconography",
    description:
      "A custom iconography system and interface visual language designed for clear navigation and intuitive digital product interactions.",
    alt: "Custom UI/UX iconography design by Void & Key.",
    image: "/images/iconography.jpg",
  },
  {
    id: "proj-dental",
    title: "Dental",
    category: "UI/UX Design",
    description:
      "A digital experience for a dental service, with clear navigation and user-focused presentation of information.",
    alt: "Dental service website and user interface design by Void & Key.",
    image: "/images/dental.png",
  },
  {
    id: "proj-smm",
    title: "Social Media Post",
    category: "Social Media Management",
    description:
      "Branded social content created to give a business a consistent, recognizable way to communicate with its audience.",
    alt: "Branded social media post designed by Void & Key.",
    image: "/images/socialmediapost.png",
  },
  {
    id: "proj-brand",
    title: "Brand Identity Guidelines",
    category: "Branding",
    description:
      "A visual identity reference that helps keep a brand’s look and feel consistent across its communications.",
    alt: "Brand identity guidelines designed by Void & Key.",
    image: "/images/brandidentityguideline.png",
  },
  {
    id: "proj-hoodie",
    title: "Premium Hoodie Poster Design",
    category: "Social Media Management",
    description:
      "Promotional creative for a premium apparel product, designed to bring product details and brand presentation together.",
    alt: "Promotional poster design for a premium hoodie.",
    image: "/images/premiumhoodieposterdesgin.png",
  },
  {
    id: "proj-appliance",
    title: "Home Appliance Service App",
    category: "UI/UX Design",
    description:
      "An app concept for home appliance services, designed to help customers find and navigate service information.",
    alt: "Home appliance service app interface designed by Void & Key.",
    image: "/images/homeapplianceappservice.png",
  },
  {
    id: "proj-cyber",
    title: "A.I & Threat Detection Platform",
    category: "Cybersecurity Services",
    description:
      "Real-time telemetry and anomaly detection pipelines securing enterprise cloud environments.",
    alt: "Cybersecurity dashboard interface designed by Void & Key.",
    image: "/images/Aiandcybersecurity.png",
  },
  {
    id: "proj-billing",
    title: "Billing Workflow System",
    category: "Back Office Operations",
    description:
      "Precision billing workflows and automated reconciliation pipelines reducing payment lags.",
    alt: "Billing solutions pipeline interface designed by Void & Key.",
    image: "/images/billingsolutionimg.png",
  },
  {
    id: "proj-support",
    title: "Omnichannel Support Suite",
    category: "Back Office Operations",
    description:
      "Unified triage across email, chat, and voice prioritizing First Contact Resolution.",
    alt: "Customer support management interface designed by Void & Key.",
    image: "/images/customersupport.png",
  },
];

// Exact filters from Document 3.pdf Page 21
const filterTabs = [
  "All",
  "Web Development",
  "UI/UX Design",
  "Branding",
  "Social Media Management",
  "Cybersecurity Services",
  "Back Office Operations",
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Filter projects based on active tab
  const filtered = portfolioProjects.filter((item) => {
    if (activeFilter === "All") return true;
    return item.category === activeFilter;
  });

  const visibleProjects = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="portfolio-grid" className="relative bg-[#0c0c0c] px-6 py-20 lg:px-12 lg:py-28">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-[450px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(221,121,0,0.1)_0%,transparent_70%)] blur-3xl" />

      <div className="mx-auto max-w-[1400px]">
        {/* Section Heading from Document 3.pdf Page 21 */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white/90">
            SELECTED PROJECTS
          </span>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,5.5vw,4.25rem)] font-bold tracking-tight text-gradient">
            A closer look at what we create.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Browse a selection of digital experiences and creative work from Void &amp; Key. Use the filters to explore projects by service area.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {filterTabs.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setShowAll(false);
                }}
                className={`relative rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "border border-amber bg-amber/15 text-white shadow-[0_0_20px_rgba(221,121,0,0.3)]"
                    : "border border-white/10 bg-white/5 text-white/70 hover:border-white/25 hover:text-white"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-white/10 bg-[#161616] p-4 transition-all duration-300 hover:border-amber/60 hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-[220px] sm:h-[240px] w-full overflow-hidden rounded-2xl bg-black">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="p-3 pt-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-xs font-semibold uppercase tracking-wider text-amber">
                        {project.category}
                      </span>
                      {project.subcategory && (
                        <span className="rounded-full border border-amber/30 bg-amber/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-light">
                          {project.subcategory}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 font-display text-xl font-bold text-white group-hover:text-amber-light transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle Button for More Projects */}
        {filtered.length > 6 && (
          <div className="mt-14 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2.5 rounded-full border border-amber/70 bg-transparent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-amber hover:bg-amber/10 hover:shadow-[0_0_25px_rgba(221,121,0,0.35)]"
            >
              <span>{showAll ? "View Less Projects" : "View More Projects"}</span>
              {showAll ? <ArrowUp className="h-4 w-4 text-amber" /> : <ArrowDown className="h-4 w-4 text-amber" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

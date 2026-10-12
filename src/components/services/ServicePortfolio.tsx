"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import type { PortfolioItem } from "@/data/servicesDetailData";

interface ServicePortfolioProps {
  portfolio: PortfolioItem[];
  title?: string;
  subtitle?: string;
}

export default function ServicePortfolio({
  portfolio,
  title = "Selected Projects & Deliverables",
  subtitle = "Real architectures, automated workflows, and production systems engineered by Void & Key.",
}: ServicePortfolioProps) {
  if (!portfolio || portfolio.length === 0) return null;

  return (
    <section className="relative overflow-hidden px-6 py-20 lg:px-12 lg:py-28 bg-[#0c0c0c]">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-amber/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-content">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur-md"
          >
            <FolderGit2 className="h-3.5 w-3.5 text-amber" />
            <span>PORTFOLIO & CASE HIGHLIGHTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold text-gradient leading-tight"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-[#141414] p-5 transition-all duration-500 hover:border-amber/60 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(255,122,0,0.12)]"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-[220px] sm:h-[240px] w-full overflow-hidden rounded-[20px] bg-black/60">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-3 pt-5">
                  <span className="inline-block rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber">
                    {item.category}
                  </span>

                  <h3 className="mt-3 font-display text-xl font-bold text-white transition-colors duration-300 group-hover:text-amber-light">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-white/65">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 border-t border-white/10 p-3 pt-4">
                <Link
                  href="/portfolio"
                  className="flex items-center justify-between text-xs font-semibold text-white/50 transition-colors duration-300 group-hover:text-amber"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-amber hover:bg-amber/10 hover:text-amber hover:shadow-[0_0_25px_rgba(255,122,0,0.25)]"
          >
            Explore Complete Portfolio
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

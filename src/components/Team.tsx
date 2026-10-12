"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Marzooq lakhani",
    role: "CEO",
    image: "/images/ceo.png",
  },
  {
    name: "Talib pirani",
    role: "CTO",
    image: "/images/developer.png",
  },
  {
    name: "Leslie Alexander",
    role: "Product Manager",
    image: "/images/meetourcreativeteamimg.png",
  },
  {
    name: "Courtney Henry",
    role: "UI/UX Designer",
    image: "/images/ui_ux_desginer.png",
  },
  {
    name: "Cameron Williamson",
    role: "Lead Developer",
    image: "/images/about_us_img1.png",
  },
  {
    name: "Brooklyn Simmons",
    role: "Creative Director",
    image: "/images/about_us_img2.png",
  },
];

export default function Team() {
  const [currentPage, setCurrentPage] = useState(0);

  // Show 2 members per slide page
  const itemsPerPage = 2;
  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);

  const prevSlide = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const nextSlide = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const currentMembers = teamMembers.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section id="team" className="bg-black px-6 py-20 lg:px-12 lg:py-28 text-white">
      <div className="mx-auto max-w-[1240px]">
        {/* Top Tag: WHO BUILDS YOUR PRODUCT */}
        <div className="mb-4 flex justify-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/90">
            WHO BUILDS YOUR PRODUCT <ArrowRight className="h-3.5 w-3.5 text-amber" />
          </span>
        </div>

        {/* Heading & Intro from Document 3.pdf */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold text-gradient leading-[1.1]">
              Led by practitioners, not account handlers.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
              At Void &amp; Key, clients work directly with senior architects and operational directors. No layers of non-technical project managers translating requirements. Just direct collaboration with the people writing your code and securing your pipelines.
            </p>
          </div>

          <a
            href="/contact"
            className="self-start lg:self-end rounded-full border border-white/25 bg-transparent px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-amber hover:text-amber hover:bg-white/5"
          >
            TALK TO ARCHITECTS
          </a>
        </div>

        {/* Cards Row with Left & Right Floating Arrows */}
        <div className="relative flex items-center justify-center gap-4 sm:gap-8 lg:gap-12">
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous team member"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black text-white transition-all duration-300 hover:border-[#f59d42] hover:text-[#f59d42]"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          {/* 2 Members Cards Container */}
          <div className="flex w-full max-w-[760px] items-center justify-center gap-6 sm:gap-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid w-full grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
              >
                {currentMembers.map((member) => (
                  <div key={member.name} className="flex flex-col">
                    {/* Square Image Box */}
                    <div className="relative aspect-square w-full overflow-hidden bg-[#121212]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 360px"
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Member Meta */}
                    <div className="mt-4 text-left">
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                        {member.role}
                      </p>
                      <h4 className="mt-1 text-lg sm:text-xl font-bold text-white tracking-tight">
                        {member.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow Button (Solid Orange) */}
          <button
            onClick={nextSlide}
            aria-label="Next team member"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f59d42] text-black transition-all duration-300 hover:bg-[#dd7900] shadow-[0_0_20px_rgba(245,157,66,0.3)]"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-10 flex items-center justify-center gap-2.5">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${currentPage === idx
                  ? "w-2 bg-[#f59d42]"
                  : "w-2 bg-[#333333] hover:bg-white/40"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
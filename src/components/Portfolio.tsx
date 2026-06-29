"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioFilters, portfolioItems } from "@/data/content";

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <section id="portfolio" className="px-6 py-24 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold text-white">
            Portfolio
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {portfolioFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-pill px-5 py-2.5 text-sm transition-colors ${
                active === filter
                  ? "bg-cta-gradient-light text-ink"
                  : "border border-line text-white/80 hover:border-amber/60 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[28px] border border-line"
            >
              <div className="relative h-[280px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <span className="mt-2 inline-flex items-center gap-2 text-sm text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-light" />
                  {item.category}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

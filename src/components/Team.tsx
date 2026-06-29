"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { team } from "@/data/content";

export default function Team() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section className="px-6 py-24 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-content">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-pill border border-line bg-surface px-5 py-2.5 text-sm font-medium text-white/90">
              Our Team
              <ArrowRight className="h-3.5 w-3.5 -rotate-45 text-amber" />
            </span>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold text-white">
              Meet Our Creative Team
            </h2>
          </div>

          <a
            href="#team"
            className="rounded-pill border border-line px-6 py-3 text-sm text-white/90 transition-colors hover:border-amber/60"
          >
            View All Team
          </a>
        </div>

        <div className="relative mt-14">
          <div
            ref={scroller}
            className="flex gap-8 overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden"
          >
            {team.map((member, i) => (
              <div key={i} className="w-[280px] shrink-0">
                <div className="relative h-[340px] w-full overflow-hidden rounded-[28px] border border-line">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-sm text-amber-light">{member.role}</p>
                <p className="mt-1 font-display text-xl text-white">
                  {member.name}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              aria-label="Previous team member"
              onClick={() => scrollBy(-1)}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-line text-white transition-colors hover:border-amber/60 hover:text-amber-light"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next team member"
              onClick={() => scrollBy(1)}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-line text-white transition-colors hover:border-amber/60 hover:text-amber-light"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

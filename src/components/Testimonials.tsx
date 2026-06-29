"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const t = testimonials[idx];

  return (
    <section className="px-6 py-24 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold text-white">
            What Our Clients Say
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            Real feedback from the teams and founders we&rsquo;ve partnered
            with.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl rounded-[36px] border border-line bg-surface/60 px-8 py-14 text-center sm:px-16">
          <Quote className="mx-auto h-10 w-10 text-amber/40" />

          <p className="mt-8 font-display text-xl leading-relaxed text-white sm:text-2xl">
            &ldquo;{t.quote}&rdquo;
          </p>

          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-amber/40">
              <Image src={t.avatar} alt={t.name} fill className="object-cover" />
            </div>
            <div>
              <p className="font-display text-lg text-white">{t.name}</p>
              <p className="text-sm text-white/60">{t.role}</p>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-white transition-colors hover:border-amber/60"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === idx ? "bg-amber" : "bg-line"
                }`}
              />
            ))}

            <button
              aria-label="Next testimonial"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-white transition-colors hover:border-amber/60"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

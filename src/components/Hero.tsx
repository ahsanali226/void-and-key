"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import { heroStats } from "@/data/content";
import TalkButton from "./TalkButton";
import ImageStack from "./ImageStack";
import ParticleCursorCanvas from "./ParticleCursorCanvas";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-40 lg:pb-24"
    >
      {/* Background image + grain texture overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-90"
        />
        {/* Hero Texture PNG Overlay */}
        <Image
          src="/images/hero-texture.png"
          alt=""
          fill
          priority
          className="object-cover opacity-50 mix-blend-overlay pointer-events-none"
        />
        {/* Interactive Moving Particle & Texture Cursor Canvas */}
        <ParticleCursorCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/90 pointer-events-none" />
      </div>

      <div className="mx-auto grid max-w-[1520px] grid-cols-1 gap-10 pl-2 sm:pl-4 lg:pl-6 xl:pl-8 pr-6 sm:pr-8 lg:pr-12 lg:grid-cols-2 lg:items-center">
        {/* Left Column: Vertical Social Sidebar + Headline + Copy + CTA */}
        <div className="flex items-center">
          {/* Vertical Social Links Sidebar */}
          <div className="hidden lg:flex shrink-0 w-8 mr-8 lg:mr-12 xl:mr-16 self-stretch relative items-center justify-center">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[12px] font-semibold tracking-[0.3em] text-white/60 hover:text-amber transition-colors">
              INSTAGRAM&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;FACEBOOK&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;TWITTER
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h1 className="font-display tracking-tight">
              <span className="block text-[clamp(3.25rem,6.5vw,5.5rem)] font-bold text-gradient leading-[1.05]">
                Unlocking
              </span>
              <span className="block text-[clamp(2rem,4.2vw,3.75rem)] font-light text-white mt-2 leading-[1.1] whitespace-nowrap">
                your <span className="font-semibold text-white">Digital Outreach.</span>
              </span>
            </h1>

            <p className="mt-7 ml-2 sm:ml-4 lg:ml-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg font-body font-normal">
              We help brands solve complex challenges with smart strategy,
              modern design, and reliable digital solutions that turn ideas into
              measurable growth.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-6">
              <TalkButton href="/contact" />

              <div className="flex items-center gap-3.5 pl-1">
                <div className="flex -space-x-3">
                  {heroStats.avatars.map((src, i) => (
                    <div
                      key={i}
                      className="relative h-12 w-12 sm:h-13 sm:w-13 overflow-hidden rounded-full border-2 border-amber/60 bg-ink shadow-md"
                    >
                      <Image src={src} alt="" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-1 text-amber">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber text-amber" />
                    ))}
                  </div>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-white/85">
                    {heroStats.reviewsLabel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Stacked Card Images */}
        <ImageStack />
      </div>
    </section>
  );
}

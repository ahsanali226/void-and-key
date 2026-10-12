"use client";
import type { ReactNode } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { heroStats } from "@/data/content";
import TalkButton from "./TalkButton";
import ImageStack from "./ImageStack";
import ParticleCursorCanvas from "./ParticleCursorCanvas";

interface HeroImage {
  src: string;
  alt: string;
}

interface HeroProps {
  badge?: string;
  highlightTitle?: string;
  mainTitle?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  cardImages?: HeroImage[];
  showSocialSidebar?: boolean;
  showImageStack?: boolean;
  customRightContent?: React.ReactNode;
}

const DEFAULT_BADGE = "ENTERPRISE TECHNOLOGY & BUSINESS ARCHITECTURE";
const DEFAULT_HIGHLIGHT = "We Build the Systems";
const DEFAULT_MAIN = "That Run Modern Business.";
const DEFAULT_DESCRIPTION =
  "High-performance software engineering, resilient cloud security, and streamlined operational backbones designed for scale without friction.";

export default function Hero({
  badge = DEFAULT_BADGE,
  highlightTitle = DEFAULT_HIGHLIGHT,
  mainTitle = DEFAULT_MAIN,
  subtitle,
  description = DEFAULT_DESCRIPTION,
  ctaText = "Schedule an Engineering Call",
  ctaLink = "/contact",
  secondaryCtaText,
  secondaryCtaLink,
  cardImages,
  showSocialSidebar = true,
  showImageStack = true,
  customRightContent,
}: HeroProps) {
  const isDefaultHome = highlightTitle === DEFAULT_HIGHLIGHT && mainTitle === DEFAULT_MAIN;

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
          {showSocialSidebar && (
            <div className="hidden lg:flex shrink-0 w-8 mr-8 lg:mr-12 xl:mr-16 self-stretch relative items-center justify-center">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[12px] font-semibold tracking-[0.3em] text-white/60 hover:text-amber transition-colors">
                INSTAGRAM&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;FACEBOOK&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;TWITTER
              </div>
            </div>
          )}

          <div className="flex-1 min-w-0">
            {badge && (
              <span className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-transparent px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white/90">
                {badge}
              </span>
            )}

            <h1 className="font-display tracking-tight">
              <span className="block text-[clamp(2.75rem,5.8vw,5.25rem)] font-bold text-gradient leading-[1.08]">
                {highlightTitle}
              </span>
              <span className="block text-[clamp(2rem,4.2vw,3.75rem)] font-semibold text-white mt-2 leading-[1.1]">
                {mainTitle}
              </span>
            </h1>

            {subtitle && (
              <p className="mt-6 max-w-xl text-lg font-semibold leading-snug text-white/90 sm:text-xl font-body">
                {subtitle}
              </p>
            )}

            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg font-body font-normal">
              {description}
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              <TalkButton href={ctaLink} label={ctaText} />

              {(secondaryCtaText || isDefaultHome) && (
                <a
                  href={secondaryCtaLink || "/#services"}
                  className="inline-flex items-center gap-2 rounded-pill border border-line bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-amber/60 hover:text-amber"
                >
                  {secondaryCtaText || "Explore Capabilities"}
                </a>
              )}
            </div>

            {/* Social Proof Banner from Document 3.pdf */}
            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
              <div className="flex -space-x-3">
                {heroStats.avatars.map((src, i) => (
                  <div
                    key={i}
                    className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-amber/60 bg-ink shadow-md"
                  >
                    <Image src={src} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-1 text-amber">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber text-amber" />
                  ))}
                </div>
                <p className="mt-1 text-xs sm:text-sm font-medium text-white/80">
                  Engineered for uptime, security, and measurable operational velocity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Stacked Card Images */}
        {customRightContent ? (
          customRightContent
        ) : (
          showImageStack && <ImageStack images={cardImages} />
        )}
      </div>
    </section>
  );
}

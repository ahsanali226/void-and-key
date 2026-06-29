import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { heroStats } from "@/data/content";
import SlideButton from "./SlideButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-40 pb-24 sm:pt-48 lg:pt-56 lg:pb-36"
    >
      {/* Background image + dark gradient overlay, per Figma "image 2" / "bg 1" */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div className="mx-auto grid max-w-content grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-12">
        {/* Headline + copy + CTA */}
        <div className="flex">
          {/* Vertical social links along the side of the text */}
          <div className="relative hidden w-12 shrink-0 lg:block xl:w-16">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-sm tracking-widest text-white/80">
              INSTAGRAM&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;FACEBOOK&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;TWITTER
            </div>
          </div>
          
          <div className="flex-1">
            <h1 className="font-display text-[clamp(3rem,8vw,6.25rem)] font-bold leading-[1.1] text-gradient">
            The Key
          </h1>
          <p className="mt-1 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] text-white">
            To All Your <span className="font-bold">Problems.</span>
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <SlideButton text="Let's Talk" />

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {heroStats.avatars.map((src, i) => (
                  <div
                    key={i}
                    className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-ink"
                  >
                    <Image src={src} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-1 text-amber-light">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-1 text-sm text-white/70">
                  {heroStats.reviewsLabel}
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Floating card stack visual */}
        <div className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[520px] lg:h-[600px]">
          <div className="absolute right-0 top-10 h-[85%] w-[85%] rotate-6 overflow-hidden rounded-[32px] border border-white/10 shadow-2xl sm:rotate-3">
            <Image
              src="/images/hero_card_img1.png"
              alt="Team collaborating"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute left-0 bottom-0 h-[80%] w-[80%] -rotate-6 overflow-hidden rounded-[32px] border border-white/10 shadow-2xl sm:-rotate-3">
            <Image
              src="/images/hero_card_img2.png"
              alt="Team reviewing work"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

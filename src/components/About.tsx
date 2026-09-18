import { ArrowUpRight } from "lucide-react";
import { aboutServices } from "@/data/content";
import AboutImages from "./AboutImages";

export default function About() {
  return (
    <section id="about" className="px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div>
          {/* Eyebrow badge matching design screenshot */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white/90">
            ABOUT US
            <ArrowUpRight className="h-3.5 w-3.5 text-amber" />
          </span>

          {/* Headline with refined lightweight typography */}
          <h2 className="mt-8 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.15] tracking-tight font-normal">
            <span className="font-light text-white">We </span>
            <span className="font-semibold text-white">Craft </span>
            <span className="font-light text-white">Wonderful</span>
            <br />
            <span className="font-bold text-gradient">Digital Experiences</span>
            <br />
            <span className="font-light text-white">For Brands</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            At Void & Key, we blend creativity with technology to build
            digital experiences that captivate and convert. From strategy to
            execution, our team delivers results that elevate your brand
            and drive real growth.
          </p>

          {/* Numbered services list matching design screenshot */}
          <div className="mt-10 flex flex-wrap gap-12 sm:gap-16">
            {aboutServices.map((s) => (
              <div key={s.number} className="border-b border-white/20 pb-2">
                <span className="text-sm font-semibold text-[#dd7900]">{s.number}</span>
                <p className="mt-1 font-display text-lg font-medium text-white">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom link matching design screenshot */}
          <a
            href="#services"
            className="mt-10 inline-flex items-center gap-2 text-base font-medium text-amber border-b border-amber/60 pb-0.5 hover:text-amber-light hover:border-amber-light transition-colors"
          >
            More about us
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Right side tall images without border/stroke */}
        <AboutImages />
      </div>
    </section>
  );
}

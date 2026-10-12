import { ArrowUpRight } from "lucide-react";
import { coreValueProposition } from "@/data/content";
import AboutImages from "./AboutImages";

export default function About() {
  return (
    <section id="about" className="px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div>
          {/* Eyebrow badge matching Document 3.pdf */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white/90">
            {coreValueProposition.eyebrow}
            <ArrowUpRight className="h-3.5 w-3.5 text-amber" />
          </span>

          {/* Headline matching Document 3.pdf */}
          <h2 className="mt-8 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.15] tracking-tight font-normal">
            <span className="font-semibold text-white">Technology is only as good </span>
            <br className="hidden sm:block" />
            <span className="font-bold text-gradient">as the operations supporting it.</span>
          </h2>

          <div className="mt-6 space-y-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {coreValueProposition.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Capabilities Matrix matching Document 3.pdf */}
          <div className="mt-10 space-y-4 max-w-xl">
            {coreValueProposition.capabilitiesMatrix.map((item) => (
              <div
                key={item.number}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-amber/40"
              >
                <span className="font-display text-sm font-bold text-amber shrink-0 pt-0.5">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/65 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom link to services */}
          <a
            href="#services"
            className="mt-10 inline-flex items-center gap-2 text-base font-medium text-amber border-b border-amber/60 pb-0.5 hover:text-amber-light hover:border-amber-light transition-colors"
          >
            Explore our solutions
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Right side tall images */}
        <AboutImages />
      </div>
    </section>
  );
}

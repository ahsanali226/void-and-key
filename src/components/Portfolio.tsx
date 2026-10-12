import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/data/content";

export default function Portfolio() {
  return (
    <section id="case-studies" className="px-6 py-14 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white/90">
            VERIFIED OUTCOMES
          </span>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold text-gradient">
            Work engineered for measurable impact.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Real enterprise architectures and modernized back-office workflows delivering quantifiable performance gains.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="group flex flex-col justify-between rounded-[32px] border border-line bg-surface/80 p-6 sm:p-8 transition-colors hover:border-amber/60"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-amber">
                    {study.number}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                    Enterprise Impact
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold text-white group-hover:text-amber-light transition-colors">
                  {study.title}
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                      The Challenge
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-white/75">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                      Architecture
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-white/75">
                      {study.architecture}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-amber/30 bg-amber/[0.05] p-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber" />
                      <p className="text-xs font-semibold uppercase tracking-wider text-amber">
                        Measurable Result
                      </p>
                    </div>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-white">
                      {study.result}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-amber hover:text-amber-light transition-colors"
                >
                  View in Project Portfolio
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-pill border border-line bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-amber/60 hover:text-amber"
          >
            Explore Complete Portfolio
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

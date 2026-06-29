import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-6 py-16 lg:px-12">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-8 rounded-[36px] border border-line bg-gradient-to-br from-surface to-ink px-8 py-14 text-center sm:flex-row sm:text-left sm:px-14">
        <div>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-white">
            Unique Predicament?
          </h2>
          <p className="mt-3 text-base text-white/70 sm:text-lg">
            Reach out, see if Void &amp; Key can help.
          </p>
        </div>

        <a href="#contact" className="btn-pill !h-[56px] shrink-0 !text-lg">
          <span className="btn-pill-icon !h-[44px] !w-[44px] !min-w-[44px]">
            <ArrowRight className="h-5 w-5" />
          </span>
          Get Started
        </a>
      </div>
    </section>
  );
}

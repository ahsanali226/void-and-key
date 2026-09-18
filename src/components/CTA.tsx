import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="flex items-center justify-center bg-black px-6 py-10 lg:px-12">
      <div className="relative mx-auto flex w-full max-w-content flex-col items-center justify-between gap-8 overflow-hidden rounded-[30px] bg-[linear-gradient(135deg,#8d2500_0%,#b93200_55%,#932400_100%)] px-8 py-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:flex-row sm:px-14 sm:py-12 sm:text-left">
        <div className="absolute bottom-[-320px] left-[120px] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,153,0,0.95)_0%,rgba(255,153,0,0.4)_45%,transparent_70%)] blur-[40px]" />

        <div className="relative z-10">
          <h2 className="font-display text-[clamp(2.25rem,6vw,3.75rem)] font-bold leading-none text-white">
            Unique Predicament?
          </h2>
          <p className="mt-4 text-base text-[#f5f5f5] sm:text-[17px]">
            Reach out, see if Void & Key can help.
          </p>
        </div>

        <a
          href="/contact"
          className="relative z-10 inline-flex items-center gap-4 rounded-full bg-white px-7 py-4 text-base font-semibold text-[#111] transition-transform duration-300 hover:-translate-y-1"
        >
          <span>Get Started</span>
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

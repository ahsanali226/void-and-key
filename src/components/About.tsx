import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { aboutServices } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-16 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-pill border border-line bg-surface px-5 py-2.5 text-sm font-medium text-white/90">
            About Us
            <ArrowRight className="h-3.5 w-3.5 -rotate-45 text-amber" />
          </span>

          <h2 className="mt-8 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.1] text-white">
            We Craft Wonderful Digital Experiences{" "}
            <span className="text-gradient">For Brands</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
            text ever since the 1500s.
          </p>

          <div className="mt-10 flex flex-wrap gap-12">
            {aboutServices.map((s) => (
              <div key={s.number} className="border-t border-white/20 pt-4">
                <span className="text-sm text-amber-light">{s.number}</span>
                <p className="mt-2 font-display text-xl text-white">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#services"
            className="mt-10 inline-flex items-center gap-2 border-b border-white/40 pb-1 text-base text-white transition-colors hover:border-amber-light hover:text-amber-light"
          >
            More about us
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-[420px] sm:h-[480px]">
          <div className="absolute right-0 top-0 h-[88%] w-[78%] overflow-hidden rounded-[28px] border border-white/10">
            <Image
              src="/images/about_us_img2.png"
              alt="Team collaborating in a workshop"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 h-[55%] w-[55%] overflow-hidden rounded-[28px] border-4 border-ink shadow-2xl">
            <Image
              src="/images/about_us_img1.png"
              alt="Team member smiling"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { marqueeItems } from "@/data/content";

export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-4 sm:py-6">
      {/* Tilted strip container with visible dark grey background matching reference screenshot */}
      <div className="-rotate-[1.5deg] scale-x-110 bg-[#1c1c1c] border-y border-white/15 py-4 sm:py-5 shadow-2xl">
        <div className="animate-marquee flex w-max items-center">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center whitespace-nowrap">
              {/* Orange bullet dot with subtle glow */}
              <span className="mx-8 sm:mx-10 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#FF7E21] shadow-[0_0_8px_rgba(255,126,33,0.6)]" />
              {/* Service label */}
              <span className="font-body text-sm font-normal uppercase tracking-[0.2em] text-white/90 sm:text-base">
                {item}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

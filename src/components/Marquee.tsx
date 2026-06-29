import { Star } from "lucide-react";
import { marqueeItems } from "@/data/content";

export default function Marquee() {
  return (
    <section className="overflow-hidden border-y border-line bg-surface py-6">
      <div className="animate-marquee flex w-max items-center gap-12">
        {/* Double the items so the second set seamlessly follows the first */}
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 whitespace-nowrap font-display text-xl text-white/80 sm:text-2xl"
          >
            <Star className="h-4 w-4 fill-amber text-amber" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

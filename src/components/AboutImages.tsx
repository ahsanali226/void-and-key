import Image from "next/image";

export default function AboutImages() {
  return (
    <div className="relative mx-auto h-[540px] sm:h-[580px] w-full max-w-[560px]">
      {/* Left tall image (No border/stroke) */}
      <div className="absolute left-0 top-0 z-10">
        <div className="relative h-[480px] sm:h-[520px] w-[240px] sm:w-[260px] overflow-hidden rounded-sm shadow-2xl">
          <Image
            src="/images/about_us_img1.png"
            alt="Team member smiling"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Right tall image (No border/stroke, shifted down) */}
      <div className="absolute right-0 top-16 sm:top-20 z-10">
        <div className="relative h-[480px] sm:h-[520px] w-[240px] sm:w-[260px] overflow-hidden rounded-sm shadow-2xl">
          <Image
            src="/images/about_us_img2.png"
            alt="Team collaborating in a workshop"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Overlapping dark circle badge */}
      <div className="absolute left-1/2 top-[45%] z-20 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-full border border-white/10 bg-[#0c0c0c] shadow-[0_0_30px_rgba(0,0,0,0.8)]">
          <Image
            src="/images/logo.png"
            alt="Void & Key logo"
            width={75}
            height={75}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

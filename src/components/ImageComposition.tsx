import Image from "next/image";

interface ImageCompositionProps {
  mainSrc?: string;
  mainAlt?: string;
  insetSrc?: string;
  insetAlt?: string;
}

export default function ImageComposition({
  mainSrc = "/images/hero-main.png",
  mainAlt = "Software developer working with code",
  insetSrc = "/images/hero-inset.png",
  insetAlt = "AI product development workspace",
}: ImageCompositionProps) {
  return (
    <div className="relative mx-auto w-full max-w-[640px] pt-4 pb-8 pl-4 sm:pl-8 sm:pb-12">
      {/* 1. Main Large Image (Top-Right with vibrant orange border) */}
      <div className="relative ml-auto aspect-[674/747] w-[84%] overflow-hidden rounded-[24px] sm:rounded-[30px] border-2 border-[#ff7a00] bg-surface shadow-[0_0_35px_rgba(255,122,0,0.18)] transition-all duration-300 hover:border-amber-light hover:shadow-[0_0_45px_rgba(255,122,0,0.35)]">
        <Image
          src={mainSrc}
          alt={mainAlt}
          fill
          priority
          sizes="(max-width: 768px) 80vw, 560px"
          className="object-cover"
        />
      </div>

      {/* 2. Inset Overlapping Image (Bottom-Left) */}
      <div className="absolute -bottom-4 left-0 z-20 aspect-[414/459] w-[58%] sm:w-[56%] overflow-hidden rounded-[18px] sm:rounded-[22px] border border-white/15 bg-[#0a0a0a] shadow-[0_25px_60px_rgba(0,0,0,0.95)] transition-all duration-300 hover:scale-[1.02] sm:-bottom-6">
        <Image
          src={insetSrc}
          alt={insetAlt}
          fill
          sizes="(max-width: 768px) 50vw, 380px"
          className="object-cover"
        />
      </div>

      {/* 3. Ambient Amber Glow */}
      <div className="pointer-events-none absolute right-8 top-8 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,122,0,0.22)_0%,transparent_70%)] blur-3xl" />
    </div>
  );
}

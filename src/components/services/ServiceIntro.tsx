import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ServiceDetail } from "@/data/servicesDetailData";

interface ServiceIntroProps {
    intro: ServiceDetail["intro"];
}

export default function ServiceIntro({ intro }: ServiceIntroProps) {
    const [primary, secondary] = intro.photos;

    return (
        <section className="px-6 py-16 lg:px-12 lg:py-24">
            <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
                {/* Left: Badge + heading + body copy */}
                <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#ff7a00]">
                        {intro.badge}
                        <ArrowUpRight className="h-3.5 w-3.5 text-[#ff7a00]" />
                    </span>

                    <h2 className="mt-8 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.12] tracking-tight">
                        {intro.headingLines ? (
                            intro.headingLines.map((line, lineIndex) => (
                                <span key={lineIndex} className="block">
                                    {line.segments.map((seg, segIndex) => {
                                        if (seg.gradient) {
                                            return (
                                                <span
                                                    key={segIndex}
                                                    className="inline-block font-bold bg-gradient-to-r from-[#ff6b00] via-[#ff9e40] to-[#ffd4a8] bg-clip-text text-transparent"
                                                >
                                                    {seg.text}
                                                </span>
                                            );
                                        }
                                        return (
                                            <span
                                                key={segIndex}
                                                className={
                                                    seg.bold
                                                        ? "font-bold text-white"
                                                        : "font-light text-white"
                                                }
                                            >
                                                {seg.text}
                                            </span>
                                        );
                                    })}
                                </span>
                            ))
                        ) : (
                            <>
                                <span className="font-light text-white">{intro.headingPlain} </span>
                                <span className="font-bold text-gradient">{intro.headingAccent}</span>
                            </>
                        )}
                    </h2>

                    <div className="mt-6 max-w-xl space-y-5">
                        {intro.paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-base leading-relaxed text-white/75 sm:text-lg"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Right: Overlapping image composition matching reference design */}
                <div className="relative mx-auto w-full max-w-[640px] pt-4 pb-8 pl-4 sm:pl-8 sm:pb-12">
                    {/* Main Image (Top-Right with vibrant orange border) */}
                    {primary && (
                        <div className="relative ml-auto aspect-[674/747] w-[84%] overflow-hidden rounded-[24px] sm:rounded-[30px] border-2 border-[#ff7a00] bg-surface shadow-[0_0_35px_rgba(255,122,0,0.18)] transition-all duration-300 hover:border-amber-light hover:shadow-[0_0_45px_rgba(255,122,0,0.35)]">
                            <Image
                                src={primary.src}
                                alt={primary.alt}
                                fill
                                priority
                                sizes="(max-width: 768px) 80vw, 560px"
                                className="object-cover"
                            />
                        </div>
                    )}

                    {/* Inset Image (Bottom-Left overlapping card) */}
                    {secondary && (
                        <div className="absolute -bottom-4 left-0 z-20 aspect-[414/459] w-[58%] sm:w-[56%] overflow-hidden rounded-[18px] sm:rounded-[22px] border border-white/15 bg-[#0a0a0a] shadow-[0_25px_60px_rgba(0,0,0,0.95)] transition-all duration-300 hover:scale-[1.02] sm:-bottom-6">
                            <Image
                                src={secondary.src}
                                alt={secondary.alt}
                                fill
                                sizes="(max-width: 768px) 50vw, 380px"
                                className="object-cover"
                            />
                        </div>
                    )}

                    {/* Ambient amber glow behind the stack */}
                    <div className="pointer-events-none absolute right-8 top-8 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,122,0,0.22)_0%,transparent_70%)] blur-3xl" />
                </div>
            </div>
        </section>
    );
}

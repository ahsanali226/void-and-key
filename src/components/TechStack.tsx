import { techStack } from "@/data/content";

export default function TechStack() {
  return (
    <section className="px-6 py-24 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold text-white">
            Our Tech Stack
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            We leverage industry-leading technologies to build scalable,
            future-proof solutions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="group flex h-[120px] items-center justify-center rounded-[20px] border border-line bg-surface/60 transition-all duration-300 hover:border-amber/60 hover:shadow-[0_0_30px_rgba(221,121,0,0.08)]"
            >
              <span className="font-display text-lg text-white/80 transition-colors group-hover:text-amber-light">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

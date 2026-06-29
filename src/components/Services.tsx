import Image from "next/image";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="px-6 py-24 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold text-white">
            Services
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            Void &amp; Key delivers modern, scalable digital solutions
            engineered to solve complex problems with precision, security,
            and performance.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-[28px] border border-line bg-surface/60 p-3 transition-colors hover:border-amber/60"
            >
              <div className="relative h-56 w-full overflow-hidden rounded-3xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-3 py-6">
                <h3 className="font-display text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/65">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

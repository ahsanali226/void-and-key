import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="px-6 py-14 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white/90">
            OUR CAPABILITIES
          </span>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold text-gradient">
            Purpose-built systems for high-growth enterprises.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Void &amp; Key delivers modern, scalable digital architectures and managed operational systems engineered to drive velocity and clarity.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={`/services/${service.slug}`}
              aria-label={`View ${service.title} service details`}
              className="group flex flex-col justify-between rounded-[28px] border border-line bg-surface/60 p-4 transition-all duration-300 hover:border-amber/60 hover:-translate-y-1"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                </div>
                <div className="px-2 pt-6">
                  <h3 className="font-display text-xl font-semibold text-white group-hover:text-amber-light transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-1.5 px-2 pt-3 border-t border-white/10 text-xs font-semibold text-amber group-hover:text-amber-light">
                <span>{service.linkText || "Explore Solution →"}</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

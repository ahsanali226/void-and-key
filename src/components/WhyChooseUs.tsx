"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    title: "Experienced Team",
    description: "Skilled professionals focused on delivering reliable digital experiences.",
    image: "/images/Experienced_Team.png",
    alt: "Experienced team meeting in a modern office",
  },
  {
    title: "Business-Focused Solutions",
    description: "Technology designed around your goals, users, and operational needs.",
    image: "/images/Business-Focused_Solutions.png",
    alt: "Business professionals collaborating around a table",
  },
  {
    title: "Modern Technology",
    description: "We use current development technologies to build fast and dependable solutions.",
    image: "/images/Modern_Technology.png",
    alt: "Developers working with multiple monitors and modern tech",
  },
  {
    title: "Scalable Architecture",
    description: "Solutions built to evolve as your business grows.",
    image: "/images/Scalable_Architecture.png",
    alt: "Server room with scalable infrastructure",
  },
  {
    title: "Quality Assurance",
    description: "Careful testing for responsiveness, performance, and reliability.",
    image: "/images/Quality_Assurance.png",
    alt: "QA team testing on multiple devices",
  },
  {
    title: "Long-Term Support",
    description: "Continued support beyond launch. We stay with you as your product evolves.",
    image: "/images/Long-Term-Support.png",
    alt: "Support team providing long-term assistance",
  },
];

function ReasonCard({ reason, index }: { reason: (typeof reasons)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="why-card"
      style={{
        transitionDelay: `${index * 80}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
      }}
    >
      <div className="why-card__img-wrap">
        <Image
          src={reason.image}
          alt={reason.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="why-card__img"
        />
        <div className="why-card__img-overlay" />
      </div>
      <div className="why-card__body">
        <h3 className="why-card__title">{reason.title}</h3>
        <p className="why-card__desc">{reason.description}</p>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="why-section">
      <div className="why-heading-wrap">
        <h2 className="why-heading">
          Why
          <br />
          <span className="text-gradient">Choose Us?</span>
        </h2>
      </div>
      <div className="why-grid">
        {reasons.map((reason, i) => (
          <ReasonCard key={reason.title} reason={reason} index={i} />
        ))}
      </div>
    </section>
  );
}
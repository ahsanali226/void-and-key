"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ServiceDetail } from "@/data/servicesDetailData";

interface ServiceWhyChooseUsProps {
    whyChooseUs: ServiceDetail["whyChooseUs"];
}

function ReasonCard({
    item,
    index,
}: {
    item: ServiceDetail["whyChooseUs"]["items"][0];
    index: number;
}) {
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
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="why-card__img"
                />
                <div className="why-card__img-overlay" />
            </div>
            <div className="why-card__body">
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__desc">{item.description}</p>
            </div>
        </div>
    );
}

export default function ServiceWhyChooseUs({
    whyChooseUs,
}: ServiceWhyChooseUsProps) {
    return (
        <section id="why-choose-us" className="why-section">
            <div className="why-heading-wrap">
                <h2 className="why-heading">
                    {whyChooseUs.titlePlain}
                    <br />
                    <span className="text-gradient">{whyChooseUs.titleAccent}</span>
                </h2>
            </div>
            <div className="why-grid">
                {whyChooseUs.items.map((item, i) => (
                    <ReasonCard key={item.title} item={item} index={i} />
                ))}
            </div>
        </section>
    );
}

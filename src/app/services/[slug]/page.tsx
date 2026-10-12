import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceOfferings from "@/components/services/ServiceOfferings";
import ServiceWhyChooseUs from "@/components/services/ServiceWhyChooseUs";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServicePortfolio from "@/components/services/ServicePortfolio";

import { servicesDetail, serviceSlugs } from "@/data/servicesDetailData";

interface ServicePageProps {
    params: { slug: string };
}

export function generateStaticParams() {
    return serviceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
    const service = servicesDetail[params.slug];

    if (!service) {
        return { title: "Service Not Found – Void and Key" };
    }

    return {
        title: `${service.title} – Void and Key`,
        description: service.metaDescription,
    };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
    const service = servicesDetail[params.slug];

    if (!service) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main>
                <Hero
                    highlightTitle={service.hero.highlightTitle}
                    mainTitle={service.hero.mainTitle}
                    subtitle={service.hero.subtitle}
                    description={service.hero.description}
                    ctaText={service.hero.ctaText}
                    ctaLink={service.hero.ctaLink}
                    showSocialSidebar={false}
                    showImageStack={true}
                    cardImages={service.hero.cardImages}
                />
                <Marquee />
                <ServiceIntro intro={service.intro} />
                <ServiceOfferings offerings={service.offerings} />
                <ServiceWhyChooseUs whyChooseUs={service.whyChooseUs} />
                <ServiceProcess process={service.process} />
                <ServicePortfolio portfolio={service.portfolio} />
                <Testimonials items={service.testimonials} />
                <TechStack techStack={service.techStack} />
                <CTA />
            </main>
            <Footer />
        </>
    );
}

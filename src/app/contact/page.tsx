import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BookingSection from "@/components/BookingSection";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact Void & Key | Start Your Technical or Operations Project",
  description:
    "Connect with our engineering and operations leads to review architecture, project timelines, and operational requirements.",
  keywords: [
    "contact Void & Key",
    "tech consultation",
    "enterprise project intake",
    "software architecture consultation",
  ],
};

export default function ContactPage() {
  return (
    <div className="booking-page-root">
      <Navbar />
      <main>
        {/* Hero Section matching Document 3.pdf Page 13 */}
        <Hero
          badge="PROJECT INTAKE & ARCHITECTURE CONSULTATION"
          highlightTitle="Let’s Discuss"
          mainTitle="Your Technical Architecture or Operational Needs."
          description="Whether you’re modernizing a legacy web platform or offloading operational bottlenecks, our senior team is ready to map out an execution plan."
          ctaText="Schedule a Call"
          ctaLink="#booking"
          secondaryCtaText="Submit Project Inquiry"
          secondaryCtaLink="#booking"
          showSocialSidebar={false}
          showImageStack={true}
          cardImages={[
            { src: "/images/contact_image_1.png", alt: "Senior architects reviewing project requirements" },
            { src: "/images/contact_image_2.png", alt: "Technical consultation and execution planning" },
            { src: "/images/contact_image_3.png", alt: "Operations and software roadmap session" },
          ]}
        />

        {/* Marquee Ticker */}
        <Marquee />

        {/* Dual Tab Booking & Contact Section */}
        <BookingSection id="booking" />

        {/* Direct Response SLA Callout */}
        <div className="border-y border-white/10 bg-surface/40 py-8 px-6 text-center">
          <div className="mx-auto max-w-2xl">
            <span className="font-display text-xs font-bold uppercase tracking-wider text-amber">
              DIRECT RESPONSE SLA
            </span>
            <p className="mt-2 text-sm text-white/80 sm:text-base leading-relaxed">
              We review and respond to inquiries within <strong>1 business day</strong>. Every intake is assessed by a technical director, not an outsourced SDR.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <Testimonials />

        {/* Tech Stack */}
        <TechStack />

        {/* CTA Banner */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

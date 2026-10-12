import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Our Portfolio | Web Development, UI/UX, Branding & Social Media | Void & Key",
  description:
    "Explore selected Void & Key projects in web development, UI/UX, branding, and social media. See how thoughtful design and technology support business goals.",
  keywords: [
    "web development portfolio",
    "UI/UX design portfolio",
    "branding projects",
    "social media design",
    "digital project portfolio",
  ],
};

const portfolioHeroCards = [
  {
    src: "/images/Rectangle 22 (2).png",
    alt: "Social Media Banner Design",
  },
  {
    src: "/images/Rectangle 23.png",
    alt: "Flaren Eyewear Creative",
  },
  {
    src: "/images/Rectangle 24 (1).png",
    alt: "Hiro Protein Bar Branding",
  },
];

const portfolioTestimonials = [
  {
    id: 1,
    name: "Emily Carter",
    role: "CEO, BrightTech",
    image: "/images/homereview1.png",
    review:
      "Working with Void & Key was a fantastic experience. Their team delivered a fast, modern platform that exceeded our expectations.",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Founder, Nexa Labs",
    image: "/images/homereview2.png",
    review:
      "From planning to deployment, everything was handled professionally. Our platform is now faster, cleaner, and easier to scale.",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    role: "Operations Director",
    image: "/images/homereview3.png",
    review:
      "The attention to detail and operational speed were outstanding. We cut customer resolution times in half.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section from Document 3.pdf Page 20 */}
        <Hero
          badge="OUR PORTFOLIO"
          highlightTitle="Work Made"
          mainTitle="to Move Businesses Forward."
          description="Explore selected projects across web development, UI/UX, branding, and social media. Each project starts with a real business need and takes shape through thoughtful design, practical technology, and close collaboration."
          ctaText="Discuss a Project"
          ctaLink="/contact"
          secondaryCtaText="Explore Our Work"
          secondaryCtaLink="#featured-work"
          showSocialSidebar={false}
          cardImages={portfolioHeroCards}
        />

        {/* Marquee Ticker */}
        <Marquee />

        {/* Portfolio Showcase Grid Section */}
        <div id="featured-work">
          <PortfolioGrid />
        </div>

        {/* Client Feedback from Document 3.pdf Page 24 */}
        <Testimonials items={portfolioTestimonials} />

        {/* Technology & Creative Tools from Document 3.pdf Page 24 */}
        <TechStack />

        {/* Final CTA from Document 3.pdf Page 25 */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}

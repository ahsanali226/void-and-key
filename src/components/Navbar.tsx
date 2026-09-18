"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";
import TalkButton from "./TalkButton";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(pathname.slice(1));
      return;
    }

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      const sections = navLinks
        .map((link) => link.href.split("#")[1])
        .filter((section): section is string => Boolean(section));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:top-6 sm:px-6">
      <nav className="mx-auto flex max-w-content items-center justify-between rounded-[40px] border-2 border-line bg-white/5 px-4 py-3 backdrop-blur-2xl sm:rounded-pill sm:px-8 sm:py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Void & Key"
            width={60}
            height={12}
            className="h-9 w-auto object-contain sm:h-9"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.split("#")[1] ?? link.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 font-body text-base text-white/90 transition-colors hover:text-amber-light"
                >
                  {isActive ? (
                    <ArrowRight className="h-4 w-4 text-amber shrink-0" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4 text-white shrink-0 transition-colors group-hover:text-amber-light" />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <TalkButton href="/contact" className="hidden lg:flex" />

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-white lg:hidden"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-3 max-w-content rounded-3xl border-2 border-line bg-ink/95 p-6 backdrop-blur-2xl lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const sectionId = link.href.split("#")[1] ?? link.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-2 text-lg text-white/90"
                  >
                    {isActive ? (
                      <ArrowRight className="h-5 w-5 text-amber shrink-0" />
                    ) : (
                      <ArrowUpRight className="h-5 w-5 text-white shrink-0" />
                    )}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <TalkButton href="/contact" className="mt-6" onClick={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
}

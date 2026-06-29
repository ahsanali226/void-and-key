"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";
import SlideButton from "./SlideButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:top-6 sm:px-6">
      <nav className="mx-auto flex max-w-content items-center justify-between rounded-[40px] border-2 border-line bg-white/5 px-4 py-3 backdrop-blur-2xl sm:rounded-pill sm:px-8 sm:py-3">
        <a href="#home" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Void & Key"
            width={140}
            height={40}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="inline-flex items-center gap-1.5 font-body text-base text-white/90 transition-colors hover:text-amber-light"
              >
                <ArrowRight className="h-3.5 w-3.5 -rotate-45 text-amber" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <SlideButton 
          text="Let's Talk" 
          className="hidden !h-[56px] !text-lg lg:inline-flex" 
          iconClassName="!h-[44px] !w-[44px] !min-w-[44px]" 
        />

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
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 text-lg text-white/90"
                >
                  <ArrowRight className="h-4 w-4 -rotate-45 text-amber" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <SlideButton 
            text="Let's Talk" 
            className="mt-6 !h-[56px] w-full justify-center !text-lg" 
            iconClassName="!h-[44px] !w-[44px] !min-w-[44px]" 
            onAction={() => setOpen(false)}
          />
        </div>
      )}
    </header>
  );
}

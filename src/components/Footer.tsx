"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { footerLinks } from "@/data/content";

export default function Footer() {
  const [agreed, setAgreed] = useState(false);

  return (
    <footer
      id="contact"
      className="mt-16 rounded-t-[48px] border-t border-line bg-surface px-6 py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-content">
        <h2 className="font-display text-[clamp(3rem,9vw,6rem)] font-bold leading-[1.05] text-white">
          Let&rsquo;s <span className="text-gradient">Talk!</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr,0.6fr,1fr]">
          {/* Newsletter */}
          <div>
            <h3 className="font-display text-xl text-white">Newsletter</h3>
            <div className="mt-6 rounded-3xl border border-line bg-ink p-6">
              <label htmlFor="newsletter-email" className="text-base text-white">
                Get News &amp; Updates
              </label>
              <div className="mt-4 flex items-center gap-3">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email address"
                  className="h-14 flex-1 rounded-full border border-line bg-transparent px-5 text-white placeholder:text-white/40 focus:border-amber-light focus:outline-none"
                />
                <button
                  aria-label="Subscribe"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cta-gradient-light text-ink"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <label className="mt-5 flex items-center gap-3 text-sm text-white/70">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="h-5 w-5 rounded border-line bg-transparent accent-amber"
                />
                I agree to all your terms &amp; policies
              </label>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl text-white">Quick Links</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base text-white/70 transition-colors hover:text-amber-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl text-white">Contact Info</h3>
            <div className="mt-6 flex flex-col gap-4 text-base text-white/70">
              <p className="text-white">Void and key</p>
              <p>Office no: 1010 lorem building street XXX, City, Country.</p>
              <a
                href="mailto:Info@voidandkey.com"
                className="transition-colors hover:text-amber-light"
              >
                Info@voidandkey.com
              </a>
              <a
                href="tel:+1900000124888"
                className="transition-colors hover:text-amber-light"
              >
                +1900000124888
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-pill border border-line px-8 py-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Void & Key"
              width={120}
              height={36}
              className="h-7 w-auto"
            />
            <p className="text-sm text-white/60">
              copyright © 2026 Void and key. all right reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Linkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-white transition-colors hover:border-amber/60 hover:text-amber-light"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

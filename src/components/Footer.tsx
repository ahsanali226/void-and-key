import Image from "next/image";
import Link from "next/link";
import { Send, Facebook, Instagram, Linkedin } from "lucide-react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h1 className="footer-title">
          <span className="footer-title-bold">Let&apos;s</span>{" "}
          <span className="footer-title-regular">Talk!</span>
        </h1>

        <div className="footer-content">
          {/* Newsletter */}
          <div className="newsletter">
            <h3>Newsletter</h3>

            <div className="input-box">
              <input
                type="email"
                placeholder="Get News & Updates"
              />
              <button aria-label="Subscribe">
                <Send size={18} className="send-icon" />
              </button>
            </div>

            <div className="policy">
              <div className="radio-dot">
                <div className="inner-dot"></div>
              </div>
              <p>I agree to all your terms & policies</p>
            </div>
          </div>

          {/* Links */}
          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="contact">
            <h3>Contact Info</h3>
            <p className="contact-name">Void And Key</p>
            <p>1003 S Front St #100, Mankato,<br />MN 56001, United States</p>
            <p>Info@voidandkey.com</p>
            <p>+1 612-466-0346</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            Copyright © 2024 Void And Key. All Right Reserved.
          </p>

          <div className="logo">
            <Image
              src="/images/logo.png"
              alt="Void And Key Logo"
              width={140}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </div>

          <div className="social">
            <a href="#" className="social-icon facebook" aria-label="Facebook">
              <Facebook size={16} fill="currentColor" strokeWidth={0} />
            </a>
            <a href="#" className="social-icon" aria-label="X">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <Linkedin size={16} fill="currentColor" strokeWidth={0} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
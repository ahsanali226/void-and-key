import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import "./contact.css";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="contact-page">
                <section className="contact-hero">
                    <div className="contact-hero-copy">
                        <p className="contact-eyebrow">Start a conversation</p>
                        <h1>
                            {"Let's"} <span>Talk!</span>
                        </h1>
                        <p className="contact-intro">
                            {"Have a challenge in mind? Tell us what you're building, and we'll help you find the clearest path forward."}
                        </p>
                    </div>
                    <Link href="/#home" className="contact-back-link">
                        <ArrowRight size={18} />
                        Back to home
                    </Link>
                </section>

                <section className="contact-grid" aria-label="Contact Void And Key">
                    <div className="contact-details">
                        <p className="contact-section-label">Find us here</p>
                        <h2>Bring your next idea into focus.</h2>
                        <p className="contact-details-copy">
                            From first sketch to final launch, our team brings strategy, design,
                            and technology together around the problem that matters most.
                        </p>

                        <div className="contact-methods">
                            <a href="mailto:Info@voidandkey.com" className="contact-method">
                                <span className="contact-method-icon"><Mail size={19} /></span>
                                <span>
                                    <strong>Email us</strong>
                                    <small>Info@voidandkey.com</small>
                                </span>
                            </a>
                            <a href="tel:+16124660346" className="contact-method">
                                <span className="contact-method-icon"><Phone size={19} /></span>
                                <span>
                                    <strong>Call us</strong>
                                    <small>+1 612-466-0346</small>
                                </span>
                            </a>
                            <a
                                href="https://maps.google.com/?q=1003+S+Front+St+%23100,+Mankato,+MN+56001"
                                className="contact-method"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="contact-method-icon"><MapPin size={19} /></span>
                                <span>
                                    <strong>Visit us</strong>
                                    <small>1003 S Front St #100, Mankato, MN</small>
                                </span>
                            </a>
                        </div>
                    </div>

                    <ContactForm />
                </section>
            </main>
            <Footer />
        </>
    );
}

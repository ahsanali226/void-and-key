"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("submitting");
        setMessage("");

        const form = event.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const result = (await response.json()) as { error?: string };

            if (!response.ok) {
                throw new Error(result.error || "We could not send your inquiry.");
            }

            form.reset();
            setStatus("success");
            setMessage("Your inquiry has been sent. We will be in touch shortly.");
        } catch (error) {
            setStatus("error");
            setMessage(error instanceof Error ? error.message : "We could not send your inquiry.");
        }
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label>
                    Name
                    <input type="text" name="name" placeholder="Your name" required />
                </label>
                <label>
                    Email
                    <input type="email" name="email" placeholder="you@example.com" required />
                </label>
            </div>
            <label>
                What can we help with?
                <select name="service" defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>Web Development</option>
                    <option>Branding and Design</option>
                    <option>Customer Support</option>
                    <option>A.I. and Cybersecurity</option>
                    <option>Something else</option>
                </select>
            </label>
            <label>
                Project details
                <textarea name="message" rows={6} placeholder="Share a little about your goals, timeline, and budget." required />
            </label>
            <button type="submit" className="contact-submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Send inquiry"}
                <ArrowRight size={19} />
            </button>
            {message && (
                <p className={`contact-form-status ${status}`} role="status">
                    {status === "success" && <CheckCircle2 size={18} />}
                    {message}
                </p>
            )}
        </form>
    );
}

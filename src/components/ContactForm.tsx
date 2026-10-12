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
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Extract multi-select checkboxes for areas of interest
        const areas = formData.getAll("areaOfInterest");
        const payload = {
            ...data,
            areaOfInterest: areas.join(", "),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const result = (await response.json()) as { error?: string };

            if (!response.ok) {
                throw new Error(result.error || "We could not send your inquiry.");
            }

            form.reset();
            setStatus("success");
            setMessage("Your technical inquiry has been submitted. Our technical director will respond within 1 business day.");
        } catch (error) {
            setStatus("error");
            setMessage(error instanceof Error ? error.message : "We could not send your inquiry.");
        }
    }

    return (
        <form className="contact-form space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block text-sm font-medium text-white/90">
                    Full Name
                    <input
                        type="text"
                        name="name"
                        placeholder="e.g. John Doe"
                        required
                        className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-amber focus:outline-none"
                    />
                </label>
                <label className="block text-sm font-medium text-white/90">
                    Corporate Email
                    <input
                        type="email"
                        name="email"
                        placeholder="john@company.com"
                        required
                        className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-amber focus:outline-none"
                    />
                </label>
            </div>

            <label className="block text-sm font-medium text-white/90">
                Company Name
                <input
                    type="text"
                    name="company"
                    placeholder="e.g. Acme Corp"
                    required
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-amber focus:outline-none"
                />
            </label>

            {/* Primary Area of Interest from Document 3.pdf */}
            <div>
                <span className="block text-sm font-medium text-white/90 mb-2">
                    Primary Area of Interest
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                        "Web & Software Engineering",
                        "Back-Office & Process Automation",
                        "Cybersecurity & Risk Auditing",
                        "Customer & Technical Support",
                        "Billing & Revenue Operations",
                    ].map((area) => (
                        <label
                            key={area}
                            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs sm:text-sm text-white/80 cursor-pointer hover:border-amber/40 transition-colors"
                        >
                            <input
                                type="checkbox"
                                name="areaOfInterest"
                                value={area}
                                className="h-4 w-4 rounded accent-amber bg-white/10 border-white/20"
                            />
                            <span>{area}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Estimated Project Timeline from Document 3.pdf */}
            <div>
                <span className="block text-sm font-medium text-white/90 mb-2">
                    Estimated Project Timeline
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                        { label: "Immediate (< 30 days)", value: "immediate" },
                        { label: "Next Quarter", value: "next_quarter" },
                        { label: "Exploratory Architecture Call", value: "exploratory" },
                    ].map((item) => (
                        <label
                            key={item.value}
                            className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs sm:text-sm text-white/80 cursor-pointer hover:border-amber/40 transition-colors"
                        >
                            <input
                                type="radio"
                                name="timeline"
                                value={item.label}
                                defaultChecked={item.value === "immediate"}
                                className="h-4 w-4 accent-amber bg-white/10"
                            />
                            <span>{item.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Project Overview / Core Problem from Document 3.pdf */}
            <label className="block text-sm font-medium text-white/90">
                Project Overview / Core Problem
                <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe your current bottlenecks, target metrics, or project scope..."
                    required
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-amber focus:outline-none"
                />
            </label>

            <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-cta-gradient px-8 py-4 text-sm sm:text-base font-semibold text-ink transition-transform hover:-translate-y-0.5 disabled:opacity-50 shadow-md"
            >
                {status === "submitting" ? "Sending..." : "Send Technical Inquiry"}
                <ArrowRight size={18} />
            </button>

            {message && (
                <p className={`contact-form-status flex items-center gap-2 text-sm ${status === "success" ? "text-amber-light" : "text-red-400"}`} role="status">
                    {status === "success" && <CheckCircle2 size={18} />}
                    {message}
                </p>
            )}
        </form>
    );
}

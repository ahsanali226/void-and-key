"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
    AppWindow,
    BarChart3,
    Bot,
    BookOpen,
    Calculator,
    CalendarDays,
    ClipboardList,
    CreditCard,
    Database,
    FileCode2,
    FileText,
    Globe,
    Headphones,
    LifeBuoy,
    LineChart,
    Lock,
    Megaphone,
    MessageSquare,
    Palette,
    PenSquare,
    PhoneCall,
    Plug,
    Receipt,
    Server,
    Settings,
    Shield,
    ShieldCheck,
    ShoppingCart,
    TrendingUp,
    Users,
    Workflow,
    Wrench,
    type LucideIcon,
} from "lucide-react";
import type { ServiceDetail } from "@/data/servicesDetailData";

/** String key -> lucide icon. Keeps the data file serializable. */
const iconMap: Record<string, LucideIcon> = {
    AppWindow,
    BarChart3,
    Bot,
    BookOpen,
    Calculator,
    CalendarDays,
    ClipboardList,
    CreditCard,
    Database,
    FileCode2,
    FileText,
    Globe,
    Headphones,
    LifeBuoy,
    LineChart,
    Lock,
    Megaphone,
    MessageSquare,
    Palette,
    PenSquare,
    PhoneCall,
    Plug,
    Receipt,
    Server,
    Settings,
    Shield,
    ShieldCheck,
    ShoppingCart,
    TrendingUp,
    Users,
    Workflow,
    Wrench,
};

interface ServiceOfferingsProps {
    offerings: ServiceDetail["offerings"];
}

export default function ServiceOfferings({ offerings }: ServiceOfferingsProps) {
    const reduceMotion = useReducedMotion();

    return (
        <section className="px-6 py-16 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-[1440px]">
                {/* Centered header */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold text-gradient">
                        {offerings.title}
                    </h2>
                    {offerings.subtitle && (
                        <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                            {offerings.subtitle}
                        </p>
                    )}
                </div>

                {/* 2 x 3 capability grid */}
                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-7">
                    {offerings.items.map((item, index) => {
                        const Icon = item.icon ? (iconMap[item.icon] ?? Globe) : Globe;

                        return (
                            <motion.article
                                key={item.title}
                                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.4, delay: index * 0.04 }}
                                className="group flex items-center gap-5 sm:gap-6 rounded-[22px] border border-[#e5e7eb] bg-white p-6 sm:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(221,121,0,0.22)] hover:border-[#c86800]/50"
                            >
                                <div className="flex h-20 w-20 sm:h-[84px] sm:w-[84px] shrink-0 items-center justify-center rounded-[18px] bg-[#f0f0f0] p-4 transition-transform duration-300 group-hover:scale-105">
                                    {item.image ? (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={48}
                                            height={48}
                                            className="object-contain"
                                        />
                                    ) : (
                                        <Icon className="h-8 w-8 text-black" />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-display text-xl sm:text-[22px] font-bold text-black tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-[#374151]">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

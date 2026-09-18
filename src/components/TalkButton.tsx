"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface TalkButtonProps {
    className?: string;
    href?: string;
    onClick?: () => void;
    targetId?: string;
}

export default function TalkButton({
    className = "",
    href,
    onClick,
    targetId = "contact",
}: TalkButtonProps) {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        if (isAnimating) return;

        setIsAnimating(true);

        window.setTimeout(() => {
            onClick?.();

            if (href && !href.startsWith("#")) {
                window.location.href = href;
                return;
            }

            const id = href?.replace("#", "") || targetId;
            const targetElement = document.getElementById(id);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
                window.location.hash = id;
            }

            window.setTimeout(() => setIsAnimating(false), 700);
        }, 650);
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={isAnimating}
            className={`group relative flex items-center rounded-full border border-[#D8B178] bg-transparent overflow-hidden transition-all duration-300 hover:shadow-[0_8px_20px_rgba(244,160,36,0.35)] disabled:cursor-wait ${isAnimating ? "scale-105 border-[#F4A024] shadow-[0_0_28px_rgba(244,160,36,0.55)]" : ""
                } ${className}`}
        >
            <span
                className={`absolute inset-0 origin-left rounded-full bg-[#F4A024] transition-transform duration-700 ease-out ${isAnimating ? "scale-x-100" : "scale-x-0"
                    }`}
            />

            <div
                className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#F4A024] transition-transform duration-700 ease-out group-hover:translate-x-1 ${isAnimating ? "translate-x-[145px] rotate-45" : ""
                    }`}
            >
                <FaArrowRight className="text-black text-sm" />
            </div>

            <span
                className={`relative z-10 px-5 text-[15px] font-medium transition-all duration-300 ${isAnimating ? "-translate-x-3 text-black opacity-0" : "text-white opacity-100"
                    }`}
            >
                {"Let's Talk"}
            </span>
        </button>
    );
}

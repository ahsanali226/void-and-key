"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ServiceDetail } from "@/data/servicesDetailData";

interface ServiceProcessProps {
    process: ServiceDetail["process"];
}

// ─── Proportional geometry matching reference image ────────────────────────
const VB_WIDTH = 1120;
const VB_HEIGHT = 840;
const CENTER_X = 560;
const CENTER_Y = 420;
const ORBIT_R = 210;
const INNER_R = 158;
const DISC_R = 118;
const NODE_OUTER_R = 9.5;
const NODE_INNER_R = 4;
const CARD_W = 260;

/** Angles clockwise from 12 o'clock */
const STEP_CONFIG = [
    {
        angle: 0,
        // 01 Discover (Top): vertical line pointing up to description
        getLine: (nx: number, ny: number) => ({
            x1: nx,
            y1: ny - NODE_OUTER_R - 2,
            x2: nx,
            y2: ny - 42,
        }),
        getCardBox: (nx: number, ny: number) => ({
            x: nx - CARD_W / 2,
            y: ny - 42 - 62,
            width: CARD_W,
            height: 62,
            align: "center" as const,
        }),
    },
    {
        angle: 60,
        // 02 Plan (Top-Right): horizontal line pointing right to title
        getLine: (nx: number, ny: number) => ({
            x1: nx + NODE_OUTER_R + 2,
            y1: ny,
            x2: nx + 44,
            y2: ny,
        }),
        getCardBox: (nx: number, ny: number) => ({
            x: nx + 52,
            y: ny - 12,
            width: CARD_W,
            height: 65,
            align: "left" as const,
        }),
    },
    {
        angle: 120,
        // 03 Design (Bottom-Right): horizontal line pointing right to title
        getLine: (nx: number, ny: number) => ({
            x1: nx + NODE_OUTER_R + 2,
            y1: ny,
            x2: nx + 44,
            y2: ny,
        }),
        getCardBox: (nx: number, ny: number) => ({
            x: nx + 52,
            y: ny - 12,
            width: CARD_W,
            height: 65,
            align: "left" as const,
        }),
    },
    {
        angle: 180,
        // 04 Develop (Bottom): vertical line pointing down to title
        getLine: (nx: number, ny: number) => ({
            x1: nx,
            y1: ny + NODE_OUTER_R + 2,
            x2: nx,
            y2: ny + 42,
        }),
        getCardBox: (nx: number, ny: number) => ({
            x: nx - CARD_W / 2,
            y: ny + 50,
            width: CARD_W,
            height: 65,
            align: "center" as const,
        }),
    },
    {
        angle: 240,
        // 05 Test (Bottom-Left): horizontal line pointing left to title
        getLine: (nx: number, ny: number) => ({
            x1: nx - NODE_OUTER_R - 2,
            y1: ny,
            x2: nx - 44,
            y2: ny,
        }),
        getCardBox: (nx: number, ny: number) => ({
            x: nx - 44 - CARD_W - 8,
            y: ny - 12,
            width: CARD_W,
            height: 65,
            align: "right" as const,
        }),
    },
    {
        angle: 300,
        // 06 Launch (Top-Left): horizontal line pointing left to title
        getLine: (nx: number, ny: number) => ({
            x1: nx - NODE_OUTER_R - 2,
            y1: ny,
            x2: nx - 44,
            y2: ny,
        }),
        getCardBox: (nx: number, ny: number) => ({
            x: nx - 44 - CARD_W - 8,
            y: ny - 12,
            width: CARD_W,
            height: 65,
            align: "right" as const,
        }),
    },
];

function polarToXY(angleDeg: number, radius: number) {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return {
        x: CENTER_X + radius * Math.cos(rad),
        y: CENTER_Y + radius * Math.sin(rad),
    };
}

export default function ServiceProcess({ process }: ServiceProcessProps) {
    const reduceMotion = useReducedMotion();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="relative overflow-hidden bg-[#0c0c0c] px-4 py-20 sm:px-6 lg:px-12 lg:py-28">
            {/* Ambient radial glow centered behind diagram */}
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                    width: 780,
                    height: 780,
                    background:
                        "radial-gradient(circle, rgba(255,122,0,0.06) 0%, rgba(221,121,0,0.02) 50%, transparent 70%)",
                }}
            />

            <div className="relative mx-auto max-w-[1440px]">
                {/* ── Section Header ── */}
                <div className="mx-auto max-w-2xl text-center">
                    <motion.h2
                        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                        className="font-display text-[clamp(2.5rem,5.5vw,4.25rem)] font-extrabold tracking-tight"
                        style={{
                            background:
                                "linear-gradient(90deg, #ff7000 0%, #ff8a00 34%, #ffd5a3 68%, #fff1df 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        {process.title}
                    </motion.h2>

                    <motion.p
                        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base"
                    >
                        {process.subtitle || "Show a clear step-by-step workflow."}
                    </motion.p>
                </div>

                {/* ══════════════════════════════════════════════════════════
                    DESKTOP – Radial Wheel with Point Connector Lines & Details
                ══════════════════════════════════════════════════════════ */}
                <div className="relative mt-8 hidden justify-center md:flex">
                    <div className="relative w-full max-w-[1080px]">
                        <svg
                            viewBox={`0 0 ${VB_WIDTH} ${VB_HEIGHT}`}
                            className="w-full h-auto select-none overflow-visible"
                            aria-hidden="false"
                            role="img"
                            aria-label={process.title}
                        >
                            <defs>
                                <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="6" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>

                                <filter id="discShadow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feDropShadow dx="0" dy="0" stdDeviation="16" floodColor="#ff7a00" floodOpacity="0.10" />
                                </filter>
                            </defs>

                            {/* 1. Outer Orbit Ring line */}
                            <circle
                                cx={CENTER_X}
                                cy={CENTER_Y}
                                r={ORBIT_R}
                                fill="none"
                                stroke="rgba(255, 255, 255, 0.22)"
                                strokeWidth="1.5"
                            />

                            {/* 2. Inner Decorative Ring line */}
                            <circle
                                cx={CENTER_X}
                                cy={CENTER_Y}
                                r={INNER_R}
                                fill="none"
                                stroke="rgba(255, 255, 255, 0.14)"
                                strokeWidth="1.5"
                            />

                            {/* 3. Center Dark Disc with VK Emblem */}
                            <g filter="url(#discShadow)">
                                <circle
                                    cx={CENTER_X}
                                    cy={CENTER_Y}
                                    r={DISC_R}
                                    fill="#171717"
                                />

                                <image
                                    href="/images/process-center-disc.png"
                                    x={CENTER_X - DISC_R}
                                    y={CENTER_Y - DISC_R}
                                    width={DISC_R * 2}
                                    height={DISC_R * 2}
                                    preserveAspectRatio="xMidYMid meet"
                                    className="pointer-events-none"
                                />
                            </g>

                            {/* 4. Steps: Connector Lines, Nodes, and Text details */}
                            {process.steps.map((step, index) => {
                                const config = STEP_CONFIG[index];
                                if (!config) return null;

                                const node = polarToXY(config.angle, ORBIT_R);
                                const line = config.getLine(node.x, node.y);
                                const cardBox = config.getCardBox(node.x, node.y);
                                const isHovered = hoveredIndex === index;

                                return (
                                    <g
                                        key={step.number}
                                        className="cursor-pointer transition-all duration-200"
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        tabIndex={0}
                                        role="button"
                                        aria-label={`${step.number} ${step.title}: ${step.description}`}
                                    >
                                        {/* Straight Connector Line from point to step */}
                                        <line
                                            x1={line.x1}
                                            y1={line.y1}
                                            x2={line.x2}
                                            y2={line.y2}
                                            stroke={isHovered ? "#ff7a00" : "rgba(255, 255, 255, 0.45)"}
                                            strokeWidth={isHovered ? "2" : "1.5"}
                                            className="transition-colors duration-200"
                                        />

                                        {/* Hover glow behind node */}
                                        {isHovered && (
                                            <circle
                                                cx={node.x}
                                                cy={node.y}
                                                r={NODE_OUTER_R + 8}
                                                fill="rgba(255, 122, 0, 0.35)"
                                                filter="url(#nodeGlow)"
                                            />
                                        )}

                                        {/* Outer Orange Ring Marker */}
                                        <circle
                                            cx={node.x}
                                            cy={node.y}
                                            r={isHovered ? NODE_OUTER_R + 2.5 : NODE_OUTER_R}
                                            fill="#ff7a00"
                                            className="transition-all duration-200"
                                        />

                                        {/* Inner White Dot Marker */}
                                        <circle
                                            cx={node.x}
                                            cy={node.y}
                                            r={isHovered ? NODE_INNER_R + 1 : NODE_INNER_R}
                                            fill="#ffffff"
                                            className="transition-all duration-200"
                                        />

                                        {/* HTML ForeignObject for step title & detail */}
                                        <foreignObject
                                            x={cardBox.x}
                                            y={cardBox.y}
                                            width={cardBox.width}
                                            height={cardBox.height + 35}
                                            className="overflow-visible"
                                        >
                                            <div
                                                className={`transition-all duration-200 ${
                                                    cardBox.align === "left"
                                                        ? "text-left"
                                                        : cardBox.align === "right"
                                                        ? "text-right"
                                                        : "text-center"
                                                }`}
                                            >
                                                {/* Step Title (e.g., "01 Discover") */}
                                                <h3
                                                    className="font-display text-[16px] lg:text-[17px] font-bold tracking-tight text-[#ff7a00] transition-colors"
                                                    style={{
                                                        textShadow: isHovered
                                                            ? "0 0 12px rgba(255,122,0,0.6)"
                                                            : "none",
                                                    }}
                                                >
                                                    {step.number} {step.title}
                                                </h3>

                                                {/* Step Detail Description */}
                                                <p className="mt-0.5 font-body text-[12.5px] lg:text-[13px] leading-snug text-white/75 transition-colors">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </foreignObject>
                                    </g>
                                );
                            })}
                        </svg>
                    </div>
                </div>

                {/* ══════════════════════════════════════════════════════════
                    MOBILE – Vertical timeline adapted cleanly for mobile
                ══════════════════════════════════════════════════════════ */}
                <div className="mt-12 md:hidden">
                    {/* Centered Logo disc header on mobile */}
                    <div className="mb-10 flex justify-center">
                        <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-[#171717] p-2 ring-1 ring-white/15 shadow-[0_0_30px_rgba(255,122,0,0.15)]">
                            <Image
                                src="/images/process-center-disc.png"
                                alt="Void & Key"
                                width={112}
                                height={112}
                                className="h-full w-full object-contain"
                                priority
                            />
                        </div>
                    </div>

                    <div className="relative pl-10 pr-2">
                        {/* Vertical line connecting nodes */}
                        <div
                            className="absolute left-[18px] top-3 bottom-4 w-[2px]"
                            style={{
                                background:
                                    "linear-gradient(to bottom, #ff7a00, rgba(255,122,0,0.4) 80%, transparent)",
                            }}
                        />

                        <div className="space-y-6">
                            {process.steps.map((step, index) => (
                                <motion.div
                                    key={step.number}
                                    initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                                    whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.45, delay: index * 0.08 }}
                                    className="relative"
                                >
                                    {/* Double ring marker */}
                                    <div className="absolute -left-10 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#0c0c0c]">
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff7a00] shadow-[0_0_12px_rgba(255,122,0,0.6)]">
                                            <div className="h-2.5 w-2.5 rounded-full bg-white" />
                                        </div>
                                    </div>

                                    {/* Card content */}
                                    <div className="rounded-2xl border border-white/10 bg-[#161616] p-4 sm:p-5">
                                        <h3 className="font-display text-base font-bold text-[#ff7a00]">
                                            {step.number} {step.title}
                                        </h3>
                                        <p className="mt-1 text-sm leading-relaxed text-white/70">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

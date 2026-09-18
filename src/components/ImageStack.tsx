"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const initialCards = [
  {
    id: "card-1",
    src: "/images/hero_card_img1.png",
    alt: "Team collaborating",
  },
  {
    id: "card-2",
    src: "/images/hero_card_img2.png",
    alt: "Team reviewing work",
  },
  {
    id: "card-3",
    src: "/images/hero_card_img3.png",
    alt: "Project planning preview",
  },
];

const positionClasses = [
  "absolute top-0 left-0 z-30",
  "absolute top-5 left-[35px] sm:top-6 sm:left-[45px] z-20",
  "absolute top-10 left-[70px] sm:top-12 sm:left-[90px] z-10",
];

export default function ImageStack() {
  const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    // Cycle image positions every 2 seconds
    const interval = setInterval(() => {
      setCards((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[390px] sm:w-[450px] lg:w-[480px] h-[480px] sm:h-[530px] lg:h-[560px] mx-auto flex items-center justify-center lg:justify-end">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          layout
          transition={{
            duration: 0.75,
            ease: [0.4, 0, 0.2, 1],
          }}
          className={positionClasses[index]}
        >
          {/* Card Frame */}
          <div className="relative w-[320px] h-[420px] sm:w-[360px] sm:h-[460px] lg:w-[380px] lg:h-[480px] rounded-2xl border-[3px] border-white overflow-hidden bg-ink shadow-2xl">
            <div className="absolute inset-0 rounded-2xl border-2 border-orange-500 z-10 pointer-events-none" />
            <Image
              src={card.src}
              alt={card.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 380px"
              className="object-cover object-center rounded-2xl"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

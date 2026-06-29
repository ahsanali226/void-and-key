"use client";

import { useRef, useState, useEffect, PointerEvent } from "react";
import { ArrowRight } from "lucide-react";

interface SlideButtonProps {
  text: string;
  className?: string;
  iconClassName?: string;
  targetId?: string;
  onAction?: () => void;
}

export default function SlideButton({
  text,
  className = "",
  iconClassName = "",
  targetId = "contact",
  onAction,
}: SlideButtonProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState(0);
  const trackRef = useRef<HTMLButtonElement>(null);
  const thumbRef = useRef<HTMLSpanElement>(null);

  const startX = useRef(0);
  const currentX = useRef(0);

  const handlePointerDown = (e: PointerEvent<HTMLSpanElement>) => {
    // Only allow left click / touch
    if (e.button !== 0 && e.pointerType === "mouse") return;
    
    setIsDragging(true);
    startX.current = e.clientX - offset;
    
    // Capture pointer to track dragging outside the element
    if (thumbRef.current) {
      thumbRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: PointerEvent<HTMLSpanElement>) => {
    if (!isDragging || !trackRef.current || !thumbRef.current) return;

    currentX.current = e.clientX;
    let newOffset = currentX.current - startX.current;

    // Calculate max drag distance
    // The .btn-pill has padding: 0 32px 0 16px;
    const trackWidth = trackRef.current.getBoundingClientRect().width;
    const thumbWidth = thumbRef.current.getBoundingClientRect().width;
    
    // 48 = 32px (right pad) + 16px (left pad where thumb starts)
    const maxOffset = trackWidth - thumbWidth - 48;

    // Constrain offset between 0 and maxOffset
    if (newOffset < 0) newOffset = 0;
    if (newOffset > maxOffset) newOffset = maxOffset;

    setOffset(newOffset);
  };

  const handlePointerUp = (e: PointerEvent<HTMLSpanElement>) => {
    if (!isDragging || !trackRef.current || !thumbRef.current) return;
    
    setIsDragging(false);
    if (thumbRef.current) {
      thumbRef.current.releasePointerCapture(e.pointerId);
    }

    const trackWidth = trackRef.current.getBoundingClientRect().width;
    const thumbWidth = thumbRef.current.getBoundingClientRect().width;
    const maxOffset = trackWidth - thumbWidth - 48;

    // Trigger threshold (e.g., dragged past 80%)
    if (offset > maxOffset * 0.8) {
      setOffset(maxOffset);
      
      onAction?.();

      // Execute the scroll action
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = `#${targetId}`;
      }
      
      // Reset button after a short delay
      setTimeout(() => {
        setOffset(0);
      }, 800);
    } else {
      // Snap back if threshold not reached
      setOffset(0);
    }
  };

  return (
    <button
      ref={trackRef}
      className={`btn-pill select-none touch-none ${className}`}
      onClick={(e) => {
        // Prevent default click since interaction is drag-based
        e.preventDefault();
      }}
      aria-label={`Slide to navigate to ${text}`}
    >
      <span
        ref={thumbRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`btn-pill-icon cursor-grab active:cursor-grabbing touch-none ${iconClassName}`}
        style={{
          transform: `translateX(${offset}px)`,
          transition: isDragging ? "none" : "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          zIndex: 10,
        }}
      >
        <ArrowRight className="h-5 w-5" />
      </span>
      {text}
    </button>
  );
}

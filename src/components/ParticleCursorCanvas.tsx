"use client";

import React, { useEffect, useRef } from "react";

interface BaseParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  color: string;
}

interface TrailParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
  color: string;
}

interface ParticleCursorCanvasProps {
  className?: string;
}

export default function ParticleCursorCanvas({ className = "" }: ParticleCursorCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse tracking
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      isHovered: false,
      lastMoved: 0,
    };

    const brandColors = [
      "221, 121, 0",   // Primary Amber (#dd7900)
      "255, 196, 123", // Amber Light (#ffc47b)
      "255, 247, 201", // Cream (#fff7c9)
      "255, 255, 255", // White
      "255, 140, 0",   // Deep Orange (#ff8c00)
    ];

    let ambientParticles: BaseParticle[] = [];
    let trailParticles: TrailParticle[] = [];

    const resize = () => {
      if (!canvas.parentElement) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Re-initialize ambient background particles based on canvas area
      const count = Math.min(Math.floor((width * height) / 10000), 90);
      ambientParticles = [];
      for (let i = 0; i < count; i++) {
        const baseAlpha = Math.random() * 0.5 + 0.2;
        ambientParticles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5 - 0.2, // Slight upward float
          size: Math.random() * 2 + 1,
          alpha: baseAlpha,
          baseAlpha: baseAlpha,
          color: brandColors[Math.floor(Math.random() * brandColors.length)],
        });
      }
    };

    const addTrailParticles = (x: number, y: number) => {
      const spawnCount = 3;
      for (let i = 0; i < spawnCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2.5 + 0.5;
        const maxLife = Math.floor(Math.random() * 35 + 25);
        trailParticles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 3 + 1.5,
          alpha: 0.9,
          life: 0,
          maxLife,
          color: brandColors[Math.floor(Math.random() * brandColors.length)],
        });
      }

      // Limit max trail particles for performance
      if (trailParticles.length > 150) {
        trailParticles.splice(0, trailParticles.length - 150);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;

      if (newX >= 0 && newX <= width && newY >= 0 && newY <= height) {
        mouse.targetX = newX;
        mouse.targetY = newY;
        mouse.isHovered = true;
        mouse.lastMoved = Date.now();
        addTrailParticles(newX, newY);
      } else {
        mouse.isHovered = false;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      const newX = touch.clientX - rect.left;
      const newY = touch.clientY - rect.top;

      if (newX >= 0 && newX <= width && newY >= 0 && newY <= height) {
        mouse.targetX = newX;
        mouse.targetY = newY;
        mouse.isHovered = true;
        mouse.lastMoved = Date.now();
        addTrailParticles(newX, newY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth lerp mouse target
      if (mouse.isHovered) {
        mouse.x += (mouse.targetX - mouse.x) * 0.2;
        mouse.y += (mouse.targetY - mouse.y) * 0.2;
      }

      // Draw Cursor Ambient Radial Texture Glow
      if (mouse.isHovered && mouse.x > 0 && mouse.y > 0) {
        const glowRadius = 180;
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          glowRadius
        );
        gradient.addColorStop(0, "rgba(244, 160, 36, 0.18)");
        gradient.addColorStop(0.5, "rgba(221, 121, 0, 0.07)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 1. Update & Render Ambient Background Particles
      const mouseInteractionRadius = 140;

      for (let i = 0; i < ambientParticles.length; i++) {
        const p = ambientParticles[i];

        // Magnetic repulsion/attraction from cursor
        if (mouse.isHovered) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouseInteractionRadius && dist > 0) {
            const force = (1 - dist / mouseInteractionRadius) * 1.8;
            // Push particles outward from cursor
            p.vx -= (dx / dist) * force * 0.4;
            p.vy -= (dy / dist) * force * 0.4;
          }
        }

        // Apply velocities with damping friction
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;

        // Maintain slight natural float
        p.vy -= 0.05;

        // Wrap around boundaries smoothly
        if (p.y < -15) p.y = height + 15;
        if (p.y > height + 15) p.y = -15;
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;

        // Pulse alpha slightly
        const pulsedAlpha = p.baseAlpha + Math.sin(Date.now() * 0.003 + i) * 0.12;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${Math.max(0.05, Math.min(0.9, pulsedAlpha))})`;
        ctx.shadowColor = `rgba(${p.color}, 0.5)`;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow blur
      }

      // 2. Draw Constellation lines between particles near the cursor
      if (mouse.isHovered) {
        ctx.lineWidth = 0.75;
        for (let i = 0; i < ambientParticles.length; i++) {
          const p1 = ambientParticles[i];
          const distToMouse = Math.hypot(mouse.x - p1.x, mouse.y - p1.y);

          if (distToMouse < mouseInteractionRadius) {
            // Line from particle to mouse cursor
            const lineAlpha = (1 - distToMouse / mouseInteractionRadius) * 0.35;
            ctx.strokeStyle = `rgba(255, 196, 123, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();

            // Line between neighboring particles
            for (let j = i + 1; j < ambientParticles.length; j++) {
              const p2 = ambientParticles[j];
              const pDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
              if (pDist < 90) {
                const connAlpha = (1 - pDist / 90) * lineAlpha * 0.6;
                ctx.strokeStyle = `rgba(244, 160, 36, ${connAlpha})`;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
              }
            }
          }
        }
      }

      // 3. Update & Render Cursor Trail Particles
      for (let i = trailParticles.length - 1; i >= 0; i--) {
        const tp = trailParticles[i];
        tp.life++;
        tp.x += tp.vx;
        tp.y += tp.vy;
        tp.vx *= 0.92;
        tp.vy *= 0.92;

        const progress = tp.life / tp.maxLife;
        const currentAlpha = (1 - progress) * tp.alpha;
        const currentSize = Math.max(0.5, tp.size * (1 - progress * 0.5));

        if (progress >= 1 || currentAlpha <= 0) {
          trailParticles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(tp.x, tp.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${tp.color}, ${currentAlpha})`;
        ctx.shadowColor = `rgba(${tp.color}, 0.8)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity: 0.85 }}
    />
  );
}

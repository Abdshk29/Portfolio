"use client";

import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export function BackgroundCanvas() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          if (spotlightRef.current) {
            spotlightRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          }
          animationFrameId = 0;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-500">
      {/* Grid Pattern - Light: Soft Pink/Zinc Grid, Dark: Deep Zinc Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#f472b615_1px,transparent_1px),linear-gradient(to_bottom,#f472b615_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a25_1px,transparent_1px),linear-gradient(to_bottom,#27272a25_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
      />

      {/* Mouse Spotlight Glow - Pink/Rose */}
      <div
        ref={spotlightRef}
        className="absolute transition-transform duration-150 ease-out rounded-full opacity-35 dark:opacity-20 blur-3xl will-change-transform"
        style={{
          width: "500px",
          height: "500px",
          top: "-250px",
          left: "-250px",
          background: "radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(244,63,94,0.15) 50%, transparent 70%)",
        }}
      />

      {/* Ambient Gradient Blob 1 - Top Right Pink */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pink-500/20 via-rose-400/10 to-transparent blur-[100px] will-change-transform"
      />

      {/* Ambient Gradient Blob 2 - Bottom Left Magenta/Rose */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-pink-400/10 to-transparent blur-[100px] will-change-transform"
      />
    </div>
  );
}


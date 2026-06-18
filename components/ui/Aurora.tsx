"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Signature ambient background — soft gold/navy aurora light that drifts and
 * breathes behind content. Subtle, premium, never distracting.
 */
export default function Aurora({
  className = "",
  parallax = false,
  intensity = "default",
}: {
  className?: string;
  parallax?: boolean;
  intensity?: "subtle" | "default" | "strong";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, parallax ? -140 : 0]);

  const opacity =
    intensity === "subtle" ? 0.4 : intensity === "strong" ? 0.95 : 0.7;

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="absolute left-1/2 top-[-10%] h-[55vw] w-[55vw] -translate-x-1/2 rounded-full blur-[110px] animate-aurora"
        style={{
          opacity,
          background:
            "radial-gradient(circle at 50% 40%, rgba(226,193,96,0.5), transparent 65%)",
        }}
      />
      <div
        className="absolute left-[6%] top-[35%] h-[34vw] w-[34vw] rounded-full blur-[120px] animate-aurora"
        style={{
          opacity: opacity * 0.7,
          animationDelay: "-7s",
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,36,217,0.42), transparent 70%)",
        }}
      />
      <div
        className="absolute right-[4%] bottom-[6%] h-[30vw] w-[30vw] rounded-full blur-[120px] animate-aurora"
        style={{
          opacity: opacity * 0.6,
          animationDelay: "-13s",
          background:
            "radial-gradient(circle at 50% 50%, rgba(226,193,96,0.28), transparent 70%)",
        }}
      />
    </motion.div>
  );
}

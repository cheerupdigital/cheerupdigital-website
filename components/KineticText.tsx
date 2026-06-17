"use client";

import { motion, Variants } from "framer-motion";
import { useMemo } from "react";

/**
 * Kinetic typography — splits a line into words that stagger/reveal in
 * from below a clip mask on load.
 */
const container: Variants = {
  hidden: {},
  visible: (stagger: number = 0.08) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.1 },
  }),
};

const word: Variants = {
  hidden: { y: "110%", rotate: 6 },
  visible: {
    y: "0%",
    rotate: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function KineticText({
  text,
  className = "",
  stagger = 0.08,
  as: Tag = "h1",
  delayStart = false,
}: {
  text: string;
  className?: string;
  stagger?: number;
  as?: keyof JSX.IntrinsicElements;
  delayStart?: boolean;
}) {
  const words = text.split(" ");
  const MotionTag = useMemo(() => motion.create(Tag as any), [Tag]);

  return (
    <MotionTag
      className={className}
      variants={container}
      custom={stagger}
      initial="hidden"
      animate={delayStart ? undefined : "visible"}
      whileInView={delayStart ? "visible" : undefined}
      viewport={delayStart ? { once: true, margin: "-80px" } : undefined}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: "0.08em" }}
        >
          <motion.span variants={word} className="inline-block">
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

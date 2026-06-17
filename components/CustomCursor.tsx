"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 450, mass: 0.4 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const [variant, setVariant] = useState<"default" | "hover" | "text">(
    "default"
  );
  const [label, setLabel] = useState<string>("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    if (!canHover) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        "a, button, [data-cursor]"
      ) as HTMLElement | null;
      if (target) {
        const c = target.getAttribute("data-cursor");
        if (c) {
          setLabel(target.getAttribute("data-cursor-label") || "");
          setVariant("text");
        } else {
          setLabel("");
          setVariant("hover");
        }
      } else {
        setVariant("default");
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center"
      style={{ x, y }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full"
        animate={{
          width: variant === "default" ? 14 : variant === "text" ? 96 : 56,
          height: variant === "default" ? 14 : variant === "text" ? 96 : 56,
          backgroundColor:
            variant === "default" ? "#D4AF37" : "rgba(212,175,55,0.85)",
          x: variant === "default" ? -7 : variant === "text" ? -48 : -28,
          y: variant === "default" ? -7 : variant === "text" ? -48 : -28,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <AnimatePresence>
          {variant === "text" && label && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-center text-[11px] font-bold uppercase tracking-wide text-night"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

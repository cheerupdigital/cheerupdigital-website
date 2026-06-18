"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

// Precomputed burst directions (8 evenly-spaced particles)
const BURST = Array.from({ length: 8 }, (_, i) => {
  const a = (Math.PI * 2 * i) / 8;
  return { x: Math.cos(a), y: Math.sin(a) };
});

type Ripple = { id: number; x: number; y: number };

function ClickRipple({ x, y, onDone }: Ripple & { onDone: () => void }) {
  return (
    <div className="pointer-events-none fixed z-[99]" style={{ left: x, top: y }}>
      {/* Expanding gold ring */}
      <motion.span
        className="absolute rounded-full border-2 border-gold"
        style={{ width: 16, height: 16, marginLeft: -8, marginTop: -8 }}
        initial={{ scale: 0.4, opacity: 0.9 }}
        animate={{ scale: 6, opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={onDone}
      />
      {/* Expanding brand-blue ring */}
      <motion.span
        className="absolute rounded-full border-2 border-brand-soft"
        style={{ width: 16, height: 16, marginLeft: -8, marginTop: -8 }}
        initial={{ scale: 0.4, opacity: 0.8 }}
        animate={{ scale: 3.8, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Particle burst */}
      {BURST.map((p, i) => (
        <motion.span
          key={i}
          className={`absolute rounded-full ${
            i % 2 ? "bg-brand-soft" : "bg-gold"
          }`}
          style={{ width: 6, height: 6, marginLeft: -3, marginTop: -3 }}
          initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
          animate={{ x: p.x * 48, y: p.y * 48, scale: 0, opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  );
}

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
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const idRef = useRef(0);

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

    const click = (e: MouseEvent) => {
      const id = idRef.current++;
      setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("click", click);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("click", click);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      {ripples.map((r) => (
        <ClickRipple
          key={r.id}
          {...r}
          onDone={() =>
            setRipples((list) => list.filter((item) => item.id !== r.id))
          }
        />
      ))}

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
              variant === "default" ? "#E2C160" : "rgba(226,193,96,0.85)",
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
    </>
  );
}

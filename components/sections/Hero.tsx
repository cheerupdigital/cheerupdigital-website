"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Stethoscope, Activity } from "lucide-react";
import Button from "../ui/Button";
import Aurora from "../ui/Aurora";
import KineticText from "../KineticText";

const orbit = [
  { label: "Consultations", icon: Stethoscope, x: "-118%", y: "-30%", d: 0 },
  { label: "Revenue", icon: TrendingUp, x: "108%", y: "-65%", d: 0.7 },
  { label: "AI Systems", icon: Sparkles, x: "55%", y: "115%", d: 1.4 },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32">
      <Aurora intensity="strong" />
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-50" aria-hidden />

      <div className="container-x relative z-10 grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="eyebrow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-glow" />
            Growth Partner for Skin, Hair &amp; Aesthetic Clinics
          </motion.span>

          <h1 className="mt-7 font-display text-hero font-semibold tracking-tight">
            <KineticText
              text="We Help Clinics"
              as="span"
              className="block text-gradient-soft"
            />
            <KineticText
              text="Grow Faster."
              as="span"
              className="block text-gradient-gold"
              stagger={0.09}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
          >
            Generate more consultations. Build doctor authority. Scale revenue
            through proven growth systems — not guesswork.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/contact" variant="gold">
              Book Growth Consultation
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> 50M+ ad spend
              handled
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> 7.9x avg.
              return on ad spend
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> AI powered
              systems
            </span>
          </motion.div>
        </div>

        {/* AI-inspired orbital graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden h-[460px] lg:block"
        >
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line" />
          <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line/60" />
          <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_18px_4px_rgba(226,193,96,0.6)]" />
          </div>

          {/* Core */}
          <div className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold-gradient shadow-gold animate-float">
            <Activity className="h-12 w-12 text-night" strokeWidth={2.5} />
            <span className="absolute inset-0 rounded-full ring-1 ring-white/30" />
          </div>

          {/* Floating chips */}
          {orbit.map(({ label, icon: Icon, x, y, d }) => (
            <motion.div
              key={label}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                delay: d,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2"
            >
              <div
                className="glass flex items-center gap-2 whitespace-nowrap px-4 py-2.5 text-sm shadow-card"
                style={{ transform: `translate(${x}, ${y})` }}
              >
                <Icon className="h-4 w-4 text-gold" />
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted md:flex"
      >
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}

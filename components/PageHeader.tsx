"use client";

import { motion } from "framer-motion";
import Aurora from "./ui/Aurora";
import KineticText from "./KineticText";

export default function PageHeader({
  eyebrow,
  title,
  accent,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden pb-14 pt-40 md:pb-20 md:pt-52">
      <Aurora intensity="subtle" />
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" aria-hidden />
      <div className="container-x relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="eyebrow"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {eyebrow}
        </motion.span>
        <h1 className="mt-7 font-display text-display font-semibold tracking-tight">
          <KineticText text={title} as="span" className="block text-gradient-soft" />
          {accent && (
            <KineticText
              text={accent}
              as="span"
              className="block text-gradient-gold"
              stagger={0.09}
            />
          )}
        </h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}

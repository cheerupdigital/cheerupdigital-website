"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Aurora from "../ui/Aurora";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-surface px-8 py-20 text-center md:px-16 md:py-28">
          <Aurora intensity="strong" />
          <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />

          <div className="relative z-10 mx-auto max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-glow" />
              Limited partnerships each quarter
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-7 font-display text-h2 font-semibold tracking-tight"
            >
              Ready to grow your{" "}
              <span className="text-gradient-gold">clinic?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted"
            >
              Book a no-pressure growth consultation. We&apos;ll map your funnel,
              find the leaks, and show you exactly where the next 50 consultations
              can come from.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Button href="/contact" variant="gold">
                Schedule Growth Consultation
              </Button>
              <Button href="/services" variant="outline">
                See how we work
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

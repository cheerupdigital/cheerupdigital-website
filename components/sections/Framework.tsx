"use client";

import { motion } from "framer-motion";
import { Magnet, Target, Rocket, Check } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { framework } from "@/lib/data";

const icons = [Magnet, Target, Rocket];

export default function Framework() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface/40 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="container-x relative">
        <SectionHeading
          align="center"
          eyebrow="The Cheerup Growth Framework"
          title="Three stages that turn spend into"
          accent="predictable revenue."
          description="Every engagement runs through the same proven operating system — so growth becomes a process you can measure, not a gamble you hope pays off."
        />

        <div className="relative mt-20">
          {/* connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute left-0 right-0 top-7 hidden h-px origin-left bg-gradient-to-r from-transparent via-brand-soft/60 to-transparent lg:block"
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {framework.map((stage, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={stage.name} delay={i * 0.15}>
                  <div className="relative">
                    <div className="relative z-10 mb-8 flex items-center gap-4">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-gradient text-night shadow-gold">
                        <Icon className="h-6 w-6" strokeWidth={2} />
                      </div>
                      <span className="font-display text-5xl font-bold text-ink/10">
                        {stage.step}
                      </span>
                    </div>

                    <div className="card card-hover h-full p-8">
                      <h3 className="font-display text-2xl font-semibold tracking-tight">
                        {stage.name}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-muted">
                        {stage.summary}
                      </p>
                      <ul className="mt-7 space-y-3">
                        {stage.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 text-sm text-ink/90"
                          >
                            <span className="grid h-5 w-5 place-items-center rounded-full bg-gold/15 text-gold">
                              <Check className="h-3 w-3" strokeWidth={3} />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

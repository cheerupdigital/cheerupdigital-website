"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { problems } from "@/lib/data";

export default function Problem() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="The real problem"
          title="Most clinics don't have a marketing problem."
          accent="They have a growth problem."
          description="More leads won't fix a leaking funnel. Predictable growth comes from systems — across attraction, conversion and retention — working together."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08} className="group bg-base">
              <motion.div className="relative h-full p-8 transition-colors duration-500 hover:bg-white/[0.03]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-gold transition-colors group-hover:border-gold/40">
                  <AlertCircle className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {p.body}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

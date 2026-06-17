"use client";

import { motion } from "framer-motion";
import {
  Filter,
  Bot,
  PenLine,
  BarChart3,
  Workflow,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import Reveal from "../ui/Reveal";
import { aiEngine } from "@/lib/data";

const icons = [Filter, Bot, PenLine, BarChart3, Workflow, PhoneCall];

export default function AIEngine() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface-2 py-24 md:py-32">
      {/* Futuristic backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[40vw] w-[70vw] -translate-x-1/2 rounded-full opacity-60 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.35), transparent 65%)",
        }}
        aria-hidden
      />

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              The AI Growth Engine
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-h2 font-semibold tracking-tight text-gradient-soft">
              Intelligence woven through every stage of{" "}
              <span className="text-gradient-gold">your growth.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              We layer proprietary AI systems onto the growth framework — so your
              clinic responds faster, qualifies smarter and scales without adding
              headcount.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {aiEngine.map((f, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.08} className="bg-surface-2">
                <motion.div className="group relative h-full overflow-hidden p-8">
                  {/* scan line on hover */}
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {f.body}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center text-sm text-muted">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
              </span>
              Live across every active client engagement
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

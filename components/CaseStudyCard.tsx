"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import StatsCounter from "./StatsCounter";

type Metric = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  category: string;
  location?: string;
  headline: string;
  challenge: string;
  strategy: string;
  execution?: string[];
  metrics: Metric[];
  accent: string;
};

/** Decorative dashboard-style visual unique to each study. */
function DashboardVisual({ accent }: { accent: string }) {
  const bars = [42, 58, 49, 70, 64, 86, 78, 100];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-base/60 p-5">
      <div className="flex items-center justify-between text-[11px] text-muted">
        <span className="font-mono uppercase tracking-widest">Consultations</span>
        <span className="flex items-center gap-1 text-gold">
          <ArrowUpRight className="h-3 w-3" /> trending
        </span>
      </div>
      <div className="mt-4 flex h-24 items-end gap-1.5">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.6, ease: "easeOut" }}
            className="flex-1 rounded-t"
            style={{
              background:
                i === bars.length - 1
                  ? "linear-gradient(180deg,#E6C868,#9E7E26)"
                  : "rgba(255,255,255,0.08)",
              boxShadow:
                i === bars.length - 1 ? `0 0 18px ${accent}66` : undefined,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function CaseStudyCard({
  study,
  index = 0,
}: {
  study: CaseStudy;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="card card-hover group flex h-full flex-col overflow-hidden p-7 md:p-8"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
          {study.category}
        </span>
        {study.location && (
          <span className="text-xs text-muted">{study.location}</span>
        )}
      </div>

      <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight">
        {study.headline}
      </h3>
      <p className="mt-1 text-sm text-muted">{study.client}</p>

      <div className="mt-6">
        <DashboardVisual accent={study.accent} />
      </div>

      <div className="mt-6 space-y-4 text-sm">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            Challenge
          </p>
          <p className="mt-1 leading-relaxed text-ink/80">{study.challenge}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            Strategy
          </p>
          <p className="mt-1 leading-relaxed text-ink/80">{study.strategy}</p>
        </div>
      </div>

      <div className="mt-auto pt-7">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          Results
        </p>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {study.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-line bg-white/[0.02] px-3 py-3 text-center"
            >
              <div className="font-display text-xl font-semibold text-gradient-gold">
                <StatsCounter
                  value={m.value}
                  prefix={m.prefix}
                  suffix={m.suffix}
                  decimals={m.decimals}
                />
              </div>
              <div className="mt-1 text-[11px] leading-tight text-muted">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

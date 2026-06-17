import type { Metadata } from "next";
import { Check, TrendingUp } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/ui/Reveal";
import StatsCounter from "@/components/StatsCounter";
import CTA from "@/components/sections/CTA";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real growth systems for real clinics. See how Cheerup Digital turned ad spend into predictable consultations, revenue and authority for skin, hair and aesthetic clinics.",
};

function GrowthChart({ accent }: { accent: string }) {
  const pts = [18, 30, 26, 44, 52, 70, 66, 88, 100];
  const w = 320;
  const h = 150;
  const step = w / (pts.length - 1);
  const line = pts
    .map((p, i) => `${i * step},${h - (p / 100) * h}`)
    .join(" ");
  const area = `0,${h} ${line} ${w},${h}`;

  return (
    <div className="rounded-2xl border border-line bg-base/60 p-6">
      <div className="flex items-center justify-between text-xs text-muted">
        <span className="font-mono uppercase tracking-widest">
          Monthly consultations
        </span>
        <span className="flex items-center gap-1 text-gold">
          <TrendingUp className="h-3.5 w-3.5" /> 12-month trend
        </span>
      </div>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="mt-4 h-auto w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`g-${accent}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={area} fill={`url(#g-${accent})`} />
        <polyline
          points={line}
          fill="none"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Predictable growth,"
        accent="proven in practice."
        subtitle="Every engagement is a system we can measure. Here's the challenge, the strategy, the execution and the results — in full."
      />

      <section className="relative pb-10">
        <div className="container-x space-y-24">
          {caseStudies.map((study, idx) => (
            <article
              key={study.slug}
              id={study.slug}
              className="scroll-mt-28"
            >
              <Reveal>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                    {study.category}
                  </span>
                  {study.location && (
                    <span className="text-xs text-muted">· {study.location}</span>
                  )}
                </div>
                <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                  <h2 className="max-w-3xl font-display text-h2 font-semibold tracking-tight text-gradient-soft">
                    {study.headline}
                  </h2>
                  <span className="font-display text-lg font-semibold text-muted">
                    {study.client}
                  </span>
                </div>
              </Reveal>

              <div className="mt-10 grid gap-6 lg:grid-cols-12">
                {/* Challenge / Strategy / Execution */}
                <div className="lg:col-span-7">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Reveal>
                      <div className="card h-full p-7">
                        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                          Challenge
                        </p>
                        <p className="mt-3 text-[15px] leading-relaxed text-ink/85">
                          {study.challenge}
                        </p>
                      </div>
                    </Reveal>
                    <Reveal delay={0.08}>
                      <div className="card h-full p-7">
                        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                          Strategy
                        </p>
                        <p className="mt-3 text-[15px] leading-relaxed text-ink/85">
                          {study.strategy}
                        </p>
                      </div>
                    </Reveal>
                  </div>

                  <Reveal delay={0.12}>
                    <div className="card mt-6 p-7">
                      <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                        Execution
                      </p>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {study.execution?.map((step) => (
                          <li
                            key={step}
                            className="flex items-start gap-3 text-[15px] text-ink/85"
                          >
                            <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                              <Check className="h-3 w-3" strokeWidth={3} />
                            </span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </div>

                {/* Results + visuals */}
                <div className="lg:col-span-5">
                  <Reveal delay={0.1}>
                    <div className="card overflow-hidden p-7">
                      <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                        Results
                      </p>
                      <div className="mt-4 grid grid-cols-3 gap-3">
                        {study.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="rounded-xl border border-line bg-white/[0.02] px-2 py-4 text-center"
                          >
                            <div className="font-display text-2xl font-semibold text-gradient-gold">
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

                      <div className="mt-6">
                        <GrowthChart accent={study.accent} />
                      </div>

                      {/* Screenshot placeholder */}
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        {["Campaign", "Dashboard"].map((tag) => (
                          <div
                            key={tag}
                            className="flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-line bg-white/[0.02] text-xs text-muted"
                          >
                            {tag} preview
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>

              {idx < caseStudies.length - 1 && (
                <div className="hairline mt-24" aria-hidden />
              )}
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}

"use client";

import StatsCounter from "../StatsCounter";
import Reveal from "../ui/Reveal";
import Marquee from "../Marquee";
import { stats, partners } from "@/lib/data";

export default function Stats() {
  return (
    <section className="relative border-y border-line bg-surface/40 py-20 md:py-24">
      <div className="container-x">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            Trusted by leading skin, hair &amp; aesthetic clinics
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-base">
              <div className="flex h-full flex-col items-center justify-center gap-2 px-6 py-10 text-center">
                <div className="font-display text-4xl font-semibold tracking-tight text-gradient-gold md:text-5xl">
                  <StatsCounter
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                  />
                </div>
                <div className="text-sm text-muted">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 mask-fade-edges">
          <Marquee
            items={partners.map((p) => (
              <span
                key={p}
                className="font-display text-2xl font-medium tracking-tight text-ink/25 md:text-3xl"
              >
                {p}
              </span>
            ))}
          />
        </div>
      </div>
    </section>
  );
}

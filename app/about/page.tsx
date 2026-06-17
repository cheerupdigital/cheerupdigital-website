import type { Metadata } from "next";
import { Compass, Eye, Quote, Heart } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/ui/Reveal";
import CTA from "@/components/sections/CTA";
import { values, timeline, team } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Cheerup Digital is a growth partner built exclusively for skin, hair and aesthetic clinics. Our mission, our framework and the team behind predictable clinic growth.",
};

const whyUs = [
  "We only work with healthcare — clinics, not e-commerce",
  "Systems thinking, not one-off campaigns",
  "Proprietary AI growth engine baked into every engagement",
  "Live dashboards and plain-English reporting",
  "Limited client roster for obsessive attention",
  "Outcomes measured in consultations and revenue",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A growth partner,"
        accent="not another vendor."
        subtitle="Cheerup Digital exists to give clinics what generalist agencies never could — a measurable system for turning reputation and results into predictable revenue."
      />

      {/* Mission & Vision */}
      <section className="py-16 md:py-20">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Compass,
              tag: "Mission",
              title: "Make clinic growth predictable.",
              body: "We help skin, hair and aesthetic clinics generate more consultations, build doctor authority and engineer patient acquisition systems that compound month after month.",
            },
            {
              icon: Eye,
              tag: "Vision",
              title: "Healthcare brands that lead, not chase.",
              body: "A future where every great clinician is matched by an equally great growth system — so the best care reaches the most patients, reliably and at scale.",
            },
          ].map((c, i) => (
            <Reveal key={c.tag} delay={i * 0.1}>
              <div className="card h-full p-9">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-night shadow-gold">
                  <c.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {c.tag}
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                  {c.title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Founder story */}
      <section className="border-y border-line bg-surface/40 py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              <div className="absolute inset-0 rounded-3xl bg-gold-gradient opacity-20 blur-2xl" />
              <div className="relative grid h-full w-full place-items-center rounded-3xl border border-line bg-surface">
                <span className="font-display text-7xl font-bold text-gradient-gold">
                  AS
                </span>
                <span className="absolute bottom-6 text-sm text-muted">
                  Aarav Shah · Founder
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Founder story
              </span>
              <Quote className="mt-6 h-8 w-8 text-gold/50" />
              <p className="mt-4 font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                &ldquo;I watched brilliant doctors lose patients to clinics with
                worse outcomes but better systems. Cheerup exists to close that
                gap.&rdquo;
              </p>
              <p className="mt-6 text-[15px] leading-relaxed text-muted">
                After a decade running growth for healthcare brands, one pattern
                was undeniable: clinics didn&apos;t lack demand, they lacked
                systems. Leads leaked, follow-ups slipped and doctor authority
                stayed invisible. We built Cheerup to be the partner we wished
                those clinics had — part growth team, part technology lab,
                obsessed with one category.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Our journey
            </span>
            <h2 className="mt-5 max-w-2xl font-display text-h2 font-semibold tracking-tight text-gradient-soft">
              From one clinic to a growth system that scales.
            </h2>
          </Reveal>

          <div className="relative mt-16">
            <div className="absolute left-[7px] top-2 h-full w-px bg-line md:left-1/2" aria-hidden />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.08}>
                  <div
                    className={`relative flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-12 ${
                      i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div
                      className={`pl-8 md:pl-0 ${
                        i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <span className="font-display text-3xl font-bold text-gradient-gold">
                        {t.year}
                      </span>
                      <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
                        {t.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted">
                        {t.body}
                      </p>
                    </div>
                    <span className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-gold bg-base md:left-1/2 md:-translate-x-1/2" />
                    <div className="hidden md:block" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-line bg-surface/40 py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">
              <Heart className="h-3.5 w-3.5 text-gold" />
              What we value
            </span>
            <h2 className="mt-5 max-w-2xl font-display text-h2 font-semibold tracking-tight text-gradient-soft">
              The principles behind every decision.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="bg-surface-2">
                <div className="h-full p-8">
                  <span className="font-display text-2xl font-bold text-gold/30">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cheerup + team */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Why Cheerup Digital
              </span>
              <h2 className="mt-5 font-display text-h2 font-semibold tracking-tight text-gradient-soft">
                Specialists beat generalists. Every time.
              </h2>
            </Reveal>
            <ul className="mt-8 space-y-4">
              {whyUs.map((w, i) => (
                <Reveal key={w} delay={i * 0.06}>
                  <li className="flex items-start gap-3 text-[15px] text-ink/85">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                    {w}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="card card-hover p-6 text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold-gradient font-display text-lg font-bold text-night">
                    {m.initials}
                  </div>
                  <h3 className="mt-4 font-display text-night font-semibold tracking-tight">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

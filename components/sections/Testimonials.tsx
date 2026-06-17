"use client";

import { Quote } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="What partners say"
          title="Clinics don't hire us twice by accident."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="card card-hover flex h-full flex-col p-8">
                <Quote className="h-7 w-7 text-gold/60" />
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ink/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 border-t border-line pt-5">
                  <div className="font-display font-semibold tracking-tight">
                    {t.name}
                  </div>
                  <div className="text-sm text-muted">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

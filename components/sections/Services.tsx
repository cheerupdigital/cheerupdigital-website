"use client";

import { motion } from "framer-motion";
import { Users, Award, Workflow, Clapperboard, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { serviceCategories } from "@/lib/data";

const icons = [Users, Award, Workflow, Clapperboard];

export default function Services() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="A full-stack growth team,"
            accent="purpose-built for clinics."
            description="Four connected capabilities that take a patient from first impression to loyal advocate."
          />
          <Reveal delay={0.1}>
            <Link
              href="/services"
              data-cursor
              className="group inline-flex items-center gap-2 text-sm font-medium text-gold"
            >
              Explore all services
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {serviceCategories.map((s, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={s.id} delay={(i % 2) * 0.1}>
                <Link href="/services" data-cursor className="block h-full">
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="card card-hover group relative h-full overflow-hidden p-8 md:p-10"
                  >
                    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="flex items-start justify-between">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl border border-line bg-white/[0.03] text-gold transition-colors group-hover:border-gold/40">
                        <Icon className="h-6 w-6" strokeWidth={1.75} />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
                    </div>

                    <h3 className="mt-7 font-display text-2xl font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-gold/80">
                      {s.tagline}
                    </p>
                    <p className="mt-4 text-[15px] leading-relaxed text-muted">
                      {s.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {s.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs text-muted"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

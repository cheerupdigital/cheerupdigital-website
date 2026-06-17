"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import CaseStudyCard from "../CaseStudyCard";
import { caseStudies } from "@/lib/data";

export default function CaseStudyPreview() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Proof, not promises"
            title="Growth we've engineered for"
            accent="clinics like yours."
            description="Real challenges, real systems, real revenue. Here's what predictable growth looks like in practice."
          />
          <Reveal delay={0.1}>
            <Link
              href="/case-studies"
              data-cursor
              className="group inline-flex items-center gap-2 text-sm font-medium text-gold"
            >
              View all case studies
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

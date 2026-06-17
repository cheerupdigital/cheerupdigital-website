import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/ui/Reveal";
import BlogList from "@/components/BlogList";
import CTA from "@/components/sections/CTA";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Growth playbooks for clinics — patient acquisition, doctor authority, automation and AI. Practical insights from the Cheerup Digital team.",
};

const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Growth playbooks"
        accent="for modern clinics."
        subtitle="Practical, no-fluff insights on patient acquisition, doctor authority, automation and AI — written by the team in the trenches."
      />

      {/* Featured article */}
      <section className="pb-6">
        <div className="container-x">
          <Reveal>
            <article className="card card-hover group grid overflow-hidden lg:grid-cols-2">
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-surface to-base lg:aspect-auto">
                <div className="absolute inset-0 bg-radial-faint" />
                <span className="relative font-display text-5xl font-bold text-gold/20">
                  Featured
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="rounded-full border border-line px-2.5 py-1 text-gold">
                    {featured.category}
                  </span>
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-gold md:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  {featured.excerpt}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-gold">
                  Read the article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Filterable grid */}
      <section className="py-14 md:py-20">
        <div className="container-x">
          <BlogList />
        </div>
      </section>

      <CTA />
    </>
  );
}

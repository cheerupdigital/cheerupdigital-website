import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/ui/Reveal";
import BlogList from "@/components/BlogList";
import CTA from "@/components/sections/CTA";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Growth playbooks for skin, hair and aesthetic clinics — patient acquisition, automation and AI, plus a data-backed series on the Delhi aesthetic market.",
};

const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

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
            <Link
              href={`/blog/${featured.slug}`}
              data-cursor
              className="card card-hover group grid overflow-hidden lg:grid-cols-2"
            >
              <div className="relative min-h-[260px] overflow-hidden border-b border-line lg:border-b-0 lg:border-r">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute left-5 top-5 rounded-full border border-gold/30 bg-base/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur">
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
                <div className="mt-7 flex items-center justify-between">
                  <span className="text-sm text-muted">
                    {formatDate(featured.date)}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-gold">
                    Read article
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </Link>
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

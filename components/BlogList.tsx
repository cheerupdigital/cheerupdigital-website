"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { blogCategories, blogPosts } from "@/lib/data";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogList() {
  const [active, setActive] = useState("All");

  const posts = useMemo(
    () =>
      active === "All"
        ? blogPosts
        : blogPosts.filter((p) => p.category === active),
    [active]
  );

  return (
    <div>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2.5">
        {blogCategories.map((c) => {
          const on = c === active;
          return (
            <button
              key={c}
              data-cursor
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                on
                  ? "border-gold/50 bg-gold/10 text-gold"
                  : "border-line text-muted hover:border-gold/30 hover:text-ink"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {posts.map((post) => (
            <motion.div
              key={post.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Link
                href={`/blog/${post.slug}`}
                data-cursor
                className="card card-hover group flex h-full flex-col overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="rounded-full border border-line px-2.5 py-1 text-gold">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="mt-4 flex-1 font-display text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-gold">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-line pt-5 text-sm">
                    <span className="text-muted">{formatDate(post.date)}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {posts.length === 0 && (
        <p className="mt-12 text-center text-muted">
          No articles in this category yet — check back soon.
        </p>
      )}
    </div>
  );
}

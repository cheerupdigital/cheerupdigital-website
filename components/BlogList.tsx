"use client";

import { useMemo, useState } from "react";
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
      <div className="flex flex-wrap gap-3">
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
            <motion.article
              key={post.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="card card-hover group flex h-full flex-col p-7"
            >
              <div className="flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-surface to-base">
                <span className="font-display text-4xl font-bold text-gold/20">
                  {post.category}
                </span>
              </div>
              <div className="mt-6 flex items-center gap-3 text-xs text-muted">
                <span className="rounded-full border border-line px-2.5 py-1 text-gold">
                  {post.category}
                </span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="mt-4 flex-1 font-display text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-gold">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-line pt-5 text-sm">
                <span className="text-muted">{formatDate(post.date)}</span>
                <span className="inline-flex items-center gap-1 text-gold">
                  Read
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.article>
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

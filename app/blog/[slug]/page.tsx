import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import Aurora from "@/components/ui/Aurora";
import CTA from "@/components/sections/CTA";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="relative overflow-hidden pt-32 md:pt-40">
        <Aurora intensity="subtle" />
        <div
          className="absolute inset-0 bg-grid mask-fade-b opacity-50"
          aria-hidden
        />

        {/* Header */}
        <header className="container-x relative">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              data-cursor
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" /> Back to blog
            </Link>

            <div className="mt-8 flex items-center gap-3 text-xs text-muted">
              <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-medium text-gold">
                {post.category}
              </span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="mt-5 font-display text-display font-semibold leading-[1.05] tracking-tight text-gradient-soft">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center gap-3 border-b border-line pb-8 text-sm text-muted">
              <span>{formatDate(post.date)}</span>
            </div>
          </div>
        </header>

        {/* Hero visual */}
        <div className="container-x relative mt-10">
          <div className="relative mx-auto aspect-[16/7] max-w-4xl overflow-hidden rounded-3xl border border-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Body */}
        <div className="container-x relative py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            {post.content.map((block, i) => {
              switch (block.type) {
                case "h2":
                  return (
                    <h2
                      key={i}
                      className="mt-12 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl"
                    >
                      {block.text}
                    </h2>
                  );
                case "p":
                  return (
                    <p
                      key={i}
                      className="mt-5 text-[17px] leading-[1.8] text-muted"
                    >
                      {block.text}
                    </p>
                  );
                case "list":
                  return (
                    <ul key={i} className="mt-6 space-y-3">
                      {block.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-[17px] leading-[1.7] text-muted"
                        >
                          <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                case "quote":
                  return (
                    <blockquote
                      key={i}
                      className="my-10 border-l-2 border-gold pl-6 font-display text-xl font-medium leading-relaxed tracking-tight text-ink md:text-2xl"
                    >
                      {block.text}
                    </blockquote>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </article>

      {/* Related posts */}
      <section className="border-t border-line py-16 md:py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Keep reading
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                data-cursor
                className="card card-hover group flex h-full flex-col p-6"
              >
                <span className="w-fit rounded-full border border-line px-2.5 py-1 text-xs text-gold">
                  {p.category}
                </span>
                <h3 className="mt-4 flex-1 font-display text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-gold">
                  {p.title}
                </h3>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-gold">
                  Read
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

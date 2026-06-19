import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";

const BASE = "https://cheerupdigital.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/case-studies", "/about", "/blog", "/contact"];
  const staticRoutes: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${BASE}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));

  const postRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}

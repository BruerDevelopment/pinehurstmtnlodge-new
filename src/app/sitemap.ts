import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/configs/site";
import { sitePages } from "@/configs/seo";
import { articleHref } from "@/lib/article-types";
import { getAllArticles } from "@/lib/articles";

export const dynamic = "force-static";

// Legacy /area-guide and /area-guide/articles URLs are intentionally left out; they canonicalize to /things-to-do.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    ...sitePages.map((page) => ({
      url: absoluteUrl(page.path),
      changeFrequency: "monthly" as const,
      priority: page.path === "/" ? 1 : 0.7,
    })),
    { url: absoluteUrl("/area-guide/map"), changeFrequency: "monthly", priority: 0.5 },
    ...getAllArticles().map((article) => ({
      url: absoluteUrl(articleHref(article)),
      lastModified: article.updated,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
  return pages;
}

import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/configs/site";
import { sitePages } from "@/configs/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitePages.map((page) => ({
    url: absoluteUrl(page.path),
    changeFrequency: "monthly",
    priority: page.path === "/" ? 1 : 0.7,
  }));
}

import type { MetadataRoute } from "next";
import { site } from "@/configs/site";
import { sitePages } from "@/configs/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitePages.map((page) => ({
    url: new URL(page.path, site.siteUrl).toString(),
    changeFrequency: "monthly",
    priority: page.path === "/" ? 1 : 0.7,
  }));
}

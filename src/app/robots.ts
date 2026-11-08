import type { MetadataRoute } from "next";
import { site } from "@/configs/site";

export const dynamic = "force-static";

// Allows all crawlers, including AI agents. Change the rule to disallow specific bots.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", site.siteUrl).toString(),
  };
}

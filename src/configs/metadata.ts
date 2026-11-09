import type { Metadata } from "next";
import { absoluteUrl, site } from "@/configs/site";

// Social cover images in public/photos/social_covers (1200 x 627).
export type SocialCover = "default" | "area_guide" | "scrapbooking";

export function socialCover(name: SocialCover) {
  return {
    url: absoluteUrl(`/photos/social_covers/${name}.png`),
    width: 1200,
    height: 627,
    alt: `${site.name}`,
  };
}

// Page metadata. The root layout's title template adds " | Pinehurst Mtn Lodge" to `title`,
// so `title` here is the page name only. Social cards use the full branded title.
export function pageMetadata({
  title,
  description,
  path,
  cover = "default",
}: {
  title: string;
  description: string;
  path: string;
  cover?: SocialCover;
}): Metadata {
  const url = absoluteUrl(path);
  const image = socialCover(cover);
  const socialTitle = `${title} | ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image.url],
    },
  };
}

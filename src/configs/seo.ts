import { absoluteUrl, site } from "@/configs/site";
import { type Article, type ArticleSummary, articleHref } from "@/lib/article-types";
import type { FaqGroup } from "@/configs/faqs";

// Sums bed counts across all rooms, e.g. King x1, Queen x3, for the top-level bed summary.
function bedSummary() {
  const totals = new Map<string, number>();
  for (const room of site.property.rooms) {
    for (const bed of room.beds) {
      totals.set(bed.type, (totals.get(bed.type) ?? 0) + bed.count);
    }
  }
  return [...totals].map(([type, count]) => ({
    "@type": "BedDetails",
    typeOfBed: type,
    numberOfBeds: count,
  }));
}

// schema.org JSON-LD describing the lodge. Only includes facts that are real.
// Telephone, street address, and policies are omitted (see the plan).
export function lodgingJsonLd() {
  const { property } = site;

  return {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    "@id": absoluteUrl("/#lodge"),
    name: site.name,
    url: site.siteUrl,
    description: site.description,
    image: site.photos.map((photo) => new URL(photo.src, site.siteUrl).toString()),
    contactPoint: {
      "@type": "ContactPoint",
      email: site.email,
      contactType: "customer service",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
      elevation: site.geo.elevationMeters,
    },
    petsAllowed: property.petsAllowed,
    checkinTime: "16:00:00",
    checkoutTime: "12:00:00",
    amenityFeature: site.amenities.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    containsPlace: {
      "@type": "Accommodation",
      additionalType: "EntirePlace",
      occupancy: { "@type": "QuantitativeValue", maxValue: property.maxOccupancy },
      numberOfBedrooms: property.bedrooms,
      numberOfBathroomsTotal: property.bathrooms,
      bed: bedSummary(),
      containsPlace: property.rooms.map((room) => ({
        "@type": "Accommodation",
        name: room.name,
        bed: room.beds.map((bed) => ({
          "@type": "BedDetails",
          typeOfBed: bed.type,
          numberOfBeds: bed.count,
        })),
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.reviews.average,
      reviewCount: site.reviews.items.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: site.reviews.items.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.name },
      reviewBody: review.text,
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 },
    })),
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: site.directBooking.href,
        actionPlatform: "https://schema.org/DesktopWebPlatform",
      },
    },
  };
}

// FAQPage structured data: one Question per FAQ item, with the answer as plain text.
export function faqJsonLd(groups: FaqGroup[]) {
  const questions = groups.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        // Structured data gets plain text, so [label](/path) links are reduced to their label.
        text: item.answer
          .map((block) => (Array.isArray(block) ? block.join("\n") : block))
          .join("\n")
          .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"),
      },
    }))
  );
  return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: questions };
}

// VideoObject structured data for a video post. The embed is YouTube's privacy-enhanced domain.
export function videoJsonLd(video: ArticleSummary) {
  const seconds = video.durationSeconds ?? 0;
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: [absoluteUrl(video.cover)],
    uploadDate: video.date,
    duration: `PT${Math.floor(seconds / 60)}M${seconds % 60}S`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.videoId}`,
    contentUrl: video.href,
    author: { "@type": "Person", name: video.author },
  };
}

// Article structured data for each guide page.
export function articleJsonLd(article: Article) {
  const href = articleHref(article);
  const isTeam = article.author.toLowerCase().includes("team");
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: [absoluteUrl(article.cover)],
    datePublished: article.date,
    dateModified: article.updated,
    author: { "@type": isTeam ? "Organization" : "Person", name: article.author },
    publisher: { "@type": "Organization", name: site.name, url: site.siteUrl },
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(href) },
    inLanguage: "en-US",
  };
}

// Breadcrumb trail. Paths are unprefixed; absoluteUrl adds the origin and base path.
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const sitePages = [
  { title: "Home", path: "/", note: "Photos, key facts, amenities, guest reviews, and contact." },
  { title: "Things to Do", path: "/things-to-do", note: "Nearby activities and area information." },
  { title: "Your Hosts", path: "/about", note: "About the hosts." },
  { title: "Guest Reviews", path: "/reviews", note: "All guest reviews." },
  { title: "Accommodations", path: "/accommodations", note: "Bedrooms, kitchens, living spaces, bathrooms, laundry, and garage." },
  { title: "Kitchen Guide", path: "/kitchen_guide", note: "Photo guide to the upstairs and downstairs kitchens." },
  { title: "FAQs", path: "/faqs", note: "Check-in, house rules, hot tub and fireplace instructions, parking, and nearby attractions." },
];

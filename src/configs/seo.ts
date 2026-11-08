import { site } from "@/configs/site";

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
    "@id": new URL("/#lodge", site.siteUrl).toString(),
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
      reviewCount: site.reviews.count,
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

export const sitePages = [
  { title: "Home", path: "/", note: "Photos, key facts, amenities, guest reviews, and contact." },
  { title: "Things to Do", path: "/things-to-do", note: "Nearby activities and area information." },
  { title: "Your Hosts", path: "/about", note: "About the hosts." },
  { title: "Guest Reviews", path: "/reviews", note: "All guest reviews." },
];

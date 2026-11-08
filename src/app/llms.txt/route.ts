import { absoluteUrl, site } from "@/configs/site";
import { sitePages } from "@/configs/seo";

// Plain-text summary for AI agents, served at /llms.txt.
export const dynamic = "force-static";

export function GET() {
  const pages = sitePages
    .map((page) => `- [${page.title}](${absoluteUrl(page.path)}): ${page.note}`)
    .join("\n");

  const text = `# ${site.name}

> ${site.tagline}

Location: ${site.location}
Sleeps ${site.facts[0].value.replace(" guests", "")} guests · ${site.facts[1].value} · Check-in ${site.facts[2].value} · Check-out ${site.facts[3].value}
Pets: ${site.property.petsAllowed ? "allowed" : "not allowed"}

## Rooms

${site.property.rooms
  .map((room) => `- ${room.name}: ${room.beds.map((bed) => `${bed.count} ${bed.type}`).join(", ")}`)
  .join("\n")}

## Pages

${pages}

## Amenities

${site.amenities.map((a) => `- ${a}`).join("\n")}

## Booking and contact

- Email: ${site.email}
- Book direct, or on Airbnb or Vrbo (links on the Contact section of the home page).
`;

  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

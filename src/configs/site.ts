// All page copy and placeholder content lives here. Swap values to update the site.

// Set by next.config.ts from DEPLOY_TARGET (see there). Empty base path and custom domain by default.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://pinehurstmtnlodge.com";

// Prefixes a root-relative path with the base path. Needed for image src, which Next does not prefix.
export const withBase = (path: string) => `${basePath}${path}`;

// Absolute URL for a page or file, including the base path.
export const absoluteUrl = (path: string) => `${siteOrigin}${basePath}${path}`;

export const site = {
  name: "Pinehurst Mtn Lodge",
  location: "Rollinsville, Colorado",
  tagline:
    "In the beautiful Rocky Mountains, with a fabulous view and a large, brand new Arctic Spas hot tub, awaits the Pinehurst Mtn Lodge.",
  copyright: "© 2026 Pinehurst Mtn Lodge",
  phone: "(000) 000-0000",
  email: "bigpinehurst@gmail.com",
  instagram: "https://www.instagram.com/",

  // Used by the sitemap, robots.txt, llms.txt, and structured data. Follows DEPLOY_TARGET.
  siteUrl: absoluteUrl("/"),
  address: { locality: "Rollinsville", region: "CO", postalCode: "80474", country: "US" },
  // Approximate (about 1 km), so the exact property location is not published.
  geo: { latitude: 39.91, longitude: -105.5, elevationMeters: 2713 },

  nav: [
    { label: "Home", href: "/" },
    { label: "Accommodations", href: "/accommodations" },
    { label: "Things to Do", href: "/things-to-do" },
    { label: "Your Hosts", href: "/about" },
    { label: "FAQs", href: "/faqs" },
  ],

  facts: [
    { label: "Sleeps", value: "6 guests" },
    { label: "Layout", value: "4 bed · 3 bath" },
    { label: "Check-in", value: "4:00 PM" },
    { label: "Check-out", value: "12:00 PM" },
  ],

  // First three are used in the hero mosaic; all six appear in the gallery.
  photos: [
    { src: withBase("/photos/full-house-drone-shot-deck-side.jpg"), alt: "Placeholder photo 1" },
    { src: withBase("/photos/top-deck-fire-pit-woman.jpg"), alt: "Top-Deck Scenic Firepit", fit: "contain" },
    { src: withBase("/photos/photo-3.svg"), alt: "Placeholder photo 3" },
    { src: withBase("/photos/photo-4.svg"), alt: "Placeholder photo 4" },
    { src: withBase("/photos/photo-5.svg"), alt: "Placeholder photo 5" },
    { src: withBase("/photos/photo-6.svg"), alt: "Placeholder photo 6" },
  ],

  space: [
    "Wake up to Continental Divide views, grab coffee on the deck, then spend the day skiing, hiking, or exploring the mountain towns nearby. Back at Pinehurst Mtn Lodge, soak in the private covered hot tub, challenge friends to a game of pool, or gather around the fireplace after dinner. With two living rooms, two fully equipped kitchens, and plenty of space to spread out, it's an ideal home for families, friends, and unforgettable Colorado getaways.",
    "Whether you're planning a ski trip, hiking adventure, family vacation, or relaxing mountain escape, Pinehurst Lodge is designed to bring everyone together while giving everyone room to spread out.",
    "Located in the peaceful mountain community of Rollinsville, you'll enjoy panoramic mountain views, fresh alpine air, and easy access to Colorado's outdoor adventures—all from the comfort of a spacious, amenity-filled home.",
  ],

  // Portrait photo shown beside the "The Space" copy.
  spacePhoto: { src: withBase("/photos/top-deck-fire-pit-woman.jpg"), alt: "Top-deck fire pit with a view" },

  // Longer description used in the structured data.
  description:
    "Luxury 4-bedroom mountain retreat in Rollinsville, Colorado, overlooking the Continental Divide. Features a 7-person Arctic Spas hot tub, two fully equipped kitchens, two living areas, pool table, garage parking, and dedicated crafting or scrapbooking workspaces.",

  // Sleeping details used in the structured data. Sleeping spots total 8 against a maxOccupancy of 6.
  property: {
    bedrooms: 4,
    bathrooms: 3,
    maxOccupancy: 6,
    petsAllowed: false,
    rooms: [
      { name: "Upstairs Master Suite", beds: [{ type: "King", count: 1 }] },
      { name: "Upstairs Queen Bedroom", beds: [{ type: "Queen", count: 1 }] },
      { name: "Downstairs Master Suite", beds: [{ type: "Queen", count: 1 }] },
      {
        name: "Downstairs Queen & Bunks Bedroom",
        beds: [
          { type: "Queen", count: 1 },
          { type: "Twin Bunk", count: 2 },
        ],
      },
      // A twin with a rollout twin, configurable from twin to king: 2 sleeping spots.
      { name: "Downstairs Living Area Configurable Beds", beds: [{ type: "Trundle Twin to King", count: 2 }] },
    ],
  },

  amenities: [
    "Arctic Spas 7-Person Hot Tub",
    "Two Fully Equipped Kitchens",
    "Pool Table",
    "Wood-Burning Fireplace",
    "Two Living Rooms",
    "Two Full Laundries with Washers and Dryers",
    "Indoor Garage Parking for 2 Vehicles",
    "Outdoor Deck with Large Grill and Propane Fireplace",
    "Scrapbooking and Crafting Stations",
    "Smart TVs",
    "Heated Tile Bathroom Floors",
    "Complimentary Firewood",
  ],

  reviews: {
    average: 5.0,
    count: 3,
    items: [
      { name: "Kris", date: "October 2026", platform: "Airbnb", text: "This place was exactly how described! Beautiful views, great central location, clean house, lots of space! Rheo was very responsive and accommodating." },
      { name: "Rory", location: "New Orleans, LA", date: "August 2026", platform: "Airbnb", text: "The house is fantastic. Situated close to world class hikes and great breweries. We had a few hiccups during our stay but Rheo was incredibly responsive and quick to address any concerns." },
      { name: "Nancy", location: "Boulder, CO", date: "August 2026", platform: "Airbnb", text: "Thanks so much! We had a lovely lovely stay, the pictures were exactly like the property and it was very accommodating. We saw deer, foxes and tons of other wildlife right from the back deck. Thanks so much again, Rheo for the wonderful stay! Would highly recommend to anyone!" },
    ],
  },

  linkCards: [
    {
      title: "Things to Do",
      body: "Hikes, fishing spots, local dining, and history around Rollinsville, all in one guide.",
      href: "/things-to-do",
      cta: "Explore the area →",
    },
    {
      title: "Your Hosts",
      body: "We're a Family-hosted Vacation Rental. Our family is a group of passionate travelers and outdoor enthusiasts, who wish to share with you our perfect mountain escape.",
      href: "/about",
      cta: "Meet us →",
      showHostPhotos: true,
    },
  ],

  // Replace the placeholder names, bios, and photos with the real hosts.
  hosts: [
    {
      name: "Host name",
      role: "Host",
      bio: "Placeholder: a few words about this host and what they love about the lodge.",
      photo: withBase("/photos/host-photos/rheo.jpeg"),
      alt: "Portrait of host 1",
    },
    {
      name: "Host name",
      role: "Host",
      bio: "Placeholder: a few words about this host and what they love about the lodge.",
      photo: withBase("/photos/host-photos/lisa.jpg"),
      alt: "Portrait of host 2",
    },
  ],

  // Primary booking button, shown as its own call to action.
  directBooking: {
    label: "Book Direct",
    href: "https://checkout.lodgify.com/pinehurstmtnlodge/846898/reservation?currency=USD&adults=1",
  },

  // About page: two family photos, the intro, each owner's profile, and a closing note.
  about: {
    familyPhotos: [
      { src: withBase("/photos/host-photos/family-aspens.jpg"), alt: "Pinehurst Lodge owners, photo 1" },
      { src: withBase("/photos/host-photos/family-no-shea-skiing-brett.jpg"), alt: "Pinehurst Lodge owners, photo 2" },
    ],
    intro: [
      "Welcome to our home! We are the Pinehurst Lodge owners (Kraig, Lisa, Parker, Rheo, Keegan, and Shea), a group of passionate travelers, outdoor enthusiasts, and your dedicated short-term rental hosts. While our family is spread across North Carolina and Colorado, we come together to ensure you have an unforgettable stay. Here is a little bit about who we are:",
    ],
    members: [
      {
        name: "Rheo & Keegan",
        role: "Your Local Hosts",
        bio: "Rheo is a software developer and avid rock climber and skier who manages our Rollinsville property. Keegan is a freelance coder and tech-whiz who keeps our Airbnb operations running smoothly. When they aren't working, they are out exploring the mountain trails.",
      },
      {
        name: "Parker",
        bio: "An aspiring commercial pilot currently navigating flight school. When not studying weather patterns or up in the air, you can find Parker fishing, skiing, and hiking.",
      },
      {
        name: "Shea",
        bio: "Based in Asheville, NC, Shea works as a GIS Analyst in urban planning. He balances his career with raising a rambunctious pup named Kerrigan and traveling for both work and family trips.",
      },
      {
        name: "Kraig & Lisa",
        role: "Mom & Dad",
        bio: "Lisa is a local educator who enjoys gardening, hiking and the arts. Kraig is happily retired. Both are avid skiers and globetrotters who love splitting time between world travel and the mountains of Colorado.",
      },
    ],
    closing:
      "As a family of adventurers, we know exactly what makes a trip special: comfort, local insights, and seamless hospitality. We are thrilled to host you and hope our home serves as the perfect launchpad for your own big adventures!",
  },

  // Things to Do index and area guide copy. Categories shown as filter chips when articles exist.
  thingsToDo: {
    heading: "Your local's guide to the area around Pinehurst Mtn Lodge",
    intro: "Trails, lakes, local food, and history around Rollinsville, written by the lodge team.",
    categories: ["Local Guide", "Hiking", "Fishing", "Food & Drink", "History & Culture", "Crafts"],
  },

  bookingLinks: [
    { label: "Book on Airbnb", href: "#" },
    { label: "Book on Vrbo", href: "#" },
  ],
};

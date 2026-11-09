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
    { src: withBase("/photos/full-house-drone-shot-deck-side.webp"), alt: "Placeholder photo 1" },
    { src: withBase("/photos/mtn-views/cont-divide-blue-sky.webp"), alt: "Top-Deck Scenic Firepit" },
    { src: withBase("/photos/rooms/living-room/living-1.webp"), alt: "Living room photo" },
    { src: withBase("/photos/rooms/living-room/living-3.webp"), alt: "Living room photo" },
    { src: withBase("/photos/rooms/upstairs-deck/grill-food-view.webp"), alt: "Deck, Outdoor Grill, And a View" },
  ],

  space: [
    "Wake up to Continental Divide views, grab coffee on the deck, then spend the day skiing, hiking, or exploring the mountain towns nearby. Back at Pinehurst Mtn Lodge, soak in the private covered hot tub, challenge friends to a game of pool, or gather around the fireplace after dinner. With two living rooms, two fully equipped kitchens, and plenty of space to spread out, it's an ideal home for families, friends, and unforgettable Colorado getaways.",
    "Whether you're planning a ski trip, hiking adventure, family vacation, or relaxing mountain escape, Pinehurst Lodge is designed to bring everyone together while giving everyone room to spread out.",
    "Located in the peaceful mountain community of Rollinsville, you'll enjoy panoramic mountain views, fresh alpine air, and easy access to Colorado's outdoor adventures—all from the comfort of a spacious, amenity-filled home.",
  ],

  // Portrait photo shown beside the "The Space" copy.
  spacePhoto: { src: withBase("/photos/top-deck-fire-pit-woman.webp"), alt: "Top-deck fire pit with a view" },

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
    items: [
      { name: "Kris", date: "October 2026", platform: "Airbnb", text: "This place was exactly how described! Beautiful views, great central location, clean house, lots of space! Rheo was very responsive and accommodating." },
      { name: "Rory", location: "New Orleans, LA", date: "August 2026", platform: "Airbnb", text: "The house is fantastic. Situated close to world class hikes and great breweries. We had a few hiccups during our stay but Rheo was incredibly responsive and quick to address any concerns." },
      { name: "Nancy", location: "Boulder, CO", date: "August 2026", platform: "Airbnb", text: "Thanks so much! We had a lovely lovely stay, the pictures were exactly like the property and it was very accommodating. We saw deer, foxes and tons of other wildlife right from the back deck. Thanks so much again, Rheo for the wonderful stay! Would highly recommend to anyone!" },
      { name: "Daryl", location: "Centerburg, Ohio", date: "July 2026", platform: "Airbnb", text: "We were looking for a good location with a private setting that we could use as a hub for daily hikes with our adult family.  Rheo & Lisa’s cabin is in a great location and turned out to be more than we had hoped for. Aside from the location in a beautiful mountain setting, Rollinsville is a quaint and authentic little town with an excellent woodfired pizza shop and a nice brewery with coffee shop and a distillery. We had great access to Roosevelt National Forest and Rocky Mountain National Park along with many other local spots that provided all degrees and levels of hikes that we were looking for. Rheo & Lisa were very responsive throughout the entire process and were very helpful in providing local tips for hikes and other things to do. I highly recommend their place if you are looking for a peaceful getaway with beautiful views away from the mainstream. Colorado is absolutely gorgeous in the mountains!! We would definitely visit and stay here again." },
      { name: "Stephanie", location: "Newton, KS", date: "May 2026", platform: "Airbnb", text: "We traveled with some running friends for a nearby event. We felt right at home. We could not have asked for a better equipped and welcoming home. Very responsive and friendly hosts.\n\n This home is large enough that everyone had their privacy and is set up in a way that allowed all of us to come together for meals, hanging out together, playing games, etc. I can't stress enough how comfortable and well taken care of we felt!  I've been on plenty of trips and I can tell you these hosts know how to equip a home to make you feel great about staying there. They gave thought to details that would allow us to really enjoy our time there. Clear instructions, great accommodations!" },
      { name: "Lada", location: "Garwood, NJ", date: "May 2026", platform: "Airbnb", text: "What a lovely, lovely home!  It had absolutely everything we needed, and the hot tub overlooking the Continental Divide was just spectacular. We didn’t plan on getting snowed in (18 inches in May!!) but between the pool table, the board games, the wood burning stove, and the hot tub, we had plenty to do. The beds were super comfortable, the kitchen was well stocked, the views were incredible, and Rheo was the perfect host. He answered all of our questions, and even arranged for a plow to dig us out!  Rollinsville is a tiny town, and thanks to some gift cards that Rheo left on the counter for us, we were able to visit a few local establishments. The property is beautiful, the wildlife is plentiful (deer, birds, and a moose!), and we hope to be back someday!" },
      { name: "Ricky", location: "Rockville, MD", date: "January 2026", platform: "Airbnb", text: "I recently stayed at and had an excellent experience. The location was perfect, allowing easy access to local attractions while providing a peaceful atmosphere. The room was clean, comfortable, and well-decorated, making it feel like a home away from home.\n\n The hosts were incredibly welcoming and attentive, making sure all my needs were met.\n\n Overall, I highly recommend this stay to anyone looking for a cozy and enjoyable stay. I would definitely return!" },
      { name: "L", location: "Boerne, TX", date: "December 2026", platform: "Airbnb", text: "We’re grateful for our time at Pinehurst Lodge; the view was breathtaking and it was a perfect set up with ample space for our family of 5 adults and one toddler. Rheo and his team were extremely responsive and helpful to us ; our time was cut short due to  power outages in  the area and they promptly refunded us. We would have loved to have stayed longer and hope to return in the future." },
      { name: "Tara", location: "Minneapolis, MN", date: "October 2026", platform: "Airbnb", text: "I have stayed in a number of airbnbs and this was my favorite.  The pictures were very accurate and the view and privacy are exactly as they appear in the pictures.  Very spacious.  I went with three friends for a girl's weekend.  The kitchen was excellent, we cooked gourmet food two of the nights.  One night we walked the short distance to the really quaint town (less than 10 min walk).  We had pizza at Toss: Woodfire Eatery that was outstanding and then went next door to the Gold Dirt Distillery for Cocktails.  There is a ton of hiking nearby - we hiked Lower Crater Lake ~7mi and moderate elevation.  We drove the 40 min into Boulder for brunch one morning and walked around Pearl St.  The hot tub was divine after a hike and cocktails watching the sunset was breath taking.  And the beds were really comfortable (and I am normally picky!). Thank you Rheo!!" },
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

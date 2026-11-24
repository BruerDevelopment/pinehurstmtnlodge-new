// Points converted from public/lodge-map.kmz. Coordinates are [lat, lng].
// Details (summary, drive times, links) are drafts written from general knowledge. Drive times are approximate and
// should be confirmed by the owner. Article slugs are the "path" field of the files in content/articles.

export type MapPhoto = { src: string; alt: string }; // src is an unprefixed public path

export type MapDetails = {
  summary: string;
  driveTime?: string; // approximate drive from the lodge
  website?: string; // official site, opened in a new tab
  photo?: MapPhoto;
  articles?: string[]; // article "path" values shown as links in the panel
};

export type MapPoint = {
  name: string;
  position: [number, number];
  icon: "lodge" | "resort" | "hiking" | "food" | "shopping";
  details?: MapDetails;
};

export const mapCenter: [number, number] = [39.9176458, -105.4998844];
export const mapZoom = 10;

export const mapPoints: MapPoint[] = [
  {
    name: "Pinehurst Lodge",
    position: [39.9176458, -105.4998844],
    icon: "lodge",
    details: {
      summary: "Your home base in Rollinsville, with views of the Continental Divide, a hot tub, and a wood-burning stove.",
      photo: { src: "/photos/mtn-views/cont-divide-blue-sky.webp", alt: "The Continental Divide under a blue sky" },
      articles: ["guides/rollinsville", "5_best_rollinsville", "guides/scrapbooking_supplies_rollinsville"],
    },
  },
  {
    name: "Eldora Mountain",
    position: [39.9372203, -105.5826786],
    icon: "resort",
    details: {
      summary: "A ski area close to Nederland, a short drive from the lodge.",
      driveTime: "about 15 min",
      website: "https://www.eldora.com",
      articles: ["5_best_rollinsville"],
    },
  },
  {
    name: "Arapahoe Basin",
    position: [39.634108, -105.8714672],
    icon: "resort",
    details: {
      summary: "A ski area on the Continental Divide, known for its steep terrain and spring skiing.",
      driveTime: "about 1 hr 30 min",
      website: "https://www.arapahoebasin.com",
    },
  },
  {
    name: "Winter Park Resort",
    position: [39.8627761, -105.7787396],
    icon: "resort",
    details: {
      summary: "A large ski resort in the Fraser Valley, with runs for every level.",
      driveTime: "about 1 hr 15 min",
      website: "https://www.winterparkresort.com",
    },
  },
  {
    name: "Keystone Resort",
    position: [39.5816989, -105.9436688],
    icon: "resort",
    details: {
      summary: "A ski resort near Dillon with night skiing and a variety of terrain.",
      driveTime: "about 1 hr 30 min",
      website: "https://www.keystoneresort.com",
    },
  },
  {
    name: "Copper Mountain",
    position: [39.4790136, -106.1612906],
    icon: "resort",
    details: {
      summary: "A ski resort between Dillon and Leadville, known for its groomed runs.",
      driveTime: "about 1 hr 40 min",
      website: "https://www.coppermountain.com",
    },
  },
  {
    name: "Breckenridge Ski Resort",
    position: [39.4782643, -106.0723156],
    icon: "resort",
    details: {
      summary: "A historic mountain town with a ski resort and plenty of shops and restaurants.",
      driveTime: "about 1 hr 40 min",
      website: "https://www.breckenridge.com",
    },
  },
  {
    name: "Vail Ski Resort",
    position: [39.6061444, -106.3549717],
    icon: "resort",
    details: {
      summary: "One of the largest ski resorts in North America, with a village at the base.",
      driveTime: "about 2 hrs",
      website: "https://www.vail.com",
    },
  },
  {
    name: "Beaver Creek Resort",
    position: [39.6016505, -106.5316112],
    icon: "resort",
    details: {
      summary: "A ski resort next to Vail, known for its family-friendly runs and village.",
      driveTime: "about 2 hrs 10 min",
      website: "https://www.beavercreek.com",
    },
  },
  {
    name: "Steamboat Ski Resort",
    position: [40.4537983, -106.7708804],
    icon: "resort",
    details: {
      summary: "A ski resort in Steamboat Springs, known for its powder and hot springs in town.",
      driveTime: "about 3 hrs 15 min",
      website: "https://www.steamboat.com",
    },
  },
  {
    name: "Aspen Snowmass Ski Resort",
    position: [39.1895221, -106.9497086],
    icon: "resort",
    details: {
      summary: "Four ski mountains around Aspen and Snowmass, with a range of terrain.",
      driveTime: "about 4 hrs",
      website: "https://www.aspensnowmass.com",
    },
  },
  {
    name: "Crested Butte Mountain Resort",
    position: [38.8991036, -106.9657648],
    icon: "resort",
    details: {
      summary: "A ski resort known for its extreme terrain and a small historic town.",
      driveTime: "about 4 hrs 30 min",
      website: "https://www.crestedbuttemountain.com",
    },
  },
  {
    name: "James Peak Wilderness",
    position: [39.8717673, -105.6963974],
    icon: "hiking",
    details: {
      summary: "A wilderness area with hiking trails above the Rollinsville valley.",
      driveTime: "about 20 min",
      website: "https://www.fs.usda.gov/arp",
      articles: ["5_best_hikes_rollinsville"],
    },
  },
  {
    name: "Caribou Ranch Open Space",
    position: [39.98256, -105.5193],
    icon: "hiking",
    details: {
      summary: "Trails through an open space near the historic Caribou Ranch, a former recording studio. Access is seasonal, so check before you go.",
      driveTime: "about 20 min",
      articles: ["5_best_hikes_rollinsville"],
    },
  },
  {
    name: "Nederland",
    position: [39.9614, -105.5108],
    icon: "shopping",
    details: {
      summary: "A mountain town with shops, cafes, and restaurants, the closest town of any size to the lodge.",
      driveTime: "about 15 min",
    },
  },
  {
    name: "Central City",
    position: [39.80193, -105.51416],
    icon: "shopping",
    details: {
      summary: "A historic mining town with gaming halls and preserved 19th-century buildings.",
      driveTime: "about 45 min",
    },
  },
  {
    name: "Black Hawk",
    position: [39.79793, -105.4933],
    icon: "shopping",
    details: {
      summary: "A historic mining town next to Central City, with gaming halls and old buildings.",
      driveTime: "about 45 min",
    },
  },
  {
    name: "Pearl Street Mall",
    // Estimated from memory, not a verified source. Confirm on a map before publishing.
    position: [40.0178, -105.2797],
    icon: "shopping",
    details: {
      summary: "A pedestrian mall in downtown Boulder, lined with shops, restaurants, and street performers.",
      driveTime: "about 45 min",
    },
  },
  {
    name: "East Portal at the Moffat Tunnel",
    position: [39.90316, -105.64430],
    icon: "hiking",
    details: {
      summary: "The trailhead for Lower Crater Lake and other hikes, at the east end of the Moffat Tunnel.",
      driveTime: "about 25 min",
    },
  },
  {
    name: "Toss Woodfire Eatery",
    position: [39.91694, -105.50122],
    icon: "food",
    details: {
      summary: "Wood-fired pizza in Rollinsville, one of the restaurants guests mention most.",
      articles: ["guides/rollinsville"],
    },
  },
  {
    name: "Gold Dirt Distillery",
    position: [39.91711, -105.50151],
    icon: "food",
    details: {
      summary: "A distillery in Rollinsville with cocktails, a short walk from the lodge.",
      articles: ["guides/rollinsville"],
    },
  },
];

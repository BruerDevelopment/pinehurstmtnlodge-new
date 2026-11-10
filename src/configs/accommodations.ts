// Accommodations & Amenities page content, migrated from the live /accommodations page.
// Photo paths are wrapped with withBase() so they work under the GitHub Pages base path.
import { withBase } from "@/configs/site";

// "contain" shows the whole photo inside its frame instead of cropping it. Default is "cover".
export type Photo = { src: string; alt: string; caption?: string; fit?: "cover" | "contain" };

export type RoomCard = {
  title: string;
  body: string;
  features: string[];
  photos: Photo[];
};

export type AccommodationSection = {
  id: string;
  title: string;
  intro?: string;
  cards: RoomCard[];
  // Optional link at the end of the section.
  link?: { label: string; href: string };
};

// Step-free access note, shown near the top of the accommodations page.
export const accessNote = {
  title: "Accessibility Access & Stairs",
  intro:
    "Guests with mobility needs should read this before booking. The main entrance has a small porch with two steps and a handrail.",
  points: [
    "After the entrance, the top floor can be used for the whole stay: two bedrooms, the upstairs bathrooms, the kitchen, and the living room, with no further stairs.",
    "The downstairs level, including the downstairs bedrooms and bathroom, is reached by a flight of stairs.",
    "The hot tub is on the downstairs deck and requires one flight of stairs.",
  ],
};

const photo = (name: string, alt: string, fit?: "cover" | "contain"): Photo => ({
  src: withBase(`/photos/rooms/${name}.webp`),
  alt,
  ...(fit ? { fit } : {}),
});
const craft = (name: string, alt: string): Photo => ({ src: withBase(`/photos/craft/${name}.webp`), alt });
const mtnViews = (name: string, alt: string): Photo => ({ src: withBase(`/photos/mtn-views/${name}.webp`), alt });

export const accommodationSections: AccommodationSection[] = [
  {
    id: "bedrooms",
    title: "Bedrooms",
    intro: "Four bedrooms, plus a trundle bed in the downstairs living room.",
    cards: [
      {
        title: "Upstairs King Suite",
        body: "A king-size bed, a dresser for your suitcases, a desk you can use as a remote workspace, and an en suite bathroom. The view is an amazing one.",
        features: ["King-size bed", "Dresser for unpacking", "Desk for a remote workspace", "En suite bathroom"],
        photos: [
          photo("upstairs-primary/upstairs-primary-1", "Upstairs king suite with a king bed and a window view"),
          photo("upstairs-primary/upstairs-primary-2", "Upstairs king suite with a bed, desk, and chair"),
        ],
      },
      {
        title: "Upstairs Queen Bedroom",
        body: "A queen bed and a dresser, with room to unpack.",
        features: ["Queen bed", "Dresser"],
        photos: [
          photo("upstairs-queen/upstairs-queen-1", "Upstairs queen bedroom with a wooden bed and bedside tables"),
          photo("upstairs-queen/upstairs-queen-2", "Upstairs queen bedroom with a wooden dresser and bed"),
        ],
      },
      {
        title: "Downstairs Primary Suite",
        body: "A queen bed, a desk, a large closet, and a spectacular view.",
        features: ["Queen bed", "Desk", "Large closet"],
        photos: [
          photo("downstairs-primary/downstairs-primary-1", "Downstairs primary suite with a queen bed and a window"),
          photo("downstairs-primary/downstairs-primary-2", "Downstairs primary suite with a queen bed, desk, and window"),
        ],
      },
      {
        title: "Downstairs Queen & Bunks",
        body: "One queen bed and two bunked twin beds, with stairs for easy access to the top bunk. There is also a dresser, a chair, and hooks for clothes and suitcases.",
        features: ["Queen bed", "Two bunked twin beds", "Stairs to the bunks", "Dresser, chair, and hooks"],
        photos: [
          photo("downstairs-queen-bunks/bunks-1", "Downstairs bedroom with a queen bed"),
          photo("downstairs-queen-bunks/bunks-2", "Downstairs bedroom with bunk beds and a staircase"),
        ],
      },
      {
        title: "Trundle Bed in the Downstairs Living Room",
        body: "Usually set up as a sofa or daybed. It can be arranged as one king bed or as two separate twins.",
        features: ["One king bed or two twins"],
        photos: [
          photo("downstairs-main-space/trundle-1", "Trundle bed in the downstairs living room, set up as a daybed"),
          photo("downstairs-main-space/trundle-2", "Trundle bed in the downstairs living room with an armchair"),
        ],
      },
    ],
  },
  {
    id: "kitchens",
    title: "Two Fully Equipped Kitchens",
    intro: "Enjoy every meal with a view. Both kitchens come with appliances, cookware, dishware, utensils, glassware, and silverware, and each has a dining table that expands with leaves stored inside it.",
    cards: [
      {
        title: "Upstairs Kitchen",
        body: "The upstairs kitchen has everything for a full week of cooking, plus coffee and tea.",
        features: [
          "Double oven and deluxe cooktop",
          "Quiet dishwasher",
          "Microwave, toaster oven, blender, and crock pot",
          "Coffee maker and espresso machine",
          "Stoneware dishes and flatware for 8",
          "Nonstick cookware, glassware, and wine glasses",
        ],
        photos: [
          photo("kitchen/upstairs-professional-1", "Full kitchen view"),
          photo("kitchen/kitchen-main-1", "Upstairs kitchen with stainless appliances and granite counters"),
          photo("kitchen/kitchen-fridge", "Upstairs stainless steel refrigerator and double ovens"),
          photo("upstairs-main-space/dining-area", "Dining table in the open living and dining area"),
        ],
      },
      {
        title: "Deck Grill",
        body: "A large outdoor grill on the deck, with two tables and six chairs and a view.",
        features: ["Large outdoor grill", "Two tables and six chairs", "Propane fire-pit", "Large outdoor couch", "High-top table and chairs"],
        photos: [
          photo("upstairs-deck/grill-food-view", "Deck outdoor grill with food and a view"),
          photo("upstairs-deck/deck-w-people", "Deck outdoor grill with people BBQ-ing"),
          mtnViews("view-w-beer", "Deck outdoor grill with people BBQ-ing"),
          photo("upstairs-deck/couch-w-people", "Deck outdoor grill with people BBQ-ing"),
        ],
      },
      {
        title: "Downstairs Kitchen",
        body: "A secondary kitchen with a second set of everything needed for a Thanksgiving meal.",
        features: [
          "A large fridge with ample freazer space",
          "Coffee maker and toaster oven",
          "Pots, pans, cutlery, and utensils",
          "Flatware for 8, plus wheat straw plates, bowls, and cups for 8",
          "A second full stove and oven",
          "Another microwave"
        ],
        photos: [
          photo("kitchen/kitchen-downstairs-1", "Downstairs kitchen with white cabinets and a round dining table"),
          photo("kitchen/kitchen-downstairs-2", "Downstairs kitchen with white cabinets, range, and microwave"),
        ],
      },
    ],
    link: { label: "Explore Our Kitchen Guide", href: "/kitchen_guide" },
  },
  {
    id: "living-rooms",
    title: "Spacious Gathering Spaces",
    intro: "Two gathering spaces for games, crafting, and time together.",
    cards: [
      {
        title: "Upstairs Living Room",
        body: "Seating for 8, a wood-burning fireplace, a Google smart TV, and a weather station, with a breathtaking view of the Continental Divide. The open layout connects it to the kitchen and dining area.",
        features: ["Seating for 8", "Wood-burning fireplace", "Google smart TV", "Weather station"],
        photos: [
          photo("upstairs-main-space/living-1", "Upstairs living room with leather seating, a glass coffee table, and a fireplace"),
          photo("upstairs-main-space/living-2", "Upstairs living room with leather armchairs and a wall-mounted TV"),
          photo("upstairs-main-space/living-3", "Open living room and kitchen with a kitchen island and bar seating"),
          photo("upstairs-main-space/living-4", "Living room and dining area seen from the upstairs kitchen"),
        ],
      },
      {
        title: "Downstairs Games & Activities",
        body: "A large open area for games, crafting, gathering, or projects, with easy access to the deck and hot tub and a view of the Front Range.",
        features: ["Pool table", "Board games", "Easy access to the deck and hot tub"],
        photos: [
          photo("upstairs-main-space/living-5", "Game room with a pool table, sofa, and sliding doors to the deck"),
          photo("upstairs-main-space/living-6", "Living room with a pool table, sofas, and mountain views"),
          photo("games-toys/game-shelf", "Shelf with board games and puzzles")
        ],
      },
    ],
  },
  {
    id: "games",
    title: "Games, Activities & Crafting",
    intro: "A pool table, a 6-person hot tub, board games, and Smart TVs for streaming.\n\n Foldable tables can be set up before your stay on request. They are always available, and their location is in the welcome package.",
    cards: [
      {
        title: "6-Person Hot Tub",
        body: "An Arctic Spas hot tub on the deck, cleaned before every stay, with the Continental Divide, the surrounding mountains, and the Rollinsville valley in view.",
        features: ["Arctic Spas, 6 people", "Cleaned before every stay"],
        photos: [
          photo("downstairs-deck-hot-tub/hot-tub-1", "Hot tub on the deck among pine trees"),
          photo("downstairs-deck-hot-tub/hot-tub-2", "Hot tub on the deck among pine trees"),
          photo("downstairs-deck-hot-tub/hot-tub-3", "Hot tub on the deck among pine trees"),
        ],
      },
      {
        title: "Games, Books & Play Area",
        body: "A shelf of board games and puzzles for rainy afternoons and family nights.",
        features: ["Board games and puzzles", "Fairy play area"],
        photos: [
          photo("games-toys/game-shelf", "Shelf with board games and puzzles", "contain"),
          photo("games-toys/fairies", "Fairies play area"),
          photo("pool-table/pool-table-w-people", "Pool table")
        ],
      },
      {
        title: "Crafting / Work Areas",
        body: "Everything you need for scrapbooking and crafting.",
        features: [
          "6 tables (3' x 6')",
          "6 desk lamps with magnifying lenses",
          "6 padded folding chairs",
          "6 waste bins",
        ],
        photos: [
          craft("craft-1", "Craft area with work tables, desk lamps, and a pool table"),
          craft("craft-2", "Craft area with tables and a sofa"),
          craft("craft-3", "Craft area with folding tables and chairs"),
          craft("craft-4", "Craft area with a long table, chairs, and waste bins"),
          craft("craft-5", "Craft area with a pool table and a desk setup"),
          craft("craft-6", "Magnifying desk lamp on a craft table"),
        ],
      },
      
    ],
  },
  {
    id: "bathrooms",
    title: "Bathrooms",
    cards: [
      {
        title: "Primary Bathroom (en suite, upstairs)",
        body: "A glass shower, two sinks, and a fabulous view.",
        features: ["Glass shower", "Two sinks", "Shampoo, conditioner, and body wash dispensers", "Hand soap, Q-tips, and cotton swabs"],
        photos: [photo("bathrooms/bath-master", "Primary bathroom with a glass-enclosed shower and a double vanity")],
      },
      {
        title: "Upstairs Bathroom (central)",
        body: "A tub and shower combination with a heated, temperature-controlled tile floor, and a hairdryer in the cabinet.",
        features: ["Tub and shower combination", "Heated tile floor", "Hairdryer", "Shampoo, conditioner, and body wash dispensers"],
        photos: [photo("bathrooms/bath-upstairs", "Upstairs bathroom with a tub and shower and a patterned curtain")],
      },
      {
        title: "Downstairs Bathroom",
        body: "A tub and shower combination with a heated, temperature-controlled tile floor.",
        features: ["Tub and shower combination", "Heated tile floor", "Shampoo, conditioner, and body wash dispensers"],
        photos: [photo("bathrooms/bath-downstairs", "Downstairs bathroom with a tub and shower and a blue wall")],
      },
    ],
  },
  {
    id: "laundry",
    title: "Two Full Laundries",
    cards: [
      {
        title: "Upstairs Laundry",
        body: "A top-loading washer and a front-loading dryer, a few steps from the kitchen. Fragrance-free detergent is provided. The vacuum and recycling containers are in this room.",
        features: ["Top-loading washer", "Front-loading dryer", "Fragrance-free detergent provided"],
        photos: [photo("laundry/laundry-upstairs", "Upstairs laundry with a top-loading washer and dryer")],
      },
      {
        title: "Downstairs Laundry",
        body: "Behind the stairs, next to the craft area, with detergent, cleaning supplies, stored tables and chairs, and waste cans.",
        features: ["Washer and dryer", "Detergent and cleaning supplies"],
        photos: [photo("laundry/laundry-downstairs", "Downstairs laundry closet with a washer, dryer, and shelves")],
      },
    ],
  },
  {
    id: "garage",
    title: "Garage",
    intro: "Indoor parking for two large vehicles.",
    cards: [
      {
        title: "Indoor Parking for 2 Vehicles",
        body: "There is no remote, but the door opens from a button inside. Please keep the garage door closed at all times because of wildlife, including bears.",
        features: ["Indoor parking for two large vehicles", "Door opens from a button inside"],
        photos: [photo("garage/garage", "Two-car garage with shelving and storage")],
      },
    ],
  },
];

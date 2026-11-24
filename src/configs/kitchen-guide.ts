// Kitchen Guide photo galleries. Photos come from the owner's "Kitchen Guides" folder, converted to webp by
// scripts/convert-kitchen-guide.mjs. Captions and alt text are written from the source filenames, so the owner
// should review them. Each item names its converted file (file: 1 is upstairs-01 or downstairs-01), so the
// display order can change without renaming any images. Items are grouped by relevance: cookware, utensils,
// appliances, dishes, drinks, then pantry.
// Photo paths are wrapped with withBase() so they work under the GitHub Pages base path.
import { withBase } from "@/configs/site";
import type { GalleryPhoto } from "@/components/ui/PhotoGallery";

export const kitchenIntro =
  "Both kitchens are fully stocked for everything from a quick breakfast to a big family dinner. We cook real meals here, and we want you to feel at home doing the same.";

const upstairsItems: { file: number; caption: string; alt: string }[] = [
  // Dishes and silverware
  { file: 22, caption: "Place setting", alt: "Dining place setting with plates, bowls, and flatware" },
  { file: 12, caption: "Dishes", alt: "Dishes in a cupboard" },
  { file: 9, caption: "Bowls", alt: "Bowls on a shelf" },
  { file: 24, caption: "Silverware", alt: "Silverware in a drawer" },
  { file: 42, caption: "Platters", alt: "Serving platters in three sizes" },
  { file: 13, caption: "Glassware", alt: "Shelves of drinking glasses and stemware" },
  // Cookware and bakeware
  { file: 4, caption: "Cookware", alt: "Pots and pans" },
  { file: 3, caption: "Cookware lids", alt: "Lids for pots and pans" },
  { file: 7, caption: "Bakeware", alt: "Baking pans and sheets" },
  { file: 21, caption: "Pie plates", alt: "Glass pie plates, several of them" },
  { file: 20, caption: "Oven mitts", alt: "Oven mitts" },
  { file: 31, caption: "12-inch granitestone fryer", alt: "12-inch granitestone fryer" },
  { file: 39, caption: "Pans", alt: "Pans for the upstairs kitchen" },
  { file: 41, caption: "Pizza pan", alt: "Pizza pan" },
  { file: 34, caption: "Bread pans", alt: "Bread pans" },
  { file: 32, caption: "2- and 3-quart baking dishes with lids", alt: "2- and 3-quart baking dishes with lids" },
  { file: 43, caption: "Roasting pan", alt: "Roasting pan" },
  // Utensils and prep
  { file: 5, caption: "Utensil drawer A", alt: "Utensil drawer with cooking tools" },
  { file: 6, caption: "Utensil drawer B", alt: "Second utensil drawer with cooking tools" },
  { file: 17, caption: "Knives", alt: "Knives in a drawer" },
  { file: 2, caption: "Colander, grater & measuring cup", alt: "Colander, grater, and measuring cup" },
  { file: 28, caption: "Thermometers", alt: "Meat and kitchen thermometers" },
  { file: 19, caption: "Mixing bowls with lids", alt: "Mixing bowls with lids" },
  { file: 14, caption: "Hand mixer", alt: "Hand mixer with beaters" },
  { file: 40, caption: "Pie server", alt: "Pie server" },
  { file: 44, caption: "Rolling pin", alt: "Rolling pin, 15.75 inches" },
  // Small appliances
  { file: 8, caption: "Blender", alt: "Blender on a cabinet shelf" },
  { file: 16, caption: "Juicer", alt: "Citrus juicer" },
  { file: 11, caption: "Crockpot", alt: "Crockpot slow cooker" },
  { file: 29, caption: "Toaster oven", alt: "Countertop toaster oven" },
  { file: 18, caption: "Microwave", alt: "Microwave oven" },
  { file: 27, caption: "Tea kettle", alt: "Stainless steel stovetop tea kettle" },
  { file: 36, caption: "Espresso machine", alt: "Espresso machine" },
  { file: 35, caption: "Espresso and drip coffee makers", alt: "Espresso and drip coffee makers" },
  // Glassware, drinks, and outdoor
  { file: 15, caption: "Hot tub plastic glasses", alt: "Plastic glasses for the hot tub" },
  { file: 1, caption: "Brita water filter", alt: "Large capacity Brita water filter" },
  { file: 30, caption: "Water carafes", alt: "Glass water carafes" },
  // Storage
  { file: 37, caption: "Food storage", alt: "Food storage containers" },
  { file: 38, caption: "Laundry baskets", alt: "Laundry baskets" },
  // Pantry
  { file: 25, caption: "Spice cupboard", alt: "Spice cupboard with communal spices" },
  { file: 23, caption: "Salt & pepper", alt: "Salt and pepper grinders" },
  //Outdoors
  { file: 10, caption: "Cooler", alt: "Cooler" },
  { file: 33, caption: "BBQ tools", alt: "BBQ tools" },
];

const downstairsItems: { file: number; caption: string; alt: string }[] = [
  // Dishes and flatware
  { file: 11, caption: "Wheat straw plates", alt: "Wheat straw plates in a cupboard" },
  { file: 10, caption: "Wheat straw bowls & cups", alt: "Wheat straw bowls and cups on a shelf" },
  { file: 6, caption: "Flatware", alt: "Flatware in a drawer organizer" },
  { file: 5, caption: "Utensils", alt: "Kitchen utensils in a drawer" },
  // Major appliances
  { file: 9, caption: "Stove", alt: "Electric range with a dish towel" },
  { file: 3, caption: "Refrigerator", alt: "Separate downstairs refrigerator" },
  { file: 8, caption: "Microwave", alt: "Microwave oven" },
  // Small appliances
  { file: 2, caption: "Coffee maker & toaster oven", alt: "Coffee maker and toaster oven on the counter" },
  { file: 7, caption: "Hot pot", alt: "Hot pot" },
  // Sink and cleaning
  { file: 4, caption: "Kitchen sink", alt: "Kitchen sink with a dish rack" },
  { file: 1, caption: "Cleaning supplies", alt: "Paper towels and cleaning supplies" },
];

// Each file is folder-NN.webp, where NN is the item's file number.
const toPhotos = (folder: string, items: { file: number; caption: string; alt: string }[]): GalleryPhoto[] =>
  items.map((item) => ({
    src: withBase(`/photos/rooms/kitchen/guide-photos/${folder}-${String(item.file).padStart(2, "0")}.webp`),
    alt: item.alt,
    caption: item.caption,
  }));

export const upstairsPhotos = toPhotos("upstairs", upstairsItems);
export const downstairsPhotos = toPhotos("downstairs", downstairsItems);

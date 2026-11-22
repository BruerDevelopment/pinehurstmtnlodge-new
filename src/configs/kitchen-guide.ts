// Kitchen Guide photo galleries. Photos come from the owner's "Kitchen Guides" folder, converted to webp by
// scripts/convert-kitchen-guide.mjs. Captions and alt text are written from the source filenames, so the owner
// should review them. The order below matches the numbering in the converted files (upstairs-01..30, downstairs-01..11).
// Photo paths are wrapped with withBase() so they work under the GitHub Pages base path.
import { withBase } from "@/configs/site";
import type { GalleryPhoto } from "@/components/ui/PhotoGallery";

export const kitchenIntro =
  "Both kitchens are fully stocked for everything from a quick breakfast to a big family dinner. We cook real meals here, and we want you to feel at home doing the same.";

const upstairsItems: { caption: string; alt: string }[] = [
  { caption: "Brita water filter", alt: "Large capacity Brita water filter" },
  { caption: "Colander, grater & measuring cup", alt: "Colander, grater, and measuring cup" },
  { caption: "Cookware lids", alt: "Lids for pots and pans" },
  { caption: "Cookware", alt: "Pots and pans" },
  { caption: "Utensil drawer A", alt: "Utensil drawer with cooking tools" },
  { caption: "Utensil drawer B", alt: "Second utensil drawer with cooking tools" },
  { caption: "Bakeware", alt: "Baking pans and sheets" },
  { caption: "Blender", alt: "Blender on a cabinet shelf" },
  { caption: "Bowls", alt: "Bowls on a shelf" },
  { caption: "Cooler", alt: "Cooler" },
  { caption: "Crockpot", alt: "Crockpot slow cooker" },
  { caption: "Dishes", alt: "Dishes in a cupboard" },
  { caption: "Glassware", alt: "Shelves of drinking glasses and stemware" },
  { caption: "Hand mixer", alt: "Hand mixer with beaters" },
  { caption: "Hot tub plastic glasses", alt: "Plastic glasses for the hot tub" },
  { caption: "Juicer", alt: "Citrus juicer" },
  { caption: "Knives", alt: "Knives in a drawer" },
  { caption: "Microwave", alt: "Microwave oven" },
  { caption: "Mixing bowls with lids", alt: "Mixing bowls with lids" },
  { caption: "Oven mitts", alt: "Oven mitts" },
  { caption: "Pie plates", alt: "Glass pie plates, several of them" },
  { caption: "Place setting", alt: "Dining place setting with plates, bowls, and flatware" },
  { caption: "Salt & pepper", alt: "Salt and pepper grinders" },
  { caption: "Silverware", alt: "Silverware in a drawer" },
  { caption: "Spice cupboard", alt: "Spice cupboard with communal spices" },
  { caption: "Spice cupboard, second view", alt: "Second view of the spice cupboard" },
  { caption: "Tea kettle", alt: "Stainless steel stovetop tea kettle" },
  { caption: "Thermometers", alt: "Meat and kitchen thermometers" },
  { caption: "Toaster oven", alt: "Countertop toaster oven" },
  { caption: "Water carafes", alt: "Glass water carafes" },
];

const downstairsItems: { caption: string; alt: string }[] = [
  { caption: "Cleaning supplies", alt: "Paper towels and cleaning supplies" },
  { caption: "Coffee maker & toaster oven", alt: "Coffee maker and toaster oven on the counter" },
  { caption: "Refrigerator", alt: "Separate downstairs refrigerator" },
  { caption: "Kitchen sink", alt: "Kitchen sink with a dish rack" },
  { caption: "Utensils", alt: "Kitchen utensils in a drawer" },
  { caption: "Flatware", alt: "Flatware in a drawer organizer" },
  { caption: "Hot pot", alt: "Hot pot" },
  { caption: "Microwave", alt: "Microwave oven" },
  { caption: "Stove", alt: "Electric range with a dish towel" },
  { caption: "Wheat straw bowls & cups", alt: "Wheat straw bowls and cups on a shelf" },
  { caption: "Wheat straw plates", alt: "Wheat straw plates in a cupboard" },
];

// File names are upstairs-01, upstairs-02, ... and downstairs-01, ... in the same order as the items above.
const toPhotos = (folder: string, items: { caption: string; alt: string }[]): GalleryPhoto[] =>
  items.map((item, i) => ({
    src: withBase(`/photos/rooms/kitchen/guide-photos/${folder}-${String(i + 1).padStart(2, "0")}.webp`),
    alt: item.alt,
    caption: item.caption,
  }));

export const upstairsPhotos = toPhotos("upstairs", upstairsItems);
export const downstairsPhotos = toPhotos("downstairs", downstairsItems);

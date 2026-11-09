// Kitchen Guide photo galleries, migrated from the live /kitchen_guide page.
// Captions come from the live page where it had them. Others are descriptive and should be reviewed by the owner.
// Photo paths are wrapped with withBase() so they work under the GitHub Pages base path.
import { withBase } from "@/configs/site";
import type { GalleryPhoto } from "@/components/ui/PhotoGallery";

export const kitchenIntro =
  "Both kitchens are fully stocked for everything from a quick breakfast to a big family dinner. We cook real meals here, and we want you to feel at home doing the same.";

const upstairsItems: { caption: string; alt: string }[] = [
  { caption: "Dish cupboard", alt: "Dish cupboard with plates and bowls" },
  { caption: "Silverware drawer", alt: "Silverware drawer with forks, knives, and spoons" },
  { caption: "Dining set", alt: "Dining place setting with plates, bowls, and flatware" },
  { caption: "Glass drinkware", alt: "Shelves of drinking glasses and stemware" },
  { caption: "Blender", alt: "Blender on a cabinet shelf" },
  { caption: "Slow cooker", alt: "Stainless slow cooker on a shelf" },
  { caption: "Baking pans & sheets", alt: "Baking pans and sheets stacked together" },
  { caption: "Baking & misc utensils", alt: "Whisk, scissors, peeler, and other utensils in a drawer" },
  { caption: "Cooking utensils", alt: "Cooking utensils in a drawer" },
  { caption: "Cooking pots & pans", alt: "Nonstick pots and pans" },
  { caption: "Lids for pots & pans", alt: "Glass lids for pots and pans" },
  { caption: "Colander, grater & measuring cup", alt: "Colander, grater, and glass bowl" },
  { caption: "Toaster oven", alt: "Countertop toaster oven" },
  { caption: "Microwave", alt: "Microwave oven" },
  { caption: "Spice cupboard with communal spices", alt: "Shelf of spice jars" },
  { caption: "Glass pie dishes", alt: "Glass pie dish" },
  { caption: "Adventure cooler", alt: "Blue cooler on the deck" },
  { caption: "Glass carafes", alt: "Two glass carafes with lemonade" },
  { caption: "Pepper and salt grinders", alt: "Salt and pepper grinders" },
  { caption: "White serving bowls", alt: "Stack of white serving bowls" },
  { caption: "Stovetop kettle", alt: "Stainless steel stovetop kettle" },
  { caption: "Silicone lids and strainers", alt: "Colorful silicone lids and metal strainers" },
  { caption: "Dining table", alt: "Dining table set for four" },
  { caption: "Hand mixer", alt: "Hand mixer with beaters" },
];

const downstairsItems: { caption: string; alt: string }[] = [
  { caption: "Dinnerware", alt: "Stacked dinner plates in a cupboard" },
  { caption: "Bowls and cups", alt: "Bowls and cups on shelves" },
  { caption: "Flatware", alt: "Flatware in a drawer organizer" },
  { caption: "Knives and measuring spoons", alt: "Knives and measuring spoons in a drawer" },
  { caption: "Range", alt: "Electric range with a dish towel" },
  { caption: "Microwave", alt: "Microwave oven" },
  { caption: "Coffee maker and toaster oven", alt: "Coffee maker and toaster oven on the counter" },
  { caption: "Electric kettle", alt: "Glass electric kettle" },
  { caption: "Kitchen sink", alt: "Kitchen sink with a dish rack" },
  { caption: "Separate downstairs fridge", alt: "Separate downstairs refrigerator" },
  { caption: "Oven mitts and parchment", alt: "Oven mitts and parchment paper in a drawer" },
  { caption: "Paper towels and cleaning supplies", alt: "Paper towels and disinfecting wipes" },
];

// File names are folder-01, folder-02, ... in the same order as the items above.
const toPhotos = (folder: string, items: { caption: string; alt: string }[]): GalleryPhoto[] =>
  items.map((item, i) => ({
    src: withBase(`/photos/rooms/kitchen/${folder}-${String(i + 1).padStart(2, "0")}.webp`),
    alt: item.alt,
    caption: item.caption,
  }));

export const upstairsPhotos = toPhotos("upstairs", upstairsItems);
export const downstairsPhotos = toPhotos("downstairs", downstairsItems);

import HeroMosaic from "@/components/hero/HeroMosaic";
import HeroIntro from "@/components/hero/HeroIntro";
import Space from "@/components/sections/Space";
import Amenities from "@/components/sections/Amenities";
import Reviews from "@/components/sections/Reviews";
import LinkCards from "@/components/sections/LinkCards";
import BookingSection from "@/components/sections/BookingSection";
import Contact from "@/components/sections/Contact";
import AreaMap from "@/components/sections/AreaMap";
import JsonLd from "@/components/seo/JsonLd";
import { lodgingJsonLd } from "@/configs/seo";
import { pageMetadata } from "@/configs/metadata";
import { site } from "@/configs/site";
import { getAllPosts } from "@/lib/articles";

// The home page sits outside the title template, so its full title is set here.
export const metadata = {
  ...pageMetadata({
    title: "Mountain Getaway in Rollinsville, Colorado",
    description: site.tagline,
    path: "/",
  }),
  title: { absolute: `Mountain Getaway in Rollinsville, Colorado | ${site.name}` },
};

export default function Home() {
  // Featured guides first, then newest; show three below the map.
  const guides = [...getAllPosts()]
    .sort((a, b) => Number(b.featured) - Number(a.featured))
    .slice(0, 3);

  return (
    <main className="flex-1">
      <JsonLd data={lodgingJsonLd()} />
      <section className="mx-auto max-w-6xl px-4 pt-8 md:px-8">
        <HeroMosaic />
        <HeroIntro />
      </section>

      <Space />
      <Amenities />
      <Reviews />
      <LinkCards />
      <BookingSection />
      <Contact />
      <AreaMap articles={guides} />
    </main>
  );
}

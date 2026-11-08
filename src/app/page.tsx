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

export default function Home() {
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
      <AreaMap />
    </main>
  );
}

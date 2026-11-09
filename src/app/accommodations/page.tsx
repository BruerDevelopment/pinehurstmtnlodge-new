import Link from "next/link";
import { pageMetadata } from "@/configs/metadata";
import RoomCard from "@/components/accommodations/RoomCard";
import SectionNav from "@/components/accommodations/SectionNav";
import BookingSection from "@/components/sections/BookingSection";
import JsonLd from "@/components/seo/JsonLd";
import Section from "@/components/ui/Section";
import { accommodationSections } from "@/configs/accommodations";
import { breadcrumbJsonLd } from "@/configs/seo";
import { site } from "@/configs/site";

export const metadata = pageMetadata({
  title: "Accommodations & Amenities",
  description:
    "Four bedrooms, two kitchens, two gathering spaces, a 7-person hot tub, a pool table, and a craft area at Pinehurst Mtn Lodge in Rollinsville, Colorado.",
  path: "/accommodations",
});

export default function AccommodationsPage() {
  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Accommodations", path: "/accommodations" },
        ])}
      />

      <section className="mx-auto max-w-6xl px-4 pt-12 md:px-8">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">{site.name}</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-ink md:text-5xl">Accommodations &amp; Amenities</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
          Four bedrooms, two fully equipped kitchens, two gathering spaces, and a 7-person hot tub, with views of the
          Continental Divide.
        </p>

        <dl className="mt-8 grid grid-cols-2 gap-6 rounded-2xl bg-surface p-6 md:grid-cols-4">
          {site.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs uppercase tracking-wide text-muted">{fact.label}</dt>
              <dd className="mt-1 font-medium text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8">
          <SectionNav sections={accommodationSections.map(({ id, title }) => ({ id, title }))} />
        </div>
      </section>

      {accommodationSections.map((section) => (
        <Section key={section.id} id={section.id} title={section.title}>
          {section.intro && <p className="mb-8 max-w-3xl text-lg leading-8 text-muted">{section.intro}</p>}

          <div className="grid gap-6 lg:grid-cols-2">
            {section.cards.map((card) => (
              <RoomCard key={card.title} card={card} />
            ))}
          </div>

          {section.link && (
            <Link
              href={section.link.href}
              className="mt-8 inline-block font-medium text-accent underline underline-offset-4"
            >
              {section.link.label}
            </Link>
          )}
        </Section>
      ))}

      <BookingSection />

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-8">
        <p className="text-muted">
          Questions about house rules, the hot tub, or the fireplace?{" "}
          <Link href="/faqs" className="font-medium text-accent underline underline-offset-4">
            Read the FAQs &amp; house rules
          </Link>
          .
        </p>
      </section>
    </main>
  );
}

import Link from "next/link";
import { pageMetadata } from "@/configs/metadata";
import RoomCard from "@/components/accommodations/RoomCard";
import SectionNav from "@/components/accommodations/SectionNav";
import BookingSection from "@/components/sections/BookingSection";
import JsonLd from "@/components/seo/JsonLd";
import Section from "@/components/ui/Section";
import { accessNote, accommodationSections, mightFindItems, providedItems } from "@/configs/accommodations";
import { breadcrumbJsonLd } from "@/configs/seo";
import { site } from "@/configs/site";

export const metadata = pageMetadata({
  title: "Accommodations & Amenities",
  description:
    "Four bedrooms, two kitchens, two gathering spaces, a 6-person hot tub, a pool table, and a craft area at Pinehurst Mtn Lodge in Rollinsville, Colorado.",
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
        <p className="mt-4 max-w-8xl text-lg leading-8 text-muted">
          Four bedrooms, two fully equipped kitchens, two gathering spaces, and a 6-person hot tub, with views of the
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
          <SectionNav sections={[...accommodationSections.map(({ id, title }) => ({ id, title })), {id:"provided", title:"Things We Provide"}, {id:"access", title:accessNote.title}]} />
        </div>
      </section>

      {accommodationSections.map((section) => (
        <Section key={section.id} id={section.id} title={section.title}>
          {/* whitespace-pre-line keeps \n line breaks in intro text as paragraph breaks. */}
          {section.intro && (
            <p className="mb-8 max-w-6xl whitespace-pre-line text-lg leading-8 text-muted">{section.intro}</p>
          )}
          {section.link && (
            <Link
              href={section.link.href}
              className="mb-8 inline-block font-medium text-accent underline underline-offset-4"
            >
              {section.link.label}
            </Link>
          )}
          <div className="grid gap-6 lg:grid-cols-2">
            {section.cards.map((card) => (
              <RoomCard key={card.title} card={card} />
            ))}
          </div>

          
        </Section>
      ))}

      <Section id="provided" title="Things We Provide">
        <div className="grid items-start gap-4 md:grid-cols-2">
          <details className="group rounded-2xl bg-surface p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
              <span>What toiletries and amenities are stocked?</span>
              <span aria-hidden="true" className="text-accent transition-transform group-open:rotate-45">+</span>
            </summary>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-muted">
              {providedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </details>
          <details className="group rounded-2xl bg-surface p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
              <span>What might I find at the lodge that you don&apos;t stock?</span>
              <span aria-hidden="true" className="text-accent transition-transform group-open:rotate-45">+</span>
            </summary>
            <p>We don&apos;t stock these items but they are often left behind by our guests.</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-muted">
              {mightFindItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </details>
        </div>
      </Section>

      <Section id="access" title={accessNote.title}>
        <p className="max-w-3xl text-lg leading-8 text-muted">{accessNote.intro}</p>
        <ul className="mt-6 max-w-3xl list-disc space-y-3 pl-6 text-lg leading-8 text-muted">
          {accessNote.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </Section>

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

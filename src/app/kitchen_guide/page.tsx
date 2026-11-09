import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import PhotoGallery from "@/components/ui/PhotoGallery";
import Section from "@/components/ui/Section";
import { downstairsPhotos, kitchenIntro, upstairsPhotos } from "@/configs/kitchen-guide";
import { breadcrumbJsonLd } from "@/configs/seo";
import { absoluteUrl } from "@/configs/site";

export const metadata: Metadata = {
  title: "Kitchen Guide",
  description:
    "A photo guide to the upstairs and downstairs kitchens at Pinehurst Mtn Lodge, with captions for the cookware, dishes, and appliances in each.",
  alternates: { canonical: absoluteUrl("/kitchen_guide") },
};

export default function KitchenGuidePage() {
  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Accommodations", path: "/accommodations" },
          { name: "Kitchen Guide", path: "/kitchen_guide" },
        ])}
      />

      <section className="mx-auto max-w-6xl px-4 pt-12 md:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/accommodations" className="hover:text-accent">
            Accommodations
          </Link>{" "}
          / Kitchen Guide
        </nav>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Pinehurst Lodge&apos;s Kitchen Guide
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">{kitchenIntro}</p>
      </section>

      <Section id="upstairs-kitchen" title="Upstairs Kitchen Contents">
        <PhotoGallery photos={upstairsPhotos} columns="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" />
      </Section>

      <Section id="downstairs-kitchen" title="Downstairs Kitchen Contents">
        <PhotoGallery photos={downstairsPhotos} columns="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" />
      </Section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-8">
        <p className="text-muted">
          Back to{" "}
          <Link href="/accommodations" className="font-medium text-accent underline underline-offset-4">
            Accommodations &amp; Amenities
          </Link>{" "}
          or{" "}
          <Link href="/#contact" className="font-medium text-accent underline underline-offset-4">
            ask us a question
          </Link>
          .
        </p>
      </section>
    </main>
  );
}

import Section from "@/components/ui/Section";
import ReviewCard from "@/components/sections/ReviewCard";
import { site } from "@/configs/site";
import { pageMetadata } from "@/configs/metadata";

export const metadata = pageMetadata({
  title: "Guest Reviews",
  description: "Guest reviews of Pinehurst Mtn Lodge in Rollinsville, Colorado.",
  path: "/reviews",
});

// Turns a review date like "October 2026" into a sortable timestamp. Unparseable dates sort last.
const dateValue = (date: string) => {
  const match = date.trim().match(/^([A-Za-z]+)\s+(\d{4})$/);
  const time = match ? new Date(`${match[1]} 1, ${match[2]}`).getTime() : NaN;
  return Number.isNaN(time) ? -Infinity : time;
};

export default function ReviewsPage() {
  const { average } = site.reviews;
  // Newest first. The homepage keeps the order in site.ts, so only this page sorts by date.
  const items = [...site.reviews.items].sort((a, b) => dateValue(b.date) - dateValue(a.date));

  return (
    <main className="flex-1">
      <Section eyebrow="Guest Reviews" title="All Reviews">
        <p className="mb-6 text-muted">
          <span className="font-semibold text-ink">{average.toFixed(1)} ★</span> · {items.length} reviews
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {items.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </Section>
    </main>
  );
}

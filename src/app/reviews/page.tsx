import Section from "@/components/ui/Section";
import ReviewCard from "@/components/sections/ReviewCard";
import { site } from "@/configs/site";

export const metadata = {
  title: "Guest Reviews",
};

export default function ReviewsPage() {
  const { average, count, items } = site.reviews;

  return (
    <main className="flex-1">
      <Section eyebrow="Guest Reviews" title="All Reviews">
        <p className="mb-6 text-muted">
          <span className="font-semibold text-ink">{average.toFixed(1)} ★</span> · {count} reviews
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

import Link from "next/link";
import ReviewCard, { type Review } from "@/components/sections/ReviewCard";

export default function ReviewsList({
  items,
  max = 4,
}: {
  items: Review[];
  max?: number;
}) {
  const visible = items.slice(0, max);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {visible.map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="/reviews"
          className="inline-block rounded-full bg-accent px-6 py-3 font-medium text-surface hover:opacity-90"
        >
          View all reviews
        </Link>
      </div>
    </>
  );
}

import ReviewText from "@/components/sections/ReviewText";

export type Review = {
  name: string;
  location?: string;
  date: string;
  platform: string;
  text: string;
};

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="rounded-2xl bg-surface p-6 h-fit">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-semibold text-ink">{review.name}</h3>
        <span className="text-xs uppercase tracking-wide text-accent">{review.platform}</span>
      </div>
      <p className="mt-1 text-sm text-muted">
        {[review.location, review.date].filter(Boolean).join(" · ")}
      </p>
      <ReviewText text={review.text} />
    </article>
  );
}

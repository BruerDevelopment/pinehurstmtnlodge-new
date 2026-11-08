import Section from "@/components/ui/Section";
import ReviewsList from "@/components/sections/ReviewsList";
import { site } from "@/configs/site";

export default function Reviews() {
  const { average, count, items } = site.reviews;

  return (
    <Section title="Guest Reviews">
      <p className="mb-6 text-muted">
        <span className="font-semibold text-ink">
          {average.toFixed(1)} ★
        </span>{" "}
        · {count} reviews
      </p>

      <ReviewsList items={items} max={4} />
    </Section>
  );
}

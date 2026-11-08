import Section from "@/components/ui/Section";
import { site } from "@/configs/site";

export default function Amenities() {
  return (
    <Section title="Amenities">
      <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {site.amenities.map((amenity) => (
          <li key={amenity} className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3 text-ink">
            <span aria-hidden="true" className="text-accent">✓</span>
            {amenity}
          </li>
        ))}
      </ul>
    </Section>
  );
}

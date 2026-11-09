import PhotoGallery from "@/components/ui/PhotoGallery";
import type { RoomCard as RoomCardData } from "@/configs/accommodations";

export default function RoomCard({ card }: { card: RoomCardData }) {
  return (
    <article className="flex flex-col gap-5 rounded-2xl bg-surface p-6">
      <div>
        <h3 className="text-xl font-semibold tracking-tight text-ink">{card.title}</h3>
        <p className="mt-2 leading-7 text-muted">{card.body}</p>
      </div>

      {card.features.length > 0 && (
        <ul className="grid gap-2 text-sm text-ink sm:grid-cols-2">
          {card.features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <span aria-hidden="true" className="text-accent">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* mt-auto pushes the photos to the bottom of the card, so cards in a row line up. */}
      <div className="mt-auto">
        <PhotoGallery photos={card.photos} columns="grid-cols-2" previewCount={2} />
      </div>
    </article>
  );
}

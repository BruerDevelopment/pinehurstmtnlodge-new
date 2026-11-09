"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "@/components/ui/Lightbox";

export type GalleryPhoto = { src: string; alt: string; caption?: string };

// Thumbnail grid. Clicking a photo opens the shared Lightbox.
// With previewCount set, only that many thumbnails show, and a "View all" button opens the full set.
export default function PhotoGallery({
  photos,
  columns = "sm:grid-cols-2 lg:grid-cols-3",
  previewCount,
  fit = "cover",
}: {
  photos: GalleryPhoto[];
  columns?: string;
  previewCount?: number;
  // "contain" shows the whole photo inside the tile instead of cropping it.
  fit?: "cover" | "contain";
}) {
  const [index, setIndex] = useState<number | null>(null);

  const limited = previewCount !== undefined && photos.length > previewCount;
  const visible = limited ? photos.slice(0, previewCount) : photos;

  return (
    <>
      <ul className={`grid gap-4 ${columns}`}>
        {visible.map((photo, i) => (
          <li key={photo.src}>
            <button type="button" onClick={() => setIndex(i)} className="group block w-full text-left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-line">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className={`${fit === "contain" ? "object-contain" : "object-cover"} transition-transform group-hover:scale-[1.02]`}
                />
              </div>
              {photo.caption && <p className="mt-2 text-sm text-muted">{photo.caption}</p>}
            </button>
          </li>
        ))}
      </ul>

      {limited && (
        <button
          type="button"
          onClick={() => setIndex(0)}
          className="mt-4 rounded-full border border-line bg-surface px-5 py-2 text-sm font-medium text-ink hover:bg-page"
        >
          View all {photos.length} photos
        </button>
      )}

      {index !== null && (
        <Lightbox photos={photos} index={index} onClose={() => setIndex(null)} onNavigate={setIndex} />
      )}
    </>
  );
}

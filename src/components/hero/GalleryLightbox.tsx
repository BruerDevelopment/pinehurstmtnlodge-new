"use client";

import { useState } from "react";
import Lightbox from "@/components/ui/Lightbox";

type Photo = { src: string; alt: string };

// "View all" button for the hero mosaic. Opens the shared Lightbox.
export default function GalleryLightbox({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => setIndex(0)}
        className="absolute bottom-4 right-4 rounded-full bg-surface px-4 py-2 text-sm font-medium text-ink shadow-md hover:bg-page"
      >
        View all {photos.length} photos
      </button>

      {index !== null && (
        <Lightbox photos={photos} index={index} onClose={() => setIndex(null)} onNavigate={setIndex} />
      )}
    </>
  );
}

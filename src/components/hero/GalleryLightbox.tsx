"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Photo = { src: string; alt: string };

export default function GalleryLightbox({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const isOpen = index !== null;

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => (i === null ? i : (i + 1) % photos.length));
      if (e.key === "ArrowLeft") setIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, photos.length]);

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
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery"
          className="fixed inset-0 z-50 flex flex-col bg-black/90"
        >
          <div className="flex items-center justify-between p-4 text-white">
            <span className="text-sm">
              {index + 1} / {photos.length}
            </span>
            <button
              type="button"
              onClick={() => setIndex(null)}
              aria-label="Close gallery"
              className="text-2xl leading-none"
            >
              ✕
            </button>
          </div>

          <div className="relative flex-1 px-14 pb-6 sm:px-20">
            <Image
              key={photos[index].src}
              src={photos[index].src}
              alt={photos[index].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={() => setIndex((index - 1 + photos.length) % photos.length)}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-2xl text-white hover:bg-white/20"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => setIndex((index + 1) % photos.length)}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-2xl text-white hover:bg-white/20"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}

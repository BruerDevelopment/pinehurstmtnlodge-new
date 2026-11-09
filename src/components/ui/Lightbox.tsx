"use client";

import Image from "next/image";
import { useEffect } from "react";

export type LightboxPhoto = { src: string; alt: string };

// Controlled full-screen photo viewer: the parent owns the open index.
// Keyboard: Esc closes, arrow keys move between photos.
export default function Lightbox({
  photos,
  index,
  onClose,
  onNavigate,
}: {
  photos: LightboxPhoto[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const count = photos.length;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % count);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + count) % count);
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, count, onClose, onNavigate]);

  const photo = photos[index];

  return (
    <div role="dialog" aria-modal="true" aria-label="Photo viewer" className="fixed inset-0 z-50 flex flex-col bg-black/90">
      <div className="flex items-center justify-between p-4 text-white">
        <span className="text-sm">
          {index + 1} / {count}
        </span>
        <button type="button" onClick={onClose} aria-label="Close photo viewer" className="text-2xl leading-none">
          ✕
        </button>
      </div>

      <div className="relative flex-1 px-14 pb-6 sm:px-20">
        <Image key={photo.src} src={photo.src} alt={photo.alt} fill sizes="100vw" className="object-contain" />
      </div>

      <button
        type="button"
        onClick={() => onNavigate((index - 1 + count) % count)}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-2xl text-white hover:bg-white/20"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => onNavigate((index + 1) % count)}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-2xl text-white hover:bg-white/20"
      >
        ›
      </button>
    </div>
  );
}

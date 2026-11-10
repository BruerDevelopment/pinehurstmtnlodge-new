"use client";

import { useEffect, useRef } from "react";

// Full-screen YouTube player over the page. The iframe is only rendered while open,
// so closing it removes the player and stops playback.
// Keyboard: Esc closes. Focus moves to the close button on open.
export default function VideoModal({
  videoId,
  title,
  onClose,
}: {
  videoId: string;
  title: string;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex flex-col bg-black/90"
      onClick={(e) => {
        // A click on the dark backdrop closes; clicks on the video do not.
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex items-center justify-end p-4">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="text-2xl leading-none text-white"
        >
          ✕
        </button>
      </div>

      <div className="flex flex-1 items-center justify-center px-4 pb-8">
        <div className="aspect-video w-full max-w-5xl">
          <iframe
            className="h-full w-full rounded-xl"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

// Full-screen player over the page: YouTube (landscape) or an Instagram reel (portrait).
// The iframe is only rendered while open, so closing it removes the player and stops playback.
// Keyboard: Esc closes. Focus moves to the close button on open.
export default function VideoModal({
  videoId,
  title,
  platform = "youtube",
  openUrl,
  openLabel,
  onClose,
}: {
  videoId: string;
  title: string;
  platform?: "youtube" | "instagram";
  openUrl: string;
  openLabel: string;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const backdropPress = useRef(false);

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
      // Close only when the press began and ended on the dark backdrop. Phones can send a
      // stray "ghost" click after the card's tap, and that click must not close the player.
      onPointerDown={(e) => {
        backdropPress.current = e.target === e.currentTarget;
      }}
      onClick={(e) => {
        const closeNow = backdropPress.current && e.target === e.currentTarget;
        backdropPress.current = false;
        if (closeNow) onClose();
      }}
    >
      <div className="flex items-center justify-between gap-4 p-4">
        <a
          href={openUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-white underline underline-offset-4"
        >
          {openLabel}
        </a>
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
        {platform === "instagram" ? (
          // Reels are portrait. Instagram's player does not autoplay, so the visitor taps play inside it.
          <div className="h-[min(85vh,760px)] w-[min(420px,100%)]">
            <iframe
              className="h-full w-full rounded-xl bg-white"
              src={`https://www.instagram.com/reel/${videoId}/embed/`}
              title={title}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}

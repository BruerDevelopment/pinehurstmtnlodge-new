"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getSwipeDirection } from "@/lib/swipe";

export type LightboxPhoto = { src: string; alt: string };

type Anim = "none" | "snap" | "next" | "prev";

type Drag = { id: number; startX: number; startY: number; lastX: number; lastY: number };

// Controlled full-screen photo viewer: the parent owns the open index.
// Keyboard: Esc closes, arrow keys move between photos.
// Touch: drag left or right to change photos. Mouse dragging is ignored.
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
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef<Drag | null>(null);
  const [dragX, setDragX] = useState(0);
  const [anim, setAnim] = useState<Anim>("none");

  const prevIdx = (index - 1 + count) % count;
  const nextIdx = (index + 1) % count;

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

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (count < 2 || e.pointerType === "mouse" || !e.isPrimary) return;
    drag.current = { id: e.pointerId, startX: e.clientX, startY: e.clientY, lastX: e.clientX, lastY: e.clientY };
    setAnim("none");
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const d = drag.current;
    if (!d || e.pointerId !== d.id) return;
    d.lastX = e.clientX;
    d.lastY = e.clientY;
    setDragX(e.clientX - d.startX);
  }

  function endDrag(e: React.PointerEvent<HTMLDivElement>, cancelled: boolean) {
    const d = drag.current;
    if (!d || e.pointerId !== d.id) return;
    drag.current = null;

    const width = trackRef.current?.clientWidth ?? 0;
    const dir = cancelled
      ? null
      : getSwipeDirection({ dx: d.lastX - d.startX, dy: d.lastY - d.startY, width });

    if (!dir) {
      // Not a swipe: return to the current photo.
      setAnim("snap");
      setDragX(0);
      return;
    }

    // Users who prefer reduced motion get an instant change, with no slide.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onNavigate(dir === "next" ? nextIdx : prevIdx);
      setDragX(0);
      setAnim("none");
      return;
    }

    // Slide the photo out; onTransitionEnd changes the index.
    setAnim(dir);
    setDragX(dir === "next" ? -width : width);
  }

  function onTransitionEnd() {
    if (anim !== "next" && anim !== "prev") return;
    onNavigate(anim === "next" ? nextIdx : prevIdx);
    setDragX(0);
    setAnim("none");
  }

  const slides = [
    { slot: "prev", offset: -1, idx: prevIdx },
    { slot: "cur", offset: 0, idx: index },
    { slot: "next", offset: 1, idx: nextIdx },
  ];

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

      {/* Three slides side by side, so the neighbor shows while dragging. pan-y lets vertical scrolling and pinch-zoom through. */}
      <div
        ref={trackRef}
        className="relative flex-1 overflow-hidden"
        style={{ touchAction: "pan-y pinch-zoom" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={(e) => endDrag(e, false)}
        onPointerCancel={(e) => endDrag(e, true)}
        onTransitionEnd={onTransitionEnd}
      >
        {slides.map((s) => (
          <div
            key={s.slot}
            className="absolute inset-0 px-14 pb-6 sm:px-20"
            style={{
              transform: `translateX(calc(${s.offset * 100}% + ${dragX}px))`,
              transition: anim === "none" ? "none" : "transform 250ms ease-out",
            }}
          >
            <div className="relative h-full w-full">
              <Image src={photos[s.idx].src} alt={photos[s.idx].alt} fill sizes="100vw" className="object-contain" />
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => onNavigate(prevIdx)}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-2xl text-white hover:bg-white/20"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => onNavigate(nextIdx)}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-2xl text-white hover:bg-white/20"
      >
        ›
      </button>
    </div>
  );
}

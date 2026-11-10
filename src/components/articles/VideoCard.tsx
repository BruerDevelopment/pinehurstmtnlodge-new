"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import VideoModal from "@/components/ui/VideoModal";
import { withBase } from "@/configs/site";
import { type ArticleSummary, formatDate } from "@/lib/article-types";

// A video post card. The card is a button, not a link, so tapping it only opens the player on the page.
// The link to the original platform lives inside the player, as an explicit choice. That keeps phones
// from handing the tap to the Instagram or YouTube app.
export default function VideoCard({ article }: { article: ArticleSummary }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Stable callback, so the modal does not re-run its effects (and re-focus) on every render.
  const close = useCallback(() => {
    setOpen(false);
    // Return focus to the card that opened the player.
    buttonRef.current?.focus();
  }, []);

  const isReel = article.platform === "instagram";

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="group flex w-full flex-col overflow-hidden rounded-2xl bg-surface text-left transition-shadow hover:shadow-md"
      >
        <div className="relative aspect-[16/10] bg-line">
          <Image
            src={withBase(article.cover)}
            alt={article.coverAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl text-white transition-transform group-hover:scale-110"
          >
            ▶
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-5">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">{article.category}</p>
          <h3 className="text-xl font-semibold tracking-tight text-ink">{article.title}</h3>
          <p className="text-sm text-muted">{article.subtitle}</p>
          <p className="mt-auto pt-3 text-sm text-muted">
            <time dateTime={article.date}>{formatDate(article.date)}</time> · {article.durationLabel}
          </p>
        </div>
      </button>

      {open && article.videoId && (
        <VideoModal
          videoId={article.videoId}
          title={article.title}
          platform={article.platform ?? "youtube"}
          openUrl={article.href}
          openLabel={isReel ? "Open on Instagram" : "Open on YouTube"}
          onClose={close}
        />
      )}
    </>
  );
}

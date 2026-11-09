// Pure swipe rules for the photo viewer. No React or DOM, so they can be checked on their own.

export type SwipeDirection = "next" | "prev" | null;

// A swipe must travel at least 60px, or 20% of the viewer width if that is larger.
export function swipeThreshold(width: number): number {
  return Math.max(60, width * 0.2);
}

// dx < 0 means the finger moved left, which shows the next photo.
// A drag that is mostly vertical is treated as scrolling, not a swipe.
export function getSwipeDirection({ dx, dy, width }: { dx: number; dy: number; width: number }): SwipeDirection {
  if (width <= 0) return null;
  if (Math.abs(dx) < swipeThreshold(width)) return null;
  if (Math.abs(dy) > Math.abs(dx)) return null;
  return dx < 0 ? "next" : "prev";
}

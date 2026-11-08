"use client";

import { useEffect, useRef, useState } from "react";

// Clamps review text to 3 lines. "Show more" only appears when the text is actually cut off.
export default function ReviewText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const el = ref.current;
    // Measure only while clamped; when expanded, nothing is cut off to measure.
    if (!el || expanded) return;

    const check = () => setOverflows(el.scrollHeight > el.clientHeight + 1);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [text, expanded]);

  return (
    <div className="mt-4">
      <p ref={ref} className={`leading-7 text-ink ${expanded ? "" : "line-clamp-3"}`}>
        {text}
      </p>
      {(overflows || expanded) && (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((e) => !e)}
          className="mt-2 text-sm font-medium text-accent hover:underline"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}

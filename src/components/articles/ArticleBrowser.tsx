"use client";

import { useMemo, useState } from "react";
import ArticleCard from "@/components/articles/ArticleCard";
import type { ArticleSummary } from "@/lib/article-types";

export default function ArticleBrowser({
  articles,
  categories,
}: {
  articles: ArticleSummary[];
  categories: string[];
}) {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () => (active === "All" ? articles : articles.filter((a) => a.category === active)),
    [active, articles]
  );

  const options = ["All", ...categories];

  return (
    <>
      <div role="group" aria-label="Filter articles by category" className="flex flex-wrap gap-2">
        {options.map((option) => {
          const on = active === option;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(option)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                on ? "bg-accent text-surface" : "border border-line bg-surface text-ink hover:bg-page"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {visible.length > 0 ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((article) => (
            <ArticleCard key={article.href} article={article} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-muted">No articles in this category yet.</p>
      )}
    </>
  );
}

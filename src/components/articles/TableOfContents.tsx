import type { Heading } from "@/lib/article-types";

// Shown only on longer articles (4 or more section headings).
export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const sections = headings.filter((h) => h.depth === 2);
  if (sections.length < 4) return null;

  return (
    <nav aria-label="On this page" className="rounded-2xl bg-surface p-6">
      <p className="font-semibold text-ink">On this page</p>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
        {sections.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`} className="text-muted hover:text-accent">
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

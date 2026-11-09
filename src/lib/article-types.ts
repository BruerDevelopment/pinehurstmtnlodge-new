// Pure article types and helpers. Safe to import from client and server code.

export type Heading = { depth: 2 | 3; text: string; id: string };

export type Article = {
  routePath: string; // e.g. "guides/rollinsville" (matches the old URL after /area-guide/articles/)
  routeSegments: string[];
  title: string;
  subtitle: string;
  description: string;
  category: string;
  author: string;
  date: string; // ISO yyyy-mm-dd
  updated: string; // ISO yyyy-mm-dd
  cover: string; // unprefixed public path, e.g. /photos/articles/x.jpg
  coverAlt: string;
  featured: boolean;
  body: string;
  readingMinutes: number;
  headings: Heading[];
};

// Plain, serializable shape passed to client components.
export type ArticleSummary = {
  href: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  author: string;
  date: string;
  readingMinutes: number;
  cover: string;
  coverAlt: string;
  featured: boolean;
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function articleHref(article: Pick<Article, "routePath">): string {
  return `/area-guide/articles/${article.routePath}`;
}

export function toSummary(article: Article): ArticleSummary {
  return {
    href: articleHref(article),
    title: article.title,
    subtitle: article.subtitle,
    description: article.description,
    category: article.category,
    author: article.author,
    date: article.date,
    readingMinutes: article.readingMinutes,
    cover: article.cover,
    coverAlt: article.coverAlt,
    featured: article.featured,
  };
}

// Fixed UTC formatting so server and browser render the same date text.
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

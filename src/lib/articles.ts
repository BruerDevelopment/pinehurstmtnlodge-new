import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import {
  type Article,
  type ArticleSummary,
  type Heading,
  type VideoPost,
  slugify,
  toSummary,
  videoToSummary,
} from "@/lib/article-types";

// Server-only: reads content/articles and content/videos at build time (static export).
const DIR = path.join(process.cwd(), "content", "articles");
const VIDEO_DIR = path.join(process.cwd(), "content", "videos");
const WORDS_PER_MINUTE = 200;

function extractHeadings(body: string): Heading[] {
  const headings: Heading[] = [];
  for (const line of body.split("\n")) {
    const match = /^(#{2,3})\s+(.+?)\s*$/.exec(line);
    if (match) {
      const text = match[2];
      headings.push({ depth: match[1].length as 2 | 3, text, id: slugify(text) });
    }
  }
  return headings;
}

function requireString(data: Record<string, unknown>, key: string, file: string): string {
  const value = data[key];
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`content/articles/${file}: missing "${key}"`);
  }
  return value;
}

function load(): Article[] {
  const articles = fs
    .readdirSync(DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file): Article => {
      const { data, content } = matter(fs.readFileSync(path.join(DIR, file), "utf8"));
      const routePath = requireString(data, "path", file);
      const coverAlt = requireString(data, "coverAlt", file); // alt text is required for every cover

      return {
        routePath,
        routeSegments: routePath.split("/"),
        title: requireString(data, "title", file),
        subtitle: requireString(data, "subtitle", file),
        description: requireString(data, "description", file),
        category: requireString(data, "category", file),
        author: requireString(data, "author", file),
        date: requireString(data, "date", file),
        updated: typeof data.updated === "string" ? data.updated : requireString(data, "date", file),
        cover: requireString(data, "cover", file),
        coverAlt,
        featured: data.featured === true,
        body: content.trim(),
        readingMinutes: Math.max(1, Math.round(content.trim().split(/\s+/).length / WORDS_PER_MINUTE)),
        headings: extractHeadings(content),
      };
    });

  // Newest first.
  return articles.sort((a, b) => b.date.localeCompare(a.date));
}

const ARTICLES = load();

// Video posts: one markdown file per video, frontmatter only.
function loadVideos(): VideoPost[] {
  if (!fs.existsSync(VIDEO_DIR)) return [];
  return fs
    .readdirSync(VIDEO_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file): VideoPost => {
      const { data } = matter(fs.readFileSync(path.join(VIDEO_DIR, file), "utf8"));
      const seconds = Number(data.durationSeconds);
      if (!Number.isFinite(seconds) || seconds <= 0) {
        throw new Error(`content/videos/${file}: "durationSeconds" must be a positive number`);
      }
      return {
        videoId: requireString(data, "videoId", file),
        title: requireString(data, "title", file),
        subtitle: requireString(data, "subtitle", file),
        description: requireString(data, "description", file),
        category: requireString(data, "category", file),
        author: requireString(data, "author", file),
        date: requireString(data, "date", file),
        durationSeconds: seconds,
        cover: requireString(data, "cover", file),
        coverAlt: requireString(data, "coverAlt", file),
        featured: data.featured === true,
      };
    });
}

const VIDEOS = loadVideos();

export function getAllArticles(): Article[] {
  return ARTICLES;
}

export function getAllVideos(): ArticleSummary[] {
  return VIDEOS.map(videoToSummary);
}

// Articles and videos together, newest first. Used by the listings.
export function getAllPosts(): ArticleSummary[] {
  return [...ARTICLES.map(toSummary), ...getAllVideos()].sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticleBySlug(segments: string[]): Article | undefined {
  const routePath = segments.join("/");
  return ARTICLES.find((article) => article.routePath === routePath);
}

// Same category first, then the newest of the rest.
export function getRelatedArticles(article: Article, count = 3) {
  const others = ARTICLES.filter((a) => a.routePath !== article.routePath);
  const sameCategory = others.filter((a) => a.category === article.category);
  const rest = others.filter((a) => a.category !== article.category);
  return [...sameCategory, ...rest].slice(0, count).map(toSummary);
}

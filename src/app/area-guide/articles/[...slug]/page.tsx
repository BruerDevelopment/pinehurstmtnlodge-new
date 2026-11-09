import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ArticleBody from "@/components/articles/ArticleBody";
import RelatedArticles from "@/components/articles/RelatedArticles";
import StayCta from "@/components/articles/StayCta";
import TableOfContents from "@/components/articles/TableOfContents";
import JsonLd from "@/components/seo/JsonLd";
import Link from "next/link";
import { absoluteUrl, withBase } from "@/configs/site";
import { articleJsonLd, breadcrumbJsonLd } from "@/configs/seo";
import { articleHref, formatDate } from "@/lib/article-types";
import { getAllArticles, getArticleBySlug, getRelatedArticles } from "@/lib/articles";

// Only the articles generated below exist. Anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.routeSegments }));
}

type Props = { params: Promise<{ slug: string[] }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: `${article.title} | Things to Do | Pinehurst Mtn Lodge`,
    description: article.description,
    alternates: { canonical: absoluteUrl(articleHref(article)) },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      publishedTime: article.date,
      modifiedTime: article.updated,
      authors: [article.author],
      images: [{ url: absoluteUrl(article.cover), alt: article.coverAlt }],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const href = articleHref(article);
  const related = getRelatedArticles(article, 3);

  return (
    <>
      <JsonLd data={articleJsonLd(article)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Things to Do", path: "/things-to-do" },
          { name: article.title, path: href },
        ])}
      />

      <main className="flex-1">
        {/* Cover photo sits in the same column as the article, with a dark gradient for contrast. */}
        <div className="mx-auto max-w-3xl px-4 pt-10 md:px-8">
        <header className="relative isolate flex min-h-[26rem] items-end overflow-hidden rounded-2xl bg-ink md:min-h-[30rem]">
          <Image
            src={withBase(article.cover)}
            alt={article.coverAlt}
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/50 to-black/10"
          />

          <div className="w-full p-6 pt-24 text-surface md:p-10">
            <nav aria-label="Breadcrumb" className="text-sm text-surface/80">
              <Link href="/things-to-do" className="hover:text-surface hover:underline">
                Things to Do
              </Link>{" "}
              / {article.category}
            </nav>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{article.title}</h1>
            <p className="mt-3 text-xl text-surface/90">{article.subtitle}</p>
            <p className="mt-6 text-sm text-surface/80">
              By {article.author} · <time dateTime={article.date}>{formatDate(article.date)}</time> ·{" "}
              {article.readingMinutes} min read
            </p>
          </div>
        </header>
        </div>

        <article className="mx-auto max-w-3xl px-4 pb-4 pt-10 md:px-8">
          <div>
            <TableOfContents headings={article.headings} />
          </div>

          <ArticleBody markdown={article.body} />
        </article>

        <div className="mx-auto max-w-3xl px-4 pb-4 md:px-8">
          <StayCta />
        </div>

        <div className="mt-6">
          <RelatedArticles articles={related} />
        </div>
      </main>
    </>
  );
}

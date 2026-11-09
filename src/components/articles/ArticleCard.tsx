import Image from "next/image";
import Link from "next/link";
import { withBase } from "@/configs/site";
import { type ArticleSummary, formatDate } from "@/lib/article-types";

export default function ArticleCard({ article }: { article: ArticleSummary }) {
  return (
    <Link
      href={article.href}
      className="group flex flex-col overflow-hidden rounded-2xl bg-surface transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[16/10] bg-line">
        <Image
          src={withBase(article.cover)}
          alt={article.coverAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">{article.category}</p>
        <h3 className="text-xl font-semibold tracking-tight text-ink">{article.title}</h3>
        <p className="text-sm text-muted">{article.subtitle}</p>
        <p className="mt-auto pt-3 text-sm text-muted">
          <time dateTime={article.date}>{formatDate(article.date)}</time> · {article.readingMinutes} min read
        </p>
      </div>
    </Link>
  );
}

import ArticleCard from "@/components/articles/ArticleCard";
import Section from "@/components/ui/Section";
import type { ArticleSummary } from "@/lib/article-types";

export default function RelatedArticles({ articles }: { articles: ArticleSummary[] }) {
  if (articles.length === 0) return null;

  return (
    <Section title="Keep Reading">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.href} article={article} />
        ))}
      </div>
    </Section>
  );
}

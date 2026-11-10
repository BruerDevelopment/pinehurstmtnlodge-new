import Link from "next/link";
import ArticleBrowser from "@/components/articles/ArticleBrowser";
import ArticleCard from "@/components/articles/ArticleCard";
import AreaMap from "@/components/sections/AreaMap";
import Section from "@/components/ui/Section";
import JsonLd from "@/components/seo/JsonLd";
import { videoJsonLd } from "@/configs/seo";
import { site } from "@/configs/site";
import { getAllPosts, getAllVideos } from "@/lib/articles";

// Shared by /things-to-do and the legacy /area-guide URLs. Lists articles and video posts.
export default function ThingsToDoIndex() {
  const articles = getAllPosts();
  const featured = articles.filter((a) => a.featured).slice(0, 3);
  const categories = site.thingsToDo.categories.filter((c) => articles.some((a) => a.category === c));

  return (
    <main className="flex-1">
      {getAllVideos().map((video) => (
        <JsonLd key={video.videoId} data={videoJsonLd(video)} />
      ))}
      <section className="mx-auto max-w-6xl px-4 pt-12 md:px-8">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">Explore</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          {site.thingsToDo.heading}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{site.thingsToDo.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="#articles" className="rounded-full bg-accent px-6 py-3 font-medium text-surface hover:opacity-90">
            Start Reading
          </Link>
          <Link href="#map" className="rounded-full border border-line bg-surface px-6 py-3 font-medium text-ink hover:bg-page">
            Explore Our Interactive Map
          </Link>
        </div>
      </section>

      {featured.length > 0 && (
        <Section title="Featured">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((article) => (
              <ArticleCard key={article.href} article={article} />
            ))}
          </div>
        </Section>
      )}

      <section id="articles" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-14 md:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">All Articles</h2>
        <div className="mt-6">
          <ArticleBrowser articles={articles} categories={categories} />
        </div>
      </section>

      <AreaMap />
    </main>
  );
}

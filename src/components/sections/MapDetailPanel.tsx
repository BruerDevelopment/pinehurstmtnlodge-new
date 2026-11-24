import Link from "next/link";
import type { MapPoint } from "@/configs/map";
import { withBase } from "@/configs/site";
import { articleHref, type ArticleSummary } from "@/lib/article-types";

// Shows details for the map pin that was clicked. Sits beside the map on desktop and below it on phones.
export default function MapDetailPanel({ point, allArticles }: { point?: MapPoint; allArticles: ArticleSummary[] }) {
  if (!point) {
    return (
      <aside aria-live="polite" className="flex items-center rounded-2xl bg-surface p-6 text-muted">
        Select a pin on the map to see details about that place.
      </aside>
    );
  }

  const details = point.details;
  // Resolve each article slug to a real article. Slugs that match nothing are skipped.
  const guides = (details?.articles ?? [])
    .map((slug) => allArticles.find((a) => a.href === articleHref({ routePath: slug })))
    .filter((a): a is ArticleSummary => Boolean(a));

  return (
    <aside aria-live="polite" className="flex flex-col gap-4 rounded-2xl bg-surface p-6">
      {details?.photo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={withBase(details.photo.src)}
          alt={details.photo.alt}
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />
      )}

      <div>
        <h3 className="text-xl font-semibold tracking-tight text-ink">{point.name}</h3>
        {details?.driveTime && <p className="mt-1 text-sm text-muted">{details.driveTime} from the lodge</p>}
      </div>

      {details?.summary && <p className="leading-7 text-muted">{details.summary}</p>}

      {details?.website && (
        <a
          href={details.website}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent underline underline-offset-4"
        >
          Official website
        </a>
      )}

      {guides.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-accent">Area guides</h4>
          <ul className="mt-3 space-y-3">
            {guides.map((guide) => (
              <li key={guide.href}>
                <Link href={guide.href} className="font-medium text-ink hover:text-accent">
                  {guide.title}
                </Link>
                <p className="text-sm text-muted">{guide.category}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}

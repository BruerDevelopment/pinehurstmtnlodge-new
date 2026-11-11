import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/configs/metadata";
import { faqJsonLd } from "@/configs/seo";
import { type Block, faqGroups } from "@/configs/faqs";
import { site } from "@/configs/site";

export const metadata = pageMetadata({
  title: "FAQs & House Rules",
  description:
    "Check-in and arrival details, house rules, hot tub and wood-burning stove instructions, parking, and nearby attractions and dining at Pinehurst Mtn Lodge.",
  path: "/faqs",
});

// Renders [text](url) as a link. Internal paths stay in the same tab; external URLs open in a new tab.
function withLinks(text: string) {
  const parts = text.split(/\[([^\]]+)\]\(([^)]+)\)/g);
  const nodes: React.ReactNode[] = [];
  const linkClass = "font-medium text-accent underline underline-offset-4";
  for (let i = 0; i < parts.length; i += 3) {
    nodes.push(parts[i]);
    if (i + 2 < parts.length) {
      const label = parts[i + 1];
      const href = parts[i + 2];
      const key = `${label}-${i}`;
      nodes.push(
        /^https?:\/\//.test(href) ? (
          <a key={key} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {label}
          </a>
        ) : (
          <Link key={key} href={href} className={linkClass}>
            {label}
          </Link>
        )
      );
    }
  }
  return nodes;
}

function Answer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mt-4 space-y-4 text-base leading-7 text-muted">
      {blocks.map((block, i) =>
        Array.isArray(block) ? (
          <ul key={i} className="list-disc space-y-2 pl-6">
            {block.map((line) => (
              <li key={line}>{withLinks(line)}</li>
            ))}
          </ul>
        ) : (
          <p key={i}>{withLinks(block)}</p>
        )
      )}
    </div>
  );
}

export default function FaqsPage() {
  return (
    <main className="flex-1">
      <JsonLd data={faqJsonLd(faqGroups)} />

      <section className="mx-auto max-w-4xl px-4 pt-12 md:px-8">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">{site.name}</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Frequently Asked Questions &amp; House Rules
        </h1>
      </section>

      {faqGroups.map((group) => (
        <section key={group.title} className="mx-auto max-w-4xl px-4 py-10 md:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">{group.title}</h2>
          <div className="mt-6 flex flex-col gap-3">
            {group.items.map((item) => (
              <details key={item.question} className="group rounded-2xl bg-surface p-5 open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                  <span>{item.question}</span>
                  <span aria-hidden="true" className="text-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <Answer blocks={item.answer} />
              </details>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { slugify } from "@/lib/article-types";

// Flattens React children to plain text, for building heading ids.
function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (node && typeof node === "object" && "props" in node) {
    return textOf((node as { props: { children?: ReactNode } }).props.children ?? "");
  }
  return "";
}

export default function ArticleBody({ markdown }: { markdown: string }) {
  return (
    <div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 id={slugify(textOf(children))} className="mt-12 scroll-mt-24 text-2xl font-semibold tracking-tight text-ink">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-8 text-xl font-semibold tracking-tight text-ink">{children}</h3>
          ),
          p: ({ children }) => <p className="mt-5 text-lg leading-8 text-muted">{children}</p>,
          ul: ({ children }) => <ul className="mt-5 list-disc space-y-2 pl-6 text-lg leading-8 text-muted">{children}</ul>,
          ol: ({ children }) => <ol className="mt-5 list-decimal space-y-2 pl-6 text-lg leading-8 text-muted">{children}</ol>,
          strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
          a: ({ href, children }) => {
            if (!href) return <>{children}</>;
            // Internal links go through next/link so the base path is applied.
            if (href.startsWith("/")) {
              return (
                <Link href={href} className="font-medium text-accent underline underline-offset-4">
                  {children}
                </Link>
              );
            }
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline underline-offset-4"
              >
                {children}
              </a>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

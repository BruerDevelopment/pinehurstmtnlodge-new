import Link from "next/link";

// Jump links to each section on the accommodations page.
export default function SectionNav({ sections }: { sections: { id: string; title: string }[] }) {
  return (
    <nav aria-label="Jump to a section" className="flex flex-wrap gap-2">
      {sections.map((section) => (
        <Link
          key={section.id}
          href={`#${section.id}`}
          className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink hover:bg-page"
        >
          {section.title}
        </Link>
      ))}
    </nav>
  );
}

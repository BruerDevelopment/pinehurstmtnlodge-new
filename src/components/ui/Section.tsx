import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-10">
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-widest text-accent">{eyebrow}</p>
      )}
      {title && (
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink">{title}</h2>
      )}
      <div className="mt-4">{children}</div>
    </section>
  );
}

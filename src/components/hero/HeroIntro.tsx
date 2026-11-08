import { site } from "@/configs/site";

export default function HeroIntro() {
  return (
    <div className="mt-10 flex flex-col gap-8">
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          {site.location}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          {site.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{site.tagline}</p>
      </div>

      <dl className="grid grid-cols-2 gap-6 rounded-2xl bg-surface p-6 md:grid-cols-4">
        {site.facts.map((fact) => (
          <div key={fact.label}>
            <dt className="text-xs uppercase tracking-wide text-muted">{fact.label}</dt>
            <dd className="mt-1 font-medium text-ink">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

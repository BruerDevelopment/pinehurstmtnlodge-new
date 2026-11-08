import Section from "@/components/ui/Section";

export const metadata = {
  title: "Things to Do",
};

export default function ThingsToDoPage() {
  return (
    <main className="flex-1">
      <Section eyebrow="Explore" title="Things to Do">
        <p className="text-lg leading-8 text-muted">
          Placeholder: describe nearby trails, seasonal activities, and local attractions.
        </p>
      </Section>
    </main>
  );
}

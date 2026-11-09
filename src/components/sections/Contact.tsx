import Section from "@/components/ui/Section";
import { site } from "@/configs/site";

export default function Contact() {
  return (
    <Section id="contact" title="Get in Touch">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="flex max-w-2xl flex-col gap-6">
          <p className="text-lg leading-8 text-muted">
            Questions about the lodge, the area, or your dates? Send us a note and we&apos;ll get back to you.
          </p>

          <a
            href={`mailto:${site.email}`}
            className="inline-flex w-fit rounded-full bg-accent px-6 py-3 font-medium text-surface hover:opacity-90"
          >
            Send message
          </a>
        </div>

        <dl className="flex flex-col gap-4 text-ink md:items-end md:text-right">
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted">Follow along</dt>
            <dd className="py-1">
              <a href={site.instagram} className="hover:text-accent" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </dd>
            <dd className="py-1">
              <a href={site.facebook} className="hover:text-accent" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}

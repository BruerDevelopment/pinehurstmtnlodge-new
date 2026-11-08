import Image from "next/image";
import Section from "@/components/ui/Section";
import { site } from "@/configs/site";

export const metadata = {
  title: "Your Hosts",
};

export default function AboutPage() {
  const { familyPhotos, intro, members, closing } = site.about;

  return (
    <main className="flex-1">
      <Section eyebrow="Meet us" title="Your Hosts">
        <div className="grid gap-4 sm:grid-cols-2">
          {familyPhotos.map((photo) => (
            <div key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-line">
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-5 text-lg leading-8 text-muted">
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {members.map((member) => (
            <div key={member.name}>
              {member.role && (
                <p className="text-xs font-medium uppercase tracking-widest text-accent">{member.role}</p>
              )}
              <h3 className="mt-1 text-2xl font-semibold tracking-tight text-ink">{member.name}</h3>
              <p className="mt-3 leading-7 text-muted">{member.bio}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-lg leading-8 text-muted">{closing}</p>
      </Section>
    </main>
  );
}

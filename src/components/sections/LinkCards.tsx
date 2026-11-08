import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import { site } from "@/configs/site";

export default function LinkCards() {
  return (
    <Section>
      <div className="grid gap-4 md:grid-cols-2">
        {site.linkCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group relative rounded-2xl bg-surface p-8 transition-colors hover:bg-accent hover:text-surface"
          >
            {card.showHostPhotos && (
              <div className="absolute right-8 top-4 flex -space-x-3">
                {site.hosts.map((host, i) => (
                  <div
                    key={host.photo}
                    style={{ zIndex: site.hosts.length - i }}
                    className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-surface bg-line group-hover:border-accent"
                  >
                    <Image src={host.photo} alt={host.alt} fill sizes="56px" className="object-cover" />
                  </div>
                ))}
              </div>
            )}
            <h3 className="text-2xl font-semibold tracking-tight">{card.title}</h3>
            <p className="mt-3 leading-7 text-muted group-hover:text-surface/90">{card.body}</p>
            <p className="mt-6 font-medium">{card.cta}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}

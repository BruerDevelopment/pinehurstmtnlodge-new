import Image from "next/image";
import { site } from "@/configs/site";

export default function Space() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-10">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">The Lodge</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink">The Space</h2>
          <div className="mt-4 flex flex-col gap-5">
            {site.space.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl md:order-last md:h-[400px] md:w-auto md:max-w-none md:justify-self-end md:self-center">
          <Image
            src={site.spacePhoto.src}
            alt={site.spacePhoto.alt}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

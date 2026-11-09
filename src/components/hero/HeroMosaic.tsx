import Image from "next/image";
import { site } from "@/configs/site";
import GalleryLightbox from "@/components/hero/GalleryLightbox";

export default function HeroMosaic() {
  const [main, top, bottom] = site.photos;
  // "contain" letterboxes portrait photos on the page background instead of cropping them.
  const fitClass = (photo: { fit?: string }) =>
    photo.fit === "contain" ? "object-contain" : "object-cover";
  const fitMain = fitClass(main as {src: string; alt: string; fit?: string})
  const fitTop = fitClass(top as {src: string; alt: string; fit?: string})
  const fitBottom = fitClass(bottom as {src: string; alt: string; fit?: string})

  return (
    <div className="relative">
      <div className="grid h-[320px] grid-cols-1 gap-2 overflow-hidden rounded-2xl md:h-[460px] md:grid-cols-3">
        <div className="relative md:col-span-2">
          <Image
            src={main.src}
            alt={main.alt}
            fill
            priority
            sizes="(min-width: 768px) 66vw, 100vw"
            className={fitMain}
          />
        </div>

        <div className="hidden md:grid md:grid-rows-2 md:gap-2">
          <div className="relative bg-line">
            <Image src={top.src} alt={top.alt} fill sizes="33vw" className={fitTop} />
          </div>
          <div className="relative bg-line">
            <Image src={bottom.src} alt={bottom.alt} fill sizes="33vw" className={fitBottom} />
          </div>
        </div>
      </div>

      <GalleryLightbox photos={site.photos} />
    </div>
  );
}

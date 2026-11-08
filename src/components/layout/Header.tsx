import Image from "next/image";
import Link from "next/link";
import { site } from "@/configs/site";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-page/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight text-ink">
          <Image
            src="/icons/android-chrome-192x192.png"
            alt=""
            width={192}
            height={192}
            className="h-9 w-9"
          />
          {site.name}
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-ink md:flex">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>

        <MobileMenu items={site.nav} />
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

type MenuItem = { label: string; href: string };

export default function MobileMenu({ items }: { items: MenuItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="flex h-10 w-10 items-center justify-center rounded-md text-2xl text-ink hover:bg-line/50"
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          className="absolute left-0 right-0 top-16 border-b border-line bg-page px-4 py-6 shadow-sm"
        >
          <ul className="flex flex-col gap-4 text-base font-medium text-ink">
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

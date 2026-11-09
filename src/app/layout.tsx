import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site, withBase } from "@/configs/site";
import { socialCover } from "@/configs/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Pages set a plain title; the template adds the brand, e.g. "FAQs | Pinehurst Mtn Lodge".
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.tagline,
  metadataBase: new URL(site.siteUrl),
  openGraph: {
    title: site.name,
    description: site.tagline,
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [socialCover("default")],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
    images: [socialCover("default").url],
  },
  manifest: withBase("/site.webmanifest"),
  icons: {
    icon: [
      { url: withBase("/icons/favicon-16x16.png"), sizes: "16x16", type: "image/png" },
      { url: withBase("/icons/favicon-32x32.png"), sizes: "32x32", type: "image/png" },
    ],
    apple: withBase("/icons/apple-touch-icon.png"),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

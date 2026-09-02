import type { Metadata } from "next";
import "./globals.css";
import { AdConsentProvider } from "./ad-consent";
import { AdsenseLoader } from "./adsense-loader";
import { SiteNav } from "./site-nav";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dawnwalker.cc"),
  title: { default: "The Blood of Dawnwalker Guide: Release Date, Gameplay & Launch Help", template: "%s | Dawnwalker Guide" },
  description: "Independent English guide for The Blood of Dawnwalker: release date, gameplay, editions, PC requirements, console performance and verified launch-week fixes.",
  keywords: ["The Blood of Dawnwalker", "Blood of Dawnwalker release date", "The Blood of Dawnwalker gameplay", "The Blood of Dawnwalker guide", "Blood of Dawnwalker PS5", "Blood of Dawnwalker Xbox", "Blood of Dawnwalker PC", "Blood of Dawnwalker editions"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Dawnwalker Guide", locale: "en_US", title: "The Blood of Dawnwalker Guides, Release Date & Platforms", description: "Spoiler-aware, verified guides and launch updates.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "The Blood of Dawnwalker Guides | Dawnwalker Guide", description: "Release, platforms and verified player guides.", images: ["/og.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "Dawnwalker Guide", url: "https://www.dawnwalker.cc/", inLanguage: "en", description: "Independent guides for The Blood of Dawnwalker" };
  return <html lang="en">
    <body>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
      <AdConsentProvider><AdsenseLoader /><SiteNav />{children}</AdConsentProvider>
    </body>
  </html>;
}

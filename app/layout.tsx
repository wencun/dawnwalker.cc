import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { AdConsentProvider } from "./ad-consent";
import { TopAd } from "./ad-slot";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dawnwalker.cc"),
  title: { default: "The Blood of Dawnwalker Guide & Release Date", template: "%s | Dawnwalker Guide" },
  description: "Independent, spoiler-aware guides for The Blood of Dawnwalker: release date, PC, PS5 and Xbox platforms, builds, choices and verified launch updates.",
  keywords: ["The Blood of Dawnwalker", "Blood of Dawnwalker release date", "The Blood of Dawnwalker guide", "Blood of Dawnwalker PS5", "Blood of Dawnwalker Xbox", "Blood of Dawnwalker PC"],
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
      <Script id="adsense-loader" async strategy="afterInteractive" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4539826019899948" crossOrigin="anonymous" />
      <style>{`.library:before{content:"VALE SANGORA · FIELD NOTES"}@media(max-width:760px){.links{display:flex;gap:0}.links a:not(:last-child){display:none}}`}</style>
      <AdConsentProvider><TopAd />{children}</AdConsentProvider>
    </body>
  </html>;
}

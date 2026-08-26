import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { AdConsentProvider } from "./ad-consent";
import { LanguageSwitcher } from "./language-switcher";

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
      <Script id="adsense-loader" async strategy="lazyOnload" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4539826019899948" crossOrigin="anonymous" />
      <style>{`html{scroll-behavior:auto}.library:before{content:"VALE SANGORA · FIELD NOTES"}.language-switcher{position:absolute;z-index:60;top:18px;right:5vw;color:#eee3d1;font:14px "DM Mono",monospace}.language-switcher summary{list-style:none;display:flex;align-items:center;gap:9px;min-width:136px;padding:12px 14px;background:#171721;border:1px solid #393649;border-radius:8px;cursor:pointer}.language-switcher summary::-webkit-details-marker{display:none}.language-switcher summary:after{content:"▾";margin-left:auto;color:#c9a66c}.language-switcher>div{position:absolute;right:0;margin-top:7px;min-width:200px;padding:7px;background:#171721;border:1px solid #393649;border-radius:8px;box-shadow:0 18px 45px #000}.language-switcher a{display:block;padding:12px 14px;color:#c8c0b9}.language-switcher a:hover,.language-switcher a[aria-current="page"]{background:#3a1c29;color:#e7c694}@media(max-width:760px){.links{display:flex;gap:0}.links a:not(:last-child){display:none}.language-switcher{top:14px;right:5vw}.language-switcher summary{min-width:100px;padding:9px 11px;font-size:12px}}`}</style>
      <AdConsentProvider><LanguageSwitcher />{children}</AdConsentProvider>
    </body>
  </html>;
}

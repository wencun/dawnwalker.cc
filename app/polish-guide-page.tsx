import type { Metadata } from "next";
import { Fragment } from "react";
import { MiddleAd } from "./ad-slot";

export type PolishGuideSection = { title: string; body: React.ReactNode };

export function polishMetadata(title: string, description: string, path: string, englishPath: string, keywords: string[]): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: {
      canonical: path,
      languages: { en: englishPath, pl: path, ru: path.replace("/pl", "/ru"), cs: path.replace("/pl", "/cs"), "x-default": englishPath },
    },
    openGraph: { locale: "pl_PL", title, description, url: path, images: ["/og.png"] },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}

export function PolishGuidePage({ eyebrow, title, dek, checked, sections, sources, englishPath }: { eyebrow: string; title: string; dek: string; checked: string; sections: PolishGuideSection[]; sources: { label: string; href: string }[]; englishPath: string }) {
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: title, description: dek, dateModified: checked, inLanguage: "pl", author: { "@type": "Organization", name: "Dawnwalker Guide" } };
  const middleIndex = Math.max(0, Math.ceil(sections.length / 2) - 1);
  return <main className="doc-shell"><article className="doc"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="doc-dek">{dek}</p><p className="checked">Sprawdzono: {checked} · <span>Aktualizujemy fakty i źródła, gdy tylko się zmieniają.</span></p>{sections.map((section, index) => <Fragment key={section.title}><section><h2>{section.title}</h2>{section.body}</section>{index === middleIndex && <MiddleAd />}</Fragment>)}<section><h2>Źródła</h2><ul className="sources">{sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label} ↗</a></li>)}</ul></section></article><footer><a className="brand" href="/pl">Dawnwalker <span>Guide</span></a><p>Nieoficjalny poradnik fanowski. <a href="/privacy">Prywatność</a> · <a href="https://github.com/wencun/dawnwalker.cc/issues" target="_blank" rel="noreferrer">Poprawki i opinie</a></p></footer><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></main>;
}

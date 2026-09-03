import type { Metadata } from "next";
import { Fragment } from "react";
import { ContentAd, NativeContentAd } from "./ad-slot";

export type RegionalSection = { title: string; body: React.ReactNode };
type RegionalGuideProps = { locale: "pl" | "ru" | "cs"; eyebrow: string; title: string; dek: string; checked: string; sections: RegionalSection[]; sources: { label: string; href: string }[]; homeLabel: string; releaseLabel: string; consoleLabel: string; checkedLabel: string; sourcesLabel: string; footer: string };

export function regionalMetadata(locale: "pl" | "ru" | "cs", title: string, description: string, path: string, keywords: string[]): Metadata {
  const openGraphLocale = locale === "pl" ? "pl_PL" : locale === "ru" ? "ru_RU" : "cs_CZ";
  return { title: { absolute: title }, description, keywords, alternates: { canonical: path, languages: { en: path.replace(`/${locale}`, ""), pl: `/pl${path.replace(`/${locale}`, "")}`, ru: `/ru${path.replace(`/${locale}`, "")}`, cs: `/cs${path.replace(`/${locale}`, "")}`, "x-default": path.replace(`/${locale}`, "") } }, openGraph: { locale: openGraphLocale, title, description, url: path, images: ["/og.png"] }, twitter: { card: "summary_large_image", title, description, images: ["/og.png"] } };
}

export function RegionalGuidePage({ locale, eyebrow, title, dek, checked, sections, sources, homeLabel, releaseLabel, consoleLabel, checkedLabel, sourcesLabel, footer }: RegionalGuideProps) {
  const base = `/${locale}`;
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: title, description: dek, dateModified: checked, inLanguage: locale, author: { "@type": "Organization", name: "Dawnwalker Guide" } };
  const middleSectionIndex = Math.max(0, Math.floor((sections.length - 1) / 2));
  return <main className="doc-shell" lang={locale}><article className="doc"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="doc-dek">{dek}</p><p className="checked">{checkedLabel}: {checked}</p><ContentAd />{sections.map((section, index) => <Fragment key={section.title}><section><h2>{section.title}</h2>{section.body}</section>{index === middleSectionIndex && <NativeContentAd />}</Fragment>)}<section><h2>{sourcesLabel}</h2><ul className="sources">{sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label} ↗</a></li>)}</ul></section></article><footer><a className="brand" href={base}>Dawnwalker <span>Guide</span></a><p>{footer}</p></footer><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></main>;
}

import type { Metadata } from "next";
import { Fragment } from "react";
import { MiddleAd } from "./ad-slot";

export type GuideSection = { title: string; body: React.ReactNode };
export function guideMetadata(title: string, description: string, path: string, keywords: string[]): Metadata {
  return { title: { absolute: title }, description, keywords, alternates: { canonical: path }, openGraph: { title, description, url: path, images: ["/og.png"] }, twitter: { card: "summary_large_image", title, description, images: ["/og.png"] } };
}
export function GuidePage({ eyebrow, title, dek, checked, sections, sources }: { eyebrow: string; title: string; dek: string; checked: string; sections: GuideSection[]; sources: { label: string; href: string }[] }) {
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: title, description: dek, dateModified: checked, author: { "@type": "Organization", name: "DawnArchive" } };
  const middleIndex = Math.max(0, Math.ceil(sections.length / 2) - 1);
  return <main className="doc-shell"><nav className="doc-nav"><a className="brand" href="/">DAWN<span>ARCHIVE</span></a><div><a href="/release-date">Release</a><a href="/platforms">Platforms</a><a href="/romance">Romance</a></div></nav><article className="doc"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="doc-dek">{dek}</p><p className="checked">Last checked: {checked} · <span>Facts and sources are updated when they change.</span></p>{sections.map((section, index) => <Fragment key={section.title}><section><h2>{section.title}</h2>{section.body}</section>{index === middleIndex && <MiddleAd />}</Fragment>)}<section><h2>Sources</h2><ul className="sources">{sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label} ↗</a></li>)}</ul></section></article><footer><a className="brand" href="/">Dawn<span>Archive</span></a><p>Unofficial fan guide. <a href="/privacy">Privacy</a> · <a href="https://github.com/wencun/dawnwalker.cc/issues" target="_blank" rel="noreferrer">Corrections & feedback</a></p></footer><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></main>;
}

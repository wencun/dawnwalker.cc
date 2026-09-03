import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { ContentAd, NativeContentAd } from "./ad-slot";

export type GuideSection = { title: string; body: React.ReactNode };
export type GuideNextStep = { label: string; href: string; description: string };
export function guideMetadata(title: string, description: string, path: string, keywords: string[], polishPath?: string): Metadata {
  return {
    title: { absolute: title }, description, keywords,
    alternates: { canonical: path, languages: polishPath ? { en: path, pl: polishPath, ru: polishPath.replace("/pl", "/ru"), cs: polishPath.replace("/pl", "/cs"), "x-default": path } : undefined },
    openGraph: { title, description, url: path, images: ["/og.png"] },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}
export function GuidePage({ eyebrow, title, dek, checked, sections, sources, faqs, nextSteps, nativeAdAfter, showAds = true, quickAnswer }: { eyebrow: string; title: string; dek: string; checked: string; sections: GuideSection[]; sources: { label: string; href: string }[]; polishPath?: string; faqs?: { question: string; answer: string }[]; nextSteps?: GuideNextStep[]; nativeAdAfter?: string; showAds?: boolean; quickAnswer?: React.ReactNode }) {
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: title, description: dek, dateModified: checked, author: { "@type": "Organization", name: "Dawnwalker Guide" } };
  const faqSchema = faqs?.length ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) } : undefined;
  const steps = nextSteps ?? [
    { label: "Check release and unlock times", href: "/release-times", description: "Find the PC or console rule for your region." },
    { label: "Compare your PC requirements", href: "/can-i-run", description: "Check the official CPU, GPU, RAM and SSD baseline." },
    { label: "Track verified launch issues", href: "/known-issues", description: "See official notices and evidence-backed workarounds." },
  ];
  const middleSectionIndex = Math.max(0, Math.floor((sections.length - 1) / 2));
  return <main className="doc-shell"><article className="doc"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="doc-dek">{dek}</p><p className="checked">Last checked: {checked} · <span>Facts and sources are updated when they change.</span></p>{quickAnswer}{showAds && <ContentAd />}<aside className="reader-next" aria-label="Next steps"><p className="eyebrow">WHAT TO DO NEXT</p><h2>Choose your next answer.</h2><div>{steps.map((step, index) => <Link key={step.href} href={step.href}><span>0{index + 1}</span><b>{step.label}</b><small>{step.description}</small></Link>)}</div></aside>{sections.map((section, index) => { const insertMidPageAd = nativeAdAfter ? nativeAdAfter === section.title : index === middleSectionIndex; return <Fragment key={section.title}><section><h2>{section.title}</h2>{section.body}</section>{showAds && insertMidPageAd && <NativeContentAd />}</Fragment>; })}<section><h2>Sources</h2><ul className="sources">{sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label} ↗</a></li>)}</ul></section></article><footer><Link className="brand" href="/">Dawnwalker <span>Guide</span></Link><p>Unofficial fan guide. <Link href="/privacy">Privacy</Link> · <a href="https://github.com/wencun/dawnwalker.cc/issues" target="_blank" rel="noreferrer">Corrections & feedback</a></p></footer><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />{faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}</main>;
}

import type { Metadata } from "next";
import { Fragment } from "react";
import { MiddleAd } from "./ad-slot";

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
export function GuidePage({ eyebrow, title, dek, checked, sections, sources, polishPath = "/pl", faqs, nextSteps }: { eyebrow: string; title: string; dek: string; checked: string; sections: GuideSection[]; sources: { label: string; href: string }[]; polishPath?: string; faqs?: { question: string; answer: string }[]; nextSteps?: GuideNextStep[] }) {
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: title, description: dek, dateModified: checked, author: { "@type": "Organization", name: "Dawnwalker Guide" } };
  const faqSchema = faqs?.length ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) } : undefined;
  const steps = nextSteps ?? [
    { label: "Check release and unlock times", href: "/release-times", description: "Find the PC or console rule for your region." },
    { label: "Compare your PC requirements", href: "/can-i-run", description: "Check the official CPU, GPU, RAM and SSD baseline." },
    { label: "Track verified launch issues", href: "/known-issues", description: "See official notices and evidence-backed workarounds." },
  ];
  const middleIndex = Math.max(0, Math.ceil(sections.length / 2) - 1);
  return <main className="doc-shell"><article className="doc"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="doc-dek">{dek}</p><p className="checked">Last checked: {checked} · <span>Facts and sources are updated when they change.</span></p><aside className="reader-next" aria-label="Next steps"><p className="eyebrow">WHAT TO DO NEXT</p><h2>Choose your next answer.</h2><div>{steps.map((step, index) => <a key={step.href} href={step.href}><span>0{index + 1}</span><b>{step.label}</b><small>{step.description}</small></a>)}</div></aside>{sections.map((section, index) => <Fragment key={section.title}><section><h2>{section.title}</h2>{section.body}</section>{index === middleIndex && <MiddleAd />}</Fragment>)}<section><h2>Sources</h2><ul className="sources">{sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label} ↗</a></li>)}</ul></section></article><footer><a className="brand" href="/">Dawnwalker <span>Guide</span></a><p>Unofficial fan guide. <a href="/privacy">Privacy</a> · <a href="https://github.com/wencun/dawnwalker.cc/issues" target="_blank" rel="noreferrer">Corrections & feedback</a></p></footer><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />{faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}</main>;
}

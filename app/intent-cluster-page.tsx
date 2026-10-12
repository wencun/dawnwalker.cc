import Link from "next/link";
import { GuidePage } from "./guide-page";

type IntentCluster = { eyebrow: string; title: string; dek: string; answer: string; keywords: string; related: { href: string; label: string; description: string }[]; checks: string[] };

export function IntentClusterPage({ cluster }: { cluster: IntentCluster }) {
  return <GuidePage eyebrow={cluster.eyebrow} title={cluster.title} dek={cluster.dek} checked="October 12, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER</span><p><b>{cluster.answer}</b> Check the current quest log, item prompt or patch version before treating an old clip as a universal answer.</p></div>}
    faqs={[{ question: `What does this ${cluster.title} guide cover?`, answer: cluster.keywords }, { question: "How should I verify a route or choice?", answer: "Use the active objective, the current game version and a manual save before an irreversible outcome." }]}
    nextSteps={cluster.related} sources={[{ label: "Dawnwalker Guide — Walkthrough", href: "/walkthrough" }, { label: "Dawnwalker Guide — Patch notes", href: "/patch-notes" }]}
    sections={[{ title: "Searches this page answers", body: <p>{cluster.keywords}</p> }, { title: "Use this guide safely", body: <ol>{cluster.checks.map((check) => <li key={check}>{check}</li>)}</ol> }, { title: "Related answers", body: <p>{cluster.related.map((item, index) => <span key={item.href}>{index > 0 ? " · " : ""}<Link href={item.href}>{item.label}</Link></span>)}</p> }]}
  />;
}

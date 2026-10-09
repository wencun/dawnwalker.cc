import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Blood of Dawnwalker Armor Guide: Heavy, Medium, Early Armor & Proficiency",
  "Blood of Dawnwalker armor guide for heavy, medium and early armor, proficiency and components. Compare armor mechanics separately from the best legendary set routes.",
  "/armor-guide",
  ["blood dawnwalker armor", "blood of dawnwalker heavy armor manual", "blood of dawnwalker armor proficiency", "blood of dawnwalker cover armor", "blood of dawnwalker heavy armor", "blood of dawnwalker medium armor", "blood of dawnwalker armor components", "blood of dawnwalker early armor"],
);

export default function ArmorGuidePage() {
  return <GuidePage
    eyebrow="ARMOR GUIDE · TYPES, COMPONENTS AND EARLY GEAR"
    title="Blood of Dawnwalker armor guide: heavy, medium, early gear and proficiency"
    dek="Use this page for armor-system questions, early-game equipment and components. For the strongest documented sets and route choices, use the separate best-armor guide."
    checked="October 9, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · ARMOR</span><p><b>Do not wait for legendary armor before upgrading your current gear.</b> Use early equipment that supports your build, then plan the Arbiter or Pieter&apos;s Garb routes when their quests become available.</p></div>}
    faqs={[{ question: "Is there heavy or medium armor in Blood of Dawnwalker?", answer: "Treat weight-class labels and their exact penalties as current-build information. Compare the in-game item stats instead of assuming a familiar RPG system applies unchanged." }, { question: "How does armor proficiency work?", answer: "Only rely on an explicit in-game proficiency description. A set bonus, required stat or weapon preference is not automatically an armor-proficiency system." }, { question: "Where do I find armor components?", answer: "The Arbiter route has dedicated components and a quest sequence; use its walkthrough rather than searching generic map markers." }]}
    nextSteps={[{ label: "Compare legendary sets", href: "/best-armor", description: "Choose between the confirmed high-value routes." }, { label: "Find Arbiter components", href: "/a-bulwark-against-darkness", description: "Complete the four-component quest." }, { label: "Plan a build", href: "/best-builds", description: "Match armor to sword, vampire or defensive play." }]}
    sources={[{ label: "Dawnwalker Guide — best armor", href: "/best-armor" }, { label: "Dawnwalker Guide — Arbiter armor components", href: "/a-bulwark-against-darkness" }]}
    sections={[{ title: "Early armor and armor types", body: <div className="fact-grid"><p><b>Early armor</b>Prioritise protection and a reliable upgrade path over a rumoured legendary drop.</p><p><b>Heavy and medium labels</b>Read the current item card for real effects, requirements and trade-offs.</p><p><b>Proficiency</b>Only treat it as a mechanic when the game explicitly names it.</p><p><b>Cover armor</b>Use the game&apos;s exact item and system wording; do not import terminology from another RPG.</p></div> }, { title: "Armor components and late-game sets", body: <p>For a repeatable component route, use <Link href="/a-bulwark-against-darkness">A Bulwark Against Darkness</Link>. For the recommendation itself, use <Link href="/best-armor">best armor</Link>. Keeping those intents separate gives players a faster answer and avoids burying the component checklist in a broad ranking page.</p> }, { title: "Armor keyword coverage", body: <p>This page targets generic armor, heavy armor, medium armor, early armor, armor proficiency, cover armor and armor components. It complements, rather than replaces, the legendary-set comparison.</p> }]}
  />;
}

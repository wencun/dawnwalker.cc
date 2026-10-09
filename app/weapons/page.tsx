import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Blood of Dawnwalker Weapons: All Weapons, Legendary, Early & Upgrades",
  "Blood of Dawnwalker weapons guide for early, unique and legendary weapons, switching weapons and upgrades. Use verified quest routes instead of incomplete item lists.",
  "/weapons",
  ["blood of dawnwalker weapons", "blood of dawnwalker all weapons", "blood of dawnwalker weapons list", "blood of dawnwalker legendary weapons", "blood of dawnwalker early weapons", "blood of dawnwalker unique weapons", "blood of dawnwalker switch weapons", "blood of dawnwalker upgrade weapons", "blood of dawnwalker change weapons", "blood of dawnwalker best weapons"],
);

export default function WeaponsPage() {
  return <GuidePage
    eyebrow="WEAPON GUIDE · LISTS, SWITCHING AND UPGRADES"
    title="Blood of Dawnwalker weapons: early, unique, legendary and upgrades"
    dek="A spoiler-aware weapon hub for players comparing early gear, unique rewards and late-game targets without mistaking one sword recommendation for a complete weapon list."
    checked="October 9, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · WEAPONS</span><p><b>Choose a weapon style you can use consistently, then pursue a proven quest reward.</b> The Imbued Sword of St. Mihai is a strong late-game sword target, while early-game weapon decisions should prioritise survivability and upgrade availability.</p></div>}
    faqs={[{ question: "What is the best weapon in Blood of Dawnwalker?", answer: "St. Mihai's sword is the strongest specific sword route currently documented, but it is not a universal ranking of every weapon or playstyle." }, { question: "How do you upgrade weapons?", answer: "Follow the item's related quest and forge requirements. The St. Mihai route is covered separately because it needs shards and a specific crafting progression." }, { question: "Can you switch weapons?", answer: "Use the current in-game equipment controls and compare weapons at similar upgrade levels. Exact controls can differ by platform and input setup." }]}
    nextSteps={[{ label: "Get St. Mihai's sword", href: "/best-sword", description: "Read the focused late-game sword recommendation." }, { label: "Collect sword shards", href: "/forge-it-anew", description: "Complete the upgrade route." }, { label: "Choose armor", href: "/best-armor", description: "Match protection and bonuses to your weapon style." }]}
    sources={[{ label: "Dawnwalker Guide — best sword", href: "/best-sword" }, { label: "Dawnwalker Guide — Forge It Anew", href: "/forge-it-anew" }, { label: "Bandai Namco — gameplay reveal recap", href: "https://en.bandainamcoent.eu/dawnwalker/news/the-blood-of-dawnwalker-gameplay-reveal-recap" }]}
    sections={[{ title: "Weapon list: what can be confirmed", body: <div className="fact-grid"><p><b>Early weapons</b>Use obtainable gear and upgrades rather than delaying progress for unverified loot tables.</p><p><b>Unique and legendary rewards</b>Prefer named quest routes with clear prerequisites and a recorded reward.</p><p><b>Weapon switching</b>Keep controls and platforms separate; a controller issue is not a weapon-system issue.</p><p><b>Upgrades</b>Compare weapons at equivalent upgrade levels before calling one objectively better.</p></div> }, { title: "Best weapons versus best sword", body: <p>The <Link href="/best-sword">best sword guide</Link> answers the focused question of how to obtain St. Mihai&apos;s sword. This page covers broader all-weapons, early-weapons, legendary-weapons and upgrade searches, then sends players to a dedicated route when the evidence is specific enough.</p> }, { title: "Avoid incomplete weapon lists", body: <p>A complete list needs each weapon&apos;s type, acquisition method, upgrade state and current patch verification. This hub deliberately labels unverified categories instead of inventing a full catalogue from screenshots or old videos.</p> }]}
  />;
}

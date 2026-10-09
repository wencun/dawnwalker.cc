import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Best Builds: Skills, Perks, Gear & Vampire Setup",
  "Plan the best Blood of Dawnwalker build for sword, vampire, witchcraft or tank play. Compare skills, perks, armor, weapons and gear routes without wasting scarce quest time.",
  "/best-builds",
  ["blood dawnwalker best build", "blood dawnwalker best skills", "blood dawnwalker best perks", "blood dawnwalker best gear", "blood of dawnwalker best witchcraft build", "blood of dawnwalker best sword build", "best vampire build blood of dawnwalker"],
);

export default function BestBuildsPage() {
  return <GuidePage
    eyebrow="BUILD GUIDE · SKILLS, PERKS AND GEAR"
    title="The Blood of Dawnwalker best builds: sword, vampire and witchcraft setups"
    dek="There is no single best build for every route. Use this page to choose a sword, vampire, witchcraft or defensive setup, then jump to the exact gear and quest pages that support it."
    checked="October 9, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · BEST BUILD</span><p><b>For a first playthrough, use a flexible sword build with survivability perks, then add vampire tools at night.</b> Commit to specialist witchcraft or glass-cannon damage only after you know which quest routes and armor rewards you can afford.</p></div>}
    faqs={[
      { question: "What is the best build in Blood of Dawnwalker?", answer: "A balanced sword build with survivability is the safest first-playthrough recommendation. Specialist vampire, witchcraft and tank builds depend on gear, time cost and player comfort." },
      { question: "What is the best sword build?", answer: "Use St. Mihai's sword route as the late-game weapon target, then pair it with stamina, parry and survivability choices instead of chasing only raw damage." },
      { question: "What is the best vampire build?", answer: "A vampire build should prioritize night mobility, sustain and ability uptime. Keep a daytime fallback because some quest steps and fights do not reward a pure night-only plan." },
    ]}
    nextSteps={[
      { label: "Get the best sword", href: "/best-sword", description: "Follow the St. Mihai and Forge It Anew route." },
      { label: "Choose armor", href: "/best-armor", description: "Compare Arbiter, Pieter's Garb and build trade-offs." },
      { label: "Find sword shards", href: "/forge-it-anew", description: "Use the exact shard route before upgrading." },
      { label: "Plan perks from choices", href: "/choices", description: "Avoid locking a build behind a dialogue branch." },
    ]}
    sources={[
      { label: "Dawnwalker Guide — Best sword route", href: "/best-sword" },
      { label: "Dawnwalker Guide — Best armor sets", href: "/best-armor" },
      { label: "Bandai Namco — gameplay reveal recap", href: "https://en.bandainamcoent.eu/dawnwalker/news/the-blood-of-dawnwalker-gameplay-reveal-recap" },
    ]}
    sections={[
      { title: "Best build by playstyle", body: <table className="editorial-table"><caption>Choose the build that matches how you actually fight</caption><thead><tr><th scope="col">Build</th><th scope="col">Best for</th><th scope="col">Core priority</th><th scope="col">Start here</th></tr></thead><tbody><tr><th scope="row">Balanced sword</th><td>First playthrough, bosses and main quests</td><td>Stamina, parry safety, reliable armor</td><td><Link href="/best-sword">Best sword</Link></td></tr><tr><th scope="row">Vampire</th><td>Night routes, mobility and sustain</td><td>Ability uptime, essence and safe healing</td><td><Link href="/combat-how-to">Claws and healing</Link></td></tr><tr><th scope="row">Witchcraft</th><td>Players who like control and utility</td><td>Setup time, resource management and safe exits</td><td><Link href="/choices">Choice planning</Link></td></tr><tr><th scope="row">Tank / armor</th><td>Learning bosses or playing defensively</td><td>Protection, health and stagger resistance</td><td><Link href="/best-armor">Best armor</Link></td></tr></tbody></table> },
      { title: "Best skills and perks to prioritize", body: <div className="fact-grid"><p><b>Survival first</b>Take healing, damage reduction or mistake-forgiveness perks before narrow damage bonuses.</p><p><b>Weapon consistency</b>Pick perks that support the weapon you actually use, especially stamina and recovery for heavier swords.</p><p><b>Night tools</b>Vampire skills are strongest when a route lets you use them repeatedly, not when a quest forces daytime problem solving.</p><p><b>Quest rewards</b>Some powerful upgrades are tied to named quests, so use <Link href="/quests">quest routing</Link> before spending time.</p></div> },
      { title: "Best gear route for most players", body: <ol><li><b>Start with survivability.</b> Upgrade whatever keeps you alive instead of waiting for perfect late-game gear.</li><li><b>Target the Arbiter route.</b> Use <Link href="/a-bulwark-against-darkness">A Bulwark Against Darkness</Link> if you want a strong armor goal.</li><li><b>Target St. Mihai's sword.</b> Use <Link href="/forge-it-anew">Forge It Anew</Link> for the sword-shard route.</li><li><b>Keep one branch save.</b> Builds are affected by quest rewards and choices, so preserve a save before major commitments.</li></ol> },
      { title: "Search intent this page covers", body: <p>This page is the landing page for best perks, best skills, best gear, best sword build, best witchcraft build, best vampire build and Reddit-style build questions. Specific item routes stay on focused pages so Google sees one clear answer instead of several competing thin pages.</p> },
    ]}
  />;
}

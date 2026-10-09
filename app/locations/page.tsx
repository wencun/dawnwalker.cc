import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Blood of Dawnwalker Locations: NPCs, Items, Silk, Silver, Shovel & Quest Places",
  "Find Blood of Dawnwalker NPCs, items and quest locations: Lacra, Ocha, Ambrus, Albertus, sword shards, quicksilver, silk threads, shovel, silver and more.",
  "/locations",
  ["blood dawnwalker where", "blood of dawnwalker where is lacra", "blood of dawnwalker where to find silk threads", "blood of dawnwalker where to get shovel", "blood of dawnwalker where is ambrus", "blood of dawnwalker where to find silver", "blood of dawnwalker where are the sword shards"],
);

export default function LocationsPage() {
  return <GuidePage
    eyebrow="LOCATION INDEX · NPCS, ITEMS AND QUEST ROUTES"
    title="Blood of Dawnwalker locations: NPCs, items and where-to-find answers"
    dek="Use this index for where-is and where-to-find searches. It points confirmed answers to full guides and marks thin or unverified location questions so they do not become weak standalone pages."
    checked="October 9, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · LOCATIONS</span><p><b>For verified high-demand locations, use the focused pages: Lacra, sword shards, quicksilver, silver trader and Arbiter armor.</b> NPC-only searches such as Albertus, Ambrus, Farkas or Bakir should be grouped here until there is enough evidence for a full route page.</p></div>}
    faqs={[
      { question: "Where is Lacra in Blood of Dawnwalker?", answer: "Use the A Friend Like This guide for the north-east Svartrau alley, roof trail and Lacra encounter route." },
      { question: "Where are the sword shards?", answer: "The Forge It Anew guide covers all three sword shards and the St. Mihai route." },
      { question: "Where can I sell silver or gold items?", answer: "Use the Silver Trader guide for contraband silver. Generic sell-items and gold searches should check merchant availability in the current patch." },
    ]}
    nextSteps={[
      { label: "Find Lacra", href: "/a-friend-like-this", description: "Follow the Svartrau trail and night route." },
      { label: "Find sword shards", href: "/forge-it-anew", description: "Collect all three shards for St. Mihai's sword." },
      { label: "Find quicksilver", href: "/flask-of-quicksilver", description: "Use the flask route and prerequisite checks." },
      { label: "Sell silver", href: "/silver-trader", description: "Reach the Svartrau Silver Trader." },
    ]}
    sources={[
      { label: "Dawnwalker Guide — A Friend Like This", href: "/a-friend-like-this" },
      { label: "Dawnwalker Guide — Forge It Anew", href: "/forge-it-anew" },
      { label: "Dawnwalker Guide — Silver Trader", href: "/silver-trader" },
      { label: "Dawnwalker Guide — Flask of Quicksilver", href: "/flask-of-quicksilver" },
    ]}
    sections={[
      { title: "Confirmed location answers", body: <table className="editorial-table"><caption>Open the full route when a location has enough evidence</caption><thead><tr><th scope="col">Search</th><th scope="col">Best page</th><th scope="col">Status</th></tr></thead><tbody><tr><th scope="row">Lacra / where to find Lacra</th><td><Link href="/a-friend-like-this">A Friend Like This</Link></td><td>Full quest route</td></tr><tr><th scope="row">Sword shards</th><td><Link href="/forge-it-anew">Forge It Anew</Link></td><td>Full item route</td></tr><tr><th scope="row">Quicksilver / flask</th><td><Link href="/flask-of-quicksilver">Flask of Quicksilver</Link></td><td>Full item route</td></tr><tr><th scope="row">Silver trader / sell silver</th><td><Link href="/silver-trader">Silver Trader</Link></td><td>Merchant route</td></tr><tr><th scope="row">Arbiter armor pieces</th><td><Link href="/a-bulwark-against-darkness">A Bulwark Against Darkness</Link></td><td>Gear route</td></tr></tbody></table> },
      { title: "NPC searches to keep on one index page", body: <div className="fact-grid"><p><b>Albertus</b>Keep as an indexed location note until a quest route needs its own page.</p><p><b>Premysl / Farkas / Bakir</b>Group here unless the search volume supports full walkthroughs.</p><p><b>Ambrus</b>Best handled with choices if the query is about consequence, not map location.</p><p><b>Ocha</b>Use <Link href="/heart-wants-what-it-wants">Ocha&apos;s route</Link> for choice-driven searches.</p></div> },
      { title: "Item searches that need validation before standalone pages", body: <p>Bundle of silk threads, silk, shovel, Volks knife, shiny teeth, artery strike and generic silver/gold selling are useful SEO targets, but they should stay in this location index until the site can answer each one with a repeatable route, prerequisite and screenshot-quality evidence. That avoids thin pages and gives Google one stronger hub.</p> },
      { title: "Location keyword coverage", body: <p>This page is built to catch broad where, where to find, where is, where to get, where to sell and named-NPC searches, then pass users to a focused guide when the answer is already proven.</p> },
    ]}
  />;
}

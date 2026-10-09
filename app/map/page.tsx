import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Blood of Dawnwalker Map: Full Map, Size, Treasure Maps & MapGenie",
  "Blood of Dawnwalker map guide: what is confirmed about the full map and map size, plus reliable routes for Briar Sloughs treasure, silver caches and map tools.",
  "/map",
  ["blood dawnwalker map", "blood dawnwalker map size", "blood of dawnwalker full map", "blood of the dawnwalker map genie", "blood of dawnwalker mapgenie", "blood of dawnwalker map silver cache", "blood of dawnwalker treasure map hidden stash", "blood of dawnwalker treasure map briar sloughs"],
);

export default function MapPage() {
  return <GuidePage
    eyebrow="MAP GUIDE · EXPLORATION AND TREASURE"
    title="Blood of Dawnwalker map: full map, size and treasure routes"
    dek="Use the map for route planning, not invented size comparisons. This guide separates confirmed regions and repeatable treasure routes from third-party interactive-map markers."
    checked="October 9, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · MAP</span><p><b>Vale Sangora is an open world, but an official square-kilometre map size has not been published.</b> Use named regions and verified quest routes for navigation; do not treat an unofficial MapGenie pin as proof that a cache is available in every patch or quest state.</p></div>}
    faqs={[{ question: "How big is the Blood of Dawnwalker map?", answer: "The publisher confirms an open-world Vale Sangora setting, but has not published an official square-kilometre measurement or a verified comparison with another game's map." }, { question: "Is there a full Blood of Dawnwalker map?", answer: "Interactive community maps can help exploration, but the in-game quest state and a repeatable route are more reliable for a specific item or hidden stash." }, { question: "Where is the Briar Sloughs treasure map or silver cache?", answer: "Treat cache and treasure-map markers as patch-sensitive until the exact prerequisite, route and reward are confirmed. Use named item and quest guides when available." }]}
    nextSteps={[{ label: "Find quest locations", href: "/locations", description: "Locate NPCs, items, shards and merchants." }, { label: "Find sword shards", href: "/forge-it-anew", description: "Use all three verified shard landmarks." }, { label: "Get Arbiter armor", href: "/a-bulwark-against-darkness", description: "Plan the component route before exploring." }]}
    sources={[{ label: "Bandai Namco — The Blood of Dawnwalker", href: "https://www.bandainamcoent.com/games/dawnwalker" }, { label: "Dawnwalker Guide — locations index", href: "/locations" }]}
    sections={[{ title: "Map size and full-map claims", body: <div className="fact-grid"><p><b>Confirmed</b>Vale Sangora is the game's open-world setting, with distinct environments and settlements.</p><p><b>Not confirmed</b>No official map-area measurement supports a precise map-size comparison.</p><p><b>Use interactive maps carefully</b>MapGenie-style tools are discovery aids, not an authority on quest-state requirements.</p><p><b>Best route</b>Follow a named quest or item guide once your target has a verified prerequisite.</p></div> }, { title: "Treasure, caches and hidden stashes", body: <p>A treasure-map search has high intent, but it needs a precise region, prerequisite and reward to be useful. Until a cache is verified at that standard, avoid wasting time sweeping every marker. For proven routes, start with the <Link href="/locations">locations index</Link>, then open the linked quest guide for sword shards, quicksilver or armor components.</p> }, { title: "Map keyword coverage", body: <p>This page covers map, full map, map size, MapGenie, road map, silver cache, hidden stash and Briar Sloughs treasure-map searches. It will expand only when routes can be reproduced on the current game version.</p> }]}
  />;
}

import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Blood of Dawnwalker Trophy Guide & Roadmap: Platinum, Missables",
  "Blood of Dawnwalker trophy guide and roadmap: current Platinum estimate, 47 offline trophies, 18 missable flags, difficulty requirement and a save-first completion plan.",
  "/trophy-guide",
  ["The Blood of Dawnwalker trophy guide", "Blood of Dawnwalker trophies", "Blood of Dawnwalker platinum guide", "Blood of Dawnwalker missable trophies", "Blood of Dawnwalker 100 percent"],
);

export default function TrophyGuidePage() {
  return <GuidePage
    eyebrow="TROPHY ROADMAP · LAUNCH-BUILD STATUS"
    title="The Blood of Dawnwalker trophy guide and Platinum roadmap"
    dek="The current launch roadmap lists 47 offline trophies and an estimated 40–60 hours to Platinum. It flags 18 trophies as missable, but recommends rotating manual saves so route choices can be revisited instead of forcing a blind second run."
    checked="September 8, 2026"
    quickAnswer={<div className="fix-callout"><span>PLATINUM QUICK PLAN</span><p><b>Use a different manual save every in-game day.</b> The current launch roadmap lists 47 offline trophies, 18 missable flags and a Duelist-difficulty completion requirement. A save rotation is safer than following an unverified “nothing is missable” claim.</p></div>}
    faqs={[
      { question: "How many trophies are in The Blood of Dawnwalker?", answer: "The current launch roadmap lists 47 offline trophies: one Platinum, three Gold, five Silver and 38 Bronze. Patch or platform updates can change the final list." },
      { question: "Are Blood of Dawnwalker trophies missable?", answer: "The current roadmap flags 18 trophies as missable, while noting that frequent manual-save rotation can let players reload many branches rather than lose them permanently." },
      { question: "Does difficulty affect Dawnwalker trophies?", answer: "The current launch roadmap lists a Duelist-difficulty completion requirement. Check the current in-game trophy text and platform list before committing to a difficulty plan." },
    ]}
    nextSteps={[
      { label: "Plan your ending saves", href: "/endings", description: "Protect alternate outcomes before the final commitment." },
      { label: "Understand the 30-day deadline", href: "/what-happens-after-30-days", description: "Keep the family-rescue route safe for time-sensitive trophies." },
      { label: "Find the Silver Trader", href: "/silver-trader", description: "Use the merchant route when a trophy or objective requires silver." },
    ]}
    sources={[
      { label: "PowerPyx — launch trophy guide and roadmap", href: "https://www.powerpyx.com/the-blood-of-dawnwalker-trophy-guide-roadmap/" },
      { label: "PowerPyx — all endings and save planning", href: "https://www.powerpyx.com/the-blood-of-dawnwalker-all-endings-guide/" },
    ]}
    sections={[
      { title: "Current Blood of Dawnwalker trophy roadmap", body: <div className="fact-grid"><p><b>Estimated Platinum time</b>40–60 hours in the current launch roadmap.</p><p><b>Online trophies</b>The current roadmap lists none.</p><p><b>Missable flags</b>18 trophies are marked missable, subject to the roadmap&apos;s save-reload advice.</p><p><b>Difficulty</b>The roadmap lists one Duelist-difficulty completion requirement.</p></div> },
      { title: "The save-first trophy plan", body: <ol><li><b>Use a new manual slot each in-game day:</b> do not rely on one rolling autosave for a choice-heavy run.</li><li><b>Keep a pre-day-30 save:</b> this protects the family-rescue route and its related outcomes.</li><li><b>Keep a pre-finale save:</b> make a second branch point before the final story commitment.</li><li><b>Check trophy conditions before a decisive quest:</b> use the current platform trophy text and a versioned guide, not a copied launch-week list.</li><li><b>Attempt Duelist deliberately:</b> verify the exact completion condition before assuming a later difficulty switch counts.</li></ol> },
      { title: "What “missable” means in this roadmap", body: <p>A trophy can be marked missable because one route, choice or time limit can close its condition. That does not always mean a full second playthrough is unavoidable: the current roadmap recommends a broad manual-save rotation so you can reload an earlier decision. Keep that distinction clear when planning a 100% run.</p> },
      { title: "Trophy roadmap versus a full collectible list", body: <p>This page is a planning guide, not a claim that every collectible location has been independently mapped here. Use focused walkthrough pages—for example, <Link href="/forge-it-anew">sword shards</Link> or <Link href="/silver-trader">the Silver Trader</Link>—when one trophy requires a named quest, item or merchant state.</p> },
    ]}
  />;
}

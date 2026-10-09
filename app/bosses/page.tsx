import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Blood of Dawnwalker Bosses: Order, Locations, Hardest Fights & Final Boss",
  "Blood of Dawnwalker bosses guide covering boss order, locations, first boss, prologue boss, hardest boss, secret boss searches and final boss preparation.",
  "/bosses",
  ["blood dawnwalker boss", "blood of dawnwalker bosses", "blood of dawnwalker final boss", "blood of dawnwalker first boss", "blood of dawnwalker prologue boss", "blood of dawnwalker hardest boss", "blood of dawnwalker boss order", "blood of dawnwalker boss location"],
);

export default function BossesPage() {
  return <GuidePage
    eyebrow="BOSS GUIDE · ORDER AND PREPARATION"
    title="Blood of Dawnwalker bosses: order, locations and hardest fights"
    dek="Use this boss hub to prepare builds, route saves and open specific fight guides. Full boss pages should be created only when a fight has enough mechanics and search volume to stand alone."
    checked="October 9, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · BOSSES</span><p><b>Start with a stable sword-and-survival build, keep a manual save before major quest fights, and open the Xanthe guide for the site's current dedicated boss walkthrough.</b> Final boss and secret boss searches are better served by this hub until exact route data is fully verified.</p></div>}
    faqs={[
      { question: "What is the hardest boss in Blood of Dawnwalker?", answer: "The site should treat hardest-boss claims as build-dependent until it has tested every major fight. Use the boss hub for preparation and the Xanthe guide for the current dedicated fight page." },
      { question: "Is there a boss order?", answer: "Boss order depends on quest routing and the 30-day time system, so follow quest prerequisites and preserve saves before major commitments." },
      { question: "Where is the Xanthe boss fight?", answer: "Use the Xanthe boss guide for the dedicated route and fight preparation." },
    ]}
    nextSteps={[
      { label: "Beat Xanthe", href: "/xanthe-boss-guide", description: "Use the current dedicated boss guide." },
      { label: "Prepare a build", href: "/best-builds", description: "Choose sword, vampire or defensive priorities." },
      { label: "Upgrade gear", href: "/best-armor", description: "Pick armor before a hard fight." },
      { label: "Plan endings", href: "/endings", description: "Avoid boss saves that lock route outcomes." },
    ]}
    sources={[
      { label: "Dawnwalker Guide — Xanthe boss guide", href: "/xanthe-boss-guide" },
      { label: "Dawnwalker Guide — Best builds", href: "/best-builds" },
      { label: "Dawnwalker Guide — Endings", href: "/endings" },
    ]}
    sections={[
      { title: "Boss preparation checklist", body: <ol><li><b>Save before the quest commitment.</b> Boss fights can sit behind choice or time gates.</li><li><b>Check healing and controls.</b> Do not fight a boss while carrying a controller or settings problem.</li><li><b>Use a build that matches the arena.</b> A pure night-mobility plan is weaker if the fight limits space or timing.</li><li><b>Record the version.</b> Balance and bug fixes can change boss behavior.</li></ol> },
      { title: "Boss intent map", body: <table className="editorial-table"><caption>How to satisfy each boss search without creating thin pages</caption><thead><tr><th scope="col">Keyword type</th><th scope="col">Best answer format</th></tr></thead><tbody><tr><th scope="row">first boss / prologue boss</th><td>Short section here plus prologue walkthrough links.</td></tr><tr><th scope="row">Xanthe boss</th><td><Link href="/xanthe-boss-guide">Dedicated fight guide</Link>.</td></tr><tr><th scope="row">final boss</th><td>Spoiler-marked section linked to <Link href="/endings">endings</Link>.</td></tr><tr><th scope="row">secret boss</th><td>Index entry until route and reward are verified.</td></tr><tr><th scope="row">all bosses / boss order</th><td>Hub table that can expand as fights are verified.</td></tr></tbody></table> },
      { title: "Hardest boss depends on build", body: <p>A fight can be hardest because of damage, camera, adds, resource starvation or route timing. Until every fight is tested under the same patch, the strongest SEO answer is honest: prepare with survivability, use <Link href="/best-builds">build planning</Link>, then open the specific boss page when available.</p> },
      { title: "When to create a dedicated boss page", body: <p>Create a standalone page when a boss has distinct mechanics, a repeatable location, named rewards and enough search volume. Otherwise, keep the answer in this hub so Google sees one strong boss resource instead of several shallow pages.</p> },
    ]}
  />;
}

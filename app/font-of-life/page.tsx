import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Blood of Dawnwalker Font of Life Choices: Best Outcome for Anca",
  "The Blood of Dawnwalker Font of Life choices explained: use the Font yourself for the Witchcraft perk, let Anca use it for her outcome, or destroy it for Ancient Greaves.",
  "/font-of-life",
  ["Blood of Dawnwalker Font of Life", "The Blood of Dawnwalker Font of Life", "Font of Life choices Dawnwalker", "Should Anca use the Font of Life", "Stronger Than Achilles Dawnwalker", "Anca romance Font of Life"],
);

export default function FontOfLifePage() {
  return <GuidePage
    eyebrow="ANCA QUEST CHOICE · SPOILER WARNING"
    title="Font of Life choices: use it yourself, let Anca use it, or destroy it"
    dek="At the end of Stronger Than Achilles, the Font of Life is a permanent reward choice. Use it yourself for the Font of Life / Witchcraft perk, let Anca use it for her outcome, or destroy it for the Ancient Greaves. Save before choosing."
    checked="September 13, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · BEST FONT OF LIFE CHOICE</span><p><b>Choose based on the reward you want, not an assumed romance lock.</b> Using the Font yourself grants Coen&apos;s Font of Life / Witchcraft health-regeneration perk; letting Anca use it prioritizes her outcome; destroying it grants Ancient Greaves. The three rewards are mutually exclusive, so create a manual save first.</p></div>}
    faqs={[
      { question: "What happens if you use the Font of Life yourself?", answer: "Current choice guides report that Coen receives the Font of Life / Witchcraft perk, which regenerates human health during the day." },
      { question: "What happens if you let Anca use the Font of Life?", answer: "It gives Anca the Font outcome rather than Coen&apos;s perk. Use a manual save if you want to compare it with the other permanent reward branches." },
      { question: "What happens if you destroy the Font of Life?", answer: "Current guides list Ancient Greaves as the destroy-Font reward. It is mutually exclusive with using the Font yourself or letting Anca use it." },
    ]}
    nextSteps={[
      { label: "See all romance routes", href: "/romance", description: "Keep Anca&apos;s broader route separate from this permanent reward choice." },
      { label: "Follow Lacra&apos;s route", href: "/lacra-romance", description: "Use a separate page for the Mandrake decision and Lacra&apos;s quest order." },
      { label: "Protect ending choices", href: "/endings", description: "Use the pre-finale save plan for broader outcome planning." },
    ]}
    sources={[
      { label: "PC Gamer — should you let Anca use the Font?", href: "https://www.pcgamer.com/games/rpg/blood-of-dawnwalker-should-you-let-anca-use-the-font/" },
      { label: "FinalBoss — Font choices, rewards and Stronger Than Achilles context", href: "https://finalboss.io/the-blood-of-dawnwalker-ancas-font-choices-and-font-of-life-guide" },
      { label: "KeenGamer — Font of Life choices and outcomes", href: "https://www.keengamer.com/articles/guides/the-blood-of-dawnwalker-all-font-of-life-choices-and-outcomes/" },
    ]}
    sections={[
      { title: "Where Font of Life fits in Anca&apos;s route", body: <div className="fact-grid"><p><b>Route character</b>Font of Life belongs to Anca&apos;s late questline, not Lacra&apos;s or Crake&apos;s.</p><p><b>Quest point</b>Current guides place the decision at the end of Stronger Than Achilles.</p><p><b>Permanent fork</b>The Coen perk, Anca outcome and Ancient Greaves are mutually exclusive.</p><p><b>Why save</b>A manual save before the choice lets you compare the reward without replaying the route.</p></div> },
      { title: "All Font of Life outcomes", body: <table className="editorial-table"><caption>Choice and reward information is based on current walkthrough reporting; recheck after a patch.</caption><thead><tr><th scope="col">Choice</th><th scope="col">Reported result</th></tr></thead><tbody><tr><th scope="row">Use it yourself</th><td>Coen gains the Font of Life / Witchcraft perk, reported to regenerate human health during the day.</td></tr><tr><th scope="row">Let Anca use it</th><td>Prioritizes Anca&apos;s Font outcome instead of awarding Coen&apos;s perk.</td></tr><tr><th scope="row">Destroy it</th><td>Rewards Ancient Greaves instead of either Font outcome.</td></tr></tbody></table> },
      { title: "How do you choose safely?", body: <ol><li><b>Confirm Stronger Than Achilles is active:</b> use the quest log before interacting with the Font.</li><li><b>Make a manual save:</b> use a separate slot just before the dialogue choice.</li><li><b>Pick the reward you will use:</b> prioritize Coen&apos;s daytime health regeneration, Anca&apos;s story outcome or the Ancient Greaves.</li><li><b>Do not infer a romance lock:</b> the Font choice and Anca&apos;s complete romance route should be treated separately unless a current source proves a specific consequence.</li></ol> },
      { title: "Font choice versus the complete Anca romance", body: <p>The Font is a late Anca quest decision, but it is not a replacement for her full relationship route. For character order and broader planning, use the <Link href="/romance">romance overview</Link>. This page answers the more specific, high-intent search: which Font reward you receive and why you should save before choosing.</p> },
    ]}
  />;
}

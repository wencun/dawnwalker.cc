import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Blood of Dawnwalker Font of Life: Anca Quest & Romance Trigger",
  "Blood of Dawnwalker Font of Life guide: where it fits in Anca's route, what happens after the quest, and how to save before the Stronger Than Achilles romance trigger.",
  "/font-of-life",
  ["Blood of Dawnwalker Font of Life", "The Blood of Dawnwalker Font of Life", "Font of Life Anca quest", "Stronger Than Achilles Dawnwalker", "Anca romance Font of Life"],
);

export default function FontOfLifePage() {
  return <GuidePage
    eyebrow="ANCA QUEST ANSWER · ROMANCE SPOILERS"
    title="Blood of Dawnwalker Font of Life: Anca quest and romance trigger"
    dek="The Font of Life is part of Anca&apos;s late questline. Current romance routes place it inside Stronger Than Achilles; after dealing with the Font, return to the inn and save before the following conversation if you want to protect Anca&apos;s romance outcome."
    checked="September 8, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · FONT OF LIFE</span><p><b>Complete the Font of Life objective in Stronger Than Achilles, then return to the inn.</b> Current route guides identify the following conversation as Anca&apos;s romance trigger. Create a manual save before it if you want a safe branch point.</p></div>}
    faqs={[
      { question: "What is the Font of Life in Blood of Dawnwalker?", answer: "The Font of Life is part of Anca&apos;s late route in Stronger Than Achilles. Current romance guides connect completing that objective and the following inn conversation to her romance scene." },
      { question: "How do you trigger Anca&apos;s romance in Dawnwalker?", answer: "Complete Anca&apos;s route through Stronger Than Achilles and deal with the Font of Life. Current guides identify the following conversation at the inn as the romance trigger." },
      { question: "Should I save before the Font of Life quest?", answer: "Yes. Make a separate manual save before the Font objective and another before the inn conversation, especially if you want to preserve an alternate dialogue or romance outcome." },
    ]}
    nextSteps={[
      { label: "See all romance routes", href: "/romance", description: "Compare Anca, Lacra and Crake without mixing their route requirements." },
      { label: "Follow Lacra&apos;s route", href: "/lacra-romance", description: "Use a separate page for the Mandrake decision and Lacra&apos;s quest order." },
      { label: "Protect ending choices", href: "/endings", description: "Use the pre-finale save plan for broader outcome planning." },
    ]}
    sources={[
      { label: "PowerPyx — Anca romance route, Font of Life and Stronger Than Achilles", href: "https://www.powerpyx.com/the-blood-of-dawnwalker-all-romances-guide/" },
      { label: "PC Gamer — launch-build romance route context", href: "https://www.pcgamer.com/games/rpg/blood-of-dawnwalker-romances/" },
    ]}
    sections={[
      { title: "Where Font of Life fits in Anca&apos;s route", body: <div className="fact-grid"><p><b>Route character</b>Font of Life belongs to Anca&apos;s questline, not Lacra&apos;s or Crake&apos;s.</p><p><b>Late quest</b>Current guides place the objective within Stronger Than Achilles.</p><p><b>Next step</b>After dealing with the Font, return to the inn for the following conversation.</p><p><b>Why save</b>The conversation is cited as the romance trigger, so it is a useful manual-save point.</p></div> },
      { title: "How do you reach the Font of Life outcome safely?", body: <ol><li><b>Follow Anca&apos;s route in order:</b> complete the required earlier Anca quests rather than entering a late quest from a copied spoiler list.</li><li><b>Confirm Stronger Than Achilles is active:</b> check the quest log before treating a location or object as the Font objective.</li><li><b>Make a manual save before interacting:</b> use a separate slot before resolving the Font of Life step.</li><li><b>Return to the inn:</b> current route guides place the next romance-relevant conversation there.</li><li><b>Save again before dialogue:</b> preserve a branch point before confirming the conversation prompt.</li></ol> },
      { title: "Font of Life versus the complete Anca romance", body: <p>Finding the Font is not a substitute for the rest of Anca&apos;s questline. It is one late route step connected to Stronger Than Achilles. For the character roster and broader planning, use the <Link href="/romance">romance overview</Link>; this page stays focused on the Font objective and the save point after it.</p> },
    ]}
  />;
}

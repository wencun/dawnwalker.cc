import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Blood of Dawnwalker Odd Riddle Answer: Choose Left",
  "Odd Riddle answer in Blood of Dawnwalker: choose the left opening at Lunar Manor during The Lunar Game. Middle and right trigger the trap.",
  "/odd-riddle",
  [
    "The Blood of Dawnwalker Odd Riddle",
    "Blood of Dawnwalker odd riddle answer",
    "Dawnwalker Lunar Manor riddle left middle right",
    "The Lunar Game riddle solution Dawnwalker",
  ],
);

export default function OddRiddlePage() {
  return <GuidePage
    eyebrow="THE LUNAR GAME · SPOILER-LIGHT QUEST ANSWER"
    title="Blood of Dawnwalker Odd Riddle answer: choose left at Lunar Manor"
    dek="The Odd Riddle solution is the left opening. Choose left during The Lunar Game at Lunar Manor to open the gate; middle and right trigger the trap."
    checked="September 20, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · ODD RIDDLE</span><p><b>Choose the left opening at Lunar Manor.</b> The Odd Riddle makes the left choice sound dangerous, but it is the correct answer in The Lunar Game. The gate opens and the route continues. For another direct quest answer, use <Link href="/how-many-spoonfuls-of-herbs">the herbs recipe</Link>, <Link href="/help-the-sanzhani">Help the Sanzhani</Link> or the <Link href="/walkthrough">walkthrough hub</Link>.</p></div>}
    faqs={[
      { question: "What is the Odd Riddle answer in The Blood of Dawnwalker?", answer: "Choose the left opening at the Lunar Manor mechanism during The Lunar Game." },
      { question: "Should I choose left, middle or right in the Dawnwalker Odd Riddle?", answer: "Choose left. Published walkthroughs report that left opens the gate, while middle and right activate the trap." },
      { question: "Why is the left answer correct in the Odd Riddle?", answer: "The wording is intentionally misleading: the apparent warning on the left fits the twisted logic of The Lunar Game. Treat the result, rather than the pleasant wording of the other choices, as the answer." },
    ]}
    nextSteps={[
      { label: "Return to the walkthrough hub", href: "/walkthrough", description: "Open another exact quest answer without reading a full-story spoiler list." },
      { label: "Plan time costs", href: "/time-system", description: "Keep one puzzle decision separate from the broader 30-day system." },
      { label: "Protect a branching save", href: "/endings", description: "Use manual saves before later route decisions." },
    ]}
    sources={[
      { label: "Space4Games — Odd Riddle solution at Lunar Manor", href: "https://space4games.com/en/games-en/the-blood-of-dawnwalker-odd-riddle-solution/" },
      { label: "Gamer Guides — in-game Odd Riddle text entry", href: "https://www.gamerguides.com/the-blood-of-dawnwalker/database/glossary/writings/odd-riddle" },
    ]}
    sections={[
      { title: "Odd Riddle solution: left", body: <div className="fact-grid"><p><b>Correct choice</b>Select the <b>left</b> opening at the three-choice mechanism.</p><p><b>Result</b>The gate opens and you can continue through Lunar Manor.</p><p><b>Do not follow the pleasant wording</b>The middle and right clues are intentionally more inviting, but they are not the safe route.</p><p><b>Wrong selection</b>Published walkthroughs report that middle or right activates the trap. If you are preserving resources, reload the save from before the mechanism.</p></div> },
      { title: "How to read the clue without overthinking it", body: <p>The note contrasts an apparently valuable right choice, a pleasant middle choice and a threatening left choice. In a normal puzzle, that wording could make left look wrong. In this quest&apos;s vampire-hosted setting, the threatening option is the intended one. The useful answer is the interaction result: <b>left opens the gate.</b></p> },
      { title: "Where the riddle appears", body: <p>The mechanism appears in <b>Lunar Manor</b> during <b>The Lunar Game</b>, when a locked gate blocks the route. Look for the nearby note and the three openings, then select left when the dialogue prompt appears. This page avoids later quest and ending spoilers.</p> },
      { title: "If your screen does not match this choice", body: <p>Confirm that the journal says <b>The Lunar Game</b> and that you are at the Lunar Manor three-opening mechanism. If the objective or prompt is different, do not force this answer onto a different riddle. Take a screenshot of the journal text, keep a manual save, and use the current in-game prompt as the final authority after patches.</p> },
      { title: "More spoiler-light quest help", body: <p>For a quest route with three collectible locations, use <Link href="/forge-it-anew">Forge It Anew</Link>. For the early prologue medicine puzzle, use the <Link href="/how-many-spoonfuls-of-herbs">herbs answer</Link>. Both pages keep the immediate answer ahead of wider story spoilers.</p> },
    ]}
  />;
}

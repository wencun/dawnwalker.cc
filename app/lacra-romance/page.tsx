import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "How to Romance Lacra in Blood of Dawnwalker: Quest Order",
  "How to romance Lacra in The Blood of Dawnwalker: the spoiler-marked quest order, the Night of Horrors Mandrake choice, and how to protect the route with a manual save.",
  "/lacra-romance",
  ["Blood of Dawnwalker Lacra romance", "how to romance Lacra Blood of Dawnwalker", "The Blood of Dawnwalker Lacra", "Lacra romance choices Dawnwalker", "Lacra Night of Horrors Mandrake"],
);

export default function LacraRomancePage() {
  return <GuidePage
    eyebrow="LACRA ROMANCE ROUTE · SPOILERS"
    title="How to romance Lacra in The Blood of Dawnwalker"
    dek="Lacra&apos;s route begins with A Friend Like This and reaches its romance scene during The Night of Horrors. Follow the quest order, protect a manual save before the Mandrake decision, and do not confuse her route with the broader romance roster."
    checked="September 8, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · LACRA ROUTE</span><p><b>Complete Lacra&apos;s questline through The Night of Horrors, then make a manual save before the Mandrake decision.</b> Current walkthroughs identify that late quest as the romance trigger; use the exact in-game prompt rather than copying dialogue from an older video.</p></div>}
    faqs={[
      { question: "How do you romance Lacra in The Blood of Dawnwalker?", answer: "Follow Lacra&apos;s questline from A Friend Like This through The Night of Horrors. Current route guides identify a Mandrake decision in that late quest as the romance trigger." },
      { question: "Can you romance Lacra and other characters in Dawnwalker?", answer: "Current launch guides report that Lacra, Anca and Crake can all be romanced in one playthrough. Their routes remain separate, so protect saves before late quest choices." },
      { question: "Which quest has Lacra&apos;s romance scene?", answer: "Current walkthroughs place the romance trigger in The Night of Horrors. Complete the preceding Lacra route and make a save before the relevant Mandrake choice." },
    ]}
    nextSteps={[
      { label: "See every romance option", href: "/romance", description: "Compare Lacra with Anca and Crake without mixing their quest routes." },
      { label: "Plan the ending save", href: "/endings", description: "Keep a separate late-game save for outcome variations." },
      { label: "Understand quest time costs", href: "/time-system", description: "Keep optional relationship quests visible alongside the 30-day clock." },
    ]}
    sources={[
      { label: "PowerPyx — all romances, Lacra quest order and trigger", href: "https://www.powerpyx.com/the-blood-of-dawnwalker-all-romances-guide/" },
      { label: "PC Gamer — launch-build romance roster and route context", href: "https://www.pcgamer.com/games/rpg/blood-of-dawnwalker-romances/" },
    ]}
    sections={[
      { title: "Lacra romance quest order", body: <div className="fact-grid"><p><b>Start</b>A Friend Like This introduces Lacra&apos;s route.</p><p><b>Middle route</b>Current guides list Song of the Mountain, Hive and Seek, and Our Rotten Roots as route progression.</p><p><b>Romance trigger</b>The Night of Horrors contains the late Mandrake decision cited by current walkthroughs.</p><p><b>Safe approach</b>Create a manual save before the final choice rather than relying on an autosave.</p></div> },
      { title: "How do you protect the Lacra romance route?", body: <ol><li><b>Keep Lacra&apos;s questline active:</b> follow the objective log from A Friend Like This instead of jumping directly to a spoiler-heavy final choice.</li><li><b>Finish the earlier route steps:</b> current guides place the later romance scene after Song of the Mountain, Hive and Seek, and Our Rotten Roots.</li><li><b>Make a save before The Night of Horrors choice:</b> do this before interacting with the Mandrake or confirming a major dialogue prompt.</li><li><b>Read the in-game prompt:</b> use the current build&apos;s wording and confirm the resulting quest state before continuing.</li><li><b>Keep the save until the route is confirmed:</b> this lets you revisit an outcome without risking unrelated late-game progress.</li></ol> },
      { title: "Can Lacra&apos;s route coexist with other romances?", body: <p>Current launch guides report that the three romance routes can coexist in one playthrough. That does not mean their quests have no time cost or that every ending variation is identical. Use the broader <Link href="/romance">romance options guide</Link> for the roster, then use this page only for Lacra&apos;s specific route.</p> },
      { title: "Spoiler and verification note", body: <p>This page names the quest order and save point, but deliberately does not reproduce every dialogue line or scene. Patch changes can alter requirements, so report the game version and the exact quest state if the Mandrake prompt differs from the current guide.</p> },
    ]}
  />;
}

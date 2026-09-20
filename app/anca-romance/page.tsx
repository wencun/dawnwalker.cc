import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Anca Romance Guide: Quest Order & Font Choice | Dawnwalker",
  "Anca romance guide for The Blood of Dawnwalker: a spoiler-marked quest order, the optional early scene, the Font of Life decision and the final inn conversation.",
  "/anca-romance",
  ["The Blood of Dawnwalker Anca", "Blood of Dawnwalker Anca", "Anca Blood of the Dawnwalker", "Dawnwalker Anca romance", "how to romance Anca Blood of Dawnwalker", "Anca Font of Life Dawnwalker"],
);

export default function AncaRomancePage() {
  return <GuidePage
    eyebrow="ANCA ROMANCE ROUTE · SPOILERS"
    title="Anca romance guide: quest order, Font choice and final conversation"
    dek="For Anca in The Blood of Dawnwalker, follow her questline from the prologue and Echoes of Silenced Bells through Stronger Than Achilles. Keep a manual save before the Font of Life and the following inn conversation."
    checked="September 20, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · ANCA ROMANCE</span><p><b>Keep Anca alive, complete her questline through Stronger Than Achilles, then return to the inn for the final conversation.</b> Make a manual save before the Font of Life decision and again before that conversation so the current in-game prompts—not an old dialogue list—remain your authority.</p></div>}
    faqs={[
      { question: "How do you romance Anca in The Blood of Dawnwalker?", answer: "Follow Anca's route through Stronger Than Achilles, then complete the final inn conversation after the Font of Life. Current launch guides recommend preserving Anca and keeping saves before late choices." },
      { question: "Does the Font of Life choice lock Anca's romance?", answer: "Current launch-build romance guides report that the Font reward choice and the romance scene are separate. Save before the Font and read the current in-game prompt because patches or route state can matter." },
      { question: "Can you romance Anca as well as Lacra and Crake?", answer: "Current launch-build guides report that all three romance routes can coexist in one playthrough. They still have separate quest requirements and can compete for time." },
    ]}
    nextSteps={[
      { label: "Compare the Font rewards", href: "/font-of-life", description: "See the self, Anca and destroy branches before making the permanent reward choice." },
      { label: "Plan every romance route", href: "/romance", description: "Keep Anca, Lacra and Crake requirements separate." },
      { label: "Protect your ending save", href: "/endings", description: "Keep companion progress available before the final commitment." },
    ]}
    sources={[
      { label: "PowerPyx — all romances and Anca quest order", href: "https://www.powerpyx.com/the-blood-of-dawnwalker-all-romances-guide/" },
      { label: "PC Gamer — romance roster and route context", href: "https://www.pcgamer.com/games/rpg/blood-of-dawnwalker-romances/" },
      { label: "GosuNoob — Anca romance dialogue and quest context", href: "https://www.gosunoob.com/guides/the-blood-of-dawnwalker-anca-romance-all-dialogue-choices/" },
    ]}
    sections={[
      { title: "Anca romance quest order", body: <div className="fact-grid"><p><b>Early opportunity</b>Withering Away and the optional Page-Turner scene establish early character context, but do not replace the later route.</p><p><b>Core route</b>Current guides list Echoes of Silenced Bells, Between the Words, Where Old Devils Lie and Stronger Than Achilles.</p><p><b>Optional step</b>Most Precious Thing is listed by current route guides as an optional connected quest.</p><p><b>Romance point</b>After the Font of Life sequence, return to the inn and finish Anca&apos;s personal conversation.</p></div> },
      { title: "Safe way to preserve Anca's route", body: <ol><li><b>Do not skip Anca&apos;s active quests:</b> follow the journal chain instead of jumping straight to a late dialogue quote.</li><li><b>Keep Anca available:</b> a character route cannot continue if a prior state makes the character unavailable.</li><li><b>Create a save before the Font of Life:</b> it is a permanent reward fork and a useful place to protect your run.</li><li><b>Save again at the inn:</b> read the final current-build conversation prompt before confirming it.</li><li><b>Retain the saves until the scene is confirmed:</b> this lets you compare a branch without risking unrelated progress.</li></ol> },
      { title: "The Font of Life is a reward choice, not this entire romance guide", body: <p>The Font choice is a frequent source of Anca searches because it is part of her late route. It should not be treated as proof that one outcome automatically replaces the whole relationship path. Use the dedicated <Link href="/font-of-life">Font of Life choice guide</Link> for its documented rewards, then use this page for the quest order and final conversation context.</p> },
      { title: "Can Anca, Lacra and Crake coexist?", body: <p>Current launch-build guides report that Coen can pursue all three romance routes in one playthrough. That does not make their quests interchangeable: Anca&apos;s route has its own progression and timing, while Lacra and Crake have separate requirements. Use the <Link href="/romance">romance overview</Link> to plan the roster and the <Link href="/lacra-romance">Lacra guide</Link> only for Lacra&apos;s late-route choice.</p> },
    ]}
  />;
}

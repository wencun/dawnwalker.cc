import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Does Blood of Dawnwalker Have New Game Plus? Current Status",
  "Does The Blood of Dawnwalker have New Game Plus? Current release status, what happens after the ending, what carries over, and how to prepare saves for another run.",
  "/new-game-plus",
  ["does blood of the dawnwalker have new game plus", "The Blood of Dawnwalker New Game Plus", "Blood of Dawnwalker NG+", "Blood of Dawnwalker post game", "Blood of Dawnwalker new game plus carry over"],
);

export default function NewGamePlusPage() {
  return <GuidePage
    eyebrow="POSTGAME STATUS · CURRENT RELEASE"
    title="Does The Blood of Dawnwalker have New Game Plus?"
    dek="No New Game Plus mode or carry-over system has been officially announced for the current release. Finish an ending, then use an earlier manual save or begin a fresh run; do not plan around unverified level, gear or skill carry-over."
    checked="September 8, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · CURRENT STATUS</span><p><b>No confirmed New Game Plus.</b> Current ending guides describe credits followed by a return to the menu, rather than a carry-over run. Keep a manual save before the finale if you want to explore another ending without starting over.</p></div>}
    faqs={[
      { question: "Does The Blood of Dawnwalker have New Game Plus?", answer: "No New Game Plus mode or carry-over system has been officially announced for the current release. Current ending guides describe loading an earlier save or starting a fresh run after the credits." },
      { question: "What carries over into a new Blood of Dawnwalker playthrough?", answer: "No official carry-over list has been published because a New Game Plus mode has not been confirmed. Do not assume levels, equipment, skills, money or trophies transfer into a new run." },
      { question: "Can you keep playing after the ending?", answer: "Current launch-build ending guides describe reaching credits and then returning to the menu. Keep a pre-finale save if you want to revisit choices or pursue another documented ending." },
    ]}
    nextSteps={[
      { label: "Plan the seven documented endings", href: "/endings", description: "Use a pre-finale save to protect alternate outcomes." },
      { label: "Understand the 30-day outcome", href: "/what-happens-after-30-days", description: "Keep a separate save before the family deadline." },
      { label: "Continue the quest walkthrough", href: "/walkthrough", description: "Find a focused route for the next objective in a fresh run." },
    ]}
    sources={[
      { label: "PowerPyx — launch-build endings guide and save advice", href: "https://www.powerpyx.com/the-blood-of-dawnwalker-all-endings-guide/" },
      { label: "Video Games Chronicle — post-day-30 outcome and continued-content notes", href: "https://www.videogameschronicle.com/guide/blood-of-dawnwalker-what-happens-after-30-days/" },
      { label: "Rebel Wolves — official news and patch archive", href: "https://dawnwalkergame.com/us/en/news" },
    ]}
    sections={[
      { title: "New Game Plus status at launch", body: <div className="fact-grid"><p><b>Current answer</b>No official New Game Plus announcement or carry-over rules were verified when this page was checked.</p><p><b>After an ending</b>Current launch-build ending guides describe credits and a return to the menu, not a separate postgame or NG+ selection.</p><p><b>Replay option</b>Load a pre-finale manual save for another outcome, or start a fresh run for a different route.</p><p><b>Future updates</b>A later patch can change this. This page should be updated only when Rebel Wolves publishes an explicit feature announcement or release note.</p></div> },
      { title: "What should you save before finishing the game?", body: <ol><li><b>Create a pre-day-30 save:</b> keep this separate if you may want to preserve the family-rescue route.</li><li><b>Create a pre-finale save:</b> make another manual save before the last story commitment.</li><li><b>Record the route:</b> note the current day and completed companion quests before the ending.</li><li><b>Reload deliberately:</b> use the appropriate earlier save for an alternate outcome instead of assuming a completed run unlocks carry-over.</li></ol> },
      { title: "What should not be assumed to carry over?", body: <p>Until an official New Game Plus feature lists its rules, do not assume that gear, skills, currency, progression, map completion, romance status or trophies move into a new playthrough. A new game and a reload are different choices: a reload preserves an earlier state, while a fresh run should be treated as a separate progression path.</p> },
      { title: "New Game Plus versus the 30-day ending", body: <p>Reaching an ending after the time limit is not the same as unlocking a postgame mode. The <Link href="/what-happens-after-30-days">30-day guide</Link> explains which family-route content is lost, while this page answers the separate question of whether a completed run starts another run with carry-over.</p> },
    ]}
  />;
}

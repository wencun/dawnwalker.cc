import Image from "next/image";
import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "What Happens After 30 Days in The Blood of Dawnwalker?",
  "What happens after 30 days in The Blood of Dawnwalker: the family outcome, what content remains, save advice and whether New Game Plus is confirmed.",
  "/what-happens-after-30-days",
  ["what happens after 30 days The Blood of Dawnwalker", "The Blood of Dawnwalker 30 days", "Blood of Dawnwalker time limit", "Dawnwalker can you save everyone", "Blood of Dawnwalker New Game Plus"],
);

export default function AfterThirtyDaysPage() {
  return <GuidePage
    eyebrow="TIME LIMIT ANSWER · MAJOR STORY SPOILERS"
    title="What happens after 30 days in The Blood of Dawnwalker?"
    dek="If the 30-day limit expires before you rescue Coen&apos;s family, the story can still reach credits—but the family dies during the ceremony. You can continue exploring some side content afterward, while the family main-quest path is gone."
    checked="September 4, 2026"
    quickAnswer={<div className="answer-visual"><div><span>SPOILER ANSWER · DAY 31</span><h2>The run continues. The family route does not.</h2><p>Launch-build guides agree on the key consequence: time running out locks the family rescue outcome. Make a manual save before the finale if you want to test other results without replaying the entire opening.</p></div><Image src="/dawnwalker-coen.png" alt="Coen from The Blood of Dawnwalker" width={1024} height={1024} priority /></div>}
    faqs={[
      { question: "What happens if you reach day 30 in The Blood of Dawnwalker?", answer: "Launch-build ending guides report that Coen&apos;s family dies during the ceremony if you have not rescued them by the time limit. The game can still reach credits and some side content remains available afterward." },
      { question: "Can you still free roam after 30 days in The Blood of Dawnwalker?", answer: "Third-party launch guides report that side activities and some trophies can still be completed after the timer expires, but family main-quest content is no longer available." },
      { question: "Does The Blood of Dawnwalker have New Game Plus?", answer: "No official New Game Plus mode was verified when this page was checked. Launch guides describe starting a new game or loading an earlier save after the ending, rather than a confirmed carry-over mode." },
    ]}
    nextSteps={[
      { label: "Plan the endings", href: "/endings", description: "Use spoiler-marked save points and outcome requirements." },
      { label: "Understand time costs", href: "/time-system", description: "See what officially advances the 30-day clock." },
      { label: "Follow the walkthrough", href: "/walkthrough", description: "Move from a time question to focused quest answers." },
    ]}
    sources={[
      { label: "Video Games Chronicle — what happens after 30 days", href: "https://www.videogameschronicle.com/guide/blood-of-dawnwalker-what-happens-after-30-days/" },
      { label: "PowerPyx — launch-build endings guide and post-ending notes", href: "https://www.powerpyx.com/the-blood-of-dawnwalker-all-endings-guide/" },
      { label: "PlayStation Blog — official time-driven quest-system overview", href: "https://blog.playstation.com/2026/07/07/the-blood-of-dawnwalker-unique-time-driven-quest-system-and-player-choice-detailed/" },
    ]}
    sections={[
      { title: "The 30-day outcome in one view", body: <div className="day-fork"><div><span>BEFORE DAY 30</span><b>Reach the family rescue path</b><p>You can pursue the family outcome and the ending choices connected to it.</p></div><div className="failed"><span>DAY 31 / TIME RUNS OUT</span><b>The family dies in the ceremony</b><p>The main family path becomes unavailable; the game can still reach credits and retain some side content.</p></div></div> },
      { title: "What remains after the timer expires", body: <div className="fact-grid"><p><b>Story ending</b>Time running out is an ending route rather than an immediate game-over screen, according to launch-build guides.</p><p><b>Family main quests</b>Those objectives cannot be recovered after the ceremony outcome. Use an earlier manual save if you want the rescue route.</p><p><b>Side activities</b>Third-party guides report that some side content and trophies can still be finished. Availability can depend on the activity and current patch.</p><p><b>Completionist warning</b>Do not assume that continued exploration restores every missed story state. Keep separate saves for a no-spoiler run and ending cleanup.</p></div> },
      { title: "A spoiler-safe save plan", body: <ol className="install-flow"><li><span>01</span><b>Day 28–29</b><small>Create a manual save before committing to the final family push.</small></li><li><span>02</span><b>Before the finale</b><small>Make a second save before the last major dialogue or quest hand-in.</small></li><li><span>03</span><b>Finish once</b><small>Let the credits resolve so you know which branch you received.</small></li><li><span>04</span><b>Reload deliberately</b><small>Use the earlier save for a different outcome instead of relying on an unverified NG+ claim.</small></li></ol> },
      { title: "Does the game have New Game Plus?", body: <p><b>There was no official New Game Plus announcement or verified carry-over mode when this page was checked.</b> The cited launch guides describe starting a fresh game or reloading an earlier save after a completed ending. That is not proof a future patch cannot add NG+, but it is not a reason to plan your first run around a feature that has not been confirmed.</p> },
      { title: "Why time pressure creates search demand", body: <p>Players searching <b>time limit</b>, <b>what happens after 30 days</b> or <b>can you save everyone</b> are not looking for a lore summary. They need a consequence, a save point and a clear statement of what is verified. The <Link href="/endings">endings guide</Link> continues from this answer without making you hunt through a generic wiki page.</p> },
    ]}
  />;
}

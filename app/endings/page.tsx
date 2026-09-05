import Image from "next/image";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Endings: How Many & Save Plan",
  "The Blood of Dawnwalker endings guide: how many launch-build outcomes are documented, what the 30-day ending changes and a spoiler-marked save plan.",
  "/endings",
  ["The Blood of Dawnwalker endings", "Blood of Dawnwalker all endings", "Dawnwalker time runs out ending", "Blood of Dawnwalker ending guide", "Dawnwalker how many endings"],
);

export default function EndingsPage() {
  return <GuidePage
    eyebrow="ENDING GUIDE · HEAVY SPOILERS AFTER THE SAVE PLAN"
    title="The Blood of Dawnwalker endings: how many and how to save safely"
    dek="Launch-build guides document seven endings. The safest way to see alternatives is a manual save before the final story commitment, plus an earlier save before the 30-day family deadline."
    checked="September 4, 2026"
    quickAnswer={<div className="answer-visual"><div><span>LAUNCH-BUILD GUIDE · SPOILERS</span><h2>Seven documented outcomes, one sensible save plan.</h2><p>Do not replay blind for every result. Save before the final commitment, keep a separate pre-day-30 save, and finish companion routes before expecting their outcome variations.</p></div><Image src="/dawnwalker-hero.jpg" alt="The Blood of Dawnwalker artwork" width={1920} height={1080} priority /></div>}
    faqs={[
      { question: "How many endings are in The Blood of Dawnwalker?", answer: "A launch-build PowerPyx guide documents seven endings. Patch changes or further route research could refine requirements, so this page labels its current scope and source." },
      { question: "Can you get the good ending after 30 days in Dawnwalker?", answer: "No. Launch guides report that the family dies if time runs out before their rescue, which locks the family-rescue outcome. Reload a pre-deadline save to pursue that path." },
      { question: "Do romance routes affect Dawnwalker endings?", answer: "The launch ending guide ties some variations to completing the relevant Lacra or Crake route. Use the romance guide before the finale if you want to preserve those options." },
    ]}
    nextSteps={[
      { label: "See the day-30 consequence", href: "/what-happens-after-30-days", description: "Know exactly what the time limit locks before choosing a finale." },
      { label: "Check romance routes", href: "/romance", description: "Complete companion route requirements before a final save." },
      { label: "Return to the walkthrough", href: "/walkthrough", description: "Find quest answers without turning the whole run into spoiler notes." },
    ]}
    sources={[
      { label: "PowerPyx — all endings guide (launch build)", href: "https://www.powerpyx.com/the-blood-of-dawnwalker-all-endings-guide/" },
      { label: "Video Games Chronicle — 30-day outcome and continued side-content note", href: "https://www.videogameschronicle.com/guide/blood-of-dawnwalker-what-happens-after-30-days/" },
    ]}
    sections={[
      { title: "Spoiler scale: stop where you want", body: <div className="spoiler-scale"><div><b>LEVEL 1 · SAFE</b><span>How many outcomes are documented and where to create saves.</span></div><div><b>LEVEL 2 · CONDITIONS</b><span>Time limit and companion-route requirements, without scene-by-scene dialogue.</span></div><div><b>LEVEL 3 · OUTCOMES</b><span>Ending names and the time-runs-out consequence. Continue only if you want specifics.</span></div></div> },
      { title: "How many endings are documented?", body: <><p><b>Seven endings are documented by the cited launch-build guide.</b> That count is third-party reporting, not an official promise of every variation or a guarantee that a later patch will not alter conditions. Treat it as the current answer for players trying to plan saves—not a reason to spoil every route before playing.</p><div className="ending-count"><span>07</span><div><b>DOCUMENTED LAUNCH-BUILD OUTCOMES</b><small>Use the source guide for full outcome names; this page prioritises the choices and save points needed to avoid a forced replay.</small></div></div></> },
      { title: "The two saves that prevent most replay", body: <div className="save-map"><div><span>SAVE A</span><b>Before day 30</b><p>Protects the family-rescue path. Time running out is a permanent story consequence.</p></div><i>→</i><div><span>SAVE B</span><b>Before the final commitment</b><p>Protects late outcome choices and lets you see a different conclusion.</p></div><i>→</i><div><span>FINISH</span><b>Record the result</b><p>Note the day, companion progress and major choice before reloading.</p></div></div> },
      { title: "Conditions that matter before the final save", body: <div className="fact-grid"><p><b>Time limit</b>Do not let the timer expire if you want the family-rescue outcome. See <a href="/what-happens-after-30-days">what happens after 30 days</a>.</p><p><b>Companion progress</b>The cited launch guide links some variations to Lacra or Crake route completion. Finish those quests before the final commitment.</p><p><b>Prologue medicine</b>The launch ending guide also identifies the mother&apos;s medicine choice as relevant to outcomes. Our <a href="/how-many-spoonfuls-of-herbs">illustrated herbs answer</a> covers that early decision.</p><p><b>Manual saves</b>Do not rely on an assumed New Game Plus or automatic checkpoint to preserve an alternate branch.</p></div> },
      { title: "Time-runs-out ending", body: <p><b>Heavy spoiler:</b> if more than 30 days pass before the rescue, launch guides report that Coen&apos;s family dies in the ceremony. This route can still reach credits and may leave some side content available, but it does not preserve the family main quest line. Use the day-30 guide for the exact scope and source note.</p> },
    ]}
  />;
}

import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Blood of Dawnwalker Volk Buried Past: Best Route & Sword",
  "Complete Volk's Buried Past in Blood of Dawnwalker: help on return visits, find the knife and treasure, and avoid the betrayal branch.",
  "/volk-buried-past",
  [
    "The Blood of Dawnwalker Volk",
    "Blood of Dawnwalker Volk quest",
    "Blood of Dawnwalker Buried Past walkthrough",
    "Dawnwalker Volk sword location",
    "Dawnwalker Pieter's Garb",
  ],
);

export default function VolkBuriedPastPage() {
  return <GuidePage
    eyebrow="VOLK QUEST · BURIED PAST ROUTE"
    title="Blood of Dawnwalker Volk Buried Past: best route, chores and sword"
    dek="For Volk's best-documented Buried Past route, help on each return visit, complete optional chores and agree to investigate Pieter's treasure before the final branch."
    checked="September 14, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · VOLK ROUTE</span><p><b>Help Volk on each repeated visit and agree to search for Pieter&apos;s treasure.</b> Current walkthroughs report that this avoids the betrayal branch. After the final wait, inspect the hut for Volk&apos;s Sword and the letter. Save before the branch, then compare <Link href="/best-sword">best sword</Link>, <Link href="/time-system">time cost</Link> and <Link href="/endings">ending saves</Link>.</p></div>}
    faqs={[
      { question: "How do you complete Volk's Buried Past quest in The Blood of Dawnwalker?", answer: "Help Volk during the repeated visits, including optional chores when available, then agree to investigate Pieter's treasure and complete the follow-up. The route advances over multiple in-game days, so do not expect every objective to appear in one visit." },
      { question: "How do you get Volk's Sword in Dawnwalker?", answer: "Published launch-build routes report that Volk's Sword is left in the hut after the help route resolves and you return following the required wait. In the betrayal branch it can instead be obtained after the ambush, with a different outcome." },
      { question: "Where is Volk's knife in Buried Past?", answer: "The optional knife is reported on the roof of Volk's hut and requires the nighttime vampire movement ability to reach. This is separate from the main treasure objective." },
      { question: "Can Volk betray you in The Blood of Dawnwalker?", answer: "Yes. Multiple launch walkthroughs describe a betrayal branch if you skip the optional help or refuse the treasure search. Preserve a manual save before the final branch if you want to compare outcomes." },
    ]}
    nextSteps={[
      { label: "Compare armor routes", href: "/best-armor", description: "See how Pieter's Garb fits beside the Arbiter armor route." },
      { label: "Plan the time system", href: "/time-system", description: "Repeated return visits can consume in-game time; do not treat them as free travel." },
      { label: "Read ending-save guidance", href: "/endings", description: "Keep a branch save before choices that alter a named character's outcome." },
    ]}
    sources={[
      { label: "PowerPyx — Buried Past launch-build walkthrough", href: "https://www.powerpyx.com/blood-of-dawnwalker-buried-past-walkthrough/" },
      { label: "Gamer Guides — Buried Past journal objectives and knife note", href: "https://www.gamerguides.com/the-blood-of-dawnwalker/database/journal/quests/buried-past" },
      { label: "All Things How — Buried Past quest choices and outcome summary", href: "https://allthings.how/the-blood-of-dawnwalker-buried-past-full-quest-walkthrough/" },
    ]}
    sections={[
      { title: "Buried Past checklist before the final return", body: <table className="editorial-table"><caption>The in-game journal is the authority for your current branch; use this as a spoiler-light route check.</caption><thead><tr><th scope="col">Check</th><th scope="col">Why it matters</th></tr></thead><tbody><tr><th scope="row">Return to Volk after each wait</th><td>The route advances through separate visits rather than one continuous objective chain.</td></tr><tr><th scope="row">Do optional help when it appears</th><td>Launch walkthroughs connect completing Volk&apos;s help to the non-betrayal outcome.</td></tr><tr><th scope="row">Agree to investigate Pieter&apos;s treasure</th><td>Refusing the treasure route is reported to lead toward the betrayal branch.</td></tr><tr><th scope="row">Make a manual save</th><td>Save before the final return if you care about Volk&apos;s outcome or rewards.</td></tr></tbody></table> },
      { title: "How to start Volk's route", body: <p>Buried Past becomes available after the prologue. Walkthroughs place the lead around Maragir and the Ruined Hut, where the first encounter with Volk begins the route. Follow the active journal marker rather than travelling to an unrelated character named Volk or treating a vendor inventory as the quest start.</p> },
      { title: "The repeated visits: help first, then follow the treasure lead", body: <p>The distinguishing feature of this quest is that Volk&apos;s conversations and help requests unfold across returns rather than immediately. Exhaust the available optional help, including the requested chores when they appear, and speak to Volk again after the game asks you to wait. When the treasure lead appears, accept it and follow the journal objective. This is more reliable than skipping ahead based on a single item location.</p> },
      { title: "Volk's knife and Pieter's treasure", body: <div className="fact-grid"><p><b>Knife</b>The optional knife is reported on the roof of Volk&apos;s hut. Reach it at night with the relevant vampire movement ability, then return it before moving on.</p><p><b>Treasure</b>Follow the Buried Past journal toward Pieter&apos;s remembered location instead of guessing from a generic map marker. Launch guides describe a reward chest on this route.</p><p><b>Monastery lead</b>Later route steps point back to Maragir for information about Pieter&apos;s past. Confirm the current journal objective before entering a building.</p><p><b>Why this matters</b>These are separate checks: finding the knife does not replace the treasure route, and neither should be confused with the final outcome choice.</p></div> },
      { title: "How the Volk branch resolves", body: <p>After the route&apos;s required wait, return to the hut and inspect the scene. On the help route, published walkthroughs report that Volk leaves behind a letter and <b>Volk&apos;s Sword</b>. If the quest instead resolves as an ambush, the available outcome is different. That is why this guide recommends a save before the final return rather than claiming every player receives the same scene.</p> },
      { title: "Use this route with the rest of your build", body: <p>Buried Past can supply a strong gear path, but it costs time. If you are choosing between route investments, compare <Link href="/best-armor">armor choices</Link>, plan around the <Link href="/time-system">time system</Link>, and do not confuse Volk&apos;s rewards with the separate <Link href="/a-bulwark-against-darkness">Arbiter armor</Link> quest.</p> },
    ]}
  />;
}

import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Trophy Guide: Missables, Saves & Platinum Roadmap",
  "Plan The Blood of Dawnwalker trophies with a spoiler-light roadmap: Duelist difficulty, manual saves, missable endings, and the launch-build Platinum checklist.",
  "/trophy-guide",
  ["The Blood of Dawnwalker trophy guide", "Blood of Dawnwalker missable trophies", "Blood of Dawnwalker platinum roadmap", "Blood of Dawnwalker achievements"],
);

export default function TrophyGuidePage() {
  return <GuidePage
    eyebrow="COMPLETION ROADMAP · SPOILER-LIGHT"
    title="The Blood of Dawnwalker trophy guide: missables, saves and Platinum roadmap"
    dek="The launch list has 47 PS5 trophies and 46 Steam achievements. Start on Duelist if you want the difficulty trophy, rotate manual saves, and protect a pre-finale branch for ending cleanup."
    checked="September 8, 2026"
    quickAnswer={<div className="fix-callout"><span>START BEFORE THE PROLOGUE ENDS</span><p><b>Use a fresh manual slot each in-game day and keep one save before the final quest.</b> That is the launch-guide consensus for avoiding a second full route.</p></div>}
    faqs={[
      { question: "How many trophies are in The Blood of Dawnwalker?", answer: "Launch guides list 47 PS5 trophies, including Platinum, and 46 Steam achievements." },
      { question: "Are trophies missable?", answer: "Published roadmaps flag story branches and the 30-day family outcome as missable. Manual saves let you reload most choices instead of beginning again." },
      { question: "Does difficulty affect trophies?", answer: "Launch trophy roadmaps identify a Duelist-completion requirement. Check the current in-game list and patch notes before relying on a difficulty change." },
    ]}
    nextSteps={[
      { label: "Keep an ending save", href: "/endings", description: "See the branch point before you lock the finale." },
      { label: "Protect the time-limit route", href: "/what-happens-after-30-days", description: "Know what the family deadline changes." },
      { label: "Track New Game Plus status", href: "/new-game-plus", description: "Do not plan the roadmap around an unconfirmed carry-over mode." },
    ]}
    sources={[
      { label: "PowerPyx — Trophy Guide & Roadmap", href: "https://www.powerpyx.com/the-blood-of-dawnwalker-trophy-guide-roadmap/" },
      { label: "Vale Guides — All 47 Trophies and Missables", href: "https://valeguides.com/en/guides/trophies-achievements/" },
      { label: "The Blood of Dawnwalker Wiki — Trophy Guide", href: "https://the-blood-of-dawn-walker.wiki/trophies" },
      { label: "DawnwalkerTips — Trophy & Achievement Roadmap", href: "https://www.dawnwalkertips.com/trophy-achievement-guide/" },
    ]}
    sections={[
      { title: "Roadmap at a glance", body: <table className="editorial-table"><caption>Launch-build guide consensus; verify against the in-game list after each patch</caption><thead><tr><th scope="col">Plan item</th><th scope="col">Why it matters</th></tr></thead><tbody><tr><th scope="row">Start on Duelist if aiming for completion</th><td>Roadmaps identify a difficulty-related trophy.</td></tr><tr><th scope="row">Use rotating manual saves</th><td>They preserve ending, relationship and time-limit branches.</td></tr><tr><th scope="row">Save before the final quest</th><td>Reload for different ending requirements instead of replaying blind.</td></tr><tr><th scope="row">Do not rely on NG+</th><td>No confirmed launch carry-over mode exists.</td></tr></tbody></table> },
      { title: "What should you save before?", body: <ul><li><b>Before major ending commitment:</b> protect this as a permanent fallback save.</li><li><b>Before a time-consuming quest:</b> use a separate slot if it affects the 30-day route.</li><li><b>Before relationship or allegiance choices:</b> keep a branch save if you intend to see alternatives.</li><li><b>Before spending rare gear or quest items:</b> retain a fallback when the objective is unclear.</li></ul> },
      { title: "What this page does not claim", body: <p>Trophy lists and missable labels can change with patches. This roadmap does not replace the in-game tracker or assert a hidden trophy condition without a cited guide. If a patch changes a requirement, the original source and this page should be rechecked before a run is planned around it.</p> },
    ]}
  />;
}

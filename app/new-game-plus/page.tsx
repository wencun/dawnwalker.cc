import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Does The Blood of Dawnwalker Have New Game Plus? Current NG+ Status",
  "The Blood of Dawnwalker does not currently have a confirmed New Game Plus mode. Learn what happens after credits, what does not carry over, and which saves to keep.",
  "/new-game-plus",
  ["Does The Blood of Dawnwalker have New Game Plus", "Blood of Dawnwalker NG+", "Blood of Dawnwalker post game", "Blood of Dawnwalker New Game Plus"],
);

export default function NewGamePlusPage() {
  return <GuidePage
    eyebrow="POSTGAME ANSWER · CHECKED AGAINST LAUNCH-BUILD GUIDES"
    title="Does The Blood of Dawnwalker have New Game Plus?"
    dek="No confirmed New Game Plus mode is available in the launch build. Finishing the story does not unlock a verified carry-over run, so protect manual saves before the final quest if you want another ending."
    checked="September 8, 2026"
    quickAnswer={<div className="fix-callout"><span>SHORT ANSWER</span><p><b>No—current launch-build guides report no New Game Plus or verified carry-over mode.</b> Do not overwrite a pre-finale save expecting skills, gear or progress to transfer into a new run.</p></div>}
    faqs={[
      { question: "Does The Blood of Dawnwalker have New Game Plus?", answer: "No confirmed New Game Plus mode is available in the launch build as of September 8, 2026. Published guides describe reloading an earlier save or starting fresh rather than a carry-over mode." },
      { question: "Can you keep your gear in a new Dawnwalker playthrough?", answer: "There is no verified launch-build carry-over system for gear, skills or level. Keep a manual save rather than relying on a post-credits unlock." },
      { question: "What should I do before the final quest?", answer: "Create a separate manual save before the final commitment. Reload it to pursue another ending or missed objective." },
    ]}
    nextSteps={[
      { label: "Plan the ending saves", href: "/endings", description: "Keep the pre-finale branch point before committing." },
      { label: "See what the 30-day limit changes", href: "/what-happens-after-30-days", description: "Understand the consequence before using a save slot." },
      { label: "Build a trophy-safe route", href: "/trophy-guide", description: "Use manual saves for missable outcomes." },
    ]}
    sources={[
      { label: "Game8 — Is There a New Game Plus?", href: "https://game8.co/games/The-Blood-of-Dawnwalker/archives/599758" },
      { label: "Fextralife Wiki — New Game Plus", href: "https://bloodofdawnwalker.wiki.fextralife.com/New+Game+Plus" },
      { label: "PowerPyx — Trophy Guide and Roadmap", href: "https://www.powerpyx.com/the-blood-of-dawnwalker-trophy-guide-roadmap/" },
      { label: "GameSpot — campaign and postgame guide", href: "https://www.gamespot.com/articles/you-can-beat-the-blood-of-dawnwalkers-campaign-very-quickly/1100-6535153/" },
    ]}
    sections={[
      { title: "What happens after the credits?", body: <p>Published launch guides describe returning to the title screen after an ending and using an earlier save for cleanup or another branch. That is different from a New Game Plus system: it does not establish a new campaign with retained character progress.</p> },
      { title: "What is not confirmed to carry over?", body: <div className="fact-grid"><p><b>Level and perks</b>No launch source verifies that they transfer to a new run.</p><p><b>Gear and money</b>Do not assume equipment or currency survives the credits.</p><p><b>Quest progress</b>Different endings require an earlier branch save, not a carry-over replay.</p><p><b>Future patches</b>A later update could add a mode, but it should not be presented as available until the developer confirms it.</p></div> },
      { title: "Which saves should you keep?", body: <ol><li><b>Keep one manual save before the final quest.</b> It preserves the cleanest route to a different ending.</li><li><b>Keep another before a major romance or allegiance choice.</b> Do not trust an automatic checkpoint for a long branch.</li><li><b>Finish once, then reload deliberately.</b> Use the earlier save instead of overwriting it while testing another route.</li></ol> },
      { title: "Why the answer may change", body: <p>The game is newly released and community demand for NG+ is clear, but community requests are not confirmation. This page will change only when a developer patch note or official announcement confirms a mode, its unlock condition and what carries over.</p> },
    ]}
  />;
}

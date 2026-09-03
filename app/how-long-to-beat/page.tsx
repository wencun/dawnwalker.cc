import Image from "next/image";
import type { CSSProperties } from "react";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "How Long Is The Blood of Dawnwalker? Main Story & 100% Hours",
  "How long The Blood of Dawnwalker takes to beat: current main-story, exploration and completion estimates, plus why the 30-day limit is not 30 real days.",
  "/how-long-to-beat",
  ["how long is The Blood of Dawnwalker", "how long to beat Blood of Dawnwalker", "Dawnwalker game length", "Dawnwalker main story hours", "Dawnwalker 100 percent hours"],
);

export default function HowLongPage() {
  return <GuidePage
    eyebrow="GAME LENGTH · CURRENT ESTIMATES"
    title="How long is The Blood of Dawnwalker? Main story and completion time"
    dek="Current launch-period estimates vary because routes, failed quests, exploration and reloads change the result. Plan for roughly 30–35 hours if you push the main story and around 40–50+ hours for a broader first run; completionist reports are still too early for one stable number."
    checked="September 4, 2026"
    quickAnswer={<div className="answer-visual"><div><span>SHORT ANSWER</span><h2>About 30–35 hours for the main path; 40–50+ for a broader run.</h2><p>The 30-day deadline is an in-game action economy, not a real-time countdown.</p></div><Image src="/dawnwalker-hero.jpg" alt="Coen standing in front of an eclipse in The Blood of Dawnwalker" width={1280} height={720} priority /></div>}
    faqs={[
      { question: "How long does The Blood of Dawnwalker take to beat?", answer: "Current estimates suggest about 30–35 hours for a main-story-focused run and roughly 40–50 hours or more when exploring and completing more quests. Route choices make one exact number misleading." },
      { question: "Does the 30-day timer mean you have 30 real days?", answer: "No. Time advances through specific actions and quest checkpoints; ordinary real-world play time is not a 30-day countdown." },
      { question: "How long does it take to 100% Dawnwalker?", answer: "Reliable completionist data is still developing during launch week. Early reports vary, and mutually exclusive choices may require more than one run." },
    ]}
    sources={[
      { label: "PC Gamer — launch review and 16-segment time explanation", href: "https://www.pcgamer.com/games/rpg/the-blood-of-dawnwalker-review/" },
      { label: "Reddit — player discussion of main-story and broader playtime", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1vrsp15/how_long_is_the_blood_of_dawnwalker_game_length/" },
      { label: "Reddit — launch-period platinum-time discussion", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1w4g7k3/how_long_does_it_take_for_platinum_trophy/" },
      { label: "Bandai Namco — official 30-day system explanation", href: "https://en.bandainamcoent.eu/dawnwalker/news/the-blood-of-dawnwalker-gameplay-reveal-recap" },
    ]}
    sections={[
      { title: "Current playtime ranges", body: <div className="length-chart"><div><span>MAIN PATH</span><i style={{"--length" : "48%"} as CSSProperties} /><b>30–35h</b></div><div><span>BROADER RUN</span><i style={{"--length" : "70%"} as CSSProperties} /><b>40–50+h</b></div><div><span>COMPLETION</span><i className="uncertain" style={{"--length" : "88%"} as CSSProperties} /><b>Still developing</b></div></div> },
      { title: "Why estimates disagree", body: <div className="fact-grid"><p><b>Quest choices</b>You cannot treat every route as a fixed checklist, and missed or failed quests change the amount of playable content.</p><p><b>Exploration</b>Walking, investigating and discovering routes can take real time without always spending an in-game segment.</p><p><b>Combat and reloads</b>Difficulty, retries and experimentation produce large differences between players.</p><p><b>Multiple endings</b>Seeing mutually exclusive outcomes can require another save or another playthrough.</p></div> },
      { title: "The 30-day limit is not the game's hour count", body: <div className="time-explainer"><div><strong>REAL TIME</strong><span>Explore · read · plan</span><small>The clock is not constantly draining.</small></div><b>≠</b><div><strong>GAME TIME</strong><span>Quests · training · day/night changes</span><small>Specific actions spend segments.</small></div></div> },
      { title: "Which number should you use before buying?", body: <ul><li>Use <b>30–35 hours</b> as a current main-path planning estimate, not a guarantee.</li><li>Use <b>40–50+ hours</b> if you normally explore, read dialogue and complete more side content.</li><li>Do not use a launch-week platinum anecdote as a universal 100% time.</li><li>Check again after enough tracked completions exist to separate speed, main, side and completion runs.</li></ul> },
    ]}
  />;
}

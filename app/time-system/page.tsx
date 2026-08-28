import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker 30-Day Time Limit: Does Exploration Advance Time?",
  "Does The Blood of Dawnwalker have a real-time timer? Official answers on the 30-day limit, quest checkpoints, exploration, day/night changes and the unconfirmed timer-free option.",
  "/time-system",
  ["The Blood of Dawnwalker time limit", "Blood of Dawnwalker 30 days", "Blood of Dawnwalker time system", "Blood of Dawnwalker timer free mode", "Does exploration advance time in Blood of Dawnwalker"]
);

export default function TimeSystemPage() {
  return <GuidePage
    eyebrow="PLAYER CHOICE · OFFICIAL MECHANICS"
    title="Does The Blood of Dawnwalker’s 30-day limit make you rush?"
    dek="No real-world countdown is confirmed. Time advances at specific gameplay checkpoints; this guide explains what that means for exploration, quests and the still-unconfirmed timer-free option."
    checked="August 28, 2026"
    sources={[{ label: "Bandai Namco — official game overview", href: "https://www.bandainamcoent.com/games/dawnwalker" }, { label: "Official Gameplay Reveal Recap", href: "https://en.bandainamcoent.eu/dawnwalker/news/the-blood-of-dawnwalker-gameplay-reveal-recap" }]}
    sections={[
      { title: "Short answer: it is not a real-world countdown", body: <p><b>The official gameplay recap says you have limitless real-world time to explore and prepare between time checkpoints.</b> The 30-day pressure is part of the story and progresses when you complete certain goals, rather than ticking down while you spend real time walking around the map.</p> },
      { title: "Why are players debating the 30-day system?", body: <div className="fact-grid"><p><b>The fear: being rushed</b>Open-world RPG players often expect to wander, finish every side quest and return later. A 30-day premise raises a reasonable concern that exploration could make them miss story content.</p><p><b>The design: time as a resource</b>This is not a stopwatch counting down while you play. The intended trade-off is which commitments are worth spending in-game time on, because not every person or objective can be prioritised.</p><p><b>What it does not promise</b>It does not promise a completionist run with every quest in one playthrough, a timer-free setting, or post-ending free roam.</p><p><b>The practical question</b>Before buying, ask “what advances time and how clearly is the cost shown?” rather than “how many real-life hours do I have?” The precise costs still need release-build testing.</p></div> },
      { title: "What advances the in-game time?", body: <div className="fact-grid"><p><b>Quest progression</b>The official site says that taking on quests moves time forward; the gameplay recap describes certain completed goals as checkpoints.</p><p><b>Changing day to night</b>The official gameplay recap identifies changing from day to night as another action that advances time.</p><p><b>Exploration between checkpoints</b>The developer says you can explore and practise for unlimited real-world time between those checkpoints.</p><p><b>Why the pressure exists</b>You cannot help everyone. Choosing one commitment can change what remains possible later.</p></div> },
      { title: "Can you turn the timer off or keep every quest?", body: <p><b>No timer-free mode has been officially announced.</b> The developer also has not published a guaranteed way to see every quest in one run. Do not trust a claimed “disable the 30-day limit” workaround before the released game, patch notes and reproducible testing exist.</p> },
      { title: "What still needs launch testing", body: <ul><li>The exact number of time segments each quest, activity or day/night change consumes.</li><li>Whether every type of free exploration remains time-neutral in the released version.</li><li>Post-ending free roam and the exact consequences of each missed objective.</li></ul> },
      { title: "Practical pre-launch advice", body: <p>If this mechanic affects whether you buy, wait for a launch review that shows the game version, a normal quest hand-in, an exploration segment and the in-game time display. A short clip or a forum claim alone cannot answer all four questions.</p> },
    ]}
  />;
}

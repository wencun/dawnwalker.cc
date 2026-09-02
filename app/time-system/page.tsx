import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker 30-Day Time Limit: Does Exploration Advance Time?",
  "How The Blood of Dawnwalker's 30-day time limit works: 8 daytime units, what advances time, whether exploration uses time and if you can complete every quest.",
  "/time-system",
  ["The Blood of Dawnwalker time limit", "Blood of Dawnwalker 30 days", "Blood of Dawnwalker time system", "Blood of Dawnwalker timer free mode", "Does exploration advance time in Blood of Dawnwalker"]
);

export default function TimeSystemPage() {
  return <GuidePage
    eyebrow="PLAYER CHOICE · OFFICIAL MECHANICS"
    title="Does The Blood of Dawnwalker’s 30-day limit make you rush?"
    dek="No. It is not a real-world countdown: exploration can be time-neutral, while specific choices and quest actions spend in-game time. The official opening example divides daylight into 8 parts."
    checked="September 2, 2026"
    nativeAdAfter="What advances the in-game time?"
    faqs={[
      { question: "Is The Blood of Dawnwalker's 30-day limit a real-time countdown?", answer: "No. Official explanations say you can spend unlimited real-world time exploring between time-advancing choices and checkpoints." },
      { question: "How many time units are in a day in The Blood of Dawnwalker?", answer: "The official PlayStation Blog describes the opening day between dawn and sunset as 8 parts. It does not yet confirm that every later day and night uses an identical 8-unit structure." },
      { question: "Does exploration advance time in The Blood of Dawnwalker?", answer: "Wandering, watching and listening can be time-neutral. Intervening through choices, quest actions and some day-night transitions can move time forward." },
      { question: "Can you complete every quest in one playthrough?", answer: "The official material says you will not have time for everyone. No official source guarantees that every quest can be completed in one playthrough." },
    ]}
    sources={[{ label: "Bandai Namco — official game overview", href: "https://www.bandainamcoent.com/games/dawnwalker" }, { label: "Official Gameplay Reveal Recap", href: "https://en.bandainamcoent.eu/dawnwalker/news/the-blood-of-dawnwalker-gameplay-reveal-recap" }, { label: "PlayStation Blog — 8 daytime parts and time-driven choices", href: "https://blog.playstation.com/2026/07/07/the-blood-of-dawnwalker-unique-time-driven-quest-system-and-player-choice-detailed/" }]}
    sections={[
      { title: "Short answer: it is not a real-world countdown", body: <p><b>The official gameplay recap says you have limitless real-world time to explore and prepare between time checkpoints.</b> The 30-day pressure is part of the story and progresses through specific choices and quest actions, rather than ticking down while you spend real time walking around the map.</p> },
      { title: "How many time units are in a day?", body: <><p><b>The official PlayStation Blog describes the opening day between dawn and sunset as 8 parts.</b> Wandering, watching and listening do not consume those parts in the example; time moves when Coen intervenes and makes choices.</p><p className="note">This confirms an 8-part daylight structure in the documented Laslea opening. It does not yet prove that every later day and night always uses the same 8-unit layout, so that broader claim still needs release-build verification.</p></> },
      { title: "Why are players debating the 30-day system?", body: <div className="fact-grid"><p><b>The fear: being rushed</b>Open-world RPG players often expect to wander, finish every side quest and return later. A 30-day premise raises a reasonable concern that exploration could make them miss story content.</p><p><b>The design: time as a resource</b>This is not a stopwatch counting down while you play. The intended trade-off is which commitments are worth spending in-game time on, because not every person or objective can be prioritised.</p><p><b>What it does not promise</b>It does not promise a completionist run with every quest in one playthrough, a timer-free setting, or post-ending free roam.</p><p><b>The practical question</b>Before buying, ask “what advances time and how clearly is the cost shown?” rather than “how many real-life hours do I have?” The precise costs still need release-build testing.</p></div> },
      { title: "What advances the in-game time?", body: <div className="fact-grid"><p><b>Quest progression</b>The official site says that taking on quests moves time forward; the gameplay recap describes certain completed goals as checkpoints.</p><p><b>Changing day to night</b>The official gameplay recap identifies changing from day to night as another action that advances time.</p><p><b>Exploration between checkpoints</b>The developer says you can explore and practise for unlimited real-world time between those checkpoints.</p><p><b>Why the pressure exists</b>You cannot help everyone. Choosing one commitment can change what remains possible later.</p></div> },
      { title: "Can you turn the timer off or keep every quest?", body: <p><b>No timer-free mode has been officially announced.</b> The developer also has not published a guaranteed way to see every quest in one run. Do not trust a claimed “disable the 30-day limit” workaround before the released game, patch notes and reproducible testing exist.</p> },
      { title: "Can you complete every quest or save everyone?", body: <><p><b>No official source promises that you can complete every quest or save everyone in one playthrough.</b> The publisher explicitly says you will not have time for everyone. That supports meaningful trade-offs, but it does not reveal which quests conflict, whether New Game Plus changes the limit or exactly what happens after day 30.</p><p>Those answers should be added only after the release build can be tested or an official source explains them. Until then, they are useful questions—not verified standalone guide topics.</p></> },
      { title: "What still needs launch testing", body: <ul><li>The exact time cost of each quest action, dialogue choice, activity or day/night change.</li><li>Whether every type of free exploration remains time-neutral outside the documented opening.</li><li>What happens after day 30, post-ending free roam and the exact consequences of each missed objective.</li></ul> },
      { title: "Practical pre-launch advice", body: <p>If this mechanic affects whether you buy, wait for a launch review that shows the game version, a normal quest hand-in, an exploration segment and the in-game time display. A short clip or a forum claim alone cannot answer all four questions.</p> },
    ]}
  />;
}

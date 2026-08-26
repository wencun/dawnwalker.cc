import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Does The Blood of Dawnwalker Have a Time Limit? Official Time System",
  "What The Blood of Dawnwalker officially confirms about its quest-driven time system, consequences and the questions that remain unanswered before launch.",
  "/time-system",
  ["The Blood of Dawnwalker time limit", "Blood of Dawnwalker 30 days", "Blood of Dawnwalker time system"]
);

export default function TimeSystemPage() {
  return <GuidePage
    eyebrow="PLAYER CHOICE · OFFICIAL MECHANICS"
    title="Does The Blood of Dawnwalker have a time limit?"
    dek="The game has a quest-driven time system with consequences. This page separates what the official site confirms from the details that require launch testing."
    checked="August 26, 2026"
    sources={[{ label: "Bandai Namco — official game overview", href: "https://www.bandainamcoent.com/games/dawnwalker" }]}
    sections={[
      { title: "What is confirmed", body: <div className="fact-grid"><p><b>Time moves with quests</b>The official site says every time you take on a quest, time moves forward.</p><p><b>Choices have consequences</b>The publisher says you will not have time for everyone, so deciding whom to help matters.</p><p><b>Day and night differ</b>The game has two gameplay loops, with different abilities and ways to approach goals.</p><p><b>Story pressure</b>Your family’s days are numbered; the system is part of the game’s central premise.</p></div> },
      { title: "What is not confirmed", body: <ul><li>Do not assume that a “30-day” headline means a real-world countdown or a fixed number of play hours.</li><li>Do not assume that free exploration always advances, or never advances, time until the released game and developer guidance demonstrate it.</li><li>We have no official confirmation of a toggle to disable the system, post-ending free roam, or the exact consequences of every missed objective.</li></ul> },
      { title: "Practical pre-launch advice", body: <p>If this mechanic affects whether you buy, wait for a launch review that shows the game version, a normal quest hand-in, an exploration segment and the in-game time display. A short clip or a forum claim alone cannot answer all four questions.</p> },
    ]}
  />;
}

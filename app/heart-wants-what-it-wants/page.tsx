import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Heart Wants What It Wants: Ocha, Andrei's Ring & Choices",
  "The Blood of Dawnwalker The Heart Wants What It Wants walkthrough: help Ocha, take Andrei's ring from the balcony route, distract the guard and understand the spoiler-marked Ocha choice.",
  "/heart-wants-what-it-wants",
  [
    "The Blood of Dawnwalker Ocha",
    "Blood of Dawnwalker resolve Ocha's problem",
    "The Heart Wants What It Wants Dawnwalker",
    "Dawnwalker Andrei ring",
    "Dawnwalker Ocha choice",
  ],
);

export default function HeartWantsWhatItWantsPage() {
  return <GuidePage
    eyebrow="OCHA QUEST · SPOILER-MARKED CHOICES"
    title="The Heart Wants What It Wants: Ocha, Andrei&apos;s ring and choices"
    dek="To follow Ocha&apos;s non-combat plan, enter Andrei&apos;s shop from the upper balcony at night, take the ring, give it to Ocha, distract the guard with the pig pen and draw the hex outside. Keep a save before the later river conversation."
    checked="September 14, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · RESOLVE OCHA&apos;S PROBLEM</span><p><b>Use the night balcony route and take Andrei&apos;s ring—not the pendant or cleaver.</b> Return to Ocha, give her the ring, open the pig pen to distract the guard, then draw the hex outside the shop. Going downstairs or giving a wrong memento starts the combat route instead.</p></div>}
    faqs={[
      { question: "How do I resolve Ocha's problem in The Blood of Dawnwalker?", answer: "For Ocha's plan, enter Andrei's shop from the upper balcony at night, take the ring, give it to Ocha, open the pig pen to distract the guard, and draw the hex outside." },
      { question: "Which item should I give Ocha: ring, pendant or cleaver?", answer: "Give Ocha the ring. PC Gamer's walkthrough identifies it as the correct memento for her spell." },
      { question: "Should I kill Andrei in The Heart Wants What It Wants?", answer: "The published route says the combat choice changes Ocha's later options rather than providing an immediate advantage. Make a manual save before choosing if you want to compare the branches." },
      { question: "What happens after helping Ocha?", answer: "The later river conversation determines Ocha's next destination. This page keeps the full outcome details behind a spoiler-marked section rather than putting them in the opening answer." },
    ]}
    nextSteps={[
      { label: "Continue Lacra's route", href: "/lacra-romance", description: "Keep Ocha's quest separate from Lacra's romance and late choices." },
      { label: "Plan an ending save", href: "/endings", description: "Use a manual save before outcomes you may want to compare." },
      { label: "Understand time costs", href: "/time-system", description: "Quest routes and choices can spend in-game time; exploration is not the same thing." },
    ]}
    sources={[
      { label: "PC Gamer — The Heart Wants What It Wants walkthrough and Ocha outcomes", href: "https://www.pcgamer.com/games/rpg/blood-of-dawnwalker-the-heart-wants-what-it-wants-walkthrough/" },
      { label: "Dawnwalker Codex — A Mother's Plea objective list", href: "https://dawnwalkercodex.com/quests/a-mother-s-plea" },
    ]}
    sections={[
      { title: "Ocha solution checklist", body: <ol><li><b>Take the upper route at night:</b> use vampire mobility to enter Andrei&apos;s butcher shop through the balcony.</li><li><b>Choose the ring:</b> take Andrei&apos;s ring from the available mementos. Do not substitute the pendant or cleaver.</li><li><b>Give the ring to Ocha:</b> return to the balcony dialogue and confirm the ring before proceeding.</li><li><b>Open the pig pen:</b> distract the guard, then draw the hex outside the shop.</li><li><b>Save before the river conversation:</b> the subsequent advice to Ocha leads to a route choice.</li></ol> },
      { title: "Why the ring matters", body: <div className="fact-grid"><p><b>Correct memento</b>The ring is the item Ocha needs for her spell in the published walkthrough.</p><p><b>Wrong memento</b>The spell fails and the route changes to a confrontation with Andrei.</p><p><b>Going downstairs</b>Entering through the lower route also initiates combat rather than Ocha&apos;s intended plan.</p><p><b>Do not assume a combat reward</b>The cited route does not identify an immediate gameplay advantage to killing Andrei; it changes the later choice context.</p></div> },
      { title: "Spoiler-marked: choosing Ocha's next step", body: <p>After the shop sequence, meet Ocha by the river. The later dialogue decides whether she remains connected to Svartrau or returns toward the Uriashi settlement. The outcome depends on both the shop branch and the advice you give. Make a manual save before this conversation if you want to test alternatives; the quest still awards the reported Broad Swing Swordmastery manual on the documented paths.</p> },
      { title: "If you are stuck before meeting Ocha", body: <p>The broader quest is <b>A Mother&apos;s Plea</b>. Its journal can send you to multiple taverns while looking for Ocha before the Andrei portion becomes available. Follow the current journal marker and exact objective text rather than using the balcony instructions at an earlier step.</p> },
      { title: "More route planning", body: <p>For other time-sensitive character decisions, use the <Link href="/walkthrough">walkthrough hub</Link>. For a distinct named quest with time-gated visits and gear rewards, see <Link href="/volk-buried-past">Volk&apos;s Buried Past route</Link>.</p> },
    ]}
  />;
}

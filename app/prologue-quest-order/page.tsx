import Image from "next/image";
import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

const route = [
  ["1 · MORNING", "Live Bait"], ["2 · MORNING", "Dead Drop + Withering Away"],
  ["3 · NOON", "Page-Turner (optional)"], ["4 · NOON", "Withering Away · part 2"],
  ["5 · AFTERNOON", "Enter Not + If A Tree Falls + Deep Down"], ["6 · AFTERNOON", "Blasphemy"],
  ["7 · EVENING", "Disturbed"], ["8 · EVENING", "Like Father, Like Son"],
];

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Prologue Walkthrough & Best Quest Order",
  "A visual Dawnwalker prologue quest order for all eight daytime segments, what to do before sundown, which quests can wait and how to avoid wasting time.",
  "/prologue-quest-order",
  ["The Blood of Dawnwalker prologue walkthrough", "Dawnwalker prologue quest order", "what to do before sundown Dawnwalker", "best Dawnwalker quest order", "Dawnwalker prologue time segments"],
);

export default function PrologueQuestOrderPage() {
  return <GuidePage
    eyebrow="PROLOGUE WALKTHROUGH · SPOILERS"
    title="The Blood of Dawnwalker prologue quest order: what to do before sundown"
    dek="The prologue gives you eight daytime segments and deliberately does not leave enough time for every marked task. This route prioritizes story consequences and time-sensitive quests; it is a published tested route, not the only valid role-playing choice."
    checked="September 4, 2026"
    quickAnswer={<div className="answer-visual route-hero"><div><span>ROUTE AT A GLANCE</span><h2>Eight segments. Prioritize timed quests; leave non-expiring work for later.</h2><p>Look for the clock on time-sensitive quests and the hourglass cost before confirming an action.</p></div><Image src="/dawnwalker-coen.png" alt="Coen during the opening hours of The Blood of Dawnwalker" width={1280} height={720} priority /></div>}
    nextSteps={[
      { label: "Use the eight-part route", href: "#route", description: "Match each morning, noon, afternoon and evening segment." },
      { label: "Make Esme's medicine", href: "/how-many-spoonfuls-of-herbs", description: "Use the illustrated hot-water and three-spoonful answer." },
      { label: "Understand time costs", href: "/time-system", description: "Learn which icons indicate expiry and spent segments." },
    ]}
    faqs={[
      { question: "Can you complete every quest in the Dawnwalker prologue?", answer: "No. The prologue is designed around limited time, so some available activities must be skipped or postponed." },
      { question: "How many time segments are in the Dawnwalker prologue day?", answer: "There are eight daytime segments: two morning, two noon, two afternoon and two evening segments before Mass." },
      { question: "What should you do before sundown in The Blood of Dawnwalker?", answer: "Prioritize quests marked as time-sensitive, check each hourglass cost and leave non-expiring work such as Into the Den for after the prologue." },
    ]}
    sources={[
      { label: "PC Gamer — tested prologue walkthrough and quest order", href: "https://www.pcgamer.com/games/rpg/blood-of-dawnwalker-prologue-quests-order/" },
      { label: "Bandai Namco — official gameplay and time-system recap", href: "https://en.bandainamcoent.eu/dawnwalker/news/the-blood-of-dawnwalker-gameplay-reveal-recap" },
      { label: "PowerPyx — all-quests walkthrough index", href: "https://www.powerpyx.com/the-blood-of-dawnwalker-walkthrough-all-quests/" },
    ]}
    sections={[
      { title: "Best prologue quest order at a glance", body: <><div id="route" className="time-route">{route.map(([time, quest]) => <div key={time}><span>{time}</span><b>{quest}</b></div>)}</div><p className="note">Route provenance: condensed from PC Gamer&apos;s launch-build route after repeated prologue testing. We have not independently reproduced every dialogue consequence, so use it as a prioritized route rather than a claim that one path is canon.</p></> },
      { title: "How to read the time icons", body: <div className="icon-guide"><div><strong>◷</strong><p><b>Clock</b>Quest availability is time-sensitive.</p></div><div><strong>⌛</strong><p><b>Hourglass + number</b>The action spends that many segments.</p></div><div><strong>8</strong><p><b>Day segments</b>Two each for morning, noon, afternoon and evening.</p></div><div><strong>4</strong><p><b>Guard penalty</b>Getting caught stealing can waste four segments.</p></div></div> },
      { title: "The medicine choice inside Withering Away", body: <><p>When the medicine step asks for water and herbs, use <b>hot water and three spoonfuls</b>. The separate <Link href="/how-many-spoonfuls-of-herbs">illustrated herbs answer</Link> explains the two prompts without making you scroll through the full route.</p><div className="mini-recipe" aria-label="Medicine recipe: hot water and three spoonfuls"><span>HOT WATER</span><i>+</i><span>3 SPOONFULS</span><i>→</i><strong>MEDICINE</strong></div></> },
      { title: "Which quests can wait?", body: <div className="fact-grid"><p><b>Into the Den</b>The referenced tested route treats this as non-time-sensitive and leaves it for after the prologue.</p><p><b>On the Run</b>Useful character context, but the tested priority route skips it before Mass.</p><p><b>Someone Needs A Lesson</b>Character flavor rather than the route&apos;s highest story-consequence priority.</p><p><b>Your role-play still matters</b>A different emotional or character-first route can be valid even if it is not optimized.</p></div> },
      { title: "Avoid these expensive mistakes", body: <ul><li>Do not confirm an action until you have checked its displayed segment cost.</li><li>Do not spend shrine-training time during the prologue without checking what it displaces.</li><li>Do not assume every quest marker expires; prioritize the ones carrying the clock icon.</li><li>Keep a manual save before the last afternoon and evening commitments.</li></ul> },
      { title: "What to read after Mass", body: <p>Continue through the <Link href="/walkthrough">walkthrough hub</Link> for verified quest answers. For planning beyond the prologue, the <Link href="/time-system">30-day time-system guide</Link> separates real-world exploration time from actions that spend in-game segments.</p> },
    ]}
  />;
}

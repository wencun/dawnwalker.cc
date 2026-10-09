import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Blood of Dawnwalker Choices: Best Choices, Consequences, Endings & Romance",
  "Blood of Dawnwalker choices guide for best choices, Xanthe, Ocha, Ambrus, Font of Life, prologue choices, romance consequences and ending routes.",
  "/choices",
  ["blood dawnwalker choice", "blood of dawnwalker best choices", "blood of dawnwalker choices matter", "blood of dawnwalker xanthe choice", "blood of dawnwalker ocha choice", "blood of dawnwalker ambrus choice", "blood of dawnwalker prologue choices", "blood of dawnwalker font choice"],
);

export default function ChoicesPage() {
  return <GuidePage
    eyebrow="CHOICE GUIDE · CONSEQUENCES AND SAVE POINTS"
    title="Blood of Dawnwalker choices: best choices and consequences"
    dek="Use this spoiler-aware choice hub before major dialogue, romance and ending branches. It points existing decisions to full guides and keeps minor choice searches from becoming thin pages."
    checked="October 9, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · CHOICES</span><p><b>Yes, choices matter, especially when they affect time, quest rewards, romance routes or endings.</b> Make manual saves before Font of Life, Ocha, Lacra, Xanthe and final-story commitments.</p></div>}
    faqs={[
      { question: "Do choices matter in Blood of Dawnwalker?", answer: "Yes. The game ties choices to quest outcomes, time pressure, romance routes and endings, so manual saves before major branches are recommended." },
      { question: "What are the best choices?", answer: "The best choice depends on whether you want a reward, romance outcome, ending route or roleplay result. Use focused quest pages for exact branches." },
      { question: "Which choices affect endings?", answer: "Ending routes depend on time, final commitments and some companion or early-game outcomes. Use the endings guide before the finale." },
    ]}
    nextSteps={[
      { label: "Plan endings", href: "/endings", description: "Use the safest finale save plan." },
      { label: "Choose Font of Life", href: "/font-of-life", description: "Compare perk, Anca and Ancient Greaves outcomes." },
      { label: "Solve Ocha's route", href: "/heart-wants-what-it-wants", description: "Use the ring route and river choice." },
      { label: "Plan romance", href: "/romance", description: "Avoid breaking companion routes by accident." },
    ]}
    sources={[
      { label: "Dawnwalker Guide — Endings", href: "/endings" },
      { label: "Dawnwalker Guide — Font of Life", href: "/font-of-life" },
      { label: "Dawnwalker Guide — Ocha route", href: "/heart-wants-what-it-wants" },
      { label: "Dawnwalker Guide — Romance options", href: "/romance" },
    ]}
    sections={[
      { title: "Choice searches with full answers", body: <table className="editorial-table"><caption>Open the dedicated guide when the choice has a complete route</caption><thead><tr><th scope="col">Choice search</th><th scope="col">Best page</th><th scope="col">Why it matters</th></tr></thead><tbody><tr><th scope="row">Font choice / Font of Life</th><td><Link href="/font-of-life">Font of Life</Link></td><td>Reward and character outcome.</td></tr><tr><th scope="row">Ocha choice</th><td><Link href="/heart-wants-what-it-wants">Ocha route</Link></td><td>Quest branch and later route context.</td></tr><tr><th scope="row">Lacra choice / Lacra ending</th><td><Link href="/lacra-romance">Lacra romance</Link></td><td>Companion route and ending variation.</td></tr><tr><th scope="row">Prologue choices</th><td><Link href="/prologue-quest-order">Prologue quest order</Link></td><td>Time and early route planning.</td></tr><tr><th scope="row">Final choices</th><td><Link href="/endings">Endings</Link></td><td>Outcome and replay planning.</td></tr></tbody></table> },
      { title: "Before choosing, ask what the searcher wants", body: <div className="fact-grid"><p><b>Best reward</b>Compare gear, perks and quest rewards.</p><p><b>Best ending</b>Preserve pre-deadline and pre-finale saves.</p><p><b>Best romance</b>Finish companion prerequisites before the final route.</p><p><b>Best roleplay</b>Accept that some branches are narrative, not loot-optimized.</p></div> },
      { title: "Unserved choice keywords to hold here", body: <p>Xanthe choice, Ambrus choice, Isbrand choice, mass choices and all choices should sit on this hub until each has a verified branch, consequence and reward. Once one of those topics can answer the user in full, split it into a dedicated page and link back here.</p> },
      { title: "CTR angle for Google results", body: <p>The title and description target “best choices” and “choices matter” because those searches usually want a safe answer fast. The page then sends readers to the exact branch guide, reducing pogo-sticking and keeping the click useful.</p> },
    ]}
  />;
}

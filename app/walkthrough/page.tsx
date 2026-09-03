import Image from "next/image";
import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Walkthrough: Quests, Choices & Routes",
  "A spoiler-aware The Blood of Dawnwalker walkthrough hub for the prologue, quest order, timed choices, romance routes, fixes and exact quest answers.",
  "/walkthrough",
  ["The Blood of Dawnwalker walkthrough", "Blood of Dawnwalker quest guide", "Dawnwalker choices", "Dawnwalker prologue walkthrough", "Dawnwalker quest order"],
);

export default function WalkthroughPage() {
  return <GuidePage
    eyebrow="WALKTHROUGH HUB · SPOILER AWARE"
    title="The Blood of Dawnwalker walkthrough: quests, choices and routes"
    dek="Use this as a route map, not a fake 'complete' guide. Open the exact answer you need, check the spoiler label and return here as verified launch-build quest pages are added."
    checked="September 4, 2026"
    quickAnswer={<div className="answer-visual"><div><span>START HERE</span><h2>Plan the prologue first, then solve one quest or decision at a time.</h2><p>Timed objectives show a clock; actions that consume segments show an hourglass and cost.</p></div><Image src="/dawnwalker-coen.png" alt="Coen in The Blood of Dawnwalker" width={1280} height={720} priority /></div>}
    nextSteps={[
      { label: "Follow the prologue order", href: "/prologue-quest-order", description: "Use all eight segments before sundown intentionally." },
      { label: "Solve the medicine recipe", href: "/how-many-spoonfuls-of-herbs", description: "Choose hot water and three spoonfuls." },
      { label: "Plan the 30-day clock", href: "/time-system", description: "Separate free exploration from segment-spending actions." },
    ]}
    sources={[
      { label: "Bandai Namco — official gameplay and time-system recap", href: "https://en.bandainamcoent.eu/dawnwalker/news/the-blood-of-dawnwalker-gameplay-reveal-recap" },
      { label: "PC Gamer — tested prologue quest order", href: "https://www.pcgamer.com/games/rpg/blood-of-dawnwalker-prologue-quests-order/" },
      { label: "PowerPyx — launch-build all-quests index", href: "https://www.powerpyx.com/the-blood-of-dawnwalker-walkthrough-all-quests/" },
    ]}
    sections={[
      { title: "Choose the answer you need", body: <div className="guide-map"><Link href="/prologue-quest-order"><span>01</span><b>Prologue route</b><small>Eight segments and what to do before Mass.</small></Link><Link href="/how-many-spoonfuls-of-herbs"><span>02</span><b>Withering Away medicine</b><small>Hot water and three spoonfuls.</small></Link><Link href="/time-system"><span>03</span><b>Time and quest expiry</b><small>Icons, checkpoints and the 30-day pressure.</small></Link><Link href="/romance"><span>04</span><b>Romance routes</b><small>Anca, Lacra and Crake (Marat).</small></Link></div> },
      { title: "How to use this walkthrough without spoiling the game", body: <div className="spoiler-scale"><div><b>LOW</b><span>Quest order and time cost</span></div><div><b>MEDIUM</b><span>Objective steps and rewards</span></div><div><b>HIGH</b><span>Consequences, deaths and endings</span></div></div> },
      { title: "Walkthrough coverage status", body: <div className="coverage-board"><div><b>LIVE</b><span>Prologue order</span></div><div><b>LIVE</b><span>Medicine recipe</span></div><div><b>LIVE</b><span>Time-system planning</span></div><div className="pending"><b>BUILDING</b><span>Named quest walkthroughs</span></div><div className="pending"><b>BUILDING</b><span>Choice consequences</span></div><div className="pending"><b>NEEDS ORIGINAL DATA</b><span>Map and collectibles</span></div></div> },
      { title: "What deserves its own page", body: <p>A question becomes a separate guide when it has a distinct search intent and enough evidence for a complete answer—such as one quest route, one choice consequence or one collectible set. Minor dialogue variations stay inside their parent quest so the site does not create dozens of thin, competing pages.</p> },
      { title: "Launch help while playing", body: <div className="fact-grid"><p><b>Controller movement</b>If sprint stops while turning diagonally, use the <Link href="/controller-movement-fix">illustrated controller fix</Link>.</p><p><b>Crashes or stutter</b>Check the <Link href="/known-issues">known-issues tracker</Link> before changing several settings.</p><p><b>PC compatibility</b>Compare official specifications in the <Link href="/can-i-run">PC checker</Link>.</p><p><b>Console modes</b>Compare PS5, PS5 Pro and Xbox targets in the <Link href="/console-performance">performance guide</Link>.</p></div> },
    ]}
  />;
}

import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Blood of Dawnwalker Xanthe: Boss Route, Fight & Vrakhir Blood",
  "Blood of Dawnwalker Xanthe guide: who Xanthe is, how her Court route leads to the boss, and what to verify before choosing whether to drink her Vrakhir blood.",
  "/xanthe-boss-guide",
  ["Blood of Dawnwalker Xanthe", "The Blood of Dawnwalker Xanthe", "Dawnwalker Xanthe boss", "how to beat Xanthe Dawnwalker", "Xanthe Vrakhir blood"],
);

export default function XantheBossGuidePage() {
  return <GuidePage
    eyebrow="XANTHE GUIDE · BOSS AND QUEST SPOILERS"
    title="Blood of Dawnwalker Xanthe: boss route and Vrakhir blood guide"
    dek="Xanthe is the boyaress of southeastern Vale Sangora. This spoiler-marked guide separates her official character background, the Court route that leads to her fight, and the choice to drink Vrakhir blood after defeating her."
    checked="September 8, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · XANTHE</span><p><b>Xanthe is one of the three Vrakhir rulers tied to Brencis&apos;s Court.</b> Current walkthroughs route her fight through her Court progression. After a Vrakhir boss fight, the choice to drink that boss&apos;s blood can unlock an ability; make a save before a major choice.</p></div>}
    faqs={[
      { question: "Who is Xanthe in The Blood of Dawnwalker?", answer: "Xanthe is a boyaress who controls southeastern Vale Sangora and works for Brencis&apos;s army. She is one of the Vrakhir figures connected to the Court progression." },
      { question: "Is Xanthe a boss in Blood of Dawnwalker?", answer: "Yes. Current walkthroughs identify Xanthe as one of the key Vrakhir boss encounters reached through Court progression." },
      { question: "What does Xanthe&apos;s Vrakhir blood do?", answer: "Current guides describe choosing to drink the blood of defeated Vrakhir bosses to unlock abilities. Verify the exact ability in your current game version and save before committing to a major boss outcome." },
    ]}
    nextSteps={[
      { label: "Plan the ending saves", href: "/endings", description: "Keep a pre-finale save before committing to late routes." },
      { label: "Read the full walkthrough", href: "/walkthrough", description: "Use focused routes for other Court objectives." },
      { label: "Understand the time limit", href: "/time-system", description: "Keep Court progress and time costs visible together." },
    ]}
    sources={[
      { label: "Bandai Namco — official Xanthe character profile", href: "https://en.bandainamcoent.eu/dawnwalker/the-blood-of-dawnwalker/characters/xanthe" },
      { label: "PC Gamer — Vrakhir blood bosses and ability choice", href: "https://www.pcgamer.com/games/rpg/blood-of-dawnwalker-vrakhir-blood-abilities/" },
      { label: "PowerPyx — quest walkthrough and Court progression", href: "https://www.powerpyx.com/the-blood-of-dawnwalker-walkthrough-all-quests/" },
    ]}
    sections={[
      { title: "Who is Xanthe?", body: <div className="fact-grid"><p><b>Role</b>Xanthe is a boyaress aligned with Brencis.</p><p><b>Territory</b>The official profile places her in the southeastern parts of Vale Sangora.</p><p><b>Story connection</b>She is one of the Vrakhir power figures linked to the Court objectives.</p><p><b>Spoiler note</b>Specific fight phases, dialogue and outcome scenes are intentionally not placed in the opening answer.</p></div> },
      { title: "How does the Xanthe boss route work?", body: <ol><li><b>Track Xanthe&apos;s Court progression:</b> use the Court menu and active quest log rather than searching the map for a random boss marker.</li><li><b>Complete the required route steps:</b> published walkthroughs connect the encounter to the Court sequence and its related operations.</li><li><b>Save before the boss:</b> make a manual save before starting the final encounter so a failed fight or later choice does not cost unrelated progress.</li><li><b>Check the post-fight choice:</b> if the current build presents a Vrakhir-blood option, read it before selecting; guides describe these choices as ability unlocks rather than ordinary loot.</li></ol> },
      { title: "Xanthe&apos;s blood and ability choices", body: <p>Current launch guides group Xanthe with the Vrakhir bosses whose blood can unlock abilities after defeat. That is a different progression path from ordinary skill points. Because patches can alter conditions, verify the prompt shown in your game and do not rely on an old clip for an irreversible choice. If you are trying to see multiple late-game routes, use the <Link href="/endings">ending save plan</Link> first.</p> },
      { title: "What this guide does not claim", body: <p>This page does not promise one build, one difficulty setting or one boss tactic works for every player. It provides the verified route context and separates official character information from current walkthrough reporting. Add platform, patch version, difficulty and the exact phase if you report a Xanthe fight problem.</p> },
    ]}
  />;
}

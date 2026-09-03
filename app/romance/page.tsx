import { GuidePage, guideMetadata } from "../guide-page";
import Image from "next/image";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Romance Options: Anca, Lacra & Crake",
  "Spoiler-aware The Blood of Dawnwalker romance guide covering all three routes—Anca, Lacra and Crake (Marat)—their starting quests and multiple romances.",
  "/romance",
  [
    "The Blood of Dawnwalker romance options",
    "Dawnwalker Anca romance",
    "Dawnwalker Lacra romance",
    "Dawnwalker Crake Marat romance",
    "Can you romance multiple characters in Dawnwalker",
  ],
);

export default function RomancePage() {
  return <GuidePage
    eyebrow="ROMANCE GUIDE · ROUTE SPOILERS"
    title="The Blood of Dawnwalker romance options: Anca, Lacra and Crake"
    dek="There are three romance routes: Anca, Lacra and Crake, whose birth name is Marat. Launch-build guides also report that Coen can pursue all three in one playthrough, but optional quest time and late-game scenes still make route planning important."
    checked="September 4, 2026"
    quickAnswer={<div className="answer-visual"><div><span>CONFIRMED ROSTER</span><h2>Three routes: Anca, Lacra and Crake (Marat).</h2><p>You can pursue all three, and each romance primarily advances through that character&apos;s questline.</p></div><Image src="/dawnwalker-coen.png" alt="Coen, the protagonist of The Blood of Dawnwalker" width={1280} height={720} priority /></div>}
    faqs={[
      { question: "Who can you romance in The Blood of Dawnwalker?", answer: "The three romance options are Anca, Lacra and Crake. Crake is also known by his birth name, Marat." },
      { question: "Is there a male romance option in Dawnwalker?", answer: "Yes. Crake, also known as Marat, is the male romance route and is connected to the rebel storyline." },
      { question: "Can you romance multiple characters in one Dawnwalker playthrough?", answer: "Yes. A launch-build route guide reports that Coen can pursue all three romance options in one playthrough." },
      { question: "Are there sex scenes in The Blood of Dawnwalker?", answer: "The game contains mature and sexual content, but this page does not yet have a reproduced scene-by-scene route guide. Future details will remain behind clear spoiler warnings." },
    ]}
    nextSteps={[
      { label: "Read the route map", href: "#roster", description: "See all three characters and the questlines that begin each romance." },
      { label: "Understand the time system", href: "/time-system", description: "Relationship quests may compete with other time-sensitive choices." },
      { label: "Track launch issues", href: "/known-issues", description: "Check whether a missing trigger is a route choice or a reported bug." },
    ]}
    sources={[
      { label: "PC Gamer — all three romance routes and quest requirements", href: "https://www.pcgamer.com/games/rpg/blood-of-dawnwalker-romances/" },
      { label: "GamesRadar — Anca, Lacra and Crake route walkthroughs", href: "https://www.gamesradar.com/games/action-rpg/blood-of-dawnwalker-romance-relationships/" },
      { label: "Reddit — launch-period Crake/Marat route impressions", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1w5o2wq/dont_let_anyone_tell_you_his_romance_is_bad_its/" },
      { label: "Steam — official content description", href: "https://store.steampowered.com/app/3751260/The_Blood_of_Dawnwalker/" },
    ]}
    sections={[
      {
        title: "Spoiler-light answer",
        body: <><p><b>Anca, Lacra and Crake are the three romanceable characters.</b> Crake is also known by his birth name, Marat, which explains why both names appear in player discussions. Romance choices are clearly signposted and mainly depend on completing the relevant questline.</p><p className="note">Evidence label: independent launch-build guides from PC Gamer and GamesRadar. Exact dialogue is still treated as a spoiler.</p></>,
      },
      {
        title: "Reported romance roster",
        body: <div id="roster" className="romance-routes"><div><span>A</span><b>Anca</b><small>Human · healer</small><p>Begin with her prologue medicine and Page-Turner interactions, then continue Echoes of Silenced Bells, Between the Words and The Font of Life.</p></div><div><span>L</span><b>Lacra</b><small>Vrakhiri · vampire</small><p>Begin through A Friend Like This near Svartrau, form the alliance and continue her optional route before the final sequence.</p></div><div><span>C</span><b>Crake (Marat)</b><small>Human · rebel leader</small><p>Save Mert, follow the trail to the Manumits and continue the connected rebel quests while showing clear romantic interest.</p></div></div>,
      },
      {
        title: "Can you romance all three in one playthrough?",
        body: <><p><b>Yes. PC Gamer&apos;s launch-build guide reports that Coen can romance all three characters in one playthrough.</b> That does not remove the time cost of completing optional questlines, and a character&apos;s epilogue appearance can depend on finishing their later quests.</p><div className="route-line" aria-label="All three romance routes can be pursued"><span>Anca</span><i>+</i><span>Lacra</span><i>+</i><span>Crake</span><b>ONE PLAYTHROUGH</b></div></>,
      },
      {
        title: "Route checkpoints without the ending spoilers",
        body: <div className="visual-checklist"><div><span>1</span><b>Meet the character</b><small>Each route begins inside a broader questline.</small></div><div><span>2</span><b>Prioritize optional quests</b><small>Time spent elsewhere can delay relationship progress.</small></div><div><span>3</span><b>Choose marked interest</b><small>Romantic dialogue is generally signposted.</small></div><div><span>4</span><b>Finish late quests</b><small>Later completion can affect epilogue appearances.</small></div></div>,
      },
      {
        title: "What still needs careful verification",
        body: <div className="fact-grid"><p><b>Every dialogue branch</b>Published routes show successful paths, not every possible failed response.</p><p><b>Quest failure states</b>Killed or unavailable NPCs can change access to connected content.</p><p><b>Multiple-romance reactions</b>The routes can coexist, but every late dialogue variation is not fully mapped here.</p><p><b>Ending combinations</b>Epilogue outcomes should be documented by completed route and ending, not assumed from one scene.</p></div>,
      },
      {
        title: "Spoiler policy",
        body: <p>The visible roster answers the common search question. Choice-by-choice walkthroughs, intimate scenes, breakups and ending consequences should be added only after verification and placed in clearly labelled spoiler sections—not exposed in the title or opening answer.</p>,
      },
    ]}
  />;
}

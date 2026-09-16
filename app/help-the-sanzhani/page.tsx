import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Help the Sanzhani: Letters to Lunka All 4 Quest Locations",
  "The Blood of Dawnwalker Help the Sanzhani guide: finish Good Home, unlock Letters to Lunka, find all four hidden Sanzhani quests and claim the extra day reward.",
  "/help-the-sanzhani",
  ["Blood of Dawnwalker Help the Sanzhani", "Dawnwalker Letters to Lunka", "Dawnwalker Good Home", "Dawnwalker Sanzhani locations", "Dawnwalker extra day"],
);

export default function HelpTheSanzhaniPage() {
  return <GuidePage
    eyebrow="LETTERS TO LUNKA · HIDDEN QUEST LOCATIONS"
    title="Help the Sanzhani: Letters to Lunka all 4 quest locations"
    dek="The Help the Sanzhani objective is deliberately vague. Finish Good Home, unlock Letters to Lunka at the Yawning Burrow, then find four unmarked Sanzhani quests around Vale Sangora to send more letters and earn an extra day."
    checked="September 16, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · NO WAYPOINT IS NORMAL</span><p><b>Finish Good Home first, speak to the Sanzhani Tsarina at the Yawning Burrow, then complete Pearly and Precious, Burrow Sorrows, Tiny Dancer and Come Hither.</b> Return to the Tsarina to send a letter after each favour. The objective does not point to the next fairy on your map until you reach the relevant area.</p></div>}
    faqs={[
      { question: "How do I complete Help the Sanzhani in The Blood of Dawnwalker?", answer: "Finish Good Home, unlock Letters to Lunka with the Sanzhani Tsarina, then complete the four hidden Sanzhani quests: Pearly and Precious, Burrow Sorrows, Tiny Dancer and Come Hither. Return to the Tsarina after each one to send the next letter." },
      { question: "Why does Help the Sanzhani have no quest marker?", answer: "The four follow-up favours are not normally labelled on the map before you approach their start areas. The journal repeats the same objective, so use the location list and confirm the quest title after entering each area." },
      { question: "Does helping all Sanzhani give you more time?", answer: "Launch guides report that completing Good Home and the four follow-up favours, then returning to the Tsarina, earns one additional in-game day. Check the current quest log and patch notes if your reward does not appear." },
      { question: "Where do I get Silk Threads for A Bulwark Against Darkness?", answer: "Come Hither is part of the Sanzhani route and is connected to a Silk Threads reward in current walkthroughs. Confirm the item in your inventory before returning to Uriashi; the armor page keeps the hand-in requirements separate." },
    ]}
    nextSteps={[
      { label: "Use Silk Threads for the Arbiter armor", href: "/a-bulwark-against-darkness", description: "Confirm all four components before the Uriashi ritual." },
      { label: "Plan the 30-day clock", href: "/time-system", description: "Spend the recovered day on a route that changes your run." },
      { label: "Return to the walkthrough hub", href: "/walkthrough", description: "Open the next exact quest answer without a generic quest list." },
    ]}
    sources={[
      { label: "PC Gamer — Letters to Lunka and Sanzhani quest overview", href: "https://www.pcgamer.com/games/rpg/blood-of-dawnwalker-letters-to-lunka-walkthrough-sanzhani/" },
      { label: "All Things How — Help the Sanzhani / Letters to Lunka walkthrough", href: "https://allthings.how/the-blood-of-dawnwalker-how-to-complete-help-the-sanzhani-in-letters-to-lunka/" },
      { label: "Maxbit Games — Sanzhani locations and rewards", href: "https://games.maxbit.cc/how-to-help-the-sanzhani-in-the-blood-of-dawnwalker/" },
    ]}
    sections={[
      { title: "The order that unlocks the objective", body: <div className="forge-flow"><div><span>01</span><b>Good Home</b><small>Find the Yawning Burrow route in the Svartrau Outskirts.</small></div><i>→</i><div><span>02</span><b>Letters to Lunka</b><small>Speak to the Tsarina and complete the required first setup.</small></div><i>→</i><div><span>03</span><b>Four hidden favours</b><small>Enter each start area to make its quest appear.</small></div><i>→</i><div><span>04</span><b>Return and send letters</b><small>Talk to the Tsarina after each completed favour.</small></div></div> },
      { title: "All four hidden Sanzhani quests", body: <table className="editorial-table"><caption>Use the quest title to confirm the location; map symbols can remain generic until you approach.</caption><thead><tr><th scope="col">Quest</th><th scope="col">Starting area</th><th scope="col">What to confirm</th></tr></thead><tbody><tr><th scope="row">Pearly and Precious</th><td>Near Small Bridge shrine in Briar Sloughs</td><td>Use Focus Mode to follow the blood trail after reaching the nearby camp.</td></tr><tr><th scope="row">Burrow Sorrows</th><td>North Rockfalls, northwest of Shrike&apos;s Crag</td><td>Enter the forest by the destroyed shrine, then clear the kobold favour.</td></tr><tr><th scope="row">Tiny Dancer</th><td>Svartrau City</td><td>Find the caged Sanzhani in the relevant shop and complete its rescue route.</td></tr><tr><th scope="row">Come Hither</th><td>North of Vedera Marsh Outpost</td><td>Follow the bridge route north and help the crying Sanzhani.</td></tr></tbody></table> },
      { title: "Why the objective looks stuck", body: <div className="fact-grid"><p><b>Good Home is incomplete</b>The other favours are gated until the opening burrow route and Tsarina conversation are done.</p><p><b>The next start area was not entered</b>These quests can be absent from the map until you physically approach the relevant location.</p><p><b>A favour was cleared but not closed</b>Return to the Sanzhani and finish its dialogue, then go back to the Tsarina.</p><p><b>The letter loop was skipped</b>Send the available letter at the Yawning Burrow before treating the next journal step as broken.</p></div> },
      { title: "The extra day and Silk Threads: use the reward deliberately", body: <><p>Launch guides connect the completed Sanzhani chain to <b>one extra in-game day</b>. It is meaningful because the game&apos;s deadline is finite; do not spend the recovered segments without first choosing which missable route, relationship or ending branch they protect.</p><p><b>Come Hither is also relevant to Silk Threads.</b> If you are chasing Arbiter armor, open <Link href="/a-bulwark-against-darkness">A Bulwark Against Darkness</Link> after the Sanzhani quest rather than buying or handing in an item before the armor quest log confirms it.</p></> },
    ]}
  />;
}

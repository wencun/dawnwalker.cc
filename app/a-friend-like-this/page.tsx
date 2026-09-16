import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "A Friend Like This Walkthrough: Lacra, Nish & Song of the Mountain",
  "The Blood of Dawnwalker A Friend Like This walkthrough: start the Lacra quest in Svartrau, follow the night-only roof trail, resolve the Nish conversation and unlock Song of the Mountain.",
  "/a-friend-like-this",
  ["The Blood of Dawnwalker A Friend Like This", "Dawnwalker A Friend Like This walkthrough", "Dawnwalker Lacra quest", "Dawnwalker Nish choices", "Dawnwalker Song of the Mountain unlock"],
);

export default function AFriendLikeThisPage() {
  return <GuidePage
    eyebrow="LACRA QUEST · NIGHT ROOFTOP ROUTE"
    title="A Friend Like This walkthrough: Lacra, Nish and the next quest"
    dek="Start A Friend Like This in Svartrau&apos;s north-east alley, use Focus Mode to follow the signs of struggle, wait for night to cross the roofs, then resolve the Lacra and Nish encounter without closing the alliance route."
    checked="September 16, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · QUEST ROUTE</span><p><b>At the north-east Svartrau alley, inspect the clues with Focus Mode, then wait for night to follow the roof-tile trail.</b> The Lacra fight ends before a kill; cooperate during Nish&apos;s interrogation, protect him, and the route continues to Song of the Mountain.</p></div>}
    faqs={[
      { question: "How do I start A Friend Like This in The Blood of Dawnwalker?", answer: "Go to the alley beneath the north-east Svartrau city walls and use Focus Mode on the signs of struggle. Other story leads can point toward Lacra, but the direct investigation route is a reliable start." },
      { question: "Why can't I continue the rooftop trail in A Friend Like This?", answer: "The rooftop portion requires night and vampire mobility. Inspect the fallen roof tile first, wait for darkness if necessary, then use the night form to climb and follow the trail." },
      { question: "Can you avoid fighting Lacra?", answer: "No. Current walkthroughs describe the first confrontation as unavoidable, but it ends once her health is reduced far enough for the conversation rather than requiring her death." },
      { question: "What unlocks after A Friend Like This?", answer: "A cooperative resolution with Nish continues Lacra's route into Song of the Mountain. The later romance path has separate choices; see the Lacra romance guide for those spoilers." },
    ]}
    nextSteps={[
      { label: "Plan Lacra's romance choices", href: "/lacra-romance", description: "Keep the later Mandrake branch separate from this quest route." },
      { label: "Read Ocha's alternate route", href: "/heart-wants-what-it-wants", description: "Ocha's story can provide another lead into Lacra-related content." },
      { label: "Protect an ending save", href: "/endings", description: "Alliance routes affect later story opportunities." },
    ]}
    sources={[
      { label: "All Things How — A Friend Like This walkthrough", href: "https://allthings.how/the-blood-of-dawnwalker-a-friend-like-this-walkthrough/" },
      { label: "PC Gamer — Lacra romance quest order", href: "https://www.pcgamer.com/games/rpg/blood-of-dawnwalker-romances/" },
      { label: "PC Gamer — ending route context for Lacra", href: "https://www.pcgamer.com/games/rpg/the-blood-of-dawnwalker-endings/" },
    ]}
    sections={[
      { title: "Start location and time requirement", body: <div className="fact-grid"><p><b>Start</b>Search the alley at the north-east edge of Svartrau, below the city walls, with Focus Mode.</p><p><b>First checks</b>Inspect the visible signs of a struggle and the fallen roof tile before expecting the route to move upward.</p><p><b>Night-only step</b>The roof crossing uses vampire mobility, so a daytime trail can appear blocked until night.</p><p><b>Time cost</b>Plan the route against the 30-day clock and keep a manual save before major dialogue.</p></div> },
      { title: "Follow the Svartrau trail", body: <ol><li><b>Scan the alley:</b> use Focus Mode and inspect the highlighted evidence, including the damaged wall and torn uniform.</li><li><b>Inspect the roof tile:</b> this changes the route from the street to the rooftops.</li><li><b>Wait for night:</b> do not force the human form through a vampire-mobility step.</li><li><b>Follow the broken roof trail:</b> keep Focus Mode active across the roofs until the claw marks point back to ground level.</li><li><b>Enter the nearby building:</b> the Lacra encounter begins after the final ground clues.</li></ol> },
      { title: "Lacra fight and Nish conversation", body: <><div className="risk-callout"><span>ALLIANCE ROUTE</span><p><b>The first Lacra fight is not a kill choice.</b> Current walkthroughs describe it ending after sufficient damage, followed by a conversation about Nish and the Uriashi village. If you want the cooperation route, avoid threats, hear Nish&apos;s account, identify Brencis as a shared enemy, promise protection and stop Lacra from killing him.</p></div><p>This page intentionally does not list every dialogue line as a fake universal script. Save before the exchange; the important route condition is preserving the alliance and Nish&apos;s information, not choosing aggressive shortcut language.</p></> },
      { title: "What happens next", body: <p>A cooperative outcome points to the Uriashi village and opens <b>Song of the Mountain</b>, the next Lacra quest. This is the route players need before the later relationship content; open the <Link href="/lacra-romance">Lacra romance guide</Link> only if you want those additional spoilers and Mandrake choices.</p> },
    ]}
  />;
}

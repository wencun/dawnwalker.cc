import Image from "next/image";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Forge It Anew: All Sword Shard Locations",
  "The Blood of Dawnwalker Forge It Anew walkthrough: where to start, all three sword-shard locations, Uriashi the blacksmith and the final ritual.",
  "/forge-it-anew",
  ["The Blood of Dawnwalker Forge It Anew", "Dawnwalker sword shard locations", "Dawnwalker Uriashi blacksmith", "Forge It Anew walkthrough", "Blood of Dawnwalker holy sword"],
);

export default function ForgeItAnewPage() {
  return <GuidePage
    eyebrow="QUEST WALKTHROUGH · SWORD SHARD ROUTE"
    title="The Blood of Dawnwalker Forge It Anew: all sword shard locations"
    dek="Start by reading St. Mihai&apos;s note in his coffin after the fight, collect three sword shards from marked kobold encounters, then bring them to Uriashi before completing the ritual."
    checked="September 4, 2026"
    quickAnswer={<div className="answer-visual route-hero"><div><span>QUEST FLOW · LAUNCH-BUILD DIRECTIONS</span><h2>St. Mihai&apos;s note → 3 shards → Uriashi → ritual.</h2><p>The shortest way to avoid a blocked forge quest is to confirm the note first, track each named enemy encounter, and update to Hotfix 1.0.2 before retrying a crafting issue.</p></div><Image src="/dawnwalker-hero.jpg" alt="The Blood of Dawnwalker artwork" width={1920} height={1080} priority /></div>}
    faqs={[
      { question: "How do you start Forge It Anew in The Blood of Dawnwalker?", answer: "After defeating St. Mihai, read the note in his coffin. The launch-build walkthrough used here identifies that note as the quest trigger." },
      { question: "How many sword shards are in Forge It Anew?", answer: "The cited launch-build walkthrough identifies three shards, each in a separate kobold-den encounter, before you return to Uriashi the blacksmith." },
      { question: "Why can&apos;t I craft the sword with Uriashi?", answer: "Hotfix 1.0.2 specifically fixes an Uriashi crafting issue for a certain holy sword. Update the game, reload before the interaction if possible, then confirm that all three shards and the quest trigger are complete." },
    ]}
    nextSteps={[
      { label: "Read the latest patch notes", href: "/patch-notes", description: "Hotfix 1.0.2 includes an Uriashi holy-sword crafting fix." },
      { label: "Continue the walkthrough", href: "/walkthrough", description: "Open another focused quest answer rather than a generic quest list." },
      { label: "Protect the 30-day route", href: "/what-happens-after-30-days", description: "Keep main-story time pressure separate from exploration." },
    ]}
    sources={[
      { label: "PC Gamer — Forge It Anew sword shard locations (launch build)", href: "https://www.pcgamer.com/games/rpg/blood-of-dawnwalker-forge-it-anew-sword-shard-locations/" },
      { label: "Rebel Wolves — Hotfix 1.0.2 Uriashi crafting fix", href: "https://dawnwalkergame.com/us/en/news/hotfix-102" },
    ]}
    sections={[
      { title: "The route at a glance", body: <div className="forge-flow"><div><span>01</span><b>Defeat St. Mihai</b><small>Read the note inside his coffin to trigger the quest.</small></div><i>→</i><div><span>02</span><b>Collect 3 shards</b><small>Each one comes from a different named kobold-den encounter.</small></div><i>→</i><div><span>03</span><b>Find Uriashi</b><small>Bring the pieces to the blacksmith near Uriashi Hermitage.</small></div><i>→</i><div><span>04</span><b>Complete the ritual</b><small>Finish the next quest steps to obtain the sword.</small></div></div> },
      { title: "Before you chase the shards", body: <div className="fix-callout"><span>QUEST TRIGGER CHECK</span><p><b>Read St. Mihai&apos;s coffin note after defeating him.</b> If the quest is not active, do not assume a shard is missing. Reload before the fight or interaction, confirm the note was read, and make a manual save before leaving the area.</p></div> },
      { title: "Shard 1: northeast Maragir Wealds", body: <div className="quest-route"><span>SHARD 01</span><div><b>Upper Maragir shrine → cross the river → Kobold den</b><p>From the Upper Maragir shrine in northeast Maragir Wealds, cross the nearby river and look for the kobold den tied to <i>Do Not Disturb</i>. The cited guide places the shard at a broken cross after the encounter.</p></div></div> },
      { title: "Shard 2: north of Rockfalls", body: <div className="quest-route"><span>SHARD 02</span><div><b>Westridge Outpost → east over the mountains → southwest of Giant&apos;s Pawns</b><p>Travel east over the mountains from Westridge Outpost. The route points to a white-X den directly southwest of Giant&apos;s Pawns, where the <i>Munch-Munch</i> encounter / <i>Hostile Takeover</i> objective yields the second shard.</p></div></div> },
      { title: "Shard 3: south of St. Tyna&apos;s Grove", body: <div className="quest-route"><span>SHARD 03</span><div><b>Crossroads Inn → left uphill road → kobold nest</b><p>From Crossroads Inn southeast of St. Tyna&apos;s Grove, take the left uphill road to the kobold nest. This is associated with <i>Executive Order</i>; the cited route uses Anca&apos;s <i>Echoes of Silenced Bells</i> as a nearby landmark.</p></div></div> },
      { title: "Bring the shards to Uriashi and finish the forge", body: <><p>Uriashi is located northwest of Briar Sloughs near the Uriashi Hermitage shrine. After handing over the three pieces, follow the next ritual/ruins objective to complete the sword route. <b>If Uriashi cannot craft the relevant holy sword, first install Hotfix 1.0.2</b>; the official patch note lists this exact area as fixed.</p><p className="note">Directions here are condensed from PC Gamer&apos;s launch-build walkthrough. The route diagrams are original text visuals, not copied map screenshots. Landmarks and quest availability can change with patches.</p></> },
    ]}
  />;
}

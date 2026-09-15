import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Best Sword: St. Mihai Route",
  "The Blood of Dawnwalker best sword guide: why launch guides recommend the Imbued Sword of St. Mihai, where the quest chain starts and how Forge It Anew fits the route.",
  "/best-sword",
  ["The Blood of Dawnwalker best sword", "Blood of Dawnwalker best weapon", "Dawnwalker St Mihai sword", "Dawnwalker Imbued Sword of St Mihai", "Forge It Anew best sword"],
);

export default function BestSwordPage() {
  return <GuidePage
    eyebrow="WEAPON GUIDE · QUEST-CRAFTED GREAT SWORD"
    title="The Blood of Dawnwalker best sword: St. Mihai route"
    dek="Current launch guides commonly point to the quest-crafted Imbued Sword of St. Mihai as a top late-game sword. It is not a random chest drop: use the St. Mihai / Forge It Anew route and treat “best” as build-dependent."
    checked="September 15, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER</span><p><b>For a direct best-sword answer, chase the Imbued Sword of St. Mihai through the St. Mihai quest chain, then complete Forge It Anew.</b> Launch guides describe it as one of the strongest found weapons, but a greatsword is only “best” if its reach, speed and upgrade path fit your build.</p></div>}
    faqs={[
      { question: "What is the best sword in The Blood of Dawnwalker?", answer: "Launch guides commonly recommend the Imbued Sword of St. Mihai as a top sword to pursue. It is a quest-crafted greatsword, not a universal answer for every build, enemy or preferred weapon speed." },
      { question: "How do I get St. Mihai's sword?", answer: "The route runs through the St. Mihai quest chain and Forge It Anew. Read the coffin note after the fight, gather the three shards, then return to Uriashi. Use the linked Forge It Anew walkthrough for the exact shard landmarks." },
      { question: "Is the St. Mihai sword a random drop?", answer: "No. The cited launch walkthroughs place it behind a specific quest-and-crafting route. If you are looking for a fast early weapon, do not farm generic chests expecting this sword to appear." },
    ]}
    nextSteps={[
      { label: "Find all three sword shards", href: "/forge-it-anew", description: "Follow the quest trigger, kobold dens and Uriashi return route." },
      { label: "Choose armor for your build", href: "/best-armor", description: "Keep weapon choice and armor trade-offs separate." },
      { label: "Check current patch notes", href: "/patch-notes", description: "Hotfixes can affect quest or crafting behavior." },
    ]}
    sources={[
      { label: "GamesRadar+ — Blood of Dawnwalker weapons guide", href: "https://www.gamesradar.com/games/action-rpg/blood-of-dawnwalker-weapons/" },
      { label: "VGC — St. Mihai's Silver Sword / Forge It Anew guide", href: "https://www.videogameschronicle.com/guide/blood-of-dawnwalker-st-mihais-silver-sword-forge-it-anew-quest-guide/" },
      { label: "Rebel Wolves — Hotfix 1.0.2 Uriashi crafting fix", href: "https://dawnwalkergame.com/us/en/news/hotfix-102" },
    ]}
    sections={[
      { title: "Why guides point to St. Mihai's sword", body: <><p><b>The Imbued Sword of St. Mihai is the strongest specific sword recommendation supported by the current launch-guide coverage.</b> It is valuable as a search answer because the player has a concrete destination and a quest route, rather than a vague “best build” list.</p><div className="fact-grid"><p><b>Weapon type</b>A quest-crafted greatsword, according to the cited launch guides.</p><p><b>What it is not</b>Not a guaranteed random drop and not a generic vendor purchase.</p><p><b>Best for</b>Players who want a late-game, high-impact sword route and accept a heavier weapon style.</p><p><b>Do not overread it</b>“Best” depends on your build, upgrade state, timing and preference for speed versus reach.</p></div></> },
      { title: "The shortest reliable route", body: <div className="forge-flow"><div><span>01</span><b>Reach St. Mihai</b><small>Progress the relevant Anca / St. Mihai quest chain.</small></div><i>→</i><div><span>02</span><b>Read the coffin note</b><small>After the fight, this triggers Forge It Anew.</small></div><i>→</i><div><span>03</span><b>Collect three shards</b><small>Each is tied to a separate kobold-den encounter.</small></div><i>→</i><div><span>04</span><b>Return to Uriashi</b><small>Finish the craft and the follow-up ritual route.</small></div></div> },
      { title: "Do not skip the quest trigger", body: <><div className="risk-callout"><span>COMMON ROUTE FAILURE</span><p><b>Do not leave the St. Mihai encounter assuming the shard hunt starts automatically.</b> Read the coffin note first. If Forge It Anew is not in your journal, verify that step before spending time searching every kobold den.</p></div><p>The full <Link href="/forge-it-anew">Forge It Anew walkthrough</Link> has the shard landmarks and the Uriashi return. It also notes the official Hotfix 1.0.2 crafting fix, which matters if the relevant craft remains unavailable after the route is complete.</p></> },
      { title: "How to use a “best sword” recommendation", body: <ul><li><b>Use it as a target, not a universal ranking:</b> a sword that is strong on paper may feel wrong if you prefer faster attacks or another build path.</li><li><b>Check the exact quest state first:</b> the weapon route is gated; a missing quest trigger is more likely than bad luck.</li><li><b>Upgrade and compare honestly:</b> compare weapons at similar upgrade levels and against the same enemy type.</li><li><b>Keep armor separate:</b> open the <Link href="/best-armor">best armor guide</Link> after choosing your weapon style rather than copying a one-size-fits-all loadout.</li></ul> },
    ]}
  />;
}

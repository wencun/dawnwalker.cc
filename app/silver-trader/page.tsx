import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Where to Sell Silver in The Blood of Dawnwalker: Silver Trader Location",
  "Find the Blood of Dawnwalker Silver Trader in Svartrau, learn the Into the Den and Infamy prerequisites, and sell contraband silver without an unnecessary trip.",
  "/silver-trader",
  ["Blood of Dawnwalker silver trader", "where to sell silver Blood of Dawnwalker", "Blood of Dawnwalker silver merchant", "Dawnwalker sell silver"],
);

export default function SilverTraderPage() {
  return <GuidePage
    eyebrow="MERCHANT ANSWER · LOCATION AND UNLOCK CHECK"
    title="Where to sell silver in The Blood of Dawnwalker"
    dek="Sell contraband silver to the Silver Trader in Svartrau City. Complete Into the Den first, or reach the required Infamy progression, before assuming the merchant is unavailable."
    checked="September 8, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER</span><p><b>The Silver Trader is in Svartrau City near the western gate.</b> Guides report that you must first complete Into the Den or meet the relevant Infamy progression before the trading option becomes available.</p></div>}
    faqs={[
      { question: "Where is the Silver Trader in The Blood of Dawnwalker?", answer: "Published guides place the Silver Trader in Svartrau City, near its western side." },
      { question: "Why can’t I sell silver yet?", answer: "Check whether Into the Den was completed and whether your current Infamy progression meets the merchant’s dialogue requirement." },
      { question: "Can ordinary vendors buy silver?", answer: "Silver is treated as contraband in launch guides, so ordinary vendors may not offer the relevant trade." },
    ]}
    nextSteps={[
      { label: "Follow the prologue route", href: "/prologue-quest-order", description: "Find the safe place to take the prerequisite detour." },
      { label: "Plan a quest-safe route", href: "/walkthrough", description: "Avoid spending time segments without knowing the consequence." },
      { label: "Find a stronger weapon", href: "/forge-it-anew", description: "Use the verified sword-shard route." },
    ]}
    sources={[
      { label: "PC Gamer — How to sell silver", href: "https://www.pcgamer.com/games/rpg/blood-of-dawnwalker-silver/" },
      { label: "PowerPyx — All Silver Trader locations", href: "https://www.powerpyx.com/blood-of-dawnwalker-all-silver-trader-locations/" },
      { label: "The Big Lead — Where to sell silver items", href: "https://www.thebiglead.com/blood-of-dawnwalker-sell-silver/" },
      { label: "All Things How — Silver Trader guide", href: "https://allthings.how/the-blood-of-dawnwalker-how-to-sell-silver-at-the-silver-trader/" },
    ]}
    sections={[
      { title: "The shortest route to the Silver Trader", body: <ol><li><b>Finish the prologue prerequisite.</b> Into the Den is the clearest published unlock path.</li><li><b>Travel to Svartrau City.</b> Check the western side of the city for the Silver Trader.</li><li><b>Open the dialogue after the unlock.</b> If no silver option appears, recheck the quest completion and current Infamy level.</li><li><b>Sell only after confirming the price.</b> Silver is contraband; do not discard it as ordinary junk.</li></ol> },
      { title: "Why the merchant may not appear to work", body: <div className="fact-grid"><p><b>Missing prerequisite</b>Finish Into the Den and read the resulting lead before trying again.</p><p><b>Progression gate</b>Some guides report an Infamy-based alternative unlock.</p><p><b>Wrong vendor</b>Ordinary merchants are not necessarily silver buyers.</p><p><b>Patch differences</b>Record game version if the location or dialogue differs from current guides.</p></div> },
      { title: "Before making a long trip", body: <p>Save first, verify the prerequisite in your journal, then travel. The answer is a merchant location and unlock check—not a reason to spend multiple time segments repeatedly testing unverified routes.</p> },
    ]}
  />;
}

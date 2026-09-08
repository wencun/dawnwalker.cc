import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Blood of Dawnwalker Silver Trader: Location & How to Sell Silver",
  "Find the Blood of Dawnwalker Silver Trader in Svartrau, complete the prerequisite that makes him trade, and sell contraband silver without wasting a trip.",
  "/silver-trader",
  ["Blood of Dawnwalker Silver Trader", "where to sell silver Blood of Dawnwalker", "Dawnwalker silver trader location", "how to sell silver Dawnwalker", "Into the Den Silver Trader"],
);

export default function SilverTraderPage() {
  return <GuidePage
    eyebrow="MERCHANT LOCATION · EARLY-TO-MIDGAME ROUTE"
    title="Blood of Dawnwalker Silver Trader: location and how to sell silver"
    dek="To sell contraband silver, complete Into the Den first, then visit the Silver Trader in Svartrau&apos;s Neustadt District. If he will not trade, check the quest prerequisite before searching for another merchant."
    checked="September 8, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · SELLING SILVER</span><p><b>Finish Into the Den, then go to Svartrau&apos;s Neustadt District.</b> The Silver Trader is in the city&apos;s southwest area. Without the quest&apos;s information trigger, he may refuse to buy your contraband.</p></div>}
    faqs={[
      { question: "Where is the Silver Trader in Blood of Dawnwalker?", answer: "The current published route places the Silver Trader in Svartrau City&apos;s Neustadt District, toward the southwest of the city." },
      { question: "Why won&apos;t the Silver Trader buy my silver?", answer: "Complete Into the Den before making the trip. The published route reports that its information trigger is required before the merchant will trade." },
      { question: "Can any merchant buy silver in Blood of Dawnwalker?", answer: "Silver is treated as contraband in the published route, so do not assume an ordinary merchant will buy it. Use the named Silver Trader after the prerequisite is complete." },
    ]}
    nextSteps={[
      { label: "Return to the main walkthrough", href: "/walkthrough", description: "Open the next focused quest answer after the merchant visit." },
      { label: "Find sword shards", href: "/forge-it-anew", description: "Use the separate route for Uriashi and the holy-sword quest." },
      { label: "Protect your save", href: "/cant-save", description: "Keep a save-lock issue separate from a quest prerequisite." },
    ]}
    sources={[
      { label: "PC Gamer — where to sell silver and the Into the Den prerequisite", href: "https://www.pcgamer.com/games/rpg/blood-of-dawnwalker-silver/" },
    ]}
    sections={[
      { title: "Silver Trader location at a glance", body: <div className="fact-grid"><p><b>City</b>Svartrau City.</p><p><b>District</b>Neustadt District, in the southwest part of the city.</p><p><b>Prerequisite</b>Complete Into the Den and inspect its information trigger before expecting the merchant to trade.</p><p><b>What he buys</b>Contraband silver, which ordinary merchants may not accept.</p></div> },
      { title: "How do you unlock the Silver Trader?", body: <ol><li><b>Complete Into the Den:</b> finish the early quest before travelling specifically for the Silver Trader.</li><li><b>Inspect the quest information:</b> the published route identifies this as the trigger that lets Coen use the merchant&apos;s service.</li><li><b>Travel to Svartrau:</b> enter the Neustadt District and check the southwest part of the city.</li><li><b>Choose the informed dialogue:</b> if the trader is evasive, use the dialogue showing that Coen knows what he is doing.</li><li><b>Confirm the sale:</b> sell one item first to verify that the merchant inventory and silver category are available in your current state.</li></ol> },
      { title: "If the Silver Trader still will not trade", body: <p>Do not immediately assume the game is broken. Recheck whether Into the Den is actually complete and whether the related information was inspected, then reload a recent save before the quest hand-in if the dialogue state looks wrong. If the prerequisite is complete and the same refusal persists, record the current game version, quest state and a screenshot before checking the <Link href="/known-issues">known-issues tracker</Link>.</p> },
    ]}
  />;
}

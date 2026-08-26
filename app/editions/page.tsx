import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Editions: Standard vs Eclipse",
  "Compare The Blood of Dawnwalker Standard and Eclipse editions using officially listed digital items. Regional physical editions can differ.",
  "/editions",
  ["The Blood of Dawnwalker editions", "Blood of Dawnwalker Eclipse Edition", "Blood of Dawnwalker Standard Edition"]
);

export default function EditionsPage() {
  return <GuidePage
    eyebrow="BUYING GUIDE · OFFICIAL LISTINGS"
    title="The Blood of Dawnwalker editions: what changes?"
    dek="Use this page to compare what is explicitly listed for each digital edition. Prices, physical items and availability can differ by region, so check your own store before buying."
    checked="August 26, 2026"
    sources={[
      { label: "Official buy page", href: "https://dawnwalkergame.com/us/en/buy" },
      { label: "Xbox — Eclipse Edition", href: "https://www.xbox.com/en-US/games/store/the-blood-of-dawnwalker-eclipse-edition-pre-order/9ng58jkdlp82" },
    ]}
    sections={[
      { title: "Digital editions at a glance", body: <div className="fact-grid"><p><b>Standard Edition</b>The base game. Eligible pre-orders list the Sangoran Wayfarer Armor.</p><p><b>Eclipse Edition</b>The base game, eligible pre-order armor, plus the listed digital comic, world compendium and soundtrack.</p><p><b>Physical editions</b>Day One and Collector’s contents vary by retailer and territory. Treat the retailer listing as the source of truth.</p><p><b>Early access</b>Do not assume an edition changes the unlock time unless the platform listing explicitly says so.</p></div> },
      { title: "Who should choose which?", body: <ul><li>Choose <b>Standard</b> if you only want the game and do not value digital extras.</li><li>Choose <b>Eclipse</b> only if you specifically want the digital lore material and soundtrack at the price in your region.</li><li>Before pre-ordering, compare the exact listing on your chosen PC, PlayStation or Xbox store — do not rely on a bundle name alone.</li></ul> },
      { title: "Avoid the common purchase mistakes", body: <ul><li>Do not confuse a local store date with a special early-access entitlement.</li><li>Do not assume a physical bonus ships everywhere; retailer bundles differ.</li><li>Keep a screenshot of the edition description and your receipt in case a listed entitlement is missing after launch.</li></ul> },
    ]}
  />;
}

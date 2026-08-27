import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Editions & Pre-Order Bonus: Day One, Eclipse & Collector's",
  "Compare Standard, Eclipse, Day One and Collector's Edition contents, the Sangoran Wayfarer's Armor pre-order bonus and the shared September 3 release date.",
  "/editions",
  ["The Blood of Dawnwalker editions", "Blood of Dawnwalker pre order bonus", "Blood of Dawnwalker Day One Edition", "Blood of Dawnwalker Collector's Edition", "Blood of Dawnwalker Eclipse Edition"]
);

export default function EditionsPage() {
  return <GuidePage
    eyebrow="BUYING GUIDE · OFFICIAL EDITION LIST"
    title="The Blood of Dawnwalker editions: Standard, Eclipse, Day One and Collector's"
    dek="A purchase guide for the official edition names behind the search results. Every edition includes the base game; no official edition is listed with early access. Availability and prices still depend on your region and retailer."
    checked="August 27, 2026"
    sources={[
      { label: "Official Edition Guide", href: "https://en.bandainamcoent.eu/dawnwalker/news/the-blood-of-dawnwalker-edition-guide-choosing-the-best-version-you" },
      { label: "Official buy page", href: "https://dawnwalkergame.com/us/en/buy" },
    ]}
    sections={[
      { title: "Quick answer: does an edition unlock the game earlier?", body: <p><b>No official early-access entitlement is listed.</b> Standard, Eclipse, Day One and Collector's Edition all release on September 3, 2026. A store showing a different calendar day can be a regional time-zone display, not proof of early access. See <a href="/release-date">release date and unlock timing</a> before treating a date as a bonus.</p> },
      { title: "What each official edition includes", body: <div className="fact-grid"><p><b>Standard Edition</b>Base game. Eligible pre-orders include the Sangoran Wayfarer's Armor early unlock.</p><p><b>Eclipse Edition</b>Base game plus the Digital World Compendium, Digital Comic and Digital Soundtrack.</p><p><b>Day One Edition</b>Physical base game, Steelbook and World Map. The official guide lists the same pre-order armor early unlock for eligible pre-orders.</p><p><b>Collector's Edition</b>Physical and digital extras: Steelbook, World Map, 23 cm Coen figurine, 60-page physical compendium, plus the Eclipse digital extras.</p></div> },
      { title: "What the pre-order bonus actually means", body: <p>The Sangoran Wayfarer's Armor is described as an <b>early unlock</b>, not an exclusive item: the official guide says it can be obtained later in-game. It is also subject to participating retailers and stock. Check the exact listing where you buy instead of assuming every store or region includes it.</p> },
      { title: "Which version makes sense?", body: <ul><li><b>Standard:</b> choose it if you only want the game; do not buy a bundle just for the armor early unlock.</li><li><b>Eclipse:</b> choose it only if the digital compendium, comic and soundtrack have value to you at your local price. The official guide says Standard and Day One owners can purchase an Eclipse upgrade later.</li><li><b>Day One:</b> choose it for physical presentation items, not for a different game or a faster unlock.</li><li><b>Collector's:</b> choose it for the limited physical collection; it is listed as available while stocks last.</li></ul> },
      { title: "Before you place an order", body: <ul><li>Confirm the edition name and bonus text on your platform or retailer page.</li><li>Do not rely on a regional store date alone when comparing unlock time.</li><li>Keep your receipt and the listed entitlement description in case a promised item is missing after launch.</li></ul> },
    ]}
  />;
}

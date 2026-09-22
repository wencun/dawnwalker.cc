import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Price & Sales: Steam, PS5 and Xbox",
  "Check The Blood of Dawnwalker price and sales on Steam, PS5 and Xbox, compare Standard versus Eclipse, and verify regional offers on official stores.",
  "/price",
  ["The Blood of Dawnwalker price", "Blood of Dawnwalker sales", "The Blood of Dawnwalker sale", "The Blood of Dawnwalker Steam key", "Blood of Dawnwalker Steam price", "Blood of Dawnwalker PS5 price", "Blood of Dawnwalker collector's edition price"],
);

export default function PricePage() {
  return <GuidePage
    eyebrow="BUYING GUIDE · OFFICIAL STOREFRONT CHECK"
    title="The Blood of Dawnwalker price and sales: Steam, PS5 and Xbox"
    dek="Use official storefronts for the current local price. At the September 15 check, the U.S. Steam and PlayStation stores list Standard at $69.99 and Eclipse at $79.99; regional currencies, tax and future discounts can differ."
    checked="September 15, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · U.S. PRICE SNAPSHOT</span><p><b>Standard is listed at $69.99 and Eclipse at $79.99 on the official U.S. Steam and PlayStation stores checked today.</b> Check your own region before buying. This site does not list resale-market keys, giveaway codes or unverified sellers as a “deal.”</p></div>}
    faqs={[
      { question: "How much is The Blood of Dawnwalker?", answer: "At the September 15, 2026 check, the official U.S. Steam and PlayStation stores list Standard at $69.99 and Eclipse at $79.99. Local pricing, currency conversion, tax and later promotions may be different." },
      { question: "Is The Blood of Dawnwalker on sale?", answer: "Open the official Steam, PlayStation or Xbox listing for your account region to verify a current sale. Discounts, dates and eligible editions can differ by platform and country." },
      { question: "Where can I buy a The Blood of Dawnwalker Steam key safely?", answer: "Use the official Steam listing or the publisher's official buy page for region-specific retailers. Avoid treating a low resale-market code price as an official sale; key region, edition, eligibility and refund protection can differ." },
      { question: "Does the Eclipse Edition include early access?", answer: "No official early-access entitlement is listed in the edition guide. Eclipse adds digital extras; see the editions page for the complete official comparison." },
    ]}
    nextSteps={[
      { label: "Compare Standard, Eclipse and physical editions", href: "/editions", description: "Buy extras only if they matter to you at your local price." },
      { label: "Check Steam, PS5 and Xbox platforms", href: "/platforms", description: "Confirm platform availability and official links for your region." },
      { label: "Read reviews before deciding", href: "/review-embargo", description: "Use original review context instead of a price-page score claim." },
    ]}
    sources={[
      { label: "Steam — official U.S. product page", href: "https://store.steampowered.com/app/3751260/The_Blood_of_Dawnwalker/?l=english" },
      { label: "PlayStation Store — official U.S. product page", href: "https://store.playstation.com/en-us/product/EP0700-PPSA28000_00-DAWNWALKER00GAME" },
      { label: "Xbox — official store listing", href: "https://www.xbox.com/es-ES/games/store/the-blood-of-dawnwalker/9MVWT39J9R2C" },
      { label: "Rebel Wolves — official buy page", href: "https://dawnwalkergame.com/us/en/buy" },
    ]}
    sections={[
      { title: "Official U.S. price snapshot", body: <><p><b>These are a dated U.S. storefront snapshot, not a promise of a worldwide price or future sale.</b> Storefronts can change price, add tax and show different currencies by account region.</p><div className="fact-grid"><p><b>Standard Edition</b>$69.99 on official U.S. Steam and PlayStation listings checked September 15.</p><p><b>Eclipse Edition</b>$79.99 on official U.S. Steam and PlayStation listings checked September 15.</p><p><b>Eclipse upgrade / extras</b>Check the exact platform listing; availability and currency can vary by store and region.</p><p><b>Physical editions</b>Day One and Collector&apos;s availability depends on region, retailer and stock.</p></div></> },
      { title: "How to check a real sale", body: <ol><li>Open the official Steam, PlayStation or Xbox listing while signed into your intended purchase region.</li><li>Compare the displayed edition name, price, currency and included content—not only the headline discount.</li><li>Check the publisher&apos;s official buy page if you need a local retailer link.</li><li>Keep the store receipt and entitlement text after purchase, especially for pre-order or edition extras.</li></ol> },
      { title: "Steam key, resale sites and regional claims", body: <><div className="risk-callout"><span>BUYING SAFETY</span><p><b>A low-priced “Steam key” is not automatically an official sale.</b> We do not publish or endorse individual code sellers, giveaways, account-sharing offers or region-bypass steps. They can have different refund, activation, region and edition terms from the official storefront.</p></div><p>If your query is <i>The Blood of Dawnwalker Steam key</i>, the safest answer is the official Steam listing or a retailer linked by the publisher for your region. Check both the seller and the platform&apos;s stated redemption terms before paying.</p></> },
      { title: "Which edition should you compare?", body: <p>Price alone is not an edition comparison. <Link href="/editions">Standard, Eclipse, Day One and Collector&apos;s Edition</Link> have different digital or physical extras, and the official guide does not list early access as an Eclipse entitlement. Decide whether the extras matter to you; do not buy an edition because an unofficial listing implies a faster unlock.</p> },
      { title: "Why price differs by region", body: <p>Official stores localize in different currencies and may apply local tax or retailer rules. A U.S. dollar number is therefore a useful snapshot, not the universal answer. For a purchase decision, trust the amount and terms shown by your signed-in regional storefront at checkout.</p> },
    ]}
  />;
}

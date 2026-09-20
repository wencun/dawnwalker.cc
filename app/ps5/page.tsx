import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker PS5: Editions, PS5 Pro & Buying Guide",
  "The Blood of Dawnwalker is available on PS5. Check the official PlayStation Store for your regional price and edition, PS5 Pro Enhanced status, offline play, controller features and current known issues.",
  "/ps5",
  [
    "The Blood of Dawnwalker PS5",
    "Blood of Dawnwalker PS5",
    "The Blood of Dawnwalker PS5 Pro",
    "Blood of Dawnwalker PS5 edition",
    "The Blood of Dawnwalker PlayStation 5",
  ],
);

export default function PS5Page() {
  return <GuidePage
    eyebrow="PS5 GUIDE · OFFICIAL STORE STATUS"
    title="The Blood of Dawnwalker on PS5: editions, PS5 Pro and what to check"
    dek="The Blood of Dawnwalker is available on PlayStation 5. Use your regional PlayStation Store to confirm price and language; the official product listing identifies the PS5 version, PS5 Pro Enhanced support, offline single-player play and DualSense vibration."
    checked="September 20, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · DAWNWALKER PS5</span><p><b>Yes — The Blood of Dawnwalker is available on PS5 and the official PlayStation listing marks it PS5 Pro Enhanced.</b> Check your own regional store before buying: price, edition contents, language and age rating can vary by country.</p></div>}
    faqs={[
      { question: "Is The Blood of Dawnwalker on PS5?", answer: "Yes. The publisher and the official PlayStation Store list The Blood of Dawnwalker for PlayStation 5." },
      { question: "Is The Blood of Dawnwalker PS5 Pro Enhanced?", answer: "Yes. The official PlayStation product listing carries the PS5 Pro Enhanced label. That label does not by itself guarantee a specific resolution or frame rate in every scene." },
      { question: "Can I play The Blood of Dawnwalker offline on PS5?", answer: "The official PlayStation listing says offline play is enabled and lists one player. Check your regional listing for any account or online-service requirements that may apply to your purchase." },
      { question: "Can I remap every PS5 controller button in Dawnwalker?", answer: "Do not assume so. An official Hotfix 1.0.2 note lists a missing option for mapping buttons on a PS5 gamepad as a known issue; read the latest official patch notes before relying on a workaround." },
    ]}
    nextSteps={[
      { label: "Compare every platform", href: "/platforms", description: "Check Steam, PS5, Xbox Series X|S and the official Game Pass status." },
      { label: "Read console performance context", href: "/console-performance", description: "Separate official performance targets from later player reports and tests." },
      { label: "Compare editions before checkout", href: "/editions", description: "See the source-based differences without relying on retailer copy." },
    ]}
    sources={[
      { label: "Bandai Namco — The Blood of Dawnwalker is now available", href: "https://www.bandainamcoent.com/news/the-blood-of-dawnwalker-is-now-available" },
      { label: "PlayStation Store — The Blood of Dawnwalker product listing", href: "https://store.playstation.com/en-us/product/EP0700-PPSA28000_00-DAWNWALKER00GAME/" },
      { label: "Official Hotfix 1.0.2 — known issue notes", href: "https://dawnwalkergame.com/us/en/news/hotfix-102" },
    ]}
    sections={[
      { title: "Confirmed PS5 status", body: <div className="fact-grid"><p><b>Available now</b>The publisher&apos;s launch announcement lists PlayStation 5 alongside PC and Xbox Series X|S.</p><p><b>PS5 Pro</b>The official PlayStation listing is marked <b>PS5 Pro Enhanced</b>. Treat that as a store feature label, not a universal performance promise.</p><p><b>Play style</b>The PlayStation listing identifies offline play and one player, so this is a single-player purchase decision rather than a live-service access guide.</p><p><b>Regional store matters</b>Price, language, rating and edition availability must be checked on the PlayStation Store for the account region you will use.</p></div> },
      { title: "Choose an edition from the official store, not a search snippet", body: <p>The publisher lists Standard, Eclipse, Day One and Collector&apos;s Edition offers. Not every edition is necessarily offered in every territory or at every retailer. Open the PS5 product page while signed in to your own account, then compare the named contents against the <Link href="/editions">edition comparison</Link>. Do not use an old pre-release price, a marketplace key listing or an unrelated Xbox listing as evidence for PS5 availability.</p> },
      { title: "What to check before buying on PS5", body: <ol><li><b>Confirm the product page says PS5:</b> avoid similar-looking search results and third-party key offers.</li><li><b>Check the edition contents:</b> choose the edition for the content you can verify on the store page, not for a promised future feature.</li><li><b>Check language and rating:</b> these are region-specific purchase details and can matter more than a global marketing page.</li><li><b>Read the current patch notes:</b> if you depend on a controller option or a specific quest fix, verify its latest status before checkout.</li><li><b>Keep the receipt and save data separate:</b> store entitlements and in-game save behaviour are different support questions.</li></ol> },
      { title: "Controller and current known-issue note", body: <p>Official Hotfix 1.0.2 includes a known issue for a missing option to map buttons on a PS5 gamepad. That is not evidence that every controller has a problem, and it is not a reason to use an unsafe third-party tool. If button mapping is essential to you, inspect the latest <Link href="/patch-notes">patch notes</Link> and the PlayStation accessibility information before purchasing.</p> },
      { title: "Do not infer benchmark results from the PS5 Pro label", body: <p>The PS5 Pro Enhanced label confirms a supported product feature, but it does not establish an exact FPS, resolution or scene-by-scene result. For a buying decision, keep official targets separate from independent testing and current patch context. Our <Link href="/console-performance">console performance guide</Link> keeps those claims distinct and links the underlying evidence.</p> },
    ]}
  />;
}

import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker PS5: FPS Modes, PS5 Pro & Editions",
  "Is The Blood of Dawnwalker on PS5? Yes. Compare the 60, 40 and 30 FPS targets, PS5 Pro Enhanced support, editions, offline play and the official store listing.",
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
    title="The Blood of Dawnwalker PS5 guide: FPS modes, PS5 Pro and editions"
    dek="The Blood of Dawnwalker is available on PlayStation 5. Compare the official 60, 40 and 30 FPS mode targets, PS5 Pro Enhanced support, editions, offline play and the regional store details to check before buying."
    checked="September 29, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · BLOOD OF THE DAWNWALKER PS5</span><p><b>Yes — The Blood of Dawnwalker is available on PS5 and is labelled PS5 Pro Enhanced.</b> PS5 and PS5 Pro offer Performance, Balanced and Quality modes targeting 60, 40 and 30 FPS respectively. Check your regional PlayStation Store for the live price, edition contents and supported languages.</p></div>}
    faqs={[
      { question: "Is The Blood of Dawnwalker on PS5?", answer: "Yes. The publisher and the official PlayStation Store list The Blood of Dawnwalker for PlayStation 5." },
      { question: "Is The Blood of Dawnwalker PS5 Pro Enhanced?", answer: "Yes. The official PlayStation product listing carries the PS5 Pro Enhanced label. That label does not by itself guarantee a specific resolution or frame rate in every scene." },
      { question: "Does The Blood of Dawnwalker run at 60 FPS on PS5?", answer: "PS5 and PS5 Pro have a Performance Mode targeting 60 FPS. Balanced targets 40 FPS and Quality targets 30 FPS; a target is not a guarantee that every scene stays locked to that frame rate." },
      { question: "How much is The Blood of Dawnwalker on PS5?", answer: "Price, currency, tax, discounts and available editions depend on your PlayStation account region. Use the linked official PlayStation Store listing for the current checkout price." },
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
      { label: "Rebel Wolves — official PS5 performance-mode targets", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1vwxe1r/the_blood_of_dawnwalker_will_receive_a/" },
      { label: "Official Hotfix 1.0.2 — known issue notes", href: "https://dawnwalkergame.com/us/en/news/hotfix-102" },
    ]}
    sections={[
      { title: "The Blood of Dawnwalker PS5 at a glance", body: <table className="editorial-table"><caption>Official PS5 details to verify before buying</caption><thead><tr><th scope="col">Question</th><th scope="col">Current answer</th><th scope="col">Final check</th></tr></thead><tbody><tr><th scope="row">Is it on PS5?</th><td>Yes, with offline single-player play.</td><td>Official regional PlayStation Store</td></tr><tr><th scope="row">Does it have 60 FPS?</th><td>Performance Mode targets 60 FPS.</td><td>Current patch and tested scene</td></tr><tr><th scope="row">What are the other modes?</th><td>Balanced targets 40 FPS; Quality targets 30 FPS.</td><td>Display refresh rate and VRR support</td></tr><tr><th scope="row">Is it PS5 Pro Enhanced?</th><td>Yes, according to the store label.</td><td>Do not infer a fixed resolution or frame rate from the label</td></tr><tr><th scope="row">What does it cost?</th><td>Price and sales vary by region and edition.</td><td>Signed-in regional store price</td></tr></tbody></table> },
      { title: "Confirmed PS5 status", body: <div className="fact-grid"><p><b>Available now</b>The publisher&apos;s launch announcement lists PlayStation 5 alongside PC and Xbox Series X|S.</p><p><b>PS5 Pro</b>The official PlayStation listing is marked <b>PS5 Pro Enhanced</b>. Treat that as a store feature label, not a universal performance promise.</p><p><b>Play style</b>The PlayStation listing identifies offline play and one player, so this is a single-player purchase decision rather than a live-service access guide.</p><p><b>Regional store matters</b>Price, language, rating and edition availability must be checked on the PlayStation Store for the account region you will use.</p></div> },
      { title: "Choose an edition from the official store, not a search snippet", body: <p>The publisher lists Standard, Eclipse, Day One and Collector&apos;s Edition offers. Not every edition is necessarily offered in every territory or at every retailer. Open the PS5 product page while signed in to your own account, then compare the named contents against the <Link href="/editions">edition comparison</Link>. Do not use an old pre-release price, a marketplace key listing or an unrelated Xbox listing as evidence for PS5 availability.</p> },
      { title: "What to check before buying on PS5", body: <ol><li><b>Confirm the product page says PS5:</b> avoid similar-looking search results and third-party key offers.</li><li><b>Check the edition contents:</b> choose the edition for the content you can verify on the store page, not for a promised future feature.</li><li><b>Check language and rating:</b> these are region-specific purchase details and can matter more than a global marketing page.</li><li><b>Read the current patch notes:</b> if you depend on a controller option or a specific quest fix, verify its latest status before checkout.</li><li><b>Keep the receipt and save data separate:</b> store entitlements and in-game save behaviour are different support questions.</li></ol> },
      { title: "Controller and current known-issue note", body: <p>Official Hotfix 1.0.2 includes a known issue for a missing option to map buttons on a PS5 gamepad. That is not evidence that every controller has a problem, and it is not a reason to use an unsafe third-party tool. If button mapping is essential to you, inspect the latest <Link href="/patch-notes">patch notes</Link> and the PlayStation accessibility information before purchasing.</p> },
      { title: "Do not infer benchmark results from the PS5 Pro label", body: <p>The PS5 Pro Enhanced label confirms a supported product feature, but it does not establish an exact FPS, resolution or scene-by-scene result. For a buying decision, keep official targets separate from independent testing and current patch context. Our <Link href="/console-performance">console performance guide</Link> keeps those claims distinct and links the underlying evidence.</p> },
    ]}
  />;
}

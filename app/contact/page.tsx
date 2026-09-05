import { guideMetadata, GuidePage } from "../guide-page";

export const metadata = guideMetadata("Contact Dawnwalker Guide", "Contact the Dawnwalker Guide editorial team for corrections, source updates, privacy concerns and feedback.", "/contact", ["contact Dawnwalker Guide", "Dawnwalker Guide corrections"]);

export default function ContactPage() {
  return <GuidePage eyebrow="CONTACT & CORRECTIONS" title="How can you contact Dawnwalker Guide?" dek="The fastest way to reach the site is through our public feedback tracker, where reports can be checked against sources and resolved transparently." checked="September 5, 2026" showAds={false} sources={[{ label: "Open a Dawnwalker Guide correction or feedback report", href: "https://github.com/wencun/dawnwalker.cc/issues/new/choose" }]} sections={[
    { title: "What should a useful report include?", body: <><h3>For a correction or game issue</h3><ul><li>The exact guide URL and the sentence, table row or step that needs attention.</li><li>Your platform, game version and the date you checked it.</li><li>A primary source, screenshot or clear reproduction steps where available.</li></ul></> },
    { title: "What can we help with?", body: <p>We welcome factual corrections, broken-link reports, source additions, accessibility feedback and privacy concerns. We cannot provide account, purchase, refund or technical-support decisions for publishers, platforms, retailers or mod authors; their own support channels are the authority for those cases.</p> },
    { title: "How are reports handled?", body: <p>Reports are reviewed against the linked evidence. A correction may update the guide, add context or explain why the available evidence is not yet sufficient. Do not post passwords, payment details, account IDs or other sensitive information in a public report.</p> },
  ]} />;
}

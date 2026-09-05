import { guideMetadata, GuidePage } from "../guide-page";

export const metadata = guideMetadata("Terms of Use", "Terms of use for Dawnwalker Guide, an independent The Blood of Dawnwalker fan guide.", "/terms", ["Dawnwalker Guide terms of use", "The Blood of Dawnwalker fan guide terms"]);

export default function TermsPage() {
  return <GuidePage eyebrow="TERMS OF USE" title="What are the terms for using Dawnwalker Guide?" dek="These terms explain the limited, independent nature of this fan guide and how readers should use game information, external links and feedback channels." checked="September 5, 2026" showAds={false} sources={[{ label: "Dawnwalker Guide privacy policy", href: "https://www.dawnwalker.cc/privacy" }]} sections={[
    { title: "What is Dawnwalker Guide?", body: <p>Dawnwalker Guide is an unofficial, independent fan resource. It is not affiliated with, endorsed by or a substitute for Rebel Wolves, Bandai Namco, platform holders, stores, mod authors or community services. Game names, logos and other marks belong to their respective owners.</p> },
    { title: "How should you use the information?", body: <><h3>Use guides as information, not a guarantee</h3><ul><li>Check the linked primary source, platform policy or mod-author instructions before making a purchase, changing account settings or installing third-party files.</li><li>Back up saves and follow your platform&apos;s safety guidance before changing game files or installing mods.</li><li>Game patches, regional availability and storefront terms can change; “Last checked” dates describe our review, not a permanent guarantee.</li></ul></> },
    { title: "What applies to external links and feedback?", body: <p>External websites, ads, stores and community services operate under their own terms and privacy notices. Feedback reports must not include unlawful, abusive or sensitive material. We may correct, update or remove guide content when evidence changes or a report identifies an error.</p> },
  ]} />;
}

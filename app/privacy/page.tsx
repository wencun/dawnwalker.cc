import { guideMetadata, GuidePage } from "../guide-page";

export const metadata = guideMetadata("Privacy Policy", "Dawnwalker Guide privacy policy for its independent The Blood of Dawnwalker guide, Google Analytics and advertising.", "/privacy", ["Dawnwalker Guide privacy policy", "Dawnwalker Guide Google Analytics", "Dawnwalker Guide advertising cookies"]);

export default function PrivacyPage() {
  return <GuidePage
    eyebrow="PRIVACY NOTICE"
    title="Privacy policy"
    dek="Dawnwalker Guide is an independent fan guide. We use essential hosting logs and Google Analytics measurement, and we disclose how Google advertising may be introduced after publisher review."
    checked="September 22, 2026"
    showAds={false}
    sources={[{ label: "Google Analytics privacy and safeguards", href: "https://support.google.com/analytics/answer/6004245" }, { label: "Google — how AdSense uses cookies", href: "https://support.google.com/adsense/answer/7549925" }, { label: "Google publisher privacy requirements", href: "https://support.google.com/adsense/answer/1348695" }]}
    sections={[
      { title: "What information is collected?", body: <p>We do not offer accounts, comments, contact forms, email subscriptions or payments, and we do not ask for your name or email address. Our hosting provider may process routine technical information such as IP address, browser type, device information, request time and logs to deliver and protect the site.</p> },
      { title: "How does Google Analytics work here?", body: <p>We use Google Analytics 4 to understand aggregated visits, pages viewed, device and browser categories, approximate location and interaction patterns. Google may use cookies or similar identifiers to provide this measurement. We use these reports to improve guides and site performance; we do not sell personal information or use Analytics to make decisions about individual readers.</p> },
      { title: "Advertising status", body: <p>We have removed third-party popunder, overlay, social-bar and native advertising. Google AdSense may review this site and may later serve clearly labelled display advertising. No display ad placements are active while that review is pending.</p> },
      { title: "Google advertising", body: <p>If Google advertising is enabled after approval, Google and its partners may use cookies or similar technologies to deliver, limit, measure and, where permitted, personalise ads. Where required, visitors will be shown a Google-certified consent message before personalised advertising is requested.</p> },
      { title: "External links and contact", body: <p>Links to stores, community platforms and social networks are governed by their own privacy policies. To report a privacy concern, broken link or content correction, use our GitHub feedback channel.</p> },
    ]}
  />;
}

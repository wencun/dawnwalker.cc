import { guideMetadata, GuidePage } from "../guide-page";

export const metadata = guideMetadata("Privacy Policy", "Dawnwalker Guide privacy policy for its independent The Blood of Dawnwalker guide, Google Analytics and display advertising.", "/privacy", ["Dawnwalker Guide privacy policy", "Dawnwalker Guide Google Analytics", "Dawnwalker Guide advertising cookies"]);

export default function PrivacyPage() {
  return <GuidePage
    eyebrow="PRIVACY NOTICE"
    title="Privacy policy"
    dek="Dawnwalker Guide is an independent fan guide. We use essential hosting logs, Google Analytics measurement and an advertising-choice control to understand and support the site."
    checked="September 5, 2026"
    showAds={false}
    sources={[{ label: "Google Analytics privacy and safeguards", href: "https://support.google.com/analytics/answer/6004245" }, { label: "Adsterra cookie policy", href: "https://adsterra.com/cookies/" }]}
    sections={[
      { title: "What information is collected?", body: <p>We do not offer accounts, comments, contact forms, email subscriptions or payments, and we do not ask for your name or email address. Our hosting provider may process routine technical information such as IP address, browser type, device information, request time and logs to deliver and protect the site.</p> },
      { title: "How does Google Analytics work here?", body: <p>We use Google Analytics 4 to understand aggregated visits, pages viewed, device and browser categories, approximate location and interaction patterns. Google may use cookies or similar identifiers to provide this measurement. We use these reports to improve guides and site performance; we do not sell personal information or use Analytics to make decisions about individual readers.</p> },
      { title: "Advertising and cookie choice", body: <p>With your choice, this site loads display advertisements supplied through Adsterra. Before a choice is made, advertising scripts are not loaded. Choosing “Continue without ads” prevents those scripts from loading in this browser. We store only that choice in local storage on your device.</p> },
      { title: "Third-party advertising", body: <p>If you accept advertising cookies, Adsterra and advertisers shown in its ad frames may process device, browser, IP-address, cookie/pixel and ad-interaction information to deliver, measure and personalise advertising. Their processing and any sites reached by an ad are governed by their own notices. We do not control individual ad destinations or sell personal information.</p> },
      { title: "External links and contact", body: <p>Links to stores, community platforms, social networks and advertisements are governed by their own privacy policies. To report a privacy concern, inappropriate advertisement or content correction, use our GitHub feedback channel.</p> },
    ]}
  />;
}

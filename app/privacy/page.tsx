import { guideMetadata, GuidePage } from "../guide-page";

export const metadata = guideMetadata("Privacy Policy", "Dawnwalker Guide privacy policy for its independent The Blood of Dawnwalker guide and Adsterra display advertising.", "/privacy", ["Dawnwalker Guide privacy policy", "Dawnwalker Guide advertising cookies"]);

export default function PrivacyPage() {
  return <GuidePage
    eyebrow="PRIVACY NOTICE"
    title="Privacy policy"
    dek="Dawnwalker Guide is an independent fan guide. We aim to collect as little personal information as possible and ask before loading advertising scripts."
    checked="August 26, 2026"
    showAds={false}
    sources={[{ label: "Adsterra cookie policy", href: "https://adsterra.com/cookies/" }]}
    sections={[
      { title: "Information we collect", body: <p>We do not offer accounts, comments, contact forms, email subscriptions or payments, and we do not ask for your name or email address. Our hosting provider may process routine technical information such as IP address, browser type, device information, request time and logs to deliver and protect the site.</p> },
      { title: "Advertising and cookie choice", body: <p>With your choice, this site loads display advertisements supplied through Adsterra. Before a choice is made, advertising scripts are not loaded. Choosing “Continue without ads” prevents those scripts from loading in this browser. We store only that choice in local storage on your device.</p> },
      { title: "Third-party advertising", body: <p>If you accept advertising cookies, Adsterra and advertisers shown in its ad frames may process device, browser, IP-address, cookie/pixel and ad-interaction information to deliver, measure and personalise advertising. Their processing and any sites reached by an ad are governed by their own notices. We do not control individual ad destinations or sell personal information.</p> },
      { title: "External links and contact", body: <p>Links to stores, community platforms, social networks and advertisements are governed by their own privacy policies. To report a privacy concern, inappropriate advertisement or content correction, use our GitHub feedback channel.</p> },
    ]}
  />;
}

import { guideMetadata, GuidePage } from "../guide-page";

export const metadata = guideMetadata("Privacy Policy", "DawnArchive privacy policy for its independent The Blood of Dawnwalker guide.", "/privacy", ["DawnArchive privacy policy"]);

export default function PrivacyPage() {
  return <GuidePage eyebrow="PRIVACY NOTICE" title="Privacy policy" dek="DawnArchive is an independent fan guide. We aim to collect as little personal information as possible." checked="August 26, 2026" sources={[]} sections={[
    { title: "Information we collect", body: <p>We do not currently offer accounts, comments, contact forms, email subscriptions or payments, and we do not ask for your name or email address. Our hosting provider may process routine technical information such as IP address, browser type, device information, request time and logs to deliver and protect the site.</p> },
    { title: "How information is used", body: <p>Technical information may be used to provide the site, prevent abuse, diagnose faults and understand basic service operation. We do not sell personal information.</p> },
    { title: "Cookies, analytics and advertising", body: <p>We do not currently deploy advertising, audience tracking or third-party analytics scripts. If that changes, we will update this policy and provide notice or consent where applicable.</p> },
    { title: "External links and contact", body: <p>Links to stores, community platforms and social networks are governed by their own privacy policies. To report a privacy concern or content correction, use our GitHub feedback channel.</p> },
  ]} />;
}

import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Release Times: PC, PS5 & Xbox by Region",
  "The Blood of Dawnwalker release times for PC, PS5 and Xbox: exact PC conversions, console-region rules, why Steam can show September 2, and confirmed preload status.",
  "/release-times",
  ["The Blood of Dawnwalker release times", "Blood of Dawnwalker release time", "Blood of Dawnwalker PC release time", "The Blood of Dawnwalker PS5 release time", "Why does Steam show September 2"],
  "/pl/release-date"
);

export default function ReleaseTimesPage() {
  return <GuidePage
    eyebrow="RELEASE TIMES · PC, PLAYSTATION & XBOX"
    title="The Blood of Dawnwalker release times: PC, PS5 and Xbox"
    dek="PC unlocks at one global moment. Consoles generally unlock at local midnight, with important regional exceptions. Find your platform and city below—without mistaking a September 2 store date for early access."
    checked="August 30, 2026"
    sources={[
      { label: "Official community — global release timings", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1vxyko5/dawnwalker_global_release_timings_are_here/" },
      { label: "Bandai Namco Europe — release announcement", href: "https://en.bandainamcoent.eu/dawnwalker/news/the-blood-of-dawnwalker-will-launch-september-3-rebel-wolves-revealed-key-details" },
      { label: "PlayStation Store — game page", href: "https://www.playstation.com/en-us/games/the-blood-of-dawnwalker/" },
      { label: "Xbox — game page", href: "https://www.xbox.com/en-US/games/the-blood-of-dawnwalker" },
    ]}
    faqs={[
      { question: "What time does The Blood of Dawnwalker release on PC?", answer: "PC unlocks at midnight CEST (UTC+2, Warsaw time) on September 3, 2026. That is one simultaneous moment worldwide." },
      { question: "Why does Steam show September 2 for The Blood of Dawnwalker?", answer: "At the PC's simultaneous CEST unlock moment it is still September 2 in parts of the Americas. It is a time-zone conversion, not early access." },
      { question: "What time does The Blood of Dawnwalker unlock on PS5 and Xbox?", answer: "Consoles generally unlock at midnight local time. North and South America use midnight EDT, while countries with multiple time zones use the capital-city time zone." },
      { question: "Is there confirmed preload or early access?", answer: "The publisher's release-timing notice confirms unlock rules but does not publish one universal preload schedule or list early access for the editions. Check your own storefront near launch." },
    ]}
    sections={[
      { title: "Quick answer: release date and unlock rule", body: <div className="fact-grid"><p><b>Release date</b>September 3, 2026</p><p><b>PC</b>Midnight CEST (UTC+2) · one global moment</p><p><b>PS5 and Xbox</b>Usually midnight local time</p><p><b>Key exception</b>Americas consoles unlock at midnight EDT</p></div> },
      { title: "PC release time by city", body: <><p><b>PC releases worldwide at midnight CEST (UTC+2, Warsaw time).</b> Use this table for the same single moment in major regions. A September 2 date in an American Steam store is correct and does not mean early access.</p><div className="fact-grid"><p><b>Los Angeles · PDT</b>September 2 · 3:00 PM</p><p><b>New York · EDT</b>September 2 · 6:00 PM</p><p><b>São Paulo · BRT</b>September 2 · 7:00 PM</p><p><b>London · BST</b>September 2 · 11:00 PM</p><p><b>Warsaw · CEST</b>September 3 · 12:00 AM</p><p><b>Tokyo · JST</b>September 3 · 7:00 AM</p><p><b>Sydney · AEST</b>September 3 · 8:00 AM</p><p><b>Your final check</b>Your platform-store countdown</p></div><p className="note">The clock conversions are based on the publisher&apos;s stated PC unlock time. A storefront countdown for your account is the final practical check.</p></> },
      { title: "PS5 and Xbox release times: regional rules", body: <><p><b>On consoles, the normal rule is midnight local time on September 3.</b> Do not copy the PC times above to a PlayStation or Xbox account: console timing follows a different rule.</p><ul><li><b>North and South America:</b> midnight EDT (UTC−4, New York time), rather than every city&apos;s own midnight.</li><li><b>Australia, Indonesia and other multi-time-zone countries:</b> midnight in the country&apos;s capital-city time zone.</li><li><b>Everywhere else:</b> midnight local time, subject to the platform storefront for your account.</li></ul></> },
      { title: "Preload, early access and review timing", body: <><p>The official timing notice confirms when the game unlocks, but does <b>not</b> publish one universal preload schedule or list early access for Standard, Eclipse, Day One or Collector&apos;s Edition. Treat third-party preload claims as unconfirmed until they appear in your own store.</p><p>Review timing is a separate question from the unlock time. If you are waiting for reviews, see the <a href="/review-embargo">review-embargo guide</a>. Before download day, use the <a href="/can-i-run">PC requirements checker</a> to verify your system.</p></> },
      { title: "What to do when your countdown looks wrong", body: <ol><li>Confirm whether you are viewing a PC, PlayStation or Xbox store page.</li><li>Check the account store region—not only the device clock.</li><li>For PC, compare the displayed time against midnight CEST rather than the local calendar date.</li><li>For consoles in the Americas, use midnight EDT as the published exception.</li><li>If the title is still locked after the displayed time, restart the store/client and check for a launch-day update before reporting an issue.</li></ol> },
      { title: "Need the date rather than a time-zone conversion?", body: <p>Use the <a href="/release-date">release date guide</a> for the platform list, edition context and the confirmed September 3 date. This page is specifically for the independent search intent behind “The Blood of Dawnwalker release times” and “Blood of Dawnwalker release time.”</p> },
    ]}
  />;
}

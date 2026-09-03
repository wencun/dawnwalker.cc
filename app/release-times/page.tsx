import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Release Time: Is It Available Now?",
  "The Blood of Dawnwalker is available now on PC, PS5 and Xbox. Check the original unlock schedule and what to do if Steam or your console still shows the game as locked.",
  "/release-times",
  ["The Blood of Dawnwalker release times", "Blood of Dawnwalker release time", "Blood of Dawnwalker PC release time", "The Blood of Dawnwalker PS5 release time", "Why does Steam show September 2"],
  "/pl/release-date"
);

export default function ReleaseTimesPage() {
  return <GuidePage
    eyebrow="AVAILABLE NOW · PC, PLAYSTATION & XBOX"
    title="The Blood of Dawnwalker release time: the game is available now"
    dek="The global PC unlock and regional console windows have passed. If Steam, PlayStation or Xbox still shows the game as locked, check the account region, restart the storefront and confirm that the current game update is installed."
    checked="September 4, 2026"
    quickAnswer={<div className="live-answer"><span>LIVE NOW</span><div><b>PC</b><strong>AVAILABLE</strong></div><div><b>PS5</b><strong>AVAILABLE</strong></div><div><b>XBOX X|S</b><strong>AVAILABLE</strong></div></div>}
    sources={[
      { label: "Official community — global release timings", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1vxyko5/dawnwalker_global_release_timings_are_here/" },
      { label: "Bandai Namco Europe — release announcement", href: "https://en.bandainamcoent.eu/dawnwalker/news/the-blood-of-dawnwalker-will-launch-september-3-rebel-wolves-revealed-key-details" },
      { label: "PlayStation Store — game page", href: "https://www.playstation.com/en-us/games/the-blood-of-dawnwalker/" },
      { label: "Xbox — game page", href: "https://www.xbox.com/en-US/games/the-blood-of-dawnwalker" },
    ]}
    faqs={[
      { question: "Is The Blood of Dawnwalker available now?", answer: "Yes. The September 3 release windows for PC, PS5 and Xbox Series X|S have passed." },
      { question: "Why does Steam show September 2 for The Blood of Dawnwalker?", answer: "At the PC's simultaneous CEST unlock moment it is still September 2 in parts of the Americas. It is a time-zone conversion, not early access." },
      { question: "What time does The Blood of Dawnwalker unlock on PS5 and Xbox?", answer: "Consoles generally unlock at midnight local time. North and South America use midnight EDT, while countries with multiple time zones use the capital-city time zone." },
      { question: "Why is The Blood of Dawnwalker still locked for me?", answer: "Confirm the storefront account region, restart the client or console, check for the current update and verify that the correct edition was purchased. Store support is the final authority for an account-specific entitlement." },
    ]}
    sections={[
      { title: "Quick answer: the release windows have passed", body: <><p><b>The game is now released on PC, PS5 and Xbox Series X|S.</b> The official date remains September 3, 2026; the September 2 date shown in parts of the Americas was the same global PC moment expressed in a different time zone.</p><div className="fact-grid"><p><b>Current status</b>Available now</p><p><b>PC</b>Steam global unlock completed</p><p><b>Consoles</b>Regional windows completed</p><p><b>Still locked?</b>Check entitlement, region, update and storefront status</p></div></> },
      { title: "PC release time by city", body: <><p><b>PC releases worldwide at midnight CEST (UTC+2, Warsaw time).</b> Use this table for the same single moment in major regions. A September 2 date in an American Steam store is correct and does not mean early access.</p><div className="fact-grid"><p><b>Los Angeles · PDT</b>September 2 · 3:00 PM</p><p><b>New York · EDT</b>September 2 · 6:00 PM</p><p><b>São Paulo · BRT</b>September 2 · 7:00 PM</p><p><b>London · BST</b>September 2 · 11:00 PM</p><p><b>Warsaw · CEST</b>September 3 · 12:00 AM</p><p><b>Tokyo · JST</b>September 3 · 7:00 AM</p><p><b>Sydney · AEST</b>September 3 · 8:00 AM</p><p><b>Your final check</b>Your platform-store countdown</p></div><p className="note">The clock conversions are based on the publisher&apos;s stated PC unlock time. A storefront countdown for your account is the final practical check.</p></> },
      { title: "PS5 and Xbox release times: regional rules", body: <><p><b>On consoles, the normal rule is midnight local time on September 3.</b> Do not copy the PC times above to a PlayStation or Xbox account: console timing follows a different rule.</p><ul><li><b>North and South America:</b> midnight EDT (UTC−4, New York time), rather than every city&apos;s own midnight.</li><li><b>Australia, Indonesia and other multi-time-zone countries:</b> midnight in the country&apos;s capital-city time zone.</li><li><b>Everywhere else:</b> midnight local time, subject to the platform storefront for your account.</li></ul></> },
      { title: "What to do if the game still appears locked", body: <ol><li>Confirm the purchase appears in the same Steam, PlayStation or Xbox account you are using.</li><li>Restart the storefront client or console rather than repeatedly opening the locked tile.</li><li>Check for the current game and system update.</li><li>Confirm the account store region, especially if the purchase came from another region.</li><li>If the entitlement is still missing, use the platform&apos;s purchase history and support rather than changing the device clock.</li></ol> },
      { title: "What to do when your countdown looks wrong", body: <ol><li>Confirm whether you are viewing a PC, PlayStation or Xbox store page.</li><li>Check the account store region—not only the device clock.</li><li>For PC, compare the displayed time against midnight CEST rather than the local calendar date.</li><li>For consoles in the Americas, use midnight EDT as the published exception.</li><li>If the title is still locked after the displayed time, restart the store/client and check for a launch-day update before reporting an issue.</li></ol> },
      { title: "Need the date rather than a time-zone conversion?", body: <p>Use the <a href="/release-date">release date guide</a> for the platform list, edition context and the confirmed September 3 date. This page is specifically for the independent search intent behind “The Blood of Dawnwalker release times” and “Blood of Dawnwalker release time.”</p> },
    ]}
  />;
}

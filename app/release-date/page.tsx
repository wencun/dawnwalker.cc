import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Release Date & Time: PC, PS5 and Xbox",
  "The Blood of Dawnwalker releases September 3, 2026. Confirmed PC, PS5 and Xbox Series X|S release-date and unlock-time rules, with the current preload status.",
  "/release-date",
  ["The Blood of Dawnwalker release date", "Blood of Dawnwalker release time", "Blood of Dawnwalker preload"],
  "/pl/release-date"
);

export default function Page() {
  return <GuidePage
    eyebrow="RELEASE GUIDE · OFFICIAL DETAILS"
    title="The Blood of Dawnwalker release date and time"
    dek="The game launches September 3, 2026 on PC, PlayStation 5 and Xbox Series X|S. This is the single source for the release date, PC and console unlock rules, and confirmed preload status."
    checked="August 28, 2026"
    sources={[
      { label: "Bandai Namco Europe — release announcement", href: "https://en.bandainamcoent.eu/dawnwalker/news/the-blood-of-dawnwalker-will-launch-september-3-rebel-wolves-revealed-key-details" },
      { label: "Official community — global release timings", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1vxyko5/dawnwalker_global_release_timings_are_here/" },
      { label: "PlayStation Store — game page", href: "https://www.playstation.com/en-us/games/the-blood-of-dawnwalker/" },
      { label: "Xbox — game page", href: "https://www.xbox.com/en-US/games/the-blood-of-dawnwalker" },
    ]}
    sections={[
      { title: "Release at a glance", body: <div className="fact-grid"><p><b>Date</b>September 3, 2026</p><p><b>Platforms</b>PC, PS5, Xbox Series X|S</p><p><b>Developer</b>Rebel Wolves</p><p><b>Genre</b>Open-world dark fantasy action RPG</p></div> },
      { title: "PC unlock: one global moment, not early access", body: <><p><b>PC unlocks at midnight CEST (UTC+2, Warsaw time).</b> This is one simultaneous release moment worldwide. Because it is September 2 in the Americas at that moment, Steam can correctly show September 2 there. That does not mean an American store has early access.</p><div className="fact-grid"><p><b>Los Angeles (PDT)</b>September 2 · 3:00 PM</p><p><b>New York (EDT)</b>September 2 · 6:00 PM</p><p><b>São Paulo (BRT)</b>September 2 · 7:00 PM</p><p><b>London (BST)</b>September 2 · 11:00 PM</p><p><b>Warsaw (CEST)</b>September 3 · 12:00 AM</p><p><b>Tokyo (JST)</b>September 3 · 7:00 AM</p><p><b>Sydney (AEST)</b>September 3 · 8:00 AM</p></div><p className="note">These are conversions of the publisher&apos;s stated PC unlock time for September 3, 2026. Store countdowns for your account are the final practical check.</p></> },
      { title: "Console unlock: the important regional exceptions", body: <><p><b>Consoles generally unlock at midnight local time.</b> The publisher lists two exceptions:</p><ul><li><b>North and South America:</b> midnight EDT (UTC−4, New York time), rather than each location&apos;s local midnight.</li><li><b>Australia, Indonesia and other countries with multiple time zones:</b> midnight in the country&apos;s capital-city time zone.</li></ul><p>The official announcement does not publish an exhaustive city-by-city console table. Do not infer a console unlock from the PC time above; check your PlayStation or Xbox storefront countdown for your account region.</p></> },
      { title: "Preload and early-access status", body: <p>The publisher&apos;s release-timing notice confirms the unlock rules above, but it does not give a downloadable-size or universal preload schedule. It also does not list early access for Standard, Eclipse, Day One or Collector&apos;s Edition. Re-check your own platform store close to launch, because store-specific preload availability can change. Playing on PC? Use the <a href="/can-i-run">official PC requirements and PC specs checker</a> before preload starts.</p> },
      { title: "Waiting for reviews before buying?", body: <p>The reported review-embargo schedule is separate from the game&apos;s unlock time. See the <a href="/review-embargo">review embargo guide</a> for the currently reported date, local conversions and the distinction between a preview and a final review.</p> },
      { title: "Launch-day checklist", body: <ul><li>Confirm your platform account region and installed game version.</li><li>Check for a day-one update before starting a save.</li><li>If you encounter a problem, save a screenshot/video and note your platform, version, settings and exact steps before reporting it.</li></ul> },
    ]}
  />;
}

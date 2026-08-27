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
    checked="August 26, 2026"
    sources={[
      { label: "Bandai Namco Europe — release announcement", href: "https://en.bandainamcoent.eu/dawnwalker/news/the-blood-of-dawnwalker-will-launch-september-3-rebel-wolves-revealed-key-details" },
      { label: "Official community — global release timings", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1vxyko5/dawnwalker_global_release_timings_are_here/" },
      { label: "PlayStation Store — game page", href: "https://www.playstation.com/en-us/games/the-blood-of-dawnwalker/" },
      { label: "Xbox — game page", href: "https://www.xbox.com/en-US/games/the-blood-of-dawnwalker" },
    ]}
    sections={[
      { title: "Release at a glance", body: <div className="fact-grid"><p><b>Date</b>September 3, 2026</p><p><b>Platforms</b>PC, PS5, Xbox Series X|S</p><p><b>Developer</b>Rebel Wolves</p><p><b>Genre</b>Open-world dark fantasy action RPG</p></div> },
      { title: "Exact release time by platform", body: <><p><b>PC:</b> midnight CEST (UTC+2, Warsaw) worldwide. <b>Consoles:</b> midnight local time; countries with multiple time zones use the capital city’s time, except North and South America, which use midnight EDT (UTC−4).</p><p>Steam can display September 2 in parts of the Americas because the PC release is one global moment. The publisher has not confirmed preload timing or download size on this page. Your own storefront remains the final authority for your account region.</p></> },
      { title: "Launch-day checklist", body: <ul><li>Confirm your platform account region and installed game version.</li><li>Check for a day-one update before starting a save.</li><li>If you encounter a problem, save a screenshot/video and note your platform, version, settings and exact steps before reporting it.</li></ul> },
    ]}
  />;
}

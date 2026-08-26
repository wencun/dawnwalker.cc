import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Release Date, Time & Preload",
  "The Blood of Dawnwalker releases September 3, 2026. Confirmed PC, PS5 and Xbox Series X|S details, release timing rules and a source-led launch checklist.",
  "/release-date",
  ["The Blood of Dawnwalker release date", "Blood of Dawnwalker release time", "Blood of Dawnwalker preload"],
  "/pl/release-date"
);

export default function Page() {
  return <GuidePage
    eyebrow="RELEASE GUIDE · OFFICIAL DETAILS"
    title="The Blood of Dawnwalker release date: September 3, 2026"
    dek="The game is scheduled to launch on September 3, 2026 for PC, PlayStation 5 and Xbox Series X|S. Exact PC and console unlock rules are now published."
    checked="August 26, 2026"
    sources={[
      { label: "Bandai Namco Europe — release announcement", href: "https://en.bandainamcoent.eu/dawnwalker/news/the-blood-of-dawnwalker-will-launch-september-3-rebel-wolves-revealed-key-details" },
      { label: "Official community — global release timings", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1vxyko5/dawnwalker_global_release_timings_are_here/" },
      { label: "PlayStation Store — game page", href: "https://www.playstation.com/en-us/games/the-blood-of-dawnwalker/" },
      { label: "Xbox — game page", href: "https://www.xbox.com/en-US/games/the-blood-of-dawnwalker" },
    ]}
    sections={[
      { title: "Release at a glance", body: <div className="fact-grid"><p><b>Date</b>September 3, 2026</p><p><b>Platforms</b>PC, PS5, Xbox Series X|S</p><p><b>Developer</b>Rebel Wolves</p><p><b>Genre</b>Open-world dark fantasy action RPG</p></div> },
      { title: "Exact release time by platform", body: <><p><b>PC:</b> midnight CEST (UTC+2, Warsaw) worldwide. <b>Consoles:</b> midnight local time; countries with multiple time zones use the capital city’s time, except North and South America, which use midnight EDT (UTC−4).</p><p>For a city-by-city conversion, platform exceptions and the current preload status, read the <a href="/release-times">full release-time guide</a>. Your own storefront remains the final authority for your account region.</p></> },
      { title: "Launch-day checklist", body: <ul><li>Confirm your platform account region and installed game version.</li><li>Check for a day-one update before starting a save.</li><li>If you encounter a problem, save a screenshot/video and note your platform, version, settings and exact steps before reporting it.</li></ul> },
    ]}
  />;
}

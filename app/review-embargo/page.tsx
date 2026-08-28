import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Review Embargo: When Do Reviews Go Live?",
  "The currently reported The Blood of Dawnwalker review embargo time, local time conversions, and what is known before critic reviews publish.",
  "/review-embargo",
  ["The Blood of Dawnwalker review embargo", "Blood of Dawnwalker reviews", "When do Blood of Dawnwalker reviews come out", "Blood of Dawnwalker Metacritic"]
);

export default function ReviewEmbargoPage() {
  return <GuidePage
    eyebrow="REVIEW WATCH · COMMUNITY-REPORTED SCHEDULE"
    title="The Blood of Dawnwalker review embargo: when do reviews go live?"
    dek="A review-embargo time is circulating in the game community. This page separates that reported schedule from official confirmation and from actual critic reviews."
    checked="August 28, 2026"
    sources={[
      { label: "DawnwalkerOfficial community post — reported embargo schedule", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1vrwcnz/the_blood_of_dawnwalker_review_embargo_lifts_on/" },
      { label: "Bandai Namco — official release announcement", href: "https://en.bandainamcoent.eu/dawnwalker/news/the-blood-of-dawnwalker-will-launch-september-3-rebel-wolves-revealed-key-details" },
    ]}
    sections={[
      { title: "Short answer: August 31 is the reported review date", body: <p><b>The schedule circulating in the official game community is August 31, 2026 at 5:00 PM CEST.</b> That is three days before the September 3 release. We have not found a publisher press release that independently confirms the exact minute, so treat this as a reported schedule until the first reviews publish or Rebel Wolves/Bandai Namco confirms it directly.</p> },
      { title: "Reported local times", body: <div className="fact-grid"><p><b>Los Angeles</b>August 31 · 8:00 AM PDT</p><p><b>New York</b>August 31 · 11:00 AM EDT</p><p><b>London</b>August 31 · 4:00 PM BST</p><p><b>Warsaw / Berlin / Paris</b>August 31 · 5:00 PM CEST</p><p><b>Tokyo</b>September 1 · 12:00 AM JST</p><p><b>Sydney</b>September 1 · 1:00 AM AEST</p></div> },
      { title: "What a review embargo means", body: <p>It is the earliest scheduled time that outlets can publish full-game verdicts, scores and technical testing. It is <b>not</b> an early-access time, a preload announcement or a promise that every outlet will publish immediately. Before that time, hands-on previews and speculation are not the same as final reviews.</p> },
      { title: "Are there scores yet?", body: <p>Not before the embargo lifts. Do not rely on a claimed Metacritic, OpenCritic or “leaked review” score until it can be checked on the relevant aggregator or the outlet&apos;s own page. When reviews arrive, compare the platform, patch version, performance mode and whether the reviewer completed the game.</p> },
      { title: "Should you wait before pre-ordering?", body: <p>If performance, story quality or the 30-day time system could change your buying decision, waiting for full reviews is the rational choice. The current edition listings do not promise early access; see the <a href="/editions">edition comparison</a> and the <a href="/release-date">release date and unlock guide</a> for confirmed purchase and timing details.</p> },
    ]}
  />;
}

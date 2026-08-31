import { GuidePage, guideMetadata } from "../guide-page";
import Link from "next/link";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Review Embargo & First Reviews",
  "Track The Blood of Dawnwalker review embargo, first attributable reviews, tested platforms, patch versions and what remains unconfirmed before launch.",
  "/review-embargo",
  ["The Blood of Dawnwalker review embargo", "Blood of Dawnwalker reviews", "When do Blood of Dawnwalker reviews come out", "Blood of Dawnwalker Metacritic"]
);

export default function ReviewEmbargoPage() {
  return <GuidePage
    eyebrow="REVIEW WATCH · COMMUNITY-REPORTED SCHEDULE"
    title="The Blood of Dawnwalker review embargo and first reviews"
    dek="The reported embargo time is August 31 at 5:00 PM CEST. This page separates the reported schedule from attributable full reviews, tested platforms and verified technical evidence."
    checked="August 31, 2026"
    sources={[
      { label: "DawnwalkerOfficial community post — reported embargo schedule", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1vrwcnz/the_blood_of_dawnwalker_review_embargo_lifts_on/" },
      { label: "Metacritic — current critic-review availability", href: "https://www.metacritic.com/game/the-blood-of-dawnwalker/" },
      { label: "Bandai Namco — official release announcement", href: "https://en.bandainamcoent.eu/dawnwalker/news/the-blood-of-dawnwalker-will-launch-september-3-rebel-wolves-revealed-key-details" },
    ]}
    sections={[
      { title: "Short answer: August 31 is the reported review date", body: <><p><b>The schedule circulating in the official game community is August 31, 2026 at 5:00 PM CEST.</b> That is three days before the September 3 release.</p><p><b>Source status:</b> community-reported, not independently confirmed in a Bandai Namco or Rebel Wolves press release. Treat the exact minute as provisional until reviews publish or the publisher confirms it directly.</p></> },
      { title: "Reported local times", body: <div className="fact-grid"><p><b>Los Angeles</b>August 31 · 8:00 AM PDT</p><p><b>New York</b>August 31 · 11:00 AM EDT</p><p><b>London</b>August 31 · 4:00 PM BST</p><p><b>Warsaw / Berlin / Paris</b>August 31 · 5:00 PM CEST</p><p><b>Tokyo</b>September 1 · 12:00 AM JST</p><p><b>Sydney</b>September 1 · 1:00 AM AEST</p></div> },
      { title: "What a review embargo means", body: <p>It is the earliest scheduled time that outlets can publish full-game verdicts, scores and technical testing. It is <b>not</b> an early-access time, a preload announcement or a promise that every outlet will publish immediately. Before that time, hands-on previews and speculation are not the same as final reviews.</p> },
      { title: "Status at the last check", body: <><p><b>No attributable full review is listed here until it can be checked against the original outlet.</b> At the last check, Metacritic showed no critic reviews for the game. Do not rely on claimed aggregate scores, leaked screenshots or preview impressions as though they were finished reviews.</p><p>After reviews appear, this URL will add only links that identify the outlet, review platform and—where stated—the game build or patch version. It will not copy unsourced scores or turn one opinion into a consensus.</p></> },
      { title: "What to check when reviews go live", body: <ul><li><b>Platform and patch:</b> PC, PS5 and Xbox results are not interchangeable, especially before the Day One update.</li><li><b>Completion status:</b> distinguish a finished review from a limited preview or review-in-progress.</li><li><b>Performance evidence:</b> look for tested settings, console mode, frame-rate measurements and repeatable scenes.</li><li><b>30-day system:</b> check whether the reviewer explains actual time costs rather than repeating pre-release assumptions.</li><li><b>Disclosure:</b> note review code, sponsored travel or other access disclosed by the outlet.</li></ul> },
      { title: "Should you wait before pre-ordering?", body: <p>If performance, story quality or the 30-day time system could change your buying decision, waiting for full reviews is the rational choice. The current edition listings do not promise early access; see the <Link href="/editions">edition comparison</Link> and the <Link href="/release-date">release date and unlock guide</Link> for confirmed purchase and timing details.</p> },
      { title: "Review embargo FAQ", body: <><h3>Is August 31 officially confirmed?</h3><p>The date and time are currently supported by a community post, not a publisher press release we can independently cite. That distinction is why this guide labels the schedule as reported.</p><h3>Does the embargo time unlock the game?</h3><p>No. The reported review time is separate from the September 3 game release and platform unlock schedule.</p><h3>Will every review appear at the same time?</h3><p>No. An embargo permits publication; it does not require every outlet to publish immediately.</p><h3>Will this page become a review roundup?</h3><p>Yes. After reviews publish, the same URL will track attributable scores, recurring critic conclusions and the platform or build each outlet tested.</p></> },
    ]}
  />;
}

import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Blood of Dawnwalker Quest Guide: Quest Order, Lost Quests, Blasphemy & Routes",
  "Blood of Dawnwalker quest guide hub for quest order, lost quests, Blasphemy, fairy, disturbed, Sanzhani, Volk, herb, banner and named route searches.",
  "/quests",
  ["blood dawnwalker quest", "blood of the dawnwalker quest guide", "blood of dawnwalker quest order", "lost blood dawnwalker quest", "blood of dawnwalker blasphemy quest", "blood of dawnwalker fairy quest", "blood of dawnwalker disturbed quest", "blood of dawnwalker sanzhani quest", "blood of dawnwalker volk quest", "blood of dawnwalker herb quest"],
);

export default function QuestsPage() {
  return <GuidePage
    eyebrow="QUEST HUB · ORDER, ROUTES AND MISSING QUESTS"
    title="Blood of Dawnwalker quest guide: order, routes and lost quests"
    dek="A focused quest index for named quest searches. Open complete walkthroughs where they exist, and keep unverified quest names grouped until there is enough route data for a standalone guide."
    checked="October 9, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · QUESTS</span><p><b>Start with prologue order, then route named quests by time cost and reward.</b> Existing full guides cover Sanzhani, Volk, herbs, Forge It Anew, Home Sweet Home and several character routes; unverified names stay indexed here.</p></div>}
    faqs={[
      { question: "What quest order should I use in Blood of Dawnwalker?", answer: "Use the prologue quest order first, then prioritize timed or reward-heavy quests before optional cleanup." },
      { question: "Where is the Sanzhani quest guide?", answer: "Use Help the Sanzhani for the site's dedicated Sanzhani route." },
      { question: "Should every named quest get its own page?", answer: "No. A quest needs enough verified steps, rewards and search demand before it becomes a standalone guide." },
    ]}
    nextSteps={[
      { label: "Use the walkthrough", href: "/walkthrough", description: "Jump into the current complete route map." },
      { label: "Start prologue order", href: "/prologue-quest-order", description: "Spend early time segments safely." },
      { label: "Help the Sanzhani", href: "/help-the-sanzhani", description: "Find the Sanzhani quest route." },
      { label: "Follow Volk", href: "/volk-buried-past", description: "Complete Buried Past without missing the branch." },
    ]}
    sources={[
      { label: "Dawnwalker Guide — Walkthrough hub", href: "/walkthrough" },
      { label: "Dawnwalker Guide — Prologue quest order", href: "/prologue-quest-order" },
      { label: "Dawnwalker Guide — Help the Sanzhani", href: "/help-the-sanzhani" },
      { label: "Dawnwalker Guide — Volk Buried Past", href: "/volk-buried-past" },
    ]}
    sections={[
      { title: "Quest pages already worth opening", body: <div className="guide-map"><Link href="/prologue-quest-order"><span>01</span><b>Prologue quest order</b><small>Best early route and time use.</small></Link><Link href="/home-sweet-home"><span>02</span><b>Home Sweet Home</b><small>Quest-specific answer page.</small></Link><Link href="/how-many-spoonfuls-of-herbs"><span>03</span><b>Herb quest</b><small>Medicine recipe and spoonful answer.</small></Link><Link href="/help-the-sanzhani"><span>04</span><b>Sanzhani quest</b><small>Letters to Lunka route.</small></Link><Link href="/volk-buried-past"><span>05</span><b>Volk quest</b><small>Buried Past chores and reward branch.</small></Link><Link href="/forge-it-anew"><span>06</span><b>Forge It Anew</b><small>Sword shards and St. Mihai route.</small></Link><Link href="/a-bulwark-against-darkness"><span>07</span><b>A Bulwark Against Darkness</b><small>Arbiter armor quest route.</small></Link><Link href="/a-friend-like-this"><span>08</span><b>A Friend Like This</b><small>Lacra and Nish route.</small></Link></div> },
      { title: "Unserved quest names to capture here", body: <table className="editorial-table"><caption>Keep these as indexed entries until route data is strong enough</caption><thead><tr><th scope="col">Keyword</th><th scope="col">Current treatment</th></tr></thead><tbody><tr><th scope="row">lost quest</th><td>Troubleshooting entry for missing or failed objectives.</td></tr><tr><th scope="row">Blasphemy quest</th><td>Hold for a dedicated route when verified.</td></tr><tr><th scope="row">fairy quest</th><td>Hold for a dedicated route when verified.</td></tr><tr><th scope="row">disturbed quest</th><td>Hold for a dedicated route when verified.</td></tr><tr><th scope="row">banner quest</th><td>Hold for a dedicated route when verified.</td></tr></tbody></table> },
      { title: "Lost or missing quest checklist", body: <ol><li><b>Check the current time segment.</b> Some objectives may depend on day/night or route state.</li><li><b>Read the journal wording.</b> Do not follow a later-step guide before the current objective appears.</li><li><b>Check patch notes.</b> A missing marker may be a known issue or already fixed.</li><li><b>Reload the branch save.</b> If a quest is genuinely failed, do not overwrite the last safe manual save.</li></ol> },
      { title: "When this hub should split a page", body: <p>Split a quest into its own page only when the answer can include start location, prerequisites, step order, rewards, time cost and known failure points. That gives the new page a realistic chance to rank instead of competing with this quest hub.</p> },
    ]}
  />;
}

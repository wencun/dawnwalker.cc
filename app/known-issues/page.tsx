import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Known Issues & Fix Tracker",
  "Track verified The Blood of Dawnwalker launch issues, workarounds and community reports by platform and game version.",
  "/known-issues",
  ["The Blood of Dawnwalker known issues", "Blood of Dawnwalker crash fix", "Blood of Dawnwalker stuttering fix"]
);

export default function KnownIssuesPage() {
  return <GuidePage
    eyebrow="LAUNCH HELP DESK · EVIDENCE REQUIRED"
    title="The Blood of Dawnwalker known issues and fixes"
    dek="This tracker separates official notices, reproducible workarounds and unverified player reports. It does not invent fixes before the game launches."
    checked="August 26, 2026"
    sources={[{ label: "Official community — Day One performance update", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1vwxe1r/the_blood_of_dawnwalker_will_receive_a/" }]}
    sections={[
      { title: "Current status", body: <div className="fact-grid"><p><b>Officially announced launch update</b>Performance mode targeting 60 FPS on PS5, PS5 Pro and Xbox Series X.</p><p><b>Verified launch bugs</b>None recorded yet — game has not launched.</p><p><b>Community speculation</b>Not treated as a fix or a known issue.</p><p><b>Report handling</b>Platform + version + steps + evidence required.</p></div> },
      { title: "Report an issue", body: <p>Use the <a href="https://github.com/wencun/dawnwalker.cc/issues/new/choose" target="_blank" rel="noreferrer">structured feedback form</a> to report crashes, performance issues, progression blockers, store problems or missing guide information. Do not include personal data, account credentials or private save files.</p> },
      { title: "How we publish a workaround", body: <ul><li>Official fix: linked to a publisher, platform-holder or patch-note source.</li><li>Community workaround: requires reproducible steps plus two independent reports, or one report with clear versioned video evidence.</li><li>Unverified reports stay labelled as unverified and are never presented as a solution.</li></ul> },
    ]}
  />;
}

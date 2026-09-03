import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Romance Options: Anca, Lacra & Marat",
  "Spoiler-aware The Blood of Dawnwalker romance guide covering the community-reported Anca, Lacra and Marat routes, multiple romances and what still needs verification.",
  "/romance",
  [
    "The Blood of Dawnwalker romance options",
    "Dawnwalker Anca romance",
    "Dawnwalker Lacra romance",
    "Dawnwalker Marat romance",
    "Can you romance multiple characters in Dawnwalker",
  ],
);

export default function RomancePage() {
  return <GuidePage
    eyebrow="RELATIONSHIP GUIDE · COMMUNITY SPOILERS"
    title="The Blood of Dawnwalker romance options: Anca, Lacra and Marat?"
    dek="Launch-period players consistently identify Anca, Lacra and Marat as romance routes. The roster is strongly supported by community reports, but this guide will not invent approval thresholds, quest choices or lockout points that have not been reproduced."
    checked="September 3, 2026"
    faqs={[
      { question: "Who can you romance in The Blood of Dawnwalker?", answer: "Launch-period community reports identify Anca, Lacra and Marat. This page labels that as community-verified reporting rather than a complete official route guide until the triggers are reproduced in the release build." },
      { question: "Is there a male romance option in Dawnwalker?", answer: "Community reports identify Marat as the male romance route. Exact requirements, lockouts and ending effects still need release-build verification." },
      { question: "Can you romance multiple characters in one Dawnwalker playthrough?", answer: "Players report that multiple romances may be possible, but consequences and route locks are not yet mapped well enough for this guide to promise a consequence-free route." },
      { question: "Are there sex scenes in The Blood of Dawnwalker?", answer: "The game contains mature and sexual content, but this page does not yet have a reproduced scene-by-scene route guide. Future details will remain behind clear spoiler warnings." },
    ]}
    nextSteps={[
      { label: "Read the spoiler-light roster", href: "#roster", description: "See who is being reported as romanceable without route outcomes." },
      { label: "Understand the time system", href: "/time-system", description: "Relationship quests may compete with other time-sensitive choices." },
      { label: "Track launch issues", href: "/known-issues", description: "Check whether a missing trigger is a route choice or a reported bug." },
    ]}
    sources={[
      { label: "Reddit — launch-period romance roster discussion", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1w3ho13/romance_spoilers/" },
      { label: "Reddit — players asking about multiple romances", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1tlgy98/romance_multiple_characters_in_one_playthrough/" },
      { label: "Reddit — launch-period Marat route impressions", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1w5o2wq/dont_let_anyone_tell_you_his_romance_is_bad_its/" },
      { label: "Steam — official content description", href: "https://store.steampowered.com/app/3751260/The_Blood_of_Dawnwalker/" },
    ]}
    sections={[
      {
        title: "Spoiler-light answer",
        body: <><p><b>Community launch reports identify three romance options: Anca, Lacra and Marat.</b> Marat is the reported male romance option. Treat exact outcomes, route depth and relationship status after the ending as spoilers—and as unverified until reproduced.</p><p className="note">Evidence label: repeated community reporting. This is stronger than a single leak, but it is not the same as an official route list or our own completed three-route test.</p></>,
      },
      {
        title: "Reported romance roster",
        body: <div id="roster" className="fact-grid"><p><b>Anca</b>Reported female human romance route. Trigger choices and lockouts are still being mapped.</p><p><b>Lacra</b>Reported female vampire romance route. Exact quest prerequisites remain unverified here.</p><p><b>Marat</b>Reported male human romance route. Launch players are already discussing its story and representation.</p><p><b>Other characters</b>No additional full romance route is treated as confirmed without reproducible release-build evidence.</p></div>,
      },
      {
        title: "Can you romance all three in one playthrough?",
        body: <p><b>Community posts claim that more than one romance can be pursued, but the consequences are not sufficiently mapped.</b> Do not assume there is no jealousy, late-game lockout, ending change or time-cost conflict simply because an early player reached several romance scenes. Keep a manual save before commitment dialogue until the route logic is verified.</p>,
      },
      {
        title: "What players are actually trying to learn",
        body: <ul><li>Who the complete romance options are, including the male route.</li><li>Which companion or personal quest unlocks each relationship.</li><li>Whether approval, infamy, human/vampire choices or feeding decisions can block a route.</li><li>Whether multiple romances cause jealousy, a breakup or a later commitment choice.</li><li>Whether romance changes endings, bonuses or post-story relationship status.</li></ul>,
      },
      {
        title: "What still needs release-build verification",
        body: <div className="fact-grid"><p><b>Exact starting quest</b>The first confirmed relationship trigger for each character.</p><p><b>Lockout point</b>The dialogue or quest after which another route becomes unavailable.</p><p><b>Multiple-romance consequences</b>Whether characters react, leave or change ending scenes.</p><p><b>Ending impact</b>What carries into the finale and whether route outcomes differ.</p></div>,
      },
      {
        title: "Spoiler policy",
        body: <p>The visible roster answers the common search question. Choice-by-choice walkthroughs, intimate scenes, breakups and ending consequences should be added only after verification and placed in clearly labelled spoiler sections—not exposed in the title or opening answer.</p>,
      },
    ]}
  />;
}

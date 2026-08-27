import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Gameplay Explained: Day, Night, Combat & Time",
  "What official gameplay material confirms about The Blood of Dawnwalker: Coen's day-and-night abilities, combat, the time system and choices.",
  "/gameplay",
  ["The Blood of Dawnwalker gameplay", "Blood of Dawnwalker combat", "Blood of Dawnwalker day night cycle", "Blood of Dawnwalker gameplay features"]
);

export default function GameplayPage() {
  return <GuidePage
    eyebrow="GAMEPLAY EXPLAINED · OFFICIAL FOOTAGE"
    title="The Blood of Dawnwalker gameplay: what day, night and time change"
    dek="A spoiler-aware explanation of the gameplay systems shown or stated by the developer. This page separates confirmed features from details that need launch-day testing."
    checked="August 27, 2026"
    sources={[
      { label: "Official Gameplay Reveal Recap", href: "https://en.bandainamcoent.eu/dawnwalker/news/the-blood-of-dawnwalker-gameplay-reveal-recap" },
      { label: "Official game page", href: "https://www.bandainamcoent.com/games/dawnwalker" },
      { label: "Official gameplay video", href: "https://www.youtube.com/watch?v=ro8psdfcxJE" },
    ]}
    sections={[
      { title: "The core setup", body: <p>You play Coen, a young man turned into a Dawnwalker: human by day and vampire by night. The official material presents this as more than a visual change—day and night provide different abilities, approaches and ways to investigate Vale Sangora.</p> },
      { title: "Day and night are two problem-solving loops", body: <div className="fact-grid"><p><b>By day</b>Coen is human. Official material frames daytime as one set of skills and approaches for exploration, investigation and quests.</p><p><b>By night</b>Coen becomes a vampire, gaining a different set of abilities and routes. The official recap shows night traversal and a different approach to encounters.</p><p><b>What not to assume</b>Official footage does not make every route, ability number or quest outcome public. Treat unverified build claims as speculation until tested.</p></div> },
      { title: "Combat shown in official material", body: <p>The gameplay recap describes grounded sword fighting with directional attacks and blocks, alongside magic and vampire powers. It does not justify claiming a final meta, exact damage formula or guaranteed best build before launch. Once players can test the release version, this guide will label performance and combat findings by platform and patch.</p> },
      { title: "The 30-day pressure is about choices, not a generic countdown", body: <p>Official information says that accepting quests advances time and that Coen cannot help everyone before the final deadline. The meaningful question is therefore which commitment a quest requires—not a fabricated “turn off the timer” workaround. Read the separate <a href="/time-system">time system guide</a> for confirmed limits and unknowns.</p> },
      { title: "What will need launch-day evidence", body: <ul><li>PC and console performance in heavy combat and dense locations.</li><li>Exact progression, difficulty and build interactions.</li><li>Quest-specific time costs and irreversible consequences.</li><li>Any bug or workaround: it should include platform, game version and reproducible steps before it is presented as advice.</li></ul> },
    ]}
  />;
}

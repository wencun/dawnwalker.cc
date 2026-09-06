import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Home Sweet Home: Escape the Time Loop",
  "Home Sweet Home walkthrough for The Blood of Dawnwalker: start the dream quest, use the well to escape the repeating loop, and understand its reward and spoiler-sensitive outcome.",
  "/home-sweet-home",
  ["The Blood of Dawnwalker Home Sweet Home", "Blood of Dawnwalker Home Sweet Home walkthrough", "Home Sweet Home time loop", "how to escape Home Sweet Home Dawnwalker"],
);

export default function HomeSweetHomePage() {
  return <GuidePage
    eyebrow="QUEST ESCAPE · HOME SWEET HOME SPOILERS"
    title="The Blood of Dawnwalker Home Sweet Home: how to escape the time loop"
    dek="Stuck repeating the Home Sweet Home dream? Once the sequence starts repeating, make the village well your priority. This spoiler-marked route explains the escape check, the repeat outcome and what to verify before leaving the tower."
    checked="September 6, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · LOOP ESCAPE</span><p>After you have seen the dream repeat, look for and interact with the <b>well in the village</b> rather than completing more identical loops. Published walkthroughs identify it as the route back to the open world; use a manual save before testing a repeat outcome.</p></div>}
    faqs={[
      { question: "How do you escape Home Sweet Home in The Blood of Dawnwalker?", answer: "When the dream begins repeating, prioritize interacting with the village well. Published walkthroughs identify the well as the escape route back to the open world rather than another full loop." },
      { question: "Where does the Home Sweet Home quest start?", answer: "Published walkthroughs place the quest behind the door at the top of the relevant tower; it can be encountered around the Who Pulls the Strings story context. Confirm your current quest state before using a guide, because entering the tower is the trigger." },
      { question: "What happens if you keep repeating Home Sweet Home?", answer: "A published walkthrough reports a special trapped-loop outcome after repeated runs. Make a separate manual save before deliberately testing it, because the sequence is designed to repeat and the exit matters." },
      { question: "Does Home Sweet Home have a reward?", answer: "Published guides list a secret trophy/outcome and an accessory reward when the dream is escaped correctly. Treat reward details as spoilers and confirm them against the current game build." },
    ]}
    nextSteps={[
      { label: "Return to the main quest route", href: "/walkthrough", description: "Use the spoiler-aware hub after leaving the dream." },
      { label: "Plan your ending saves", href: "/endings", description: "Keep spoiler-sensitive outcome choices separate from this quest escape." },
      { label: "Track a quest or launch problem", href: "/known-issues", description: "Check verified issue reports before treating a broken trigger as a route choice." },
    ]}
    sources={[
      { label: "PowerPyx — Home Sweet Home walkthrough, trigger and repeat outcome", href: "https://www.powerpyx.com/blood-of-dawnwalker-home-sweet-home-walkthrough/" },
      { label: "PC Gamer — how to escape the Home Sweet Home loop", href: "https://www.pcgamer.com/games/rpg/blood-of-dawnwalker-home-sweet-home-walkthrough/" },
      { label: "Method — Home Sweet Home full walkthrough", href: "https://www.method.gg/the-blood-of-dawnwalker/the-blood-of-dawnwalker-home-sweet-home-full-walkthrough" },
    ]}
    sections={[
      { title: "What is the Home Sweet Home problem?", body: <div className="fact-grid"><p><b>Symptom</b>You finish the dream sequence and wake up in a familiar scenario again, with repeated events and dialogue.</p><p><b>What to avoid</b>Do not assume more combat loops are required to finish the quest. Repeating the sequence can lead to a different outcome.</p><p><b>Key interaction</b>Current published guides point to the village well once the loop has begun repeating.</p><p><b>Safe preparation</b>Make a manual save before you intentionally test a repeat or a reward outcome.</p></div> },
      { title: "How do you escape the Home Sweet Home loop?", body: <ol className="install-flow"><li><span>1 · SAVE</span><b>Create a separate manual save</b><small>Use a slot you can return to before choosing to repeat the dream for an outcome.</small></li><li><span>2 · NOTICE</span><b>Confirm that the dream is repeating</b><small>The repeated family-and-village sequence is the signal to stop treating it as a normal linear quest.</small></li><li><span>3 · CHECK</span><b>Find the village well</b><small>Interact with the well rather than completing another identical route. It is the escape check cited by the current walkthrough sources.</small></li><li><span>4 · VERIFY</span><b>Confirm you are back in the open world</b><small>Check the quest state and inventory, then keep the separate save until you are certain you did not want the alternate repeat outcome.</small></li></ol> },
      { title: "What should you know before repeating the dream?", body: <><p>Home Sweet Home is unusual because published walkthroughs describe a special outcome after multiple repeats. That makes it worth separating two goals: escaping efficiently and deliberately exploring spoilers or rewards. Do not chase a reward from memory; keep a manual save and use a source that labels its game-build date.</p><p className="note">This guide intentionally keeps the full ending scene out of the route. If you want to plan consequences beyond this quest, use the separate <Link href="/endings">endings and save guide</Link>.</p></> },
      { title: "Where does Home Sweet Home fit in the story?", body: <p>Guides place the tower encounter around the later <i>Who Pulls the Strings</i> context. The quest is easy to mistake for a one-off combat sequence, but its repeated dream structure is the actual puzzle. If your door, tower name or trigger does not match the published route, stop before forcing a sequence and compare the current quest log with a versioned walkthrough.</p> },
    ]}
  />;
}

import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Flask of Quicksilver Dawnwalker: Location in Aurelius’s Tower",
  "Find the Flask of Quicksilver in The Blood of Dawnwalker: complete Home Sweet Home in Aurelius’s Tower, return to the upper study, and collect the Arbiter armor component.",
  "/flask-of-quicksilver",
  ["Flask of Quicksilver Dawnwalker", "Dawnwalker Flask of Quicksilver location", "The Blood of Dawnwalker Flask of Quicksilver", "Aurelius Tower Flask of Quicksilver"],
);

export default function FlaskOfQuicksilverPage() {
  return <GuidePage
    eyebrow="ARBITER COMPONENT · AURELIUS’S TOWER"
    title="Flask of Quicksilver location: Aurelius’s Tower walkthrough"
    dek="The Flask of Quicksilver is on the upper floor of Aurelius’s Tower, southwest of the Silts. Complete Home Sweet Home first, then return upstairs and inspect the low table beside the large wooden table."
    checked="September 13, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · FLASK LOCATION</span><p><b>Finish Home Sweet Home, leave the loop, then go back to the top floor of Aurelius&apos;s Tower.</b> The Flask of Quicksilver is on a low table beside the larger table in the study. It is one of four components for <Link href="/a-bulwark-against-darkness">A Bulwark Against Darkness</Link>.</p></div>}
    faqs={[
      { question: "Where is the Flask of Quicksilver in The Blood of Dawnwalker?", answer: "It is in the upper study of Aurelius's Tower, southwest of the Silts. You need to resolve Home Sweet Home before the accessible-room check makes sense." },
      { question: "Why is the Flask of Quicksilver missing?", answer: "First finish Home Sweet Home and return to the top floor. If the room or pickup is still unavailable, verify the current quest state and patch version rather than assuming a second location exists." },
      { question: "What is the Flask of Quicksilver used for?", answer: "It is a component for A Bulwark Against Darkness, the Arbiter armor quest. The other required items are Silk Threads, a saint relic and Large Lizard's Moult." },
    ]}
    nextSteps={[
      { label: "Finish Home Sweet Home", href: "/home-sweet-home", description: "Use the loop escape guide before returning to the tower study." },
      { label: "Complete A Bulwark Against Darkness", href: "/a-bulwark-against-darkness", description: "See the other three components and the Uriashi ritual." },
      { label: "Plan a safe quest route", href: "/walkthrough", description: "Keep long gear objectives separate from the main deadline." },
    ]}
    sources={[
      { label: "All Things How — Flask of Quicksilver location and quest requirement", href: "https://allthings.how/the-blood-of-dawnwalker-how-to-get-the-flask-of-quicksilver/" },
      { label: "PC Gamer — A Bulwark Against Darkness component guide", href: "https://www.pcgamer.com/games/rpg/blood-of-dawnwalker-a-bulwark-against-darkness-walkthrough-arbiter-set/" },
      { label: "PowerPyx — Home Sweet Home walkthrough", href: "https://www.powerpyx.com/blood-of-dawnwalker-home-sweet-home-walkthrough/" },
    ]}
    sections={[
      { title: "Exact Flask of Quicksilver route", body: <ol className="install-flow"><li><span>01</span><b>Reach Aurelius&apos;s Tower</b><small>It is in the southern Silts area; use the closest discovered shrine and confirm the tower name on the map.</small></li><li><span>02</span><b>Complete Home Sweet Home</b><small>Resolve the repeating dream rather than repeatedly searching the locked upper route.</small></li><li><span>03</span><b>Return to the top floor</b><small>Go back to the upper study after you are out of the loop.</small></li><li><span>04</span><b>Inspect the low table</b><small>Check the low table beside the larger wooden table for the green-glowing quest pickup.</small></li></ol> },
      { title: "What to do if the room is still blocked", body: <p>If the door sends you back into the dream or the top floor is not accessible, the Home Sweet Home sequence is not complete. Follow the <Link href="/home-sweet-home">dedicated loop guide</Link>, save before trying an alternate outcome, then return to the same study. Do not spend time sweeping the map for another copy: current walkthroughs identify one known Flask location.</p> },
      { title: "Where the Flask fits in the Arbiter armor quest", body: <p>The Flask is one of four materials for <Link href="/a-bulwark-against-darkness">A Bulwark Against Darkness</Link>. It is useful to collect early because the tower route is a clear prerequisite; however, make sure the quest letter and component list are active before turning anything in to the Uriashi blacksmith.</p> },
    ]}
  />;
}

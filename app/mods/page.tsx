import Image from "next/image";
import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Mods: Nexus, Installation & Best Launch Mods",
  "Find current The Blood of Dawnwalker mods, the Nexus Mods page, safe installation checks, performance-mod context and how to remove a broken mod.",
  "/mods",
  ["The Blood of Dawnwalker mods", "Blood of Dawnwalker Nexus Mods", "Dawnwalker performance mod", "Dawnwalker disable timer mod", "how to install Dawnwalker mods"],
);

export default function ModsPage() {
  return <GuidePage
    eyebrow="PC MODS · LIVE DIRECTORY"
    title="The Blood of Dawnwalker mods: what is available and how to install safely"
    dek="The mod scene is live, but launch-week files can become incompatible quickly. Start with the official game page on Nexus, verify the supported game version and change one thing at a time so a broken save or startup crash is easier to diagnose."
    checked="September 4, 2026"
    quickAnswer={<div className="answer-visual"><div><span>QUICK ANSWER</span><h2>Use a trusted mod page, check the game version, then back up before installing.</h2><p>Nexus has opened a dedicated Dawnwalker directory and released author tooling. That confirms a real mod ecosystem; it does not make every upload safe or compatible.</p></div><Image src="/dawnwalker-night.png" alt="Coen using a vampire traversal ability at night in The Blood of Dawnwalker" width={1280} height={720} priority /></div>}
    nextSteps={[
      { label: "Open current Nexus releases", href: "#current-mods", description: "Use the dated directory instead of an undated download mirror." },
      { label: "Install without guessing", href: "#install", description: "Follow the author page and verify the exact game version." },
      { label: "Fix a launch problem", href: "/known-issues", description: "Rule out a base-game crash before blaming a mod." },
    ]}
    faqs={[
      { question: "Does The Blood of Dawnwalker support mods?", answer: "A dedicated Nexus Mods directory is live, and Nexus released open-source Unreal Engine mod-author tools for the game. Individual files can still break after game updates." },
      { question: "Where can I download Dawnwalker mods?", answer: "Use the dedicated The Blood of Dawnwalker game page on Nexus Mods and read each file's description, requirements, posts and update date before downloading." },
      { question: "Is there a Dawnwalker performance mod?", answer: "A launch-day Nexus upload advertises performance and frame-time changes. Treat it as a third-party configuration, not an official patch, and verify its current compatibility and user reports first." },
      { question: "Is there a mod that disables the 30-day timer?", answer: "Players are actively requesting timer-control mods, but this guide does not recommend one until a current release can be inspected and reproduced on the live game version." },
    ]}
    sources={[
      { label: "Nexus Mods — The Blood of Dawnwalker mod directory", href: "https://www.nexusmods.com/games/thebloodofdawnwalker/mods" },
      { label: "Nexus Mods — open-source author tools launch announcement", href: "https://www.nexusmods.com/news/15600" },
      { label: "Nexus Mods — launch-day performance mod example", href: "https://www.nexusmods.com/thebloodofdawnwalker/mods/59?tab=description" },
      { label: "Bandai Namco — official gameplay and time-system recap", href: "https://en.bandainamcoent.eu/dawnwalker/news/the-blood-of-dawnwalker-gameplay-reveal-recap" },
    ]}
    sections={[
      { title: "Current mod status", body: <><div id="current-mods" className="mod-status"><div><b>01</b><span>NEXUS DIRECTORY</span><p>Live and receiving launch files.</p></div><div><b>02</b><span>AUTHOR TOOLS</span><p>Open-source Unreal Engine packaging support is available.</p></div><div><b>03</b><span>COMPATIBILITY</span><p>Every file still needs its own version and dependency check.</p></div></div><p className="note">This guide links to the original author page. It does not mirror executable files, trainers or archives.</p></> },
      { title: "How to evaluate a mod before downloading", body: <div className="visual-checklist"><div><span>1</span><b>Update date</b><small>Was it updated for your current game build?</small></div><div><span>2</span><b>Requirements</b><small>Does it require UE4SS, another loader or a specific edition?</small></div><div><span>3</span><b>Recent posts</b><small>Are players reporting crashes, broken saves or a clean launch?</small></div><div><span>4</span><b>Reversal</b><small>Can you remove it without abandoning the save?</small></div></div> },
      { title: "Safe installation workflow", body: <><ol id="install" className="install-flow"><li><span>BACK UP</span><b>Copy the save or use a separate test save</b><small>Do this before a file changes gameplay, quests, time or inventory.</small></li><li><span>READ</span><b>Use the path and dependencies on the author page</b><small>Do not assume every Unreal Engine mod uses the same folder.</small></li><li><span>ONE MOD</span><b>Install and test one change at a time</b><small>Launch, load, travel and complete a small action before adding another.</small></li><li><span>REMOVE</span><b>Undo the exact files you added</b><small>If the game fails, remove the newest mod first and verify game files.</small></li></ol><p>A current launch-day performance mod, for example, documents a <code>Dawnwalker/Content/Paks/~mods/</code> path. That path is evidence for that file—not permission to ignore another author&apos;s instructions.</p></> },
      { title: "Performance mods versus official fixes", body: <div className="fact-grid"><p><b>Performance mod</b>Third-party changes may adjust Unreal Engine settings. They can trade image quality, stability or streaming behavior for frame time.</p><p><b>Official patch</b>A developer update can change files and invalidate old mod assumptions. Re-test after every patch.</p><p><b>Timer or cheat tools</b>These can alter progression and achievements. Keep them away from the only copy of a long save.</p><p><b>Visual presets</b>ReShade and color presets are subjective; screenshots should disclose the preset and post-processing.</p></div> },
      { title: "The mods players are asking for", body: <ul><li>More consistent frame pacing and reduced traversal stutter.</li><li>Timer controls for players who want to explore without spending segments.</li><li>HUD, ultrawide, camera and accessibility adjustments.</li><li>Visual presets and quality-of-life changes.</li></ul> },
      { title: "If a mod breaks the game", body: <p>Remove the newest file, restore its documented configuration changes, verify the game files in the storefront and test an unmodded save. If the same failure remains without mods, use the <Link href="/known-issues">known-issues tracker</Link> and include the game version, GPU, driver and exact error.</p> },
    ]}
  />;
}

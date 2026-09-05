import Image from "next/image";
import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Dawnwalker Mods (Nexus): Categories, Install Guide & Safety Checks",
  "Find The Blood of Dawnwalker mods on Nexus Mods, compare current mod categories, check game-version compatibility and install or remove mods safely.",
  "/mods",
  ["Dawnwalker mods", "The Blood of Dawnwalker mods", "Blood of Dawnwalker Nexus Mods", "Dawnwalker Nexus Mods", "Dawnwalker performance mod", "Dawnwalker disable timer mod", "how to install Dawnwalker mods"],
);

export default function ModsPage() {
  return <GuidePage
    eyebrow="DAWNWALKER MODS · NEXUS DIRECTORY"
    title="Dawnwalker mods: Nexus categories and safe installation"
    dek="Looking for Dawnwalker mods? Start with the live Nexus Mods directory, then match each download to your game version, required tools and save-risk level before installing it."
    checked="September 5, 2026"
    quickAnswer={<div className="answer-visual"><div><span>START HERE · NEXUS MODS</span><h2>Where can you find current Dawnwalker mods?</h2><p>The live Nexus directory is the right starting point for current downloads. This guide helps you check the version, requirements and removal path before a file touches your save.</p><a className="primary" href="https://www.nexusmods.com/games/thebloodofdawnwalker/mods" target="_blank" rel="noreferrer">Open Dawnwalker mods on Nexus ↗</a></div><Image src="/dawnwalker-night.png" alt="Coen using a vampire traversal ability at night in The Blood of Dawnwalker" width={1280} height={720} priority /></div>}
    nextSteps={[
      { label: "Find current Nexus releases", href: "#current-mods", description: "Use the live directory link and its update-date filters, not an undated download mirror." },
      { label: "Install without guessing", href: "#install", description: "Follow the author page and verify the exact game version." },
      { label: "Fix a launch problem", href: "/known-issues", description: "Rule out a base-game crash before blaming a mod." },
    ]}
    faqs={[
      { question: "Where can I download Dawnwalker mods?", answer: "Use the dedicated The Blood of Dawnwalker directory on Nexus Mods. Check each file's game version, requirements, recent posts and update date before downloading." },
      { question: "Does The Blood of Dawnwalker support mods?", answer: "A dedicated Nexus Mods directory is live, and Nexus released open-source Unreal Engine mod-author tools for the game. Individual files can still break after game updates." },
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
      { title: "Where are the current Dawnwalker mods?", body: <><div id="current-mods" className="mod-status"><div><b>01</b><span>NEXUS DIRECTORY</span><p>Use the live category and update-date filters.</p></div><div><b>02</b><span>AUTHOR TOOLS</span><p>Open-source Unreal Engine packaging support is available.</p></div><div><b>03</b><span>COMPATIBILITY</span><p>Every file still needs its own version and dependency check.</p></div></div><p className="note"><a href="https://www.nexusmods.com/games/thebloodofdawnwalker/mods" target="_blank" rel="noreferrer">Open the live Dawnwalker Nexus Mods directory ↗</a>. This guide links to original author pages and does not mirror executable files, trainers or archives.</p></> },
      { title: "Which Dawnwalker mod category do you need?", body: <table className="editorial-table"><caption>Use the live Nexus listing to verify each individual download</caption><thead><tr><th scope="col">If you want…</th><th scope="col">Check on the mod page</th><th scope="col">Avoid assuming</th></tr></thead><tbody><tr><th scope="row">Performance or frame-time changes</th><td>Your game version, rendering settings, dependencies and recent user reports.</td><td>That a third-party tweak is an official fix or works on every GPU.</td></tr><tr><th scope="row">Visual or post-processing changes</th><td>Preview images, required tools, compatibility notes and how to restore defaults.</td><td>That a visual preset fixes base-game flicker or stutter.</td></tr><tr><th scope="row">UI, camera or accessibility changes</th><td>Load instructions, controller support and conflicts with other interface mods.</td><td>That all quality-of-life files work together without testing.</td></tr><tr><th scope="row">Timer, cheat or progression tools</th><td>Save-game impact, achievement notes and the exact uninstall procedure.</td><td>That removing the file reverses a progression change.</td></tr></tbody></table> },
      { title: "How do you evaluate a mod before downloading?", body: <div className="visual-checklist"><div><span>1</span><b>Update date</b><small>Was it updated for your current game build?</small></div><div><span>2</span><b>Requirements</b><small>Does it require UE4SS, another loader or a specific edition?</small></div><div><span>3</span><b>Recent posts</b><small>Are players reporting crashes, broken saves or a clean launch?</small></div><div><span>4</span><b>Reversal</b><small>Can you remove it without abandoning the save?</small></div></div> },
      { title: "How do you install a Dawnwalker mod safely?", body: <><ol id="install" className="install-flow"><li><span>BACK UP</span><b>Copy the save or use a separate test save</b><small>Do this before a file changes gameplay, quests, time or inventory.</small></li><li><span>READ</span><b>Use the path and dependencies on the author page</b><small>Do not assume every Unreal Engine mod uses the same folder.</small></li><li><span>ONE MOD</span><b>Install and test one change at a time</b><small>Launch, load, travel and complete a small action before adding another.</small></li><li><span>REMOVE</span><b>Undo the exact files you added</b><small>If the game fails, remove the newest mod first and verify game files.</small></li></ol><p>A current launch-day performance mod, for example, documents a <code>Dawnwalker/Content/Paks/~mods/</code> path. That path is evidence for that file—not permission to ignore another author&apos;s instructions.</p></> },
      { title: "Performance mods versus official fixes", body: <div className="fact-grid"><p><b>Performance mod</b>Third-party changes may adjust Unreal Engine settings. They can trade image quality, stability or streaming behavior for frame time.</p><p><b>Official patch</b>A developer update can change files and invalidate old mod assumptions. Re-test after every patch.</p><p><b>Timer or cheat tools</b>These can alter progression and achievements. Keep them away from the only copy of a long save.</p><p><b>Visual presets</b>ReShade and color presets are subjective; screenshots should disclose the preset and post-processing.</p></div> },
      { title: "The mods players are asking for", body: <ul><li>More consistent frame pacing and reduced traversal stutter.</li><li>Timer controls for players who want to explore without spending segments.</li><li>HUD, ultrawide, camera and accessibility adjustments.</li><li>Visual presets and quality-of-life changes.</li></ul> },
      { title: "If a mod breaks the game", body: <p>Remove the newest file, restore its documented configuration changes, verify the game files in the storefront and test an unmodded save. If the same failure remains without mods, use the <Link href="/known-issues">known-issues tracker</Link> and include the game version, GPU, driver and exact error.</p> },
    ]}
  />;
}

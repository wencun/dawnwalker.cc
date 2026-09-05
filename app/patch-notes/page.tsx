import Image from "next/image";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Patch Notes: Hotfix 1.0.2 Changes",
  "The Blood of Dawnwalker patch notes and Hotfix 1.0.2 explained: quest fixes, PC controller input changes, known issues and safe update checks.",
  "/patch-notes",
  ["The Blood of Dawnwalker patch notes", "The Blood of Dawnwalker hotfix", "Blood of Dawnwalker update", "Dawnwalker patch 1.0.2", "Dawnwalker hotfix notes"],
);

export default function PatchNotesPage() {
  return <GuidePage
    eyebrow="PATCH TRACKER · OFFICIAL NOTES FIRST"
    title="The Blood of Dawnwalker patch notes: Hotfix 1.0.2 changes"
    dek="Hotfix 1.0.2 is live on PC, PlayStation 5 and Xbox Series X|S. It fixes several blocked quest states, adjusts PC controller input and documents the launch issues that still need a workaround."
    checked="September 4, 2026"
    quickAnswer={<div className="answer-visual"><div><span>HOTFIX 1.0.2 · SEPTEMBER 4</span><h2>Update first. Troubleshoot second.</h2><p>The official hotfix resolves three quest blockers and makes PC-specific controller input changes. If your issue is still present, use the symptom cards below instead of applying random launch-day fixes.</p></div><Image src="/dawnwalker-night.png" alt="Coen travelling at night in The Blood of Dawnwalker" width={1440} height={810} priority /></div>}
    faqs={[
      { question: "What is in The Blood of Dawnwalker Hotfix 1.0.2?", answer: "The official September 4 hotfix fixes blocked Farkas, Lunka and Uriashi quest states. On PC it also adjusts deadzone and input behavior related to sprint interruption." },
      { question: "Did the Dawnwalker patch fix the controller sprint bug?", answer: "Hotfix 1.0.2 includes PC deadzone and sprint-input adjustments. Update first; if the problem remains, the developer still lists lowering controller sensitivity to 0.8 as a temporary workaround." },
      { question: "Does Hotfix 1.0.2 fix stutter or shader-compilation crashes?", answer: "The official notes still list Windowed or Borderless stutter and some shader-compilation crashes as known issues. Full Screen is the listed stutter workaround; the shader symptom has a separate BIOS guidance note." },
    ]}
    nextSteps={[
      { label: "Fix crash or stutter", href: "/crash-and-stutter-fix", description: "Use the official symptom-specific checks, not a generic tweak list." },
      { label: "Fix controller movement", href: "/controller-movement-fix", description: "Use the PC and console-safe controller path after updating." },
      { label: "See all known issues", href: "/known-issues", description: "Separate a fixed blocker from an issue still awaiting a patch." },
    ]}
    sources={[
      { label: "Rebel Wolves — Hotfix 1.0.2 official patch notes", href: "https://dawnwalkergame.com/us/en/news/hotfix-102" },
      { label: "Steam — developer Known Issues, fixes and workarounds", href: "https://steamcommunity.com/app/3751260/discussions/0/588436698284819211/" },
      { label: "SteamDB — Hotfix 1.0.2 patch record", href: "https://steamdb.info/patchnotes/25107392/" },
    ]}
    sections={[
      { title: "Hotfix 1.0.2 at a glance", body: <div className="patch-board"><div><span>QUESTS</span><b>3 blockers</b><p>Farkas conversation, Lunka&apos;s tutorial path and Uriashi&apos;s holy-sword crafting path receive fixes.</p></div><div><span>PC INPUT</span><b>Deadzone + sprint</b><p>PC-specific deadzone and input changes target sprint interruption behavior.</p></div><div><span>STILL OPEN</span><b>2 known symptoms</b><p>Windowed/Borderless stutter and some shader-compilation crashes remain documented separately.</p></div></div> },
      { title: "Quest fixes in this update", body: <div className="visual-checklist"><div><span>01</span><b>Farkas</b><small>Fixes a conversation that could be blocked after certain NPC kills.</small></div><div><span>02</span><b>Lunka</b><small>Fixes a tutorial route that could not be followed in a specific state.</small></div><div><span>03</span><b>Uriashi</b><small>Fixes a blacksmith crafting path for a particular holy sword—relevant to Forge It Anew players.</small></div><div><span>04</span><b>PC input</b><small>Adjusts controller deadzone and input behavior related to sprint interruption.</small></div></div> },
      { title: "Use this update checklist before trying a workaround", body: <ol className="install-flow"><li><span>01</span><b>Check version</b><small>Install Hotfix 1.0.2 on your platform.</small></li><li><span>02</span><b>Retry the exact scene</b><small>Load a save before the blocked conversation, route or craft.</small></li><li><span>03</span><b>Match the symptom</b><small>Use a controller guide for input, not a crash fix.</small></li><li><span>04</span><b>Report what remains</b><small>Include platform, patch version and reproducible steps.</small></li></ol> },
      { title: "Known issues that this patch does not claim to solve", body: <div className="fact-grid"><p><b>Stutter in Windowed or Borderless</b>The developer lists Full Screen mode as the current workaround. See the <a href="/crash-and-stutter-fix">crash and stutter guide</a> for the safe path.</p><p><b>Crash during shader compilation</b>The developer points affected players to motherboard-BIOS guidance. This is symptom-specific and is not a universal PC fix.</p><p><b>PS5 controller remapping</b>The official note still lists incomplete controller remapping on PS5; Steam Input steps are not a console workaround.</p><p><b>Other performance reports</b>Keep GPU, driver, settings, scene and patch version together before treating a community report as a universal defect.</p></div> },
      { title: "Why this page is better than a generic update roundup", body: <p>Searchers asking for <b>patch notes</b>, <b>hotfix</b> or <b>update</b> usually want a fast answer to one question: “did this update change my problem?” This page keeps official fixed items, still-open issues and player workarounds in separate boxes so an old video or copied fix does not send you down the wrong path.</p> },
    ]}
  />;
}

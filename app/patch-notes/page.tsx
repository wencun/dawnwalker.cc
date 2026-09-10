import Image from "next/image";
import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Patch Notes 1.0.4: Latest Update & Fixes",
  "Official The Blood of Dawnwalker Hotfix 1.0.4 patch notes: stability, quest progression, saving, Steam Microsoft GameInput and FSR Frame Generation fixes on PC, PS5 and Xbox.",
  "/patch-notes",
  ["The Blood of Dawnwalker patch notes", "Blood of Dawnwalker patch notes", "The Blood of Dawnwalker update", "Blood of Dawnwalker update", "Blood of Dawnwalker updates", "The Blood of Dawnwalker 1.0.4", "Dawnwalker patch 1.0.4", "Dawnwalker hotfix notes", "Microsoft GameInput Dawnwalker"],
);

export default function PatchNotesPage() {
  return <GuidePage
    eyebrow="PATCH TRACKER · OFFICIAL NOTES FIRST"
    title="The Blood of Dawnwalker patch notes: Hotfix 1.0.4 and latest update"
    dek="Hotfix 1.0.4 is rolling out on PC, PlayStation 5 and Xbox Series X|S. It improves stability, fixes quest-progression and saving blockers, and resolves a Steam Microsoft GameInput FPS-drop issue."
    checked="September 10, 2026"
    quickAnswer={<div className="answer-visual"><div><span>HOTFIX 1.0.4 · SEPTEMBER 9</span><h2>Update first. Then retest the exact problem.</h2><p>The latest official update fixes stability, blocked quest progress and a saving issue. On Steam, it also prevents outdated Microsoft GameInput software from causing FPS drops when controllers connect.</p></div><Image src="/dawnwalker-night.png" alt="Coen travelling at night in The Blood of Dawnwalker" width={1440} height={810} priority /></div>}
    faqs={[
      { question: "What is in The Blood of Dawnwalker Hotfix 1.0.4?", answer: "The September 9 update improves stability, fixes several progression blockers and a saving issue, and addresses Steam controller FPS drops linked to outdated Microsoft GameInput software." },
      { question: "Does the latest Blood of Dawnwalker update fix saving?", answer: "Hotfix 1.0.4 lists a fix for an issue that blocked players from saving. It does not prove every 'Saving is currently locked' message has the same cause, so preserve the details if the problem remains." },
      { question: "Does Hotfix 1.0.4 fix Microsoft GameInput FPS drops?", answer: "On Steam, the official notes say that connecting controllers with outdated GameInput software should no longer cause FPS drops. Update the game first, then retest with the same controller setup." },
    ]}
    nextSteps={[
      { label: "Fix crash or stutter", href: "/crash-and-stutter-fix", description: "Use the official symptom-specific checks, not a generic tweak list." },
      { label: "Fix controller movement", href: "/controller-movement-fix", description: "Use the PC and console-safe controller path only if the issue remains after updating." },
      { label: "See all known issues", href: "/known-issues", description: "Separate a fixed blocker from an issue still awaiting a patch." },
    ]}
    sources={[
      { label: "Rebel Wolves — Hotfix 1.0.4 official patch notes", href: "https://dawnwalkergame.com/pl/en/news/hotfix-104" },
      { label: "Steam — The Blood of Dawnwalker Hotfix 1.0.4 announcement", href: "https://steamcommunity.com/app/3751260/" },
    ]}
    sections={[
      { title: "Hotfix 1.0.4 at a glance", body: <div className="patch-board"><div><span>STABILITY</span><b>Multiple improvements</b><p>The official notes list broad stability improvements, without claiming that every crash has one shared cause.</p></div><div><span>PROGRESSION</span><b>Quest and saving blockers</b><p>The update fixes several blocked quest states and an issue that prevented players from saving.</p></div><div><span>PC / STEAM</span><b>GameInput + Frame Gen</b><p>It addresses controller-related FPS drops with outdated GameInput and VSync issues with FSR Frame Generation.</p></div></div> },
      { title: "Quest and gameplay fixes in this update", body: <div className="visual-checklist"><div><span>01</span><b>Progression</b><small>Fixes include a fast Voracious Bite tutorial blocker, house escapes and an issue that disabled blocking.</small></div><div><span>02</span><b>Quest states</b><small>Named fixes cover Deep Down, Hive and Seek, On the Run, Smoke and Ashes, The Heart Wants What It Wants and more.</small></div><div><span>03</span><b>Saving</b><small>The official notes list a fix for an issue that blocked players from saving.</small></div><div><span>04</span><b>Steam controller FPS</b><small>Outdated Microsoft GameInput software should no longer cause FPS drops when controllers connect.</small></div></div> },
      { title: "Use this update checklist before trying a workaround", body: <ol className="install-flow"><li><span>01</span><b>Confirm version</b><small>Install Hotfix 1.0.4 on your platform.</small></li><li><span>02</span><b>Retest the same state</b><small>Use the same save, controller and scene that exposed the problem.</small></li><li><span>03</span><b>Match the symptom</b><small>Use a controller guide for movement, a save guide for a remaining lock and a crash guide for stability.</small></li><li><span>04</span><b>Report what remains</b><small>Include platform, patch version and reproducible steps.</small></li></ol> },
      { title: "What this patch does not promise", body: <div className="fact-grid"><p><b>Every save problem</b>A listed save-blocker fix does not prove every persistent locked-save report has the same cause. See the <Link href="/cant-save">save-lock guide</Link> if your message remains.</p><p><b>Every controller symptom</b>The GameInput change targets Steam FPS drops on controller connection, not every sprint, menu or device-detection issue. See the <Link href="/controller-movement-fix">controller guide</Link> for those checks.</p><p><b>Every crash or stutter</b>Stability improvements are broad. Record your settings and failing scene before treating a patch note as a universal fix.</p><p><b>All future issues</b>Check the date and version before using a copied workaround; launch fixes can age quickly.</p></div> },
      { title: "Why this page targets update, patch and patch-notes searches", body: <p>Searchers asking for <b>Blood of Dawnwalker update</b>, <b>patch notes</b> or <b>Hotfix 1.0.4</b> usually want one answer: “did the latest update change my problem?” This page keeps the official changed items, the precise platform scope and the follow-up guides together instead of splitting close keyword variants into competing pages.</p> },
    ]}
  />;
}

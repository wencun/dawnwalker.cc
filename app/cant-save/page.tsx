import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Blood of Dawnwalker Can't Save Fix: Saving Is Locked",
  "Blood of Dawnwalker can't save or says saving is locked? Check the active mission state, protect your progress and use the current community-reported save-lock path.",
  "/cant-save",
  ["Blood of Dawnwalker can't save", "Dawnwalker cant save", "Blood of Dawnwalker saving is locked", "Dawnwalker save bug", "Blood of Dawnwalker save bug"],
);

export default function CantSavePage() {
  return <GuidePage
    eyebrow="SAVE-LOCK TROUBLESHOOTING · COMMUNITY REPORTS, NOT AN OFFICIAL FIX"
    title="Blood of Dawnwalker can&apos;t save: what “Saving is currently locked” can mean"
    dek="If The Blood of Dawnwalker will not quicksave or manual save, first identify whether saving is temporarily locked during a mission or whether a progression event has failed to trigger. Protect the current run before testing anything."
    checked="September 8, 2026"
    quickAnswer={<div className="risk-callout"><span>DO NOT OVERWRITE YOUR ONLY RUN</span><p><b>Stop before a long unsaved session.</b> Check the exact “Saving is currently locked” message and the active quest. A current Steam thread links one save-lock report to a pending Infamy cutscene; that is a community observation, not a verified fix for every save problem.</p></div>}
    faqs={[
      { question: "Why can&apos;t I save in Blood of Dawnwalker?", answer: "Saving can be temporarily unavailable during particular story or combat states. A separate community report links a persistent “Saving is currently locked” message to a pending Infamy cutscene. Check the active mission and exact on-screen message before treating it as a damaged save." },
      { question: "How do I fix “Saving is currently locked” in Dawnwalker?", answer: "First preserve the current details: platform, patch version, active quest, in-game day and last autosave. A Steam discussion reports that progressing an overdue Infamy event restored saving for some players, but it is not an official universal fix and may not match your run." },
      { question: "Should I keep playing when Dawnwalker will not save?", answer: "No. Avoid committing a long unsaved session or overwriting a good earlier save. If a normal story transition does not restore saving, stop and report the reproducible state rather than layering mods, configuration edits or unrelated fixes." },
    ]}
    nextSteps={[
      { label: "See known bugs and patches", href: "/known-issues", description: "Check what the official patch has fixed and what remains unconfirmed." },
      { label: "Fix crashes without mixing symptoms", href: "/crash-and-stutter-fix", description: "Keep a save-lock separate from a crash or display issue." },
      { label: "Plan manual saves for endings", href: "/what-happens-after-30-days", description: "Use the spoiler-safe two-save plan once saving is available again." },
    ]}
    sources={[
      { label: "Steam Community — player reports of “Can't save game” and a pending Infamy event", href: "https://steamcommunity.com/app/3751260/discussions/0/588436698284878332/" },
      { label: "Rebel Wolves — Hotfix 1.0.2 official notes", href: "https://dawnwalkergame.com/us/en/news/hotfix-102" },
    ]}
    sections={[
      { title: "First: tell a temporary save lock from a persistent bug", body: <div className="fact-grid"><p><b>Temporary lock</b>Some games disable saving during an active sequence, combat or a transition. Wait for the sequence to finish and check for the exact in-game notice.</p><p><b>Persistent lock</b>If the same message remains after a normal transition, note the active quest, location, in-game day and last autosave before taking another action.</p><p><b>Not an official known issue yet</b>Hotfix 1.0.2 names quest, controller, stutter and shader-compilation issues, but does not list a universal save-lock fix.</p><p><b>Do not guess from the label</b>“Can&apos;t save,” a missing autosave and a story consequence that cannot be reversed are different problems.</p></div> },
      { title: "What should you do when Dawnwalker says saving is locked?", body: <ol><li><b>Capture the state:</b> screenshot the message and write down platform, game version, active quest, location, in-game day and the time of the last autosave.</li><li><b>Finish or leave the current safe transition:</b> if you are visibly in a combat, cutscene or scripted mission step, let it resolve before checking the save menu again.</li><li><b>Check for a pending progression event:</b> one Steam discussion links a stuck save lock to an overdue Infamy cutscene. If your run has a pending Infamy threshold, test the normal in-game event that triggers it; do not assume this applies to another quest or platform.</li><li><b>Verify the result immediately:</b> make one manual save or quicksave as soon as the option returns, then confirm it appears in Load Game before continuing.</li><li><b>Stop if it persists:</b> do not spend hours hoping for an autosave. Keep the evidence and report the exact state for a patch or support investigation.</li></ol> },
      { title: "What not to do with a save-lock bug", body: <p>Do not install a mod, edit an .ini file, delete local save data or overwrite the last usable slot while diagnosing a locked save. Those changes can turn a reproducible game-state report into a lost run. If you also have a crash or display problem, use the dedicated <Link href="/crash-and-stutter-fix">crash and stutter guide</Link> or <Link href="/flickering-fix">flickering guide</Link>; neither is a save-lock remedy.</p> },
      { title: "What to include in a useful bug report", body: <p>Include the exact save-lock text, platform and storefront, patch version, current quest, in-game day, Infamy state if visible, last successful save type, and a short video of the normal transition that did not restore saving. This is more useful than “can&apos;t save” alone, and it lets other players tell a mission lock from the same reproducible bug.</p> },
    ]}
  />;
}

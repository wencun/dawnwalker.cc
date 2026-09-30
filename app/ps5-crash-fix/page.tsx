import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Blood of Dawnwalker Crashing on PS5: Current Checks",
  "The Blood of Dawnwalker crashing on PS5? Install the latest hotfix, preserve your save, and record the exact scene before trying a platform-specific workaround.",
  "/ps5-crash-fix",
  ["Blood of Dawnwalker crashing PS5", "The Blood of Dawnwalker crash PS5", "Dawnwalker PS5 crash fix", "Blood of Dawnwalker PS5 crashing"],
);

export default function PS5CrashFixPage() {
  return <GuidePage
    eyebrow="PS5 CRASH CHECK · PATCH FIRST"
    title="The Blood of Dawnwalker crashing on PS5? Start here"
    dek="Install the current hotfix, then repeat the same scene once before changing settings. Keep the crash separate from flickering, a controller issue, or a normal save lock."
    checked="September 30, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · PS5 CRASH</span><p><b>Update the game, restart the PS5, then retry the same save and scene once.</b> There is no verified universal PS5-only crash fix in the current official notes, so do not delete a save or stack several changes at once.</p></div>}
    faqs={[
      { question: "Why is The Blood of Dawnwalker crashing on PS5?", answer: "A repeatable crash can have different causes depending on the patch, quest state and scene. Current official notes cover selected stability and progression fixes, but do not establish one PS5-only cause for every crash." },
      { question: "Does the latest Dawnwalker update fix PS5 crashes?", answer: "Install the current hotfix first and retest the same scene. A general stability fix does not guarantee that every repeatable crash has been resolved." },
      { question: "Should I delete my Dawnwalker save after a PS5 crash?", answer: "No. Preserve the affected save, record the quest and scene, and test after updating before deleting local data or overwriting the last usable save." },
    ]}
    nextSteps={[
      { label: "Read current patch notes", href: "/patch-notes", description: "Confirm the installed version and the exact issues an update claims to fix." },
      { label: "Check all known issues", href: "/known-issues", description: "Keep a crash separate from a display, controller or save-lock symptom." },
      { label: "Check PS5 modes and support", href: "/ps5", description: "Review official PS5 status, performance targets and controller notes." },
    ]}
    sources={[
      { label: "Steam — The Blood of Dawnwalker Hotfix 1.0.5 announcement", href: "https://steamcommunity.com/app/3751260/" },
      { label: "Rebel Wolves — Hotfix 1.0.4 official patch notes", href: "https://dawnwalkergame.com/pl/en/news/hotfix-104" },
    ]}
    sections={[
      { title: "Safe PS5 crash check", body: <ol><li><b>Confirm the current game version:</b> install the latest hotfix before treating an old report as current.</li><li><b>Restart the console:</b> close the game fully, restart the PS5, then load the same save once.</li><li><b>Repeat one scene only:</b> note the quest, location and action that happened before the crash instead of testing unrelated routes.</li><li><b>Preserve the usable save:</b> do not overwrite the last working slot or delete local data while the cause is unknown.</li></ol> },
      { title: "What to record for a useful report", body: <p>Record the game version, PS5 system version, exact quest or location, whether the crash happens during a cutscene or loading screen, and whether the same save can reproduce it. This separates a one-off interruption from a patch-worthy repeatable issue.</p> },
      { title: "Do not mix a crash with other PS5 symptoms", body: <p>Display flickering needs its own <Link href="/flickering-fix">flickering check</Link>, while a controller issue needs the <Link href="/controller-movement-fix">controller guide</Link>. If saving remains unavailable after a normal transition, use the separate <Link href="/cant-save">save-lock guide</Link>.</p> },
    ]}
  />;
}

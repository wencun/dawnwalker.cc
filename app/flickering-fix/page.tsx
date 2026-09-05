import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Dawnwalker Flickering Fix: PC, PS5 Pro and VRR Tests",
  "Safe, evidence-labelled checks for The Blood of Dawnwalker screen flickering, shimmering and lighting flicker on PC and PS5 Pro.",
  "/flickering-fix",
  ["Dawnwalker flickering fix", "The Blood of Dawnwalker screen flickering", "Blood of Dawnwalker shimmering", "Dawnwalker PS5 Pro VRR flickering"],
);

export default function FlickeringFixPage() {
  return <GuidePage
    eyebrow="VISUAL ISSUE CHECK · COMMUNITY REPORTS, NOT AN OFFICIAL FIX"
    title="How do you test Dawnwalker screen flickering safely?"
    dek="Players are reporting camera-movement shimmer and lighting flicker on PC, plus a separate PS5 Pro VRR report. These are not one confirmed bug, so use a reversible, one-setting-at-a-time test rather than a copied tweak list."
    checked="September 5, 2026"
    faqs={[
      { question: "Is there an official Dawnwalker flickering fix?", answer: "No official universal fix was verified when this page was checked. Current evidence is player reporting across PC and PS5 Pro, so each suggested change is a diagnostic test rather than a guaranteed solution." },
      { question: "Should I turn off VRR to fix Dawnwalker flickering on PS5 Pro?", answer: "One PS5 Pro community report says disabling VRR stopped its flickering. Treat that as a reversible test for that platform, not a universal fix or a PC recommendation." },
      { question: "Should I install a flickering mod for Dawnwalker?", answer: "Do not use a visual mod as the first response. A mod can change image quality, introduce new variables and stop working after a patch. First record the game version and test the platform-specific, reversible settings below." },
    ]}
    nextSteps={[
      { label: "Track broader launch issues", href: "/known-issues", description: "Keep flickering separate from crashes, stutter and controller symptoms." },
      { label: "Check crash and stutter steps", href: "/crash-and-stutter-fix", description: "Use the documented Full Screen path only for its matching stutter symptom." },
      { label: "Review mod safety", href: "/mods", description: "Check version support and reversibility before changing game files." },
    ]}
    sources={[
      { label: "Reddit — Flickering/shimmering fix (PC), community discussion", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1w6ybtp/flickeringshimmering_fix_pc/" },
      { label: "Reddit — PS5 Pro flickering and a VRR test, community discussion", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1w6e9zn/ps5_pro_flickering_solved_by_disabling_vrr/" },
      { label: "Reddit — lighting flickering above 60 FPS (PC), community discussion", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1w5upqo/lighting_flickering_above_60fps_pc/" },
      { label: "Steam Community — player reports of camera-movement flickering", href: "https://steamcommunity.com/app/3751260/discussions/0/588436698284799057/?ctp=2" },
    ]}
    sections={[
      { title: "What kind of flickering are players reporting?", body: <div className="fact-grid"><p><b>PC shimmer</b>Players describe light or foliage shimmer while moving the camera or character. Some reports associate it with higher frame rates.</p><p><b>PS5 Pro display flicker</b>A separate player report says a VRR setting change altered the symptom. That evidence does not establish a PC cause.</p><p><b>Not yet confirmed</b>No developer note verified a single cause, affected hardware list or universal fix when this page was checked.</p><p><b>Do not merge symptoms</b>Screen flicker, low frame rate, stutter, HDR problems and a black screen may require different evidence and tests.</p></div> },
      { title: "How do you run a safe PC flickering test?", body: <ol><li><b>Record the baseline:</b> note game version, GPU driver, display mode, refresh rate, frame cap, upscaler/frame-generation setting and the exact scene where the shimmer appears.</li><li><b>Update first:</b> install the current game update, then retest the same scene before changing graphics settings.</li><li><b>Test one reversible variable:</b> if the symptom appears only at high frame rates, temporarily use a 60 FPS cap for the same scene. This is a diagnostic comparison, not a verified universal fix.</li><li><b>Retest display mode separately:</b> use the documented <Link href="/crash-and-stutter-fix">Full Screen test</Link> only if you also have the matching Windowed/Borderless stutter symptom.</li><li><b>Restore and report:</b> return a setting if it does not change the result. Include the before/after values in a public report rather than stacking driver, mod and configuration changes.</li></ol> },
      { title: "What is the PS5 Pro VRR test?", body: <><p>A PS5 Pro player report says disabling VRR stopped its flicker. This is a narrow community observation, not an official recommendation and not proof that VRR causes every visual issue.</p><div className="fix-callout"><span>REVERSIBLE PLATFORM TEST</span><p>On PS5 Pro only, record the original display setting, temporarily disable VRR, repeat the same area, then restore the setting if nothing changes. Do not apply this test to PC settings by name alone.</p></div></> },
      { title: "When should you avoid mods and broad tweaks?", body: <p>A mod that changes post-processing may hide one symptom while changing image quality, stability or patch compatibility. Avoid installing a mod, deleting caches, editing configuration files and changing driver settings all at once: the result will not show which variable mattered. If the issue persists in an unmodded game after a current patch, use the linked community threads or the site&apos;s <Link href="/contact">correction route</Link> with platform, version, display details and a short clip.</p> },
    ]}
  />;
}

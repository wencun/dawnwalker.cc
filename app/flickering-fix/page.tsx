import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Blood of Dawnwalker Flickering Fix (PC): Frame Gen & VRR",
  "Blood of Dawnwalker flickering on PC? Try the current safe checks for Frame Generation, Ultra post processing, FPS caps, V-Sync and VRR.",
  "/flickering-fix",
  ["Blood of Dawnwalker flickering", "Blood of Dawnwalker flickering PC", "The Blood of Dawnwalker screen flickering", "Blood of Dawnwalker light flickering", "Dawnwalker flicker", "Dawnwalker PS5 Pro VRR flickering"],
);

export default function FlickeringFixPage() {
  return <GuidePage
    eyebrow="PC & CONSOLE VISUAL ISSUE CHECK · UPDATED COMMUNITY EVIDENCE"
    title="Blood of Dawnwalker flickering fix: PC Frame Generation, post processing and VRR"
    dek="Blood of Dawnwalker flickering on PC is currently reported with Frame Generation, Ultra post processing and frame-rate/display combinations. Start with the reversible checks below; none is an official universal fix."
    checked="September 8, 2026"
    quickAnswer={<div className="fix-callout"><span>PC FLICKERING: TRY THESE FIRST</span><p><b>1.</b> Turn off Frame Generation and restart the game. <b>2.</b> If the light flicker began on Ultra, launch once on High or set Post Processing to High, then retest. <b>3.</b> If FPS exceeds your display refresh rate, enable a frame cap and compare the same scene. Each is a community-reported diagnostic test, not an official fix.</p></div>}
    faqs={[
      { question: "How do I fix Blood of Dawnwalker flickering on PC?", answer: "Start by turning off Frame Generation and restarting. If you launched at Ultra, test a launch on High or keep Post Processing at High, then compare a frame cap when FPS exceeds the display refresh rate. These are current community reports, not an official universal fix." },
      { question: "Is there an official Dawnwalker flickering fix?", answer: "No official universal fix was verified when this page was checked. The official Hotfix 1.0.2 note lists other known issues but does not name a universal flickering remedy, so the current PC steps remain diagnostic tests." },
      { question: "Should I turn off VRR to fix Dawnwalker flickering on PS5 Pro?", answer: "One PS5 Pro community report says disabling VRR stopped its flickering. Treat that as a reversible test for that platform, not a universal fix or a PC recommendation." },
      { question: "Should I install a flickering mod for Dawnwalker?", answer: "No. Do not use a visual mod as the first response. A mod can change image quality, introduce new variables and stop working after a patch. First test the in-game settings and record your game version." },
    ]}
    nextSteps={[
      { label: "Track bugs and current patches", href: "/known-issues", description: "Keep flickering separate from crashes, save locks and controller symptoms." },
      { label: "Check crash and stutter steps", href: "/crash-and-stutter-fix", description: "Use the documented Full Screen path only for its matching stutter symptom." },
      { label: "Cannot save or saving is locked?", href: "/cant-save", description: "Use a separate save-lock path instead of changing graphics settings." },
      { label: "Review mod safety", href: "/mods", description: "Check version support and reversibility before changing game files." },
    ]}
    sources={[
      { label: "Rebel Wolves — Hotfix 1.0.2 official notes and open issues", href: "https://dawnwalkergame.com/us/en/news/hotfix-102" },
      { label: "Steam Community — Ultra post-processing and Frame Generation reports (PC)", href: "https://steamcommunity.com/app/3751260/discussions/0/588436698284931961/" },
      { label: "Reddit — Flickering/shimmering fix (PC), community discussion", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1w6ybtp/flickeringshimmering_fix_pc/" },
      { label: "Reddit — PS5 Pro flickering and a VRR test, community discussion", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1w6e9zn/ps5_pro_flickering_solved_by_disabling_vrr/" },
      { label: "Reddit — lighting flickering above 60 FPS (PC), community discussion", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1w5upqo/lighting_flickering_above_60fps_pc/" },
      { label: "Steam Community — player reports of camera-movement flickering", href: "https://steamcommunity.com/app/3751260/discussions/0/588436698284799057/?ctp=2" },
    ]}
    sections={[
      { title: "What kind of Blood of Dawnwalker flickering are players reporting?", body: <div className="fact-grid"><p><b>PC light flicker after Frame Generation</b>Recent Steam reports describe lights or shadows flickering with Frame Generation enabled, including after a restart.</p><p><b>Ultra post-processing flicker</b>Players report that launching on High, or keeping Post Processing at High, can change a full-screen light-flicker symptom. It is not confirmed for every hardware setup.</p><p><b>PC shimmer while moving</b>Other reports describe light or foliage shimmer while moving the camera or character, sometimes at high frame rates.</p><p><b>PS5 Pro display flicker</b>A separate player report says a VRR setting change altered the symptom. That evidence does not establish a PC cause.</p><p><b>Not yet confirmed</b>No developer note verified one cause, an affected-hardware list or a universal flickering fix when this page was checked.</p><p><b>Do not merge symptoms</b>Screen flicker, low frame rate, stutter, HDR problems and a black screen can need different tests.</p></div> },
      { title: "How do you run the current safe PC flickering tests?", body: <ol><li><b>Record the baseline:</b> note game version, GPU driver, display mode, refresh rate, frame cap, upscaler, Frame Generation state and the exact scene where the flicker appears.</li><li><b>Turn off Frame Generation, then restart:</b> repeat the same scene with Frame Generation off. Do not change DLSS/FSR quality, drivers and post-processing in the same test.</li><li><b>Test the Ultra report:</b> if the game was launched on Ultra and the symptom is full-screen light flicker, launch once on High. Then set other options back individually, keeping Post Processing at High for the comparison.</li><li><b>Match FPS to the display test:</b> if the game is rendering above your display refresh rate, temporarily enable an in-game frame cap and retest. This is a comparison, not a recommendation to permanently use a particular cap.</li><li><b>Test V-Sync or VRR only in its matching case:</b> use one display variable at a time. The PS5 Pro VRR test below is not a PC setting guide.</li><li><b>Restore and report:</b> return a setting if it does not change the result. Include before/after values in a public report rather than stacking driver, mod and configuration changes.</li></ol> },
      { title: "What is the PS5 Pro VRR test?", body: <><p>A PS5 Pro player report says disabling VRR stopped its flicker. This is a narrow community observation, not an official recommendation and not proof that VRR causes every visual issue.</p><div className="fix-callout"><span>REVERSIBLE PLATFORM TEST</span><p>On PS5 Pro only, record the original display setting, temporarily disable VRR, repeat the same area, then restore the setting if nothing changes. Do not apply this test to PC settings by name alone.</p></div></> },
      { title: "When should you avoid mods and broad tweaks?", body: <p>A mod that changes post-processing may hide one symptom while changing image quality, stability or patch compatibility. Avoid installing a mod, deleting caches, editing configuration files and changing driver settings all at once: the result will not show which variable mattered. If the issue persists in an unmodded game after a current patch, use the linked community threads or the site&apos;s <Link href="/contact">correction route</Link> with platform, version, display details and a short clip.</p> },
    ]}
  />;
}

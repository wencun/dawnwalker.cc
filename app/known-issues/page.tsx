import { GuidePage, guideMetadata } from "../guide-page";
import Link from "next/link";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Known Issues: Hotfixes, Crashes & Saves",
  "The current Blood of Dawnwalker known-issues guide: what Hotfix 1.0.5 and 1.0.4 fixed, plus separate checks for shader stutter, saving, controller input and repeatable crashes.",
  "/known-issues",
  [
    "The Blood of Dawnwalker known issues",
    "Blood of Dawnwalker crash fix",
    "Blood of Dawnwalker black screen",
    "Blood of Dawnwalker stuttering fix",
    "Dawnwalker controller bug",
    "Blood of Dawnwalker bugs",
    "Blood of Dawnwalker glitch",
    "Dawnwalker movement bug",
    "Blood of Dawnwalker bug report",
  ],
);

export default function KnownIssuesPage() {
  return <GuidePage
    eyebrow="LAUNCH HELP DESK · REPORTS SEPARATED FROM FIXES"
    title="Blood of Dawnwalker bugs and known issues: crashes, saves and controllers"
    dek="Install the current hotfix first, then match the exact symptom before trying a workaround. This page separates confirmed patch fixes from player reports for shader stutter, saving, controller input and repeatable crashes; visual symptoms have a dedicated guide."
    checked="September 16, 2026"
    quickAnswer={<div className="fix-callout"><span>CURRENT ANSWER · HOTFIX 1.0.5</span><p><b>If shader-compilation stutter began at launch, install Hotfix 1.0.5 first.</b> It improves the shader-compilation pipeline for some users. Hotfix 1.0.4 separately fixes a save blocker, quest progression blockers and FPS drops triggered by outdated Microsoft GameInput on Steam. Choose the matching symptom below before changing settings.</p></div>}
    faqs={[
      { question: "Why does my Dawnwalker character stop sprinting with a controller?", answer: "The developer now lists gamepad sprint interruption as a known issue and recommends lowering controller sensitivity from 1.0 to 0.8 temporarily. PC Steam players can also try the separate Square-deadzone workaround." },
      { question: "What are the current Blood of Dawnwalker bugs and glitches?", answer: "Hotfix 1.0.5 targets shader-compilation stutter for some users. Hotfix 1.0.4 separately fixes one save blocker, several quest-progression blockers and Steam FPS drops caused by outdated Microsoft GameInput when a controller connects. Other crash, visual and controller reports need to be matched to the exact symptom rather than treated as one bug." },
      { question: "Why does The Blood of Dawnwalker crash during cutscenes?", answer: "Several launch-day players report black screens, startup crashes or repeatable cutscene crashes. No universal cause or official fix was verified when this page was checked. Record the platform, game version and exact cutscene before troubleshooting." },
      { question: "Are Dawnwalker cutscenes limited to 30 FPS?", answer: "Launch players and a PC technical report describe a 30 FPS cinematic cap. This tracker does not recommend modifying game files until an official option or a versioned, reversible method is verified." },
    ]}
    nextSteps={[
      { label: "Fix controller movement", href: "/controller-movement-fix", description: "Use the illustrated PC deadzone workaround for sprint interruption." },
      { label: "Check PC requirements", href: "/can-i-run", description: "Separate compatibility limits from a launch bug or stutter." },
      { label: "Check console modes", href: "/console-performance", description: "Compare official targets with early player reports." },
      { label: "Cannot save or saving is locked?", href: "/cant-save", description: "Keep a save-lock diagnosis separate from quest consequences." },
      { label: "Fix PC flickering", href: "/flickering-fix", description: "Use the current Frame Generation and post-processing tests." },
    ]}
    sources={[
      { label: "Steam — Hotfix 1.0.5 shader-compilation improvements", href: "https://steamcommunity.com/app/3751260" },
      { label: "Rebel Wolves — Hotfix 1.0.4 save, quest and Microsoft GameInput fixes", href: "https://dawnwalkergame.com/pl/en/news/hotfix-104" },
      { label: "Steam — developer Known Issues, fixes and workarounds (September 3)", href: "https://steamcommunity.com/app/3751260/discussions/0/588436698284819211/" },
      { label: "Reddit — repeated controller movement and deadzone reports", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1w5q862/movementcontroller_deadzone_problem_and_fix/" },
      { label: "Reddit — launch crash and black-screen reports", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1w5q75s/anyone_else_crashing/" },
      { label: "Steam — player performance and stutter discussion", href: "https://steamcommunity.com/app/3751260/discussions/0/588436355615549822/" },
      { label: "DSOGaming — PC stutter and cinematic frame-cap test", href: "https://www.dsogaming.com/news/the-blood-of-dawnwalker-suffers-from-major-stutters-and-a-30fps-cinematic-cap/" },
      { label: "Rebel Wolves — official Day One console performance targets", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1vwxe1r/the_blood_of_dawnwalker_will_receive_a/" },
    ]}
    sections={[
      {
        title: "Start with the symptom that actually matches",
        body: <div className="fact-grid"><p><b>Stutter after shader compilation</b>Install Hotfix 1.0.5, then retest the same scene. It is the current official shader-pipeline improvement, not a universal FPS promise.</p><p><b>Saving is locked</b>Install Hotfix 1.0.4 first. If saving remains unavailable after a normal transition, use the <Link href="/cant-save">save-lock diagnostic</Link> and preserve the run.</p><p><b>FPS drops when connecting a controller on Steam</b>Hotfix 1.0.4 targets outdated Microsoft GameInput. Retest before applying a Steam Input remap.</p><p><b>Sprint interrupts while turning</b>Lower controller sensitivity from 1.0 to 0.8. The dedicated <Link href="/controller-movement-fix">controller guide</Link> keeps the PC-only deadzone workaround separate.</p></div>,
      },
      {
        title: "Current launch status",
        body: <div className="fact-grid"><p><b>Hotfix 1.0.5</b>The latest official update improves the shader-compilation pipeline for some users.</p><p><b>Hotfix 1.0.4</b>It fixes one save blocker, multiple progression blockers and Steam GameInput-related FPS drops when a controller connects.</p><p><b>Developer acknowledged</b>The earlier official known-issues post includes Windowed/Borderless stutter, shader-compilation crashes and PS5 button mapping; check the current patch note before assuming each remains unresolved.</p><p><b>Repeated report</b>Players report startup black screens, cutscene crashes or crashes returning at the same scene.</p><p><b>Performance reports</b>Frame pacing and a 30 FPS cinematic cap are reported; results vary by system and scene.</p><p><b>Visual reports</b>PC shimmer, light flickering and PS5 Pro VRR reports have a separate <Link href="/flickering-fix">platform-specific diagnostic guide</Link>.</p></div>,
      },
      {
        title: "Controller movement: the clearest reproducible workaround",
        body: <><p><b>First lower controller sensitivity from 1.0 to 0.8, as listed in the developer Known Issues thread.</b> If diagonal turning still interrupts sprint on PC Steam, use the dedicated <Link href="/controller-movement-fix">illustrated controller movement guide</Link> for the additional Square-deadzone path.</p><p className="note">The sensitivity setting is the developer-listed temporary workaround. The Square/Raw remap remains a separate community workaround and the Steam steps do not apply to console system settings.</p></>,
      },
      {
        title: "Startup crash, black screen or repeatable cutscene crash",
        body: <ol><li><b>Record the failure:</b> platform, game version, storefront, GPU driver, exact scene and whether it fails at the same point.</li><li><b>Restart once:</b> close the game and storefront completely, then retry without adding mods or launch arguments.</li><li><b>Verify the installation:</b> use the storefront&apos;s file verification feature. This is a safe integrity check, not a guaranteed fix.</li><li><b>Remove one variable at a time:</b> disable overlays or third-party injectors temporarily, retest, and avoid changing several graphics or system settings together.</li><li><b>Stop after repeatable failure:</b> preserve the crash report and wait for an official update instead of applying unrelated registry edits, driver downgrades or copied configuration files.</li></ol>,
      },
      {
        title: "Stutter, low FPS and 30 FPS cutscenes",
        body: <><p>Early results are mixed: some players report smooth play, while others report camera-turn or traversal stutter on high-end hardware. A technical report also describes a 30 FPS cinematic cap. That makes <b>system + settings + scene + patch version</b> essential context.</p><ul><li>Do not call every low frame rate a bug before comparing resolution, preset, DLSS/FSR mode and Frame Generation state.</li><li>Do not promise that shader-cache deletion, a mod or a hidden configuration line fixes every system.</li><li>For a useful benchmark, include average FPS, frame-time behavior and the tested location—not only the GPU name.</li></ul></>,
      },
      {
        title: "Controller menus, wrong button prompts and wireless detection",
        body: <p>These may be separate from the movement deadzone symptom. Players report selections jumping, confirm buttons failing, input switching between mouse/keyboard and controller, Xbox glyphs with DualSense, or wireless detection problems. Test one controller, one connection method and one Steam Input state at a time, and report the exact combination.</p>,
      },
      {
        title: "Official fix versus community workaround",
        body: <div className="fact-grid"><p><b>Official fix</b>A dated publisher or developer patch note identifies the issue and changed version.</p><p><b>Community workaround</b>Reversible steps are reproduced by independent players but not confirmed by the developer.</p><p><b>Repeated report</b>More than one player describes the same symptom, but the cause and solution remain unknown.</p><p><b>Unverified claim</b>A single unsourced comment, copied fix list or video without platform and version context.</p></div>,
      },
      {
        title: "Before submitting a report",
        body: <p>Include platform, storefront, game version, controller or hardware model, graphics settings, steps to reproduce and a short clip where possible. Use the <a href="https://github.com/wencun/dawnwalker.cc/issues/new/choose" target="_blank" rel="noreferrer">structured feedback form</a> without account credentials, personal information or private save files.</p>,
      },
    ]}
  />;
}

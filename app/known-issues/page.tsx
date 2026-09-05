import { GuidePage, guideMetadata } from "../guide-page";
import Link from "next/link";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Known Issues & Launch Fixes",
  "Track The Blood of Dawnwalker controller bugs, startup crashes, black screens, stutter, 30 FPS cutscenes and evidence-backed community workarounds.",
  "/known-issues",
  [
    "The Blood of Dawnwalker known issues",
    "Blood of Dawnwalker crash fix",
    "Blood of Dawnwalker black screen",
    "Blood of Dawnwalker stuttering fix",
    "Dawnwalker controller bug",
    "Dawnwalker flickering",
  ],
);

export default function KnownIssuesPage() {
  return <GuidePage
    eyebrow="LAUNCH HELP DESK · REPORTS SEPARATED FROM FIXES"
    title="The Blood of Dawnwalker known issues and launch fixes"
    dek="Launch reports currently cluster around controller movement, startup or cutscene crashes, stutter and uneven console performance. This tracker separates repeated reports, community workarounds and official fixes."
    checked="September 4, 2026"
    faqs={[
      { question: "Why does my Dawnwalker character stop sprinting with a controller?", answer: "The developer now lists gamepad sprint interruption as a known issue and recommends lowering controller sensitivity from 1.0 to 0.8 temporarily. PC Steam players can also try the separate Square-deadzone workaround." },
      { question: "Why does The Blood of Dawnwalker crash during cutscenes?", answer: "Several launch-day players report black screens, startup crashes or repeatable cutscene crashes. No universal cause or official fix was verified when this page was checked. Record the platform, game version and exact cutscene before troubleshooting." },
      { question: "Are Dawnwalker cutscenes limited to 30 FPS?", answer: "Launch players and a PC technical report describe a 30 FPS cinematic cap. This tracker does not recommend modifying game files until an official option or a versioned, reversible method is verified." },
    ]}
    nextSteps={[
      { label: "Fix controller movement", href: "/controller-movement-fix", description: "Use the illustrated PC deadzone workaround for sprint interruption." },
      { label: "Check PC requirements", href: "/can-i-run", description: "Separate compatibility limits from a launch bug or stutter." },
      { label: "Check console modes", href: "/console-performance", description: "Compare official targets with early player reports." },
    ]}
    sources={[
      { label: "Steam — developer Known Issues, fixes and workarounds (September 3)", href: "https://steamcommunity.com/app/3751260/discussions/0/588436698284819211/" },
      { label: "Reddit — repeated controller movement and deadzone reports", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1w5q862/movementcontroller_deadzone_problem_and_fix/" },
      { label: "Reddit — launch crash and black-screen reports", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1w5q75s/anyone_else_crashing/" },
      { label: "Steam — player performance and stutter discussion", href: "https://steamcommunity.com/app/3751260/discussions/0/588436355615549822/" },
      { label: "DSOGaming — PC stutter and cinematic frame-cap test", href: "https://www.dsogaming.com/news/the-blood-of-dawnwalker-suffers-from-major-stutters-and-a-30fps-cinematic-cap/" },
      { label: "Rebel Wolves — official Day One console performance targets", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1vwxe1r/the_blood_of_dawnwalker_will_receive_a/" },
    ]}
    sections={[
      {
        title: "Current launch status",
        body: <div className="fact-grid"><p><b>Developer acknowledged</b>Gamepad sprint interruption is listed in the September 3 Known Issues thread.</p><p><b>Temporary workaround</b>Lower controller sensitivity from 1.0 to 0.8; PC Steam users can also test Square/Raw input.</p><p><b>Repeated report</b>Some PC players report startup black screens, cutscene crashes or crashes returning on the same scene.</p><p><b>Performance reports</b>Stutter, frame pacing and a 30 FPS cinematic cap are reported; results vary by system.</p><p><b>Visual reports</b>PC shimmer and PS5 Pro flicker reports now have a separate <Link href="/flickering-fix">platform-specific diagnostic guide</Link>.</p></div>,
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

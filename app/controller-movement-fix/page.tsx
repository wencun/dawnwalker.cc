import { GuidePage, guideMetadata } from "../guide-page";
import Link from "next/link";

const youtubeSearch = "https://www.youtube.com/results?search_query=The+Blood+of+Dawnwalker+controller+movement+fix+deadzone";

export const metadata = guideMetadata(
  "Dawnwalker Controller Movement Bug Fix: Sprint Stops & Deadzone",
  "Fix The Blood of Dawnwalker controller sprint bug with the developer-listed 0.8 sensitivity workaround, plus illustrated Steam Input deadzone steps for PC.",
  "/controller-movement-fix",
  [
    "Dawnwalker controller movement bug fix",
    "Blood of Dawnwalker sprint stops",
    "Dawnwalker controller deadzone",
    "Dawnwalker slow walking fix",
    "Dawnwalker PS5 controller bug",
  ],
);

export default function ControllerMovementFixPage() {
  return <GuidePage
    eyebrow="LAUNCH FIX · CONTROLLER MOVEMENT"
    title="Dawnwalker controller movement bug: how to stop sprinting and slow-walk issues"
    dek="The developer's Known Issues thread now acknowledges sprint interruption on gamepad and recommends lowering controller sensitivity from 1.0 to 0.8 while a fix is being prepared. PC Steam players also report success with a reversible Square-deadzone workaround."
    checked="September 4, 2026"
    faqs={[
      { question: "How do I fix the Dawnwalker controller sprint bug?", answer: "First lower controller sensitivity from 1.0 to 0.8 in the game settings; the developer lists this as a temporary workaround. PC Steam players can also try a Custom, Square left-stick deadzone if diagonal movement still interrupts sprinting." },
      { question: "Why does Coen stop sprinting or walk slowly when moving diagonally?", answer: "Players repeatedly report that diagonal stick input can fall below the game's apparent full-movement threshold. The exact cause has not been confirmed in an official technical notice, so this guide describes the symptom and community workaround rather than claiming a verified root cause." },
      { question: "Does the Square deadzone workaround fix controller menus?", answer: "Not necessarily. Some players say movement improves while menu selection, input switching or button detection remains unreliable. Treat those as separate controller issues." },
      { question: "Is there a PS5 fix for the Dawnwalker sprint bug?", answer: "The developer-listed sensitivity change from 1.0 to 0.8 can be tried in the game's controller settings on console. The separate Steam Input Square-deadzone steps apply only to PC Steam." },
    ]}
    nextSteps={[
      { label: "Apply the PC workaround", href: "#steam-fix", description: "Follow the illustrated Steam Input path and test the left stick." },
      { label: "Check other launch issues", href: "/known-issues", description: "Separate movement trouble from crashes, stutter and menu input bugs." },
      { label: "Compare PC requirements", href: "/can-i-run", description: "Check whether performance trouble may be separate from controller input." },
    ]}
    sources={[
      { label: "Steam — developer Known Issues, fixes and workarounds (September 3)", href: "https://steamcommunity.com/app/3751260/discussions/0/588436698284819211/" },
      { label: "Reddit — repeated diagonal movement report and Square/Raw workaround", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1w5q862/movementcontroller_deadzone_problem_and_fix/" },
      { label: "Reddit — exact Steam Controller Configurator steps", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1w5t08t/fix_for_the_buggy_controller_movement_on_xbox/" },
      { label: "Reddit — PS5 sprint interruption report", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1w5cf4g/coenn_keeps_stop_sprinting_walking_automatically/" },
      { label: "Reddit — controller movement reports across PC devices", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1w5qwih/janky_controls_any_fix/" },
      { label: "Valve — Steam Input source modes and deadzone documentation", href: "https://partner.steamgames.com/doc/features/steam_controller/input_source_modes?language=english" },
    ]}
    sections={[
      {
        title: "Try the developer-listed workaround first",
        body: <><div className="sensitivity-fix"><div><small>CONTROLLER SENSITIVITY</small><b>1.0</b><i>→</i><strong>0.8</strong></div><span><i style={{ width: "80%" }} /></span></div><p><b>Open the in-game controller settings and lower sensitivity from 1.0 to 0.8.</b> The September 3 Known Issues thread says the team is working on gamepad sprint interruption and lists this as the temporary workaround. It applies more broadly than Steam Input and should be tested first.</p></>,
      },
      {
        title: "If 0.8 does not solve it on PC: change the deadzone shape",
        body: <><div className="fix-callout"><span>COMMUNITY WORKAROUND</span><p><b>Steam Library → The Blood of Dawnwalker → Properties → Controller → Controller Configurator → Edit Layout → Joysticks → Left Joystick settings → Deadzone Source: Custom → Deadzone Shape: Square.</b></p></div><p>This workaround is relevant when straight movement works, but Coen slows, walks or drops out of sprint as you turn the left stick diagonally. It does not prove that your controller is defective, and it may not solve menu or wireless-detection problems.</p></>,
      },
      {
        title: "Illustrated Steam Input fix",
        body: <ol id="steam-fix" className="fix-steps">
          <li><div><span>01</span><h3>Open the game’s Controller settings</h3><p>In the Steam Library, right-click <b>The Blood of Dawnwalker</b>, choose <b>Properties</b>, then open <b>Controller</b> and the <b>Controller Configurator</b>.</p></div><figure className="steam-shot" aria-label="Steam Properties with Controller selected"><div className="steam-window" aria-hidden="true"><div className="steam-title"><i />THE BLOOD OF DAWNWALKER · PROPERTIES</div><div className="steam-body"><div className="steam-menu"><span>General</span><span className="selected">Controller</span><span>DLC</span></div><div className="steam-panel"><small>CONTROLLER</small><b>Use Steam Input</b><em>Controller Configurator ›</em></div></div></div><figcaption>Open the per-game Controller Configurator.</figcaption></figure></li>
          <li><div><span>02</span><h3>Edit the left joystick</h3><p>Select <b>Edit Layout</b>, open <b>Joysticks</b>, then choose the settings cog beside the left joystick behavior. Change only the left stick first so the result is easy to test and reverse.</p></div><figure className="steam-shot" aria-label="Steam Input layout with left joystick highlighted"><div className="steam-window" aria-hidden="true"><div className="steam-title"><i />EDIT LAYOUT</div><div className="steam-body"><div className="steam-menu"><span>Buttons</span><span className="selected">Joysticks</span><span>Triggers</span></div><div className="steam-panel joystick-panel"><small>LEFT JOYSTICK BEHAVIOR</small><b>Joystick</b><em>Settings ⚙</em></div></div></div><figcaption>Choose the left joystick settings cog.</figcaption></figure></li>
          <li><div><span>03</span><h3>Use a Custom, Square deadzone</h3><p>Scroll to <b>Deadzone Source</b>, select <b>Custom</b>, and change the shape from <b>Circle</b> to <b>Square</b>. Some controller utilities call the equivalent setting <b>Raw</b>.</p></div><figure className="steam-shot" aria-label="Steam Input deadzone settings showing Custom and Square"><div className="deadzone-settings" aria-hidden="true"><small>DEADZONE SOURCE</small><b>Custom</b><small>DEADZONE SHAPE</small><b className="highlight">Square</b><div className="shape-compare"><div><i className="stick-shape circle" /><span>Circle</span></div><strong>→</strong><div><i className="stick-shape square" /><span>Square</span></div></div></div><figcaption>The community workaround changes the output shape, not the physical stick.</figcaption></figure></li>
          <li><div><span>04</span><h3>Test diagonals, then keep or restore</h3><p>Load a safe area, hold sprint, and rotate the left stick through forward-left and forward-right. If movement still breaks—or menus become worse—restore the default Steam Input layout. Do not keep stacking unverified changes.</p></div><figure className="steam-shot" aria-label="Controller test directions"><div className="test-pad" aria-hidden="true"><div className="test-stick"><i /><span>↖</span><span>↑</span><span>↗</span></div><div><b>TEST</b><small>forward-left</small><small>forward</small><small>forward-right</small></div></div><figcaption>Test the exact diagonal directions that previously interrupted sprint.</figcaption></figure></li>
        </ol>,
      },
      {
        title: "Why Circle versus Square can matter",
        body: <><div className="input-explainer"><div><i className="stick-shape circle" /><p><b>Circular output</b>The diagonal corner cannot reach the same X and Y extremes as a square output map. Community reports suggest the game may interpret some diagonal values as less than full movement.</p></div><div><i className="stick-shape square" /><p><b>Square/Raw output</b>The remapped diagonal can reach the outer corner. Players report that this prevents some sudden walk or sprint interruptions.</p></div></div><p className="note">This explains why the workaround is plausible; it is not an official root-cause statement from Rebel Wolves. Valve documents Steam Input deadzones and joystick output, while Dawnwalker players provide the game-specific observations.</p></>,
      },
      {
        title: "PC, DualSense and PS5: what the workaround can fix",
        body: <div className="fact-grid"><p><b>Steam + Xbox-style controller</b>Try the per-game Steam Input Square deadzone. Several players report improvement.</p><p><b>Steam + DualSense</b>The same Steam Input remap may work, but the game may show Xbox button glyphs or have separate detection issues.</p><p><b>GOG or controller utility</b>Look for an equivalent stick trajectory or deadzone-shape option in the controller manufacturer’s software. Names vary; save the original setting first.</p><p><b>PS5 console</b>The Steam steps do not apply. No verified equivalent workaround was available at the time checked; wait for an official game update and submit a reproducible report.</p></div>,
      },
      {
        title: "Movement fixed, but menus still skip or switch inputs?",
        body: <p><b>Treat menu input as a separate launch issue.</b> Players also report buttons failing to confirm, selections jumping, or the game switching between mouse/keyboard and controller. A Square deadzone may improve movement without correcting those symptoms. Restore the default layout if the remap makes menus worse, try one input device at a time, and record platform, controller model, connection type and Steam Input state when reporting it.</p>,
      },
      {
        title: "Video walkthroughs",
        body: <div className="video-help"><div className="video-play" aria-hidden="true">▶</div><div><p className="eyebrow">YOUTUBE · CURRENT COMMUNITY VIDEOS</p><h3>Watch the same deadzone path on video</h3><p>Because launch-day uploads can be renamed, removed or superseded by a patch, this link opens the current YouTube results for the exact problem. Use a video only if it shows the same path above and names its platform and date.</p><a href={youtubeSearch} target="_blank" rel="noreferrer">Search YouTube for the Dawnwalker controller fix ↗</a></div></div>,
      },
      {
        title: "When not to use this workaround",
        body: <ul><li>Your game crashes, stutters or freezes without a controller: use the <Link href="/known-issues">known-issues tracker</Link> instead.</li><li>Your character drifts while the stick is untouched: test the controller for physical drift before changing the output shape.</li><li>You are on PS5 or Xbox: Steam Input instructions do not apply to console system settings.</li><li>An official patch fixes the issue: restore defaults first and retest before keeping an old workaround.</li></ul>,
      },
    ]}
  />;
}

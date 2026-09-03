import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

const youtubeSearch = "https://www.youtube.com/results?search_query=The+Blood+of+Dawnwalker+how+many+spoonfuls+of+herbs";

export const metadata = guideMetadata(
  "How Many Spoonfuls of Herbs in The Blood of Dawnwalker?",
  "For Esme's medicine in The Blood of Dawnwalker's Withering Away quest, use hot water and add three spoonfuls of herbs. See the exact order and spoiler-light consequences.",
  "/how-many-spoonfuls-of-herbs",
  [
    "Blood of the Dawnwalker how many spoonfuls of herbs",
    "The Blood of Dawnwalker three spoonfuls of herbs",
    "Dawnwalker medicine for mother recipe",
    "Dawnwalker save Esme medicine",
    "Withering Away herbs answer",
  ],
);

export default function HerbsRecipePage() {
  return <GuidePage
    eyebrow="PROLOGUE ANSWER · WITHERING AWAY"
    title="How many spoonfuls of herbs should you add in The Blood of Dawnwalker?"
    dek="For Esme's medicine in the Withering Away prologue quest, select hot water and then add three spoonfuls of herbs. Read Anca's instruction note before returning home, because the recipe cannot be reopened at the brewing choice."
    checked="September 3, 2026"
    quickAnswer={<aside className="recipe-answer" aria-label="Correct medicine recipe"><span>QUICK ANSWER · SPOILER-LIGHT</span><h2>Use hot water, then add three spoonfuls of herbs.</h2><p>This is Anca&apos;s recipe for Esme&apos;s medicine. If you are already at the choice and want to preserve the intended prologue outcome, choose these two options in this order.</p><div className="recipe-card" aria-label="Hot water followed by three spoonfuls of herbs"><div className="recipe-choice"><i aria-hidden="true">♨</i><b>USE HOT WATER</b><small>Not boiling, not cold.</small></div><span className="recipe-arrow" aria-hidden="true">→</span><div className="recipe-choice"><i aria-hidden="true">3×</i><b>THREE SPOONFULS</b><small>Add three herbs.</small></div></div></aside>}
    faqs={[
      { question: "How many spoonfuls of herbs should I add in The Blood of Dawnwalker?", answer: "For Esme's medicine during Withering Away, select Add three spoonfuls of herbs. The preceding water choice is Use hot water." },
      { question: "What water should I use for Esme's medicine?", answer: "Choose Use hot water, then Add three spoonfuls of herbs. Several launch-week walkthroughs reproduce the same recipe from Anca's note." },
      { question: "Can I read Anca's recipe while brewing the medicine?", answer: "No. The launch walkthroughs note that the recipe cannot be reopened once the brewing dialogue begins, so read it in your inventory before returning home." },
      { question: "Does the medicine choice matter in Withering Away?", answer: "It is presented as a correct-or-incorrect recipe choice. If you want to avoid an alternate prologue outcome, use hot water and three spoonfuls, and keep a manual save before advancing the quest." },
    ]}
    nextSteps={[
      { label: "Check the 30-day system", href: "/time-system", description: "See what can spend a time segment and when exploration is time-neutral." },
      { label: "Read romance options", href: "/romance", description: "See the currently reported relationship routes with spoiler labels." },
      { label: "Track launch problems", href: "/known-issues", description: "Separate quest choices from PC, console and controller issues." },
    ]}
    sources={[
      { label: "PC Gamer — Anca's recipe: hot water and three spoonfuls", href: "https://www.pcgamer.com/games/rpg/blood-of-dawnwalker-ancas-recipe-instructions/" },
      { label: "GamesRadar+ — water and herb-spoonful recipe", href: "https://www.gamesradar.com/games/action-rpg/blood-of-dawnwalker-brew-herbs-medicine-water-spoonfuls/" },
      { label: "PowerPyx — Withering Away walkthrough and recipe text", href: "https://www.powerpyx.com/blood-of-dawnwalker-withering-away-walkthrough/" },
      { label: "PlayStation Blog — official context for the Anca medicine quest and time choices", href: "https://blog.playstation.com/2026/07/07/the-blood-of-dawnwalker-unique-time-driven-quest-system-and-player-choice-detailed/" },
    ]}
    sections={[
      {
        title: "Where the herb choice appears",
        body: <><p>The choice appears near the end of <b>Withering Away</b>, the early prologue quest in which Coen gets medicine from the herbalist Anca for his mother, Esme. After returning home and speaking with Pieter, you are asked to brew the medicine.</p><p><b>Read “Instructions From Anca” in your inventory before you walk into the brewing scene.</b> The recipe is not available to reopen once the water and herb prompts appear, which is why players are searching this answer.</p></>,
      },
      {
        title: "Correct medicine recipe: exact order",
        body: <ol className="fix-steps"><li><div><span>01</span><h3>Choose “Use hot water”</h3><p>Select hot water for the first brewing choice. Do not choose cold or boiling water.</p></div><figure className="steam-shot" aria-label="Recipe card showing hot water"><div className="deadzone-settings" aria-hidden="true"><small>ANCA&apos;S RECIPE · STEP 1</small><b className="highlight">USE HOT WATER</b><div className="shape-compare"><div><i className="stick-shape circle" /><span>Cold</span></div><strong>✕</strong><div><i className="stick-shape square" /><span>Hot</span></div></div></div><figcaption>First prompt: use hot water.</figcaption></figure></li><li><div><span>02</span><h3>Choose “Add three spoonfuls of herbs”</h3><p>For the second prompt, choose three spoonfuls. This matches the instruction note given by Anca.</p></div><figure className="steam-shot" aria-label="Recipe card showing three spoonfuls"><div className="test-pad" aria-hidden="true"><div className="test-stick"><i /><span>1</span><span>2</span><span>3</span></div><div><b>3 × HERBS</b><small>one spoonful ✕</small><small>two spoonfuls ✕</small><small>three spoonfuls ✓</small></div></div><figcaption>Second prompt: add three spoonfuls.</figcaption></figure></li></ol>,
      },
      {
        title: "Does getting the recipe right matter?",
        body: <><p><b>Yes—treat it as a correct-or-incorrect recipe puzzle, not a cosmetic dialogue choice.</b> Launch walkthroughs consistently describe the correct brew as important to Esme&apos;s immediate prologue outcome. To avoid revealing more story detail than necessary, this page does not list the full alternate scene.</p><p className="note">If you deliberately want to see both versions, make a manual save before returning home. This preserves your own choice without claiming that every later consequence is mapped or permanent.</p></>,
      },
      {
        title: "Common mistakes before the Blood Mass",
        body: <div className="fact-grid"><p><b>Skipping the inventory note</b>The game gives you Anca&apos;s instructions, but you cannot reopen the note during the brew dialogue.</p><p><b>Picking boiling water</b>The correct prompt is <b>hot</b> water; do not infer that hotter is better.</p><p><b>Choosing two spoonfuls</b>Some early reposts give a conflicting number. Three independent launch walkthroughs used here agree on <b>three</b>.</p><p><b>Waiting too long</b>The prologue uses time segments. Finish the medicine sequence before the Blood Mass instead of treating it as a free side activity.</p></div>,
      },
      {
        title: "Video walkthroughs",
        body: <div className="video-help"><div className="video-play" aria-hidden="true">▶</div><div><p className="eyebrow">YOUTUBE · CURRENT QUEST VIDEOS</p><h3>Watch the exact two-choice sequence</h3><p>Launch-day video titles and uploads change quickly. This link opens current YouTube results for the precise herb question; use a video that shows both the hot-water and three-spoonful prompts.</p><a href={youtubeSearch} target="_blank" rel="noreferrer">Search YouTube for the herbs answer ↗</a></div></div>,
      },
      {
        title: "What to do next in the prologue",
        body: <p>After giving Esme the medicine, continue the prologue normally. If your next concern is the wider time system rather than this single choice, use the <Link href="/time-system">30-day time-limit guide</Link>. For a relationship route, use the spoiler-aware <Link href="/romance">romance options guide</Link> instead of assuming an early dialogue choice guarantees a later route.</p>,
      },
    ]}
  />;
}

import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Blood of Dawnwalker Skills: All Skills, Reset Skills, Vampire Skills & Time Cost",
  "Blood of Dawnwalker skills guide: all skills, early priorities, vampire skills, skill resets and time cost. Separate verified mechanics from build recommendations.",
  "/skills",
  ["blood of dawnwalker skills", "the blood of dawnwalker all skills", "blood of dawnwalker reset skills", "blood of dawnwalker skills cost time", "blood of dawnwalker vampire skills", "blood of dawnwalker best skills to get first", "blood of dawnwalker skills to get first"],
);

export default function SkillsPage() {
  return <GuidePage
    eyebrow="SKILLS GUIDE · EARLY PICKS, RESETS AND VAMPIRE TOOLS"
    title="Blood of Dawnwalker skills: early picks, resets, vampire skills and time cost"
    dek="A mechanics-first skill guide for players who need to know what is verified about unlocks, resets and time cost before following a best-build recommendation."
    checked="October 9, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · SKILLS</span><p><b>Take survival and consistency tools first, then specialise when your weapon and quest route are clear.</b> Do not assume a skill reset or a time cost exists unless the current in-game UI explicitly shows it.</p></div>}
    faqs={[{ question: "Can you reset skills in Blood of Dawnwalker?", answer: "Use only the current game's explicit respec option or confirmation prompt. Do not spend points assuming a reset system from another RPG applies." }, { question: "Do skills cost time?", answer: "Quest actions and some transitions can advance time, but a skill's time cost should be verified in the current game state before it is treated as a route-planning rule." }, { question: "What skills should I get first?", answer: "Start with survivability, stamina or recovery tools that improve your normal play, then select weapon, vampire or witchcraft options for your preferred route." }]}
    nextSteps={[{ label: "Compare best builds", href: "/best-builds", description: "Choose a sword, vampire, witchcraft or tank setup." }, { label: "Learn combat basics", href: "/combat-how-to", description: "Use claws, healing and form-switching correctly." }, { label: "Plan quest time", href: "/time-system", description: "Keep skill choices separate from time-advancing actions." }]}
    sources={[{ label: "Dawnwalker Guide — best builds", href: "/best-builds" }, { label: "Dawnwalker Guide — time system", href: "/time-system" }, { label: "Bandai Namco — gameplay reveal recap", href: "https://en.bandainamcoent.eu/dawnwalker/news/the-blood-of-dawnwalker-gameplay-reveal-recap" }]}
    sections={[{ title: "All skills and early priorities", body: <div className="fact-grid"><p><b>Early skills</b>Favour healing, defense, stamina or recovery that helps every encounter.</p><p><b>Vampire skills</b>Use night mobility and sustain where the route actually supports night play.</p><p><b>Build skills</b>Specialise only after choosing weapon style and gear route.</p><p><b>Resets</b>Verify the live UI before relying on a respec plan.</p></div> }, { title: "Skills, resets and time", body: <p>Skill progression and the 30-day system are related only when a current action proves it spends time. Use <Link href="/time-system">the time-system guide</Link> for confirmed time checkpoints and <Link href="/best-builds">best builds</Link> for practical ranking advice.</p> }, { title: "Skills keyword coverage", body: <p>This page covers all skills, skill reset, skill time cost, vampire skills and skills to get first. The separate build page remains the destination for “best skills” comparisons.</p> }]}
  />;
}

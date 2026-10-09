import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Blood of Dawnwalker How To: Heal, Use Claws, Shapeshift, Blood Surge & Poison",
  "Blood of Dawnwalker how-to guide for healing, claws, shapeshift, Blood Surge, activation charges, poison, infirmary access and other combat or system questions.",
  "/combat-how-to",
  ["blood dawnwalker how to", "blood of dawnwalker how to heal", "blood of dawnwalker how to switch to claws", "blood of dawnwalker how to shapeshift", "blood of dawnwalker how to use claws", "blood of dawnwalker how to get more activation charges", "blood of dawnwalker how to get blood surge", "blood of dawnwalker how to get rid of poison", "blood of dawnwalker how to get into infirmary"],
);

export default function CombatHowToPage() {
  return <GuidePage
    eyebrow="HOW-TO HUB · COMBAT AND SYSTEM ANSWERS"
    title="Blood of Dawnwalker how to: heal, use claws, shapeshift and get Blood Surge"
    dek="A practical hub for control, combat and system questions. It captures short how-to searches and routes gear, quest and bug questions to the right full guide."
    checked="October 9, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · HOW TO</span><p><b>If a combat action is not working, check form, time of day, resource cost and controller state before assuming the ability is missing.</b> For quest-locked powers or items, follow the relevant quest route instead of farming randomly.</p></div>}
    faqs={[
      { question: "How do you heal in Blood of Dawnwalker?", answer: "Healing depends on your current resources, form and available items or abilities. If healing fails, check whether you are blocked by combat state, poison or a missing resource." },
      { question: "How do you use claws or shapeshift?", answer: "Claws and shapeshift-style actions are tied to form, timing and unlocked abilities. Check night/day constraints and control bindings first." },
      { question: "How do you get Blood Surge?", answer: "Treat Blood Surge as an ability-unlock search: verify the prerequisite quest, skill or progression requirement before expecting it in your controls." },
    ]}
    nextSteps={[
      { label: "Build around abilities", href: "/best-builds", description: "Choose vampire, sword or witchcraft priorities." },
      { label: "Fix controller movement", href: "/controller-movement-fix", description: "Solve input symptoms before changing playstyle." },
      { label: "Find preorder armor", href: "/editions", description: "Check edition and bonus entitlement context." },
      { label: "Use quest routes", href: "/quests", description: "Find ability and item prerequisites." },
    ]}
    sources={[
      { label: "Dawnwalker Guide — Best builds", href: "/best-builds" },
      { label: "Dawnwalker Guide — Controller fix", href: "/controller-movement-fix" },
      { label: "Dawnwalker Guide — Editions", href: "/editions" },
      { label: "Bandai Namco — gameplay reveal recap", href: "https://en.bandainamcoent.eu/dawnwalker/news/the-blood-of-dawnwalker-gameplay-reveal-recap" },
    ]}
    sections={[
      { title: "Fast checks for any how-to problem", body: <ol><li><b>Check form:</b> human and vampire tools are not interchangeable.</li><li><b>Check day or night:</b> some actions are meant for night routes or vampire traversal.</li><li><b>Check resources:</b> healing, claws and surge-style powers may require charges, blood, essence or cooldowns.</li><li><b>Check controls:</b> if movement or input feels wrong, fix the controller before assuming a locked skill.</li><li><b>Check quest prerequisites:</b> some abilities and items are progression rewards, not shop purchases.</li></ol> },
      { title: "How-to keyword map", body: <table className="editorial-table"><caption>Use one hub for short system searches</caption><thead><tr><th scope="col">Search</th><th scope="col">Best answer path</th></tr></thead><tbody><tr><th scope="row">how to heal</th><td>Resource, item and combat-state checks here.</td></tr><tr><th scope="row">how to use claws / switch to claws</th><td>Form, time-of-day and control checks here.</td></tr><tr><th scope="row">how to shapeshift</th><td>Form and progression checks here.</td></tr><tr><th scope="row">how to get Blood Surge</th><td>Ability prerequisite note here, then split when route is verified.</td></tr><tr><th scope="row">how to get preorder armor</th><td><Link href="/editions">Editions and bonus entitlement</Link>.</td></tr><tr><th scope="row">how to get Arbiter armor</th><td><Link href="/a-bulwark-against-darkness">A Bulwark Against Darkness</Link>.</td></tr></tbody></table> },
      { title: "Poison, infirmary and free-Mert searches", body: <p>Poison removal, infirmary access and Mert-related searches should stay grouped here until there is a verified quest route with exact steps. Once the route is repeatable, create a dedicated page and link it from this section.</p> },
      { title: "Do not confuse combat how-to with build advice", body: <p>If the user asks “how do I use this action,” answer controls and prerequisites first. If the user asks “is this action good,” send them to <Link href="/best-builds">best builds</Link>. Keeping those intents separate improves relevance and click satisfaction.</p> },
    ]}
  />;
}

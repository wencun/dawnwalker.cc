import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker A Bulwark Against Darkness: All 4 Components",
  "Complete A Bulwark Against Darkness in The Blood of Dawnwalker: find the Flask of Quicksilver, Bundle of Silk Threads, saint relic and Large Lizard's Moult, then finish the Arbiter armor ritual.",
  "/a-bulwark-against-darkness",
  ["The Blood of Dawnwalker A Bulwark Against Darkness", "Dawnwalker Bulwark Against Darkness walkthrough", "Dawnwalker Arbiter armor components", "Flask of Quicksilver Dawnwalker", "Bundle of Silk Threads Dawnwalker"],
);

export default function ABulwarkAgainstDarknessPage() {
  return <GuidePage
    eyebrow="ARBITER ARMOR QUEST · COMPONENT WALKTHROUGH"
    title="A Bulwark Against Darkness: all 4 Arbiter armor components"
    dek="For A Bulwark Against Darkness, activate the quest from its mysterious letter, collect a Flask of Quicksilver, Bundle of Silk Threads, saint relic and Large Lizard’s Moult, then return to the Uriashi blacksmith for the final ritual."
    checked="September 13, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · ALL FOUR PARTS</span><p><b>Do not turn in components before the quest is active.</b> Keep the mysterious letter, then collect the Flask of Quicksilver after <Link href="/home-sweet-home">Home Sweet Home</Link>, Silk Threads through the Sanzhani route, a saint relic, and the Large Lizard&apos;s Moult. Bring the complete set to the Uriashi blacksmith and save before the ritual fight.</p></div>}
    faqs={[
      { question: "How do you start A Bulwark Against Darkness in The Blood of Dawnwalker?", answer: "Published walkthroughs begin the route with a mysterious letter and component list. Confirm that the quest is active before collecting or turning in materials, because players report hand-in problems when a prerequisite is missing." },
      { question: "What are the four A Bulwark Against Darkness components?", answer: "The component list includes a Flask of Quicksilver, Bundle of Silk Threads, saint relic and Large Lizard's Moult. They lead to the Arbiter armor ritual at the Uriashi blacksmith." },
      { question: "Where is the Flask of Quicksilver in Dawnwalker?", answer: "It is in Aurelius's Tower after the Home Sweet Home quest. Return to the upper room after escaping the loop; use the dedicated Flask of Quicksilver guide for the exact check." },
      { question: "Why can’t I hand in A Bulwark Against Darkness components?", answer: "First confirm the quest letter and each required material in the quest log. Community reports describe blocked hand-ins even with items present, so make a manual save and check current patch notes before sacrificing a different relic." },
    ]}
    nextSteps={[
      { label: "Find the Flask of Quicksilver", href: "/flask-of-quicksilver", description: "Clear Home Sweet Home, then return to the tower’s upper room." },
      { label: "Escape Home Sweet Home", href: "/home-sweet-home", description: "Finish the tower loop before expecting the Flask to appear." },
      { label: "Compare the Arbiter set", href: "/best-armor", description: "Check whether this long route fits your current build." },
      { label: "Read current patch notes", href: "/patch-notes", description: "Verify quest fixes before diagnosing a blocked hand-in." },
    ]}
    sources={[
      { label: "PC Gamer — A Bulwark Against Darkness, all components and Arbiter set", href: "https://www.pcgamer.com/games/rpg/blood-of-dawnwalker-a-bulwark-against-darkness-walkthrough-arbiter-set/" },
      { label: "All Things How — updated Bulwark Against Darkness walkthrough", href: "https://allthings.how/the-blood-of-dawnwalker-a-bulwark-against-darkness-full-quest-walkthrough/" },
      { label: "Steam Community — player reports of a Bulwark hand-in blocker", href: "https://steamcommunity.com/app/3751260/discussions/0/588437021425434550/" },
    ]}
    sections={[
      { title: "A Bulwark Against Darkness checklist", body: <table className="editorial-table"><caption>Keep the quest log active and use a manual save before each irreversible hand-in.</caption><thead><tr><th scope="col">Requirement</th><th scope="col">What to verify</th></tr></thead><tbody><tr><th scope="row">Mysterious letter</th><td>The quest is active and the list of four components is visible.</td></tr><tr><th scope="row">Flask of Quicksilver</th><td>Home Sweet Home is complete and you have returned to Aurelius&apos;s Tower.</td></tr><tr><th scope="row">Bundle of Silk Threads</th><td>The relevant Sanzhani quest or trader route is complete before expecting the item.</td></tr><tr><th scope="row">Saint relic + Lizard&apos;s Moult</th><td>Use items accepted by the current quest log; do not give away a different relic blindly.</td></tr><tr><th scope="row">Uriashi blacksmith</th><td>Make a separate save before the ritual and final armor upgrade.</td></tr></tbody></table> },
      { title: "Flask of Quicksilver: finish Home Sweet Home first", body: <><p>The Flask is tied to Aurelius&apos;s Tower in the southwest Silts area. Current guides place it in the upper study after the <Link href="/home-sweet-home">Home Sweet Home</Link> loop has been resolved—so an inaccessible upper room usually means the tower quest is unfinished, not that a second Flask exists.</p><p>After leaving the loop, return upstairs and check the low table beside the larger table. The item is a quest component, so pick it up even if A Bulwark Against Darkness is not yet active; published guides report that it can count when the quest starts later.</p></> },
      { title: "Bundle of Silk Threads: unlock the correct Sanzhani route", body: <p>Walkthroughs connect Silk Threads to the Sanzhani side-quest chain. Depending on the route you follow, the item is obtained through the Sanzhani trader after Pearly and Precious or through a later related encounter. The important SEO answer is not “search every merchant”: advance the Sanzhani chain, then confirm the component in your inventory before returning to the blacksmith.</p> },
      { title: "Saint relic and Large Lizard’s Moult", body: <div className="fact-grid"><p><b>Saint relic</b>Current walkthroughs recommend using a saint relic such as Saint&apos;s Tibia rather than assuming every named relic is interchangeable. Check the highlighted quest requirement before handing it in.</p><p><b>Large Lizard&apos;s Moult</b>Guides place it in a cave around the Briar Sloughs / Maragir Wealds area, guarded by Tatselwurms. Clear the cave and check the back of the area.</p><p><b>Save before turning in</b>Some player reports describe an unavailable hand-in dialogue. Preserve a save so you can verify the current patch and component state without losing a rare item.</p><p><b>Do not mix it with Forge It Anew</b>The Arbiter armor route is separate from <Link href="/forge-it-anew">Forge It Anew</Link>, which upgrades St. Mihai&apos;s sword.</p></div> },
      { title: "Return to Uriashi and survive the ritual", body: <p>When all four objectives show as complete, return to the Uriashi blacksmith at the Uriashi Hermitage. Published routes describe receiving Arbiter pieces as components are handed in, followed by a final ritual encounter that upgrades the set. Unequip the applicable epic set if the current quest prompt requires it, make a manual save, and use the in-game quest log as the final authority for the build you are playing.</p> },
      { title: "If the hand-in is blocked", body: <ol><li><b>Read the letter again:</b> confirm the quest itself is active, not merely that you collected lookalike materials.</li><li><b>Compare the four objective names:</b> do not substitute a relic just because it sounds similar.</li><li><b>Reload a safe save:</b> preserve the item state before trying an old workaround.</li><li><b>Check the latest update:</b> quest blockers have been patched quickly since launch; use <Link href="/patch-notes">current patch notes</Link> before assuming your save is permanently broken.</li></ol> },
    ]}
  />;
}

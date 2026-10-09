import Link from "next/link";
import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "Blood of Dawnwalker Companions: Companion Quests, Choices & Romance",
  "Blood of Dawnwalker companions guide: companion quest routes, choice planning, romance context and ending-safe saves without assuming every NPC is a permanent party member.",
  "/companions",
  ["blood of dawnwalker companions", "blood of the dawnwalker companion", "blood dawnwalker companion quests", "blood of dawnwalker companion choices"],
);

export default function CompanionsPage() {
  return <GuidePage
    eyebrow="COMPANION GUIDE · QUEST ROUTES AND CHOICES"
    title="Blood of Dawnwalker companions: quests, choices, romance and saves"
    dek="Plan character routes without assuming that every important NPC is a conventional permanent companion. Follow each character's quest state and keep a save before major choices."
    checked="October 9, 2026"
    quickAnswer={<div className="fix-callout"><span>QUICK ANSWER · COMPANIONS</span><p><b>Companion searches are primarily route and choice searches.</b> Complete the relevant character questline, protect saves before irreversible dialogue, and use romance or ending pages only when you want those spoilers.</p></div>}
    faqs={[{ question: "Who are the companions in Blood of Dawnwalker?", answer: "Important character routes should be treated individually until the game explicitly identifies a persistent companion-party system. Quest and relationship roles are not automatically the same thing." }, { question: "Do companion choices affect endings?", answer: "Some character routes and late choices can affect available outcomes. Keep a manual save before decisive conversations and use the endings guide for spoiler-marked planning." }, { question: "Can you romance companions?", answer: "Use the romance guide and each character's focused route; do not assume every companion-related NPC has a romance path." }]}
    nextSteps={[{ label: "Plan romance routes", href: "/romance", description: "Compare the documented relationship paths." }, { label: "Follow Lacra's route", href: "/a-friend-like-this", description: "Start the quest chain before reading late spoilers." }, { label: "Protect ending saves", href: "/endings", description: "Keep a separate save before final commitments." }]}
    sources={[{ label: "Dawnwalker Guide — romance options", href: "/romance" }, { label: "Dawnwalker Guide — Lacra romance", href: "/lacra-romance" }, { label: "Dawnwalker Guide — endings", href: "/endings" }]}
    sections={[{ title: "Companions versus quest characters", body: <div className="fact-grid"><p><b>Quest route</b>Follow the active objective and the character's prerequisite quests.</p><p><b>Choice route</b>Save before decisions that affect trust, rewards or availability.</p><p><b>Romance route</b>Use focused romance pages for late-game requirements and spoilers.</p><p><b>Party-system claim</b>Do not assume a permanent follower system unless the game confirms it.</p></div> }, { title: "Character routes already covered", body: <p>Start with <Link href="/a-friend-like-this">Lacra&apos;s introduction route</Link>, then use <Link href="/lacra-romance">Lacra romance</Link>, <Link href="/anca-romance">Anca romance</Link> or <Link href="/heart-wants-what-it-wants">Ocha&apos;s choice</Link> when the search is character-specific.</p> }, { title: "Companion keyword coverage", body: <p>This hub targets companion and companions searches, while focused quest and romance pages answer the higher-intent character names and choice outcomes.</p> }]}
  />;
}

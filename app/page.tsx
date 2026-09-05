import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContentAd, NativeContentAd } from "./ad-slot";

export const metadata: Metadata = {
  title: { absolute: "The Blood of Dawnwalker Guides, Quest Answers & Fixes" },
  description: "Practical The Blood of Dawnwalker guides for quests, mods, romance, PC requirements, PS5 performance, the 30-day timer and verified launch fixes.",
  alternates: { canonical: "/", languages: { en: "/", pl: "/pl", ru: "/ru", cs: "/cs", "x-default": "/" } },
};

const cards = [
  ["Patch 1.0.2", "What did the latest hotfix fix?", "Check the official quest, controller and known-issue changes before trying an old workaround.", "/patch-notes"],
  ["PC fix", "Crashing or stuttering?", "Match the exact symptom to the official Full Screen workaround or safe crash checks.", "/crash-and-stutter-fix"],
  ["Quest route", "Forge It Anew sword shards", "Follow the illustrated route from St. Mihai's note to all three shards, Uriashi and the ritual.", "/forge-it-anew"],
  ["Time consequence", "What happens after 30 days?", "See the story consequence, what remains playable and the two-save plan before the deadline.", "/what-happens-after-30-days"],
  ["Endings", "How many endings are there?", "Use a spoiler-marked outcome guide and save plan instead of replaying the whole opening blind.", "/endings"],
  ["Walkthrough", "Quest order, choices and missable answers", "Start with the prologue route, then open a focused answer for the exact quest or choice blocking your run.", "/walkthrough"],
  ["PC mods", "Current mods and safe installation", "Find current Nexus releases, installation paths, version checks and the risks to consider before changing a save.", "/mods"],
  ["Launch fix", "Controller stops sprinting or slows down?", "Follow the illustrated Steam Input deadzone workaround for diagonal movement, with separate PC and PS5 guidance.", "/controller-movement-fix"],
  ["Prologue answer", "How many spoonfuls of herbs?", "Choose hot water and three spoonfuls in Withering Away to prepare Esme's medicine correctly.", "/how-many-spoonfuls-of-herbs"],
  ["Release date", "When does The Blood of Dawnwalker release?", "September 3, 2026. See supported platforms, time zones and official sources.", "/release-date"],
  ["Gameplay", "How does The Blood of Dawnwalker play?", "A source-led overview of day and night, combat, choices and the 30-day time pressure—without inventing mechanics.", "/gameplay"],
  ["PC tool", "Can I run it?", "A local-only official requirements checker. Compare CPU, GPU, RAM, VRAM and SSD space without uploading your information.", "/can-i-run"],
  ["Performance", "PS5 & Xbox modes", "Official launch targets for PS5, PS5 Pro, Xbox Series X and Series S—kept separate from player benchmarks.", "/console-performance"],
  ["Editions", "Which edition should I buy?", "Compare Standard, Eclipse, Day One and Collector's contents, the pre-order bonus and the shared release date.", "/editions"],
  ["Reviews", "The Blood of Dawnwalker reviews are live", "The review embargo lifted August 31. Compare original PC and PS5 reviews, disclosed hardware and performance context.", "/review-embargo"],
  ["Time limit", "How does the 30-day time limit work?", "Official answers on 8 daytime parts, what advances time, exploration and whether you can complete every quest.", "/time-system"],
  ["Relationships", "Who can you romance?", "A spoiler-aware guide to the confirmed Anca, Lacra and Crake (Marat) routes, their starting quests and multiple-romance rules.", "/romance"],
  ["Game length", "How long does Dawnwalker take to beat?", "Compare main-story, broader exploration and completion estimates without confusing the 30-day clock with real hours.", "/how-long-to-beat"],
];

export default function Home() {
  return <main>
    <section className="hero" id="top"><div className="hero-art" aria-hidden="true"><Image src="/dawnwalker-hero.jpg" alt="" width={1920} height={1080} priority sizes="100vw" /></div><div className="hero-copy"><p className="eyebrow">THE BLOOD OF DAWNWALKER · INDEPENDENT GUIDE</p><p className="hero-kicker">QUEST ANSWERS · VERIFIED FIXES</p><h1>The Blood of Dawnwalker <em>guides that answer the question.</em></h1><p className="lead">Spoiler-aware quest routes, mods, romance choices, performance help and launch fixes—each separated into confirmed facts, tested reporting and unresolved claims.</p><div className="hero-actions"><Link className="primary" href="/walkthrough">Open walkthrough</Link><Link className="secondary" href="/known-issues">Known issues</Link></div></div><aside className="clock-card"><p>GAME STATUS</p><div className="day">LIVE</div><div className="bar"><i /></div><small>PC · PlayStation 5<br />Xbox Series X|S</small></aside></section>
    <section className="signal"><span>✦ HOTFIX 1.0.2</span><p>Update first, then match the symptom. Read the <Link href="/patch-notes">illustrated patch notes</Link>, use the <Link href="/crash-and-stutter-fix">crash and stutter guide</Link>, or follow the controller fix if sprint still stops.</p><Link href="/patch-notes">See what changed →</Link></section>
    <ContentAd />
    <section className="section intro"><div><p className="eyebrow">USEFUL, NOT NOISY</p><h2>Answers for the moment you need them.</h2></div><div className="intro-copy"><p>We build pages around a player&apos;s question—not a list of duplicate keywords. Every guide names its evidence, date checked and spoiler level.</p><span>OFFICIAL · VERIFIED · COMMUNITY REPORT</span></div></section>
    <section className="section"><div className="section-head"><div><p className="eyebrow">START HERE</p><h2>High-intent guides.</h2></div></div><div className="route-grid">{cards.map(([tag,title,text,href], index) => <article className={`feature-card ${index === 0 ? "crimson" : index === 1 ? "night-card" : "archive-card"}`} key={href}><span>0{index + 1} · {tag}</span><h3>{title}</h3><p>{text}</p><Link href={href}>Open guide →</Link></article>)}</div></section>
    <NativeContentAd />
    <section className="section library home-deferred"><div className="section-head"><div><p className="eyebrow">EDITORIAL STANDARD</p><h2>Built for citation and trust.</h2></div></div><div className="library-grid"><div><strong>01</strong><span>Official source links</span></div><div><strong>02</strong><span>Last-checked dates</span></div><div><strong>03</strong><span>Spoiler labels</span></div><div><strong>04</strong><span>Corrections welcome</span></div></div></section>
    <footer><Link className="brand" href="/">Dawnwalker <span>Guide</span></Link><p>Unofficial fan guide. The Blood of Dawnwalker and related marks belong to their respective owners.<br/><Link href="/privacy">Privacy</Link> · <a href="https://github.com/wencun/dawnwalker.cc/issues" target="_blank" rel="noreferrer">Corrections & feedback</a></p><span>EST. 2026</span></footer>
  </main>;
}

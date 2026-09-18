"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type GoalId = "sanzhani" | "arbiter" | "silverSword" | "lacra" | "anca" | "oddRiddle";
type PlanStep = { id: string; title: string; description: string; href: string; kind: "route" | "save" | "check" };

const goals: { id: GoalId; title: string; description: string }[] = [
  { id: "sanzhani", title: "Recover the Sanzhani day", description: "Finish the Letters to Lunka route and protect the extra-day reward." },
  { id: "arbiter", title: "Craft Arbiter armor", description: "Gather the four verified components without taking a blind hand-in." },
  { id: "silverSword", title: "Get St. Mihai's Silver Sword", description: "Keep the coffin-note trigger and Forge It Anew route together." },
  { id: "lacra", title: "Keep Lacra's route open", description: "Start A Friend Like This and preserve the alliance before romance spoilers." },
  { id: "anca", title: "Plan Anca's Font of Life choice", description: "Reach the permanent-choice page with a save in place." },
  { id: "oddRiddle", title: "Clear the Odd Riddle", description: "Use the focused Lunar Manor answer without broad walkthrough spoilers." },
];

const sharedSteps: Record<GoalId, PlanStep[]> = {
  sanzhani: [
    { id: "sanzhani-route", title: "Complete Good Home, then unlock Letters to Lunka", description: "The four follow-up favours are not normal map waypoints; confirm the Tsarina conversation before treating the journal as stuck.", href: "/help-the-sanzhani", kind: "route" },
    { id: "sanzhani-save", title: "Keep a save before the final return to the Tsarina", description: "Use the guide to confirm each letter and the reported extra-day reward on your current patch.", href: "/help-the-sanzhani", kind: "save" },
  ],
  arbiter: [
    { id: "home-sweet-home", title: "Finish Home Sweet Home before looking for the Flask", description: "The Flask of Quicksilver route is tied to the Aurelius's Tower follow-up.", href: "/flask-of-quicksilver", kind: "route" },
    { id: "sanzhani-route", title: "Advance the Sanzhani route for Silk Threads", description: "Do not search every merchant or hand in materials before the relevant quest state is visible.", href: "/help-the-sanzhani", kind: "route" },
    { id: "arbiter-save", title: "Check all four components and save before the Uriashi ritual", description: "The armor hand-in is a common point of player confusion; use the exact checklist first.", href: "/a-bulwark-against-darkness", kind: "save" },
  ],
  silverSword: [
    { id: "mihai-trigger", title: "Read St. Mihai's coffin note", description: "This is the trigger to verify before spending time hunting shards.", href: "/best-sword", kind: "check" },
    { id: "forge-route", title: "Collect the three shards and return to Uriashi", description: "Use the focused Forge It Anew route rather than a generic weapon list.", href: "/forge-it-anew", kind: "route" },
    { id: "sword-save", title: "Save before the craft and follow-up ritual", description: "Check current patch notes if the craft remains unavailable after the route is complete.", href: "/best-sword", kind: "save" },
  ],
  lacra: [
    { id: "friend-route", title: "Start A Friend Like This at night in Svartrau", description: "Follow the Focus Mode evidence and rooftop route before the Lacra encounter.", href: "/a-friend-like-this", kind: "route" },
    { id: "lacra-save", title: "Make a save before the Nish conversation", description: "If your goal is the cooperative Lacra route, preserve a branch save before the dialogue.", href: "/a-friend-like-this", kind: "save" },
    { id: "lacra-romance", title: "Only then open the romance spoiler guide", description: "The later Mandrake branch is deliberately separate from the quest-start answer.", href: "/lacra-romance", kind: "check" },
  ],
  anca: [
    { id: "anca-save", title: "Reach Font of Life with a manual save", description: "The guide separates the perk, Anca outcome and Ancient Greaves choice.", href: "/font-of-life", kind: "save" },
  ],
  oddRiddle: [
    { id: "riddle-answer", title: "Use the Lunar Manor answer", description: "Open the short answer only when you are at the riddle to limit accidental spoilers.", href: "/odd-riddle", kind: "route" },
  ],
};

const kindLabel = { route: "ROUTE", save: "SAVE", check: "CHECK" } as const;

export default function RoutePlanner() {
  const [selected, setSelected] = useState<GoalId[]>(["sanzhani", "lacra"]);
  const [day, setDay] = useState("1");
  const [copied, setCopied] = useState(false);
  const plan = useMemo(() => {
    const ids = selected.flatMap((goal) => sharedSteps[goal]);
    return ids.filter((step, index) => ids.findIndex((candidate) => candidate.id === step.id) === index);
  }, [selected]);
  const dayNumber = Number(day);
  const dayStatus = day && Number.isFinite(dayNumber) && dayNumber >= 24
    ? "Late-run caution: preserve a save before every time-advancing objective."
    : "Use this as a dependency plan, then check the in-game time indicator before advancing each marked objective.";

  function toggle(goal: GoalId) {
    setSelected((current) => current.includes(goal) ? current.filter((item) => item !== goal) : [...current, goal]);
    setCopied(false);
  }

  async function copyPlan() {
    const text = ["The Blood of Dawnwalker route plan", `Current day: ${day || "not set"}`, ...plan.map((step, index) => `${index + 1}. ${step.title} — ${step.description} (${step.href})`)].join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch { setCopied(false); }
  }

  return <div className="route-planner-tool">
    <div className="route-planner-intro"><div><p className="eyebrow">LOCAL-ONLY PLANNING TOOL</p><h2>Choose the outcomes you care about.</h2><p>This planner does not invent exact time costs. It orders source-supported prerequisites, marks useful branch saves and links each step to its evidence-backed guide.</p></div><label>Current in-game day<input type="number" min="1" max="30" value={day} onChange={(event) => { setDay(event.target.value); setCopied(false); }} aria-describedby="day-help" /><small id="day-help">Optional. The tool does not claim a precise remaining-hours calculation.</small></label></div>
    <fieldset className="planner-goals"><legend>My goals for this run</legend>{goals.map((goal) => <label key={goal.id} className={selected.includes(goal.id) ? "selected" : ""}><input type="checkbox" checked={selected.includes(goal.id)} onChange={() => toggle(goal.id)} /><span><b>{goal.title}</b><small>{goal.description}</small></span></label>)}</fieldset>
    <section className="planner-result" aria-live="polite"><div className="planner-result-head"><div><p className="eyebrow">YOUR ROUTE ORDER</p><h3>{plan.length ? `${plan.length} checkpoints to verify` : "Choose at least one outcome"}</h3></div>{plan.length > 0 && <button type="button" onClick={copyPlan}>{copied ? "Copied" : "Copy plan"}</button>}</div>{plan.length > 0 && <ol>{plan.map((step, index) => <li key={step.id}><span>{String(index + 1).padStart(2, "0")}</span><div><b>{step.title}</b><p>{step.description}</p><Link href={step.href}>Open guide →</Link></div><em>{kindLabel[step.kind]}</em></li>)}</ol>}<p className="planner-disclaimer"><b>TIME DATA STATUS</b>{dayStatus} Exact segment costs and mutually exclusive choices should only be added after a reproducible run or a clearly attributed source confirms them.</p></section>
  </div>;
}

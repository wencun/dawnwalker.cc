const DAY_MS = 24 * 60 * 60 * 1000;

export function dateOnly(value) {
  return new Date(value).toISOString().slice(0, 10);
}

export function addDays(date, days) {
  const value = new Date(`${date}T00:00:00.000Z`);
  value.setUTCDate(value.getUTCDate() + days);
  return dateOnly(value);
}

export function latestFinalDate(today = dateOnly(new Date())) {
  return addDays(today, -3);
}

export function postWindow(cohort) {
  const start = addDays(cohort.optimizedOn, 1);
  return { start, end: addDays(start, 2) };
}

export function checkStatus(cohort, today = dateOnly(new Date())) {
  const firstCheckOn = addDays(cohort.optimizedOn, 2);
  const post = postWindow(cohort);
  if (today < firstCheckOn) return { status: "not_due", firstCheckOn, post };
  const finalDate = latestFinalDate(today);
  if (finalDate < post.end) return { status: "pending_data", firstCheckOn, finalDate, post };
  return { status: "ready", firstCheckOn, finalDate, post };
}

export function comparison(before, after) {
  const metric = (key) => ({
    before: before[key],
    after: after[key],
    change: after[key] - before[key],
    changePercent: before[key] === 0 ? null : (after[key] - before[key]) / before[key],
  });
  return {
    clicks: metric("clicks"),
    impressions: metric("impressions"),
    ctr: metric("ctr"),
    position: metric("position"),
  };
}

export function cohortConclusion(rows) {
  const measurable = rows.filter((row) => row.before.impressions >= 20 || row.after.impressions >= 20);
  if (!measurable.length) return "insufficient_data";
  const improved = measurable.filter((row) => row.comparison.clicks.change > 0 || row.comparison.ctr.change > 0).length;
  if (improved > measurable.length / 2) return "improved";
  if (improved === 0) return "declined_or_unchanged";
  return "mixed";
}

export function parseArgs(args) {
  const [command = "check"] = args;
  const todayIndex = args.indexOf("--today");
  const today = todayIndex >= 0 ? args[todayIndex + 1] : undefined;
  const cohortId = args.slice(1).find((arg, index) => arg !== "--today" && args[index] !== "--today");
  return { command, cohortId, today };
}

export const dayMs = DAY_MS;

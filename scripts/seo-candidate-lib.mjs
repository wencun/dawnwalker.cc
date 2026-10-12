import { addDays } from "./seo-cohort-lib.mjs";

export function ctrThreshold(position) {
  if (position >= 1 && position <= 3) return 0.05;
  if (position <= 6) return 0.02;
  if (position <= 10) return 0.015;
  return null;
}

export function cooldownUntil(optimizedOn) {
  return optimizedOn ? addDays(optimizedOn, 14) : null;
}

export function selectCandidates(rows, optimizedPages, today) {
  const candidates = [];
  const excluded = [];
  for (const row of rows) {
    const optimizedOn = optimizedPages.get(row.path);
    const cooldown = cooldownUntil(optimizedOn);
    if (cooldown && today <= cooldown) {
      excluded.push({ path: row.path, reason: "cooldown", optimizedOn, cooldownUntil: cooldown });
      continue;
    }
    const threshold = ctrThreshold(row.position);
    if (row.impressions >= 100 && threshold !== null && row.ctr < threshold) {
      candidates.push({ ...row, type: "click", ctrThreshold: threshold, opportunityClicks: Math.max(0, row.impressions * threshold - row.clicks) });
    } else if (row.impressions >= 20 && row.impressions <= 99 && row.position >= 8 && row.position <= 20) {
      candidates.push({ ...row, type: "impression" });
    }
  }
  return { candidates: candidates.sort((a, b) => {
    if (a.type !== b.type) return a.type === "click" ? -1 : 1;
    return (b.opportunityClicks ?? b.impressions) - (a.opportunityClicks ?? a.impressions);
  }), excluded };
}

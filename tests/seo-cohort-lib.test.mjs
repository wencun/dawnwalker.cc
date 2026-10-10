import assert from "node:assert/strict";
import test from "node:test";
import { checkStatus, comparison, cohortConclusion, parseArgs } from "../scripts/seo-cohort-lib.mjs";

const cohort = { optimizedOn: "2026-10-07" };

test("starts cohort checks on day two and waits for three final post-optimization days", () => {
  assert.deepEqual(checkStatus(cohort, "2026-10-08").status, "not_due");
  assert.deepEqual(checkStatus(cohort, "2026-10-09").status, "pending_data");
  assert.deepEqual(checkStatus(cohort, "2026-10-13").status, "ready");
});

test("calculates page metric deltas and cohort conclusions", () => {
  const delta = comparison({ clicks: 2, impressions: 100, ctr: 0.02, position: 8 }, { clicks: 4, impressions: 120, ctr: 0.033, position: 6 });
  assert.equal(delta.clicks.change, 2);
  assert.equal(delta.impressions.changePercent, 0.2);
  assert.equal(delta.position.change, -2);
  assert.equal(cohortConclusion([{ before: { impressions: 100 }, after: { impressions: 120 }, comparison: delta }]), "improved");
});

test("parses a date-only status command without treating it as a cohort id", () => {
  assert.deepEqual(parseArgs(["status", "--today", "2026-10-09"]), { command: "status", cohortId: undefined, today: "2026-10-09" });
});

import assert from "node:assert/strict";
import test from "node:test";
import { applyIntentReviews, selectCandidates } from "../scripts/seo-candidate-lib.mjs";

test("selects CTR and visibility candidates while excluding cooled-down pages", () => {
  const rows = [
    { path: "/click", clicks: 1, impressions: 200, ctr: 0.005, position: 5 },
    { path: "/visibility", clicks: 0, impressions: 50, ctr: 0, position: 12 },
    { path: "/cooling", clicks: 0, impressions: 200, ctr: 0, position: 4 },
  ];
  const result = selectCandidates(rows, new Map([["/cooling", "2026-10-07"]]), "2026-10-12");
  assert.deepEqual(result.candidates.map((row) => row.path), ["/click", "/visibility"]);
  assert.equal(result.candidates[0].opportunityClicks, 3);
  assert.deepEqual(result.excluded, [{ path: "/cooling", reason: "cooldown", optimizedOn: "2026-10-07", cooldownUntil: "2026-10-21" }]);
});

test("marks a candidate as pending until an intent review is recorded", () => {
  const candidates = [{ path: "/known-issues" }, { path: "/new-page" }];
  const reviewed = applyIntentReviews(candidates, { "/known-issues": { status: "verified", targetQuery: "dawnwalker bugs", intentType: "troubleshooting", expectedAnswer: "Known issues and fixes", action: "update_existing", sourceTypes: ["official_patch_notes"], evidenceSummary: "Patch notes confirm it.", gameVersion: "1.0", platforms: ["PC"], reviewedAt: "2026-10-12" } });
  assert.equal(reviewed[0].intentReview.status, "verified");
  assert.equal(reviewed[1].intentReview.status, "needs_review");
});

test("does not accept an incomplete verified intent review", () => {
  const reviewed = applyIntentReviews([{ path: "/known-issues" }], { "/known-issues": { status: "verified", targetQuery: "dawnwalker bugs" } });
  assert.equal(reviewed[0].intentReview.status, "needs_review");
});

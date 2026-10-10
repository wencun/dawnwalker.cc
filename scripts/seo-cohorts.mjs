import { createSign } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { setGlobalProxyFromEnv } from "node:http";
import { pathToFileURL } from "node:url";
import { checkStatus, cohortConclusion, comparison, dateOnly, parseArgs } from "./seo-cohort-lib.mjs";

const CONFIG_PATH = path.resolve("analytics/seo-cohorts.json");
const STATE_PATH = path.resolve(process.env.SEO_COHORT_STATE_PATH ?? "data/private/seo-cohorts.json");
const REPORT_DIR = path.resolve(process.env.SEO_COHORT_REPORT_DIR ?? "data/private/seo-reports");
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const DEFAULT_CREDENTIALS_PATH = "secrets/steady-service-508003-p3-4a71fc17b73e.json";
const GSC_SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";

if (process.env.HTTP_PROXY || process.env.HTTPS_PROXY || process.env.http_proxy || process.env.https_proxy) setGlobalProxyFromEnv();

function required(name) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required. Add it to .env.analytics.local.`);
  return value;
}

function base64Url(value) {
  return Buffer.from(typeof value === "string" ? value : JSON.stringify(value)).toString("base64url");
}

async function accessToken() {
  const credentialsPath = path.resolve(process.env.GOOGLE_APPLICATION_CREDENTIALS ?? DEFAULT_CREDENTIALS_PATH);
  const credentials = JSON.parse(await readFile(credentialsPath, "utf8"));
  const now = Math.floor(Date.now() / 1000);
  const unsigned = `${base64Url({ alg: "RS256", typ: "JWT" })}.${base64Url({ iss: credentials.client_email, scope: GSC_SCOPE, aud: credentials.token_uri ?? TOKEN_URL, iat: now, exp: now + 3600 })}`;
  const signer = createSign("RSA-SHA256");
  signer.update(unsigned);
  signer.end();
  const assertion = `${unsigned}.${signer.sign(credentials.private_key).toString("base64url")}`;
  const response = await fetch(credentials.token_uri ?? TOKEN_URL, { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion }) });
  if (!response.ok) throw new Error(`Google token request failed: ${response.status}`);
  return (await response.json()).access_token;
}

async function queryGsc(token, body) {
  const response = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(required("GSC_SITE_URL"))}/searchAnalytics/query`, { method: "POST", headers: { authorization: `Bearer ${token}`, "content-type": "application/json" }, body: JSON.stringify(body) });
  if (!response.ok) throw new Error(`Google Search Console request failed: ${response.status} ${await response.text()}`);
  return response.json();
}

async function snapshotPage(token, page, range) {
  const base = { startDate: range.start, endDate: range.end, type: "web", dimensionFilterGroups: [{ filters: [{ dimension: "page", operator: "equals", expression: page }] }] };
  const [pageData, queryData] = await Promise.all([
    queryGsc(token, { ...base, dimensions: ["page"], rowLimit: 1 }),
    queryGsc(token, { ...base, dimensions: ["query"], rowLimit: 250 }),
  ]);
  const row = pageData.rows?.[0] ?? { clicks: 0, impressions: 0, ctr: 0, position: 0 };
  return { clicks: row.clicks, impressions: row.impressions, ctr: row.ctr, position: row.position, queries: (queryData.rows ?? []).map((query) => ({ query: query.keys[0], clicks: query.clicks, impressions: query.impressions, ctr: query.ctr, position: query.position })) };
}

async function loadJson(file, fallback) {
  try { return JSON.parse(await readFile(file, "utf8")); } catch (error) { if (error.code === "ENOENT") return fallback; throw error; }
}

function configBaseline(cohort, state) {
  return state.baselines?.[cohort.id]?.pages ?? Object.fromEntries(cohort.pages.map((page) => [page.path, page.baseline]));
}

function markdownReport(report) {
  const lines = [
    `# SEO cohort report: ${report.id}`,
    "",
    `- Intent: ${report.intent}`,
    `- Optimized: ${report.optimizedOn}`,
    `- Before: ${report.before.start} to ${report.before.end}`,
    `- After: ${report.after.start} to ${report.after.end}`,
    `- Conclusion: ${report.conclusion}`,
    "",
    "| Page | Clicks | Impressions | CTR | Position |",
    "| --- | ---: | ---: | ---: | ---: |",
    ...report.pages.map((page) => `| ${page.path} | ${page.before.clicks} -> ${page.after.clicks} | ${page.before.impressions} -> ${page.after.impressions} | ${(page.before.ctr * 100).toFixed(2)}% -> ${(page.after.ctr * 100).toFixed(2)}% | ${page.before.position.toFixed(2)} -> ${page.after.position.toFixed(2)} |`),
  ];
  return `${lines.join("\n")}\n`;
}

async function evaluateCohort(cohort, state, today) {
  const gate = checkStatus(cohort, today);
  if (gate.status !== "ready") return { id: cohort.id, ...gate };
  const token = await accessToken();
  const before = configBaseline(cohort, state);
  if (Object.values(before).some((snapshot) => !snapshot)) throw new Error(`Cohort ${cohort.id} has no recorded baseline. Run seo:capture before optimization.`);
  const pages = await Promise.all(cohort.pages.map(async (page) => {
    const after = await snapshotPage(token, page.url, gate.post);
    return { path: page.path, intent: page.intent, before: before[page.path], after, comparison: comparison(before[page.path], after) };
  }));
  const report = { id: cohort.id, intent: cohort.intent, optimizedOn: cohort.optimizedOn, before: cohort.baselineRange, after: gate.post, generatedAt: new Date().toISOString(), conclusion: cohortConclusion(pages), pages };
  state.completed ??= {};
  state.completed[cohort.id] = report;
  await mkdir(REPORT_DIR, { recursive: true });
  await writeFile(path.join(REPORT_DIR, `${cohort.id}.json`), `${JSON.stringify(report, null, 2)}\n`, "utf8");
  await writeFile(path.join(REPORT_DIR, `${cohort.id}.md`), markdownReport(report), "utf8");
  return { id: cohort.id, status: "completed", conclusion: report.conclusion };
}

async function captureBaseline(cohort, state) {
  if (!cohort.baselineRange?.start || !cohort.baselineRange?.end) throw new Error(`Cohort ${cohort.id} needs baselineRange.start and baselineRange.end.`);
  if (state.baselines?.[cohort.id]) throw new Error(`Cohort ${cohort.id} already has a captured baseline.`);
  const token = await accessToken();
  const pages = await Promise.all(cohort.pages.map(async (page) => [page.path, await snapshotPage(token, page.url, cohort.baselineRange)]));
  state.baselines ??= {};
  state.baselines[cohort.id] = { capturedAt: new Date().toISOString(), range: cohort.baselineRange, pages: Object.fromEntries(pages) };
  return { id: cohort.id, status: "baseline_captured", range: cohort.baselineRange };
}

async function main() {
  const { command, cohortId, today: cliToday } = parseArgs(process.argv.slice(2));
  if (!['capture', 'check', 'status'].includes(command)) throw new Error("Usage: seo:(capture|check|status) [cohort-id] [--today YYYY-MM-DD]");
  const config = await loadJson(CONFIG_PATH, null);
  if (!config?.cohorts?.length) throw new Error(`No cohorts found in ${CONFIG_PATH}`);
  const state = await loadJson(STATE_PATH, { completed: {} });
  const today = cliToday ?? dateOnly(new Date());
  const cohorts = cohortId ? config.cohorts.filter((cohort) => cohort.id === cohortId) : config.cohorts;
  if (cohortId && !cohorts.length) throw new Error(`Unknown cohort: ${cohortId}`);
  if (command === "capture" && !cohortId) throw new Error("Capture requires a cohort id.");
  const results = command === "status"
    ? cohorts.map((cohort) => ({ id: cohort.id, ...checkStatus(cohort, today), completed: Boolean(state.completed?.[cohort.id]) }))
    : command === "capture"
      ? await Promise.all(cohorts.map((cohort) => captureBaseline(cohort, state)))
      : await Promise.all(cohorts.map((cohort) => evaluateCohort(cohort, state, today)));
  if (command !== "status") { await mkdir(path.dirname(STATE_PATH), { recursive: true }); await writeFile(STATE_PATH, `${JSON.stringify(state, null, 2)}\n`, "utf8"); }
  console.log(JSON.stringify({ today, results }, null, 2));
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) main().catch((error) => { console.error(error); process.exitCode = 1; });

# Dawnwalker analytics integration

This integration is intentionally read-only. It syncs GSC and GA4 reports into a local private cache, then exposes that cache to Codex as three MCP tools: an overview, top search queries, and Adsterra revenue.

## One-time provider setup

1. In Google Cloud project `steady-service-508003-p3`, enable **Google Search Console API** and **Google Analytics Data API**.
2. Add `dawnwalker-reporting@steady-service-508003-p3.iam.gserviceaccount.com` to the `sc-domain:dawnwalker.cc` Search Console property with read access.
3. In GA4 Property `551486768`, add the same service account as a Viewer.
4. Copy `.env.analytics.example` to `.env.analytics.local`. The downloaded service-account JSON already has a safe default path under `secrets/`; both paths are ignored by Git.
5. Generate an Adsterra **Publisher** token in the dashboard and add it to `ADSTERRA_API_TOKEN`. The default Publisher statistics endpoint groups the report by placement; change it only if you need a custom API query.

Do not put the service-account JSON, Google OAuth tokens, or Adsterra token in Git or chat.

## Sync and query

Run `npm run analytics:sync` to fetch the last 28 completed days. Google Search Console data has a short reporting delay, so the sync intentionally stops three days before today.

## SEO cohorts

`analytics/seo-cohorts.json` defines each optimization batch, its intended search intent, its pages, and its three-day baseline date range. Before editing a new batch's pages, run `npm run seo:capture -- <cohort-id>` to save its exact GSC page and query baseline under `data/private/seo-cohorts.json`. Run `npm run seo:status` to see when batches can be measured. Run `npm run seo:check` once per day: it starts checking on the second day after optimization, waits until three completed GSC days are available, then writes a one-time JSON and Markdown comparison under `data/private/seo-reports/`.

The cohort script never creates pages or changes content. Add a new cohort only after recording its pre-optimization baseline and completing the content update. Keep synonymous queries with their existing page; use Trends or community signals only to nominate a genuinely distinct new intent for human review.

Run `npm run seo:dashboard` to generate `data/private/seo-dashboard.html`. Open that local file to filter cohorts and inspect intent, baseline visibility, page metrics, and every completed before/after comparison. `npm run seo:check` refreshes the dashboard after each daily comparison run.

Run `npm run analytics:mcp` to start the local MCP server. Add it to Codex from this repository:

```bash
codex mcp add dawnwalker-analytics -- node --env-file-if-exists=.env.analytics.local scripts/analytics-mcp.mjs
```

Restart or open a new Codex task after adding the server. Once it is available, ask questions such as:

- “Show the latest Dawnwalker analytics overview.”
- “Which Search Console queries drive the most clicks?”
- “Show the latest Adsterra Publisher report.”

The MCP server never calls external APIs itself. It only reads the most recent local sync result, so asking questions cannot modify GSC, GA4, or Adsterra.

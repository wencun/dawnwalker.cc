import type { Metadata } from "next";
import Link from "next/link";
import cohorts from "../../analytics/seo-cohorts.json";
import { SiteFooter } from "../site-footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: "SEO Dashboard | Dawnwalker Guide" },
  description: "Public record of Dawnwalker Guide SEO optimization cohorts, baseline search visibility and measurement status.",
  alternates: { canonical: "/dashboard" },
  robots: { index: false, follow: false },
};

type Page = {
  path: string;
  intent: string;
  baseline: { clicks: number; impressions: number; ctr: number; position: number };
};

const format = new Intl.NumberFormat("en-US");

export default function DashboardPage() {
  const allPages = cohorts.cohorts.flatMap((cohort) => cohort.pages as Page[]);
  const totals = allPages.reduce((total, page) => ({
    clicks: total.clicks + page.baseline.clicks,
    impressions: total.impressions + page.baseline.impressions,
  }), { clicks: 0, impressions: 0 });

  return <main className={styles.shell}>
    <article className={styles.dashboard}>
      <p className="eyebrow">PUBLIC SEO RECORD</p>
      <h1>Dawnwalker Guide SEO dashboard</h1>
      <p className={styles.dek}>A public record of the pages selected for search optimization and their pre-change Google Search Console baselines. Post-change figures are published after three complete reporting days are available.</p>
      <p className={styles.note}>Last optimization: October 7, 2026 · Baseline window: October 3–5, 2026</p>

      <section className={styles.metrics} aria-label="Dashboard totals">
        <div><span>OPTIMIZATION COHORTS</span><strong>{cohorts.cohorts.length}</strong></div>
        <div><span>PAGES TRACKED</span><strong>{allPages.length}</strong></div>
        <div><span>BASELINE IMPRESSIONS</span><strong>{format.format(totals.impressions)}</strong></div>
        <div><span>BASELINE CLICKS</span><strong>{format.format(totals.clicks)}</strong></div>
      </section>

      <section className={styles.intro}>
        <h2>How measurement works</h2>
        <p>Each cohort preserves its baseline before editorial changes. A page is evaluated only after Google Search Console has three complete post-change days, using clicks, impressions, CTR and average position. This page intentionally excludes credentials and any private analytics data.</p>
      </section>

      {cohorts.cohorts.map((cohort) => <section className={styles.cohort} key={cohort.id}>
        <p className="eyebrow">{cohort.id}</p>
        <h2>{cohort.intent}</h2>
        <p className={styles.status}>Measurement status: awaiting post-change Google Search Console data.</p>
        <div className={styles.tableWrap}>
          <table>
            <caption>Pre-optimization Google Search Console baseline</caption>
            <thead><tr><th scope="col">Page</th><th scope="col">Search intent</th><th scope="col">Clicks</th><th scope="col">Impressions</th><th scope="col">CTR</th><th scope="col">Avg. position</th></tr></thead>
            <tbody>{(cohort.pages as Page[]).map((page) => <tr key={page.path}>
              <th scope="row"><Link href={page.path}>{page.path}</Link></th>
              <td>{page.intent}</td>
              <td>{format.format(page.baseline.clicks)}</td>
              <td>{format.format(page.baseline.impressions)}</td>
              <td>{(page.baseline.ctr * 100).toFixed(2)}%</td>
              <td>{page.baseline.position.toFixed(2)}</td>
            </tr>)}</tbody>
          </table>
        </div>
      </section>)}
    </article>
    <SiteFooter />
  </main>;
}

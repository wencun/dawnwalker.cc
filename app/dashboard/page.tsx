import type { Metadata } from "next";
import rawDashboard from "../../public/seo-dashboard-data.json";
import rawCandidates from "../../public/seo-candidates.json";
import { SiteFooter } from "../site-footer";
import { DashboardTable } from "./dashboard-table";
import styles from "./page.module.css";

export const metadata: Metadata = { title: { absolute: "SEO 优化看板 | Dawnwalker Guide" }, description: "Dawnwalker Guide 的公开 SEO 优化记录、GSC 基线与实际表现。", alternates: { canonical: "/dashboard" }, robots: { index: false, follow: false } };

export default function DashboardPage() {
  const dashboard = rawDashboard as { generatedAt: string; cohorts: unknown[] };
  return <main className={styles.shell}><article className={styles.dashboard}>
    <p className="eyebrow">公开 SEO 记录</p><h1>Dawnwalker Guide SEO 优化看板</h1>
    <p className={styles.dek}>逐页公开本次修改内容、优化前 Google Search Console 基线，以及实际查询到的优化后表现。点击表头可按各项指标排序。</p>
    <p className={styles.note}>数据生成：{new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium", timeStyle: "short", timeZone: "UTC" }).format(new Date(dashboard.generatedAt))}（UTC）</p>
    <DashboardTable cohorts={dashboard.cohorts} candidates={rawCandidates} />
  </article><SiteFooter /></main>;
}

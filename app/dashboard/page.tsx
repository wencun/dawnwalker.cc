import type { Metadata } from "next";
import Link from "next/link";
import rawDashboard from "../../public/seo-dashboard-data.json";
import { SiteFooter } from "../site-footer";
import styles from "./page.module.css";

export const metadata: Metadata = { title: { absolute: "SEO 优化看板 | Dawnwalker Guide" }, description: "Dawnwalker Guide 的公开 SEO 优化记录、GSC 基线与实际表现。", alternates: { canonical: "/dashboard" }, robots: { index: false, follow: false } };
type Metric = { clicks: number; impressions: number; ctr: number; position: number };
type Audit = { before: Record<string, string>; after: Record<string, string> };
type PageRecord = { path: string; intent: string; optimization: string; locations: string; reason: string; before: Metric; after: Metric | null; audit: Audit | null };
type Cohort = { id: string; intent: string; optimizedOn: string; baselineRange: { start: string; end: string }; status: string; pages: PageRecord[] };
const dashboard = rawDashboard as unknown as { generatedAt: string; cohorts: Cohort[] };
const format = new Intl.NumberFormat("zh-CN");
const percent = (value: number) => `${(value * 100).toFixed(2)}%`;
function Metrics({ metric }: { metric: Metric }) { return <><td>{format.format(metric.clicks)}</td><td>{format.format(metric.impressions)}</td><td>{percent(metric.ctr)}</td><td>{metric.position.toFixed(2)}</td></>; }

export default function DashboardPage() {
  const pages = dashboard.cohorts.flatMap((cohort) => cohort.pages);
  const hasActual = pages.some((page) => page.after);
  return <main className={styles.shell}><article className={styles.dashboard}>
    <p className="eyebrow">公开 SEO 记录</p><h1>Dawnwalker Guide SEO 优化看板</h1>
    <p className={styles.dek}>逐页公开本次修改内容、优化前 Google Search Console 基线，以及实际查询到的优化后表现。实际数据仅来自 GSC；尚未返回完整数据时会保留为空。</p>
    <p className={styles.note}>数据生成：{new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium", timeStyle: "short", timeZone: "UTC" }).format(new Date(dashboard.generatedAt))}（UTC）</p>
    <section className={styles.metrics} aria-label="看板总览"><div><span>优化批次</span><strong>{dashboard.cohorts.length}</strong></div><div><span>追踪页面</span><strong>{pages.length}</strong></div><div><span>实际数据状态</span><strong>{hasActual ? "已更新" : "等待中"}</strong></div><div><span>数据来源</span><strong>GSC</strong></div></section>
    <section className={styles.intro}><h2>真实数据规则</h2><p>GSC 有报告延迟。当前批次在 2026 年 10 月 7 日优化，必须先获得 10 月 8 日至 10 日这三个完整数据日，才能显示实际指标。每日自动任务会重新查询并发布数据；不会使用目标值或估算值替代实际值。</p></section>
    {dashboard.cohorts.map((cohort) => <section className={styles.cohort} key={cohort.id}><p className="eyebrow">{cohort.id}</p><h2>{cohort.intent}</h2><p className={styles.status}>优化日期：{cohort.optimizedOn} · 基线：{cohort.baselineRange.start} 至 {cohort.baselineRange.end} · {cohort.status === "completed" ? "实际 GSC 数据已更新" : "等待完整 GSC 数据"}</p><div className={styles.tableWrap}><table><caption>页面改动、优化前基线与实际 GSC 数据</caption><thead><tr><th scope="col">页面</th><th scope="col">本次改动</th><th scope="col" colSpan={4}>优化前 GSC 基线</th><th scope="col" colSpan={4}>实际 GSC 数据</th></tr><tr><th /><th /><th scope="col">点击</th><th scope="col">展示</th><th scope="col">CTR</th><th scope="col">平均排名</th><th scope="col">点击</th><th scope="col">展示</th><th scope="col">CTR</th><th scope="col">平均排名</th></tr></thead><tbody>{cohort.pages.map((page) => <tr key={page.path}><th scope="row"><Link href={page.path}>{page.path}</Link><small>{page.intent}</small></th><td><b>{page.optimization}</b><small>修改位置：{page.locations}</small><details><summary>查看修改前后内容</summary><p><b>修改原因：</b>{page.reason}</p>{page.audit && <div className={styles.audit}><div><b>修改前</b><small>Title：{page.audit.before.title}</small><small>Description：{page.audit.before.description}</small><small>H1：{page.audit.before.h1}</small></div><div><b>修改后</b><small>Title：{page.audit.after.title}</small><small>Description：{page.audit.after.description}</small><small>H1：{page.audit.after.h1}</small></div></div>}</details></td><Metrics metric={page.before} />{page.after ? <Metrics metric={page.after} /> : <td className={styles.waiting} colSpan={4}>等待完整 GSC 数据</td>}</tr>)}</tbody></table></div></section>)}
  </article><SiteFooter /></main>;
}

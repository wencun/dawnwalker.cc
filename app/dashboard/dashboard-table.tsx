"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./page.module.css";

type Metric = { clicks: number; impressions: number; ctr: number; position: number };
type Audit = { before: Record<string, string>; after: Record<string, string> };
type PageRecord = { path: string; intent: string; optimization: string; locations: string; reason: string; before: Metric; after: Metric | null; audit: Audit | null };
type Cohort = { id: string; intent: string; optimizedOn: string; baselineRange: { start: string; end: string }; actualRange: { start: string; end: string } | null; status: string; pages: PageRecord[] };
type SortMetric = keyof Metric;
type Sort = { source: "before" | "after"; metric: SortMetric; direction: "asc" | "desc" };
type BatchFilter = "exclude-2026-10-07" | "all" | string;
type IntentReview = { status: "needs_review" | "verified"; targetQuery?: string; intentType?: string; expectedAnswer?: string; action?: "update_existing" | "create_new"; sourceTypes?: string[]; gameVersion?: string; platforms?: string[]; reviewedAt?: string };
type Candidate = Metric & { path: string; url: string; type: "click" | "impression"; ctrThreshold?: number; opportunityClicks?: number; querySignal?: { query: string; impressions: number; position: number } | null; intentReview: IntentReview };
type CandidateData = { generatedAt: string | null; range: { start: string; end: string } | null; candidates: Candidate[]; excluded: { path: string }[] };
const format = new Intl.NumberFormat("zh-CN");
const percent = (value: number) => `${(value * 100).toFixed(2)}%`;

export function DashboardTable({ cohorts: rawCohorts, candidates: rawCandidates }: { cohorts: unknown[]; candidates: unknown }) {
  const cohorts = rawCohorts as Cohort[];
  const candidateData = rawCandidates as CandidateData;
  const [sort, setSort] = useState<Sort>({ source: "before", metric: "impressions", direction: "desc" });
  const [batchFilter, setBatchFilter] = useState<BatchFilter>("exclude-2026-10-07");
  const dates = [...new Set(cohorts.map((cohort) => cohort.optimizedOn))].sort().reverse();
  const visibleCohorts = useMemo(() => cohorts.filter((cohort) => batchFilter === "all" || (batchFilter === "exclude-2026-10-07" ? cohort.optimizedOn !== "2026-10-07" : cohort.optimizedOn === batchFilter)), [batchFilter, cohorts]);
  const rows = useMemo(() => visibleCohorts.flatMap((cohort) => cohort.pages.map((page) => ({ cohort, page }))).sort((left, right) => {
    const a = left.page[sort.source]?.[sort.metric];
    const b = right.page[sort.source]?.[sort.metric];
    if (a == null && b == null) return 0;
    if (a == null) return 1;
    if (b == null) return -1;
    return sort.direction === "asc" ? a - b : b - a;
  }), [sort, visibleCohorts]);
  const changeSort = (source: Sort["source"], metric: SortMetric) => setSort((current) => current.source === source && current.metric === metric ? { ...current, direction: current.direction === "desc" ? "asc" : "desc" } : { source, metric, direction: metric === "position" ? "asc" : "desc" });
  const indicator = (source: Sort["source"], metric: SortMetric) => sort.source === source && sort.metric === metric ? (sort.direction === "desc" ? " ↓" : " ↑") : "";
  const heading = (label: string, source: Sort["source"], metric: SortMetric) => <th scope="col"><button type="button" className={styles.sortButton} onClick={() => changeSort(source, metric)}>{label}{indicator(source, metric)}</button></th>;
  const hasActual = rows.some(({ page }) => page.after);
  const periods = (ranges: { start: string; end: string }[]) => [...new Set(ranges.map((range) => `${range.start} 至 ${range.end}`))].join("；");
  const baselinePeriod = rows.length ? periods(visibleCohorts.map((cohort) => cohort.baselineRange)) : "—";
  const actualRanges = visibleCohorts.flatMap((cohort) => cohort.actualRange ? [cohort.actualRange] : []);
  const actualPeriod = actualRanges.length ? periods(actualRanges) : "等待 GSC 完整数据";
  const candidatePeriod = candidateData.range ? `${candidateData.range.start} 至 ${candidateData.range.end}` : "等待每日 GSC 同步";

  return <>
    <section className={styles.metrics} aria-label="看板总览"><div><span>优化批次</span><strong>{visibleCohorts.length}</strong></div><div><span>追踪页面</span><strong>{rows.length}</strong></div><div><span>实际数据状态</span><strong>{hasActual ? "已更新" : "等待中"}</strong></div><div><span>数据来源</span><strong>GSC</strong></div></section>
    <section className={styles.intro}><h2>真实数据规则</h2><p>GSC 有报告延迟。实际指标仅在获得完整的优化后数据窗口后显示；不会用预测值或估算值替代。默认按优化前展示量排序，可点击任意指标表头切换排序。</p></section>
    <section className={styles.cohort}><div className={styles.tableHeader}><div><h2>下一轮优化候选</h2><p className={styles.status}>近 7 个完整 GSC 数据日：{candidatePeriod}。点击优化候选按预计可补回点击排序；展示优化候选用于扩展可见度。只有“已验证”候选可进入优化批次。</p></div></div>{candidateData.candidates.length === 0 ? <p className={styles.empty}>{candidateData.range ? "当前没有同时符合阈值且不在冷却期的页面。" : "等待每日 GSC 候选同步；这里不会显示预测或编造的数据。"} 已排除观察期页面：{candidateData.excluded.length}。</p> : <div className={styles.tableWrap}><table><caption>真实 GSC 候选数据与搜索意图审核</caption><thead><tr><th scope="col">类型</th><th scope="col">页面</th><th scope="col">GSC 查询信号</th><th scope="col">点击 / 展示 / CTR / 排名</th><th scope="col">意图审核</th><th scope="col">阈值 / 机会</th></tr></thead><tbody>{candidateData.candidates.map((candidate) => <tr key={`${candidate.type}-${candidate.path}`}><td><b>{candidate.type === "click" ? "优化点击" : "优化展示"}</b></td><th scope="row"><Link href={candidate.path}>{candidate.path}</Link></th><td>{candidate.querySignal ? <><b>{candidate.querySignal.query}</b><small>展示 {format.format(candidate.querySignal.impressions)} · 排名 {candidate.querySignal.position.toFixed(2)}</small></> : "等待查询信号"}</td><td>{format.format(candidate.clicks)} / {format.format(candidate.impressions)} / {percent(candidate.ctr)} / {candidate.position.toFixed(2)}</td><td>{candidate.intentReview.status === "verified" ? <><b>已验证：{candidate.intentReview.intentType}</b><small>目标查询：{candidate.intentReview.targetQuery}</small><small>来源：{candidate.intentReview.sourceTypes?.join("、") || "未注明"} · {candidate.intentReview.gameVersion || "版本待注明"}</small></> : <><b>待审核</b><small>需记录意图、直接答案、来源类型、版本/平台与处理方式</small></>}</td><td>{candidate.type === "click" ? <>CTR 阈值 {percent(candidate.ctrThreshold ?? 0)}<small>预计可补回 {candidate.opportunityClicks?.toFixed(1)} 次点击</small></> : <>展示量 20–99、排名 8–20<small>优先补强答案与内链</small></>}</td></tr>)}</tbody></table></div>}</section>
    <section className={styles.cohort}><div className={styles.tableHeader}><div><h2>全部追踪页面</h2><p className={styles.status}>批次与意图保留在同一张表中，便于直接与 GSC 的页面、查询和指标视图对照。</p></div><label className={styles.batchFilter}>时间批次<select value={batchFilter} onChange={(event) => setBatchFilter(event.target.value)}><option value="exclude-2026-10-07">排除 2026-10-07 批次</option><option value="all">全部批次</option>{dates.map((date) => <option key={date} value={date}>仅看 {date} 批次</option>)}</select></label></div>{rows.length === 0 ? <p className={styles.empty}>已默认排除 2026-10-07 更新的批次；该批次仍在观察期，暂不应再次作为优化候选。选择“全部批次”或具体日期可查看历史数据。</p> : <div className={styles.tableWrap}><table><caption>页面改动、优化前基线与实际 GSC 数据</caption><thead><tr><th scope="col">页面</th><th scope="col">批次 / 搜索意图</th><th scope="col">本次改动</th><th scope="col" colSpan={4}>优化前 GSC 基线<br /><small>{baselinePeriod}</small></th><th scope="col" colSpan={4}>实际 GSC 数据<br /><small>{actualPeriod}</small></th></tr><tr><th /><th /><th />{heading("点击", "before", "clicks")}{heading("展示", "before", "impressions")}{heading("CTR", "before", "ctr")}{heading("平均排名", "before", "position")}{heading("点击", "after", "clicks")}{heading("展示", "after", "impressions")}{heading("CTR", "after", "ctr")}{heading("平均排名", "after", "position")}</tr></thead><tbody>{rows.map(({ cohort, page }) => <tr key={page.path}><th scope="row"><Link href={page.path}>{page.path}</Link></th><td><b>{cohort.id}</b><small>{page.intent}</small></td><td><b>{page.optimization}</b><small>修改位置：{page.locations}</small><details><summary>查看修改前后内容</summary><p><b>修改原因：</b>{page.reason}</p>{page.audit && <div className={styles.audit}><div><b>修改前</b><small>Title：{page.audit.before.title}</small><small>Description：{page.audit.before.description}</small><small>H1：{page.audit.before.h1}</small></div><div><b>修改后</b><small>Title：{page.audit.after.title}</small><small>Description：{page.audit.after.description}</small><small>H1：{page.audit.after.h1}</small></div></div>}</details></td><td>{format.format(page.before.clicks)}</td><td>{format.format(page.before.impressions)}</td><td>{percent(page.before.ctr)}</td><td>{page.before.position.toFixed(2)}</td>{page.after ? <><td>{format.format(page.after.clicks)}</td><td>{format.format(page.after.impressions)}</td><td>{percent(page.after.ctr)}</td><td>{page.after.position.toFixed(2)}</td></> : <td className={styles.waiting} colSpan={4}>等待完整 GSC 数据</td>}</tr>)}</tbody></table></div>}</section>
  </>;
}

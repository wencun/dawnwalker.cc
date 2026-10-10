import type { Metadata } from "next";
import Link from "next/link";
import cohorts from "../../analytics/seo-cohorts.json";
import { SiteFooter } from "../site-footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: "SEO 优化看板 | Dawnwalker Guide" },
  description: "Dawnwalker Guide 的公开 SEO 优化批次、搜索可见性基线与效果测量状态。",
  alternates: { canonical: "/dashboard" },
  robots: { index: false, follow: false },
};

type Page = {
  path: string;
  intent: string;
  baseline: { clicks: number; impressions: number; ctr: number; position: number };
};

const format = new Intl.NumberFormat("zh-CN");
const cohortTitles: Record<string, string> = {
  "2026-10-07-high-opportunity": "高意图问题、物品与任务答案",
  "2026-10-07-game-state-information": "游戏状态、平台与流程信息",
  "2026-10-07-quest-choice-guides": "任务选择、角色与装备攻略",
};
const pageIntents: Record<string, string> = {
  "/known-issues": "已知问题状态与故障说明", "/flickering-fix": "画面闪烁诊断", "/flask-of-quicksilver": "物品位置与获取", "/font-of-life": "选择结果说明", "/cant-save": "存档锁定诊断", "/crash-and-stutter-fix": "PC 崩溃与卡顿诊断", "/controller-movement-fix": "手柄与 GameInput 故障排除", "/help-the-sanzhani": "任务帮助与地点指引", "/how-many-spoonfuls-of-herbs": "任务答案", "/odd-riddle": "谜题解法",
  "/endings": "结局条件与结果", "/mods": "模组可用性与安全安装", "/new-game-plus": "新游戏+可用性与继承内容", "/platforms": "平台与 Game Pass 状态", "/release-date": "发售日期与解锁时间", "/time-system": "30 天时间系统与后果", "/walkthrough": "通关流程与任务顺序", "/what-happens-after-30-days": "30 天期限的结果",
  "/a-friend-like-this": "A Friend Like This 任务流程", "/anca-romance": "Anca 恋爱条件", "/best-sword": "最佳剑类对比", "/forge-it-anew": "Forge It Anew 任务指引", "/home-sweet-home": "Home Sweet Home 任务流程", "/volk-buried-past": "Volk's Buried Past 选择与物品位置", "/xanthe-boss-guide": "Xanthe Boss 与任务指引",
};

export default function DashboardPage() {
  const allPages = cohorts.cohorts.flatMap((cohort) => cohort.pages as Page[]);
  const totals = allPages.reduce((total, page) => ({
    clicks: total.clicks + page.baseline.clicks,
    impressions: total.impressions + page.baseline.impressions,
  }), { clicks: 0, impressions: 0 });

  return <main className={styles.shell}>
    <article className={styles.dashboard}>
      <p className="eyebrow">公开 SEO 记录</p>
      <h1>Dawnwalker Guide SEO 优化看板</h1>
      <p className={styles.dek}>这里公开记录进入 SEO 优化的页面及其改动前 Google Search Console 基线。优化后三个完整报告日的数据到齐后，会更新效果对比。</p>
      <p className={styles.note}>最近优化：2026 年 10 月 7 日 · 基线窗口：2026 年 10 月 3 日至 5 日</p>

      <section className={styles.metrics} aria-label="看板总览">
        <div><span>优化批次</span><strong>{cohorts.cohorts.length}</strong></div>
        <div><span>追踪页面</span><strong>{allPages.length}</strong></div>
        <div><span>基线展示量</span><strong>{format.format(totals.impressions)}</strong></div>
        <div><span>基线点击量</span><strong>{format.format(totals.clicks)}</strong></div>
      </section>

      <section className={styles.intro}>
        <h2>效果如何测量</h2>
        <p>每个批次都会在编辑改动前保存基线。页面仅在 Google Search Console 提供三个完整优化后数据日后，才会根据点击、展示、CTR 和平均排名进行评估。此页不包含任何凭据或私有分析数据。</p>
      </section>

      {cohorts.cohorts.map((cohort) => <section className={styles.cohort} key={cohort.id}>
        <p className="eyebrow">{cohort.id}</p>
        <h2>{cohortTitles[cohort.id] ?? cohort.intent}</h2>
        <p className={styles.status}>测量状态：等待 Google Search Console 的优化后数据。</p>
        <div className={styles.tableWrap}>
          <table>
            <caption>优化前 Google Search Console 基线</caption>
            <thead><tr><th scope="col">页面</th><th scope="col">搜索意图</th><th scope="col">点击</th><th scope="col">展示</th><th scope="col">CTR</th><th scope="col">平均排名</th></tr></thead>
            <tbody>{(cohort.pages as Page[]).map((page) => <tr key={page.path}>
              <th scope="row"><Link href={page.path}>{page.path}</Link></th>
              <td>{pageIntents[page.path] ?? page.intent}</td>
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

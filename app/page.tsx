"use client";

import { useMemo, useState } from "react";

const quests = [
  { name: "灰烬中的线索", region: "斯瓦特劳", phase: "白昼", time: "1 格", reward: "银质符印", spoiler: "会开启教堂地下室路线" },
  { name: "失踪的药草师", region: "河谷", phase: "昼夜皆可", time: "2 格", reward: "炼金配方", spoiler: "选择庇护会影响后续盟友" },
  { name: "钟楼下的血契", region: "斯瓦特劳", phase: "夜晚", time: "1 格", reward: "夜行能力点", spoiler: "可避开正面战斗并保留 NPC" },
  { name: "狼群的回声", region: "北境林地", phase: "白昼", time: "0 格", reward: "强化材料", spoiler: "探索任务，不推进世界时间" },
];

const updates = [
  ["新手", "30 天不是实时倒计时：如何读懂沙漏图标", "08.24"],
  ["任务", "主线开局：先救家人还是先寻找盟友？", "08.23"],
  ["战斗", "剑术、法术与血之能力：三条成长路线", "08.22"],
];

export default function Home() {
  const [mode, setMode] = useState<"无剧透" | "剧透">("无剧透");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("全部");
  const results = useMemo(() => quests.filter((q) =>
    (filter === "全部" || q.phase.includes(filter)) && `${q.name}${q.region}${q.reward}`.includes(query)
  ), [query, filter]);

  return <main>
    <nav className="nav"><a className="brand" href="#top">THE BLOOD OF <span>DAWNWALKER</span><small>攻略档案</small></a><div className="links"><a href="#routes">Vale Sangora</a><a href="#library">图鉴档案</a><a href="#planner">时间之砂</a><a href="#updates">公报</a></div><button className="spoiler" onClick={() => setMode(mode === "无剧透" ? "剧透" : "无剧透")}>◉ {mode}模式</button></nav>

    <section id="top" className="hero">
      <div className="hero-art" aria-hidden="true"><img src="/dawnwalker-hero.jpg" alt="" /></div>
      <div className="hero-copy"><p className="eyebrow">VALE SANGORA FIELD ARCHIVE · 14 世纪暗黑奇幻</p><p className="hero-kicker">COEN · DAWNWALKER</p><h1>白昼为人。<em>黑夜为猎手。</em></h1><p className="lead">欢迎来到 Sangora 山谷。追踪吸血鬼领主、规划 30 天的时间资源，决定谁能活到黎明。</p><div className="hero-actions"><a className="primary" href="#planner">规划救援路线</a><a className="secondary" href="#routes">检视任务档案</a></div></div>
      <aside className="clock-card"><p>家庭的命运</p><div className="day">30 <span>日 / 夜</span></div><div className="bar"><i /></div><small>时间只会在关键行动后推进<br />先看沙漏，再做决定。</small></aside>
      <div className="hero-seal" aria-hidden="true">RW<br/><span>V.S.</span><br/>1476</div>
    </section>

    <section className="signal"><span>✦ 官方确认</span><p>探索不会消耗时间；任务和昼夜切换才会推进世界进程。</p><a href="#planner">查看机制 →</a></section>

    <section className="section intro"><div><p className="eyebrow">THE DAWNWALKER'S DILEMMA</p><h2>攻略，不该替你做决定。</h2></div><div className="intro-copy"><p>每条信息都标明版本、验证状态与剧透等级。你可以只知道“代价”，也可以展开查看“结果”。</p><span>人类的白昼 · 吸血鬼的黑夜</span></div></section>

    <section id="routes" className="section grid-section"><div className="section-head"><div><p className="eyebrow">任务与选择</p><h2>下一步，去哪里？</h2></div><a href="#planner">全部任务库 →</a></div><div className="route-grid">
      <article className="feature-card crimson"><img src="/dawnwalker-coen.png" alt="Coen 官方游戏画面"/><span>01 · 白昼</span><h3>人类的路径</h3><p>剑术、黑暗魔法、对人类世界的调查。无剧透地规划每一步。</p><a href="#planner">查看开局路线 →</a></article>
      <article className="feature-card night-card"><img src="/dawnwalker-night.png" alt="夜晚行动官方游戏画面"/><span>02 · 黑夜</span><h3>猎手的路径</h3><p>夜行、攀爬与吸血鬼能力。查找只能在黑暗中进入的地点。</p><a href="#planner">查询夜间行动 →</a></article>
      <article className="feature-card archive-card"><span>03 · 血之档案</span><h3>选择的代价</h3><p>从 Brencis 的势力到失落的盟友，追踪每一次行动的回响。</p><a href="#library">打开 Sangora 图鉴 →</a></article>
    </div></section>

    <section id="planner" className="section planner"><div className="planner-copy"><p className="eyebrow">30 天资源面板</p><h2>把时间，当作你的第二条生命。</h2><p>每项行动的沙漏成本、昼夜限制、解锁收益与可错过风险，全部放在同一张路线表中。</p><div className="chips"><button className={filter === "全部" ? "active" : ""} onClick={() => setFilter("全部")}>全部</button><button className={filter === "白昼" ? "active" : ""} onClick={() => setFilter("白昼")}>白昼</button><button className={filter === "夜晚" ? "active" : ""} onClick={() => setFilter("夜晚")}>夜晚</button></div></div><div className="quest-panel"><div className="search"><span>⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="搜索任务、区域或奖励" aria-label="搜索攻略" /></div><div className="quest-list">{results.map((q) => <div className="quest" key={q.name}><div><b>{q.name}</b><small>{q.region} · {q.phase}</small></div><div className="time">⌛ {q.time}</div><div className="reward">{mode === "剧透" ? q.spoiler : q.reward}</div></div>)}{!results.length && <p className="empty">未找到匹配的记录。</p>}</div></div></section>

    <section id="library" className="section library"><div className="section-head"><div><p className="eyebrow">资料库</p><h2>用数据，替代猜测。</h2></div><a href="#top">浏览全部 →</a></div><div className="library-grid"><div><strong>48</strong><span>任务与分支</span></div><div><strong>24</strong><span>装备与配方</span></div><div><strong>16</strong><span>角色与派系</span></div><div><strong>08</strong><span>区域与地点</span></div></div><p className="note">首发资料持续补全中 · 条目将按“官方确认 / 实测验证 / 待核实”分类。</p></section>

    <section id="updates" className="section updates"><div className="section-head"><div><p className="eyebrow">最新收录</p><h2>先读这些。</h2></div><a href="#top">更新日志 →</a></div><div className="updates-list">{updates.map(([tag, title, date]) => <article key={title}><span>{tag}</span><h3>{title}</h3><time>{date}</time><b>→</b></article>)}</div></section>

    <footer><a className="brand" href="#top">Dawn<span>Archive</span></a><p>非官方粉丝攻略站 · 《The Blood of Dawnwalker》相关商标与素材归其权利人所有。</p><span>建立于 2026</span></footer>
  </main>;
}

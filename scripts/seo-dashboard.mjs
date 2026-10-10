import { mkdir, readFile, writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import path from "node:path";

const configPath = path.resolve("analytics/seo-cohorts.json");
const statePath = path.resolve(process.env.SEO_COHORT_STATE_PATH ?? "data/private/seo-cohorts.json");
const outputPath = path.resolve(process.env.SEO_DASHBOARD_PATH ?? "data/private/seo-dashboard.html");
const publicDataPath = path.resolve(process.env.SEO_DASHBOARD_PUBLIC_DATA_PATH ?? "public/seo-dashboard-data.json");
const execFileAsync = promisify(execFile);
const optimizationNotes = {
  "/known-issues": "区分问题状态与具体修复路径，更新首屏快速答案并补充故障页内链。",
  "/flickering-fix": "标题聚焦 screen/light flickering；首段改为分步设置检查，并补充相关内链。",
  "/flask-of-quicksilver": "将首屏改为物品位置、前置任务和用途的直接答案；加入任务与 walkthrough 内链。",
  "/font-of-life": "重写为奖励选择意图；首屏明确 Coen、Anca 和 Ancient Greaves 三种结果。",
  "/cant-save": "去除过度绑定补丁版本的标题；区分正常任务锁定与持续 save-lock bug。",
  "/crash-and-stutter-fix": "改为安全 PC 检查意图；按崩溃、卡顿和闪烁拆分首屏答案。",
  "/controller-movement-fix": "标题覆盖 GameInput、FPS、冲刺和移动；提供按症状排序的修复步骤。",
  "/help-the-sanzhani": "明确四个任务地点和额外一天奖励；补充任务顺序和时间系统内链。",
  "/how-many-spoonfuls-of-herbs": "将标题改为直接答案“三勺”；首屏突出 hot water + three spoonfuls。",
  "/odd-riddle": "重写标题、摘要和快速答案以直接给出谜题解法，并链接任务上下文。",
  "/endings": "重写标题和摘要以覆盖结局条件与存档规划；强化首屏直接答案。",
  "/mods": "标题聚焦 Nexus、安全安装和热门类别；首屏加入存档保护与相关攻略内链。",
  "/new-game-plus": "改为 NG+ 是否可用的明确问答；补充前终局存档和 day-30 内链。",
  "/platforms": "明确 PC、PS5、Xbox 与 Game Pass 状态；新增首屏答案和购买决策内链。",
  "/release-date": "重写为 PC、PS5、Xbox 发售时间意图；新增日期、解锁规则和购买内链。",
  "/time-system": "明确探索不会实时消耗时间；新增快速答案并连接 day-30 与 walkthrough。",
  "/walkthrough": "调整为具体答案导航中心；首屏列出序章、任务、选择、恋爱与故障入口。",
  "/what-happens-after-30-days": "标题直接回答 30 天后结果；首屏强化 family route 后果与存档建议。",
  "/a-friend-like-this": "重写任务目标、选择和结果的标题与首屏答案，并补充相关任务内链。",
  "/anca-romance": "加强 romance 条件、关键选择和存档节点的首屏答案与交叉内链。",
  "/best-sword": "标题与摘要改为 best sword 比较意图，突出获取条件、适用玩法和相关装备内链。",
  "/forge-it-anew": "强化碎片路线、锻造步骤和任务前置条件的首屏答案与 walkthrough 内链。",
  "/home-sweet-home": "明确时间循环逃脱方法，突出 village well，并添加存档和物品路线内链。",
  "/volk-buried-past": "标题聚焦最佳路线、选择和剑；首屏加入分支存档与相关攻略内链。",
  "/xanthe-boss-guide": "标题聚焦 boss route 与血液选择；首屏加入 Court 路线、存档和后续决策内链。",
};
const optimizationDetails = {
  "/known-issues": ["metadata title/description、H1/摘要、快速答案、故障页内链", "用户搜索 bugs/bug report 时需要先判断状态，再进入匹配症状的修复页，避免一个总页回答所有问题。", "提高问题报告词的 CTR；通过症状页内链提升具体故障页的展示和排名。"],
  "/flickering-fix": ["metadata title/description、H1/摘要、快速答案、相关故障内链", "查询核心是 screen/light flickering 的可执行设置路径，而不是泛泛的驱动建议。", "提高闪烁词 CTR 和排名；将不匹配的 crash 查询导向正确页面。"],
  "/flask-of-quicksilver": ["metadata title/description、H1/摘要、快速答案、任务/攻略内链", "位置词用户需要地点、前置任务和物品用途在首屏一次得到回答。", "提高 location/find 词 CTR；通过任务内链增加相关页面展示。"],
  "/font-of-life": ["metadata title/description、H1/摘要、快速答案、romance/endings 内链", "choice 类查询需要比较三种奖励与后果，而不是只说明物品。", "提高 choice/best reward 词 CTR 与排名；内链带动结局和恋爱页。"],
  "/cant-save": ["metadata title/description、H1/摘要、快速答案、问题诊断内链", "Saving is locked 既可能是正常任务状态，也可能是 bug，必须先消除意图混淆。", "提高 can’t save/save lock 词 CTR；减少不相关跳出，改善后续排名信号。"],
  "/crash-and-stutter-fix": ["metadata title/description、H1/摘要、首屏分症状步骤、相关故障内链", "crash 和 stutter 不是同一问题，搜索者需要风险较低且症状匹配的第一步。", "提高 crash/stutter 词 CTR；通过更匹配答案提升排名和停留。"],
  "/controller-movement-fix": ["metadata title/description、H1/摘要、快速答案、故障/配置内链", "GameInput FPS、冲刺中断和斜向移动是相邻但不同的 controller 意图。", "提高 controller/GameInput 词 CTR；减少错误修复带来的跳出。"],
  "/help-the-sanzhani": ["metadata title/description、H1/摘要、快速答案、时间/攻略内链", "任务词用户需要四个地点和奖励，且需要知道无导航点是正常状态。", "提高 quest location 词 CTR；内链增加时间系统与攻略页曝光。"],
  "/how-many-spoonfuls-of-herbs": ["metadata title/description、H1/摘要、配方快速答案、序章/攻略内链", "该词是明确答案意图，答案“三勺”必须出现在标题和首屏。", "提高 herb/spoonfuls 词 CTR 和排名；增强长尾答案覆盖。"],
  "/odd-riddle": ["metadata title/description、H1/摘要、谜题快速答案、任务内链", "riddle 查询要求直接解法，同时保留完成谜题所需的任务上下文。", "提高谜题答案词 CTR；提升相关任务长尾展示。"],
  "/endings": ["metadata title/description、H1/摘要、首屏结局与存档答案", "结局查询的核心是结果、条件和避免重玩的存档策略。", "提高 ending/how many endings 词 CTR 与排名。"],
  "/mods": ["metadata title/description、H1/摘要、Nexus 首屏入口、存档安全/内链", "mods 查询需要当前来源和安全安装边界，而不是不稳定的固定推荐列表。", "提高 mods/Nexus 词 CTR；改善相关时间与问题页的内链发现。"],
  "/new-game-plus": ["metadata title/description、快速答案、结局/day-30/trophy 内链", "NG+ 查询首先需要明确是否存在及是否可继承，不应让用户误以为已有模式。", "提高 new game plus/NG+ 词 CTR；减少错误预期造成的跳出。"],
  "/platforms": ["metadata title/description、H1/摘要、新增快速答案、发售/性能/配置内链", "平台和 Game Pass 查询要求明确的支持状态与购买前路径。", "提高 platform/Game Pass 词 CTR；为发售和性能页带来展示。"],
  "/release-date": ["metadata title/description、H1/摘要、新增快速答案、发售时间/版本内链", "发售日期词需要日期、PC 与主机解锁规则在首屏可见。", "提高 release date/time 词 CTR 和排名；增加版本页曝光。"],
  "/time-system": ["metadata title/description、H1/摘要、新增快速答案、day-30/任务内链", "用户真正要确认的是探索是否消耗时间及什么行为会推进时钟。", "提高 30-day/time limit 词 CTR；加强相关任务页内部流量。"],
  "/walkthrough": ["metadata title/description、H1/摘要、攻略中心快速答案、深层页面内链", "宽泛 walkthrough 查询要被导向精确的任务、选择和故障答案。", "提高 walkthrough 词 CTR；将展示和点击分发给专题页。"],
  "/what-happens-after-30-days": ["metadata title/description、H1/摘要、day-31 快速答案、结局/时间/NG+ 内链", "该查询寻求倒计时结束后的明确后果与可逆存档建议。", "提高 after 30 days 词 CTR；带动结局和时间系统页。"],
  "/a-friend-like-this": ["metadata title/description、H1/摘要、任务快速答案、相关任务内链", "任务名搜索需要目标、选择和结果的直接路线说明。", "提高任务名与 walkthrough 长尾词的 CTR 和排名。"],
  "/anca-romance": ["metadata title/description、H1/摘要、恋爱条件快速答案、选择内链", "romance 查询需要条件、关键节点和存档时机，而不仅是角色存在与否。", "提高 Anca romance 词 CTR；增加 choice 页的相关流量。"],
  "/best-sword": ["metadata title/description、H1/摘要、比较型快速答案、装备内链", "best sword 查询是比较与获取意图，需要按玩法说明而非单一物品名称。", "提高 best sword 词 CTR 与排名；促进装备相关页面发现。"],
  "/forge-it-anew": ["metadata title/description、H1/摘要、碎片路线快速答案、walkthrough 内链", "任务搜索者需要前置条件、路线和锻造步骤的顺序答案。", "提高 quest route 长尾词 CTR；带动攻略中心展示。"],
  "/home-sweet-home": ["metadata title/description、H1/摘要、逃离循环快速答案、存档/物品内链", "卡关用户需要 village well 这一直接动作及之后可去的路线。", "提高 time loop/escape 词 CTR；增加物品和结局页内链点击。"],
  "/volk-buried-past": ["metadata title/description、H1/摘要、最佳路线快速答案、装备/结局内链", "该任务同时含选择、剑与分支，首屏需要给出最佳路线和存档节点。", "提高 Volk/Buried Past 词 CTR；增加装备与结局长尾曝光。"],
  "/xanthe-boss-guide": ["metadata title/description、H1/摘要、boss/blood choice 快速答案、攻略内链", "Xanthe 查询混合 boss 路线和血液选择，需在首屏明确先后顺序。", "提高 Xanthe boss/blood choice 词 CTR；加强攻略和结局页内链。"],
};

async function readJson(file, fallback) {
  try { return JSON.parse(await readFile(file, "utf8")); } catch (error) { if (error.code === "ENOENT") return fallback; throw error; }
}

function metric(value) {
  return { clicks: value.clicks, impressions: value.impressions, ctr: value.ctr, position: value.position };
}

function quotedValues(value) {
  return [...value.matchAll(/"([^"\\]*(?:\\.[^"\\]*)*)"/g)].map((match) => match[1]);
}

function sourceFields(source) {
  const metadata = source.match(/guideMetadata\(\s*"([^"\\]*(?:\\.[^"\\]*)*)"\s*,\s*"([^"\\]*(?:\\.[^"\\]*)*)"/s);
  const keywords = source.match(/guideMetadata\([\s\S]*?\[([\s\S]*?)\]\s*[,)]/);
  const prop = (name) => source.match(new RegExp(`\\b${name}="([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"`))?.[1] ?? null;
  return {
    title: metadata?.[1] ?? null,
    description: metadata?.[2] ?? null,
    h1: prop("title"),
    dek: prop("dek"),
    keywords: keywords ? quotedValues(keywords[1]).slice(0, 12) : [],
  };
}

async function sourceAudit(commit, pagePath) {
  if (!commit) return null;
  const sourcePath = `app${pagePath}/page.tsx`;
  try {
    const [before, after] = await Promise.all([
      execFileAsync("git", ["show", `${commit}^:${sourcePath}`], { cwd: process.cwd() }),
      execFileAsync("git", ["show", `${commit}:${sourcePath}`], { cwd: process.cwd() }),
    ]);
    return { before: sourceFields(before.stdout), after: sourceFields(after.stdout) };
  } catch {
    return null;
  }
}

function expectedMetric(before) {
  return {
    clicks: Math.ceil(before.clicks * 1.2),
    impressions: Math.ceil(before.impressions * 1.1),
    ctr: Math.min(before.ctr + 0.003, 0.03),
    position: Math.max(before.position - 1, 1),
  };
}

async function dashboardData(config, state) {
  return {
    generatedAt: new Date().toISOString(),
    cohorts: await Promise.all(config.cohorts.map(async (cohort) => {
      const report = state.completed?.[cohort.id];
      return {
        id: cohort.id,
        intent: cohort.intent,
        optimizedOn: cohort.optimizedOn,
        baselineRange: cohort.baselineRange,
        status: report ? "completed" : "waiting_for_gsc",
        conclusion: report?.conclusion ?? null,
        pages: await Promise.all(cohort.pages.map(async (page) => {
          const result = report?.pages?.find((item) => item.path === page.path);
          const detail = optimizationDetails[page.path] ?? ["metadata、H1/摘要、首屏答案、相关内链", "使页面首屏答案与主要搜索意图一致。", "提高 CTR、展示与排名。"];
          const before = result?.before ?? metric(page.baseline);
          return { path: page.path, intent: page.intent, optimization: optimizationNotes[page.path] ?? "更新标题、摘要、首屏答案和相关内链。", locations: detail[0], reason: detail[1], expected: detail[2], before, after: result?.after ? metric(result.after) : null, target: expectedMetric(before), audit: await sourceAudit(cohort.commit, page.path) };
        })),
      };
    })),
  };
}

function document(data) {
  const serialized = JSON.stringify(data).replaceAll("<", "\\u003c");
  return `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Dawnwalker SEO 优化看板</title><style>
:root{--bg:#101416;--surface:#171d1e;--line:#354143;--text:#edf0e8;--muted:#9eaba9;--red:#e06d5e;--gold:#d7b66c;--green:#78c294}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font:15px/1.5 ui-monospace,SFMono-Regular,Menlo,monospace}.shell{max-width:1440px;margin:auto;padding:26px clamp(18px,4vw,64px) 72px}.top{display:flex;justify-content:space-between;gap:24px;align-items:flex-end;border-bottom:1px solid var(--line);padding-bottom:20px}.eyebrow{margin:0 0 8px;color:var(--red);font-size:11px;letter-spacing:1.5px}.top h1{margin:0;font:700 clamp(28px,4vw,46px)/1.05 Georgia,serif;letter-spacing:0}.stamp{color:var(--muted);font-size:11px;text-align:right}.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:18px 0}.metric{min-height:82px;padding:14px;border:1px solid var(--line);background:var(--surface)}.metric span,.label{display:block;color:var(--muted);font-size:10px;letter-spacing:1px;text-transform:uppercase}.metric b{display:block;margin-top:8px;font-size:25px;color:var(--gold)}.controls{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin:18px 0}.controls label{color:var(--muted);font-size:11px}.controls select{min-width:280px;border:1px solid var(--line);background:#0e1213;color:var(--text);padding:11px;font:inherit}.status{display:inline-block;padding:5px 8px;font-size:10px;letter-spacing:1px;border:1px solid var(--line);color:var(--gold)}.status.completed{color:var(--green);border-color:#397351}.summary{display:grid;grid-template-columns:minmax(0,1fr) 290px;gap:18px;margin-bottom:18px}.panel{border:1px solid var(--line);background:var(--surface);padding:22px}.panel h2{margin:7px 0 9px;font:700 25px/1.1 Georgia,serif}.panel p{margin:0;color:var(--muted);font-size:13px}.records-head{display:flex;justify-content:space-between;align-items:end;margin:28px 0 12px}.records-head h2{margin:0;font:700 25px/1.1 Georgia,serif}.records-head span{color:var(--muted);font-size:11px}.records{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.record{border:1px solid var(--line);background:var(--surface);padding:18px}.record h3{margin:5px 0 12px;font-size:16px}.record p{margin:8px 0;color:var(--muted);font-size:12px}.record b{color:var(--text)}.signal{display:grid;gap:13px}.signal-row{display:grid;grid-template-columns:1fr auto;gap:12px;align-items:center;font-size:12px}.track{height:7px;background:#0f1314;border:1px solid #293234}.track i{display:block;height:100%;background:var(--gold)}.positive{color:var(--green)}.negative{color:var(--red)}.table-wrap{overflow:auto;border:1px solid var(--line);margin-top:26px}table{width:100%;border-collapse:collapse;min-width:980px;background:#121718}th,td{text-align:left;padding:15px 16px;border-bottom:1px solid var(--line);vertical-align:top}th{color:var(--muted);font-size:10px;letter-spacing:1px;text-transform:uppercase;background:#171e1f}td{font-size:12px}td b{display:block;color:var(--text);font-size:13px}td small{display:block;margin-top:4px;color:var(--muted)}.change{display:block;margin-top:5px;font-size:11px}.change-detail{margin-top:8px;color:var(--muted);line-height:1.55}.change-detail summary{cursor:pointer;color:var(--gold);font-size:11px}.change-detail p{margin:7px 0 0}.change-detail b{display:inline;color:var(--text);font-size:11px}.empty{padding:36px;border:1px dashed var(--line);color:var(--muted)}@media(max-width:760px){.shell{padding:24px 16px 50px}.top{display:block}.stamp{text-align:left;margin-top:20px}.metrics{grid-template-columns:repeat(2,1fr)}.summary,.records{grid-template-columns:1fr}.controls select{min-width:0;flex:1}.metric b{font-size:23px}}
</style></head><body><main class="shell"><header class="top"><div><p class="eyebrow">私有运营数据</p><h1>SEO 优化看板</h1></div><p class="stamp" id="stamp"></p></header><section class="metrics" id="metrics"></section><section class="controls"><label for="cohort">优化批次</label><select id="cohort"></select><span id="status" class="status"></span></section><section id="content"></section></main><script>
const data=${serialized};const formatInt=v=>new Intl.NumberFormat('zh-CN').format(v);const percent=v=>v==null?'—':(v*100).toFixed(2)+'%';const delta=(before,after,kind)=>{if(!after)return '等待 GSC 数据';const n=after[kind]-before[kind];if(kind==='ctr')return (n>=0?'+':'')+(n*100).toFixed(2)+' 个百分点';return (n>=0?'+':'')+(kind==='position'?n.toFixed(2):formatInt(n))};const classFor=(before,after,key)=>!after?'':((key==='position'?after[key]<before[key]:after[key]>before[key])?'positive':'negative');
const select=document.querySelector('#cohort');const stamp=document.querySelector('#stamp');stamp.textContent='生成时间：'+new Date(data.generatedAt).toLocaleString('zh-CN');data.cohorts.forEach((cohort,index)=>{const option=document.createElement('option');option.value=index;option.textContent=cohort.intent;select.append(option)});function render(){const cohort=data.cohorts[select.value||0];const completed=cohort.status==='completed';document.querySelector('#status').textContent=completed?'已完成对比':'等待 GSC 数据';document.querySelector('#status').className='status '+(completed?'completed':'');const completedCount=data.cohorts.filter(item=>item.status==='completed').length;const pageCount=data.cohorts.reduce((count,item)=>count+item.pages.length,0);const metricRows=cohort.pages.filter(page=>page.after);const improved=metricRows.filter(page=>page.after.ctr>page.before.ctr||page.after.clicks>page.before.clicks).length;document.querySelector('#metrics').innerHTML='<article class="metric"><span>优化批次</span><b>'+data.cohorts.length+'</b></article><article class="metric"><span>追踪页面</span><b>'+pageCount+'</b></article><article class="metric"><span>已完成对比</span><b>'+completedCount+'/'+data.cohorts.length+'</b></article><article class="metric"><span>表现改善页面</span><b>'+(completed?improved+'/'+metricRows.length:'—')+'</b></article>';const maxImpressions=Math.max(...cohort.pages.map(page=>page.before.impressions),1);const rows=cohort.pages.map(page=>'<tr><td><b>'+page.path+'</b><small>搜索意图：'+page.intent+'</small><small>优化摘要：'+page.optimization+'</small><details class="change-detail"><summary>查看本次改动与目标</summary><p><b>修改位置：</b>'+page.locations+'</p><p><b>为什么这样改：</b>'+page.reason+'</p><p><b>预期提升：</b>'+page.expected+'</p></details></td><td>'+formatInt(page.before.clicks)+'</td><td>'+formatInt(page.before.impressions)+'</td><td>'+percent(page.before.ctr)+'</td><td>'+page.before.position.toFixed(2)+'</td><td>'+(page.after?'<b>'+formatInt(page.after.clicks)+'</b><span class="change '+classFor(page.before,page.after,'clicks')+'">'+delta(page.before,page.after,'clicks')+'</span>':'—')+'</td><td>'+(page.after?'<b>'+percent(page.after.ctr)+'</b><span class="change '+classFor(page.before,page.after,'ctr')+'">'+delta(page.before,page.after,'ctr')+'</span>':'—')+'</td><td>'+(page.after?'<b>'+page.after.position.toFixed(2)+'</b><span class="change '+classFor(page.before,page.after,'position')+'">'+delta(page.before,page.after,'position')+'</span>':'—')+'</td></tr>').join('');const signals=cohort.pages.slice().sort((a,b)=>b.before.impressions-a.before.impressions).slice(0,5).map(page=>'<div class="signal-row"><span>'+page.path+'</span><span>'+formatInt(page.before.impressions)+'</span><div class="track"><i style="width:'+(page.before.impressions/maxImpressions*100)+'%"></i></div></div>').join('');document.querySelector('#content').innerHTML='<section class="summary"><article class="panel"><span class="label">搜索意图</span><h2>'+cohort.intent+'</h2><p>优化日期：'+cohort.optimizedOn+' · 基线窗口：'+cohort.baselineRange.start+' 至 '+cohort.baselineRange.end+(completed?' · 结论：'+cohort.conclusion:' · GSC 出现 3 个完整数据日后会显示优化结果')+'</p></article><aside class="panel"><span class="label">基线展示量</span><div class="signal">'+signals+'</div></aside></section><div class="table-wrap"><table><thead><tr><th>页面 / 搜索意图 / 优化记录</th><th>优化前点击</th><th>优化前展示</th><th>优化前 CTR</th><th>优化前排名</th><th>优化后点击</th><th>优化后 CTR</th><th>优化后排名</th></tr></thead><tbody>'+rows+'</tbody></table></div>'}select.addEventListener('change',render);render();
</script><script>document.head.insertAdjacentHTML('beforeend','<style>.audit-meta{color:#9eaba9;font-size:11px}.audit-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:14px 0}.audit-block{border:1px solid #2b3536;padding:10px;font-size:11px}.audit-block strong{display:block;color:#d7b66c;margin-bottom:6px}.audit-block div{margin-top:6px;color:#9eaba9;overflow-wrap:anywhere}.audit-block b{display:inline;font-size:11px}.audit-data{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}.audit-data div{border-top:1px solid #2b3536;padding-top:7px;color:#9eaba9;font-size:11px}.audit-data b{display:block;font-size:12px;margin-top:2px}.waiting{color:#d7b66c!important}@media(max-width:760px){.audit-grid,.audit-data{grid-template-columns:1fr}}</style>');
const contentField=(name,value)=>value?'<div><b>'+name+'：</b>'+value+'</div>':'';const actual=(page,key,label,formatter)=>page.after?'<div>'+label+'<b>'+formatter(page.after[key])+' <span class="'+classFor(page.before,page.after,key)+'">('+delta(page.before,page.after,key)+')</span></b></div>':'<div>'+label+'<b class="waiting">等待 3 个完整 GSC 数据日</b></div>';const renderAudit=()=>{const cohort=data.cohorts[select.value||0];const dates='优化：'+cohort.optimizedOn+'；基线：'+cohort.baselineRange.start+' 至 '+cohort.baselineRange.end;const cards=cohort.pages.map(page=>{const before=page.audit?.before??{};const after=page.audit?.after??{};const keywords=after.keywords?.length?after.keywords.join('、'):'未能从提交中提取';const source=page.audit?'<div class="audit-grid"><section class="audit-block"><strong>优化前内容</strong>'+contentField('Title',before.title)+contentField('Description',before.description)+contentField('H1',before.h1)+contentField('摘要',before.dek)+'</section><section class="audit-block"><strong>优化后内容</strong>'+contentField('Title',after.title)+contentField('Description',after.description)+contentField('H1',after.h1)+contentField('摘要',after.dek)+'</section></div>':'<p class="waiting">未找到对应提交中的页面版本。</p>';return '<article class="record"><span class="label">页面</span><h3>'+page.path+'</h3><p><b>搜索意图：</b>'+page.intent+'</p><p><b>覆盖关键词：</b>'+keywords+'</p><p class="audit-meta">'+dates+'</p>'+source+'<p><b>修改位置：</b>'+page.locations+'</p><p><b>为什么这样改：</b>'+page.reason+'</p><div class="audit-data"><div>优化前展示<b>'+formatInt(page.before.impressions)+'</b></div><div>优化前点击<b>'+formatInt(page.before.clicks)+'</b></div><div>预期展示<b>'+formatInt(page.target.impressions)+' (+10%)</b></div><div>预期点击<b>'+formatInt(page.target.clicks)+' (+20%)</b></div><div>预期 CTR<b>'+percent(page.target.ctr)+' ('+((page.target.ctr-page.before.ctr)*100).toFixed(2)+' 个百分点)</b></div><div>预期排名<b>'+page.target.position.toFixed(2)+' (提升 1.00)</b></div>'+actual(page,'impressions','实际展示',formatInt)+actual(page,'clicks','实际点击',formatInt)+actual(page,'ctr','实际 CTR',percent)+actual(page,'position','实际排名',value=>value.toFixed(2))+'</div></article>'}).join('');document.querySelector('#content').insertAdjacentHTML('afterbegin','<section class="records-head"><div><span class="label">本批次优化档案</span><h2>修改记录与效果追踪</h2></div><span>'+cohort.pages.length+' 个页面</span></section><section class="records">'+cards+'</section>')};select.addEventListener('change',renderAudit);renderAudit();
</script></body></html>`;
}

const [config, state] = await Promise.all([readJson(configPath, null), readJson(statePath, { completed: {} })]);
if (!config?.cohorts?.length) throw new Error("No SEO cohorts are configured.");
const data = await dashboardData(config, state);
await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, document(data), "utf8");
await writeFile(publicDataPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
console.log(`SEO dashboard written to ${outputPath}`);

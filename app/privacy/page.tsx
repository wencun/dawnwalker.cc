import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隐私政策 | DawnArchive",
  description: "DawnArchive 非官方粉丝攻略站的隐私政策。",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#080b0c] px-[6vw] py-10 text-[#eee3d1] md:px-[9vw] md:py-16">
      <nav className="mb-16 flex items-center justify-between border-b border-[#c9a66c]/25 pb-6 text-xs text-[#b8ad9f]">
        <a className="font-mono tracking-wider text-[#e8dcc5]" href="/">DAWN<span className="text-[#c9493f]">ARCHIVE</span></a>
        <a className="hover:text-[#ebd4ad]" href="/">返回攻略首页</a>
      </nav>
      <article className="mx-auto max-w-3xl">
        <p className="mb-5 font-mono text-[11px] tracking-[.16em] text-[#d77d70]">PRIVACY NOTICE · 更新于 2026 年 8 月 25 日</p>
        <h1 className="mb-8 text-4xl tracking-[-.06em] md:text-6xl">隐私政策</h1>
        <p className="mb-12 border-l-2 border-[#bd3b35] pl-5 leading-8 text-[#c7beb1]">DawnArchive 是一个非官方的《The Blood of Dawnwalker》粉丝攻略站。我们尽量以最少的数据处理方式提供攻略内容，并在服务方式变化时更新本页。</p>
        <div className="space-y-10 leading-8 text-[#c7beb1]">
          <section><h2 className="mb-3 text-xl text-[#f0e5d3]">1. 当前收集的信息</h2><p>本站目前没有账号注册、评论、联系表单、邮件订阅或付费功能，因此不会主动要求你提供姓名、邮箱或其他个人资料。为保障网站可用性，托管服务商可能在正常提供服务时处理 IP 地址、浏览器类型、设备信息、访问时间及请求日志等技术信息。</p></section>
          <section><h2 className="mb-3 text-xl text-[#f0e5d3]">2. 信息的用途</h2><p>上述技术信息仅可能被用于提供页面、保障安全、防止滥用、排查故障和了解网站的基础运行状况。我们不会出售你的个人信息。</p></section>
          <section><h2 className="mb-3 text-xl text-[#f0e5d3]">3. Cookie、分析与广告</h2><p>本站当前未主动部署广告、受众追踪或第三方分析脚本。若未来启用网站分析、广告、订阅、评论、嵌入式社区内容或其他会处理个人数据的服务，我们会先更新本页，并在适用法律要求时提供相应的通知或同意选项。</p></section>
          <section><h2 className="mb-3 text-xl text-[#f0e5d3]">4. 外部链接</h2><p>攻略可能链接到游戏官网、商店、视频平台、社区或社交媒体。离开本站后，这些网站会依照各自的隐私政策处理信息；请在访问前自行查看其规则。</p></section>
          <section><h2 className="mb-3 text-xl text-[#f0e5d3]">5. 未成年人</h2><p>本站不面向儿童主动收集个人信息。如你认为我们意外收到了未成年人的个人信息，请通过下方反馈渠道联系我们。</p></section>
          <section><h2 className="mb-3 text-xl text-[#f0e5d3]">6. 政策更新与联系</h2><p>本政策可能因站点功能或法规要求而调整，更新日期会显示在页面顶部。如有隐私或内容勘误问题，请在 <a className="text-[#e7c694] underline underline-offset-4" href="https://github.com/wencun/dawnwalker.cc/issues" target="_blank" rel="noreferrer">GitHub Issues</a> 提交反馈。</p></section>
        </div>
      </article>
    </main>
  );
}

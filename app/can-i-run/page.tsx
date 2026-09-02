import type { Metadata } from "next";
import CompatibilityChecker from "./checker";
import { ContentAd } from "../ad-slot";

export const metadata: Metadata = {
  title: "Can I Run The Blood of Dawnwalker? PC Requirements Checker",
  description: "Compare your CPU, GPU, RAM, VRAM and SSD with official The Blood of Dawnwalker PC requirements and system requirements. Compatibility only; not an FPS guarantee.",
  keywords: ["Can I run The Blood of Dawnwalker", "The Blood of Dawnwalker PC requirements", "The Blood of Dawnwalker system requirements", "The Blood of Dawnwalker PC specs"],
  alternates: { canonical: "/can-i-run", languages: { en: "/can-i-run", pl: "/pl/can-i-run", "x-default": "/can-i-run" } },
  openGraph: { title: "Can I Run The Blood of Dawnwalker?", description: "Local-only comparison against official PC requirements.", url: "/can-i-run", images: ["/og.png"] },
};

export default function CanIRunPage() {
  return <main className="doc-shell"><article className="doc tool-doc">
    <p className="eyebrow">PC COMPATIBILITY TOOL · OFFICIAL REQUIREMENTS</p>
    <h1>Can I run The Blood of Dawnwalker? PC requirements checker</h1>
    <p className="doc-dek">Compare your CPU, GPU, RAM, VRAM and SSD against the official The Blood of Dawnwalker system requirements. First check compatibility; then use launch-day tests to judge the FPS and image quality you can expect.</p>
    <p className="checked">Last checked: September 2, 2026 · <span>Official requirements are separate from independent performance testing.</span></p>
    <ContentAd />
    <aside className="reader-next" aria-label="How to use this checker"><p className="eyebrow">USE THIS PAGE IN ORDER</p><h2>Get a useful answer in three steps.</h2><div>
      <a href="#checker"><span>01</span><b>Enter your exact hardware</b><small>Use the model names shown in Windows, not a generic “gaming PC” label.</small></a>
      <a href="#limits"><span>02</span><b>Read what the result means</b><small>Passing the requirements is compatibility evidence, not a 60 FPS promise.</small></a>
      <a href="/review-embargo"><span>03</span><b>Read disclosed PC review tests</b><small>See which hardware, settings and game-version details reviewers actually state.</small></a>
    </div></aside>
    <div id="checker"><CompatibilityChecker /></div>
    <section id="limits"><h2>What the official PC specs do—and do not—promise</h2><div className="fact-grid"><p><b>Official baseline</b>The published PC requirements use upscaling at the <em>Balanced</em> preset.</p><p><b>Not a 60 FPS promise</b>Passing minimum or recommended requirements does not guarantee a locked 60 FPS on your PC.</p><p><b>Not a benchmark</b>The requirements do not publish a full resolution, preset, scene or driver test matrix for every GPU.</p><p><b>Frame Generation</b>Do not assume it is included in the target unless a platform-specific official benchmark says so.</p></div><p className="note">The developer clarified that the published requirements are based on Balanced upscaling. That makes the checker useful for compatibility, but it cannot tell you your exact image quality, native rendering performance or frame rate before independent tests exist.</p></section>
    <section><h2>DLSS, FSR and FPS: quick answers</h2><ul><li><b>Does a recommended-spec result mean stable 60 FPS?</b> No. Resolution, preset, CPU limits, drivers, launch patches and the area being played can all change performance.</li><li><b>Does “Balanced” mean the game will look the same on every GPU?</b> No. Upscaling quality and GPU headroom vary by hardware and by the output resolution you choose.</li><li><b>Does the official sheet confirm Frame Generation?</b> No. It confirms a requirements baseline, not an exhaustive per-setting benchmark. We will only add a Frame Generation recommendation when it is documented in an official source or a reproducible test.</li><li><b>What should I do before buying?</b> Compare your exact CPU, GPU, VRAM, RAM and SSD here; then wait for reviews or launch-day tests that disclose resolution, settings, upscaler mode and patch version.</li></ul></section>
    <section><h2>Source and limitations</h2><p>The publisher lists a Core i5-11400F or Ryzen 7 2700X, 16 GB RAM, GTX 1060 or RX 580 with 6 GB VRAM, 60 GB SSD and Windows 10/DirectX 12 as the minimum. Recommended hardware is a Core i7-11700K or Ryzen 7 5700X, 16 GB RAM, RTX 4060, RX 7600 XT or Arc B580 with 8 GB VRAM, 60 GB SSD and Windows 10/DirectX 12.</p><p>Exact FPS depends on resolution, settings, drivers, patches, upscaling and the full hardware configuration. We will add independent benchmarks only with a source, game version and settings.</p><p><a href="https://www.bandainamcoent.com/games/dawnwalker" target="_blank" rel="noreferrer">Read the official system requirements ↗</a> · <a href="https://www.reddit.com/r/DawnwalkerOfficial/comments/1vroc4l/final_system_requirements/" target="_blank" rel="noreferrer">Read the developer clarification on Balanced upscaling ↗</a></p></section>
  </article><footer><a className="brand" href="/">Dawnwalker <span>Guide</span></a><p>Unofficial fan guide. <a href="/privacy">Privacy</a> · <a href="https://github.com/wencun/dawnwalker.cc/issues" target="_blank" rel="noreferrer">Corrections & feedback</a></p></footer></main>;
}

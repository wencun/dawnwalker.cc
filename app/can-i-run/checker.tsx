"use client";

import { useState } from "react";

type Check = { label: string; value: string; minimum: string; recommended: string; state: "pass" | "fail" | "unknown" };

const clean = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, "");
const matches = (value: string, models: string[]) => models.some((model) => clean(value).includes(clean(model)));

function detectGpu() {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl || !(gl instanceof WebGLRenderingContext)) return "";
    const extension = gl.getExtension("WEBGL_debug_renderer_info");
    return extension ? gl.getParameter(extension.UNMASKED_RENDERER_WEBGL) : "";
  } catch { return ""; }
}

export default function CompatibilityChecker() {
  const [cpu, setCpu] = useState("");
  const [gpu, setGpu] = useState("");
  const [ram, setRam] = useState("");
  const [vram, setVram] = useState("");
  const [storage, setStorage] = useState("");
  const [ssd, setSsd] = useState("unknown");
  const [os, setOs] = useState("unknown");
  const [detected, setDetected] = useState("");
  const [checked, setChecked] = useState(false);

  const check = (value: string, minimum: string[], recommended: string[]): "pass" | "fail" | "unknown" => {
    if (!value.trim()) return "unknown";
    if (matches(value, recommended)) return "pass";
    if (matches(value, minimum)) return "pass";
    return "unknown";
  };
  const numeric = (value: string, minimum: number, recommended: number): "pass" | "fail" | "unknown" => {
    if (!value) return "unknown";
    const number = Number(value);
    return number < minimum ? "fail" : number >= recommended ? "pass" : "pass";
  };
  const checks: Check[] = [
    { label: "CPU", value: cpu || "Not provided", minimum: "Core i5-11400F / Ryzen 7 2700X", recommended: "Core i7-11700K / Ryzen 7 5700X", state: check(cpu, ["i5-11400f", "ryzen 7 2700x"], ["i7-11700k", "ryzen 7 5700x"]) },
    { label: "GPU", value: gpu || "Not provided", minimum: "GTX 1060 / RX 580 (6 GB VRAM)", recommended: "RTX 4060 / RX 7600 XT / Arc B580 (8 GB VRAM)", state: check(gpu, ["gtx 1060", "rx 580"], ["rtx 4060", "rx 7600 xt", "arc b580"]) },
    { label: "Memory", value: ram ? `${ram} GB` : "Not provided", minimum: "16 GB", recommended: "16 GB", state: numeric(ram, 16, 16) },
    { label: "VRAM", value: vram ? `${vram} GB` : "Not provided", minimum: "6 GB", recommended: "8 GB", state: numeric(vram, 6, 8) },
    { label: "Storage", value: storage ? `${storage} GB ${ssd === "yes" ? "SSD" : ssd === "no" ? "HDD" : ""}` : "Not provided", minimum: "60 GB on SSD", recommended: "60 GB on SSD", state: !storage || ssd === "unknown" ? "unknown" : Number(storage) < 60 || ssd === "no" ? "fail" : "pass" },
    { label: "OS", value: os === "unknown" ? "Not provided" : os, minimum: "Windows 10 + DirectX 12", recommended: "Windows 10 + DirectX 12", state: os === "unknown" ? "unknown" : os === "Other" ? "fail" : "pass" },
  ];
  const failed = checks.some((item) => item.state === "fail");
  const unknown = checks.some((item) => item.state === "unknown");
  const result = !checked ? null : failed ? ["Does not meet the stated minimum", "One or more entered requirements are below the official minimum. Check the rows marked below before buying."] : unknown ? ["Comparison incomplete", "Your browser cannot reliably expose every PC component. Add the missing exact model names and numbers for a full official-spec comparison."] : ["Meets the stated minimum", "Your entries meet the publisher's listed minimum. This is not a performance or FPS promise; wait for independent benchmarks for your exact system."];

  function useLocalDetection() {
    const renderer = detectGpu();
    setDetected(renderer ? `Browser-reported GPU: ${renderer}` : "Browser did not expose a GPU model. This is normal in privacy-focused browsers.");
    if (renderer) setGpu(renderer);
    const browserMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    if (typeof browserMemory === "number") setRam(String(browserMemory));
  }

  return <div className="checker"><div className="checker-intro"><div><p className="eyebrow">LOCAL-ONLY CHECK</p><h2>Compare your PC with the official requirements.</h2><p>Nothing is uploaded or saved. A browser can sometimes reveal a graphics renderer, but it cannot reliably read your CPU, storage, installed RAM or real-world performance.</p></div><button className="detect-button" onClick={useLocalDetection}>Detect browser-visible hardware</button></div>{detected && <p className="detected">{detected}</p>}
    <div className="checker-fields"><label>CPU<input value={cpu} onChange={(event) => setCpu(event.target.value)} placeholder="Example: Ryzen 5 5600X" /></label><label>GPU<input value={gpu} onChange={(event) => setGpu(event.target.value)} placeholder="Example: RTX 4060" /></label><label>Installed RAM (GB)<input type="number" min="1" value={ram} onChange={(event) => setRam(event.target.value)} placeholder="16" /></label><label>GPU VRAM (GB)<input type="number" min="1" value={vram} onChange={(event) => setVram(event.target.value)} placeholder="8" /></label><label>Free storage (GB)<input type="number" min="1" value={storage} onChange={(event) => setStorage(event.target.value)} placeholder="60" /></label><label>Storage type<select value={ssd} onChange={(event) => setSsd(event.target.value)}><option value="unknown">I don't know</option><option value="yes">SSD</option><option value="no">HDD only</option></select></label><label>Operating system<select value={os} onChange={(event) => setOs(event.target.value)}><option value="unknown">I don't know</option><option value="Windows 10">Windows 10</option><option value="Windows 11">Windows 11</option><option value="Other">Other</option></select></label></div><button className="primary compare-button" onClick={() => setChecked(true)}>Compare official requirements</button>
    {result && <section className={`check-result ${failed ? "warning" : ""}`}><p className="eyebrow">RESULT</p><h3>{result[0]}</h3><p>{result[1]}</p></section>}
    {checked && <div className="check-table">{checks.map((item) => <div key={item.label} className="check-row"><span className={`status ${item.state}`}>{item.state === "pass" ? "✓" : item.state === "fail" ? "!" : "?"}</span><div><b>{item.label}</b><small>Your entry: {item.value}</small></div><p><strong>Minimum</strong>{item.minimum}<br/><strong>Recommended</strong>{item.recommended}</p></div>)}</div>}
  </div>;
}

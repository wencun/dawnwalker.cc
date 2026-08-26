"use client";

import { useEffect, useState } from "react";
import { useAdConsent } from "./ad-consent";

type Unit = { key: string; width: number; height: number };

const units = {
  mobile: { key: "5aaba314fde053601f466656789e427e", width: 320, height: 50 },
  rectangle: { key: "8613f0fda70bbca87c39de32c63f5980", width: 300, height: 250 },
  leaderboard: { key: "2e3058c827b1327717a77c750c89ade9", width: 728, height: 90 },
} satisfies Record<string, Unit>;

function AdFrame({ unit }: { unit: Unit }) {
  const consent = useAdConsent();
  const source = `<!doctype html><html><head><base target="_blank"></head><body style="margin:0;overflow:hidden"><script>var atOptions=${JSON.stringify({ key: unit.key, format: "iframe", height: unit.height, width: unit.width, params: {} })};</script><script src="https://www.highrevenueformat.com/${unit.key}/invoke.js"></script></body></html>`;

  if (consent !== "accepted") return null;
  return <iframe title="Advertisement" className="ad-frame" width={unit.width} height={unit.height} srcDoc={source} sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox" referrerPolicy="strict-origin-when-cross-origin" />;
}

function AdLabel() {
  return <span className="ad-label">ADVERTISEMENT</span>;
}

export function TopAd() {
  const consent = useAdConsent();
  const [compact, setCompact] = useState<boolean | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 759px)");
    const update = () => setCompact(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  if (consent !== "accepted" || compact === null) return null;
  return <aside className="ad-slot ad-slot-top"><AdLabel /><AdFrame unit={compact ? units.mobile : units.leaderboard} /></aside>;
}

export function MiddleAd() {
  const consent = useAdConsent();
  if (consent !== "accepted") return null;
  return <aside className="ad-slot ad-slot-middle"><AdLabel /><AdFrame unit={units.rectangle} /></aside>;
}

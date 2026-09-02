"use client";

import { useEffect, useRef, useState } from "react";
import { useAdConsent } from "./ad-consent";

type Unit = { key: string; width: number; height: number };

const units = {
  mobile: { key: "5aaba314fde053601f466656789e427e", width: 320, height: 50 },
  rectangle: { key: "8613f0fda70bbca87c39de32c63f5980", width: 300, height: 250 },
  leaderboard: { key: "2e3058c827b1327717a77c750c89ade9", width: 728, height: 90 },
} satisfies Record<string, Unit>;

function AdFrame({ unit }: { unit: Unit }) {
  const consent = useAdConsent();
  const hostRef = useRef<HTMLDivElement>(null);
  const [nearViewport, setNearViewport] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (consent !== "accepted" || !host || nearViewport) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNearViewport(true);
        observer.disconnect();
      }
    }, { rootMargin: "500px 0px" });
    observer.observe(host);
    return () => observer.disconnect();
  }, [consent, nearViewport]);

  useEffect(() => {
    const host = hostRef.current;
    if (consent !== "accepted" || !nearViewport || !host) return;

    // Third-party ad scripts are intentionally deferred. They must never compete
    // with the document, font and hero image during a mobile visitor's first paint.
    const loadAd = () => {
      host.replaceChildren();
      const options = document.createElement("script");
      options.text = `var atOptions = ${JSON.stringify({ key: unit.key, format: "iframe", height: unit.height, width: unit.width, params: {} })};`;
      const adScript = document.createElement("script");
      adScript.src = `https://www.highrevenueformat.com/${unit.key}/invoke.js`;
      adScript.async = false;
      host.append(options, adScript);
    };
    // The ad is intentionally kept out of the critical rendering window. On a
    // phone this slot can be close to the first screen, but the third-party
    // iframe must never contend with the navigation, answer and hero image.
    const timeout = window.setTimeout(() => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(loadAd, { timeout: 3500 });
      } else {
        loadAd();
      }
    }, 5000);
    return () => { window.clearTimeout(timeout); host.replaceChildren(); };
  }, [consent, nearViewport, unit]);

  if (consent !== "accepted") return null;
  return <div ref={hostRef} className="ad-frame" style={{ width: unit.width, height: unit.height }} aria-label="Advertisement" />;
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
  const [compact, setCompact] = useState<boolean | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 759px)");
    const update = () => setCompact(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  if (consent !== "accepted" || compact === null) return null;
  return <aside className="ad-slot ad-slot-middle"><AdLabel /><AdFrame unit={compact ? units.mobile : units.leaderboard} /></aside>;
}

// Kept separate from the header ad: this unit belongs immediately after the
// page's opening answer, where it is visible without delaying the answer.
export function ContentAd() {
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
  return <aside className="ad-slot ad-slot-content"><AdLabel /><AdFrame unit={compact ? units.mobile : units.leaderboard} /></aside>;
}

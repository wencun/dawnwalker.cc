"use client";

import { useEffect, useRef, useState } from "react";
import { useAdConsent } from "./ad-consent";

type Unit = { key: string; width: number; height: number };

const units = {
  mobile: { key: "5aaba314fde053601f466656789e427e", width: 320, height: 50 },
  rectangle: { key: "8613f0fda70bbca87c39de32c63f5980", width: 300, height: 250 },
  leaderboard: { key: "2e3058c827b1327717a77c750c89ade9", width: 728, height: 90 },
  rail: { key: "e8790d6d483b7a56fb1a4de75931fe50", width: 160, height: 600 },
} satisfies Record<string, Unit>;

const nativeUnit = {
  containerId: "container-278334cfa83cd5121dbb0c49b86a4a7e",
  src: "https://pl31150408.profitableratecpmnetwork.com/278334cfa83cd5121dbb0c49b86a4a7e/invoke.js",
};

function trackAdRequest(slot: string, format: "display" | "native") {
  window.gtag?.("event", "ad_slot_requested", { ad_format: format, ad_slot: slot });
}

function AdFrame({ unit, eager = false }: { unit: Unit; eager?: boolean }) {
  const consent = useAdConsent();
  const hostRef = useRef<HTMLDivElement>(null);
  const [nearViewport, setNearViewport] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (consent !== "accepted" || !host || nearViewport || eager) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNearViewport(true);
        observer.disconnect();
      }
    }, { rootMargin: "500px 0px" });
    observer.observe(host);
    return () => observer.disconnect();
  }, [consent, eager, nearViewport]);

  useEffect(() => {
    const host = hostRef.current;
    if (consent !== "accepted" || (!eager && !nearViewport) || !host) return;

    const loadAd = () => {
      host.replaceChildren();
      const options = document.createElement("script");
      options.text = `var atOptions = ${JSON.stringify({ key: unit.key, format: "iframe", height: unit.height, width: unit.width, params: {} })};`;
      const adScript = document.createElement("script");
      adScript.src = `https://www.highrevenueformat.com/${unit.key}/invoke.js`;
      adScript.async = false;
      host.append(options, adScript);
      trackAdRequest(`${unit.width}x${unit.height}`, "display");
    };
    // A visible header slot may request immediately after consent. All other
    // slots still wait until they approach the viewport, then use a short delay
    // so answer-first visitors can generate a viewable impression.
    const timeout = window.setTimeout(loadAd, eager ? 0 : 1200);
    return () => { window.clearTimeout(timeout); host.replaceChildren(); };
  }, [consent, eager, nearViewport, unit]);

  if (consent !== "accepted") return null;
  return <div ref={hostRef} className="ad-frame" style={{ width: unit.width, height: unit.height }} aria-label="Advertisement" />;
}

function AdLabel() {
  return <span className="ad-label">ADVERTISEMENT</span>;
}

function NativeAdFrame() {
  const consent = useAdConsent();
  const hostRef = useRef<HTMLDivElement>(null);
  const [nearViewport, setNearViewport] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (consent !== "accepted" || !host || nearViewport) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNearViewport(true);
        observer.disconnect();
      }
    }, { rootMargin: "600px 0px" });
    observer.observe(host);
    return () => observer.disconnect();
  }, [consent, nearViewport]);

  useEffect(() => {
    const host = hostRef.current;
    if (consent !== "accepted" || !nearViewport || !host || failed) return;

    const loadAd = () => {
      host.replaceChildren();
      const container = document.createElement("div");
      container.id = nativeUnit.containerId;
      const script = document.createElement("script");
      script.async = true;
      script.dataset.cfasync = "false";
      script.src = nativeUnit.src;
      script.onerror = () => setFailed(true);
      host.append(container, script);
      trackAdRequest("native-content", "native");
    };
    let idleId: number | undefined;
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(loadAd, { timeout: 1800 });
    } else {
      loadAd();
    }
    return () => {
      if (idleId !== undefined && "cancelIdleCallback" in window) window.cancelIdleCallback(idleId);
      host.replaceChildren();
    };
  }, [consent, failed, nearViewport]);

  if (consent !== "accepted" || failed) return null;
  return <div ref={hostRef} className="ad-native-frame" aria-label="Advertisement" />;
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
  return <aside className="ad-slot ad-slot-top"><AdLabel /><AdFrame unit={compact ? units.mobile : units.leaderboard} eager /></aside>;
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

// A single rail is reserved for very wide desktop viewports only. It never
// appears on mobile or typical laptop widths, where it would compete with the
// guide content rather than add a genuinely viewable placement.
export function DesktopRailAd() {
  const consent = useAdConsent();
  const [wideDesktop, setWideDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1900px)");
    const update = () => setWideDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  if (consent !== "accepted" || !wideDesktop) return null;
  return <aside className="ad-slot ad-slot-rail"><AdLabel /><AdFrame unit={units.rail} /></aside>;
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

// Native inventory gets more room than a fixed banner, so it belongs between
// substantial guide sections rather than beside the opening answer.
export function NativeContentAd() {
  const consent = useAdConsent();
  if (consent !== "accepted") return null;
  return <aside className="ad-slot ad-slot-native"><AdLabel /><NativeAdFrame /></aside>;
}

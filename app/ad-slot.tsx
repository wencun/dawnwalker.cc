"use client";

import { useEffect, useRef, useState } from "react";
import { useAdConsent } from "./ad-consent";

const nativeUnit = {
  containerId: "container-278334cfa83cd5121dbb0c49b86a4a7e",
  src: "https://pl31150408.profitableratecpmnetwork.com/278334cfa83cd5121dbb0c49b86a4a7e/invoke.js",
};

const popunderUnit = {
  scriptId: "adsterra-popunder",
  src: "https://pl31243884.profitableratecpmnetwork.com/6d/d8/a7/6dd8a759aa5970fc5c793dee1d0276d8.js",
};

const socialBarUnit = {
  scriptId: "adsterra-social-bar",
  src: "https://pl31243885.profitableratecpmnetwork.com/c1/0b/a0/c10ba0ad65df0cc63662c9743af2a3e0.js",
};

type AdFormat = "native" | "popunder" | "social-bar";

function trackAdEvent(event: string, slot: string, format: AdFormat) {
  window.gtag?.("event", event, { ad_format: format, ad_slot: slot });
}

function AdLabel() {
  return <span className="ad-label">ADVERTISEMENT</span>;
}

function NativeAdFrame() {
  const consent = useAdConsent();
  const hostRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (consent !== "accepted" || !host || failed) return;

    let inspectionTimer: number | undefined;

    const loadAd = () => {
      host.replaceChildren();
      const container = document.createElement("div");
      container.id = nativeUnit.containerId;
      const script = document.createElement("script");
      script.async = true;
      script.dataset.cfasync = "false";
      script.src = nativeUnit.src;
      script.onload = () => {
        trackAdEvent("ad_slot_script_loaded", "native-content", "native");
        inspectionTimer = window.setTimeout(() => {
          trackAdEvent(host.querySelector("iframe") ? "ad_slot_rendered" : "ad_slot_empty", "native-content", "native");
        }, 1500);
      };
      script.onerror = () => {
        trackAdEvent("ad_slot_load_error", "native-content", "native");
        setFailed(true);
      };
      host.append(container, script);
      trackAdEvent("ad_slot_requested", "native-content", "native");
    };
    // Native inventory is requested immediately after advertising consent.
    loadAd();
    return () => {
      if (inspectionTimer) window.clearTimeout(inspectionTimer);
      host.replaceChildren();
    };
  }, [consent, failed]);

  if (consent !== "accepted" || failed) return null;
  return <div ref={hostRef} className="ad-native-frame" aria-label="Advertisement" />;
}

// Popunder has no visual placement in the document. It is loaded once from
// the root layout, after the visitor has accepted advertising cookies, so it
// cannot occupy or shift reading content on either mobile or desktop.
export function PopunderAd() {
  const consent = useAdConsent();

  useEffect(() => {
    if (consent !== "accepted" || document.getElementById(popunderUnit.scriptId)) return;

    const script = document.createElement("script");
    script.id = popunderUnit.scriptId;
    script.async = true;
    script.src = popunderUnit.src;
    script.onload = () => trackAdEvent("ad_slot_script_loaded", "popunder", "popunder");
    script.onerror = () => trackAdEvent("ad_slot_load_error", "popunder", "popunder");
    document.head.append(script);
    trackAdEvent("ad_slot_requested", "popunder", "popunder");
  }, [consent]);

  return null;
}

// Social Bar is a provider-managed overlay. The tag belongs at the end of the
// document body and is loaded once only after advertising consent is granted.
export function SocialBarAd() {
  const consent = useAdConsent();

  useEffect(() => {
    if (consent !== "accepted" || document.getElementById(socialBarUnit.scriptId)) return;

    const script = document.createElement("script");
    script.id = socialBarUnit.scriptId;
    script.async = true;
    script.src = socialBarUnit.src;
    script.onload = () => trackAdEvent("ad_slot_script_loaded", "social-bar", "social-bar");
    script.onerror = () => trackAdEvent("ad_slot_load_error", "social-bar", "social-bar");
    document.body.append(script);
    trackAdEvent("ad_slot_requested", "social-bar", "social-bar");
  }, [consent]);

  return null;
}

// The sole NativeBanner is placed directly below the site navigation by the
// root layout, and loads as soon as advertising consent is granted.
export function TopNativeAd() {
  const consent = useAdConsent();
  if (consent !== "accepted") return null;
  return <aside className="ad-slot ad-slot-content"><AdLabel /><NativeAdFrame /></aside>;
}

// Existing templates still render this component, but the one global top slot
// above owns the NativeBanner so pages cannot request duplicate inventory.
export function ContentAd() {
  return null;
}

export function NativeContentAd() {
  return null;
}

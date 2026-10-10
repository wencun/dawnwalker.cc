"use client";

import { useEffect, useRef, useState } from "react";
import { useAdConsent } from "./ad-consent";

const topNativeUnit = {
  containerId: "container-278334cfa83cd5121dbb0c49b86a4a7e",
  src: "https://pl31150408.profitableratecpmnetwork.com/278334cfa83cd5121dbb0c49b86a4a7e/invoke.js",
};

const contentNativeUnit = {
  containerId: "container-87348b474a60f027559bf4acbcc21036",
  src: "https://cheflobesofficer.com/87348b474a60f027559bf4acbcc21036/invoke.js",
};

const socialBarUnit = {
  scriptId: "adsterra-social-bar",
  src: "https://pl31243885.profitableratecpmnetwork.com/c1/0b/a0/c10ba0ad65df0cc63662c9743af2a3e0.js",
};

type AdFormat = "native" | "social-bar";

function trackAdEvent(event: string, slot: string, format: AdFormat) {
  window.gtag?.("event", event, { ad_format: format, ad_slot: slot });
}

function AdLabel() {
  return <span className="ad-label">ADVERTISEMENT</span>;
}

function NativeAdFrame({ unit, slot }: { unit: typeof topNativeUnit; slot: string }) {
  const consent = useAdConsent();
  const hostRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (consent !== "accepted" || !host || failed) return;

    let inspectionTimer: number | undefined;
    const mobileQuery = window.matchMedia("(max-width: 759px)");
    const keepOnlyFirstMobileCreative = () => {
      if (!mobileQuery.matches) return;

      const container = host.querySelector(`#${unit.containerId}`);
      if (!container) return;

      // Native inventory can return several sibling cards in a single slot.
      // Keep the first card on phones; desktop retains the provider's layout.
      const cards = Array.from(container.children).filter((child): child is HTMLElement => (
        child instanceof HTMLElement && child.tagName !== "SCRIPT" && child.tagName !== "STYLE"
      ));
      cards.slice(1).forEach((card) => card.style.setProperty("display", "none", "important"));
    };
    const mobileCreativeObserver = new MutationObserver(keepOnlyFirstMobileCreative);

    const loadAd = () => {
      host.replaceChildren();
      const container = document.createElement("div");
      container.id = unit.containerId;
      const script = document.createElement("script");
      script.async = true;
      script.dataset.cfasync = "false";
      script.src = unit.src;
      script.onload = () => {
        mobileCreativeObserver.observe(container, { childList: true });
        mobileQuery.addEventListener("change", keepOnlyFirstMobileCreative);
        trackAdEvent("ad_slot_script_loaded", slot, "native");
        inspectionTimer = window.setTimeout(() => {
          keepOnlyFirstMobileCreative();
          trackAdEvent(host.querySelector("iframe") ? "ad_slot_rendered" : "ad_slot_empty", slot, "native");
        }, 1500);
      };
      script.onerror = () => {
        trackAdEvent("ad_slot_load_error", slot, "native");
        setFailed(true);
      };
      host.append(container, script);
      trackAdEvent("ad_slot_requested", slot, "native");
    };
    // Native inventory is requested immediately after advertising consent.
    loadAd();
    return () => {
      if (inspectionTimer) window.clearTimeout(inspectionTimer);
      mobileCreativeObserver.disconnect();
      mobileQuery.removeEventListener("change", keepOnlyFirstMobileCreative);
      host.replaceChildren();
    };
  }, [consent, failed, slot, unit]);

  if (consent !== "accepted" || failed) return null;
  return <div ref={hostRef} className="ad-native-frame" aria-label="Advertisement" />;
}

// Social Bar is a provider-managed overlay. The tag belongs at the end of the
// document body and is loaded once only after advertising consent is granted.
export function SocialBarAd() {
  const consent = useAdConsent();

  useEffect(() => {
    if (consent !== "accepted" || document.getElementById(socialBarUnit.scriptId)) return;

    const timer = window.setTimeout(() => {
      if (document.getElementById(socialBarUnit.scriptId)) return;
      const script = document.createElement("script");
      script.id = socialBarUnit.scriptId;
      script.async = true;
      script.src = socialBarUnit.src;
      script.onload = () => trackAdEvent("ad_slot_script_loaded", "social-bar", "social-bar");
      script.onerror = () => trackAdEvent("ad_slot_load_error", "social-bar", "social-bar");
      document.body.append(script);
      trackAdEvent("ad_slot_requested", "social-bar", "social-bar");
    }, 1500);

    return () => window.clearTimeout(timer);
  }, [consent]);

  return null;
}

// The sole NativeBanner is placed directly below the site navigation by the
// root layout, and loads as soon as advertising consent is granted.
export function TopNativeAd() {
  const consent = useAdConsent();
  if (consent !== "accepted") return null;
  return <aside className="ad-slot ad-slot-content"><AdLabel /><NativeAdFrame unit={topNativeUnit} slot="native-top" /></aside>;
}

// Header placements remain in templates for layout consistency, but the 1:1
// unit is intentionally requested only from the in-content placement below.
export function ContentAd() {
  return null;
}

export function NativeContentAd() {
  const consent = useAdConsent();
  if (consent !== "accepted") return null;
  return <aside className="ad-slot ad-slot-native"><AdLabel /><NativeAdFrame unit={contentNativeUnit} slot="native-content" /></aside>;
}

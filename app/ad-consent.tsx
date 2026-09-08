"use client";

import Link from "next/link";
import { createContext, useContext, useSyncExternalStore } from "react";

type Consent = "loading" | "accepted" | "declined";
type ConsentContextValue = { consent: Consent; choose: (value: Exclude<Consent, "loading">) => void };

declare global {
  interface Window {
    gtag?: (command: "event", event: string, parameters?: Record<string, string>) => void;
  }
}

const AdConsentContext = createContext<ConsentContextValue>({ consent: "loading", choose: () => undefined });
const storageKey = "dawnarchive-ad-consent";
const consentEvent = "dawnarchive-ad-consent-change";
const regionalConsentCookie = "dawnwalker-ad-consent-required";

function requiresRegionalConsent() {
  return !document.cookie.split("; ").includes(`${regionalConsentCookie}=0`);
}

function readConsent(): Consent {
  if (!requiresRegionalConsent()) return "accepted";
  const saved = window.localStorage.getItem(storageKey);
  return saved === "accepted" || saved === "declined" ? saved : "loading";
}

function subscribeToConsent(listener: () => void) {
  window.addEventListener(consentEvent, listener);
  window.addEventListener("storage", listener);
  return () => {
    window.removeEventListener(consentEvent, listener);
    window.removeEventListener("storage", listener);
  };
}

export function AdConsentProvider({ children }: { children: React.ReactNode }) {
  const consent = useSyncExternalStore<Consent>(subscribeToConsent, readConsent, () => "loading");

  function choose(value: Exclude<Consent, "loading">) {
    window.localStorage.setItem(storageKey, value);
    window.gtag?.("event", "ad_consent_choice", { choice: value });
    window.dispatchEvent(new Event(consentEvent));
  }

  return <AdConsentContext.Provider value={{ consent, choose }}>
    {children}
    {consent === "loading" && <aside className="ad-consent" aria-label="Advertising cookie choice"><p>We use Adsterra Native, popunder and Social Bar advertising. It may load third-party advertising cookies and pixels.</p><div><button onClick={() => choose("accepted")}>Accept advertising cookies</button><button className="ad-consent-decline" onClick={() => choose("declined")}>Continue without third-party ads</button></div><Link href="/privacy">Privacy policy</Link></aside>}
  </AdConsentContext.Provider>;
}

export function useAdConsent() {
  return useContext(AdConsentContext).consent;
}

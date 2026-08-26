"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Consent = "loading" | "accepted" | "declined";
type ConsentContextValue = { consent: Consent; choose: (value: Exclude<Consent, "loading">) => void };

const AdConsentContext = createContext<ConsentContextValue>({ consent: "loading", choose: () => undefined });
const storageKey = "dawnarchive-ad-consent";

export function AdConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<Consent>("loading");

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    setConsent(saved === "accepted" || saved === "declined" ? saved : "loading");
  }, []);

  function choose(value: Exclude<Consent, "loading">) {
    window.localStorage.setItem(storageKey, value);
    setConsent(value);
  }

  return <AdConsentContext.Provider value={{ consent, choose }}>
    {children}
    {consent === "loading" && <aside className="ad-consent" aria-label="Advertising cookie choice"><p>We use Adsterra display advertising. It may load third-party advertising cookies and pixels.</p><div><button onClick={() => choose("accepted")}>Accept advertising cookies</button><button className="ad-consent-decline" onClick={() => choose("declined")}>Continue without ads</button></div><a href="/privacy">Privacy policy</a></aside>}
  </AdConsentContext.Provider>;
}

export function useAdConsent() {
  return useContext(AdConsentContext).consent;
}

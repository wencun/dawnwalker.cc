"use client";

import { useEffect } from "react";
import { useAdConsent } from "./ad-consent";

const scriptId = "adsense-loader";

export function AdsenseLoader() {
  const consent = useAdConsent();

  useEffect(() => {
    if (consent !== "accepted" || document.getElementById(scriptId)) return;

    const load = () => {
      if (document.getElementById(scriptId)) return;
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4539826019899948";
      document.head.appendChild(script);
    };

    // A browser may consider a partially loaded mobile page "idle" far too
    // early. Wait until the content is visible first, then use a genuine idle
    // period to load the optional AdSense library.
    const timeout = window.setTimeout(() => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(load, { timeout: 3500 });
      } else {
        load();
      }
    }, 6500);
    return () => {
      window.clearTimeout(timeout);
    };
  }, [consent]);

  return null;
}

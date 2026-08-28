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

    const idle = window.requestIdleCallback?.(load, { timeout: 6000 });
    const timeout = idle === undefined ? window.setTimeout(load, 4000) : undefined;
    return () => {
      if (idle !== undefined) window.cancelIdleCallback?.(idle);
      if (timeout !== undefined) window.clearTimeout(timeout);
    };
  }, [consent]);

  return null;
}

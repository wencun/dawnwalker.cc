"use client";

import Link from "next/link";
import { useEffect, type MouseEvent } from "react";
import { usePathname } from "next/navigation";

const languages = [
  { code: "en", label: "English" },
  { code: "pl", label: "Polski" },
  { code: "ru", label: "Русский" },
] as const;

// Only route visitors to localized pages that have a real, localized answer.
// Everything else returns to that language's home instead of a thin fallback page.
const translatedPaths = {
  en: new Set(["/", "/release-date", "/console-performance", "/can-i-run", "/editions", "/time-system", "/known-issues", "/gameplay", "/review-embargo"]),
  pl: new Set(["/", "/release-date", "/console-performance", "/can-i-run", "/review-embargo"]),
  ru: new Set(["/", "/release-date", "/console-performance", "/can-i-run", "/review-embargo"]),
} as const;

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const match = languages.find(({ code }) => pathname === `/${code}` || pathname.startsWith(`/${code}/`));
  const current = match?.code || "en";
  const currentPath = match ? pathname.slice(match.code.length + 1) || "/" : pathname;
  const href = (code: keyof typeof translatedPaths) => {
    const destination = translatedPaths[code].has(currentPath) ? currentPath : "/";
    return code === "en" ? destination : destination === "/" ? `/${code}` : `/${code}${destination}`;
  };

  useEffect(() => {
    document.documentElement.dataset.locale = current;
    return () => { delete document.documentElement.dataset.locale; };
  }, [current]);

  const closeMenu = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.closest("details")?.removeAttribute("open");
  };

  return <details className="language-switcher">
    <summary aria-label="Choose language"><span aria-hidden="true">◎</span>{languages.find((item) => item.code === current)?.label}</summary>
    <div role="menu" aria-label="Languages">
      {languages.map((language) => <Link key={language.code} href={href(language.code)} prefetch={false} onClick={closeMenu} lang={language.code} aria-current={language.code === current ? "page" : undefined}>{language.label}</Link>)}
    </div>
  </details>;
}

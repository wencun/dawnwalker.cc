"use client";

import { usePathname } from "next/navigation";

const languages = [
  { code: "en", label: "English" },
  { code: "pl", label: "Polski" },
  { code: "ru", label: "Русский" },
  { code: "cs", label: "Čeština" },
] as const;

const translatedPaths = new Set(["/", "/release-date", "/release-times", "/console-performance"]);

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const match = languages.find(({ code }) => pathname === `/${code}` || pathname.startsWith(`/${code}/`));
  const current = match?.code || "en";
  const currentPath = match ? pathname.slice(match.code.length + 1) || "/" : pathname;
  const path = translatedPaths.has(currentPath) ? currentPath : "/";
  const href = (code: string) => code === "en" ? path : path === "/" ? `/${code}` : `/${code}${path}`;

  return <details className="language-switcher">
    <summary aria-label="Choose language"><span aria-hidden="true">◎</span>{languages.find((item) => item.code === current)?.label}</summary>
    <div role="menu" aria-label="Languages">
      {languages.map((language) => <a key={language.code} href={href(language.code)} lang={language.code} aria-current={language.code === current ? "page" : undefined}>{language.label}</a>)}
    </div>
  </details>;
}

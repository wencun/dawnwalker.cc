"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const languages = [
  { code: "en", label: "English" },
  { code: "pl", label: "Polski" },
  { code: "ru", label: "Русский" },
  { code: "cs", label: "Čeština" },
] as const;

const translatedPaths = new Set(["/", "/release-date", "/console-performance"]);
const navigation = {
  pl: [["Data premiery", "release-date"], ["Czy uruchomię?", "can-i-run"], ["Konsole", "console-performance"], ["Edycje", "editions"], ["System czasu", "time-system"], ["Znane problemy", "known-issues"]],
  ru: [["Дата выхода", "release-date"], ["Запустится ли?", "can-i-run"], ["Консоли", "console-performance"], ["Издания", "editions"], ["Система времени", "time-system"], ["Проблемы", "known-issues"]],
  cs: [["Datum vydání", "release-date"], ["Spustím hru?", "can-i-run"], ["Konzole", "console-performance"], ["Edice", "editions"], ["Systém času", "time-system"], ["Známé problémy", "known-issues"]],
} as const;

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const match = languages.find(({ code }) => pathname === `/${code}` || pathname.startsWith(`/${code}/`));
  const current = match?.code || "en";
  const currentPath = match ? pathname.slice(match.code.length + 1) || "/" : pathname;
  const path = translatedPaths.has(currentPath) ? currentPath : "/";
  const href = (code: string) => code === "en" ? path : path === "/" ? `/${code}` : `/${code}${path}`;

  useEffect(() => {
    document.documentElement.dataset.locale = current;
    return () => { delete document.documentElement.dataset.locale; };
  }, [current]);

  return <><details className="language-switcher">
    <summary aria-label="Choose language"><span aria-hidden="true">◎</span>{languages.find((item) => item.code === current)?.label}</summary>
    <div role="menu" aria-label="Languages">
      {languages.map((language) => <a key={language.code} href={href(language.code)} lang={language.code} aria-current={language.code === current ? "page" : undefined}>{language.label}</a>)}
    </div>
  </details>{current !== "en" && <nav className="locale-links">{navigation[current].map(([label, topic]) => <a key={topic} href={`/${current}/${topic}`}>{label}</a>)}</nav>}</>;
}

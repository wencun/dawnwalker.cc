"use client";

import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./language-switcher";

type Locale = "en" | "pl" | "ru";

const navigation: Record<Locale, { href: string; label: string }[]> = {
  en: [
    { href: "/release-date", label: "Release date" },
    { href: "/review-embargo", label: "Reviews" },
    { href: "/can-i-run", label: "Can I run it?" },
    { href: "/console-performance", label: "Performance" },
    { href: "/editions", label: "Editions" },
    { href: "/time-system", label: "Time system" },
    { href: "/known-issues", label: "Issue tracker" },
  ],
  pl: [
    { href: "/pl/release-date", label: "Data premiery" },
    { href: "/pl/can-i-run", label: "Czy uruchomię?" },
    { href: "/pl/console-performance", label: "Konsole" },
    { href: "/pl/editions", label: "Edycje" },
    { href: "/pl/time-system", label: "System czasu" },
    { href: "/pl/known-issues", label: "Znane problemy" },
  ],
  ru: [
    { href: "/ru/release-date", label: "Дата выхода" },
    { href: "/ru/can-i-run", label: "Запустится ли?" },
    { href: "/ru/console-performance", label: "Консоли" },
    { href: "/ru/editions", label: "Издания" },
    { href: "/ru/time-system", label: "Система времени" },
    { href: "/ru/known-issues", label: "Известные проблемы" },
  ],
};

export function SiteNav() {
  const pathname = usePathname() || "/";
  const locale: Locale = pathname === "/pl" || pathname.startsWith("/pl/") ? "pl" : pathname === "/ru" || pathname.startsWith("/ru/") ? "ru" : "en";
  const home = locale === "en" ? "/" : `/${locale}`;
  const subtitle = locale === "en" ? "UNOFFICIAL FAN GUIDE" : locale === "pl" ? "NIEOFICJALNY PORADNIK FANOWSKI" : "НЕОФИЦИАЛЬНЫЙ ФАН-ГИД";

  return <nav className="site-nav" aria-label="Main navigation">
    <a className="brand" href={home}>DAWNWALKER <span>GUIDE</span><small>{subtitle}</small></a>
    <div className="site-nav-links">
      {navigation[locale].map((item) => {
        const active = pathname === item.href;
        return <a key={item.href} href={item.href} className={active ? "active" : undefined} aria-current={active ? "page" : undefined}>{item.label}</a>;
      })}
    </div>
    <LanguageSwitcher />
  </nav>;
}

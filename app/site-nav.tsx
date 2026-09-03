"use client";

import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { LanguageSwitcher } from "./language-switcher";

type Locale = "en" | "pl" | "ru";
type NavLink = { href: string; label: string };
type NavGroup = { label: string; items: NavLink[] };
type Navigation = { primary: NavLink[]; groups: NavGroup[] };

const navigation: Record<Locale, Navigation> = {
  en: {
    primary: [
      { href: "/walkthrough", label: "Walkthrough" },
      { href: "/mods", label: "Mods" },
    ],
    groups: [
      { label: "Launch help", items: [
        { href: "/can-i-run", label: "Can I run?" },
        { href: "/controller-movement-fix", label: "Controller fix" },
        { href: "/known-issues", label: "Known issues" },
        { href: "/console-performance", label: "Console performance" },
      ] },
      { label: "Quest answers", items: [
        { href: "/prologue-quest-order", label: "Prologue quest order" },
        { href: "/how-many-spoonfuls-of-herbs", label: "Herbs recipe for Esme" },
      ] },
      { label: "Game guide", items: [
        { href: "/release-date", label: "Release date" },
        { href: "/platforms", label: "Platforms" },
        { href: "/gameplay", label: "Gameplay" },
        { href: "/time-system", label: "Time system" },
        { href: "/editions", label: "Editions" },
        { href: "/romance", label: "Romance options" },
        { href: "/how-long-to-beat", label: "How long to beat" },
        { href: "/review-embargo", label: "Reviews" },
      ] },
    ],
  },
  pl: {
    primary: [
      { href: "/pl/review-embargo", label: "Recenzje" },
      { href: "/pl/can-i-run", label: "Czy uruchomię?" },
    ],
    groups: [
      { label: "Pomoc", items: [
        { href: "/pl/known-issues", label: "Znane problemy" },
        { href: "/pl/console-performance", label: "Konsole" },
      ] },
      { label: "Przewodnik", items: [
        { href: "/pl/release-date", label: "Data premiery" },
        { href: "/pl/platforms", label: "Platformy" },
        { href: "/pl/gameplay", label: "Rozgrywka" },
        { href: "/pl/time-system", label: "System czasu" },
        { href: "/pl/editions", label: "Edycje" },
      ] },
    ],
  },
  ru: {
    primary: [
      { href: "/ru/review-embargo", label: "Обзоры" },
      { href: "/ru/can-i-run", label: "Запустится ли?" },
    ],
    groups: [
      { label: "Помощь", items: [
        { href: "/ru/known-issues", label: "Известные проблемы" },
        { href: "/ru/console-performance", label: "Консоли" },
      ] },
      { label: "Гид по игре", items: [
        { href: "/ru/russian-language", label: "Русский язык" },
        { href: "/ru/release-date", label: "Дата выхода" },
        { href: "/ru/platforms", label: "Платформы" },
        { href: "/ru/gameplay", label: "Геймплей" },
        { href: "/ru/time-system", label: "Система времени" },
        { href: "/ru/editions", label: "Издания" },
      ] },
    ],
  },
};

export function SiteNav() {
  const pathname = usePathname() || "/";
  const locale: Locale = pathname === "/pl" || pathname.startsWith("/pl/") ? "pl" : pathname === "/ru" || pathname.startsWith("/ru/") ? "ru" : "en";
  const home = locale === "en" ? "/" : `/${locale}`;
  const subtitle = locale === "en" ? "UNOFFICIAL FAN GUIDE" : locale === "pl" ? "NIEOFICJALNY PORADNIK FANOWSKI" : "НЕОФИЦИАЛЬНЫЙ ФАН-ГИД";
  const menu = navigation[locale];
  const closeMenu = (event: MouseEvent<HTMLAnchorElement>) => event.currentTarget.closest("details")?.removeAttribute("open");

  return <nav className="site-nav" aria-label="Main navigation">
    <a className="brand" href={home}>DAWNWALKER <span>GUIDE</span><small>{subtitle}</small></a>
    <div className="site-nav-links">
      {menu.primary.map((item) => {
        const active = pathname === item.href;
        return <a key={item.href} href={item.href} className={`site-nav-direct${active ? " active" : ""}`} aria-current={active ? "page" : undefined}>{item.label}</a>;
      })}
      {menu.groups.map((group) => {
        const active = group.items.some((item) => pathname === item.href);
        return <details className={`site-nav-menu${active ? " active" : ""}`} key={group.label}>
          <summary>{group.label}</summary>
          <div role="menu" aria-label={group.label}>
            {group.items.map((item) => <a key={item.href} href={item.href} role="menuitem" onClick={closeMenu} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</a>)}
          </div>
        </details>;
      })}
    </div>
    <LanguageSwitcher />
  </nav>;
}

"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type SyntheticEvent } from "react";
import { LanguageSwitcher } from "./language-switcher";

type Locale = "en" | "pl" | "ru";
type NavLink = { href: string; label: string };
type NavGroup = { label: string; items: NavLink[] };
type Navigation = { primary: NavLink[]; groups: NavGroup[] };

const walkthroughSponsorUrl = "https://www.profitableratecpmnetwork.com/bnpnu0kdv?key=8eccc0b7f81f5d34920dc57c35e9e25c";

const navigation: Record<Locale, Navigation> = {
  en: {
    primary: [
      { href: walkthroughSponsorUrl, label: "Walkthrough" },
      { href: "/mods", label: "Mods" },
    ],
    groups: [
      { label: "Launch help", items: [
        { href: "/patch-notes", label: "Patch notes" },
        { href: "/crash-and-stutter-fix", label: "Crash & stutter fix" },
        { href: "/can-i-run", label: "Can I run?" },
        { href: "/controller-movement-fix", label: "Controller fix" },
        { href: "/flickering-fix", label: "Flickering fix" },
        { href: "/cant-save", label: "Can't save?" },
        { href: "/known-issues", label: "Known issues" },
        { href: "/console-performance", label: "Console performance" },
      ] },
      { label: "Quest answers", items: [
        { href: "/prologue-quest-order", label: "Prologue quest order" },
        { href: "/how-many-spoonfuls-of-herbs", label: "Herbs recipe for Esme" },
        { href: "/forge-it-anew", label: "Forge It Anew" },
        { href: "/a-bulwark-against-darkness", label: "Arbiter armor" },
        { href: "/flask-of-quicksilver", label: "Flask of Quicksilver" },
        { href: "/silver-trader", label: "Silver Trader" },
        { href: "/xanthe-boss-guide", label: "Xanthe boss guide" },
        { href: "/font-of-life", label: "Font of Life" },
        { href: "/lacra-romance", label: "Lacra romance" },
      ] },
      { label: "Game guide", items: [
        { href: "/release-date", label: "Release date" },
        { href: "/platforms", label: "Platforms" },
        { href: "/gameplay", label: "Gameplay" },
        { href: "/time-system", label: "Time system" },
        { href: "/what-happens-after-30-days", label: "What happens after 30 days" },
        { href: "/new-game-plus", label: "New Game Plus status" },
        { href: "/trophy-guide", label: "Trophy guide" },
        { href: "/endings", label: "Endings" },
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
  const navRef = useRef<HTMLElement>(null);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const locale: Locale = pathname === "/pl" || pathname.startsWith("/pl/") ? "pl" : pathname === "/ru" || pathname.startsWith("/ru/") ? "ru" : "en";
  const home = locale === "en" ? "/" : `/${locale}`;
  const subtitle = locale === "en" ? "UNOFFICIAL FAN GUIDE" : locale === "pl" ? "NIEOFICJALNY PORADNIK FANOWSKI" : "НЕОФИЦИАЛЬНЫЙ ФАН-ГИД";
  const menu = navigation[locale];
  const closeMenu = () => setOpenGroup(null);
  const toggleMenu = (label: string) => (event: SyntheticEvent<HTMLDetailsElement>) => setOpenGroup(event.currentTarget.open ? label : null);

  useEffect(() => {
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpenGroup(null);
    };
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePointer);
  }, []);

  return <nav className="site-nav" aria-label="Main navigation" ref={navRef} onKeyDown={(event) => { if (event.key === "Escape") setOpenGroup(null); }}>
    <a className="brand" href={home}>DAWNWALKER <span>GUIDE</span><small>{subtitle}</small></a>
    <div className="site-nav-links">
      {menu.primary.map((item) => {
        const external = item.href.startsWith("https://");
        const active = !external && pathname === item.href;
        return <a key={item.href} href={item.href} className={`site-nav-direct${active ? " active" : ""}`} aria-current={active ? "page" : undefined} {...(external ? { target: "_blank", rel: "sponsored noopener noreferrer" } : {})}>{item.label}</a>;
      })}
      {menu.groups.map((group) => {
        const active = group.items.some((item) => pathname === item.href);
        return <details className={`site-nav-menu${active ? " active" : ""}`} key={group.label} open={openGroup === group.label} onToggle={toggleMenu(group.label)}>
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

import type { Metadata } from "next";
import { ContentAd, NativeContentAd } from "../ad-slot";

export const metadata: Metadata = {
  title: "The Blood of Dawnwalker – poradniki i data premiery",
  description: "Niezależne, oparte na źródłach poradniki do The Blood of Dawnwalker: data premiery, godziny odblokowania, PC, PS5 i Xbox.",
  alternates: { canonical: "/pl", languages: { en: "/", pl: "/pl", ru: "/ru", cs: "/cs", "x-default": "/" } },
  openGraph: { locale: "pl_PL", title: "The Blood of Dawnwalker – poradniki i data premiery", description: "Sprawdzone informacje o premierze, platformach i wydajności.", url: "/pl", images: ["/og.png"] },
};

const cards = [
  ["Premiera", "Kiedy wychodzi The Blood of Dawnwalker?", "Data, platformy, godziny odblokowania i oficjalne źródła.", "/pl/release-date"],
  ["Rozgrywka", "Jak działa The Blood of Dawnwalker?", "Informacje o dniu i nocy, walce, wyborach oraz 30-dniowym systemie czasu — bez wymyślania mechanik.", "/pl/time-system"],
  ["PC", "Czy mój komputer uruchomi grę?", "Porównaj podzespoły z wymaganiami wydawcy bez wysyłania danych.", "/pl/can-i-run"],
  ["Konsole", "PS5, PS5 Pro i Xbox – tryby wydajności", "Cele FPS od twórców, wyraźnie oddzielone od testów graczy.", "/pl/console-performance"],
  ["Edycje", "Którą edycję warto kupić?", "Porównaj Standard, Eclipse, Day One i Collector’s Edition oraz bonus za preorder.", "/pl/editions"],
  ["Problemy", "Co wiadomo o problemach gry?", "Sprawdzone zgłoszenia, obejścia i aktualizacje po premierze.", "/pl/known-issues"],
];

export default function PolishHome() {
  return <main lang="pl">
    <nav className="nav"><a className="brand" href="/pl">DAWNWALKER <span>GUIDE</span><small>NIEOFICJALNY PORADNIK FANOWSKI</small></a><div className="links"><a href="/pl/release-date">Data premiery</a><a href="/pl/can-i-run">Czy uruchomię?</a><a href="/pl/console-performance">Konsole</a><a href="/pl/editions">Edycje</a><a href="/pl/time-system">System czasu</a><a href="/pl/known-issues">Znane problemy</a></div></nav>
    <section className="hero"><div className="hero-art" aria-hidden="true"><img src="/dawnwalker-hero.jpg" alt="" /></div><div className="hero-copy"><p className="eyebrow">THE BLOOD OF DAWNWALKER · POLSKI PORADNIK</p><p className="hero-kicker">FAKTY · ŹRÓDŁA · BEZ SPOILERÓW</p><h1>Przetrwaj <em>do świtu.</em></h1><p className="lead">Sprawdzone informacje o premierze, platformach i pierwszych problemach graczy. Każdą informację oznaczamy jako oficjalną, potwierdzoną albo niezweryfikowaną.</p><div className="hero-actions"><a className="primary" href="/pl/release-date">Data i godziny premiery</a><a className="secondary" href="#pomoc">Pomoc na premierę</a></div></div><aside className="clock-card"><p>GLOBALNA PREMIERA</p><div className="day">WRZ <span>03</span></div><div className="bar"><i /></div><small>2026 · PC, PlayStation 5<br />Xbox Series X|S</small></aside></section>
    <section className="signal"><span>✦ STATUS PREMIERY</span><p>Premiera jest potwierdzona na 3 września 2026. Aktualizujemy tylko informacje z datowanym źródłem i jasno oznaczamy relacje społeczności.</p><a href="/pl/release-date">Sprawdź szczegóły →</a></section>
    <ContentAd />
    <section className="section intro"><div><p className="eyebrow">KONKRET, NIE SZUM</p><h2>Odpowiedzi wtedy, gdy są potrzebne.</h2></div><div className="intro-copy"><p>Strony budujemy wokół rzeczywistych pytań graczy, a nie wokół powtarzania tych samych słów kluczowych.</p><span>OFICJALNE · SPRAWDZONE · SPOŁECZNOŚĆ</span></div></section>
    <section className="section"><div className="section-head"><div><p className="eyebrow">ZACZNIJ TUTAJ</p><h2>Najważniejsze poradniki.</h2></div></div><div className="route-grid">{cards.map(([tag, title, text, href], index) => <article className={`feature-card ${index === 0 ? "crimson" : index === 1 ? "night-card" : "archive-card"}`} key={href}><span>0{index + 1} · {tag}</span><h3>{title}</h3><p>{text}</p><a href={href}>Otwórz poradnik →</a></article>)}</div></section>
    <NativeContentAd />
    <section id="pomoc" className="section planner"><div className="planner-copy"><p className="eyebrow">POMOC W DNIU PREMIERY</p><h2>Raport gracza zamieniony w użyteczną odpowiedź.</h2><p>W tygodniu premiery śledzimy publiczne zgłoszenia awarii, wydajności, zadań i problemów z platformami. Publikujemy tylko rozwiązania z opisem wersji gry i kroków do odtworzenia błędu.</p><div className="hero-actions"><a className="primary" href="https://github.com/wencun/dawnwalker.cc/issues/new/choose" target="_blank" rel="noreferrer">Zgłoś problem</a><a className="secondary" href="/known-issues">Znane problemy</a></div></div><div className="quest-panel launch-panel"><p className="eyebrow">JAK PRACUJEMY</p><ol><li><b>Zbieramy</b><span>Zgłoszenie gracza lub sygnał ze społeczności</span></li><li><b>Sprawdzamy</b><span>Platformę, wersję gry i kroki do odtworzenia</span></li><li><b>Publikujemy</b><span>Rozwiązanie, obejście albo jasny status</span></li></ol><p className="note">Nie publikujemy wymyślonych napraw.</p></div></section>
    <section className="section library"><div className="section-head"><div><p className="eyebrow">STANDARD REDAKCYJNY</p><h2>Najpierw źródło, potem wniosek.</h2></div></div><div className="library-grid"><div><strong>01</strong><span>Oficjalne linki źródłowe</span></div><div><strong>02</strong><span>Data ostatniej weryfikacji</span></div><div><strong>03</strong><span>Oznaczenia spoilerów</span></div><div><strong>04</strong><span>Otwarte poprawki</span></div></div></section>
    <footer><a className="brand" href="/pl">Dawnwalker <span>Guide</span></a><p>Nieoficjalny poradnik fanowski. <a href="/privacy">Prywatność</a> · <a href="https://github.com/wencun/dawnwalker.cc/issues" target="_blank" rel="noreferrer">Poprawki i opinie</a></p><span>POLSKI</span></footer>
  </main>;
}

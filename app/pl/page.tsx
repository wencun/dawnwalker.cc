import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Blood of Dawnwalker – poradniki i data premiery",
  description: "Niezależne, oparte na źródłach poradniki do The Blood of Dawnwalker: data premiery, godziny odblokowania, PC, PS5 i Xbox.",
  alternates: { canonical: "/pl", languages: { en: "/", pl: "/pl", "x-default": "/" } },
  openGraph: { locale: "pl_PL", title: "The Blood of Dawnwalker – poradniki i data premiery", description: "Sprawdzone informacje o premierze, platformach i wydajności.", url: "/pl", images: ["/og.png"] },
};

const cards = [
  ["Premiera", "Kiedy wychodzi The Blood of Dawnwalker?", "Data, platformy i źródła oficjalne.", "/pl/release-date"],
  ["Godziny premiery", "Kiedy gra odblokuje się w Polsce?", "Zasady odblokowania na PC i konsolach.", "/pl/release-times"],
  ["PC", "Czy mój komputer uruchomi grę?", "Porównaj podzespoły z wymaganiami wydawcy.", "/pl/can-i-run"],
  ["Konsole", "PS5, PS5 Pro i Xbox – tryby wydajności", "Cele FPS od twórców, wyraźnie oddzielone od testów.", "/pl/console-performance"],
];

export default function PolishHome() {
  return <main><nav className="nav"><a className="brand" href="/pl">DAWNWALKER <span>GUIDE</span><small>NIEOFICJALNY PORADNIK FANOWSKI</small></a><div className="links"><a href="/pl/release-times">Godziny premiery</a><a href="/pl/can-i-run">Czy uruchomię?</a><a href="/pl/console-performance">Konsole</a><a href="/">EN</a></div></nav><section className="section intro"><div><p className="eyebrow">THE BLOOD OF DAWNWALKER · POLSKI PORADNIK</p><h1>Informacje, których potrzebujesz przed premierą.</h1></div><div className="intro-copy"><p>Oddzielamy informacje oficjalne, potwierdzone raporty i nieweryfikowane spekulacje. Bez zmyślonych porad i bez spoilerów.</p><span>OFICJALNE · SPRAWDZONE · SPOŁECZNOŚĆ</span></div></section><section className="section"><div className="section-head"><div><p className="eyebrow">NAJWAŻNIEJSZE PYTANIA</p><h2>Odpowiedzi oparte na źródłach.</h2></div></div><div className="route-grid">{cards.map(([tag, title, text, href], index) => <article className={`feature-card ${index === 0 ? "crimson" : index === 1 ? "night-card" : "archive-card"}`} key={href}><span>0{index + 1} · {tag}</span><h3>{title}</h3><p>{text}</p><a href={href}>Otwórz poradnik →</a></article>)}</div></section><section className="section library"><div className="section-head"><div><p className="eyebrow">STANDARD REDAKCYJNY</p><h2>Najpierw źródło, potem wniosek.</h2></div></div><div className="library-grid"><div><strong>01</strong><span>Oficjalne linki źródłowe</span></div><div><strong>02</strong><span>Data ostatniej weryfikacji</span></div><div><strong>03</strong><span>Oznaczenia spoilerów</span></div><div><strong>04</strong><span>Otwarte poprawki</span></div></div></section><footer><a className="brand" href="/pl">Dawnwalker <span>Guide</span></a><p>Nieoficjalny poradnik fanowski. <a href="/privacy">Prywatność</a> · <a href="https://github.com/wencun/dawnwalker.cc/issues" target="_blank" rel="noreferrer">Poprawki i opinie</a></p><span>POLSKI</span></footer></main>;
}

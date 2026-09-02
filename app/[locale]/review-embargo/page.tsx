import { notFound } from "next/navigation";
import { RegionalGuidePage, regionalMetadata } from "../../regional-guide";

const locales = ["pl", "ru"] as const;
type Locale = typeof locales[number];

const sources = [
  { label: "PC Gamer — PC review and disclosed test hardware", href: "https://www.pcgamer.com/games/rpg/the-blood-of-dawnwalker-review/" },
  { label: "Game Informer — PlayStation 5 review", href: "https://gameinformer.com/review/the-blood-of-dawnwalker/time-doesnt-heal-all-wounds" },
  { label: "CGMagazine — PlayStation 5 review", href: "https://www.cgmagonline.com/review/game/blood-of-dawnwalker-review-rpg/" },
  { label: "Destructoid — PC performance observation", href: "https://www.destructoid.com/reviews/the-blood-of-dawnwalker-review/" },
];

const copy = {
  pl: {
    title: "Recenzje The Blood of Dawnwalker: platformy i sprawdzone informacje",
    dek: "Recenzje są już dostępne. Zebraliśmy oryginalne linki, platformę testową każdego autora oraz wyraźnie oddzielamy opinię od rzeczywiście opisanych danych technicznych.",
    eyebrow: "PRZEGLĄD RECENZJI · RECENZJE DOSTĘPNE",
    sections: [
      { title: "Recenzje są już dostępne", body: <><p><b>Pełne recenzje zaczęły ukazywać się 31 sierpnia 2026 r.</b> Ta strona nie jest zestawieniem ocen. Każdy wpis wymaga oryginalnego linku, wskazania platformy testowej i jasnego opisu tego, czego dana redakcja nie ujawniła.</p><p>Wniosek recenzenta jest opinią. Wynik techniczny ma znaczenie tylko dla ujawnionego sprzętu, ustawień, sceny i wersji gry.</p></> },
      { title: "Pierwsze sprawdzalne recenzje", body: <div className="source-list"><p><b>PC Gamer · 31 sierpnia</b><br/><b>Platforma:</b> PC — laptop z RTX 3060, Ryzen 5 5600H i 16 GB RAM. <b>Patch/build:</b> nie podano. Autor opisuje zwykle 60 FPS przy 1080p/Low; nie jest to uniwersalny benchmark ani zalecana konfiguracja.</p><p><b>Game Informer · 31 sierpnia, 10:00</b><br/><b>Platforma:</b> PlayStation 5. <b>Patch/build:</b> nie podano. Brak liczbowego testu technicznego. Recenzja omawia ukończoną rozgrywkę i wpływ 30-dniowej struktury.</p><p><b>CGMagazine · 31 sierpnia</b><br/><b>Platforma:</b> PlayStation 5. <b>Patch/build:</b> nie podano. Brak testu liczby klatek z wersją gry. Artykuł opisuje formy dnia/nocy i segmenty czasu jako istotne dla zadań.</p><p><b>Destructoid · 31 sierpnia, 10:00</b><br/><b>Platforma:</b> PC — RX 9070 XT, natywne 1440p/Ultra. <b>Patch/build:</b> nie podano. Autor opisuje 80–90 FPS poza zatłoczonymi miejscami i spadki do 30 FPS w Svartrau; to pojedyncza obserwacja przedpremierowa, nie potwierdzony problem całej wersji gry.</p></div> },
      { title: "Co można stwierdzić — a czego nie", body: <><p><b>Potwierdza się w wielu ukończonych recenzjach:</b> fabuła, świat i struktura 30 dni są centralnymi elementami dyskusji. Opinie różnią się co do walki i konsekwencji systemu czasu.</p><p><b>Nadal nie jest potwierdzone:</b> uniwersalny benchmark PC, poprawka Day One, wspólny werdykt wydajności na wszystkich platformach ani porównywalna wersja testowa. Redakcje nie podały wspólnego numeru buildu.</p></> },
      { title: "Przed zakupem sprawdź", body: <ul><li>platformę, patch i ustawienia testu;</li><li>czy materiał jest pełną recenzją, a nie zapowiedzią;</li><li>czy podano mierzalne wyniki i powtarzalną scenę;</li><li>czy opis systemu 30 dni wynika z faktycznej rozgrywki.</li></ul> },
    ],
  },
  ru: {
    title: "Обзоры The Blood of Dawnwalker: платформы и проверенные данные",
    dek: "Обзоры уже вышли. Здесь собраны первоисточники, платформа тестирования каждого автора и чёткое разделение мнения критика и фактически раскрытых технических данных.",
    eyebrow: "ОБЗОРЫ · РЕЦЕНЗИИ ВЫШЛИ",
    sections: [
      { title: "Обзоры уже доступны", body: <><p><b>Полные обзоры начали выходить 31 августа 2026 года.</b> Это не сводка оценок: для каждого пункта нужен первоисточник, указанная платформа и явное описание того, что из технического контекста не раскрыто.</p><p>Вывод автора — это мнение. Техническое наблюдение относится только к названному железу, настройкам, сцене и версии игры.</p></> },
      { title: "Первые проверяемые обзоры", body: <div className="source-list"><p><b>PC Gamer · 31 августа</b><br/><b>Платформа:</b> PC — ноутбук RTX 3060, Ryzen 5 5600H и 16 ГБ RAM. <b>Патч/сборка:</b> не указаны. Автор сообщает, что в основном удерживал 60 FPS при 1080p/Low; это не универсальный бенчмарк и не рекомендуемая конфигурация.</p><p><b>Game Informer · 31 августа, 10:00</b><br/><b>Платформа:</b> PlayStation 5. <b>Патч/сборка:</b> не указаны. Числового технического теста нет. В обзоре рассматривается завершённое прохождение и влияние 30-дневной структуры.</p><p><b>CGMagazine · 31 августа</b><br/><b>Платформа:</b> PlayStation 5. <b>Патч/сборка:</b> не указаны. Версионного FPS-теста нет. Материал называет дневную/ночную форму и сегменты времени важными для подхода к заданиям.</p><p><b>Destructoid · 31 августа, 10:00</b><br/><b>Платформа:</b> PC — RX 9070 XT, нативные 1440p/Ultra. <b>Патч/сборка:</b> не указаны. Автор сообщает о 80–90 FPS вне загруженных зон и падениях до 30 FPS в Svartrau; это один предрелизный отчёт, а не подтверждённая проблема всей игры.</p></div> },
      { title: "Что можно и нельзя заключить", body: <><p><b>Несколько завершённых обзоров подтверждают:</b> история, мир и 30-дневная структура занимают центральное место в обсуждении. Оценки боёв и последствий временной системы расходятся.</p><p><b>Пока не подтверждены:</b> общий PC-бенчмарк, исправление первого дня, вывод о производительности на всех платформах или сопоставимая тестовая сборка. Общий номер сборки в обзорах не раскрыт.</p></> },
      { title: "Что проверить перед покупкой", body: <ul><li>платформу, патч и настройки теста;</li><li>является ли материал полной рецензией, а не превью;</li><li>есть ли измеримые результаты и повторяемая сцена;</li><li>основан ли вывод о 30 днях на реальном прохождении.</li></ul> },
    ],
  },
} as const;

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const item = copy[locale as Locale];
  return regionalMetadata(locale as Locale, item.title, item.dek, `/${locale}/review-embargo`, ["The Blood of Dawnwalker review", "The Blood of Dawnwalker recenzje", "The Blood of Dawnwalker обзоры"]);
}

export default async function LocalizedReviewPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const normalized = locale as Locale;
  const item = copy[normalized];
  return <RegionalGuidePage locale={normalized} eyebrow={item.eyebrow} title={item.title} dek={item.dek} checked="31 sierpnia / 31 августа 2026" checkedLabel="✓" sourcesLabel={normalized === "pl" ? "Źródła" : "Источники"} sources={sources} sections={[...item.sections]} homeLabel="" releaseLabel="" consoleLabel="" footer={normalized === "pl" ? "Nieoficjalny poradnik fanowski. Opinie krytyków są oddzielone od faktów technicznych." : "Неофициальный фан-гид. Мнения критиков отделены от технических фактов."} />;
}

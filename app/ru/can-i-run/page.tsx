import type { Metadata } from "next";
import CompatibilityChecker from "../../can-i-run/checker";
import { MiddleAd } from "../../ad-slot";

export const metadata: Metadata = {
  title: "Запустится ли The Blood of Dawnwalker на моём ПК? Проверка требований",
  description: "Сравните процессор, видеокарту, RAM, VRAM, SSD и ОС с официальными требованиями The Blood of Dawnwalker. Данные остаются в браузере.",
  keywords: ["Запустится ли The Blood of Dawnwalker", "The Blood of Dawnwalker системные требования", "Dawnwalker требования PC"],
  alternates: { canonical: "/ru/can-i-run", languages: { en: "/can-i-run", pl: "/pl/can-i-run", ru: "/ru/can-i-run", "x-default": "/can-i-run" } },
  openGraph: { locale: "ru_RU", title: "Запустится ли The Blood of Dawnwalker на моём ПК?", description: "Локальное сравнение с официальными требованиями PC.", url: "/ru/can-i-run", images: ["/og.png"] },
};

export default function RussianCanIRunPage() {
  return <main className="doc-shell" lang="ru"><article className="doc tool-doc"><p className="eyebrow">ПРОВЕРКА СОВМЕСТИМОСТИ PC · ОФИЦИАЛЬНЫЕ ТРЕБОВАНИЯ</p><h1>Запустится ли The Blood of Dawnwalker на моём ПК?</h1><p className="doc-dek">Сравните точные компоненты с минимальными и рекомендуемыми требованиями издателя. Это проверка требований, а не бенчмарк, оценка FPS или гарантия производительности.</p><CompatibilityChecker locale="ru" /><MiddleAd /><section><h2>Источник и ограничения</h2><p>Минимальные требования издателя: Core i5-11400F или Ryzen 7 2700X, 16 ГБ RAM, GTX 1060 или RX 580 с 6 ГБ VRAM, 60 ГБ на SSD и Windows 10/DirectX 12. Рекомендуемые: Core i7-11700K или Ryzen 7 5700X, 16 ГБ RAM, RTX 4060, RX 7600 XT или Arc B580 с 8 ГБ VRAM, 60 ГБ на SSD и Windows 10/DirectX 12.</p><p>Фактический FPS зависит от разрешения, настроек, драйверов, патчей, апскейлинга и полной конфигурации. Независимые тесты будут добавляться только с источником, версией игры и настройками.</p><p>Язык интерфейса — отдельный вопрос: <a href="/ru/russian-language">проверьте текущий статус русского языка</a> до покупки.</p><p><a href="https://www.bandainamcoent.com/games/dawnwalker" target="_blank" rel="noreferrer">Официальные системные требования ↗</a></p></section></article><footer><a className="brand" href="/ru">Dawnwalker <span>Guide</span></a><p>Неофициальный фан-гид. <a href="/privacy">Конфиденциальность</a> · <a href="https://github.com/wencun/dawnwalker.cc/issues" target="_blank" rel="noreferrer">Исправления и отзывы</a></p></footer></main>;
}

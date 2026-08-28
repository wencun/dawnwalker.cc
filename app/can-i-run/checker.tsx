"use client";

import { useState } from "react";

type Check = { label: string; value: string; minimum: string; recommended: string; state: "pass" | "fail" | "unknown" };
type Locale = "en" | "pl" | "ru";

const copy = {
  en: {
    cpu: "CPU", gpu: "GPU", memory: "Memory", vram: "VRAM", storage: "Storage", os: "OS", notProvided: "Not provided", localCheck: "LOCAL-ONLY CHECK", heading: "Compare your PC with the official requirements.", intro: "Nothing is uploaded or saved. A browser can sometimes reveal a graphics renderer, but it cannot reliably read your CPU, storage, installed RAM or real-world performance.", detect: "Detect browser-visible hardware", detected: "Browser-reported GPU: ", notDetected: "Browser did not expose a GPU model. This is normal in privacy-focused browsers.", installedRam: "Installed RAM (GB)", freeStorage: "Free storage (GB)", storageType: "Storage type", operatingSystem: "Operating system", unknown: "I don't know", ssd: "SSD", hdd: "HDD only", compare: "Compare official requirements", result: "RESULT", below: "Does not meet the stated minimum", belowText: "One or more entered requirements are below the official minimum. Check the rows marked below before buying.", incomplete: "Comparison incomplete", incompleteText: "Your browser cannot reliably expose every PC component. Add the missing exact model names and numbers for a full official-spec comparison.", meets: "Meets the stated minimum", meetsText: "Your entries meet the publisher's listed minimum. This is not a performance or FPS promise; wait for independent benchmarks for your exact system.", yourEntry: "Your entry:", minimumLabel: "Minimum", recommendedLabel: "Recommended", exampleCpu: "Example: Ryzen 5 5600X", exampleGpu: "Example: RTX 4060",
  },
  pl: {
    cpu: "Procesor", gpu: "Karta graficzna", memory: "Pamięć RAM", vram: "Pamięć VRAM", storage: "Dysk", os: "System", notProvided: "Nie podano", localCheck: "SPRAWDZENIE LOKALNE", heading: "Porównaj swój komputer z oficjalnymi wymaganiami.", intro: "Nie przesyłamy ani nie zapisujemy żadnych danych. Przeglądarka może czasem ujawnić renderer karty graficznej, ale nie odczyta wiarygodnie procesora, dysku, zainstalowanej pamięci RAM ani rzeczywistej wydajności.", detect: "Wykryj sprzęt widoczny dla przeglądarki", detected: "Karta graficzna wykryta przez przeglądarkę: ", notDetected: "Przeglądarka nie udostępniła modelu GPU. To normalne w przeglądarkach nastawionych na prywatność.", installedRam: "Zainstalowana pamięć RAM (GB)", freeStorage: "Wolne miejsce na dysku (GB)", storageType: "Typ dysku", operatingSystem: "System operacyjny", unknown: "Nie wiem", ssd: "SSD", hdd: "Tylko HDD", compare: "Porównaj z oficjalnymi wymaganiami", result: "WYNIK", below: "Nie spełnia podanego minimum", belowText: "Co najmniej jeden podany parametr jest niższy od oficjalnego minimum. Sprawdź oznaczone wiersze przed zakupem.", incomplete: "Porównanie niepełne", incompleteText: "Przeglądarka nie potrafi wiarygodnie odczytać wszystkich podzespołów. Dodaj dokładne modele i wartości, aby porównać je z oficjalną specyfikacją.", meets: "Spełnia podane minimum", meetsText: "Podane podzespoły spełniają minimum wydawcy. Nie jest to obietnica konkretnej wydajności ani liczby FPS; poczekaj na niezależne testy swojego zestawu.", yourEntry: "Twój wpis:", minimumLabel: "Minimum", recommendedLabel: "Zalecane", exampleCpu: "Przykład: Ryzen 5 5600X", exampleGpu: "Przykład: RTX 4060",
  },
  ru: {
    cpu: "Процессор", gpu: "Видеокарта", memory: "Оперативная память", vram: "Видеопамять", storage: "Накопитель", os: "ОС", notProvided: "Не указано", localCheck: "ЛОКАЛЬНАЯ ПРОВЕРКА", heading: "Сравните свой ПК с официальными требованиями.", intro: "Мы ничего не загружаем и не сохраняем. Браузер иногда показывает рендерер видеокарты, но не может надёжно прочитать процессор, накопитель, установленную RAM или реальную производительность.", detect: "Определить видимое браузеру оборудование", detected: "Видеокарта, определённая браузером: ", notDetected: "Браузер не передал модель видеокарты. Это нормально для браузеров с усиленной защитой приватности.", installedRam: "Установленная RAM (ГБ)", freeStorage: "Свободное место (ГБ)", storageType: "Тип накопителя", operatingSystem: "Операционная система", unknown: "Не знаю", ssd: "SSD", hdd: "Только HDD", compare: "Сравнить с официальными требованиями", result: "РЕЗУЛЬТАТ", below: "Не соответствует указанному минимуму", belowText: "Один или несколько введённых параметров ниже официального минимума. Проверьте отмеченные строки перед покупкой.", incomplete: "Сравнение неполное", incompleteText: "Браузер не может надёжно определить все компоненты. Введите точные модели и значения для полного сравнения со спецификацией.", meets: "Соответствует указанному минимуму", meetsText: "Указанные компоненты соответствуют минимуму издателя. Это не обещание производительности или FPS; дождитесь независимых тестов своей конфигурации.", yourEntry: "Ваше значение:", minimumLabel: "Минимум", recommendedLabel: "Рекомендуется", exampleCpu: "Например: Ryzen 5 5600X", exampleGpu: "Например: RTX 4060",
  },
} satisfies Record<Locale, Record<string, string>>;

const clean = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, "");
const matches = (value: string, models: string[]) => models.some((model) => clean(value).includes(clean(model)));

function detectGpu() {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl || !(gl instanceof WebGLRenderingContext)) return "";
    const extension = gl.getExtension("WEBGL_debug_renderer_info");
    return extension ? gl.getParameter(extension.UNMASKED_RENDERER_WEBGL) : "";
  } catch { return ""; }
}

export default function CompatibilityChecker({ locale = "en" }: { locale?: Locale }) {
  const text = copy[locale];
  const [cpu, setCpu] = useState("");
  const [gpu, setGpu] = useState("");
  const [ram, setRam] = useState("");
  const [vram, setVram] = useState("");
  const [storage, setStorage] = useState("");
  const [ssd, setSsd] = useState("unknown");
  const [os, setOs] = useState("unknown");
  const [detected, setDetected] = useState("");
  const [checked, setChecked] = useState(false);

  const check = (value: string, minimum: string[], recommended: string[]): "pass" | "fail" | "unknown" => {
    if (!value.trim()) return "unknown";
    if (matches(value, recommended)) return "pass";
    if (matches(value, minimum)) return "pass";
    return "unknown";
  };
  const numeric = (value: string, minimum: number, recommended: number): "pass" | "fail" | "unknown" => {
    if (!value) return "unknown";
    const number = Number(value);
    return number < minimum ? "fail" : number >= recommended ? "pass" : "pass";
  };
  const checks: Check[] = [
    { label: text.cpu, value: cpu || text.notProvided, minimum: "Core i5-11400F / Ryzen 7 2700X", recommended: "Core i7-11700K / Ryzen 7 5700X", state: check(cpu, ["i5-11400f", "ryzen 7 2700x"], ["i7-11700k", "ryzen 7 5700x"]) },
    { label: text.gpu, value: gpu || text.notProvided, minimum: "GTX 1060 / RX 580 (6 GB VRAM)", recommended: "RTX 4060 / RX 7600 XT / Arc B580 (8 GB VRAM)", state: check(gpu, ["gtx 1060", "rx 580"], ["rtx 4060", "rx 7600 xt", "arc b580"]) },
    { label: text.memory, value: ram ? `${ram} GB` : text.notProvided, minimum: "16 GB", recommended: "16 GB", state: numeric(ram, 16, 16) },
    { label: text.vram, value: vram ? `${vram} GB` : text.notProvided, minimum: "6 GB", recommended: "8 GB", state: numeric(vram, 6, 8) },
    { label: text.storage, value: storage ? `${storage} GB ${ssd === "yes" ? "SSD" : ssd === "no" ? text.hdd : ""}` : text.notProvided, minimum: locale === "pl" ? "60 GB na SSD" : locale === "ru" ? "60 ГБ на SSD" : "60 GB on SSD", recommended: locale === "pl" ? "60 GB na SSD" : locale === "ru" ? "60 ГБ на SSD" : "60 GB on SSD", state: !storage || ssd === "unknown" ? "unknown" : Number(storage) < 60 || ssd === "no" ? "fail" : "pass" },
    { label: text.os, value: os === "unknown" ? text.notProvided : os, minimum: "Windows 10 + DirectX 12", recommended: "Windows 10 + DirectX 12", state: os === "unknown" ? "unknown" : os === "Other" ? "fail" : "pass" },
  ];
  const failed = checks.some((item) => item.state === "fail");
  const unknown = checks.some((item) => item.state === "unknown");
  const result = !checked ? null : failed ? [text.below, text.belowText] : unknown ? [text.incomplete, text.incompleteText] : [text.meets, text.meetsText];

  function useLocalDetection() {
    const renderer = detectGpu();
    setDetected(renderer ? `${text.detected}${renderer}` : text.notDetected);
    if (renderer) setGpu(renderer);
    const browserMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    if (typeof browserMemory === "number") setRam(String(browserMemory));
  }

  return <div className="checker"><div className="checker-intro"><div><p className="eyebrow">{text.localCheck}</p><h2>{text.heading}</h2><p>{text.intro}</p></div><button className="detect-button" onClick={useLocalDetection}>{text.detect}</button></div>{detected && <p className="detected">{detected}</p>}
    <div className="checker-fields"><label>{text.cpu}<input value={cpu} onChange={(event) => setCpu(event.target.value)} placeholder={text.exampleCpu} /></label><label>{text.gpu}<input value={gpu} onChange={(event) => setGpu(event.target.value)} placeholder={text.exampleGpu} /></label><label>{text.installedRam}<input type="number" min="1" value={ram} onChange={(event) => setRam(event.target.value)} placeholder="16" /></label><label>{text.gpu} VRAM (GB)<input type="number" min="1" value={vram} onChange={(event) => setVram(event.target.value)} placeholder="8" /></label><label>{text.freeStorage}<input type="number" min="1" value={storage} onChange={(event) => setStorage(event.target.value)} placeholder="60" /></label><label>{text.storageType}<select value={ssd} onChange={(event) => setSsd(event.target.value)}><option value="unknown">{text.unknown}</option><option value="yes">{text.ssd}</option><option value="no">{text.hdd}</option></select></label><label>{text.operatingSystem}<select value={os} onChange={(event) => setOs(event.target.value)}><option value="unknown">{text.unknown}</option><option value="Windows 10">Windows 10</option><option value="Windows 11">Windows 11</option><option value="Other">{locale === "pl" ? "Inny" : locale === "ru" ? "Другая" : "Other"}</option></select></label></div><button className="primary compare-button" onClick={() => setChecked(true)}>{text.compare}</button>
    {result && <section className={`check-result ${failed ? "warning" : ""}`}><p className="eyebrow">{text.result}</p><h3>{result[0]}</h3><p>{result[1]}</p></section>}
    {checked && <div className="check-table">{checks.map((item) => <div key={item.label} className="check-row"><span className={`status ${item.state}`}>{item.state === "pass" ? "✓" : item.state === "fail" ? "!" : "?"}</span><div><b>{item.label}</b><small>{text.yourEntry} {item.value}</small></div><p><strong>{text.minimumLabel}</strong>{item.minimum}<br/><strong>{text.recommendedLabel}</strong>{item.recommended}</p></div>)}</div>}
  </div>;
}

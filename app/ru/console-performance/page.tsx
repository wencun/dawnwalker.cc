import { RegionalGuidePage, regionalMetadata } from "../../regional-guide";
import { LocalizedFullGuide } from "../../localized-full-guide";

export const metadata = regionalMetadata("ru", "The Blood of Dawnwalker — производительность на PS5 и Xbox", "Официальные целевые режимы FPS The Blood of Dawnwalker для PS5, PS5 Pro и Xbox на релизе.", "/ru/console-performance", ["The Blood of Dawnwalker PS5 FPS", "Dawnwalker Xbox Series S FPS"]);
export default function Page() { return <LocalizedFullGuide locale="ru" topic="console-performance" />; }

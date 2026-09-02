import { PolishGuidePage, polishMetadata } from "../../polish-guide-page";
import { LocalizedFullGuide } from "../../localized-full-guide";

export const metadata = polishMetadata("The Blood of Dawnwalker – wydajność na PS5 i Xbox", "Oficjalne cele wydajności The Blood of Dawnwalker na PS5, PS5 Pro, Xbox Series X i Series S na dzień premiery.", "/pl/console-performance", "/console-performance", ["The Blood of Dawnwalker PS5 FPS", "Dawnwalker PS5 Pro 60 FPS", "The Blood of Dawnwalker Xbox Series S FPS"]);

export default function PolishConsolePerformancePage() {
  return <LocalizedFullGuide locale="pl" topic="console-performance" />;
}

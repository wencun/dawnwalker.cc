import { PolishGuidePage, polishMetadata } from "../../polish-guide-page";
import { LocalizedFullGuide } from "../../localized-full-guide";

export const metadata = polishMetadata("The Blood of Dawnwalker – data premiery", "Kiedy wychodzi The Blood of Dawnwalker? Potwierdzona data premiery, platformy oraz godziny odblokowania na PC i konsolach.", "/pl/release-date", "/release-date", ["The Blood of Dawnwalker data premiery", "The Blood of Dawnwalker premiera", "Dawnwalker data premiery"]);

export default function PolishReleaseDatePage() {
  return <LocalizedFullGuide locale="pl" topic="release-date" />;
}

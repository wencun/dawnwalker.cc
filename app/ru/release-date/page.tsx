import { RegionalGuidePage, regionalMetadata } from "../../regional-guide";
import { LocalizedFullGuide } from "../../localized-full-guide";

export const metadata = regionalMetadata("ru", "The Blood of Dawnwalker — дата выхода", "Подтверждённая дата выхода The Blood of Dawnwalker, платформы и правила разблокировки на PC и консолях.", "/ru/release-date", ["The Blood of Dawnwalker дата выхода", "Dawnwalker дата релиза"]);
export default function Page() { return <LocalizedFullGuide locale="ru" topic="release-date" />; }

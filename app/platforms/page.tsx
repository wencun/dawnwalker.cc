import { GuidePage, guideMetadata } from "../guide-page";

export const metadata = guideMetadata(
  "The Blood of Dawnwalker Platforms: Steam PC, PS5, Xbox & Game Pass",
  "Is The Blood of Dawnwalker on Steam PC, PS5, Xbox or Game Pass? Confirmed store links, regional availability and what has not been officially announced.",
  "/platforms",
  ["The Blood of Dawnwalker Steam", "The Blood of Dawnwalker Xbox Series X and Series S store", "The Blood of Dawnwalker PlayStation 5 store", "The Blood of Dawnwalker Microsoft Windows Store", "The Blood of Dawnwalker Game Pass", "The Blood of Dawnwalker PS5", "The Blood of Dawnwalker Xbox", "Blood of Dawnwalker platforms"]
);

export default function Page() {
  return <GuidePage
    eyebrow="PLATFORM GUIDE · OFFICIAL STORES"
    title="The Blood of Dawnwalker platforms: Steam PC, PS5 and Xbox"
    dek="The Blood of Dawnwalker is confirmed for Steam on PC, PlayStation 5 and Xbox Series X|S. Use the official store linked for your account region; platform, edition, language and release countdown can differ by storefront."
    checked="September 1, 2026"
    sources={[
      { label: "Official purchase page", href: "https://dawnwalkergame.com/us/en/buy" },
      { label: "Steam — The Blood of Dawnwalker", href: "https://store.steampowered.com/app/3751260/The_Blood_of_Dawnwalker/" },
      { label: "PlayStation Store", href: "https://www.playstation.com/en-us/games/the-blood-of-dawnwalker/" },
      { label: "Xbox — game page", href: "https://www.xbox.com/en-US/games/the-blood-of-dawnwalker" },
      { label: "Official community — day-one performance update", href: "https://www.reddit.com/r/DawnwalkerOfficial/comments/1vwxe1r/the_blood_of_dawnwalker_will_receive_a/" },
    ]}
    sections={[
      { title: "Where can you play The Blood of Dawnwalker?", body: <div className="fact-grid"><p><b>Steam / PC</b>Confirmed. Use Steam to verify your exact PC language list, price and account-region release display.</p><p><b>PlayStation 5</b>Confirmed. The PlayStation Store is the final source for your region&apos;s product page and countdown.</p><p><b>Xbox Series X|S</b>Confirmed. Check the Xbox product page with the account that will buy or play the game.</p><p><b>PS4, Xbox One, Switch / Switch 2</b>Not confirmed. Do not treat an unrelated retailer listing or a search snippet as an official platform announcement.</p></div> },
      { title: "Official store links by platform", body: <ul><li><b>PC:</b> <a href="https://store.steampowered.com/app/3751260/The_Blood_of_Dawnwalker/" target="_blank" rel="noreferrer">Open The Blood of Dawnwalker on Steam</a>.</li><li><b>PS5:</b> <a href="https://www.playstation.com/en-us/games/the-blood-of-dawnwalker/" target="_blank" rel="noreferrer">Open the PlayStation product page</a>.</li><li><b>Xbox Series X|S:</b> <a href="https://www.xbox.com/en-US/games/the-blood-of-dawnwalker" target="_blank" rel="noreferrer">Open the Xbox product page</a>.</li></ul> },
      { title: "Microsoft Store and Game Pass status", body: <div className="fact-grid"><p><b>Microsoft Store for PC</b>Not listed by the publisher as a PC storefront at the last check. Steam is the confirmed PC store in the official purchase information.</p><p><b>PC Game Pass</b>Not officially announced. An Xbox product page alone does not confirm a Game Pass entitlement.</p><p><b>Xbox Game Pass console</b>Not officially announced. Do not prepay or treat a retailer tag as proof until Xbox or the publisher lists it.</p><p><b>What to do</b>Check the official purchase page or the Xbox listing with your account shortly before buying; availability can change.</p></div> },
      { title: "Steam date, PC unlock and console timing are not identical", body: <p>Steam can show <b>September 2</b> in parts of the Americas because PC unlocks at one global moment: midnight CEST / Warsaw time on September 3. Console release generally follows local midnight, with publisher-listed regional exceptions. That means the date shown by a PC store is not proof of early access, and a console countdown should not be inferred from the PC time. See the <a href="/release-date">release date and unlock-time guide</a> for the rules and city conversions.</p> },
      { title: "PS5 and Xbox performance: confirmed target, not a benchmark", body: <p>Rebel Wolves announced a Day One performance mode targeting 60 FPS for PS5, PS5 Pro and Xbox Series X; Series S targets 30 FPS. Those are developer targets, not proof of locked performance in every scene or a substitute for a versioned launch test. See the <a href="/console-performance">console performance page</a> for the exact distinction and evidence links.</p> },
      { title: "Before buying on any platform", body: <ul><li>Check your own store&apos;s price, edition, supported languages, age rating and countdown.</li><li>On PC, compare the exact CPU, GPU, VRAM, RAM and SSD requirements with the <a href="/can-i-run">official-requirements checker</a>; passing it is not an FPS guarantee.</li><li>Read the <a href="/review-embargo">review tracker&apos;s disclosed PC and PS5 test context</a> before treating a critic&apos;s result as a buying recommendation.</li><li>Do not assume cross-save, cross-progression, a physical edition, preload or early access unless your platform store or the publisher explicitly lists it.</li><li>For editions and pre-order extras, use the <a href="/editions">source-based edition comparison</a> rather than retailer copy.</li></ul> },
    ]}
  />;
}

// Ad inventory stays disabled while the site is under AdSense review. The
// shared page templates keep these no-op components so ad placement can be
// introduced deliberately after approval without third-party popunders,
// overlays, or native units competing with the article content.
export function ContentAd() {
  return null;
}

export function NativeContentAd() {
  return null;
}

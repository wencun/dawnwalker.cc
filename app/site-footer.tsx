import Link from "next/link";

export function SiteFooter() {
  return <footer>
    <Link className="brand" href="/">Dawnwalker <span>Guide</span></Link>
    <p>
      Independent fan guide. The Blood of Dawnwalker and related marks belong to their respective owners.<br />
      <Link href="/about">About</Link> · <Link href="/contact">Contact</Link> · <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link> · <a href="https://github.com/wencun/dawnwalker.cc/issues" target="_blank" rel="noreferrer">Corrections &amp; feedback</a>
    </p>
    <span>EST. 2026</span>
  </footer>;
}

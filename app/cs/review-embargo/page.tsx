import { permanentRedirect } from "next/navigation";

// This URL was previously emitted as a Czech hreflang alternate even though a
// Czech review page has not been published. Preserve the review intent by
// redirecting to the complete English review guide instead of returning a 404.
export default function CzechReviewEmbargoRedirect() {
  permanentRedirect("/review-embargo");
}

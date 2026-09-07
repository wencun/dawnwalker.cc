import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const consentCountries = new Set([
  "AT", "BE", "BG", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR",
  "GB", "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT",
  "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK",
]);

export function proxy(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();
  // If Vercel cannot resolve a country, fail closed and request consent.
  const consentRequired = !country || consentCountries.has(country);
  const response = NextResponse.next();
  response.cookies.set("dawnwalker-ad-consent-required", consentRequired ? "1" : "0", {
    httpOnly: false,
    maxAge: 60 * 60 * 24,
    path: "/",
    sameSite: "lax",
    secure: true,
  });
  return response;
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.svg|robots.txt|sitemap.xml).*)",
};

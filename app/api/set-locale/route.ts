import { NextRequest, NextResponse } from "next/server";
import { cookieName, fallbackLocale, locales } from "@/i18n/settings";
import acceptLanguage from "accept-language";

acceptLanguage.languages(locales);

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const newLocale = searchParams.get(cookieName);

  const referer = request?.headers?.get("referer") ?? "";
  const refererPathname = new URL(referer).pathname;

  // redirect if newLocale in path is not supported
  if (
    locales.some(
      (locale) => acceptLanguage.get(locale) === acceptLanguage.get(newLocale)
    ) &&
    !refererPathname?.startsWith("/_next")
  ) {
    const refererPathnameWithoutLocale = refererPathname.replace(
      /^\/[a-z]{2}/,
      ""
    );
    const response = NextResponse.redirect(
      new URL(`/${newLocale}${refererPathnameWithoutLocale}`, request.url)
    );
    response.cookies.set(cookieName, newLocale ?? fallbackLocale);

    return response;
  }

  // redirect back to referer, if locale switch is not supported
  return NextResponse.redirect(new URL(referer));
}

import { NextRequest, NextResponse } from "next/server";
import { cookieName, fallbackLocale, locales } from "@/i18n/settings";
import acceptLanguage from "accept-language";

acceptLanguage.languages(locales);

export const runtime = "edge";

const oneYear = 1000 * 60 * 60 * 24 * 365;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const newLocale = searchParams.get(cookieName) ?? fallbackLocale;

  const referer = request?.headers?.get("referer") ?? "";
  const refererOrigin = new URL(referer).origin;
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
    response.cookies.set({
      name: cookieName,
      value: newLocale,
      httpOnly: false,
      sameSite: "lax",
      expires: new Date(Date.now() + oneYear),
    });

    return response;
  }

  // redirect back to referer, if locale switch is not supported
  return NextResponse.redirect(new URL(referer), {
    headers: {
      referer:
        refererOrigin + refererPathname.replace(/\/[a-z]{2}/, `/${newLocale}`),
    },
  });
}

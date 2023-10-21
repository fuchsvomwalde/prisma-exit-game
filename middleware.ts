import { NextResponse, NextRequest } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLocale, locales, cookieName } from "@/i18n/settings";

acceptLanguage.languages(locales);

const oneYear = 1000 * 60 * 60 * 24 * 365;

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - .\.. (files from /public, e.g. robots.txt)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};

const _getLangByReq = (request: NextRequest) => {
  return (
    acceptLanguage.get(request?.cookies?.get(cookieName)?.value) ??
    acceptLanguage.get(request.headers.get("Accept-Language")) ??
    fallbackLocale
  );
};

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.indexOf("icon") > -1 ||
    request.nextUrl.pathname.indexOf("chrome") > -1 ||
    request.nextUrl.pathname === "/api/set-locale"
  )
    return NextResponse.next();

  const locale = _getLangByReq(request);

  // store current request url in a custom header, which you can read later
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", request.url);

  // redirect if locale in path is not supported
  if (
    locales.includes(locale) &&
    !request.nextUrl.pathname.startsWith(`/${locale}`) &&
    !request.nextUrl.pathname.startsWith("/_next")
  ) {
    // check if local is missing icn existing url
    const pathnameHasLocale = locales.some((locale) =>
      request.nextUrl.pathname.startsWith(`/${locale}`)
    );
    const pathnameWithoutLocale = pathnameHasLocale
      ? request.nextUrl.pathname.replace(/^\/[a-z]{2}/, "")
      : request.nextUrl.pathname;
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathnameWithoutLocale}${request.nextUrl.search}`,
        request.url
      ),
      {
        headers: requestHeaders,
      }
    );
  }

  return NextResponse.next();
}

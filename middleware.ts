import { NextResponse, NextRequest } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLocale, locales, cookieName } from "@/i18n/settings";

acceptLanguage.languages(locales);

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
    request.nextUrl.pathname.indexOf("chrome") > -1
  )
    return NextResponse.next();

  const locale = _getLangByReq(request);

  // store current request url in a custom header, which you can read later
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", request.url);

  // console.log("locale", {
  //   locale,
  //   cookie: acceptLanguage.get(request?.cookies?.get(cookieName)?.value),
  //   acceptLanguage: acceptLanguage.get(request.headers.get("Accept-Language")),
  //   fallbackLocale,
  // });

  // redirect if locale in path is not supported
  if (
    !locales.some((locale) =>
      request.nextUrl.pathname.startsWith(`/${locale}`)
    ) &&
    !request.nextUrl.pathname.startsWith("/_next")
  ) {
    // console.log(
    //   " 👉 redirect to:",
    //   `/${locale}${request.nextUrl.pathname}${request.nextUrl.search}`
    // );
    return NextResponse.redirect(
      new URL(
        `/${locale}${request.nextUrl.pathname}${request.nextUrl.search}`,
        request.url
      ),
      {
        headers: requestHeaders,
      }
    );
  }

  if (request.headers.has("referer")) {
    const refererUrl = new URL(request?.headers?.get("referer") ?? "");
    const localeInReferer = locales.find((locale) =>
      refererUrl.pathname.startsWith(`/${locale}`)
    );
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    if (localeInReferer) response.cookies.set(cookieName, localeInReferer);
    return response;
  }

  return NextResponse.next();
}

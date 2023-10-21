"use client";

import { cookieName, fallbackLocale, locales } from "@/i18n/settings";
import Image from "next/image";
import { usePathname } from "next/navigation";
import pkg from "../../package.json";

function getLocaleFromPathname(pathname: string) {
  const firstPathSegment = pathname.split("/").at(1);
  if (firstPathSegment && locales.includes(firstPathSegment)) {
    return firstPathSegment;
  }
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) ?? fallbackLocale;
  const opponentLocale = locale === "de" ? "en" : "de";
  return (
    <>
      <nav className="z-50 backdrop-blur-md bg-white/30 bg-white dark:bg-black/30 fixed w-full top-0 left-0 border-b border-black/10 dark:border-white/10">
        <div className="max-w-5xl flex flex-wrap items-center justify-between mx-auto p-4 lg:px-0">
          <div className="flex gap-2 items-center">
            <a
              className="flex place-items-center gap-2 p-0 lg:pointer-events-auto"
              href="/"
              rel="noopener noreferrer"
            >
              <Image
                src="/prisma.svg"
                alt="Prisma Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              v{pkg.version}
            </span>
          </div>
          <div className="flex items-center">
            <form action={`/api/set-locale`} method="get">
              <input type="hidden" name={cookieName} value={opponentLocale} />
              <button
                type="submit"
                className="flex flex-row items-center gap-2 leading-0 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <title>earth</title>
                  <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>
                {locale === "de" ? "EN" : "DE"}
              </button>
            </form>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}

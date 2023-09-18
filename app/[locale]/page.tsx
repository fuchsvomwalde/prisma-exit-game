import NavTile from "@/components/NavTile";
import Terminal from "@/components/Terminal";
import { serverTranslation } from "@/i18n";
import { cookieName, locales } from "@/i18n/settings";
import Image from "next/image";
import { getAllGames } from "../api/_lib/actions";
import { Game } from "../api/_lib/model";

import messageLoader from "@/app/[locale]/_messages";

export default async function Home({ params }: { params: { locale: string } }) {
  const { t } = await serverTranslation(messageLoader, params.locale);
  const games: Array<Game> = await getAllGames();

  return (
    <Terminal>
      <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="whitespace-nowrap p-4 left-0 top-0 flex w-full justify-center dark:border-neutral-800 lg:static lg:w-auto lg:rounded-xl">
            {t("welcomeTo")}
            &nbsp;
            <code className="font-mono font-bold">Prisma Games</code>.
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              // href=""
              // target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/prisma.svg"
                alt="Prisma Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        {/* <button
          type="button"
          className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <title>translate</title>
            <path d="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z" />
          </svg>
          <span className="sr-only">Icon description</span>
        </button> */}

        {/* TODO: add in global toolbar */}
        <form action={`/api/set-locale`} method="get">
          <input type="hidden" name={cookieName} value="en" />
          <button type="submit">change language to en</button>
        </form>
        <form action={`/api/set-locale`} method="get">
          <input type="hidden" name={cookieName} value="de" />
          <button type="submit">change language to de</button>
        </form>

        <div className="relative pointer-events-none flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/prisma.svg"
            alt="Prisma Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {games.map((game) => (
            <NavTile
              key={game.slug}
              href={`/${game.slug}`}
              title={game.name}
              subline={game.description}
            />
          ))}
        </div>
      </main>
    </Terminal>
  );
}

export async function generateStaticParams() {
  return (
    locales.map((locale) => ({
      locale: locale,
    })) ?? []
  );
}

export const dynamicParams = false;

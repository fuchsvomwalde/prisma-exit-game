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
  const games: Array<Game> = await getAllGames(params.locale);

  return (
    <Terminal>
      <main className="flex min-h-[calc(100vh-83px)] flex-col items-center justify-between p-8 lg:p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="whitespace-nowrap p-4 left-0 top-0 flex w-full justify-center dark:border-neutral-800 lg:static lg:w-auto lg:rounded-xl">
            {t("welcomeTo")}
            &nbsp;
            <code className="font-mono font-bold">Prisma Games</code>.
          </p>
        </div>

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

import NavTile from "@/components/NavTile";
import Terminal from "@/components/Terminal";
import Image from "next/image";
import { getAllGames } from "../../api/_lib/actions";
import { Game } from "../../api/_lib/model";
import getGameState from "./_utils/useGameState";
import { serverTranslation } from "@/i18n";
import messageLoader from "../_messages";

export default async function Game({
  params,
}: {
  params: { gameSlug: string; locale: string };
}) {
  const { t } = await serverTranslation(messageLoader, params.locale);
  const { passedAnyLevel, passedLevel, firstLevel } = await getGameState(
    params.gameSlug,
    params.locale
  );

  const terminalVariant =
    passedAnyLevel && passedLevel?.finalLevel ? "success" : "default";

  return (
    <Terminal variant={terminalVariant}>
      <main className="flex min-h-[calc(100vh-83px)] flex-col items-center justify-between p-8 lg:p-24">
        <div className="z-10 lg:max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="whitespace-nowrap p-4 left-0 top-0 flex w-full justify-center dark:border-neutral-800 lg:static lg:w-auto lg:rounded-xl">
            {t("welcomeTo")}&nbsp;
            <code className="font-mono font-bold">Prisma</code>&nbsp;
            {t("theExitGame")}.
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

        {/* TODO: here we can test SMS services */}
        {/* <SendMessage /> */}
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {!passedAnyLevel && (
            <NavTile
              href={`/${params.gameSlug}/level/${firstLevel?.slug}`}
              title={t("navigation.start.title")}
              subline={t("navigation.start.description")}
            />
          )}
          {passedAnyLevel && (
            <NavTile
              href={
                !passedLevel?.finalLevel
                  ? `/${params.gameSlug}/level/${passedLevel?.next_slug}`
                  : `/${params.gameSlug}/level/${passedLevel?.slug}/result`
              }
              title={t("navigation.continue.title")}
              subline={t("navigation.continue.description")}
            />
          )}
          {passedAnyLevel && (
            <NavTile
              href={`/${params.gameSlug}/reset`}
              title={t("navigation.reset.title")}
              subline={t("navigation.reset.description")}
            />
          )}
          <NavTile
            href={`/${params.gameSlug}/instructions`}
            title={t("navigation.rules.title")}
            subline={t("navigation.rules.description")}
          />
        </div>
      </main>
    </Terminal>
  );
}

export async function generateStaticParams({
  params,
}: {
  params: { locale: string };
}) {
  const games: Array<Game> = await getAllGames(params.locale);

  return games.map((game) => ({
    // locale: params.locale,
    gameSlug: game.slug,
  }));
}

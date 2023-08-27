import NavTile from "@/components/NavTile";
import Terminal from "@/components/Terminal";
import { cookies } from "next/headers";
import Image from "next/image";
import { getFirstLevel, getLevelBySlug } from "./api/game/actions";
import { COOKIE_KEY, NO_LEVEL } from "./api/game/constants";

export default async function Home() {
  const cookieStore = cookies();
  const passedLevelSlug = cookieStore.get(COOKIE_KEY)?.value ?? "";
  const passedAnyLevel = passedLevelSlug && passedLevelSlug !== NO_LEVEL;
  const passedLevel = await getLevelBySlug(passedLevelSlug);
  const firstLevel = await getFirstLevel();

  return (
    <Terminal>
      <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="whitespace-nowrap p-4 left-0 top-0 flex w-full justify-center dark:border-neutral-800 lg:static lg:w-auto lg:rounded-xl">
            Welcome to&nbsp;
            <code className="font-mono font-bold">Prisma</code>&nbsp;the exit
            game.
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
          {!passedAnyLevel && (
            <NavTile
              href={`/level/${firstLevel?.slug}`}
              title="Start game"
              subline="Start game as soon as you are ready."
            />
          )}
          {passedAnyLevel && passedLevel?.next_slug && (
            <NavTile
              href={`/level/${passedLevel?.next_slug}`}
              title="Continue"
              subline="Continue where you left."
            />
          )}
          {passedAnyLevel && (
            <NavTile
              href={`/api/game/reset`}
              title="Reset game"
              subline="Start from the beginning."
            />
          )}
          <NavTile
            href="/instructions"
            title="Game rules"
            subline="Read the rules of the game here."
          />
        </div>
      </main>
    </Terminal>
  );
}

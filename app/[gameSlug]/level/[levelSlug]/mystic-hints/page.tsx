import { getLevelBySlug } from "@/app/api/_lib/actions";
import ClueCard from "@/components/ClueCard";
import NavTile from "@/components/NavTile";
import Terminal from "@/components/Terminal";
import { cookies } from "next/headers";

export default async function GameLevelMysticHints({
  params,
}: {
  params: { gameSlug: string; levelSlug: string };
}) {
  const level = await getLevelBySlug(params.gameSlug, params.levelSlug);

  const cookieStore = cookies();
  const passedLevel = cookieStore.get(params.gameSlug)?.value ?? "";

  const clues = level?.clues ?? [];

  return (
    <Terminal variant="default">
      <main className="flex min-h-screen flex-col items-center justify-start p-8 lg:p-24">
        <div className="lg:max-w-5xl mb-8 grid text-center w-full lg:w-full lg:grid-cols-4 lg:text-left">
          <NavTile
            href={`/${params.gameSlug}/level/${params.levelSlug}`}
            title="Return to the Nexus"
            subline={`Step back into the realm of choices. Enter the sacred words and determine your destiny.`}
            back
          />
        </div>

        <div className="lg:max-w-5xl mb-8 text-center w-full lg:w-full lg:text-left flex-grow">
          {clues?.length === 0 && (
            <div
              className="flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
              role="alert"
            >
              <svg
                className="flex-shrink-0 inline w-4 h-4 mr-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">The Enchanted Empty</span> You
                have ventured into an uncharted domain where riddles and hints
                are yet to be born. Tread lightly, and perhaps the mysteries of
                this realm will unfold before you in due time.
              </div>
            </div>
          )}

          <div className="flex flex-col gap-8 items-center w-full">
            {clues?.map((clue, clueIndex) => {
              return <ClueCard key={`clue-${clueIndex}`} clue={clue} />;
            })}
          </div>
        </div>
      </main>
    </Terminal>
  );
}

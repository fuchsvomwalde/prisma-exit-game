import { notFound } from "next/navigation";
import { getGame, getLevelBySlug } from "@/app/api/_lib/actions";
import { FORM_DATA_LEVEL_SUBMIT_PASSCODE } from "@/app/api/_lib/constants";
import AnimatedType from "@/components/AnimatedType";
import NavTile from "@/components/NavTile";
import Terminal from "@/components/Terminal";
import { getBlankLineByTitle, textToAsciArt } from "@/utils/asciiArt";

export default async function GameLevel({
  params,
}: {
  params: { gameSlug: string; levelSlug: string };
}) {
  const level = await getLevelBySlug(params.gameSlug, params.levelSlug);

  if (!level) {
    notFound();
  }

  // TODO: replace title
  const title = textToAsciArt(level?.title ?? "");
  const blankLine = getBlankLineByTitle(title);

  return (
    <Terminal>
      <main className="flex min-h-screen flex-col items-center justify-start p-8 lg:p-24">
        <div className="lg:max-w-5xl mb-8 grid text-center w-full lg:w-full lg:grid-cols-4 lg:text-left">
          <NavTile
            href={`/${params.gameSlug}`}
            title="Back"
            subline="Go back to home."
            back
          />
        </div>

        <div className="lg:max-w-5xl mb-8 text-xs transform scale-75 lg:w-full lg:scale-100">
          <div className="font-mono whitespace-pre-line">{title}</div>
          <div className="font-mono whitespace-nowrap">{blankLine}</div>
        </div>

        <div className="lg:max-w-5xl mb-8 w-full">
          <AnimatedType message={level?.message ?? ""} />
        </div>

        <div className="mb-4 lg:max-w-5xl z-10 w-full items-start justify-between font-mono lg:flex flex-grow">
          <form
            action={`/${params.gameSlug}/level/${params.levelSlug}/submit`}
            method="get"
            autoComplete="off"
          >
            <label
              htmlFor="password"
              className="block mb-2 font-large text-gray-900 dark:text-white"
            >
              {level?.solution_prompt}
            </label>
            <input
              type="text"
              autoComplete="off"
              id="password"
              className="mb-4 bg-gray-50 w-full border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              name={FORM_DATA_LEVEL_SUBMIT_PASSCODE}
              required
            />
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="lg:max-w-5xl mb-8 grid text-center w-full lg:w-full lg:grid-cols-4 lg:text-left">
          <NavTile
            href={`/${params.gameSlug}/level/${params.levelSlug}/mystic-hints`}
            title="Unearth Clues"
            subline={`Dive into the world of mysteries and discover the secrets needed to progress.`}
          />
          <NavTile
            href={`/${params.gameSlug}/level/${params.levelSlug}/ancient-aid`}
            title="Seek Guidance"
            subline={`Lost in the enigma? Gain insights, but aware, spoilers ahead.`}
          />
        </div>
      </main>
    </Terminal>
  );
}

export async function generateStaticParams({
  params,
}: {
  params: { gameSlug: string; levelSlug: string };
}) {
  const game = await getGame(params.gameSlug);

  return (
    game?.levels.map((level) => ({
      gameSlug: params.gameSlug,
      levelSlug: level.slug,
    })) ?? []
  );
}

export const dynamicParams = false;

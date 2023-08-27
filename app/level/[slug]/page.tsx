import { getGame, getLevelBySlug } from "@/app/api/game/actions";
import { FORM_DATA_SUBMISSION_KEY } from "@/app/api/game/constants";
import { Game } from "@/app/api/game/model";
import AnimatedType from "@/components/AnimatedType";
import NavTile from "@/components/NavTile";
import Terminal from "@/components/Terminal";
import { getBlankLineByTitle, textToAsciArt } from "@/utils/asciiArt";

export default async function PageLevel({
  params,
}: {
  params: { slug: string };
}) {
  const level = await getLevelBySlug(params.slug);

  // TODO: replace title
  const title = textToAsciArt(level?.title ?? "");
  const blankLine = getBlankLineByTitle(title);

  return (
    <Terminal>
      <main className="flex min-h-screen flex-col items-center justify-start p-8 lg:p-24">
        <div className="mb-8 grid text-center w-full lg:max-w-5xl lg:w-full lg:grid-cols-4 lg:text-left">
          <NavTile href="/" title="Back" subline="Go back to home." back />
        </div>

        <div className="mb-8 text-xs transform scale-75 lg:w-full lg:scale-100">
          <div className="font-mono whitespace-pre-line">{title}</div>
          <div className="font-mono whitespace-nowrap">{blankLine}</div>
        </div>

        <div className="mb-8 w-full">
          <AnimatedType message={level?.message ?? ""} />
        </div>

        <div className="z-10 w-full items-center justify-between font-mono lg:flex">
          <form
            action={`/level/${params.slug}/submit`}
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
              name={FORM_DATA_SUBMISSION_KEY}
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
      </main>
    </Terminal>
  );
}

export async function generateStaticParams() {
  const game: Game = await getGame();

  return game.levels.map((level) => ({
    slug: level.slug,
  }));
}

import { getLevelBySlug } from "@/app/api/_lib/actions";
import AidAccordion from "@/components/AidAccordion";
import NavTile from "@/components/NavTile";
import Terminal from "@/components/Terminal";

export default async function GameLevelAncientAid({
  params,
}: {
  params: { gameSlug: string; levelSlug: string };
}) {
  const level = await getLevelBySlug(params.gameSlug, params.levelSlug);
  const aids = level?.aids ?? [];

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

        <div className="lg:max-w-5xl mb-8 text-center w-full lg:w-full lg:text-left">
          {aids?.length === 0 && (
            <div
              className="flex mb-8 items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
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
                <span className="font-medium">The Void of Silence</span> In this
                ancient space, guidance is veiled in shadows. For now, trust
                your instincts and navigate with the wisdom you already possess.
                The cosmos will unveil its guidance when the time is right.
              </div>
            </div>
          )}

          {aids?.length > 0 && (
            <div
              className="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800 text-shadow-lg shadow-yellow-800"
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
              <span className="sr-only">Warning</span>
              <div>
                <span className="font-medium">
                  Spoiler Warning: Proceed with Caution!
                </span>{" "}
                In the shadowy realms of this digital odyssey, assistance is
                coded. While we&apos;ve restrained the omnipotent hints that
                could decrypt all, know they exist. Should you find yourself
                lost within this cyber maze, revisit the overlooked data
                fragments. But BEWARE: Initiate the search codes only if truly
                trapped - for hacking the game&apos;s matrix with these keys
                diminishes the thrill of the conquest.
              </div>
            </div>
          )}

          <AidAccordion aids={aids} />
        </div>
      </main>
    </Terminal>
  );
}

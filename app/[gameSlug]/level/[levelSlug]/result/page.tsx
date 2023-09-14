import { getLevelBySlug } from "@/app/api/game/actions";
import AnimatedType from "@/components/AnimatedType";
import NavTile from "@/components/NavTile";
import Terminal from "@/components/Terminal";
import { getBlankLineByTitle, textToAsciArt } from "@/utils/asciiArt";
import { cookies } from "next/headers";

export default async function GameLevelResult({
  params,
}: {
  params: { gameSlug: string; levelSlug: string };
}) {
  const level = await getLevelBySlug(params.gameSlug, params.levelSlug);

  const cookieStore = cookies();
  const passedLevel = cookieStore.get(params.gameSlug)?.value ?? "";

  const passed = passedLevel === level?.slug;

  const title = passed ? textToAsciArt("Passed") : textToAsciArt("Failure");
  const blankLine = getBlankLineByTitle(title);

  const message = passed ? level?.success_message : level?.failure_message;
  const terminalVariant = passed ? "success" : "error";

  return (
    <Terminal variant={terminalVariant}>
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

        <div className="lg:max-w-5xl mb-8 w-full flex-grow">
          <AnimatedType message={message ?? ""} />
        </div>

        <div className="lg:max-w-5xl mb-8 grid text-center w-full lg:w-full lg:grid-cols-4 lg:text-left">
          {!passed && (
            <NavTile
              href={`/${params.gameSlug}/level/${params.levelSlug}`}
              title="Retry"
              subline="Back to reenter solution."
              back
              customIcon={<>&#8635;</>}
            />
          )}
          {passed && level?.next_slug && (
            <NavTile
              href={`/${params.gameSlug}/level/${level?.next_slug}`}
              title="Next level"
              subline="Move on to the next level."
            />
          )}
        </div>
      </main>
    </Terminal>
  );
}

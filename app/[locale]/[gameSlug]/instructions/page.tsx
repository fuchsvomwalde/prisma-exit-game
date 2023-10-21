import AnimatedType from "@/components/AnimatedType";
import NavTile from "@/components/NavTile";
import Terminal from "@/components/Terminal";
import { getBlankLineByTitle, textToAsciArt } from "@/utils/asciiArt";
import getGameState from "../_utils/useGameState";
import { serverTranslation } from "@/i18n";
import messageLoader from "../../_messages";

export default async function GameInstructions({
  params,
}: {
  params: { gameSlug: string; locale: string };
}) {
  const { t } = await serverTranslation(messageLoader, params.locale);
  const { passedAnyLevel, passedLevel, firstLevel } = await getGameState(
    params.gameSlug,
    params.locale
  );

  const title = textToAsciArt(t("instructions.title"));
  const blankLine = getBlankLineByTitle(title);

  return (
    <Terminal>
      <main className="flex min-h-[calc(100vh-83px)] flex-col items-center justify-start p-8 lg:p-24">
        <div className="lg:max-w-5xl mb-8 grid text-center w-full lg:w-full lg:grid-cols-4 lg:text-left">
          <NavTile
            href={`/${params.gameSlug}`}
            title={t("instructions.navigation.back.title")}
            subline={t("instructions.navigation.back.description")}
            back
          />
        </div>

        <div className="lg:max-w-5xl mb-8 text-xs transform scale-75 lg:w-full lg:scale-100">
          <div className="font-mono whitespace-pre-line">{title}</div>
          <div className="font-mono whitespace-nowrap">{blankLine}</div>
        </div>

        <div className="lg:max-w-5xl mb-8 w-full flex-grow">
          <AnimatedType
            delay={0}
            message={t("instructions.content")}
            speed={90}
          />
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {!passedAnyLevel && (
            <NavTile
              href={`/${params.gameSlug}/level/${firstLevel?.slug}`}
              title={t("navigation.start.title")}
              subline={t("navigation.start.description")}
            />
          )}
          {passedAnyLevel && passedLevel?.next_slug && (
            <NavTile
              href={`/${params.gameSlug}/level/${passedLevel?.next_slug}`}
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
        </div>
      </main>
    </Terminal>
  );
}

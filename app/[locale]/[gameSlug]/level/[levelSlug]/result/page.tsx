import messageLoader from "@/app/[locale]/_messages";
import { getLevelBySlug } from "@/app/api/_lib/actions";
import AnimatedType from "@/components/AnimatedType";
// import { GameReward } from "@/components/GameReward";
import NavTile from "@/components/NavTile";
import Terminal from "@/components/Terminal";
import { serverTranslation } from "@/i18n";
import { getBlankLineByTitle, textToAsciArt } from "@/utils/asciiArt";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";

const GameReward = dynamic(() => import("@/components/GameReward"), {
  ssr: false,
});

export default async function GameLevelResult({
  params,
}: {
  params: { gameSlug: string; levelSlug: string; locale: string };
}) {
  const { t } = await serverTranslation(messageLoader, params.locale);
  const level = await getLevelBySlug(
    params.gameSlug,
    params.levelSlug,
    params.locale
  );

  const cookieStore = cookies();
  const passedLevel = cookieStore.get(params.gameSlug)?.value ?? "";

  const passed = passedLevel === level?.slug;

  const title = passed
    ? textToAsciArt(level?.success_title ? level?.success_title : "Passed")
    : textToAsciArt(level?.failure_title ? level?.failure_title : "Failure");
  const blankLine = getBlankLineByTitle(title);

  const message = passed ? level?.success_message : level?.failure_message;
  const terminalVariant = passed ? "success" : "error";

  return (
    <Terminal variant={terminalVariant}>
      <div className="flex w-full items-center justify-center">
        {passed && <GameReward start={passed} loop={level?.finalLevel} />}
      </div>
      <main className="flex min-h-[calc(100vh-83px)] flex-col items-center justify-start p-8 lg:p-24">
        <div className="lg:max-w-5xl mb-8 grid text-center w-full lg:w-full lg:grid-cols-4 lg:text-left">
          <NavTile
            href={`/${params.gameSlug}`}
            title={t("level.navigation.back.title")}
            subline={t("level.navigation.back.description")}
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
              title={t("level.navigation.retry.title")}
              subline={t("level.navigation.retry.description")}
              back
              customIcon={<>&#8635;</>}
            />
          )}
          {passed && level?.next_slug && (
            <NavTile
              href={`/${params.gameSlug}/level/${level?.next_slug}`}
              title={t("level.navigation.next.title")}
              subline={t("level.navigation.next.description")}
            />
          )}
        </div>
      </main>
    </Terminal>
  );
}

export const dynamicParams = false;

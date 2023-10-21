import "server-only";
import { getFirstLevel, getGame, getLevelBySlug } from "@/app/api/_lib/actions";
import { NO_LEVEL } from "@/app/api/_lib/constants";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export default async function getGameState(gameSlug: string, locale: string) {
  const cookieStore = cookies();
  const passedLevelSlug = cookieStore.get(gameSlug)?.value ?? "";
  const passedAnyLevel = passedLevelSlug && passedLevelSlug !== NO_LEVEL;
  const game = await getGame(gameSlug, locale);
  const passedLevel = await getLevelBySlug(gameSlug, passedLevelSlug, locale);
  const firstLevel = await getFirstLevel(gameSlug, locale);

  if (!game) {
    notFound();
  }

  return {
    passedAnyLevel,
    passedLevel,
    firstLevel,
  };
}

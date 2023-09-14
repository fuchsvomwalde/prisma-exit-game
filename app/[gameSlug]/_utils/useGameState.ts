import { getFirstLevel, getGame, getLevelBySlug } from "@/app/api/game/actions";
import { NO_LEVEL } from "@/app/api/game/constants";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import "server-only";

export default async function getGameState(gameSlug: string) {
  const cookieStore = cookies();
  const passedLevelSlug = cookieStore.get(gameSlug)?.value ?? "";
  const passedAnyLevel = passedLevelSlug && passedLevelSlug !== NO_LEVEL;
  const game = await getGame(gameSlug);
  const passedLevel = await getLevelBySlug(gameSlug, passedLevelSlug);
  const firstLevel = await getFirstLevel(gameSlug);

  if (!game) {
    notFound();
  }

  return {
    passedAnyLevel,
    passedLevel,
    firstLevel,
  };
}

import "server-only";
import {
  Aid,
  Clue,
  Game,
  Level,
  MultiLanguage,
  SingleLanguage,
  games,
} from "./model";

export async function getAllGames(locale: string) {
  return games.map((game) => _transformGameToSingleLocale(game, locale));
}

export async function getGame(game_slug: string, locale: string) {
  const game = games.find((game) => game.slug === game_slug);

  return game ? _transformGameToSingleLocale(game, locale) : undefined;
}

export async function getLinkBySlug(
  game_slug: string,
  link_slug: string,
  locale: string
) {
  const game = await getGame(game_slug, locale);

  return game?.links.find((link) => link.slug === link_slug);
}

export async function getFirstLevel(game_slug: string, locale: string) {
  const game = await getGame(game_slug, locale);

  return game?.levels.find((level) => level.firstLevel);
}

export async function getLevelBySlug(
  game_slug: string,
  level_slug: string,
  locale: string
) {
  const game = await getGame(game_slug, locale);

  return game?.levels.find((level) => level.slug === level_slug);
}

export async function getLevelByNextSlug(
  game_slug: string,
  next_level_slug: string,
  locale: string
) {
  const game = await getGame(game_slug, locale);

  return game?.levels.find((level) => level.next_slug === next_level_slug);
}

function _transformClueToSingleLocale(
  clue: Clue<MultiLanguage>,
  locale: string
): Clue<SingleLanguage> {
  const { title, description, text, ...rest } = clue;

  return {
    ...rest,
    title: title[locale],
    description: description?.[locale],
    text: text?.[locale],
  };
}

function _transformAidToSingleLocale(
  help: Aid<MultiLanguage>,
  locale: string
): Aid<SingleLanguage> {
  const { title, messages, ...rest } = help;

  return {
    ...rest,
    title: title[locale],
    messages: messages.map((message) => message[locale]),
  };
}

function _transformLevelToSingleLocale(
  link: Level<MultiLanguage>,
  locale: string
): Level<SingleLanguage> {
  const {
    title,
    message,
    success_title,
    success_message,
    failure_title,
    failure_message,
    solution_prompt,
    solution,
    helps,
    clues,
    ...rest
  } = link;

  return {
    ...rest,
    title: title[locale],
    message: message[locale],
    success_title: success_title?.[locale],
    success_message: success_message[locale],
    failure_title: failure_title?.[locale],
    failure_message: failure_message[locale],
    solution_prompt: solution_prompt[locale],
    solution: solution[locale],
    helps: helps?.map((help) => _transformAidToSingleLocale(help, locale)),
    clues: clues?.map((clue) => _transformClueToSingleLocale(clue, locale)),
  };
}

function _transformGameToSingleLocale(
  game: Game<MultiLanguage>,
  locale: string
): Game<SingleLanguage> {
  const { name, description, ...rest } = game;

  return {
    ...rest,
    name: name[locale],
    description: description[locale],
    levels: game.levels.map((level) =>
      _transformLevelToSingleLocale(level, locale)
    ),
  };
}

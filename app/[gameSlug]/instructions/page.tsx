import AnimatedType from "@/components/AnimatedType";
import NavTile from "@/components/NavTile";
import Terminal from "@/components/Terminal";
import { getBlankLineByTitle, textToAsciArt } from "@/utils/asciiArt";
import getGameState from "../_utils/useGameState";

export default async function GameInstructions({
  params,
}: {
  params: { gameSlug: string };
}) {
  const { passedAnyLevel, passedLevel, firstLevel } = await getGameState(
    params.gameSlug
  );

  const title = textToAsciArt("Rules");
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

        <div className="lg:max-w-5xl mb-8 w-full flex-grow">
          <AnimatedType
            delay={0}
            message={`Welcome to Prisma. This is an exit game based on a true story. If you want to know all the secrets about the background, you have to pass all the levels and enter the final solution word. The rules of the game are simple. You have to complete all the levels in the shortest possible time and enter the correct solution word for each level on this website to succeed. The website will tell you if the solution word was right or wrong.

            In your room there is a suitcase, in this suitcase there are more boxes, each box represents another level (marked by a black and white number). You can open the box with the next level only after solving the previous level. 
            
            1. CARDS: In each box (or level) you will find cards marked with red letters. For each level there is at least one card with a QR code that directs you to further clues and help on the web. 
            
            2. AIDS: From level to level you also collect aids. Not all cards and aids are always needed directly, some you need to save for later, expect the unexpected.
            
            3. HELP: If you need help or tips and the hints on cards and on the web are not enough, the game master is available to answer your questions.
            
            4. IMPORTANT: In addition to the tools provided, you will also need a working smartphone with an internet connection (and maybe more equipment). It may also be helpful to have a pen and paper ready to take notes.
            
            5. THE GAME BEGINS: What are you waiting for? Start the game and complete all the levels to crack the secret behind Prisma!`}
            speed={90}
          />
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {!passedAnyLevel && (
            <NavTile
              href={`/${params.gameSlug}/level/${firstLevel?.slug}`}
              title="Start game"
              subline="Start game as soon as you are ready."
            />
          )}
          {passedAnyLevel && passedLevel?.next_slug && (
            <NavTile
              href={`/${params.gameSlug}/level/${passedLevel?.next_slug}`}
              title="Continue"
              subline="Continue where you left."
            />
          )}
          {passedAnyLevel && (
            <NavTile
              href={`/${params.gameSlug}/reset`}
              title="Reset game"
              subline="Start from the beginning."
            />
          )}
          <NavTile
            href={`/${params.gameSlug}/instructions`}
            title="Game rules"
            subline="Read the rules of the game here."
          />
        </div>
      </main>
    </Terminal>
  );
}

import AnimatedType from "@/components/AnimatedType";
import NavTile from "@/components/NavTile";
import Terminal from "@/components/Terminal";
import { getBlankLineByTitle, textToAsciArt } from "@/utils/asciiArt";

export default function Code() {
  const title = textToAsciArt("Rules");
  const blankLine = getBlankLineByTitle(title);

  return (
    <Terminal>
      <main className="flex min-h-screen flex-col items-center justify-start p-8 lg:p-24">
        <div className="mb-8 grid text-center w-full lg:w-full lg:grid-cols-4 lg:text-left">
          <NavTile href="/" title="Back" subline="Go back to home." back />
        </div>

        <div className="mb-8 text-xs transform scale-75 lg:w-full lg:scale-100">
          <div className="font-mono whitespace-pre-line">{title}</div>
          <div className="font-mono whitespace-nowrap">{blankLine}</div>
        </div>

        <div className="mb-8 w-full">
          <AnimatedType
            delay={0}
            message={`The rules of the game are simple. You have to complete all the levels in the shortest possible time and enter the correct solution word for each level on this website to win the game. The website will tell you if the solution word was right or wrong.

            In your room there is a suitcase, in this suitcase there are more boxes, each box represents another level (marked by a blue number). You can open the box with the next level only after solving the previous level. 
            
            1. PUZZLE CARDS: In each box you will find red puzzle cards (marked with red letters). Some puzzle cards give you clues to the current solution word, other puzzle cards you collect for a later level. 
            
            2. AIDS: From level to level you also collect aids (e.g. a flashlight, etc.). Also, the tools you collect are sometimes intended for future levels and may be used in several levels.
            
            3. HELP: If you need help or tips, the game master is available to answer your questions.
            
            4. HINT: In addition to the tools provided, you will also need a working smartphone with an internet connection, and it may also be helpful to have a pen and paper ready to take notes.
            
            5. THE GAME BEGINS: What are you waiting for? Start the game and complete all the levels to crack the secret behind Prisma!`}
            speed={90}
          />
        </div>
      </main>
    </Terminal>
  );
}

import "server-only";

export interface Level {
  firstLevel?: boolean;
  finalLevel?: boolean;
  slug: string;
  title: string;
  message: string;
  success_title?: string;
  success_message: string;
  failure_title?: string;
  failure_message: string;
  solution_prompt: string;
  solution: string;
  next_slug?: string;
}

export interface Link {
  slug: string;
  href: string;
}

export interface Game {
  slug: string;
  name: string;
  description: string;
  levels: Array<Level>;
  links: Array<Link>;
}

export const games: Array<Game> = [
  {
    slug: "cl4551c",
    name: "Classic",
    description: "First exit game from prisma games.",
    links: [
      {
        /**
         * TODO: display link to binary calculator as the last hint, before that, show videos about binary system
         */
        slug: "8170",
        href: "https://letmegooglethat.com/?q=number+to+binary",
      },
      {
        /**
         * TODO: add additional hints:
         * - snowflake and special light rays will reveal the secret
         */
        slug: "r00m",
        href: "/oh-hi-mark.mp4",
      },
      {
        /**
         * TODO: add additional hints:
         * - poem about the other link and about that red reveals the secret
         * - info about google reverse search to identify origins of pictures
         */
        slug: "h1d3",
        href: "/secret.png",
      },
      {
        /**
         * TODO: protect link with password: "einstein"
         */
        slug: "57g0",
        href: "https://stegonline.georgeom.net/embed",
      },
      {
        /**
         * TODO: add additional hints:
         * - use revers playback online tools
         * - poem about the secret behind the numbers: GPS coordinates
         * - info about google maps and that you can enter GPS coordinates
         * - info about noctual animals
         */
        slug: "rvr5",
        href: "/r3v3r53.mp3",
      },
      {
        /**
         * TODO: add additional hints:
         * - poem about the puzzle that will guide you to the secret of the kryptex
         * - blueprint of the prisma encoder mechanism
         * - poem with hint to patterns that will reveal the sequence
         * - poem with hint about the flux foil that will reveal secrets of the numpad
         */
        slug: "c0d3",
        href: "/",
      },
    ],
    levels: [
      {
        firstLevel: true,
        slug: "w4rmup",
        title: "Level 1",
        message: `Greetings, brave souls. You've heeded our mysterious call and stepped into the unknown. How intriguing... You're not a random choice; every move, every secret, every talent you possess has been observed. 
        
        Now, let us unveil our identity: We are Prisma, the shadowy consortium operating from the unseen corners of the world. Only a select few are deemed worthy to join our ranks. Will your team rise to the occasion and prove its mettle? Can you navigate the twisted labyrinths and challenges we've meticulously designed for you, or will you crumble at the very start? Our faith in you is a gamble, and we eagerly await to see if it's well-placed. Embrace the journey, and may the odds be ever in your favor.`,
        success_message:
          "Ah, you've cracked the first code, but don't be too smug. That was merely a taste of what's to come. Prepare yourselves, for the true challenge lurks just around the corner. The depths of Prisma's puzzles have swallowed many before you. Will you be the next?",
        failure_message:
          "Hmm, stumbling so soon? Remember, that was just the simplest of riddles designed by the enigmatic minds of Prisma. Refocus and try again, for the path ahead is treacherous and will demand nothing but your best.",
        solution_prompt: "Input Secret Code",
        solution: "hello world",
        next_slug: "101",
      },
      {
        slug: "101",
        title: "Level 2",
        message:
          "Welcome to Level Two! In front of you is a box with the number two on it. It might look simple, but pay close attention. There might be small clues here that will help you with bigger challenges later on. Ready to see what's inside?",
        success_message:
          "Good job! You figured out another of Prisma's puzzles. But don't get too comfortable. The clues you found here might be important later on. Remember everything you see and learn. Things might get trickier soon!",
        failure_message:
          "Oops! Made a mistake? It's okay. This level is still pretty simple. But remember, every clue counts. Take a moment, think again, and give it another try. Prisma's mysteries are waiting for you!",
        solution_prompt: "Input Secret Code",
        solution: "101011001",
        next_slug: "r00m",
      },
      {
        slug: "r00m",
        title: "Level 3",
        message: `You've treaded through Prisma's initial layers, but now the realm you've entered is a blend of shadows and illumination. Before you is the next box, proudly showcasing the number three. While its exterior may seem familiar, the heart of this challenge pulsates with excitement. Will you let loose, tap into your creativity, and dive headfirst into the thrill that awaits? In this level, the journey is as delightful as the destination.
        
        In the realm of moving sights and sound,
A tale of two names can be found.
Search the scenes, lend your ear,
For whispered secrets, crystal clear.

One name floats, and then the other,
Each spoken time, you must gather.
Combine their mentions, count with care,
The sum of echoes in the air.

Their total count, a number true,
Will be the key that guides you through.`,
        success_message:
          "Bravo! You've not only unlocked the secrets within but also embraced the exhilaration of the challenge. Your creativity shone through, casting away the shadows of doubt. But be mindful; while this round celebrated fun, the twists and turns of Prisma's maze are endless. Relish this victory, but always be prepared.",
        failure_message: `Ah, not quite right, my astute friend.
        Perhaps you confused or missed a name at the video's end?
        Focus on the whispers, both faint and loud,
        The correct number stands apart from the crowd.`,
        solution_prompt: "Enter the Echoed Number",
        solution: "15",
        next_slug: "chemistry",
      },
      {
        slug: "chemistry",
        title: "Level 4",
        message:
          "The layers unravel and the true depth of Prism's labyrinth is revealed. When you open the box with the number four, you stand at the precipice of the rabbit hole. This is the moment of reckoning. Stand resolute and unwavering before the tangled web that is about to ensnare you. Secrets to the past, the present and the future of Prisma beckon at the end of this puzzle. Will you answer this call?",
        success_message:
          "Astonishing! As you've unlocked this level, the annals of Prisma's history unfurl before you. Prisma's lineage is ancient, but among its luminaries are names you might recognize. The genius of Albert Einstein and Werner Heisenberg, both members of our enigmatic consortium. It was their collaborative vision to design this very test, seeking out the brightest minds across the globe to fortify Prisma's ranks. You tread a path they once envisioned, and by progressing thus far, you've earned a place among the elite. But remember, the journey has just begun.",
        failure_message:
          "Not so fast! The maze of Prisma is filled with shadows and mirages. While you might think of the evident, dig deeper into the chronicles of brilliant minds. Reflect upon the scientists who toyed with the very fabric of reality in their times. Take a breath, retrace your steps, and let history guide you through the enigma. The true essence of Prisma awaits those who persevere.",
        solution_prompt: "Input Secret Code",
        solution: "heisenberg",
        next_slug: "noctual-animal",
      },
      {
        slug: "noctual-animal",
        title: "Level 5",
        message:
          "Gone are the days of gentle guidance. You now find yourselves at the gates of Prisma's most intense chamber, where the stakes are high, and the margin for error is razor-thin. The box, bearing the enigmatic number five, beckons, its contents a testament to the highest echelons of challenge Prisma can muster. This is your crucible, the ultimate test before the grand finale. Steel your nerves, sharpen your intellect, and dive into the abyss of intrigue.",
        success_message:
          "Impressive! You've deciphered a language that dances between the lines of the known and the obscure. A caped crusader's call sign, masked in the digital dialect. By unlocking the secret, you've proven your prowess, solidifying your place as worthy contenders for Prisma's finale. But, while you revel in this victory, know this: every challenge you've faced, every code you've cracked, has led to this moment. The grand culmination awaits.",
        failure_message:
          "Alas, you've stumbled in this digital realm. The shadows play tricks, and not everything is as it appears. Think of guardians of the night, heroes cloaked in darkness, but viewed through the lens of the digital age. Retune your mind to the frequencies of the cyber-verse and try again. The finale looms close, and only the truly astute will breach its gates.",
        solution_prompt: "Input Secret Code",
        solution: "847m4n",
        next_slug: "pr15m4",
      },
      {
        finalLevel: true,
        slug: "pr15m4",
        title: "Level X",
        message: `The culmination of your journey with Prisma beckons. Before you sits a metal box, stoic and formidable, engraved with the final number - six. But, as you'll discover, unlocking this last threshold requires more than mere intellect. If you have been attentive, perceptive, and perhaps a touch devious, you may already possess the means to access its contents. If not, a poetic hint will guide you towards the unexpected:

        In a cube where pathways twist and bend,
        Not all journeys find their rightful end.
        Sometimes, to truly see the game's whole span,
        One must step outside the rules, and hatch a new plan.`,
        success_title: "You win",
        success_message: `Congratulations! Your entry into the heart of Prisma has revealed the intricate tapestry of a shadowy organization that has determined the destiny of our world since time immemorial. Wars, disasters, and even climate change - you might wonder how it could all be part of a plan. Believe us, not all of it was part of a plan, but you'd rather not imagine the chaos in the world without the hand of Prisma. Your test has been passed, and we look forward to welcoming you into our ranks. Our agents are already on their way to your location. Pack your bags, because the real adventure is just beginning.

        ~~~ THE END ~~~

        For the more observant among you, the true origin of Prisma should come as no surprise. Cicada 3301, an enigma of the Internet, the harbinger of cryptography puzzles, and the tantalizing attraction for many talented minds. Some suspect its roots in a government's intelligence agency, others see it originating in secret recruiting departments of tech giants, while a few suspect a cabal of elite hackers. Your journey with us was inspired by their legacy. We hope you enjoyed your ride.`,
        failure_message:
          "Ah, so close and yet so far. The finale is a test of all you've learned and some you've perhaps overlooked. Remember, in Prisma's world, not all is as it seems. Think outside the confines of convention. Reassess, revisit, and when ready, enter the heart of the enigma. The destiny of Prisma awaits your final touch.",
        solution_prompt: "Input Secret Code",
        solution: "3301",
      },
    ],
  },
];

import { StaticImageData } from "next/image";
import "server-only";

export interface Clue {
  title: string;
  description?: string;
  text?: string;
  image?: {
    download?: string;
    src: string;
    width: number;
    height: number;
  };
  video?: {
    download?: string;
    src: string;
    type: string;
  };
  audio?: {
    download?: string;
    src: string;
    type: string;
  };
  link?: string;
}

export interface Aid {
  title: string;
  messages: string[];
}

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
  clues?: Array<Clue>;
  aids?: Array<Aid>;
}

export interface Link {
  slug: string;
  href: string;
  /**
   * TODO: add password protection
   */
  password?: string;
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
        slug: "8170",
        href: "/cl4551c/level/101/mystic-hints",
      },
      {
        slug: "r00m",
        href: "/cl4551c/level/r00m/mystic-hints",
      },
      {
        slug: "h1d3",
        href: "/cl4551c/level/chemistry/mystic-hints",
      },
      {
        slug: "57g0",
        href: "https://stegonline.georgeom.net/embed",
        password: "einstein",
      },
      {
        slug: "rvr5",
        href: "/cl4551c/level/noctual-animal/mystic-hints",
      },
      {
        slug: "c0d3",
        href: "/cl4551c/level/pr15m4/mystic-hints",
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
        aids: [
          {
            title: "The missing puzzle piece",
            messages: [
              "Don't worry everything in the game has its purpose, at the very end of the journey you will understand everything.",
            ],
          },
          {
            title: "The UV lamp",
            messages: [
              "The UV lamp will help you to find hidden messages.",
              "Use the UV lamp to reveal the hidden message on the puzzle.",
            ],
          },
          {
            title: "The puzzle",
            messages: [
              "The puzzle contains a secret message not visible for the human eye.",
              "Use the UV lamp to reveal the hidden message on the puzzle.",
            ],
          },
          {
            title: "The four cards with colored borders",
            messages: [
              "No worries, you will find out what to do with them later, you don't need them for this level.",
            ],
          },
        ],
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
        clues: [
          {
            title: "Whispers of the Dual Realm",
            text: "In a world where the ancient pulse beats twice, discover the rhythm that dances between two steps. Can you decipher the song of zeros and ones?",
          },
          {
            title: "Journey to the Digital Playground",
            description:
              "Seek guidance from the realms of youthful wonder, where complex riddles are made simple. Will the innocent wisdom enlighten your path?",
            link: "https://www.wdrmaus.de/filme/sachgeschichten/bis_1023_zaehlen.php5",
          },
        ],
        aids: [
          {
            title: "The card with the mysterious pattern",
            messages: [
              `Within a canvas vast and wide,
            A secret tool does there reside.
            Let your gaze soften, not direct,
            For depth's illusion you must detect.
            
            The awl in hiding plays its part,
            Seek with patience, open heart.
            Unfocus eyes and then you'll see,
            The hidden message, clear and free.`,
              "https://en.wikipedia.org/wiki/Autostereogram",
            ],
          },
          {
            title: "Binary Encoding",
            messages: ["https://letmegooglethat.com/?q=number+to+binary"],
          },
          {
            title: "The mysterious foil",
            messages: [
              "No worries, you will find out what to do with it later, you don't need it for this level.",
            ],
          },
        ],
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
        clues: [
          {
            title: "Ready to enter the r00m?",
            video: {
              src: "/r00m.mp4",
              type: "video/mp4",
            },
          },
        ],
        aids: [
          {
            title: "The Video",
            messages: [
              `Find the two names you are looking for, count how many times they appear in the video and enter the sum of the two as the solution word.`,
            ],
          },
          {
            title: "The card with gray characters",
            messages: [
              `Not all is visible to the naked eye.`,
              `The hidden message is somewhere on the card.`,
              `Let the ultraviolet unveil what's hidden in plain sight.`,
            ],
          },
          {
            title: "The card with red framed name",
            messages: [
              `The frost has a tale to tell. Allow the cold to whisper its secrets.`,
              `Place the card where cold reigns, and watch the hidden name emerge.`,
              `Put the card in your damn freezer and wait 1 minute.`,
            ],
          },
          {
            title: "The red foil",
            messages: [
              "No worries, you will find out what to do with it later, you don't need it for this level.",
            ],
          },
        ],
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
        clues: [
          {
            title: "The Secret of Prisma",
            image: {
              download: "secret.png",
              src: "/secret.png",
              width: 457,
              height: 257,
            },
          },
          {
            title: "The picture in the picture",
            link: "https://towardsdatascience.com/steganography-hiding-an-image-inside-another-77ca66b2acb1",
          },
          {
            title: "Do you know me?",
            description: "I'm a talented and passionated creator of stories.",
            image: {
              download: "the-artist.png",
              src: "/the-artist.png",
              width: 99,
              height: 97,
            },
          },
          {
            title: "Gateway to the hidden secret",
            link: "/cl4551c/go/57g0",
          },
        ],
        aids: [
          {
            title: "The 'secret.png' image of Prisma",
            messages: [
              "The image holds more than what the eye can see.",
              "Use the tool locked behind the password protected link, upload the 'secret.png' image and apply the parameters from your card and see what's hidden inside.",
              "You do not recognize the revealed person? Use google reverse picture search to identify the name of the person. The name will be the password for the level.",
            ],
          },
          {
            title: "The famous picture of the artist",
            messages: [
              "Behind great faces, other legends hide. Can you identify the genius peeking through?",
              "Red reveals the password for the protected link.",
            ],
          },
          {
            title: "The password protected link",
            messages: [
              "Look beyond Shakespeare. What did the red unveil? Red reveals the password.",
              "Combine the mystic parameters with the 'secret.png'.",
            ],
          },
          {
            title: "The flashlight",
            messages: [
              "No worries, you will find out what to do with it later, you don't need it for this level.",
            ],
          },
        ],
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
        clues: [
          {
            title: "A call from outer space",
            audio: {
              download: "r3v3r53.mp3",
              src: "/r3v3r53.mp3",
              type: "audio/mpeg",
            },
          },
        ],
        aids: [
          {
            title: "The audio file",
            messages: [
              "The audio file is a reversed audio file. Use an online tool to reverse the audio file and listen to the message.",
              "The message are geo coordinates. Use google maps to find the location.",
              "The location will reveal a noctual animal. An assiciated name of the animal is the password for the level.",
              "The secret code is the name of a superhero in leetspeak.",
            ],
          },
          {
            title: "The leetspeak table",
            messages: [
              "The leetspeak table will help you to translate the found name from the audio file into the secret code.",
              "https://en.wikipedia.org/wiki/Leet",
            ],
          },
          {
            title: "The red cube",
            messages: [
              "No worries, you don't need it for this level, but you'll need it very soon.",
            ],
          },
        ],
      },
      {
        finalLevel: true,
        slug: "pr15m4",
        title: "Endgame",
        message: `The culmination of your journey with Prisma beckons. Before you sits a metal box, stoic and formidable, engraved with the final number - six. But, as you'll discover, unlocking this last threshold requires more than mere intellect. If you have been attentive, perceptive, and perhaps a touch devious, you may already possess the means to access its contents. If not, a poetic hint will guide you towards the unexpected:

        In a cube where pathways twist and bend,
        Not all journeys find their rightful end.
        Sometimes, to truly see the game's whole span,
        One must step outside the rules, and hack a new plan.`,
        success_title: "You win",
        success_message: `Congratulations! Your entry into the heart of Prisma has revealed the intricate tapestry of a shadowy organization that has determined the destiny of our world since time immemorial. Wars, disasters, and even climate change - you might wonder how it could all be part of a plan. Believe us, not all of it was part of a plan, but you'd rather not imagine the chaos in the world without the hand of Prisma. Your test has been passed, and we look forward to welcoming you into our ranks. Our agents are already on their way to your location. Pack your bags, because the real adventure is just beginning.

        ~~~ THE END ~~~

        For the more observant among you, the true origin of Prisma should come as no surprise. Cicada 3301, an enigma of the Internet, the harbinger of cryptography puzzles, and the tantalizing attraction for many talented minds. Some suspect its roots in a government's intelligence agency, others see it originating in secret recruiting departments of tech giants, while a few suspect a cabal of elite hackers. Your journey with us was inspired by their legacy. We hope you enjoyed your ride.`,
        failure_message:
          "Ah, so close and yet so far. The finale is a test of all you've learned and some you've perhaps overlooked. Remember, in Prisma's world, not all is as it seems. Think outside the confines of convention. Reassess, revisit, and when ready, enter the heart of the enigma. The destiny of Prisma awaits your final touch.",
        solution_prompt: "Input Secret Code",
        solution: "3301",
        clues: [
          {
            title: "The key for the cryptex",
            text: `In a realm where shadows touch the light,
            At the start of the digital night,
            Seek the beginning, where tales first spun,
            For in that puzzle, the answer's easily done.
            
            Masters await, their hope starts to wane,
            For the password's simple, clear as rain.
            With such an easy clue given to thee,
            Their disappointment great, if you don't already see.`,
          },
          {
            title: "The Final Gambit",
            text: `In the labyrinth of echoes, you've come so far,
            Chasing the tail of the brightest star.
            But here at the end, where all games do cease,
            The Masters play a trick, a mischievous tease.
            
            "Seek not for more guidance, for it won't appear,
            For this is the moment we hold most dear.
            You've been graced with clues, with riddles, with jest,
            But now you're on your own, for this final test."
            
            The shadows laugh, the echoes play,
            "No more hints," they slyly say.
            So trust your gut, your mind, your soul,
            For this is the challenge, your ultimate goal.`,
          },
        ],
        aids: [
          {
            title: "The locked box with the number 6",
            messages: [
              "The key is inside the red cube of level 5.",
              "Yes you have to literally open the cube to get the key.",
            ],
          },
          {
            title: "The cryptex",
            messages: [
              "The passwort of the cryptex is writton on the puzzle of level 1.",
            ],
          },
          {
            title: "The Prism Cube",
            messages: [
              "The prism, together with all the accumulated tools from the previous levels, will help you find out the final solution word.",
              "To use the prism you need the four cards with the red, green and blue borders and a strong light source like the flashlight (not the UV lamp).",
              "When the refracted light from the prism is aligned with the correct colors of the cards, the arrow from the prism points to the searched symbol of the card.",
              "To decode the symbols you need the number card (numbers from 0-9) and the flux card (from level 2).",
              "The flux card can be placed on the number card and reveals the symbols behind it.",
              "So the four color cards make four numbers, you get the correct order if you look where the paper patterns of the color cards are still to be found, take a good look at all the boxes again.",
            ],
          },
        ],
      },
    ],
  },
];

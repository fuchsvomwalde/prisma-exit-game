import { StaticImageData } from "next/image";
import "server-only";

export type SingleLanguage = string;
export interface MultiLanguage {
  de: string;
  en: string;
  [key: string]: string;
}
export interface Clue<
  T extends SingleLanguage | MultiLanguage = SingleLanguage
> {
  title: T;
  description?: T;
  text?: T;
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
    fallback?: Array<{
      src: string;
      type: string;
    }>;
  };
  audio?: {
    download?: string;
    src: string;
    type: string;
  };
  link?: string;
}

export interface Aid<
  T extends SingleLanguage | MultiLanguage = SingleLanguage
> {
  title: T;
  messages: Array<T>;
}

export interface Level<
  T extends SingleLanguage | MultiLanguage = SingleLanguage
> {
  firstLevel?: boolean;
  finalLevel?: boolean;
  slug: string;
  title: T;
  message: T;
  success_title?: T;
  success_message: T;
  failure_title?: T;
  failure_message: T;
  solution_prompt: T;
  solution: T;
  next_slug?: string;
  clues?: Array<Clue<T>>;
  aids?: Array<Aid<T>>;
}

export interface Link {
  slug: string;
  href: string;
  password?: string;
}

export interface Game<
  T extends SingleLanguage | MultiLanguage = SingleLanguage
> {
  slug: string;
  name: T;
  description: T;
  levels: Array<Level<T>>;
  links: Array<Link>;
}

export const games: Array<Game<MultiLanguage>> = [
  {
    slug: "cl4551c",
    name: {
      en: "Classic",
      de: "Classic",
    },
    description: {
      en: "First exit game from prisma games.",
      de: "Erstes Exit-Spiel von Prisma-Games.",
    },
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
        title: {
          en: "Level 1",
          de: "Level 1",
        },
        message: {
          en: `Greetings, brave souls. You've heeded our mysterious call and stepped into the unknown. How exciting... You're not a random choice; every move, every secret, every talent you possess has been observed. 
        
          Now, let us unveil our identity: We are Prisma, the shadowy consortium operating from the unseen corners of the world. Only a select few are deemed worthy to join our ranks. Will your team rise to the occasion and prove its mettle? Can you navigate the twisted labyrinths and challenges we've meticulously designed for you, or will you crumble at the very start? Our faith in you is a gamble, and we eagerly await to see if it's well-placed. Embrace the journey, and may the odds be ever in your favor.`,
          de: `Seid gegrüßt, mutige Seelen. Ihr habt unserem mysteriösen Ruf Beachtung geschenkt und seid ins Unbekannte getreten. Wie aufregend... Ihr wurdet nicht zufällig ausgewählt; jede Bewegung, jedes Geheimnis, jedes Talent, das ihr besitzt, wurde beobachtet. 
          
          Nun lüften wir unsere Identität: Wir sind Prisma, das schattenhafte Konsortium, das aus den unsichtbaren Ecken der Welt operiert. Nur wenige werden als würdig erachtet, unseren Reihen beizutreten. Wird euer Team sich bewähren und seinen Mut beweisen? Könnt ihr die verdrehten Labyrinthe und Herausforderungen meistern, die wir sorgfältig für euch entworfen haben, oder werdet ihr gleich zu Beginn scheitern? Unser Glaube an euch ist eine Wette, und wir warten gespannt, ob sie gut platziert ist. Genießt die Reise und möge das Glück stets mit euch sein.`,
        },
        success_message: {
          en: "Ah, you've cracked the first code, but don't be too smug. That was merely a taste of what's to come. Prepare yourselves, for the true challenge lurks just around the corner. The depths of Prisma's puzzles have swallowed many before you. Will you be the next?",
          de: "Ah, ihr habt den ersten Code geknackt, aber seid nicht zu selbstgefällig. Das war nur ein Vorgeschmack auf das, was noch kommt. Bereitet euch vor, denn die wahre Herausforderung lauert gleich um die Ecke. Die Tiefen von Prismas Rätseln haben schon viele vor euch verschlungen. Werdet ihr die Nächsten sein?",
        },
        failure_message: {
          en: "Hmm, stumbling so soon? Remember, that was just the simplest of riddles designed by the smart minds of Prisma. Refocus and try again, for the path ahead is treacherous and will demand nothing but your best.",
          de: "Hmm, so früh gestolpert? Denkt daran, das war nur das einfachste der Rätsel, entworfen von den schlauen Köpfen von Prisma. Fokussiert euch erneut und versucht es noch einmal, denn der Weg vor euch ist trügerisch und verlangt nichts anderes als euer Bestes.",
        },
        solution_prompt: {
          en: "Input Secret Code",
          de: "Geheimcode eingeben",
        },
        solution: { en: "hello world", de: "hello world" },
        next_slug: "101",
        aids: [
          {
            title: {
              en: "The missing puzzle piece",
              de: "Das fehlende Puzzleteil",
            },
            messages: [
              {
                en: "Don't worry everything in the game has its purpose, at the very end of the journey you will understand everything.",
                de: "Keine Sorge, alles im Spiel hat seinen Zweck, am Ende der Reise werdet ihr alles verstehen.",
              },
            ],
          },
          {
            title: {
              en: "The UV lamp",
              de: "Die UV-Lampe",
            },
            messages: [
              {
                en: "The UV lamp will help you to find hidden messages.",
                de: "Die UV-Lampe wird euch helfen, versteckte Nachrichten zu finden.",
              },
              {
                en: "Use the UV lamp to reveal the hidden message on the puzzle.",
                de: "Benutzt die UV-Lampe, um die versteckte Nachricht auf dem Puzzle zu enthüllen.",
              },
            ],
          },
          {
            title: {
              en: "The puzzle",
              de: "Das Rätsel",
            },
            messages: [
              {
                en: "The puzzle contains a secret message not visible for the human eye.",
                de: "Das Rätsel enthält eine geheime Botschaft, die für das menschliche Auge nicht sichtbar ist.",
              },
              {
                en: "Use the UV lamp to reveal the hidden message on the puzzle.",
                de: "Benutzt die UV-Lampe, um die versteckte Nachricht auf dem Puzzle zu enthüllen.",
              },
            ],
          },
          {
            title: {
              en: "The four cards with colored borders",
              de: "Die vier Karten mit farbigen Rändern",
            },
            messages: [
              {
                en: "No worries, you will find out what to do with them later, you don't need them for this level.",
                de: "Keine Sorge, ihr werdet später herausfinden, was ihr damit anfangen sollt, ihr braucht sie nicht für diese Stufe.",
              },
            ],
          },
        ],
      },
      {
        slug: "101",
        title: {
          en: "Level 2",
          de: "Level 2",
        },
        message: {
          en: "Welcome to Level Two! In front of you is a box with the number two on it. It might look simple, but pay close attention. There might be small clues here that will help you with bigger challenges later on. Ready to see what's inside?",
          de: "Willkommen in Stufe Zwei! Vor dir steht eine Box mit der Nummer zwei darauf. Es mag einfach aussehen, aber sei Aufmerksam. Es könnte kleine Hinweise geben, die dir später bei größeren Herausforderungen helfen werden. Bist du bereit zu sehen, was drin ist?",
        },
        success_message: {
          en: "Good job! You figured out another of Prisma's puzzles. But don't get too comfortable. The clues you found here might be important later on. Remember everything you see and learn. Things might get trickier soon!",
          de: "Gut gemacht! Du hast ein weiteres von Prismas Rätseln gelöst. Aber werde nicht zu selbstsicher. Die Hinweise, die du hier gefunden hast, könnten später wichtig sein. Merke dir alles, was du siehst und lernst. Es könnte bald kniffliger werden!",
        },
        failure_message: {
          en: "Oops! Made a mistake? It's okay. But remember, every clue counts. Take a moment, think again, and give it another try. Prisma's mysteries are waiting for you!",
          de: "Ups! Einen Fehler gemacht? Das ist okay. Aber denke daran, jeder Hinweis zählt. Nimm dir einen Moment Zeit, denke noch einmal nach und versuche es erneut. Prismas Geheimnisse warten auf dich!",
        },
        solution_prompt: {
          en: "Input Secret Code",
          de: "Geheimcode eingeben",
        },
        solution: {
          en: "101011001",
          de: "101011001",
        },
        next_slug: "r00m",
        clues: [
          {
            title: {
              en: "Whispers of the Dual Realm",
              de: "Flüstern der dualen Welt",
            },
            text: {
              en: "In a world where the ancient pulse beats twice, discover the rhythm that dances between two steps. Can you decipher the song of zeros and ones?",
              de: "In einer Welt, in der der alte Puls zweimal schlägt, entdecke den Rhythmus, der zwischen zwei Schritten tanzt. Kannst du das Lied aus Nullen und Einsen entschlüsseln?",
            },
          },
          {
            title: {
              en: "Journey to the Digital Playground",
              de: "Reise zum digitalen Spielfeld",
            },
            description: {
              en: "Seek guidance from the realms of youthful wonder, where complex riddles are made simple. Will the innocent wisdom enlighten your path?",
              de: "Suchen den Weg aus dem Reich des jugendlichen Staunens, wo komplexe Rätsel einfach gemacht werden. Wird die unschuldige Weisheit deinen Weg erhellen?",
            },
            link: "https://www.wdrmaus.de/filme/sachgeschichten/bis_1023_zaehlen.php5",
          },
        ],
        aids: [
          {
            title: {
              en: "The card with the mysterious pattern",
              de: "Die Karte mit dem geheimnisvollen Muster",
            },
            messages: [
              {
                en: `Within a canvas vast and wide,
A secret tool does there reside.
Let your gaze soften, not direct,
For depth's illusion you must detect.

The awl in hiding plays its part,
Seek with patience, open heart.
Unfocus eyes and then you'll see,
The hidden message, clear and free.`,
                de: `In einer Leinwand, groß und weit,
Verbirgt sich dort ein Geheimnis, bereit.
Lass deinen Blick weichen, nicht starr,
Denn Tiefenillusion wird dir klar.

In der Verborgenheit spielt der Pfriem seine Rolle,
Suche mit Geduld und in Gedanken keine Knolle.
Spiele mit dem Blick, dann wirst du seh'n,
Die Botschaft verborgen, wird vor dir steh'n.`,
              },
              {
                en: "https://en.wikipedia.org/wiki/Autostereogram",
                de: "https://de.wikipedia.org/wiki/Autostereogramm",
              },
            ],
          },
          {
            title: {
              en: "Binary Encoding",
              de: "Binäre Kodierung",
            },
            messages: [
              {
                en: "https://letmegooglethat.com/?q=number+to+binary",
                de: "https://letmegooglethat.com/?q=number+to+binary",
              },
            ],
          },
          {
            title: {
              en: "The mysterious foil",
              de: "Die geheimnisvolle Folie",
            },
            messages: [
              {
                en: "No worries, you will find out what to do with it later, you don't need it for this level.",
                de: "Keine Sorge, du wirst später herausfinden, was du damit machen sollst. Du brauchst es nicht für diese Stufe.",
              },
            ],
          },
        ],
      },
      {
        slug: "r00m",
        title: {
          en: "Level 3",
          de: "Level 3",
        },
        message: {
          en: `You've treaded through Prisma's initial layers, but now the realm you've entered is a blend of shadows and illumination. Before you is the next box, proudly showcasing the number three. While its exterior may seem familiar, the heart of this challenge pulsates with excitement. Will you let loose, tap into your creativity, and dive headfirst into the thrill that awaits? In this level, the journey is as delightful as the destination.
        
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
          de: `Du bist durch Prismas erste Schichten gegangen, doch nun betrittst du ein Reich aus Schatten und Licht. Vor dir liegt die nächste Box, stolz zeigt sie die Zahl drei. Mag ihre Hülle dir auch bekannt vorkommen, das Herz dieser Herausforderung schlägt voller Spannung. Wirst du dich befreien, deiner Kreativität freien Lauf lassen und kopfüber in das Abenteuer eintauchen? In diesem Level ist der Weg genauso reizvoll wie das Ziel.
          
          Im Land der bewegten Bilder und Klänge,
Eine Geschichte zweier Namen drängt sich in die Enge.
Durchsuche die Szenen, horche genau hin,
Nach geflüsterten Geheimnissen, klar wie der Sinn.

Ein Name schwebt, dann der andere klar,
Jedes gesprochene Mal, sammle sie wahr.
Verbinde ihre Nennungen, zähl sorgfältig nach,
Die Summe der Echos, das ist die Macht.

Ihre Gesamtzahl, eine Zahl so rein,
Wird der Schlüssel sein, der lässt dich hinein.`,
        },
        success_message: {
          en: "Bravo! You've not only unlocked the secrets within but also embraced the exhilaration of the challenge. Your creativity shone through, casting away the shadows of doubt. But be mindful; while this round celebrated fun, the twists and turns of Prisma's maze are endless. Relish this victory, but always be prepared.",
          de: "Bravo! Du hast nicht nur die Geheimnisse im Inneren entschlüsselt, sondern auch die Freude an der Herausforderung angenommen. Eure Kreativität hat die Schatten der Zweifel vertrieben. Aber seit auf der Hut: Diese Runde hat zwar Spaß gemacht, aber die Irrungen und Wirrungen von Prismas Labyrinth sind endlos. Freut euch über diesen Sieg, aber seid immer vorbereitet.",
        },
        failure_message: {
          en: `Ah, not quite right, my astute friend.
          Perhaps you confused or missed a name at the video's end?
          Focus on the whispers, both faint and loud,
          The correct number stands apart from the crowd.`,
          de: `Ah, nicht ganz recht, mein kluger Freund.
          Hast du am Ende des Videos einen Namen versäumt?
          Höre auf das Flüstern, so leise und auch laut,
          Die richtige Zahl sticht heraus wenn ihr euren Ohren traut.`,
        },
        solution_prompt: {
          en: "Enter the Echoed Number",
          de: "Gebt die Zahl ein, die ihr gehört habt",
        },
        solution: {
          en: "15",
          de: "15",
        },
        next_slug: "chemistry",
        clues: [
          {
            title: {
              en: "Ready to enter the r00m?",
              de: "Bereit, den Raum zu betreten?",
            },
            video: {
              download: "r00m.mp4",
              src: "/cl4551c/r00m.mp4",
              type: "video/mp4",
              fallback: [
                {
                  src: "/cl4551c/r00m.webm",
                  type: "video/webm",
                },
                {
                  src: "/cl4551c/r00m.ogv",
                  type: "video/ogv",
                },
              ],
            },
          },
          {
            title: {
              en: "Ready to enter the r00m? (for Safari & iOS)",
              de: "Bereit, den Raum zu betreten? (für Safari & iOS)",
            },
            link: "https://youtu.be/aekfPU0SwNw",
          },
        ],
        aids: [
          {
            title: {
              en: "The Video",
              de: "Das Video",
            },
            messages: [
              {
                en: `Find the two names you are looking for, count how many times they appear in the video and enter the sum of the two as the solution word.`,
                de: `Findet die beiden gesuchten Namen, zähle, wie oft sie im Video vorkommen und gebt die Summe der beiden Namen als Lösungswort ein.`,
              },
            ],
          },
          {
            title: {
              en: "The card with gray characters",
              de: "Die Karte mit den grauen Zeichen",
            },
            messages: [
              {
                en: `Not all is visible to the naked eye.`,
                de: "Nicht alles ist mit dem bloßen Auge sichtbar.",
              },
              {
                en: `The hidden message is somewhere on the card.`,
                de: "Die versteckte Botschaft befindet sich irgendwo auf der Karte.",
              },
              {
                en: `Let the ultraviolet unveil what's hidden in plain sight.`,
                de: "Lasst das Ultraviolett enthüllen, was im Verborgenen liegt.",
              },
            ],
          },
          {
            title: {
              en: "The card with red framed name",
              de: "Die Karte mit dem rot umrahmten Namen",
            },
            messages: [
              {
                en: `The frost has a tale to tell. Allow the cold to whisper its secrets.`,
                de: `Der Frost hat eine Geschichte zu erzählen. Erlaube der Kälte, ihre Geheimnisse zu flüstern.`,
              },
              {
                en: `Place the card where cold reigns, and watch the hidden name emerge.`,
                de: `Legt die Karte dorthin, wo Kälte herrscht, und beobachtet, wie der verborgene Name zum Vorschein kommt.`,
              },
              {
                en: `Put the card in your damn freezer and wait 1 minute.`,
                de: `Legt die Karte in euer verdammtes Gefrierfach und wartet 1 Minute.`,
              },
            ],
          },
          {
            title: { en: "The red foil", de: "Die rote Folie" },
            messages: [
              {
                en: "No worries, you will find out what to do with it later, you don't need it for this level.",
                de: "Keine Sorge, ihr werdet später herausfinden, was ihr damit machen könnt, ihr braucht es für dieses Level nicht.",
              },
            ],
          },
        ],
      },
      {
        slug: "chemistry",
        title: { en: "Level 4", de: "Level 4" },
        message: {
          en: "The layers unravel and the true depth of Prism's labyrinth is revealed. When you open the box with the number four, you stand at the precipice of the rabbit hole. This is the moment of reckoning. Stand resolute and unwavering before the tangled web that is about to ensnare you. Secrets to the past, the present and the future of Prisma beckon at the end of this puzzle. Will you answer this call?",
          de: "Die Schichten entfalten sich und die wahre Tiefe des Labyrinths von Prisma wird enthüllt. Wenn ihr die Box mit der Nummer vier öffnet, steht iht am Abgrund des Kaninchenbaus. Dies ist der Moment der Abrechnung. Steht unerschütterlich vor dem verworrenen Netz, das euch gleich einfangen wird. Geheimnisse der Vergangenheit, der Gegenwart und der Zukunft von Prisma locken am Ende dieses Puzzles. Werdet ihr diesen Ruf beantworten?",
        },
        success_message: {
          en: "Astonishing! As you've unlocked this level, the annals of Prisma's history unfurl before you. Prisma's lineage is ancient, but among its luminaries are names you might recognize. The genius of Albert Einstein and Werner Heisenberg, both members of our enigmatic consortium. It was their collaborative vision to design this very test, seeking out the brightest minds across the globe to fortify Prisma's ranks. You tread a path they once envisioned, and by progressing thus far, you've earned a place among the elite. But remember, the journey has just begun.",
          de: "Erstaunlich! Als ihr dieses Level freigeschaltet habt, entfalten sich vor euch die Annalen der Geschichte von Prisma. Prismas Abstammung ist uralt, aber unter seinen Leuchten befinden sich Namen, die ihr vielleicht kennt. Das Genie von Albert Einstein und Werner Heisenberg, beide Mitglieder unseres rätselhaften Konsortiums. Es war ihre gemeinsame Vision, diesen Test zu entwerfen, um die klügsten Köpfe der Welt zu suchen und die Reihen von Prisma zu stärken. Ihr geht einen Weg, den sie einst vorausgesehen haben. Indem ihr so weit gekommen seid, habt ihr euch einen Platz unter den Besten verdient. Aber denkt daran, die Reise hat gerade erst begonnen.",
        },
        failure_message: {
          en: "Not so fast! The maze of Prisma is filled with shadows and mirages. While you might think of the evident, dig deeper into the chronicles of brilliant minds. Reflect upon the scientists who toyed with the very fabric of reality in their times. Take a breath, retrace your steps, and let history guide you through the enigma. The true essence of Prisma awaits those who persevere.",
          de: "Nicht so schnell! Das Labyrinth von Prisma ist voller Schatten und Trugbildern. Während ihr vielleicht an das Offensichtliche denkt, grabt tiefer in die Chroniken brillanter Köpfe. Denkt über die Wissenschaftler nach, die in ihrer Zeit mit dem Stoff der Realität spielten. Atmet tief durch, geht eure Schritte zurück und lasst euch von der Geschichte durch das Rätsel führen. Die wahre Essenz von Prisma erwartet diejenigen, die durchhalten.",
        },
        solution_prompt: { en: "Input Secret Code", de: "Geheimcode eingeben" },
        solution: { en: "heisenberg", de: "heisenberg" },
        next_slug: "noctual-animal",
        clues: [
          {
            title: {
              en: "The Secret of Prisma",
              de: "Das Geheimnis von Prisma",
            },
            image: {
              download: "secret.png",
              src: "/cl4551c/secret.png",
              width: 457,
              height: 257,
            },
          },
          {
            title: { en: "The picture in the picture", de: "Das Bild im Bild" },
            link: "https://towardsdatascience.com/steganography-hiding-an-image-inside-another-77ca66b2acb1",
          },
          {
            title: { en: "Do you know me?", de: "Kennt ihr mich?" },
            description: {
              en: "I'm a talented and passionated creator of stories.",
              de: "Ich bin ein talentierter und leidenschaftlicher Geschichtenerzähler.",
            },
            image: {
              download: "the-artist.png",
              src: "/cl4551c/the-artist.png",
              width: 99,
              height: 97,
            },
          },
          {
            title: {
              en: "Gateway to the hidden secret",
              de: "Tor zum versteckten Geheimnis",
            },
            link: "/cl4551c/go/57g0",
          },
        ],
        aids: [
          {
            title: {
              en: "The 'secret.png' image of Prisma",
              de: "Das 'secret.png' Bild von Prisma",
            },
            messages: [
              {
                en: "The image holds more than what the eye can see.",
                de: "Das Bild enthält mehr als das Auge sehen kann.",
              },
              {
                en: "Use the tool locked behind the password protected link, upload the 'secret.png' image and apply the parameters from your card and see what's hidden inside.",
                de: "Benutzt das Tool, das hinter dem passwortgeschützten Link versteckt ist, ladet das 'secret.png' Bild hoch und wendet die Parameter von eurer Karte an und seht, was sich darin verbirgt.",
              },
              {
                en: "You do not recognize the revealed person? Use google reverse picture search to identify the name of the person. The name will be the password for the level.",
                de: "Ihr erkennt die enthüllte Person nicht? Benutzt die Google-Bildersuche, um den Namen der Person zu identifizieren. Der Name wird das Passwort für das Level sein.",
              },
            ],
          },
          {
            title: {
              en: "The famous picture of the artist",
              de: "Das berühmte Bild des Künstlers",
            },
            messages: [
              {
                en: "Behind great faces, other legends hide. Can you identify the genius peeking through?",
                de: "Hinter großen Gesichtern verbergen sich andere Legenden. Könnt ihr das Genie erkennen, das hervorlugt?",
              },
              {
                en: "Red reveals the password for the protected link.",
                de: "Rot enthüllt das Passwort für den geschützten Link.",
              },
            ],
          },
          {
            title: {
              en: "The password protected link",
              de: "Der passwortgeschützte Link",
            },
            messages: [
              {
                en: "Look beyond Shakespeare. What did the red unveil? Red reveals the password.",
                de: "Schaut über Shakespeare hinaus. Was hat das Rot enthüllt? Rot enthüllt das Passwort.",
              },
              {
                en: "Combine the mysterious parameters with the 'secret.png'.",
                de: "Kombiniert die mysteriösen Parameter mit dem 'secret.png'.",
              },
            ],
          },
          {
            title: { en: "The flashlight", de: "Die Taschenlampe" },
            messages: [
              {
                en: "No worries, you will find out what to do with it later, you don't need it for this level.",
                de: "Keine Sorge, ihr werdet später herausfinden, was ihr damit machen sollt, ihr braucht sie nicht für dieses Level.",
              },
            ],
          },
        ],
      },
      {
        slug: "noctual-animal",
        title: { en: "Level 5", de: "Level 5" },
        message: {
          en: "Gone are the days of gentle guidance. You now find yourselves at the gates of Prisma's most intense chamber, where the stakes are high, and the margin for error is razor-thin. The box, bearing the enigmatic number five, beckons, its contents a testament to the highest echelons of challenge Prisma can muster. This is your crucible, the ultimate test before the grand finale. Steel your nerves, sharpen your intellect, and dive into the abyss of intrigue.",
          de: "Die Tage sanfter Führung sind vorbei. Ihr befindet euch nun an den Toren der intensivsten Kammer von Prisma, wo die Einsätze hoch sind und der Spielraum für Fehler hauchdünn ist. Die Box mit der rätselhaften Zahl fünf lockt, ihr Inhalt ist ein Zeugnis für die höchsten Ebenen der Herausforderung, die Prisma aufbringen kann. Dies ist euer Schmelztiegel, der ultimative Test vor dem großen Finale. Stählt eure Nerven, schärft euren Verstand und taucht ein in den Abgrund der Intrige.",
        },
        success_message: {
          en: "Impressive! You've deciphered a language that dances between the lines of the known and the obscure. A caped crusader's call sign, masked in the digital dialect. By unlocking the secret, you've proven your prowess, solidifying your place as worthy contenders for Prisma's finale. But, while you revel in this victory, know this: every challenge you've faced, every code you've cracked, has led to this moment. The grand culmination awaits.",
          de: "Beeindruckend! Ihr habt eine Sprache entschlüsselt, die zwischen dem Bekannten und dem Obskuren tanzt. Das Codewort eines maskierten Ritters, maskiert im digitalen Dialekt. Indem ihr das Geheimnis gelüftet habt, habt ihr eure Fähigkeiten bewiesen und euren Platz als würdige Teilnehmer am Finale von Prisma gefestigt. Aber während ihr euch über diesen Sieg freut, wisst dies: Jede Herausforderung, der ihr euch gestellt habt, jeder Code, den ihr geknackt habt, hat zu diesem Moment geführt. Die große Kulmination wartet.",
        },
        failure_message: {
          en: "Alas, you've stumbled in this digital realm. The shadows play tricks, and not everything is as it appears. Think of guardians of the night, heroes cloaked in darkness, but viewed through the lens of the digital age. Retune your mind to the frequencies of the cyber-verse and try again. The finale looms close, and only the truly astute will breach its gates.",
          de: "Leider seid ihr in diesem digitalen Reich gestolpert. Die Schatten spielen Tricks, und nicht alles ist so, wie es scheint. Denkt an die Wächter der Nacht, Helden, die in Dunkelheit gehüllt sind, aber durch die Linse des digitalen Zeitalters betrachtet werden. Stellt euren Geist auf die Frequenzen des Cyber-Verse ein und versucht es erneut. Das Finale rückt näher, und nur die wirklich klugen werden seine Tore durchbrechen.",
        },
        solution_prompt: { en: "Input Secret Code", de: "Geheimcode eingeben" },
        solution: { en: "847m4n", de: "847m4n" },
        next_slug: "pr15m4",
        clues: [
          {
            title: {
              en: "A call from outer space",
              de: "Ein Anruf aus dem Weltraum",
            },
            audio: {
              download: "r3v3r53.mp3",
              src: "/cl4551c/r3v3r53.mp3",
              type: "audio/mpeg",
            },
          },
        ],
        aids: [
          {
            title: { en: "The audio file", de: "Die Audiodatei" },
            messages: [
              {
                en: "The audio file is a reversed audio file. Use an online tool to reverse the audio file and listen to the message.",
                de: "Die Audiodatei ist eine umgekehrte Audiodatei. Benutzt ein Online-Tool, um die Audiodatei rückwärts abzuspielen und die Nachricht anzuhören.",
              },
              {
                en: "The message are geo coordinates. Use google maps to find the location.",
                de: "Die Nachricht sind Geo-Koordinaten. Benutzt Google Maps, um den Ort zu finden.",
              },
              {
                en: "The location will reveal a noctual animal. An assiciated name of the animal is the password for the level.",
                de: "Der Ort wird ein nachtaktives Tier enthüllen. Ein zugehöriger Name des Tieres ist das Passwort für das Level.",
              },
              {
                en: "The secret code is the name of a superhero in leetspeak.",
                de: "Der Geheimcode ist der Name eines Superhelden in Leetspeak.",
              },
            ],
          },
          {
            title: { en: "The leetspeak table", de: "Die Leetspeak-Tabelle" },
            messages: [
              {
                en: "The leetspeak table will help you to translate the found name from the audio file into the secret code.",
                de: "Die Leetspeak-Tabelle wird euch helfen, den gefundenen Namen aus der Audiodatei in den Geheimcode zu übersetzen.",
              },
              {
                en: "https://en.wikipedia.org/wiki/Leet",
                de: "https://de.wikipedia.org/wiki/Leetspeak",
              },
            ],
          },
          {
            title: { en: "The red cube", de: "Der rote Würfel" },
            messages: [
              {
                en: "No worries, you don't need it for this level, but you'll need it very soon.",
                de: "Keine Sorge, ihr braucht ihn nicht für dieses Level, aber ihr werdet ihn sehr bald brauchen.",
              },
            ],
          },
        ],
      },
      {
        finalLevel: true,
        slug: "pr15m4",
        title: { en: "Endgame", de: "Endspiel" },
        message: {
          en: `The culmination of your journey with Prisma beckons. Before you sits a metal box, stoic and formidable, labeled with the final number - six. But, as you'll discover, unlocking this last threshold requires more than mere intellect. If you have been attentive, perceptive, and perhaps a touch devious, you may already possess the means to access its contents. If not, a poetic hint will guide you towards the unexpected:

        In a cube where pathways twist and bend,
        Not all journeys find their rightful end.
        Sometimes, to truly see the game's whole span,
        One must step outside the rules, and hack a new plan.`,
          de: `Der Höhepunkt eurer Reise mit Prisma ist erreicht. Vor euch steht eine Metallbox, stoisch und formidabel, versehen mit der letzten Zahl - sechs. Aber wie ihr feststellen werdet, erfordert das Entsperren dieser letzten Schwelle mehr als nur Intellekt. Wenn ihr aufmerksam, wahrnehmend und vielleicht ein wenig hinterlistig gewesen seid, besitzt ihr vielleicht schon die Mittel, um auf ihren Inhalt zuzugreifen. Wenn nicht, wird euch ein poetischer Hinweis auf das Unerwartete hinweisen:
      
        In einem Würfel, in dem sich Wege winden und biegen,
        Kuonnen nicht alle Reisen ein rechtes Ende bieten.
        Manchmal, um das ganze Ausmaß des Spiels wirklich zu sehen,
        Einer muss außerhalb der Regeln treten und einen neuen Weg begehen.`,
        },
        success_title: { en: "You win", de: "Gewonnen" },
        success_message: {
          en: `Congratulations! Your entry into the heart of Prisma has revealed the intricate tapestry of a shadowy organization that has determined the destiny of our world since time immemorial. Wars, disasters, and even climate change - you might wonder how it could all be part of a plan. Believe us, not all of it was part of a plan, but you'd rather not imagine the chaos in the world without the hand of Prisma. Your test has been passed, and we look forward to welcoming you into our ranks. Our agents are already on their way to your location. Pack your bags, because the real adventure is just beginning.

        ~~~ THE END ~~~

        For the more observant among you, the true origin of Prisma should come as no surprise. Cicada 3301, on of the biggest enigmas of the Internet, the harbinger of cryptography puzzles, and the tantalizing attraction for many talented minds. Some suspect its roots in a government's intelligence agency, others see it originating in secret recruiting departments of tech giants, while a few suspect a cabal of elite hackers. Your journey with us was inspired by their legacy. We hope you enjoyed your ride.`,
          de: `
      Glückwunsch! Euer Eintritt in das Herz von Prisma hat das komplexe Geflecht einer schattenhaften Organisation enthüllt, die seit jeher das Schicksal unserer Welt bestimmt hat. Kriege, Katastrophen und sogar der Klimawandel - ihr fragt euch vielleicht, wie das alles Teil eines Plans sein konnte. Glaubt uns, nicht alles war Teil eines Plans, aber ihr wollt euch das Chaos in der Welt ohne die Hand von Prisma lieber nicht vorstellen. Euer Test ist bestanden, und wir freuen uns darauf, euch in unseren Reihen willkommen zu heißen. Unsere Agenten sind bereits auf dem Weg zu euch. Packt eure Koffer, denn das wahre Abenteuer beginnt jetzt erst.

      ~~~ DAS ENDE ~~~

      Für die aufmerksameren unter euch sollte die wahre Herkunft von Prisma keine Überraschung sein. Cicada 3301, ist eines der größten offenen Rätsel des Internets, der Vorreiter der Kryptographie-Rätsel und die verlockende Attraktion für viele talentierte Köpfe. Einige vermuten seine Wurzeln in einer Geheimdienstagentur einer Regierung, andere sehen es in den geheimen Rekrutierungsabteilungen von Tech-Giganten, während einige einen Geheimbund von Elite-Hackern vermuten. Eure Reise mit uns wurde von ihrem Vermächtnis inspiriert. Wir hoffen, ihr hattet euren Spaß.`,
        },
        failure_message: {
          en: "Ah, so close and yet so far. The finale is a test of all you've learned and some you've perhaps overlooked. Remember, in Prisma's world, not all is as it seems. Think outside the confines of convention. Reassess, revisit, and when ready, enter the heart of the enigma. The destiny of Prisma awaits your final touch.",
          de: "Ah, so nah und doch so fern. Das Finale ist ein Test für alles, was ihr gelernt habt und manches, was ihr vielleicht übersehen habt. Denkt daran, in der Welt von Prisma ist nicht alles so, wie es scheint. Denkt außerhalb der Grenzen der Konvention. Überdenkt, überprüft und wenn ihr bereit seid, betretet das Herz des Rätsels. Das Schicksal von Prisma wartet auf eure letzte Berührung.",
        },
        solution_prompt: { en: "Input Secret Code", de: "Geheimcode eingeben" },
        solution: { en: "3301", de: "3301" },
        clues: [
          {
            title: {
              en: "The key for the cryptex",
              de: "Der Schlüssel für die Cryptex",
            },
            text: {
              en: `In a realm where shadows touch the light,
            At the start of the digital night,
            Seek the beginning, where tales first spun,
            For in that puzzle, the answer's easily done.
            
            Masters await, their hope starts to wane,
            For the password's simple, clear as rain.
            With such an easy clue given to thee,
            Their disappointment great, if you don't already see.`,
              de: `In einem Reich, in dem Schatten das Licht berühren,
          Am Anfang der digitalen Nacht,
          Sucht den Anfang, wo die Geschichten zuerst hinführen,
          Denn in diesem Rätsel ist die Antwort leicht erbracht.
          
          Die Meister warten, ihre Hoffnung beginnt zu schwinden,
          Denn das Passwort ist einfach, klar wie Eis.
          Bei einem so einfachen Hinweis, den ihr hoffentlich werdet finden,
          wenn ihr es nicht schon seht, ist ihre Enttäuschung der Preis.`,
            },
          },
          {
            title: { en: "The Final Gambit", de: "Das letzte Gambit" },
            text: {
              en: `In the labyrinth of echoes, you've come so far,
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
              de: `Im Labyrinth der Echos seit ihr so weit gekommen,
          greift nach dem hellsten Sterns und seit noch nicht zerronnen.
          Aber hier am Ende, wo der letzte Schlag beginnt vom Spiel sein Herz,
          Die Meister spielen einen Trick, einen schelmischen Scherz.
          
          "Sucht nicht nach mehr Führung, denn sie wird nicht erscheinen,
          Denn dies ist der Moment, an dem müsst ihr euch vereinen.
          Ihr wurdet mit Hinweisen, Rätseln und Scherzen begnadet,
          Aber jetzt seid ihr auf euch allein gestellt, die letzte Prüfung wartet."
          
          Die Schatten lachen, die Echos spielen,
          Keine weiteren Hinweise werden sie fabrizieren.
          Vertraut also eurem Bauch, eurem Verstand, eurer Seele bei diesem letzten Spiel,
          Denn dies ist die Herausforderung, euer ultimatives Ziel.`,
            },
          },
        ],
        aids: [
          {
            title: {
              en: "The locked box with the number 6",
              de: "Die verschlossene Box mit der Zahl 6",
            },
            messages: [
              {
                en: "The key is inside the red cube of level 5.",
                de: "Der Schlüssel ist im roten Würfel von Level 5.",
              },
              {
                en: "Yes you have to literally open the cube to get the key.",
                de: "Ja, ihr müsst den Würfel buchstäblich öffnen, um an den Schlüssel zu gelangen.",
              },
            ],
          },
          {
            title: { en: "The cryptex", de: "Die Cryptex" },
            messages: [
              {
                en: "The passwort of the cryptex is writton on the puzzle of level 1.",
                de: "Das Passwort der Cryptex ist auf dem Puzzle von Level 1 geschrieben.",
              },
            ],
          },
          {
            title: { en: "The Prism Cube", de: "Der Prismenwürfel" },
            messages: [
              {
                en: "The prism, together with all the accumulated tools from the previous levels, will help you find out the final solution word.",
                de: "Das Prisma wird euch zusammen mit allen angesammelten Werkzeugen aus den vorherigen Levels helfen, das endgültige Lösungswort herauszufinden.",
              },
              {
                en: "To use the prism you need the four cards with the red, green and blue borders and a strong light source like the flashlight (not the UV lamp).",
                de: "Um das Prisma zu benutzen, braucht ihr die vier Karten mit den roten, grünen und blauen Rändern und eine starke Lichtquelle wie die Taschenlampe (nicht die UV-Lampe).",
              },
              {
                en: "When the refracted light from the prism is aligned with the correct colors of the cards, the arrow from the prism points to the searched symbol of the card.",
                de: "Wenn das gebrochene Licht des Prismas mit den richtigen Farben der Karten ausgerichtet ist, zeigt der Pfeil des Prismas auf das gesuchte Symbol der Karte.",
              },
              {
                en: "To decode the symbols you need the number card (numbers from 0-9) and the flux card (from level 2).",
                de: "Um die Symbole zu entschlüsseln, braucht ihr die Zahlenkarte (Zahlen von 0-9) und die Flux-Karte (aus Level 2).",
              },
              {
                en: "The flux card can be placed on the number card and reveals the symbols behind it.",
                de: "Die Flux-Karte kann auf die Zahlenkarte gelegt werden und enthüllt die Symbole dahinter.",
              },
              {
                en: "So the four color cards make four numbers, you get the correct order if you look where the paper patterns of the color cards are still to be found, take a good look at all the boxes again.",
                de: "Die vier Farbkarten ergeben vier Zahlen, die richtige Reihenfolge bekommt ihr, wenn ihr schaut, wo die Papiermuster der Farbkarten noch zu finden sind, schaut euch alle Boxen noch einmal genau an.",
              },
            ],
          },
        ],
      },
    ],
  },
];

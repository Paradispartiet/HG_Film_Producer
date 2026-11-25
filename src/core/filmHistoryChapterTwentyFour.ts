import type { FilmHistoryBookChapter, FilmHistoryBookFilmReference, FilmHistoryBookHistoricalObject, FilmHistoryBookSource, FilmHistoryBookSection } from "./filmHistoryBook.js";
import { filmHistoryChapterTwentyFourIndustrySections } from "./filmHistoryChapterTwentyFourIndustry.js";
import { filmHistoryChapterTwentyFourVideoSections } from "./filmHistoryChapterTwentyFourVideo.js";

/** Canonical BOOK Chapter 24, 1975–1989. Sourced editorial draft awaiting
 * independent historical and URL review and film-specific Atlas matching.
 * Legacy Atlas audit chapter numbers do not establish coverage here.
 */
export const filmHistoryChapterTwentyFourSources: readonly FilmHistoryBookSource[] = [
  {
    "id": "ch24_action",
    "title": "A great action film for every year, 1924 to now",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/great-action-film-every-year-1924-now"
  },
  {
    "id": "ch24_backfuture",
    "title": "Time flies: Back to the Future at 30",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/time-flies-back-future-30"
  },
  {
    "id": "ch24_blockstore",
    "title": "First Blockbuster store opens",
    "publisher": "HISTORY",
    "url": "https://www.history.com/this-day-in-history/October-19/first-blockbuster-store-opens"
  },
  {
    "id": "ch24_bruckheimer",
    "title": "Jerry Bruckheimer on 40 years as Hollywood's blockbuster producer",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/interviews/jerry-bruckheimer-top-gun-beverly-hills-cop-f1-the-movie"
  },
  {
    "id": "ch24_cameron",
    "title": "Where to begin with James Cameron",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-james-cameron"
  },
  {
    "id": "ch24_chase",
    "title": "10 great chase films",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-chase-films"
  },
  {
    "id": "ch24_criterion",
    "title": "Criterion Collection: early laserdiscs and commentary",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/faq"
  },
  {
    "id": "ch24_jaws",
    "title": "Jaws (1975)",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/film/98b20662-5754-5b8a-8e69-38fbec0d85c2/jaws"
  },
  {
    "id": "ch24_multiplex",
    "title": "Forgotten treasures of the multiplex",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/polls/forgotten-treasures-multiplex-overlooked-mainstream-movies"
  },
  {
    "id": "ch24_murphy",
    "title": "How Eddie Murphy slayed the 1980s",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/eddie-murphy-1980s"
  },
  {
    "id": "ch24_video_act",
    "title": "Video Recordings Act 1984 (c. 39), original enacted text, 12 July 1984",
    "publisher": "UK Parliament / The National Archives",
    "url": "https://www.legislation.gov.uk/ukpga/1984/39/pdfs/ukpga_19840039_en.pdf"
  },
  {
    "id": "ch24_nasties",
    "title": "Unspooling the history of the video nasty controversy",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/history-british-video-nasties"
  },
  {
    "id": "ch24_nasties_intro",
    "title": "Where to begin with video nasties",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-video-nasties"
  },
  {
    "id": "ch24_piracy",
    "title": "Video Piracy",
    "publisher": "BFI Replay",
    "url": "https://replay.bfi.org.uk/video/145/0edd1b81-192c-500f-9a27-51da17b7671f"
  },
  {
    "id": "ch24_rambo",
    "title": "Rambo agonistes",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/rambo-agonistes"
  },
  {
    "id": "ch24_registry",
    "title": "Brief descriptions and essays of National Film Registry titles",
    "publisher": "Library of Congress",
    "url": "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/"
  },
  {
    "id": "ch24_registrylist",
    "title": "Complete National Film Registry listing",
    "publisher": "Library of Congress",
    "url": "https://www.loc.gov/programs/national-film-preservation-board/film-registry/complete-national-film-registry-listing/"
  },
  {
    "id": "ch24_robocop",
    "title": "RoboCop review: an indictment of American society",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/reviews/robocop-review-flamboyant-indictment-american-society"
  },
  {
    "id": "ch24_scifi",
    "title": "The best 80s sci-fi film posters",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/best-80s-sci-fi-film-posters"
  },
  {
    "id": "ch24_scott",
    "title": "Man on fire: Tony Scott",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/man-fire-tony-scott"
  },
  {
    "id": "ch24_sequels",
    "title": "A history of Hollywood sequels in 10 influential films",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/history-hollywood-sequels-10-influential-films"
  },
  {
    "id": "ch24_space",
    "title": "10 great films about artificial intelligence",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-films-about-artificial-intelligence"
  },
  {
    "id": "ch24_spielberg",
    "title": "Where to begin with Steven Spielberg",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-steven-spielberg"
  },
  {
    "id": "ch24_spielbergsets",
    "title": "12 masterful Spielberg set-pieces",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/12-masterful-spielberg-set-pieces"
  },
  {
    "id": "ch24_terminator",
    "title": "James Cameron on The Terminator",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/interviews/terminator-james-cameron"
  },
  {
    "id": "ch24_vhs_culture",
    "title": "Planet of the Tapes: A Conversation with Alex Ross Perry",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/9093-planet"
  },
  {
    "id": "ch24_vhs_horror",
    "title": "Blood, Guts, and Videotape: '80s Horror and the Rise of Home Video",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/7967-blood-guts-and-videotape-80s-horror-and-the-rise-of-home-video"
  },
  {
    "id": "ch24_video_cronenberg",
    "title": "Videodrome (1983)",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/film/d39bc836-34af-52ee-9974-7ff63b333688/videodrome"
  },
  {
    "id": "ch24_videodrome",
    "title": "Videodrome: The Slithery Sense of Unreality",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/1678-videodrome-the-slithery-sense-of-unreality"
  },
  {
    "id": "ch24_videodrome_prod",
    "title": "Medium Cruel: Reflections on Videodrome",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/676-medium-cruel-reflections-on-videodrome"
  },
  {
    "id": "ch24_videoindie",
    "title": "Hacking Film: Super VHS and How Consumer Gear Built a Generation of Filmmakers",
    "publisher": "Film Independent",
    "url": "https://www.filmindependent.org/blog/hacking-film-super-vhs-consumer-gear-built-generation-filmmakers/"
  },
  {
    "id": "ch24_videostore",
    "title": "Plate o' Shrimp: early rental stores and LaserDisc culture",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/744-plate-o-shrimp"
  },
  {
    "id": "ch24_videotape",
    "title": "All about videotape",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/all-about-videotape"
  }
];
export const filmHistoryChapterTwentyFourSections: readonly FilmHistoryBookSection[] = [
  ...filmHistoryChapterTwentyFourIndustrySections,
  ...filmHistoryChapterTwentyFourVideoSections,
];
const filmReferences: readonly FilmHistoryBookFilmReference[] = [
  {
    "title": "Jaws",
    "year": 1975,
    "note": "Suspense and wide summer release",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Star Wars",
    "year": 1977,
    "note": "Practical effects and franchise world",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Empire Strikes Back",
    "year": 1980,
    "note": "Sequel narrative and continuing intellectual property",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Raiders of the Lost Ark",
    "year": 1981,
    "note": "Adventure serials and effects labor",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "E.T. the Extra-Terrestrial",
    "year": 1982,
    "note": "Emotion-led family event film",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Top Gun",
    "year": 1986,
    "note": "Soundtrack and glossy advertising-influenced style",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Beverly Hills Cop",
    "year": 1984,
    "note": "Star comedy and 1980s publicity",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Back to the Future",
    "year": 1985,
    "note": "High-concept time-travel storytelling",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Terminator",
    "year": 1984,
    "note": "Lower-budget genre innovation and subsequent franchise",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "RoboCop",
    "year": 1987,
    "note": "Action spectacle satirizing corporate control",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Videodrome",
    "year": 1983,
    "note": "Media, videotape and practical body effects",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Return of the Jedi",
    "year": 1983,
    "note": "Event sequel in major franchise",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Goonies",
    "year": 1985,
    "note": "Family adventure and youth audiences",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Flashdance",
    "year": 1983,
    "note": "Music video aesthetic and soundtrack industry",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Thing",
    "year": 1982,
    "note": "Practical-effects horror and later reassessment",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "A Nightmare on Elm Street",
    "year": 1984,
    "note": "Horror franchise and home-video circulation",
    "role": "comparative_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Tron",
    "year": 1982,
    "note": "Early computer imagery among multiple effects methods",
    "role": "comparative_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Ghostbusters",
    "year": 1984,
    "note": "Comedy, effects and cross-media publicity",
    "role": "comparative_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Aliens",
    "year": 1986,
    "note": "Action-horror sequel and effects production",
    "role": "comparative_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Abyss",
    "year": 1989,
    "note": "Practical and emerging digital visual effects",
    "role": "comparative_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Die Hard",
    "year": 1988,
    "note": "Action-event form and suspense geography",
    "role": "comparative_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Little Mermaid",
    "year": 1989,
    "note": "Animation and licensing economy",
    "role": "comparative_film",
    "atlasDecision": "P2"
  }
];
const historicalObjects: readonly FilmHistoryBookHistoricalObject[] = [
  {
    "label": "Hollywood event-film advertising, saturation booking and release windows",
    "note": "Historical film industry object, format, institution or regulatory practice; not a playable Film Atlas production scenario.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Studio subsidiaries, media-company ownership and licensing contracts",
    "note": "Historical film industry object, format, institution or regulatory practice; not a playable Film Atlas production scenario.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Franchise world-building, merchandising and sequel financing",
    "note": "Historical film industry object, format, institution or regulatory practice; not a playable Film Atlas production scenario.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "1980s multiplex exhibition and screen scheduling",
    "note": "Historical film industry object, format, institution or regulatory practice; not a playable Film Atlas production scenario.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "High-concept pitch, soundtrack sales and television campaign coordination",
    "note": "Historical film industry object, format, institution or regulatory practice; not a playable Film Atlas production scenario.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Visual-effects craft: optical printing, models, animatronics, makeup and early CGI",
    "note": "Historical film industry object, format, institution or regulatory practice; not a playable Film Atlas production scenario.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "VHS and Betamax home recorder equipment and media formats",
    "note": "Historical film industry object, format, institution or regulatory practice; not a playable Film Atlas production scenario.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Rental and sell-through videocassette markets and distribution rights",
    "note": "Historical film industry object, format, institution or regulatory practice; not a playable Film Atlas production scenario.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Independent video stores and Blockbuster chain development in 1985",
    "note": "Historical film industry object, format, institution or regulatory practice; not a playable Film Atlas production scenario.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "UK Video Recordings Act 1984 and video-nasty controversy",
    "note": "Historical film industry object, format, institution or regulatory practice; not a playable Film Atlas production scenario.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Film piracy and changing copyright enforcement in the 1980s",
    "note": "Historical film industry object, format, institution or regulatory practice; not a playable Film Atlas production scenario.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "LaserDisc editions and Criterion commentary/supplement origins",
    "note": "Historical film industry object, format, institution or regulatory practice; not a playable Film Atlas production scenario.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Consumer camcorders, professional Beta SP and editing accessibility",
    "note": "Historical film industry object, format, institution or regulatory practice; not a playable Film Atlas production scenario.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Film library archives, restoration, home transfers and differing cuts",
    "note": "Historical film industry object, format, institution or regulatory practice; not a playable Film Atlas production scenario.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Film soundtracks, licensing and music-video production aesthetics",
    "note": "Historical film industry object, format, institution or regulatory practice; not a playable Film Atlas production scenario.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Television broadcasting and cable-film licensing windows",
    "note": "Historical film industry object, format, institution or regulatory practice; not a playable Film Atlas production scenario.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  }
];
const sourceIds = new Set(filmHistoryChapterTwentyFourSources.map(source => source.id));
for (const section of filmHistoryChapterTwentyFourSections) {
  if (section.paragraphs.length !== 3 || section.sourceIds.length < 2 || section.sourceIds.some(id => !sourceIds.has(id))) {
    throw new Error(`Chapter 24 source error: ${section.id}`);
  }
}
if (new Set(filmHistoryChapterTwentyFourSections.flatMap(s => s.sourceIds)).size !== sourceIds.size) {
  throw new Error("Chapter 24 contains unused sources");
}
export const filmHistoryChapterTwentyFour: FilmHistoryBookChapter = {
  id: "blockbuster-home-video",
  number: 24,
  title: "Blockbusters, conglomerates and home video",
  period: "1975–1989",
  summary: "Twenty-four source-attributed essays examine event-film promotion, studio rights, multiplex exhibition, large-scale filmmaking, practical effects, consumer videotape, rental stores, video regulation and collector editions. The emergence of a new distribution economy did not eliminate other film cultures. Editorial draft; independent history/source review and film-specific Atlas audit remain outstanding.",
  status: "draft",
  learningObjectives: [
    "Explain event-film marketing and theatrical release as industrial arrangements that predate and develop through Jaws.",
    "Compare Jaws, Star Wars, E.T. and Raiders as distinct examples of artistic and commercial blockbuster production.",
    "Describe sequels, franchises and licensed worlds without assuming every later installment was planned from the start.",
    "Distinguish production cost, advertising cost, theatrical gross, home-video rights and actual profit.",
    "Connect high-concept storytelling and stars to producer/distributor strategies without treating a pitch as the entire artwork.",
    "Analyze the different styles of Top Gun, Beverly Hills Cop, Back to the Future and RoboCop.",
    "Explain the place of models, optical processes, animatronics and emerging digital imagery in 1980s effects.",
    "Trace the expansion of multiplexes and changing film scheduling without claiming one worldwide conversion date.",
    "Distinguish rental, sell-through, VHS, Betamax and LaserDisc markets.",
    "Describe video-store culture, low-budget genre titles and the renewed value of film catalogs.",
    "Explain Britain's Video Recordings Act and video-nasty debates within their particular historical setting.",
    "Distinguish piracy enforcement, copyright claims and independently supported economic evidence.",
    "Identify consumer video production as a distinct development from theatrical film and studio VHS releases.",
    "Compare first-release prints, later restored editions and retrospective interpretations."
  ],
  keyTerms: ["blockbuster","saturation booking","event film","high concept","studio conglomerate","merchandising","sequel","franchise","licensed property","box-office gross","release window","multiplex","star system","soundtrack marketing","practical effects","optical printing","animatronics","early CGI","VHS","Betamax","VCR","video rental","sell-through","Blockbuster Video","laserdisc","Criterion Collection","commentary track","video nasties","Video Recordings Act 1984","piracy","consumer video","film archive","restoration","home viewing"],
  sections: filmHistoryChapterTwentyFourSections,
  filmReferences,
  historicalObjects,
  sources: filmHistoryChapterTwentyFourSources,
};

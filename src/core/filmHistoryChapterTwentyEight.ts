import type { FilmHistoryBookChapter, FilmHistoryBookFilmReference, FilmHistoryBookHistoricalObject, FilmHistoryBookSource, FilmHistoryBookSection } from "./filmHistoryBook.js";
import { filmHistoryChapterTwentyEightHongKongTaiwanSections } from "./filmHistoryChapterTwentyEightHongKongTaiwan.js";
import { filmHistoryChapterTwentyEightChinaKoreaSections } from "./filmHistoryChapterTwentyEightChinaKorea.js";
import { filmHistoryChapterTwentyEightJapanSections } from "./filmHistoryChapterTwentyEightJapan.js";

/** Canonical BOOK chapter 28 (1980s–2010s), editorial draft with source IDs.
 * Verified links provide grounding, but interpretations and exact production details need independent source audit.
 * Provisional P2 does NOT assert absence from a playable Film Atlas.
 */
export const filmHistoryChapterTwentyEightSources: readonly FilmHistoryBookSource[] = [
  {
    "id": "ch28_actionhistory",
    "title": "A great action film for every year, 1924 to now",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/great-action-film-every-year-1924-now"
  },
  {
    "id": "ch28_anime21",
    "title": "10 great anime films of the 21st century",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-anime-films-21st-century"
  },
  {
    "id": "ch28_anime50",
    "title": "50 key anime films",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/lists/50-key-anime-films"
  },
  {
    "id": "ch28_animeclassic",
    "title": "10 great anime films",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-anime-films"
  },
  {
    "id": "ch28_animewomen",
    "title": "Women make anime",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/women-make-anime"
  },
  {
    "id": "ch28_bong",
    "title": "Where to begin with Bong Joon Ho",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-bong-joon-ho"
  },
  {
    "id": "ch28_brighteressay",
    "title": "A Brighter Summer Day: Coming of Age in Taipei",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/3981-a-brighter-summer-day-coming-of-age-in-taipei"
  },
  {
    "id": "ch28_brighterrestoration",
    "title": "Cleaning Up A Brighter Summer Day",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/4176-cleaning-up-a-brighter-summer-day"
  },
  {
    "id": "ch28_chinacentury",
    "title": "A Century of Chinese Cinema: an introduction",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/century-chinese-cinema-introduction"
  },
  {
    "id": "ch28_chungking",
    "title": "Chungking Express: Electric Youth",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/766"
  },
  {
    "id": "ch28_cure",
    "title": "Cure (1997)",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/films/27666-cure"
  },
  {
    "id": "ch28_curecriterion",
    "title": "Cure: Erasure",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/7959-cure-erasure"
  },
  {
    "id": "ch28_ghibli",
    "title": "Where to begin with Studio Ghibli",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-studio-ghibli"
  },
  {
    "id": "ch28_ghoststories",
    "title": "10 great Japanese ghost stories",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-japanese-ghost-stories"
  },
  {
    "id": "ch28_heroic",
    "title": "Heroic Bloodshed: how Hong Kong's style was swiped by Hollywood",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/heroic-bloodshed-hong-kong-hollywood-cycle-influence"
  },
  {
    "id": "ch28_hkaction",
    "title": "10 great Hong Kong action films of the 1980s",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/news/10-great-hong-kong-action-films-1980s"
  },
  {
    "id": "ch28_houguide",
    "title": "Where to begin with Hou Hsiao-hsien",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-hou-hsiao-hsien"
  },
  {
    "id": "ch28_japanhistory",
    "title": "The best Japanese films – one per year",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/great-japanese-film-every-year-from-1925-now"
  },
  {
    "id": "ch28_jhorrormakes",
    "title": "10 great supernatural horror films of the 21st century",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-supernatural-horror-films-21st-century"
  },
  {
    "id": "ch28_jia",
    "title": "Where to begin with Jia Zhangke",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-jia-zhangke"
  },
  {
    "id": "ch28_johnnie",
    "title": "Where to begin with Johnnie To",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-johnnie-to"
  },
  {
    "id": "ch28_kitano",
    "title": "Where to begin with Takeshi Kitano",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-takeshi-kitano"
  },
  {
    "id": "ch28_kiyoshi",
    "title": "Where to begin with Kiyoshi Kurosawa",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-kiyoshi-kurosawa"
  },
  {
    "id": "ch28_kon",
    "title": "Where to begin with Satoshi Kon",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-satoshi-kon"
  },
  {
    "id": "ch28_koreacollection",
    "title": "Korean Cinema: a curated collection",
    "publisher": "BFI Player",
    "url": "https://player.bfi.org.uk/subscription/collection/korean-cinema"
  },
  {
    "id": "ch28_koreeda",
    "title": "Where to begin with Hirokazu Koreeda",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-hirokazu-koreeda"
  },
  {
    "id": "ch28_lee",
    "title": "Where to begin with Lee Chang-dong",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-lee-chang-dong"
  },
  {
    "id": "ch28_memories",
    "title": "Memories of Murder: In the Killing Jar",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/7361-memories-of-murder-in-the-killing-jar"
  },
  {
    "id": "ch28_modernchinese",
    "title": "10 essential modern directors from mainland China, Hong Kong and Taiwan",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-best-modern-directors-mainland-china-hong-kong-taiwan"
  },
  {
    "id": "ch28_moodessay",
    "title": "In the Mood for Love",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/197"
  },
  {
    "id": "ch28_park",
    "title": "Where to begin with Park Chan-wook",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-park-chan-wook"
  },
  {
    "id": "ch28_policestory",
    "title": "Police Story (1985)",
    "publisher": "BFI Player",
    "url": "https://player.bfi.org.uk/subscription/film/watch-police-story-1985-online"
  },
  {
    "id": "ch28_ring",
    "title": "When videotapes were sinister – 20 years of J-horror classic Ring",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/ringu-hideo-nakata-videotapes-lynch-haneke"
  },
  {
    "id": "ch28_sammo",
    "title": "Sammo Hung looks back on a life of action",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/interviews/sammo-hung"
  },
  {
    "id": "ch28_taiwanvoices",
    "title": "The many voices behind Taiwan New Cinema",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/many-voices-behind-taiwan-new-cinema"
  },
  {
    "id": "ch28_tsui",
    "title": "Where to begin with Tsui Hark",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-tsui-hark"
  },
  {
    "id": "ch28_wongguide",
    "title": "Where to begin with Wong Kar Wai",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-wong-kar-wai"
  },
  {
    "id": "ch28_wongrestoration",
    "title": "World of Wong Kar Wai: Director's Note",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/7325-%20monde-de-wong-kar-wai-note-du-directeur"
  },
  {
    "id": "ch28_wuxia",
    "title": "10 great wuxia films",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-wuxia-swordplay-films"
  },
  {
    "id": "ch28_yangguide",
    "title": "Where to begin with Edward Yang",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-edward-yang"
  },
  {
    "id": "ch28_yiyi",
    "title": "Yi Yi (2000)",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/films/781-yi-yi"
  }
];
export const filmHistoryChapterTwentyEightSections: readonly FilmHistoryBookSection[] = [
  ...filmHistoryChapterTwentyEightHongKongTaiwanSections,
  ...filmHistoryChapterTwentyEightChinaKoreaSections,
  ...filmHistoryChapterTwentyEightJapanSections,
];
const filmReferences: readonly FilmHistoryBookFilmReference[] = [
  {
    "title": "Boat People",
    "year": 1982,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Police Story",
    "year": 1985,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Zu Warriors from the Magic Mountain",
    "year": 1983,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Once Upon a Time in China",
    "year": 1991,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "A Better Tomorrow",
    "year": 1986,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Killer",
    "year": 1989,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Hard Boiled",
    "year": 1992,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Chungking Express",
    "year": 1994,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "In the Mood for Love",
    "year": 2000,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Mission",
    "year": 1999,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "A City of Sadness",
    "year": 1989,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "A Brighter Summer Day",
    "year": 1991,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Yi Yi",
    "year": 2000,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Vive L'Amour",
    "year": 1994,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Yellow Earth",
    "year": 1984,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Red Sorghum",
    "year": 1987,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Raise the Red Lantern",
    "year": 1991,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Xiao Wu",
    "year": 1997,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Platform",
    "year": 2000,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Still Life",
    "year": 2006,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Crouching Tiger, Hidden Dragon",
    "year": 2000,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Hero",
    "year": 2002,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Joint Security Area",
    "year": 2000,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Peppermint Candy",
    "year": 1999,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Memories of Murder",
    "year": 2003,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Host",
    "year": 2006,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Oldboy",
    "year": 2003,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Sonatine",
    "year": 1993,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Ring",
    "year": 1998,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Cure",
    "year": 1997,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Pulse",
    "year": 2001,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Princess Mononoke",
    "year": 1997,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Spirited Away",
    "year": 2001,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Ghost in the Shell",
    "year": 1995,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Perfect Blue",
    "year": 1997,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Nobody Knows",
    "year": 2004,
    "note": "Provisional book-level film reference for history of East Asian production, form and global circulation; exact Atlas matching pending.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  }
];
const historicalObjects: readonly FilmHistoryBookHistoricalObject[] = [
  {
    "label": "1980s Hong Kong film industry and action choreography crews",
    "note": "Documented historical institution, industry practice, media network or context; not a playable film.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Hong Kong's 1997 handover and changing regional markets",
    "note": "Documented historical institution, industry practice, media network or context; not a playable film.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Stunt performers, professional injury and action production labour",
    "note": "Documented historical institution, industry practice, media network or context; not a playable film.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Film restoration and alternative versions of Wong Kar-wai films",
    "note": "Documented historical institution, industry practice, media network or context; not a playable film.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Taiwan New Cinema writing and producer collaborations",
    "note": "Documented historical institution, industry practice, media network or context; not a playable film.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Taiwanese martial-law history and February 28 memory",
    "note": "Documented historical institution, industry practice, media network or context; not a playable film.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "International film festivals and distribution of Taiwan's cinema",
    "note": "Documented historical institution, industry practice, media network or context; not a playable film.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Beijing Film Academy and mainland Chinese Fifth Generation context",
    "note": "Documented historical institution, industry practice, media network or context; not a playable film.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Mainland Chinese production approvals, financing and distribution",
    "note": "Documented historical institution, industry practice, media network or context; not a playable film.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Chinese wuxia literary, theatrical and historical traditions",
    "note": "Documented historical institution, industry practice, media network or context; not a playable film.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Production and distribution of Chinese-language co-productions",
    "note": "Documented historical institution, industry practice, media network or context; not a playable film.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "South Korean domestic cinema market, screen quotas and distribution",
    "note": "Documented historical institution, industry practice, media network or context; not a playable film.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "South Korean independent and commercially financed production",
    "note": "Documented historical institution, industry practice, media network or context; not a playable film.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Korean domestic box-office reception versus international festival acclaim",
    "note": "Documented historical institution, industry practice, media network or context; not a playable film.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Japanese yakuza and crime-film genre histories",
    "note": "Documented historical institution, industry practice, media network or context; not a playable film.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "J-horror franchises, remake rights and transnational distribution",
    "note": "Documented historical institution, industry practice, media network or context; not a playable film.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Studio Ghibli animated feature production and collective labour",
    "note": "Documented historical institution, industry practice, media network or context; not a playable film.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Anime television, film, manga and video media networks",
    "note": "Documented historical institution, industry practice, media network or context; not a playable film.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "East Asian film subtitling, restoration and repertory cinema",
    "note": "Documented historical institution, industry practice, media network or context; not a playable film.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Genre marketing labels as distribution categories rather than national industries",
    "note": "Documented historical institution, industry practice, media network or context; not a playable film.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  }
];
const sourceIds = new Set(filmHistoryChapterTwentyEightSources.map(source => source.id));
for (const section of filmHistoryChapterTwentyEightSections) {
  if (section.paragraphs.length !== 3 || section.sourceIds.length < 2 || section.sourceIds.some(id => !sourceIds.has(id))) {
    throw new Error(`Chapter 28 source provenance failure: ${section.id}`);
  }
}
if (new Set(filmHistoryChapterTwentyEightSections.flatMap(s => s.sourceIds)).size !== sourceIds.size) {
  throw new Error("Chapter 28 has unused source records");
}
export const filmHistoryChapterTwentyEight: FilmHistoryBookChapter = {
  id: "east-asian-turn",
  number: 28,
  title: "East Asian new waves and global genre cinema",
  period: "1980s–2010s",
  summary: "Twenty-eight source-attributed essays distinguish Hong Kong action and social cinema, Taiwan New Cinema, mainland China's Fifth and Sixth generations, South Korea's changing film industry, and Japanese crime, horror, anime and family cinema. Includes 41 distinct cited sources, 36 provisional book-only film references, and 20 historical objects. Editorial draft awaiting independent verification and Film Atlas audit.",
  status: "draft",
  learningObjectives: [
    "Compare Hong Kong, Taiwan, mainland Chinese, South Korean and Japanese production and distribution systems without homogenizing them.",
    "Explain Ann Hui's contribution to Hong Kong New Wave beyond action stereotypes.",
    "Analyze action choreography and stunt labour in Police Story, Tsui Hark and John Woo.",
    "Distinguish heroic bloodshed's melodrama from Johnnie To's choreography of suspense.",
    "Compare Wong Kar-wai's contemporary and period representations of Hong Kong.",
    "Situate Taiwan New Cinema in the work of writers and producers as well as directors.",
    "Analyze Hou Hsiao-hsien and Edward Yang through Taiwan's changing historical memory and urban spaces.",
    "Contrast Tsai Ming-liang's duration with other Taiwanese cinematic forms.",
    "Distinguish Mainland Fifth Generation and Sixth Generation production histories.",
    "Compare Yellow Earth, Red Sorghum and Still Life in relation to different production contexts.",
    "Read wuxia's historical forms before discussing contemporary transnational blockbusters.",
    "Explain South Korean industry changes without confusing domestic and international recognition.",
    "Analyze Lee Chang-dong, Bong Joon Ho and Park Chan-wook as distinct formal artists.",
    "Identify the domestic plurality of Korean film production beyond internationally marketed thrillers.",
    "Compare Kitano's yakuza cinema with other action traditions without assuming direct imitation.",
    "Distinguish Ring, Cure and Pulse within the historically heterogeneous J-horror category.",
    "Explain animation studio labour behind Ghibli, Mamoru Oshii and Satoshi Kon.",
    "Situate Kore-eda's filmmaking alongside, not outside, Japanese commercial and genre industries.",
    "Treat festivals, restorations, adaptations and remakes as circulation histories rather than neutral rankings.",
    "Never invent Atlas production scenarios from national industries or provisional film references."
  ],
  keyTerms: ["Hong Kong New Wave","Taiwan New Cinema","Fifth Generation","Sixth Generation","Korean New Wave","heroic bloodshed","stunt choreography","wuxia","Martial law","film restoration","film festival","regional markets","genre circulation","John Woo","Wong Kar-wai","Ann Hui","Hou Hsiao-hsien","Edward Yang","Tsai Ming-liang","Jia Zhangke","Zhang Yimou","Bong Joon Ho","Park Chan-wook","Lee Chang-dong","Takeshi Kitano","J-horror","Ring","Kiyoshi Kurosawa","anime","Studio Ghibli","Satoshi Kon","Hirokazu Kore-eda","remake rights","subtitling"],
  sections: filmHistoryChapterTwentyEightSections,
  filmReferences,
  historicalObjects,
  sources: filmHistoryChapterTwentyEightSources,
};

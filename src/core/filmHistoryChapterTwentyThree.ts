import type { FilmHistoryBookChapter, FilmHistoryBookFilmReference, FilmHistoryBookHistoricalObject, FilmHistoryBookSource, FilmHistoryBookSection } from "./filmHistoryBook.js";
import { filmHistoryChapterTwentyThreeIndiaSections } from "./filmHistoryChapterTwentyThreeIndia.js";
import { filmHistoryChapterTwentyThreeHongKongSections } from "./filmHistoryChapterTwentyThreeHongKong.js";
import { filmHistoryChapterTwentyThreeJapanSections } from "./filmHistoryChapterTwentyThreeJapan.js";
import { filmHistoryChapterTwentyThreeElsewhereSections } from "./filmHistoryChapterTwentyThreeElsewhere.js";

/** Canonical BOOK chapter 23 — popular cinemas across Asia, 1960s–1980s.
 * Editorial draft only; source links are listed for fact review and are not an
 * independently completed source audit. Atlas links await film-by-film checking.
 */
export const filmHistoryChapterTwentyThreeSources: readonly FilmHistoryBookSource[] = [
  {
    "id": "ch23_india_plural",
    "title": "India is many film industries",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/30-year-gap-why-did-it-take-so-long-indian-film-play-cannes-competition"
  },
  {
    "id": "ch23_india_regions",
    "title": "Intersectionalities in popular Hindi cinema: Regions, languages and industries",
    "publisher": "Film studies journal",
    "url": "https://www.tandfonline.com/doi/full/10.1080/14746689.2024.2459509"
  },
  {
    "id": "ch23_india_action",
    "title": "10 great Indian action films",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-indian-action-films"
  },
  {
    "id": "ch23_india_songs",
    "title": "10 great Bollywood musicals",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-bollywood-musicals"
  },
  {
    "id": "ch23_india_deewaar",
    "title": "Deewaar (1975)",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/film/c29593eb-5510-557f-91e0-df10c058ca2a/deewaar"
  },
  {
    "id": "ch23_india_sholay",
    "title": "Sholay (1975)",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/film/4c157d6b-5fcb-5899-b4f7-a4bf085fa9eb/sholay"
  },
  {
    "id": "ch23_india_amar",
    "title": "Amar Akbar Anthony: the quintessential masala movie",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/amar-akbar-anthony-amitabh-bachchan-bollywood-masala-film"
  },
  {
    "id": "ch23_india_yash",
    "title": "Yash Chopra: tribute to a Bollywood great",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/yash-chopra-tribute-bollywood-great"
  },
  {
    "id": "ch23_india_parallel",
    "title": "10 great Indian arthouse films of the 1970s",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-indian-arthouse-films-1970s"
  },
  {
    "id": "ch23_india_tamil",
    "title": "The 1970s Tamil cinema and the post-classical turn",
    "publisher": "Film studies scholarship",
    "url": "https://www.academia.edu/81955120/The_1970s_Tamil_Cinema_and_the_Post_classical_Turn"
  },
  {
    "id": "ch23_india_telugu",
    "title": "Persistence of the Feudal: Star and Film Form in Post-1970s Telugu Cinema",
    "publisher": "Journal of the Moving Image",
    "url": "https://jmionline.org/articles/2006/persistence_of_the_feudal_star_and_film_form_in_post_1970s_telugu_cinema.pdf"
  },
  {
    "id": "ch23_india_rajini",
    "title": "Rajinikanth and the Regional Blockbuster",
    "publisher": "University of Chicago Tamil Forum",
    "url": "https://chicagotamilforum.uchicago.edu/files/2023/04/Srinivas-SV_Rajinikanth-and-the-Blockbuster-CTF-2016.pdf"
  },
  {
    "id": "ch23_hk_history",
    "title": "A Century of Chinese Cinema: an introduction",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/century-chinese-cinema-introduction"
  },
  {
    "id": "ch23_hk_shaw",
    "title": "Where to begin with the Shaw Brothers",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-shaw-brothers"
  },
  {
    "id": "ch23_hk_wuxia",
    "title": "10 great wuxia films",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-wuxia-swordplay-films"
  },
  {
    "id": "ch23_hk_hu",
    "title": "Dragon Inn: Poised for Battle",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/5787-dragon-inn-poised-for-battle"
  },
  {
    "id": "ch23_hk_zen",
    "title": "A Touch of Zen: Prowling, Scheming, Flying",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/4141-a-touch-of-zen-prowling-scheming-flying"
  },
  {
    "id": "ch23_hk_action",
    "title": "A great action film for every year, 1924 to now",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/great-action-film-every-year-1924-now"
  },
  {
    "id": "ch23_hk_stunts",
    "title": "Stephen Tung Wai on Hong Kong action stunt work",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/interviews/stephen-tung-wai-stuntman-kung-fu"
  },
  {
    "id": "ch23_hk_sammo",
    "title": "Sammo Hung looks back on a life of action",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/interviews/sammo-hung"
  },
  {
    "id": "ch23_hk_80s",
    "title": "10 great Hong Kong action films of the 1980s",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/news/10-great-hong-kong-action-films-1980s"
  },
  {
    "id": "ch23_hk_police",
    "title": "Police Story (1985)",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/films/29544-police-story"
  },
  {
    "id": "ch23_hk_tsui",
    "title": "Where to begin with Tsui Hark",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-tsui-hark"
  },
  {
    "id": "ch23_hk_hui",
    "title": "10 essential modern Chinese, Hong Kong and Taiwanese directors",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-best-modern-directors-mainland-china-hong-kong-taiwan"
  },
  {
    "id": "ch23_hk_woo",
    "title": "Heroic Bloodshed: Hong Kong's influence on Hollywood",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/heroic-bloodshed-hong-kong-hollywood-cycle-influence"
  },
  {
    "id": "ch23_jp_yakuza",
    "title": "10 great Japanese gangster films",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-japanese-gangster-films"
  },
  {
    "id": "ch23_jp_frame",
    "title": "5 masterpieces of Japanese widescreen",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/five-japanese-widescreen"
  },
  {
    "id": "ch23_jp_tora",
    "title": "10 great samurai films; Tora-san and Yamada context",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-samurai-films"
  },
  {
    "id": "ch23_jp_films",
    "title": "The best Japanese films: one per year",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/great-japanese-film-every-year-from-1925-now"
  },
  {
    "id": "ch23_jp_zato",
    "title": "Zatoichi: The Blind Swordsman",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/boxsets/1012-zatoichi-the-blind-swordsman"
  },
  {
    "id": "ch23_jp_anime",
    "title": "The seeds of anime: how Japanese animation arose",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/seeds-anime-how-japanese-animation-arose"
  },
  {
    "id": "ch23_jp_animefilms",
    "title": "50 key anime films",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/lists/50-key-anime-films"
  },
  {
    "id": "ch23_korea",
    "title": "6 essential directors from the golden age of South Korean cinema",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/6-essential-directors-golden-age-south-korean-cinema"
  },
  {
    "id": "ch23_korea_sf",
    "title": "10 great South Korean sci-fi films",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-south-korean-sci-fi-films"
  },
  {
    "id": "ch23_taiwan",
    "title": "The many voices behind Taiwan New Cinema",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/many-voices-behind-taiwan-new-cinema"
  },
  {
    "id": "ch23_taiwan_hou",
    "title": "Where to begin with Hou Hsiao-hsien",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-hou-hsiao-hsien"
  },
  {
    "id": "ch23_taiwan_yang",
    "title": "Where to begin with Edward Yang",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-edward-yang"
  },
  {
    "id": "ch23_philippines",
    "title": "Manila in the Claws of Light",
    "publisher": "BFI Player",
    "url": "https://player.bfi.org.uk/rentals/film/watch-manila-in-the-claws-of-light-1975-online"
  },
  {
    "id": "ch23_philippines_later",
    "title": "Lino Brocka's Macho Dancer and Philippine social filmmaking",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/claws-desire-lino-brocka-macho-dancer"
  }
];
export const filmHistoryChapterTwentyThreeSections: readonly FilmHistoryBookSection[] = [
  ...filmHistoryChapterTwentyThreeIndiaSections,
  ...filmHistoryChapterTwentyThreeHongKongSections,
  ...filmHistoryChapterTwentyThreeJapanSections,
  ...filmHistoryChapterTwentyThreeElsewhereSections,
];
const filmReferences: readonly FilmHistoryBookFilmReference[] = [
  {
    "title": "Deewaar",
    "year": 1975,
    "note": "Hindi star drama and angry young man",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Sholay",
    "year": 1975,
    "note": "Hindi ensemble action, humor, songs and music",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Amar Akbar Anthony",
    "year": 1977,
    "note": "Hindi masala and family belonging",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Kabhi Kabhie",
    "year": 1976,
    "note": "Yash Chopra's musical romance",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Come Drink with Me",
    "year": 1966,
    "note": "King Hu's Hong Kong wuxia",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "One-Armed Swordsman",
    "year": 1967,
    "note": "Chang Cheh's action and sacrifice",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Dragon Inn",
    "year": 1967,
    "note": "King Hu's Taiwan film and choreographed space",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "A Touch of Zen",
    "year": 1971,
    "note": "King Hu's expansive wuxia",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Enter the Dragon",
    "year": 1973,
    "note": "Bruce Lee's Hong Kong–US production",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The 36th Chamber of Shaolin",
    "year": 1978,
    "note": "Training montage and Lau Kar-leung's craft",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Drunken Master",
    "year": 1978,
    "note": "Jackie Chan's comic martial-arts picture",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Police Story",
    "year": 1985,
    "note": "Urban action and stunt coordination",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Boat People",
    "year": 1982,
    "note": "Ann Hui's social drama",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "A Better Tomorrow",
    "year": 1986,
    "note": "Woo and Hark's heroic bloodshed",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "It's Tough Being a Man",
    "year": 1969,
    "note": "Yamada's Tora-san series",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Zatoichi: The Blind Swordsman",
    "year": 1962,
    "note": "Shintaro Katsu's long-running action series",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Lone Wolf and Cub: Sword of Vengeance",
    "year": 1972,
    "note": "Japanese action-film franchise",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Battles Without Honor and Humanity",
    "year": 1973,
    "note": "Kinji Fukasaku's yakuza genre",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Nausicaä of the Valley of the Wind",
    "year": 1984,
    "note": "Animation and overseas versions",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Akira",
    "year": 1988,
    "note": "Japanese animation and international circulation",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Yongary, Monster from the Deep",
    "year": 1967,
    "note": "South Korean kaiju film",
    "role": "comparative_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Growing Up",
    "year": 1983,
    "note": "Collaborative Taiwan New Cinema",
    "role": "comparative_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Taipei Story",
    "year": 1985,
    "note": "Edward Yang and Hou Hsiao-hsien",
    "role": "comparative_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Manila in the Claws of Light",
    "year": 1975,
    "note": "Brocka's Filipino urban drama",
    "role": "comparative_film",
    "atlasDecision": "P2"
  }
];
const historicalObjects: readonly FilmHistoryBookHistoricalObject[] = [
  {
    "label": "India's separate Hindi, Tamil, Telugu, Kannada and Malayalam industries",
    "note": "Industrial, technological or political context; not a playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Bombay and Madras film industry production centers",
    "note": "Industrial, technological or political context; not a playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Playback singers, lyricists, composers and recorded film-song markets",
    "note": "Industrial, technological or political context; not a playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Indian star publicity, scriptwriters and regional remakes",
    "note": "Industrial, technological or political context; not a playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Tamil film fan clubs and relationships to regional political organization",
    "note": "Industrial, technological or political context; not a playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Telugu studio and distribution organization",
    "note": "Industrial, technological or political context; not a playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Shaw Brothers Movietown studio and its film workers",
    "note": "Industrial, technological or political context; not a playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Golden Harvest, action choreography and stunt-team labor",
    "note": "Industrial, technological or political context; not a playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Hong Kong export dubs, censorship and altered international prints",
    "note": "Industrial, technological or political context; not a playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Taiwanese production of King Hu's Chinese-language wuxia films",
    "note": "Industrial, technological or political context; not a playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Shochiku's Tora-san series and recurring theatrical audiences",
    "note": "Industrial, technological or political context; not a playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Japanese Zatoichi and Lone Wolf and Cub serial film production",
    "note": "Industrial, technological or political context; not a playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Toei yakuza production and ninkyo and jitsuroku conventions",
    "note": "Industrial, technological or political context; not a playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Japanese anime, manga, television and feature film financing",
    "note": "Industrial, technological or political context; not a playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "South Korean state censorship and TV competition",
    "note": "Industrial, technological or political context; not a playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Taiwan New Cinema writer-director-producer collaboration",
    "note": "Industrial, technological or political context; not a playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Philippine filmmaking under Ferdinand Marcos and film restoration",
    "note": "Industrial, technological or political context; not a playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Cross-border film remakes, home video and regional exhibition",
    "note": "Industrial, technological or political context; not a playable Atlas Production Case.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  }
];
const ids = new Set(filmHistoryChapterTwentyThreeSources.map(s => s.id));
for (const section of filmHistoryChapterTwentyThreeSections) {
  if (section.paragraphs.length !== 3 || section.sourceIds.length < 2 || section.sourceIds.some(id => !ids.has(id))) throw new Error(`Chapter 23 missing provenance: ${section.id}`);
}
if (new Set(filmHistoryChapterTwentyThreeSections.flatMap(s => s.sourceIds)).size !== ids.size) throw new Error("Chapter 23 has unused sources");
export const filmHistoryChapterTwentyThree: FilmHistoryBookChapter = {
  id: "popular-asian-cinemas",
  number: 23,
  title: "Popular cinemas across Asia",
  period: "1960s–1980s",
  summary: "Twenty-six sourced essays compare Indian Hindi and southern regional industries, Hong Kong studios and action genres, Japanese serial cinema and anime, and filmmaking in South Korea, Taiwan and the Philippines. They emphasize music, production labor, star systems, censorship, language, dubbing and audiences rather than treating Asian film as one style. Editorial draft: independent historical and Atlas audits remain open.",
  status: "draft",
  learningObjectives: [
    "Distinguish India's language-specific film industries from a single Hindi or Bollywood label.",
    "Explain playback singing, film music, stars and mixed genres in Hindi commercial production.",
    "Compare Deewaar, Sholay and Amar Akbar Anthony as different historical popular forms.",
    "Describe Tamil and Telugu stars, regional distributors and shared production facilities.",
    "Explain the Shaw Brothers studio system, King Hu's wuxia choreography and Chang Cheh's melodrama.",
    "Analyze Bruce Lee, Lau Kar-leung, Jackie Chan and Sammo Hung without erasing stunt crews.",
    "Distinguish the work of Ann Hui, Tsui Hark and John Woo within changing Hong Kong cinema.",
    "Explain Japanese Tora-san, Zatoichi and yakuza filmmaking as commercial genre traditions.",
    "Describe anime's movement among TV, manga, theatrical films and later international versions.",
    "Explain changing South Korean film conditions under censorship and television competition.",
    "Describe Taiwan New Cinema as a broader collaboration than the names of two famous auteurs.",
    "Analyze Manila in the Claws of Light within Filipino production and restoration history.",
    "Track regional exhibition, remakes, dubbing, home video and version differences without inventing one Asian market."
  ],
  keyTerms: ["Hindi cinema","Tamil cinema","Telugu cinema","Kannada cinema","Malayalam cinema","playback singing","masala film","regional market","star persona","Shaw Brothers","Movietown","wuxia","kung fu","action choreography","stunt team","Hong Kong New Wave","heroic bloodshed","Tora-san","Zatoichi","yakuza eiga","jitsuroku","anime","manga","South Korean cinema","Taiwan New Cinema","Philippine cinema","dubbing","export version","remake","film restoration"],
  sections: filmHistoryChapterTwentyThreeSections,
  filmReferences,
  historicalObjects,
  sources: filmHistoryChapterTwentyThreeSources,
};

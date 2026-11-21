import type {
  FilmHistoryBookChapter,
  FilmHistoryBookSource,
  FilmHistoryBookFilmReference,
  FilmHistoryBookHistoricalObject,
} from "./filmHistoryBook.js";
import { filmHistoryChapterThirteenMovementOne } from "./filmHistoryChapterThirteenMovementOne.js";
import { filmHistoryChapterThirteenMovementTwo } from "./filmHistoryChapterThirteenMovementTwo.js";
import { filmHistoryChapterThirteenMovementThree } from "./filmHistoryChapterThirteenMovementThree.js";
import { filmHistoryChapterThirteenMovementFour } from "./filmHistoryChapterThirteenMovementFour.js";

/**
 * Canonical BOOK Chapter 13 is 1930–1945 European cinemas.
 * The legacy docs/film-history-chapter-thirteen-atlas-resolved.json instead audits
 * 1944–1959 postwar film. Do not copy its cases into this book chapter.
 * Source-backed editorial working draft, not independent editorial approval.
 */
export const filmHistoryChapterThirteenSources: readonly FilmHistoryBookSource[] = [
  { id: "ch13_bfi_france30s", title: "10 great French films of the 1930s", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-french-films-1930s" },
  { id: "ch13_bfi_documentary", title: "Authentic talking cinema: the history of documentary", publisher: "BFI Sight and Sound", url: "https://www.bfi.org.uk/sight-and-sound/features/authentic-talking-cinema-history-documentary" },
  { id: "ch13_ushmm_culture", title: "Culture in the Third Reich: Overview", publisher: "United States Holocaust Memorial Museum", url: "https://encyclopedia.ushmm.org/content/en/article/culture-in-the-third-reich-overview" },
  { id: "ch13_bfi_french_noir", title: "What makes a French film noir?", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/what-makes-french-film-noir" },
  { id: "ch13_bfi_quai", title: "Le Quai des brumes", publisher: "BFI Southbank", url: "https://whatson.bfi.org.uk/Online/default.asp?BOparam%3A%3AWScontent%3A%3AloadArticle%3A%3Apermalink=le-quai-des-brumes" },
  { id: "ch13_bfi_renoir", title: "The Rules of the Game: film and restoration", publisher: "Criterion Collection", url: "https://www.criterion.com/films/295-the-rules-of-the-game" },
  { id: "ch13_bfi_39steps", title: "The 39 Steps (1935)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/6c2066ac-9ab0-5cfa-9706-a9cb364e241b/the-39-steps" },
  { id: "ch13_bfi_thrillers", title: "100 essential thrillers", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/100-essential-thrillers" },
  { id: "ch13_bfi_nightmail", title: "Night Mail (1936)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/46f89d2d-25de-51f4-9553-b68a11695f7a/night-mail" },
  { id: "ch13_bfi_grierson_women", title: "Smashing the goldfish bowl: the Grierson sisters", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/smashing-goldfish-bowl-how-grierson-sisters-helped-pioneer-british-documentary" },
  { id: "ch13_bfi_coalface", title: "Coal Face (1935)", publisher: "BFI Player", url: "https://player.bfi.org.uk/rentals/film/watch-coal-face-1935-online" },
  { id: "ch13_bfi_women_doc", title: "Breaking the goldfish bowl: Britain's women documentary makers", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/britain-women-documentary-makers" },
  { id: "ch13_ushmm_propaganda", title: "Nazi Propaganda", publisher: "United States Holocaust Memorial Museum", url: "https://encyclopedia.ushmm.org/content/en/article/nazi-propaganda" },
  { id: "ch13_ushmm_censorship", title: "Nazi Propaganda and Censorship", publisher: "United States Holocaust Memorial Museum", url: "https://encyclopedia.ushmm.org/content/en/article/nazi-propaganda-and-censorship?series=31" },
  { id: "ch13_ushmm_riefenstahl", title: "Leni Riefenstahl", publisher: "United States Holocaust Memorial Museum", url: "https://encyclopedia.ushmm.org/content/en/article/leni-riefenstahl?series=187" },
  { id: "ch13_ushmm_olympics", title: "1936 Olympics: Berlin Games and the Nazi Regime", publisher: "United States Holocaust Memorial Museum", url: "https://encyclopedia.ushmm.org/content/en/article/the-nazi-olympics-berlin-1936" },
  { id: "ch13_criterion_olympia", title: "Announcing 100 Years of Olympic Films", publisher: "Criterion Collection", url: "https://www.criterion.com/current/posts/4812-announcing-100-years-of-olympic-films" },
  { id: "ch13_bfi_ophuls", title: "La Signora di Tutti", publisher: "BFI Southbank", url: "https://whatson.bfi.org.uk/Online/default.asp?BOparam%3A%3AWScontent%3A%3AloadArticle%3A%3Apermalink=signora-di-tutti" },
  { id: "ch13_bfi_ophuls_interview", title: "An interview with Max Ophüls", publisher: "BFI Sight and Sound", url: "https://www.bfi.org.uk/sight-and-sound/interviews/outstanding-film-director-good-european-interview-with-max-ophuls" },
  { id: "ch13_bfi_neorealism", title: "10 great Italian neorealist films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-italian-neorealist-films" },
  { id: "ch13_bfi_anna", title: "How Anna Magnani became the face of Italian neorealism", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/how-anna-magnani-became-face-italian-neorealism" },
  { id: "ch13_bfi_roots", title: "The roots of neorealism", publisher: "BFI Sight and Sound", url: "https://www.bfi.org.uk/sight-and-sound/features/roots-neorealism" },
  { id: "ch13_bfi_ossessione", title: "10 great lovers-on-the-run films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-lovers-run-films" },
  { id: "ch13_bfi_dreyer", title: "The A–Z of Carl Theodor Dreyer", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/a-z-carl-theodor-dreyer" },
  { id: "ch13_bfi_dayofwrath", title: "Day of Wrath (1943)", publisher: "BFI Player", url: "https://player.bfi.org.uk/rentals/film/watch-day-of-wrath-1943-online" },
  { id: "ch13_filmportal_munchausen", title: "Münchhausen", publisher: "Filmportal (Deutsches Filminstitut)", url: "https://www.filmportal.de/film/muenchhausen_f827ffaac9804d95a321338fab25323b" },
  { id: "ch13_filmportal_1943", title: "1943 in German film", publisher: "Filmportal (Deutsches Filminstitut)", url: "https://www.filmportal.de/thema/1943" },
];

const sections = [
  ...filmHistoryChapterThirteenMovementOne,
  ...filmHistoryChapterThirteenMovementTwo,
  ...filmHistoryChapterThirteenMovementThree,
  ...filmHistoryChapterThirteenMovementFour,
];

const sourceIds = new Set(filmHistoryChapterThirteenSources.map((source) => source.id));
if (sourceIds.size !== filmHistoryChapterThirteenSources.length) throw new Error("Duplicate Chapter 13 source ID");
if (sections.length !== 16 || new Set(sections.map((section) => section.id)).size !== 16) {
  throw new Error("Chapter 13 needs sixteen unique article sections");
}
for (const section of sections) {
  if (section.paragraphs.length < 3 || section.paragraphs.some((p) => p.length < 200)) {
    throw new Error(`Chapter 13 underdeveloped article: ${section.id}`);
  }
  if (section.sourceIds.length < 2 || section.sourceIds.some((id) => !sourceIds.has(id))) {
    throw new Error(`Chapter 13 source attribution missing: ${section.id}`);
  }
}

const existingFilmReferences: readonly FilmHistoryBookFilmReference[] = [
  {
    title: "The Rules of the Game", year: 1939, role: "anchor_film",
    atlasDecision: "use_existing_atlas_case",
    atlasScenarioId: "scenario_the_rules_of_the_game_1939",
    note: "Existing Chapter 12 Atlas case reused for Renoir's French ensemble social satire, without recreating film data."
  }
];
const comparativeFilms = [
  ["La Grande Illusion", 1937, "Renoir's prisoner-of-war ensemble and crisis-era European humanism."],
  ["Le Quai des brumes", 1938, "Carné and Prévert's poetic-realist port drama."],
  ["La Bête humaine", 1938, "Gabin, railway labor, social determinism and crime in Renoir's France."],
  ["The 39 Steps", 1935, "British commercial thriller, geographic pursuit and Hitchcock's suspense."],
  ["Night Mail", 1936, "GPO documentary, train rhythm, Britten and Auden."],
  ["Coal Face", 1935, "Cavalcanti's industrial documentary sound and montage."],
  ["Triumph of the Will", 1935, "Critical study of Nazi propaganda image-making; not a modeled propaganda production."],
  ["Olympia", 1938, "1936 Games footage assembled into a 1938 Nazi-era film; analyze sponsorship critically."],
  ["La signora di tutti", 1934, "Ophüls's Italian melodrama and forced exile from Nazi Germany."],
  ["Ossessione", 1943, "Visconti's cinema between Fascist industry, crime adaptation and emerging realism."],
  ["Day of Wrath", 1943, "Dreyer's witch-trial drama produced during the occupation of Denmark."],
  ["Münchhausen", 1943, "Ufa color fantasy and entertainment within Nazi-controlled production."],
] as const;
const filmReferences: readonly FilmHistoryBookFilmReference[] = [
  ...existingFilmReferences,
  ...comparativeFilms.map(([title, year, note]) => ({
    title, year, note, role: "comparative_film" as const, atlasDecision: "P2" as const,
  })),
];

const historicalObjects: readonly FilmHistoryBookHistoricalObject[] = [
  "The Depression-era finance and cross-border distribution of European films",
  "Poetic realism, constructed studio streets and cinema under the French Popular Front",
  "French censorship, release versions and restorations of La Règle du jeu",
  "GPO Film Unit, sponsored documentary and access to British transport workers",
  "Documentary women's labor, archive crediting and contested attribution",
  "Reich Film Chamber, Propaganda Ministry and exclusion of Jewish filmmakers",
  "Nazi party-rally staging and the difference between record and propaganda",
  "1936 Berlin Olympic Games, 1938 Olympia release and Nazi international image-making",
  "Artist displacement, forced exile and transnational collaboration",
  "Fascist-era Italian studios, Cinecittà and white-telephone entertainment",
  "Italian crime melodrama and social realism before 1945",
  "German occupation of Denmark and allegorical film interpretation",
].map((label) => ({
  label,
  note: "An institution, contested historical condition or production practice requiring archival evidence; not a fabricated playable film case.",
  role: "historical_object" as const, atlasDecision: "no_production_case" as const,
}));

export const filmHistoryChapterThirteen: FilmHistoryBookChapter = {
  id: "europe-crisis",
  number: 13,
  title: "European cinemas between crisis and dictatorship",
  period: "1930–1945",
  summary: "Sixteen source-attributed essays examine French poetic realism, Renoir's social criticism, British thrillers and sponsored documentary, undercredited women filmmakers, Nazi propaganda and state entertainment, political exile, Italian cinema under Fascism and Danish film during occupation. These European histories cannot be reduced to a single national style, and technical achievement must be interpreted alongside sponsorship, persecution and censorship. This is a readable editorial draft, not an independently reviewed chapter.",
  status: "draft",
  learningObjectives: [
    "Contrast national industries and competing forms of film finance during the Depression and the years of dictatorship.",
    "Identify French poetic realism's studio craft and social worlds without mistaking atmosphere for unmediated reality.",
    "Analyze Renoir's ensemble staging and the differences between La Grande Illusion and The Rules of the Game.",
    "Explain how Hitchcock's The 39 Steps organizes suspense through geography, staging and performance.",
    "Compare British sponsored documentaries' rhythmic montage and audible narration with their public-service purposes.",
    "Recover the labor of women documentary makers using archive evidence rather than assumptions from incomplete credits.",
    "Distinguish the Nazi film industry's political institutions, direct propaganda and commercial entertainment.",
    "Analyze Triumph of the Will and Olympia critically as cinematic arguments rather than neutral documentary records.",
    "Trace artistic exile without attributing every stylistic decision to persecution.",
    "Explain the production conditions and contested realism of Italy's Ossessione.",
    "Assess alternative interpretations of Day of Wrath under wartime Danish occupation.",
    "Never confuse the unrelated postwar 1944–1959 Chapter 13 Atlas audit with this canonical 1930–1945 book chapter."
  ],
  keyTerms: [
    "Depression-era film industry", "poetic realism", "studio realism", "Jean Renoir", "film restoration",
    "British documentary movement", "GPO Film Unit", "sponsored film", "documentary crediting",
    "National Socialism", "Reich Film Chamber", "Propaganda Ministry", "propaganda montage",
    "Nazi Olympics", "Ufa", "forced exile", "émigré cinema", "white telephone film",
    "Cinecittà", "Fascist-era Italian cinema", "social realism", "wartime occupation",
    "historical allegory", "state censorship", "cross-border production",
  ],
  sections,
  filmReferences,
  historicalObjects,
  sources: filmHistoryChapterThirteenSources,
};

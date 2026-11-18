import type {
  FilmHistoryBookChapter, FilmHistoryBookSource,
  FilmHistoryBookFilmReference, FilmHistoryBookHistoricalObject,
} from "./filmHistoryBook.js";
import { filmHistoryChapterFifteenMovementOne } from "./filmHistoryChapterFifteenMovementOne.js";
import { filmHistoryChapterFifteenMovementTwo } from "./filmHistoryChapterFifteenMovementTwo.js";
import { filmHistoryChapterFifteenMovementThree } from "./filmHistoryChapterFifteenMovementThree.js";
import { filmHistoryChapterFifteenMovementFour } from "./filmHistoryChapterFifteenMovementFour.js";

/**
 * Canonical BOOK Chapter 15: Cinema at war, 1939–1945.
 * WARNING: the unrelated legacy Chapter 15 Atlas audit concerns 1969–1979
 * (New Hollywood); its film matrix MUST NOT be applied to this book chapter.
 * The sources ground an editorial draft, not a completed independent review.
 */
export const filmHistoryChapterFifteenSources: readonly FilmHistoryBookSource[] = [
  { id: "ch15_bfi_jennings", title: "Where to begin with Humphrey Jennings", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/where-begin-humphrey-jennings" },
  { id: "ch15_loc_why", title: "Why We Fight – National Film Registry essay", publisher: "Library of Congress", url: "https://www.loc.gov/static/programs/national-film-preservation-board/documents/why_we_fight.pdf" },
  { id: "ch15_ushmm_propaganda", title: "Nazi Propaganda", publisher: "United States Holocaust Memorial Museum", url: "https://encyclopedia.ushmm.org/content/en/article/nazi-propaganda" },
  { id: "ch15_ushmm_nuremberg", title: "We will show you their own films: Film at the Nuremberg Trial", publisher: "United States Holocaust Memorial Museum", url: "https://encyclopedia.ushmm.org/content/en/article/we-will-show-you-their-own-films-film-at-the-nuremberg-trial" },
  { id: "ch15_loc_registry", title: "National Film Registry: descriptions and essays", publisher: "Library of Congress", url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/" },
  { id: "ch15_bfi_jennings_workers", title: "Born in 1915: eight great British documentary filmmakers", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/born-1915-eight-great-british-documentary-filmmakers" },
  { id: "ch15_bfi_britain_war", title: "10 great films set in Britain during the Second World War", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-films-set-britain-during-second-world-war" },
  { id: "ch15_bfi_jennings_collection", title: "The Complete Humphrey Jennings Collection, Vol. Two", publisher: "BFI Shop", url: "https://shop.bfi.org.uk/the-complete-humphrey-jennings-collection-volume-two-fires-were-started-dual-format-edition/" },
  { id: "ch15_bfi_documentarists", title: "Humphrey Jennings, my father", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/humphrey-jennings-my-father" },
  { id: "ch15_loc_prelude", title: "Packard Campus features war films, including Prelude to War", publisher: "Library of Congress", url: "https://www.loc.gov/item/prn-14-118/" },
  { id: "ch15_loc_memphis", title: "The Memphis Belle: A Story of a Flying Fortress", publisher: "Library of Congress", url: "https://www.loc.gov/item/2023602007/" },
  { id: "ch15_loc_memphis_registry", title: "Free to use and reuse: selections from the National Film Registry", publisher: "Library of Congress", url: "https://blogs.loc.gov/loc/2017/12/free-to-use-and-reuse-selections-from-the-national-film-registry/" },
  { id: "ch15_loc_san_pietro", title: "The Battle of San Pietro – National Film Registry essay", publisher: "Library of Congress", url: "https://www.loc.gov/static/programs/national-film-preservation-board/documents/battle_pietro.pdf" },
  { id: "ch15_bfi_silent", title: "The Silent Village (1943)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/7340b83b-dd2a-522e-b0f0-c3f467aae94b/the-silent-village" },
  { id: "ch15_bfi_silent_archive", title: "Behind-the-scenes photos of Humphrey Jennings filming The Silent Village", publisher: "BFI National Archive", url: "https://www.bfi.org.uk/inside-the-archive/features/behind-scenes-humphrey-jennings-silent-village" },
  { id: "ch15_bfi_in_which", title: "In Which We Serve (1942)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/edaab39f-ec45-5cf2-8568-0120bd0d48ee/in-which-we-serve" },
  { id: "ch15_bfi_in_which_player", title: "In Which We Serve online", publisher: "BFI Player", url: "https://player.bfi.org.uk/rentals/film/watch-in-which-we-serve-1942-online" },
  { id: "ch15_bfi_went", title: "Went the Day Well? (1942)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/6b8f6196-c88b-5e44-a96f-330f7110fd81/went-the-day-well" },
  { id: "ch15_bfi_warfilms", title: "10 great Second World War films about Nazis in Britain", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-war-films-nazis-britain" },
  { id: "ch15_bfi_blimp", title: "The Life and Death of Colonel Blimp (1943)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/25e3c083-3391-5e8b-a3df-5382f1ae0def/the-life-and-death-of-colonel-blimp" },
  { id: "ch15_bfi_blimp_context", title: "The Life and Death of Colonel Blimp: context", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/happy-70th-birthday-colonel-blimp" },
  { id: "ch15_bfi_powell", title: "Where to begin with Powell and Pressburger", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/where-begin-with-powell-pressburger" },
  { id: "ch15_bfi_casablanca", title: "Casablanca (1942)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/61d5c0dc-151e-5c9c-92ef-4a3039aa82f2/casablanca" },
  { id: "ch15_ushmm_theresienstadt", title: "Theresienstadt as a Tool of Nazi Propaganda: The 1944 Film", publisher: "United States Holocaust Memorial Museum", url: "https://encyclopedia.ushmm.org/content/en/article/theresienstadt-as-a-tool-of-nazi-propaganda-the-1944-film" },
  { id: "ch15_ushmm_theresienstadt_deception", title: "Deceiving the Public", publisher: "United States Holocaust Memorial Museum", url: "https://encyclopedia.ushmm.org/content/en/article/deceiving-the-public" },
  { id: "ch15_ushmm_theresienstadt_footage", title: "Film footage of Theresienstadt, 1944", publisher: "United States Holocaust Memorial Museum", url: "https://encyclopedia.ushmm.org/content/en/film/theresienstadt" },
  { id: "ch15_filmportal_nazi", title: "NS-Propagandafilme", publisher: "Filmportal (Deutsches Filminstitut)", url: "https://www.filmportal.de/thema/ns-propagandafilme" },
  { id: "ch15_filmportal_kolberg", title: "National-Socialist Propaganda Films", publisher: "Filmportal (Deutsches Filminstitut)", url: "https://www.filmportal.de/node/1166483" },
  { id: "ch15_bfi_rome_city", title: "Rome, Open City: Rossellini's great leap for realism", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/rome-open-city-roberto-rossellinis-great-leap-realism-screen" },
  { id: "ch15_bfi_rome_locations", title: "80 years of Rome, Open City: tracking the locations", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/rome-open-city-roberto-rossellini-locations" },
  { id: "ch15_bfi_neorealist_roots", title: "The roots of neorealism", publisher: "BFI Sight and Sound", url: "https://www.bfi.org.uk/sight-and-sound/features/roots-neorealism" },
  { id: "ch15_ushmm_camps", title: "Film Presented as Evidence: Nazi Concentration Camps", publisher: "United States Holocaust Memorial Museum", url: "https://encyclopedia.ushmm.org/content/en/gallery/film-presented-as-evidence-nazi-concentration-camps" },
  { id: "ch15_ushmm_nazi_plan", title: "Film Presented as Evidence: The Nazi Plan", publisher: "United States Holocaust Memorial Museum", url: "https://encyclopedia.ushmm.org/content/en/gallery/film-presented-as-evidence-the-nazi-plan" },
];
const sections = [
  ...filmHistoryChapterFifteenMovementOne,
  ...filmHistoryChapterFifteenMovementTwo,
  ...filmHistoryChapterFifteenMovementThree,
  ...filmHistoryChapterFifteenMovementFour,
];
const sourceIds = new Set(filmHistoryChapterFifteenSources.map((source) => source.id));
if (sourceIds.size !== filmHistoryChapterFifteenSources.length) throw new Error("Duplicate Chapter 15 source IDs");
if (sections.length !== 16 || new Set(sections.map((section) => section.id)).size !== 16)
  throw new Error("Chapter 15 requires sixteen unique articles");
for (const section of sections) {
  if (section.paragraphs.length !== 3 || section.paragraphs.some((p) => p.length < 350))
    throw new Error(`Chapter 15 article ${section.id} lacks substantive prose`);
  if (section.sourceIds.length < 2 || section.sourceIds.some((id) => !sourceIds.has(id)))
    throw new Error(`Chapter 15 article ${section.id} lacks source provenance`);
}
const usedSourceIds = new Set(sections.flatMap((section) => section.sourceIds));
if (usedSourceIds.size !== sourceIds.size) throw new Error("Chapter 15 contains unused source records");

const existingCases: readonly FilmHistoryBookFilmReference[] = [
  {
    title: "Casablanca", year: 1942, role: "anchor_film",
    atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_casablanca_1942",
    note: "Existing Chapter 12 Atlas production case reused here for wartime refugee and political-context analysis."
  },
  {
    title: "Rome, Open City", year: 1945, role: "anchor_film",
    atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_rome_open_city_1945",
    note: "Existing scenario from the later postwar 1944–1959 Atlas matrix reused only by exact film identity, not by importing its unrelated chapter audit."
  }
];
const bookComparisons = [
  ["Listen to Britain", 1942, "Jennings and McAllister organize sound into a wartime national portrait."],
  ["Fires Were Started", 1943, "Civil-defence labor portrayed through story-documentary recreation."],
  ["Prelude to War", 1942, "First Why We Fight orientation film and its compiled argument."],
  ["The Memphis Belle: A Story of a Flying Fortress", 1944, "US Air Forces bomber-crew documentary and its editing context."],
  ["The Battle of San Pietro", 1945, "John Huston's ground-combat film, release editing and military controversy."],
  ["The Silent Village", 1943, "Welsh recreation of the Nazi destruction of Czech Lidice."],
  ["In Which We Serve", 1942, "Naval drama and flashback-led national solidarity."],
  ["Went the Day Well?", 1942, "Fictional invasion and civilian collective action."],
  ["The Life and Death of Colonel Blimp", 1943, "Wartime interrogation of military memory and moral assumptions."],
  ["Theresienstadt", 1944, "Coerced Nazi deception film, 1944–45 production; never a playable propaganda simulation."],
  ["Kolberg", 1945, "Nazi film mobilizing the home front through historical spectacle."],
  ["Nazi Concentration Camps", 1945, "Liberation footage compilation used in the Nuremberg courtroom, not fiction."],
  ["The Nazi Plan", 1945, "Footage compilation presented in evidence at Nuremberg, not fictional cinema."],
] as const;
const filmReferences: readonly FilmHistoryBookFilmReference[] = [
  ...existingCases,
  ...bookComparisons.map(([title, year, note]) => ({
    title, year, note, role: "comparative_film" as const, atlasDecision: "P2" as const,
  })),
];

const historicalObjectLabels = [
  "Wartime censorship, film-stock allocation and military location access",
  "Newsreel sources, original footage, recycled shots and contextual narration",
  "British Ministry of Information and Crown Film Unit production",
  "US Army orientation films, compilation editing and military training audiences",
  "Army Air Forces cameras, aircraft filming and the risks of combat recording",
  "Release cuts and surviving versions of wartime film material",
  "Documentary recreation versus direct recording, including The Silent Village",
  "Studio drama, performers in exile and wartime film circulation",
  "Nazi film institutions, civilian morale mobilization and ideological coercion",
  "The Theresienstadt ghetto: forced performance and deceitful staging",
  "Liberated concentration camps, provenance and the rights of victims",
  "Nuremberg trial film evidence, authentication and legal interpretation",
] as const;
const historicalObjects: readonly FilmHistoryBookHistoricalObject[] = historicalObjectLabels.map((label) => ({
  label, note: "A historical institution, technical workflow or ethical evidence question, never a fabricated Production Case.",
  role: "historical_object" as const, atlasDecision: "no_production_case" as const,
}));

export const filmHistoryChapterFifteen: FilmHistoryBookChapter = {
  id: "war-propaganda",
  number: 15,
  title: "Cinema at war",
  period: "1939–1945",
  summary: "Sixteen source-attributed articles examine wartime newsreels, British civilian documentary, US military films and combat footage, fictional wartime dramas, resistance cinema, Nazi propaganda and moving pictures used as evidence at Nuremberg. Film images may inform, persuade, reconstruct or deceive; the chapter distinguishes documented events from staging, sponsor interests and subsequent use. This is a substantive editorial draft, not an independently reviewed finished chapter.",
  status: "draft",
  learningObjectives: [
    "Distinguish commercial wartime dramas, newsreels, military orientation films and documentary reconstruction.",
    "Explain how censorship, access, film stock and operational security shaped wartime filmmaking.",
    "Trace a wartime image's provenance through acquisition, editing, narration and later reuse.",
    "Analyze Listen to Britain's sound montage and Fires Were Started's reconstruction method.",
    "Explain the compilation logic, military audience and historical limits of the Why We Fight series.",
    "Compare The Memphis Belle's crew-centered viewpoint with The Battle of San Pietro's ground-level cost of war.",
    "Identify The Silent Village's Welsh re-enactment and the real destruction of Lidice without confusing their locations.",
    "Analyze how In Which We Serve, Went the Day Well? and Colonel Blimp construct different wartime narratives.",
    "Interpret Casablanca's refugee and resistance context without mistaking its fictional city for an archive of escape routes.",
    "Explain why Nazi propaganda about Theresienstadt was coercive deception rather than authentic testimony.",
    "Assess the uses of Nazi-directed spectacle in Kolberg and critically distinguish formal craft from political ideology.",
    "Connect Rome, Open City's occupation story with its later place in neorealist film history.",
    "Explain how authentic moving images were authenticated, selected and presented as evidence at Nuremberg.",
    "Keep known Atlas scenario IDs, source documents and book-only comparative references strictly separate.",
  ],
  keyTerms: [
    "newsreel", "military orientation film", "sponsored documentary", "filmed evidence",
    "war propaganda", "information ministry", "combat camera", "compilation editing",
    "voice-over", "wartime censorship", "source provenance", "release version",
    "civil defence", "Blitz", "re-enactment", "home front", "collective morale",
    "military documentary", "refugee", "resistance movement", "occupation",
    "concentration camp", "coerced staging", "Theresienstadt", "Nuremberg trials",
    "cinematic evidence", "authentication", "historical fiction", "neorealism"
  ],
  sections,
  filmReferences,
  historicalObjects,
  sources: filmHistoryChapterFifteenSources,
};

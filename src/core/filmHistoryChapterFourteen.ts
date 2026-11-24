import type { FilmHistoryBookChapter, FilmHistoryBookSource, FilmHistoryBookFilmReference, FilmHistoryBookHistoricalObject } from "./filmHistoryBook.js";
import { filmHistoryChapterFourteenMovementOne } from "./filmHistoryChapterFourteenMovementOne.js";
import { filmHistoryChapterFourteenMovementTwo } from "./filmHistoryChapterFourteenMovementTwo.js";
import { filmHistoryChapterFourteenMovementThree } from "./filmHistoryChapterFourteenMovementThree.js";
import { filmHistoryChapterFourteenMovementFour } from "./filmHistoryChapterFourteenMovementFour.js";

/**
 * Canonical BOOK Chapter 14 spans 1920s–1945.
 * docs/film-history-chapter-fourteen-atlas-resolved.json is a DIFFERENT
 * 1959–1968 audit. Never use its candidate matrix for this book chapter.
 * All prose here is editorial draft pending independent review.
 */
export const filmHistoryChapterFourteenSources: readonly FilmHistoryBookSource[] = [
  { id: "ch14_bfi_documentary", title: "Authentic talking cinema: the history of documentary", publisher: "BFI Sight and Sound", url: "https://www.bfi.org.uk/sight-and-sound/features/authentic-talking-cinema-history-documentary" },
  { id: "ch14_criterion_documentaries", title: "Documentaries collection", publisher: "The Criterion Collection", url: "https://www.criterion.com/shop/collection/18-documentaries/list" },
  { id: "ch14_criterion_nanook", title: "Nanook of the North (1922)", publisher: "The Criterion Collection", url: "https://www.criterion.com/films/574-nanook-of-the-north" },
  { id: "ch14_criterion_nanook_essay", title: "Nanook of the North", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/42-nanook-of-the-north" },
  { id: "ch14_bfi_city", title: "Where to begin with city symphonies", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/where-begin-with-city-symphonies" },
  { id: "ch14_bfi_soviet", title: "10 great Soviet films of the 1920s", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-soviet-films-1920s" },
  { id: "ch14_bfi_vertov", title: "5 wonderful effects in Man with a Movie Camera", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/5-wonderful-effects-man-with-movie-camera-how-theyre-still-inspiring-filmmakers-today" },
  { id: "ch14_bfi_french_avant", title: "10 great French avant-garde films of the 1920s", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-french-avant-garde-films-1920s" },
  { id: "ch14_bfi_nice", title: "À propos de Nice (1930)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/358143c0-3cab-515f-be94-c311fc04e6e4/a-propos-de-nice" },
  { id: "ch14_bfi_song", title: "Song of Ceylon (1934)", publisher: "BFI Player", url: "https://player.bfi.org.uk/free/film/watch-song-of-ceylon-1934-online" },
  { id: "ch14_open_song_sponsor", title: "Selling Empire: Film — Song of Ceylon commission and colonial context", publisher: "The Open University", url: "https://www.open.edu/openlearn/history-the-arts/history/world-history/selling-empire-film" },
  { id: "ch14_bfi_women_docs", title: "Breaking the goldfish bowl: Britain's women documentary makers", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/britain-women-documentary-makers" },
  { id: "ch14_bfi_grierson", title: "Smashing the goldfish bowl: the Grierson sisters", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/smashing-goldfish-bowl-how-grierson-sisters-helped-pioneer-british-documentary" },
  { id: "ch14_bfi_ukpropaganda", title: "A short history of British propaganda in 10 films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/short-history-british-propaganda-10-films" },
  { id: "ch14_loc_registry", title: "National Film Registry: descriptions and essays", publisher: "Library of Congress", url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/" },
  { id: "ch14_loc_copland", title: "Music for dance and film: Aaron Copland", publisher: "Library of Congress", url: "https://www.loc.gov/static/collections/aaron-copland/articles-and-essays/about-aaron-coplands-works/music-for-dance-and-film.html" },
  { id: "ch14_bfi_achmed", title: "10 great films of 1926", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-films-1926" },
  { id: "ch14_bfi_women_animation", title: "10 great animated films directed by women", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-animated-films-directed-women" },
  { id: "ch14_bfi_achmed_archive", title: "Inside the Archive #76: the centenary of The Adventures of Prince Achmed", publisher: "BFI National Archive", url: "https://www.bfi.org.uk/inside-the-archive/news/inside-archive-76-queer-collaborations-centenary-celebrations-victorian-education" },
  { id: "ch14_bfi_colourbox", title: "A Colour Box (1935)", publisher: "BFI Player", url: "https://player.bfi.org.uk/free/film/watch-a-colour-box-1935-online" },
  { id: "ch14_bfi_animation_history", title: "Telling a new history of British animation", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/telling-new-history-british-animation" },
  { id: "ch14_bfi_colour_systems", title: "The 10 best film colour systems", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-best-film-colour-systems" },
  { id: "ch14_bfi_disney", title: "10 great Disney films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-disney-films" },
  { id: "ch14_bfi_disney_history", title: "The story of Disney in 11 films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/story-disney-11-films-milestone-decade" },
  { id: "ch14_bfi_technicolor", title: "10 great Technicolor films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-technicolor-films" },
  { id: "ch14_bfi_entracte", title: "Entr'acte (1924)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/d20e2874-df5a-59ee-a851-d62d5d11a068/entracte" },
  { id: "ch14_bfi_cinephilia", title: "A century of cinephilia: the legacy of the Film Society", publisher: "BFI Sight and Sound", url: "https://www.bfi.org.uk/sight-and-sound/features/century-cinephilia-legacy-film-society" },
  { id: "ch14_criterion_bunuel", title: "Luis Buñuel: Eternal Surrealist", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/6767-luis-bunuel-eternal-surrealist" },
  { id: "ch14_bfi_remix", title: "10 great remix films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-remix-films" },
  { id: "ch14_moma_rose_hobart", title: "Joseph Cornell: Rose Hobart (1936)", publisher: "Museum of Modern Art", url: "https://www.moma.org/collection/works/311539" },
  { id: "ch14_criterion_deren", title: "Maya Deren on 16 mm", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/8173-maya-deren-on-16-mm" },
  { id: "ch14_criterion_deren_collection", title: "The Criterion Channel's January 2026 lineup: Maya Deren", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/9012-the-criterion-channel-s-january-2026-lineup" },
];

const sections = [
  ...filmHistoryChapterFourteenMovementOne,
  ...filmHistoryChapterFourteenMovementTwo,
  ...filmHistoryChapterFourteenMovementThree,
  ...filmHistoryChapterFourteenMovementFour,
];
const sourceIdSet = new Set(filmHistoryChapterFourteenSources.map((source) => source.id));
if (sourceIdSet.size !== filmHistoryChapterFourteenSources.length) throw new Error("Chapter 14 duplicate source IDs");
if (sections.length !== 16 || new Set(sections.map((section) => section.id)).size !== 16) {
  throw new Error("Chapter 14 requires sixteen uniquely identified article sections");
}
for (const section of sections) {
  if (section.paragraphs.length !== 3 || section.paragraphs.some((p) => p.length < 350)) {
    throw new Error(`Chapter 14 section ${section.id} needs three substantial paragraphs`);
  }
  if (section.sourceIds.length < 2 || section.sourceIds.some((id) => !sourceIdSet.has(id))) {
    throw new Error(`Chapter 14 section ${section.id} references unknown sources`);
  }
}

// Existing scenario identifiers verified in archived but matching Chapter 8/9
// Atlas matrices. Historical comparisons remain book-only, never fake cases.
const existingReferences: readonly FilmHistoryBookFilmReference[] = [
  {
    title: "Man with a Movie Camera", year: 1929, role: "anchor_film",
    atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_man_with_a_movie_camera_1929",
    note: "Existing Chapter 9 Soviet Montage Atlas scenario; book chapter applies documentary/self-reflexive analysis without cloning the case."
  },
  {
    title: "Entr'acte", year: 1924, role: "anchor_film",
    atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_entr_acte_1924",
    note: "Existing Chapter 8 French avant-garde Atlas case, reused as an experimental film comparison."
  },
  {
    title: "Un Chien Andalou", year: 1929, role: "anchor_film",
    atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_un_chien_andalou_1929",
    note: "Existing Chapter 8 Surrealist scenario; no invented filmed footage or alternate version."
  },
];
const comparisons = [
  ["Nanook of the North", 1922, "Ethnographic documentary, staged reconstruction and collaborative/ethical history."],
  ["Berlin: Symphony of a Great City", 1927, "Ruttmann's urban film and the politics of montage rhythm."],
  ["À propos de Nice", 1930, "Vigo and Boris Kaufman's satirical social city portrait."],
  ["The Song of Ceylon", 1934, "Colonial commission and experimental documentary sound."],
  ["Housing Problems", 1935, "British sponsored documentary testimony and archival labor attribution."],
  ["The City", 1939, "American planning documentary with a composed argument."],
  ["The Adventures of Prince Achmed", 1926, "Reiniger's articulated silhouettes and early feature animation."],
  ["A Colour Box", 1935, "Len Lye's directly painted film and GPO sponsorship."],
  ["Fantasia", 1940, "Disney music/image experiments and multichannel exhibition."],
  ["Rose Hobart", 1936, "Joseph Cornell's early found-footage reconstruction of an existing feature."],
  ["Meshes of the Afternoon", 1943, "Maya Deren and Alexander Hammid's 16mm experimental domestic space."],
] as const;
const filmReferences: readonly FilmHistoryBookFilmReference[] = [
  ...existingReferences,
  ...comparisons.map(([title, year, note]) => ({
    title, year, note, role: "comparative_film" as const, atlasDecision: "P2" as const,
  })),
];

const objectLabels = [
  "Nonfiction framing, reconstruction and indexical evidence",
  "City-symphony editing and the urban day as an organizing device",
  "Ethnographic filmmaking, power, community consent and reinterpretation",
  "British government commissions and institutional documentary distribution",
  "Workers' recorded testimony, sponsorship and uncredited film labor",
  "The American documentary as a tool of New Deal and planning policy",
  "Cut-out silhouettes, articulated puppets and animation rostrum photography",
  "Direct animation, hand painting on film stock and printing",
  "Specialized color, music synchronization and stereophonic exhibition",
  "Dadaist and Surrealist film societies and alternative screenings",
  "Found footage, re-editing, rights and version identification",
  "16mm experimental filmmaking and small-scale authorial collaboration",
] as const;
const historicalObjects: readonly FilmHistoryBookHistoricalObject[] = objectLabels.map((label) => ({
  label,
  note: "A historical method, medium, institution or ethical research condition, not a fictional Production Case.",
  role: "historical_object" as const, atlasDecision: "no_production_case" as const,
}));

export const filmHistoryChapterFourteen: FilmHistoryBookChapter = {
  id: "documentary-animation-experiment",
  number: 14,
  title: "Documentary, animation and experimental film",
  period: "1920s–1945",
  summary: "Sixteen source-attributed film-history articles examine documentary evidence and staging, Nanook, city symphonies, Vertov and Vigo, colonial and social-policy films, Lotte Reiniger's silhouettes, Len Lye's direct animation, Fantasia's music-image technology, and independent experiments by René Clair, Buñuel, Cornell and Deren. Nonfiction, animation and experiment are treated as distinct artistic and institutional systems, not stages in one progress narrative. This chapter is a substantive editorial draft pending review.",
  status: "draft",
  learningObjectives: [
    "Distinguish documentary evidence, reenactment, framing, montage and sponsored persuasion.",
    "Analyze the ethical problems of ethnographic representation in Nanook of the North.",
    "Compare Ruttmann's Berlin with Vertov's self-reflexive Man with a Movie Camera.",
    "Explain Vigo's satirical method in À propos de Nice.",
    "Relate colonial sponsorship to sound and image construction in Song of Ceylon.",
    "Evaluate tenants' testimony and the institutionally shaped argument of Housing Problems.",
    "Analyze how The City organizes images, music and planning policy.",
    "Compare Reiniger's articulated silhouette process with direct animation and studio feature pipelines.",
    "Explain A Colour Box as both artistic experiment and General Post Office commission.",
    "Explain Fantasia's multichannel theatrical sound and version-dependent presentation.",
    "Interpret Dada and Surrealist form without requiring every image to have one symbolic meaning.",
    "Distinguish the found-footage authorship of Rose Hobart from original image recording.",
    "Analyze repeated objects and shifting perspectives in Meshes of the Afternoon.",
    "Keep documented Film Atlas links separate from book-level references without playable scenarios.",
  ],
  keyTerms: [
    "documentary truth claim", "reenactment", "ethnography", "sponsor", "intertitle",
    "city symphony", "kino-eye", "self-reflexive montage", "non-fiction voice", "found footage",
    "social documentary", "public-policy documentary", "exhibition version", "direct animation",
    "silhouette animation", "animation rostrum", "multiplane", "Fantasound", "sound-image rhythm",
    "Dada", "Surrealism", "photogénie", "16mm experimental film", "film society",
    "uncredited labor", "indigenous representation", "colonial gaze", "film preservation"
  ],
  sections,
  filmReferences,
  historicalObjects,
  sources: filmHistoryChapterFourteenSources,
};

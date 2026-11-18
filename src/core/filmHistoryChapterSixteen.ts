import type { FilmHistoryBookChapter, FilmHistoryBookFilmReference, FilmHistoryBookHistoricalObject, FilmHistoryBookSource } from "./filmHistoryBook.js";
import { filmHistoryChapterSixteenMovementOne } from "./filmHistoryChapterSixteenMovementOne.js";
import { filmHistoryChapterSixteenMovementTwo } from "./filmHistoryChapterSixteenMovementTwo.js";
import { filmHistoryChapterSixteenMovementThree } from "./filmHistoryChapterSixteenMovementThree.js";
import { filmHistoryChapterSixteenMovementFour } from "./filmHistoryChapterSixteenMovementFour.js";

/**
 * The canonical BOOK Chapter 16 examines Italian Neorealism, 1943–1954.
 * The differently scoped old Chapter 16 Atlas audit covers 1980–1989!
 * That legacy matrix must not be imported as completion of this book chapter.
 * Chapter is a readable editorial draft; fact and source review remain open.
 */
export const filmHistoryChapterSixteenSources: readonly FilmHistoryBookSource[] = [
  { id: "ch16_bfi_roots", title: "The roots of neorealism", publisher: "BFI Sight and Sound", url: "https://www.bfi.org.uk/sight-and-sound/features/roots-neorealism" },
  { id: "ch16_bfi_topten", title: "10 great Italian neorealist films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-italian-neorealist-films" },
  { id: "ch16_bfi_melodrama", title: "Around the world in melodrama: 9 countries, 45 essential films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/around-world-melodrama-9-countries-45-essential-films" },
  { id: "ch16_criterion_senso", title: "Senso and Sensibility", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/1763-senso-and-sensibility" },
  { id: "ch16_criterion_bitter", title: "Bitter Rice: A Field in Italy", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/3868-bitter-rice-a-field-in-italy" },
  { id: "ch16_criterion_bicycle_essay", title: "Bicycle Thieves: A Passionate Commitment to the Real", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/467-bicycle-thieves-a-passionate-commitment-to-the-real" },
  { id: "ch16_criterion_shoeshine", title: "Shoeshine (1946)", publisher: "The Criterion Collection", url: "https://www.criterion.com/films/34329-shoeshine" },
  { id: "ch16_criterion_umberto", title: "Umberto D.", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/967-umberto-d" },
  { id: "ch16_bfi_rome", title: "Rome, Open City: Roberto Rossellini's great leap for realism on screen", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/rome-open-city-roberto-rossellinis-great-leap-realism-screen" },
  { id: "ch16_bfi_rome_places", title: "80 years of Rome, Open City: tracking down Roberto Rossellini's locations", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/rome-open-city-roberto-rossellini-locations" },
  { id: "ch16_bfi_rossellini", title: "Where to begin with Roberto Rossellini", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/where-begin-with-roberto-rossellini" },
  { id: "ch16_criterion_shoeshine_essay", title: "Shoeshine: On Violence and Friendship", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/8899-shoeshine-on-violence-and-friendship" },
  { id: "ch16_criterion_bicycle", title: "Bicycle Thieves (1948)", publisher: "The Criterion Collection", url: "https://www.criterion.com/films/210-bicycle-thieves" },
  { id: "ch16_criterion_desica", title: "Working with Vittorio De Sica", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/3992-working-with-vittorio-de-sica" },
  { id: "ch16_bfi_pastoral", title: "10 great Italian pastoral films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-italian-pastoral-films" },
  { id: "ch16_bfi_stars", title: "5 iconic Italian actresses", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/five-iconic-italian-actresses" },
  { id: "ch16_criterion_miracle", title: "Miracle in Milan (1951)", publisher: "The Criterion Collection", url: "https://www.criterion.com/films/28176" },
  { id: "ch16_criterion_miracle_essay", title: "Miracle in Milan: It Is Goodness", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/7755-miracle-in-milan-it-is-goodness" },
  { id: "ch16_criterion_miracle_desica", title: "Miracle in Milan – Vittorio De Sica", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/867-miracle-in-milan" },
  { id: "ch16_criterion_modern_italians", title: "Modern Italians", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/9032-modern-italians" },
  { id: "ch16_bfi_magnani", title: "How Anna Magnani became the face of Italian neorealism", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/how-anna-magnani-became-face-italian-neorealism" },
  { id: "ch16_criterion_visconti", title: "Journeys to Italy with Visconti and Antonioni", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/5732-journeys-to-italy-with-visconti-and-antonioni" },
  { id: "ch16_criterion_umberto_essay", title: "Seeing Clearly Through Tears: On the Smart Sentiment of Umberto D.", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/292-seeing-clearly-through-tears-on-the-smart-sentiment-of-umberto-d" },
  { id: "ch16_criterion_bergman", title: "Living in Cinema: Rossellini and Bergman in Italy", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/2907-living-in-cinema-rossellini-and-bergman-in-italy" },
  { id: "ch16_criterion_rossellini_archive", title: "From the Rossellini Archives", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/4534-from-the-rossellini-archives" },
  { id: "ch16_criterion_journey", title: "Journey to Italy (1954)", publisher: "The Criterion Collection", url: "https://www.criterion.com/films/28081-journey-to-italy" },
  { id: "ch16_criterion_journey_essay", title: "Journey to Italy: Fun Couples", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/2910-journey-to-italy-fun-couples" },
  { id: "ch16_criterion_strada", title: "La strada", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/929-la-strada" },
  { id: "ch16_bfi_strada", title: "How La strada launched Fellini's international career and made a star of Giulietta Masina", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/strada-federico-fellini-giulietta-masina" },
  { id: "ch16_criterion_strada_revisit", title: "Revisiting La strada", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/7174-revisiting-la-strada" },
];

const sections = [
  ...filmHistoryChapterSixteenMovementOne,
  ...filmHistoryChapterSixteenMovementTwo,
  ...filmHistoryChapterSixteenMovementThree,
  ...filmHistoryChapterSixteenMovementFour,
];
const sourceIds = new Set(filmHistoryChapterSixteenSources.map((source) => source.id));
if (sourceIds.size !== filmHistoryChapterSixteenSources.length) throw new Error("Duplicate Chapter 16 source IDs");
if (sections.length !== 16 || new Set(sections.map((section) => section.id)).size !== 16)
  throw new Error("Chapter 16 requires sixteen unique articles");
for (const section of sections) {
  if (section.paragraphs.length !== 3 || section.paragraphs.some((paragraph) => paragraph.length < 350))
    throw new Error(`Chapter 16 article ${section.id} is underdeveloped`);
  if (section.sourceIds.length < 2 || section.sourceIds.some((id) => !sourceIds.has(id)))
    throw new Error(`Chapter 16 article ${section.id} lacks source provenance`);
}
const used = new Set(sections.flatMap((section) => section.sourceIds));
if (used.size !== sourceIds.size) throw new Error("Chapter 16 has unused source records");

/** Scenario IDs match verified records from the 1944–1959 postwar Atlas audit. */
const existingCases: readonly FilmHistoryBookFilmReference[] = [
  { title: "Rome, Open City", year: 1945, role: "anchor_film", atlasDecision: "use_existing_atlas_case",
    atlasScenarioId: "scenario_rome_open_city_1945", note: "Reuse canonical Rossellini case; this chapter analyzes neorealism rather than replaying the wartime scenario." },
  { title: "Paisan", year: 1946, role: "anchor_film", atlasDecision: "use_existing_atlas_case",
    atlasScenarioId: "scenario_paisan_1946", note: "Reuse Rossellini's existing episodic liberation case and its distinct production history." },
  { title: "Bicycle Thieves", year: 1948, role: "anchor_film", atlasDecision: "use_existing_atlas_case",
    atlasScenarioId: "scenario_bicycle_thieves_1948", note: "Reuse De Sica's existing social-drama case; distinguish it from book-level comparisons." },
  { title: "La Strada", year: 1954, role: "anchor_film", atlasDecision: "use_existing_atlas_case",
    atlasScenarioId: "scenario_la_strada_1954", note: "Reuse Fellini's existing case as a transformed 1954 endpoint to the period." }
];
const bookOnly = [
  ["Ossessione", 1943, "Visconti's crime melodrama made under Fascism and a precursor to postwar realism."],
  ["The Children Are Watching Us", 1944, "De Sica's child-centered family melodrama and early social observation."],
  ["Germany Year Zero", 1948, "Rossellini's Berlin child tragedy; no audited playable case in the 1944–1959 matrix."],
  ["Shoeshine", 1946, "Youth friendship, prison institutions and De Sica/Zavattini's work after liberation."],
  ["La terra trema", 1948, "Visconti's nonprofessional fishing-community drama and economic exploitation."],
  ["Bitter Rice", 1949, "De Santis mixes the rice harvest, crime melodrama and star publicity."],
  ["Miracle in Milan", 1951, "De Sica's magical social fable of property and collective solidarity."],
  ["Bellissima", 1951, "Visconti and Magnani portray the cinema industry's promises and exclusions."],
  ["Umberto D.", 1952, "Old age, poverty, intimate behavior and De Sica's patient observation."],
  ["Stromboli", 1950, "Rossellini and Bergman combine displaced-person drama with volcanic island setting."],
  ["Journey to Italy", 1954, "Rossellini's modernist marriage story and historical locations around Naples."],
] as const;
const filmReferences: readonly FilmHistoryBookFilmReference[] = [
  ...existingCases,
  ...bookOnly.map(([title, year, note]) => ({
    title, year, note, role: "comparative_film" as const, atlasDecision: "P2" as const,
  })),
];

const historicalObjectLabels = [
  "Italian cinema production under Fascism and after liberation",
  "Neorealism as a contested critical label, not a fixed technique or quality score",
  "Postwar employment, housing and food insecurity as social contexts",
  "Location access, sound post-synchronization and resource constraints",
  "Nonprofessional performers, child actors and documented consent",
  "De Sica and Zavattini screenplay collaboration and constructed observation",
  "Italian film labor, women workers, star publicity and popular genre production",
  "The rural and coastal economies of fishing and seasonal rice labor",
  "Neorealist international exhibition, subtitles, festivals and subsequent restorations",
  "Magic realism and theatrical effect in Miracle in Milan",
  "Rossellini–Bergman collaboration, international stardom and publicity",
  "Performance, sound and cinematic modernism in the 1954 transition",
] as const;
const historicalObjects: readonly FilmHistoryBookHistoricalObject[] = historicalObjectLabels.map((label) => ({
  label, note: "A social, institutional or technical condition to source critically, not a fictional feature-film Production Case.",
  role: "historical_object" as const, atlasDecision: "no_production_case" as const,
}));
export const filmHistoryChapterSixteen: FilmHistoryBookChapter = {
  id: "italian-neorealism",
  number: 16,
  title: "Italian Neorealism",
  period: "1943–1954",
  summary: "Sixteen film-history articles trace neorealism as an evolving debate over poverty, labor, cinema and form. From Visconti's Ossessione and Rossellini's war trilogy through De Sica's Shoeshine, Bicycle Thieves and Umberto D., the chapter examines rural labor, popular genre, magic, stardom and the transformations of Rossellini and Fellini by 1954. This sourced material is a substantial editorial draft, not a completed or independently approved chapter.",
  status: "draft",
  learningObjectives: [
    "Distinguish Italian neorealism's central concerns from the inaccurate claim that it was a fixed filmmaking recipe.",
    "Explain continuities and ruptures between Fascist-era industry, wartime filmmaking and postwar production.",
    "Analyze the role of genre, landscape and work in Ossessione and La terra trema.",
    "Compare Rome, Open City, Paisan and Germany Year Zero as different filmmaking structures and responses to war.",
    "Explain how childhood and adult authority shape Shoeshine, The Children Are Watching Us and Bicycle Thieves.",
    "Analyze the relation between employment, city geography, dignity and parental responsibility in Bicycle Thieves.",
    "Describe how Bitter Rice mixed popular melodrama with portrayals of agricultural work and collective labor.",
    "Interpret why Miracle in Milan uses fantasy in a politically engaged social drama.",
    "Analyze Bellissima as a film about the film industry's treatment of social aspiration.",
    "Explain the expressive significance of ordinary actions, age and dignity in Umberto D.",
    "Compare Rossellini's shift toward psychological and spiritual questions in Stromboli and Journey to Italy.",
    "Read La strada as a transformed engagement with postwar life, not a simple replacement for neorealism.",
    "Separate verified film-source evidence, critical interpretation and hypothetical Production Case design.",
  ],
  keyTerms: [
    "Italian neorealism", "Fascist-era industry", "postwar reconstruction", "location photography",
    "nonprofessional actor", "post-synchronization", "open narrative form", "melodrama",
    "Cesare Zavattini", "social cinema", "youth institution", "child perspective",
    "employment insecurity", "public space", "landscape", "coastal labor", "rice harvest",
    "popular genre", "star system", "film industry", "magical realism", "displacement",
    "international co-production", "film festival", "national cinema", "modernism",
    "version history", "restoration", "collaborative authorship"
  ],
  sections,
  filmReferences,
  historicalObjects,
  sources: filmHistoryChapterSixteenSources,
};

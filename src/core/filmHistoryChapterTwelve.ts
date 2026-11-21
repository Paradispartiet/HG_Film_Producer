import type {
  FilmHistoryBookChapter,
  FilmHistoryBookFilmReference,
  FilmHistoryBookSource,
  FilmHistoryBookHistoricalObject,
} from "./filmHistoryBook.js";
import { filmHistoryChapterTwelveMovementOne } from "./filmHistoryChapterTwelveMovementOne.js";
import { filmHistoryChapterTwelveMovementTwo } from "./filmHistoryChapterTwelveMovementTwo.js";
import { filmHistoryChapterTwelveMovementThree } from "./filmHistoryChapterTwelveMovementThree.js";
import { filmHistoryChapterTwelveMovementFour } from "./filmHistoryChapterTwelveMovementFour.js";

/** Chapter 12 sources are section-resolved. Published articles remain pending editorial review. */
export const filmHistoryChapterTwelveSources: readonly FilmHistoryBookSource[] = [
  { id: "ch12_bfi_precode", title: "Pre-Code: Hollywood before the censors", publisher: "BFI Sight and Sound", url: "https://www.bfi.org.uk/sight-and-sound/features/deep-focus/pre-code-hollywood" },
  { id: "ch12_bfi_musicals", title: "10 great American musicals of the 1930s", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-american-musicals-1930s" },
  { id: "ch12_afi_42nd_street", title: "42nd Street (1933) — production and dance credits", publisher: "AFI Catalog of Feature Films", url: "https://catalog.afi.com/Film/3955-42ND-STREET" },
  { id: "ch12_afi_it_happened", title: "It Happened One Night (1934) — release and production", publisher: "AFI Catalog of Feature Films", url: "https://catalog.afi.com/Film/6316-IT-HAPPENED-ONE-NIGHT" },
  { id: "ch12_loc_pca_1934", title: "When “Pre-” Met “Code” — Eighty Years Ago Today", publisher: "Library of Congress", url: "https://blogs.loc.gov/now-see-hear/2014/07/when-pre-met-code-eighty-years-ago-today/" },
  { id: "ch12_afi_wizard", title: "The Wizard of Oz (1939) — production and color records", publisher: "AFI Catalog of Feature Films", url: "https://catalog.afi.com/Film/7892-THE-WIZARD-OF-OZ" },
  { id: "ch12_bfi_studio_directors", title: "What's the best year a director ever had?", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/directors-best-years" },
  { id: "ch12_tcm_warners", title: "WB100: Warner Joins a Gang", publisher: "Turner Classic Movies", url: "https://www.tcm.com/articles/021758/wb100-warner-joins-a-gang" },
  { id: "ch12_bfi_gangsters", title: "10 great Hollywood gangster films of the 1930s", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-hollywood-gangster-films-1930s" },
  { id: "ch12_criterion_scarface_motif", title: "Scarface: Gangster Style", publisher: "The Criterion Collection", url: "https://www.criterion.com/current/posts/8645-scarface-gangster-style" },
  { id: "ch12_loc_registry", title: "Brief descriptions and essays of National Film Registry titles", publisher: "Library of Congress", url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/" },
  { id: "ch12_bfi_universal", title: "Where to begin with the Universal horror cycle", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/where-begin-universal-horror-cycle" },
  { id: "ch12_bfi_horror", title: "10 great horror films of the 1930s", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-horror-films-1930s" },
  { id: "ch12_bfi_berkeley", title: "Where to begin with Busby Berkeley", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/where-begin-busby-berkeley" },
  { id: "ch12_bfi_top_hat", title: "Top Hat (1935)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/7205d174-cb74-5045-bdf3-510c9dcc80dc/top-hat" },
  { id: "ch12_afi_top_hat", title: "Top Hat (1935) — documented filming of Cheek to Cheek", publisher: "AFI Catalog of Feature Films", url: "https://catalog.afi.com/Film/6707-TOP-HAT" },
  { id: "ch12_bfi_screwball", title: "10 great screwball comedy films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-screwball-comedies" },
  { id: "ch12_bfi_melodrama", title: "10 great Hollywood melodramas of the 1940s", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-hollywood-melodramas-1940s" },
  { id: "ch12_senses_stella_dallas", title: "Poverty and Women’s Sacrifices in Stella Dallas (1937) and Wendy and Lucy (2008)", publisher: "Senses of Cinema", url: "https://www.sensesofcinema.com/2019/feature-articles/poverty-and-womens-sacrifices-in-stella-dallas-1937-and-wendy-and-lucy-2008/" },
  { id: "ch12_bfi_kingvidor", title: "King Vidor: 10 essential films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/king-vidor-10-essential-films" },
  { id: "ch12_bfi_stanwyck", title: "Barbara Stanwyck: 10 essential films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/barbara-stanwyck-10-essential-films" },
  { id: "ch12_bfi_disney", title: "The many merry eras of Disney", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/many-merry-eras-disney" },
  { id: "ch12_bfi_disney_history", title: "The story of Disney in 11 films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/story-disney-11-films-milestone-decade" },
  { id: "ch12_bfi_king_kong", title: "10 great films set in the jungle", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-films-set-jungle" },
  { id: "ch12_bfi_stagecoach", title: "Stagecoach (1939)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/7074fd5e-0658-5aaa-ab2b-49b0246858c3/stagecoach" },
  { id: "ch12_afi_stagecoach", title: "Stagecoach (1939) — production credits", publisher: "AFI Catalog of Feature Films", url: "https://catalog.afi.com/Film/4173-STAGECOACH" },
  { id: "ch12_bfi_ford", title: "John Ford: 10 essential films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-best-john-ford-films" },
  { id: "ch12_bfi_wizard", title: "The Wizard of Oz (1939)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/f2142b94-8e66-581d-88d3-d7e2fc5a2f17/the-wizard-of-oz" },
  { id: "ch12_bfi_technicolor", title: "10 great Technicolor films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-technicolor-films" },
  { id: "ch12_bfi_gwtw", title: "Gone with the Wind (1939)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/c00d4d53-3498-5f3d-b461-748d678a837e/gone-with-the-wind" },
  { id: "ch12_emory_gwtw_premiere", title: "Bernstein recounts the segregated Atlanta premiere of Gone with the Wind", publisher: "Emory University", url: "https://news.emory.edu/stories/2014/11/bernstein-recounts-segregated-atlanta-premiere-gone-wind" },
  { id: "ch12_academy_mcdaniel_1940", title: "The 12th Academy Awards (1940)", publisher: "Academy of Motion Picture Arts and Sciences", url: "https://www.oscars.org/oscars/ceremonies/1940" },
  { id: "ch12_bfi_kane", title: "Citizen Kane (1941)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/f4c92833-af39-5cd6-a41e-8df5933d0dc1/citizen-kane" },
  { id: "ch12_bfi_kane_visual", title: "20 inspired visual moments in Citizen Kane", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/20-inspired-visual-moments-citizen-kane" },
  { id: "ch12_bfi_casablanca", title: "Casablanca (1942)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/61d5c0dc-151e-5c9c-92ef-4a3039aa82f2/casablanca" },
  { id: "ch12_afi_casablanca", title: "Casablanca (1942) — production history and La Marseillaise scene", publisher: "AFI Catalog of Feature Films", url: "https://catalog.afi.com/Film/27175-CASABLANCA" },
  { id: "ch12_bfi_noir", title: "Double Indemnity (1944)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/fbc40f9d-5a17-565a-a2bd-b809efb588fb/double-indemnity" },
  { id: "ch12_afi_double_indemnity", title: "Double Indemnity (1944) — production history and recorded confession", publisher: "AFI Catalog of Feature Films", url: "https://catalog.afi.com/Film/2201-DOUBLE-INDEMNITY" },
];

const sections = [
  ...filmHistoryChapterTwelveMovementOne,
  ...filmHistoryChapterTwelveMovementTwo,
  ...filmHistoryChapterTwelveMovementThree,
  ...filmHistoryChapterTwelveMovementFour,
];
const sourceIds = new Set(filmHistoryChapterTwelveSources.map((source) => source.id));
if (sourceIds.size !== filmHistoryChapterTwelveSources.length) throw new Error("Duplicate Chapter 12 source ID");
if (sections.length !== 16 || new Set(sections.map((section) => section.id)).size !== sections.length) {
  throw new Error("Chapter 12 requires 16 uniquely identified articles");
}
for (const section of sections) {
  if (section.paragraphs.length < 3 || section.paragraphs.some((paragraph) => paragraph.length < 200)) {
    throw new Error(`Chapter 12 article ${section.id} is not substantial enough`);
  }
  if (section.sourceIds.length < 2 || section.sourceIds.some((id) => !sourceIds.has(id))) {
    throw new Error(`Chapter 12 article ${section.id} has missing source provenance`);
  }
}

/** Existing scenarios: IDs follow the audited Chapter 12 Film Atlas matrix (18 Aug 2026). */
const existingFilms = [
  ["King Kong", 1933, "scenario_king_kong_1933", "anchor_film", "RKO composite effects, stop-motion and score."],
  ["Modern Times", 1936, "scenario_modern_times_1936", "anchor_film", "Independent comedy and selective sound in the studio era."],
  ["Snow White and the Seven Dwarfs", 1937, "scenario_snow_white_and_the_seven_dwarfs_1937", "anchor_film", "Animation departments, personality movement and feature-length production."],
  ["The Rules of the Game", 1939, "scenario_the_rules_of_the_game_1939", "comparative_film", "French ensemble staging and deep-space social critique; not a Hollywood studio film."],
  ["Stagecoach", 1939, "scenario_stagecoach_1939", "anchor_film", "Western ensemble, location staging and independent producer Walter Wanger."],
  ["The Wizard of Oz", 1939, "scenario_the_wizard_of_oz_1939", "anchor_film", "MGM musical fantasy, color and departmental coordination."],
  ["Citizen Kane", 1941, "scenario_citizen_kane_1941", "anchor_film", "RKO infrastructure, narrative perspectives and expressive deep focus."],
  ["Casablanca", 1942, "scenario_casablanca_1942", "anchor_film", "Warner Bros. wartime production and collaborative storytelling."],
  ["The Public Enemy", 1931, "scenario_the_public_enemy_1931", "anchor_film", "Warner Bros. crime cycle and Cagney performance."],
  ["Dracula", 1931, "scenario_dracula_1931", "anchor_film", "Early Universal sound horror and stage-derived performance."],
  ["42nd Street", 1933, "scenario_42nd_street_1933", "anchor_film", "Backstage musical and Busby Berkeley cinematic choreography."],
  ["Frankenstein", 1931, "scenario_frankenstein_1931", "comparative_film", "Universal horror, creature performance and makeup."],
  ["Scarface", 1932, "scenario_scarface_1932", "comparative_film", "Gangster violence, style and censorship negotiations."],
  ["It Happened One Night", 1934, "scenario_it_happened_one_night_1934", "comparative_film", "Screwball road narrative, class and comic props."],
  ["Top Hat", 1935, "scenario_top_hat_1935", "comparative_film", "Astaire–Rogers performance and dance-camera coordination."],
  ["Gone with the Wind", 1939, "scenario_gone_with_the_wind_1939", "comparative_film", "Selznick prestige picture and critical account of racist plantation nostalgia."],
  ["The Maltese Falcon", 1941, "scenario_the_maltese_falcon_1941", "comparative_film", "Crime thriller conventions, studio staging and later noir categorization."],
] as const;

const bookOnlyFilms = [
  ["Duck Soup", 1933, "Marx Brothers anarchy complicates a single comedy formula."],
  ["Bride of Frankenstein", 1935, "Whale's horror sequel expands the creature's emotional possibilities."],
  ["Swing Time", 1936, "Dance and romantic narrative beyond a single Astaire–Rogers example."],
  ["Bringing Up Baby", 1938, "Screwball reversals and character-centered staging."],
  ["The Adventures of Robin Hood", 1938, "Technicolor adventure and prestige action staging."],
  ["His Girl Friday", 1940, "Overlapping dialogue and press-work comedy."],
  ["Meet Me in St. Louis", 1944, "Home, seasons and musical melodrama."],
  ["Stella Dallas", 1937, "Class, self-presentation and maternal sacrifice in melodrama."],
  ["Double Indemnity", 1944, "Retrospective narration, crime, sexual power and noir's later naming."],
] as const;

const filmReferences: readonly FilmHistoryBookFilmReference[] = [
  ...existingFilms.map(([title, year, atlasScenarioId, role, note]) => ({
    title, year, atlasScenarioId, role, note, atlasDecision: "use_existing_atlas_case" as const,
  })),
  ...bookOnlyFilms.map(([title, year, note]) => ({
    title, year, note, role: "comparative_film" as const, atlasDecision: "P2" as const,
  })),
];

/** These are institutional/technical objects, not invented playable film cases. */
const objectLabels = [
  "Big Five, Little Three and vertically integrated company structures",
  "Block booking, distribution contracts and studio-owned exhibition",
  "A-picture, B-picture and double-feature scheduling",
  "The Production Code Administration and pre-Code negotiations",
  "Long-term star contracts, talent loans and publicity offices",
  "Studio writers, camera crews, craftspeople, editing rooms and sound departments",
  "Backlots, standing sets, sound stages and location units",
  "Three-strip Technicolor and its specialist production requirements",
  "Stop-motion, animation departments and optical compositing",
  "Gender, race, class and colonial stereotypes in genre representation",
] as const;
const historicalObjects: readonly FilmHistoryBookHistoricalObject[] = objectLabels.map((label) => ({
  label,
  note: "A historical production institution, technical process or representational framework to investigate with sources; not a fictional feature-film scenario.",
  role: "historical_object" as const,
  atlasDecision: "no_production_case" as const,
}));

export const filmHistoryChapterTwelve: FilmHistoryBookChapter = {
  id: "hollywood-genres",
  number: 12,
  title: "Hollywood genres in the studio era",
  period: "1930s–1945",
  summary: "Crime, horror, musicals, screwball comedy, melodrama, westerns, fantasy and noir took shape through studio organization, specialist labor and changing censorship. Sixteen sourced articles analyze individual films and the systems around them, from The Public Enemy and 42nd Street to Citizen Kane, Casablanca and Double Indemnity. This readable material is a working draft, not a completed or independently approved chapter.",
  status: "draft",
  learningObjectives: [
    "Explain how studio organization, exhibition and star contracts affected but did not dictate film form.",
    "Compare the crime cycle of The Public Enemy and Scarface with the later noir treatment of guilt in Double Indemnity.",
    "Distinguish Universal horror's theatrical, photographic and performance choices across Dracula and Frankenstein.",
    "Analyze why Berkeley's 42nd Street numbers differ from the integrated dance staging in Top Hat.",
    "Explain how comedy and melodrama use social class in It Happened One Night and Stella Dallas.",
    "Describe animation and optical-effects workflows without conflating them with live-action technique.",
    "Study the effects of color and music in Snow White and The Wizard of Oz.",
    "Examine Stagecoach's construction of landscape and its Indigenous-representation limitations.",
    "Compare collaborative studio authorship in Citizen Kane and Casablanca.",
    "Critique the racial ideology of Gone with the Wind alongside its production and reception history.",
    "Separate source-verified historical facts from interpretation and hypothetical production choices.",
  ],
  keyTerms: [
    "vertical integration", "Big Five", "Little Three", "block booking", "B picture", "double feature",
    "genre cycle", "house style", "studio contract", "star system", "Production Code Administration",
    "pre-Code", "gangster film", "screwball comedy", "horror cycle", "melodrama", "backstage musical",
    "choreographic camera", "Western", "location shooting", "Technicolor", "animation pipeline",
    "multiplane camera", "optical compositing", "stop motion", "prestige picture", "voice-over",
    "film noir", "colonial representation", "collective authorship",
  ],
  sections,
  filmReferences,
  historicalObjects,
  sources: filmHistoryChapterTwelveSources,
};

import type { FilmHistoryBookChapter, FilmHistoryBookSource } from "./filmHistoryBook.js";
import { filmHistoryChapterSixMovementOne } from "./filmHistoryChapterSixMovementOne.js";
import { filmHistoryChapterSixMovementTwo } from "./filmHistoryChapterSixMovementTwo.js";
import { filmHistoryChapterSixMovementThree } from "./filmHistoryChapterSixMovementThree.js";

export const filmHistoryChapterSixSources: readonly FilmHistoryBookSource[] = [
  { id: "ch6_classical_columbia", title: "The Classical Hollywood Cinema: Film Style and Mode of Production to 1960", publisher: "Columbia University Press", url: "https://cup.columbia.edu/book/the-classical-hollywood-cinema/9780231060554/" },
  { id: "ch6_classical_routledge", title: "The Classical Hollywood Cinema: Film Style and Mode of Production to 1960", publisher: "Routledge", url: "https://www.routledge.com/The-Classical-Hollywood-Cinema-Film-Style-and-Mode-of-Production-to-1960/Bordwell-Staiger-Thompson/p/book/9780415003834" },
  { id: "ch6_moma_ince", title: "The Return of Thomas H. Ince", publisher: "Museum of Modern Art", url: "https://www.moma.org/calendar/film/498" },
  { id: "ch6_hollywood_vault", title: "Hollywood Vault: Film Libraries before Home Video", publisher: "University of California Press", url: "https://www.ucpress.edu/books/hollywood-vault/paper" },
  { id: "ch6_afi_cheat", title: "The Cheat — AFI Catalog", publisher: "American Film Institute", url: "https://catalog.afi.com/Catalog/moviedetails/1815" },
  { id: "ch6_afi_it", title: "It — AFI Catalog", publisher: "American Film Institute", url: "https://catalog.afi.com/Film/9977-IT" },
  { id: "ch6_famous_lasky_blockbooking", title: "Federal Trade Commission v. Paramount Famous-Lasky Corp. (1932)", publisher: "Justia / U.S. Court of Appeals for the Second Circuit", url: "https://law.justia.com/cases/federal/appellate-courts/F2/57/152/1569583/" },
  { id: "ch6_paramount_antitrust_1946", title: "United States v. Paramount Pictures (1946)", publisher: "Justia / U.S. District Court, S.D. New York", url: "https://law.justia.com/cases/federal/district-courts/FSupp/66/323/1556120/" },
  { id: "ch6_ucla_cheat", title: "The Cheat / The Golden Chance", publisher: "UCLA Film & Television Archive", url: "https://cinema.ucla.edu/events/the-cheat-the-golden-chance-02-07-15/" },
  { id: "ch6_filmfoundation_cheat", title: "Out of the Vaults: Cecil B. DeMille's The Cheat, 1915", publisher: "The Film Foundation", url: "https://www.film-foundation.org/hfpa-cheat" },
  { id: "ch6_moma_cheat", title: "D. W. Griffith's Competitors: Ince and DeMille", publisher: "Museum of Modern Art", url: "https://www.moma.org/explore/inside_out/2009/12/01/d-w-griffiths-competitors-ince-and-demille/" },
  { id: "ch6_loc_registry_descriptions", title: "Brief Descriptions and Expanded Essays of National Film Registry Titles", publisher: "Library of Congress", url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/" },
  { id: "ch6_afi_crowd", title: "The Crowd — AFI Catalog", publisher: "American Film Institute", url: "https://catalog.afi.com/Film/3514-THE-CROWD" },
  { id: "ch6_academy_1929", title: "The 1st Academy Awards — 1929", publisher: "Academy of Motion Picture Arts and Sciences", url: "https://www.oscars.org/oscars/ceremonies/1929" },
  { id: "ch6_paramount_antitrust_1949", title: "United States v. Paramount Pictures (1949)", publisher: "Justia / U.S. District Court, S.D. New York", url: "https://law.justia.com/cases/federal/district-courts/FSupp/85/881/1605984/" },
  { id: "ch6_afi_goldrush", title: "The Gold Rush — AFI Catalog", publisher: "American Film Institute", url: "https://catalog.afi.com/Film/9427-THE-GOLD-RUSH" },
  { id: "ch6_chaplin_filming", title: "Filming The Gold Rush", publisher: "Charlie Chaplin / Roy Export", url: "https://www.charliechaplin.com/en/films/2-The-Gold-Rush/articles/5-Filming-The-Gold-Rush" },
  { id: "ch6_chaplin_music", title: "The Music of The Gold Rush", publisher: "Charlie Chaplin / Roy Export", url: "https://www.charliechaplin.com/en/films/2-The-Gold-Rush/articles/248-The-Music-of-The-Gold-Rush" },
  { id: "ch6_cineteca_goldrush", title: "La febbre dell'oro — 4K restoration", publisher: "Cineteca di Bologna", url: "https://cinetecadibologna.it/distribuzione/film/la-febbre-delloro/" },
  { id: "ch6_afi_goldrush_spotlight", title: "The Gold Rush (1925) — AFI Catalog Spotlight", publisher: "American Film Institute", url: "https://www.afi.com/news/the-gold-rush-1925-afi-catalog-spotlight/" },
  { id: "ch6_ucla_it", title: "It / Children of Divorce", publisher: "UCLA Film & Television Archive", url: "https://cinema.ucla.edu/events/it-1927-children-of-divorce-1927-01-11-13/" },
  { id: "ch6_loc_registry_complete", title: "Complete National Film Registry Listing", publisher: "Library of Congress", url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/complete-national-film-registry-listing/" },
  { id: "ch6_afi_general", title: "The General — AFI Catalog", publisher: "American Film Institute", url: "https://catalog.afi.com/Film/9303-THE-GENERAL" },
  { id: "ch6_moma_general", title: "Buster's Best — The General", publisher: "Museum of Modern Art", url: "https://www.moma.org/explore/inside_out/2010/03/16/busters-best/" },
  { id: "ch6_loc_general_findingaid", title: "The General, 1926 — Moving Image Section", publisher: "Library of Congress", url: "https://findingaids.loc.gov/repositories/5/archival_objects/219399" },
  { id: "ch6_afi_wings", title: "Wings — AFI Catalog", publisher: "American Film Institute", url: "https://catalog.afi.com/Film/13362-WINGS" },
  { id: "ch6_academy_wings", title: "Wings — 2011 digital restoration screening", publisher: "Academy of Motion Picture Arts and Sciences", url: "https://www.oscars.org/events/wings-2011" },
  { id: "ch6_loc_nfr_1997", title: "Films Selected to the National Film Registry 1997", publisher: "Library of Congress", url: "https://www.loc.gov/loc/lcib/9712/nfr.html" },
  { id: "ch6_mpa_history", title: "Motion Picture Association — History", publisher: "Motion Picture Association", url: "https://www.motionpictures.org/who-we-are" },
  { id: "ch6_loc_birth_today", title: "Today in History — February 8: The Birth of a Nation", publisher: "Library of Congress", url: "https://www.loc.gov/item/today-in-history/february-08" },
  { id: "ch6_loc_birth_symposium", title: "The Birth of a Nation — Symposium on Classic Film Discusses Inaccuracies and Virtues", publisher: "Library of Congress Information Bulletin", url: "https://www.loc.gov/loc/lcib/94/9413/nation.html" },
  { id: "ch6_loc_birth_item", title: "The Birth of a Nation — moving-image record", publisher: "Library of Congress", url: "https://www.loc.gov/item/95522190/" },
  { id: "ch6_moma_greed", title: "Greed. 1924. Written and directed by Erich von Stroheim", publisher: "Museum of Modern Art", url: "https://www.moma.org/calendar/events/5837" },
  { id: "ch6_afi_greed", title: "Greed — AFI Catalog", publisher: "American Film Institute", url: "https://catalog.afi.com/Film/9506-GREED" },
  { id: "ch6_moma_sunrise_event", title: "Sunrise: A Song of Two Humans. 1927. Directed by F. W. Murnau", publisher: "Museum of Modern Art", url: "https://www.moma.org/calendar/events/11562" },
  { id: "ch6_moma_sunrise_history", title: "F. W. Murnau's Sunrise: A Song of Two Humans", publisher: "Museum of Modern Art", url: "https://www.moma.org/explore/inside_out/2010/03/23/f-w-murnaus-sunrise-a-song-of-two-humans/" },
  { id: "ch6_loc_silent_music", title: "A Warming Flame — The Musical Presentation of Silent Films", publisher: "Library of Congress", url: "https://www.loc.gov/collections/silent-film-scores-and-arrangements/articles-and-essays/a-warming-flame/" },
];

const sections = [
  ...filmHistoryChapterSixMovementOne,
  ...filmHistoryChapterSixMovementTwo,
  ...filmHistoryChapterSixMovementThree,
];

const sourceIds = new Set(filmHistoryChapterSixSources.map((source) => source.id));
if (sourceIds.size !== filmHistoryChapterSixSources.length) throw new Error("Chapter 6 source IDs must be unique");
if (new Set(filmHistoryChapterSixSources.map((source) => source.url)).size !== filmHistoryChapterSixSources.length) throw new Error("Chapter 6 source URLs must be unique");
for (const source of filmHistoryChapterSixSources) {
  if (!source.id.startsWith("ch6_")) throw new Error(`Chapter 6 source ID must start with ch6_: ${source.id}`);
  if (!/^https:\/\//.test(source.url)) throw new Error(`Chapter 6 source URL must be HTTPS: ${source.id}`);
}
for (const section of sections) {
  for (const sourceId of section.sourceIds) {
    if (!sourceIds.has(sourceId)) throw new Error(`Chapter 6 section ${section.id} references unknown source ${sourceId}`);
  }
}

export const filmHistoryChapterSix: FilmHistoryBookChapter = {
  id: "classical-hollywood",
  number: 6,
  title: "Classical continuity and the Hollywood system",
  period: "1914–1929",
  summary: "Between World War I and the sound transition, Hollywood became a dense industrial system in which continuity style, divided labor, national distribution, theater power, stars, genres and publicity reinforced one another. The system made feature production more repeatable without making films identical: studio centralization, exhibitor-backed rivals and star-producer independence offered different organizational models. This chapter treats continuity as collaborative work rather than a lone invention, uses later antitrust evidence only with explicit chronology, and keeps the system's racial politics, gendered publicity and contested regulation visible alongside its production achievements.",
  status: "full",
  learningObjectives: [
    "Describe classical continuity as a coordinated production system rather than a checklist of cuts or the invention of one filmmaker.",
    "Explain how scripting, staging, camera planning, design and editing collaborate to maintain causal and spatial legibility.",
    "Analyze the Hollywood production cluster as an ecology of permanent departments, mobile specialists and service firms.",
    "Explain how Famous Players-Lasky and Paramount connected feature production, stars, publicity and national distribution.",
    "Use The Cheat to connect company style to collaborative craft, version history and critical analysis of racialized representation.",
    "Explain vertical integration through the relation among production, distribution and exhibition while preserving the chronology of later antitrust evidence.",
    "Use The Crowd to analyze MGM resources, social scale, location/studio integration and multiple release endings.",
    "Compare First National's exhibitor leverage with producer-distributor integration and United Artists' alternative distribution model.",
    "Use The Gold Rush to analyze star-producer control, location/studio production and the 1925/1942 version boundary.",
    "Use It to explain star identity as coordinated performance, publicity and media production without reproducing appearance-based objectification.",
    "Use The General to connect genre repetition, practical engineering and readable action geography to independent production and United Artists distribution.",
    "Use Wings to explain large-scale studio logistics, military cooperation, specialist camera units, engineering effects and version-aware exhibition.",
    "Explain how runs, clearances, block booking and theater ownership shaped the geography and bargaining power of film circulation.",
    "Place the 1922 MPPDA inside industry self-regulation without projecting the later 1934 Production Code enforcement regime backward.",
    "Critically analyze The Birth of a Nation as commercially and formally consequential white-supremacist propaganda rather than a neutral milestone or gameplay model.",
    "Use P2 comparisons such as Greed and Sunrise to show conflicts over authorship, corporate control, transatlantic labor and preservation without creating redundant Production Cases.",
  ],
  keyTerms: [
    "classical continuity", "continuity system", "coverage", "screen direction", "eyeline match", "match on action", "central producer system", "division of labor", "Hollywood production cluster", "vertical integration", "national distribution", "first run", "clearance", "block booking", "theater circuit", "First National", "United Artists", "star system", "star vehicle", "publicity department", "fan culture", "genre cycle", "house style", "roadshow", "preview", "alternate ending", "version history", "MPPDA", "self-regulation", "engineering effects", "military cooperation", "restoration version", "media tie-in", "exhibitor power",
  ],
  sections,
  filmReferences: [
    { title: "The Cheat", year: 1915, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_the_cheat_1915", note: "Existing Lasky/Paramount case for selective low-key style, collaborative studio craft, Hayakawa star construction, representation ethics and 1915/1918/restoration version boundaries." },
    { title: "The General", year: 1926, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_the_general_1926", note: "Existing Keaton case for genre, practical machinery, precise action geography, location engineering and the relationship between independent production and United Artists distribution." },
    { title: "The Gold Rush", year: 1925, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_the_gold_rush_1925", note: "Existing Chaplin star-producer case for United Artists distribution, Truckee/studio integration, effects scale and the strict boundary between the 1925 silent release and Chaplin's altered 1942 reissue." },
    { title: "The Crowd", year: 1928, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_the_crowd_1928", note: "Existing MGM/Loew's case for large-studio organization, city/office scale, concealed-camera location work, lucid continuity and documented multiple-ending release strategy." },
    { title: "It", year: 1927, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_it_1927", note: "Existing Paramount Famous Lasky case for Clara Bow's star vehicle, Elinor Glyn/Cosmopolitan media coordination, Badger/von Sternberg production continuity and non-objectifying star-system analysis." },
    { title: "Wings", year: 1927, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_wings_1927", note: "Existing Paramount case for War Department cooperation, aircraft and military logistics, specialist photography, engineering effects, editorial legibility and the 1927/1929/restoration presentation boundaries." },
    { title: "Ben-Hur: A Tale of the Christ", year: 1925, role: "comparative_film", atlasDecision: "P2", note: "Book-level evidence for MGM spectacle, costly production transfer and corporate intervention; retained as analysis because its scale function overlaps stronger Atlas logistics cases." },
    { title: "Flesh and the Devil", year: 1926, role: "comparative_film", atlasDecision: "P2", note: "Book-level evidence for MGM melodrama and the marketable Garbo-Gilbert pairing; It provides the more distinct Production Case for star image and publicity as an industrial system." },
    { title: "Greed", year: 1924, role: "comparative_film", atlasDecision: "P2", note: "Critical evidence for location-based authorship, corporate control, radical cutting and version historiography; not converted into gameplay because no single director-approved release can responsibly stand as the master." },
    { title: "Intolerance", year: 1916, role: "comparative_film", atlasDecision: "P2", note: "Essential comparison for large-scale parallel construction, but its central editing lesson overlaps Chapter 3 and does not justify a redundant Production Case." },
    { title: "Safety Last!", year: 1923, role: "comparative_film", atlasDecision: "P2", note: "Harold Lloyd star comedy and engineered urban stunt geography broaden the comparison, while The General already carries the stronger physical-action production problem." },
    { title: "Show People", year: 1928, role: "comparative_film", atlasDecision: "P2", note: "Hollywood self-representation makes studio labor, stardom and genre hierarchy visible without requiring another standalone scenario." },
    { title: "Sunrise: A Song of Two Humans", year: 1927, role: "comparative_film", atlasDecision: "P2", note: "Fox's importation of Murnau, Mayer and European-influenced design/camera practice provides transatlantic counterevidence; its deeper genealogy belongs with the Weimar chapter." },
    { title: "The Big Parade", year: 1925, role: "comparative_film", atlasDecision: "P2", note: "MGM prestige, war genre and mass-market scale are important evidence, while Wings provides the more distinct gameplay case for military and aviation logistics." },
    { title: "The Birth of a Nation", year: 1915, role: "comparative_film", atlasDecision: "P2", note: "Critical book evidence for feature circulation, formal organization, censorship conflict and the commercial force of racist white-supremacist propaganda; deliberately not an imitate-this-film Production Case." },
    { title: "The Cameraman", year: 1928, role: "comparative_film", atlasDecision: "P2", note: "Keaton's move into MGM is useful evidence for the absorption of independent comic authorship into studio procedure; The General already supplies the stronger Keaton production case." },
    { title: "The Covered Wagon", year: 1923, role: "comparative_film", atlasDecision: "P2", note: "Paramount-scale western production and location spectacle support genre and distribution analysis without adding a redundant spectacle Production Case." },
    { title: "The Kid", year: 1921, role: "comparative_film", atlasDecision: "P2", note: "Chaplin's feature-length combination of comedy and pathos is important star-producer evidence, but The Gold Rush provides the more production-distinct independent model." },
  ],
  historicalObjects: [
    { label: "Hollywood production cluster and specialist service firms", role: "historical_object", atlasDecision: "no_production_case", note: "Studios, laboratories, equipment suppliers, craftspeople and specialist firms formed a regional production ecology; the cluster is infrastructure shared across films, not a film scenario." },
    { label: "Famous Players-Lasky and Paramount distribution", role: "historical_object", atlasDecision: "no_production_case", note: "Production, stars, national distribution and coordinated publicity created company-wide market power that cannot be represented honestly as one movie Production Case." },
    { label: "Loew's and MGM vertical integration", role: "historical_object", atlasDecision: "no_production_case", note: "Corporate links among theater interests, distribution and MGM production shaped resources and bargaining power; the organizational relation is the historical object." },
    { label: "First National exhibitor-distributor network", role: "historical_object", atlasDecision: "no_production_case", note: "Exhibitor-backed organization shows that control of screens could generate production leverage from the exhibition side rather than only from producer-owned distribution." },
    { label: "United Artists distribution consortium", role: "historical_object", atlasDecision: "no_production_case", note: "The Chaplin-Pickford-Fairbanks-Griffith distribution arrangement offered independently controlled producers another route to theaters; the institution itself is not a movie." },
    { label: "Run-zone-clearance, block booking and theater chains", role: "historical_object", atlasDecision: "no_production_case", note: "Release sequencing, territorial exclusivity, package licensing and theater ownership structured circulation and exhibitor bargaining; these are market mechanisms, not film plots." },
    { label: "Continuity as collaborative production practice", role: "historical_object", atlasDecision: "no_production_case", note: "Script breakdown, staging, camera direction, matching action, records and editorial selection became repeatable cross-department practices rather than a one-film or one-director invention." },
    { label: "Contract stars, publicity departments and fan culture", role: "historical_object", atlasDecision: "no_production_case", note: "Studios and distributors built recognizable screen identities through contracts, casting, still photography, advertising, magazines and repeated roles; the system exceeds any one star vehicle." },
    { label: "Genre cycles and production planning", role: "historical_object", atlasDecision: "no_production_case", note: "Recurring forms helped companies coordinate audience expectation, stars, crews, sets and marketing while differentiating individual releases; genre planning is infrastructure across titles." },
    { label: "MPPDA and industry self-regulation", role: "historical_object", atlasDecision: "no_production_case", note: "The 1922 trade association coordinated industry legitimacy and policy amid censorship and political pressure; it belongs to institutional history rather than Production Case gameplay." },
  ],
  sources: filmHistoryChapterSixSources,
};

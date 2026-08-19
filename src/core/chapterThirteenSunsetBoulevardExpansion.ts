import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterThirteenSunsetBoulevardExpansionDefinitions = [
  {
    id: "scenario_sunset_boulevard_1950",
    title: "Sunset Boulevard",
    originalTitle: "Sunset Blvd.",
    aliases: ["Sunset Blvd", "Sunset Boulevard"],
    year: 1950,
    titleType: "Feature",
    runtimeMins: 110,
    directors: ["Billy Wilder"],
    genres: ["Drama", "Film-Noir"],
    premise: "Build Sunset Boulevard as a Paramount studio production that turns Hollywood's own labor, locations, archives, stars and obsolete production systems into the material of a postwar noir. AFI identifies Paramount Pictures as production and distribution company, Charles Brackett as producer, Billy Wilder as director, Brackett/Wilder/D. M. Marshman Jr. as writers, John F. Seitz as director of photography, Hans Dreier and John Meehan as art directors, Arthur Schmidt as editor with Doane Harrison as editorial supervisor and on-set collaborator, Sam Comer and Ray Moyer as set decorators, Edith Head as costume designer, Franz Waxman as score composer, Harry Lindgren and John Cope as sound recordists, Gordon Jennings and Farciot Edouart for special/process photography, and Wally Westmore as makeup supervisor. Production ran 18 April–11 June 1949 with additional scenes and retakes on later dates through 5 January 1950. Preserve the film as a versioned production: the working title A Can of Beans, the PCA's 1949 concern over the Gillis-Norma sexual relationship before July approval, the originally shot morgue framing device, preview laughter that led Wilder and Brackett to cut the morgue opening, and the resulting delayed release are all concrete development/editing/release decisions. Use the self-reflexive casting materially rather than as trivia: Gloria Swanson's silent-era history, Erich von Stroheim and surviving Queen Kelly footage, Cecil B. DeMille on the Samson and Delilah set, and appearances by Buster Keaton and other silent performers allow the film to stage industrial memory using real people and artifacts. AFI also documents the Desmond mansion exterior at the Jenkins/Getty property with Paramount adding the pool, the Janss estate driveway, Paramount gate and other Los Angeles locations, plus constructed replicas such as Schwab's and the morgue interior. Keep Western Electric recording, black-and-white photography and PCA no. 13955 source-bounded. Do not invent camera bodies, lenses, stock, microphone models, lighting ratios, optical setups, exact narration-recording procedure or a universal nitrate claim beyond what the institutional sources actually establish.",
    sourceId: "afi_sunset_boulevard_1950",
    sourceUrl: "https://catalog.afi.com/Film/26513-SUNSET-BLVD",
    scenarioType: "paramount_postwar_noir_hollywood_self_reflexive_archive_location_studio_versioned_postproduction",
    requiredChoicesSeed: {
      screenplay: ["brackett_wilder_marshman_hollywood_self_reflexive_script", "pca_relationship_negotiation", "morgue_opening_preview_revision"],
      camera: ["seitz_black_and_white_noir_hollywood_spaces", "location_replica_studio_contrast", "no_invented_camera_lens_stock_package"],
      editing: ["schmidt_harrison_on_set_editorial_collaboration", "remove_morgue_opening_after_preview", "preserve_109_110_115_runtime_provenance"],
      sound: ["western_electric_recording_lindgren_cope", "waxman_score_and_voiceover_structure", "no_invented_microphones_or_narration_workflow"],
      themes: ["film_history", "postwar_hollywood", "film_noir", "studio_system", "industrial_memory", "silent_cinema", "self_reflexivity", "archive_material", "version_history", "production_code", "los_angeles_locations"],
    },
    learningGoals: [
      "Model Paramount as the active production/distribution system around Brackett and Wilder rather than treating Hollywood itself as an abstract backdrop.",
      "Preserve Brackett, Wilder and Marshman's writing labor and the film's A Can of Beans working-title/development history before the finished title and release canonized the project.",
      "Use the PCA's 1949 correspondence and July approval to teach censorship as script negotiation and production constraint rather than as a generic post-1934 filter.",
      "Treat the shot-and-previewed morgue opening as real version history: audience response caused a major structural cut and delayed release, so the familiar pool narration was not inevitable from the start.",
      "Keep John F. Seitz photography, Dreier/Meehan art direction, Comer/Moyer set decoration, Edith Head costume, Westmore makeup and Jennings/Edouart effects separately attributable inside the noir visual system.",
      "Model Doane Harrison as an editorial supervisor who also contributed on set, while keeping Arthur Schmidt's editor credit distinct instead of collapsing editorial collaboration into co-direction.",
      "Use the Jenkins/Getty mansion, Paramount-added pool, Janss driveway, Paramount gate and Los Angeles locations alongside built Schwab's/morgue replicas to teach location-studio hybridity.",
      "Treat Swanson, von Stroheim, DeMille, Keaton and Queen Kelly footage as material industrial memory: casting and archival reuse make silent Hollywood part of the production rather than decorative references.",
      "Keep the film's dead-man voice-over and flashback structure connected to screenplay, performance, sound and editing without inventing an unsupported narration-recording workflow.",
      "Preserve Western Electric recording and the Lindgren/Cope sound credits while refusing microphone, track-layout or mixing-stage claims not established by the sources.",
      "Keep AFI's 109–110 or 115 minute variation as version provenance; use 110 minutes canonically without pretending every print or institutional record is identical.",
      "Place the film's three Academy wins, eleven nominations and 1989 National Film Registry selection downstream from production decisions rather than using later prestige to explain how the film was made.",
    ],
    phases: [
      { id: "pitch", label: "Turn Hollywood into its own noir production space", player_task: "Frame a Paramount story in which studios, stars, mansions, archives and labor history are production material rather than background mythology." },
      { id: "research", label: "Separate real industrial history from fictional Norma Desmond", player_task: "Map Swanson, von Stroheim, DeMille, Queen Kelly, Paramount and silent-era artifacts before deciding what the fiction can borrow without becoming documentary." },
      { id: "screenplay", label: "Write self-reflexive noir under PCA scrutiny", player_task: "Coordinate Brackett, Wilder and Marshman, dead-man narration and Gillis-Norma relationship while tracking the PCA negotiation and alternate morgue structure." },
      { id: "casting", label: "Cast industrial memory as performance", player_task: "Use Swanson, Holden, von Stroheim and real silent-era figures so performance carries both character and Hollywood history without reducing actors to cameos." },
      { id: "production_design", label: "Blend mansion, studio and replica Hollywood", player_task: "Coordinate Dreier, Meehan, Comer and Moyer across the real mansion/pool, Paramount spaces and constructed Schwab's/morgue interiors." },
      { id: "cinematography", label: "Photograph glamour as decay", player_task: "Use Seitz's black-and-white photography to connect noir contrast, faces, mansion space and Los Angeles exteriors without inventing an unsupported lens or stock recipe." },
      { id: "editing", label: "Let preview response rewrite the film", player_task: "Use Schmidt and Harrison to restructure the film when the morgue opening fails, preserving the cut version as a production consequence rather than a fixed script destiny." },
      { id: "sound", label: "Coordinate voice-over, studio recording and Waxman", player_task: "Build narration, dialogue and score around Western Electric recording and sourced sound labor while keeping unsupported microphone and mixing specifics out." },
      { id: "release", label: "Track delay, version and canon separately", player_task: "Keep the six-month delay, runtime variants, awards and Registry status as successive release/reception layers rather than rewriting production from hindsight." },
    ],
  },
] as const;

export function mergeChapterThirteenSunsetBoulevardExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterThirteenSunsetBoulevardExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_thirteen_sunset_boulevard_verified",
      source: { list_id: "manual_chapter_thirteen_sunset_boulevard_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
      film: { title: definition.title, original_title: definition.originalTitle, year: definition.year, title_type: definition.titleType, runtime_mins: definition.runtimeMins, directors: definition.directors, genres: definition.genres, genre_keys: definition.genres.map((genre) => genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")), imdb_rating: 0, user_rating: 0 },
      scenario_type: definition.scenarioType,
      production_challenge: definition.premise,
      required_choices_seed: definition.requiredChoicesSeed,
      phases: definition.phases,
      learning_goals_seed: definition.learningGoals,
      manual_enrichment_needed: [],
    });
    nextPosition += 1;
  }
  return merged;
}

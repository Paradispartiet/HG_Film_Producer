import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterFiveInternationalExpansionDefinitions = [
  {
    id: "scenario_fantomas_1913",
    title: "Fantômas",
    originalTitle: "Fantômas",
    aliases: ["Fantomas", "Fantômas à l'ombre de la guillotine"],
    year: 1913,
    titleType: "Feature",
    runtimeMins: 60,
    directors: ["Louis Feuillade"],
    genres: ["Crime", "Drama", "Mystery", "Thriller"],
    premise: "Build Fantômas as a 1913 Gaumont production problem in recurring screen identity and narrative continuation. Louis Feuillade adapts the Souvestre–Allain crime novels around René Navarre's shape-shifting criminal, Juve and Fandor, using recognizable Paris spaces, disguises, pursuit and unresolved return to make audience memory part of the production system. Treat the five-film 1913–1914 cycle as a series of related films rather than retroactively forcing every later serial convention onto it, and keep surviving-program runtimes and musical accompaniment version-specific.",
    sourceId: "manual_fantomas_1913",
    sourceUrl: "https://www.cinematheque.fr/film/48519.html",
    scenarioType: "crime_thriller_production",
    requiredChoicesSeed: {
      screenplay: ["souvestre_allain_adaptation", "juve_fandor_pursuit", "recurring_fantomas_identity"],
      camera: ["paris_location_legibility", "disguise_and_reveal_staging", "pursuit_geography"],
      editing: ["episode_level_progression", "identity_reveal_timing", "continuation_memory_across_films"],
      sound: ["silent_photographed_production", "screening_specific_music", "no_synchronized_original_sound"],
      themes: ["film_history", "french_cinema", "gaumont", "recurring_screen_identity", "series_economics"],
    },
    learningGoals: [
      "Plan recurring characters, disguises and pursuit so recognition from earlier films becomes a production resource without requiring later standardized chapter-serial form.",
      "Use Feuillade's Gaumont production context and recognizable Paris geography to keep criminal action, surveillance and escape legible across extended narrative episodes.",
      "Distinguish the five-film Fantômas cycle from the claim that one filmmaker or one title invented serial storytelling.",
      "Treat René Navarre's recurring Fantômas identity, Juve and Fandor as a continuity-management problem involving casting, costume, gesture and audience memory.",
      "Preserve version boundaries: institutional sources describe different aggregate and individual-film runtimes, while musical accompaniment belongs to a screening or restoration unless separately documented as original production sound.",
    ],
    phases: [
      { id: "pitch", label: "Recurring-crime pitch", player_task: "Define why Fantômas can bring audiences back through recognizable criminal identity, pursuit and transformation rather than through a one-film closed ending." },
      { id: "research", label: "Series and archive research", player_task: "Ground Feuillade, Gaumont, René Navarre, Souvestre and Allain, the five-film cycle and surviving-version differences in institutional records." },
      { id: "screenplay", label: "Pursuit and return", player_task: "Adapt the crime material around Juve and Fandor's pursuit while leaving enough unresolved identity and threat to support continuation across related films." },
      { id: "casting", label: "Recurring identities", player_task: "Make Navarre's Fantômas recognizable through transformation while keeping Juve, Fandor and Lady Beltham stable enough for returning audiences to recover the dramatic network." },
      { id: "production_design", label: "Paris crime network", player_task: "Coordinate rooms, streets, institutions, disguises and props so shifting identities remain readable inside a recognizable urban world." },
      { id: "cinematography", label: "Readable pursuit geography", player_task: "Stage entrances, exits, surveillance, disguise and physical pursuit clearly without imposing a later continuity-coverage template on the 1913 production." },
      { id: "editing", label: "Recognition and continuation", player_task: "Control when the viewer knows an identity, when investigators catch up and what remains unresolved, while preserving that the cycle consists of related films rather than one falsely reconstructed master cut." },
      { id: "sound", label: "Silent production, variable accompaniment", player_task: "Keep photographed production silent and treat music attached to surviving prints, restorations or screenings as presentation evidence, not synchronized original dialogue or effects." },
      { id: "release", label: "Return-audience economy", player_task: "Model how Gaumont could exploit recurring characters and narrative memory across successive releases without claiming Fantômas alone created serial economics." },
    ],
  },
] as const;

export function mergeChapterFiveInternationalExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterFiveInternationalExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_five_international_verified",
      source: {
        list_id: "manual_chapter_five_international_expansion_2026",
        position: nextPosition,
        imdb_id: definition.sourceId,
        url: definition.sourceUrl,
      },
      film: {
        title: definition.title,
        original_title: definition.originalTitle,
        year: definition.year,
        title_type: definition.titleType,
        runtime_mins: definition.runtimeMins,
        directors: definition.directors,
        genres: definition.genres,
        genre_keys: definition.genres.map((genre) => genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")),
        imdb_rating: 0,
        user_rating: 0,
      },
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

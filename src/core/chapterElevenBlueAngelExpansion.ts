import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterElevenBlueAngelExpansionDefinitions = [
  {
    id: "scenario_the_blue_angel_1930",
    title: "The Blue Angel",
    originalTitle: "Der blaue Engel",
    aliases: ["Der Blaue Engel", "Blue Angel"],
    year: 1930,
    titleType: "Feature",
    runtimeMins: 108,
    directors: ["Josef von Sternberg"],
    genres: ["Drama", "Tragicomedy", "Musical"],
    premise: "Build The Blue Angel / Der blaue Engel as a 1929–30 UFA sound-production system rather than as a star-origin anecdote. Filmportal documents UFA producing under Erich Pommer, Josef von Sternberg directing, Robert Liebmann and Karl Vollmoeller writing with Sternberg collaboration and Carl Zuckmayer adaptation, Günther Rittau photographing, Otto Hunte and Emil Hasler designing, Tihamér Varady on costume, Sam Winston and Walter Klee editing, Fritz Thiery recording sound, Friedrich Hollaender leading music, Franz Wachsmann arranging and the Weintraub Syncopators performing. German-version photography ran at Ufa-Atelier Neubabelsberg from 4 November 1929 to 22 January 1930; the recorded format is 35mm black-and-white Tobis-Klangfilm. Filmportal and the Friedrich-Wilhelm-Murnau-Stiftung separately catalogue a German Der blaue Engel and an English The Blue Angel, so the player must treat language-version production as version control: dialogue, adaptation, takes, editorial choices and market release can differ even when principal performers, director, studio and sound system overlap. Cabaret songs, speech, room tone and performance blocking must be coordinated as production material rather than treated as a generic musical preset. Preserve labor boundaries and historical hindsight: Dietrich's later international stardom must not be projected backward as the sole cause of production choices, and Jannings, Dietrich, Gerron, Valetti, Albers, the writers, designers, sound crew, musicians and studio management remain distinct contributors. Preserve archival/version provenance: German and English catalogue lengths and aspect records are version evidence, not proof of one immutable master. Do not invent microphone models, dubbing workflows or exact take-order details that the locked institutional sources do not establish.",
    sourceId: "filmportal_der_blaue_engel_1930",
    sourceUrl: "https://www.filmportal.de/en/movie/der-blaue-engel_ea43d4a69a155006e03053d50b37753d",
    scenarioType: "ufa_pommer_tobis_klangfilm_multilingual_version_cabaret_sound_star_performance_weimar_transition_production",
    requiredChoicesSeed: {
      screenplay: ["mann_adaptation_for_sound_cinema", "german_english_version_dialogue_control", "cabaret_song_and_dialogue_causality"],
      camera: ["rittau_neubabelsberg_sound_stage_framing", "performance_blocking_under_sound_constraints", "version_specific_camera_provenance"],
      editing: ["german_english_version_separation", "song_dialogue_scene_continuity", "catalogue_runtime_provenance"],
      sound: ["thiery_tobis_klangfilm_recording", "hollaender_weintraub_music_voice_balance", "no_invented_microphone_or_dubbing_claims"],
      themes: ["film_history", "sound_transition", "weimar_cinema", "ufa", "tobis_klangfilm", "multilingual_versions", "cabaret", "star_performance", "version_control"],
    },
    learningGoals: [
      "Model The Blue Angel as a coordinated UFA sound production under Erich Pommer rather than reducing the film to Josef von Sternberg or Marlene Dietrich alone.",
      "Explain how Tobis-Klangfilm sound, studio photography, set construction, costume, editing, music and performance become interdependent departments during the early German sound transition.",
      "Treat the German Der blaue Engel and English The Blue Angel as distinct documented versions whose dialogue/adaptation, footage, runtime and release provenance must not be silently collapsed.",
      "Differentiate Robert Liebmann, Karl Vollmoeller, Carl Zuckmayer and von Sternberg's writing/adaptation contributions instead of assigning the screenplay to one generic author.",
      "Keep Günther Rittau's cinematography, Otto Hunte and Emil Hasler's production design, Tihamér Varady's costume work, Sam Winston/Walter Klee editing and Fritz Thiery's sound labor distinct.",
      "Use Friedrich Hollaender's songs, Franz Wachsmann's arrangements and the Weintraub Syncopators as production resources that shape staging, timing, voice and cabaret space rather than as detachable background music.",
      "Analyze Emil Jannings and Marlene Dietrich as performers working inside sound, lighting, costume and staging systems; do not convert later star mythology into an ahistorical production cause.",
      "Preserve Neubabelsberg and UFA as institutional infrastructure and keep German sound conversion connected to studio investment and international language markets.",
      "Keep archive/version evidence bounded: catalogue lengths, aspect records and later digital presentations describe surviving versions and access states, not a single universal original master.",
      "Avoid inventing exact microphone models, dubbing procedures, recording channels or take-order claims not established by the locked institutional sources.",
    ],
    phases: [
      { id: "pitch", label: "A prestige sound adaptation for two language markets", player_task: "Define the Heinrich Mann adaptation, UFA/Pommer production context and German/English version problem before treating Dietrich's later fame as a selling shortcut." },
      { id: "research", label: "Lock UFA, Tobis and version evidence", player_task: "Verify Filmportal and Murnau records for production company, producer, Neubabelsberg dates, Tobis-Klangfilm, principal craft credits and the separate German/English catalogue records." },
      { id: "screenplay", label: "Adapt prose into spoken, sung scenes", player_task: "Coordinate Liebmann, Vollmoeller, Zuckmayer and Sternberg contributions while tracking what dialogue/adaptation belongs to the German versus English version." },
      { id: "casting", label: "Voice, body and cabaret presence", player_task: "Direct Jannings, Dietrich, Gerron, Valetti, Albers and the ensemble as performers whose voices, gestures, timing and blocking interact with early sound recording." },
      { id: "production_design", label: "Build the cabaret and school as sound spaces", player_task: "Coordinate Hunte and Hasler's sets with Varady's costumes and staging requirements without inventing undocumented acoustic treatments." },
      { id: "cinematography", label: "Photograph performance inside a sound stage", player_task: "Use Rittau's framing and lighting relationships to organize bodies, décor and musical performance while respecting the documented Neubabelsberg sound-production context." },
      { id: "editing", label: "Control two versions, not one master", player_task: "Track German and English version material separately and preserve song/dialogue continuity without assuming identical footage, runtime or edit decisions." },
      { id: "sound", label: "Tobis-Klangfilm, voice and band", player_task: "Coordinate Thiery's sound department with speech, Hollaender's songs, Wachsmann's arrangements and the Weintraub Syncopators while refusing unsupported equipment claims." },
      { id: "release", label: "Versioned international release", player_task: "Release and document German and English versions as separate market objects, preserving premiere/catalogue provenance and later archival access states." },
    ],
  },
] as const;

export function mergeChapterElevenBlueAngelExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterElevenBlueAngelExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) =>
      scenario.id === definition.id ||
      (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))),
    );
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eleven_blue_angel_verified",
      source: { list_id: "manual_chapter_eleven_blue_angel_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
      film: {
        title: definition.title, original_title: definition.originalTitle, year: definition.year, title_type: definition.titleType,
        runtime_mins: definition.runtimeMins, directors: definition.directors, genres: definition.genres,
        genre_keys: definition.genres.map((genre) => genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")),
        imdb_rating: 0, user_rating: 0,
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

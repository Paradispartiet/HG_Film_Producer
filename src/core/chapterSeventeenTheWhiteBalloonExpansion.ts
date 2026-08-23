import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenTheWhiteBalloonExpansionDefinitions = [
  {
    id: "scenario_the_white_balloon_1995",
    title: "The White Balloon",
    originalTitle: "Badkonak-e sefid",
    year: 1995,
    titleType: "Movie",
    runtimeMins: 85,
    directors: ["Jafar Panahi"],
    genres: ["Drama", "Family"],
    premise: "Build The White Balloon as Jafar Panahi's 1995 Iranian feature debut: an 85-minute, real-time child-centered street narrative written by Abbas Kiarostami from a Panahi/Parviz Shahbazi idea and produced through overlapping Iranian television, independent-production and state-linked sales/support structures rather than as a generic 'Iranian minimalist' object. Cannes records Panahi's debut and Caméra d'Or. IFFR credits producers Kurosh Mazkouri and Foad Nour, Abbas Kiarostami screenplay, Panahi editing/production design, Ferdos Films production and Farabi Cinema Foundation world sales. Torino credits Panahi for direction/design/editing, Kiarostami screenplay from an original idea by Panahi and Shahbazi, Farzad Jodat cinematography, Mehdi Dejbodi sound, Kurosh Mazkouri production direction and IRIB Channel Two as production company. Celluloid Dreams lists Farabi Cinema Foundation as producer and 85 minutes. Preserve those institutional-role differences instead of forcing one company into every production function. BFI describes the film as unfolding in real time and notes that script material was given to the children in snippets to preserve freshness. Treat that as historical directing evidence only: present-day productions with children require guardian consent, child-welfare supervision, age-appropriate communication, regulated hours, schooling/rest and jurisdiction-specific labor rules. Do not infer hidden manipulation or treat spontaneity as permission to withhold safety-relevant information. The reviewed sources support Farzad Jodat/Jadat as cinematographer but do not establish a camera body, lens set, film stock, exposure, lighting diagram, lab process or sound hardware, so those remain unset. The Tehran-street journey and real-time form are production-relevant, but no complete location ledger, permit history, blocking map or street-control method is invented. Keep Panahi's editing and production-design authorship distinct from Kiarostami's screenplay contribution and from later political readings of Panahi's career. Cannes prizes, later critical canonization and later censorship of Panahi are downstream context, not proof of undocumented 1995 technique. Use 85 minutes canonically; ACMI's 82-minute holding is preserved as collection/version metadata rather than silently normalized.",
    sourceId: "iffr_white_balloon_1995",
    sourceUrl: "https://iffr.com/en/iffr/1995/films/the-white-balloon",
    scenarioType: "iranian_real_time_child_street_irib_ferdos_farabi_kiarostami_panahi",
    requiredChoicesSeed: {
      screenplay: ["kiarostami_script_panahi_shahbazi_original_idea", "real_time_quest_structure", "political_reading_separate_from_production_proof"],
      camera: ["farzad_jodat_credit_only", "tehran_street_observation_without_invented_camera_package", "no_unsourced_lens_stock_exposure_lab"],
      editing: ["panahi_editorial_authorship", "real_time_continuity_and_encounter_structure", "85_min_canonical_with_82_collection_variance"],
      sound: ["mehdi_dejbodi_sound_credit", "street_sound_without_invented_hardware", "no_unsourced_adr_foley_mix_recipe"],
      themes: ["film_history", "1990s", "the_white_balloon", "iranian_cinema", "jafar_panahi", "abbas_kiarostami", "parviz_shahbazi", "farzad_jodat", "mehdi_dejbodi", "ferdos_films", "irib_channel_two", "farabi_cinema_foundation", "real_time", "child_performance", "tehran_streets", "child_welfare_boundary", "runtime_variance"],
    },
    learningGoals: [
      "Model The White Balloon as a specific Iranian production network rather than a generic national-style example.",
      "Keep IRIB Channel Two, Ferdos Films and Farabi Cinema Foundation roles source-specific instead of collapsing production, finance and world sales.",
      "Distinguish Abbas Kiarostami's screenplay contribution from Panahi/Shahbazi's original-idea record and Panahi's directing authorship.",
      "Treat the real-time structure as an editorial/narrative production choice rather than evidence of documentary non-intervention.",
      "Use Farzad Jodat/Jadat as source-supported cinematography credit while leaving unsourced camera, lens, stock, exposure and lab details unset.",
      "Keep Panahi's editing and production-design roles visible rather than attributing every formal choice to Kiarostami.",
      "Use Mehdi Dejbodi's sound credit without inventing recorder, microphone, ADR, Foley or mix specifications.",
      "Treat BFI's script-in-snippets child-performance method as historical evidence, not a universal directing prescription.",
      "Require present-day child work to follow guardian consent, regulated hours, welfare supervision, schooling/rest and age-appropriate direction.",
      "Do not infer a full Tehran location ledger, permits or street-control methods from the film's street setting.",
      "Separate observed street life from claims of unscripted documentary truth.",
      "Keep Cannes Caméra d'Or and later canonization downstream from original production evidence.",
      "Do not use Panahi's later censorship history as retroactive proof of undocumented constraints on this specific shoot.",
      "Preserve 85 minutes as canonical runtime while recording ACMI's 82-minute holding as version/collection variance.",
      "Treat child spontaneity as a performance strategy that still requires full safety and welfare disclosure to responsible adults and crew.",
      "Keep production design, performance, camera, editing and sound as separate collaborating systems even in a low-scale street production.",
      "Avoid invented budget, schedule, crew-size, camera/lens/stock, sound-hardware, permit or post-production details absent from reviewed sources.",
    ],
    phases: [
      { id: "institutional_package", label: "Build the Iranian production package", player_task: "Map IRIB Channel Two, Ferdos Films and Farabi roles exactly as sourced; do not assume one entity owned every production, finance or sales function." },
      { id: "story_and_real_time", label: "Shape a simple quest into real-time drama", player_task: "Use the Kiarostami/Panahi/Shahbazi authorship record and real-time structure without equating simplicity with improvisation or documentary truth." },
      { id: "child_casting_and_welfare", label: "Direct a child-centered performance safely", player_task: "Treat historical script-in-snippets evidence cautiously and require modern guardian consent, welfare supervision, regulated hours, breaks and age-appropriate communication." },
      { id: "street_world", label: "Build a social world through street encounters", player_task: "Use Tehran street observation as narrative infrastructure while leaving unsourced permits, closures, crowd-control and complete location lists unset." },
      { id: "camera", label: "Photograph observation without invented gear lore", player_task: "Credit Farzad Jodat/Jadat and plan clear child-perspective coverage without inventing camera bodies, lenses, stock, exposure or lab processing." },
      { id: "production_design", label: "Coordinate found space and designed detail", player_task: "Keep Panahi's credited production-design role distinct from location observation; do not assume every visible object or storefront was uncontrolled reality." },
      { id: "sound", label: "Keep street sound legible and source-bounded", player_task: "Credit Mehdi Dejbodi and preserve environmental clarity without inventing microphones, recorders, ADR/Foley workflows or mix formats." },
      { id: "editing", label: "Protect real-time continuity through editorial structure", player_task: "Use Panahi's editing credit and real-time encounter chain while distinguishing screen duration from claims of one continuous take or documentary chronology." },
      { id: "finish_and_runtime", label: "Finish an 85-minute feature without false technical detail", player_task: "Use 85 minutes canonically, retain ACMI's 82-minute holding as version metadata and leave unsupported post/lab specifications unset." },
      { id: "festival_and_legacy", label: "Separate production from international breakthrough", player_task: "Keep Cannes Caméra d'Or, later critical status and Panahi's later political history downstream from the evidence for how the 1995 film was made." },
    ],
  },
] as const;

export function mergeChapterSeventeenTheWhiteBalloonExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenTheWhiteBalloonExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, "Badkonake sefid"].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_the_white_balloon_verified",
      source: { list_id: "manual_chapter_seventeen_the_white_balloon_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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

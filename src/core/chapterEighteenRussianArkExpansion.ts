import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterEighteenRussianArkExpansionDefinitions = [
  {
    id: "scenario_russian_ark_2002",
    title: "Russian Ark",
    originalTitle: "Russkiy kovcheg",
    year: 2002,
    titleType: "Movie",
    runtimeMins: 96,
    directors: ["Alexander Sokurov"],
    genres: ["Drama", "History", "Fantasy"],
    premise: "Build Russian Ark as a Chapter 18 anchor for feature-length digital acquisition, Steadicam choreography and real-time mise-en-scene without confusing an unbroken camera take with an absence of post-production. The film's official project page identifies the State Hermitage Museum as presenter, Hermitage Bridge Studio and Egoli Tossell Film AG as production companies, Alexander Sokurov as director and co-screenwriter, Tilman Büttner as director of photography, Anatoly Nikiforov as co-screenwriter, Yelena Zhukova and Natalia Kochergina as art directors, three costume designers, light-concept credits, Sergey Ivanov for digital imaging, Stefan Ciupek for Da Vinci colour correction, Betina Kuntzsch for digital-effects/VFX supervision, Sergey Moshkov and Vladimir Persov as sound producers, and Valery Gergiev with the Mariinsky Theatre Orchestra. Cannes records the completed 2002 Russian-German feature at 96 minutes. Contemporary production notes explain the technical problem: conventional film magazines could not sustain the required feature-length continuous recording, while then-standard HD tape capacity was also too short, so the production used a portable prototype hard-disk recorder capable of roughly feature-length uncompressed HD recording and planned an approximately 1,300-metre route through the Hermitage. Tilman Büttner's 2003 interview gives the human and operational scale more directly: he recalls carrying roughly 35 kilograms for about 92 minutes over approximately 1,500 metres, a single shooting day with only four hours of winter daylight, about 26 hours for final set/light/costume/makeup preparation in the museum, a camera team moving with focus, iris, recorder and lighting support, and three aborted starts before the film succeeded on the fourth attempt. He identifies specific failure modes rather than a myth of effortless virtuosity: his reflection appeared in glass on one attempt, an actor error stopped another and a hand-light failure stopped another. The same interview describes the exterior/interior temperature problem at roughly minus 25 Celsius, the risk of lens fogging, a failed high balloon light in the ballroom that had to be restored, and around 300 dancing couples negotiating the camera path. Preserve these as production-management, lighting, choreography and physical-operation problems. The official project page records 862 actors in the crowd scene; later institutional accounts describe more than 2,000 performers across the film, but do not collapse those differently defined counts into one invented exact cast total. Most importantly, preserve the post-production boundary. The official credits explicitly name digital imaging, Da Vinci colour correction and VFX work, and Büttner says post adjusted colour and brightness, removed visible lamps and even reframed electronically to exclude Sokurov when he entered the image. Russian Ark is therefore a one-take acquisition achievement, not a claim of untouched camera output. Do not invent an exact camera body or lens package where the reviewed core sources used here do not establish it consistently; do not invent codec/data-volume figures, exact recorder model/capacity beyond the documented feature-length uncompressed-HD requirement, battery topology, full rehearsal calendar, complete participant count, sound-sync method, VFX shot count, budget, distribution contract or restoration/version genealogy.",
    sourceId: "sokurov_russian_ark_2002",
    sourceUrl: "https://sokurov.spb.ru/promo/russian_ark/en/ark_pln2.html",
    scenarioType: "single_take_steadicam_uncompressed_hd_hard_disk_hermitage_choreography_digital_post_2002",
    requiredChoicesSeed: {
      screenplay: ["scripted_room_sequence", "historical_tableau_route_structure", "single_take_timing_as_dramaturgy"],
      camera: ["feature_length_unbroken_steadicam_take", "portable_uncompressed_hd_recording", "operator_endurance_and_route_management", "no_invented_camera_body_or_codec"],
      editing: ["no_acquisition_cuts", "digital_reframing_and_cleanup", "colour_correction_and_vfx_distinct_from_cutting"],
      sound: ["credited_sound_production", "live_ballroom_music_coordination", "no_invented_sync_or_post_sound_chain"],
      themes: ["film_history", "2000s", "russian_ark", "alexander_sokurov", "tilman_buttner", "hermitage", "egoli_tossell", "hermitage_bridge_studio", "single_take", "steadicam", "high_definition", "hard_disk_recording", "uncompressed_hd", "real_time", "mise_en_scene", "camera_choreography", "production_management", "winter_daylight", "focus_pulling", "iris_control", "lighting", "costume", "makeup", "valery_gergiev", "mariinsky_orchestra", "digital_imaging", "da_vinci_colour_correction", "digital_effects", "vfx", "reframing", "retouching"],
    },
    learningGoals: [
      "Place Russian Ark as a Chapter 18 anchor for feature-length continuous digital acquisition rather than treating its one-take form as merely a stylistic stunt.",
      "Explain why conventional film-magazine duration and then-standard HD tape duration created a recording problem that drove the portable hard-disk solution.",
      "Keep the approximately 1,300-metre planned route in production notes distinct from Büttner's later recollection of roughly 1,500 metres traveled during the successful take.",
      "Treat Büttner's roughly 35-kilogram load and approximately 92-minute carrying time as operator-endurance evidence without converting it into an invented exact rig specification.",
      "Model the one-day Hermitage shoot and four-hour winter-daylight window as hard production constraints, not trivia detached from scheduling and lighting decisions.",
      "Use the roughly 26-hour final preparation window for set, light, costume and makeup as evidence of concentrated departmental coordination.",
      "Preserve the moving camera unit as a team system including director monitoring, continuity timing, focus, iris, recorder support and lighting assistance rather than attributing the shot to one operator alone.",
      "Distinguish the three aborted starts and successful fourth attempt, and use the reflection, actor and hand-light failures as examples of whole-film reset risk in a single-take production.",
      "Treat the minus-25-Celsius exterior transition and lens-fog concern as an environmental camera-management problem rather than inventing undocumented heating hardware.",
      "Treat the ballroom light-balloon failure and recovery as a lighting-continuity risk inside a take that could not be repaired by cutting to coverage.",
      "Keep the ballroom's roughly 300 dancing couples as Büttner's choreography recollection rather than an exact total for everyone appearing in the film.",
      "Keep the official 862-actor crowd-scene credit distinct from later institutional claims of more than 2,000 performers across the production; do not merge differently defined counts.",
      "Recognize Sokurov and Anatoly Nikiforov's screenplay credit and the additional dialogue credits while studying route timing and room-by-room staging as production dramaturgy.",
      "Keep art direction, costume design and makeup preparation as independent departments whose work had to survive continuous camera movement through the museum.",
      "Treat Valery Gergiev and the Mariinsky Theatre Orchestra's ballroom performance as live event coordination within the take, while leaving undocumented sound-sync methodology unset.",
      "Distinguish an acquisition with no editorial cuts from post-production: the official credits explicitly include digital imaging, colour correction and VFX.",
      "Use Büttner's account of colour/brightness adjustment, object removal and electronic reframing as bounded evidence that a one-take film can still undergo substantial image post-production.",
      "Keep digital cleanup and reframing separate from editing in the sense of cutting between takes or shots; Russian Ark preserves temporal continuity while modifying image content and framing.",
      "Use Cannes' 96-minute runtime as the gameplay duration while preserving source-specific production recollections of an approximately 90–92-minute recording task rather than forcing all figures to match.",
      "Do not invent exact camera body/lens, codec, data volume, recorder model, battery topology, full rehearsal calendar, sound chain, VFX shot count, budget or restoration/version genealogy where reviewed sources do not establish them consistently.",
    ],
    phases: [
      { id: "route_dramaturgy", label: "Map history onto a continuous museum route", player_task: "Coordinate screenplay/tableau order, room transitions and timing so the historical journey can function as one sustained path rather than coverage assembled later." },
      { id: "recording_constraint", label: "Solve feature-length continuous recording", player_task: "Choose the documented portable uncompressed-HD hard-disk approach because film magazines and ordinary HD tape durations cannot carry the full uninterrupted take." },
      { id: "steadicam_endurance", label: "Engineer the moving camera as an endurance system", player_task: "Plan route, rig weight and operator support around Büttner's documented long-duration physical burden without inventing unsupported component specifications." },
      { id: "moving_camera_team", label: "Move focus, iris, recorder and lighting support with camera", player_task: "Treat the camera path as coordinated crew movement, not a lone Steadicam feat, while maintaining communication and timing room by room." },
      { id: "museum_preparation", label: "Prepare departments inside a one-day museum closure", player_task: "Use the concentrated preparation window to align set dressing, light, costume, makeup, performers and museum access before the irreversible take begins." },
      { id: "winter_light_window", label: "Work inside four hours of winter daylight", player_task: "Protect exterior/interior exposure continuity and schedule around the limited daylight window without inventing extra shooting days." },
      { id: "attempt_reset_risk", label: "Absorb failures that reset the whole feature", player_task: "Model reflection, actor and hand-light failures as reasons an otherwise successful several-minute run must restart from the beginning." },
      { id: "temperature_transition", label: "Cross minus-25-Celsius exterior and heated interiors", player_task: "Manage the documented lens-fog risk and environmental transition while keeping unsupported heating or lens-treatment details unset." },
      { id: "ballroom_choreography", label: "Thread the camera through the live ballroom", player_task: "Coordinate hundreds of dancers, Gergiev's live orchestra and camera passage so performers clear and re-enter frame without breaking the take." },
      { id: "light_failure_recovery", label: "Recover critical ballroom lighting before arrival", player_task: "Treat the failed high balloon light as a time-critical dependency whose repair must happen before the moving take reaches the ballroom." },
      { id: "one_take_completion", label: "Complete the film on the fourth attempt", player_task: "Preserve the successful continuous acquisition as the result of repeated whole-system attempts, not as evidence that the production avoided mistakes or contingency planning." },
      { id: "digital_image_post", label: "Finish a no-cut take with digital image post", player_task: "Apply documented colour/brightness work, cleanup, VFX and reframing while preserving the distinction between image post-production and editorial cutting." },
      { id: "single_take_boundary", label: "Keep temporal continuity distinct from untouched imagery", player_task: "Teach that Russian Ark's historical claim is an unbroken acquisition take even though its image was digitally corrected, cleaned and reframed afterward." },
    ],
  },
] as const;

export function mergeChapterEighteenRussianArkExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterEighteenRussianArkExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eighteen_russian_ark_verified",
      source: { list_id: "manual_chapter_eighteen_russian_ark_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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

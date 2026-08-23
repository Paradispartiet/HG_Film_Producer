import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenTheIdiotsExpansionDefinitions = [
  {
    id: "scenario_the_idiots_1998",
    title: "The Idiots",
    originalTitle: "Idioterne",
    year: 1998,
    titleType: "Movie",
    runtimeMins: 117,
    directors: ["Lars von Trier"],
    genres: ["Comedy", "Drama"],
    premise: "Build The Idiots (Idioterne) as a 1998 Danish production in which Dogme 95 is treated as a production discipline and historical intervention, not as a shortcut that proves every technical detail. Lars von Trier wrote and directed the film; stable credit records identify Vibeke Windeløv as producer and Molly Malene Stensgaard as editor, and the film is conventionally identified as Dogme 95 film #2 after Festen. The case should distinguish three evidence layers. First, the Dogme 95 Vow of Chastity states constraints such as location shooting, no imported props/sets, sound recorded with the image rather than added separately, handheld camera, color image without special lighting, no optical work or filters, temporal/geographic immediacy, no superficial genre movie and Academy 35 mm as the required film format. Second, the production itself is a video-origin, handheld, location-driven feature whose rough mobility and proximity are historically central to Dogme's rejection of conventional polished production. Third, any theatrical transfer, distribution master or later restoration belongs to a separate finishing/presentation layer and must not be used to infer the acquisition camera, lens, recording format or transfer chain without direct documentation. The manifesto is normative evidence: gameplay must not silently convert a stated rule into proof that the production never departed from it. Preserve handheld camera, available/location light, synchronized production sound, performance freedom, location constraints and editorial construction as separate systems. The apparent immediacy of scenes is not evidence that editing disappeared; Molly Malene Stensgaard's credited editorial labor must remain visible. Likewise, the rule against added music does not mean there is no sound design problem: dialogue, room tone, environmental sound, production noise and any source music still have to be recorded, selected and organized. Do not invent the exact camera model, tape stock, lens, frame rate, exposure settings, microphone model, mixer/recorder, number of cameras, shooting ratio, transfer facility, film stock, laboratory, edit system, budget, schedule or take count unless a reviewed production source establishes it. Keep the 117-minute 1998 feature distinct from censored, cut, restored or home-video variants. The Cannes 1998 competition presentation and later Dogme retrospectives are circulation/legacy evidence, not proof of acquisition hardware.",
    sourceId: "dfi_idioterne_1998",
    sourceUrl: "https://www.dfi.dk/viden-om-film/filmdatabasen/film/idioterne",
    scenarioType: "dogme95_danish_video_origin_handheld_location_performance_1998",
    requiredChoicesSeed: {
      screenplay: ["von_trier_writer_director_authority", "dogme_manifesto_as_normative_not_automatic_compliance", "performance_structure_distinct_from_documentary_fact"],
      camera: ["handheld_location_video_origin_system", "available_location_light_as_dogme_constraint", "no_invented_camera_lens_tape_or_transfer_chain"],
      editing: ["molly_malene_stensgaard_editorial_credit", "immediacy_does_not_erase_editing", "117_min_1998_feature_version"],
      sound: ["production_sound_and_image_relationship", "dialogue_environment_source_music_distinct", "no_invented_mic_recorder_or_mix_chain"],
      themes: ["film_history", "1990s", "the_idiots", "idioterne", "dogme_95", "lars_von_trier", "vibeke_windelov", "molly_malene_stensgaard", "danish_cinema", "handheld_camera", "video_origin", "location_shooting", "available_light", "production_sound", "performance", "manifesto", "format_boundary", "cannes_1998"],
    },
    learningGoals: [
      "Place The Idiots inside the Dogme 95 intervention and late-1990s European production history without reducing Dogme to a visual style label.",
      "Distinguish the Dogme 95 Vow of Chastity as a normative rule text from evidence about what this individual production actually did.",
      "Keep Lars von Trier's screenplay and direction distinct from producer, camera, editorial, performance and sound labor.",
      "Keep Vibeke Windeløv's producer role visible as an industrial function rather than absorbing production into director-auteur shorthand.",
      "Treat the film's video-origin, handheld, location-driven production as a material workflow while leaving unsupported camera-model and recording-format specifics unset.",
      "Use the manifesto's handheld-camera rule as a production constraint without inventing lens choice, stabilization hardware, number of cameras or take counts.",
      "Use the manifesto's location rule to model dependence on found spaces without inventing exact location schedules, permissions or construction ledgers.",
      "Treat available/location light as a constraint while refusing unsupported fixture lists, exposure values, filters or lighting ratios.",
      "Separate acquisition format from theatrical presentation and later restoration; a later master cannot prove the original camera or transfer chain.",
      "Keep performance freedom and the film's apparent spontaneity distinct from documentary truth; staged fiction can use documentary-like production methods.",
      "Keep Molly Malene Stensgaard's editing role visible: handheld immediacy does not mean the feature is unedited or structurally accidental.",
      "Model cutting, duration and scene order as editorial choices even when coverage is deliberately rough or discontinuous.",
      "Interpret the Dogme sound rule carefully: synchronized production sound is a constraint, not proof that dialogue, ambience and source music require no postproduction decisions.",
      "Keep dialogue, room tone, environmental sound, production noise and source music as distinguishable sound layers.",
      "Do not invent microphone, recorder, mixer, track-count or postproduction-sound specifications absent from reviewed evidence.",
      "Use 117 minutes for the 1998 feature case and keep censored, cut, restored or home-video variants downstream.",
      "Treat Cannes 1998 presentation and later Dogme retrospectives as circulation and legacy evidence rather than original production-technique evidence.",
      "Use The Idiots beside Festen to show that Dogme 95 was a production movement with shared rules but film-specific implementations, not one homogeneous technical recipe.",
    ],
    phases: [
      { id: "manifesto_to_plan", label: "Translate Dogme rules into production constraints", player_task: "Separate what the Vow of Chastity prescribes from what film-specific sources actually document; never use the manifesto alone to manufacture compliance facts." },
      { id: "production_and_authorship", label: "Organize the feature around writer-director and producer roles", player_task: "Keep von Trier's writing/direction distinct from Windeløv's producing and from the craft departments that execute the production." },
      { id: "location_world", label: "Work from found locations", player_task: "Use Dogme's location discipline without inventing permission schedules, build counts, transport plans or hidden production infrastructure." },
      { id: "handheld_video_capture", label: "Build a mobile video-origin camera system", player_task: "Preserve handheld proximity and video-origin capture while leaving exact camera, lens, tape/codec, frame-rate and multi-camera details unset unless directly sourced." },
      { id: "available_light", label: "Work under location-light constraints", player_task: "Treat special-lighting restrictions as a planning problem; do not fabricate fixture, exposure, filtration or ratio data." },
      { id: "performance_system", label: "Protect volatile ensemble performance", player_task: "Model actor movement, improvisatory energy and camera responsiveness without assuming the fiction became unscripted documentary fact." },
      { id: "production_sound", label: "Record image and sound as an interdependent event", player_task: "Keep dialogue, environment, production noise and source music distinct while avoiding invented microphone/recorder/mixer specifications." },
      { id: "editing_structure", label: "Construct immediacy in the edit", player_task: "Use Stensgaard's credited editorial role to shape duration, order and continuity; rough camera work does not eliminate editorial authorship." },
      { id: "format_and_finish_boundary", label: "Separate acquisition from theatrical presentation", player_task: "Do not infer camera or transfer hardware from a theatrical print, later scan or restoration; keep acquisition, transfer and presentation as separate evidence layers." },
      { id: "festival_and_legacy", label: "Circulate the 1998 feature and historicize Dogme", player_task: "Use Cannes and later Dogme history for circulation/legacy only, keeping the 117-minute 1998 production case distinct from later versions." },
    ],
  },
] as const;

export function mergeChapterSeventeenTheIdiotsExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenTheIdiotsExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, "Idiots", "The Idiots (Idioterne)"].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_the_idiots_verified",
      source: { list_id: "manual_chapter_seventeen_the_idiots_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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

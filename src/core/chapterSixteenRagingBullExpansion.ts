import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSixteenRagingBullExpansionDefinitions = [
  {
    id: "scenario_raging_bull_1980",
    title: "Raging Bull",
    originalTitle: "Raging Bull",
    year: 1980,
    titleType: "Movie",
    runtimeMins: 129,
    directors: ["Martin Scorsese"],
    genres: ["Biography", "Drama", "Sport"],
    premise: "Build Raging Bull as a Chartoff-Winkler Productions film released by United Artists whose production history links adaptation, actor preparation, two separated shooting periods, black-and-white cinematography, tightly designed boxing coverage, editing and highly shaped sound without turning any one craft story into mythology. AFI credits Paul Schrader and Mardik Martin as screenwriters and records modern interviews in which Robert De Niro and Martin Scorsese spent roughly three weeks revising dialogue and characterization after Scorsese recommitted to the project; keep that later collaboration distinct from the credited screenplay authorship. AFI also records conflicting reports that De Niro trained with Jake La Motta for six, eight or more than twelve months and notes that many sources say he did not use a boxing double in the fight scenes. Preserve the training-duration disagreement rather than manufacturing one definitive number, and treat actor-performed boxing as historical evidence rather than a present-day safety recommendation. Principal photography began on the MGM lot in Culver City on 16 April 1979, moved to New York in June, paused in early August, resumed in the Los Angeles area on 3 December, then returned to New York and wrapped in late December. AFI states that the hiatus allowed De Niro to gain weight for the older La Motta material, but contemporary and later sources variously report roughly 40, 50, 55 and 60 pounds. Keep all four reported figures as source variance and never turn the transformation into a diet, dehydration, weight-gain or weight-cutting protocol. Michael Westmore's makeup is separately documented as part of the age and facial transformation, so physical transformation, makeup and performance remain different production systems. American Cinematographer records Michael Chapman's explanation that boxing had reached the filmmakers through black-and-white television, Life magazine photography and earlier boxing films, and that the monochrome format became a deliberately abstract image system. Chapman distinguishes the relatively naturalistic domestic scenes from ring sequences designed more like ballet. ASC also records that the brief color home-movie material was shot as 16mm reversal footage, eventually operated by a Teamster after Chapman and Scorsese found their own framing too polished; keep that color-home-movie system distinct from the principal black-and-white photography. AFI records Chapman's use of a purpose-built multi-flashbulb device to create the period ringside flash effect; the case may teach the visual purpose and coordination problem but must not invent wiring, voltage, flash counts, lens settings or exposure recipes. AFI's physical-properties record describes the released film as black and white with color sequences, Dolby Stereo and 127–129 minutes; BFI lists 129 minutes. Preserve 127–129 as institutional runtime/version variance rather than flattening all circulating copies to one length. AFI also describes sound as a deliberately expressive system in which background noise can overpower dialogue, some fight passages fall silent, and bursts of sound return selectively. Keep production recording, sound effects, re-recording and music-use/clearance issues distinct; AFI credits Les Lazarowitz among the sound personnel and later notes that the soundtrack album was delayed until 2005 because of rights and clearances involving numerous songs and performers. Thelma Schoonmaker's editing is a separate authorship system: AFI documents editing/post-production delays that removed the film from a planned summer 1980 release, while the Academy records Schoonmaker's Film Editing Oscar and nominations for Michael Chapman's cinematography and the sound team. Awards and later canonization are downstream evidence, not proof of undocumented on-set technique. Do not invent camera bodies, lens packages, black-and-white stock, reversal-stock emulsion, focal-length maps, frame rates, exposure ratios, lighting diagrams, flashbulb electrical specifications, fight-contact choreography, medical protocols, sound hardware, optical/lab recipes, exact daily call sheets or actor weight-change methods not established by the sources.",
    sourceId: "afi_raging_bull_1980",
    sourceUrl: "https://catalog.afi.com/Film/54882-RAGING-BULL",
    scenarioType: "chartoff_winkler_united_artists_two_period_black_and_white_boxing_performance_edit_sound_production",
    requiredChoicesSeed: {
      screenplay: ["schrader_martin_credited_screenplay", "deniro_scorsese_dialogue_character_revision_kept_distinct", "memoir_adaptation_not_documentary_transcription"],
      camera: ["chapman_black_and_white_principal_system", "16mm_reversal_color_home_movies_separate", "no_invented_camera_lens_stock_focal_frame_rate_exposure_flash_or_lab_recipe"],
      editing: ["schoonmaker_editorial_authorship", "fight_and_domestic_rhythm_kept_distinct", "postproduction_delay_part_of_release_history"],
      sound: ["expressive_silence_noise_burst_system", "production_sound_effects_mix_music_clearance_separate", "no_invented_recorder_microphone_console_or_track_layout"],
      themes: ["film_history", "1980s", "new_hollywood", "chartoff_winkler", "united_artists", "martin_scorsese", "robert_de_niro", "paul_schrader", "mardik_martin", "michael_chapman", "thelma_schoonmaker", "michael_westmore", "les_lazarowitz", "black_and_white", "color_home_movies", "boxing_cinema", "performance_transformation", "source_variance", "two_period_shoot", "editing", "sound_design", "music_clearance", "runtime_variance", "production_safety"],
    },
    learningGoals: [
      "Model Raging Bull as a Chartoff-Winkler production released by United Artists rather than reducing it to a director-star collaboration.",
      "Keep Paul Schrader and Mardik Martin's credited screenplay authorship distinct from later De Niro/Scorsese dialogue and characterization revisions described by AFI.",
      "Preserve the reported six/eight/12-plus-month training-duration disagreement as source variance rather than choosing a convenient single figure.",
      "Preserve the reported 40/50/55/60-pound weight-gain disagreement as source variance and never convert it into a body-transformation protocol.",
      "Treat the 16 April 1979 start, June New York move, early-August hiatus, 3 December Los Angeles-area restart and late-December New York wrap as a two-period production structure.",
      "Keep Robert De Niro's performance preparation, Michael Westmore's makeup work and the production hiatus as distinct systems that jointly construct age and bodily change.",
      "Use Michael Chapman's ASC account to distinguish naturalistic personal-life scenes from deliberately balletic boxing-ring photography.",
      "Treat the principal black-and-white photography and the 16mm reversal color home-movie inserts as separate image systems.",
      "Teach the period flashbulb effect as a visual coordination problem without inventing electrical, optical or exposure specifications.",
      "Keep Thelma Schoonmaker's editorial authorship distinct from Scorsese's preplanned visual ideas and from the post-production schedule delay.",
      "Separate production recording, effects editorial, re-recording/mix choices and music rights even when they combine into the film's aggressive sound experience.",
      "Use AFI's description of silence, overpowering ambience and selective sound bursts as evidence of expressive sound structure without inventing hardware or track layouts.",
      "Preserve AFI's 127–129-minute range and BFI's 129-minute record as institutional runtime/version evidence.",
      "Keep the Academy wins/nominations downstream from production evidence: Schoonmaker won Film Editing; Chapman and the sound team were nominated.",
      "Treat actor-performed boxing and extreme historical body transformation as non-replicable historical practice: contemporary productions require independent fight/stunt, medical, workload and welfare safeguards.",
      "Avoid inventing unsupported camera bodies, lenses, stocks, focal maps, frame rates, exposure ratios, lighting recipes, flash electronics, fight-contact methods, sound hardware, lab recipes, exact call sheets or weight-change procedures.",
    ],
    phases: [
      { id: "adaptation", label: "Separate credited adaptation from later dialogue revision", player_task: "Track La Motta's memoir, Schrader/Martin screenplay credit and the later De Niro/Scorsese dialogue-character work as related but non-interchangeable authorship layers." },
      { id: "performance_training", label: "Document preparation without flattening conflicting reports", player_task: "Keep the six/eight/12-plus-month training reports visible and treat no-double claims as historical source evidence, not a contemporary instruction to remove fight doubles or safety staff." },
      { id: "first_shoot_period", label: "Coordinate the April-to-August production block", player_task: "Map the 16 April MGM/Culver City start, June New York move and early-August pause without inventing scene-by-scene call sheets." },
      { id: "hiatus_transformation", label: "Separate production hiatus from unsafe body-change imitation", player_task: "Record the hiatus and the 40/50/55/60-pound source disagreement while explicitly refusing diet, dehydration, medication, weight-gain or weight-cutting instructions." },
      { id: "second_shoot_period", label: "Resume across Los Angeles and New York", player_task: "Track the 3 December Los Angeles-area restart and late-December New York wrap as a second production block whose geography and purpose remain distinct from the first." },
      { id: "makeup_performance", label: "Coordinate makeup and performance transformation", player_task: "Keep Michael Westmore's age/facial makeup separate from De Niro's physical and behavioral performance so neither craft is erased by the other." },
      { id: "black_white_camera", label: "Build a monochrome system from historical visual references", player_task: "Use Chapman's documented black-and-white rationale and naturalistic-versus-ballet distinction while leaving undocumented camera body, lens, stock, focal, frame-rate and exposure data unset." },
      { id: "color_home_movies", label: "Keep color home movies as a separate capture system", player_task: "Treat the ASC-documented 16mm reversal inserts as deliberately rough home-movie material rather than evidence for the principal black-and-white camera package." },
      { id: "ring_flash_system", label: "Coordinate period ringside flashes safely", player_task: "Use AFI's documented multi-flashbulb device only to teach timing and visual purpose; do not infer electrical design, output, flash counts, exposure settings or safe operating procedure." },
      { id: "editing_sound_release", label: "Integrate editorial rhythm, expressive sound and delayed release", player_task: "Keep Schoonmaker's editing, the silence/noise-burst sound strategy, music-rights history and post-production schedule delay as separate systems whose interaction shapes the finished film." },
    ],
  },
] as const;

export function mergeChapterSixteenRagingBullExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSixteenRagingBullExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_sixteen_raging_bull_verified",
      source: { list_id: "manual_chapter_sixteen_raging_bull_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
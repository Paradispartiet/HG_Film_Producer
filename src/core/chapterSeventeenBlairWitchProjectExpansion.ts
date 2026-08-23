import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenBlairWitchProjectExpansionDefinitions = [
  {
    id: "scenario_the_blair_witch_project_1999",
    title: "The Blair Witch Project",
    originalTitle: "The Blair Witch Project",
    year: 1999,
    titleType: "Movie",
    runtimeMins: 87,
    directors: ["Daniel Myrick", "Eduardo Sanchez"],
    genres: ["Horror"],
    premise: "Build The Blair Witch Project as a 1999 American independent horror production whose form came from a deliberately engineered encounter between improvisation, actor-operated image and sound recording, off-screen crew control, editorial selection and later festival/distribution marketing. Daniel Myrick and Eduardo Sanchez co-wrote and directed for Haxan Films; AFI credits Gregg Hale and Robin Cowie as producers, Neal Fredericks as director of photography, Ben Rock as production designer, Myrick and Sanchez as editors and Tony Cora as composer. A contemporaneous Filmmaker Magazine interview documents that Heather Donahue, Joshua Leonard and Michael Williams were cast for improvisational ability, trained to operate the cameras and field sound, and spent eight days in the woods with film and video cameras while the crew tracked them from a distance, supplied notes, food and batteries, and shaped situations without conventional on-set coverage. The directors describe an outline, character profiles and plot constraints rather than a conventional shooting script. The first phase generated about 18 hours of footage and combined black-and-white 16mm material with Hi-8 video; the contrast between Heather's intended student film and behind-the-scenes video became part of the finished narrative system. The interview also documents a second pseudo-documentary phase—newsreel, television-program, police, family and news material—that was shot but ultimately excluded from the finished feature, so discarded production material must remain distinct from the released film. Actors received camera training, Michael Williams was trained to take DAT levels, and the group received a crash course in the navigation/tracking system used to move through the woods. None of that licenses invention of exact camera bodies, lenses, film stocks, Hi-8 deck models, DAT recorder model, microphone package, exposure settings, shooting ratio or laboratory/transfer chain. Neal Fredericks' cinematography credit must not be misread as proof that he personally operated every first-person woods image: the actor-operated recording method is directly documented and must remain visible alongside the credited cinematography department. AFI and BFI give an 87-minute finished runtime. Sundance history documents the 1999 festival premiere and an internet campaign that encouraged audiences to treat the footage as real; Filmmaker later reported Artisan's Sundance acquisition and minor post-Sundance trims/clarifying inserts. Marketing, acquisition and revised release presentation are downstream circulation layers, not evidence for how Phase 1 was captured. Do not invent a definitive production budget, box-office figure, exact camera/stock package, exact GPS/GTS hardware, daily shot count, take count, deprivation schedule, crew-intervention chronology, edit system, sound-post chain, film-out process or release-print provenance where the reviewed sources do not establish it.",
    sourceId: "filmmaker_blair_witch_1999",
    sourceUrl: "https://filmmakermagazine.com/archives/issues/winter1999/into_the_woods.php",
    scenarioType: "american_independent_found_footage_16mm_hi8_improvisation_actor_camera_1999",
    requiredChoicesSeed: {
      screenplay: ["outline_character_profiles_and_plot_constraints", "improvisation_with_required_story_beats", "phase_one_found_footage_distinct_from_discarded_phase_two"],
      camera: ["actor_operated_16mm_and_hi8_capture", "neal_fredericks_credit_kept_distinct_from_actor_operation", "no_invented_camera_lens_stock_or_transfer_chain"],
      editing: ["myrick_sanchez_editorial_credit", "eighteen_hour_phase_one_selection", "sundance_cut_distinct_from_minor_post_sundance_revision"],
      sound: ["actor_field_sound_and_dat_level_training", "production_sound_distinct_from_tony_cora_music", "no_invented_recorder_microphone_or_post_chain"],
      themes: ["film_history", "1990s", "the_blair_witch_project", "independent_horror", "found_footage", "improvisation", "actor_operated_camera", "16mm", "hi8", "dat", "haxan_films", "daniel_myrick", "eduardo_sanchez", "gregg_hale", "robin_cowie", "neal_fredericks", "ben_rock", "tony_cora", "sundance", "artisan_entertainment", "internet_marketing", "production_distribution_boundary"],
    },
    learningGoals: [
      "Place The Blair Witch Project inside late-1990s American independent horror without reducing its production history to a generic found-footage label.",
      "Distinguish Myrick and Sanchez's outline, character profiles and plot constraints from a conventional dialogue-and-action shooting script.",
      "Explain how improvisational casting became a production method rather than treating apparently spontaneous performance as accidental realism.",
      "Keep Heather Donahue, Joshua Leonard and Michael Williams visible as performers who also operated image and sound equipment after production training.",
      "Treat the eight-day woods phase as a documented production structure while leaving unsupported day-by-day intervention details unset.",
      "Model the distant crew, navigation/tracking instructions, note drops, food, batteries and staged encounters as off-screen direction rather than invisible natural events.",
      "Keep black-and-white 16mm and Hi-8 video as distinct Phase 1 image streams with different narrative functions.",
      "Do not infer exact camera bodies, lenses, stocks, exposure settings, Hi-8 deck models or transfer paths from the documented format labels.",
      "Keep Neal Fredericks' credited cinematography role distinct from the directly documented actor-operated first-person footage.",
      "Use the documented camera training to explain why the performers could generate usable authored footage without claiming professional camera practice was absent from the wider production.",
      "Use Michael Williams's DAT-level training as evidence of actor-operated field sound without inventing recorder, microphone or track specifications.",
      "Keep Tony Cora's credited music distinct from location sound, actor-recorded sound, silence and later sound postproduction.",
      "Treat the approximately 18 hours of Phase 1 footage as an editorial source pool, not as a basis for an invented shooting ratio or exact medium-by-medium footage count.",
      "Explain why Myrick and Sanchez's editorial selection turned improvised field material into controlled chronology, escalation and point of view.",
      "Keep the shot-but-unused Phase 2 pseudo-documentary material separate from the released 87-minute feature.",
      "Distinguish production design and crew-created physical interventions from claims that the events were documentary reality.",
      "Treat the 1999 Sundance premiere as exhibition history and the Artisan acquisition as distribution history rather than backfilling production facts.",
      "Keep the internet campaign's reality ruse analytically separate from the fictional production method that generated the footage.",
      "Record the reported minor post-Sundance trimming and clarifying inserts as a version boundary rather than assuming one immutable festival/release cut.",
      "Do not invent a canonical microbudget number, exact deprivation schedule, camera package, edit system, effects workflow, laboratory chain or release-print provenance where reviewed sources do not establish it.",
    ],
    phases: [
      { id: "development_and_outline", label: "Build a constrained world instead of a conventional shooting script", player_task: "Define mythology, character profiles, required plot beats and limits while leaving much of the dialogue and immediate behavior to performer improvisation." },
      { id: "casting_and_equipment_training", label: "Cast improvisers who can also record the experience", player_task: "Train performers on film/video operation and field sound while keeping their acting labor distinct from professional department credits." },
      { id: "woods_navigation_and_direction", label: "Direct from outside the visible crew space", player_task: "Use the documented navigation/tracking system, notes, supplies and controlled encounters to shape the journey without inventing an unsupported minute-by-minute crew intervention map." },
      { id: "dual_format_capture", label: "Separate 16mm student-film imagery from Hi-8 behind-the-scenes video", player_task: "Preserve the two documented Phase 1 image streams and their narrative contrast without inventing camera bodies, lenses, stock emulsions or transfer hardware." },
      { id: "improvised_performance", label: "Generate behavior inside controlled constraints", player_task: "Let actors improvise within required story beats and production-created conditions while remembering that apparent spontaneity was part of a designed fiction." },
      { id: "physical_interventions_and_design", label: "Create evidence inside the fictional world", player_task: "Coordinate production design, props and off-screen encounters as authored interventions without presenting them as documentary discoveries or inventing undocumented build procedures." },
      { id: "field_sound_and_dat", label: "Make performer-operated sound part of the field system", player_task: "Use the documented DAT-level training and actor recording responsibility while leaving recorder, microphone, mixer and track architecture unset unless directly sourced." },
      { id: "phase_one_review", label: "Review and steer an accumulating field archive", player_task: "Treat roughly 18 hours of Phase 1 material as the source pool the filmmakers evaluated while the project evolved from mixed pseudo-documentary concept toward found-footage feature." },
      { id: "editing_found_footage", label: "Construct the finished narrative from actor-generated material", player_task: "Use Myrick and Sanchez's credited editing to select chronology, duration, escalation, uncertainty and point of view instead of assuming found footage means unedited footage." },
      { id: "discarded_phase_two", label: "Keep unused pseudo-documentary material outside the released film", player_task: "Record the newsreel, Mystic Occurrences, police/family and news material as shot production history that was ultimately excluded, not as content of the 87-minute release." },
      { id: "festival_distribution_and_version", label: "Separate Sundance, Artisan acquisition and release revision from capture", player_task: "Treat festival premiere, internet promotion, distribution acquisition and minor post-Sundance trims/clarifying inserts as downstream circulation/version layers rather than original woods-production evidence." },
    ],
  },
] as const;

export function mergeChapterSeventeenBlairWitchProjectExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenBlairWitchProjectExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, "Blair Witch Project"].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_blair_witch_project_verified",
      source: { list_id: "manual_chapter_seventeen_blair_witch_project_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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

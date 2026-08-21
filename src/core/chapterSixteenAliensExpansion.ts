import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSixteenAliensExpansionDefinitions = [
  {
    id: "scenario_aliens_1986",
    title: "Aliens",
    originalTitle: "Aliens",
    year: 1986,
    titleType: "Movie",
    runtimeMins: 137,
    directors: ["James Cameron"],
    genres: ["Action", "Science fiction"],
    premise: "Build Aliens as a Brandywine / Twentieth Century Fox sequel whose production system was materially rebuilt in Britain rather than treated as a simple repetition of Alien. AFI documents Cameron's forty-two-page sequel treatment in 1983, Fox's hesitation, the project's revival after The Terminator, and production centralized in London by producer Gale Anne Hurd. Institutional records place the shoot at Pinewood Studios and the disused Acton Lane Power Station; AFI preserves a start-date discrepancy between studio notes giving 30 September 1985 and Screen International giving 5 October, so do not manufacture a falsely exact single start date. The power station supplied the Atmosphere Processing Station and Armored Personnel Carrier environments, keeping found industrial location, constructed sets and production design distinct. AFI also records James Remar's replacement by Michael Biehn as Hicks during production; model this as a casting, continuity and schedule event, not gossip. Adrian Biddle is director of photography, with Moviecam camera and lenses supplied by Cinefocus London; AFI records Eastman Kodak color and Rank Film Laboratories processing, but does not establish a complete body-by-body camera package, lens series, focal-length map or exposure recipe. Peter Lamont is production designer, Ray Lovejoy editor and James Horner composer. The Academy's Aliens technical retrospective separates creature-effects coordinators Alec Gillis, Shane Mahan, John Rosengrant and Tom Woodruff Jr., miniatures technical supervisor Pat McClung, and visual-effects supervisors Robert and Dennis Skotak, while the Academy Award record credits Robert Skotak, Stan Winston, John Richardson and Suzanne Benson for Visual Effects. Preserve creature suits/puppetry, mechanical and practical effects, miniatures, process/optical work and pyrotechnics as separate systems. The Academy retrospective emphasizes that much of the effects work pushed in-camera methods, wires, mirrors and original-negative capture rather than relying on extensive optical compositing; do not turn that into a claim that every effect was in-camera or that no optical work existed. AFI records a March 1986 Pinewood set explosion that injured two special-effects technicians; retain this only as documented production-safety history and never as a reproducible effects technique. The final 137-minute runtime, 18 July 1986 release, 70mm-print expansion and later awards are release/reception history downstream from production.",
    sourceId: "afi_aliens_1986",
    sourceUrl: "https://catalog.afi.com/Film/68347-ALIENS",
    scenarioType: "brandywine_fox_pinewood_acton_lane_british_stage_creature_miniature_practical_optical_action_sequel",
    requiredChoicesSeed: {
      screenplay: ["cameron_1983_treatment_and_sequel_rebuild", "alien_continuity_distinct_from_aliens_production_system", "development_history_distinct_from_1985_1986_shoot"],
      camera: ["adrian_biddle_moviecam_cinefocus_system", "eastman_kodak_rank_processing_as_sourced", "no_invented_moviecam_body_lens_series_focal_length_or_exposure_map"],
      editing: ["ray_lovejoy_action_geography_and_recast_continuity", "production_order_distinct_from_final_action_rhythm", "no_invented_edit_room_hardware"],
      sound: ["production_sound_sound_editorial_horner_score_distinct", "dolby_stereo_release_record_distinct_from_capture_chain", "no_invented_recorder_microphone_console_or_mix_hardware"],
      themes: ["film_history", "1980s", "sequel_production", "brandywine", "twentieth_century_fox", "james_cameron", "gale_anne_hurd", "sigourney_weaver", "michael_biehn", "james_remar_recast", "pinewood_studios", "acton_lane_power_station", "adrian_biddle", "moviecam", "cinefocus", "peter_lamont", "ray_lovejoy", "james_horner", "stan_winston", "robert_skotak", "dennis_skotak", "john_richardson", "suzanne_benson", "creature_effects", "miniatures", "in_camera_effects", "optical_effects", "production_safety"],
    },
    learningGoals: [
      "Model Aliens as a Brandywine / Twentieth Century Fox sequel rebuilt through a British production base rather than as a larger copy of Alien.",
      "Separate Cameron's 1983 treatment, Fox's hesitation and the post-Terminator revival from the 1985-1986 production chronology.",
      "Preserve the documented 30 September / 5 October 1985 start-date discrepancy rather than inventing one falsely exact date.",
      "Treat Pinewood Studios and Acton Lane Power Station as distinct stage/location systems whose architecture, set construction and logistics shaped the film.",
      "Treat James Remar's replacement by Michael Biehn as a sourced casting, continuity and schedule event rather than production gossip.",
      "Use Adrian Biddle's sourced Moviecam/Cinefocus, Eastman Kodak and Rank records without inventing unsupported camera bodies, lens series, focal lengths or exposure settings.",
      "Keep Peter Lamont's production design visible in the transformation of industrial location and stage space into LV-426 environments.",
      "Keep creature performers, suits, puppetry and mechanical character work distinct from miniatures, pyrotechnics and optical/process effects.",
      "Use the Academy technical retrospective to distinguish creature-effects coordination, miniature supervision and visual-effects supervision rather than assigning all effects to one department.",
      "Understand the film's extensive in-camera effects strategy without falsely claiming that every effect avoided optical compositing.",
      "Keep Ray Lovejoy's editing central to action geography, suspense and continuity across production changes without inventing edit-room hardware.",
      "Separate production sound, sound editorial, Dolby theatrical presentation and James Horner's score as different audio layers.",
      "Treat the documented Pinewood explosion and injuries only as production-safety history, never as a contemporary effects recommendation.",
      "Keep the 137-minute release runtime, 70mm-print expansion and Academy Awards downstream from the making of the film.",
      "Preserve departmental authorship: Cameron coordinates the production, but cinematography, design, creature work, miniatures, practical effects, editing, sound and score retain distinct credited labor.",
    ],
    phases: [
      { id: "development", label: "Rebuild a sequel after a contested development path", player_task: "Track Cameron's 1983 treatment, Fox's hesitation and the later revival separately from the eventual British shoot." },
      { id: "british_base", label: "Centralize production at Pinewood and Acton Lane", player_task: "Coordinate stages, industrial location, transport and set construction while preserving the documented start-date discrepancy." },
      { id: "casting_rebuild", label: "Absorb a principal supporting-role recast", player_task: "Treat the Remar-to-Biehn change as a continuity, schedule and performance-management problem without inventing unsupported reshoot totals." },
      { id: "production_design", label: "Turn industrial architecture into a colonized off-world environment", player_task: "Coordinate Lamont's design with Acton Lane, Pinewood sets, vehicles and dressing without treating found location as automatic realism." },
      { id: "cinematography", label: "Photograph action, atmosphere and effects integration", player_task: "Use Biddle's credited role and sourced Moviecam/Cinefocus, Eastman and Rank records while leaving unsupported body, lens-series, focal-length and exposure details unset." },
      { id: "creature_system", label: "Build xenomorph performance as a creature-effects system", player_task: "Keep creature coordinators, performers, suits, puppetry and mechanical work distinct from miniature and optical departments." },
      { id: "miniatures_vfx", label: "Coordinate miniatures, in-camera tricks and optical/process work", player_task: "Use the Academy evidence for miniature and VFX supervision while avoiding the false claim that every shot used one effects technique." },
      { id: "editing", label: "Maintain action geography across dense coverage and production changes", player_task: "Use Lovejoy's credited editorial role to preserve spatial clarity, suspense and recast continuity without inventing edit hardware." },
      { id: "sound_music", label: "Separate capture, editorial sound, theatrical format and score", player_task: "Keep production sound and sound editorial distinct from Dolby release presentation and Horner's music, leaving unsupported hardware unset." },
      { id: "safety_release", label: "Close production without normalizing hazardous incidents", player_task: "Record the Pinewood effects injury as safety history and keep runtime, 70mm release strategy and awards downstream from production." },
    ],
  },
] as const;

export function mergeChapterSixteenAliensExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSixteenAliensExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_sixteen_aliens_verified",
      source: { list_id: "manual_chapter_sixteen_aliens_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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

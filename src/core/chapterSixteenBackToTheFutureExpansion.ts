import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSixteenBackToTheFutureExpansionDefinitions = [
  {
    id: "scenario_back_to_the_future_1985",
    title: "Back to the Future",
    year: 1985,
    titleType: "Movie",
    runtimeMins: 116,
    directors: ["Robert Zemeckis"],
    genres: ["Comedy", "Science fiction"],
    premise: "Build Back to the Future as an Amblin-Universal studio production whose apparent clockwork ease depended on repeated development, a disruptive lead-actor replacement, tightly coordinated location/backlot work, practical vehicle effects, selective ILM optical work and a compressed postproduction finish. AFI traces Robert Zemeckis and Bob Gale's screenplay work to fall 1980, years of studio rejection, and the project's return to Steven Spielberg after Romancing the Stone made Zemeckis commercially bankable; preserve development history separately from production execution. AFI documents Eric Stoltz as the original Marty McFly and states that five weeks of footage were scrapped when Michael J. Fox replaced him. Fox then worked days on Family Ties and nights on the feature. Treat this as a scheduling, continuity, performance and reshoot problem rather than as gossip or a claim that every earlier element was remade. AFI and the official production notes document Universal Studios plus Los Angeles-area locations, including Whittier High School, First United Methodist Church in Hollywood, Doc Brown structures in Burbank/Pasadena, and three 1981 DeLoreans modified for production. Kevin Pike's practical-effects team added four firejets; Ron Cobb, Andrew Probert, Lawrence G. Paull, Mike Scheffe and others contributed to the designed time-machine system. Keep practical picture-car construction separate from ILM's visual-effects work. ILM's own retrospective states that the film used fewer than thirty visual-effects shots, centered on the Twin Pines Mall time-travel material, the clock-tower climax and the final flying-DeLorean image. It documents blue-screen combination work, animated elements, live-action plates, a one-fifth-scale DeLorean miniature and the VistaCruiser motion-control system for the final shot. Do not inflate this into a generic 'effects movie' or invent unverified shot counts beyond ILM's stated 27/less-than-30 range. Dean Cundey is director of photography; Lawrence G. Paull production designer; Deborah L. Scott costume designer; Arthur Schmidt and Harry Keramidas editors; Alan Silvestri composer. The official credits identify William B. Kaplan as production sound mixer, Kevin Pike as special effects supervisor, and Industrial Light & Magic as the visual-effects facility. Keep cinematography, production design, practical effects, optical/VFX, editorial, production sound, sound editorial and score as distinct departments. The reviewed authoritative sources do not establish a complete camera body, lens set, stock-emulsion, focal-length, exposure, sound-recorder, microphone, optical-printer configuration or laboratory recipe for the principal unit; leave those unspecified. ILM reports roughly eight weeks of postproduction after principal photography and a shortened effects schedule as the release moved forward to 3 July 1985. Preserve that finish-pressure as a production-management fact, not as a universal workflow recommendation. Later box office, awards, sequels, restoration and franchise status belong downstream to reception and legacy.",
    sourceId: "afi_back_to_the_future_1985",
    sourceUrl: "https://catalog.afi.com/Film/55763-BACK-TO-THE-FUTURE",
    scenarioType: "amblin_universal_actor_replacement_delorean_practical_ilM_selective_vfx_compressed_postproduction",
    requiredChoicesSeed: {
      screenplay: ["zemeckis_gale_1980_development", "development_rejection_distinct_from_1985_production", "time_travel_rules_as_story_engine"],
      camera: ["dean_cundey_live_action_system", "location_backlot_continuity_across_1955_1985", "no_invented_principal_camera_lens_stock_focal_length_or_exposure_package"],
      editing: ["schmidt_keramidas_actor_replacement_and_temporal_continuity", "roughly_eight_week_post_finish", "no_invented_edit_room_hardware"],
      sound: ["william_kaplan_production_sound_distinct_from_sound_editorial_and_silvestri_score", "academy_recognized_sound_effects_editing_downstream", "no_invented_recorder_microphone_console_or_mix_hardware"],
      themes: ["film_history", "1980s", "studio_production", "amblin", "universal", "robert_zemeckis", "bob_gale", "michael_j_fox", "eric_stoltz", "casting_replacement", "reshoots", "family_ties_schedule", "dean_cundey", "lawrence_g_paull", "deborah_l_scott", "kevin_pike", "delorean", "practical_effects", "industrial_light_and_magic", "ken_ralston", "blue_screen", "motion_control", "miniature", "postproduction_schedule", "location_production", "backlot", "continuity"],
    },
    learningGoals: [
      "Model Back to the Future as an Amblin-Universal production shaped by development history, studio financing and coordinated craft systems rather than by a single technical gimmick.",
      "Separate Zemeckis and Gale's fall-1980 screenplay development and years of rejection from the later 1985 production process.",
      "Treat the Eric Stoltz-to-Michael J. Fox replacement after five weeks as a documented casting, reshoot, continuity and scheduling event rather than production gossip.",
      "Preserve Fox's documented Family Ties daytime and Back to the Future nighttime schedule as a production constraint without romanticizing overwork.",
      "Coordinate Universal-stage/backlot work with documented Los Angeles-area locations while keeping geography, set construction and story-space distinct.",
      "Distinguish the three modified DeLorean picture cars and Kevin Pike's practical firejet work from ILM's optical and miniature effects.",
      "Trace the time-machine design through production design, conceptual illustration, vehicle construction and practical effects instead of crediting one department with the whole object.",
      "Use ILM's fewer-than-thirty visual-effects scope to understand selective effects deployment rather than retrospectively turning the entire film into a VFX showcase.",
      "Keep Twin Pines blue-screen work, clock-tower optical/animation work and the final flying-DeLorean miniature/motion-control work as distinct effects problems.",
      "Keep Dean Cundey's principal photography distinct from ILM plate, miniature, motion-control and compositing work while recognizing their required visual matching.",
      "Keep Lawrence G. Paull's production design and Deborah L. Scott's costumes visible in the 1955/1985 differentiation rather than treating period contrast as dialogue alone.",
      "Keep Arthur Schmidt and Harry Keramidas's editing central to continuity after actor replacement and to the film's temporal cause-and-effect construction.",
      "Separate William B. Kaplan's production-sound role, sound editorial, Alan Silvestri's score and later awards history rather than collapsing them into one audio system.",
      "Treat ILM's roughly eight-week postproduction finish and moved-up 3 July 1985 release as schedule pressure, not as a recommended production norm.",
      "Avoid inventing unsupported principal-unit camera, lens, film-stock, exposure, recorder, microphone, optical-printer or laboratory specifications.",
    ],
    phases: [
      { id: "development", label: "Turn a long-rejected time-travel script into a financed studio production", player_task: "Track the 1980 Zemeckis-Gale development, studio rejection and eventual Amblin/Universal setup separately from the later shoot." },
      { id: "casting_rebuild", label: "Rebuild the lead-performance system after five weeks", player_task: "Treat the Stoltz-to-Fox change as a documented reshoot, continuity, schedule and performance problem without inventing the exact amount of material reshot." },
      { id: "schedule", label: "Coordinate a lead actor across television days and feature nights", player_task: "Model Fox's Family Ties/feature overlap as a production constraint and protect continuity and crew planning without glorifying exhaustion." },
      { id: "locations_design", label: "Make 1955 and 1985 legible across backlot, sets and real locations", player_task: "Coordinate Paull's production design, documented LA-area locations, set construction and period dressing while keeping each evidence layer explicit." },
      { id: "delorean_practical", label: "Build the time machine as a practical picture-car system", player_task: "Keep concept design, three modified DeLoreans, Scheffe's vehicle construction and Pike's firejet effects distinct from later optical/VFX work." },
      { id: "cinematography", label: "Photograph live action for comedy, period contrast and effects integration", player_task: "Use Cundey's credited role and documented live-action/effects collaboration without inventing unsupported principal-unit camera, lens, stock or exposure specifications." },
      { id: "visual_effects", label: "Deploy selective ILM effects where the time-travel story requires them", player_task: "Separate blue-screen, animation, plates, miniature photography and VistaCruiser motion control instead of treating every effect as one technique." },
      { id: "editing", label: "Reconstruct continuity across casting changes and time-travel causality", player_task: "Use Schmidt and Keramidas's credited editorial role to preserve performance continuity, temporal information and effects handoffs without inventing edit-room hardware." },
      { id: "sound_music", label: "Build production sound, editorial effects and score as separate layers", player_task: "Keep Kaplan's production-sound credit, sound editorial and Silvestri's music distinct, leaving unsupported recording and mixing hardware unspecified." },
      { id: "post_release", label: "Finish under a compressed post schedule without rewriting production history", player_task: "Treat ILM's roughly eight-week finish and the 3 July 1985 release as documented schedule facts; keep later awards, sequels and franchise legacy downstream." },
    ],
  },
] as const;

export function mergeChapterSixteenBackToTheFutureExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSixteenBackToTheFutureExpansionDefinitions) {
    const acceptedTitles = [definition.title].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_sixteen_back_to_the_future_verified",
      source: { list_id: "manual_chapter_sixteen_back_to_the_future_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
      film: { title: definition.title, original_title: definition.title, year: definition.year, title_type: definition.titleType, runtime_mins: definition.runtimeMins, directors: definition.directors, genres: definition.genres, genre_keys: definition.genres.map((genre) => genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")), imdb_rating: 0, user_rating: 0 },
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
import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSixteenRoboCopExpansionDefinitions = [
  {
    id: "scenario_robocop_1987",
    title: "RoboCop",
    originalTitle: "RoboCop",
    year: 1987,
    titleType: "Movie",
    runtimeMins: 103,
    directors: ["Paul Verhoeven"],
    genres: ["Action", "Crime", "Science Fiction"],
    premise: "Build RoboCop as an Orion-financed Jon Davison/Tobor production whose satirical action system depended on coordinated screenplay, performance, suit design, location production, stop-motion, optical/matte effects, editing, sound and score rather than on one monolithic effects department. AFI identifies Edward Neumeier and Michael Miner as first-time feature screenwriters, records that they chose producer Jon Davison's offer, and notes that Orion Pictures financed the project after Davison formed Tobor Productions. AFI records principal photography beginning 6 August 1986, with Dallas standing in for Detroit because of its modern skyline; Dallas City Hall became the OCP headquarters exterior, other Dallas locations included Plaza of the Americas, Renaissance Tower and the Stark Club, and production also used soundstages at Studios at Las Colinas. After Dallas photography, the company moved to the abandoned Wheeling-Pittsburgh steel mill outside Pittsburgh for the climactic battle material. Preserve location geography, stage work and the steel-mill unit as separate production problems rather than treating 'Detroit' as literal shooting geography. AFI reports that the schedule grew after the first week and that Orion production head Mike Medavoy approved additional time based on dailies; the budget rose from $11 million to $13.1 million, with a further $600,000 approved in postproduction for high-tech sound effects and a symphonic score. Keep those finance layers distinct from later box office and franchise success. AFI credits Jost Vacano as director of photography, Frank J. Urioste as editor, William Sandell as production designer, Erica Edell Phillips as costume designer and Basil Poledouris as composer. Rob Bottin is credited with designing and creating RoboCop; AFI describes the finished suit as weighing twenty-five pounds. Peter Weller trained for four months with mime coach Moni Yakim to develop the Robomovement performance system, so suit, movement coaching and acting must remain analytically distinct. Phil Tippett's ED-209 work likewise belongs to a separate effects pipeline: AFI records a seven-foot full-size droid controlled by puppeteers for actor interaction plus a miniature for stop-motion photography, while American Cinematographer documents Tippett's rear-screen projection strategy for ED-209 animation as a budget- and schedule-conscious alternative to more expensive compositing. AFI separately credits Peter Kuran/Visual Concept Engineering for special photographic effects, Rocco Gioffre for matte paintings, Robert Blalack/Praxis Film Works for optical supervision, multiple practical special-effects personnel, and the ED-209 crew. Do not collapse these into one undocumented effects recipe. American Cinematographer's interview with Vacano documents a deliberate subjective-camera strategy, delayed full revelation of the RoboCop body and use of a custom-built handheld rig, but the reviewed sources do not establish a universal camera body, lens package, focal-length map, film-stock emulsion, exposure recipe, frame-rate recipe or lighting ratio for every scene. AFI credits production sound mixer Robert Wald and boom operator Donald Broughton, multiple sound editors, final sound mixers Michael J. Kohut, Carlos DeLarios and Aaron Rochin, Foley artists David Fein and Ken Dufva, and sound-effects editors Stephen Flick and John Pospisil. The Academy gave Flick and Pospisil a Special Achievement Award for Sound Effects Editing and nominated the film for Sound and Film Editing. Keep production sound, editorial effects, Foley, final mix and Poledouris's music distinct; do not infer undocumented recorder, microphone, console, weapon-recording or mix hardware. AFI records that graphic violence initially drew an X rating and that Orion resubmitted the film several times before receiving an R. Treat that as versioning and distribution history, not proof of exact shot counts or a complete map of every excision. AFI lists a 103-minute release record while BFI lists 102 minutes; preserve the one-minute institutional runtime variance rather than forcing one timing onto every surviving version. Later box office, sequels, television adaptations, remake and franchise status remain downstream from the 1986-1987 production process.",
    sourceId: "afi_robocop_1987",
    sourceUrl: "https://catalog.afi.com/Film/67061-ROBOCOP",
    scenarioType: "orion_tobor_dallas_pittsburgh_cyborg_suit_stop_motion_optical_sound_satirical_action_production",
    requiredChoicesSeed: {
      screenplay: ["neumeier_miner_original_screenplay", "davison_tobor_orion_development_path", "satire_action_corporate_dystopia_structure"],
      camera: ["jost_vacano_subjective_camera_strategy", "delayed_full_robocop_reveal", "no_invented_camera_body_lens_stock_focal_map_frame_rate_exposure_or_lighting_recipe"],
      editing: ["frank_urioste_editorial_authorship", "mpaa_x_to_r_versioning_kept_distinct_from_production", "no_invented_edit_room_or_exact_cut_map"],
      sound: ["production_sound_separate_from_effects_foley_mix_and_poledouris_score", "flick_pospisil_sound_effects_editing_special_achievement", "no_invented_recorder_microphone_console_weapon_recording_or_mix_hardware"],
      themes: ["film_history", "1980s", "orion_pictures", "tobor_productions", "jon_davison", "paul_verhoeven", "edward_neumeier", "michael_miner", "jost_vacano", "frank_urioste", "william_sandell", "rob_bottin", "peter_weller", "moni_yakim", "phil_tippett", "ed_209", "stop_motion", "rear_projection", "optical_effects", "matte_paintings", "dallas", "las_colinas", "pittsburgh_steel_mill", "budget_growth", "sound_effects_editing", "mpaa_versioning", "satire", "cyborg_performance"],
    },
    learningGoals: [
      "Model RoboCop as an Orion-financed Jon Davison/Tobor production rather than as a generic studio science-fiction film.",
      "Keep Neumeier and Miner's screenplay-development path distinct from Davison's producing role and Orion's financing decision.",
      "Preserve the documented 6 August 1986 production start and distinguish Dallas/Las Colinas production from the later Pittsburgh steel-mill work.",
      "Treat Dallas architecture as production geography standing in for Detroit rather than claiming the film was principally photographed in Detroit.",
      "Separate the $11 million starting budget, the rise to $13.1 million and the additional $600,000 postproduction approval into distinct finance decisions.",
      "Keep Rob Bottin's twenty-five-pound RoboCop suit separate from Peter Weller and Moni Yakim's four-month movement-development process.",
      "Keep ED-209's full-size puppeteered unit separate from the miniature stop-motion system and from other optical, matte and practical effects departments.",
      "Use American Cinematographer's rear-screen account to understand Tippett's ED-209 economy without generalizing it into a universal effects method for the film.",
      "Use Vacano's documented subjective-camera strategy and delayed full-body reveal without inventing an unsupported universal camera or lens package.",
      "Keep Jost Vacano's cinematography, William Sandell's production design, Erica Edell Phillips's costume design and Frank J. Urioste's editing as distinct craft systems.",
      "Keep production sound, sound-effects editorial, Foley, final mixing and Basil Poledouris's score analytically separate.",
      "Recognize Stephen Flick and John Pospisil's Academy Special Achievement Award as evidence of sound-effects editorial authorship, not as proof of undocumented hardware.",
      "Treat the initial X rating and repeated resubmission for an R as versioning/distribution history rather than a complete scene-by-scene censorship map.",
      "Preserve AFI's 103-minute and BFI's 102-minute records as institutional runtime variance rather than silently choosing one timing for every version.",
      "Avoid inventing unsupported camera bodies, lens packages, film stocks, exposure or lighting recipes, frame rates, sound hardware, stunt rigs, pyrotechnic or squib specifications, ammunition procedures, optical-printer settings, laboratory recipes or exact scene schedules.",
    ],
    phases: [
      { id: "development_finance", label: "Move an original screenplay through producer packaging and Orion finance", player_task: "Track Neumeier/Miner, Jon Davison/Tobor and Orion as separate development and financing roles instead of collapsing them into one studio-origin story." },
      { id: "location_strategy", label: "Build future Detroit from Dallas and industrial Pittsburgh", player_task: "Coordinate Dallas architecture, Las Colinas stages and the Wheeling-Pittsburgh steel mill as separate production environments without claiming Detroit photography that the sources do not support." },
      { id: "schedule_budget", label: "Respond to an expanding schedule without hiding the finance history", player_task: "Keep the initial schedule, approved extension, $11 million starting budget, $13.1 million revised budget and $600,000 post allocation as distinct production-control decisions." },
      { id: "suit_performance", label: "Integrate a heavy cyborg suit with trained movement performance", player_task: "Keep Bottin's suit design/construction and Weller/Yakim's four-month Robomovement development separate while treating both as necessary to the finished character." },
      { id: "cinematography", label: "Use subjective framing and delayed revelation without inventing a camera package", player_task: "Anchor the image system in Vacano's documented subjective strategy and custom handheld work while leaving unsupported body, lens, stock, focal, frame-rate, exposure and lighting specifics unset." },
      { id: "ed209_effects", label: "Coordinate full-size puppetry, miniature stop motion and rear-screen integration", player_task: "Keep actor-interaction hardware, the stop-motion miniature and rear-screen background strategy distinct, and do not generalize ED-209's pipeline to every effect in the film." },
      { id: "other_effects", label: "Separate optical, matte and practical effects from ED-209", player_task: "Track Visual Concept Engineering, matte work, optical supervision and practical special effects as separate credited systems without inventing unverified shot-level methods." },
      { id: "editing_versioning", label: "Shape satire and violence while preserving version history", player_task: "Keep Urioste's editorial authorship distinct from the later X-to-R submission history and avoid inventing an exact catalogue of every removed frame or shot." },
      { id: "sound_music", label: "Build a layered post sound and score system", player_task: "Separate production recording, sound editorial, Foley, final mixing, Flick/Pospisil effects authorship and Poledouris's score without inventing recorder, microphone, console or weapons-recording hardware." },
      { id: "release_legacy", label: "Separate the 1987 release from the franchise that followed", player_task: "Keep release timing, runtime variance, ratings, box office, sequels, television and remake history downstream from the documented production process." },
    ],
  },
] as const;

export function mergeChapterSixteenRoboCopExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSixteenRoboCopExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_sixteen_robocop_verified",
      source: { list_id: "manual_chapter_sixteen_robocop_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
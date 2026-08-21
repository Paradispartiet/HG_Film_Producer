import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSixteenComeAndSeeExpansionDefinitions = [
  {
    id: "scenario_come_and_see_1985",
    title: "Come and See",
    originalTitle: "Idi i smotri",
    aliases: ["Иди и смотри", "Idi i smotri"],
    year: 1985,
    titleType: "Movie",
    runtimeMins: 142,
    directors: ["Elem Klimov"],
    genres: ["Drama", "War"],
    premise: "Build Come and See as Elem Klimov and Ales Adamovich's witness-based Soviet antiwar production, not as an abstract war-horror style exercise detached from the Belarusian historical record. Criterion and Janus trace the screenplay to Adamovich's Khatyn and Out of the Fire testimony-based writing, Klimov's own wartime memory, and a mid-1970s collaboration that was ready to shoot in 1977 before Goskino objections delayed approval until after 1982. Keep the approval history separate from the eventual production chronology. Janus identifies the finished film as a Mosfilm-Belarusfilm coproduction and reports that it was shot in sequence over nine months in 1984 on Belorussian soil. That unusually long, chronological production schedule is central to the case and should not be replaced with an invented compressed shoot. Alexei Kravchenko was fourteen when cast as Flyora and had not previously appeared in a film; his performance work belongs to a demanding location production, but unsupported psychological legends should not be turned into production fact. Janus records an attempted hypnosis plan that did not work and also records the use of real bullets instead of blanks in some filming, with Kravchenko reporting rounds passing inches above him. Preserve this as documented historical production practice and an explicit safety boundary, never as a technique to imitate. Alexei Rodionov was cinematographer. Janus describes naturalistic color, long Steadicam shots and extreme close-ups; Criterion's film page describes subjective camera work and expressionistic sound design. Use these as sourced formal-production choices without inventing a camera body, lens package, film-stock emulsion, focal lengths, exposure ratios, Steadicam model, laboratory recipe, recorder, microphone or mixing-console hardware. Viktor Petrov is credited for production design, Eleonora Semyonova for costume design, Valeriya Belova for editing, Viktor Mors for sound and Oleg Yanchenko for music. Keep those departments distinct rather than attributing the film's sensory force to camera alone. Adamovich's documentary-literary source base is also part of production method: Criterion documents Khatyn and Out of the Fire as major sources built from survivor testimony, while the screenplay reshapes that evidence into fiction. Preserve the distinction between historical testimony, screenplay construction and staged images. Institutional runtime records diverge: Criterion and BFI list 142 minutes, Janus press notes 143 and Mosfilm 137. Use 142 as the canonical reference runtime for this scenario while treating the institutional spread as edition/timing metadata rather than a production claim. The 1985 Moscow festival release, later international reception and 2017 restoration belong downstream to distribution, reception and preservation history.",
    sourceId: "janus_come_and_see_1985_press_notes",
    sourceUrl: "https://s3.amazonaws.com/criterion-production/janus_promo_packages/359-/ComeAndSee_press-notes_r1_original.pdf",
    scenarioType: "mosfilm_belarusfilm_belorussia_witness_based_chronological_location_steadicam_antiwar_production",
    requiredChoicesSeed: {
      screenplay: ["adamovich_klimov_witness_based_screenplay", "genuinely_documented_testimony_distinct_from_fictional_reconstruction", "censorship_delay_distinct_from_1984_production"],
      camera: ["rodionov_naturalistic_color_steadicam_extreme_closeup_system", "chronological_belorussian_location_production", "no_invented_camera_lens_stock_focal_length_exposure_or_stabilizer_hardware"],
      editing: ["valeriya_belova_editor", "chronological_shoot_distinct_from_final_temporal_construction", "no_invented_edit_room_workflow"],
      sound: ["viktor_mors_sound_yanchenko_music_distinct", "expressionistic_sound_design_as_sourced_formal_result", "no_invented_recorder_microphone_console_or_post_hardware"],
      themes: ["film_history", "1980s", "soviet_cinema", "belorussia", "belarus", "antiwar", "world_war_ii", "elem_klimov", "ales_adamovich", "mosfilm", "belarusfilm", "location_production", "chronological_shooting", "alexei_rodionov", "steadicam", "extreme_closeups", "naturalistic_color", "alexei_kravchenko", "viktor_petrov", "valeriya_belova", "viktor_mors", "oleg_yanchenko", "survivor_testimony", "censorship", "production_safety", "live_ammunition", "restoration_history"],
    },
    learningGoals: [
      "Model Come and See as a Mosfilm-Belarusfilm production grounded in Belarusian wartime testimony and Soviet institutional history rather than as free-floating antiwar iconography.",
      "Trace Adamovich's Khatyn and Out of the Fire witness-based source work into the Adamovich-Klimov screenplay while keeping testimony, adaptation and fictional reconstruction distinct.",
      "Separate the 1977-ready screenplay, Goskino objection and post-1982 approval from the actual nine-month 1984 production chronology.",
      "Preserve Janus's documented in-sequence, nine-month shoot on Belorussian soil instead of inventing a shorter or differently ordered schedule.",
      "Treat the Belorussian location base as a production system involving landscape, settlements, weather, performers and design, not as automatic documentary truth.",
      "Use Rodionov's sourced naturalistic color, long Steadicam movement and extreme close-ups as formal strategies without inventing unsupported camera, lens, stock, focal-length or exposure specifications.",
      "Understand the 1.37:1 presentation as an institutionally documented format while avoiding unsupported claims about the exact camera package used to achieve it.",
      "Keep Alexei Kravchenko's first-film performance work separate from later mythmaking and from unsafe on-set practices documented in the production record.",
      "Treat the documented use of live ammunition as a historical high-risk practice and safety boundary, never as a reproducible filmmaking recommendation.",
      "Keep Viktor Petrov's production design and Eleonora Semyonova's costume design visible within the film's material construction of wartime Belorussia.",
      "Keep Valeriya Belova's editing distinct from the chronological shoot: shooting in story order does not mean the final film bypassed editorial construction.",
      "Separate Viktor Mors's sound credit and the film's sourced expressionistic sound design from Oleg Yanchenko's music and from unsupported recording hardware claims.",
      "Preserve the difference between production evidence and historical-event evidence: a staged scene can be testimony-informed without becoming documentary footage.",
      "Handle the 137/142/143-minute institutional runtime discrepancy transparently rather than forcing all editions into one falsely exact duration claim.",
      "Keep the 1985 festival/release history, later canonization and 2017 restoration downstream from the 1984 production case.",
    ],
    phases: [
      { id: "historical_source", label: "Build the screenplay from testimony without collapsing testimony into fiction", player_task: "Track Adamovich's Khatyn and Out of the Fire source base, Klimov's wartime memory and the screenplay's fictional reconstruction as related but distinct evidence layers." },
      { id: "approval", label: "Navigate the long preproduction and approval gap", player_task: "Keep the 1977 production readiness, Goskino objection, later delay and post-1982 approval separate from the 1984 shoot itself." },
      { id: "locations_schedule", label: "Commit to Belorussian locations and an in-sequence nine-month schedule", player_task: "Plan around the sourced 1984 chronological location production without inventing unsourced dates, unit counts or compressed scheduling." },
      { id: "performance", label: "Protect a first-time teenage lead inside a physically demanding production", player_task: "Use Kravchenko's documented casting and production experience while rejecting unsupported psychological folklore and treating hazardous ammunition practice as a warning boundary." },
      { id: "production_design", label: "Construct wartime material reality through location and design", player_task: "Coordinate Viktor Petrov's production design with location, props, structures and costume without claiming the landscape alone supplies historical accuracy." },
      { id: "cinematography", label: "Create embodied subjectivity with color, Steadicam and frontal proximity", player_task: "Use Rodionov's documented naturalistic color, long Steadicam shots and extreme close-ups while leaving unsupported camera, lens, stock and exposure data unset." },
      { id: "sound", label: "Build subjective shock without fabricating the recording chain", player_task: "Keep Viktor Mors's sound role, sourced expressionistic sound design and Oleg Yanchenko's music distinct while leaving unsupported microphones, recorders and consoles unspecified." },
      { id: "editing", label: "Shape a chronological shoot into final dramatic progression", player_task: "Use Belova's credited editorial role to distinguish production order from final montage, rhythm and historical-newsreel construction." },
      { id: "safety", label: "Audit historically documented high-risk practices", player_task: "Record the use of live ammunition as part of production history, explicitly reject it as a safe contemporary method and avoid glamorizing danger as authenticity." },
      { id: "release_preservation", label: "Separate production from release, reception and restoration", player_task: "Keep the 1985 Moscow festival/release, later international canonization and 2017 restoration downstream from the 1984 making of the film." },
    ],
  },
] as const;

export function mergeChapterSixteenComeAndSeeExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSixteenComeAndSeeExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_sixteen_come_and_see_verified",
      source: { list_id: "manual_chapter_sixteen_come_and_see_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
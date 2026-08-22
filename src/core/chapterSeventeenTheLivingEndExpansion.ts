import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenTheLivingEndExpansionDefinitions = [
  {
    id: "scenario_the_living_end_1992",
    title: "The Living End",
    originalTitle: "The Living End",
    year: 1992,
    titleType: "Movie",
    runtimeMins: 84,
    directors: ["Gregg Araki"],
    genres: ["Drama", "Romance", "Road Movie"],
    premise: "Build The Living End as a 1992 American New Queer Cinema microbudget feature whose production history is best understood through constrained finance, multi-role authorship, weekend location shooting, borrowed 16mm resources, editing support and later 35mm theatrical enlargement rather than through a romanticized 'guerrilla' myth. AFI records principal photography beginning in fall 1990 and concluding in January 1991, filming in and around Los Angeles on sporadic weekends so the actors could keep their jobs, a minimal crew with Gregg Araki directing and operating camera, a final budget reported at $23,000, an AFI grant that financed editing, completion in November 1991, and photography on 16mm enlarged to 35mm for theatrical release. UCLA and Araki's own period/retrospective interviews instead describe the budget as roughly $20,000; preserve $20k/$23k as source-framed variance rather than inventing one audited ledger. UCLA credits Araki as screenwriter, cinematographer and editor, while BFI credits Marcus Hu and Jon Gerrans as producers. BFI programme records further identify Christopher Münch for lighting, George Lockwood for sound design, Dave Cash/Joyce Brouwers/Jack Kofman for sound recording, Cole Coonce for original music, plus Strand Releasing/Desperate Pictures and additional producing roles. Araki told BOMB that shooting lasted three or four months but was not full time, and that only a couple of days reached roughly fifteen hours; do not turn those memories into a universal schedule. In a later first-person interview he described Jon Jost lending a 16mm camera and old film stock, the film as his first color and first sync-sound feature, and the production as tiny, unpaid, permit-light guerrilla work made with friends while the camera sometimes failed. Those details are historical testimony, not present-day production advice. Current location production must secure applicable permissions, location agreements, insurance and public-safety controls; working hours and turnaround must meet applicable labor rules; equipment must be maintained and production must have contingency planning. Sensitive sexual, violent and HIV-related material must be staged today with explicit performer consent, appropriate intimacy/closed-set practice where relevant, safeguarding and trauma-aware communication. Do not infer an exact 16mm camera model, lens package, emulsion, exposure, lighting ratios, laboratory chemistry, sync recorder, ADR/Foley workflow, rights clearances, full crew roster or exact daily schedule absent from reviewed sources. Festival premieres, later remaster/remix editions and New Queer Cinema canonization remain downstream from the original production evidence.",
    sourceId: "afi_the_living_end_1992",
    sourceUrl: "https://catalog.afi.com/Film/59308-THE-LIVING-END",
    scenarioType: "new_queer_cinema_microbudget_16mm_weekend_los_angeles_strand_independent",
    requiredChoicesSeed: {
      screenplay: ["araki_screenplay_and_queer_road_structure", "hiv_context_without_medical_or_identity_generalization", "new_queer_cinema_context_not_one_style"],
      camera: ["araki_16mm_cinematography", "16mm_to_35mm_theatrical_blowup", "no_invented_camera_lens_stock_exposure_or_lab"],
      editing: ["araki_editorial_authorship", "afi_editing_grant_visible", "festival_and_remaster_downstream"],
      sound: ["sync_sound_first_person_claim_source_specific", "lockwood_sound_design_and_named_recordists_separate", "no_invented_recorder_adr_foley_or_mix_hardware"],
      themes: ["film_history", "1990s", "the_living_end", "new_queer_cinema", "gregg_araki", "strand_releasing", "desperate_pictures", "microbudget", "los_angeles", "weekend_shooting", "16mm", "35mm_blowup", "borrowed_equipment", "afi_grant", "budget_variance", "work_hours_boundary", "location_permissions_boundary", "intimacy_consent_boundary"],
    },
    learningGoals: [
      "Model The Living End as a film inside heterogeneous New Queer Cinema rather than treating the movement as one visual style or production template.",
      "Keep Gregg Araki's writing/directing/cinematography/editing roles visible without erasing producers, lighting, sound and distribution collaborators.",
      "Distinguish Strand Releasing/Desperate Pictures presentation/distribution structures from the tiny production crew and later festival circulation.",
      "Preserve the roughly $20,000 and $23,000 budget records as differently framed source evidence rather than one audited ledger.",
      "Preserve AFI's fall-1990-to-January-1991 production window alongside Araki's three-to-four-month, non-full-time recollection without forcing a false day-by-day schedule.",
      "Understand sporadic weekend shooting around actors' employment as a microbudget scheduling response, not a universal indie method.",
      "Use Jon Jost's loaned 16mm camera and old stock only as first-person resource evidence; do not invent model, lens, emulsion or exposure specifications.",
      "Treat Araki's first-color and first-sync-sound description as filmmaker testimony specific to his own filmography.",
      "Keep original 16mm photography and 35mm theatrical enlargement as separate capture/release stages.",
      "Treat the AFI editing grant as a distinct post-production support layer rather than inflating it into total financing.",
      "Keep Christopher Münch lighting distinct from Araki's cinematography and leave undocumented lighting ratios/equipment unset.",
      "Keep George Lockwood sound design, named production sound recordists and Cole Coonce music as separate craft responsibilities.",
      "Treat Araki's permit-light guerrilla recollection as historical evidence only; present-day production requires applicable permissions, agreements, insurance and public-safety planning.",
      "Do not romanticize fifteen-hour historical workdays; contemporary scheduling must observe applicable work-hour, turnaround and fatigue-management requirements.",
      "Stage sensitive sexual/violent/HIV-related material today with explicit performer consent, appropriate intimacy/closed-set practice, safeguarding and trauma-aware communication.",
      "Keep Sundance/New Directors-New Films reception and later remaster/remix editions downstream from original production evidence.",
      "Do not infer unsupported camera/lens/stock/lab, sound-hardware, rights-clearance, daily-schedule or full-crew details from microbudget anecdotes.",
    ],
    phases: [
      { id: "microbudget_package", label: "Assemble a tiny independent package with source-bounded finance", player_task: "Separate $20k and $23k historical budget reports, producer/presenter roles and later festival value; do not create an unsourced normalized ledger." },
      { id: "script_and_nqc_context", label: "Write a queer road film without reducing New Queer Cinema to one formula", player_task: "Use Araki's screenplay and HIV-era political context while keeping movement labels, identity claims and historical reception separate from production facts." },
      { id: "weekend_schedule", label: "Schedule around actors' jobs and a minimal crew", player_task: "Preserve sporadic weekend and three-to-four-month/non-full-time testimony without inventing a daily calendar; current plans must use lawful hours, turnaround and fatigue controls." },
      { id: "tiny_crew_roles", label: "Coordinate multi-role authorship with visible collaborators", player_task: "Keep Araki's writing/directing/camera/editing roles visible alongside Hu, Gerrans, Münch and sound collaborators rather than collapsing the film into a lone-auteur myth." },
      { id: "camera_colour_sync_sound", label: "Shoot an early Araki color/sync-sound feature on 16mm", player_task: "Use only source-verified 16mm, color and sync-sound history plus Jost's loaned-resource testimony; leave camera model, lenses, stock identity, exposure and lab process unset." },
      { id: "los_angeles_locations", label: "Work across Los Angeles locations within contemporary rules", player_task: "Study the historical low-resource location method without reproducing permitless practice; obtain applicable permissions, insurance, traffic/public controls and location agreements today." },
      { id: "performance_and_intimacy", label: "Stage volatile queer romance and violence with performer-centered safeguards", player_task: "Prioritize explicit consent, choreography, closed-set/intimacy practice where relevant and trauma-aware communication; do not infer unsafe historical staging from the finished film." },
      { id: "editing_grant", label: "Use targeted post-production support to complete the film", player_task: "Keep the AFI editing grant as editing support and Araki's editorial authorship distinct from principal-photography finance." },
      { id: "sound_music", label: "Finish sync dialogue, sound design and music as separate systems", player_task: "Credit Lockwood, the named sound recordists and Coonce separately; do not invent recorder, ADR, Foley, workstation or mix-chain details." },
      { id: "blowup_distribution", label: "Move from 16mm production to 35mm theatrical circulation", player_task: "Preserve AFI's 16mm-to-35mm enlargement and Strand/presenter context without inventing laboratory recipes, print counts or distribution economics." },
      { id: "festival_remaster_legacy", label: "Separate later canonization and remastering from original production", player_task: "Treat Sundance, New Directors/New Films, New Queer Cinema canonization and later remixed/remastered presentations as downstream history." },
    ],
  },
] as const;

export function mergeChapterSeventeenTheLivingEndExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenTheLivingEndExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_the_living_end_verified",
      source: { list_id: "manual_chapter_seventeen_the_living_end_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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

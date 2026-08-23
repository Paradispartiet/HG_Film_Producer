import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterSeventeenTitanicExpansionDefinitions = [
  {
    id: "scenario_titanic_1997",
    title: "Titanic",
    originalTitle: "Titanic",
    year: 1997,
    titleType: "Movie",
    runtimeMins: 194,
    directors: ["James Cameron"],
    genres: ["Drama", "Romance", "History"],
    premise: "Build Titanic as a 1997 Lightstorm/20th Century Fox/Paramount production whose scale came from coordinating historical research, full-scale and partial ship construction, Baja water-stage infrastructure, separately photographed present-day material, deep-sea wreck footage, Super 35 live-action cinematography, miniatures, practical effects, digital set extensions and water, digital stunt people, editing, sound, music and release logistics. AFI records James Cameron as writer/director/producer, Jon Landau as producer, Russell Carpenter as cinematographer, Peter Lamont as production designer and Conrad Buff/James Cameron/Richard A. Harris as editors, with Lightstorm Entertainment, Twentieth Century Fox and Paramount Pictures in the production/distribution structure. BFI and DFI independently corroborate the principal credits. American Cinematographer preserves an important cinematography split: Caleb Deschanel photographed the present-day/Nova Scotia material before Russell Carpenter joined for the 1912-period ship work at Fox Baja Studios in Mexico. Do not collapse those sections into one photographic unit. ASC documents Carpenter's source-backed period/live-action package as Panavision, Super 35 for a 2.35:1 release frame, Primo primes plus Primo zooms and primarily Kodak Vision 500T 5279; those details apply only where the source documents them and must not be projected onto Deschanel's unit, the 1995 Mir-submersible wreck footage, miniature photography or every effects element. ASC's effects coverage records actual wreck imagery captured during Cameron's 1995 Mir dives as 35mm two-perf, another distinct acquisition system. Production design and effects are equally plural. Fox Baja supplied large ship/tank infrastructure; ASC and Digital Domain records show full-scale set pieces, physical ship miniatures/models, high-speed miniature water work, computer-generated set extensions, CG water and digital people. PBS/NOVA visual-effects supervisor Rob Legato describes digital stunt people for dangerous long falls using motion-capture data from a real stunt performer. Treat this as an effects-and-safety interface, not proof that every stunt was digital. Historical flood, water-tank, destructive-set, fall, wire, breakaway and effects practices are descriptive only. Any present-day recreation requires qualified stunt and aquatic-safety leadership, engineered/inspected sets and breakaway materials, controlled water temperature/depth/flow, rescue capability, fatigue and hypothermia controls, rehearsals, exclusion zones, medical/emergency planning, certified rigging where relevant and applicable labor/permitting rules. Do not infer tank volumes, pump rates, fall heights, wire loads, pyrotechnic charges, evacuation timings or diver procedures absent from reviewed sources. Editing, sound and music remain separate systems: Academy records Buff/Cameron/Harris for editing, Gary Rydstrom/Tom Johnson/Gary Summers/Mark Ulano for sound, Tom Bellfort/Christopher Boyes for sound-effects editing and James Horner for original score, while AFI records Dolby Digital/DTS/SDDS release formats. Release sound formats do not establish production-recording hardware or a complete ADR/Foley/mix workflow. Awards are downstream recognition only. Runtime is institutionally/version-sensitive: AFI records 194 or 197 minutes, BFI 195 and DFI 194. Use 194 minutes as canonical gameplay runtime while preserving 194/195/197 as institutional/version variance. Later 3-D, 4K and premium-format re-releases are downstream and must not be used to infer the 1997 production or finishing pipeline. Avoid unsourced budget normalization, camera/lens claims outside the Carpenter-sourced work, deep-sea operational procedures, stunt mechanics, water-system engineering, pyrotechnic specifications, VFX software/render settings, sound hardware or color-timing numbers not explicitly established by the reviewed sources.",
    sourceId: "afi_titanic_1997",
    sourceUrl: "https://catalog.afi.com/Film/55202-TITANIC",
    scenarioType: "fox_paramount_baja_super35_deep_sea_miniatures_digital_domain_water_stunt_sound_editing",
    requiredChoicesSeed: {
      screenplay: ["cameron_historical_romance_framework", "historical_research_separate_from_fictional_characters", "no_box_office_or_awards_as_script_proof"],
      camera: ["deschanel_present_day_vs_carpenter_period_units", "carpenter_panavision_super35_primo_5279_source_boundary", "mir_wreck_35mm_two_perf_separate"],
      editing: ["buff_cameron_harris_editorial_authorship", "miniature_digital_live_action_elements_integrated_in_edit", "194_195_197_runtime_variance_preserved"],
      sound: ["rydstrom_johnson_summers_ulano_mix_credits", "bellfort_boyes_sound_effects_editing_separate", "no_invented_recorder_adr_foley_or_mix_hardware"],
      themes: ["film_history", "1990s", "titanic_1997", "james_cameron", "jon_landau", "lightstorm", "twentieth_century_fox", "paramount", "fox_baja_studios", "caleb_deschanel", "russell_carpenter", "peter_lamont", "conrad_buff", "richard_a_harris", "super35", "panavision", "primo", "kodak_5279", "mir_submersible", "deep_sea_footage", "digital_domain", "robert_legato", "miniatures", "cg_water", "digital_stunt_people", "aquatic_safety_boundary", "runtime_variance"],
    },
    learningGoals: [
      "Model Titanic as a coordinated multi-system production rather than as one large CGI project.",
      "Keep Lightstorm, Twentieth Century Fox and Paramount production/distribution roles source-specific rather than collapsing all corporate functions into one label.",
      "Separate Caleb Deschanel's present-day/Nova Scotia photography from Russell Carpenter's later 1912-period ship photography at Fox Baja.",
      "Use Carpenter's Panavision/Super 35/Primo/5279 package only where ASC documents it and do not project it onto other units or effects photography.",
      "Keep Cameron's 1995 Mir-submersible wreck photography as a separate 35mm two-perf acquisition system from the 1996-97 dramatic live-action units.",
      "Keep Peter Lamont's historical production design and full-scale/partial ship construction distinct from cinematography and effects extensions.",
      "Distinguish physical ship miniatures, full-scale practical sets, high-speed miniature water, CG set extensions, CG water and digital people instead of labeling all spectacle CGI.",
      "Use Rob Legato's digital-stunt-person account as evidence of an effects/safety interface without claiming every dangerous fall was replaced digitally.",
      "Treat historical water-stage, flood, destructive-set, breakaway and fall practices as descriptive evidence only, never as a modern operating recipe.",
      "Require present-day water/tank work to use qualified aquatic and stunt safety leadership, rescue capability, fatigue/hypothermia controls, rehearsals, emergency planning and applicable labor/permitting rules.",
      "Do not infer tank volumes, pump rates, water temperatures, fall heights, rigging loads, pyrotechnic quantities or diver procedures absent from reviewed sources.",
      "Keep Conrad Buff, James Cameron and Richard A. Harris's editing distinct from effects capture and later release-version history.",
      "Keep production sound, sound-effects editing, re-recording/mix credits and James Horner's music as distinct craft layers.",
      "Treat Dolby Digital, DTS and SDDS as release-format evidence rather than proof of undocumented production-recording or ADR/Foley hardware.",
      "Use the Academy Awards as downstream craft recognition only, not as evidence for undocumented production technique.",
      "Preserve 194/195/197-minute institutional/version variance while using 194 minutes as canonical gameplay runtime.",
      "Keep later 3-D/4K/premium-format rereleases downstream from the original 1997 production and finishing evidence.",
    ],
    phases: [
      { id: "historical_research_and_script", label: "Translate historical research into a fictional dramatic structure", player_task: "Keep documented ship/history research distinct from invented central characters and avoid using box office, awards or later mythology as screenplay evidence." },
      { id: "package_and_studio_structure", label: "Coordinate Lightstorm, Fox and Paramount at blockbuster scale", player_task: "Map producer and studio/distributor roles from sources without inventing unsourced ownership, budget-allocation or risk-sharing terms." },
      { id: "wreck_and_present_day", label: "Separate wreck imagery and present-day photography from the period unit", player_task: "Keep 1995 Mir 35mm two-perf wreck capture and Deschanel's present-day/Nova Scotia work distinct from Carpenter's later period photography; do not infer submersible procedures." },
      { id: "baja_design_and_water_stages", label: "Build the period ship world at Fox Baja", player_task: "Coordinate Lamont's design, large ship/set construction and water-stage infrastructure without inventing tank dimensions, flow engineering, evacuation timings or structural specifications." },
      { id: "period_cinematography", label: "Photograph the 1912 world with the source-backed live-action package", player_task: "Use Carpenter's documented Panavision/Super 35/Primo/primarily 5279 package only within its sourced boundary and leave unsupported per-shot lens, filtration, exposure and lab claims unset." },
      { id: "practical_water_and_stunts", label: "Stage water, flooding and falls as safety-critical work", player_task: "Treat period production anecdotes only as history; present-day work requires qualified stunt/aquatic safety, rescue capability, engineered materials, rehearsals, exclusion zones, fatigue/hypothermia controls and medical planning." },
      { id: "miniatures_and_models", label: "Use physical models for scale and water behavior", player_task: "Keep ship miniatures/model photography distinct from full-scale sets and CG; do not reverse-engineer unsupported miniature dimensions, camera speeds or water-system settings." },
      { id: "digital_extensions_and_people", label: "Extend sets, water and crowds digitally", player_task: "Use Digital Domain/Legato evidence for CG set extensions, CG water and digital people while leaving software, render farm, shader, simulation and compositing parameters unset." },
      { id: "effects_safety_interface", label: "Substitute digital methods where physical risk becomes excessive", player_task: "Use the documented digital-stunt-person approach as one historical example of reducing dangerous falls; modern decisions still require a qualified safety/stunt/VFX assessment for each shot." },
      { id: "edit_sound_music", label: "Integrate live action, effects, sound and score in post", player_task: "Credit Buff/Cameron/Harris, Rydstrom and the sound teams, and Horner separately; do not infer recorder, ADR/Foley, workstation or mix-chain hardware from release formats or awards." },
      { id: "release_and_versions", label: "Release a long-form feature without false runtime certainty", player_task: "Use 194 minutes canonically, retain 195/197 records and keep later 3-D/4K/premium-format versions downstream from original production evidence." },
    ],
  },
] as const;

export function mergeChapterSeventeenTitanicExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterSeventeenTitanicExpansionDefinitions) {
    const acceptedTitles = [definition.title].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_seventeen_titanic_verified",
      source: { list_id: "manual_chapter_seventeen_titanic_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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

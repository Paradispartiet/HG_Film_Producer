import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenFatherMotherSisterBrotherExpansionDefinitions = [
  {
    id: "scenario_father_mother_sister_brother_2025",
    title: "Father Mother Sister Brother",
    originalTitle: "Father Mother Sister Brother",
    aliases: [],
    year: 2025,
    titleType: "Movie",
    runtimeMins: 110,
    directors: ["Jim Jarmusch"],
    genres: ["Comedy", "Drama"],
    sourceId: "father_mother_sister_brother_official_2025",
    sourceUrl: "https://www.labiennale.org/en/cinema/2025/venezia-82-competition/father-mother-sister-brother",
    scenarioType: "award_priority_venice_2025_golden_lion_triptych_us_ireland_france_multi_unit_dp_split_ten_days_per_section_1_85_dcp_5_1_independent_coproduction_uncertainty_bounded",
    premise: "Build Father Mother Sister Brother as the final correctionOrder-10 top-prize source-first Production Case for Chapter 19. The 2025 Venice competition record identifies Jim Jarmusch as writer-director; a 110-minute USA/Ireland/France production; Frederick Elmes and Yorick Le Saux as cinematographers; Affonso Gonçalves as editor; Mark Friedberg and Marco Bittner Rosser as production designers; Catherine George as costume designer; and Robert Hein for sound. The Match Factory independently locks 110 minutes, 1.85:1, DCP and 5.1, plus badjetlag, CG Cinema and Hail Mary Pictures in the production structure and the wider presentation/association network. Screen Ireland locks Dublin as the Irish location, Hail Mary Pictures as the Irish production company, public support and named financing partners. Jarmusch told Film Comment that each of the three sections had about ten shooting days, with Frederick Elmes and Mark Friedberg handling the New Jersey section and Yorick Le Saux plus Marco Bittner Rosser handling the Ireland and Paris sections. Saint Laurent's official production page describes the film as a carefully constructed triptych: Father in the northeastern United States, Mother in Dublin and Sister Brother in Paris. Contemporary trade reporting also records the New Jersey location as constrained by a union-radius budget boundary. The production case therefore treats the film as one feature assembled through three geographically distinct units with deliberate craft continuity and variation. It locks the source-backed credits, section geography, approximate ten-day-per-section schedule, DP/production-design split, 1.85 DCP/5.1 delivery and transnational financing/co-production structure while refusing to invent camera bodies, lenses, capture format, filtration, lighting packages, exact total budget, partner recoupment shares, complete insurance/union deal terms, full data workflow, edit hardware, detailed sound-recording chain, ADR/Foley architecture, grading system, VFX census or delivery-master lineage beyond the sourced DCP/5.1 facts.",
    requiredChoicesSeed: {
      screenplay: ["triptych_structure", "three_family_variations", "section_specific_geography", "quiet_observational_tone", "union_radius_budget_constraint"],
      camera: ["frederick_elmes_new_jersey", "yorick_le_saux_dublin_paris", "ratio_1_85_verified", "camera_package_unresolved"],
      editing: ["affonso_goncalves_verified", "triptych_continuity_and_difference", "section_transitions", "edit_infrastructure_unresolved"],
      sound: ["robert_hein_verified", "5_1_verified", "three_location_sound_continuity", "recording_chain_unresolved"],
      themes: ["film_history", "2025", "venice_golden_lion", "jim_jarmusch", "triptych", "new_jersey", "dublin", "paris", "transnational_coproduction", "independent_production", "chapter19"]
    },
    learningGoals: [
      "Explain why Father Mother Sister Brother must be a new Atlas/PV identity rather than a reuse-only festival correction.",
      "Lock 2025 as the Chapter 19 film and Venice award year.",
      "Identify Jim Jarmusch as writer and director.",
      "Use the official triptych structure rather than treating the film as three unrelated shorts.",
      "Map Father to the northeastern United States, Mother to Dublin and Sister Brother to Paris.",
      "Use 110 minutes as the locked production-case runtime.",
      "Use 1.85:1 as the documented aspect ratio without reverse-engineering lens or sensor choices.",
      "Use DCP as the documented format without inferring the original capture format.",
      "Use 5.1 as the documented sound format without inventing stems or monitoring architecture.",
      "Identify Frederick Elmes as cinematographer for the New Jersey section.",
      "Identify Yorick Le Saux as cinematographer for the Dublin and Paris sections.",
      "Identify Mark Friedberg as production designer for the New Jersey section.",
      "Identify Marco Bittner Rosser as production designer for the Irish and French sections.",
      "Identify Affonso Gonçalves as editor across the feature.",
      "Identify Catherine George as costume designer.",
      "Identify Robert Hein as the documented sound designer/sound credit anchor.",
      "Recognize Jim Jarmusch and Anika as the documented music creators.",
      "Use Jarmusch's approximately ten shooting days per section as a bounded schedule fact.",
      "Do not convert three approximate ten-day section schedules into an invented exact master schedule.",
      "Explain why a multi-country triptych creates unit-to-unit continuity challenges in image, design, performance and sound.",
      "Recognize badjetlag, CG Cinema and Hail Mary Pictures in the documented production structure.",
      "Recognize Screen Ireland support and named financiers without inventing financing shares.",
      "Recognize MUBI, Saint Laurent and The Apartment/Fremantle within the documented presentation/association structure.",
      "Explain how the New Jersey union-radius constraint can affect location choice and budget without extrapolating unknown labor terms.",
      "Distinguish production geography from production-company nationality lists.",
      "Keep exact budget, cash-flow schedule, ownership and recoupment waterfall unresolved.",
      "Keep camera body, lens set, filtration, codec, media and data-management details unresolved.",
      "Keep exact lighting fixtures, exposure strategy and power-distribution details unresolved.",
      "Keep edit hardware, storage, project architecture, conform and backup workflow unresolved.",
      "Keep detailed production-sound equipment, ADR/Foley architecture, grading platform and VFX census unresolved.",
      "Close the case only when triptych structure, geography, schedule, credited craft split, technical delivery and uncertainty boundaries agree."
    ],
    phases: [
      { id: "award_priority", label: "Lock the 2025 Golden Lion obligation", player_task: "Treat Venice 2025 as historical selection priority, not as evidence for unsupported production detail." },
      { id: "triptych_structure", label: "Design one feature as three sections", player_task: "Preserve the Father / Mother / Sister Brother structure as one coordinated production system." },
      { id: "new_jersey_unit", label: "Build the New Jersey section", player_task: "Lock Elmes and Friedberg to the first section and preserve the sourced union-radius location constraint." },
      { id: "dublin_unit", label: "Build the Dublin section", player_task: "Lock Le Saux and Bittner Rosser to the Irish section with Screen Ireland/Hail Mary production context." },
      { id: "paris_unit", label: "Build the Paris section", player_task: "Carry the Le Saux/Bittner Rosser craft unit into the French section without flattening location difference." },
      { id: "schedule", label: "Bound the section schedules", player_task: "Use about ten shooting days per section without inventing an exact total master schedule." },
      { id: "screenplay", label: "Protect triptych repetition and variation", player_task: "Use Jarmusch's written structure to coordinate three family encounters without forcing identical beats." },
      { id: "performance", label: "Coordinate ensemble tone", player_task: "Maintain quiet observational comedy/melancholy across separate casts and countries." },
      { id: "cinematography_split", label: "Coordinate two DPs", player_task: "Preserve Elmes/New Jersey and Le Saux/Dublin-Paris as a documented craft split." },
      { id: "frame_delivery", label: "Lock 1.85 DCP", player_task: "Use the documented 1.85:1 DCP delivery while leaving capture package unresolved." },
      { id: "production_design_split", label: "Coordinate two production designers", player_task: "Preserve Friedberg/New Jersey and Bittner Rosser/Ireland-Paris while keeping the triptych coherent." },
      { id: "costume", label: "Lock costume authorship", player_task: "Use Catherine George's credited role without inventing an unsourced wardrobe workflow." },
      { id: "editing", label: "Assemble the triptych", player_task: "Use Gonçalves's verified edit role to manage continuity, contrast and transitions across sections." },
      { id: "sound", label: "Build cross-location sound continuity", player_task: "Use Hein and 5.1 as verified anchors while leaving the detailed recording/post chain open." },
      { id: "music", label: "Place the documented music authors", player_task: "Use Jarmusch and Anika's music credit without inventing session or licensing detail." },
      { id: "coproduction", label: "Map transnational production partners", player_task: "Separate production, co-production, presentation and financing roles without inventing shares." },
      { id: "labor_budget_boundary", label: "Respect the New Jersey labor-radius constraint", player_task: "Treat the sourced union-radius choice as a budget/location constraint, not a full labor-contract record." },
      { id: "technical_boundary", label: "Freeze unsupported technical claims", player_task: "Keep cameras, lenses, light, media, data, grading and VFX details unresolved unless directly sourced." },
      { id: "finance_boundary", label: "Freeze unsupported finance claims", player_task: "Do not infer budget, ownership, cash flow or recoupment percentages from partner lists." },
      { id: "production_verification", label: "Close the festival top-prize case", player_task: "Verify one unique scenario, full 17-area Film Study, PV identity and removal from the festival corrective queue." }
    ]
  }
] as const;

export function mergeChapterNineteenFatherMotherSisterBrotherExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenFatherMotherSisterBrotherExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_father_mother_sister_brother_verified",
      source: { list_id: "manual_chapter_nineteen_father_mother_sister_brother_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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

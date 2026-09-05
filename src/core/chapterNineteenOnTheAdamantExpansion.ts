import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenOnTheAdamantExpansionDefinitions = [
  {
    id: "scenario_on_the_adamant_2023",
    title: "On the Adamant",
    originalTitle: "Sur l'Adamant",
    aliases: ["Sur l’Adamant"],
    year: 2023,
    productionYear: 2022,
    titleType: "Movie",
    runtimeMins: 109,
    directors: ["Nicolas Philibert"],
    genres: ["Documentary"],
    sourceId: "nicolas_philibert_sur_ladamant",
    sourceUrl: "https://www.nicolasphilibert.fr/en/films/sur-ladamant/",
    scenarioType: "award_priority_berlinale_2023_golden_bear_france_japan_production_year_2022_film_year_2023_observational_documentary_small_crew_single_operator_trust_improvisation_editing_sound_1_85_5_1_109_min_uncertainty_bounded",
    premise: "Build On the Adamant / Sur l'Adamant as a new Chapter 19 source-first Production Case while keeping two chronology fields separate. The Chapter 19 festival manifest uses filmYear 2023 because the film entered the 2023 Berlinale cycle and won the Golden Bear there; Unifrance independently records productionYear 2022. Production year must therefore remain 2022 and must never be rewritten to 2023 merely to satisfy the Chapter 19 matching key. Nicolas Philibert's production page identifies the France/Japan film, 109-minute runtime and 1.85 ratio; credits Philibert for camera and editing, Erik Ménard and François Abdelnour for sound, Nathalie Vidal for sound editing and mix, Christophe Bousquet for grading, Miléna Poylo, Gilles Sacuto and Céline Loiseau as producers, Norio Hatano as co-producer, and TS Productions, France 3 cinéma and Longride in the co-production structure. Unifrance independently records 2022 as production year, 1.85 and 5.1. Philibert's official press material describes filming across several stages from May to November 2021 with isolated days in early 2022, a deliberately small crew, Philibert often operating alone, selected two-camera situations and more than one hundred hours of material. Those records support a production method built around availability, trust, observation and improvisation rather than a rigid pre-scripted encounter system. BFI's critical documentation supports the film's observational, portrait-based movement among meetings, workshops, collective life and individual encounters. The 2023 Golden Bear establishes historical selection and reception priority, not production-year evidence. The playable case therefore locks the documented chronology, 109-minute version, France/Japan co-production, credited image/sound/edit/color roles, small-crew observational method, 1.85 and 5.1 delivery facts while refusing to invent an exact total shoot-day count, camera body, lenses, filters, media, data workflow, lighting package, complete budget or financing shares, consent-release ledger, production-sound equipment chain, ADR/Foley infrastructure, grading system, VFX census or complete delivery-master lineage.",
    requiredChoicesSeed: {
      screenplay: ["production_year_2022_film_year_2023", "observational_structure_not_scripted_fiction", "trust_consent_and_availability", "golden_bear_not_production_year", "finance_boundary"],
      camera: ["nicolas_philibert_camera_verified", "small_crew_single_operator", "selected_two_camera_days", "ratio_1_85_verified", "camera_package_unresolved"],
      editing: ["nicolas_philibert_editor_verified", "daily_life_and_intimate_portrait_balance", "hundred_plus_hours_source_material", "edit_infrastructure_unresolved"],
      sound: ["erik_menard_francois_abdelnour_verified", "nathalie_vidal_sound_edit_mix_verified", "5_1_master_verified", "production_audio_chain_unresolved"],
      themes: ["film_history", "production_2022", "film_year_2023", "on_the_adamant", "sur_ladamant", "france", "japan", "berlinale_2023", "documentary", "observation", "psychiatry", "ethics", "chapter19"]
    },
    learningGoals: [
      "Separate Unifrance's 2022 production year from Chapter 19's 2023 film/festival year.",
      "Explain why the 2023 Golden Bear establishes festival priority and reception rather than production dating.",
      "Identify Nicolas Philibert as director, camera operator and editor in the locked production record.",
      "Use 109 minutes as the source-backed runtime while recognizing that some catalogues round duration differently.",
      "Use 1.85 as the documented aspect ratio without inferring camera sensor or lens geometry.",
      "Use 5.1 as a documented sound-format fact without inventing the underlying track, stem or monitoring architecture.",
      "Identify France and Japan as the documented co-producing countries.",
      "Identify Miléna Poylo, Gilles Sacuto and Céline Loiseau as producers in the official production record.",
      "Identify Norio Hatano as the documented co-producer without inferring an ownership or recoupment share.",
      "Recognize TS Productions, France 3 cinéma and Longride as documented co-production entities.",
      "Keep total budget, partner shares, cash flow and recoupment waterfall unresolved.",
      "Identify Erik Ménard and François Abdelnour in the documented sound crew.",
      "Identify Nathalie Vidal for sound editing and mix and keep production recording separate from post sound.",
      "Identify Christophe Bousquet for color grading without inventing grading software, display or transform details.",
      "Explain how a deliberately small crew supported observational access without treating smallness as automatic ethical virtue.",
      "Distinguish Philibert operating alone in some situations from a claim that the whole film was made by one person.",
      "Recognize selected two-camera situations without generalizing them to the complete shoot.",
      "Place the documented May-November 2021 filming stages and isolated early-2022 days inside a 2022 production-year record.",
      "Keep exact total shooting-day count, call sheets, overtime and company-move records unresolved.",
      "Explain why documentary availability and contingency can shape schedule and scene construction.",
      "Treat trust, consent and requests not to be filmed as production constraints rather than decorative ethics language.",
      "Recognize meetings, workshops, collective life and individual portraits as recurring observational material.",
      "Explain why more than one hundred hours of source material makes editing a major structuring phase.",
      "Keep edit hardware, storage, project architecture, conform and backup details unresolved.",
      "Keep exact camera body, lens set, filtration, codec, media and data-management workflow unresolved.",
      "Keep exact lighting fixtures, exposure records and power-distribution method unresolved.",
      "Do not infer a VFX-free pipeline merely because the film is observational documentary.",
      "Keep complete rights, releases, safeguarding and medical-confidentiality paperwork unresolved unless directly sourced.",
      "Distinguish an institutional mental-health setting from a clinical claim about any participant.",
      "Use filmmaker, institutional catalogue, festival and critical sources for distinct evidentiary purposes.",
      "Close the case only when production year, film/festival year, runtime, co-production, credits, documentary method and uncertainty boundaries agree."
    ],
    phases: [
      { id: "year_boundary", label: "Separate production and film years", player_task: "Lock productionYear 2022 and Chapter 19 filmYear 2023 as different fields." },
      { id: "award_priority", label: "Lock the 2023 Golden Bear", player_task: "Use the prize for historical priority, never as production-year or workflow proof." },
      { id: "runtime_ratio", label: "Lock runtime and frame", player_task: "Use 109 minutes and 1.85 without reverse-engineering the camera package." },
      { id: "coproduction_identity", label: "Map France/Japan production", player_task: "Lock the documented producers, co-producer and production entities while leaving financial shares open." },
      { id: "observational_method", label: "Build around observation", player_task: "Let contingency, access and availability shape the nonfiction production plan." },
      { id: "trust_and_consent", label: "Protect access and refusal", player_task: "Treat consent boundaries and requests not to be filmed as active production constraints." },
      { id: "small_crew", label: "Use a small crew deliberately", player_task: "Preserve documented small-team practice without claiming every scene used the same staffing." },
      { id: "camera_role", label: "Lock Philibert on camera", player_task: "Use the verified camera role while leaving bodies, lenses and media unresolved." },
      { id: "two_camera_boundary", label: "Bound two-camera use", player_task: "Use two cameras only where the source supports selected situations." },
      { id: "shooting_chronology", label: "Map filming stages", player_task: "Place May-November 2021 and isolated early-2022 days inside the 2022 production record without inventing total day count." },
      { id: "collective_observation", label: "Observe shared life", player_task: "Build meetings, workshops and collective activity as recurring nonfiction material." },
      { id: "portrait_observation", label: "Protect individual encounters", player_task: "Balance intimate portraits with participant agency and uncertainty." },
      { id: "editing", label: "Structure the accumulated material", player_task: "Use Philibert's verified editing role and the large source-material volume without inventing edit infrastructure." },
      { id: "sound_recording", label: "Lock recorded sound roles", player_task: "Use Ménard and Abdelnour's verified credits while leaving equipment-chain details open." },
      { id: "sound_post", label: "Separate sound post", player_task: "Lock Nathalie Vidal's sound editing/mix role and 5.1 format without inventing stems or room configuration." },
      { id: "grading", label: "Lock grading credit", player_task: "Use Christophe Bousquet's grading credit without inferring the color pipeline." },
      { id: "finance_boundary", label: "Freeze unknown financing", player_task: "Do not infer budget, ownership shares or recoupment from co-production credits." },
      { id: "rights_boundary", label: "Freeze undocumented rights records", player_task: "Do not invent complete releases, confidentiality or safeguarding paperwork." },
      { id: "technical_boundary", label: "Freeze unsupported technical detail", player_task: "Keep camera, lighting, data, VFX and delivery-master details unresolved where sources do not establish them." },
      { id: "production_verification", label: "Close On the Adamant audit", player_task: "Verify chronology, runtime, credits, co-production, observational method, sound format and uncertainty boundaries." }
    ]
  }
] as const;

export function mergeChapterNineteenOnTheAdamantExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenOnTheAdamantExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_on_the_adamant_verified",
      source: { list_id: "manual_chapter_nineteen_on_the_adamant_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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

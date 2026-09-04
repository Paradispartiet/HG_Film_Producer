import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenDrommerExpansionDefinitions = [
  {
    id: "scenario_drommer_2024",
    title: "Drømmer",
    originalTitle: "Drømmer",
    aliases: ["Dreams", "Dreams (Sex Love)", "Dreams (Sex, Love)"],
    year: 2024,
    titleType: "Movie",
    runtimeMins: 110,
    directors: ["Dag Johan Haugerud"],
    genres: ["Drama"],
    sourceId: "nfi_drommer_2024",
    sourceUrl: "https://www.nfi.no/filmer-og-serier/drommer",
    scenarioType: "award_priority_berlinale_2025_golden_bear_norway_2024_motlys_public_support_intimate_first_person_writing_trilogy_compressed_production_cinematography_editing_collaboration_digital_dcp_110_min_uncertainty_bounded",
    premise: "Build Drømmer as Chapter 19 corrective case #2 by separating film year from award year. Norwegian Film Institute records the film as a 2024 Norwegian feature from Motlys AS, directed and written by Dag Johan Haugerud, produced by Yngve Sæther and Hege Hauff Hvattum, released in Norway on 4 October 2024 and running 110 minutes. NFI records NOK 6,350,000 in production support; this is one public-support component and must not be inflated into a complete budget, equity structure, broadcaster contribution or recoupment waterfall. The Berlinale's 2025 awards archive records Drømmer as the Golden Bear for Best Film, awarded to producers Sæther and Hvattum. That 2025 prize establishes festival priority and reception, not a 2025 film year and not craft proof. Berlinale competition material identifies the Norwegian film as a 2024 work shown in international premiere. Rushprint's direct conversation with cinematographer Cecilie Semec and editor Jens Christian Fodstad identifies both as central collaborators across Sex, Drømmer and Kjærlighet, describes three features moving through one calendar year and emphasizes that the compressed process depended on precise communication, an open collaborative climate and deliberately different visual approaches across the trilogy. Karlovy Vary's festival record independently credits Semec for cinematography, Fodstad for editing, Anna Berg for music, Yvonne Stenberg and Gisle Tveito for sound, Tuva Hølmebakk for art direction, Sæther and Hvattum as producers, Motlys as production company and Oslo Filmfond as co-production partner. Montages' close analysis documents Drømmer's first-person voice-over, strong close-up emphasis, comparatively guiding editorial flow and the texture of the central apartment; those observations are useful for formal study but do not substitute for production records. The playable case therefore locks the documented production identity, public-support boundary, 110-minute version, credited departments and cinematography-editing collaboration while refusing to invent an exact shooting calendar, day count, camera body, lenses, filtration, lighting package, data workflow, complete set/costume/makeup ledgers, production-sound chain, ADR/Foley/mix infrastructure, music-session ledger, VFX census, final budget or financing waterfall.",
    requiredChoicesSeed: {
      screenplay: ["film_year_2024_award_year_2025", "first_person_written_memory", "intimacy_and_intergenerational_reading", "festival_award_not_workflow_evidence", "finance_boundary"],
      camera: ["cecilie_semec_verified", "close_performance_attention", "trilogy_visual_differentiation", "camera_package_unresolved"],
      editing: ["jens_christian_fodstad_verified", "voiceover_picture_structure", "compressed_trilogy_collaboration", "edit_infrastructure_unresolved"],
      sound: ["gisle_tveito_yvonne_stenberg_verified", "voice_and_intimacy", "anna_berg_music_separate", "full_audio_chain_unresolved"],
      themes: ["film_history", "2024", "drommer", "norway", "motlys", "berlinale_2025", "public_support", "first_love", "writing", "chapter19"]
    },
    learningGoals: [
      "Separate Drømmer's 2024 film year from its 2025 Berlinale award year.",
      "Explain why the Golden Bear establishes selection priority and reception rather than production workflow.",
      "Identify Dag Johan Haugerud as director and screenwriter.",
      "Identify Yngve Sæther and Hege Hauff Hvattum as producers for Motlys AS.",
      "Use 4 October 2024 as the documented Norwegian premiere date.",
      "Use 110 minutes as the documented NFI runtime.",
      "Treat NOK 6,350,000 as NFI production support rather than total budget.",
      "Keep complete equity, broadcaster, co-finance, cash-flow and recoupment data unresolved.",
      "Recognize Drømmer as one part of Haugerud's Sex–Drømmer–Kjærlighet trilogy without treating trilogy branding as a production specification.",
      "Identify Cecilie Semec as cinematographer through direct craft discussion and festival credits.",
      "Identify Jens Christian Fodstad as editor through direct craft discussion and festival credits.",
      "Explain why three features moving through one calendar year increased the importance of precise communication.",
      "Explain the documented open collaboration between cinematography and editing without claiming the departments became one role.",
      "Recognize that the trilogy deliberately pursued different styles while retaining recurring collaborators.",
      "Keep exact camera body, lens, filtration, media and data specifications unresolved.",
      "Keep exact lighting fixtures, power distribution and exposure records unresolved.",
      "Identify Tuva Hølmebakk as the credited art-direction/production-design lead in the locked festival record.",
      "Keep construction, dressing, prop and complete continuity ledgers unresolved.",
      "Keep full costume and makeup continuity records unresolved.",
      "Recognize first-person voice-over and written testimony as central formal systems in Drømmer.",
      "Distinguish formal analysis of close-ups and editorial guidance from documentary proof of equipment or schedule.",
      "Identify Yvonne Stenberg and Gisle Tveito as credited sound collaborators.",
      "Identify Anna Berg as credited composer.",
      "Keep production sound, ADR, Foley, premix, final mix and delivery specifications unresolved.",
      "Keep complete music recording, orchestration, cue and licensing records unresolved.",
      "Recognize Oslo Filmfond as a documented co-production partner without inferring its exact financial share.",
      "Keep exact shooting dates, number of shooting days, overtime and company-move records unresolved.",
      "Keep stunt, intimacy-coordination, safeguarding and special-effects ledgers unresolved unless sourced.",
      "Keep VFX shot count, vendors and conform pipeline unresolved.",
      "Use award, production, craft and formal-analysis sources for distinct evidentiary purposes.",
      "Close the case only when year, award, runtime, producers, public support, department credits and uncertainty boundaries agree."
    ],
    phases: [
      { id: "year_boundary", label: "Separate film and award years", player_task: "Lock 2024 as film year and 2025 as Berlinale award year." },
      { id: "award_priority", label: "Lock the Golden Bear", player_task: "Use the prize for historical priority, never as craft proof." },
      { id: "runtime", label: "Lock the 110-minute version", player_task: "Use the NFI runtime without inventing alternate-master lineage." },
      { id: "production_identity", label: "Map Motlys", player_task: "Lock Haugerud, Sæther, Hvattum and the documented production company." },
      { id: "public_support", label: "Bound the NFI grant", player_task: "Keep NOK 6.35m separate from the unknown total budget." },
      { id: "trilogy_context", label: "Place the trilogy", player_task: "Use the three-film context without turning it into unsupported workflow detail." },
      { id: "screenplay_voice", label: "Build written memory", player_task: "Treat Johanne's writing and first-person voice as structural production requirements." },
      { id: "performance", label: "Protect intimate performance", player_task: "Plan coverage around close interpersonal attention without inventing rehearsal records." },
      { id: "cinematography", label: "Lock Semec's role", player_task: "Use the verified cinematography credit and collaboration evidence while leaving the camera package open." },
      { id: "visual_difference", label: "Differentiate the trilogy", player_task: "Preserve the documented intention for distinct visual styles across the three films." },
      { id: "production_design", label: "Lock Hølmebakk's role", player_task: "Use the verified design credit while keeping construction and continuity ledgers open." },
      { id: "editing", label: "Lock Fodstad's role", player_task: "Shape voice-over, close attention and narrative guidance through the verified editing collaboration." },
      { id: "compressed_process", label: "Coordinate a compressed slate", player_task: "Treat precise communication as a production constraint across three films in one calendar year." },
      { id: "sound", label: "Separate sound from music", player_task: "Keep Stenberg/Tveito sound and Berg music as distinct credited systems." },
      { id: "finance_boundary", label: "Freeze unknown financing", player_task: "Do not infer total budget or recoupment from public-support records." },
      { id: "schedule_boundary", label: "Freeze unknown schedule", player_task: "Do not invent shoot dates or day count from the trilogy's compressed calendar." },
      { id: "camera_boundary", label: "Freeze unknown camera package", player_task: "Do not infer bodies, lenses, filters or media from screen appearance." },
      { id: "post_boundary", label: "Freeze unknown post chain", player_task: "Keep edit infrastructure, VFX, color, audio and delivery specifics open unless sourced." },
      { id: "production_verification", label: "Close Drømmer audit", player_task: "Verify film year, award year, runtime, production identity, credits, public support and uncertainty boundaries." }
    ]
  }
] as const;

export function mergeChapterNineteenDrommerExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenDrommerExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_drommer_verified",
      source: { list_id: "manual_chapter_nineteen_drommer_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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

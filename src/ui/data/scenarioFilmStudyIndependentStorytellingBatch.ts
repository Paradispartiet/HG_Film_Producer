import {
  completeFilmStudyCoverage,
  getFilmHistoryEra,
  summarizeFilmStudyCoverage,
  type FilmStudyCoverageOverride,
} from "../../core/filmStudyCoverage";
import type { FilmScenarioSeed } from "./filmScenarios";
import {
  getIndependentStorytellingCatalogProfile,
  getIndependentStorytellingDonors,
  getIndependentStorytellingProfileGroup,
  type IndependentStorytellingProfileGroup,
} from "./scenarioFilmStudyIndependentStorytellingCatalog";
import type {
  FilmHistoryChoice,
  FilmHistoryProfile,
  ScenarioFilmStudyMap,
} from "./scenarioFilmStudyMap";
import {
  getPriorityIndieFinalDonors,
  getPriorityIndieFinalProfile,
} from "./scenarioFilmStudyPriorityIndieFinalCatalog";
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";
import { getProductionCaseVerification } from "./scenarioProductionVerificationRegistry";

function statusRank(status: FilmStudyCoverageOverride["status"]): number {
  if (status === "source_verified") return 4;
  if (status === "mapped") return 3;
  if (status === "not_central") return 2;
  return 1;
}

function mergeCoverageOverrides(
  ...overrideSets: readonly (readonly FilmStudyCoverageOverride[])[]
): readonly FilmStudyCoverageOverride[] {
  const merged = new Map<string, FilmStudyCoverageOverride>();
  for (const overrides of overrideSets) {
    for (const override of overrides) {
      const existing = merged.get(override.area);
      if (!existing || statusRank(override.status) >= statusRank(existing.status)) {
        merged.set(override.area, override);
      }
    }
  }
  return [...merged.values()];
}

function briefOverrides(brief: ScenarioProductionBrief): readonly FilmStudyCoverageOverride[] {
  return [
    { area: "screenplay", status: "mapped", note: brief.screenplayTargets.join(" · ") },
    { area: "cinematography", status: "mapped", note: brief.cinematographyTargets.join(" · ") },
    { area: "editing", status: "mapped", note: brief.editingTargets.join(" · ") },
    { area: "sound_design", status: "mapped", note: brief.soundTargets.join(" · ") },
  ];
}

function profileOverrides(profile: FilmHistoryProfile): readonly FilmStudyCoverageOverride[] {
  return [
    { area: "historical_context", status: "source_verified", note: profile.period },
    { area: "movement_and_tradition", status: "source_verified", note: profile.traditions.join(" · ") },
    { area: "industry_and_production_context", status: "source_verified", note: profile.moment },
    {
      area: "reception_and_legacy",
      status: profile.technicalHighlights.find((item) => item.area === "reception_and_legacy")?.status ?? "mapped",
      note: profile.after,
    },
    ...profile.technicalHighlights,
  ];
}

export function getIndependentStorytellingFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return getPriorityIndieFinalProfile(scenarioId)
    ?? getIndependentStorytellingCatalogProfile(scenarioId);
}

export function resolveIndependentStorytellingFilmStudyMap(
  scenario: FilmScenarioSeed,
  brief: ScenarioProductionBrief,
): ScenarioFilmStudyMap | undefined {
  const historyProfile = getIndependentStorytellingFilmHistoryProfile(scenario.id);
  if (!historyProfile) return undefined;
  const verification = getProductionCaseVerification(scenario.id);
  const coverage = completeFilmStudyCoverage(mergeCoverageOverrides(
    briefOverrides(brief),
    profileOverrides(historyProfile),
  ));
  return {
    scenarioId: scenario.id,
    title: scenario.film.title,
    year: scenario.film.year,
    broadEra: getFilmHistoryEra(scenario.film.year),
    historyStatus: "source_backed",
    historyProfile,
    coverage,
    coverageSummary: summarizeFilmStudyCoverage(coverage),
    verification,
  };
}

function hashString(value: string): number {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }
  return hash;
}

function partialFeedback(group: IndependentStorytellingProfileGroup): string {
  const feedback: Record<IndependentStorytellingProfileGroup, string> = {
    general: "This is a real independent storytelling system, but it belongs to another balance of place, genre, memory, documentary evidence, performance and visual construction.",
    south_korean_genre: "This is a real South Korean production system, but it organizes historical pressure, performance, genre, location, effects, editing and sound differently.",
    south_southeast_asian: "This is a real South or Southeast Asian production system, but it organizes institution, performance, landscape, duration, genre and sound differently.",
    hong_kong_taiwan_urban_time: "This is a real Hong Kong or Taiwan urban-time system, but it organizes memory, architecture, duration, performance, music and exhibition space differently.",
    chinese_language_space_genre: "This is a real Chinese-language production system, but it organizes ritual, geography, historical genre, violence, duration and immersive space differently.",
    chinese_language_modernity_memory: "This is a real Chinese-language modernity-and-memory system, but it organizes urban change, family history, opera performance, provincial duration, ellipsis and sound differently.",
    asian_landscape_grief_attention: "This is a real Asian landscape, grief-and-attention system, but it organizes mythic transformation, redevelopment, spiritual crisis, moral observation, performance, duration and sound differently.",
    subjective_enclosure_performance: "This is a real subjective-enclosure and performed-identity system, but it organizes restricted viewpoint, duration, political impersonation, creative labour, architecture, scale and sound differently.",
    family_performance_grief_power: "This is a real family-performance, grief-and-verbal-power system, but it organizes devised behaviour, musical rupture, bereavement routine, long argument, domestic space and sound differently.",
    body_archive_restitution_perspective: "This is a real bodily-risk, activist-archive, restitution-and-perspective system, but it organizes embodied procedure, personal archive, institutional return, first-person camera, editing and sound differently.",
    queer_independent_body_community_archive: "This is a real queer independent body, community-and-archive system, but it organizes romance, testimony, illness, self-performance, historical absence, media mixture and social space differently.",
    american_precarity_body_care: "This is a real American precarity, body-and-care system, but it organizes economic procedure, injury, sensory viewpoint, reproductive access, regional space, performance, editing and sound differently.",
    american_independent_genre_resourcefulness: "This is a real American independent genre-and-resourcefulness system, but it organizes noir misunderstanding, verbal ensemble comedy, nonlinear chamber crime, DIY action, restricted locations, editing and sound differently.",
    independent_desire_identity_authorship: "This is a real independent desire, identity-and-authorship system, but it organizes genre fragmentation, adolescent embodiment, social code-switching, autobiographical memory, performance, image texture and sound differently.",
    american_regional_identity_place_belonging: "This is a real American regional identity, place-and-belonging system, but it organizes impersonation, migration, family economy, childhood memory, landscape, narration, ensemble performance and sound differently.",
    asian_transnational_urban_identity: "This is a real Asian transnational urban-identity system, but it organizes migration, labour, romance, surveillance, time and belonging differently.",
    japanese_ambiguity_dialogue: "This is a real Japanese ambiguity-and-dialogue production system, but it organizes hypnosis, coincidence, institutional viewpoint, environmental procedure, performance and sound differently.",
  };
  return feedback[group];
}

function missFeedback(group: IndependentStorytellingProfileGroup): string {
  const feedback: Record<IndependentStorytellingProfileGroup, string> = {
    general: "This places the film inside the wrong historical relationship between place, narration, media mixture, performance and image-making.",
    south_korean_genre: "This places the film inside the wrong South Korean historical and production logic.",
    south_southeast_asian: "This places the film inside the wrong South or Southeast Asian institutional and production logic.",
    hong_kong_taiwan_urban_time: "This places the film inside the wrong Hong Kong or Taiwan relationship between city, memory, duration and spectatorship.",
    chinese_language_space_genre: "This places the film inside the wrong Chinese-language relationship between history, space, violence, genre and cinematic duration.",
    chinese_language_modernity_memory: "This places the film inside the wrong Chinese-language relationship between modernisation, political memory, performance tradition, provincial life and historical time.",
    asian_landscape_grief_attention: "This places the film inside the wrong relationship between Asian landscape, loss, social change, moral attention, performance and sensory form.",
    subjective_enclosure_performance: "This places the film inside the wrong relationship between enclosure, social power, performed identity, authorship, duration and visual control.",
    family_performance_grief_power: "This places the film inside the wrong relationship between family behaviour, fantasy, bereavement, argument, class power and everyday space.",
    body_archive_restitution_perspective: "This places the film inside the wrong relationship between bodily autonomy, activist memory, restitution, historical violence, camera subjectivity and institutional power.",
    queer_independent_body_community_archive: "This places the film inside the wrong relationship between queer authorship, bodily experience, chosen community, archival absence, media form and independent production.",
    american_precarity_body_care: "This places the film inside the wrong relationship between economic vulnerability, bodily limitation, care systems, mobility, sensory form and practical access.",
    american_independent_genre_resourcefulness: "This places the film inside the wrong relationship between independent financing, genre revision, restricted resources, information control, location reuse, editorial construction and sound-driven scale.",
    independent_desire_identity_authorship: "This places the film inside the wrong relationship between desire, identity formation, social presentation, memory reconstruction, artistic voice, embodied viewpoint and independent authorship.",
    american_regional_identity_place_belonging: "This places the film inside the wrong relationship between regional production, race, migration, family belonging, institutional identity, landscape, community memory and local material life.",
    asian_transnational_urban_identity: "This places the film inside the wrong relationship between Asian city, displacement, divided identity, social systems and return.",
    japanese_ambiguity_dialogue: "This places the film inside the wrong Japanese relationship between uncertainty, conversation, institutional pressure, landscape and moral interpretation.",
  };
  return feedback[group];
}

export function createIndependentStorytellingFilmHistoryChoices(
  profile: FilmHistoryProfile,
): readonly FilmHistoryChoice[] {
  const priorityDonors = getPriorityIndieFinalDonors(profile);
  const group = getIndependentStorytellingProfileGroup(profile.scenarioId);
  const donors = priorityDonors ?? getIndependentStorytellingDonors(profile);
  const start = hashString(profile.scenarioId);
  const near = donors[start % donors.length];
  const far = donors[(start + 1) % donors.length];
  const priorityPartial = "This is another final priority-independent system, but it organizes comic alienation, architectural attention or abrasive regional hustle through a different balance of design, performance, place, editing and sound.";
  const priorityMiss = "This places the film inside the wrong relationship between American independent production, designed environment, regional observation, social performance, analogue or spatial form and audience identification.";
  return [
    {
      id: `${profile.scenarioId}-history-match`,
      label: `${profile.period}: ${profile.moment}`,
      quality: "match",
      feedback: "This connects the film's historical position directly to its documented relationship between place, narrative structure, image system, media form and production method.",
    },
    ...(near ? [{
      id: `${profile.scenarioId}-history-partial`,
      label: `${near.period}: ${near.moment}`,
      quality: "partial" as const,
      feedback: priorityDonors ? priorityPartial : partialFeedback(group),
    }] : []),
    ...(far ? [{
      id: `${profile.scenarioId}-history-miss`,
      label: `${far.period}: ${far.moment}`,
      quality: "miss" as const,
      feedback: priorityDonors ? priorityMiss : missFeedback(group),
    }] : []),
  ];
}

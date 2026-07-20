import type { FilmScenarioSeed } from "./filmScenarios";
import { resolveScenarioProductionBrief, type ScenarioProductionBrief } from "./scenarioProductionBriefs";
import { getProductionCaseVerification } from "./scenarioProductionVerificationRegistry";

export type FilmResearchStatus = ScenarioProductionBrief["verificationStatus"];

export type FilmResearchQueueItem = {
  readonly scenarioId: string;
  readonly title: string;
  readonly year: number;
  readonly directors: readonly string[];
  readonly status: FilmResearchStatus;
  readonly craftStatementCount: number;
  readonly learningGoalCount: number;
};

export type FilmResearchSummary = {
  readonly total: number;
  readonly verified: number;
  readonly seeded: number;
  readonly needsResearch: number;
  readonly completionPercent: number;
};

const statusPriority: Record<FilmResearchStatus, number> = {
  needs_research: 0,
  seeded: 1,
  verified: 2,
};

export function resolveFilmResearchStatus(
  scenarioId: string,
  briefStatus: FilmResearchStatus,
): FilmResearchStatus {
  return getProductionCaseVerification(scenarioId) ? "verified" : briefStatus;
}

export function createFilmResearchQueue(scenarios: readonly FilmScenarioSeed[]): readonly FilmResearchQueueItem[] {
  return scenarios
    .map((scenario) => {
      const brief = resolveScenarioProductionBrief(scenario);
      return {
        scenarioId: scenario.id,
        title: scenario.film.title,
        year: scenario.film.year,
        directors: scenario.film.directors,
        status: resolveFilmResearchStatus(scenario.id, brief.verificationStatus),
        craftStatementCount:
          brief.screenplayTargets.length
          + brief.cinematographyTargets.length
          + brief.editingTargets.length
          + brief.soundTargets.length,
        learningGoalCount: brief.learningGoals.length,
      };
    })
    .sort((left, right) =>
      statusPriority[left.status] - statusPriority[right.status]
      || left.year - right.year
      || left.title.localeCompare(right.title),
    );
}

export function summarizeFilmResearch(queue: readonly FilmResearchQueueItem[]): FilmResearchSummary {
  const verified = queue.filter((item) => item.status === "verified").length;
  const seeded = queue.filter((item) => item.status === "seeded").length;
  const needsResearch = queue.filter((item) => item.status === "needs_research").length;
  const completionPercent = queue.length === 0 ? 0 : Math.round((verified / queue.length) * 100);

  return {
    total: queue.length,
    verified,
    seeded,
    needsResearch,
    completionPercent,
  };
}

export function labelFilmResearchStatus(status: FilmResearchStatus) {
  if (status === "verified") return "Verified";
  if (status === "seeded") return "Seeded";
  return "Needs research";
}

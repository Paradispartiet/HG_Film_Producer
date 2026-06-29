export const productionCaseProgressStorageKey = "hg_film_production_case_progress_v1";
export const productionCaseBestResultsStorageKey = "hg_film_production_case_best_results_v1";
export const productionCaseLibraryControlsStorageKey = "hg_film_production_case_library_controls_v1";

export type ProductionCaseProgressEntry = {
  readonly scenarioId: string;
  readonly completedMissionIds: readonly string[];
  readonly selectedChoicesByMissionId?: Readonly<Record<string, string>>;
  readonly updatedAt?: string;
};

export type ProductionCaseProgressState = Record<string, ProductionCaseProgressEntry>;

export type ProductionCaseBestResultTier = "assistant" | "producer" | "auteur";

export type ProductionCaseBestResultEntry = {
  readonly scenarioId: string;
  readonly bestScore: number;
  readonly maxScore: number;
  readonly bestTier: ProductionCaseBestResultTier;
  readonly bestMatchedCount: number;
  readonly completedAt: string;
  readonly updatedAt: string;
};

export type ProductionCaseBestResultsState = Record<string, ProductionCaseBestResultEntry>;

export type ProductionCaseProgressStorage = Pick<StorageLike, "getItem" | "setItem" | "removeItem">;

type StorageLike = {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
};


function normalizeBestResultEntry(scenarioId: string, value: unknown): ProductionCaseBestResultEntry | undefined {
  if (!value || typeof value !== "object") return undefined;
  const maybeEntry = value as Partial<ProductionCaseBestResultEntry>;
  if (typeof maybeEntry.bestScore !== "number" || typeof maybeEntry.maxScore !== "number") return undefined;
  if (!isProductionCaseBestResultTier(maybeEntry.bestTier)) return undefined;
  if (typeof maybeEntry.bestMatchedCount !== "number") return undefined;
  if (typeof maybeEntry.completedAt !== "string" || typeof maybeEntry.updatedAt !== "string") return undefined;

  return {
    scenarioId,
    bestScore: maybeEntry.bestScore,
    maxScore: maybeEntry.maxScore,
    bestTier: maybeEntry.bestTier,
    bestMatchedCount: maybeEntry.bestMatchedCount,
    completedAt: maybeEntry.completedAt,
    updatedAt: maybeEntry.updatedAt,
  };
}

export function parseProductionCaseBestResults(rawValue: string | null): ProductionCaseBestResultsState {
  if (!rawValue) return {};

  try {
    const parsed = JSON.parse(rawValue) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};

    return Object.fromEntries(
      Object.entries(parsed).flatMap(([scenarioId, value]) => {
        const entry = normalizeBestResultEntry(scenarioId, value);
        return entry ? [[scenarioId, entry]] : [];
      }),
    );
  } catch {
    return {};
  }
}

export function readProductionCaseBestResults(storage: ProductionCaseProgressStorage): ProductionCaseBestResultsState {
  return parseProductionCaseBestResults(storage.getItem(productionCaseBestResultsStorageKey));
}

export function writeProductionCaseBestResults(
  storage: ProductionCaseProgressStorage,
  state: ProductionCaseBestResultsState,
): void {
  if (Object.keys(state).length === 0) {
    storage.removeItem(productionCaseBestResultsStorageKey);
    return;
  }

  storage.setItem(productionCaseBestResultsStorageKey, JSON.stringify(state));
}

export function getProductionCaseBestResultEntry(
  state: ProductionCaseBestResultsState,
  scenarioId: string,
): ProductionCaseBestResultEntry | undefined {
  return state[scenarioId];
}

function isProductionCaseBestResultTier(tier: unknown): tier is ProductionCaseBestResultTier {
  return tier === "assistant" || tier === "producer" || tier === "auteur";
}

function getProductionCaseBestResultTierRank(tier: ProductionCaseBestResultTier): number {
  return tier === "auteur" ? 3 : tier === "producer" ? 2 : 1;
}

function isProductionCaseBestResultBetter(
  candidate: ProductionCaseBestResultEntry,
  current: ProductionCaseBestResultEntry | undefined,
): boolean {
  if (!current) return true;
  if (candidate.bestScore !== current.bestScore) return candidate.bestScore > current.bestScore;
  return getProductionCaseBestResultTierRank(candidate.bestTier) >= getProductionCaseBestResultTierRank(current.bestTier);
}

export function updateProductionCaseBestResult(
  scenarioId: string,
  report: ProductionCaseReport | undefined,
  storage: ProductionCaseProgressStorage,
  updatedAt = new Date().toISOString(),
): ProductionCaseBestResultEntry | undefined {
  if (!report) return undefined;
  if (report.completedCount !== report.totalMissions) return undefined;
  if (report.maxScore <= 0) return undefined;
  if (!isProductionCaseBestResultTier(report.resultTier)) return undefined;

  const state = readProductionCaseBestResults(storage);
  const current = state[scenarioId];
  const candidate: ProductionCaseBestResultEntry = {
    scenarioId,
    bestScore: report.score,
    maxScore: report.maxScore,
    bestTier: report.resultTier,
    bestMatchedCount: report.matchedPhases.length,
    completedAt: current?.completedAt ?? updatedAt,
    updatedAt,
  };

  if (!isProductionCaseBestResultBetter(candidate, current)) return undefined;

  const nextState = { ...state, [scenarioId]: candidate };
  writeProductionCaseBestResults(storage, nextState);
  return candidate;
}

function normalizeEntry(scenarioId: string, value: unknown): ProductionCaseProgressEntry {
  if (!value || typeof value !== "object") {
    return { scenarioId, completedMissionIds: [] };
  }

  const maybeEntry = value as Partial<ProductionCaseProgressEntry>;
  const completedMissionIds = Array.isArray(maybeEntry.completedMissionIds)
    ? [...new Set(maybeEntry.completedMissionIds.filter((id): id is string => typeof id === "string"))]
    : [];
  const selectedChoicesByMissionId = maybeEntry.selectedChoicesByMissionId && typeof maybeEntry.selectedChoicesByMissionId === "object"
    ? Object.fromEntries(
        Object.entries(maybeEntry.selectedChoicesByMissionId).filter(
          (entry): entry is [string, string] => typeof entry[1] === "string",
        ),
      )
    : undefined;

  return {
    scenarioId,
    completedMissionIds,
    ...(selectedChoicesByMissionId && Object.keys(selectedChoicesByMissionId).length > 0 ? { selectedChoicesByMissionId } : {}),
    ...(typeof maybeEntry.updatedAt === "string" ? { updatedAt: maybeEntry.updatedAt } : {}),
  };
}

export function parseProductionCaseProgress(rawValue: string | null): ProductionCaseProgressState {
  if (!rawValue) return {};

  try {
    const parsed = JSON.parse(rawValue) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};

    return Object.fromEntries(
      Object.entries(parsed).map(([scenarioId, value]) => [
        scenarioId,
        normalizeEntry(scenarioId, value),
      ]),
    );
  } catch {
    return {};
  }
}

export function readProductionCaseProgress(storage: ProductionCaseProgressStorage): ProductionCaseProgressState {
  return parseProductionCaseProgress(storage.getItem(productionCaseProgressStorageKey));
}

export function getProductionCaseProgressEntry(
  state: ProductionCaseProgressState,
  scenarioId: string,
): ProductionCaseProgressEntry {
  return state[scenarioId] ?? { scenarioId, completedMissionIds: [] };
}

export function setProductionCaseMissionCompletion(
  state: ProductionCaseProgressState,
  scenarioId: string,
  missionId: string,
  completed: boolean,
  updatedAt = new Date().toISOString(),
): ProductionCaseProgressState {
  const entry = getProductionCaseProgressEntry(state, scenarioId);
  const missionIds = completed
    ? [...new Set([...entry.completedMissionIds, missionId])]
    : entry.completedMissionIds.filter((id) => id !== missionId);

  return {
    ...state,
    [scenarioId]: {
      scenarioId,
      completedMissionIds: missionIds,
      ...(entry.selectedChoicesByMissionId ? { selectedChoicesByMissionId: entry.selectedChoicesByMissionId } : {}),
      updatedAt,
    },
  };
}

export function setProductionCaseMissionChoice(
  state: ProductionCaseProgressState,
  scenarioId: string,
  missionId: string,
  choiceId: string,
  updatedAt = new Date().toISOString(),
): ProductionCaseProgressState {
  const entry = getProductionCaseProgressEntry(state, scenarioId);

  return {
    ...state,
    [scenarioId]: {
      scenarioId,
      completedMissionIds: entry.completedMissionIds,
      selectedChoicesByMissionId: {
        ...entry.selectedChoicesByMissionId,
        [missionId]: choiceId,
      },
      updatedAt,
    },
  };
}

export type ProductionCaseMissionScoreChoiceQuality = "match" | "partial" | "miss";

export type ProductionCaseScoreMission = {
  readonly id: string;
  readonly choices: readonly {
    readonly id: string;
    readonly quality: ProductionCaseMissionScoreChoiceQuality | string;
  }[];
};


export type ProductionCaseImprovementHintType = "choose" | "rethink" | "sharpen";

export type ProductionCaseImprovementHint = {
  readonly missionId: string;
  readonly phase: string;
  readonly title: string;
  readonly currentScore: number;
  readonly maxScore: number;
  readonly hintType: ProductionCaseImprovementHintType;
  readonly label: string;
  readonly description: string;
};

export type ProductionCaseImprovementHintMission = ProductionCaseScoreMission & {
  readonly phase: string;
  readonly title: string;
};

export type ProductionCaseReportMission = {
  readonly id: string;
  readonly phase: string;
  readonly title: string;
  readonly choices: readonly {
    readonly id: string;
    readonly label: string;
    readonly quality: ProductionCaseMissionScoreChoiceQuality | string;
  }[];
};

export type ProductionCaseReportMatchedPhase = {
  readonly missionId: string;
  readonly phase: string;
  readonly title: string;
  readonly selectedChoiceLabel: string;
};

export type ProductionCaseReportWeakPhase = {
  readonly missionId: string;
  readonly phase: string;
  readonly title: string;
  readonly weakness: "miss" | "partial" | "missing";
  readonly selectedChoiceLabel?: string;
};

export type ProductionCaseReport = {
  readonly completedCount: number;
  readonly totalMissions: number;
  readonly score: number;
  readonly maxScore: number;
  readonly resultTier: ProductionCaseResultTier;
  readonly matchedPhases: readonly ProductionCaseReportMatchedPhase[];
  readonly weakPhases: readonly ProductionCaseReportWeakPhase[];
  readonly improvementHint: ProductionCaseImprovementHint | undefined;
  readonly learningSummary: string;
};

function createProductionCaseImprovementHint(
  mission: ProductionCaseImprovementHintMission,
  currentScore: number,
  hintType: ProductionCaseImprovementHintType,
): ProductionCaseImprovementHint {
  const copy = {
    choose: {
      label: "Velg produksjonsgrep",
      description: "Denne fasen mangler et valgt produksjonsgrep.",
    },
    rethink: {
      label: "Revurder fasen",
      description: "Valget ditt er mindre presist for dette caset. Se på target-listen og velg grepet som best matcher filmens produksjonslogikk.",
    },
    sharpen: {
      label: "Spiss valget",
      description: "Valget ditt er delvis relevant. Spiss fasen ved å velge grepet som ligger nærmest filmens konkrete uttrykk.",
    },
  } as const satisfies Record<ProductionCaseImprovementHintType, { readonly label: string; readonly description: string }>;

  return {
    missionId: mission.id,
    phase: mission.phase,
    title: mission.title,
    currentScore,
    maxScore: 2,
    hintType,
    ...copy[hintType],
  };
}

export function getProductionCaseImprovementHint(
  missions: readonly ProductionCaseImprovementHintMission[],
  progress: Pick<ProductionCaseProgressEntry, "selectedChoicesByMissionId">,
): ProductionCaseImprovementHint | undefined {
  if (missions.length === 0) return undefined;

  const selectedChoicesByMissionId = progress.selectedChoicesByMissionId ?? {};
  const unselectedMission = missions.find((mission) => !selectedChoicesByMissionId[mission.id]);
  if (unselectedMission) return createProductionCaseImprovementHint(unselectedMission, 0, "choose");

  const missionScores = missions.map((mission) => {
    const selectedChoiceId = selectedChoicesByMissionId[mission.id];
    const selectedChoice = mission.choices.find((choice) => choice.id === selectedChoiceId);
    return { mission, score: getProductionCaseMissionScore(selectedChoice?.quality) };
  });

  const missedMission = missionScores.find(({ score }) => score === 0);
  if (missedMission) return createProductionCaseImprovementHint(missedMission.mission, missedMission.score, "rethink");

  const partialMission = missionScores.find(({ score }) => score === 1);
  if (partialMission) return createProductionCaseImprovementHint(partialMission.mission, partialMission.score, "sharpen");

  return undefined;
}

function getProductionCaseLearningSummary(
  missions: readonly ProductionCaseReportMission[],
  matchCount: number,
  resultTier: ProductionCaseResultTier,
): string {
  const missingCount = missions.length - matchCount;
  const weakFocus = missions
    .filter((mission) => mission.phase !== "case_orientation" && mission.phase !== "reflection")
    .slice(0, 3)
    .map((mission) => mission.phase)
    .join("/");

  if (resultTier === "not_started" || resultTier === "in_progress") {
    return missingCount > 0
      ? "Du har startet å kartlegge produksjonslogikken, men flere faser mangler valg."
      : "Du kartlegger produksjonslogikken og kan fullføre fasene for å låse resultatet.";
  }

  if (resultTier === "assistant") {
    return weakFocus
      ? `Du har noen riktige produksjonsvalg, men caset må spisses i ${weakFocus}.`
      : "Du har noen riktige produksjonsvalg, men caset må spisses i flere faser.";
  }

  if (resultTier === "producer") {
    return weakFocus
      ? `Du forstår flere sentrale valg, men caset kan spisses i ${weakFocus}.`
      : "Du forstår flere sentrale produksjonsvalg, men caset kan spisses videre.";
  }

  return "Du matcher filmens produksjonslogikk sterkt på tvers av fasene.";
}

export function getProductionCaseReport(
  missions: readonly ProductionCaseReportMission[],
  progress: Pick<ProductionCaseProgressEntry, "completedMissionIds" | "selectedChoicesByMissionId">,
): ProductionCaseReport | undefined {
  if (missions.length === 0) return undefined;

  const selectedChoicesByMissionId = progress.selectedChoicesByMissionId ?? {};
  const completedCount = missions.filter((mission) => progress.completedMissionIds.includes(mission.id)).length;
  const scoreSummary = getProductionCaseScoreSummary(missions, progress);
  const resultTier = getProductionCaseResultTier(scoreSummary, completedCount);
  if (!resultTier) return undefined;

  const matchedPhases = missions.flatMap<ProductionCaseReportMatchedPhase>((mission) => {
    const selectedChoiceId = selectedChoicesByMissionId[mission.id];
    const selectedChoice = mission.choices.find((choice) => choice.id === selectedChoiceId);
    if (selectedChoice?.quality !== "match") return [];

    return [{
      missionId: mission.id,
      phase: mission.phase,
      title: mission.title,
      selectedChoiceLabel: selectedChoice.label,
    }];
  });

  const weaknessRank = { miss: 0, partial: 1, missing: 2 } as const;
  const weakPhases = missions
    .flatMap<ProductionCaseReportWeakPhase>((mission) => {
      const selectedChoiceId = selectedChoicesByMissionId[mission.id];
      const selectedChoice = mission.choices.find((choice) => choice.id === selectedChoiceId);
      if (!selectedChoice) {
        return [{ missionId: mission.id, phase: mission.phase, title: mission.title, weakness: "missing" }];
      }
      if (selectedChoice.quality !== "partial" && selectedChoice.quality !== "miss") return [];
      return [{
        missionId: mission.id,
        phase: mission.phase,
        title: mission.title,
        weakness: selectedChoice.quality,
        selectedChoiceLabel: selectedChoice.label,
      }];
    })
    .sort((a, b) => weaknessRank[a.weakness] - weaknessRank[b.weakness])
    .slice(0, 3);

  return {
    completedCount,
    totalMissions: missions.length,
    score: scoreSummary.score,
    maxScore: scoreSummary.maxScore,
    resultTier,
    matchedPhases,
    weakPhases,
    improvementHint: getProductionCaseImprovementHint(missions, progress),
    learningSummary: getProductionCaseLearningSummary(missions, matchedPhases.length, resultTier),
  };
}

export type ProductionCaseScoreSummary = {
  readonly score: number;
  readonly maxScore: number;
};

export type ProductionCaseResultTier = "not_started" | "in_progress" | "assistant" | "producer" | "auteur";
export type ProductionCaseLibraryStatusFilter = "all" | "not_started" | "in_progress" | "completed";
export type ProductionCaseMasteryFilter = "all" | "not_completed_best" | "assistant_best" | "producer_best" | "auteur_best" | "can_improve";
export type ProductionCaseLibrarySortMode = "default" | "title_asc" | "best_score_desc" | "best_score_asc" | "recent_best";
export type ProductionCaseLibraryControls = {
  readonly caseStatusFilter: ProductionCaseLibraryStatusFilter;
  readonly masteryFilter: ProductionCaseMasteryFilter;
  readonly sortMode: ProductionCaseLibrarySortMode;
  readonly searchQuery: string;
};
export const defaultProductionCaseLibraryControls: ProductionCaseLibraryControls = {
  caseStatusFilter: "all",
  masteryFilter: "all",
  sortMode: "default",
  searchQuery: "",
};
export type ProductionCaseLibraryStatus = {
  readonly label: string;
  readonly tier: ProductionCaseResultTier;
  readonly completedCount: number;
  readonly missionCount: number;
  readonly score?: ProductionCaseScoreSummary;
};

export type ProductionCaseCollectionSummary = {
  readonly totalCases: number;
  readonly notStartedCount: number;
  readonly inProgressCount: number;
  readonly completedCount: number;
  readonly assistantCount: number;
  readonly producerCount: number;
  readonly auteurCount: number;
  readonly totalScore: number;
  readonly maxScore: number;
};

export type ProductionCaseCareerSummary = {
  readonly totalCases: number;
  readonly completedBestCount: number;
  readonly notCompletedBestCount: number;
  readonly assistantBestCount: number;
  readonly producerBestCount: number;
  readonly auteurBestCount: number;
  readonly bestTotalScore: number;
  readonly bestMaxScore: number;
};

type ProductionCaseCareerSummaryStatus = (ProductionCaseLibraryStatus & { readonly scenarioId?: string }) | undefined;

export type ProductionCaseAchievement = {
  readonly id: string;
  readonly label: string;
  readonly description: string;
  readonly unlocked: boolean;
  readonly progressLabel: string;
};

export const productionCaseResultTierLabels = {
  not_started: "Ikke startet",
  in_progress: "Under arbeid",
  assistant: "Assistent",
  producer: "Produsent",
  auteur: "Auteur",
} as const satisfies Record<ProductionCaseResultTier, string>;

export function getProductionCaseResultTier(
  scoreSummary: ProductionCaseScoreSummary,
  completedCount: number,
): ProductionCaseResultTier | undefined {
  if (scoreSummary.maxScore <= 0) return undefined;
  if (completedCount === 0 && scoreSummary.score === 0) return "not_started";

  const totalMissionCount = scoreSummary.maxScore / 2;
  if (completedCount < totalMissionCount) return "in_progress";

  const scoreRatio = scoreSummary.score / scoreSummary.maxScore;
  if (scoreRatio < 0.5) return "assistant";
  if (scoreRatio < 0.84) return "producer";
  return "auteur";
}

export function getProductionCaseMissionScore(
  choiceQuality: ProductionCaseMissionScoreChoiceQuality | string | undefined,
): number {
  if (choiceQuality === "match") return 2;
  if (choiceQuality === "partial") return 1;
  return 0;
}

export function getProductionCaseScoreSummary(
  missions: readonly ProductionCaseScoreMission[],
  progress: Pick<ProductionCaseProgressEntry, "selectedChoicesByMissionId">,
): ProductionCaseScoreSummary {
  const selectedChoicesByMissionId = progress.selectedChoicesByMissionId ?? {};
  const score = missions.reduce((total, mission) => {
    const selectedChoiceId = selectedChoicesByMissionId[mission.id];
    const selectedChoice = mission.choices.find((choice) => choice.id === selectedChoiceId);
    return total + getProductionCaseMissionScore(selectedChoice?.quality);
  }, 0);

  return {
    score,
    maxScore: missions.length * 2,
  };
}

export function getProductionCaseLibraryStatus(
  missions: readonly ProductionCaseScoreMission[],
  progress: Pick<ProductionCaseProgressEntry, "completedMissionIds" | "selectedChoicesByMissionId">,
): ProductionCaseLibraryStatus | undefined {
  const scoreSummary = getProductionCaseScoreSummary(missions, progress);
  const completedCount = missions.filter((mission) => progress.completedMissionIds.includes(mission.id)).length;
  const tier = getProductionCaseResultTier(scoreSummary, completedCount);
  if (!tier) return undefined;

  return {
    label: productionCaseResultTierLabels[tier],
    tier,
    completedCount,
    missionCount: missions.length,
    ...(progress.selectedChoicesByMissionId && Object.keys(progress.selectedChoicesByMissionId).length > 0
      ? { score: scoreSummary }
      : {}),
  };
}

export function getProductionCaseCollectionSummary(
  statuses: readonly (ProductionCaseLibraryStatus | undefined)[],
): ProductionCaseCollectionSummary {
  return statuses.reduce<ProductionCaseCollectionSummary>((summary, status) => {
    if (!status) return summary;

    const isCompleted = ["assistant", "producer", "auteur"].includes(status.tier);

    return {
      totalCases: summary.totalCases + 1,
      notStartedCount: summary.notStartedCount + (status.tier === "not_started" ? 1 : 0),
      inProgressCount: summary.inProgressCount + (status.tier === "in_progress" ? 1 : 0),
      completedCount: summary.completedCount + (isCompleted ? 1 : 0),
      assistantCount: summary.assistantCount + (status.tier === "assistant" ? 1 : 0),
      producerCount: summary.producerCount + (status.tier === "producer" ? 1 : 0),
      auteurCount: summary.auteurCount + (status.tier === "auteur" ? 1 : 0),
      totalScore: summary.totalScore + (status.score?.score ?? 0),
      maxScore: summary.maxScore + (status.score?.maxScore ?? status.missionCount * 2),
    };
  }, {
    totalCases: 0,
    notStartedCount: 0,
    inProgressCount: 0,
    completedCount: 0,
    assistantCount: 0,
    producerCount: 0,
    auteurCount: 0,
    totalScore: 0,
    maxScore: 0,
  });
}

export function getProductionCaseCareerSummary(
  statuses: readonly ProductionCaseCareerSummaryStatus[],
  bestResults: ProductionCaseBestResultsState,
): ProductionCaseCareerSummary {
  const productionCaseStatuses = statuses.filter((status): status is ProductionCaseLibraryStatus & { readonly scenarioId?: string } => Boolean(status));
  const productionCaseIds = new Set(
    productionCaseStatuses
      .map((status) => status.scenarioId)
      .filter((scenarioId): scenarioId is string => typeof scenarioId === "string" && scenarioId.length > 0),
  );
  const scopedBestResults = productionCaseStatuses.length === 0
    ? []
    : Object.values(bestResults).filter((bestResult) => (
        productionCaseIds.size === 0 || productionCaseIds.has(bestResult.scenarioId)
      ));

  const completedBestCount = scopedBestResults.length;

  return {
    totalCases: productionCaseStatuses.length,
    completedBestCount,
    notCompletedBestCount: Math.max(productionCaseStatuses.length - completedBestCount, 0),
    assistantBestCount: scopedBestResults.filter((bestResult) => bestResult.bestTier === "assistant").length,
    producerBestCount: scopedBestResults.filter((bestResult) => bestResult.bestTier === "producer").length,
    auteurBestCount: scopedBestResults.filter((bestResult) => bestResult.bestTier === "auteur").length,
    bestTotalScore: scopedBestResults.reduce((total, bestResult) => total + bestResult.bestScore, 0),
    bestMaxScore: scopedBestResults.reduce((total, bestResult) => total + bestResult.maxScore, 0),
  };
}

const productionCaseAchievementDefinitions = [
  { id: "first-case", label: "Første case", description: "Fullfør én production case.", target: 1, getValue: (summary: ProductionCaseCareerSummary) => summary.completedBestCount },
  { id: "five-cases", label: "Fem cases", description: "Fullfør fem production cases.", target: 5, getValue: (summary: ProductionCaseCareerSummary) => summary.completedBestCount },
  { id: "ten-cases", label: "Ti cases", description: "Fullfør ti production cases.", target: 10, getValue: (summary: ProductionCaseCareerSummary) => summary.completedBestCount },
  { id: "first-producer", label: "Første Produsent", description: "Oppnå Produsent eller Auteur i én production case.", target: 1, getValue: (summary: ProductionCaseCareerSummary) => summary.producerBestCount + summary.auteurBestCount },
  { id: "first-auteur", label: "Første Auteur", description: "Oppnå Auteur i én production case.", target: 1, getValue: (summary: ProductionCaseCareerSummary) => summary.auteurBestCount },
  { id: "auteur-series", label: "Auteur-serie", description: "Oppnå Auteur i fem production cases.", target: 5, getValue: (summary: ProductionCaseCareerSummary) => summary.auteurBestCount },
  { id: "half-catalogue", label: "Halv katalog", description: "Fullfør 80 production cases.", target: 80, getValue: (summary: ProductionCaseCareerSummary) => summary.completedBestCount },
  { id: "full-catalogue", label: "Hele katalogen", description: "Fullfør alle 161 production cases.", target: 161, getValue: (summary: ProductionCaseCareerSummary) => summary.completedBestCount },
] as const;

export function getProductionCaseAchievements(
  summary: ProductionCaseCareerSummary,
): readonly ProductionCaseAchievement[] {
  return productionCaseAchievementDefinitions.map((achievement) => {
    const value = Math.min(achievement.getValue(summary), achievement.target);

    return {
      id: achievement.id,
      label: achievement.label,
      description: achievement.description,
      unlocked: value >= achievement.target,
      progressLabel: `${value}/${achievement.target}`,
    };
  });
}

export type ProductionCaseNextActionType = "continue" | "improve" | "start" | "master" | "complete";

export type ProductionCaseNextActionStatus = ProductionCaseLibraryStatus & {
  readonly scenarioId: string;
  readonly title: string;
};

export type ProductionCaseNextAction = {
  readonly scenarioId: string;
  readonly title: string;
  readonly actionType: ProductionCaseNextActionType;
  readonly label: string;
  readonly description: string;
};

function formatProductionCaseNextActionDescription(status: ProductionCaseNextActionStatus): string {
  const progressLabel = `${status.completedCount}/${status.missionCount} faser fullført`;
  if (!status.score) return progressLabel;
  return `${progressLabel} · Case-score ${status.score.score}/${status.score.maxScore}`;
}

function createProductionCaseNextAction(
  status: ProductionCaseNextActionStatus,
  actionType: ProductionCaseNextActionType,
  label: string,
): ProductionCaseNextAction {
  return {
    scenarioId: status.scenarioId,
    title: status.title,
    actionType,
    label,
    description: formatProductionCaseNextActionDescription(status),
  };
}

export function getProductionCaseNextAction(
  statuses: readonly (ProductionCaseNextActionStatus | undefined)[],
): ProductionCaseNextAction | undefined {
  const manualStatuses = statuses.filter((status): status is ProductionCaseNextActionStatus => Boolean(status));
  if (manualStatuses.length === 0) return undefined;

  const inProgress = manualStatuses.find((status) => status.tier === "in_progress");
  if (inProgress) return createProductionCaseNextAction(inProgress, "continue", "Fortsett case");

  const assistant = manualStatuses.find((status) => status.tier === "assistant");
  if (assistant) return createProductionCaseNextAction(assistant, "improve", "Forbedre resultat");

  const notStarted = manualStatuses.find((status) => status.tier === "not_started");
  if (notStarted) return createProductionCaseNextAction(notStarted, "start", "Start nytt case");

  const producer = manualStatuses.find((status) => status.tier === "producer");
  if (producer) return createProductionCaseNextAction(producer, "master", "Jakt Auteur");

  const firstStatus = manualStatuses[0];
  if (!firstStatus) return undefined;

  return {
    scenarioId: firstStatus.scenarioId,
    title: firstStatus.title,
    actionType: "complete",
    label: "Katalog mestret",
    description: "Alle production cases er fullført på høyeste nivå.",
  };
}


export type ProductionCaseLibrarySortableCard = {
  readonly scenario: {
    readonly film: { readonly title: string };
  };
  readonly bestResult?: Pick<ProductionCaseBestResultEntry, "bestScore" | "updatedAt"> | undefined;
};

const productionCaseLibraryStatusFilterValues = new Set<ProductionCaseLibraryStatusFilter>(["all", "not_started", "in_progress", "completed"]);
const productionCaseMasteryFilterValues = new Set<ProductionCaseMasteryFilter>(["all", "not_completed_best", "assistant_best", "producer_best", "auteur_best", "can_improve"]);
const productionCaseLibrarySortModeValues = new Set<ProductionCaseLibrarySortMode>(["default", "title_asc", "best_score_desc", "best_score_asc", "recent_best"]);

function isProductionCaseLibraryStatusFilter(value: unknown): value is ProductionCaseLibraryStatusFilter {
  return typeof value === "string" && productionCaseLibraryStatusFilterValues.has(value as ProductionCaseLibraryStatusFilter);
}

function isProductionCaseMasteryFilter(value: unknown): value is ProductionCaseMasteryFilter {
  return typeof value === "string" && productionCaseMasteryFilterValues.has(value as ProductionCaseMasteryFilter);
}

function isProductionCaseLibrarySortMode(value: unknown): value is ProductionCaseLibrarySortMode {
  return typeof value === "string" && productionCaseLibrarySortModeValues.has(value as ProductionCaseLibrarySortMode);
}

export function parseProductionCaseLibraryControls(rawValue: string | null): ProductionCaseLibraryControls {
  if (!rawValue) return defaultProductionCaseLibraryControls;

  try {
    const parsed = JSON.parse(rawValue) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return defaultProductionCaseLibraryControls;
    const maybeControls = parsed as Partial<ProductionCaseLibraryControls>;

    return {
      caseStatusFilter: isProductionCaseLibraryStatusFilter(maybeControls.caseStatusFilter)
        ? maybeControls.caseStatusFilter
        : defaultProductionCaseLibraryControls.caseStatusFilter,
      masteryFilter: isProductionCaseMasteryFilter(maybeControls.masteryFilter)
        ? maybeControls.masteryFilter
        : defaultProductionCaseLibraryControls.masteryFilter,
      sortMode: isProductionCaseLibrarySortMode(maybeControls.sortMode)
        ? maybeControls.sortMode
        : defaultProductionCaseLibraryControls.sortMode,
      searchQuery: typeof maybeControls.searchQuery === "string"
        ? maybeControls.searchQuery
        : defaultProductionCaseLibraryControls.searchQuery,
    };
  } catch {
    return defaultProductionCaseLibraryControls;
  }
}

export function readProductionCaseLibraryControls(storage: Pick<StorageLike, "getItem">): ProductionCaseLibraryControls {
  return parseProductionCaseLibraryControls(storage.getItem(productionCaseLibraryControlsStorageKey));
}

export function writeProductionCaseLibraryControls(
  storage: Pick<StorageLike, "setItem">,
  controls: ProductionCaseLibraryControls,
): void {
  storage.setItem(productionCaseLibraryControlsStorageKey, JSON.stringify(controls));
}

export function sortProductionCaseLibraryCards<T extends ProductionCaseLibrarySortableCard>(
  cards: readonly T[],
  sortMode: ProductionCaseLibrarySortMode,
): T[] {
  const indexedCards = cards.map((card, index) => ({ card, index }));
  if (sortMode === "default") return indexedCards.map(({ card }) => card);

  return indexedCards
    .sort((left, right) => {
      const leftBestResult = left.card.bestResult;
      const rightBestResult = right.card.bestResult;

      if (sortMode === "title_asc") {
        return left.card.scenario.film.title.localeCompare(right.card.scenario.film.title, "nb", { sensitivity: "base" })
          || left.index - right.index;
      }

      if (sortMode === "best_score_desc") {
        if (!leftBestResult && !rightBestResult) return left.index - right.index;
        if (!leftBestResult) return 1;
        if (!rightBestResult) return -1;
        return rightBestResult.bestScore - leftBestResult.bestScore || left.index - right.index;
      }

      if (sortMode === "best_score_asc") {
        if (!leftBestResult && !rightBestResult) return left.index - right.index;
        if (!leftBestResult) return -1;
        if (!rightBestResult) return 1;
        return leftBestResult.bestScore - rightBestResult.bestScore || left.index - right.index;
      }

      if (!leftBestResult && !rightBestResult) return left.index - right.index;
      if (!leftBestResult) return 1;
      if (!rightBestResult) return -1;
      return Date.parse(rightBestResult.updatedAt) - Date.parse(leftBestResult.updatedAt) || left.index - right.index;
    })
    .map(({ card }) => card);
}

export function productionCaseLibraryStatusMatchesFilter(
  status: Pick<ProductionCaseLibraryStatus, "tier"> | undefined,
  filter: ProductionCaseLibraryStatusFilter,
): boolean {
  if (filter === "all") return true;
  if (!status) return false;
  if (filter === "completed") return ["assistant", "producer", "auteur"].includes(status.tier);
  return status.tier === filter;
}

export function productionCaseMasteryFilterMatches(
  status: Pick<ProductionCaseLibraryStatus, "tier"> | undefined,
  bestResult: Pick<ProductionCaseBestResultEntry, "bestTier"> | undefined,
  filter: ProductionCaseMasteryFilter,
): boolean {
  if (filter === "all") return true;
  if (!status) return false;

  if (filter === "not_completed_best") return !bestResult;
  if (filter === "can_improve") return !bestResult || bestResult.bestTier === "assistant" || bestResult.bestTier === "producer";
  if (!bestResult) return false;
  if (filter === "assistant_best") return bestResult.bestTier === "assistant";
  if (filter === "producer_best") return bestResult.bestTier === "producer";
  return bestResult.bestTier === "auteur";
}

export function getProductionCaseMissionScoreSummary(
  mission: ProductionCaseScoreMission,
  selectedChoiceId: string | undefined,
): ProductionCaseScoreSummary {
  const selectedChoice = mission.choices.find((choice) => choice.id === selectedChoiceId);
  return {
    score: getProductionCaseMissionScore(selectedChoice?.quality),
    maxScore: 2,
  };
}

export function countProductionCaseMatches(
  selectedChoicesByMissionId: Readonly<Record<string, string>> | undefined,
  missions: readonly { readonly id: string; readonly choices: readonly { readonly id: string; readonly quality: string }[] }[],
): { readonly matchCount: number; readonly selectedCount: number } {
  let matchCount = 0;
  let selectedCount = 0;

  for (const mission of missions) {
    const selectedChoiceId = selectedChoicesByMissionId?.[mission.id];
    if (!selectedChoiceId) continue;
    const selectedChoice = mission.choices.find((choice) => choice.id === selectedChoiceId);
    if (!selectedChoice) continue;
    selectedCount += 1;
    if (selectedChoice.quality === "match") matchCount += 1;
  }

  return { matchCount, selectedCount };
}

export function resetProductionCaseScenarioProgress(
  state: ProductionCaseProgressState,
  scenarioId: string,
): ProductionCaseProgressState {
  const { [scenarioId]: _removed, ...remaining } = state;
  return remaining;
}

export function writeProductionCaseProgress(
  storage: ProductionCaseProgressStorage,
  state: ProductionCaseProgressState,
): void {
  if (Object.keys(state).length === 0) {
    storage.removeItem(productionCaseProgressStorageKey);
    return;
  }

  storage.setItem(productionCaseProgressStorageKey, JSON.stringify(state));
}

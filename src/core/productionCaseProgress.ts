export const productionCaseProgressStorageKey = "hg_film_production_case_progress_v1";

export type ProductionCaseProgressEntry = {
  readonly scenarioId: string;
  readonly completedMissionIds: readonly string[];
  readonly selectedChoicesByMissionId?: Readonly<Record<string, string>>;
  readonly updatedAt?: string;
};

export type ProductionCaseProgressState = Record<string, ProductionCaseProgressEntry>;

export type ProductionCaseProgressStorage = Pick<StorageLike, "getItem" | "setItem" | "removeItem">;

type StorageLike = {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
};

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

export type ProductionCaseScoreSummary = {
  readonly score: number;
  readonly maxScore: number;
};

export type ProductionCaseResultTier = "not_started" | "in_progress" | "assistant" | "producer" | "auteur";
export type ProductionCaseLibraryStatusFilter = "all" | "not_started" | "in_progress" | "completed";
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

const productionCaseAchievementDefinitions = [
  { id: "first-case", label: "Første case", description: "Fullfør én production case.", target: 1, getValue: (summary: ProductionCaseCollectionSummary) => summary.completedCount },
  { id: "five-cases", label: "Fem cases", description: "Fullfør fem production cases.", target: 5, getValue: (summary: ProductionCaseCollectionSummary) => summary.completedCount },
  { id: "ten-cases", label: "Ti cases", description: "Fullfør ti production cases.", target: 10, getValue: (summary: ProductionCaseCollectionSummary) => summary.completedCount },
  { id: "first-producer", label: "Første Produsent", description: "Oppnå Produsent eller Auteur i én production case.", target: 1, getValue: (summary: ProductionCaseCollectionSummary) => summary.producerCount + summary.auteurCount },
  { id: "first-auteur", label: "Første Auteur", description: "Oppnå Auteur i én production case.", target: 1, getValue: (summary: ProductionCaseCollectionSummary) => summary.auteurCount },
  { id: "auteur-series", label: "Auteur-serie", description: "Oppnå Auteur i fem production cases.", target: 5, getValue: (summary: ProductionCaseCollectionSummary) => summary.auteurCount },
  { id: "half-catalogue", label: "Halv katalog", description: "Fullfør 80 production cases.", target: 80, getValue: (summary: ProductionCaseCollectionSummary) => summary.completedCount },
  { id: "full-catalogue", label: "Hele katalogen", description: "Fullfør alle 161 production cases.", target: 161, getValue: (summary: ProductionCaseCollectionSummary) => summary.completedCount },
] as const;

export function getProductionCaseAchievements(
  summary: ProductionCaseCollectionSummary,
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

export function productionCaseLibraryStatusMatchesFilter(
  status: Pick<ProductionCaseLibraryStatus, "tier"> | undefined,
  filter: ProductionCaseLibraryStatusFilter,
): boolean {
  if (filter === "all") return true;
  if (!status) return false;
  if (filter === "completed") return ["assistant", "producer", "auteur"].includes(status.tier);
  return status.tier === filter;
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

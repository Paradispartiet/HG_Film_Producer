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

export const productionCaseProgressStorageKey = "hg_film_production_case_progress_v1";

export type ProductionCaseProgressEntry = {
  readonly scenarioId: string;
  readonly completedMissionIds: readonly string[];
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

  return {
    scenarioId,
    completedMissionIds,
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
      updatedAt,
    },
  };
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

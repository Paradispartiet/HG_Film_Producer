export const productionCaseProgressStorageKey = "hg_film_production_case_progress_v1";
export const productionCaseLibraryControlsStorageKey = "hg_film_production_case_library_controls_v1";
const legacyProductionCaseBestResultsStorageKey = "hg_film_production_case_best_results_v1";

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
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { scenarioId, completedMissionIds: [] };
  }

  const maybeEntry = value as Partial<ProductionCaseProgressEntry>;
  const completedMissionIds = Array.isArray(maybeEntry.completedMissionIds)
    ? [...new Set(maybeEntry.completedMissionIds.filter((id): id is string => typeof id === "string" && id.trim().length > 0))]
    : [];
  const selectedChoicesByMissionId = maybeEntry.selectedChoicesByMissionId && typeof maybeEntry.selectedChoicesByMissionId === "object"
    ? Object.fromEntries(
        Object.entries(maybeEntry.selectedChoicesByMissionId).filter(
          (entry): entry is [string, string] => typeof entry[1] === "string" && entry[1].trim().length > 0,
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
      Object.entries(parsed).map(([scenarioId, value]) => [scenarioId, normalizeEntry(scenarioId, value)]),
    );
  } catch {
    return {};
  }
}

export function readProductionCaseProgress(storage: Pick<StorageLike, "getItem">): ProductionCaseProgressState {
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

export function resetProductionCaseScenarioProgress(
  state: ProductionCaseProgressState,
  scenarioId: string,
): ProductionCaseProgressState {
  const { [scenarioId]: _removed, ...remaining } = state;
  return remaining;
}

function removeLegacyProductionCaseScoreState(storage: Pick<StorageLike, "removeItem">): void {
  storage.removeItem(legacyProductionCaseBestResultsStorageKey);
}

export function writeProductionCaseProgress(
  storage: ProductionCaseProgressStorage,
  state: ProductionCaseProgressState,
): void {
  removeLegacyProductionCaseScoreState(storage);
  if (Object.keys(state).length === 0) {
    storage.removeItem(productionCaseProgressStorageKey);
    return;
  }

  storage.setItem(productionCaseProgressStorageKey, JSON.stringify(state));
}

export type ProductionCaseLibraryStatusFilter = "all" | "not_started" | "in_progress" | "completed";
export type ProductionCaseLibrarySortMode = "default" | "title_asc";

export type ProductionCaseLibraryControls = {
  readonly caseStatusFilter: ProductionCaseLibraryStatusFilter;
  readonly sortMode: ProductionCaseLibrarySortMode;
  readonly searchQuery: string;
};

export const defaultProductionCaseLibraryControls: ProductionCaseLibraryControls = {
  caseStatusFilter: "all",
  sortMode: "default",
  searchQuery: "",
};

const productionCaseLibraryStatusFilterValues = new Set<ProductionCaseLibraryStatusFilter>([
  "all",
  "not_started",
  "in_progress",
  "completed",
]);

function isProductionCaseLibraryStatusFilter(value: unknown): value is ProductionCaseLibraryStatusFilter {
  return typeof value === "string" && productionCaseLibraryStatusFilterValues.has(value as ProductionCaseLibraryStatusFilter);
}

function normalizeProductionCaseLibrarySortMode(value: unknown): ProductionCaseLibrarySortMode {
  return value === "title_asc" ? "title_asc" : "default";
}

export function parseProductionCaseLibraryControls(rawValue: string | null): ProductionCaseLibraryControls {
  if (!rawValue) return defaultProductionCaseLibraryControls;

  try {
    const parsed = JSON.parse(rawValue) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return defaultProductionCaseLibraryControls;
    const maybeControls = parsed as Partial<ProductionCaseLibraryControls> & { readonly sortMode?: unknown };

    return {
      caseStatusFilter: isProductionCaseLibraryStatusFilter(maybeControls.caseStatusFilter)
        ? maybeControls.caseStatusFilter
        : defaultProductionCaseLibraryControls.caseStatusFilter,
      sortMode: normalizeProductionCaseLibrarySortMode(maybeControls.sortMode),
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

export type ProductionCaseLearningStatus = "not_started" | "in_progress" | "completed";

export type ProductionCaseLibraryMission = {
  readonly id: string;
  readonly choices?: readonly { readonly id: string }[];
};

export type ProductionCaseLibraryStatus = {
  readonly status: ProductionCaseLearningStatus;
  readonly label: string;
  readonly completedCount: number;
  readonly missionCount: number;
  readonly selectedCount: number;
};

export type ProductionCaseCollectionSummary = {
  readonly totalCases: number;
  readonly notStartedCount: number;
  readonly inProgressCount: number;
  readonly completedCount: number;
};

function countValidSelections(
  missions: readonly ProductionCaseLibraryMission[],
  selectedChoicesByMissionId: Readonly<Record<string, string>> | undefined,
): number {
  if (!selectedChoicesByMissionId) return 0;
  return missions.filter((mission) => {
    const selectedChoiceId = selectedChoicesByMissionId[mission.id];
    if (!selectedChoiceId) return false;
    return mission.choices ? mission.choices.some((choice) => choice.id === selectedChoiceId) : true;
  }).length;
}

export function getProductionCaseLibraryStatus(
  missions: readonly ProductionCaseLibraryMission[],
  progress: Pick<ProductionCaseProgressEntry, "completedMissionIds" | "selectedChoicesByMissionId">,
): ProductionCaseLibraryStatus | undefined {
  if (missions.length === 0) return undefined;
  const missionIds = new Set(missions.map((mission) => mission.id));
  const completedCount = [...new Set(progress.completedMissionIds)].filter((missionId) => missionIds.has(missionId)).length;
  const selectedCount = countValidSelections(missions, progress.selectedChoicesByMissionId);
  const status: ProductionCaseLearningStatus = completedCount === missions.length
    ? "completed"
    : completedCount === 0 && selectedCount === 0
      ? "not_started"
      : "in_progress";

  return {
    status,
    label: status === "completed" ? "Completed" : status === "in_progress" ? "In progress" : "Not started",
    completedCount,
    missionCount: missions.length,
    selectedCount,
  };
}

export function getProductionCaseCollectionSummary(
  statuses: readonly (ProductionCaseLibraryStatus | undefined)[],
): ProductionCaseCollectionSummary {
  return statuses.reduce<ProductionCaseCollectionSummary>((summary, status) => {
    if (!status) return summary;
    return {
      totalCases: summary.totalCases + 1,
      notStartedCount: summary.notStartedCount + (status.status === "not_started" ? 1 : 0),
      inProgressCount: summary.inProgressCount + (status.status === "in_progress" ? 1 : 0),
      completedCount: summary.completedCount + (status.status === "completed" ? 1 : 0),
    };
  }, {
    totalCases: 0,
    notStartedCount: 0,
    inProgressCount: 0,
    completedCount: 0,
  });
}

export function getNextProductionCaseId(
  orderedScenarioIds: readonly string[],
  currentScenarioId: string,
): string | undefined {
  if (orderedScenarioIds.length === 0) return undefined;
  const currentIndex = orderedScenarioIds.indexOf(currentScenarioId);
  if (currentIndex < 0) return orderedScenarioIds[0];
  return orderedScenarioIds[currentIndex + 1];
}

export const productionCaseProgressExportVersion = "hg_film_production_case_progress_export_v2";
const legacyProductionCaseProgressExportVersion = "hg_film_production_case_progress_export_v1";

export type ProductionCaseProgressExport = {
  readonly version: typeof productionCaseProgressExportVersion;
  readonly exportedAt: string;
  readonly currentProgress: ProductionCaseProgressState;
  readonly libraryControls: ProductionCaseLibraryControls;
};

export function createProductionCaseProgressExport(
  storage: Pick<StorageLike, "getItem">,
  exportedAt = new Date().toISOString(),
): ProductionCaseProgressExport {
  return {
    version: productionCaseProgressExportVersion,
    exportedAt,
    currentProgress: parseProductionCaseProgress(storage.getItem(productionCaseProgressStorageKey)),
    libraryControls: parseProductionCaseLibraryControls(storage.getItem(productionCaseLibraryControlsStorageKey)),
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function isValidProductionCaseProgressEntry(scenarioId: string, value: unknown): value is ProductionCaseProgressEntry {
  if (!isRecord(value)) return false;
  if (typeof value.scenarioId !== "string" || value.scenarioId !== scenarioId) return false;
  if (!Array.isArray(value.completedMissionIds) || !value.completedMissionIds.every((id) => typeof id === "string")) return false;
  if ("selectedChoicesByMissionId" in value && value.selectedChoicesByMissionId !== undefined) {
    if (!isRecord(value.selectedChoicesByMissionId)) return false;
    if (!Object.values(value.selectedChoicesByMissionId).every((choiceId) => typeof choiceId === "string")) return false;
  }
  if ("updatedAt" in value && value.updatedAt !== undefined && typeof value.updatedAt !== "string") return false;
  return true;
}

function isValidProductionCaseProgressState(value: unknown): value is ProductionCaseProgressState {
  return isRecord(value) && Object.entries(value).every(([scenarioId, entry]) => (
    isValidProductionCaseProgressEntry(scenarioId, entry)
  ));
}

function parseBackupLibraryControls(value: unknown): ProductionCaseLibraryControls | undefined {
  if (!isRecord(value)) return undefined;
  return parseProductionCaseLibraryControls(JSON.stringify(value));
}

type ParsedProductionCaseProgressBackup = {
  readonly exportedAt: string;
  readonly currentProgress: ProductionCaseProgressState;
  readonly libraryControls: ProductionCaseLibraryControls;
  readonly sourceVersion: typeof productionCaseProgressExportVersion | typeof legacyProductionCaseProgressExportVersion;
};

function parseProductionCaseProgressBackup(rawJson: string):
  | { readonly ok: true; readonly backup: ParsedProductionCaseProgressBackup }
  | { readonly ok: false; readonly reason: string } {
  let parsed: unknown;
  try {
    parsed = JSON.parse(rawJson) as unknown;
  } catch {
    return { ok: false, reason: "invalid_json" };
  }

  if (!isRecord(parsed)) return { ok: false, reason: "invalid_backup" };
  if (parsed.version !== productionCaseProgressExportVersion && parsed.version !== legacyProductionCaseProgressExportVersion) {
    return { ok: false, reason: "invalid_version" };
  }
  if (typeof parsed.exportedAt !== "string") return { ok: false, reason: "invalid_exported_at" };
  if (!("currentProgress" in parsed) || !("libraryControls" in parsed)) return { ok: false, reason: "missing_fields" };
  if (!isValidProductionCaseProgressState(parsed.currentProgress)) return { ok: false, reason: "invalid_current_progress" };
  const libraryControls = parseBackupLibraryControls(parsed.libraryControls);
  if (!libraryControls) return { ok: false, reason: "invalid_library_controls" };

  return {
    ok: true,
    backup: {
      exportedAt: parsed.exportedAt,
      currentProgress: parsed.currentProgress,
      libraryControls,
      sourceVersion: parsed.version,
    },
  };
}

export type ProductionCaseProgressBackupPreview =
  | {
      readonly ok: true;
      readonly exportedAt: string;
      readonly currentProgressCount: number;
      readonly hasLibraryControls: boolean;
    }
  | { readonly ok: false; readonly reason: string };

export function previewProductionCaseProgressBackup(rawJson: string): ProductionCaseProgressBackupPreview {
  const parsed = parseProductionCaseProgressBackup(rawJson);
  if (!parsed.ok) return parsed;

  return {
    ok: true,
    exportedAt: parsed.backup.exportedAt,
    currentProgressCount: Object.keys(parsed.backup.currentProgress).length,
    hasLibraryControls: true,
  };
}

export type ProductionCaseProgressImportResult =
  | {
      readonly ok: true;
      readonly importedAt: string;
      readonly counts: { readonly currentProgressCount: number };
    }
  | { readonly ok: false; readonly reason: string };

export function importProductionCaseProgressBackup(
  rawJson: string,
  storage: ProductionCaseProgressStorage,
  importedAt = new Date().toISOString(),
): ProductionCaseProgressImportResult {
  const parsed = parseProductionCaseProgressBackup(rawJson);
  if (!parsed.ok) return parsed;

  storage.setItem(productionCaseProgressStorageKey, JSON.stringify(parsed.backup.currentProgress));
  storage.setItem(productionCaseLibraryControlsStorageKey, JSON.stringify(parsed.backup.libraryControls));
  removeLegacyProductionCaseScoreState(storage);

  return {
    ok: true,
    importedAt,
    counts: { currentProgressCount: Object.keys(parsed.backup.currentProgress).length },
  };
}

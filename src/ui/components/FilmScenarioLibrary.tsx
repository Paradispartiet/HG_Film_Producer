import { useEffect, useMemo, useState } from "react";
import {
  createProductionCaseProgressExport,
  defaultProductionCaseLibraryControls,
  getProductionCaseAchievements,
  getProductionCaseBestResultEntry,
  getProductionCaseCareerSummary,
  getProductionCaseCollectionSummary,
  getProductionCaseImprovementHint,
  getProductionCaseLibraryStatus,
  getProductionCaseLibraryResultSummary,
  getProductionCaseNextAction,
  getProductionCaseProgressEntry,
  importProductionCaseProgressBackup,
  previewProductionCaseProgressBackup,
  productionCaseLibraryStatusMatchesFilter,
  productionCaseMasteryFilterMatches,
  readProductionCaseBestResults,
  readProductionCaseLibraryControls,
  readProductionCaseProgress,
  productionCaseResultTierLabels,
  sortProductionCaseLibraryCards,
  writeProductionCaseLibraryControls,
  type ProductionCaseBestResultEntry,
  type ProductionCaseBestResultsState,
  type ProductionCaseLibraryStatus,
  type ProductionCaseLibraryStatusFilter,
  type ProductionCaseMasteryFilter,
  type ProductionCaseLibrarySortMode,
  type ProductionCaseNextAction,
  type ProductionCaseNextActionStatus,
  type ProductionCaseLibraryControls,
} from "../../core/productionCaseProgress";
import {
  getClassicFilmScenarios,
  type FilmScenarioSeed,
} from "../data/filmScenarios";
import { createProductionCaseMissions, resolveScenarioProductionBrief } from "../data/scenarioProductionBriefs";

const caseStatusFilters = [
  { value: "all", label: "All" },
  { value: "not_started", label: "Not started" },
  { value: "in_progress", label: "In progress" },
  { value: "completed", label: "Completed" },
] as const satisfies readonly { readonly value: ProductionCaseLibraryStatusFilter; readonly label: string }[];

const masteryFilters = [
  { value: "all", label: "All" },
  { value: "not_completed_best", label: "No best result yet" },
  { value: "assistant_best", label: "Assistant" },
  { value: "producer_best", label: "Producer" },
  { value: "auteur_best", label: "Auteur" },
  { value: "can_improve", label: "Can be improved" },
] as const satisfies readonly { readonly value: ProductionCaseMasteryFilter; readonly label: string }[];

const sortModeOptions = [
  { value: "default", label: "Default" },
  { value: "title_asc", label: "Title A–Z" },
  { value: "best_score_desc", label: "Best score highest" },
  { value: "best_score_asc", label: "Best score lowest" },
  { value: "recent_best", label: "Recently improved" },
] as const satisfies readonly { readonly value: ProductionCaseLibrarySortMode; readonly label: string }[];


function getInitialProductionCaseLibraryControls(): ProductionCaseLibraryControls {
  if (typeof window === "undefined") return defaultProductionCaseLibraryControls;
  try {
    return readProductionCaseLibraryControls(window.localStorage);
  } catch {
    return defaultProductionCaseLibraryControls;
  }
}

export function FilmScenarioLibrary({
  onStartScenario,
}: {
  readonly onStartScenario?: (scenario: FilmScenarioSeed) => void;
}) {
  const [searchQuery, setSearchQuery] = useState(() => getInitialProductionCaseLibraryControls().searchQuery);
  const [caseStatusFilter, setCaseStatusFilter] = useState<ProductionCaseLibraryStatusFilter>(() => getInitialProductionCaseLibraryControls().caseStatusFilter);
  const [masteryFilter, setMasteryFilter] = useState<ProductionCaseMasteryFilter>(() => getInitialProductionCaseLibraryControls().masteryFilter);
  const [sortMode, setSortMode] = useState<ProductionCaseLibrarySortMode>(() => getInitialProductionCaseLibraryControls().sortMode);
  const [progressRefreshKey, setProgressRefreshKey] = useState(0);
  const [exportStatus, setExportStatus] = useState<"exported" | "ready_to_copy" | undefined>();
  const [exportFallbackJson, setExportFallbackJson] = useState("");
  const [importJson, setImportJson] = useState("");
  const [importStatus, setImportStatus] = useState<"imported" | "error" | undefined>();
  const importPreview = useMemo(() => {
    if (!importJson.trim()) return undefined;
    return previewProductionCaseProgressBackup(importJson);
  }, [importJson]);
  const scenarios = getClassicFilmScenarios();
  const progressState = useMemo(() => {
    if (typeof window === "undefined") return {};
    return readProductionCaseProgress(window.localStorage);
  }, [progressRefreshKey]);
  const bestResultsState = useMemo(() => {
    if (typeof window === "undefined") return {};
    return readProductionCaseBestResults(window.localStorage);
  }, [progressRefreshKey]);
  const normalizedSearchQuery = searchQuery.trim().toLowerCase();
  const scenarioCards = useMemo(() => {
    return scenarios.map((scenario) => ({
      scenario,
      bestResult: getScenarioCaseBestResult(scenario, bestResultsState),
      caseStatus: getScenarioCaseStatus(scenario, progressState),
    }));
  }, [bestResultsState, progressState, scenarios]);
  const collectionSummary = useMemo(() => getProductionCaseCollectionSummary(
    scenarioCards.map(({ caseStatus }) => caseStatus),
  ), [scenarioCards]);
  const careerSummary = useMemo(() => getProductionCaseCareerSummary(
    scenarioCards.map(({ caseStatus }) => caseStatus),
    bestResultsState,
  ), [bestResultsState, scenarioCards]);
  const nextAction = useMemo(() => getProductionCaseNextAction(
    scenarioCards.map(({ caseStatus }) => caseStatus),
  ), [scenarioCards]);
  const nextActionScenario = nextAction
    ? scenarios.find((scenario) => scenario.id === nextAction.scenarioId)
    : undefined;
  const recentBestResults = useMemo(() => getRecentProductionCaseBestResults(scenarios, bestResultsState), [bestResultsState, scenarios]);
  const nextActionImprovementHint = useMemo(() => {
    if (!nextActionScenario || !nextAction || !["improve", "master"].includes(nextAction.actionType)) return undefined;
    const brief = resolveScenarioProductionBrief(nextActionScenario);
    if (brief.briefType !== "production_case") return undefined;
    return getProductionCaseImprovementHint(
      createProductionCaseMissions(brief),
      getProductionCaseProgressEntry(progressState, nextActionScenario.id),
    );
  }, [nextAction, nextActionScenario, progressState]);
  const productionCaseScenarioCards = useMemo(() => scenarioCards.filter(({ caseStatus }) => Boolean(caseStatus)), [scenarioCards]);
  const productionCaseScenarioIds = useMemo(
    () => new Set(productionCaseScenarioCards.map(({ scenario }) => scenario.id)),
    [productionCaseScenarioCards],
  );
  const hasProductionCaseProgress = useMemo(() => Object.values(progressState).some((entry) => (
    productionCaseScenarioIds.has(entry.scenarioId)
    && (entry.completedMissionIds.length > 0 || Object.keys(entry.selectedChoicesByMissionId ?? {}).length > 0)
  )), [productionCaseScenarioIds, progressState]);
  const hasProductionCaseBestResults = useMemo(() => Object.values(bestResultsState).some((entry) => (
    productionCaseScenarioIds.has(entry.scenarioId)
  )), [bestResultsState, productionCaseScenarioIds]);
  const isFirstProductionCaseSession = Boolean(nextAction)
    && productionCaseScenarioCards.length > 0
    && !hasProductionCaseProgress
    && !hasProductionCaseBestResults;
  const firstProductionCaseScenario = productionCaseScenarioCards[0]?.scenario;
  const suggestedFirstProductionCaseScenarios = !hasProductionCaseProgress
    ? productionCaseScenarioCards.slice(0, 3).map(({ scenario }) => scenario)
    : [];
  const filteredScenarioCards = useMemo(() => {
    const filteredCards = productionCaseScenarioCards.filter(({ scenario, bestResult, caseStatus }) => {
      const matchesQuery = !normalizedSearchQuery || getScenarioSearchText(scenario).includes(normalizedSearchQuery);
      if (!matchesQuery) return false;
      return productionCaseLibraryStatusMatchesFilter(caseStatus, caseStatusFilter)
        && productionCaseMasteryFilterMatches(caseStatus, bestResult, masteryFilter);
    });
    return sortProductionCaseLibraryCards(filteredCards, sortMode);
  }, [caseStatusFilter, masteryFilter, normalizedSearchQuery, productionCaseScenarioCards, sortMode]);

  const resultSummary = useMemo(() => getProductionCaseLibraryResultSummary({
    totalCount: productionCaseScenarioCards.length,
    visibleCount: filteredScenarioCards.length,
    controls: { caseStatusFilter, masteryFilter, sortMode, searchQuery },
  }), [caseStatusFilter, filteredScenarioCards.length, masteryFilter, productionCaseScenarioCards.length, searchQuery, sortMode]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      writeProductionCaseLibraryControls(window.localStorage, { caseStatusFilter, masteryFilter, sortMode, searchQuery });
    } catch {
      // Ignore unavailable storage in test/server-like contexts.
    }
  }, [caseStatusFilter, masteryFilter, searchQuery, sortMode]);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    const refreshProgress = () => setProgressRefreshKey((key) => key + 1);
    window.addEventListener("focus", refreshProgress);
    window.addEventListener("storage", refreshProgress);
    document.addEventListener("visibilitychange", refreshProgress);
    return () => {
      window.removeEventListener("focus", refreshProgress);
      window.removeEventListener("storage", refreshProgress);
      document.removeEventListener("visibilitychange", refreshProgress);
    };
  }, []);

  const resetLibraryControls = () => {
    setCaseStatusFilter(defaultProductionCaseLibraryControls.caseStatusFilter);
    setMasteryFilter(defaultProductionCaseLibraryControls.masteryFilter);
    setSortMode(defaultProductionCaseLibraryControls.sortMode);
    setSearchQuery(defaultProductionCaseLibraryControls.searchQuery);
  };

  const exportProductionCaseProgress = async () => {
    if (typeof window === "undefined") return;

    const exportJson = JSON.stringify(createProductionCaseProgressExport(window.localStorage), null, 2);
    setExportFallbackJson("");

    if (typeof Blob !== "undefined" && typeof document !== "undefined" && window.URL?.createObjectURL) {
      const blob = new Blob([exportJson], { type: "application/json" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "hg-film-production-case-progress.json";
      link.click();
      window.URL.revokeObjectURL(url);
      setExportStatus("exported");
      return;
    }

    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(exportJson);
        setExportStatus("ready_to_copy");
        return;
      } catch {
        // Fall back to showing the JSON when clipboard access is unavailable.
      }
    }

    setExportFallbackJson(exportJson);
    setExportStatus("ready_to_copy");
  };

  const refreshProductionCaseLibraryState = () => {
    if (typeof window === "undefined") return;
    const controls = readProductionCaseLibraryControls(window.localStorage);
    setCaseStatusFilter(controls.caseStatusFilter);
    setMasteryFilter(controls.masteryFilter);
    setSortMode(controls.sortMode);
    setSearchQuery(controls.searchQuery);
    setProgressRefreshKey((key) => key + 1);
  };

  const confirmProductionCaseProgressImport = () => {
    if (typeof window === "undefined") return;

    const result = importProductionCaseProgressBackup(importJson, window.localStorage);
    if (!result.ok) {
      setImportStatus("error");
      return;
    }

    refreshProductionCaseLibraryState();
    setImportStatus("imported");
    setImportJson("");
  };

  return (
    <main className="scenario-library">
      <div className="scenario-library-header">
        <div>
          <span className="eyebrow">Recommended first · stable MVP</span>
          <h2>Production Cases</h2>
        </div>
        <p>
          Start here: play one Production Case. Choose a case, make production choices,
          finish all missions to unlock the Case report, then replay to improve or continue
          to the next case.
        </p>
      </div>
      {isFirstProductionCaseSession ? (
        <ProductionCaseStartHereGuidance
          firstScenario={firstProductionCaseScenario}
          onStartScenario={onStartScenario}
          suggestedScenarios={suggestedFirstProductionCaseScenarios}
        />
      ) : null}
      <div className="production-case-dashboard">
        {!isFirstProductionCaseSession ? (
          <p className="production-case-continuation-note">What to do now: use Next action to continue, or open a previous case to improve its Case report result.</p>
        ) : null}
        <ProductionCaseCollectionSummaryCard careerSummary={careerSummary} summary={collectionSummary} />
        <ProductionCaseNextActionCard
          improvementHint={nextActionImprovementHint}
          nextAction={nextAction}
          onOpenScenario={nextActionScenario ? () => { onStartScenario?.(nextActionScenario); } : undefined}
        />
        <ProductionCaseAchievementsSection summary={careerSummary} />
        <RecentProductionCaseBestResultsSection
          items={recentBestResults}
          onOpenScenario={onStartScenario ? (scenarioId) => {
            const scenario = scenarios.find((item) => item.id === scenarioId);
            if (scenario) onStartScenario(scenario);
          } : undefined}
        />
      </div>
      <div className="scenario-library-controls">
        <div className="scenario-controls-search-row">
          <label className="scenario-search">
            <span>Search</span>
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search film, year, or case"
              type="search"
            />
          </label>
        </div>
        <div className="scenario-controls-filter-row">
          <label className="scenario-status-filter">
            <span>Case-status</span>
            <select
              value={caseStatusFilter}
              onChange={(event) => setCaseStatusFilter(event.target.value as ProductionCaseLibraryStatusFilter)}
            >
              {caseStatusFilters.map((filter) => (
                <option key={filter.value} value={filter.value}>{filter.label}</option>
              ))}
            </select>
          </label>
          <label className="scenario-status-filter">
            <span>Mastery</span>
            <select
              value={masteryFilter}
              onChange={(event) => setMasteryFilter(event.target.value as ProductionCaseMasteryFilter)}
            >
              {masteryFilters.map((filter) => (
                <option key={filter.value} value={filter.value}>{filter.label}</option>
              ))}
            </select>
          </label>
          <label className="scenario-status-filter scenario-sort-control">
            <span>Sort</span>
            <select
              value={sortMode}
              onChange={(event) => setSortMode(event.target.value as ProductionCaseLibrarySortMode)}
            >
              {sortModeOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
          <button className="secondary-button scenario-filter-reset" onClick={resetLibraryControls} type="button">
            Reset filters
          </button>
        </div>
        <details className="scenario-backup-panel">
          <summary>
            <span>Progress backup</span>
            <small>Save or restore local production-case progress.</small>
          </summary>
          <div className="scenario-backup-content">
            <button className="secondary-button scenario-export-button" onClick={exportProductionCaseProgress} type="button">
              Export progress
            </button>
            <div className="scenario-import-control">
              <label>
                <span>Import progress</span>
                <textarea
                  value={importJson}
                  onChange={(event) => {
                    setImportJson(event.target.value);
                    setImportStatus(undefined);
                  }}
                  rows={4}
                  placeholder="Paste JSON backup"
                  aria-label="Import progress"
                />
              </label>
              <p>Importing overwrites local production-case progress.</p>
              {importPreview ? (
                <div
                  className={`scenario-import-preview${importPreview.ok ? "" : " scenario-import-preview-invalid"}`}
                  aria-live="polite"
                >
                  {importPreview.ok ? (
                    <>
                      <strong>Backup found</strong>
                      <span>Exported: {importPreview.exportedAt}</span>
                      <span>Current progress: {importPreview.currentProgressCount}</span>
                      <span>Best results: {importPreview.bestResultCount}</span>
                      <span>Library controls: {importPreview.hasLibraryControls ? "yes" : "no"}</span>
                    </>
                  ) : (
                    <strong>Backup can't be read</strong>
                  )}
                </div>
              ) : null}
              <button
                className="secondary-button scenario-import-button"
                disabled={!importJson.trim() || importPreview?.ok === false}
                onClick={confirmProductionCaseProgressImport}
                type="button"
              >
                Confirm import
              </button>
            </div>
            {exportStatus ? (
              <div className="scenario-export-status" aria-live="polite">
                {exportStatus === "exported" ? "Progress exported" : "Progress ready to copy"}
              </div>
            ) : null}
            {importStatus ? (
              <div className="scenario-import-status" aria-live="polite">
                {importStatus === "imported" ? "Progress imported" : "Could not import progress"}
              </div>
            ) : null}
            {exportFallbackJson ? (
              <textarea
                className="scenario-export-fallback"
                readOnly
                rows={6}
                value={exportFallbackJson}
                aria-label="Progress ready to copy"
              />
            ) : null}
          </div>
        </details>
      </div>
      <div className="scenario-result-summary" aria-live="polite">
        <span>{resultSummary.label}</span>
        {resultSummary.activeControlLabels.length > 0 ? (
          <span className="scenario-active-controls">
            {resultSummary.activeControlLabels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </span>
        ) : (
          <span className="scenario-active-controls scenario-active-controls-empty">No active filters</span>
        )}
      </div>
      {filteredScenarioCards.length === 0 ? (
        <p className="scenario-empty-state">No cases match these filters. Reset filters to choose a Production Case.</p>
      ) : null}
      <div className="scenario-grid">
        {filteredScenarioCards.map(({ scenario, bestResult, caseStatus }) => (
          <article className="scenario-card" key={scenario.id}>
            <div className="scenario-card-topline">
              <span>#{scenario.source.position}</span>
              <span>{scenario.scenario_type}</span>
            </div>
            <h3>{scenario.film.title}</h3>
            <dl className="scenario-meta">
              <div>
                <dt>Year</dt>
                <dd>{scenario.film.year}</dd>
              </div>
              <div>
                <dt>Director</dt>
                <dd>{scenario.film.directors.join(", ")}</dd>
              </div>
            </dl>
            {caseStatus ? <ScenarioCaseStatusBadge status={caseStatus} /> : null}
            {bestResult ? (
              <div className="scenario-case-best-result" aria-label={`Best result: ${productionCaseResultTierLabels[bestResult.bestTier]}`}>
                <span>Best</span>
                <strong>{productionCaseResultTierLabels[bestResult.bestTier]} · {bestResult.bestScore}/{bestResult.maxScore}</strong>
              </div>
            ) : null}
            <div
              className="scenario-tags"
              aria-label={`Genres for ${scenario.film.title}`}
            >
              {scenario.film.genres.map((genre) => (
                <span key={genre}>{genre}</span>
              ))}
            </div>
            <p>{getScenarioCardDescription(scenario)}</p>
            <button
              className="secondary-button"
              disabled={!onStartScenario}
              onClick={() => onStartScenario?.(scenario)}
              type="button"
            >
              Start this case
            </button>
          </article>
        ))}
      </div>
    </main>
  );
}


function ProductionCaseStartHereGuidance({
  firstScenario,
  onStartScenario,
  suggestedScenarios,
}: {
  readonly firstScenario: FilmScenarioSeed | undefined;
  readonly onStartScenario: ((scenario: FilmScenarioSeed) => void) | undefined;
  readonly suggestedScenarios: readonly FilmScenarioSeed[];
}) {
  return (
    <section className="production-case-start-here" aria-label="Start here for Production Cases">
      <div className="production-case-start-here-copy">
        <span>Start here</span>
        <h3>Play your first production case</h3>
        <ol>
          <li>Choose a production case.</li>
          <li>Make production choices.</li>
          <li>Finish all missions to unlock the Case report.</li>
          <li>After the report, replay to improve or continue to the next case.</li>
        </ol>
      </div>
      <div className="production-case-start-here-actions">
        <button
          className="primary-button"
          disabled={!firstScenario || !onStartScenario}
          onClick={() => { if (firstScenario) onStartScenario?.(firstScenario); }}
          type="button"
        >
          Start first case (recommended)
        </button>
        {suggestedScenarios.length > 0 ? (
          <div className="production-case-suggested-first-cases">
            <strong>Suggested first cases</strong>
            <div>
              {suggestedScenarios.map((scenario) => (
                <button
                  className="secondary-button"
                  disabled={!onStartScenario}
                  key={scenario.id}
                  onClick={() => onStartScenario?.(scenario)}
                  type="button"
                >
                  {scenario.film.title}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export type RecentProductionCaseBestResult = {
  readonly scenarioId: string;
  readonly title: string;
  readonly year: number;
  readonly bestScore: number;
  readonly maxScore: number;
  readonly bestTier: ProductionCaseBestResultEntry["bestTier"];
  readonly bestTierLabel: string;
  readonly updatedAt: string;
  readonly completedAt: string;
};

function getBestResultTimestamp(value: string | undefined): number {
  if (!value) return 0;
  const timestamp = Date.parse(value);
  return Number.isFinite(timestamp) ? timestamp : 0;
}

function getRecentBestResultSortTimestamp(result: Pick<RecentProductionCaseBestResult, "updatedAt" | "completedAt">): number {
  return getBestResultTimestamp(result.updatedAt) || getBestResultTimestamp(result.completedAt);
}

export function getRecentProductionCaseBestResults(
  scenarios: readonly FilmScenarioSeed[],
  bestResults: ProductionCaseBestResultsState,
  limit = 5,
): readonly RecentProductionCaseBestResult[] {
  if (limit <= 0) return [];

  const productionCaseScenarios = new Map(
    scenarios.flatMap((scenario) => {
      const brief = resolveScenarioProductionBrief(scenario);
      if (brief.briefType !== "production_case") return [];
      return [[scenario.id, scenario]];
    }),
  );

  return Object.values(bestResults)
    .flatMap((bestResult) => {
      const scenario = productionCaseScenarios.get(bestResult.scenarioId);
      if (!scenario) return [];
      return [{
        scenarioId: bestResult.scenarioId,
        title: scenario.film.title,
        year: scenario.film.year,
        bestScore: bestResult.bestScore,
        maxScore: bestResult.maxScore,
        bestTier: bestResult.bestTier,
        bestTierLabel: productionCaseResultTierLabels[bestResult.bestTier],
        updatedAt: bestResult.updatedAt,
        completedAt: bestResult.completedAt,
      }];
    })
    .sort((left, right) => getRecentBestResultSortTimestamp(right) - getRecentBestResultSortTimestamp(left))
    .slice(0, limit);
}

function formatRecentBestResultDate(value: string): string | undefined {
  const timestamp = Date.parse(value);
  if (!Number.isFinite(timestamp)) return undefined;
  try {
    return new Intl.DateTimeFormat("en-US", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(timestamp));
  } catch {
    return undefined;
  }
}

function RecentProductionCaseBestResultsSection({
  items,
  onOpenScenario,
}: {
  readonly items: readonly RecentProductionCaseBestResult[];
  readonly onOpenScenario?: ((scenarioId: string) => void) | undefined;
}) {
  return (
    <section className="production-case-recent-results" aria-label="Recent best results">
      <div className="production-case-recent-results-heading">
        <span>Recent best results</span>
        <small>{items.length > 0 ? `${items.length} most recent` : "None saved"}</small>
      </div>
      {items.length === 0 ? (
        <p>No best results yet. Finish a case and read its Case report to save one.</p>
      ) : (
        <div className="production-case-recent-results-list">
          {items.map((item) => {
            const dateLabel = formatRecentBestResultDate(item.updatedAt) ?? formatRecentBestResultDate(item.completedAt);
            return (
              <article className="production-case-recent-result" key={item.scenarioId}>
                <div>
                  <strong>{item.title} <span>({item.year})</span></strong>
                  <small>{item.bestTierLabel} · {item.bestScore}/{item.maxScore}{dateLabel ? ` · ${dateLabel}` : ""}</small>
                </div>
                <button
                  className="secondary-button"
                  disabled={!onOpenScenario}
                  onClick={() => onOpenScenario?.(item.scenarioId)}
                  type="button"
                >
                  Open case
                </button>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

function ProductionCaseNextActionCard({
  improvementHint,
  nextAction,
  onOpenScenario,
}: {
  readonly improvementHint?: ReturnType<typeof getProductionCaseImprovementHint>;
  readonly nextAction: ProductionCaseNextAction | undefined;
  readonly onOpenScenario?: (() => void) | undefined;
}) {
  if (!nextAction) return null;

  return (
    <section className="production-case-next-action" aria-label="Next action">
      <div>
        <span>Next action</span>
        <strong>{nextAction.actionType === "complete" ? nextAction.label : `${nextAction.label}: ${nextAction.title}`}</strong>
        <small>{nextAction.description}</small>
        {improvementHint ? <small>{formatNextActionImprovementHint(improvementHint)}</small> : null}
      </div>
      {nextAction.actionType !== "complete" ? (
        <button className="secondary-button" disabled={!onOpenScenario} onClick={onOpenScenario} type="button">
          Open case
        </button>
      ) : null}
    </section>
  );
}

function formatNextActionImprovementHint(hint: NonNullable<ReturnType<typeof getProductionCaseImprovementHint>>) {
  if (hint.hintType === "sharpen") return `Sharpen your choice in ${hint.title}`;
  return `Improve: ${hint.title}`;
}

function ProductionCaseCollectionSummaryCard({
  careerSummary,
  summary,
}: {
  readonly careerSummary: ReturnType<typeof getProductionCaseCareerSummary>;
  readonly summary: ReturnType<typeof getProductionCaseCollectionSummary>;
}) {
  return (
    <section className="production-case-summary-card" aria-label="Production case collection summary">
      <div className="production-case-summary-heading">
        <span>Production Cases progress</span>
        <strong>{careerSummary.completedBestCount}/{careerSummary.totalCases}</strong>
      </div>
      <div>
        <span>Completed best</span>
        <strong>{careerSummary.completedBestCount}/{careerSummary.totalCases}</strong>
      </div>
      <div>
        <span>Best combined score</span>
        <strong>{careerSummary.bestTotalScore}/{careerSummary.bestMaxScore}</strong>
      </div>
      <div>
        <span>Auteur best</span>
        <strong>{careerSummary.auteurBestCount}</strong>
      </div>
      <div>
        <span>Current progress · Completed</span>
        <strong>{summary.completedCount}</strong>
      </div>
      <div>
        <span>Current progress · In progress</span>
        <strong>{summary.inProgressCount}</strong>
      </div>
      <div>
        <span>Current progress · Not started</span>
        <strong>{summary.notStartedCount}</strong>
      </div>
      <div>
        <span>Current progress · Case-score</span>
        <strong>{summary.totalScore}/{summary.maxScore}</strong>
      </div>
    </section>
  );
}

function ProductionCaseAchievementsSection({
  summary,
}: {
  readonly summary: ReturnType<typeof getProductionCaseCareerSummary>;
}) {
  const achievements = getProductionCaseAchievements(summary);

  return (
    <section className="production-case-achievements" aria-label="Badges">
      <div className="production-case-achievements-heading">
        <span>Badges</span>
        <small>{achievements.filter((achievement) => achievement.unlocked).length}/{achievements.length} unlocked</small>
      </div>
      <div className="production-case-achievement-list">
        {achievements.map((achievement) => (
          <article
            className={achievement.unlocked ? "production-case-achievement unlocked" : "production-case-achievement"}
            key={achievement.id}
          >
            <strong>{achievement.label}</strong>
            <span>{achievement.progressLabel}</span>
            <small>{achievement.description}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

function ScenarioCaseStatusBadge({ status }: { readonly status: ProductionCaseLibraryStatus }) {
  return (
    <div className="scenario-case-status" aria-label={`Case-status: ${status.label}`}>
      <span>Case-status</span>
      <strong>{status.label}</strong>
      <small>{status.completedCount}/{status.missionCount} phases</small>
      {status.score ? <small>Case-score: {status.score.score}/{status.score.maxScore}</small> : null}
    </div>
  );
}

export function getScenarioSearchText(scenario: FilmScenarioSeed) {
  const brief = resolveScenarioProductionBrief(scenario);
  return [
    scenario.film.title,
    scenario.film.original_title,
    String(scenario.film.year),
    ...scenario.film.directors,
    ...scenario.film.genres,
    ...scenario.film.genre_keys,
    brief.title,
    brief.logline,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export function getScenarioCaseStatus(
  scenario: FilmScenarioSeed,
  progressState: Parameters<typeof getProductionCaseProgressEntry>[0],
): ProductionCaseNextActionStatus | undefined {
  const brief = resolveScenarioProductionBrief(scenario);
  if (brief.briefType !== "production_case") return undefined;

  const missions = createProductionCaseMissions(brief);
  const progressEntry = getProductionCaseProgressEntry(progressState, scenario.id);
  const status = getProductionCaseLibraryStatus(missions, progressEntry);
  if (!status) return undefined;
  return {
    ...status,
    scenarioId: scenario.id,
    title: scenario.film.title,
  };
}

function getScenarioCardDescription(scenario: FilmScenarioSeed) {
  const brief = resolveScenarioProductionBrief(scenario);
  if (brief.briefType === "production_case") {
    return `Follow the production choices behind ${scenario.film.title}: understand how this film solves script, image, editing, and sound.`;
  }

  return `${scenario.production_challenge} This imported seed still needs film-specific production-case design.`;
}

export function getScenarioCaseBestResult(
  scenario: FilmScenarioSeed,
  bestResultsState: ProductionCaseBestResultsState,
) {
  const brief = resolveScenarioProductionBrief(scenario);
  if (brief.briefType !== "production_case") return undefined;
  return getProductionCaseBestResultEntry(bestResultsState, scenario.id);
}

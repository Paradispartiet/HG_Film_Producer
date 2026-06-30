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
  { value: "all", label: "Alle" },
  { value: "not_started", label: "Ikke startet" },
  { value: "in_progress", label: "Under arbeid" },
  { value: "completed", label: "Fullført" },
] as const satisfies readonly { readonly value: ProductionCaseLibraryStatusFilter; readonly label: string }[];

const masteryFilters = [
  { value: "all", label: "Alle" },
  { value: "not_completed_best", label: "Ikke fullført best" },
  { value: "assistant_best", label: "Assistent" },
  { value: "producer_best", label: "Produsent" },
  { value: "auteur_best", label: "Auteur" },
  { value: "can_improve", label: "Kan forbedres" },
] as const satisfies readonly { readonly value: ProductionCaseMasteryFilter; readonly label: string }[];

const sortModeOptions = [
  { value: "default", label: "Standard" },
  { value: "title_asc", label: "Tittel A–Å" },
  { value: "best_score_desc", label: "Beste score høyest" },
  { value: "best_score_asc", label: "Beste score lavest" },
  { value: "recent_best", label: "Nylig beste resultat" },
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
          <span className="eyebrow">Seed catalogue</span>
          <h2>Production Cases</h2>
        </div>
        <p>
          {scenarios.length} production cases from the classic film seed file. Manual
          briefs are production cases: follow and reconstruct the production
          choices behind the specific film.
        </p>
      </div>
      <div className="production-case-dashboard">
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
            <span>Søk</span>
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Søk film, år eller case"
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
            <span>Sorter</span>
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
            Nullstill filtre
          </button>
        </div>
        <details className="scenario-backup-panel">
          <summary>
            <span>Progress backup</span>
            <small>Lagre eller gjenopprett lokal production-case progress.</small>
          </summary>
          <div className="scenario-backup-content">
            <button className="secondary-button scenario-export-button" onClick={exportProductionCaseProgress} type="button">
              Eksporter progress
            </button>
            <div className="scenario-import-control">
              <label>
                <span>Importer progress</span>
                <textarea
                  value={importJson}
                  onChange={(event) => {
                    setImportJson(event.target.value);
                    setImportStatus(undefined);
                  }}
                  rows={4}
                  placeholder="Lim inn JSON-backup"
                  aria-label="Importer progress"
                />
              </label>
              <p>Import overskriver lokal production-case progress.</p>
              {importPreview ? (
                <div
                  className={`scenario-import-preview${importPreview.ok ? "" : " scenario-import-preview-invalid"}`}
                  aria-live="polite"
                >
                  {importPreview.ok ? (
                    <>
                      <strong>Backup funnet</strong>
                      <span>Eksportert: {importPreview.exportedAt}</span>
                      <span>Current progress: {importPreview.currentProgressCount}</span>
                      <span>Beste resultater: {importPreview.bestResultCount}</span>
                      <span>Library controls: {importPreview.hasLibraryControls ? "ja" : "nei"}</span>
                    </>
                  ) : (
                    <strong>Backup kan ikke leses</strong>
                  )}
                </div>
              ) : null}
              <button
                className="secondary-button scenario-import-button"
                disabled={!importJson.trim() || importPreview?.ok === false}
                onClick={confirmProductionCaseProgressImport}
                type="button"
              >
                Bekreft import
              </button>
            </div>
            {exportStatus ? (
              <div className="scenario-export-status" aria-live="polite">
                {exportStatus === "exported" ? "Progress eksportert" : "Progress klar til kopiering"}
              </div>
            ) : null}
            {importStatus ? (
              <div className="scenario-import-status" aria-live="polite">
                {importStatus === "imported" ? "Progress importert" : "Kunne ikke importere progress"}
              </div>
            ) : null}
            {exportFallbackJson ? (
              <textarea
                className="scenario-export-fallback"
                readOnly
                rows={6}
                value={exportFallbackJson}
                aria-label="Progress klar til kopiering"
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
          <span className="scenario-active-controls scenario-active-controls-empty">Ingen aktive filtre</span>
        )}
      </div>
      {filteredScenarioCards.length === 0 ? (
        <p className="scenario-empty-state">{resultSummary.label}</p>
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
              <div className="scenario-case-best-result" aria-label={`Beste resultat: ${productionCaseResultTierLabels[bestResult.bestTier]}`}>
                <span>Beste</span>
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
              Start production case
            </button>
          </article>
        ))}
      </div>
    </main>
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
    return new Intl.DateTimeFormat("nb-NO", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(timestamp));
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
    <section className="production-case-recent-results" aria-label="Siste beste resultater">
      <div className="production-case-recent-results-heading">
        <span>Siste beste resultater</span>
        <small>{items.length > 0 ? `${items.length} nyeste` : "Ingen lagret"}</small>
      </div>
      {items.length === 0 ? (
        <p>Ingen beste resultater ennå.</p>
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
                  Åpne case
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
    <section className="production-case-next-action" aria-label="Neste handling">
      <div>
        <span>Neste handling</span>
        <strong>{nextAction.actionType === "complete" ? nextAction.label : `${nextAction.label}: ${nextAction.title}`}</strong>
        <small>{nextAction.description}</small>
        {improvementHint ? <small>{formatNextActionImprovementHint(improvementHint)}</small> : null}
      </div>
      {nextAction.actionType !== "complete" ? (
        <button className="secondary-button" disabled={!onOpenScenario} onClick={onOpenScenario} type="button">
          Åpne case
        </button>
      ) : null}
    </section>
  );
}

function formatNextActionImprovementHint(hint: NonNullable<ReturnType<typeof getProductionCaseImprovementHint>>) {
  if (hint.hintType === "sharpen") return `Spiss valget i ${hint.title}`;
  return `Forbedre: ${hint.title}`;
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
        <span>Career progress</span>
        <strong>{careerSummary.completedBestCount}/{careerSummary.totalCases}</strong>
      </div>
      <div>
        <span>Fullført best</span>
        <strong>{careerSummary.completedBestCount}/{careerSummary.totalCases}</strong>
      </div>
      <div>
        <span>Beste samlet score</span>
        <strong>{careerSummary.bestTotalScore}/{careerSummary.bestMaxScore}</strong>
      </div>
      <div>
        <span>Auteur best</span>
        <strong>{careerSummary.auteurBestCount}</strong>
      </div>
      <div>
        <span>Current progress · Fullført</span>
        <strong>{summary.completedCount}</strong>
      </div>
      <div>
        <span>Current progress · Under arbeid</span>
        <strong>{summary.inProgressCount}</strong>
      </div>
      <div>
        <span>Current progress · Ikke startet</span>
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
    <section className="production-case-achievements" aria-label="Merker">
      <div className="production-case-achievements-heading">
        <span>Merker</span>
        <small>{achievements.filter((achievement) => achievement.unlocked).length}/{achievements.length} låst opp</small>
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
      <small>{status.completedCount}/{status.missionCount} faser</small>
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

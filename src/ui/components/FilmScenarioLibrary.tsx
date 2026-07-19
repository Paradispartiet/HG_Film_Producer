import { useEffect, useMemo, useState } from "react";
import {
  createProductionCaseProgressExport,
  defaultProductionCaseLibraryControls,
  getProductionCaseProgressEntry,
  importProductionCaseProgressBackup,
  previewProductionCaseProgressBackup,
  readProductionCaseLibraryControls,
  readProductionCaseProgress,
  writeProductionCaseLibraryControls,
  type ProductionCaseLibraryStatusFilter,
} from "../../core/productionCaseProgress";
import {
  getProductionCaseLearningStatus,
  type ProductionCaseLearningStatusSummary,
} from "../../core/productionCaseLearning";
import { getClassicFilmScenarios, type FilmScenarioSeed } from "../data/filmScenarios";
import { createProductionCaseMissions, resolveScenarioProductionBrief } from "../data/scenarioProductionBriefs";

const caseStatusFilters = [
  { value: "all", label: "All" },
  { value: "not_started", label: "Not started" },
  { value: "in_progress", label: "In progress" },
  { value: "completed", label: "Completed" },
] as const satisfies readonly { readonly value: ProductionCaseLibraryStatusFilter; readonly label: string }[];

type LearningSortMode = "default" | "title_asc";

const sortModeOptions = [
  { value: "default", label: "Default" },
  { value: "title_asc", label: "Title A–Z" },
] as const satisfies readonly { readonly value: LearningSortMode; readonly label: string }[];

function getInitialControls() {
  if (typeof window === "undefined") {
    return {
      caseStatusFilter: defaultProductionCaseLibraryControls.caseStatusFilter,
      searchQuery: defaultProductionCaseLibraryControls.searchQuery,
      sortMode: "default" as LearningSortMode,
    };
  }
  try {
    const controls = readProductionCaseLibraryControls(window.localStorage);
    return {
      caseStatusFilter: controls.caseStatusFilter,
      searchQuery: controls.searchQuery,
      sortMode: controls.sortMode === "title_asc" ? "title_asc" as const : "default" as const,
    };
  } catch {
    return {
      caseStatusFilter: defaultProductionCaseLibraryControls.caseStatusFilter,
      searchQuery: defaultProductionCaseLibraryControls.searchQuery,
      sortMode: "default" as LearningSortMode,
    };
  }
}

export type ScenarioLearningStatus = ProductionCaseLearningStatusSummary & {
  readonly scenarioId: string;
  readonly title: string;
};

export function FilmScenarioLibrary({
  onStartScenario,
}: {
  readonly onStartScenario?: (scenario: FilmScenarioSeed) => void;
}) {
  const initialControls = getInitialControls();
  const [searchQuery, setSearchQuery] = useState(initialControls.searchQuery);
  const [caseStatusFilter, setCaseStatusFilter] = useState<ProductionCaseLibraryStatusFilter>(initialControls.caseStatusFilter);
  const [sortMode, setSortMode] = useState<LearningSortMode>(initialControls.sortMode);
  const [progressRefreshKey, setProgressRefreshKey] = useState(0);
  const [exportStatus, setExportStatus] = useState<"exported" | "ready_to_copy" | undefined>();
  const [exportFallbackJson, setExportFallbackJson] = useState("");
  const [importJson, setImportJson] = useState("");
  const [importStatus, setImportStatus] = useState<"imported" | "error" | undefined>();

  const scenarios = getClassicFilmScenarios();
  const progressState = useMemo(() => {
    if (typeof window === "undefined") return {};
    return readProductionCaseProgress(window.localStorage);
  }, [progressRefreshKey]);
  const importPreview = useMemo(() => importJson.trim()
    ? previewProductionCaseProgressBackup(importJson)
    : undefined, [importJson]);

  const scenarioCards = useMemo(() => scenarios.flatMap((scenario) => {
    const status = getScenarioCaseStatus(scenario, progressState);
    return status ? [{ scenario, caseStatus: status }] : [];
  }), [progressState, scenarios]);

  const summary = useMemo(() => scenarioCards.reduce((counts, card) => ({
    total: counts.total + 1,
    completed: counts.completed + (card.caseStatus.status === "completed" ? 1 : 0),
    inProgress: counts.inProgress + (card.caseStatus.status === "in_progress" ? 1 : 0),
    notStarted: counts.notStarted + (card.caseStatus.status === "not_started" ? 1 : 0),
  }), { total: 0, completed: 0, inProgress: 0, notStarted: 0 }), [scenarioCards]);

  const hasProgress = useMemo(() => Object.values(progressState).some((entry) => (
    entry.completedMissionIds.length > 0 || Object.keys(entry.selectedChoicesByMissionId ?? {}).length > 0
  )), [progressState]);
  const firstScenario = scenarioCards[0]?.scenario;
  const suggestedFirstScenarios = !hasProgress ? scenarioCards.slice(0, 3).map(({ scenario }) => scenario) : [];
  const nextCard = scenarioCards.find(({ caseStatus }) => caseStatus.status === "in_progress")
    ?? scenarioCards.find(({ caseStatus }) => caseStatus.status === "not_started");

  const normalizedSearchQuery = searchQuery.trim().toLowerCase();
  const filteredCards = useMemo(() => {
    const filtered = scenarioCards.filter(({ scenario, caseStatus }) => {
      if (normalizedSearchQuery && !getScenarioSearchText(scenario).includes(normalizedSearchQuery)) return false;
      if (caseStatusFilter === "all") return true;
      return caseStatus.status === caseStatusFilter;
    });
    if (sortMode === "title_asc") {
      return [...filtered].sort((left, right) => left.scenario.film.title.localeCompare(right.scenario.film.title, "en", { sensitivity: "base" }));
    }
    return filtered;
  }, [caseStatusFilter, normalizedSearchQuery, scenarioCards, sortMode]);

  const [expandedEras, setExpandedEras] = useState<readonly string[]>([]);
  const scenarioEraGroups = useMemo(() => {
    const groups = new Map<string, (typeof filteredCards)[number][]>();
    for (const entry of filteredCards) {
      const era = `${Math.floor(entry.scenario.film.year / 10) * 10}s`;
      const bucket = groups.get(era);
      if (bucket) bucket.push(entry);
      else groups.set(era, [entry]);
    }
    return [...groups.entries()]
      .map(([era, cards]) => ({ era, cards }))
      .sort((left, right) => left.era.localeCompare(right.era));
  }, [filteredCards]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      writeProductionCaseLibraryControls(window.localStorage, {
        caseStatusFilter,
        masteryFilter: "all",
        sortMode,
        searchQuery,
      });
    } catch {
      // Storage may be unavailable in test or server-like contexts.
    }
  }, [caseStatusFilter, searchQuery, sortMode]);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    const refresh = () => setProgressRefreshKey((key) => key + 1);
    window.addEventListener("focus", refresh);
    window.addEventListener("storage", refresh);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      window.removeEventListener("focus", refresh);
      window.removeEventListener("storage", refresh);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, []);

  function resetFilters() {
    setCaseStatusFilter("all");
    setSortMode("default");
    setSearchQuery("");
  }

  async function exportProgress() {
    if (typeof window === "undefined") return;
    const exportJson = JSON.stringify(createProductionCaseProgressExport(window.localStorage), null, 2);
    setExportFallbackJson("");
    if (typeof Blob !== "undefined" && typeof document !== "undefined" && window.URL?.createObjectURL) {
      const blob = new Blob([exportJson], { type: "application/json" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "hg-film-learning-progress.json";
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
        // Show the JSON below when clipboard access is unavailable.
      }
    }
    setExportFallbackJson(exportJson);
    setExportStatus("ready_to_copy");
  }

  function confirmImport() {
    if (typeof window === "undefined") return;
    const result = importProductionCaseProgressBackup(importJson, window.localStorage);
    if (!result.ok) {
      setImportStatus("error");
      return;
    }
    setImportStatus("imported");
    setImportJson("");
    setProgressRefreshKey((key) => key + 1);
  }

  return (
    <main className="scenario-library">
      <div className="scenario-library-header">
        <div>
          <span className="eyebrow">Film learning through concrete cases</span>
          <h2>Production Cases</h2>
        </div>
        <p>Choose a film, study its screenplay, image, editing and sound choices, read the explanations, and continue when the method is clear. There are no points or ranks.</p>
      </div>

      {!hasProgress ? (
        <ProductionCaseStartHereGuidance
          firstScenario={firstScenario}
          onStartScenario={onStartScenario}
          suggestedScenarios={suggestedFirstScenarios}
        />
      ) : null}

      <div className="production-case-dashboard">
        <ProductionCaseCollectionSummaryCard summary={summary} />
        <ProductionCaseNextActionCard
          card={nextCard}
          onOpenScenario={nextCard ? () => onStartScenario?.(nextCard.scenario) : undefined}
        />
      </div>

      <div className="scenario-library-controls">
        <div className="scenario-controls-search-row">
          <label className="scenario-search">
            <span>Search</span>
            <input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search film, year, or case" type="search" />
          </label>
        </div>
        <div className="scenario-controls-filter-row">
          <label className="scenario-status-filter">
            <span>Learning status</span>
            <select value={caseStatusFilter} onChange={(event) => setCaseStatusFilter(event.target.value as ProductionCaseLibraryStatusFilter)}>
              {caseStatusFilters.map((filter) => <option key={filter.value} value={filter.value}>{filter.label}</option>)}
            </select>
          </label>
          <label className="scenario-status-filter scenario-sort-control">
            <span>Sort</span>
            <select value={sortMode} onChange={(event) => setSortMode(event.target.value as LearningSortMode)}>
              {sortModeOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
          </label>
          <button className="secondary-button scenario-filter-reset" onClick={resetFilters} type="button">Reset filters</button>
        </div>

        <details className="scenario-backup-panel">
          <summary><span>Learning progress backup</span><small>Save or restore which cases and phases you have studied.</small></summary>
          <div className="scenario-backup-content">
            <button className="secondary-button scenario-export-button" onClick={exportProgress} type="button">Export progress</button>
            <div className="scenario-import-control">
              <label>
                <span>Import progress</span>
                <textarea
                  value={importJson}
                  onChange={(event) => { setImportJson(event.target.value); setImportStatus(undefined); }}
                  rows={4}
                  placeholder="Paste JSON backup"
                  aria-label="Import progress"
                />
              </label>
              <p>Importing overwrites local learning progress.</p>
              {importPreview ? (
                <div className={`scenario-import-preview${importPreview.ok ? "" : " scenario-import-preview-invalid"}`} aria-live="polite">
                  {importPreview.ok ? (
                    <><strong>Backup found</strong><span>Exported: {importPreview.exportedAt}</span><span>Cases with progress: {importPreview.currentProgressCount}</span></>
                  ) : <strong>Backup cannot be read</strong>}
                </div>
              ) : null}
              <button className="secondary-button scenario-import-button" disabled={!importJson.trim() || importPreview?.ok === false} onClick={confirmImport} type="button">Confirm import</button>
            </div>
            {exportStatus ? <div className="scenario-export-status" aria-live="polite">{exportStatus === "exported" ? "Progress exported" : "Progress ready to copy"}</div> : null}
            {importStatus ? <div className="scenario-import-status" aria-live="polite">{importStatus === "imported" ? "Progress imported" : "Could not import progress"}</div> : null}
            {exportFallbackJson ? <textarea className="scenario-export-fallback" readOnly rows={6} value={exportFallbackJson} aria-label="Progress ready to copy" /> : null}
          </div>
        </details>
      </div>

      <div className="scenario-result-summary" aria-live="polite">
        <span>{filteredCards.length === 0 ? "No film cases match the search or filter" : `Showing ${filteredCards.length} of ${scenarioCards.length} film cases`}</span>
      </div>

      {scenarioEraGroups.map(({ era, cards }) => {
        const isExpanded = expandedEras.includes(era) || cards.length <= eraVisibleLimit;
        const visibleCards = isExpanded ? cards : cards.slice(0, eraVisibleLimit);
        return (
          <section className="scenario-era" key={era} aria-label={`Film cases from the ${era}`}>
            <div className="scenario-era-rail"><b>{era}</b><span>{cards.length} {cards.length === 1 ? "case" : "cases"}</span></div>
            <div className="scenario-era-cases">
              <div className="scenario-grid">
                {visibleCards.map(({ scenario, caseStatus }) => (
                  <article className="scenario-card" key={scenario.id}>
                    <div className="scenario-card-topline"><span>#{scenario.source.position}</span><span>{scenario.scenario_type}</span></div>
                    <h3>{scenario.film.title}</h3>
                    <dl className="scenario-meta">
                      <div><dt>Year</dt><dd>{scenario.film.year}</dd></div>
                      <div><dt>Director</dt><dd>{scenario.film.directors.join(", ")}</dd></div>
                    </dl>
                    <ScenarioCaseStatusBadge status={caseStatus} />
                    <div className="scenario-tags" aria-label={`Genres for ${scenario.film.title}`}>
                      {scenario.film.genres.map((genre) => <span key={genre}>{genre}</span>)}
                    </div>
                    <p>{getScenarioCardDescription(scenario)}</p>
                    <button className="secondary-button" disabled={!onStartScenario} onClick={() => onStartScenario?.(scenario)} type="button">
                      {caseStatus.status === "completed" ? "Review this case" : caseStatus.status === "in_progress" ? "Continue this case" : "Study this case"}
                    </button>
                  </article>
                ))}
              </div>
              {!isExpanded ? (
                <button className="secondary-button scenario-era-show-all" onClick={() => setExpandedEras((current) => [...current, era])} type="button">Show all {cards.length} cases from the {era}</button>
              ) : null}
            </div>
          </section>
        );
      })}
    </main>
  );
}

const eraVisibleLimit = 6;

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
    <section className="production-case-start-here" aria-label="Start learning with a film case">
      <div className="production-case-start-here-copy">
        <span>Start here</span>
        <h3>Study your first film case</h3>
        <ol>
          <li>Choose a film.</li>
          <li>Compare the possible filmmaking approaches.</li>
          <li>Read why the choice fits, partly fits, or does not fit this film.</li>
          <li>Finish the phases and read the learning report.</li>
        </ol>
      </div>
      <div className="production-case-start-here-actions">
        <button className="primary-button" disabled={!firstScenario || !onStartScenario} onClick={() => { if (firstScenario) onStartScenario?.(firstScenario); }} type="button">Start first case</button>
        {suggestedScenarios.length > 0 ? (
          <div className="production-case-suggested-first-cases"><strong>Suggested first cases</strong><div>{suggestedScenarios.map((scenario) => <button className="secondary-button" disabled={!onStartScenario} key={scenario.id} onClick={() => onStartScenario?.(scenario)} type="button">{scenario.film.title}</button>)}</div></div>
        ) : null}
      </div>
    </section>
  );
}

function ProductionCaseCollectionSummaryCard({
  summary,
}: {
  readonly summary: { readonly total: number; readonly completed: number; readonly inProgress: number; readonly notStarted: number };
}) {
  return (
    <section className="production-case-summary-card" aria-label="Film case learning progress">
      <div className="production-case-summary-heading"><span>Cases studied</span><strong>{summary.completed}/{summary.total}</strong></div>
      <div><span>Completed</span><strong>{summary.completed}</strong></div>
      <div><span>In progress</span><strong>{summary.inProgress}</strong></div>
      <div><span>Not started</span><strong>{summary.notStarted}</strong></div>
    </section>
  );
}

function ProductionCaseNextActionCard({
  card,
  onOpenScenario,
}: {
  readonly card: { readonly scenario: FilmScenarioSeed; readonly caseStatus: ScenarioLearningStatus } | undefined;
  readonly onOpenScenario?: (() => void) | undefined;
}) {
  if (!card) {
    return (
      <section className="production-case-next-action" aria-label="Next learning step">
        <div><span>Next learning step</span><strong>Choose any completed case to review</strong><small>There is no score to improve. Return when you want to compare the film choices again.</small></div>
      </section>
    );
  }
  return (
    <section className="production-case-next-action" aria-label="Next learning step">
      <div>
        <span>Next learning step</span>
        <strong>{card.caseStatus.status === "in_progress" ? "Continue" : "Start"}: {card.scenario.film.title}</strong>
        <small>{card.caseStatus.status === "in_progress" ? `${card.caseStatus.completedCount}/${card.caseStatus.missionCount} phases studied.` : "Open the film and begin with its first craft phase."}</small>
      </div>
      <button className="secondary-button" disabled={!onOpenScenario} onClick={onOpenScenario} type="button">Open case</button>
    </section>
  );
}

function ScenarioCaseStatusBadge({ status }: { readonly status: ScenarioLearningStatus }) {
  return (
    <div className="scenario-case-status" aria-label={`Learning status: ${status.label}`}>
      <span>Learning status</span>
      <strong>{status.label}</strong>
      <small>{status.completedCount}/{status.missionCount} phases studied</small>
    </div>
  );
}

export function getScenarioSearchText(scenario: FilmScenarioSeed) {
  const brief = resolveScenarioProductionBrief(scenario);
  return [scenario.film.title, scenario.film.original_title, String(scenario.film.year), ...scenario.film.directors, ...scenario.film.genres, ...scenario.film.genre_keys, brief.title, brief.logline]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export function getScenarioCaseStatus(
  scenario: FilmScenarioSeed,
  progressState: Parameters<typeof getProductionCaseProgressEntry>[0],
): ScenarioLearningStatus | undefined {
  const brief = resolveScenarioProductionBrief(scenario);
  if (brief.briefType !== "production_case") return undefined;
  const missions = createProductionCaseMissions(brief);
  const status = getProductionCaseLearningStatus(missions, getProductionCaseProgressEntry(progressState, scenario.id));
  return { ...status, scenarioId: scenario.id, title: scenario.film.title };
}

function getScenarioCardDescription(scenario: FilmScenarioSeed) {
  const brief = resolveScenarioProductionBrief(scenario);
  if (brief.briefType === "production_case") {
    return `Study how ${scenario.film.title} uses screenplay, image, editing and sound. The goal is understanding, not a score.`;
  }
  return `${scenario.production_challenge} This imported seed still needs film-specific case design.`;
}

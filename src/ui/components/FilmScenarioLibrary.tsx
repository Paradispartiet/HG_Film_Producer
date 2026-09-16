import { useEffect, useMemo, useState } from "react";
import {
  PRODUCTION_CASE_LIBRARY_COPY,
  PRODUCTION_CASE_LIBRARY_SORT_IDS,
  PRODUCTION_CASE_LIBRARY_STATUS_IDS,
  getProductionCaseLibraryStatusLabel,
} from "../../core/productionCaseLibraryCopy";
import type { FilmWorkLanguage } from "../../core/filmWorkLanguage";
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
import { useFilmWorkLanguage } from "../filmWorkLanguage";
import { getClassicFilmScenarios, type FilmScenarioSeed } from "../data/filmScenarios";
import { createProductionCaseMissions, resolveScenarioProductionBrief } from "../data/scenarioProductionBriefs";

type LearningSortMode = "default" | "title_asc";

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
  const [language] = useFilmWorkLanguage();
  const copy = PRODUCTION_CASE_LIBRARY_COPY[language];
  const caseStatusFilters = PRODUCTION_CASE_LIBRARY_STATUS_IDS.map((value) => ({ value, label: copy.statusFilters[value] }));
  const sortModeOptions = PRODUCTION_CASE_LIBRARY_SORT_IDS.map((value) => ({ value, label: copy.sortOptions[value] }));
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
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2>{copy.productTitle}</h2>
        </div>
        <p>{copy.intro}</p>
      </div>

      {!hasProgress ? (
        <ProductionCaseStartHereGuidance
          firstScenario={firstScenario}
          language={language}
          onStartScenario={onStartScenario}
          suggestedScenarios={suggestedFirstScenarios}
        />
      ) : null}

      <div className="production-case-dashboard">
        <ProductionCaseCollectionSummaryCard language={language} summary={summary} />
        <ProductionCaseNextActionCard
          card={nextCard}
          language={language}
          onOpenScenario={nextCard ? () => onStartScenario?.(nextCard.scenario) : undefined}
        />
      </div>

      <div className="scenario-library-controls">
        <div className="scenario-controls-search-row">
          <label className="scenario-search">
            <span>{copy.searchLabel}</span>
            <input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder={copy.searchPlaceholder} type="search" />
          </label>
        </div>
        <div className="scenario-controls-filter-row">
          <label className="scenario-status-filter">
            <span>{copy.learningStatusLabel}</span>
            <select value={caseStatusFilter} onChange={(event) => setCaseStatusFilter(event.target.value as ProductionCaseLibraryStatusFilter)}>
              {caseStatusFilters.map((filter) => <option key={filter.value} value={filter.value}>{filter.label}</option>)}
            </select>
          </label>
          <label className="scenario-status-filter scenario-sort-control">
            <span>{copy.sortLabel}</span>
            <select value={sortMode} onChange={(event) => setSortMode(event.target.value as LearningSortMode)}>
              {sortModeOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
          </label>
          <button className="secondary-button scenario-filter-reset" onClick={resetFilters} type="button">{copy.resetFilters}</button>
        </div>

        <details className="scenario-backup-panel">
          <summary><span>{copy.backup.title}</span><small>{copy.backup.description}</small></summary>
          <div className="scenario-backup-content">
            <button className="secondary-button scenario-export-button" onClick={exportProgress} type="button">{copy.backup.exportProgress}</button>
            <div className="scenario-import-control">
              <label>
                <span>{copy.backup.importProgress}</span>
                <textarea
                  value={importJson}
                  onChange={(event) => { setImportJson(event.target.value); setImportStatus(undefined); }}
                  rows={4}
                  placeholder={copy.backup.pasteBackup}
                  aria-label={copy.backup.importProgress}
                />
              </label>
              <p>{copy.backup.importOverwriteWarning}</p>
              {importPreview ? (
                <div className={`scenario-import-preview${importPreview.ok ? "" : " scenario-import-preview-invalid"}`} aria-live="polite">
                  {importPreview.ok ? (
                    <><strong>{copy.backup.backupFound}</strong><span>{copy.backup.exportedLabel}: {importPreview.exportedAt}</span><span>{copy.backup.casesWithProgressLabel}: {importPreview.currentProgressCount}</span></>
                  ) : <strong>{copy.backup.unreadable}</strong>}
                </div>
              ) : null}
              <button className="secondary-button scenario-import-button" disabled={!importJson.trim() || importPreview?.ok === false} onClick={confirmImport} type="button">{copy.backup.confirmImport}</button>
            </div>
            {exportStatus ? <div className="scenario-export-status" aria-live="polite">{exportStatus === "exported" ? copy.backup.progressExported : copy.backup.progressReadyToCopy}</div> : null}
            {importStatus ? <div className="scenario-import-status" aria-live="polite">{importStatus === "imported" ? copy.backup.progressImported : copy.backup.importFailed}</div> : null}
            {exportFallbackJson ? <textarea className="scenario-export-fallback" readOnly rows={6} value={exportFallbackJson} aria-label={copy.backup.progressReadyToCopy} /> : null}
          </div>
        </details>
      </div>

      <div className="scenario-result-summary" aria-live="polite">
        <span>{filteredCards.length === 0 ? copy.noMatches : copy.resultSummary(filteredCards.length, scenarioCards.length)}</span>
      </div>

      {scenarioEraGroups.map(({ era, cards }) => {
        const isExpanded = expandedEras.includes(era) || cards.length <= eraVisibleLimit;
        const visibleCards = isExpanded ? cards : cards.slice(0, eraVisibleLimit);
        return (
          <section className="scenario-era" key={era} aria-label={copy.eraAria(era)}>
            <div className="scenario-era-rail"><b>{era}</b><span>{copy.caseCount(cards.length)}</span></div>
            <div className="scenario-era-cases">
              <div className="scenario-grid">
                {visibleCards.map(({ scenario, caseStatus }) => (
                  <article className="scenario-card" key={scenario.id}>
                    <div className="scenario-card-topline"><span>#{scenario.source.position}</span><span>{scenario.scenario_type}</span></div>
                    <h3>{scenario.film.title}</h3>
                    <dl className="scenario-meta">
                      <div><dt>{copy.yearLabel}</dt><dd>{scenario.film.year}</dd></div>
                      <div><dt>{copy.directorLabel}</dt><dd>{scenario.film.directors.join(", ")}</dd></div>
                    </dl>
                    <ScenarioCaseStatusBadge language={language} status={caseStatus} />
                    <div className="scenario-tags" aria-label={copy.genresAria(scenario.film.title)}>
                      {scenario.film.genres.map((genre) => <span key={genre}>{genre}</span>)}
                    </div>
                    <p>{getScenarioCardDescription(scenario, language)}</p>
                    <button className="secondary-button" disabled={!onStartScenario} onClick={() => onStartScenario?.(scenario)} type="button">
                      {caseStatus.status === "completed" ? copy.reviewCase : caseStatus.status === "in_progress" ? copy.continueCase : copy.studyCase}
                    </button>
                  </article>
                ))}
              </div>
              {!isExpanded ? (
                <button className="secondary-button scenario-era-show-all" onClick={() => setExpandedEras((current) => [...current, era])} type="button">{copy.showAllCases(cards.length, era)}</button>
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
  language,
  onStartScenario,
  suggestedScenarios,
}: {
  readonly firstScenario: FilmScenarioSeed | undefined;
  readonly language: FilmWorkLanguage;
  readonly onStartScenario: ((scenario: FilmScenarioSeed) => void) | undefined;
  readonly suggestedScenarios: readonly FilmScenarioSeed[];
}) {
  const copy = PRODUCTION_CASE_LIBRARY_COPY[language].startHere;
  return (
    <section className="production-case-start-here" aria-label={copy.aria}>
      <div className="production-case-start-here-copy">
        <span>{copy.label}</span>
        <h3>{copy.heading}</h3>
        <ol>
          {copy.steps.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </div>
      <div className="production-case-start-here-actions">
        <button className="primary-button" disabled={!firstScenario || !onStartScenario} onClick={() => { if (firstScenario) onStartScenario?.(firstScenario); }} type="button">{copy.startFirstCase}</button>
        {suggestedScenarios.length > 0 ? (
          <div className="production-case-suggested-first-cases"><strong>{copy.suggestedFirstCases}</strong><div>{suggestedScenarios.map((scenario) => <button className="secondary-button" disabled={!onStartScenario} key={scenario.id} onClick={() => onStartScenario?.(scenario)} type="button">{scenario.film.title}</button>)}</div></div>
        ) : null}
      </div>
    </section>
  );
}

function ProductionCaseCollectionSummaryCard({
  language,
  summary,
}: {
  readonly language: FilmWorkLanguage;
  readonly summary: { readonly total: number; readonly completed: number; readonly inProgress: number; readonly notStarted: number };
}) {
  const copy = PRODUCTION_CASE_LIBRARY_COPY[language].collectionSummary;
  return (
    <section className="production-case-summary-card" aria-label={copy.aria}>
      <div className="production-case-summary-heading"><span>{copy.casesStudied}</span><strong>{summary.completed}/{summary.total}</strong></div>
      <div><span>{copy.completed}</span><strong>{summary.completed}</strong></div>
      <div><span>{copy.inProgress}</span><strong>{summary.inProgress}</strong></div>
      <div><span>{copy.notStarted}</span><strong>{summary.notStarted}</strong></div>
    </section>
  );
}

function ProductionCaseNextActionCard({
  card,
  language,
  onOpenScenario,
}: {
  readonly card: { readonly scenario: FilmScenarioSeed; readonly caseStatus: ScenarioLearningStatus } | undefined;
  readonly language: FilmWorkLanguage;
  readonly onOpenScenario?: (() => void) | undefined;
}) {
  const copy = PRODUCTION_CASE_LIBRARY_COPY[language].nextAction;
  if (!card) {
    return (
      <section className="production-case-next-action" aria-label={copy.aria}>
        <div><span>{copy.label}</span><strong>{copy.reviewTitle}</strong><small>{copy.reviewHint}</small></div>
      </section>
    );
  }
  return (
    <section className="production-case-next-action" aria-label={copy.aria}>
      <div>
        <span>{copy.label}</span>
        <strong>{card.caseStatus.status === "in_progress" ? copy.continueTitle(card.scenario.film.title) : copy.startTitle(card.scenario.film.title)}</strong>
        <small>{card.caseStatus.status === "in_progress" ? copy.phasesStudied(card.caseStatus.completedCount, card.caseStatus.missionCount) : copy.openFirstPhase}</small>
      </div>
      <button className="secondary-button" disabled={!onOpenScenario} onClick={onOpenScenario} type="button">{copy.openCase}</button>
    </section>
  );
}

function ScenarioCaseStatusBadge({ language, status }: { readonly language: FilmWorkLanguage; readonly status: ScenarioLearningStatus }) {
  const copy = PRODUCTION_CASE_LIBRARY_COPY[language].statusBadge;
  const statusLabel = getProductionCaseLibraryStatusLabel(language, status.status);
  return (
    <div className="scenario-case-status" aria-label={copy.aria(statusLabel)}>
      <span>{copy.label}</span>
      <strong>{statusLabel}</strong>
      <small>{copy.phasesStudied(status.completedCount, status.missionCount)}</small>
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

function getScenarioCardDescription(scenario: FilmScenarioSeed, language: FilmWorkLanguage) {
  const brief = resolveScenarioProductionBrief(scenario);
  const copy = PRODUCTION_CASE_LIBRARY_COPY[language];
  if (brief.briefType === "production_case") {
    return copy.productionCaseDescription(scenario.film.title);
  }
  return copy.seedFallbackDescription(scenario.production_challenge);
}
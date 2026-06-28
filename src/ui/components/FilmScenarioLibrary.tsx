import { useEffect, useMemo, useState } from "react";
import {
  getProductionCaseAchievements,
  getProductionCaseCollectionSummary,
  getProductionCaseImprovementHint,
  getProductionCaseLibraryStatus,
  getProductionCaseNextAction,
  getProductionCaseProgressEntry,
  productionCaseLibraryStatusMatchesFilter,
  readProductionCaseProgress,
  type ProductionCaseLibraryStatus,
  type ProductionCaseLibraryStatusFilter,
  type ProductionCaseNextAction,
  type ProductionCaseNextActionStatus,
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

export function FilmScenarioLibrary({
  onStartScenario,
}: {
  readonly onStartScenario?: (scenario: FilmScenarioSeed) => void;
}) {
  const [query, setQuery] = useState("");
  const [caseStatusFilter, setCaseStatusFilter] = useState<ProductionCaseLibraryStatusFilter>("all");
  const [progressRefreshKey, setProgressRefreshKey] = useState(0);
  const scenarios = getClassicFilmScenarios();
  const progressState = useMemo(() => {
    if (typeof window === "undefined") return {};
    return readProductionCaseProgress(window.localStorage);
  }, [progressRefreshKey]);
  const normalizedQuery = query.trim().toLowerCase();
  const scenarioCards = useMemo(() => {
    return scenarios.map((scenario) => ({
      scenario,
      caseStatus: getScenarioCaseStatus(scenario, progressState),
    }));
  }, [progressState, scenarios]);
  const collectionSummary = useMemo(() => getProductionCaseCollectionSummary(
    scenarioCards.map(({ caseStatus }) => caseStatus),
  ), [scenarioCards]);
  const nextAction = useMemo(() => getProductionCaseNextAction(
    scenarioCards.map(({ caseStatus }) => caseStatus),
  ), [scenarioCards]);
  const nextActionScenario = nextAction
    ? scenarios.find((scenario) => scenario.id === nextAction.scenarioId)
    : undefined;
  const nextActionImprovementHint = useMemo(() => {
    if (!nextActionScenario || !nextAction || !["improve", "master"].includes(nextAction.actionType)) return undefined;
    const brief = resolveScenarioProductionBrief(nextActionScenario);
    if (brief.briefType !== "production_case") return undefined;
    return getProductionCaseImprovementHint(
      createProductionCaseMissions(brief),
      getProductionCaseProgressEntry(progressState, nextActionScenario.id),
    );
  }, [nextAction, nextActionScenario, progressState]);
  const filteredScenarioCards = useMemo(() => {
    return scenarioCards.filter(({ scenario, caseStatus }) => {
      const matchesQuery = !normalizedQuery || getScenarioSearchText(scenario).includes(normalizedQuery);
      if (!matchesQuery) return false;
      return productionCaseLibraryStatusMatchesFilter(caseStatus, caseStatusFilter);
    });
  }, [caseStatusFilter, normalizedQuery, scenarioCards]);

  useEffect(() => {
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

  return (
    <main className="scenario-library">
      <div className="scenario-library-header">
        <div>
          <span className="eyebrow">Seed catalogue</span>
          <h2>Classic production scenarios</h2>
        </div>
        <p>
          {scenarios.length} scenarios from the classic film seed file. Manual
          briefs are production cases: follow and reconstruct the production
          choices behind the specific film.
        </p>
      </div>
      <ProductionCaseCollectionSummaryCard summary={collectionSummary} />
      <ProductionCaseAchievementsSection summary={collectionSummary} />
      <ProductionCaseNextActionCard
        improvementHint={nextActionImprovementHint}
        nextAction={nextAction}
        onOpenScenario={nextActionScenario ? () => { onStartScenario?.(nextActionScenario); } : undefined}
      />
      <div className="scenario-library-controls">
        <label className="scenario-search">
          <span>Search by title, director, or genre</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try kubrick, crime, or The Machinist"
            type="search"
          />
        </label>
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
      </div>
      <div className="scenario-meta" aria-live="polite">
        Showing <strong>{filteredScenarioCards.length}</strong> of{" "}
        <strong>{scenarios.length}</strong> scenarios
      </div>
      <div className="scenario-grid">
        {filteredScenarioCards.map(({ scenario, caseStatus }) => (
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
  summary,
}: {
  readonly summary: ReturnType<typeof getProductionCaseCollectionSummary>;
}) {
  return (
    <section className="production-case-summary-card" aria-label="Production case collection summary">
      <div>
        <span>Production cases</span>
        <strong>{summary.totalCases}</strong>
      </div>
      <div>
        <span>Fullført</span>
        <strong>{summary.completedCount}</strong>
      </div>
      <div>
        <span>Under arbeid</span>
        <strong>{summary.inProgressCount}</strong>
      </div>
      <div>
        <span>Ikke startet</span>
        <strong>{summary.notStartedCount}</strong>
      </div>
      <div>
        <span>Auteur</span>
        <strong>{summary.auteurCount}</strong>
      </div>
      <div>
        <span>Samlet Case-score</span>
        <strong>{summary.totalScore}/{summary.maxScore}</strong>
      </div>
    </section>
  );
}

function ProductionCaseAchievementsSection({
  summary,
}: {
  readonly summary: ReturnType<typeof getProductionCaseCollectionSummary>;
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

function getScenarioSearchText(scenario: FilmScenarioSeed) {
  return [
    scenario.film.title,
    scenario.film.original_title,
    ...scenario.film.directors,
    ...scenario.film.genres,
    ...scenario.film.genre_keys,
  ]
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

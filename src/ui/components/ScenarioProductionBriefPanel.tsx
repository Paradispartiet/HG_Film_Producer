import { useEffect, useMemo, useRef, useState } from "react";
import {
  getProductionCaseImprovementHint,
  getProductionCaseBestResultEntry,
  getProductionCaseMissionScoreSummary,
  getProductionCaseNextPhaseAction,
  getProductionCaseReport,
  getProductionCaseProgressEntry,
  getProductionCaseResultTier,
  getProductionCaseScoreSummary,
  getProductionCaseTierTarget,
  readProductionCaseBestResults,
  readProductionCaseProgress,
  resetProductionCaseScenarioProgress,
  setProductionCaseMissionChoice,
  setProductionCaseMissionCompletion,
  updateProductionCaseBestResult,
  writeProductionCaseProgress,
  type ProductionCaseBestResultsState,
  type ProductionCaseProgressState,
} from "../../core/productionCaseProgress";
import type { FilmScenarioSeed } from "../data/filmScenarios";
import {
  createProductionCaseMissions,
  resolveScenarioProductionBrief,
  type ProductionCaseMission,
  type ScenarioProductionBrief,
} from "../data/scenarioProductionBriefs";

export function ScenarioProductionBriefPanel({
  scenario,
}: {
  readonly scenario: FilmScenarioSeed;
}) {
  const brief = resolveScenarioProductionBrief(scenario);
  const missions = createProductionCaseMissions(brief);

  return (
    <section
      className="scenario-brief-panel"
      aria-labelledby="scenario-brief-title"
    >
      <div className="scenario-brief-header">
        <div>
          <span className="eyebrow">
            {brief.briefType === "production_case"
              ? "Verified production case"
              : "Imported seed fallback"}
          </span>
          <h3 id="scenario-brief-title">{brief.title}</h3>
          <p>{getBriefIntro(brief, scenario.film.title)}</p>
          <p>{brief.logline}</p>
        </div>
        <span className="scenario-brief-status">
          {formatVerificationStatus(brief.verificationStatus)}
        </span>
      </div>
      {missions.length > 0 && brief.briefType === "production_case" ? (
        <ProductionCaseMissionFlow
          missions={missions}
          scenarioId={brief.scenarioId}
        />
      ) : (
        <div className="scenario-brief-grid">
          <BriefSection title="Genre targets" items={brief.genreTargets} />
          <BriefSection title="Tone" items={brief.toneTargets} />
          <BriefSection title="Screenplay" items={brief.screenplayTargets} />
          <BriefSection
            title="Cinematography"
            items={brief.cinematographyTargets}
          />
          <BriefSection title="Editing" items={brief.editingTargets} />
          <BriefSection title="Sound" items={brief.soundTargets} />
          <BriefSection title="Learning goals" items={brief.learningGoals} />
        </div>
      )}
    </section>
  );
}

function ProductionCaseMissionFlow({
  missions,
  scenarioId,
}: {
  readonly missions: readonly ProductionCaseMission[];
  readonly scenarioId: string;
}) {
  const [progressState, setProgressState] = useState<ProductionCaseProgressState>({});
  const [bestResultsState, setBestResultsState] = useState<ProductionCaseBestResultsState>({});
  const [focusedMissionId, setFocusedMissionId] = useState<string | undefined>();
  const missionCardRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (typeof window === "undefined") return;
    setProgressState(readProductionCaseProgress(window.localStorage));
    setBestResultsState(readProductionCaseBestResults(window.localStorage));
  }, [scenarioId]);

  const progressEntry = useMemo(
    () => getProductionCaseProgressEntry(progressState, scenarioId),
    [progressState, scenarioId],
  );
  const completedMissionIds = progressEntry.completedMissionIds;
  const selectedChoicesByMissionId = progressEntry.selectedChoicesByMissionId ?? {};
  const completedMissionIdSet = useMemo(
    () => new Set(completedMissionIds),
    [completedMissionIds],
  );
  const completedCount = missions.filter((mission) =>
    completedMissionIdSet.has(mission.id),
  ).length;
  const allComplete = missions.length > 0 && completedCount === missions.length;
  const caseScore = getProductionCaseScoreSummary(missions, progressEntry);
  const resultTier = getProductionCaseResultTier(caseScore, completedCount);
  const improvementHint = getProductionCaseImprovementHint(missions, progressEntry);
  const nextPhaseAction = getProductionCaseNextPhaseAction(missions, progressEntry);
  const tierTarget = getProductionCaseTierTarget(caseScore, completedCount);
  const caseReport = getProductionCaseReport(missions, progressEntry);
  const bestResult = getProductionCaseBestResultEntry(bestResultsState, scenarioId);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const updatedBestResult = updateProductionCaseBestResult(scenarioId, caseReport, window.localStorage);
    if (updatedBestResult && updatedBestResult !== bestResult) {
      setBestResultsState(readProductionCaseBestResults(window.localStorage));
    }
  }, [bestResult, caseReport, scenarioId]);

  function updateProgress(nextState: ProductionCaseProgressState) {
    setProgressState(nextState);
    if (typeof window !== "undefined") {
      writeProductionCaseProgress(window.localStorage, nextState);
    }
  }

  function toggleMission(missionId: string) {
    updateProgress(
      setProductionCaseMissionCompletion(
        progressState,
        scenarioId,
        missionId,
        !completedMissionIdSet.has(missionId),
      ),
    );
  }

  function selectChoice(missionId: string, choiceId: string) {
    updateProgress(
      setProductionCaseMissionChoice(progressState, scenarioId, missionId, choiceId),
    );
  }

  function resetCurrentScenario() {
    updateProgress(resetProductionCaseScenarioProgress(progressState, scenarioId));
  }

  function focusMission(missionId: string) {
    setFocusedMissionId(missionId);
    const missionCard = missionCardRefs.current[missionId];
    missionCard?.scrollIntoView?.({ behavior: "smooth", block: "center" });
    missionCard?.focus?.({ preventScroll: true });
  }

  return (
    <div
      className="scenario-mission-flow"
      aria-label="Production case mission flow"
    >
      <div className="scenario-mission-summary">
        <div>
          <span className="eyebrow">Case-progress</span>
          <strong>
            {allComplete
              ? "Produksjonscase fullført"
              : `${completedCount}/${missions.length} faser fullført`}
          </strong>
          <span className="scenario-mission-score">Case-score: {caseScore.score}/{caseScore.maxScore}</span>
        </div>
        <button onClick={resetCurrentScenario} type="button">
          Nullstill case-progress
        </button>
      </div>
      {resultTier ? <ProductionCaseResultBox tier={resultTier} /> : null}
      {nextPhaseAction ? <ProductionCaseNextPhaseBox action={nextPhaseAction} onFocusMission={focusMission} /> : null}
      {tierTarget ? <ProductionCaseTierTargetBox target={tierTarget} /> : null}
      {improvementHint ? <ProductionCaseImprovementHintBox hint={improvementHint} onFocusMission={focusMission} /> : null}
      {caseReport ? <ProductionCaseReportBox bestResult={bestResult} report={caseReport} tierTarget={tierTarget} /> : null}
      {missions.map((mission, index) => {
        const isComplete = completedMissionIdSet.has(mission.id);
        const selectedChoiceId = selectedChoicesByMissionId[mission.id];
        const selectedChoice = mission.choices.find((choice) => choice.id === selectedChoiceId);
        const phaseScore = getProductionCaseMissionScoreSummary(mission, selectedChoiceId);
        return (
          <article
            className={`scenario-mission-card${isComplete ? " scenario-mission-card--complete" : ""}${focusedMissionId === mission.id ? " scenario-production-mission--focused" : ""}`}
            data-mission-id={mission.id}
            id={getProductionCaseMissionElementId(mission.id)}
            key={mission.id}
            ref={(element) => { missionCardRefs.current[mission.id] = element; }}
            tabIndex={-1}
          >
            <span className="scenario-mission-step">{index + 1}</span>
            <div>
              <div className="scenario-mission-card-header">
                <h4>{mission.title}</h4>
                <span>{isComplete ? "Fullført" : "Åpen fase"}</span>
              </div>
              <span className="scenario-mission-score">Fase-score: {phaseScore.score}/{phaseScore.maxScore}</span>
              <p>{mission.prompt}</p>
              <ul className="scenario-brief-list">
                {mission.targets.map((target) => (
                  <li key={target}>{target}</li>
                ))}
              </ul>
              <div className="scenario-mission-choices" aria-label={`Velg produksjonsgrep for ${mission.title}`}>
                <strong>Velg produksjonsgrep</strong>
                <div className="scenario-mission-choice-grid">
                  {mission.choices.map((choice) => (
                    <button
                      aria-pressed={choice.id === selectedChoiceId}
                      className={choice.id === selectedChoiceId ? "scenario-choice-button scenario-choice-button--selected" : "scenario-choice-button"}
                      key={choice.id}
                      onClick={() => selectChoice(mission.id, choice.id)}
                      type="button"
                    >
                      {choice.label}
                    </button>
                  ))}
                </div>
                {selectedChoice ? (
                  <p className={`scenario-choice-feedback scenario-choice-feedback--${selectedChoice.quality}`}>
                    {selectedChoice.feedback}
                  </p>
                ) : (
                  <p className="scenario-choice-feedback">Velg produksjonsgrep før du fullfører fasen.</p>
                )}
              </div>
              <p className="scenario-mission-learning">
                <strong>Forstå produksjonsvalget:</strong> {mission.learningFocus}
              </p>
              <button onClick={() => toggleMission(mission.id)} type="button">
                {isComplete ? "Angre fullført" : "Fullfør fase"}
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function ProductionCaseReportBox({
  bestResult,
  report,
  tierTarget,
}: {
  readonly bestResult: ReturnType<typeof getProductionCaseBestResultEntry>;
  readonly report: NonNullable<ReturnType<typeof getProductionCaseReport>>;
  readonly tierTarget: ReturnType<typeof getProductionCaseTierTarget>;
}) {
  const title = report.completedCount === report.totalMissions ? "Case report" : "Case report under arbeid";
  const strongestMatches = report.matchedPhases.slice(0, 3);

  return (
    <section className="scenario-production-report" aria-label={title}>
      <div className="scenario-production-report-header">
        <span className="eyebrow">{title}</span>
        <strong>{report.learningSummary}</strong>
      </div>
      <div className="scenario-production-report-stats">
        <span>Resultat: {productionCaseResultCopy[report.resultTier].label}</span>
        <span>Case-score: {report.score}/{report.maxScore}</span>
        <span>Faser: {report.completedCount}/{report.totalMissions}</span>
        {tierTarget ? <span>{tierTarget.label} · {tierTarget.description}</span> : null}
        {bestResult ? (
          <span>Beste resultat: {productionCaseResultCopy[bestResult.bestTier].label} · {bestResult.bestScore}/{bestResult.maxScore}</span>
        ) : null}
      </div>
      <div className="scenario-production-report-columns">
        <div>
          <h4>Sterkeste treff</h4>
          {strongestMatches.length > 0 ? (
            <ul>
              {strongestMatches.map((phase) => (
                <li key={phase.missionId}>
                  <span>{phase.title}</span>
                  <small>{phase.selectedChoiceLabel}</small>
                </li>
              ))}
            </ul>
          ) : (
            <p>Velg produksjonsvalg som matcher for å registrere sterkeste treff.</p>
          )}
        </div>
        <div>
          <h4>Bør forbedres</h4>
          {report.weakPhases.length > 0 ? (
            <ul>
              {report.weakPhases.map((phase) => (
                <li key={phase.missionId}>
                  <span>{phase.title}</span>
                  <small>{phase.selectedChoiceLabel ?? "Mangler produksjonsvalg"}</small>
                </li>
              ))}
            </ul>
          ) : (
            <p>Ingen svake faser registrert.</p>
          )}
          {report.improvementHint ? <p>{report.improvementHint.description}</p> : null}
        </div>
      </div>
    </section>
  );
}



function ProductionCaseTierTargetBox({
  target,
}: {
  readonly target: NonNullable<ReturnType<typeof getProductionCaseTierTarget>>;
}) {
  return (
    <section className={`scenario-production-tier-target${target.isMaxTier ? " scenario-production-tier-target--max" : ""}`} aria-label="Neste nivå">
      <span className="eyebrow">Neste nivå</span>
      <strong>{target.label}</strong>
      <p>{target.description}</p>
      <small>Nå: {target.currentTierLabel} · Case-score {target.score}/{target.maxScore}</small>
    </section>
  );
}

function ProductionCaseNextPhaseBox({
  action,
  onFocusMission,
}: {
  readonly action: NonNullable<ReturnType<typeof getProductionCaseNextPhaseAction>>;
  readonly onFocusMission: (missionId: string) => void;
}) {
  return (
    <section className={`scenario-production-next-phase scenario-production-next-phase--${action.actionType}`} aria-label="Neste fase">
      <span className="eyebrow">Neste fase</span>
      <strong>{action.label}: {action.title}</strong>
      <p>{action.description}</p>
      <button onClick={() => onFocusMission(action.missionId)} type="button">
        Gå til fase
      </button>
    </section>
  );
}

function ProductionCaseImprovementHintBox({
  hint,
  onFocusMission,
}: {
  readonly hint: NonNullable<ReturnType<typeof getProductionCaseImprovementHint>>;
  readonly onFocusMission: (missionId: string) => void;
}) {
  return (
    <section className={`scenario-production-improvement scenario-production-improvement--${hint.hintType}`} aria-label="Forbedre neste">
      <span className="eyebrow">Forbedre neste</span>
      <strong>{hint.label}: {hint.title}</strong>
      <small>Fase-score: {hint.currentScore}/{hint.maxScore}</small>
      <p>{hint.description}</p>
      <button onClick={() => onFocusMission(hint.missionId)} type="button">
        Gå til fase
      </button>
    </section>
  );
}

function ProductionCaseResultBox({
  tier,
}: {
  readonly tier: NonNullable<ReturnType<typeof getProductionCaseResultTier>>;
}) {
  const result = productionCaseResultCopy[tier];

  return (
    <section className={`scenario-production-result scenario-production-result--${tier}`} aria-label="Resultat">
      <span className="eyebrow">Resultat</span>
      <strong>{result.label}</strong>
      <p>{result.description}</p>
    </section>
  );
}

const productionCaseResultCopy = {
  not_started: {
    label: "Ikke startet",
    description: "Start produksjonscaset for å bygge forståelsen.",
  },
  in_progress: {
    label: "Under arbeid",
    description: "Du er i gang med å rekonstruere produksjonsvalgene.",
  },
  assistant: {
    label: "Assistent",
    description: "Du fullførte caset, men flere valg traff ikke filmens logikk.",
  },
  producer: {
    label: "Produsent",
    description: "Du forstod de viktigste produksjonsvalgene.",
  },
  auteur: {
    label: "Auteur",
    description: "Du matchet filmens produksjonslogikk svært presist.",
  },
} as const satisfies Record<NonNullable<ReturnType<typeof getProductionCaseResultTier>>, { readonly label: string; readonly description: string }>;

function BriefSection({
  title,
  items,
}: {
  readonly title: string;
  readonly items: readonly string[];
}) {
  return (
    <section className="scenario-brief-section">
      <h4>{title}</h4>
      <ul className="scenario-brief-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function getProductionCaseMissionElementId(missionId: string) {
  return `production-case-mission-${missionId}`;
}

function getBriefIntro(brief: ScenarioProductionBrief, filmTitle: string) {
  if (brief.briefType === "production_case") {
    return `Forstå produksjonsvalget bak ${filmTitle}. Følg fasene som et konkret case i manus, bilde, klipp og lyd for denne filmen.`;
  }

  return "This imported seed still needs film-specific production-case design; use the fallback targets as provisional craft guidance.";
}

function formatVerificationStatus(
  status: ScenarioProductionBrief["verificationStatus"],
) {
  return status.replace(/_/g, " ");
}

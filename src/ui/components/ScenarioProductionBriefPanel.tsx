import { useEffect, useMemo, useRef, useState } from "react";
import {
  getProductionCaseImprovementHint,
  getProductionCaseBestResultEntry,
  getProductionCaseBestResultFeedback,
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
  type ProductionCaseBestResultFeedback,
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
  onBackToProductionCases,
  onStartNextScenario,
  scenario,
}: {
  readonly onBackToProductionCases?: (() => void) | undefined;
  readonly onStartNextScenario?: (() => void) | undefined;
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
          onBackToProductionCases={onBackToProductionCases}
          onStartNextScenario={onStartNextScenario}
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
  onBackToProductionCases,
  onStartNextScenario,
  scenarioId,
}: {
  readonly missions: readonly ProductionCaseMission[];
  readonly onBackToProductionCases?: (() => void) | undefined;
  readonly onStartNextScenario?: (() => void) | undefined;
  readonly scenarioId: string;
}) {
  const [progressState, setProgressState] = useState<ProductionCaseProgressState>({});
  const [bestResultsState, setBestResultsState] = useState<ProductionCaseBestResultsState>({});
  const [bestResultFeedback, setBestResultFeedback] = useState<ProductionCaseBestResultFeedback | undefined>();
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
  const completedCaseReport = allComplete ? caseReport : undefined;
  const bestResult = getProductionCaseBestResultEntry(bestResultsState, scenarioId);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const feedback = getProductionCaseBestResultFeedback(completedCaseReport, bestResult);
    const updatedBestResult = feedback
      ? updateProductionCaseBestResult(scenarioId, completedCaseReport, window.localStorage)
      : undefined;
    if (updatedBestResult) {
      setBestResultFeedback(feedback);
      setBestResultsState(readProductionCaseBestResults(window.localStorage));
    } else if (!feedback) {
      setBestResultFeedback(undefined);
    }
  }, [bestResult, completedCaseReport, scenarioId]);

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
          <span className="eyebrow">Case progress</span>
          <strong>
            {allComplete
              ? "Case complete · report unlocked"
              : `${completedCount}/${missions.length} phases complete`}
          </strong>
          <span className="scenario-mission-score">Case-score: {caseScore.score}/{caseScore.maxScore}</span>
        </div>
        <button onClick={resetCurrentScenario} type="button">
          Reset case progress
        </button>
      </div>
      <div className="scenario-production-guidance" aria-label="Production case guidance">
        {resultTier ? <ProductionCaseResultBox tier={resultTier} /> : null}
        {nextPhaseAction ? <ProductionCaseNextPhaseBox action={nextPhaseAction} onFocusMission={focusMission} /> : null}
        {tierTarget ? <ProductionCaseTierTargetBox target={tierTarget} /> : null}
        {improvementHint ? <ProductionCaseImprovementHintBox hint={improvementHint} onFocusMission={focusMission} /> : null}
      </div>
      {completedCaseReport ? <ProductionCaseReportBox bestResult={bestResult} bestResultFeedback={bestResultFeedback} onBackToProductionCases={onBackToProductionCases} onPlayAgain={resetCurrentScenario} onStartNextScenario={onStartNextScenario} report={completedCaseReport} tierTarget={tierTarget} /> : null}
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
                <span>{isComplete ? "Complete" : "Open phase"}</span>
              </div>
              <span className="scenario-mission-score">Phase score: {phaseScore.score}/{phaseScore.maxScore}</span>
              <p>{mission.prompt}</p>
              <ul className="scenario-brief-list">
                {mission.targets.map((target) => (
                  <li key={target}>{target}</li>
                ))}
              </ul>
              <div className="scenario-mission-choices" aria-label={`Choose a production approach for ${mission.title}`}>
                <strong>Choose a production approach</strong>
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
                  <p className="scenario-choice-feedback">Choose a production approach before completing this phase.</p>
                )}
              </div>
              <p className="scenario-mission-learning">
                <strong>Understand the production choice:</strong> {mission.learningFocus}
              </p>
              <button onClick={() => toggleMission(mission.id)} type="button">
                {isComplete ? "Undo complete" : "Complete phase"}
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
  bestResultFeedback,
  onBackToProductionCases,
  onPlayAgain,
  onStartNextScenario,
  report,
  tierTarget,
}: {
  readonly bestResult: ReturnType<typeof getProductionCaseBestResultEntry>;
  readonly bestResultFeedback: ProductionCaseBestResultFeedback | undefined;
  readonly onBackToProductionCases?: (() => void) | undefined;
  readonly onPlayAgain: () => void;
  readonly onStartNextScenario?: (() => void) | undefined;
  readonly report: NonNullable<ReturnType<typeof getProductionCaseReport>>;
  readonly tierTarget: ReturnType<typeof getProductionCaseTierTarget>;
}) {
  const title = "Case report";
  const strongestMatches = report.matchedPhases.slice(0, 3);

  return (
    <section className="scenario-production-report" aria-label={title}>
      <div className="scenario-production-report-header">
        <span className="eyebrow">{title}</span>
        <strong>{report.learningSummary}</strong>
      </div>
      {bestResultFeedback ? <ProductionCaseBestResultFeedbackBox feedback={bestResultFeedback} maxScore={report.maxScore} /> : null}
      <div className="scenario-production-report-stats">
        <span>Result: {productionCaseResultCopy[report.resultTier].label}</span>
        <span>Case-score: {report.score}/{report.maxScore}</span>
        <span>Phases: {report.completedCount}/{report.totalMissions}</span>
        {tierTarget ? <span>{tierTarget.label} · {tierTarget.description}</span> : null}
        {bestResult ? (
          <span>Best result: {productionCaseResultCopy[bestResult.bestTier].label} · {bestResult.bestScore}/{bestResult.maxScore}</span>
        ) : null}
      </div>
      <div className="scenario-production-report-actions" aria-label="Case continuation actions">
        <button className="secondary-button" onClick={onPlayAgain} type="button">Play again to improve</button>
        {onStartNextScenario ? (
          <button onClick={onStartNextScenario} type="button">Continue to next case</button>
        ) : (
          <button className="secondary-button" onClick={onBackToProductionCases} type="button">Back to Production Cases</button>
        )}
      </div>
      <div className="scenario-production-report-columns">
        <div>
          <h4>Strongest matches</h4>
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
            <p>Choose production approaches and complete phases to build strongest matches.</p>
          )}
        </div>
        <div>
          <h4>Improve next</h4>
          {report.weakPhases.length > 0 ? (
            <ul>
              {report.weakPhases.map((phase) => (
                <li key={phase.missionId}>
                  <span>{phase.title}</span>
                  <small>{phase.selectedChoiceLabel ?? "Missing production choice"}</small>
                </li>
              ))}
            </ul>
          ) : (
            <p>No weak phases recorded. You can replay or continue to the next case.</p>
          )}
          {report.improvementHint ? <p>{report.improvementHint.description}</p> : null}
        </div>
      </div>
    </section>
  );
}



function ProductionCaseBestResultFeedbackBox({
  feedback,
  maxScore,
}: {
  readonly feedback: ProductionCaseBestResultFeedback;
  readonly maxScore: number;
}) {
  const showScoreChange = feedback.previousScore !== undefined && feedback.previousScore !== feedback.newScore;

  return (
    <div className={`scenario-production-best-feedback scenario-production-best-feedback--${feedback.feedbackType}`} aria-label="New best result feedback">
      <div>
        <strong>{feedback.label}</strong>
        <p>{feedback.description}</p>
      </div>
      {showScoreChange ? (
        <span>{feedback.previousScore}/{maxScore} → {feedback.newScore}/{maxScore}</span>
      ) : null}
    </div>
  );
}

function ProductionCaseTierTargetBox({
  target,
}: {
  readonly target: NonNullable<ReturnType<typeof getProductionCaseTierTarget>>;
}) {
  return (
    <section className={`scenario-production-tier-target${target.isMaxTier ? " scenario-production-tier-target--max" : ""}`} aria-label="Next tier">
      <span className="eyebrow">Next tier</span>
      <strong>{target.label}</strong>
      <p>{target.description}</p>
      <small>Now: {target.currentTierLabel} · Case-score {target.score}/{target.maxScore}</small>
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
    <section className={`scenario-production-next-phase scenario-production-next-phase--${action.actionType}`} aria-label="Next phase">
      <span className="eyebrow">Next phase</span>
      <strong>{action.label}: {action.title}</strong>
      <p>{action.description}</p>
      <button onClick={() => onFocusMission(action.missionId)} type="button">
        Go to phase
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
    <section className={`scenario-production-improvement scenario-production-improvement--${hint.hintType}`} aria-label="Improve next">
      <span className="eyebrow">Improve next</span>
      <strong>{hint.label}: {hint.title}</strong>
      <small>Phase score: {hint.currentScore}/{hint.maxScore}</small>
      <p>{hint.description}</p>
      <button onClick={() => onFocusMission(hint.missionId)} type="button">
        Go to phase
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
    <section className={`scenario-production-result scenario-production-result--${tier}`} aria-label="Result">
      <span className="eyebrow">Result</span>
      <strong>{result.label}</strong>
      <p>{result.description}</p>
    </section>
  );
}

const productionCaseResultCopy = {
  not_started: {
    label: "Not started",
    description: "Start by choosing an approach in each phase, then complete every phase to unlock the Case report.",
  },
  in_progress: {
    label: "In progress",
    description: "Finish the open phases to unlock the Case report.",
  },
  assistant: {
    label: "Assistant",
    description: "You completed the case, but several choices missed the film's logic.",
  },
  producer: {
    label: "Producer",
    description: "You understood the most important production choices.",
  },
  auteur: {
    label: "Auteur",
    description: "You matched the film's production logic very precisely.",
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
    return `Understand the production choices behind ${filmTitle}. Follow the phases as a concrete case in script, image, editing, and sound for this film.`;
  }

  return "This imported seed still needs film-specific production-case design; use the fallback targets as provisional craft guidance.";
}

function formatVerificationStatus(
  status: ScenarioProductionBrief["verificationStatus"],
) {
  return status.replace(/_/g, " ");
}

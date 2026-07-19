import { useEffect, useMemo, useRef, useState } from "react";
import { canCompleteProductionCaseMission } from "../../core/canCompleteProductionCaseMission";
import {
  getProductionCaseLearningHint,
  getProductionCaseLearningNextAction,
  getProductionCaseLearningReport,
  getProductionCaseLearningStatus,
  type ProductionCaseLearningHint,
  type ProductionCaseLearningNextAction,
  type ProductionCaseLearningReport,
} from "../../core/productionCaseLearning";
import {
  getProductionCaseProgressEntry,
  readProductionCaseProgress,
  resetProductionCaseScenarioProgress,
  setProductionCaseMissionChoice,
  setProductionCaseMissionCompletion,
  writeProductionCaseProgress,
  type ProductionCaseProgressState,
} from "../../core/productionCaseProgress";
import type { FilmScenarioSeed } from "../data/filmScenarios";
import {
  createProductionCaseMissions,
  resolveScenarioProductionBrief,
  type ProductionCaseMission,
  type ScenarioProductionBrief,
} from "../data/scenarioProductionBriefs";
import {
  getProductionCaseVerification,
  type ProductionCaseVerificationRecord,
} from "../data/scenarioProductionVerificationRegistry";
import { ScenarioFilmStudyPanel } from "./ScenarioFilmStudyPanel";

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
  const sourceVerification = getProductionCaseVerification(brief.scenarioId);
  const verificationStatus = sourceVerification?.status ?? brief.verificationStatus;

  return (
    <section className="scenario-brief-panel" aria-labelledby="scenario-brief-title">
      <div className="scenario-brief-header">
        <div>
          <span className="eyebrow">
            {brief.briefType === "seed_fallback"
              ? "Imported seed fallback"
              : sourceVerification
                ? "Source-verified film case"
                : "Film case · research pending"}
          </span>
          <h3 id="scenario-brief-title">{brief.title}</h3>
          <p>{getBriefIntro(brief, scenario.film.title)}</p>
          <p>{brief.logline}</p>
        </div>
        <span className="scenario-brief-status">{formatVerificationStatus(verificationStatus)}</span>
      </div>

      <ScenarioFilmStudyPanel brief={brief} scenario={scenario} />

      {missions.length > 0 && brief.briefType === "production_case" ? (
        <ProductionCaseMissionFlow
          missions={missions}
          onBackToProductionCases={onBackToProductionCases}
          onStartNextScenario={onStartNextScenario}
          scenarioId={brief.scenarioId}
          sourceVerification={sourceVerification}
        />
      ) : (
        <div className="scenario-brief-grid">
          <BriefSection title="Genre targets" items={brief.genreTargets} />
          <BriefSection title="Tone" items={brief.toneTargets} />
          <BriefSection title="Screenplay" items={brief.screenplayTargets} />
          <BriefSection title="Cinematography" items={brief.cinematographyTargets} />
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
  sourceVerification,
}: {
  readonly missions: readonly ProductionCaseMission[];
  readonly onBackToProductionCases?: (() => void) | undefined;
  readonly onStartNextScenario?: (() => void) | undefined;
  readonly scenarioId: string;
  readonly sourceVerification: ProductionCaseVerificationRecord | undefined;
}) {
  const [progressState, setProgressState] = useState<ProductionCaseProgressState>({});
  const [focusedMissionId, setFocusedMissionId] = useState<string | undefined>();
  const [expandedMissionIds, setExpandedMissionIds] = useState<readonly string[]>([]);
  const missionCardRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (typeof window === "undefined") return;
    setProgressState(readProductionCaseProgress(window.localStorage));
  }, [scenarioId]);

  const progressEntry = useMemo(
    () => getProductionCaseProgressEntry(progressState, scenarioId),
    [progressState, scenarioId],
  );
  const completedMissionIdSet = useMemo(
    () => new Set(progressEntry.completedMissionIds),
    [progressEntry.completedMissionIds],
  );
  const selectedChoicesByMissionId = progressEntry.selectedChoicesByMissionId ?? {};
  const isMissionComplete = (mission: ProductionCaseMission) =>
    completedMissionIdSet.has(mission.id)
    && canCompleteProductionCaseMission(progressEntry, mission.id, mission.choices);
  const completedCount = missions.filter(isMissionComplete).length;
  const allComplete = missions.length > 0 && completedCount === missions.length;
  const learningStatus = getProductionCaseLearningStatus(missions, progressEntry);
  const learningHint = getProductionCaseLearningHint(missions, progressEntry);
  const nextAction = getProductionCaseLearningNextAction(missions, progressEntry);
  const learningReport = allComplete ? getProductionCaseLearningReport(missions, progressEntry) : undefined;

  function updateProgress(nextState: ProductionCaseProgressState) {
    setProgressState(nextState);
    if (typeof window !== "undefined") writeProductionCaseProgress(window.localStorage, nextState);
  }

  function toggleMission(mission: ProductionCaseMission) {
    const isComplete = isMissionComplete(mission);
    const completing = !isComplete;
    if (completing && !canCompleteProductionCaseMission(progressEntry, mission.id, mission.choices)) {
      focusMission(mission.id);
      return;
    }
    if (completing) setExpandedMissionIds((current) => current.filter((id) => id !== mission.id));
    updateProgress(setProductionCaseMissionCompletion(progressState, scenarioId, mission.id, completing));
  }

  function toggleMissionExpanded(missionId: string) {
    setExpandedMissionIds((current) => current.includes(missionId)
      ? current.filter((id) => id !== missionId)
      : [...current, missionId]);
  }

  function selectChoice(missionId: string, choiceId: string) {
    updateProgress(setProductionCaseMissionChoice(progressState, scenarioId, missionId, choiceId));
  }

  function resetCurrentScenario() {
    updateProgress(resetProductionCaseScenarioProgress(progressState, scenarioId));
  }

  function focusMission(missionId: string) {
    setFocusedMissionId(missionId);
    setExpandedMissionIds((current) => current.includes(missionId) ? current : [...current, missionId]);
    const missionCard = missionCardRefs.current[missionId];
    missionCard?.scrollIntoView?.({ behavior: "smooth", block: "center" });
    missionCard?.focus?.({ preventScroll: true });
  }

  const activeMissionId = missions.find((mission) => !isMissionComplete(mission))?.id;

  return (
    <div className="scenario-mission-flow" aria-label="Film case learning flow">
      <div className="scenario-mission-summary">
        <div>
          <span className="eyebrow">Learning progress</span>
          <strong>{allComplete ? "Case complete · learning report unlocked" : `${completedCount}/${missions.length} phases complete`}</strong>
          <span className="scenario-mission-score">{learningStatus.label}</span>
        </div>
        <button onClick={resetCurrentScenario} type="button">Reset case progress</button>
      </div>

      <div className="scenario-production-guidance" aria-label="Film case guidance">
        {nextAction ? <ProductionCaseNextLearningBox action={nextAction} onFocusMission={focusMission} /> : null}
        {allComplete && learningHint ? <ProductionCaseLearningHintBox hint={learningHint} onFocusMission={focusMission} /> : null}
      </div>

      {learningReport ? (
        <ProductionCaseLearningReportBox
          onBackToProductionCases={onBackToProductionCases}
          onReviewAgain={resetCurrentScenario}
          onStartNextScenario={onStartNextScenario}
          report={learningReport}
          sourceVerification={sourceVerification}
        />
      ) : null}

      {missions.map((mission, index) => {
        const isComplete = isMissionComplete(mission);
        const selectedChoiceId = selectedChoicesByMissionId[mission.id];
        const selectedChoice = mission.choices.find((choice) => choice.id === selectedChoiceId);
        const isActive = mission.id === activeMissionId;
        const isExpanded = isActive || expandedMissionIds.includes(mission.id);

        if (!isExpanded) {
          return (
            <article
              className={`scenario-mission-card scenario-mission-card--collapsed${isComplete ? " scenario-mission-card--complete" : ""}`}
              data-mission-id={mission.id}
              id={getProductionCaseMissionElementId(mission.id)}
              key={mission.id}
              ref={(element) => { missionCardRefs.current[mission.id] = element; }}
              tabIndex={-1}
            >
              <span className="scenario-mission-step">{isComplete ? "✓" : index + 1}</span>
              <div className="scenario-mission-collapsed-row">
                <div>
                  <h4>{mission.title}</h4>
                  {selectedChoice ? <p>{selectedChoice.label}</p> : <p>No approach chosen yet.</p>}
                </div>
                <button onClick={() => toggleMissionExpanded(mission.id)} type="button">
                  {isComplete ? "Show details" : "Open phase"}
                </button>
              </div>
            </article>
          );
        }

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
                <span>{isComplete ? "Complete" : isActive ? "Current phase" : "Open phase"}</span>
              </div>
              <p>{mission.prompt}</p>
              <ul className="scenario-brief-list">
                {mission.targets.map((target) => <li key={target}>{target}</li>)}
              </ul>
              <div className="scenario-mission-choices" aria-label={`Choose an explanation for ${mission.title}`}>
                <strong>Which approach best explains the film?</strong>
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
                  <p className={`scenario-choice-feedback scenario-choice-feedback--${selectedChoice.quality}`}>{selectedChoice.feedback}</p>
                ) : (
                  <p className="scenario-choice-feedback">Choose an approach before completing this phase.</p>
                )}
              </div>
              <p className="scenario-mission-learning">
                <strong>What this phase teaches:</strong> {mission.learningFocus}
              </p>
              <div className="scenario-mission-card-actions">
                <button disabled={!isComplete && !selectedChoice} onClick={() => toggleMission(mission)} type="button">
                  {isComplete ? "Undo complete" : "Complete phase"}
                </button>
                {!isActive ? (
                  <button className="secondary-button" onClick={() => toggleMissionExpanded(mission.id)} type="button">Hide details</button>
                ) : null}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function ProductionCaseLearningReportBox({
  onBackToProductionCases,
  onReviewAgain,
  onStartNextScenario,
  report,
  sourceVerification,
}: {
  readonly onBackToProductionCases?: (() => void) | undefined;
  readonly onReviewAgain: () => void;
  readonly onStartNextScenario?: (() => void) | undefined;
  readonly report: ProductionCaseLearningReport;
  readonly sourceVerification: ProductionCaseVerificationRecord | undefined;
}) {
  const reviewPhases = [...report.revisitPhases, ...report.developingPhases];
  return (
    <section className="scenario-production-report" aria-label="Learning report">
      <div className="scenario-production-report-header">
        <span className="eyebrow">Learning report</span>
        <strong>{report.learningSummary}</strong>
      </div>
      <div className="scenario-production-report-stats">
        <span>Phases studied: {report.completedCount}/{report.totalMissions}</span>
        <span>Clearly identified: {report.clearPhases.length}</span>
        <span>Worth comparing again: {reviewPhases.length}</span>
      </div>
      <div className="scenario-production-report-actions" aria-label="Case continuation actions">
        <button className="secondary-button" onClick={onReviewAgain} type="button">Review this case again</button>
        {onStartNextScenario ? (
          <button onClick={onStartNextScenario} type="button">Continue to next case</button>
        ) : (
          <button className="secondary-button" onClick={onBackToProductionCases} type="button">Back to Production Cases</button>
        )}
      </div>
      <div className="scenario-production-report-columns">
        <div>
          <h4>Understood clearly</h4>
          {report.clearPhases.length > 0 ? (
            <ul>{report.clearPhases.map((phase) => <li key={phase.missionId}><span>{phase.title}</span><small>{phase.selectedChoiceLabel}</small></li>)}</ul>
          ) : <p>No phase is marked as clearly identified yet. Review the explanations without penalty.</p>}
        </div>
        <div>
          <h4>Review and compare</h4>
          {reviewPhases.length > 0 ? (
            <ul>{reviewPhases.map((phase) => <li key={phase.missionId}><span>{phase.title}</span><small>{phase.selectedChoiceLabel}</small></li>)}</ul>
          ) : <p>No phase needs special review. Continue when you are ready.</p>}
        </div>
      </div>
      {sourceVerification ? <ProductionCaseSources verification={sourceVerification} /> : null}
    </section>
  );
}

function ProductionCaseSources({ verification }: { readonly verification: ProductionCaseVerificationRecord }) {
  return (
    <section className="scenario-production-sources" aria-label="Sources for this film case">
      <div>
        <span className="eyebrow">Source basis</span>
        <strong>Verified {verification.verifiedAt}</strong>
        <p>{verification.summary}</p>
      </div>
      <ul>
        {verification.sources.map((source) => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noreferrer">{source.title}</a>
            <small>{source.publisher} · {source.supports.join(", ")}</small>
            <p>{source.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProductionCaseNextLearningBox({
  action,
  onFocusMission,
}: {
  readonly action: ProductionCaseLearningNextAction;
  readonly onFocusMission: (missionId: string) => void;
}) {
  return (
    <section className={`scenario-production-next-phase scenario-production-next-phase--${action.actionType}`} aria-label="Next learning step">
      <span className="eyebrow">Next learning step</span>
      <strong>{action.label}: {action.title}</strong>
      <p>{action.description}</p>
      <button onClick={() => onFocusMission(action.missionId)} type="button">Go to phase</button>
    </section>
  );
}

function ProductionCaseLearningHintBox({
  hint,
  onFocusMission,
}: {
  readonly hint: ProductionCaseLearningHint;
  readonly onFocusMission: (missionId: string) => void;
}) {
  return (
    <section className={`scenario-production-improvement scenario-production-improvement--${hint.hintType}`} aria-label="Suggested review">
      <span className="eyebrow">Suggested review</span>
      <strong>{hint.label}: {hint.title}</strong>
      <p>{hint.description}</p>
      <button onClick={() => onFocusMission(hint.missionId)} type="button">Review phase</button>
    </section>
  );
}

function BriefSection({ title, items }: { readonly title: string; readonly items: readonly string[] }) {
  return (
    <section className="scenario-brief-section">
      <h4>{title}</h4>
      <ul className="scenario-brief-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </section>
  );
}

function getProductionCaseMissionElementId(missionId: string) {
  return `production-case-mission-${missionId}`;
}

function getBriefIntro(brief: ScenarioProductionBrief, filmTitle: string) {
  if (brief.briefType === "production_case") {
    return `Study the filmmaking choices behind ${filmTitle}. Each phase connects a concrete method to what the finished film does.`;
  }
  return "This imported seed still needs film-specific case design; use the fallback targets as provisional craft guidance.";
}

function formatVerificationStatus(status: ScenarioProductionBrief["verificationStatus"] | "verified") {
  return status.replace(/_/g, " ");
}

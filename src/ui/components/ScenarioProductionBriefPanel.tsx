import { useEffect, useMemo, useRef, useState } from "react";
import { canCompleteProductionCaseMission } from "../../core/canCompleteProductionCaseMission";
import {
  formatProductionCaseBriefTitle,
  getProductionCaseBriefIntro,
  getProductionCaseVerificationLabel,
  PRODUCTION_CASE_BRIEF_COPY,
  type ProductionCaseBriefCopy,
} from "../../core/productionCaseBriefCopy";
import {
  getProductionCaseChoiceFeedback,
  getProductionCaseMissionPresentation,
  PRODUCTION_CASE_MISSION_UI_COPY,
} from "../../core/productionCaseMissionCopy";
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
  getProductionCaseLearningHintPresentation,
  getProductionCaseLearningNextActionPresentation,
  getProductionCaseLearningSummary,
} from "../../core/productionCaseLearningCopy";
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
} from "../data/scenarioProductionBriefs";
import {
  getProductionCaseVerification,
  type ProductionCaseVerificationRecord,
} from "../data/scenarioProductionVerificationRegistry";
import { useFilmWorkLanguage } from "../filmWorkLanguage";
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
  const [language] = useFilmWorkLanguage();
  const briefCopy = PRODUCTION_CASE_BRIEF_COPY[language];
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
              ? briefCopy.header.importedSeedFallback
              : sourceVerification
                ? briefCopy.header.sourceVerifiedFilmCase
                : briefCopy.header.researchPendingFilmCase}
          </span>
          <h3 id="scenario-brief-title">{formatProductionCaseBriefTitle(language, brief.title)}</h3>
          <p>{getProductionCaseBriefIntro(language, brief.briefType, scenario.film.title)}</p>
          <p>{brief.logline}</p>
        </div>
        <span className="scenario-brief-status">{getProductionCaseVerificationLabel(language, verificationStatus)}</span>
      </div>

      <ScenarioFilmStudyPanel brief={brief} scenario={scenario} />

      {missions.length > 0 && brief.briefType === "production_case" ? (
        <ProductionCaseMissionFlow
          caseTitle={brief.title.replace(/ production brief$/i, "")}
          missions={missions}
          onBackToProductionCases={onBackToProductionCases}
          onStartNextScenario={onStartNextScenario}
          scenarioId={brief.scenarioId}
          sourceVerification={sourceVerification}
        />
      ) : (
        <div className="scenario-brief-grid">
          <BriefSection title={briefCopy.sections.genreTargets} items={brief.genreTargets} />
          <BriefSection title={briefCopy.sections.toneTargets} items={brief.toneTargets} />
          <BriefSection title={briefCopy.sections.screenplayTargets} items={brief.screenplayTargets} />
          <BriefSection title={briefCopy.sections.cinematographyTargets} items={brief.cinematographyTargets} />
          <BriefSection title={briefCopy.sections.editingTargets} items={brief.editingTargets} />
          <BriefSection title={briefCopy.sections.soundTargets} items={brief.soundTargets} />
          <BriefSection title={briefCopy.sections.learningGoals} items={brief.learningGoals} />
        </div>
      )}
    </section>
  );
}

function ProductionCaseMissionFlow({
  caseTitle,
  missions,
  onBackToProductionCases,
  onStartNextScenario,
  scenarioId,
  sourceVerification,
}: {
  readonly caseTitle: string;
  readonly missions: readonly ProductionCaseMission[];
  readonly onBackToProductionCases?: (() => void) | undefined;
  readonly onStartNextScenario?: (() => void) | undefined;
  readonly scenarioId: string;
  readonly sourceVerification: ProductionCaseVerificationRecord | undefined;
}) {
  const [language] = useFilmWorkLanguage();
  const briefUiCopy = PRODUCTION_CASE_BRIEF_COPY[language];
  const missionUiCopy = PRODUCTION_CASE_MISSION_UI_COPY[language];
  const [progressState, setProgressState] = useState<ProductionCaseProgressState>({});
  const [focusedMissionId, setFocusedMissionId] = useState<string | undefined>();
  const [expandedMissionIds, setExpandedMissionIds] = useState<readonly string[]>([]);
  const missionCardRefs = useRef<Record<string, HTMLElement | null>>({});
  const missionPresentationsById = useMemo(() => new Map(
    missions.map((mission) => [mission.id, getProductionCaseMissionPresentation(language, mission.phase, caseTitle)]),
  ), [caseTitle, language, missions]);

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
  const getMissionTitle = (missionId: string, fallback: string) => missionPresentationsById.get(missionId)?.title ?? fallback;

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
    <div className="scenario-mission-flow" aria-label={briefUiCopy.flow.learningFlowAriaLabel}>
      <div className="scenario-mission-summary">
        <div>
          <span className="eyebrow">{briefUiCopy.flow.learningProgress}</span>
          <strong>{allComplete ? briefUiCopy.flow.caseCompleteReportUnlocked : briefUiCopy.flow.phasesComplete(completedCount, missions.length)}</strong>
          <span className="scenario-mission-score">{briefUiCopy.flow.learningStatus[learningStatus.status]}</span>
        </div>
        <button onClick={resetCurrentScenario} type="button">{briefUiCopy.flow.resetCaseProgress}</button>
      </div>

      <div className="scenario-production-guidance" aria-label={briefUiCopy.flow.guidanceAriaLabel}>
        {nextAction ? <ProductionCaseNextLearningBox action={nextAction} copy={briefUiCopy} missionTitle={getMissionTitle(nextAction.missionId, nextAction.title)} onFocusMission={focusMission} /> : null}
        {allComplete && learningHint ? <ProductionCaseLearningHintBox copy={briefUiCopy} hint={learningHint} missionTitle={getMissionTitle(learningHint.missionId, learningHint.title)} onFocusMission={focusMission} /> : null}
      </div>

      {learningReport ? (
        <ProductionCaseLearningReportBox
          copy={briefUiCopy}
          getMissionTitle={getMissionTitle}
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
        const missionPresentation = missionPresentationsById.get(mission.id)
          ?? getProductionCaseMissionPresentation(language, mission.phase, caseTitle);

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
                  <h4>{missionPresentation.title}</h4>
                  {selectedChoice ? <p>{selectedChoice.label}</p> : <p>{briefUiCopy.flow.noApproachChosen}</p>}
                </div>
                <button onClick={() => toggleMissionExpanded(mission.id)} type="button">
                  {isComplete ? briefUiCopy.flow.showDetails : missionUiCopy.openPhase}
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
                <h4>{missionPresentation.title}</h4>
                <span>{isComplete ? missionUiCopy.phaseComplete : isActive ? missionUiCopy.currentPhase : missionUiCopy.openPhase}</span>
              </div>
              <p>{missionPresentation.prompt}</p>
              <ul className="scenario-brief-list">
                {mission.targets.map((target) => <li key={target}>{target}</li>)}
              </ul>
              <div className="scenario-mission-choices" aria-label={briefUiCopy.flow.chooseExplanationAriaLabel(missionPresentation.title)}>
                <strong>{briefUiCopy.flow.choiceQuestion}</strong>
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
                  <p className={`scenario-choice-feedback scenario-choice-feedback--${selectedChoice.quality}`}>{getProductionCaseChoiceFeedback(language, selectedChoice.quality, selectedChoice.feedback)}</p>
                ) : (
                  <p className="scenario-choice-feedback">{missionUiCopy.feedback.chooseBeforeCompleting}</p>
                )}
              </div>
              <p className="scenario-mission-learning">
                <strong>{missionUiCopy.learningLabel}</strong> {missionPresentation.learningFocus}
              </p>
              <div className="scenario-mission-card-actions">
                <button disabled={!isComplete && !selectedChoice} onClick={() => toggleMission(mission)} type="button">
                  {isComplete ? missionUiCopy.undoComplete : missionUiCopy.completePhase}
                </button>
                {!isActive ? (
                  <button className="secondary-button" onClick={() => toggleMissionExpanded(mission.id)} type="button">{briefUiCopy.flow.hideDetails}</button>
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
  copy,
  getMissionTitle,
  onBackToProductionCases,
  onReviewAgain,
  onStartNextScenario,
  report,
  sourceVerification,
}: {
  readonly copy: ProductionCaseBriefCopy;
  readonly getMissionTitle: (missionId: string, fallback: string) => string;
  readonly onBackToProductionCases?: (() => void) | undefined;
  readonly onReviewAgain: () => void;
  readonly onStartNextScenario?: (() => void) | undefined;
  readonly report: ProductionCaseLearningReport;
  readonly sourceVerification: ProductionCaseVerificationRecord | undefined;
}) {
  const [language] = useFilmWorkLanguage();
  const reviewPhases = [...report.revisitPhases, ...report.developingPhases];
  return (
    <section className="scenario-production-report" aria-label={copy.flow.learningReportAriaLabel}>
      <div className="scenario-production-report-header">
        <span className="eyebrow">{copy.flow.learningReport}</span>
        <strong>{getProductionCaseLearningSummary(language, report)}</strong>
      </div>
      <div className="scenario-production-report-stats">
        <span>{copy.flow.phasesStudied(report.completedCount, report.totalMissions)}</span>
        <span>{copy.flow.clearlyIdentified(report.clearPhases.length)}</span>
        <span>{copy.flow.worthComparingAgain(reviewPhases.length)}</span>
      </div>
      <div className="scenario-production-report-actions" aria-label={copy.flow.continuationActionsAriaLabel}>
        <button className="secondary-button" onClick={onReviewAgain} type="button">{copy.flow.reviewThisCaseAgain}</button>
        {onStartNextScenario ? (
          <button onClick={onStartNextScenario} type="button">{copy.flow.continueToNextCase}</button>
        ) : (
          <button className="secondary-button" onClick={onBackToProductionCases} type="button">{copy.flow.backToProductionCases}</button>
        )}
      </div>
      <div className="scenario-production-report-columns">
        <div>
          <h4>{copy.flow.understoodClearly}</h4>
          {report.clearPhases.length > 0 ? (
            <ul>{report.clearPhases.map((phase) => <li key={phase.missionId}><span>{getMissionTitle(phase.missionId, phase.title)}</span><small>{phase.selectedChoiceLabel}</small></li>)}</ul>
          ) : <p>{copy.flow.noClearlyIdentified}</p>}
        </div>
        <div>
          <h4>{copy.flow.reviewAndCompare}</h4>
          {reviewPhases.length > 0 ? (
            <ul>{reviewPhases.map((phase) => <li key={phase.missionId}><span>{getMissionTitle(phase.missionId, phase.title)}</span><small>{phase.selectedChoiceLabel}</small></li>)}</ul>
          ) : <p>{copy.flow.noSpecialReview}</p>}
        </div>
      </div>
      {sourceVerification ? <ProductionCaseSources copy={copy} verification={sourceVerification} /> : null}
    </section>
  );
}

function ProductionCaseSources({ copy, verification }: { readonly copy: ProductionCaseBriefCopy; readonly verification: ProductionCaseVerificationRecord }) {
  return (
    <section className="scenario-production-sources" aria-label={copy.flow.sourcesAriaLabel}>
      <div>
        <span className="eyebrow">{copy.flow.sourceBasis}</span>
        <strong>{copy.flow.verifiedAt(verification.verifiedAt)}</strong>
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
  copy,
  missionTitle,
  onFocusMission,
}: {
  readonly action: ProductionCaseLearningNextAction;
  readonly copy: ProductionCaseBriefCopy;
  readonly missionTitle: string;
  readonly onFocusMission: (missionId: string) => void;
}) {
  const [language] = useFilmWorkLanguage();
  const presentation = getProductionCaseLearningNextActionPresentation(language, action);
  return (
    <section className={`scenario-production-next-phase scenario-production-next-phase--${action.actionType}`} aria-label={copy.flow.nextLearningStepAriaLabel}>
      <span className="eyebrow">{copy.flow.nextLearningStep}</span>
      <strong>{presentation.label}: {missionTitle}</strong>
      <p>{presentation.description}</p>
      <button onClick={() => onFocusMission(action.missionId)} type="button">{copy.flow.goToPhase}</button>
    </section>
  );
}

function ProductionCaseLearningHintBox({
  copy,
  hint,
  missionTitle,
  onFocusMission,
}: {
  readonly copy: ProductionCaseBriefCopy;
  readonly hint: ProductionCaseLearningHint;
  readonly missionTitle: string;
  readonly onFocusMission: (missionId: string) => void;
}) {
  const [language] = useFilmWorkLanguage();
  const presentation = getProductionCaseLearningHintPresentation(language, hint);
  return (
    <section className={`scenario-production-improvement scenario-production-improvement--${hint.hintType}`} aria-label={copy.flow.suggestedReviewAriaLabel}>
      <span className="eyebrow">{copy.flow.suggestedReview}</span>
      <strong>{presentation.label}: {missionTitle}</strong>
      <p>{presentation.description}</p>
      <button onClick={() => onFocusMission(hint.missionId)} type="button">{copy.flow.reviewPhase}</button>
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

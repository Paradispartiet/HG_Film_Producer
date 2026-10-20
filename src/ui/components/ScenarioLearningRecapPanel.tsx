import { presentFilmCaseContent } from "../../core/productionCaseFilmStatementCopy";
import { presentFilmStudySourceSupport, presentFilmStudySourceText } from "../../core/filmStudyVerificationPresentation";
import type { FilmWorkLanguage } from "../../core/filmWorkLanguage";
import { PRODUCTION_CASE_REFLECTION_COPY } from "../../core/productionCaseReflectionCopy";
import { useFilmWorkLanguage } from "../filmWorkLanguage";
import { assessScenarioAlignment } from "../data/scenarioAlignmentScore";
import { createScenarioLearningRecap } from "../data/scenarioLearningRecap";
import type { ScenarioProductionBrief } from "../data/scenarioProductionBriefs";
import {
  getProductionCaseVerification,
  type ProductionCaseVerificationRecord,
} from "../data/scenarioProductionVerificationRegistry";
import { createScenarioTargetChecklist } from "../data/scenarioTargetChecklist";

interface ScenarioLearningRecapPanelProps {
  readonly scenarioTitle: string;
  readonly brief: ScenarioProductionBrief;
  readonly selectedTargetIds: readonly string[];
}

export function ScenarioLearningRecapPanel({ scenarioTitle, brief, selectedTargetIds }: ScenarioLearningRecapPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = PRODUCTION_CASE_REFLECTION_COPY[language].recap;
  const checklist = createScenarioTargetChecklist(brief);
  const selectedTargetIdSet = new Set(selectedTargetIds);
  const selectedTargetLabels = checklist.filter((target) => selectedTargetIdSet.has(target.id)).map((target) => target.label);
  const unselectedTargetLabels = checklist.filter((target) => !selectedTargetIdSet.has(target.id)).map((target) => target.label);
  const feedback = assessScenarioAlignment({ selectedTargetIds, totalTargets: checklist.length });
  const verification = getProductionCaseVerification(brief.scenarioId);
  const verificationStatus = verification?.status ?? brief.verificationStatus;
  const recap = createScenarioLearningRecap({
    scenarioTitle,
    verificationStatus,
    selectedTargetLabels,
    unselectedTargetLabels,
    alignmentAssessment: feedback.assessment
  });
  const learned = selectedTargetLabels.length > 0
    ? recap.learned
    : unselectedTargetLabels.slice(0, 3).map((label) => copy.compareMethod(presentFilmCaseContent(language, brief.briefType, brief.scenarioId, label)));
  const nextFocus = unselectedTargetLabels.length > 0
    ? recap.nextFocus
    : [copy.revisitOnePhase];

  return (
    <section className="scenario-learning-recap" aria-labelledby="scenario-learning-recap-title">
      <div className="scenario-learning-header">
        <div>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h3 id="scenario-learning-recap-title">{copy.heading}</h3>
        </div>
        <span>{scenarioTitle}</span>
      </div>
      <p className="scenario-learning-intro"><strong>{copy.exploredTitle}.</strong> {copy.intros[feedback.assessment]}</p>
      <div className="scenario-learning-grid">
        <div className="scenario-learning-section">
          <h4>{copy.identified}</h4>
          {selectedTargetLabels.length > 0 ? (
            <ul className="scenario-learning-list">
              {learned.map((item) => <li key={`learned-${item}`}>{presentFilmCaseContent(language, brief.briefType, brief.scenarioId, item)}</li>)}
            </ul>
          ) : (
            <p className="scenario-learning-empty">{copy.noSelected}</p>
          )}
        </div>
        <div className="scenario-learning-section">
          <h4>{copy.review}</h4>
          {unselectedTargetLabels.length > 0 ? (
            <ul className="scenario-learning-list">
              {nextFocus.map((item) => <li key={`next-${item}`}>{presentFilmCaseContent(language, brief.briefType, brief.scenarioId, item)}</li>)}
            </ul>
          ) : (
            <p className="scenario-learning-empty">{copy.noRemaining}</p>
          )}
        </div>
      </div>
      <p className="scenario-learning-replay">{copy.replay}</p>
      <p className="scenario-learning-note">{copy.verificationNotes[verificationStatus]}</p>
      {verification ? <ProductionCaseVerificationEvidence record={verification} copy={copy} language={language} /> : null}
    </section>
  );
}

function ProductionCaseVerificationEvidence({
  record,
  copy,
  language,
}: {
  readonly record: ProductionCaseVerificationRecord;
  readonly language: FilmWorkLanguage;
  readonly copy: (typeof PRODUCTION_CASE_REFLECTION_COPY)[keyof typeof PRODUCTION_CASE_REFLECTION_COPY]["recap"];
}) {
  return (
    <details className="production-case-verification-evidence">
      <summary>
        <span>{copy.sourceVerified}</span>
        <small>{copy.sourceCount(record.sources.length, record.verifiedAt)}</small>
      </summary>
      <div className="production-case-verification-content">
        <p>{presentFilmStudySourceText(language, record.scenarioId, record.summary)}</p>
        <ul>
          {record.sources.map((source) => (
            <li key={source.url}>
              <div>
                <strong>{source.title}</strong>
                <span>{source.publisher} · {source.supports.map((area) => presentFilmStudySourceSupport(language, area)).join(", ")}</span>
                <p>{presentFilmStudySourceText(language, record.scenarioId, source.note)}</p>
              </div>
              <a href={source.url} rel="noreferrer" target="_blank">{copy.openSource}</a>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}

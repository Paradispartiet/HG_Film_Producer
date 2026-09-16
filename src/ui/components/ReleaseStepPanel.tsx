import { useState } from "react";
import { getStudioCareerFestivalInputName, getStudioCareerReleaseStrategyInputName } from "../../core/studioCareerFlow.js";
import { STUDIO_CAREER_RELEASE_COPY } from "../../core/studioCareerReleaseCopy.js";
import type { ReleaseStepChoices, ReleaseStepResult } from "../demo/createReleaseStepRun.js";
import { createReleaseStepResult, getReleaseStepOptions } from "../demo/createReleaseStepRun.js";
import type { DevelopmentStepResult } from "../demo/createDevelopmentStepRun.js";
import type { PostProductionStepResult } from "../demo/createPostProductionStepRun.js";
import type { PreProductionStepResult } from "../demo/createPreProductionStepRun.js";
import type { ProjectRunContext } from "../demo/createProjectRunContext.js";
import type { ShootStepResult } from "../demo/createShootStepRun.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";
import type { ProjectReleaseLabel } from "../types.js";
import { AudienceResultPanel } from "./AudienceResultPanel.js";
import { AwardsResultPanel } from "./AwardsResultPanel.js";
import { FestivalSubmissionPanel } from "./FestivalSubmissionPanel.js";
import { ReleaseOutcomeResultPanel } from "./ReleaseOutcomeResultPanel.js";
import { ReleaseStrategyPanel } from "./ReleaseStrategyPanel.js";
import { RevenueResultPanel } from "./RevenueResultPanel.js";
import { ReviewResultPanel } from "./ReviewResultPanel.js";

interface ReleaseStepPanelProps {
  readonly projectContext: ProjectRunContext;
  readonly projectLabel?: ProjectReleaseLabel;
  readonly developmentResult: DevelopmentStepResult;
  readonly preProductionResult: PreProductionStepResult;
  readonly shootResult: ShootStepResult;
  readonly postProductionResult: PostProductionStepResult;
  readonly choices: ReleaseStepChoices;
  readonly result: ReleaseStepResult | null;
  readonly onChange: (choices: ReleaseStepChoices) => void;
  readonly onRelease: (result: ReleaseStepResult) => void;
  readonly id?: string | undefined;
}

const options = getReleaseStepOptions();

export function ReleaseStepPanel({
  projectContext,
  projectLabel = "first film",
  developmentResult,
  preProductionResult,
  shootResult,
  postProductionResult,
  choices,
  result,
  onChange,
  onRelease,
  id
}: ReleaseStepPanelProps) {
  const [validationMessage, setValidationMessage] = useState("");
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_RELEASE_COPY[language];

  function releaseFilm() {
    const message = validateChoices(choices, copy.panel.validation);
    if (message) {
      setValidationMessage(message);
      return;
    }
    try {
      onRelease(createReleaseStepResult(
        projectContext,
        developmentResult,
        preProductionResult,
        shootResult,
        postProductionResult,
        choices
      ));
      setValidationMessage("");
    } catch (error) {
      setValidationMessage(error instanceof Error ? error.message : copy.panel.errorFallback);
    }
  }

  function updateChoices(nextChoices: ReleaseStepChoices) {
    setValidationMessage("");
    onChange(nextChoices);
  }

  return (
    <section className="panel release-step-panel" id={id}>
      <div className="release-desk-heading">
        <div><span className="eyebrow">{copy.panel.eyebrow}</span><h2>{copy.panel.heading(projectLabel)}</h2><p>{copy.panel.description}</p></div>
        <div className="release-readiness"><span>{copy.panel.lockedCut}</span><strong>{postProductionResult.postProductionEvaluation.lockedCutQuality}</strong><small>{copy.panel.quality}</small></div>
      </div>

      <ReleaseStrategyPanel disabled={Boolean(result)} inputName={getStudioCareerReleaseStrategyInputName(projectContext.filmProjectState.id)} onSelect={(releaseStrategyId) => updateChoices({ ...choices, releaseStrategyId })} selectedId={choices.releaseStrategyId} strategies={options.releaseStrategies} />
      <FestivalSubmissionPanel
        disabled={Boolean(result)}
        festivals={options.festivals}
        inputName={getStudioCareerFestivalInputName(projectContext.filmProjectState.id)}
        onSelect={(festivalId) => updateChoices({ ...choices, festivalId })}
        selectedId={choices.festivalId}
        {...(result ? { result: result.festivalSubmissionResult } : {})}
      />

      {!result && (
        <div className="release-actions">
          <div><strong>{copy.panel.ready}</strong><span>{copy.panel.readyHint}</span>{validationMessage && <p role="alert">{validationMessage}</p>}</div>
          <button className="primary-button" onClick={releaseFilm} type="button">{copy.panel.releaseButton(projectLabel)}</button>
        </div>
      )}

      {result && (
        <div className="release-results">
          <div className="film-result-strip">
            <Metric label={copy.panel.metrics.filmQuality} value={result.filmResult.quality} />
            <Metric label={copy.panel.metrics.audienceAppeal} value={result.filmResult.audienceAppeal} />
            <Metric label={copy.panel.metrics.criticalAppeal} value={result.filmResult.criticalAppeal} />
            <Metric label={copy.panel.metrics.strategyScore} value={result.releaseStrategyScore.totalScore} />
          </div>
          <ReviewResultPanel critics={options.criticProfiles} reviews={result.reviewResults} />
          <AudienceResultPanel results={result.audienceResults} segments={options.audienceSegments} />
          <RevenueResultPanel result={result.revenueResult} />
          <AwardsResultPanel awards={options.awards} result={result.awardsOutcome} />
          <ReleaseOutcomeResultPanel evaluation={result.releaseOutcomeEvaluation} projectLabel={projectLabel} strategyScore={result.releaseStrategyScore} />
        </div>
      )}
    </section>
  );
}

function Metric({ label, value }: { readonly label: string; readonly value: number }) {
  return <div><span>{label}</span><strong>{value}</strong><small>/100</small></div>;
}

function validateChoices(
  choices: ReleaseStepChoices,
  validation: { readonly strategyAndFestival: string; readonly strategy: string; readonly festival: string }
): string {
  if (!choices.releaseStrategyId && !choices.festivalId) return validation.strategyAndFestival;
  if (!choices.releaseStrategyId) return validation.strategy;
  if (!choices.festivalId) return validation.festival;
  return "";
}

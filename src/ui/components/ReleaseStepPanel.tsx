import { useState } from "react";
import type { ReleaseStepChoices, ReleaseStepResult } from "../demo/createReleaseStepRun.js";
import { createReleaseStepResult, getReleaseStepOptions } from "../demo/createReleaseStepRun.js";
import type { DevelopmentStepResult } from "../demo/createDevelopmentStepRun.js";
import type { PostProductionStepResult } from "../demo/createPostProductionStepRun.js";
import type { PreProductionStepResult } from "../demo/createPreProductionStepRun.js";
import type { ProjectRunContext } from "../demo/createProjectRunContext.js";
import type { ShootStepResult } from "../demo/createShootStepRun.js";
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
  onRelease
}: ReleaseStepPanelProps) {
  const [validationMessage, setValidationMessage] = useState("");

  function releaseFilm() {
    const message = validateChoices(choices);
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
      setValidationMessage(error instanceof Error ? error.message : "The film could not be released.");
    }
  }

  function updateChoices(nextChoices: ReleaseStepChoices) {
    setValidationMessage("");
    onChange(nextChoices);
  }

  return (
    <section className="panel release-step-panel">
      <div className="release-desk-heading">
        <div><span className="eyebrow">Distribution &amp; festivals</span><h2>Release {projectLabel}</h2><p>Choose the route to market and one premiere submission. The release engine will resolve the complete deterministic outcome.</p></div>
        <div className="release-readiness"><span>Locked cut</span><strong>{postProductionResult.postProductionEvaluation.lockedCutQuality}</strong><small>quality</small></div>
      </div>

      <ReleaseStrategyPanel disabled={Boolean(result)} onSelect={(releaseStrategyId) => updateChoices({ ...choices, releaseStrategyId })} selectedId={choices.releaseStrategyId} strategies={options.releaseStrategies} />
      <FestivalSubmissionPanel
        disabled={Boolean(result)}
        festivals={options.festivals}
        onSelect={(festivalId) => updateChoices({ ...choices, festivalId })}
        selectedId={choices.festivalId}
        {...(result ? { result: result.festivalSubmissionResult } : {})}
      />

      {!result && (
        <div className="release-actions">
          <div><strong>Ready for release?</strong><span>Both selections are required. Results are deterministic and final for this run.</span>{validationMessage && <p role="alert">{validationMessage}</p>}</div>
          <button className="primary-button" onClick={releaseFilm} type="button">Release {projectLabel}</button>
        </div>
      )}

      {result && (
        <div className="release-results">
          <div className="film-result-strip">
            <Metric label="Film quality" value={result.filmResult.quality} />
            <Metric label="Audience appeal" value={result.filmResult.audienceAppeal} />
            <Metric label="Critical appeal" value={result.filmResult.criticalAppeal} />
            <Metric label="Strategy score" value={result.releaseStrategyScore.totalScore} />
          </div>
          <ReviewResultPanel critics={options.criticProfiles} reviews={result.reviewResults} />
          <AudienceResultPanel results={result.audienceResults} segments={options.audienceSegments} />
          <RevenueResultPanel result={result.revenueResult} />
          <AwardsResultPanel awards={options.awards} result={result.awardsOutcome} />
          <ReleaseOutcomeResultPanel
            evaluation={result.releaseOutcomeEvaluation}
            projectLabel={projectLabel}
            strategyScore={result.releaseStrategyScore}
          />
        </div>
      )}
    </section>
  );
}

function Metric({ label, value }: { readonly label: string; readonly value: number }) {
  return <div><span>{label}</span><strong>{value}</strong><small>/100</small></div>;
}

function validateChoices(choices: ReleaseStepChoices): string {
  if (!choices.releaseStrategyId && !choices.festivalId) return "Choose one release strategy and one festival before releasing the film.";
  if (!choices.releaseStrategyId) return "Choose one release strategy before releasing the film.";
  if (!choices.festivalId) return "Choose one festival before releasing the film.";
  return "";
}

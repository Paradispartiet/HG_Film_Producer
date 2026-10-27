import { STUDIO_CAREER_POST_PRODUCTION_COPY } from "../../core/studioCareerPostProductionCopy.js";
import {
  getScreeningRevisionFocus,
  STUDIO_CAREER_SCREENING_REVISION_COPY
} from "../../core/studioCareerScreeningRevision.js";
import type { StudioCareerEditingApproachId } from "../../core/studioCareerEditingApproach.js";
import type { TestScreeningResult } from "../../domain/post.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

interface RevisionAlternative {
  readonly id: StudioCareerEditingApproachId;
  readonly result: TestScreeningResult;
}

interface ScreeningRevisionPanelProps {
  readonly screening: TestScreeningResult;
  readonly alternatives: readonly RevisionAlternative[];
  readonly onChoose: (id: StudioCareerEditingApproachId) => void;
}

function scoreChange(next: number, current: number): string {
  const delta = next - current;
  return delta > 0 ? `+${delta}` : delta < 0 ? `−${Math.abs(delta)}` : "0";
}

/** Editable, calculated cut comparisons. No save or lock action is performed here. */
export function ScreeningRevisionPanel({ screening, alternatives, onChoose }: ScreeningRevisionPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_SCREENING_REVISION_COPY[language];
  const editing = STUDIO_CAREER_POST_PRODUCTION_COPY[language].editingApproach.options;
  const metrics = STUDIO_CAREER_POST_PRODUCTION_COPY[language].screening.metrics;
  const focus = getScreeningRevisionFocus(screening);
  const focusScores = {
    clarity: screening.clarityScore,
    pacing: screening.pacingScore,
    emotion: screening.emotionScore,
    audienceHook: screening.audienceHookScore
  };
  const focusLabels = {
    clarity: metrics.clarity,
    pacing: metrics.pacing,
    emotion: metrics.emotion,
    audienceHook: metrics.audienceHook
  };
  const focusMetricKey = {
    clarity: "clarityScore",
    pacing: "pacingScore",
    emotion: "emotionScore",
    audienceHook: "audienceHookScore"
  } as const;
  // The option with the stronger projected outcome on the measured weak axis comes first.
  const orderedAlternatives = [...alternatives].sort((left, right) =>
    right.result[focusMetricKey[focus]] - left.result[focusMetricKey[focus]]
  );
  return (
    <section className="screening-revision" aria-label={copy.heading}>
      <div className="screening-revision-heading">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h3>{copy.heading}</h3>
        <p>{copy.explanation}</p>
      </div>
      <p className="screening-revision-focus">
        <strong>{copy.focusHeading(focusLabels[focus], focusScores[focus])}</strong>
        <span>{copy.focus[focus]}</span>
      </p>
      <div className="screening-revision-options">
        {orderedAlternatives.map(({ id, result }) => {
          const comparisons = [
            [metrics.clarity, result.clarityScore, screening.clarityScore],
            [metrics.pacing, result.pacingScore, screening.pacingScore],
            [metrics.emotion, result.emotionScore, screening.emotionScore],
            [metrics.audienceHook, result.audienceHookScore, screening.audienceHookScore],
            [metrics.confusionRisk, result.confusionRisk, screening.confusionRisk]
          ] as const;
          return (
            <button
              className="screening-revision-option"
              key={id}
              type="button"
              data-approach={id}
              data-predicted-scores={JSON.stringify(comparisons.map(([, value]) => value))}
              onClick={() => onChoose(id)}
            >
              <strong>{editing[id].title}</strong>
              <span className="screening-revision-technique">{copy.approachTechnique[id]}</span>
              <span className="screening-revision-prediction">{copy.projected}</span>
              <span className="screening-revision-deltas">
                {comparisons.map(([label, value, current]) => (
                  <span key={label}><span>{label}</span><b>{scoreChange(value, current)}</b></span>
                ))}
              </span>
              <span className="screening-revision-action">{copy.action}</span>
            </button>
          );
        })}
      </div>
      <small className="screening-revision-disclaimer">{copy.footnote}</small>
    </section>
  );
}

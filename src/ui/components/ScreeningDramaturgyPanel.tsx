import { STUDIO_CAREER_DRAMATURGY_IDS, type StudioCareerDramaturgyId } from "../../core/studioCareerDramaturgy.js";
import { STUDIO_CAREER_DRAMATURGY_COPY } from "../../core/studioCareerDramaturgyCopy.js";
import { STUDIO_CAREER_POST_PRODUCTION_COPY } from "../../core/studioCareerPostProductionCopy.js";
import type { ScriptCraftScores } from "../../core/runTestScreening.js";
import type { TestScreeningResult } from "../../domain/post.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

export interface DramaturgyAlternative {
  readonly id: StudioCareerDramaturgyId;
  readonly result: TestScreeningResult;
}

interface ScreeningDramaturgyPanelProps {
  readonly screening: TestScreeningResult;
  readonly selectedId: StudioCareerDramaturgyId;
  readonly alternatives: readonly DramaturgyAlternative[];
  readonly script?: ScriptCraftScores | undefined;
  readonly missingScenes?: number | undefined;
  readonly onChoose: (id: StudioCareerDramaturgyId) => void;
}

function difference(next: number, current: number): string {
  const delta = next - current;
  return delta > 0 ? "+" + delta : delta < 0 ? "−" + Math.abs(delta) : "0";
}

/** Alternative scores are calculated by createPostProductionStepResult, not invented in this panel. */
export function ScreeningDramaturgyPanel({
  screening, selectedId, alternatives, script, missingScenes, onChoose
}: ScreeningDramaturgyPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_DRAMATURGY_COPY[language];
  const metrics = STUDIO_CAREER_POST_PRODUCTION_COPY[language].screening.metrics;
  const ordered = STUDIO_CAREER_DRAMATURGY_IDS
    .filter((id) => id !== selectedId)
    .map((id) => alternatives.find((alternative) => alternative.id === id))
    .filter((alternative): alternative is DramaturgyAlternative => alternative !== undefined);

  return (
    <section className="screening-dramaturgy" aria-label={copy.heading}>
      <h3>{copy.heading}</h3>
      <p>{copy.introduction}</p>
      <p className="screening-dramaturgy-current"><strong>{copy.current}:</strong> {copy.options[selectedId].title}</p>
      {script && (
        <small className="screening-dramaturgy-context">
          {copy.scriptContext(Math.round(script.conflict), Math.round(script.pacing))}
        </small>
      )}
      {missingScenes !== undefined && missingScenes > 0 && (
        <small className="screening-dramaturgy-context">{copy.footageContext(missingScenes)}</small>
      )}
      <div className="screening-revision-options screening-dramaturgy-options">
        {ordered.map(({ id, result }) => {
          const option = copy.options[id];
          const comparisons = [
            [metrics.clarity, result.clarityScore, screening.clarityScore],
            [metrics.pacing, result.pacingScore, screening.pacingScore],
            [metrics.emotion, result.emotionScore, screening.emotionScore],
            [metrics.audienceHook, result.audienceHookScore, screening.audienceHookScore],
            [metrics.confusionRisk, result.confusionRisk, screening.confusionRisk]
          ] as const;
          return (
            <button
              key={id}
              type="button"
              className="screening-revision-option screening-dramaturgy-option"
              data-dramaturgy={id}
              data-predicted-scores={JSON.stringify(comparisons.map(([, value]) => value))}
              onClick={() => onChoose(id)}
            >
              <strong>{option.title}</strong>
              <span className="screening-revision-technique">{option.reason}</span>
              <span className="screening-dramaturgy-tradeoff">{option.tradeoff}</span>
              <span className="screening-revision-prediction">{copy.change}</span>
              <span className="screening-revision-deltas">
                {comparisons.map(([label, value, current]) => (
                  <span key={label}><span>{label}</span><b>{difference(value, current)}</b></span>
                ))}
              </span>
              <span className="screening-revision-action">{copy.choose}</span>
            </button>
          );
        })}
      </div>
      <small className="screening-revision-disclaimer">{copy.note}</small>
    </section>
  );
}

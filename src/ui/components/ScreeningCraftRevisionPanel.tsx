import { formatStudioCareerPostProductionMoney, STUDIO_CAREER_POST_PRODUCTION_COPY } from "../../core/studioCareerPostProductionCopy.js";
import {
  SCREENING_CRAFT_REVISION_COPY,
  type ScreeningCraftAlternative,
  type ScreeningCraftKind
} from "../../core/studioCareerScreeningCraftRevision.js";
import type { TestScreeningResult } from "../../domain/post.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

interface ScreeningCraftRevisionProps {
  readonly screening: TestScreeningResult;
  readonly sound: readonly ScreeningCraftAlternative[];
  readonly music: readonly ScreeningCraftAlternative[];
  readonly onChoose: (kind: ScreeningCraftKind, id: string) => void;
}

function difference(next: number, current: number): string {
  const delta = next - current;
  return delta > 0 ? `+${delta}` : delta < 0 ? `−${Math.abs(delta)}` : "0";
}

/** All predictions come from the same function that creates the final saved cut. */
export function ScreeningCraftRevisionPanel({ screening, sound, music, onChoose }: ScreeningCraftRevisionProps) {
  const [language] = useFilmWorkLanguage();
  const copy = SCREENING_CRAFT_REVISION_COPY[language];
  const metrics = STUDIO_CAREER_POST_PRODUCTION_COPY[language].screening.metrics;
  const groups = [
    { kind: "sound", options: sound, heading: copy.sound, question: copy.question.sound },
    { kind: "music", options: music, heading: copy.music, question: copy.question.music }
  ] as const;

  return (
    <section className="screening-craft-revision" aria-label={copy.heading}>
      <h3>{copy.heading}</h3>
      <p>{copy.explanation}</p>
      {groups.map(({ kind, options, heading, question }) => (
        <div className="screening-craft-group" key={kind} data-craft-kind={kind}>
          <h4>{heading}</h4>
          <p>{question}</p>
          <div className="screening-revision-options">
            {options.map(({ id, result, costDelta }) => {
              const comparisons = [
                [metrics.clarity, result.clarityScore, screening.clarityScore],
                [metrics.pacing, result.pacingScore, screening.pacingScore],
                [metrics.emotion, result.emotionScore, screening.emotionScore],
                [metrics.audienceHook, result.audienceHookScore, screening.audienceHookScore],
                [metrics.confusionRisk, result.confusionRisk, screening.confusionRisk]
              ] as const;
              return (
                <button
                  className="screening-revision-option screening-craft-option"
                  key={id}
                  type="button"
                  data-craft={kind}
                  data-choice-id={id}
                  data-predicted-scores={JSON.stringify(comparisons.map(([, value]) => value))}
                  onClick={() => onChoose(kind, id)}
                >
                  <strong>{copy.names[id] ?? id}</strong>
                  <span className="screening-revision-prediction">{copy.predicted}</span>
                  <span className="screening-revision-deltas">
                    {comparisons.map(([label, value, current]) => (
                      <span key={label}><span>{label}</span><b>{difference(value, current)}</b></span>
                    ))}
                  </span>
                  <span className="screening-craft-cost">
                    {copy.cost}: {costDelta > 0 ? "+" : costDelta < 0 ? "−" : ""}
                    {formatStudioCareerPostProductionMoney(Math.abs(costDelta), language)}
                  </span>
                  <span className="screening-revision-action">{copy.action}</span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
      <small className="screening-revision-disclaimer">{copy.note}</small>
    </section>
  );
}

import { getFilmWorkIntlLocale } from "../../core/filmWorkLanguage.js";
import { SHOOT_DECISION_PREVIEW_COPY } from "../../core/studioCareerDecisionPreviewCopy.js";
import { PRODUCER_PRIORITY_COPY } from "../../core/studioCareerProducerPriorityCopy.js";
import { SHOOT_STRATEGY_COPY } from "../../core/studioCareerShootStrategyCopy.js";
import type { ShootDayStepResult } from "../demo/createShootStepRun.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

interface ShootDecisionPreviewProps {
  readonly result: ShootDayStepResult;
}

/** Display the actual unsaved resolver output, never an independent estimate. */
export function ShootDecisionPreview({ result }: ShootDecisionPreviewProps) {
  const [language] = useFilmWorkLanguage();
  const copy = SHOOT_DECISION_PREVIEW_COPY[language];
  const locale = getFilmWorkIntlLocale(language);
  const producer = result.producerPrioritySummary?.id
    ? PRODUCER_PRIORITY_COPY[language].options[result.producerPrioritySummary.id].title : undefined;
  const strategy = result.strategySummary?.id
    ? SHOOT_STRATEGY_COPY[language].choices[result.strategySummary.id].name : undefined;
  const day = result.shootDayResult;
  const dayCost = day.costSpent.toLocaleString(locale, {
    style: "currency", currency: "USD", maximumFractionDigits: 0
  });
  return (
    <section
      className="shoot-decision-preview"
      aria-label={copy.heading}
      aria-live="polite"
      data-take-quality={day.takeQuality}
      data-scenes-completed={day.completedSceneIds.length}
      data-scenes-delayed={day.delayedSceneIds.length}
      data-cost-spent={day.costSpent}
      data-schedule-delta={day.scheduleDeltaDays}
    >
      <div className="shoot-decision-preview-heading">
        <h3>{copy.heading}</h3>
        <p>{copy.intro}</p>
      </div>
      <dl className="shoot-decision-preview-selections">
        <div data-decision="event"><dt>{copy.event}</dt><dd>{result.selectedEventSummary.title}</dd></div>
        {producer && <div data-decision="producer"><dt>{copy.producerSupport}</dt><dd>{producer}</dd></div>}
        {strategy && <div data-decision="strategy"><dt>{copy.shootResponse}</dt><dd>{strategy}</dd></div>}
      </dl>
      <dl className="shoot-decision-preview-metrics">
        <div><dt>{copy.takeQuality}</dt><dd>{day.takeQuality}</dd></div>
        <div><dt>{copy.completedScenes}</dt><dd>{day.completedSceneIds.length}</dd></div>
        <div><dt>{copy.delayedScenes}</dt><dd>{day.delayedSceneIds.length}</dd></div>
        <div><dt>{copy.dayCost}</dt><dd>{dayCost}</dd></div>
        <div><dt>{copy.scheduleDelta}</dt><dd>{copy.days(day.scheduleDeltaDays)}</dd></div>
      </dl>
      <small>{copy.footnote}</small>
    </section>
  );
}

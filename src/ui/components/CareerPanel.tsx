import { STUDIO_CAREER_CARRYOVER_COPY } from "../../core/studioCareerCarryoverCopy.js";
import { STUDIO_CAREER_REVIEW_COPY } from "../../core/studioCareerReviewCopy.js";
import type { StudioIdentityTag } from "../../domain/career.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";
import type { DemoStudioRun } from "../demo/createDemoStudioRun";

interface CareerPanelProps {
  readonly career: DemoStudioRun["careerState"];
}

function isStudioIdentityTag(tag: string): tag is StudioIdentityTag {
  return Object.prototype.hasOwnProperty.call(STUDIO_CAREER_CARRYOVER_COPY.en.identityTags, tag);
}

export function CareerPanel({ career }: CareerPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_REVIEW_COPY[language].overview;
  const identityLabels = STUDIO_CAREER_CARRYOVER_COPY[language].identityTags;

  return (
    <section className="panel career-panel">
      <div className="panel-heading">
        <div>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2>{copy.heading}</h2>
        </div>
        <div className="score-badge" aria-label={copy.scoreAria(career.evaluation.overall)}>
          <strong>{career.evaluation.overall}</strong><span>/100</span>
        </div>
      </div>

      <div className="career-summary">
        <div>
          <span className="metric-label">{copy.completedFilms}</span>
          <strong className="large-number">{career.completedFilms.toString().padStart(2, "0")}</strong>
        </div>
        <div>
          <span className="metric-label">{copy.yearEvaluation}</span>
          <p>{career.evaluation.summary}</p>
        </div>
      </div>

      <div className="panel-section">
        <span className="section-label">{copy.strategicGoal}</span>
        {career.goals.map((goal) => (
          <div className="goal" key={goal.title}>
            <span className="goal-indicator" aria-hidden="true" />
            <div><strong>{goal.title}</strong><p>{goal.description}</p></div>
          </div>
        ))}
      </div>

      <div className="panel-section">
        <span className="section-label">{copy.studioIdentity}</span>
        <div className="tags">
          {career.identityTags.map((tag) => {
            if (!isStudioIdentityTag(tag)) {
              throw new Error(`Unknown studio identity tag: ${tag}`);
            }
            return <span className="tag" key={tag}>{identityLabels[tag]}</span>;
          })}
        </div>
      </div>
    </section>
  );
}

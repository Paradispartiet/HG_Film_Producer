import type { FilmScenarioSeed } from "../data/filmScenarios";
import {
  resolveScenarioProductionBrief,
  type ScenarioProductionBrief,
} from "../data/scenarioProductionBriefs";

export function ScenarioProductionBriefPanel({
  scenario,
}: {
  readonly scenario: FilmScenarioSeed;
}) {
  const brief = resolveScenarioProductionBrief(scenario);

  return (
    <section
      className="scenario-brief-panel"
      aria-labelledby="scenario-brief-title"
    >
      <div className="scenario-brief-header">
        <div>
          <span className="eyebrow">
            {brief.briefType === "production_case"
              ? "Verified production case"
              : "Imported seed fallback"}
          </span>
          <h3 id="scenario-brief-title">{brief.title}</h3>
          <p>{getBriefIntro(brief, scenario.film.title)}</p>
          <p>{brief.logline}</p>
        </div>
        <span className="scenario-brief-status">
          {formatVerificationStatus(brief.verificationStatus)}
        </span>
      </div>
      <div className="scenario-brief-grid">
        <BriefSection title="Genre targets" items={brief.genreTargets} />
        <BriefSection title="Tone" items={brief.toneTargets} />
        <BriefSection title="Screenplay" items={brief.screenplayTargets} />
        <BriefSection
          title="Cinematography"
          items={brief.cinematographyTargets}
        />
        <BriefSection title="Editing" items={brief.editingTargets} />
        <BriefSection title="Sound" items={brief.soundTargets} />
        <BriefSection title="Learning goals" items={brief.learningGoals} />
      </div>
    </section>
  );
}

function BriefSection({
  title,
  items,
}: {
  readonly title: string;
  readonly items: readonly string[];
}) {
  return (
    <section className="scenario-brief-section">
      <h4>{title}</h4>
      <ul className="scenario-brief-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function getBriefIntro(brief: ScenarioProductionBrief, filmTitle: string) {
  if (brief.briefType === "production_case") {
    return `Follow the production choices behind ${filmTitle}. Recreate the central decisions in screenplay, image, editing, and sound as a learning case for this specific film.`;
  }

  return "This imported seed still needs film-specific production-case design; use the fallback targets as provisional craft guidance.";
}

function formatVerificationStatus(
  status: ScenarioProductionBrief["verificationStatus"],
) {
  return status.replace(/_/g, " ");
}

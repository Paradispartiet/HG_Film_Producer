import { useEffect, useMemo, useState } from "react";
import {
  getProductionCaseProgressEntry,
  readProductionCaseProgress,
  resetProductionCaseScenarioProgress,
  setProductionCaseMissionCompletion,
  writeProductionCaseProgress,
  type ProductionCaseProgressState,
} from "../../core/productionCaseProgress";
import type { FilmScenarioSeed } from "../data/filmScenarios";
import {
  createProductionCaseMissions,
  resolveScenarioProductionBrief,
  type ProductionCaseMission,
  type ScenarioProductionBrief,
} from "../data/scenarioProductionBriefs";

export function ScenarioProductionBriefPanel({
  scenario,
}: {
  readonly scenario: FilmScenarioSeed;
}) {
  const brief = resolveScenarioProductionBrief(scenario);
  const missions = createProductionCaseMissions(brief);

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
      {missions.length > 0 && brief.briefType === "production_case" ? (
        <ProductionCaseMissionFlow
          missions={missions}
          scenarioId={brief.scenarioId}
        />
      ) : (
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
      )}
    </section>
  );
}

function ProductionCaseMissionFlow({
  missions,
  scenarioId,
}: {
  readonly missions: readonly ProductionCaseMission[];
  readonly scenarioId: string;
}) {
  const [progressState, setProgressState] = useState<ProductionCaseProgressState>({});

  useEffect(() => {
    if (typeof window === "undefined") return;
    setProgressState(readProductionCaseProgress(window.localStorage));
  }, [scenarioId]);

  const completedMissionIds = useMemo(
    () => getProductionCaseProgressEntry(progressState, scenarioId).completedMissionIds,
    [progressState, scenarioId],
  );
  const completedMissionIdSet = useMemo(
    () => new Set(completedMissionIds),
    [completedMissionIds],
  );
  const completedCount = missions.filter((mission) =>
    completedMissionIdSet.has(mission.id),
  ).length;
  const allComplete = missions.length > 0 && completedCount === missions.length;

  function updateProgress(nextState: ProductionCaseProgressState) {
    setProgressState(nextState);
    if (typeof window !== "undefined") {
      writeProductionCaseProgress(window.localStorage, nextState);
    }
  }

  function toggleMission(missionId: string) {
    updateProgress(
      setProductionCaseMissionCompletion(
        progressState,
        scenarioId,
        missionId,
        !completedMissionIdSet.has(missionId),
      ),
    );
  }

  function resetCurrentScenario() {
    updateProgress(resetProductionCaseScenarioProgress(progressState, scenarioId));
  }

  return (
    <div
      className="scenario-mission-flow"
      aria-label="Production case mission flow"
    >
      <div className="scenario-mission-summary">
        <div>
          <span className="eyebrow">Case-progress</span>
          <strong>
            {allComplete
              ? "Produksjonscase fullført"
              : `${completedCount}/${missions.length} faser fullført`}
          </strong>
        </div>
        <button onClick={resetCurrentScenario} type="button">
          Nullstill case-progress
        </button>
      </div>
      {missions.map((mission, index) => {
        const isComplete = completedMissionIdSet.has(mission.id);
        return (
          <article
            className={`scenario-mission-card${isComplete ? " scenario-mission-card--complete" : ""}`}
            key={mission.id}
          >
            <span className="scenario-mission-step">{index + 1}</span>
            <div>
              <div className="scenario-mission-card-header">
                <h4>{mission.title}</h4>
                <span>{isComplete ? "Fullført" : "Åpen fase"}</span>
              </div>
              <p>{mission.prompt}</p>
              <ul className="scenario-brief-list">
                {mission.targets.map((target) => (
                  <li key={target}>{target}</li>
                ))}
              </ul>
              <p className="scenario-mission-learning">
                <strong>Forstå produksjonsvalget:</strong> {mission.learningFocus}
              </p>
              <button onClick={() => toggleMission(mission.id)} type="button">
                {isComplete ? "Angre fullført" : "Fullfør fase"}
              </button>
            </div>
          </article>
        );
      })}
    </div>
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
    return `Forstå produksjonsvalget bak ${filmTitle}. Følg fasene som et konkret case i manus, bilde, klipp og lyd for denne filmen.`;
  }

  return "This imported seed still needs film-specific production-case design; use the fallback targets as provisional craft guidance.";
}

function formatVerificationStatus(
  status: ScenarioProductionBrief["verificationStatus"],
) {
  return status.replace(/_/g, " ");
}

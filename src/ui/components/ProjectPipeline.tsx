import type { PipelineStepSummary, ProjectDashboardSummary } from "../types.js";

interface ProjectPipelineProps {
  readonly project: ProjectDashboardSummary;
  readonly steps: readonly PipelineStepSummary[];
  readonly currentPhase?: number;
  readonly onNextAction?: () => void;
}

const phases = [
  { label: "Idea", description: "Shape the concept and choose the creative direction." },
  { label: "Script", description: "Develop the screenplay, theme, and dramatic spine." },
  { label: "Pre-production", description: "Build the team, cast the film, and lock locations." },
  { label: "Shoot", description: "Put the production plan to work on set." },
  { label: "Post-production", description: "Find the final cut, sound, music, and look." },
  { label: "Release", description: "Take the finished film to audiences and festivals." }
] as const;

export function ProjectPipeline({ project, steps, currentPhase = 0, onNextAction }: ProjectPipelineProps) {
  const latestStep = steps.at(-1);

  return (
    <section className="project-hero">
      <div className="project-poster" aria-hidden="true">
        <span>A HG production</span>
        <strong>{project.title}</strong>
        <i>{project.genre}</i>
      </div>
      <div className="project-hero-content">
        <div className="project-hero-topline">
          <span className="eyebrow">Active film project</span>
          <div className="project-meta"><span>{project.genre}</span><span>{project.scale.replace("_", " ")}</span></div>
        </div>
        <h2>{project.title}</h2>
        <p>{project.logline}</p>
        <div className="current-phase">
          <div>
            <span>Current phase</span>
            <strong>{phases[currentPhase]?.label ?? "Release"}</strong>
          </div>
          <p>{phases[currentPhase]?.description}</p>
        </div>
        <div className="phase-card-grid">
          {phases.map((phase, index) => {
            const status = index < currentPhase ? "Complete" : index === currentPhase ? "In progress" : "Locked";
            return (
              <article className={`phase-card phase-card--${status.toLowerCase().replace(" ", "-")}`} key={phase.label}>
                <span className="phase-number">{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{phase.label}</strong><p>{phase.description}</p></div>
                <span className="phase-status">{status}</span>
                {index === currentPhase && (
                  <button onClick={onNextAction} type="button">{currentPhase === 5 ? "Open release desk" : `Continue ${phase.label}`} <b>→</b></button>
                )}
              </article>
            );
          })}
        </div>
        {latestStep && (
          <div className="project-update">
            <span>Latest production update</span>
            <strong>{latestStep.label}</strong>
            <p>{latestStep.detail}</p>
            <b>{latestStep.score}</b>
          </div>
        )}
      </div>
    </section>
  );
}

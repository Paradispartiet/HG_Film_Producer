import { CareerPanel } from "./components/CareerPanel";
import { FilmResultPanel } from "./components/FilmResultPanel";
import { ProjectPipeline } from "./components/ProjectPipeline";
import { ReleasePanel } from "./components/ReleasePanel";
import { StudioHeader } from "./components/StudioHeader";
import { SystemStatusPanel } from "./components/SystemStatusPanel";
import { createDemoStudioRun } from "./demo/createDemoStudioRun";

const demo = createDemoStudioRun();

export function App() {
  return (
    <div className="app-shell">
      <StudioHeader studio={demo.studio} />
      <main>
        <div className="dashboard-intro">
          <div><span className="eyebrow">Portfolio overview</span><h2>Production desk</h2></div>
          <p>One deterministic studio run, live from the HG simulation engine.</p>
        </div>
        <div className="dashboard-grid">
          <div className="dashboard-main">
            <ProjectPipeline project={demo.filmProject} steps={demo.pipelineSteps} />
            <ReleasePanel release={demo.releaseOutcome} />
          </div>
          <aside className="dashboard-side">
            <CareerPanel career={demo.careerState} />
            <FilmResultPanel result={demo.filmResult} />
            <SystemStatusPanel engines={demo.representedEngines} />
          </aside>
        </div>
      </main>
      <footer><span>HG Film Producer</span><span>UI foundation · Engine-backed demo</span></footer>
    </div>
  );
}

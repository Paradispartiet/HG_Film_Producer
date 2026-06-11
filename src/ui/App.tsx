import { useState } from "react";
import { CareerPanel } from "./components/CareerPanel";
import { FilmResultPanel } from "./components/FilmResultPanel";
import { ProjectPipeline } from "./components/ProjectPipeline";
import { ReleasePanel } from "./components/ReleasePanel";
import { RunSummaryPanel } from "./components/RunSummaryPanel";
import { SetupPanel } from "./components/SetupPanel";
import { StudioHeader } from "./components/StudioHeader";
import { SystemStatusPanel } from "./components/SystemStatusPanel";
import { createDemoStudioRun } from "./demo/createDemoStudioRun";
import type { ProjectSetupRun } from "./demo/createProjectSetupRun";
import type { AppMode } from "./types";

const demo = createDemoStudioRun();

export function App() {
  const [mode, setMode] = useState<AppMode>("demo");
  const [customRun, setCustomRun] = useState<ProjectSetupRun | null>(null);

  return (
    <div className="app-shell">
      <nav className="mode-switch" aria-label="Dashboard mode">
        <div><span className="eyebrow">HG Film Producer</span><strong>Production workspace</strong></div>
        <div className="mode-switch-buttons">
          <button className={mode === "demo" ? "mode-button mode-button--active" : "mode-button"} onClick={() => setMode("demo")} type="button">Demo run</button>
          <button className={mode === "setup" ? "mode-button mode-button--active" : "mode-button"} onClick={() => setMode("setup")} type="button">Create project</button>
        </div>
      </nav>

      {mode === "demo" ? <DemoDashboard /> : (
        customRun
          ? <CustomDashboard run={customRun} onEdit={() => setCustomRun(null)} />
          : <main className="setup-workspace"><SetupPanel onCreate={setCustomRun} /></main>
      )}

      <footer><span>HG Film Producer</span><span>{mode === "demo" ? "Engine-backed deterministic demo" : "Interactive project setup"}</span></footer>
    </div>
  );
}

function DemoDashboard() {
  return (
    <>
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
    </>
  );
}

function CustomDashboard({ run, onEdit }: { readonly run: ProjectSetupRun; readonly onEdit: () => void }) {
  return (
    <>
      <StudioHeader studio={run.studio} />
      <main>
        <div className="dashboard-intro">
          <div><span className="eyebrow">Opening slate</span><h2>Development desk</h2></div>
          <p>Your studio and first film are ready. The simulation is paused before development.</p>
        </div>
        <div className="custom-dashboard-grid">
          <ProjectPipeline project={run.project} steps={run.pipelineSteps} />
          <RunSummaryPanel run={run} onEdit={onEdit} />
        </div>
      </main>
    </>
  );
}

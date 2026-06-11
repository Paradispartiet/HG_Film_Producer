import { useState } from "react";
import { CareerPanel } from "./components/CareerPanel";
import { DevelopmentPanel } from "./components/DevelopmentPanel";
import { DevelopmentResultPanel } from "./components/DevelopmentResultPanel";
import { FilmResultPanel } from "./components/FilmResultPanel";
import { PreProductionPanel } from "./components/PreProductionPanel";
import { ProductionTeamResultPanel } from "./components/ProductionTeamResultPanel";
import { ProjectPipeline } from "./components/ProjectPipeline";
import { ReleasePanel } from "./components/ReleasePanel";
import { RunSummaryPanel } from "./components/RunSummaryPanel";
import { SetupPanel } from "./components/SetupPanel";
import { StudioHeader } from "./components/StudioHeader";
import { SystemStatusPanel } from "./components/SystemStatusPanel";
import {
  type DevelopmentPath,
  type DevelopmentStepResult
} from "./demo/createDevelopmentStepRun";
import { createDemoStudioRun } from "./demo/createDemoStudioRun";
import {
  getPreProductionLocationOptions,
  type PreProductionStepResult
} from "./demo/createPreProductionStepRun";
import {
  addDevelopmentPipelineStep,
  type ProjectSetupRun
} from "./demo/createProjectSetupRun";
import type { AppMode, PreProductionSelectionState } from "./types";

const demo = createDemoStudioRun();

export function App() {
  const [mode, setMode] = useState<AppMode>("demo");
  const [customRun, setCustomRun] = useState<ProjectSetupRun | null>(null);
  const [selectedDevelopmentPath, setSelectedDevelopmentPath] = useState<DevelopmentPath | null>(null);
  const [developmentResult, setDevelopmentResult] = useState<DevelopmentStepResult | null>(null);
  const [preProductionResult, setPreProductionResult] = useState<PreProductionStepResult | null>(null);
  const [selectedLocationId, setSelectedLocationId] = useState<PreProductionSelectionState["selectedLocationId"]>("");
  const [selectedCrewIds, setSelectedCrewIds] = useState<PreProductionSelectionState["selectedCrewIds"]>([]);
  const [selectedActorIds, setSelectedActorIds] = useState<PreProductionSelectionState["selectedActorIds"]>([]);

  function createCustomRun(run: ProjectSetupRun) {
    setCustomRun(run);
    setSelectedDevelopmentPath(null);
    setDevelopmentResult(null);
    resetPreProduction();
  }

  function editCustomRun() {
    setCustomRun(null);
    setSelectedDevelopmentPath(null);
    setDevelopmentResult(null);
    resetPreProduction();
  }

  function completeDevelopment(result: DevelopmentStepResult) {
    setDevelopmentResult(result);
    setPreProductionResult(null);
    setSelectedLocationId(getPreProductionLocationOptions(customRunRequired(), result).find((option) => option.recommended)?.id ?? "");
    setSelectedCrewIds([]);
    setSelectedActorIds([]);
  }

  function resetPreProduction() {
    setPreProductionResult(null);
    setSelectedLocationId("");
    setSelectedCrewIds([]);
    setSelectedActorIds([]);
  }

  function customRunRequired(): ProjectSetupRun {
    if (!customRun) throw new Error("A project setup run is required before development.");
    return customRun;
  }

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
          ? (
            <CustomDashboard
              developmentResult={developmentResult}
              onCompleteDevelopment={completeDevelopment}
              onEdit={editCustomRun}
              onLockPreProduction={setPreProductionResult}
              onSelectActors={setSelectedActorIds}
              onSelectCrew={setSelectedCrewIds}
              onSelectLocation={setSelectedLocationId}
              preProductionResult={preProductionResult}
              onSelectDevelopmentPath={setSelectedDevelopmentPath}
              run={customRun}
              selectedActorIds={selectedActorIds}
              selectedCrewIds={selectedCrewIds}
              selectedDevelopmentPath={selectedDevelopmentPath}
              selectedLocationId={selectedLocationId}
            />
          )
          : <main className="setup-workspace"><SetupPanel onCreate={createCustomRun} /></main>
      )}

      <footer><span>HG Film Producer</span><span>{mode === "demo" ? "Engine-backed deterministic demo" : "Interactive development and pre-production"}</span></footer>
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

interface CustomDashboardProps {
  readonly run: ProjectSetupRun;
  readonly selectedDevelopmentPath: DevelopmentPath | null;
  readonly developmentResult: DevelopmentStepResult | null;
  readonly preProductionResult: PreProductionStepResult | null;
  readonly selectedLocationId: string;
  readonly selectedCrewIds: readonly string[];
  readonly selectedActorIds: readonly string[];
  readonly onSelectDevelopmentPath: (path: DevelopmentPath) => void;
  readonly onCompleteDevelopment: (result: DevelopmentStepResult) => void;
  readonly onSelectLocation: (locationId: string) => void;
  readonly onSelectCrew: (crewIds: readonly string[]) => void;
  readonly onSelectActors: (actorIds: readonly string[]) => void;
  readonly onLockPreProduction: (result: PreProductionStepResult) => void;
  readonly onEdit: () => void;
}

function CustomDashboard({
  run,
  selectedDevelopmentPath,
  developmentResult,
  preProductionResult,
  selectedLocationId,
  selectedCrewIds,
  selectedActorIds,
  onSelectDevelopmentPath,
  onCompleteDevelopment,
  onSelectLocation,
  onSelectCrew,
  onSelectActors,
  onLockPreProduction,
  onEdit
}: CustomDashboardProps) {
  const developmentPipeline = developmentResult
    ? addDevelopmentPipelineStep(run, developmentResult.pipelineStep)
    : run.pipelineSteps;
  const pipelineSteps = preProductionResult
    ? [...developmentPipeline, preProductionResult.pipelineStep]
    : developmentPipeline;

  return (
    <>
      <StudioHeader studio={run.studio} />
      <main>
        <div className="dashboard-intro">
          <div><span className="eyebrow">Opening slate</span><h2>{developmentResult ? "Pre-production desk" : "Development desk"}</h2></div>
          <p>{preProductionResult ? "The production team is locked. This playable step stops before the shoot." : developmentResult ? "Development is complete. Build the practical team and location plan." : "Your studio and first film are ready. Choose one early development action."}</p>
        </div>
        <div className="custom-dashboard-grid">
          <div className="dashboard-main">
            <ProjectPipeline project={run.project} steps={pipelineSteps} />
            {developmentResult ? (
              <>
                <DevelopmentResultPanel result={developmentResult} />
                {preProductionResult
                  ? <ProductionTeamResultPanel result={preProductionResult} />
                  : (
                    <PreProductionPanel
                      developmentResult={developmentResult}
                      onLock={onLockPreProduction}
                      onSelectActors={onSelectActors}
                      onSelectCrew={onSelectCrew}
                      onSelectLocation={onSelectLocation}
                      run={run}
                      selectedActorIds={selectedActorIds}
                      selectedCrewIds={selectedCrewIds}
                      selectedLocationId={selectedLocationId}
                    />
                  )}
              </>
            ) : (
              <DevelopmentPanel
                onComplete={onCompleteDevelopment}
                onSelectPath={onSelectDevelopmentPath}
                run={run}
                selectedPath={selectedDevelopmentPath}
              />
            )}
          </div>
          <RunSummaryPanel developmentResult={developmentResult} preProductionResult={preProductionResult} run={run} onEdit={onEdit} />
        </div>
      </main>
    </>
  );
}

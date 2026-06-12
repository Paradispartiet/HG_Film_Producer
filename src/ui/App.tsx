import { useState } from "react";
import { CareerApplicationPanel } from "./components/CareerApplicationPanel";
import { CareerPanel } from "./components/CareerPanel";
import { DevelopmentPanel } from "./components/DevelopmentPanel";
import { DevelopmentResultPanel } from "./components/DevelopmentResultPanel";
import { FilmResultPanel } from "./components/FilmResultPanel";
import { NextProjectPanel } from "./components/NextProjectPanel";
import { PostProductionPanel } from "./components/PostProductionPanel";
import { PreProductionPanel } from "./components/PreProductionPanel";
import { ProductionTeamResultPanel } from "./components/ProductionTeamResultPanel";
import { ProjectPipeline } from "./components/ProjectPipeline";
import { ReleasePanel } from "./components/ReleasePanel";
import { ReleaseStepPanel } from "./components/ReleaseStepPanel";
import { RunSummaryPanel } from "./components/RunSummaryPanel";
import { SetupPanel } from "./components/SetupPanel";
import { ShootPanel } from "./components/ShootPanel";
import { StudioHeader } from "./components/StudioHeader";
import { SystemStatusPanel } from "./components/SystemStatusPanel";
import {
  type DevelopmentPath,
  type DevelopmentStepResult
} from "./demo/createDevelopmentStepRun";
import {
  createCareerApplicationStepResult,
  type CareerApplicationStepResult
} from "./demo/createCareerApplicationStepRun";
import { createDemoStudioRun } from "./demo/createDemoStudioRun";
import {
  getPreProductionLocationOptions,
  type PreProductionStepResult
} from "./demo/createPreProductionStepRun";
import {
  addDevelopmentPipelineStep,
  type ProjectSetupRun
} from "./demo/createProjectSetupRun";
import { createProjectRunContext } from "./demo/createProjectRunContext";
import { type ShootStepResult } from "./demo/createShootStepRun";
import type { NextProjectStepResult } from "./demo/createNextProjectStepRun";
import type { PostProductionChoices, PostProductionStepResult } from "./demo/createPostProductionStepRun";
import type { ReleaseStepChoices, ReleaseStepResult } from "./demo/createReleaseStepRun";
import type { AppMode, PostProductionSelectionState, PreProductionSelectionState, ReleaseSelectionState } from "./types";

const demo = createDemoStudioRun();
const emptyPostProductionChoices: PostProductionSelectionState = {
  editDecisionId: "", soundDecisionId: "", musicDecisionId: "", colorDecisionId: "", trailerStrategyId: ""
};
const emptyReleaseChoices: ReleaseSelectionState = { releaseStrategyId: "", festivalId: "" };

export function App() {
  const [mode, setMode] = useState<AppMode>("demo");
  const [customRun, setCustomRun] = useState<ProjectSetupRun | null>(null);
  const [selectedDevelopmentPath, setSelectedDevelopmentPath] = useState<DevelopmentPath | null>(null);
  const [developmentResult, setDevelopmentResult] = useState<DevelopmentStepResult | null>(null);
  const [preProductionResult, setPreProductionResult] = useState<PreProductionStepResult | null>(null);
  const [selectedLocationId, setSelectedLocationId] = useState<PreProductionSelectionState["selectedLocationId"]>("");
  const [selectedCrewIds, setSelectedCrewIds] = useState<PreProductionSelectionState["selectedCrewIds"]>([]);
  const [selectedActorIds, setSelectedActorIds] = useState<PreProductionSelectionState["selectedActorIds"]>([]);
  const [selectedProductionEventId, setSelectedProductionEventId] = useState("");
  const [shootResult, setShootResult] = useState<ShootStepResult | null>(null);
  const [postProductionChoices, setPostProductionChoices] = useState<PostProductionChoices>(emptyPostProductionChoices);
  const [postProductionResult, setPostProductionResult] = useState<PostProductionStepResult | null>(null);
  const [releaseChoices, setReleaseChoices] = useState<ReleaseStepChoices>(emptyReleaseChoices);
  const [releaseResult, setReleaseResult] = useState<ReleaseStepResult | null>(null);
  const [careerApplicationResult, setCareerApplicationResult] = useState<CareerApplicationStepResult | null>(null);
  const [nextProjectResult, setNextProjectResult] = useState<NextProjectStepResult | null>(null);
  const [selectedNextDevelopmentPath, setSelectedNextDevelopmentPath] = useState<DevelopmentPath | null>(null);
  const [nextDevelopmentResult, setNextDevelopmentResult] = useState<DevelopmentStepResult | null>(null);

  function createCustomRun(run: ProjectSetupRun) {
    setCustomRun(run);
    setSelectedDevelopmentPath(null);
    setDevelopmentResult(null);
    resetPreProduction();
    resetShoot();
    resetNextProject();
  }

  function editCustomRun() {
    setCustomRun(null);
    setSelectedDevelopmentPath(null);
    setDevelopmentResult(null);
    resetPreProduction();
    resetShoot();
    resetNextProject();
  }

  function completeDevelopment(result: DevelopmentStepResult) {
    setDevelopmentResult(result);
    setPreProductionResult(null);
    setSelectedLocationId(getPreProductionLocationOptions(customRunRequired(), result).find((option) => option.recommended)?.id ?? "");
    setSelectedCrewIds([]);
    setSelectedActorIds([]);
    resetShoot();
  }

  function resetPreProduction() {
    setPreProductionResult(null);
    setSelectedLocationId("");
    setSelectedCrewIds([]);
    setSelectedActorIds([]);
    resetShoot();
  }

  function resetShoot() {
    setSelectedProductionEventId("");
    setShootResult(null);
    resetPostProduction();
  }

  function resetPostProduction() {
    setPostProductionChoices(emptyPostProductionChoices);
    setPostProductionResult(null);
    resetRelease();
  }

  function resetRelease() {
    setReleaseChoices(emptyReleaseChoices);
    setReleaseResult(null);
    setCareerApplicationResult(null);
    resetNextProject();
  }

  function resetNextProject() {
    setNextProjectResult(null);
    setSelectedNextDevelopmentPath(null);
    setNextDevelopmentResult(null);
  }

  function lockPreProduction(result: PreProductionStepResult) {
    setPreProductionResult(result);
    resetShoot();
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
              careerApplicationResult={careerApplicationResult}
              developmentResult={developmentResult}
              onCompleteDevelopment={completeDevelopment}
              onEdit={editCustomRun}
              onLockPreProduction={lockPreProduction}
              onSelectActors={setSelectedActorIds}
              onSelectCrew={setSelectedCrewIds}
              onSelectLocation={setSelectedLocationId}
              postProductionChoices={postProductionChoices}
              postProductionResult={postProductionResult}
              preProductionResult={preProductionResult}
              onResolveShootDay={(result) => { setShootResult(result); resetPostProduction(); }}
              onChangePostProductionChoices={setPostProductionChoices}
              onLockPostProduction={(result) => { setPostProductionResult(result); resetRelease(); }}
              onChangeReleaseChoices={setReleaseChoices}
              onReleaseFilm={(result) => { setReleaseResult(result); setCareerApplicationResult(null); resetNextProject(); }}
              onApplyCareerResult={() => {
                if (releaseResult) {
                  setCareerApplicationResult(createCareerApplicationStepResult(customRun, releaseResult, { closeFilmYear: true }));
                  resetNextProject();
                }
              }}
              releaseChoices={releaseChoices}
              releaseResult={releaseResult}
              onSelectProductionEvent={setSelectedProductionEventId}
              onSelectDevelopmentPath={setSelectedDevelopmentPath}
              run={customRun}
              selectedActorIds={selectedActorIds}
              selectedCrewIds={selectedCrewIds}
              selectedDevelopmentPath={selectedDevelopmentPath}
              selectedLocationId={selectedLocationId}
              selectedProductionEventId={selectedProductionEventId}
              shootResult={shootResult}
              nextProjectResult={nextProjectResult}
              selectedNextDevelopmentPath={selectedNextDevelopmentPath}
              nextDevelopmentResult={nextDevelopmentResult}
              onCreateNextProject={(result) => {
                setNextProjectResult(result);
                setSelectedNextDevelopmentPath(null);
                setNextDevelopmentResult(null);
              }}
              onSelectNextDevelopmentPath={setSelectedNextDevelopmentPath}
              onCompleteNextDevelopment={setNextDevelopmentResult}
            />
          )
          : <main className="setup-workspace"><SetupPanel onCreate={createCustomRun} /></main>
      )}

      <footer><span>HG Film Producer</span><span>{mode === "demo" ? "Engine-backed deterministic demo" : "Interactive production pipeline"}</span></footer>
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
  readonly careerApplicationResult: CareerApplicationStepResult | null;
  readonly developmentResult: DevelopmentStepResult | null;
  readonly preProductionResult: PreProductionStepResult | null;
  readonly selectedLocationId: string;
  readonly selectedCrewIds: readonly string[];
  readonly selectedActorIds: readonly string[];
  readonly selectedProductionEventId: string;
  readonly shootResult: ShootStepResult | null;
  readonly postProductionChoices: PostProductionChoices;
  readonly postProductionResult: PostProductionStepResult | null;
  readonly releaseChoices: ReleaseStepChoices;
  readonly releaseResult: ReleaseStepResult | null;
  readonly onSelectDevelopmentPath: (path: DevelopmentPath) => void;
  readonly onCompleteDevelopment: (result: DevelopmentStepResult) => void;
  readonly onSelectLocation: (locationId: string) => void;
  readonly onSelectCrew: (crewIds: readonly string[]) => void;
  readonly onSelectActors: (actorIds: readonly string[]) => void;
  readonly onLockPreProduction: (result: PreProductionStepResult) => void;
  readonly onSelectProductionEvent: (eventId: string) => void;
  readonly onResolveShootDay: (result: ShootStepResult) => void;
  readonly onChangePostProductionChoices: (choices: PostProductionChoices) => void;
  readonly onLockPostProduction: (result: PostProductionStepResult) => void;
  readonly onChangeReleaseChoices: (choices: ReleaseStepChoices) => void;
  readonly onReleaseFilm: (result: ReleaseStepResult) => void;
  readonly onApplyCareerResult: () => void;
  readonly onEdit: () => void;
  readonly nextProjectResult: NextProjectStepResult | null;
  readonly selectedNextDevelopmentPath: DevelopmentPath | null;
  readonly nextDevelopmentResult: DevelopmentStepResult | null;
  readonly onCreateNextProject: (result: NextProjectStepResult) => void;
  readonly onSelectNextDevelopmentPath: (path: DevelopmentPath) => void;
  readonly onCompleteNextDevelopment: (result: DevelopmentStepResult) => void;
}

function CustomDashboard({
  run,
  careerApplicationResult,
  selectedDevelopmentPath,
  developmentResult,
  preProductionResult,
  selectedLocationId,
  selectedCrewIds,
  selectedActorIds,
  selectedProductionEventId,
  shootResult,
  postProductionChoices,
  postProductionResult,
  releaseChoices,
  releaseResult,
  onSelectDevelopmentPath,
  onCompleteDevelopment,
  onSelectLocation,
  onSelectCrew,
  onSelectActors,
  onLockPreProduction,
  onSelectProductionEvent,
  onResolveShootDay,
  onChangePostProductionChoices,
  onLockPostProduction,
  onChangeReleaseChoices,
  onReleaseFilm,
  onApplyCareerResult,
  onEdit,
  nextProjectResult,
  selectedNextDevelopmentPath,
  nextDevelopmentResult,
  onCreateNextProject,
  onSelectNextDevelopmentPath,
  onCompleteNextDevelopment
}: CustomDashboardProps) {
  const developmentPipeline = developmentResult
    ? addDevelopmentPipelineStep(run, developmentResult.pipelineStep)
    : run.pipelineSteps;
  const preProductionPipeline = preProductionResult
    ? [...developmentPipeline, preProductionResult.pipelineStep]
    : developmentPipeline;
  const shootPipeline = shootResult
    ? [...preProductionPipeline, shootResult.pipelineStep]
    : preProductionPipeline;
  const postProductionPipeline = postProductionResult ? [...shootPipeline, postProductionResult.pipelineStep] : shootPipeline;
  const releasePipeline = releaseResult ? [...postProductionPipeline, releaseResult.pipelineStep] : postProductionPipeline;
  const pipelineSteps = careerApplicationResult ? [...releasePipeline, careerApplicationResult.pipelineStep] : releasePipeline;
  const displayedStudio = careerApplicationResult
    ? {
        name: careerApplicationResult.updatedStudio.name,
        money: careerApplicationResult.updatedStudio.money,
        reputation: careerApplicationResult.updatedStudio.reputation,
        prestige: careerApplicationResult.updatedStudio.prestige,
        currentYear: careerApplicationResult.updatedCareerState.currentYear,
        currentQuarter: careerApplicationResult.updatedCareerState.currentQuarter.toUpperCase()
      }
    : run.studio;

  return (
    <>
      <StudioHeader studio={displayedStudio} />
      <main>
        <div className="dashboard-intro">
          <div><span className="eyebrow">Opening slate</span><h2>{careerApplicationResult ? "Career review" : releaseResult ? "Release report" : postProductionResult ? "Release desk" : shootResult ? "Post-production desk" : preProductionResult ? "Shoot desk" : developmentResult ? "Pre-production desk" : "Development desk"}</h2></div>
          <p>{careerApplicationResult ? "The release is recorded. Review the updated studio and prepare to start the next project." : releaseResult ? "The film is released. Apply the outcome to the studio and close the film year." : postProductionResult ? "The cut is locked. Choose a distribution strategy and festival to release the film." : shootResult ? "The first shoot day is resolved. Start post-production and lock the cut." : preProductionResult ? "The production team is locked. Start and resolve the first shoot day." : developmentResult ? "Development is complete. Build the practical team and location plan." : "Your studio and first film are ready. Choose one early development action."}</p>
        </div>
        <div className="custom-dashboard-grid">
          <div className="dashboard-main">
            <ProjectPipeline project={run.project} steps={pipelineSteps} />
            {developmentResult ? (
              <>
                <DevelopmentResultPanel result={developmentResult} />
                {preProductionResult
                  ? (
                    <>
                      <ProductionTeamResultPanel compact result={preProductionResult} />
                      <ShootPanel
                        developmentResult={developmentResult}
                        onResolveShootDay={onResolveShootDay}
                        onSelectProductionEvent={onSelectProductionEvent}
                        preProductionResult={preProductionResult}
                        run={run}
                        selectedProductionEventId={selectedProductionEventId}
                        shootResult={shootResult}
                      />
                      {shootResult && (
                        <PostProductionPanel choices={postProductionChoices} developmentResult={developmentResult} onChange={onChangePostProductionChoices} onLock={onLockPostProduction} preProductionResult={preProductionResult} result={postProductionResult} run={run} shootResult={shootResult} />
                      )}
                      {shootResult && postProductionResult && (
                        <ReleaseStepPanel choices={releaseChoices} developmentResult={developmentResult} onChange={onChangeReleaseChoices} onRelease={onReleaseFilm} postProductionResult={postProductionResult} preProductionResult={preProductionResult} result={releaseResult} run={run} shootResult={shootResult} />
                      )}
                      {postProductionResult && (
                        <CareerApplicationPanel onApply={onApplyCareerResult} releaseResult={releaseResult} result={careerApplicationResult} run={run} />
                      )}
                    </>
                  )
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
                run={createProjectRunContext(run)}
                selectedPath={selectedDevelopmentPath}
              />
            )}
            {careerApplicationResult && (
              <NextProjectPanel
                careerApplicationResult={careerApplicationResult}
                developmentResult={nextDevelopmentResult}
                onCompleteDevelopment={onCompleteNextDevelopment}
                onCreate={onCreateNextProject}
                onSelectDevelopmentPath={onSelectNextDevelopmentPath}
                result={nextProjectResult}
                run={run}
                selectedDevelopmentPath={selectedNextDevelopmentPath}
              />
            )}
          </div>
          <RunSummaryPanel careerApplicationResult={careerApplicationResult} developmentResult={developmentResult} postProductionResult={postProductionResult} preProductionResult={preProductionResult} releaseResult={releaseResult} run={run} shootResult={shootResult} onEdit={onEdit} />
        </div>
      </main>
    </>
  );
}

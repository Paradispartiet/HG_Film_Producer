import { useState } from "react";
import { CareerApplicationPanel } from "./components/CareerApplicationPanel";
import { CareerPanel } from "./components/CareerPanel";
import { DevelopmentPanel } from "./components/DevelopmentPanel";
import { DevelopmentResultPanel } from "./components/DevelopmentResultPanel";
import { FilmResultPanel } from "./components/FilmResultPanel";
import { GameNavigation } from "./components/GameNavigation";
import { LandingScreen } from "./components/LandingScreen";
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
const emptyPreProductionSelections: PreProductionSelectionState = {
  selectedLocationId: "",
  selectedCrewIds: [],
  selectedActorIds: []
};

export function App() {
  const [view, setView] = useState<"landing" | "game" | "dev">("landing");
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
  const [secondProjectDevelopmentResult, setSecondProjectDevelopmentResult] = useState<DevelopmentStepResult | null>(null);
  const [secondProjectPreProductionSelections, setSecondProjectPreProductionSelections] = useState<PreProductionSelectionState>(emptyPreProductionSelections);
  const [secondProjectPreProductionResult, setSecondProjectPreProductionResult] = useState<PreProductionStepResult | null>(null);
  const [secondProjectSelectedProductionEventId, setSecondProjectSelectedProductionEventId] = useState("");
  const [secondProjectShootResult, setSecondProjectShootResult] = useState<ShootStepResult | null>(null);
  const [secondProjectPostProductionChoices, setSecondProjectPostProductionChoices] = useState<PostProductionChoices>(emptyPostProductionChoices);
  const [secondProjectPostProductionResult, setSecondProjectPostProductionResult] = useState<PostProductionStepResult | null>(null);
  const [secondProjectReleaseChoices, setSecondProjectReleaseChoices] = useState<ReleaseStepChoices>(emptyReleaseChoices);
  const [secondProjectReleaseResult, setSecondProjectReleaseResult] = useState<ReleaseStepResult | null>(null);
  const [secondProjectCareerApplicationResult, setSecondProjectCareerApplicationResult] = useState<CareerApplicationStepResult | null>(null);
  const [thirdProjectResult, setThirdProjectResult] = useState<NextProjectStepResult | null>(null);
  const [selectedThirdDevelopmentPath, setSelectedThirdDevelopmentPath] = useState<DevelopmentPath | null>(null);
  const [thirdProjectDevelopmentResult, setThirdProjectDevelopmentResult] = useState<DevelopmentStepResult | null>(null);
  const [thirdProjectPreProductionSelections, setThirdProjectPreProductionSelections] = useState<PreProductionSelectionState>(emptyPreProductionSelections);
  const [thirdProjectPreProductionResult, setThirdProjectPreProductionResult] = useState<PreProductionStepResult | null>(null);
  const [thirdProjectSelectedProductionEventId, setThirdProjectSelectedProductionEventId] = useState("");
  const [thirdProjectShootResult, setThirdProjectShootResult] = useState<ShootStepResult | null>(null);
  const [thirdProjectPostProductionChoices, setThirdProjectPostProductionChoices] = useState<PostProductionChoices>(emptyPostProductionChoices);
  const [thirdProjectPostProductionResult, setThirdProjectPostProductionResult] = useState<PostProductionStepResult | null>(null);

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
    setSelectedLocationId(getPreProductionLocationOptions(createProjectRunContext(customRunRequired()), result).find((option) => option.recommended)?.id ?? "");
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
    setSecondProjectDevelopmentResult(null);
    setSecondProjectPreProductionSelections(emptyPreProductionSelections);
    setSecondProjectPreProductionResult(null);
    setSecondProjectSelectedProductionEventId("");
    setSecondProjectShootResult(null);
    setSecondProjectPostProductionChoices(emptyPostProductionChoices);
    setSecondProjectPostProductionResult(null);
    setSecondProjectReleaseChoices(emptyReleaseChoices);
    setSecondProjectReleaseResult(null);
    setSecondProjectCareerApplicationResult(null);
    setThirdProjectResult(null);
    setSelectedThirdDevelopmentPath(null);
    setThirdProjectDevelopmentResult(null);
    setThirdProjectPreProductionSelections(emptyPreProductionSelections);
    setThirdProjectPreProductionResult(null);
    setThirdProjectSelectedProductionEventId("");
    setThirdProjectShootResult(null);
    setThirdProjectPostProductionChoices(emptyPostProductionChoices);
    setThirdProjectPostProductionResult(null);
  }

  function lockPreProduction(result: PreProductionStepResult) {
    setPreProductionResult(result);
    resetShoot();
  }

  function customRunRequired(): ProjectSetupRun {
    if (!customRun) throw new Error("A project setup run is required before development.");
    return customRun;
  }

  function nextProjectResultRequired(result: NextProjectStepResult | null): NextProjectStepResult {
    if (!result) throw new Error("A second project is required before development.");
    return result;
  }

  if (view === "landing") {
    return (
      <LandingScreen
        onDemo={() => { setMode("demo"); setView("dev"); }}
        onDevDashboard={() => { setMode("demo"); setView("dev"); }}
        onStart={() => { setMode("setup"); setView("game"); }}
      />
    );
  }

  return (
    <div className="app-shell">
      {view === "game" ? (
        <GameNavigation
          context={customRun?.project.title ?? "New studio"}
          onDevDashboard={() => { setMode("demo"); setView("dev"); }}
          onHome={() => setView("landing")}
        />
      ) : <nav className="mode-switch" aria-label="Dashboard mode">
        <div><span className="eyebrow">HG Film Producer</span><strong>Production workspace</strong></div>
        <div className="mode-switch-buttons">
          <button className={mode === "demo" ? "mode-button mode-button--active" : "mode-button"} onClick={() => setMode("demo")} type="button">Demo run</button>
          <button className="mode-button" onClick={() => { setMode("setup"); setView("game"); }} type="button">Playable shell</button>
          <button className="mode-button" onClick={() => setView("landing")} type="button">Title screen</button>
        </div>
      </nav>}

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
                  setCareerApplicationResult(createCareerApplicationStepResult(createProjectRunContext(customRun), releaseResult, { closeFilmYear: true }));
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
              secondProjectDevelopmentResult={secondProjectDevelopmentResult}
              secondProjectPreProductionSelections={secondProjectPreProductionSelections}
              secondProjectPreProductionResult={secondProjectPreProductionResult}
              secondProjectSelectedProductionEventId={secondProjectSelectedProductionEventId}
              secondProjectShootResult={secondProjectShootResult}
              secondProjectPostProductionChoices={secondProjectPostProductionChoices}
              secondProjectPostProductionResult={secondProjectPostProductionResult}
              secondProjectReleaseChoices={secondProjectReleaseChoices}
              secondProjectReleaseResult={secondProjectReleaseResult}
              secondProjectCareerApplicationResult={secondProjectCareerApplicationResult}
              thirdProjectResult={thirdProjectResult}
              selectedThirdDevelopmentPath={selectedThirdDevelopmentPath}
              thirdProjectDevelopmentResult={thirdProjectDevelopmentResult}
              thirdProjectPreProductionSelections={thirdProjectPreProductionSelections}
              thirdProjectPreProductionResult={thirdProjectPreProductionResult}
              thirdProjectSelectedProductionEventId={thirdProjectSelectedProductionEventId}
              thirdProjectShootResult={thirdProjectShootResult}
              thirdProjectPostProductionChoices={thirdProjectPostProductionChoices}
              thirdProjectPostProductionResult={thirdProjectPostProductionResult}
              onCreateNextProject={(result) => {
                setNextProjectResult(result);
                setSelectedNextDevelopmentPath(null);
                setSecondProjectDevelopmentResult(null);
                setSecondProjectPreProductionSelections(emptyPreProductionSelections);
                setSecondProjectPreProductionResult(null);
                setSecondProjectSelectedProductionEventId("");
                setSecondProjectShootResult(null);
                setSecondProjectPostProductionChoices(emptyPostProductionChoices);
                setSecondProjectPostProductionResult(null);
                setSecondProjectReleaseChoices(emptyReleaseChoices);
                setSecondProjectReleaseResult(null);
                setSecondProjectCareerApplicationResult(null);
                setThirdProjectResult(null);
                setSelectedThirdDevelopmentPath(null);
                setThirdProjectDevelopmentResult(null);
              }}
              onSelectSecondProjectDevelopmentPath={setSelectedNextDevelopmentPath}
              onCompleteSecondProjectDevelopment={(result) => {
                setSecondProjectDevelopmentResult(result);
                const projectContext = createProjectRunContext(nextProjectResultRequired(nextProjectResult));
                const recommendedLocationId = getPreProductionLocationOptions(projectContext, result)
                  .find((option) => option.recommended)?.id ?? "";
                setSecondProjectPreProductionSelections({ ...emptyPreProductionSelections, selectedLocationId: recommendedLocationId });
                setSecondProjectPreProductionResult(null);
                setSecondProjectSelectedProductionEventId("");
                setSecondProjectShootResult(null);
                setSecondProjectPostProductionChoices(emptyPostProductionChoices);
                setSecondProjectPostProductionResult(null);
                setSecondProjectReleaseChoices(emptyReleaseChoices);
                setSecondProjectReleaseResult(null);
                setSecondProjectCareerApplicationResult(null);
                setThirdProjectResult(null);
                setSelectedThirdDevelopmentPath(null);
                setThirdProjectDevelopmentResult(null);
              }}
              onChangeSecondProjectPreProductionSelections={setSecondProjectPreProductionSelections}
              onLockSecondProjectPreProduction={(result) => {
                setSecondProjectPreProductionResult(result);
                setSecondProjectSelectedProductionEventId("");
                setSecondProjectShootResult(null);
                setSecondProjectPostProductionChoices(emptyPostProductionChoices);
                setSecondProjectPostProductionResult(null);
                setSecondProjectReleaseChoices(emptyReleaseChoices);
                setSecondProjectReleaseResult(null);
                setSecondProjectCareerApplicationResult(null);
                setThirdProjectResult(null);
                setSelectedThirdDevelopmentPath(null);
                setThirdProjectDevelopmentResult(null);
              }}
              onSelectSecondProjectProductionEvent={setSecondProjectSelectedProductionEventId}
              onResolveSecondProjectShootDay={(result) => {
                setSecondProjectShootResult(result);
                setSecondProjectPostProductionChoices(emptyPostProductionChoices);
                setSecondProjectPostProductionResult(null);
                setSecondProjectReleaseChoices(emptyReleaseChoices);
                setSecondProjectReleaseResult(null);
                setSecondProjectCareerApplicationResult(null);
                setThirdProjectResult(null);
                setSelectedThirdDevelopmentPath(null);
                setThirdProjectDevelopmentResult(null);
              }}
              onChangeSecondProjectPostProductionChoices={setSecondProjectPostProductionChoices}
              onLockSecondProjectPostProduction={(result) => {
                setSecondProjectPostProductionResult(result);
                setSecondProjectReleaseChoices(emptyReleaseChoices);
                setSecondProjectReleaseResult(null);
                setSecondProjectCareerApplicationResult(null);
                setThirdProjectResult(null);
                setSelectedThirdDevelopmentPath(null);
                setThirdProjectDevelopmentResult(null);
              }}
              onChangeSecondProjectReleaseChoices={setSecondProjectReleaseChoices}
              onReleaseSecondProject={(result) => {
                setSecondProjectReleaseResult(result);
                setSecondProjectCareerApplicationResult(null);
                setThirdProjectResult(null);
                setSelectedThirdDevelopmentPath(null);
                setThirdProjectDevelopmentResult(null);
              }}
              onApplySecondProjectCareerResult={() => {
                if (!nextProjectResult || !secondProjectReleaseResult) return;
                setSecondProjectCareerApplicationResult(
                  createCareerApplicationStepResult(
                    createProjectRunContext(nextProjectResult),
                    secondProjectReleaseResult,
                    { closeFilmYear: true }
                  )
                );
                setThirdProjectResult(null);
                setSelectedThirdDevelopmentPath(null);
                setThirdProjectDevelopmentResult(null);
              }}
              onCreateThirdProject={(result) => {
                setThirdProjectResult(result);
                setSelectedThirdDevelopmentPath(null);
                setThirdProjectDevelopmentResult(null);
                setThirdProjectPreProductionSelections(emptyPreProductionSelections);
                setThirdProjectPreProductionResult(null);
                setThirdProjectSelectedProductionEventId("");
                setThirdProjectShootResult(null);
                setThirdProjectPostProductionChoices(emptyPostProductionChoices);
                setThirdProjectPostProductionResult(null);
              }}
              onSelectThirdProjectDevelopmentPath={setSelectedThirdDevelopmentPath}
              onCompleteThirdProjectDevelopment={(result) => {
                setThirdProjectDevelopmentResult(result);
                const projectContext = createProjectRunContext(nextProjectResultRequired(thirdProjectResult));
                const selectedLocationId = getPreProductionLocationOptions(projectContext, result)
                  .find((option) => option.recommended)?.id ?? "";
                setThirdProjectPreProductionSelections({ ...emptyPreProductionSelections, selectedLocationId });
                setThirdProjectPreProductionResult(null);
                setThirdProjectSelectedProductionEventId("");
                setThirdProjectShootResult(null);
                setThirdProjectPostProductionChoices(emptyPostProductionChoices);
                setThirdProjectPostProductionResult(null);
              }}
              onChangeThirdProjectPreProductionSelections={setThirdProjectPreProductionSelections}
              onLockThirdProjectPreProduction={(result) => {
                setThirdProjectPreProductionResult(result);
                setThirdProjectSelectedProductionEventId("");
                setThirdProjectShootResult(null);
                setThirdProjectPostProductionChoices(emptyPostProductionChoices);
                setThirdProjectPostProductionResult(null);
              }}
              onSelectThirdProjectProductionEvent={setThirdProjectSelectedProductionEventId}
              onResolveThirdProjectShootDay={(result) => {
                setThirdProjectShootResult(result);
                setThirdProjectPostProductionChoices(emptyPostProductionChoices);
                setThirdProjectPostProductionResult(null);
              }}
              onChangeThirdProjectPostProductionChoices={setThirdProjectPostProductionChoices}
              onLockThirdProjectPostProduction={setThirdProjectPostProductionResult}
            />
          )
          : <main className="setup-workspace"><SetupPanel onCreate={createCustomRun} /></main>
      )}

      <footer><span>HG Film Producer</span><span>{view === "dev" ? "Dev mode · engine-backed dashboard" : "Interactive production pipeline"}</span></footer>
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
  readonly secondProjectDevelopmentResult: DevelopmentStepResult | null;
  readonly secondProjectPreProductionSelections: PreProductionSelectionState;
  readonly secondProjectPreProductionResult: PreProductionStepResult | null;
  readonly secondProjectSelectedProductionEventId: string;
  readonly secondProjectShootResult: ShootStepResult | null;
  readonly secondProjectPostProductionChoices: PostProductionChoices;
  readonly secondProjectPostProductionResult: PostProductionStepResult | null;
  readonly secondProjectReleaseChoices: ReleaseStepChoices;
  readonly secondProjectReleaseResult: ReleaseStepResult | null;
  readonly secondProjectCareerApplicationResult: CareerApplicationStepResult | null;
  readonly thirdProjectResult: NextProjectStepResult | null;
  readonly selectedThirdDevelopmentPath: DevelopmentPath | null;
  readonly thirdProjectDevelopmentResult: DevelopmentStepResult | null;
  readonly thirdProjectPreProductionSelections: PreProductionSelectionState;
  readonly thirdProjectPreProductionResult: PreProductionStepResult | null;
  readonly thirdProjectSelectedProductionEventId: string;
  readonly thirdProjectShootResult: ShootStepResult | null;
  readonly thirdProjectPostProductionChoices: PostProductionChoices;
  readonly thirdProjectPostProductionResult: PostProductionStepResult | null;
  readonly onCreateNextProject: (result: NextProjectStepResult) => void;
  readonly onSelectSecondProjectDevelopmentPath: (path: DevelopmentPath) => void;
  readonly onCompleteSecondProjectDevelopment: (result: DevelopmentStepResult) => void;
  readonly onChangeSecondProjectPreProductionSelections: (selections: PreProductionSelectionState) => void;
  readonly onLockSecondProjectPreProduction: (result: PreProductionStepResult) => void;
  readonly onSelectSecondProjectProductionEvent: (eventId: string) => void;
  readonly onResolveSecondProjectShootDay: (result: ShootStepResult) => void;
  readonly onChangeSecondProjectPostProductionChoices: (choices: PostProductionChoices) => void;
  readonly onLockSecondProjectPostProduction: (result: PostProductionStepResult) => void;
  readonly onChangeSecondProjectReleaseChoices: (choices: ReleaseStepChoices) => void;
  readonly onReleaseSecondProject: (result: ReleaseStepResult) => void;
  readonly onApplySecondProjectCareerResult: () => void;
  readonly onCreateThirdProject: (result: NextProjectStepResult) => void;
  readonly onSelectThirdProjectDevelopmentPath: (path: DevelopmentPath) => void;
  readonly onCompleteThirdProjectDevelopment: (result: DevelopmentStepResult) => void;
  readonly onChangeThirdProjectPreProductionSelections: (selections: PreProductionSelectionState) => void;
  readonly onLockThirdProjectPreProduction: (result: PreProductionStepResult) => void;
  readonly onSelectThirdProjectProductionEvent: (eventId: string) => void;
  readonly onResolveThirdProjectShootDay: (result: ShootStepResult) => void;
  readonly onChangeThirdProjectPostProductionChoices: (choices: PostProductionChoices) => void;
  readonly onLockThirdProjectPostProduction: (result: PostProductionStepResult) => void;
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
  secondProjectDevelopmentResult,
  secondProjectPreProductionSelections,
  secondProjectPreProductionResult,
  secondProjectSelectedProductionEventId,
  secondProjectShootResult,
  secondProjectPostProductionChoices,
  secondProjectPostProductionResult,
  secondProjectReleaseChoices,
  secondProjectReleaseResult,
  secondProjectCareerApplicationResult,
  thirdProjectResult,
  selectedThirdDevelopmentPath,
  thirdProjectDevelopmentResult,
  thirdProjectPreProductionSelections,
  thirdProjectPreProductionResult,
  thirdProjectSelectedProductionEventId,
  thirdProjectShootResult,
  thirdProjectPostProductionChoices,
  thirdProjectPostProductionResult,
  onCreateNextProject,
  onSelectSecondProjectDevelopmentPath,
  onCompleteSecondProjectDevelopment,
  onChangeSecondProjectPreProductionSelections,
  onLockSecondProjectPreProduction,
  onSelectSecondProjectProductionEvent,
  onResolveSecondProjectShootDay,
  onChangeSecondProjectPostProductionChoices,
  onLockSecondProjectPostProduction,
  onChangeSecondProjectReleaseChoices,
  onReleaseSecondProject,
  onApplySecondProjectCareerResult,
  onCreateThirdProject,
  onSelectThirdProjectDevelopmentPath,
  onCompleteThirdProjectDevelopment,
  onChangeThirdProjectPreProductionSelections,
  onLockThirdProjectPreProduction,
  onSelectThirdProjectProductionEvent,
  onResolveThirdProjectShootDay,
  onChangeThirdProjectPostProductionChoices,
  onLockThirdProjectPostProduction,
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
  const displayedCareerResult = secondProjectCareerApplicationResult ?? careerApplicationResult;
  const displayedStudio = displayedCareerResult
    ? {
        name: displayedCareerResult.updatedStudio.name,
        money: displayedCareerResult.updatedStudio.money,
        reputation: displayedCareerResult.updatedStudio.reputation,
        prestige: displayedCareerResult.updatedStudio.prestige,
        currentYear: displayedCareerResult.updatedCareerState.currentYear,
        currentQuarter: displayedCareerResult.updatedCareerState.currentQuarter.toUpperCase()
      }
    : run.studio;
  const currentPhase = releaseResult
    ? 5
    : postProductionResult || shootResult
      ? 4
      : preProductionResult
        ? 3
        : developmentResult
          ? 2
          : selectedDevelopmentPath
            ? 1
            : 0;

  function focusCurrentAction() {
    document.querySelector<HTMLElement>(".active-workspace")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <StudioHeader studio={displayedStudio} />
      <main>
        <div className="game-section-heading">
          <div><span className="eyebrow">Production office</span><h2>Your studio slate</h2></div>
          <p>Make the next decision, move the film forward, and build your studio’s place in cinema history.</p>
        </div>
        <div className="custom-dashboard-grid">
          <div className="dashboard-main">
            <ProjectPipeline currentPhase={currentPhase} onNextAction={focusCurrentAction} project={run.project} steps={pipelineSteps} />
            <div className="active-workspace">
            {developmentResult ? (
              <>
                <DevelopmentResultPanel projectLabel="Film 1" result={developmentResult} />
                {preProductionResult
                  ? (
                    <>
                      <ProductionTeamResultPanel compact result={preProductionResult} />
                      <ShootPanel
                        developmentResult={developmentResult}
                        onResolveShootDay={onResolveShootDay}
                        onSelectProductionEvent={onSelectProductionEvent}
                        preProductionResult={preProductionResult}
                        projectContext={createProjectRunContext(run)}
                        selectedProductionEventId={selectedProductionEventId}
                        shootResult={shootResult}
                      />
                      {shootResult && (
                        <PostProductionPanel choices={postProductionChoices} onChange={onChangePostProductionChoices} onLock={onLockPostProduction} preProductionResult={preProductionResult} projectContext={createProjectRunContext(run)} result={postProductionResult} shootResult={shootResult} />
                      )}
                      {shootResult && postProductionResult && (
                        <ReleaseStepPanel choices={releaseChoices} developmentResult={developmentResult} onChange={onChangeReleaseChoices} onRelease={onReleaseFilm} postProductionResult={postProductionResult} preProductionResult={preProductionResult} projectContext={createProjectRunContext(run)} projectLabel="first film" result={releaseResult} shootResult={shootResult} />
                      )}
                      {postProductionResult && (
                        <CareerApplicationPanel onApply={onApplyCareerResult} projectContext={createProjectRunContext(run)} projectLabel="first film" releaseResult={releaseResult} result={careerApplicationResult} strategicGoal={run.strategicGoal} />
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
                      projectContext={createProjectRunContext(run)}
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
                projectContext={createProjectRunContext(run)}
                projectLabel="Film 1"
                selectedPath={selectedDevelopmentPath}
              />
            )}
            {careerApplicationResult && (
              <NextProjectPanel
                careerApplicationResult={careerApplicationResult}
                developmentResult={secondProjectDevelopmentResult}
                onCompleteDevelopment={onCompleteSecondProjectDevelopment}
                onChangePreProductionSelections={onChangeSecondProjectPreProductionSelections}
                onLockPreProduction={onLockSecondProjectPreProduction}
                onResolveShootDay={onResolveSecondProjectShootDay}
                onSelectProductionEvent={onSelectSecondProjectProductionEvent}
                onCreate={onCreateNextProject}
                onSelectDevelopmentPath={onSelectSecondProjectDevelopmentPath}
                preProductionResult={secondProjectPreProductionResult}
                selectedProductionEventId={secondProjectSelectedProductionEventId}
                shootResult={secondProjectShootResult}
                postProductionChoices={secondProjectPostProductionChoices}
                postProductionResult={secondProjectPostProductionResult}
                onChangePostProductionChoices={onChangeSecondProjectPostProductionChoices}
                onLockPostProduction={onLockSecondProjectPostProduction}
                releaseChoices={secondProjectReleaseChoices}
                releaseResult={secondProjectReleaseResult}
                secondProjectCareerApplicationResult={secondProjectCareerApplicationResult}
                thirdProjectResult={thirdProjectResult}
                selectedThirdDevelopmentPath={selectedThirdDevelopmentPath}
                thirdProjectDevelopmentResult={thirdProjectDevelopmentResult}
                thirdProjectPreProductionSelections={thirdProjectPreProductionSelections}
                thirdProjectPreProductionResult={thirdProjectPreProductionResult}
                thirdProjectSelectedProductionEventId={thirdProjectSelectedProductionEventId}
                thirdProjectShootResult={thirdProjectShootResult}
                thirdProjectPostProductionChoices={thirdProjectPostProductionChoices}
                thirdProjectPostProductionResult={thirdProjectPostProductionResult}
                onChangeReleaseChoices={onChangeSecondProjectReleaseChoices}
                onRelease={onReleaseSecondProject}
                onApplyCareerResult={onApplySecondProjectCareerResult}
                onCreateThirdProject={onCreateThirdProject}
                onSelectThirdProjectDevelopmentPath={onSelectThirdProjectDevelopmentPath}
                onCompleteThirdProjectDevelopment={onCompleteThirdProjectDevelopment}
                onChangeThirdProjectPreProductionSelections={onChangeThirdProjectPreProductionSelections}
                onLockThirdProjectPreProduction={onLockThirdProjectPreProduction}
                onSelectThirdProjectProductionEvent={onSelectThirdProjectProductionEvent}
                onResolveThirdProjectShootDay={onResolveThirdProjectShootDay}
                onChangeThirdProjectPostProductionChoices={onChangeThirdProjectPostProductionChoices}
                onLockThirdProjectPostProduction={onLockThirdProjectPostProduction}
                preProductionSelections={secondProjectPreProductionSelections}
                result={nextProjectResult}
                run={run}
                selectedDevelopmentPath={selectedNextDevelopmentPath}
              />
            )}
            </div>
          </div>
          <RunSummaryPanel careerApplicationResult={careerApplicationResult} developmentResult={developmentResult} postProductionResult={postProductionResult} preProductionResult={preProductionResult} releaseResult={releaseResult} run={run} shootResult={shootResult} onEdit={onEdit} />
        </div>
      </main>
    </>
  );
}

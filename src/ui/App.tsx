import { useState } from "react";
import type { StrategicGoal } from "../domain/career";
import { CareerApplicationPanel } from "./components/CareerApplicationPanel";
import { CareerPanel } from "./components/CareerPanel";
import { DevelopmentPanel } from "./components/DevelopmentPanel";
import { DevelopmentResultPanel } from "./components/DevelopmentResultPanel";
import { FilmResultPanel } from "./components/FilmResultPanel";
import { FilmScenarioLibrary } from "./components/FilmScenarioLibrary";
import { GameNavigation } from "./components/GameNavigation";
import { LandingScreen } from "./components/LandingScreen";
import { NextProjectResultPanel } from "./components/NextProjectResultPanel";
import { NextProjectSetupForm } from "./components/NextProjectSetupForm";
import { PostProductionPanel } from "./components/PostProductionPanel";
import { PreProductionPanel } from "./components/PreProductionPanel";
import { ProductionTeamResultPanel } from "./components/ProductionTeamResultPanel";
import { ProjectPipeline } from "./components/ProjectPipeline";
import { ReleasePanel } from "./components/ReleasePanel";
import { ReleaseStepPanel } from "./components/ReleaseStepPanel";
import { ScenarioAlignmentResultPanel } from "./components/ScenarioAlignmentResultPanel";
import { ScenarioAlignmentScorePanel } from "./components/ScenarioAlignmentScorePanel";
import { ScenarioLearningRecapPanel } from "./components/ScenarioLearningRecapPanel";
import { ScenarioPhaseGuidancePanel } from "./components/ScenarioPhaseGuidancePanel";
import { ScenarioProductionBriefPanel } from "./components/ScenarioProductionBriefPanel";
import { ScenarioTargetChecklistPanel } from "./components/ScenarioTargetChecklistPanel";
import { RunSummaryPanel } from "./components/RunSummaryPanel";
import { SetupPanel } from "./components/SetupPanel";
import { ShootPanel } from "./components/ShootPanel";
import { StudioCarryoverPanel } from "./components/StudioCarryoverPanel";
import { StudioHeader } from "./components/StudioHeader";
import { SystemStatusPanel } from "./components/SystemStatusPanel";
import { createDemoStudioRun } from "./demo/createDemoStudioRun";
import { createScenarioProjectRun } from "./demo/createScenarioProjectRun";
import { addDevelopmentPipelineStep, type ProjectSetupRun } from "./demo/createProjectSetupRun";
import { createProjectRunContext } from "./demo/createProjectRunContext";
import { createNextProjectStepResult, getNextProjectOptions, type NextProjectChoices } from "./demo/createNextProjectStepRun";
import { type AppMode, type NextProjectFormErrors } from "./types";
import { careerRunActions, type CareerFilmProjectRun, useCareerRunState } from "./state/careerRunState";
import { getClassicFilmScenarios, getFilmScenarioById, type FilmScenarioSeed } from "./data/filmScenarios";
import { resolveScenarioProductionBrief } from "./data/scenarioProductionBriefs";
import { createScenarioTargetChecklist, getScenarioTargetCount } from "./data/scenarioTargetChecklist";

const demo = createDemoStudioRun();
const nextProjectOptions = getNextProjectOptions();
const initialNextProjectChoices: NextProjectChoices = { projectTitle: "", genreId: "", scale: "indie", scriptTemplateId: "" };

export function App() {
  const [view, setView] = useState<"landing" | "game" | "dev" | "scenarios">("landing");
  const [mode, setMode] = useState<AppMode>("demo");
  const { state: careerRun, setState: setCareerRun, hasSave } = useCareerRunState();
  const activeProject = careerRun.projects.at(-1);

  function startStudio(run: ProjectSetupRun) { setCareerRun(careerRunActions.startStudio(run)); }
  function startClassicScenario(scenario: FilmScenarioSeed) {
    const run = createScenarioProjectRun(scenario);
    setCareerRun(careerRunActions.startStudio(run));
    setMode("setup");
    setView("game");
  }
  function resetCareer() { setCareerRun(careerRunActions.resetCareer()); setMode("setup"); setView("game"); }

  if (view === "landing") {
    return <LandingScreen hasSave={hasSave} onContinue={() => { setMode("setup"); setView("game"); }} onDemo={() => { setMode("demo"); setView("dev"); }} onDevDashboard={() => { setMode("demo"); setView("dev"); }} onProductionCases={() => setView("scenarios")} onStart={() => { resetCareer(); }} />;
  }

  return (
    <div className="app-shell">
      {view === "game" ? (
        <GameNavigation context={activeProject?.run.project.title ?? "New studio"} onDevDashboard={() => { setMode("demo"); setView("dev"); }} onHome={() => setView("landing")} />
      ) : <nav className="mode-switch" aria-label="Dashboard mode"><div><span className="eyebrow">HG Film Producer</span><strong>Production workspace</strong></div><div className="mode-switch-buttons"><button className={mode === "demo" && view === "dev" ? "mode-button mode-button--active" : "mode-button"} onClick={() => { setMode("demo"); setView("dev"); }} type="button">Demo run</button><button className={view === "scenarios" ? "mode-button mode-button--active" : "mode-button"} onClick={() => setView("scenarios")} type="button">Production Cases</button><button className="mode-button" onClick={() => { setMode("setup"); setView("game"); }} type="button">Studio Career</button><button className="mode-button" onClick={() => setView("landing")} type="button">Title screen</button></div></nav>}
      {view === "scenarios" ? <FilmScenarioLibrary onStartScenario={startClassicScenario} /> : mode === "demo" ? <DemoDashboard /> : (careerRun.projects.length > 0 ? <CareerDashboard careerRun={careerRun.projects} onOpenProductionCases={() => setView("scenarios")} onResetCareer={resetCareer} onStartScenario={startClassicScenario} setCareerRun={setCareerRun} /> : <main className="setup-workspace"><SetupPanel onCreate={startStudio} /></main>)}
      <footer><span>HG Film Producer</span><span>{view === "dev" ? "Dev mode · engine-backed dashboard" : view === "scenarios" ? "Production case catalogue" : "Interactive production pipeline"}</span></footer>
    </div>
  );
}

function DemoDashboard() {
  return <><StudioHeader studio={demo.studio} /><main><div className="dashboard-intro"><div><span className="eyebrow">Portfolio overview</span><h2>Production desk</h2></div><p>One deterministic studio run, live from the HG simulation engine.</p></div><div className="dashboard-grid"><div className="dashboard-main"><ProjectPipeline project={demo.filmProject} steps={demo.pipelineSteps} /><ReleasePanel release={demo.releaseOutcome} /></div><aside className="dashboard-side"><CareerPanel career={demo.careerState} /><FilmResultPanel result={demo.filmResult} /><SystemStatusPanel engines={demo.representedEngines} /></aside></div></main></>;
}

function getRunContext(run: ProjectSetupRun | import("./demo/createNextProjectStepRun").NextProjectStepResult) { return createProjectRunContext(run as ProjectSetupRun & import("./demo/createNextProjectStepRun").NextProjectStepResult); }
function getRunStudio(run: ProjectSetupRun | import("./demo/createNextProjectStepRun").NextProjectStepResult) { return "studio" in run ? run.studio : { name: run.carriedStudio.name, money: run.carriedStudio.money, reputation: run.carriedStudio.reputation, prestige: run.carriedStudio.prestige, currentYear: run.carriedCareerState.currentYear, currentQuarter: run.carriedCareerState.currentQuarter.toUpperCase() }; }
function getStrategicGoal(run: ProjectSetupRun | import("./demo/createNextProjectStepRun").NextProjectStepResult, fallback?: CareerFilmProjectRun): StrategicGoal {
  if ("strategicGoal" in run) return run.strategicGoal;
  if (run.selectedStrategicGoal) return run.selectedStrategicGoal;
  if (fallback) return getStrategicGoal(fallback.run);
  throw new Error("A strategic goal is required for career application.");
}

function CareerDashboard({ careerRun, setCareerRun, onOpenProductionCases, onResetCareer, onStartScenario }: { readonly careerRun: readonly CareerFilmProjectRun[]; readonly setCareerRun: React.Dispatch<React.SetStateAction<{ version: 1; projects: readonly CareerFilmProjectRun[] }>>; readonly onOpenProductionCases: () => void; readonly onResetCareer: () => void; readonly onStartScenario: (scenario: FilmScenarioSeed) => void; }) {
  const firstProject = careerRun[0];
  if (!firstProject) return null;
  const latestCareerResult = [...careerRun].reverse().find((project) => project.careerApplicationResult)?.careerApplicationResult;
  const displayedStudio = latestCareerResult ? { name: latestCareerResult.updatedStudio.name, money: latestCareerResult.updatedStudio.money, reputation: latestCareerResult.updatedStudio.reputation, prestige: latestCareerResult.updatedStudio.prestige, currentYear: latestCareerResult.updatedCareerState.currentYear, currentQuarter: latestCareerResult.updatedCareerState.currentQuarter.toUpperCase() } : getRunStudio(firstProject.run);
  function update(action: Parameters<typeof setCareerRun>[0]) { setCareerRun(action); }

  return <><StudioHeader studio={displayedStudio} /><main><div className="game-section-heading"><div><span className="eyebrow">Production office</span><h2>Your studio slate</h2></div><p>Make the next decision, move each film forward, and build your studio’s place in cinema history.</p><button className="secondary-button" onClick={onResetCareer} type="button">Reset career</button></div><div className="custom-dashboard-grid"><div className="dashboard-main active-workspace">{careerRun.map((project, index) => <FilmProjectWorkspace isLatest={index === careerRun.length - 1} key={project.id} onOpenProductionCases={onOpenProductionCases} onStartScenario={onStartScenario} previousProject={index > 0 ? careerRun[index - 1] : undefined} project={project} setCareerRun={update} />)}</div><RunSummaryPanel careerApplicationResult={firstProject.careerApplicationResult} developmentResult={firstProject.developmentResult} postProductionResult={firstProject.postProductionResult} preProductionResult={firstProject.preProductionResult} releaseResult={firstProject.releaseResult} run={firstProject.run as ProjectSetupRun} shootResult={firstProject.shootResult} onEdit={onResetCareer} /></div></main></>;
}

function FilmProjectWorkspace({ project, isLatest, onOpenProductionCases, onStartScenario, previousProject, setCareerRun }: { readonly project: CareerFilmProjectRun; readonly isLatest: boolean; readonly onOpenProductionCases: () => void; readonly onStartScenario: (scenario: FilmScenarioSeed) => void; readonly previousProject: CareerFilmProjectRun | undefined; readonly setCareerRun: React.Dispatch<React.SetStateAction<{ version: 1; projects: readonly CareerFilmProjectRun[] }>>; }) {
  const [manualExpand, setManualExpand] = useState<boolean | null>(null);
  const collapsed = (manualExpand === null ? !isLatest : !manualExpand) && Boolean(project.careerApplicationResult);
  const pastSummary = project.careerApplicationResult?.pipelineStep;
  const context = getRunContext(project.run);
  const pipeline = project.careerApplicationResult ? [...projectPipeline(project), project.careerApplicationResult.pipelineStep] : projectPipeline(project);
  const currentPhase = project.releaseResult ? 5 : project.postProductionResult ? 4 : project.shootResult ? 3 : project.preProductionResult ? 2 : project.developmentResult ? 1 : 0;
  const actionPanelId = `phase-action-${project.id}`;
  const activePanelTarget = currentPhase === 0 ? "development" : currentPhase === 1 ? "pre-production" : currentPhase === 2 ? "shoot" : currentPhase === 3 ? "post-production" : currentPhase === 4 ? "release" : "career-application";
  function scrollToActivePanel() { document.getElementById(actionPanelId)?.scrollIntoView({ behavior: "smooth", block: "start" }); }
  const label = `Film ${project.projectNumber}`;
  const lowerLabel = (project.projectNumber === 1 ? "first film" : `film ${project.projectNumber}`) as import("./types").ProjectShootLabel;
  const strategicGoal = getStrategicGoal(project.run, previousProject);
  const classicScenario = "classicScenarioId" in project.run && project.run.classicScenarioId ? getFilmScenarioById(project.run.classicScenarioId) : undefined;
  const classicScenarioBrief = classicScenario ? resolveScenarioProductionBrief(classicScenario) : undefined;
  const classicScenarioTargetCount = classicScenarioBrief ? getScenarioTargetCount(createScenarioTargetChecklist(classicScenarioBrief)) : 0;
  const nextClassicScenario = classicScenario ? getNextClassicScenario(classicScenario.id) : undefined;

  return <section className={collapsed ? "panel next-project-panel next-project-panel--collapsed" : "panel next-project-panel"}>{!isLatest && pastSummary && <div className="past-project-summary"><div><span className="eyebrow">{`Film ${project.projectNumber} · Complete`}</span><h3>{project.run.project.title}</h3><p>{pastSummary.detail}</p></div><div className="past-project-summary-actions"><strong>{pastSummary.score}</strong><button className="secondary-button" onClick={() => setManualExpand((current) => current === null ? true : !current)} type="button">{collapsed ? "Show details" : "Hide details"}</button></div></div>}{!collapsed && <><ProjectPipeline currentPhase={currentPhase} onNextAction={scrollToActivePanel} project={project.run.project} steps={pipeline} />{classicScenario && <ScenarioProductionBriefPanel onBackToProductionCases={onOpenProductionCases} onStartNextScenario={nextClassicScenario ? () => onStartScenario(nextClassicScenario) : undefined} scenario={classicScenario} />}{classicScenarioBrief && <><ScenarioTargetChecklistPanel brief={classicScenarioBrief} selectedTargetIds={project.selectedScenarioTargetIds ?? []} onChangeSelectedTargetIds={(targetIds) => setCareerRun((state) => careerRunActions.changeScenarioTargetSelections(state, project.id, targetIds))} /><ScenarioAlignmentScorePanel selectedTargetIds={project.selectedScenarioTargetIds ?? []} totalTargets={classicScenarioTargetCount} /><ScenarioPhaseGuidancePanel brief={classicScenarioBrief} currentPhase={currentPhase} /></>}{previousProject?.careerApplicationResult && <div className="next-project-carryover-grid"><StudioCarryoverPanel careerState={previousProject.careerApplicationResult.updatedCareerState} sourceFilmLabel={`film ${previousProject.projectNumber}`} /></div>}{project.projectNumber > 1 && <NextProjectResultPanel careerApplicationResult={project.careerApplicationResult} developmentResult={project.developmentResult} postProductionResult={project.postProductionResult} preProductionResult={project.preProductionResult} releaseResult={project.releaseResult} result={project.run as never} shootResult={project.shootResult} projectNumber={project.projectNumber} />}{project.developmentResult ? <><DevelopmentResultPanel projectLabel={label} results={project.developmentResults} />{project.preProductionResult ? <><ProductionTeamResultPanel compact={project.projectNumber === 1} projectLabel={label} result={project.preProductionResult} /><ShootPanel developmentResult={project.developmentResult} id={activePanelTarget === "shoot" ? actionPanelId : undefined} onResolveShootDay={(result) => setCareerRun((state) => careerRunActions.resolveShootDay(state, project.id, result))} onSelectProductionEvent={(eventId) => setCareerRun((state) => careerRunActions.selectProductionEvent(state, project.id, eventId))} preProductionResult={project.preProductionResult} projectContext={context} projectLabel={lowerLabel} selectedProductionEventId={project.selectedProductionEventId} shootDayResults={project.shootDayResults} shootResult={project.shootResult} />{project.shootResult && <PostProductionPanel choices={project.postProductionChoices} id={activePanelTarget === "post-production" ? actionPanelId : undefined} onChange={(choices) => setCareerRun((state) => careerRunActions.changePostProductionChoices(state, project.id, choices))} onLock={(result) => setCareerRun((state) => careerRunActions.lockPostProduction(state, project.id, result))} preProductionResult={project.preProductionResult} projectContext={context} projectLabel={lowerLabel} result={project.postProductionResult} shootResult={project.shootResult} />}{project.shootResult && project.postProductionResult && <ReleaseStepPanel choices={project.releaseChoices} developmentResult={project.developmentResult} id={activePanelTarget === "release" ? actionPanelId : undefined} onChange={(choices) => setCareerRun((state) => careerRunActions.changeReleaseChoices(state, project.id, choices))} onRelease={(result) => setCareerRun((state) => careerRunActions.releaseFilm(state, project.id, result))} postProductionResult={project.postProductionResult} preProductionResult={project.preProductionResult} projectContext={context} projectLabel={lowerLabel} result={project.releaseResult} shootResult={project.shootResult} />}{classicScenario && classicScenarioBrief && project.releaseResult && <><ScenarioAlignmentResultPanel selectedTargetIds={project.selectedScenarioTargetIds ?? []} totalTargets={classicScenarioTargetCount} /><ScenarioLearningRecapPanel brief={classicScenarioBrief} scenarioTitle={classicScenario.film.title} selectedTargetIds={project.selectedScenarioTargetIds ?? []} /></>}{project.releaseResult && <CareerApplicationPanel id={activePanelTarget === "career-application" ? actionPanelId : undefined} onApply={() => setCareerRun((state) => careerRunActions.applyCareerResult(state, project.id))} projectContext={context} projectLabel={lowerLabel} releaseResult={project.releaseResult} result={project.careerApplicationResult} strategicGoal={strategicGoal} />}</> : <PreProductionPanel developmentResult={project.developmentResult} id={activePanelTarget === "pre-production" ? actionPanelId : undefined} onLock={(result) => setCareerRun((state) => careerRunActions.lockPreProduction(state, project.id, result))} onSelectActors={(selectedActorIds) => setCareerRun((state) => careerRunActions.changePreProductionSelections(state, project.id, { ...project.preProductionSelections, selectedActorIds }))} onSelectCrew={(selectedCrewIds) => setCareerRun((state) => careerRunActions.changePreProductionSelections(state, project.id, { ...project.preProductionSelections, selectedCrewIds }))} onSelectLocation={(selectedLocationId) => setCareerRun((state) => careerRunActions.changePreProductionSelections(state, project.id, { ...project.preProductionSelections, selectedLocationId }))} projectContext={context} projectLabel={lowerLabel} selectedActorIds={project.preProductionSelections.selectedActorIds} selectedCrewIds={project.preProductionSelections.selectedCrewIds} selectedLocationId={project.preProductionSelections.selectedLocationId} />}</> : <DevelopmentPanel completedResults={project.developmentResults} id={activePanelTarget === "development" ? actionPanelId : undefined} onApplyAction={(result) => setCareerRun((state) => careerRunActions.applyDevelopmentAction(state, project.id, result))} onFinishDevelopment={() => setCareerRun((state) => careerRunActions.finishDevelopment(state, project.id))} onSelectPath={(path) => setCareerRun((state) => careerRunActions.selectDevelopmentPath(state, project.id, path))} projectContext={context} projectLabel={label} selectedPath={project.selectedDevelopmentPath} />}{project.careerApplicationResult && <NextProjectCreator previousProject={project} setCareerRun={setCareerRun} />}</>}</section>;
}

function getNextClassicScenario(scenarioId: string) {
  const scenarios = getClassicFilmScenarios();
  const scenarioIndex = scenarios.findIndex((scenario) => scenario.id === scenarioId);
  return scenarioIndex >= 0 ? scenarios[scenarioIndex + 1] : undefined;
}

function projectPipeline(project: CareerFilmProjectRun) {
  const developmentPipeline = project.developmentResult ? addDevelopmentPipelineStep(project.run as ProjectSetupRun, project.developmentResult.pipelineStep) : project.run.pipelineSteps;
  const preProductionPipeline = project.preProductionResult ? [...developmentPipeline, project.preProductionResult.pipelineStep] : developmentPipeline;
  const shootPipeline = project.shootResult ? [...preProductionPipeline, project.shootResult.pipelineStep] : preProductionPipeline;
  const postProductionPipeline = project.postProductionResult ? [...shootPipeline, project.postProductionResult.pipelineStep] : shootPipeline;
  return project.releaseResult ? [...postProductionPipeline, project.releaseResult.pipelineStep] : postProductionPipeline;
}

function NextProjectCreator({ previousProject, setCareerRun }: { readonly previousProject: CareerFilmProjectRun; readonly setCareerRun: React.Dispatch<React.SetStateAction<{ version: 1; projects: readonly CareerFilmProjectRun[] }>>; }) {
  const [choices, setChoices] = useState<NextProjectChoices>(initialNextProjectChoices);
  const [errors, setErrors] = useState<NextProjectFormErrors>({});
  if (!previousProject.careerApplicationResult) return null;
  function createProject() {
    const nextErrors = { ...(!choices.projectTitle.trim() ? { projectTitle: "Enter a title for the next project." } : {}), ...(!choices.genreId ? { genreId: "Select a genre." } : {}), ...(!choices.scriptTemplateId ? { scriptTemplateId: "Select a script template." } : {}) };
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0 || !previousProject.careerApplicationResult) return;
    const run = createNextProjectStepResult(getRunContext(previousProject.run), previousProject.careerApplicationResult, choices);
    setCareerRun((state) => careerRunActions.startNextProject(state, run));
    setChoices(initialNextProjectChoices);
  }
  return <section className="next-project-setup-section"><div className="next-project-intro"><div><span className="eyebrow">{`Film ${previousProject.projectNumber} complete`}</span><h2>{`Film ${previousProject.projectNumber + 1} setup`}</h2></div><p>Start the next film from the updated studio and career state.</p></div><NextProjectSetupForm activeStrategicGoalIds={previousProject.careerApplicationResult.updatedCareerState.activeStrategicGoalIds} choices={choices} errors={errors} onChange={(nextChoices) => { setChoices(nextChoices); setErrors({}); }} onSubmit={createProject} options={nextProjectOptions} previousFilmLabel={`Film ${previousProject.projectNumber}`} projectNumber={previousProject.projectNumber + 1} /></section>;
}

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  canApplyStudioCareerResult,
  canCreateNextStudioCareerProject,
  getStudioCareerActivePanelId,
  getStudioCareerActivePhase,
  getStudioCareerCurrentPhaseIndex,
  getStudioCareerSummaryProject,
  getStudioCareerFestivalInputName,
  getStudioCareerReleaseStrategyInputName,
  shouldCollapseStudioCareerProject,
  shouldOfferStudioCareerNextProject,
  type StudioCareerFlowProject,
} from "./studioCareerFlow.js";

const result = { ok: true };

function project(overrides: Partial<StudioCareerFlowProject> = {}): StudioCareerFlowProject {
  return { id: "film-one", projectNumber: 1, ...overrides };
}

test("studio career pipeline order advances from development through career review only after release", () => {
  assert.equal(getStudioCareerCurrentPhaseIndex(project()), 0);
  assert.equal(getStudioCareerActivePhase(project()), "development");
  assert.equal(getStudioCareerActivePhase(project({ developmentResult: result })), "pre-production");
  assert.equal(getStudioCareerActivePhase(project({ developmentResult: result, preProductionResult: result })), "shoot");
  assert.equal(getStudioCareerActivePhase(project({ developmentResult: result, preProductionResult: result, shootResult: result })), "post-production");
  assert.equal(getStudioCareerActivePhase(project({ developmentResult: result, preProductionResult: result, shootResult: result, postProductionResult: result })), "release");
  assert.equal(getStudioCareerActivePhase(project({ developmentResult: result, preProductionResult: result, shootResult: result, postProductionResult: result, releaseResult: result })), "career-application");
  assert.equal(canApplyStudioCareerResult(project({ postProductionResult: result })), false);
  assert.equal(canApplyStudioCareerResult(project({ releaseResult: result })), true);
  assert.equal(canCreateNextStudioCareerProject(project({ releaseResult: result })), false);
  assert.equal(canCreateNextStudioCareerProject(project({ releaseResult: result, careerApplicationResult: result })), true);
});

test("studio career active targets keep post, release, and career review distinct", () => {
  const post = project({ developmentResult: result, preProductionResult: result, shootResult: result });
  const release = project({ developmentResult: result, preProductionResult: result, shootResult: result, postProductionResult: result });
  const review = project({ developmentResult: result, preProductionResult: result, shootResult: result, postProductionResult: result, releaseResult: result });
  assert.equal(getStudioCareerActivePhase(post), "post-production");
  assert.equal(getStudioCareerActivePhase(release), "release");
  assert.equal(getStudioCareerActivePhase(review), "career-application");
  assert.equal(getStudioCareerActivePanelId("film-two"), "phase-action-film-two");
});

test("studio career completed project collapse keeps latest project actionable", () => {
  assert.equal(shouldCollapseStudioCareerProject({ isLatest: false, careerApplicationResult: result, manualExpand: null }), true);
  assert.equal(shouldCollapseStudioCareerProject({ isLatest: true, careerApplicationResult: result, manualExpand: null }), false);
  assert.equal(shouldCollapseStudioCareerProject({ isLatest: false, careerApplicationResult: result, manualExpand: true }), false);
  assert.equal(shouldCollapseStudioCareerProject({ isLatest: false, careerApplicationResult: undefined, manualExpand: null }), false);

  const filmTwo = project({ id: "film-two", projectNumber: 2, developmentResult: result });
  assert.equal(getStudioCareerActivePhase(filmTwo), "pre-production");
  assert.equal(shouldCollapseStudioCareerProject({ isLatest: true, careerApplicationResult: filmTwo.careerApplicationResult, manualExpand: null }), false);
});

test("studio career project-scoped release control names are unique per project", () => {
  assert.equal(getStudioCareerReleaseStrategyInputName("film-one"), "film-one-release-strategy");
  assert.equal(getStudioCareerFestivalInputName("film-one"), "film-one-festival");
  assert.notEqual(getStudioCareerReleaseStrategyInputName("film-one"), getStudioCareerReleaseStrategyInputName("film-two"));
  assert.notEqual(getStudioCareerFestivalInputName("film-one"), getStudioCareerFestivalInputName("film-two"));
});

test("studio career application invariants tolerate missing optional project details", () => {
  const sparseReleasedProject = project({ releaseResult: result });
  assert.equal(getStudioCareerActivePhase(sparseReleasedProject), "career-application");
  assert.equal(canApplyStudioCareerResult(project()), false);
  assert.equal(canApplyStudioCareerResult(sparseReleasedProject), true);
  assert.equal(canCreateNextStudioCareerProject(sparseReleasedProject), false);
  assert.equal(canCreateNextStudioCareerProject({ ...sparseReleasedProject, careerApplicationResult: { updatedCareerState: { completedFilms: [] } } }), true);
});

test("Studio Career context follows Film Two rather than showing Film One as current", () => {
  const filmOne = project({ id: "film-one", projectNumber: 1, careerApplicationResult: result });
  const filmTwo = project({ id: "film-two", projectNumber: 2, developmentResult: result });
  assert.equal(getStudioCareerSummaryProject([]), undefined);
  assert.equal(getStudioCareerSummaryProject([filmOne]), filmOne);
  assert.equal(getStudioCareerSummaryProject([filmOne, filmTwo]), filmTwo);
  assert.equal(getStudioCareerActivePhase(getStudioCareerSummaryProject([filmOne, filmTwo])!), "pre-production");
  assert.deepEqual([filmOne, filmTwo], [filmOne, filmTwo], "Reading the active project does not mutate saved films");
});

test("only the latest completed film can create the next Studio Career project", () => {
  assert.equal(shouldOfferStudioCareerNextProject({ isLatest: false, careerApplicationResult: result }), false);
  assert.equal(shouldOfferStudioCareerNextProject({ isLatest: true, careerApplicationResult: result }), true);
  assert.equal(shouldOfferStudioCareerNextProject({ isLatest: true, careerApplicationResult: null }), false);
  assert.equal(shouldOfferStudioCareerNextProject({ isLatest: true }), false);
  assert.equal(shouldOfferStudioCareerNextProject({ isLatest: false }), false);
  assert.equal(shouldCollapseStudioCareerProject({ isLatest: false, careerApplicationResult: result, manualExpand: true }), false,
    "Completed earlier projects remain reviewable but may not present another creation action");
});

test("App wires active-film status to the summary and keeps next-project actions gated", () => {
  const source = readFileSync("src/ui/App.tsx", "utf8");
  assert.match(source, /const latestProject = getStudioCareerSummaryProject\(careerRun\)/);
  assert.match(source, /run=\{summaryProject\.run\}/);
  assert.match(source, /strategicGoal=\{summaryStrategicGoal\}/);
  assert.match(source, /shouldOfferStudioCareerNextProject\(\{ isLatest, careerApplicationResult: project\.careerApplicationResult \}\)/);
  assert.doesNotMatch(source, /RunSummaryPanel careerApplicationResult=\{firstProject\.careerApplicationResult\}/);
});

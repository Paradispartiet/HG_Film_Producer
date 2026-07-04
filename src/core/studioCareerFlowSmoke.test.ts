import assert from "node:assert/strict";
import test from "node:test";
import {
  canCreateNextStudioCareerProject,
  getStudioCareerActivePanelId,
  getStudioCareerActivePhase,
  getStudioCareerCurrentPhaseIndex,
  getStudioCareerFestivalInputName,
  getStudioCareerReleaseStrategyInputName,
  shouldCollapseStudioCareerProject,
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
  assert.equal(canCreateNextStudioCareerProject(sparseReleasedProject), false);
  assert.equal(canCreateNextStudioCareerProject({ ...sparseReleasedProject, careerApplicationResult: { updatedCareerState: { completedFilms: [] } } }), true);
});

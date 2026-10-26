import assert from "node:assert/strict";
import test from "node:test";
import { createCareerRunBackup, previewCareerRunBackup } from "./careerRunBackup.js";
import type { CareerRunState } from "../ui/state/careerRunState.js";

function exampleCareer(): CareerRunState {
  return {
    version: 1,
    projects: [{
      id: "1-film-one",
      projectNumber: 1,
      run: { project: { title: "Film One" } },
      developmentResults: [],
      developmentResult: null,
      preProductionSelections: { selectedLocationId: "", selectedCrewIds: [], selectedActorIds: [] },
      preProductionResult: null,
      shootDayResults: [],
      shootResult: null,
      postProductionChoices: {},
      postProductionResult: null,
      releaseChoices: {},
      releaseResult: null,
      careerApplicationResult: null,
    }],
  } as unknown as CareerRunState;
}

test("Studio Career backup round-trips without dropping saved fields", () => {
  const original = exampleCareer();
  const backup = createCareerRunBackup(original);
  const preview = previewCareerRunBackup(backup);
  assert.equal(preview.ok, true);
  if (!preview.ok) return;
  assert.equal(preview.filmCount, 1);
  assert.equal(preview.lastFilmTitle, "Film One");
  assert.deepEqual(preview.state, original);
});

test("import rejects malformed, unrelated, old-version, and empty career backups", () => {
  assert.equal(previewCareerRunBackup("not json").ok, false);
  assert.equal(previewCareerRunBackup(JSON.stringify(exampleCareer())).ok, false);
  const base = JSON.parse(createCareerRunBackup(exampleCareer()));
  assert.equal(previewCareerRunBackup(JSON.stringify({ ...base, version: 99 })).ok, false);
  assert.equal(previewCareerRunBackup(JSON.stringify({ ...base, state: { version: 1, projects: [] } })).ok, false);
  assert.equal(previewCareerRunBackup(JSON.stringify({ ...base, state: { version: 1, projects: [{ id: "bad" }] } })).ok, false);
  assert.deepEqual(previewCareerRunBackup("x".repeat(4_000_001)), { ok: false, reason: "too_large" });
});

test("multiple saved films retain their original order and progression", () => {
  const first = exampleCareer();
  const second = {
    ...first.projects[0]!,
    id: "2-film-two",
    projectNumber: 2,
    run: { project: { title: "Film Two" } },
    shootDayResults: [{ updatedShootDay: { id: "day-1" } }],
  };
  const career = { version: 1 as const, projects: [...first.projects, second] } as CareerRunState;
  const preview = previewCareerRunBackup(createCareerRunBackup(career));
  assert.equal(preview.ok, true);
  if (preview.ok) {
    assert.equal(preview.filmCount, 2);
    assert.equal(preview.lastFilmTitle, "Film Two");
    assert.deepEqual(preview.state, career);
  }
});

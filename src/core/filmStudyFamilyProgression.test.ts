import assert from "node:assert/strict";
import test from "node:test";

import type { FilmStudyCurriculumPrerequisite } from "./filmStudyCurriculum.js";
import { FILM_STUDY_CURRICULUM } from "./filmStudyCurriculum.js";
import { FILM_STUDY_HISTORY_FAMILIES } from "./filmStudyHistoryFamily.js";
import {
  FILM_STUDY_FAMILY_PROGRESSION_EDGES,
  createFilmStudyFamilyProgression,
  projectFilmStudyFamilyProgressionEdges,
  successorsOf,
} from "./filmStudyFamilyProgression.js";

const SILENT = FILM_STUDY_HISTORY_FAMILIES.silent_foundations.id;
const STUDIO = FILM_STUDY_HISTORY_FAMILIES.silent_studio_systems.id;
const SOUND = FILM_STUDY_HISTORY_FAMILIES.late_silent_early_sound.id;
const RELIGIOUS = FILM_STUDY_HISTORY_FAMILIES.european_religious_moral_modernism.id;

test("explicit fixture edges are the only source of successors", () => {
  const progression = createFilmStudyFamilyProgression([
    { from: SILENT, to: STUDIO },
  ]);

  assert.deepEqual(progression.successorsOf(SILENT), [STUDIO]);
  assert.deepEqual(progression.successorsOf(STUDIO), []);
});

test("a family with no explicit outgoing edge has no successor", () => {
  const progression = createFilmStudyFamilyProgression([
    { from: SILENT, to: STUDIO },
  ]);

  assert.deepEqual(progression.successorsOf(SOUND), []);
  assert.deepEqual(progression.successorsOf(RELIGIOUS), []);
});

test("fixture relation supports multiple outgoing edges with lexical technical normalization", () => {
  const progression = createFilmStudyFamilyProgression([
    { from: SILENT, to: SOUND },
    { from: SILENT, to: STUDIO },
  ]);

  assert.deepEqual(progression.successorsOf(SILENT), [SOUND, STUDIO].sort());
});

test("duplicate identical edges normalize to one successor", () => {
  const progression = createFilmStudyFamilyProgression([
    { from: SILENT, to: STUDIO },
    { from: SILENT, to: STUDIO },
  ]);

  assert.deepEqual(progression.successorsOf(SILENT), [STUDIO]);
});

test("input declaration order cannot change the successor set", () => {
  const forward = createFilmStudyFamilyProgression([
    { from: SILENT, to: STUDIO },
    { from: SILENT, to: SOUND },
  ]);
  const reverse = createFilmStudyFamilyProgression([
    { from: SILENT, to: SOUND },
    { from: SILENT, to: STUDIO },
  ]);

  assert.deepEqual(forward.successorsOf(SILENT), reverse.successorsOf(SILENT));
});

test("returned successor arrays cannot mutate stored relation state", () => {
  const progression = createFilmStudyFamilyProgression([
    { from: SILENT, to: STUDIO },
  ]);
  const result = progression.successorsOf(SILENT);

  assert.throws(() => {
    (result as string[]).push(SOUND);
  }, TypeError);
  assert.deepEqual(progression.successorsOf(SILENT), [STUDIO]);
});

test("progression edges are a mechanical projection of explicit prerequisites", () => {
  const prerequisites: readonly FilmStudyCurriculumPrerequisite[] = [{
    prerequisiteFamilyId: SILENT,
    dependentFamilyId: STUDIO,
    requiredOutcomeIds: ["fixture_outcome"],
    rationale: "fixture only",
  }];

  assert.deepEqual(projectFilmStudyFamilyProgressionEdges(prerequisites), [
    { from: SILENT, to: STUDIO },
  ]);
});

test("projection deduplicates ordered family pairs deterministically", () => {
  const prerequisites: readonly FilmStudyCurriculumPrerequisite[] = [
    {
      prerequisiteFamilyId: SILENT,
      dependentFamilyId: SOUND,
      requiredOutcomeIds: ["a"],
      rationale: "fixture one",
    },
    {
      prerequisiteFamilyId: SILENT,
      dependentFamilyId: STUDIO,
      requiredOutcomeIds: ["b"],
      rationale: "fixture two",
    },
    {
      prerequisiteFamilyId: SILENT,
      dependentFamilyId: STUDIO,
      requiredOutcomeIds: ["c"],
      rationale: "fixture duplicate pair",
    },
  ];

  assert.deepEqual(projectFilmStudyFamilyProgressionEdges(prerequisites), [
    { from: SILENT, to: SOUND },
    { from: SILENT, to: STUDIO },
  ].sort((a, b) => `${a.from}:${a.to}`.localeCompare(`${b.from}:${b.to}`)));
});

test("canonical progression edges equal the canonical curriculum prerequisite projection", () => {
  assert.deepEqual(
    FILM_STUDY_FAMILY_PROGRESSION_EDGES,
    projectFilmStudyFamilyProgressionEdges(FILM_STUDY_CURRICULUM.prerequisites),
  );
});

test("canonical production progression edge set is exactly empty", () => {
  assert.deepEqual(FILM_STUDY_FAMILY_PROGRESSION_EDGES, []);
});

test("canonical Religious/Moral progression has no successor", () => {
  assert.deepEqual(successorsOf(RELIGIOUS), []);
});

import assert from "node:assert/strict";
import test from "node:test";

import { FILM_STUDY_HISTORY_FAMILIES } from "./filmStudyHistoryFamily.js";
import { createFilmStudyCurriculum } from "./filmStudyCurriculum.js";

const SILENT = FILM_STUDY_HISTORY_FAMILIES.silent_foundations.id;
const STUDIO = FILM_STUDY_HISTORY_FAMILIES.silent_studio_systems.id;

const OUTCOME = {
  id: "understand_silent_production_system",
  statement: "Explain how a silent-film production system coordinates craft decisions.",
} as const;

test("curriculum validates outcome identity separately from display statement", () => {
  const curriculum = createFilmStudyCurriculum({
    outcomes: [OUTCOME],
    familyCurricula: [{ familyId: SILENT, establishes: [OUTCOME.id] }],
    prerequisites: [],
  });

  assert.deepEqual(curriculum.outcomes, [OUTCOME]);
  assert.deepEqual(curriculum.familyCurricula, [
    { familyId: SILENT, establishes: [OUTCOME.id] },
  ]);
});

test("a declared family curriculum may establish zero outcomes", () => {
  const curriculum = createFilmStudyCurriculum({
    outcomes: [],
    familyCurricula: [{ familyId: STUDIO, establishes: [] }],
    prerequisites: [],
  });

  assert.deepEqual(curriculum.familyCurricula, [
    { familyId: STUDIO, establishes: [] },
  ]);
});

test("set-like establishes values are normalized deterministically", () => {
  const other = {
    id: "distinguish_studio_department_logic",
    statement: "Distinguish how studio departments coordinate production work.",
  } as const;
  const curriculum = createFilmStudyCurriculum({
    outcomes: [OUTCOME, other],
    familyCurricula: [
      { familyId: SILENT, establishes: [other.id, OUTCOME.id, OUTCOME.id] },
    ],
    prerequisites: [],
  });

  assert.deepEqual(curriculum.familyCurricula[0]?.establishes, [
    other.id,
    OUTCOME.id,
  ].sort());
});

test("curriculum results are immutable snapshots", () => {
  const curriculum = createFilmStudyCurriculum({
    outcomes: [OUTCOME],
    familyCurricula: [{ familyId: SILENT, establishes: [OUTCOME.id] }],
    prerequisites: [],
  });

  assert.throws(() => {
    (curriculum.outcomes as unknown as Array<typeof OUTCOME>).push(OUTCOME);
  }, TypeError);
  assert.throws(() => {
    (curriculum.familyCurricula[0]?.establishes as string[]).push("x");
  }, TypeError);
});

test("duplicate outcome identities fail closed", () => {
  assert.throws(
    () => createFilmStudyCurriculum({
      outcomes: [OUTCOME, { ...OUTCOME, statement: "Different text" }],
      familyCurricula: [],
      prerequisites: [],
    }),
    /duplicate learning outcome/i,
  );
});

test("unknown established outcome identities fail closed", () => {
  assert.throws(
    () => createFilmStudyCurriculum({
      outcomes: [],
      familyCurricula: [{ familyId: SILENT, establishes: [OUTCOME.id] }],
      prerequisites: [],
    }),
    /unknown learning outcome/i,
  );
});

test("duplicate family curriculum declarations fail closed", () => {
  assert.throws(
    () => createFilmStudyCurriculum({
      outcomes: [],
      familyCurricula: [
        { familyId: SILENT, establishes: [] },
        { familyId: SILENT, establishes: [] },
      ],
      prerequisites: [],
    }),
    /duplicate family curriculum/i,
  );
});

test("unknown family identities fail closed at runtime", () => {
  assert.throws(
    () => createFilmStudyCurriculum({
      outcomes: [],
      familyCurricula: [
        { familyId: "not_a_family" as typeof SILENT, establishes: [] },
      ],
      prerequisites: [],
    }),
    /unknown Film Study family/i,
  );
});

const SOUND = FILM_STUDY_HISTORY_FAMILIES.late_silent_early_sound.id;

const TRANSITION_OUTCOME = {
  id: "analyze_production_transition",
  statement: "Analyze how a production-system transition changes film form and craft decisions.",
} as const;

test("an explicit prerequisite is accepted when its required outcome is established by the prerequisite family", () => {
  const curriculum = createFilmStudyCurriculum({
    outcomes: [TRANSITION_OUTCOME],
    familyCurricula: [
      { familyId: STUDIO, establishes: [TRANSITION_OUTCOME.id] },
      { familyId: SOUND, establishes: [] },
    ],
    prerequisites: [{
      prerequisiteFamilyId: STUDIO,
      dependentFamilyId: SOUND,
      requiredOutcomeIds: [TRANSITION_OUTCOME.id],
      rationale: "The dependent analysis assumes the learner can already reason about production-system transition.",
    }],
  });

  assert.deepEqual(curriculum.prerequisites, [{
    prerequisiteFamilyId: STUDIO,
    dependentFamilyId: SOUND,
    requiredOutcomeIds: [TRANSITION_OUTCOME.id],
    rationale: "The dependent analysis assumes the learner can already reason about production-system transition.",
  }]);
});

test("overlapping learning outcomes never synthesize a prerequisite", () => {
  const curriculum = createFilmStudyCurriculum({
    outcomes: [TRANSITION_OUTCOME],
    familyCurricula: [
      { familyId: STUDIO, establishes: [TRANSITION_OUTCOME.id] },
      { familyId: SOUND, establishes: [TRANSITION_OUTCOME.id] },
    ],
    prerequisites: [],
  });

  assert.deepEqual(curriculum.prerequisites, []);
});

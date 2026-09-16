import assert from "node:assert/strict";
import test from "node:test";

import { FILM_STUDY_HISTORY_FAMILIES } from "./filmStudyHistoryFamily.js";
import {
  FILM_STUDY_CURRICULUM,
  FILM_STUDY_CURRICULUM_PREREQUISITES,
  FILM_STUDY_FAMILY_CURRICULA,
  FILM_STUDY_LEARNING_OUTCOMES,
  createFilmStudyCurriculum,
} from "./filmStudyCurriculum.js";

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

test("self prerequisites fail closed", () => {
  assert.throws(
    () => createFilmStudyCurriculum({
      outcomes: [TRANSITION_OUTCOME],
      familyCurricula: [{ familyId: STUDIO, establishes: [TRANSITION_OUTCOME.id] }],
      prerequisites: [{
        prerequisiteFamilyId: STUDIO,
        dependentFamilyId: STUDIO,
        requiredOutcomeIds: [TRANSITION_OUTCOME.id],
        rationale: "fixture",
      }],
    }),
    /self prerequisite/i,
  );
});

test("empty required outcome sets fail closed", () => {
  assert.throws(
    () => createFilmStudyCurriculum({
      outcomes: [],
      familyCurricula: [{ familyId: STUDIO, establishes: [] }],
      prerequisites: [{
        prerequisiteFamilyId: STUDIO,
        dependentFamilyId: SOUND,
        requiredOutcomeIds: [],
        rationale: "fixture",
      }],
    }),
    /at least one learning outcome/i,
  );
});

test("unknown required outcomes fail closed", () => {
  assert.throws(
    () => createFilmStudyCurriculum({
      outcomes: [],
      familyCurricula: [{ familyId: STUDIO, establishes: [] }],
      prerequisites: [{
        prerequisiteFamilyId: STUDIO,
        dependentFamilyId: SOUND,
        requiredOutcomeIds: [TRANSITION_OUTCOME.id],
        rationale: "fixture",
      }],
    }),
    /unknown learning outcome/i,
  );
});

test("required outcomes not established by the prerequisite family fail closed", () => {
  assert.throws(
    () => createFilmStudyCurriculum({
      outcomes: [TRANSITION_OUTCOME],
      familyCurricula: [
        { familyId: STUDIO, establishes: [] },
        { familyId: SOUND, establishes: [TRANSITION_OUTCOME.id] },
      ],
      prerequisites: [{
        prerequisiteFamilyId: STUDIO,
        dependentFamilyId: SOUND,
        requiredOutcomeIds: [TRANSITION_OUTCOME.id],
        rationale: "fixture",
      }],
    }),
    /does not establish required outcome/i,
  );
});

test("duplicate ordered family-pair prerequisites fail closed", () => {
  const prerequisite = {
    prerequisiteFamilyId: STUDIO,
    dependentFamilyId: SOUND,
    requiredOutcomeIds: [TRANSITION_OUTCOME.id],
    rationale: "fixture",
  } as const;

  assert.throws(
    () => createFilmStudyCurriculum({
      outcomes: [TRANSITION_OUTCOME],
      familyCurricula: [{ familyId: STUDIO, establishes: [TRANSITION_OUTCOME.id] }],
      prerequisites: [prerequisite, prerequisite],
    }),
    /duplicate curriculum prerequisite/i,
  );
});

test("blank prerequisite rationale fails closed", () => {
  assert.throws(
    () => createFilmStudyCurriculum({
      outcomes: [TRANSITION_OUTCOME],
      familyCurricula: [{ familyId: STUDIO, establishes: [TRANSITION_OUTCOME.id] }],
      prerequisites: [{
        prerequisiteFamilyId: STUDIO,
        dependentFamilyId: SOUND,
        requiredOutcomeIds: [TRANSITION_OUTCOME.id],
        rationale: "   ",
      }],
    }),
    /rationale must be non-empty/i,
  );
});

test("unknown prerequisite family identities fail closed at runtime", () => {
  assert.throws(
    () => createFilmStudyCurriculum({
      outcomes: [TRANSITION_OUTCOME],
      familyCurricula: [{ familyId: STUDIO, establishes: [TRANSITION_OUTCOME.id] }],
      prerequisites: [{
        prerequisiteFamilyId: "not_a_family" as typeof STUDIO,
        dependentFamilyId: SOUND,
        requiredOutcomeIds: [TRANSITION_OUTCOME.id],
        rationale: "fixture",
      }],
    }),
    /unknown Film Study family in curriculum prerequisite/i,
  );
});

test("required outcome identities are normalized deterministically inside prerequisites", () => {
  const other = {
    id: "compare_transition_constraints",
    statement: "Compare constraints across production-system transitions.",
  } as const;
  const curriculum = createFilmStudyCurriculum({
    outcomes: [TRANSITION_OUTCOME, other],
    familyCurricula: [{
      familyId: STUDIO,
      establishes: [TRANSITION_OUTCOME.id, other.id],
    }],
    prerequisites: [{
      prerequisiteFamilyId: STUDIO,
      dependentFamilyId: SOUND,
      requiredOutcomeIds: [TRANSITION_OUTCOME.id, other.id, TRANSITION_OUTCOME.id],
      rationale: "fixture",
    }],
  });

  assert.deepEqual(
    curriculum.prerequisites[0]?.requiredOutcomeIds,
    [TRANSITION_OUTCOME.id, other.id].sort(),
  );
});

const RELIGIOUS = FILM_STUDY_HISTORY_FAMILIES.european_religious_moral_modernism.id;

const EXPECTED_CANONICAL_OUTCOMES = [
  {
    id: "distinguish_silent_production_systems",
    statement: "Distinguish documented silent-cinema production systems by how design, location, effects, staging and editing work together.",
  },
  {
    id: "analyze_early_studio_coordination",
    statement: "Analyze how early studio and departmental organization coordinates performance, architecture, image, effects and sound.",
  },
  {
    id: "analyze_sound_transition_strategies",
    statement: "Analyze how transition-era production systems reorganize image, performance, editing, silence, recorded sound and music.",
  },
  {
    id: "analyze_integrated_1930s_production_systems",
    statement: "Analyze how 1930s production systems integrate craft departments and industrial labor into a coherent film form.",
  },
  {
    id: "analyze_noir_realism_production_conditions",
    statement: "Analyze how 1940s production conditions shape studio or location realism, narration, lighting, sound and performance.",
  },
  {
    id: "analyze_asian_postwar_production_form",
    statement: "Analyze how Asian postwar production organization and material conditions shape performance, space, duration, action and realism.",
  },
  {
    id: "analyze_postwar_european_modernist_systems",
    statement: "Analyze how postwar European modernist production systems organize duration, performance, politics, image, editing, sound and space.",
  },
  {
    id: "analyze_czechoslovak_new_wave_conditions",
    statement: "Analyze how Czechoslovak production and institutional conditions shape performance, space, design, editing, image and sound.",
  },
  {
    id: "analyze_political_feminist_production_form",
    statement: "Analyze how political or feminist history becomes concrete production choices in time, bodies, location, labor, design, image, sound and editing.",
  },
  {
    id: "analyze_moral_belief_institutions_production_form",
    statement: "Analyze how moral history, belief and institutions become concrete production choices in performance, space, objects, image, editing, sound and music.",
  },
] as const;

const EXPECTED_FAMILY_CURRICULA = [
  {
    familyId: FILM_STUDY_HISTORY_FAMILIES.silent_foundations.id,
    establishes: ["distinguish_silent_production_systems"],
  },
  {
    familyId: FILM_STUDY_HISTORY_FAMILIES.silent_studio_systems.id,
    establishes: ["analyze_early_studio_coordination"],
  },
  {
    familyId: FILM_STUDY_HISTORY_FAMILIES.late_silent_early_sound.id,
    establishes: ["analyze_sound_transition_strategies"],
  },
  {
    familyId: FILM_STUDY_HISTORY_FAMILIES.production_systems_1930s.id,
    establishes: ["analyze_integrated_1930s_production_systems"],
  },
  {
    familyId: FILM_STUDY_HISTORY_FAMILIES.noir_realism_1940s.id,
    establishes: ["analyze_noir_realism_production_conditions"],
  },
  {
    familyId: FILM_STUDY_HISTORY_FAMILIES.asian_postwar_1950s.id,
    establishes: ["analyze_asian_postwar_production_form"],
  },
  {
    familyId: FILM_STUDY_HISTORY_FAMILIES.postwar_european_modernism.id,
    establishes: ["analyze_postwar_european_modernist_systems"],
  },
  {
    familyId: FILM_STUDY_HISTORY_FAMILIES.czechoslovak_new_wave.id,
    establishes: ["analyze_czechoslovak_new_wave_conditions"],
  },
  {
    familyId: FILM_STUDY_HISTORY_FAMILIES.european_political_feminist_modernism.id,
    establishes: ["analyze_political_feminist_production_form"],
  },
  {
    familyId: FILM_STUDY_HISTORY_FAMILIES.european_religious_moral_modernism.id,
    establishes: ["analyze_moral_belief_institutions_production_form"],
  },
] as const;

test("canonical curriculum materializes source-backed family outcomes without prerequisites", () => {
  assert.deepEqual(FILM_STUDY_LEARNING_OUTCOMES, EXPECTED_CANONICAL_OUTCOMES);
  assert.deepEqual(FILM_STUDY_FAMILY_CURRICULA, EXPECTED_FAMILY_CURRICULA);
  assert.deepEqual(FILM_STUDY_CURRICULUM_PREREQUISITES, []);
  assert.deepEqual(FILM_STUDY_CURRICULUM, {
    outcomes: EXPECTED_CANONICAL_OUTCOMES,
    familyCurricula: EXPECTED_FAMILY_CURRICULA,
    prerequisites: [],
  });
  assert.equal(
    FILM_STUDY_CURRICULUM_PREREQUISITES.some(
      ({ prerequisiteFamilyId }) => prerequisiteFamilyId === RELIGIOUS,
    ),
    false,
  );
});

import assert from "node:assert/strict";
import test from "node:test";

import * as curriculumModule from "./filmStudyCurriculum.js";

const EXPECTED_COMPETENCY_IDS = [
  "analyze_performance_and_staging",
  "analyze_space_location_and_design",
  "analyze_image_and_lighting",
  "analyze_editing_duration_and_narration",
  "analyze_sound_and_music",
  "analyze_production_organization_labor_and_institutions",
  "connect_context_to_production_form",
] as const;

const EXPECTED_FAMILY_COMPETENCIES = [
  {
    familyId: "silent_foundations",
    establishes: [
      "analyze_editing_duration_and_narration",
      "analyze_performance_and_staging",
      "analyze_space_location_and_design",
    ],
    reinforces: [],
    uses: [],
  },
  {
    familyId: "silent_studio_systems",
    establishes: [
      "analyze_image_and_lighting",
      "analyze_performance_and_staging",
      "analyze_production_organization_labor_and_institutions",
      "analyze_sound_and_music",
      "analyze_space_location_and_design",
    ],
    reinforces: [],
    uses: [],
  },
  {
    familyId: "late_silent_early_sound",
    establishes: [
      "analyze_editing_duration_and_narration",
      "analyze_image_and_lighting",
      "analyze_performance_and_staging",
      "analyze_sound_and_music",
    ],
    reinforces: [],
    uses: [],
  },
  {
    familyId: "production_systems_1930s",
    establishes: [
      "analyze_production_organization_labor_and_institutions",
    ],
    reinforces: [],
    uses: [],
  },
  {
    familyId: "noir_realism_1940s",
    establishes: [
      "analyze_editing_duration_and_narration",
      "analyze_image_and_lighting",
      "analyze_performance_and_staging",
      "analyze_sound_and_music",
      "analyze_space_location_and_design",
      "connect_context_to_production_form",
    ],
    reinforces: [],
    uses: [],
  },
  {
    familyId: "asian_postwar_1950s",
    establishes: [
      "analyze_editing_duration_and_narration",
      "analyze_performance_and_staging",
      "analyze_production_organization_labor_and_institutions",
      "analyze_space_location_and_design",
      "connect_context_to_production_form",
    ],
    reinforces: [],
    uses: [],
  },
  {
    familyId: "postwar_european_modernism",
    establishes: [
      "analyze_editing_duration_and_narration",
      "analyze_image_and_lighting",
      "analyze_performance_and_staging",
      "analyze_production_organization_labor_and_institutions",
      "analyze_sound_and_music",
      "analyze_space_location_and_design",
      "connect_context_to_production_form",
    ],
    reinforces: [],
    uses: [],
  },
  {
    familyId: "czechoslovak_new_wave",
    establishes: [
      "analyze_editing_duration_and_narration",
      "analyze_image_and_lighting",
      "analyze_performance_and_staging",
      "analyze_production_organization_labor_and_institutions",
      "analyze_sound_and_music",
      "analyze_space_location_and_design",
      "connect_context_to_production_form",
    ],
    reinforces: [],
    uses: [],
  },
  {
    familyId: "european_political_feminist_modernism",
    establishes: [
      "analyze_editing_duration_and_narration",
      "analyze_image_and_lighting",
      "analyze_performance_and_staging",
      "analyze_production_organization_labor_and_institutions",
      "analyze_sound_and_music",
      "analyze_space_location_and_design",
      "connect_context_to_production_form",
    ],
    reinforces: [],
    uses: [],
  },
  {
    familyId: "european_religious_moral_modernism",
    establishes: [
      "analyze_editing_duration_and_narration",
      "analyze_image_and_lighting",
      "analyze_performance_and_staging",
      "analyze_production_organization_labor_and_institutions",
      "analyze_sound_and_music",
      "analyze_space_location_and_design",
      "connect_context_to_production_form",
    ],
    reinforces: [],
    uses: [],
  },
] as const;

type CompetencyDepthModule = typeof curriculumModule & {
  FILM_STUDY_COMPETENCY_DEPTH?: {
    competencies: readonly { id: string; statement: string }[];
    familyCompetencies: readonly {
      familyId: string;
      establishes: readonly string[];
      reinforces: readonly string[];
      uses: readonly string[];
    }[];
  };
  createFilmStudyCompetencyDepth?: (input: {
    competencies: readonly { id: string; statement: string }[];
    familyCompetencies: readonly {
      familyId: string;
      establishes: readonly string[];
      reinforces: readonly string[];
      uses: readonly string[];
    }[];
  }) => unknown;
};

const competencyModule = curriculumModule as CompetencyDepthModule;

test("materializes reusable competencies for all 10 canonical Film Study families", () => {
  assert.ok(
    competencyModule.FILM_STUDY_COMPETENCY_DEPTH,
    "expected canonical Film Study competency depth to be materialized",
  );

  assert.deepEqual(
    competencyModule.FILM_STUDY_COMPETENCY_DEPTH.competencies.map(({ id }) => id),
    EXPECTED_COMPETENCY_IDS,
  );
  assert.deepEqual(
    competencyModule.FILM_STUDY_COMPETENCY_DEPTH.familyCompetencies,
    EXPECTED_FAMILY_COMPETENCIES,
  );
});

test("keeps competency reuse separate from prerequisite and progression authority", () => {
  const depth = competencyModule.FILM_STUDY_COMPETENCY_DEPTH;
  assert.ok(depth);

  const performanceFamilies = depth.familyCompetencies.filter(({ establishes }) =>
    establishes.includes("analyze_performance_and_staging"),
  );
  assert.ok(performanceFamilies.length > 1, "expected at least one genuinely reused competency");
  assert.deepEqual(curriculumModule.FILM_STUDY_CURRICULUM_PREREQUISITES, []);
});

test("rejects unknown competency references and ambiguous relation strength", () => {
  assert.equal(
    typeof competencyModule.createFilmStudyCompetencyDepth,
    "function",
    "expected a competency-depth validator",
  );

  const createDepth = competencyModule.createFilmStudyCompetencyDepth;
  assert.ok(createDepth);

  const allFamilies = EXPECTED_FAMILY_COMPETENCIES.map(({ familyId }) => ({
    familyId,
    establishes: ["known_competency"],
    reinforces: [] as string[],
    uses: [] as string[],
  }));

  assert.throws(
    () =>
      createDepth({
        competencies: [{ id: "known_competency", statement: "Known competency." }],
        familyCompetencies: allFamilies.map((entry, index) =>
          index === 0 ? { ...entry, establishes: ["unknown_competency"] } : entry,
        ),
      }),
    /unknown competency/i,
  );

  assert.throws(
    () =>
      createDepth({
        competencies: [{ id: "known_competency", statement: "Known competency." }],
        familyCompetencies: allFamilies.map((entry, index) =>
          index === 0
            ? { ...entry, reinforces: ["known_competency"] }
            : entry,
        ),
      }),
    /more than one relation/i,
  );
});

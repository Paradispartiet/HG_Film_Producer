import {
  isFilmStudyFamilyId,
  type FilmStudyFamilyId,
} from "./filmStudyHistoryFamily.js";

export type FilmStudyLearningOutcomeDeclaration = Readonly<{
  id: string;
  statement: string;
}>;

export type FilmStudyFamilyCurriculumDeclaration = Readonly<{
  familyId: FilmStudyFamilyId;
  establishes: readonly string[];
}>;

export type FilmStudyCurriculumPrerequisiteDeclaration = Readonly<{
  prerequisiteFamilyId: FilmStudyFamilyId;
  dependentFamilyId: FilmStudyFamilyId;
  requiredOutcomeIds: readonly string[];
  rationale: string;
}>;

export type FilmStudyLearningOutcome = Readonly<{
  id: string;
  statement: string;
}>;

export type FilmStudyFamilyCurriculum = Readonly<{
  familyId: FilmStudyFamilyId;
  establishes: readonly string[];
}>;

export type FilmStudyCurriculumPrerequisite = Readonly<{
  prerequisiteFamilyId: FilmStudyFamilyId;
  dependentFamilyId: FilmStudyFamilyId;
  requiredOutcomeIds: readonly string[];
  rationale: string;
}>;

export type FilmStudyCurriculumInput = Readonly<{
  outcomes: readonly FilmStudyLearningOutcomeDeclaration[];
  familyCurricula: readonly FilmStudyFamilyCurriculumDeclaration[];
  prerequisites: readonly FilmStudyCurriculumPrerequisiteDeclaration[];
}>;

export type FilmStudyCurriculum = Readonly<{
  outcomes: readonly FilmStudyLearningOutcome[];
  familyCurricula: readonly FilmStudyFamilyCurriculum[];
  prerequisites: readonly FilmStudyCurriculumPrerequisite[];
}>;

function freezeStrings(values: readonly string[]): readonly string[] {
  return Object.freeze([...new Set(values)].sort());
}

function assertNonEmpty(value: string, field: string): void {
  if (value.trim().length === 0) {
    throw new Error(`${field} must be non-empty`);
  }
}

export function createFilmStudyCurriculum(
  input: FilmStudyCurriculumInput,
): FilmStudyCurriculum {
  const outcomeIds = new Set<string>();
  const normalizedOutcomes = Object.freeze(
    input.outcomes.map((outcome) => {
      assertNonEmpty(outcome.id, "Learning outcome id");
      assertNonEmpty(outcome.statement, `Learning outcome ${outcome.id} statement`);
      if (outcomeIds.has(outcome.id)) {
        throw new Error(`Duplicate learning outcome: ${outcome.id}`);
      }
      outcomeIds.add(outcome.id);
      return Object.freeze({
        id: outcome.id,
        statement: outcome.statement,
      });
    }),
  );

  const familyIds = new Set<FilmStudyFamilyId>();
  const normalizedFamilyCurricula = Object.freeze(
    input.familyCurricula.map((family) => {
      if (!isFilmStudyFamilyId(String(family.familyId))) {
        throw new Error(`Unknown Film Study family: ${String(family.familyId)}`);
      }
      if (familyIds.has(family.familyId)) {
        throw new Error(`Duplicate family curriculum: ${family.familyId}`);
      }
      familyIds.add(family.familyId);

      const establishes = freezeStrings(family.establishes);
      for (const outcomeId of establishes) {
        if (!outcomeIds.has(outcomeId)) {
          throw new Error(`Unknown learning outcome: ${outcomeId}`);
        }
      }

      return Object.freeze({
        familyId: family.familyId,
        establishes,
      });
    }),
  );

  const establishesByFamilyId = new Map<FilmStudyFamilyId, ReadonlySet<string>>();
  for (const family of normalizedFamilyCurricula) {
    establishesByFamilyId.set(family.familyId, new Set(family.establishes));
  }

  const seenPrerequisitePairs = new Set<string>();
  const normalizedPrerequisites: readonly FilmStudyCurriculumPrerequisite[] =
    Object.freeze(
      input.prerequisites.map((prerequisite) => {
        if (
          !isFilmStudyFamilyId(String(prerequisite.prerequisiteFamilyId)) ||
          !isFilmStudyFamilyId(String(prerequisite.dependentFamilyId))
        ) {
          throw new Error(
            `Unknown Film Study family in curriculum prerequisite: ${String(prerequisite.prerequisiteFamilyId)} -> ${String(prerequisite.dependentFamilyId)}`,
          );
        }

        if (prerequisite.prerequisiteFamilyId === prerequisite.dependentFamilyId) {
          throw new Error(
            `Self prerequisite is not allowed: ${prerequisite.prerequisiteFamilyId}`,
          );
        }

        assertNonEmpty(prerequisite.rationale, "Prerequisite rationale");

        const requiredOutcomeIds = freezeStrings(prerequisite.requiredOutcomeIds);
        if (requiredOutcomeIds.length === 0) {
          throw new Error("Curriculum prerequisite requires at least one learning outcome");
        }

        const establishedOutcomeIds = establishesByFamilyId.get(
          prerequisite.prerequisiteFamilyId,
        );
        for (const outcomeId of requiredOutcomeIds) {
          if (!outcomeIds.has(outcomeId)) {
            throw new Error(`Unknown learning outcome: ${outcomeId}`);
          }
          if (!establishedOutcomeIds?.has(outcomeId)) {
            throw new Error(
              `Prerequisite family ${prerequisite.prerequisiteFamilyId} does not establish required outcome: ${outcomeId}`,
            );
          }
        }

        const pairKey = `${prerequisite.prerequisiteFamilyId}\u0000${prerequisite.dependentFamilyId}`;
        if (seenPrerequisitePairs.has(pairKey)) {
          throw new Error(
            `Duplicate curriculum prerequisite: ${prerequisite.prerequisiteFamilyId} -> ${prerequisite.dependentFamilyId}`,
          );
        }
        seenPrerequisitePairs.add(pairKey);

        return Object.freeze({
          prerequisiteFamilyId: prerequisite.prerequisiteFamilyId,
          dependentFamilyId: prerequisite.dependentFamilyId,
          requiredOutcomeIds,
          rationale: prerequisite.rationale,
        });
      }),
    );

  return Object.freeze({
    outcomes: normalizedOutcomes,
    familyCurricula: normalizedFamilyCurricula,
    prerequisites: normalizedPrerequisites,
  });
}

export const FILM_STUDY_LEARNING_OUTCOMES = Object.freeze([
  Object.freeze({
    id: "distinguish_silent_production_systems",
    statement: "Distinguish documented silent-cinema production systems by how design, location, effects, staging and editing work together.",
  }),
  Object.freeze({
    id: "analyze_early_studio_coordination",
    statement: "Analyze how early studio and departmental organization coordinates performance, architecture, image, effects and sound.",
  }),
  Object.freeze({
    id: "analyze_sound_transition_strategies",
    statement: "Analyze how transition-era production systems reorganize image, performance, editing, silence, recorded sound and music.",
  }),
  Object.freeze({
    id: "analyze_integrated_1930s_production_systems",
    statement: "Analyze how 1930s production systems integrate craft departments and industrial labor into a coherent film form.",
  }),
  Object.freeze({
    id: "analyze_noir_realism_production_conditions",
    statement: "Analyze how 1940s production conditions shape studio or location realism, narration, lighting, sound and performance.",
  }),
  Object.freeze({
    id: "analyze_asian_postwar_production_form",
    statement: "Analyze how Asian postwar production organization and material conditions shape performance, space, duration, action and realism.",
  }),
  Object.freeze({
    id: "analyze_postwar_european_modernist_systems",
    statement: "Analyze how postwar European modernist production systems organize duration, performance, politics, image, editing, sound and space.",
  }),
  Object.freeze({
    id: "analyze_czechoslovak_new_wave_conditions",
    statement: "Analyze how Czechoslovak production and institutional conditions shape performance, space, design, editing, image and sound.",
  }),
  Object.freeze({
    id: "analyze_political_feminist_production_form",
    statement: "Analyze how political or feminist history becomes concrete production choices in time, bodies, location, labor, design, image, sound and editing.",
  }),
  Object.freeze({
    id: "analyze_moral_belief_institutions_production_form",
    statement: "Analyze how moral history, belief and institutions become concrete production choices in performance, space, objects, image, editing, sound and music.",
  }),
]) as readonly FilmStudyLearningOutcomeDeclaration[];

export const FILM_STUDY_FAMILY_CURRICULA = Object.freeze([
  Object.freeze({
    familyId: "silent_foundations",
    establishes: Object.freeze(["distinguish_silent_production_systems"]),
  }),
  Object.freeze({
    familyId: "silent_studio_systems",
    establishes: Object.freeze(["analyze_early_studio_coordination"]),
  }),
  Object.freeze({
    familyId: "late_silent_early_sound",
    establishes: Object.freeze(["analyze_sound_transition_strategies"]),
  }),
  Object.freeze({
    familyId: "production_systems_1930s",
    establishes: Object.freeze(["analyze_integrated_1930s_production_systems"]),
  }),
  Object.freeze({
    familyId: "noir_realism_1940s",
    establishes: Object.freeze(["analyze_noir_realism_production_conditions"]),
  }),
  Object.freeze({
    familyId: "asian_postwar_1950s",
    establishes: Object.freeze(["analyze_asian_postwar_production_form"]),
  }),
  Object.freeze({
    familyId: "postwar_european_modernism",
    establishes: Object.freeze(["analyze_postwar_european_modernist_systems"]),
  }),
  Object.freeze({
    familyId: "czechoslovak_new_wave",
    establishes: Object.freeze(["analyze_czechoslovak_new_wave_conditions"]),
  }),
  Object.freeze({
    familyId: "european_political_feminist_modernism",
    establishes: Object.freeze(["analyze_political_feminist_production_form"]),
  }),
  Object.freeze({
    familyId: "european_religious_moral_modernism",
    establishes: Object.freeze(["analyze_moral_belief_institutions_production_form"]),
  }),
]) as readonly FilmStudyFamilyCurriculumDeclaration[];

export const FILM_STUDY_CURRICULUM_PREREQUISITES =
  Object.freeze([]) as readonly FilmStudyCurriculumPrerequisiteDeclaration[];

export const FILM_STUDY_CURRICULUM = createFilmStudyCurriculum({
  outcomes: FILM_STUDY_LEARNING_OUTCOMES,
  familyCurricula: FILM_STUDY_FAMILY_CURRICULA,
  prerequisites: FILM_STUDY_CURRICULUM_PREREQUISITES,
});

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

  const normalizedPrerequisites: readonly FilmStudyCurriculumPrerequisite[] =
    Object.freeze(
      input.prerequisites.map((prerequisite) => Object.freeze({
        prerequisiteFamilyId: prerequisite.prerequisiteFamilyId,
        dependentFamilyId: prerequisite.dependentFamilyId,
        requiredOutcomeIds: freezeStrings(prerequisite.requiredOutcomeIds),
        rationale: prerequisite.rationale,
      })),
    );

  return Object.freeze({
    outcomes: normalizedOutcomes,
    familyCurricula: normalizedFamilyCurricula,
    prerequisites: normalizedPrerequisites,
  });
}

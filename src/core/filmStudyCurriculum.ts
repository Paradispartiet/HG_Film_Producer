import {
  isFilmStudyFamilyId,
  type FilmStudyFamilyId,
} from "./filmStudyHistoryFamily.js";

export type LearningOutcomeId = string;

export interface LearningOutcomeDefinition {
  readonly id: LearningOutcomeId;
  readonly statement: string;
}

export interface FilmStudyFamilyCurriculum {
  readonly familyId: FilmStudyFamilyId;
  readonly establishes: readonly LearningOutcomeId[];
}

export interface FilmStudyPrerequisite {
  readonly earlierFamilyId: FilmStudyFamilyId;
  readonly laterFamilyId: FilmStudyFamilyId;
  readonly requiredOutcomeIds: readonly LearningOutcomeId[];
}

export interface FilmStudyCurriculum {
  readonly outcomes: readonly LearningOutcomeDefinition[];
  readonly familyCurricula: readonly FilmStudyFamilyCurriculum[];
  readonly prerequisites: readonly FilmStudyPrerequisite[];
}

export interface LearningOutcomeDefinitionInput {
  readonly id: LearningOutcomeId;
  readonly statement: string;
}

export interface FilmStudyFamilyCurriculumInput {
  readonly familyId: FilmStudyFamilyId;
  readonly establishes: readonly LearningOutcomeId[];
}

export interface FilmStudyPrerequisiteInput {
  readonly earlierFamilyId: FilmStudyFamilyId;
  readonly laterFamilyId: FilmStudyFamilyId;
  readonly requiredOutcomeIds: readonly LearningOutcomeId[];
}

export interface FilmStudyCurriculumInput {
  readonly outcomes: readonly LearningOutcomeDefinitionInput[];
  readonly familyCurricula: readonly FilmStudyFamilyCurriculumInput[];
  readonly prerequisites: readonly FilmStudyPrerequisiteInput[];
}

function fail(message: string): never {
  throw new Error(message);
}

export function createFilmStudyCurriculum(
  input: FilmStudyCurriculumInput,
): FilmStudyCurriculum {
  const outcomeById = new Map<LearningOutcomeId, LearningOutcomeDefinition>();
  const outcomes = input.outcomes.map((item) => {
    if (outcomeById.has(item.id)) {
      fail(`Duplicate learning outcome: ${item.id}.`);
    }

    const outcome = Object.freeze({
      id: item.id,
      statement: item.statement,
    });
    outcomeById.set(outcome.id, outcome);
    return outcome;
  });

  const seenFamilyIds = new Set<FilmStudyFamilyId>();
  const familyCurricula = input.familyCurricula.map((item) => {
    if (!isFilmStudyFamilyId(item.familyId)) {
      fail(`Unknown Film Study family: ${String(item.familyId)}.`);
    }
    if (seenFamilyIds.has(item.familyId)) {
      fail(`Duplicate family curriculum: ${item.familyId}.`);
    }
    seenFamilyIds.add(item.familyId);

    const establishes = [...new Set(item.establishes)].sort();
    for (const outcomeId of establishes) {
      if (!outcomeById.has(outcomeId)) {
        fail(`Unknown learning outcome: ${outcomeId}.`);
      }
    }

    return Object.freeze({
      familyId: item.familyId,
      establishes: Object.freeze(establishes),
    });
  });

  const prerequisites = input.prerequisites.map((item) => Object.freeze({
    earlierFamilyId: item.earlierFamilyId,
    laterFamilyId: item.laterFamilyId,
    requiredOutcomeIds: Object.freeze([...item.requiredOutcomeIds]),
  }));

  return Object.freeze({
    outcomes: Object.freeze(outcomes),
    familyCurricula: Object.freeze(familyCurricula),
    prerequisites: Object.freeze(prerequisites),
  });
}

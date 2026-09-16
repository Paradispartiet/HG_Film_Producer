import {
  FILM_STUDY_CURRICULUM,
  type FilmStudyCurriculumPrerequisite,
} from "./filmStudyCurriculum.js";
import type { FilmStudyFamilyId } from "./filmStudyHistoryFamily.js";

export type FilmStudyFamilyProgressionEdge = Readonly<{
  from: FilmStudyFamilyId;
  to: FilmStudyFamilyId;
}>;

export type FilmStudyFamilyProgression = Readonly<{
  successorsOf(familyId: FilmStudyFamilyId): readonly FilmStudyFamilyId[];
}>;

function edgeKey(from: FilmStudyFamilyId, to: FilmStudyFamilyId): string {
  return `${from}\u0000${to}`;
}

export function createFilmStudyFamilyProgression(
  edges: readonly FilmStudyFamilyProgressionEdge[],
): FilmStudyFamilyProgression {
  const byFrom = new Map<FilmStudyFamilyId, Set<FilmStudyFamilyId>>();

  for (const edge of edges) {
    const targets = byFrom.get(edge.from) ?? new Set<FilmStudyFamilyId>();
    targets.add(edge.to);
    byFrom.set(edge.from, targets);
  }

  return Object.freeze({
    successorsOf(familyId: FilmStudyFamilyId): readonly FilmStudyFamilyId[] {
      return Object.freeze([...(byFrom.get(familyId) ?? [])].sort());
    },
  });
}

export function projectFilmStudyFamilyProgressionEdges(
  prerequisites: readonly FilmStudyCurriculumPrerequisite[],
): readonly FilmStudyFamilyProgressionEdge[] {
  const deduped = new Map<string, FilmStudyFamilyProgressionEdge>();

  for (const prerequisite of prerequisites) {
    const edge = Object.freeze({
      from: prerequisite.prerequisiteFamilyId,
      to: prerequisite.dependentFamilyId,
    });
    deduped.set(edgeKey(edge.from, edge.to), edge);
  }

  return Object.freeze(
    [...deduped.values()].sort((a, b) =>
      `${a.from}:${a.to}`.localeCompare(`${b.from}:${b.to}`),
    ),
  );
}

export const FILM_STUDY_FAMILY_PROGRESSION_EDGES:
  readonly FilmStudyFamilyProgressionEdge[] =
    projectFilmStudyFamilyProgressionEdges(FILM_STUDY_CURRICULUM.prerequisites);

const canonicalProgression = createFilmStudyFamilyProgression(
  FILM_STUDY_FAMILY_PROGRESSION_EDGES,
);

export function successorsOf(
  familyId: FilmStudyFamilyId,
): readonly FilmStudyFamilyId[] {
  return canonicalProgression.successorsOf(familyId);
}

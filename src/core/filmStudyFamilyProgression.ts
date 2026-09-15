import type { FilmStudyFamilyId } from "./filmStudyHistoryFamily.js";

export type FilmStudyFamilyProgressionEdge = Readonly<{
  from: FilmStudyFamilyId;
  to: FilmStudyFamilyId;
}>;

export type FilmStudyFamilyProgression = Readonly<{
  successorsOf(familyId: FilmStudyFamilyId): readonly FilmStudyFamilyId[];
}>;

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

export const FILM_STUDY_FAMILY_PROGRESSION_EDGES: readonly FilmStudyFamilyProgressionEdge[] = Object.freeze(
  [] as FilmStudyFamilyProgressionEdge[],
);

const canonicalProgression = createFilmStudyFamilyProgression(
  FILM_STUDY_FAMILY_PROGRESSION_EDGES,
);

export function successorsOf(
  familyId: FilmStudyFamilyId,
): readonly FilmStudyFamilyId[] {
  return canonicalProgression.successorsOf(familyId);
}

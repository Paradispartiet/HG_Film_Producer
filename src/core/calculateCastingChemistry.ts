import type { Actor, CastingChemistryResult } from "../domain/crew.js";

const TENSION_PAIRS: readonly (readonly [string, string])[] = [
  ["improviser", "planner"],
  ["explosive", "restrained"],
  ["warm", "detached"],
  ["playful", "serious"],
  ["competitive", "supportive"]
];

/**
 * Evaluate every actor pairing. Shared tags strengthen a pairing, while known
 * opposing tags and a complete lack of overlap make chemistry less certain.
 */
export function calculateCastingChemistry(
  selectedActors: readonly Actor[]
): CastingChemistryResult {
  const actors = uniqueActors(selectedActors);
  const actorIds = actors.map((actor) => actor.id);

  if (actors.length < 2) {
    return {
      actorIds,
      chemistryScore: actors.length === 1 ? 50 : 0,
      sharedTags: [],
      tensionTags: [],
      note: actors.length === 1
        ? "A second actor is needed before ensemble chemistry can be judged."
        : "No actors are available for a chemistry reading."
    };
  }

  const pairScores: number[] = [];
  const sharedTags = new Set<string>();
  const tensionTags = new Set<string>();

  for (let leftIndex = 0; leftIndex < actors.length; leftIndex += 1) {
    const left = actors[leftIndex];
    if (!left) continue;

    for (let rightIndex = leftIndex + 1; rightIndex < actors.length; rightIndex += 1) {
      const right = actors[rightIndex];
      if (!right) continue;

      const leftTags = new Set(left.chemistryTags.map(normalizeTag));
      const rightTags = new Set(right.chemistryTags.map(normalizeTag));
      const pairSharedTags = [...leftTags].filter((tag) => rightTags.has(tag));
      const pairTensions = findTensions(leftTags, rightTags);

      pairSharedTags.forEach((tag) => sharedTags.add(tag));
      pairTensions.forEach((tag) => tensionTags.add(tag));

      const noOverlapPenalty = pairSharedTags.length === 0 ? 12 : 0;
      pairScores.push(clamp(50 + pairSharedTags.length * 14 - pairTensions.length * 10 - noOverlapPenalty));
    }
  }

  const chemistryScore = clamp(average(pairScores));
  const note = chemistryScore >= 75
    ? "The cast has strong shared instincts and promising ensemble chemistry."
    : chemistryScore >= 55
      ? "The cast has workable chemistry with room to develop in rehearsal."
      : "The cast has limited common ground or creative tension that needs active direction.";

  return {
    actorIds,
    chemistryScore,
    sharedTags: [...sharedTags].sort(),
    tensionTags: [...tensionTags].sort(),
    note
  };
}

function uniqueActors(actors: readonly Actor[]): readonly Actor[] {
  return actors.filter(
    (actor, index) => actors.findIndex((candidate) => candidate.id === actor.id) === index
  );
}

function findTensions(leftTags: ReadonlySet<string>, rightTags: ReadonlySet<string>): readonly string[] {
  return TENSION_PAIRS.flatMap(([first, second]) => {
    const opposed =
      (leftTags.has(first) && rightTags.has(second)) ||
      (leftTags.has(second) && rightTags.has(first));
    return opposed ? [`${first}/${second}`] : [];
  });
}

function average(values: readonly number[]): number {
  return values.length === 0 ? 0 : values.reduce((sum, value) => sum + value, 0) / values.length;
}

function normalizeTag(tag: string): string {
  return tag.trim().toLowerCase().replace(/[\s-]+/g, "_");
}

function clamp(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}

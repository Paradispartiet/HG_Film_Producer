import type {
  Actor,
  CrewMember,
  ProductionTeamEvaluation
} from "../domain/crew.js";
import type { FilmProject } from "../domain/film.js";
import { calculateCastingChemistry } from "./calculateCastingChemistry.js";
import { scoreActorForProject } from "./castActor.js";
import { scoreCrewMemberForProject } from "./scoreCrewMemberForProject.js";

/** Evaluate only the crew and actors currently attached to the project. */
export function evaluateProductionTeam(
  project: FilmProject,
  crewMembers: readonly CrewMember[],
  actors: readonly Actor[]
): ProductionTeamEvaluation {
  const selectedCrew = project.crewMemberIds.flatMap((id) => {
    const crewMember = crewMembers.find((candidate) => candidate.id === id);
    return crewMember ? [crewMember] : [];
  });
  const selectedActors = project.actorIds.flatMap((id) => {
    const actor = actors.find((candidate) => candidate.id === id);
    return actor ? [actor] : [];
  });

  const crewScore = averageOrZero(
    selectedCrew.map((crewMember) => scoreCrewMemberForProject(project, crewMember).totalScore)
  );
  const castScore = averageOrZero(
    selectedActors.map((actor) => scoreActorForProject(project, actor).totalScore)
  );
  const chemistryScore = calculateCastingChemistry(selectedActors).chemistryScore;
  const reliabilityScore = averageOrZero([
    ...selectedCrew.map((crewMember) => crewMember.reliability),
    ...selectedActors.map((actor) => actor.reliability)
  ]);
  const committedFees =
    selectedCrew.reduce((sum, crewMember) => sum + crewMember.fee, 0) +
    selectedActors.reduce((sum, actor) => sum + actor.fee, 0);
  const budgetPressure = project.budget <= 0
    ? committedFees > 0 ? 100 : 0
    : clamp((committedFees / project.budget) * 100);
  const overall = clamp(
    crewScore * 0.3 +
      castScore * 0.25 +
      chemistryScore * 0.2 +
      reliabilityScore * 0.15 +
      (100 - budgetPressure) * 0.1
  );

  return {
    projectId: project.id,
    crewScore,
    castScore,
    chemistryScore,
    reliabilityScore,
    budgetPressure,
    overall,
    notes: buildNotes(selectedCrew.length, selectedActors.length, reliabilityScore, budgetPressure)
  };
}

function buildNotes(
  crewCount: number,
  actorCount: number,
  reliabilityScore: number,
  budgetPressure: number
): readonly string[] {
  const notes: string[] = [
    `${crewCount} crew member${crewCount === 1 ? "" : "s"} and ${actorCount} actor${actorCount === 1 ? "" : "s"} evaluated.`
  ];

  if (crewCount < 3) notes.push("Key crew coverage is still thin.");
  if (actorCount < 2) notes.push("Cast chemistry needs at least two attached actors.");
  notes.push(
    reliabilityScore >= 75
      ? "The team is operationally dependable."
      : "Reliability could create schedule risk."
  );
  notes.push(
    budgetPressure <= 35
      ? "Committed team fees leave healthy production headroom."
      : budgetPressure <= 60
        ? "Team fees create manageable budget pressure."
        : "Team fees consume a risky share of the budget."
  );
  return notes;
}

function averageOrZero(values: readonly number[]): number {
  if (values.length === 0) return 0;
  return clamp(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function clamp(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}

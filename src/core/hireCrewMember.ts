import type { CrewFitScore, CrewHireResult, CrewMember } from "../domain/crew.js";
import type { FilmProject } from "../domain/film.js";
import { scoreCrewMemberForProject } from "./scoreCrewMemberForProject.js";

/** Add a crew member to a copied project, preserving the original project. */
export function hireCrewMember(
  project: FilmProject,
  crewMember: CrewMember,
  score: CrewFitScore = scoreCrewMemberForProject(project, crewMember)
): CrewHireResult {
  if (score.crewMemberId !== crewMember.id) {
    throw new Error(`Crew score does not belong to crew member "${crewMember.id}".`);
  }

  const alreadyHired = project.crewMemberIds.includes(crewMember.id);
  const updatedProject = alreadyHired
    ? project
    : { ...project, crewMemberIds: [...project.crewMemberIds, crewMember.id] };

  return {
    project: updatedProject,
    crewMemberId: crewMember.id,
    alreadyHired,
    score,
    note: alreadyHired
      ? `${crewMember.name} is already hired for ${project.title}.`
      : `${crewMember.name} joined ${project.title} with a fit score of ${score.totalScore}.`
  };
}

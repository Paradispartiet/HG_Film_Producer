import type { CrewDiscipline, CrewFitScore, CrewMember } from "../domain/crew.js";
import type { FilmProject } from "../domain/film.js";

const EXPECTED_ROLE_BY_DISCIPLINE: Record<CrewDiscipline, string> = {
  producing: "role_producer",
  directing: "role_director",
  screenwriting: "role_screenwriter",
  cinematography: "role_cinematographer",
  editing: "role_editor",
  sound: "role_sound_designer",
  music: "role_composer",
  production_design: "role_production_designer",
  casting: "role_casting_director",
  locations: "role_location_manager",
  marketing: "role_marketer"
};

/**
 * Score a crew member with six transparent 0..100 components.
 *
 * Total weighting: role 20%, genre 20%, style 15%, experience 15%,
 * reliability 15%, and affordability 15%.
 */
export function scoreCrewMemberForProject(
  project: FilmProject,
  crewMember: CrewMember,
  desiredStyleTags: readonly string[] = []
): CrewFitScore {
  const roleFit = crewMember.roleId === EXPECTED_ROLE_BY_DISCIPLINE[crewMember.discipline] ? 100 : 35;
  const genreFit = crewMember.genreStrengths.includes(project.genreId) ? 100 : 45;
  const styleFit = scoreTagOverlap(crewMember.styleTags, desiredStyleTags);
  const experience = clamp(crewMember.experience);
  const reliability = clamp(crewMember.reliability);
  const affordability = scoreAffordability(crewMember.fee, project.budget);
  const totalScore = clamp(
    roleFit * 0.2 +
      genreFit * 0.2 +
      styleFit * 0.15 +
      experience * 0.15 +
      reliability * 0.15 +
      affordability * 0.15
  );

  return {
    crewMemberId: crewMember.id,
    totalScore,
    roleFit,
    genreFit,
    styleFit,
    experience,
    reliability,
    affordability,
    notes: buildNotes(project, crewMember, desiredStyleTags, affordability)
  };
}

function scoreTagOverlap(memberTags: readonly string[], desiredTags: readonly string[]): number {
  if (desiredTags.length === 0) return 60;
  const normalizedTags = new Set(memberTags.map(normalizeTag));
  const matches = desiredTags.filter((tag) => normalizedTags.has(normalizeTag(tag))).length;
  return clamp(30 + (matches / desiredTags.length) * 70);
}

function scoreAffordability(fee: number, budget: number): number {
  if (budget <= 0) return fee <= 0 ? 100 : 0;
  const percentageOfBudget = (fee / budget) * 100;
  return clamp(110 - percentageOfBudget * 5);
}

function buildNotes(
  project: FilmProject,
  crewMember: CrewMember,
  desiredStyleTags: readonly string[],
  affordability: number
): readonly string[] {
  const notes = [
    crewMember.genreStrengths.includes(project.genreId)
      ? "Genre is one of this crew member's strengths."
      : "Genre fit is workable but not a listed specialty.",
    desiredStyleTags.length === 0
      ? "No desired style was supplied; style fit is neutral."
      : "Style fit reflects overlap with the project's desired tags.",
    affordability >= 70
      ? "Fee leaves comfortable room in the project budget."
      : affordability >= 40
        ? "Fee creates noticeable budget pressure."
        : "Fee is a major share of the project budget."
  ];
  return notes;
}

function normalizeTag(tag: string): string {
  return tag.trim().toLowerCase().replace(/[\s-]+/g, "_");
}

function clamp(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}

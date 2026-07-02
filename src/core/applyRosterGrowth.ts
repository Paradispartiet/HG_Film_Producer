import type { CareerRosterEntry } from "../domain/career.js";
import type { Actor, CrewMember } from "../domain/crew.js";

const EXPERIENCE_GROWTH_PER_FILM = 4;
const REGULAR_FILMS_THRESHOLD = 2;
const STUDIO_REGULAR_TAG = "studio_regular";

/** Grow a crew member's experience and mark them a studio regular after repeat films. */
export function applyCrewRosterGrowth(crewMember: CrewMember, rosterEntry: CareerRosterEntry | undefined): CrewMember {
  if (!rosterEntry) return crewMember;

  return {
    ...crewMember,
    experience: growExperience(crewMember.experience, rosterEntry.filmsWorked),
    styleTags: addRegularTag(crewMember.styleTags, rosterEntry.filmsWorked)
  };
}

/** Grow an actor's experience and mark them a studio regular after repeat films. */
export function applyActorRosterGrowth(actor: Actor, rosterEntry: CareerRosterEntry | undefined): Actor {
  if (!rosterEntry) return actor;

  return {
    ...actor,
    experience: growExperience(actor.experience, rosterEntry.filmsWorked),
    chemistryTags: addRegularTag(actor.chemistryTags, rosterEntry.filmsWorked)
  };
}

function growExperience(baseExperience: number, filmsWorked: number): number {
  return Math.max(0, Math.min(100, baseExperience + filmsWorked * EXPERIENCE_GROWTH_PER_FILM));
}

function addRegularTag(tags: readonly string[], filmsWorked: number): readonly string[] {
  if (filmsWorked < REGULAR_FILMS_THRESHOLD || tags.includes(STUDIO_REGULAR_TAG)) return tags;
  return [...tags, STUDIO_REGULAR_TAG];
}

import type { CareerRosterEntry, CareerState } from "../domain/career.js";
import type { ActorId, CrewMemberId } from "../domain/ids.js";

/** Record one film's crew and cast into the studio's collaboration history. */
export function recordCareerRosterFilm(
  careerState: CareerState,
  filmTitle: string,
  crewMemberIds: readonly CrewMemberId[],
  actorIds: readonly ActorId[]
): CareerState {
  return {
    ...careerState,
    crewRoster: addToRoster(careerState.crewRoster, filmTitle, crewMemberIds),
    castRoster: addToRoster(careerState.castRoster, filmTitle, actorIds)
  };
}

function addToRoster<Id extends string>(
  roster: Readonly<Record<Id, CareerRosterEntry>>,
  filmTitle: string,
  ids: readonly Id[]
): Readonly<Record<Id, CareerRosterEntry>> {
  const updatedRoster: Record<Id, CareerRosterEntry> = { ...roster };
  for (const id of ids) {
    const existingEntry = updatedRoster[id];
    updatedRoster[id] = {
      filmsWorked: (existingEntry?.filmsWorked ?? 0) + 1,
      lastFilmTitle: filmTitle
    };
  }
  return updatedRoster;
}

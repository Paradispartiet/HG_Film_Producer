import type { FilmProject } from "../domain/film.js";
import type {
  Location,
  LocationScoutingBrief,
  LocationScoutingResult
} from "../domain/location.js";
import { scoreLocationForProject } from "./scoreLocationForProject.js";

/** Score and rank candidate locations without changing the project or input list. */
export function scoutLocations(
  project: FilmProject,
  locations: readonly Location[],
  brief?: LocationScoutingBrief
): LocationScoutingResult {
  const rankedLocations = locations
    .map((location) => scoreLocationForProject(project, location, brief))
    .sort((left, right) => right.totalScore - left.totalScore || left.locationId.localeCompare(right.locationId));

  return {
    briefId: brief?.id ?? null,
    rankedLocations
  };
}

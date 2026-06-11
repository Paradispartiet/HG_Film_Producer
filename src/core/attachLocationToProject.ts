import type { FilmProject } from "../domain/film.js";
import type { Location, LocationSelectionResult } from "../domain/location.js";
import { estimateLocationProductionImpact } from "./estimateLocationProductionImpact.js";

/** Attach a location immutably and return its production impact. */
export function attachLocationToProject(
  project: FilmProject,
  location: Location
): LocationSelectionResult {
  const alreadyAttached = project.locationIds.includes(location.id);

  return {
    project: alreadyAttached
      ? project
      : { ...project, locationIds: [...project.locationIds, location.id] },
    locationId: location.id,
    alreadyAttached,
    impact: estimateLocationProductionImpact(location)
  };
}

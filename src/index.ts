import { calculateFilmResult } from "./core/calculateFilmResult.js";
import type { FilmProject } from "./domain/film.js";
import {
  asFilmProjectId,
  asTechniqueId,
  type ActorId,
  type CrewMemberId,
  type GenreId,
  type LocationId
} from "./domain/ids.js";

const demoProject: FilmProject = {
  id: asFilmProjectId("film_project_demo_001"),
  title: "Demo Feature",
  status: "post_production",
  scale: "indie",
  genreId: "genre_drama" as GenreId,
  budget: 750_000,
  scriptId: null,
  crewMemberIds: ["crew_director_001", "crew_editor_001"] as CrewMemberId[],
  actorIds: ["actor_001", "actor_002"] as ActorId[],
  locationIds: ["location_oslo_001"] as LocationId[],
  techniqueIdsUsed: [asTechniqueId("technique_montage_basic")]
};

const result = calculateFilmResult(demoProject);

console.log("HG Film Producer — first simulation result");
console.log(JSON.stringify(result, null, 2));

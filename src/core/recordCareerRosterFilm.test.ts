import assert from "node:assert/strict";
import test from "node:test";

import { asActorId, asCrewMemberId } from "../domain/ids.js";
import { createCareerState } from "./createCareerState.js";
import { createStudio } from "./createStudio.js";
import { recordCareerRosterFilm } from "./recordCareerRosterFilm.js";

const director = asCrewMemberId("crew_member_test_director");
const cinematographer = asCrewMemberId("crew_member_test_cinematographer");
const lead = asActorId("actor_test_lead");

test("recordCareerRosterFilm adds first-time collaborators with a film count of one", () => {
  const careerState = createCareerState(createStudio({ name: "Test Studio", startingMoney: 500_000 }));

  const updated = recordCareerRosterFilm(careerState, "The Test Reel", [director, cinematographer], [lead]);

  assert.deepEqual(updated.crewRoster[director], { filmsWorked: 1, lastFilmTitle: "The Test Reel" });
  assert.deepEqual(updated.crewRoster[cinematographer], { filmsWorked: 1, lastFilmTitle: "The Test Reel" });
  assert.deepEqual(updated.castRoster[lead], { filmsWorked: 1, lastFilmTitle: "The Test Reel" });
});

test("recordCareerRosterFilm increments returning collaborators across films", () => {
  const careerState = createCareerState(createStudio({ name: "Test Studio", startingMoney: 500_000 }));
  const afterFirstFilm = recordCareerRosterFilm(careerState, "The Test Reel", [director], [lead]);

  const afterSecondFilm = recordCareerRosterFilm(afterFirstFilm, "The Second Reel", [director], []);

  assert.deepEqual(afterSecondFilm.crewRoster[director], { filmsWorked: 2, lastFilmTitle: "The Second Reel" });
  assert.deepEqual(afterSecondFilm.castRoster[lead], { filmsWorked: 1, lastFilmTitle: "The Test Reel" });
});

test("recordCareerRosterFilm does not mutate the original career state", () => {
  const careerState = createCareerState(createStudio({ name: "Test Studio", startingMoney: 500_000 }));

  recordCareerRosterFilm(careerState, "The Test Reel", [director], [lead]);

  assert.deepEqual(careerState.crewRoster, {});
  assert.deepEqual(careerState.castRoster, {});
});

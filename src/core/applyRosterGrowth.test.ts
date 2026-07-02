import assert from "node:assert/strict";
import test from "node:test";

import type { CareerRosterEntry } from "../domain/career.js";
import type { Actor, CrewMember } from "../domain/crew.js";
import { asActorId, asCrewMemberId, asGenreId, asRoleId } from "../domain/ids.js";
import { applyActorRosterGrowth, applyCrewRosterGrowth } from "./applyRosterGrowth.js";

const crewMember: CrewMember = {
  id: asCrewMemberId("crew_member_test"),
  name: "Test Cinematographer",
  roleId: asRoleId("role_cinematographer"),
  discipline: "cinematography",
  experience: 70,
  styleTags: ["natural_light"],
  genreStrengths: [asGenreId("genre_drama")],
  statBoosts: {},
  fee: 50_000,
  reliability: 80,
  collaboration: 75
};

const actor: Actor = {
  id: asActorId("actor_test"),
  name: "Test Actor",
  actingStyle: "naturalistic",
  starPower: 60,
  experience: 65,
  genreStrengths: [asGenreId("genre_drama")],
  chemistryTags: ["restrained"],
  roleFitTags: [],
  fee: 40_000,
  reliability: 85
};

test("applyCrewRosterGrowth leaves a crew member unchanged with no roster history", () => {
  const grown = applyCrewRosterGrowth(crewMember, undefined);
  assert.deepEqual(grown, crewMember);
});

test("applyCrewRosterGrowth raises experience but withholds the studio-regular tag below the threshold", () => {
  const rosterEntry: CareerRosterEntry = { filmsWorked: 1, lastFilmTitle: "Film One" };
  const grown = applyCrewRosterGrowth(crewMember, rosterEntry);
  assert.equal(grown.experience, 74);
  assert.deepEqual(grown.styleTags, ["natural_light"]);
});

test("applyCrewRosterGrowth adds the studio-regular tag once at the threshold", () => {
  const rosterEntry: CareerRosterEntry = { filmsWorked: 2, lastFilmTitle: "Film Two" };
  const grown = applyCrewRosterGrowth(crewMember, rosterEntry);
  assert.equal(grown.experience, 78);
  assert.deepEqual(grown.styleTags, ["natural_light", "studio_regular"]);
});

test("applyCrewRosterGrowth clamps experience at 100 and does not duplicate the tag", () => {
  const rosterEntry: CareerRosterEntry = { filmsWorked: 20, lastFilmTitle: "Film Twenty" };
  const grown = applyCrewRosterGrowth(crewMember, rosterEntry);
  assert.equal(grown.experience, 100);
  assert.deepEqual(grown.styleTags, ["natural_light", "studio_regular"]);
});

test("applyActorRosterGrowth leaves an actor unchanged with no roster history", () => {
  const grown = applyActorRosterGrowth(actor, undefined);
  assert.deepEqual(grown, actor);
});

test("applyActorRosterGrowth raises experience and adds the studio-regular chemistry tag at the threshold", () => {
  const rosterEntry: CareerRosterEntry = { filmsWorked: 3, lastFilmTitle: "Film Three" };
  const grown = applyActorRosterGrowth(actor, rosterEntry);
  assert.equal(grown.experience, 77);
  assert.deepEqual(grown.chemistryTags, ["restrained", "studio_regular"]);
});

test("applyRosterGrowth does not mutate the original crew member or actor", () => {
  applyCrewRosterGrowth(crewMember, { filmsWorked: 5, lastFilmTitle: "Film Five" });
  applyActorRosterGrowth(actor, { filmsWorked: 5, lastFilmTitle: "Film Five" });
  assert.equal(crewMember.experience, 70);
  assert.equal(actor.experience, 65);
});

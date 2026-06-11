import assert from "node:assert/strict";
import test from "node:test";

import type { Actor, CrewMember, ProductionTeamEvaluation } from "../domain/crew.js";
import { loadFilmData } from "../data/filmData.js";
import type { FilmProject } from "../domain/film.js";
import {
  asActorId,
  asCrewMemberId,
  asFilmProjectId,
  asGenreId,
  asRoleId,
  asScriptId
} from "../domain/ids.js";
import { calculateCastingChemistry } from "./calculateCastingChemistry.js";
import { calculateFilmResult } from "./calculateFilmResult.js";
import { castActor, scoreActorForProject } from "./castActor.js";
import { evaluateProductionTeam } from "./evaluateProductionTeam.js";
import { hireCrewMember } from "./hireCrewMember.js";
import { scoreCrewMemberForProject } from "./scoreCrewMemberForProject.js";

const project: FilmProject = {
  id: asFilmProjectId("project_test"),
  title: "Test Film",
  status: "pre_production",
  scale: "indie",
  genreId: asGenreId("genre_drama"),
  budget: 500_000,
  scriptId: asScriptId("script_test"),
  crewMemberIds: [],
  actorIds: [],
  locationIds: [],
  techniqueIdsUsed: []
};

const director: CrewMember = {
  id: asCrewMemberId("crew_director"),
  name: "Director Test",
  roleId: asRoleId("role_director"),
  discipline: "directing",
  experience: 84,
  styleTags: ["naturalistic", "intimate"],
  genreStrengths: [asGenreId("genre_drama")],
  statBoosts: { quality: 6, performance: 5 },
  fee: 50_000,
  reliability: 90,
  collaboration: 92
};

const cinematographer: CrewMember = {
  ...director,
  id: asCrewMemberId("crew_cinematographer"),
  name: "Cinematographer Test",
  roleId: asRoleId("role_cinematographer"),
  discipline: "cinematography",
  collaboration: 86
};

const editor: CrewMember = {
  ...director,
  id: asCrewMemberId("crew_editor"),
  name: "Editor Test",
  roleId: asRoleId("role_editor"),
  discipline: "editing",
  collaboration: 88
};

const lead: Actor = {
  id: asActorId("actor_lead"),
  name: "Lead Test",
  actingStyle: "naturalistic",
  starPower: 70,
  experience: 82,
  genreStrengths: [asGenreId("genre_drama")],
  chemistryTags: ["warm", "listener", "supportive"],
  roleFitTags: ["lead", "quiet_strength"],
  fee: 65_000,
  reliability: 91
};

const coLead: Actor = {
  ...lead,
  id: asActorId("actor_co_lead"),
  name: "Co-lead Test",
  actingStyle: "restrained",
  starPower: 62,
  chemistryTags: ["listener", "supportive", "serious"],
  fee: 55_000,
  reliability: 88
};


test("crew and actor seed rosters meet the first-engine coverage requirements", () => {
  const data = loadFilmData();
  const disciplineCounts = new Map<string, number>();

  for (const crewMember of data.crewMembers) {
    disciplineCounts.set(
      crewMember.discipline,
      (disciplineCounts.get(crewMember.discipline) ?? 0) + 1
    );
  }

  assert.ok(data.crewMembers.length >= 12 && data.crewMembers.length <= 16);
  assert.ok(data.actors.length >= 10 && data.actors.length <= 14);
  assert.ok((disciplineCounts.get("producing") ?? 0) >= 2);
  assert.ok((disciplineCounts.get("directing") ?? 0) >= 2);
  assert.ok((disciplineCounts.get("screenwriting") ?? 0) >= 2);
  assert.ok((disciplineCounts.get("cinematography") ?? 0) >= 2);
  assert.ok((disciplineCounts.get("editing") ?? 0) >= 2);
  assert.equal(new Set(data.crewMembers.map((member) => member.id)).size, data.crewMembers.length);
  assert.equal(new Set(data.actors.map((actor) => actor.id)).size, data.actors.length);
});

test("crew scoring is explainable, clamped, and rewards matching style tags", () => {
  const matching = scoreCrewMemberForProject(project, director, ["naturalistic", "intimate"]);
  const mismatching = scoreCrewMemberForProject(project, director, ["kinetic", "large_scale"]);

  assert.equal(matching.roleFit, 100);
  assert.equal(matching.genreFit, 100);
  assert.equal(matching.styleFit, 100);
  assert.ok(matching.totalScore >= 0 && matching.totalScore <= 100);
  assert.ok(matching.totalScore > mismatching.totalScore);
});

test("hiring and casting return copied projects and prevent duplicate IDs", () => {
  const crewScore = scoreCrewMemberForProject(project, director);
  const hired = hireCrewMember(project, director, crewScore);
  const hiredAgain = hireCrewMember(hired.project, director, crewScore);
  const actorScore = scoreActorForProject(hired.project, lead);
  const cast = castActor(hired.project, lead, actorScore);
  const castAgain = castActor(cast.project, lead, actorScore);

  assert.deepEqual(project.crewMemberIds, []);
  assert.deepEqual(project.actorIds, []);
  assert.notEqual(hired.project, project);
  assert.deepEqual(hired.project.crewMemberIds, [director.id]);
  assert.equal(hiredAgain.alreadyHired, true);
  assert.deepEqual(hiredAgain.project.crewMemberIds, [director.id]);
  assert.deepEqual(cast.project.actorIds, [lead.id]);
  assert.equal(castAgain.alreadyCast, true);
  assert.deepEqual(castAgain.project.actorIds, [lead.id]);
});

test("casting chemistry rewards shared tags and ignores duplicate actors", () => {
  const chemistry = calculateCastingChemistry([lead, coLead, lead]);

  assert.deepEqual(chemistry.actorIds, [lead.id, coLead.id]);
  assert.deepEqual(chemistry.sharedTags, ["listener", "supportive"]);
  assert.equal(chemistry.tensionTags.length, 0);
  assert.ok(chemistry.chemistryScore >= 75);
});

test("production-team evaluation uses attached people, collaboration, reliability, and fees", () => {
  const staffedProject: FilmProject = {
    ...project,
    crewMemberIds: [director.id, cinematographer.id, editor.id],
    actorIds: [lead.id, coLead.id]
  };
  const evaluation = evaluateProductionTeam(
    staffedProject,
    [director, cinematographer, editor],
    [lead, coLead]
  );

  assert.equal(evaluation.projectId, staffedProject.id);
  assert.ok(evaluation.crewScore >= 80);
  assert.ok(evaluation.castScore >= 80);
  assert.ok(evaluation.reliabilityScore >= 80);
  assert.equal(evaluation.budgetPressure, 54);
  assert.ok(evaluation.overall > 0 && evaluation.overall <= 100);
});

test("an empty production team evaluates to zero rather than gaining free budget health", () => {
  const evaluation = evaluateProductionTeam(project, [], []);

  assert.equal(evaluation.crewScore, 0);
  assert.equal(evaluation.castScore, 0);
  assert.equal(evaluation.chemistryScore, 0);
  assert.equal(evaluation.reliabilityScore, 0);
  assert.equal(evaluation.budgetPressure, 0);
  assert.equal(evaluation.overall, 0);
});

test("film results preserve the legacy API and improve with a strong evaluated team", () => {
  const baseline = calculateFilmResult(project);
  const strongTeam: ProductionTeamEvaluation = {
    projectId: project.id,
    crewScore: 90,
    castScore: 88,
    chemistryScore: 86,
    reliabilityScore: 92,
    budgetPressure: 40,
    overall: 88,
    notes: []
  };
  const staffed = calculateFilmResult(project, strongTeam);

  assert.ok(staffed.quality > baseline.quality);
  assert.ok(staffed.audienceAppeal > baseline.audienceAppeal);
  assert.ok(staffed.criticalAppeal > baseline.criticalAppeal);
});

test("film results reject a production-team evaluation for another project", () => {
  const wrongProjectTeam: ProductionTeamEvaluation = {
    projectId: asFilmProjectId("project_other"),
    crewScore: 80,
    castScore: 80,
    chemistryScore: 80,
    reliabilityScore: 80,
    budgetPressure: 40,
    overall: 80,
    notes: []
  };

  assert.throws(
    () => calculateFilmResult(project, wrongProjectTeam),
    /does not belong to project/
  );
});

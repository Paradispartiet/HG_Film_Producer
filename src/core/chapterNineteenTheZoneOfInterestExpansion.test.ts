import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenTheZoneOfInterestExpansionDefinitions, mergeChapterNineteenTheZoneOfInterestExpansion } from "./chapterNineteenTheZoneOfInterestExpansion.js";

test("The Zone of Interest source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenTheZoneOfInterestExpansionDefinitions.length, 1);
  const film = chapterNineteenTheZoneOfInterestExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_zone_of_interest_2023");
  assert.equal(film.title, "The Zone of Interest");
  assert.equal(film.year, 2023);
  assert.equal(film.runtimeMins, 106);
  assert.deepEqual(film.directors, ["Jonathan Glazer"]);
  assert.equal(film.sourceId, "cannes_the_zone_of_interest_2023");
  assert.match(film.scenarioType, /award_priority/);
  assert.match(film.scenarioType, /up_to_ten_cameras/);
  assert.match(film.scenarioType, /sony_venice/);
  assert.match(film.scenarioType, /flir_thermal_camera/);
  assert.match(film.scenarioType, /600_page_sound_bible/);
  assert.ok(film.premise.includes("2023 Grand Prix"));
  assert.ok(film.premise.includes("International Feature Film and Sound"));
  assert.ok(film.premise.includes("up to ten cameras"));
  assert.ok(film.premise.includes("Sony VENICE"));
  assert.ok(film.premise.includes("Rialto"));
  assert.ok(film.premise.includes("FLIR thermal-imaging"));
  assert.ok(film.premise.includes("roughly 600-page sound reference document"));
  assert.ok(film.premise.includes("almost two years"));
  assert.ok(film.premise.includes("do not establish one audited final negative cost"));
  assert.ok(film.learningGoals.length >= 60);
  assert.ok(film.phases.length >= 35);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.requiredChoicesSeed.camera.includes("up_to_ten_cameras"));
  assert.ok(film.requiredChoicesSeed.sound.includes("johnnie_burn_sound_bible"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("award_context_not_workflow_evidence"));
  assert.ok(film.requiredChoicesSeed.editing.includes("nearly_two_year_edit"));
});

test("The Zone of Interest expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenTheZoneOfInterestExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_the_zone_of_interest_2023");
  const twice = mergeChapterNineteenTheZoneOfInterestExpansion(once);
  assert.equal(twice.length, 1);
});

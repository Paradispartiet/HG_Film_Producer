import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenSoundOfFallingExpansionDefinitions, mergeChapterNineteenSoundOfFallingExpansion } from "./chapterNineteenSoundOfFallingExpansion.js";

test("Sound of Falling source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenSoundOfFallingExpansionDefinitions.length, 1);
  const film = chapterNineteenSoundOfFallingExpansionDefinitions[0];
  assert.equal(film.id, "scenario_sound_of_falling_2025");
  assert.equal(film.title, "Sound of Falling");
  assert.equal(film.originalTitle, "In die Sonne schauen");
  assert.equal(film.year, 2025);
  assert.equal(film.runtimeMins, 149);
  assert.deepEqual(film.directors, ["Mascha Schilinski"]);
  assert.match(film.scenarioType, /cannes_joint_jury_prize/);
  assert.match(film.scenarioType, /34_day_shoot/);
  assert.match(film.scenarioType, /alexa_mini/);
  assert.match(film.scenarioType, /vintage_cooke_s2_s3/);
  assert.match(film.scenarioType, /ten_month_edit/);
  assert.ok(film.premise.includes("Cannes lists the Competition version at 149 minutes"));
  assert.ok(film.premise.includes("filmportal.de lists a 154-minute DCP"));
  assert.ok(film.premise.includes("34 shooting days"));
  assert.ok(film.premise.includes("€250,000"));
  assert.ok(film.premise.includes("ARRI Alexa Mini"));
  assert.ok(film.premise.includes("vintage Cooke S2/S3 lenses rehoused by TLS"));
  assert.ok(film.premise.includes("Sony FX6"));
  assert.ok(film.premise.includes("Super 16 zoom lenses"));
  assert.ok(film.premise.includes("wanted to shoot 16mm"));
  assert.ok(film.premise.includes("nearly ten months"));
  assert.ok(film.premise.includes("around six months before shooting"));
  assert.ok(film.premise.includes("does not establish the complete final budget"));
  assert.ok(film.learningGoals.length >= 50);
  assert.ok(film.phases.length >= 28);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.requiredChoicesSeed.screenplay.includes("cannes_dcp_version_provenance"));
  assert.ok(film.requiredChoicesSeed.camera.includes("alexa_mini_primary"));
  assert.ok(film.requiredChoicesSeed.editing.includes("near_ten_month_restructure"));
  assert.ok(film.requiredChoicesSeed.sound.includes("sound_present_from_writing"));
});

test("Sound of Falling expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenSoundOfFallingExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_sound_of_falling_2025");
  const twice = mergeChapterNineteenSoundOfFallingExpansion(once);
  assert.equal(twice.length, 1);
});

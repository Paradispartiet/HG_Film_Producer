import assert from "node:assert/strict";
import test from "node:test";

import { chapterElevenJazzSingerExpansionDefinitions } from "./chapterElevenJazzSingerExpansion.js";

test("Chapter 11 materializes The Jazz Singer as a Vitaphone part-talkie Production Case", () => {
  assert.equal(chapterElevenJazzSingerExpansionDefinitions.length, 1);
  const jazzSinger = chapterElevenJazzSingerExpansionDefinitions[0];
  assert.equal(jazzSinger.id, "scenario_the_jazz_singer_1927");
  assert.equal(jazzSinger.title, "The Jazz Singer");
  assert.equal(jazzSinger.year, 1927);
  assert.equal(jazzSinger.runtimeMins, 90);
  assert.equal(jazzSinger.scenarioType, "warner_vitaphone_part_talkie_disc_sync_theatre_conversion_representation_ethics_production");
  assert.ok(jazzSinger.premise.includes("part-talkie"));
  assert.ok(jazzSinger.premise.includes("16-inch discs"));
  assert.ok(jazzSinger.premise.includes("George R. Groves"));
  assert.ok(jazzSinger.premise.includes("Nugent Slaughter"));
  assert.ok(jazzSinger.premise.includes("blackface"));
  assert.ok(jazzSinger.premise.includes("Jewish"));
  assert.ok(jazzSinger.requiredChoicesSeed.screenplay.includes("part_talkie_structure_not_full_dialogue"));
  assert.ok(jazzSinger.requiredChoicesSeed.editing.includes("disc_reel_sync_version_control"));
  assert.ok(jazzSinger.requiredChoicesSeed.sound.includes("vitaphone_sound_on_disc_sync"));
  assert.ok(jazzSinger.learningGoals.some((goal) => goal.includes("sound-on-disc")));
  assert.ok(jazzSinger.learningGoals.some((goal) => goal.includes("first talkie")));
  assert.ok(jazzSinger.learningGoals.some((goal) => goal.includes("blackface")));
  assert.ok(jazzSinger.learningGoals.some((goal) => goal.includes("Jewish")));
  assert.ok(jazzSinger.learningGoals.length >= 9);
  assert.ok(jazzSinger.phases.length >= 9);
});

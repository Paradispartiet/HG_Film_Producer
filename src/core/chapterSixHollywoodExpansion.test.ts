import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixHollywoodExpansionDefinitions } from "./chapterSixHollywoodExpansion.js";

test("Chapter 6 materializes Gold Rush, The Crowd, The Cheat, It and Wings as distinct Hollywood-system cases", () => {
  assert.equal(chapterSixHollywoodExpansionDefinitions.length, 5);

  const goldRush = chapterSixHollywoodExpansionDefinitions.find((item) => item.id === "scenario_the_gold_rush_1925");
  assert.ok(goldRush);
  assert.equal(goldRush.scenarioType, "star_producer_feature_comedy");
  assert.ok(goldRush.requiredChoicesSeed.sound.includes("exclude_1942_narration_and_score"));

  const crowd = chapterSixHollywoodExpansionDefinitions.find((item) => item.id === "scenario_the_crowd_1928");
  assert.ok(crowd);
  assert.equal(crowd.scenarioType, "studio_social_realism_production");
  assert.ok(crowd.premise.includes("two release endings"));
  assert.ok(crowd.requiredChoicesSeed.sound.includes("1981_restoration_score_not_original"));

  const cheat = chapterSixHollywoodExpansionDefinitions.find((item) => item.id === "scenario_the_cheat_1915");
  assert.ok(cheat);
  assert.equal(cheat.scenarioType, "studio_melodrama_star_style_production");
  assert.ok(cheat.requiredChoicesSeed.themes.includes("representation_ethics"));
  assert.ok(cheat.premise.includes("Hishuru Tori"));
  assert.ok(cheat.premise.includes("Burmese Haka Arakau"));

  const itFilm = chapterSixHollywoodExpansionDefinitions.find((item) => item.id === "scenario_it_1927");
  assert.ok(itFilm);
  assert.equal(itFilm.title, "It");
  assert.equal(itFilm.year, 1927);
  assert.equal(itFilm.runtimeMins, 72);
  assert.equal(itFilm.scenarioType, "star_vehicle_media_publicity_production");
  assert.equal(itFilm.sourceId, "manual_it_1927");
  assert.equal(itFilm.sourceUrl, "https://catalog.afi.com/Film/9977-IT");
  assert.equal(itFilm.directors[0], "Clarence Badger");
  assert.ok(itFilm.directors.includes("Josef von Sternberg"));
  assert.ok(itFilm.premise.includes("Paramount Famous Lasky"));
  assert.ok(itFilm.premise.includes("Cosmopolitan/Hearst"));
  assert.ok(itFilm.premise.includes("Clara Bow"));
  assert.ok(itFilm.premise.includes("Josef von Sternberg's documented additional direction during Badger's illness"));
  assert.ok(itFilm.premise.includes("not as an instruction to objectify"));
  assert.ok(itFilm.requiredChoicesSeed.screenplay.includes("media_tie_in_adaptation"));
  assert.ok(itFilm.requiredChoicesSeed.editing.includes("badger_sternberg_production_continuity"));
  assert.ok(itFilm.requiredChoicesSeed.sound.includes("silent_1927_release"));
  assert.ok(itFilm.requiredChoicesSeed.sound.includes("later_accompaniment_not_original"));
  assert.ok(itFilm.requiredChoicesSeed.themes.includes("star_system"));
  assert.ok(itFilm.learningGoals.some((goal) => goal.includes("instead of appearance scoring")));
  assert.ok(itFilm.learningGoals.length >= 6);
  assert.ok(itFilm.phases.length >= 9);

  const wings = chapterSixHollywoodExpansionDefinitions.find((item) => item.id === "scenario_wings_1927");
  assert.ok(wings);
  assert.equal(wings.title, "Wings");
  assert.equal(wings.year, 1927);
  assert.equal(wings.runtimeMins, 139);
  assert.equal(wings.scenarioType, "studio_aviation_logistics_production");
  assert.equal(wings.sourceId, "manual_wings_1927");
  assert.equal(wings.sourceUrl, "https://catalog.afi.com/Film/13362-WINGS");
  assert.ok(wings.requiredChoicesSeed.camera.includes("aerial_camera_team_coordination"));
  assert.ok(wings.requiredChoicesSeed.editing.includes("multi_unit_continuity"));
  assert.ok(wings.requiredChoicesSeed.sound.includes("1929_score_effects_release_boundary"));
  assert.ok(wings.learningGoals.some((goal) => goal.includes("different historical objects")));
  assert.ok(wings.learningGoals.length >= 6);
  assert.ok(wings.phases.length >= 9);
});

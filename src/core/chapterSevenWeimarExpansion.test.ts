import assert from "node:assert/strict";
import test from "node:test";

import { chapterSevenWeimarExpansionDefinitions } from "./chapterSevenWeimarExpansion.js";

test("Chapter 7 materializes The Last Laugh and Pandora's Box as distinct Weimar production cases", () => {
  assert.equal(chapterSevenWeimarExpansionDefinitions.length, 2);

  const lastLaugh = chapterSevenWeimarExpansionDefinitions.find((item) => item.id === "scenario_the_last_laugh_1924");
  assert.ok(lastLaugh);
  assert.equal(lastLaugh.title, "The Last Laugh");
  assert.equal(lastLaugh.originalTitle, "Der letzte Mann");
  assert.equal(lastLaugh.year, 1924);
  assert.equal(lastLaugh.runtimeMins, 90);
  assert.equal(lastLaugh.scenarioType, "kammerspielfilm_mobile_camera_production");
  assert.equal(lastLaugh.sourceId, "manual_the_last_laugh_1924");
  assert.equal(lastLaugh.sourceUrl, "https://www.filmportal.de/en/movie/der-letzte-mann_ea43d4a6d0975006e03053d50b37753d");
  assert.ok(lastLaugh.requiredChoicesSeed.camera.includes("unchained_camera_subjectivity"));
  assert.ok(lastLaugh.requiredChoicesSeed.screenplay.includes("single_intertitle_ironic_coda"));
  assert.ok(lastLaugh.requiredChoicesSeed.sound.includes("later_scores_are_version_specific"));
  assert.ok(lastLaugh.premise.includes("rather than falsely claiming"));
  assert.ok(lastLaugh.learningGoals.some((goal) => goal.includes("painted-set Expressionism of Caligari")));
  assert.ok(lastLaugh.learningGoals.length >= 6);
  assert.ok(lastLaugh.phases.length >= 9);

  const pandora = chapterSevenWeimarExpansionDefinitions.find((item) => item.id === "scenario_pandoras_box_1929");
  assert.ok(pandora);
  assert.equal(pandora.title, "Pandora's Box");
  assert.equal(pandora.originalTitle, "Die Büchse der Pandora");
  assert.equal(pandora.year, 1929);
  assert.equal(pandora.runtimeMins, 133);
  assert.equal(pandora.scenarioType, "performance_social_modernity_production");
  assert.equal(pandora.sourceId, "manual_pandoras_box_1929");
  assert.equal(pandora.sourceUrl, "https://www.filmportal.de/en/movie/die-buchse-der-pandora_ea43d4a69b2c5006e03053d50b37753d");
  assert.ok(pandora.premise.includes("Nero-Film"));
  assert.ok(pandora.premise.includes("Louise Brooks"));
  assert.ok(pandora.premise.includes("Neue Sachlichkeit"));
  assert.ok(pandora.premise.includes("without turning desirability, queerness, coercion or exploitation into player scoring"));
  assert.ok(pandora.requiredChoicesSeed.screenplay.includes("wedekind_two_play_adaptation"));
  assert.ok(pandora.requiredChoicesSeed.camera.includes("brooks_performance_centered_framing"));
  assert.ok(pandora.requiredChoicesSeed.editing.includes("german_us_reconstruction_version_control"));
  assert.ok(pandora.requiredChoicesSeed.sound.includes("1997_peer_raben_reconstruction_not_original"));
  assert.ok(pandora.requiredChoicesSeed.themes.includes("representation_ethics"));
  assert.ok(pandora.learningGoals.some((goal) => goal.includes("same-sex desire")));
  assert.ok(pandora.learningGoals.some((goal) => goal.includes("countercurrent to Expressionism")));
  assert.ok(pandora.learningGoals.length >= 6);
  assert.ok(pandora.phases.length >= 9);
});

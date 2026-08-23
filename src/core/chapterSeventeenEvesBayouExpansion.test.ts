import assert from "node:assert/strict";
import test from "node:test";

import { chapterSeventeenEvesBayouExpansionDefinitions } from "./chapterSeventeenEvesBayouExpansion.js";

test("Chapter 17 materializes Eve's Bayou as a source-first Black independent regional production case", () => {
  assert.equal(chapterSeventeenEvesBayouExpansionDefinitions.length, 1);
  const film = chapterSeventeenEvesBayouExpansionDefinitions[0];
  assert.equal(film.id, "scenario_eves_bayou_1997");
  assert.equal(film.year, 1997);
  assert.equal(film.runtimeMins, 109);
  assert.deepEqual(film.directors, ["Kasi Lemmons"]);
  assert.equal(film.sourceId, "loc_national_film_registry_eves_bayou_1997");
  assert.ok(film.scenarioType.includes("black_woman_led") && film.scenarioType.includes("louisiana") && film.scenarioType.includes("memory_subjectivity"));

  assert.ok(film.premise.includes("Kasi Lemmons") && film.premise.includes("feature-directing debut"));
  assert.ok(film.premise.includes("Amy Vincent") && film.premise.includes("Terilyn A. Shropshire") && film.premise.includes("Terence Blanchard"));
  assert.ok(film.premise.includes("Louisiana") && film.premise.includes("1962") && film.premise.includes("child-centered point of view"));
  assert.ok(film.premise.includes("contradictory recollection") && film.premise.includes("family testimony") && film.premise.includes("dreams/visions"));
  assert.ok(film.premise.includes("109 minutes") && film.premise.includes("director's-cut") && film.premise.includes("National Film Registry"));
  assert.ok(film.premise.includes("must not invent lens packages") && film.premise.includes("exact production budget"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("Black independent cinema") && goal.includes("Black woman-led authorship")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("child-centered point of view")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("competing family testimony") && goal.includes("visions")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Amy Vincent") && goal.includes("film stocks")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Terilyn A. Shropshire") && goal.includes("editorial architecture")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Terence Blanchard") && goal.includes("environmental sound")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("109 minutes") && goal.includes("downstream versions")));

  const authorship = film.phases.find((phase) => phase.id === "development_and_authorship");
  assert.ok(authorship?.player_task.includes("Lemmons") && authorship.player_task.includes("child-centered perspective"));
  const region = film.phases.find((phase) => phase.id === "louisiana_regional_world");
  assert.ok(region?.player_task.includes("regional place") && region.player_task.includes("parish schedules"));
  const camera = film.phases.find((phase) => phase.id === "subjective_cinematography");
  assert.ok(camera?.player_task.includes("Amy Vincent") && camera.player_task.includes("lens"));
  const edit = film.phases.find((phase) => phase.id === "editing_and_temporal_clarity");
  assert.ok(edit?.player_task.includes("Shropshire") && edit.player_task.includes("ambiguity"));
  const sound = film.phases.find((phase) => phase.id === "score_and_sound");
  assert.ok(sound?.player_task.includes("Blanchard") && sound.player_task.includes("hardware"));
  const release = film.phases.find((phase) => phase.id === "theatrical_version_and_legacy");
  assert.ok(release?.player_task.includes("109-minute 1997 theatrical version") && release.player_task.includes("National Film Registry"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_lens_stock_filter_or_lighting_ratio"));
  assert.ok(film.requiredChoicesSeed.editing.includes("109_min_1997_theatrical_version"));
  assert.ok(film.learningGoals.length >= 18);
  assert.ok(film.phases.length >= 10);
});

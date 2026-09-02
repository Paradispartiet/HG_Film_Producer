import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenTheSecretAgentExpansionDefinitions, mergeChapterNineteenTheSecretAgentExpansion } from "./chapterNineteenTheSecretAgentExpansion.js";

test("The Secret Agent source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenTheSecretAgentExpansionDefinitions.length, 1);
  const film = chapterNineteenTheSecretAgentExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_secret_agent_2025");
  assert.equal(film.title, "The Secret Agent");
  assert.equal(film.originalTitle, "O Agente Secreto");
  assert.equal(film.year, 2025);
  assert.equal(film.runtimeMins, 161);
  assert.deepEqual(film.directors, ["Kleber Mendonça Filho"]);
  assert.match(film.scenarioType, /cannes_best_director_best_actor/);
  assert.match(film.scenarioType, /alexa35_alexa_mini/);
  assert.match(film.scenarioType, /panavision_b_series_l_series/);
  assert.match(film.scenarioType, /ten_week_180_page_shoot/);
  assert.match(film.scenarioType, /avid_postlab_two_editor/);
  assert.ok(film.premise.includes("Cannes lists the Competition version at 158 minutes"));
  assert.ok(film.premise.includes("160 minutes 30 seconds"));
  assert.ok(film.premise.includes("180-page screenplay was photographed over ten weeks"));
  assert.ok(film.premise.includes("ALEXA 35 with older Panavision B Series anamorphic lenses"));
  assert.ok(film.premise.includes("B-camera was an ALEXA Mini"));
  assert.ok(film.premise.includes("gas station was built from scratch"));
  assert.ok(film.premise.includes("art department of roughly 30 people"));
  assert.ok(film.premise.includes("11-month editorial process"));
  assert.ok(film.premise.includes("Avid systems with PostLab"));
  assert.ok(film.premise.includes("two grading sessions"));
  assert.ok(film.premise.includes("sound editing in the Netherlands, mixing in France, grading in Germany"));
  assert.ok(film.premise.includes("late-1980s VHS city recordings"));
  assert.ok(film.learningGoals.length >= 50);
  assert.ok(film.phases.length >= 28);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.requiredChoicesSeed.screenplay.includes("cannes_bbfc_version_provenance"));
  assert.ok(film.requiredChoicesSeed.camera.includes("alexa35_alexa_mini"));
  assert.ok(film.requiredChoicesSeed.editing.includes("avid_postlab_collaboration"));
  assert.ok(film.requiredChoicesSeed.sound.includes("archive_city_sound_boundary"));
});

test("The Secret Agent expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenTheSecretAgentExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_the_secret_agent_2025");
  const twice = mergeChapterNineteenTheSecretAgentExpansion(once);
  assert.equal(twice.length, 1);
});

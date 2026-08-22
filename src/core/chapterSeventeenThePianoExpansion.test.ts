import assert from "node:assert/strict";
import test from "node:test";

import { chapterSeventeenThePianoExpansionDefinitions } from "./chapterSeventeenThePianoExpansion.js";

test("Chapter 17 materializes The Piano as a source-first transnational New Zealand production", () => {
  assert.equal(chapterSeventeenThePianoExpansionDefinitions.length, 1);
  const film = chapterSeventeenThePianoExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_piano_1993");
  assert.equal(film.year, 1993);
  assert.equal(film.runtimeMins, 121);
  assert.deepEqual(film.directors, ["Jane Campion"]);
  assert.equal(film.sourceId, "cannes_the_piano_1993");
  assert.ok(film.scenarioType.includes("transnational") && film.scenarioType.includes("new_zealand") && film.scenarioType.includes("ciby2000"));

  assert.ok(film.premise.includes("Ciby 2000") && film.premise.includes("Francis Bouygues") && film.premise.includes("creative freedom"));
  assert.ok(film.premise.includes("$9 million") && film.premise.includes("without assuming currency conversion"));
  assert.ok(film.premise.includes("Saddleback Productions") && film.premise.includes("Jan Chapman") && film.premise.includes("Alain Depardieu"));
  assert.ok(film.premise.includes("Stuart Dryburgh") && film.premise.includes("Veronika Jenet") && film.premise.includes("Andrew McAlpine") && film.premise.includes("Janet Patterson"));
  assert.ok(film.premise.includes("Karekare Beach") && film.premise.includes("Waihoroi Shortland") && film.premise.includes("Gordon Hatfield"));
  assert.ok(film.premise.includes("not as proof that every representation choice was culturally authoritative"));
  assert.ok(film.premise.includes("Māori cultural authority") && film.premise.includes("tikanga/IP"));
  assert.ok(film.premise.includes("explicit performer consent") && film.premise.includes("intimacy coordination/closed-set"));
  assert.ok(film.premise.includes("120/121") && film.premise.includes("121 for gameplay"));
  assert.ok(film.premise.includes("Do not invent camera bodies") && film.premise.includes("piano transport/rigging"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("Ciby 2000") && goal.includes("Saddleback")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("$9 million") && goal.includes("source-framed")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Holly Hunter") && goal.includes("screen test")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Karekare Beach") && goal.includes("rigging")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Māori cultural authority") && goal.includes("tikanga/IP")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("120/121-minute") && goal.includes("121 minutes canonically")));

  const culture = film.phases.find((phase) => phase.id === "cultural_context_and_advice");
  assert.ok(culture?.player_task.includes("Shortland") && culture.player_task.includes("Hatfield") && culture.player_task.includes("tikanga/IP"));
  const locations = film.phases.find((phase) => phase.id === "locations_and_world");
  assert.ok(locations?.player_task.includes("Karekare Beach") && locations.player_task.includes("rigging"));
  const camera = film.phases.find((phase) => phase.id === "camera_and_image");
  assert.ok(camera?.player_task.includes("camera body") && camera.player_task.includes("lenses") && camera.player_task.includes("stock"));
  const intimacy = film.phases.find((phase) => phase.id === "intimacy_and_violence");
  assert.ok(intimacy?.player_task.includes("explicit consent") && intimacy.player_task.includes("stunt/special-effects"));
  const versions = film.phases.find((phase) => phase.id === "release_versions_legacy");
  assert.ok(versions?.player_task.includes("121 minutes") && versions.player_task.includes("120-minute"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_exposure_or_lab"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recording_or_mix_hardware"));
  assert.ok(film.learningGoals.length >= 17);
  assert.ok(film.phases.length >= 11);
});

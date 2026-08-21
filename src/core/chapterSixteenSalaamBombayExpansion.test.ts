import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixteenSalaamBombayExpansionDefinitions } from "./chapterSixteenSalaamBombayExpansion.js";

test("Chapter 16 materializes Salaam Bombay! as a source-first research, workshop and Bombay-location fiction production", () => {
  assert.equal(chapterSixteenSalaamBombayExpansionDefinitions.length, 1);
  const film = chapterSixteenSalaamBombayExpansionDefinitions[0];
  assert.equal(film.id, "scenario_salaam_bombay_1988");
  assert.equal(film.year, 1988);
  assert.equal(film.runtimeMins, 114);
  assert.deepEqual(film.directors, ["Mira Nair"]);
  assert.equal(film.sourceId, "criterion_salaam_bombay_1988");
  assert.ok(film.scenarioType.includes("transnational_bombay") && film.scenarioType.includes("research_workshop") && film.scenarioType.includes("verite_fiction"));

  assert.ok(film.premise.includes("Mira Nair") && film.premise.includes("Sooni Taraporevala") && film.premise.includes("Kamathipura") && film.premise.includes("remand homes"));
  assert.ok(film.premise.includes("roughly 130") && film.premise.includes("about twenty-four") && film.premise.includes("seventeen workshop participants"));
  assert.ok(film.premise.includes("seven-week workshop") && film.premise.includes("paid a day rate"));
  assert.ok(film.premise.includes("physical exercise, mime, dance and improvisation") && film.premise.includes("scripted scenes"));
  assert.ok(film.premise.includes("constructed fiction") && film.premise.includes("not raw documentary evidence"));
  assert.ok(film.premise.includes("Sandi Sissel") && film.premise.includes("Barry Alexander Brown") && film.premise.includes("Juan Rodriguez") && film.premise.includes("L. Subramaniam") && film.premise.includes("Mitch Epstein"));
  assert.ok(film.premise.includes("Mirabai Films") && film.premise.includes("Channel Four") && film.premise.includes("Cadrage SA") && film.premise.includes("La Sept") && film.premise.includes("National Film Development Corporation") && film.premise.includes("Doordarshan"));
  assert.ok(film.premise.includes("35 mm") && film.premise.includes("1.66:1") && film.premise.includes("presentation data"));
  assert.ok(film.premise.includes("114 minutes") && film.premise.includes("115") && film.premise.includes("113") && film.premise.includes("edition/catalog variance"));
  assert.ok(film.premise.includes("Caméra d'Or") && film.premise.includes("Foreign Language Film nomination"));
  assert.ok(film.premise.includes("paid historical workshop participation") && film.premise.includes("guardianship, welfare, education, labor, privacy or safety"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("130") && goal.includes("twenty-four") && goal.includes("seventeen")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("seven-week workshop") && goal.includes("paid performance development")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("35 mm") && goal.includes("1.66:1") && goal.includes("unsupported camera/lens/stock/lab package")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("child safeguarding") && goal.includes("privacy") && goal.includes("education")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("113/114/115-minute") && goal.includes("runtime")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Avoid inventing") && goal.includes("individual compensation terms") && goal.includes("safeguarding procedures")));

  const workshop = film.phases.find((phase) => phase.id === "workshop_casting");
  assert.ok(workshop?.player_task.includes("130-person intake") && workshop.player_task.includes("twenty-four-person intensive workshop") && workshop.player_task.includes("paid day-rate"));
  const screenplay = film.phases.find((phase) => phase.id === "screenplay");
  assert.ok(screenplay?.player_task.includes("research") && screenplay.player_task.includes("story construction") && screenplay.player_task.includes("scripted scenes"));
  const welfare = film.phases.find((phase) => phase.id === "child_welfare");
  assert.ok(welfare?.player_task.includes("guardianship") && welfare.player_task.includes("education") && welfare.player_task.includes("privacy") && welfare.player_task.includes("safety"));
  const camera = film.phases.find((phase) => phase.id === "cinematography");
  assert.ok(camera?.player_task.includes("Sandi Sissel") && camera.player_task.includes("35mm/1.66") && camera.player_task.includes("unsupported camera, lens, stock"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_body_lens_stock_focal_map_exposure_or_lab_recipe"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_console_or_mix_hardware"));
  assert.ok(film.learningGoals.length >= 16);
  assert.ok(film.phases.length >= 10);
});
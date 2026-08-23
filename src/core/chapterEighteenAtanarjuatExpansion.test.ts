import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenAtanarjuatExpansionDefinitions } from "./chapterEighteenAtanarjuatExpansion.js";

test("Chapter 18 materializes Atanarjuat as a source-first Inuit community production case", () => {
  assert.equal(chapterEighteenAtanarjuatExpansionDefinitions.length, 1);
  const film = chapterEighteenAtanarjuatExpansionDefinitions[0];
  assert.equal(film.id, "scenario_atanarjuat_the_fast_runner_2001");
  assert.equal(film.year, 2001);
  assert.equal(film.runtimeMins, 172);
  assert.deepEqual(film.directors, ["Zacharias Kunuk"]);
  assert.equal(film.sourceId, "isuma_atanarjuat_presskit");
  assert.ok(film.scenarioType.includes("inuit_community_owned") && film.scenarioType.includes("digital_betacam"));

  assert.ok(film.premise.includes("eight Igloolik elders") && film.premise.includes("five-writer team"));
  assert.ok(film.premise.includes("90% of the technical crew") && film.premise.includes("first-time trainees"));
  assert.ok(film.premise.includes("six months") && film.premise.includes("1999"));
  assert.ok(film.premise.includes("horizontal") && film.premise.includes("consensus"));
  assert.ok(film.premise.includes("16:9 Digital Betacam") && film.premise.includes("35mm"));
  assert.ok(film.premise.includes("Digital Film Group"));
  assert.ok(film.premise.includes("William Parry") && film.premise.includes("1822-23"));
  assert.ok(film.premise.includes("Caméra d'or"));
  assert.ok(film.premise.includes("Do not invent exact budget"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("eight elders") && goal.includes("five-writer")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("90% Inuit technical crew")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("six-month 1999")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Digital Betacam 16:9")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Digital Film Group") && goal.includes("35mm")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("James Ungalaaq") && goal.includes("Atuat Akkitirq")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("drama") || goal.includes("dramatic")));

  const oral = film.phases.find((phase) => phase.id === "oral_history_research");
  assert.ok(oral?.player_task.includes("eight recorded elder accounts") && oral.player_task.includes("verbatim"));
  const community = film.phases.find((phase) => phase.id === "community_production_structure");
  assert.ok(community?.player_task.includes("90% Inuit technical crew") && community.player_task.includes("trainees"));
  const camera = film.phases.find((phase) => phase.id === "digital_betacam_camera");
  assert.ok(camera?.label.includes("16:9 Digital Betacam") && camera.player_task.includes("camera body"));
  const craft = film.phases.find((phase) => phase.id === "craft_reconstruction");
  assert.ok(craft?.player_task.includes("elders") && craft.player_task.includes("historical references"));
  const transfer = film.phases.find((phase) => phase.id === "digital_to_film_transfer");
  assert.ok(transfer?.player_task.includes("Digital Film Group") && transfer.player_task.includes("pipeline"));

  assert.ok(film.requiredChoicesSeed.screenplay.includes("eight_elder_oral_history_research"));
  assert.ok(film.requiredChoicesSeed.camera.includes("digital_betacam_16_9_acquisition"));
  assert.ok(film.learningGoals.length >= 22);
  assert.ok(film.phases.length >= 12);
});

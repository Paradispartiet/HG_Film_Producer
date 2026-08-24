import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenSlumdogMillionaireExpansionDefinitions } from "./chapterEighteenSlumdogMillionaireExpansion.js";

test("Chapter 18 materializes Slumdog Millionaire as a source-first mobile hybrid SI-2K and 35mm production case", () => {
  assert.equal(chapterEighteenSlumdogMillionaireExpansionDefinitions.length, 1);
  const film = chapterEighteenSlumdogMillionaireExpansionDefinitions[0];
  assert.equal(film.id, "scenario_slumdog_millionaire_2008");
  assert.equal(film.year, 2008);
  assert.equal(film.runtimeMins, 120);
  assert.deepEqual(film.directors, ["Danny Boyle", "Loveleen Tandan"]);
  assert.equal(film.sourceId, "silicon_imaging_slumdog_2009");
  assert.ok(film.scenarioType.includes("si2k_mini") && film.scenarioType.includes("35mm_hybrid") && film.scenarioType.includes("cineform_raw"));

  assert.ok(film.premise.includes("MiniDV") && film.premise.includes("SI-2K Mini"));
  assert.ok(film.premise.includes("gigabit Ethernet") && film.premise.includes("CineForm RAW"));
  assert.ok(film.premise.includes("laptop/backpack") && film.premise.includes("child height"));
  assert.ok(film.premise.includes("multiple 35mm stocks") && film.premise.includes("most night photography stayed on pushed 35mm"));
  assert.ok(film.premise.includes("heat, dust") && film.premise.includes("assistants needed training"));
  assert.ok(film.premise.includes("two to three hours per day") && film.premise.includes("RAID5") && film.premise.includes("England"));
  assert.ok(film.premise.includes("MPC in London") && film.premise.includes("Jean-Clément Soret"));
  assert.ok(film.premise.includes("AFI FEST credits Danny Boyle and Loveleen Tandan") && film.premise.includes("AFI's catalogue lists Boyle"));
  assert.ok(film.premise.includes("120-minute") && film.premise.includes("116 minutes") && film.premise.includes("110"));
  assert.ok(film.premise.includes("Do not invent a single digital-versus-film percentage"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("CineForm RAW") && goal.includes("uncompressed")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("laptop/backpack") && goal.includes("child height")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("most night photography") && goal.includes("35mm")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("RAID5") && goal.includes("England")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Danny Boyle/Loveleen Tandan") && goal.includes("credit")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("120 minutes") && goal.includes("116") && goal.includes("110")));

  const format = film.phases.find((phase) => phase.id === "format_map");
  assert.ok(format?.player_task.includes("SI-2K") && format.player_task.includes("35mm"));
  const data = film.phases.find((phase) => phase.id === "data_daily");
  assert.ok(data?.player_task.includes("two-to-three hours") && data.player_task.includes("RAID5") && data.player_task.includes("England"));
  const grade = film.phases.find((phase) => phase.id === "cross_format_grade");
  assert.ok(grade?.player_task.includes("MPC") && grade.player_task.includes("Jean-Clément Soret") && grade.player_task.includes("photochemical"));
  const credit = film.phases.find((phase) => phase.id === "credit_boundary");
  assert.ok(credit?.player_task.includes("AFI") && credit.player_task.includes("AFI FEST") && credit.player_task.includes("Tandan"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_false_all_digital_claim"));
  assert.ok(film.requiredChoicesSeed.editing.includes("raid5_backup_to_england"));
  assert.ok(film.requiredChoicesSeed.sound.includes("mumbai_live_sync_sound"));
  assert.ok(film.learningGoals.length >= 28);
  assert.ok(film.phases.length >= 18);
});

import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenAttackOfTheClonesExpansionDefinitions } from "./chapterEighteenAttackOfTheClonesExpansion.js";

test("Chapter 18 materializes Attack of the Clones as a source-first all-digital 24p blockbuster production case", () => {
  assert.equal(chapterEighteenAttackOfTheClonesExpansionDefinitions.length, 1);
  const film = chapterEighteenAttackOfTheClonesExpansionDefinitions[0];
  assert.equal(film.id, "scenario_star_wars_episode_ii_attack_of_the_clones_2002");
  assert.equal(film.year, 2002);
  assert.equal(film.runtimeMins, 142);
  assert.deepEqual(film.directors, ["George Lucas"]);
  assert.equal(film.sourceId, "lucasfilm_attack_clones_digital_2022");
  assert.ok(film.scenarioType.includes("24p_hd") && film.scenarioType.includes("f900"));

  assert.ok(film.premise.includes("first major blockbuster") && film.premise.includes("24p high-definition"));
  assert.ok(film.premise.includes("serial numbers 00001-00004") && film.premise.includes("about a week before principal photography"));
  assert.ok(film.premise.includes("two on main unit") && film.premise.includes("two on second unit"));
  assert.ok(film.premise.includes("6-27mm") && film.premise.includes("9.5-105mm"));
  assert.ok(film.premise.includes("source tension around physical film backup") && film.premise.includes("Mix article"));
  assert.ok(film.premise.includes("safety copies were recorded in real time") && film.premise.includes("same day"));
  assert.ok(film.premise.includes("Tunisia, Italy and Spain"));
  assert.ok(film.premise.includes("more than 2,000 visual-effects shots") && film.premise.includes("fully digital Yoda"));
  assert.ok(film.premise.includes("45 hours per reel") && film.premise.includes("more than two months"));
  assert.ok(film.premise.includes("roughly 120 people") && film.premise.includes("strobing problem"));
  assert.ok(film.premise.includes("142-minute") && film.premise.includes("143-minute"));
  assert.ok(film.premise.includes("Do not invent an exact universal claim of 'first digital feature'"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("first major blockbuster") && goal.includes("first digital feature")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("00001-00004") && goal.includes("about a week")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("backup-source discrepancy") && goal.includes("Mix")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("real-time safety copies") && goal.includes("synchronization")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("more than 2,000 VFX shots") && goal.includes("digital characters")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("45-hours-per-reel") && goal.includes("two-month")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("yellow silk moire") && goal.includes("strobing")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("142 minutes") && goal.includes("143-minute")));

  const camera = film.phases.find((phase) => phase.id === "camera_r_and_d");
  assert.ok(camera?.player_task.includes("Sony") && camera.player_task.includes("Panavision") && camera.player_task.includes("about a week"));
  const backup = film.phases.find((phase) => phase.id === "backup_boundary");
  assert.ok(backup?.player_task.includes("Lucasfilm") && backup.player_task.includes("Mix") && backup.player_task.includes("35mm"));
  const sync = film.phases.find((phase) => phase.id === "safety_copy_sync");
  assert.ok(sync?.player_task.includes("real-time backup") && sync.player_task.includes("synchronization"));
  const vfx = film.phases.find((phase) => phase.id === "ilm_pipeline");
  assert.ok(vfx?.player_task.includes("2,000") && vfx.player_task.includes("miniatures") && vfx.player_task.includes("digital characters"));
  const costume = film.phases.find((phase) => phase.id === "costume_hd_response");
  assert.ok(costume?.player_task.includes("moire") && costume.player_task.includes("schedule"));
  const filmout = film.phases.find((phase) => phase.id === "filmout_release");
  assert.ok(filmout?.player_task.includes("film-out") && filmout.player_task.includes("digital-projection"));

  assert.ok(film.requiredChoicesSeed.camera.includes("all_digital_24p_hd_capture"));
  assert.ok(film.requiredChoicesSeed.camera.includes("backup_source_boundary"));
  assert.ok(film.requiredChoicesSeed.editing.includes("same_day_editorial_feedback"));
  assert.ok(film.requiredChoicesSeed.editing.includes("filmout_distribution_bridge"));
  assert.ok(film.learningGoals.length >= 25);
  assert.ok(film.phases.length >= 16);
});

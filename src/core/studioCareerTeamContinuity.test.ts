import assert from "node:assert/strict";
import { test } from "node:test";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { applyProducerPriority } from "./applyProducerPriority.js";
import { describeTeamContinuity, getTeamContinuity } from "./studioCareerTeamContinuity.js";
import type { ShootDayResult } from "../domain/shoot.js";

const completed = { takeQuality: 60, completedSceneIds: ["scene_1"], delayedSceneIds: [] } as unknown as ShootDayResult;
const actorConflict = { type: "conflict", possibleUpside: false } as const;
const cameraDiscovery = { type: "inspiration", possibleUpside: true } as const;

test("an unfinished creative conversation changes the existing support needed on a later opportunity", () => {
  const yesterday = applyProducerPriority(completed, actorConflict, "crew_coordination").summary;
  const followUp = getTeamContinuity({
    selectedEventId: "production_event_actor_conflict", producerPrioritySummary: yesterday
  }, cameraDiscovery);
  assert.ok(followUp);
  assert.equal(followUp.previousPriorityId, "crew_coordination");
  assert.equal(followUp.previousNeedId, "performance_trust");
  assert.equal(followUp.shiftedPriority, true);
  assert.equal(followUp.recommendedId, "performance_trust");
  const supported = applyProducerPriority(completed, cameraDiscovery, "performance_trust", followUp.recommendedId);
  const missed = applyProducerPriority(completed, cameraDiscovery, "story_clarity", followUp.recommendedId);
  assert.equal(supported.summary.takeQualityDelta, 8);
  assert.equal(missed.summary.takeQualityDelta, 2);
  for (const language of FILMWORK_LANGUAGES) {
    const dialogue = describeTeamContinuity(language, followUp);
    assert.ok(dialogue.summary.length > 40);
    assert.ok((dialogue.followUp?.length ?? 0) > 40);
  }
});

test("helpful choices are remembered without an extra bonus or new scoring system", () => {
  const previous = applyProducerPriority(completed, actorConflict, "performance_trust").summary;
  const followUp = getTeamContinuity({ selectedEventId: "production_event_actor_conflict", producerPrioritySummary: previous }, cameraDiscovery);
  assert.ok(followUp);
  assert.equal(followUp.previousWasMatched, true);
  assert.equal(followUp.shiftedPriority, false);
  assert.equal(followUp.recommendedId, "story_clarity");
  assert.equal(applyProducerPriority(completed, cameraDiscovery, "story_clarity", followUp.recommendedId).summary.takeQualityDelta, 8);
  for (const language of FILMWORK_LANGUAGES) {
    assert.equal(describeTeamContinuity(language, followUp).followUp, undefined);
  }
});

test("emergencies take precedence over yesterday's unresolved creative work", () => {
  const previous = applyProducerPriority(completed, actorConflict, "story_clarity").summary;
  const context = { selectedEventId: "production_event_actor_conflict", producerPrioritySummary: previous };
  for (const event of [
    { type: "weather", possibleUpside: false },
    { type: "location", possibleUpside: false },
    { type: "technical", possibleUpside: false }
  ] as const) {
    const followUp = getTeamContinuity(context, event);
    assert.equal(followUp?.shiftedPriority, false);
    assert.equal(followUp?.recommendedId, "crew_coordination");
  }
});

test("interrupted days cannot promise unearned continuity, and older saves remain safe", () => {
  const prior = applyProducerPriority({ ...completed, completedSceneIds: [] }, actorConflict, "crew_coordination").summary;
  const context = getTeamContinuity({ selectedEventId: "production_event_actor_conflict", producerPrioritySummary: prior }, cameraDiscovery);
  assert.equal(context?.previousWasInterrupted, true);
  assert.equal(context?.shiftedPriority, false);
  assert.equal(context?.recommendedId, "story_clarity");
  assert.equal(getTeamContinuity({ selectedEventId: "production_event_actor_conflict" }, cameraDiscovery), undefined);
  assert.equal(getTeamContinuity({ producerPrioritySummary: prior }, cameraDiscovery), undefined);
  assert.equal(getTeamContinuity(undefined, cameraDiscovery), undefined);
});

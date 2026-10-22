import assert from "node:assert/strict";
import { test } from "node:test";
import { applyProducerPriority } from "./applyProducerPriority.js";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { getOnSetConversation } from "./studioCareerOnSetDialogue.js";
import { getOnSetProducerAction } from "./studioCareerOnSetProducerActions.js";
import {
  getStudioCareerEditingHandoff,
  STUDIO_CAREER_EDITING_HANDOFF_COPY
} from "./studioCareerEditingHandoff.js";
import type { ShootDayResult } from "../domain/shoot.js";

const recordedDay = { takeQuality: 60, completedSceneIds: ["scene_1"], delayedSceneIds: [] } as unknown as ShootDayResult;
const response = applyProducerPriority(recordedDay, { type: "conflict", possibleUpside: false }, "performance_trust").summary;

test("the edit-room handoff replays the real last producer action in all four languages", () => {
  const days = [
    { selectedEventId: "production_event_bad_weather", practicalActionVersion: 2 as const, producerPrioritySummary: response },
    { selectedEventId: "production_event_actor_conflict", practicalActionVersion: 2 as const, producerPrioritySummary: response }
  ];
  for (const language of FILMWORK_LANGUAGES) {
    const handoff = getStudioCareerEditingHandoff(language, days);
    assert.equal(handoff?.dayNumber, 2);
    assert.equal(handoff?.action, getOnSetProducerAction(language, "production_event_actor_conflict", "performance_trust", 2));
    assert.equal(handoff?.teamResponse, getOnSetConversation(language, "production_event_actor_conflict", "performance_trust", response, 2)?.teamResponse);
    const copy = STUDIO_CAREER_EDITING_HANDOFF_COPY[language];
    for (const value of [copy.heading, copy.introduction, copy.averageTake(62), copy.dayLabel(2), copy.crewResponse, copy.limits]) {
      assert.ok(value.trim().length > 0, "Missing localized edit handoff");
    }
  }
});

test("legacy and v1 reports never acquire a later invented concrete producer action", () => {
  const event = "production_event_camera_breakthrough";
  const historicV1 = getStudioCareerEditingHandoff("nb", [{ selectedEventId: event, practicalActionVersion: 1, producerPrioritySummary: response }]);
  const unversioned = getStudioCareerEditingHandoff("nb", [{ selectedEventId: event, producerPrioritySummary: response }]);
  const newV2 = getStudioCareerEditingHandoff("nb", [{ selectedEventId: event, practicalActionVersion: 2, producerPrioritySummary: response }]);
  assert.equal(historicV1?.action, unversioned?.action);
  assert.notEqual(newV2?.action, historicV1?.action);
  assert.equal(newV2?.action, getOnSetProducerAction("nb", event, "performance_trust", 2));
});

test("the handoff tolerates unknown and missing legacy producer data without inventing a choice", () => {
  assert.equal(getStudioCareerEditingHandoff("nb", []), undefined);
  assert.equal(getStudioCareerEditingHandoff("nb", [{}]), undefined);
  assert.equal(getStudioCareerEditingHandoff("nb", [{ selectedEventId: "unknown", producerPrioritySummary: response }]), undefined);
  assert.equal(getStudioCareerEditingHandoff("nb", [
    { selectedEventId: "production_event_bad_weather", producerPrioritySummary: response },
    { selectedEventId: "production_event_actor_conflict" }
  ])?.dayNumber, 1);
});

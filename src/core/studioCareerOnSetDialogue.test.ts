import assert from "node:assert/strict";
import { test } from "node:test";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { PRODUCER_PRIORITY_IDS, applyProducerPriority } from "./applyProducerPriority.js";
import { getOnSetConversation, ON_SET_DIALOGUE_COPY, ON_SET_EVENT_IDS } from "./studioCareerOnSetDialogue.js";
import type { ShootDayResult } from "../domain/shoot.js";

const day = {
  takeQuality: 60, completedSceneIds: ["scene_1"], delayedSceneIds: []
} as unknown as ShootDayResult;

test("every playable production event has a meaningful four-language team conversation", () => {
  for (const language of FILMWORK_LANGUAGES) {
    for (const eventId of ON_SET_EVENT_IDS) {
      const summary = applyProducerPriority(day, { type: "conflict", possibleUpside: false }, "performance_trust").summary;
      const scene = getOnSetConversation(language, eventId, "performance_trust", summary);
      assert.ok(scene, `${language}: ${eventId}`);
      assert.ok(scene.concern.length > 35);
      assert.ok(scene.reply.length > 35);
      assert.ok(scene.teamResponse.length > 20);
      assert.ok(scene.lesson.length > 20);
    }
    assert.ok(ON_SET_DIALOGUE_COPY[language].heading.length > 3);
  }
});

test("changing producer priority changes the spoken decision, using the real outcome", () => {
  const event = { type: "conflict", possibleUpside: false } as const;
  const good = applyProducerPriority(day, event, "performance_trust").summary;
  const other = applyProducerPriority(day, event, "crew_coordination").summary;
  const goodText = getOnSetConversation("nb", "production_event_actor_conflict", "performance_trust", good);
  const otherText = getOnSetConversation("nb", "production_event_actor_conflict", "crew_coordination", other);
  assert.notEqual(goodText?.reply, otherText?.reply);
  assert.notEqual(goodText?.teamResponse, otherText?.teamResponse);
  assert.equal(good.approachFits, true);
  assert.equal(other.approachFits, false);
  assert.equal(good.takeQualityDelta, 8);
  assert.equal(other.takeQualityDelta, 2);
});

test("a stopped day never gives fictional successful footage, and legacy event ids remain safe", () => {
  const result = applyProducerPriority({ ...day, completedSceneIds: [] }, { type: "weather", possibleUpside: false }, "crew_coordination").summary;
  const dialogue = getOnSetConversation("en", "production_event_bad_weather", "crew_coordination", result);
  assert.equal(result.interrupted, true);
  assert.match(dialogue?.teamResponse ?? "", /stop/i);
  assert.equal(result.takeQualityDelta, 0);
  assert.equal(getOnSetConversation("en", "unrecognized_old_event", PRODUCER_PRIORITY_IDS[0], result), undefined);
});

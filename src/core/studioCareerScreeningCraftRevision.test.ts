import assert from "node:assert/strict";
import test from "node:test";
import { asFilmProjectId } from "../domain/ids.js";
import type { TestScreeningResult } from "../domain/post.js";
import {
  SCREENING_CRAFT_REVISION_COPY,
  selectScreeningCraftAlternatives
} from "./studioCareerScreeningCraftRevision.js";

function measure(clarity: number, pacing: number, emotion: number, hook: number): TestScreeningResult {
  return {
    projectId: asFilmProjectId("sound_music"),
    clarityScore: clarity, pacingScore: pacing, emotionScore: emotion,
    audienceHookScore: hook, confusionRisk: 25, recommendedChanges: [], notes: []
  };
}

test("recommendations rank projected gains on the current weakest audience measure", () => {
  const current = measure(30, 70, 65, 60);
  const choices = [
    { id: "weak", costDelta: -30, result: measure(31, 95, 90, 90) },
    { id: "strong", costDelta: 40, result: measure(43, 50, 55, 58) },
    { id: "middle", costDelta: 0, result: measure(37, 80, 80, 75) }
  ];
  assert.deepEqual(selectScreeningCraftAlternatives(current, choices).map(x => x.id), ["strong", "middle"]);
  assert.equal(selectScreeningCraftAlternatives(measure(80, 80, 30, 80), choices, 1)[0]?.id, "weak");
  assert.deepEqual(selectScreeningCraftAlternatives(current, choices, 0), []);
});

test("all real sound and music options have player-facing names in four languages", () => {
  const ids = [
    "sound_offscreen_threat", "sound_dialogue_clarity", "sound_city_ambience",
    "sound_subjective_perspective", "sound_silence_tension", "sound_practical_location",
    "music_recurring_motif", "music_minimal_score", "music_emotional_theme",
    "music_rhythmic_pulse", "music_period_texture", "music_no_score_realism"
  ];
  for (const locale of ["nb", "en", "fr", "pt"] as const) {
    const copy = SCREENING_CRAFT_REVISION_COPY[locale];
    assert.ok(copy.heading.length > 12);
    assert.ok(copy.note.length > 40);
    for (const id of ids) { const name = copy.names[id]; assert.ok(name && name.length >= 5, `${locale}: ${id}`); }
  }
});

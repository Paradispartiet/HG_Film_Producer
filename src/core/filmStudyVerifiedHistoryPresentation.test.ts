import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import {
  FILM_HISTORY_PRESENTATION_ROWS,
  presentVerifiedFilmHistoryChoice,
  presentVerifiedFilmHistoryChoiceSummary,
  presentVerifiedFilmHistoryText,
} from "./filmStudyVerifiedHistoryPresentation.js";

const scenarioIds = [
  "scenario_12_angry_men_1957",
  "scenario_the_machinist_2004",
  "scenario_the_lives_of_others_2006",
  "scenario_lost_in_translation_2003",
  "scenario_bicycle_thieves_1948",
  "scenario_vertigo_1958",
  "scenario_breathless_1960",
  "scenario_the_400_blows_1959",
  "scenario_the_shining_1980",
] as const;
const source = readFileSync("src/ui/data/scenarioFilmStudyMap.ts", "utf8");
const panel = readFileSync("src/ui/components/ScenarioFilmStudyPanel.tsx", "utf8");

test("history exact-text translations are grounded in unchanged canonical source profiles", () => {
  for (const scenarioId of scenarioIds) {
    const start = source.indexOf(`  ${scenarioId}: {`);
    assert.ok(start > 0, `missing canonical profile: ${scenarioId}`);
    const end = source.indexOf("\n  },", start);
    assert.ok(end > start, `missing closing source profile: ${scenarioId}`);
    const profile = source.slice(start, end);
    const rows = FILM_HISTORY_PRESENTATION_ROWS[scenarioId];
    assert.equal(rows.length, scenarioId === "scenario_12_angry_men_1957" || scenarioId === "scenario_vertigo_1958" || scenarioId === "scenario_the_shining_1980" ? 17 : (scenarioId === "scenario_the_400_blows_1959" ? 16 : 15));
    assert.equal(new Set(rows.map((row) => row[0])).size, rows.length, `duplicate exact claims: ${scenarioId}`);
    for (const row of rows) {
      assert.ok(profile.includes(JSON.stringify(row[0])), `${scenarioId}: source claim changed or missing: ${row[0]}`);
      for (const language of FILMWORK_LANGUAGES) {
        const rendered = presentVerifiedFilmHistoryText(language, scenarioId, row[0]);
        assert.ok(rendered.trim(), `${language}: ${scenarioId}`);
        assert.equal(rendered, language === "en" ? row[0] : row[language === "nb" ? 1 : language === "fr" ? 2 : 3]);
        if (language !== "en") assert.notEqual(rendered, row[0], `${scenarioId}: ${language}: ${row[0]}`);
      }
    }
  }
});

test("only exact matching history options are translated; donor options and unknown claims fail closed", () => {
  for (const scenarioId of scenarioIds) {
    const rows = FILM_HISTORY_PRESENTATION_ROWS[scenarioId];
    const period = rows[0];
    const moment = rows[5];
    assert.ok(period && moment);
    const canonicalOption = `${period[0]}: ${moment[0]}`;
    for (const language of FILMWORK_LANGUAGES) {
      const index = language === "en" ? 0 : language === "nb" ? 1 : language === "fr" ? 2 : 3;
      assert.equal(
        presentVerifiedFilmHistoryChoice(language, scenarioId, canonicalOption),
        `${period[index]}: ${moment[index]}`,
      );
      assert.equal(presentVerifiedFilmHistoryChoice(language, scenarioId, "Another film: unreviewed donor text"), "Another film: unreviewed donor text");
      assert.equal(presentVerifiedFilmHistoryText(language, scenarioId, "Unreviewed historical claim"), "Unreviewed historical claim");
    }
  }
  assert.equal(presentVerifiedFilmHistoryText("nb", "other_scenario", "Psychological thriller"), "Psychological thriller");
});

test("generated source-verified answer feedback has EN/NB/FR/PT display text for the reviewed films", () => {
  const feedback = [
    "This connects the film's historical position directly to its documented production method.",
    "This is a real film-historical explanation, but it belongs to a different case and production tradition.",
    "This places the film inside the wrong historical and technical system.",
  ];
  for (const id of scenarioIds) for (const value of feedback) for (const language of FILMWORK_LANGUAGES) {
    const translated = presentVerifiedFilmHistoryText(language, id, value);
    assert.ok(translated.trim());
    if (language !== "en") assert.notEqual(translated, value, `${id}: ${language}: ${value}`);
  }
});

test("active study panel uses presentation for profile, learning feedback and coverage notes", () => {
  assert.match(panel, /presentVerifiedFilmHistoryText\(language, scenario\.id, historyProfile\.historyQuestion\)/);
  assert.match(panel, /presentVerifiedFilmHistoryChoice\(language, scenario\.id, choice\.label, choice\.quality\)/);
  assert.match(panel, /presentVerifiedFilmHistoryChoiceSummary\(language, scenario\.id, choice\.label, choice\.quality\)/);
  assert.match(panel, /<details className="scenario-history-choice-expand">/);
  assert.match(panel, /<p>\{completeExplanation\}<\/p>/);
  assert.match(panel, /presentVerifiedFilmHistoryText\(language, scenario\.id, selectedHistoryChoice\.feedback\)/);
  assert.match(panel, /presentVerifiedFilmHistoryText\(language, scenarioId, item\.note\)/);
  for (const key of ["before", "moment", "after", "period"]) {
    assert.match(panel, new RegExp(`presentVerifiedFilmHistoryText\\(language, scenario\\.id, historyProfile\\.${key}\\)`));
  }
  assert.doesNotMatch(panel, /<strong>\{historyProfile\.historyQuestion\}<\/strong>/);
  assert.doesNotMatch(panel, /\{choice\.label\}/);
});


test("unreviewed and changed distractors retain canonical text without affecting the answer grades", () => {
  for (const scenarioId of scenarioIds) {
    const unknown = "Unknown donor: unverified historical account";
    for (const language of FILMWORK_LANGUAGES) {
      assert.equal(presentVerifiedFilmHistoryChoice(language, scenarioId, unknown, "partial"), unknown);
      assert.equal(presentVerifiedFilmHistoryChoice(language, scenarioId, unknown, "miss"), unknown);
      assert.equal(presentVerifiedFilmHistoryChoice(language, scenarioId, unknown, "match"), unknown);
    }
  }
});

test("source-locked brief option labels are complete for all four languages, with fail-closed drift", () => {
  for (const scenarioId of scenarioIds) {
    const rows = FILM_HISTORY_PRESENTATION_ROWS[scenarioId];
    const period = rows[0];
    const moment = rows[5];
    assert.ok(period && moment);
    const correct = `${period[0]}: ${moment[0]}`;
    for (const language of FILMWORK_LANGUAGES) {
      const expected = period[language === "en" ? 0 : language === "nb" ? 1 : language === "fr" ? 2 : 3];
      assert.equal(presentVerifiedFilmHistoryChoiceSummary(language, scenarioId, correct, "match"), expected);
      assert.equal(presentVerifiedFilmHistoryChoiceSummary(language, scenarioId, correct + " revised", "match"), undefined);
      assert.equal(presentVerifiedFilmHistoryChoiceSummary(language, scenarioId, "Unknown donor", "miss"), undefined);
    }
  }
  assert.equal(presentVerifiedFilmHistoryChoiceSummary("nb", "unknown_id", "Unknown donor", "miss"), undefined);
});

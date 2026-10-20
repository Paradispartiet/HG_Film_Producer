import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import {
  FILM_STUDY_SOURCE_COPY_ROWS,
  FILM_STUDY_SOURCE_SUPPORT_LABELS,
  presentFilmStudySourceSupport,
  presentFilmStudySourceText,
} from "./filmStudyVerificationPresentation.js";

const source = readFileSync("src/ui/data/scenarioProductionVerification.ts", "utf8");
const panel = readFileSync("src/ui/components/ScenarioFilmStudyPanel.tsx", "utf8");
const ids = ["scenario_12_angry_men_1957", "scenario_the_machinist_2004", "scenario_the_lives_of_others_2006"] as const;

test("verified source-summary and note translations are exact, independent display copies", () => {
  for (const id of ids) {
    const start = source.indexOf(`  ${id}: {`);
    assert.ok(start > 0, `verification missing ${id}`);
    const end = source.indexOf("\n  },", start);
    assert.ok(end > start, `verification malformed ${id}`);
    const exactSource = source.slice(start, end);
    const rows = FILM_STUDY_SOURCE_COPY_ROWS[id];
    assert.equal(rows.length, 4);
    assert.equal(new Set(rows.map((row) => row[0])).size, rows.length);
    for (const row of rows) {
      assert.ok(exactSource.includes(JSON.stringify(row[0])), `${id}: source text drifted: ${row[0]}`);
      for (const lang of FILMWORK_LANGUAGES) {
        const index = lang === "en" ? 0 : lang === "nb" ? 1 : lang === "fr" ? 2 : 3;
        assert.ok(row[index].trim(), `missing ${id}: ${lang}`);
        assert.equal(presentFilmStudySourceText(lang, id, row[0]), row[index]);
        if (lang !== "en") assert.notEqual(presentFilmStudySourceText(lang, id, row[0]), row[0]);
      }
    }
  }
});

test("translation keeps unseen source text and other film evidence unchanged", () => {
  for (const lang of FILMWORK_LANGUAGES) {
    assert.equal(presentFilmStudySourceText(lang, "scenario_unreviewed", "Unknown statement"), "Unknown statement");
    assert.equal(presentFilmStudySourceText(lang, ids[0], "Changed verification statement"), "Changed verification statement");
  }
});

test("metadata-area labels are presentation-only and complete across four languages", () => {
  for (const lang of FILMWORK_LANGUAGES) {
    const expected = FILM_STUDY_SOURCE_SUPPORT_LABELS[lang];
    assert.deepEqual(Object.keys(expected).sort(), ["overall", "screenplay", "cinematography", "editing", "sound"].sort());
    for (const [key, label] of Object.entries(expected)) {
      assert.ok(label.trim());
      assert.equal(presentFilmStudySourceSupport(lang, key), label);
    }
    assert.equal(presentFilmStudySourceSupport(lang, "unreviewed_area"), "unreviewed_area");
  }
});

test("active film-study source renderer translates metadata only, not citation identity", () => {
  assert.match(panel, /presentFilmStudySourceText\(language, scenario\.id, filmStudy\.verification\.summary\)/);
  assert.match(panel, /presentFilmStudySourceText\(language, scenario\.id, source\.note\)/);
  assert.match(panel, /source\.supports\.map\(\(area\) => presentFilmStudySourceSupport\(language, area\)\)/);
  assert.match(panel, /href=\{source\.url\}/);
  assert.match(panel, /\{source\.title\}/);
  assert.match(panel, /\{source\.publisher\}/);
  assert.doesNotMatch(panel, /<p>\{source\.note\}<\/p>/);
});

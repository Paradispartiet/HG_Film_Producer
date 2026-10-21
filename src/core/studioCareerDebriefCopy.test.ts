import assert from "node:assert/strict";
import test from "node:test";
import { STUDIO_CAREER_DEBRIEF_COPY } from "./studioCareerDebriefCopy.js";

const languages = ["en", "nb", "fr", "pt"] as const;

test("Studio Career production debrief has every supported language and recorded-stage label", () => {
  assert.deepEqual(Object.keys(STUDIO_CAREER_DEBRIEF_COPY), languages);
  for (const language of languages) {
    const copy = STUDIO_CAREER_DEBRIEF_COPY[language];
    for (const key of ["heading", "handoffHeading", "development", "preProduction", "shooting", "postProduction", "release", "teamQuality", "takeQuality", "lockedCut", "releaseOutcome", "netYearNote"] as const) {
      assert.ok(copy[key].length > 0, `${language} missing ${key}`);
    }
    assert.deepEqual(Object.keys(copy.developmentPaths), ["mentor", "location", "script"]);
    assert.ok(copy.netYearNote.length > 30, `${language} needs to explain the limits of attributing year-close changes`);
  }
});

test("Norwegian and English Film Two history exposes its recorded decision context", () => {
  assert.equal(STUDIO_CAREER_DEBRIEF_COPY.nb.heading, "Slik ble filmen til");
  assert.equal(STUDIO_CAREER_DEBRIEF_COPY.nb.handoffHeading, "Erfaringer fra forrige film");
  assert.equal(STUDIO_CAREER_DEBRIEF_COPY.en.handoffHeading, "What happened on the previous film");
  assert.equal(STUDIO_CAREER_DEBRIEF_COPY.nb.developmentPaths.script, "Manus");
});

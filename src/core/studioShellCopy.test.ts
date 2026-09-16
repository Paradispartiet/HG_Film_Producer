import assert from "node:assert/strict";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { STUDIO_SHELL_COPY, formatStudioMoney } from "./studioShellCopy.js";

test("Studio shell copy covers every FilmWork language", () => {
  assert.deepEqual(Object.keys(STUDIO_SHELL_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("Film Producer remains the canonical product name", () => {
  for (const language of FILMWORK_LANGUAGES) {
    assert.equal(STUDIO_SHELL_COPY[language].navigation.productTitle, "Film Producer");
  }
});

test("English shell wording preserves current visible chrome", () => {
  const copy = STUDIO_SHELL_COPY.en;
  assert.equal(copy.navigation.navigationAria, "Game navigation");
  assert.equal(copy.navigation.returnAria, "Return to Filmverket");
  assert.equal(copy.navigation.studioOffice, "Studio office");
  assert.equal(copy.header.kicker, "Studio command");
  assert.equal(copy.header.studioType, "Independent motion picture studio");
  assert.equal(copy.header.availableCapital, "Available capital");
  assert.equal(copy.header.currentPeriod, "Current period");
});

test("dynamic Studio header copy preserves the canonical year and currency value", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = STUDIO_SHELL_COPY[language];
    assert.match(copy.header.year(1974), /1974/);
    const formatted = formatStudioMoney(language, 1250000);
    assert.ok(formatted.length > 0, language);
    assert.match(formatted.replace(/\D/g, ""), /1250000/, language);
  }
});

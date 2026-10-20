import assert from "node:assert/strict";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import {
  CANONICAL_SEED_FALLBACK_TEXT,
  presentSeedFallbackText,
} from "./productionCaseSeedPresentation.js";

test("all authored generic seed fallback strings are covered on all four languages", () => {
  const fallback = [
    "Drama",
    "Treat this as an imported seed pending film-specific design",
    "Keep choices readable",
    "Focus the central conflict",
    "Use the seeded learning goals as provisional guidance",
    "Choose spaces that support the conflict",
    "Frame the player task clearly",
    "Keep story turns legible",
    "Build rhythm around consequences",
    "Support tone without overexplaining",
    "Use silence and texture as pressure",
  ] as const;
  assert.deepEqual(CANONICAL_SEED_FALLBACK_TEXT, fallback);
  for (const language of FILMWORK_LANGUAGES) {
    for (const raw of fallback) {
      const translated = presentSeedFallbackText(language, "seed_fallback", raw);
      assert.ok(translated.trim(), `${language}:${raw}`);
      assert.equal(presentSeedFallbackText("en", "seed_fallback", raw), raw);
    }
  }
});

test("localized generic seed guidance is explicit, not loose machine-style substitution", () => {
  const canonical = "Treat this as an imported seed pending film-specific design";
  assert.equal(presentSeedFallbackText("nb", "seed_fallback", canonical),
    "Behandle dette som et importert utgangspunkt som venter på filmspesifikk utforming");
  assert.equal(presentSeedFallbackText("fr", "seed_fallback", canonical),
    "Considérez cet élément importé comme provisoire, en attente d’une conception propre au film");
  assert.equal(presentSeedFallbackText("pt", "seed_fallback", canonical),
    "Trate esta base importada como provisória, até existir uma conceção específica para o filme");
});

test("production case claims and unknown source strings fail closed to untouched canonical text", () => {
  const known = "Support tone without overexplaining";
  const custom = "An editor added this precise new research claim.";
  for (const language of FILMWORK_LANGUAGES) {
    assert.equal(presentSeedFallbackText(language, "production_case", known), known);
    assert.equal(presentSeedFallbackText(language, "seed_fallback", custom), custom);
    assert.equal(presentSeedFallbackText(language, "production_case", custom), custom);
  }
});

test("presentation is pure and does not alter canonical target identity", () => {
  const source = ["Support tone without overexplaining", "Use silence and texture as pressure"];
  const snapshot = [...source];
  const translated = source.map((target) => presentSeedFallbackText("nb", "seed_fallback", target));
  assert.deepEqual(source, snapshot);
  assert.notDeepEqual(translated, snapshot);
});

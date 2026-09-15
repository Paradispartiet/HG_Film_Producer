import assert from "node:assert/strict";
import test from "node:test";

import {
  FILM_STUDY_HISTORY_FAMILIES,
  isFilmStudyFamilyId,
  type FilmStudyFamilyId,
} from "./filmStudyHistoryFamily.js";

const EXPECTED_IDS = [
  "silent_foundations",
  "silent_studio_systems",
  "late_silent_early_sound",
  "production_systems_1930s",
  "noir_realism_1940s",
  "asian_postwar_1950s",
  "postwar_european_modernism",
  "czechoslovak_new_wave",
  "european_political_feminist_modernism",
  "european_religious_moral_modernism",
] as const satisfies readonly FilmStudyFamilyId[];

test("Film Study history family registry contains exactly the established localized families", () => {
  assert.deepEqual(
    Object.keys(FILM_STUDY_HISTORY_FAMILIES).sort(),
    [...EXPECTED_IDS].sort(),
  );
});

test("Film Study history family registry preserves every established label", () => {
  assert.deepEqual(FILM_STUDY_HISTORY_FAMILIES, {
    silent_foundations: { id: "silent_foundations", label: "Silent Foundations" },
    silent_studio_systems: { id: "silent_studio_systems", label: "Silent Studio Systems" },
    late_silent_early_sound: { id: "late_silent_early_sound", label: "Late Silent / Early Sound" },
    production_systems_1930s: { id: "production_systems_1930s", label: "1930s Production Systems" },
    noir_realism_1940s: { id: "noir_realism_1940s", label: "1940s Noir / Realism" },
    asian_postwar_1950s: { id: "asian_postwar_1950s", label: "1950s Asian Postwar" },
    postwar_european_modernism: { id: "postwar_european_modernism", label: "Postwar European Modernism" },
    czechoslovak_new_wave: { id: "czechoslovak_new_wave", label: "Czechoslovak New Wave" },
    european_political_feminist_modernism: {
      id: "european_political_feminist_modernism",
      label: "European Political / Feminist Modernism",
    },
    european_religious_moral_modernism: {
      id: "european_religious_moral_modernism",
      label: "European Religious / Moral Modernism",
    },
  });
});

test("Religious/Moral has a stable technical identity and established label", () => {
  assert.deepEqual(
    FILM_STUDY_HISTORY_FAMILIES.european_religious_moral_modernism,
    {
      id: "european_religious_moral_modernism",
      label: "European Religious / Moral Modernism",
    },
  );
});

test("family ID validation accepts registry IDs and rejects unrelated strings", () => {
  for (const familyId of EXPECTED_IDS) {
    assert.equal(isFilmStudyFamilyId(familyId), true, familyId);
  }
  assert.equal(isFilmStudyFamilyId("scenario_viridiana_1961"), false);
  assert.equal(isFilmStudyFamilyId(""), false);
});

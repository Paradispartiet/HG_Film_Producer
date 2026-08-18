from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]

def r(path, old, new):
    p = ROOT / path
    s = p.read_text(encoding="utf-8")
    if s.count(old) != 1:
        raise RuntimeError(f"match count for {path}: {s.count(old)}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")

r("scripts/production-case-rest-audit.mjs",
  'const EXPECTED_PLAYABLE_SCENARIOS = 417;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 417;',
  'const EXPECTED_PLAYABLE_SCENARIOS = 418;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 418;')
r("scripts/production-case-rest-audit.mjs",
  '  "chapterTenLaborersLoveExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterTenLaborersLoveExpansion.ts",\n  "chapterTenAThrowOfDiceExpansion.ts",\n  "modernCanonExpansion.ts",')

r("scripts/film-history-chapter-ten-atlas-audit.mjs",
  'const EXPECTED_ATLAS_COUNT = 417;',
  'const EXPECTED_ATLAS_COUNT = 418;')
r("scripts/film-history-chapter-ten-atlas-audit.mjs",
  '  "chapterTenLaborersLoveExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterTenLaborersLoveExpansion.ts",\n  "chapterTenAThrowOfDiceExpansion.ts",\n  "modernCanonExpansion.ts",')
r("scripts/film-history-chapter-ten-atlas-audit.mjs",
  '    title: "A Throw of Dice",\n    originalTitle: "Prapancha Pash",\n    year: 1929,\n    aliases: ["Prapancha Pash", "Schicksalswürfel"],\n    role: "anchor_film",\n    decisionIfMissing: "P0",',
  '    title: "A Throw of Dice",\n    originalTitle: "Prapancha Pash",\n    year: 1929,\n    aliases: ["Prapancha Pash", "Schicksalswürfel"],\n    role: "anchor_film",\n    decisionIfMissing: "P0",\n    expectedScenarioId: "scenario_a_throw_of_dice_1929",')
r("scripts/film-history-chapter-ten-atlas-audit.mjs",
  '  USE_EXISTING: ["A Page of Madness", "Afgrunden", "Laborer\'s Love", "The Phantom Carriage"],\n  P0: ["A Throw of Dice", "Growth of the Soil"],',
  '  USE_EXISTING: ["A Page of Madness", "A Throw of Dice", "Afgrunden", "Laborer\'s Love", "The Phantom Carriage"],\n  P0: ["Growth of the Soil"],')

r("src/core/filmHistoryChapterTenAuditContract.test.ts",
  'const p0 = ["A Throw of Dice", "Growth of the Soil"];',
  'const p0 = ["Growth of the Soil"];')
r("src/core/filmHistoryChapterTenAuditContract.test.ts",
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 417;/);\n  assert.match(audit, /expectedScenarioId: "scenario_a_page_of_madness_1926"/);\n  assert.match(audit, /expectedScenarioId: "scenario_laborers_love_1922"/);',
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 418;/);\n  assert.match(audit, /expectedScenarioId: "scenario_a_page_of_madness_1926"/);\n  assert.match(audit, /expectedScenarioId: "scenario_laborers_love_1922"/);\n  assert.match(audit, /expectedScenarioId: "scenario_a_throw_of_dice_1929"/);')
r("src/core/filmHistoryChapterTenAuditContract.test.ts",
  '  assert.equal(resolved.atlas.expectedCount, 417);\n  assert.equal(resolved.atlas.actualCount, 417);\n  assert.deepEqual(resolved.byDecision.USE_EXISTING, ["A Page of Madness", "Laborer\'s Love", "Afgrunden", "The Phantom Carriage"]);',
  '  assert.equal(resolved.atlas.expectedCount, 418);\n  assert.equal(resolved.atlas.actualCount, 418);\n  assert.deepEqual(resolved.byDecision.USE_EXISTING, ["A Page of Madness", "Laborer\'s Love", "A Throw of Dice", "Afgrunden", "The Phantom Carriage"]);')
print("audit cutover ready")

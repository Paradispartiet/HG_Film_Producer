from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]

def r(path, old, new):
    p = ROOT / path
    s = p.read_text(encoding="utf-8")
    if s.count(old) != 1:
        raise RuntimeError(f"match count for {path}: {s.count(old)}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")

r("scripts/production-case-rest-audit.mjs",
  'const EXPECTED_PLAYABLE_SCENARIOS = 420;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 420;',
  'const EXPECTED_PLAYABLE_SCENARIOS = 421;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 421;')
r("scripts/production-case-rest-audit.mjs",
  '  "chapterTenOrochiExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterTenOrochiExpansion.ts",\n  "chapterTenRedHeroineExpansion.ts",\n  "modernCanonExpansion.ts",')

r("scripts/film-history-chapter-ten-atlas-audit.mjs",
  'const EXPECTED_ATLAS_COUNT = 420;',
  'const EXPECTED_ATLAS_COUNT = 421;')
r("scripts/film-history-chapter-ten-atlas-audit.mjs",
  '  "chapterTenOrochiExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterTenOrochiExpansion.ts",\n  "chapterTenRedHeroineExpansion.ts",\n  "modernCanonExpansion.ts",')
r("scripts/film-history-chapter-ten-atlas-audit.mjs",
  '    title: "The Red Heroine",\n    originalTitle: "Hongxia",\n    year: 1929,\n    aliases: ["Red Heroine"],\n    role: "major_comparison",\n    decisionIfMissing: "P1",',
  '    title: "The Red Heroine",\n    originalTitle: "Hongxia",\n    year: 1929,\n    aliases: ["Red Heroine", "Hong xia", "The Red Errant Knight", "红侠", "紅俠"],\n    role: "major_comparison",\n    decisionIfMissing: "P1",\n    expectedScenarioId: "scenario_the_red_heroine_1929",')
r("scripts/film-history-chapter-ten-atlas-audit.mjs",
  '  USE_EXISTING: ["A Page of Madness", "A Throw of Dice", "Afgrunden", "Growth of the Soil", "Laborer\'s Love", "Orochi", "The Phantom Carriage"],\n  P0: [],\n  P1: ["Häxan", "The Red Heroine"],',
  '  USE_EXISTING: ["A Page of Madness", "A Throw of Dice", "Afgrunden", "Growth of the Soil", "Laborer\'s Love", "Orochi", "The Red Heroine", "The Phantom Carriage"],\n  P0: [],\n  P1: ["Häxan"],')

r("src/core/filmHistoryChapterTenAuditContract.test.ts",
  'const p1 = ["Häxan", "The Red Heroine"];',
  'const p1 = ["Häxan"];')
r("src/core/filmHistoryChapterTenAuditContract.test.ts",
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 420;/);\n  assert.match(audit, /expectedScenarioId: "scenario_a_page_of_madness_1926"/);\n  assert.match(audit, /expectedScenarioId: "scenario_laborers_love_1922"/);\n  assert.match(audit, /expectedScenarioId: "scenario_a_throw_of_dice_1929"/);\n  assert.match(audit, /expectedScenarioId: "scenario_growth_of_the_soil_1921"/);\n  assert.match(audit, /expectedScenarioId: "scenario_orochi_1925"/);',
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 421;/);\n  assert.match(audit, /expectedScenarioId: "scenario_a_page_of_madness_1926"/);\n  assert.match(audit, /expectedScenarioId: "scenario_laborers_love_1922"/);\n  assert.match(audit, /expectedScenarioId: "scenario_a_throw_of_dice_1929"/);\n  assert.match(audit, /expectedScenarioId: "scenario_growth_of_the_soil_1921"/);\n  assert.match(audit, /expectedScenarioId: "scenario_orochi_1925"/);\n  assert.match(audit, /expectedScenarioId: "scenario_the_red_heroine_1929"/);')
r("src/core/filmHistoryChapterTenAuditContract.test.ts",
  '  assert.equal(resolved.atlas.expectedCount, 420);\n  assert.equal(resolved.atlas.actualCount, 420);\n  assert.deepEqual(resolved.byDecision.USE_EXISTING, ["A Page of Madness", "Laborer\'s Love", "A Throw of Dice", "Growth of the Soil", "Orochi", "Afgrunden", "The Phantom Carriage"]);',
  '  assert.equal(resolved.atlas.expectedCount, 421);\n  assert.equal(resolved.atlas.actualCount, 421);\n  assert.deepEqual(resolved.byDecision.USE_EXISTING, ["A Page of Madness", "Laborer\'s Love", "A Throw of Dice", "Growth of the Soil", "Orochi", "The Red Heroine", "Afgrunden", "The Phantom Carriage"]);')
print("audit cutover ready")

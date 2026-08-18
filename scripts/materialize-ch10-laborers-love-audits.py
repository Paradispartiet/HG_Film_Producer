from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]

def r(path, old, new):
    p = ROOT / path
    s = p.read_text(encoding="utf-8")
    if s.count(old) != 1:
        raise RuntimeError(f"match count for {path}: {s.count(old)}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")

r("scripts/production-case-rest-audit.mjs",
  'const EXPECTED_PLAYABLE_SCENARIOS = 416;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 416;',
  'const EXPECTED_PLAYABLE_SCENARIOS = 417;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 417;')
r("scripts/production-case-rest-audit.mjs",
  '  "chapterTenSilentCinemasExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterTenSilentCinemasExpansion.ts",\n  "chapterTenLaborersLoveExpansion.ts",\n  "modernCanonExpansion.ts",')

r("scripts/film-history-chapter-ten-atlas-audit.mjs",
  'const EXPECTED_ATLAS_COUNT = 416;',
  'const EXPECTED_ATLAS_COUNT = 417;')
r("scripts/film-history-chapter-ten-atlas-audit.mjs",
  '  "chapterTenSilentCinemasExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterTenSilentCinemasExpansion.ts",\n  "chapterTenLaborersLoveExpansion.ts",\n  "modernCanonExpansion.ts",')
r("scripts/film-history-chapter-ten-atlas-audit.mjs",
  '    title: "Laborer\'s Love",\n    originalTitle: "Laogong zhi aiqing",\n    year: 1922,\n    aliases: ["Labourer\'s Love", "Romance of a Fruit Peddler"],\n    role: "anchor_film",\n    decisionIfMissing: "P0",',
  '    title: "Laborer\'s Love",\n    originalTitle: "Laogong zhi aiqing",\n    year: 1922,\n    aliases: ["Labourer\'s Love", "Romance of a Fruit Peddler"],\n    role: "anchor_film",\n    decisionIfMissing: "P0",\n    expectedScenarioId: "scenario_laborers_love_1922",')
r("scripts/film-history-chapter-ten-atlas-audit.mjs",
  '  USE_EXISTING: ["A Page of Madness", "Afgrunden", "The Phantom Carriage"],\n  P0: ["A Throw of Dice", "Growth of the Soil", "Laborer\'s Love"],',
  '  USE_EXISTING: ["A Page of Madness", "Afgrunden", "Laborer\'s Love", "The Phantom Carriage"],\n  P0: ["A Throw of Dice", "Growth of the Soil"],')

r("src/core/filmHistoryChapterTenAuditContract.test.ts",
  'const p0 = ["A Throw of Dice", "Growth of the Soil", "Laborer\'s Love"];',
  'const p0 = ["A Throw of Dice", "Growth of the Soil"];')
r("src/core/filmHistoryChapterTenAuditContract.test.ts",
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 416;/);\n  assert.match(audit, /expectedScenarioId: "scenario_a_page_of_madness_1926"/);',
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 417;/);\n  assert.match(audit, /expectedScenarioId: "scenario_a_page_of_madness_1926"/);\n  assert.match(audit, /expectedScenarioId: "scenario_laborers_love_1922"/);')
r("src/core/filmHistoryChapterTenAuditContract.test.ts",
  '  assert.equal(resolved.atlas.expectedCount, 416);\n  assert.equal(resolved.atlas.actualCount, 416);\n  assert.deepEqual(resolved.byDecision.USE_EXISTING, ["A Page of Madness", "Afgrunden", "The Phantom Carriage"]);',
  '  assert.equal(resolved.atlas.expectedCount, 417);\n  assert.equal(resolved.atlas.actualCount, 417);\n  assert.deepEqual(resolved.byDecision.USE_EXISTING, ["A Page of Madness", "Laborer\'s Love", "Afgrunden", "The Phantom Carriage"]);')
print("audit cutover ready")

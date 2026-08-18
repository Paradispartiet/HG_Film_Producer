from pathlib import Path


def replace_once(path: str, old: str, new: str) -> None:
    p = Path(path)
    text = p.read_text()
    if old not in text:
        raise SystemExit(f"missing expected text in {path}: {old[:140]!r}")
    if text.count(old) != 1:
        raise SystemExit(f"expected exactly one match in {path}, found {text.count(old)}")
    p.write_text(text.replace(old, new, 1))

# Global Production Case census.
replace_once(
    "scripts/production-case-rest-audit.mjs",
    "const EXPECTED_PLAYABLE_SCENARIOS = 421;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 421;",
    "const EXPECTED_PLAYABLE_SCENARIOS = 422;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 422;",
)
replace_once(
    "scripts/production-case-rest-audit.mjs",
    '  "chapterTenRedHeroineExpansion.ts",\n',
    '  "chapterTenRedHeroineExpansion.ts",\n  "chapterTenHaxanExpansion.ts",\n',
)

# Chapter 10 Atlas audit.
replace_once(
    "scripts/film-history-chapter-ten-atlas-audit.mjs",
    "const EXPECTED_ATLAS_COUNT = 421;",
    "const EXPECTED_ATLAS_COUNT = 422;",
)
replace_once(
    "scripts/film-history-chapter-ten-atlas-audit.mjs",
    '  "chapterTenRedHeroineExpansion.ts",\n',
    '  "chapterTenRedHeroineExpansion.ts",\n  "chapterTenHaxanExpansion.ts",\n',
)
replace_once(
    "scripts/film-history-chapter-ten-atlas-audit.mjs",
    '    aliases: ["Haxan", "Witchcraft Through the Ages"],\n    role: "major_comparison",\n    decisionIfMissing: "P1",\n    chapterFunction:',
    '    aliases: ["Haxan", "Heksen", "The Witches", "Witchcraft Through the Ages"],\n    role: "major_comparison",\n    decisionIfMissing: "P1",\n    expectedScenarioId: "scenario_haxan_1922",\n    chapterFunction:',
)
replace_once(
    "scripts/film-history-chapter-ten-atlas-audit.mjs",
    '  USE_EXISTING: ["A Page of Madness", "A Throw of Dice", "Afgrunden", "Growth of the Soil", "Laborer\'s Love", "Orochi", "The Red Heroine", "The Phantom Carriage"],\n  P0: [],\n  P1: ["Häxan"],',
    '  USE_EXISTING: ["A Page of Madness", "A Throw of Dice", "Afgrunden", "Growth of the Soil", "Häxan", "Laborer\'s Love", "Orochi", "The Red Heroine", "The Phantom Carriage"],\n  P0: [],\n  P1: [],',
)

# Permanent Chapter 10 contract.
replace_once(
    "src/core/filmHistoryChapterTenAuditContract.test.ts",
    'const p1 = ["Häxan"];',
    'const p1: string[] = [];',
)
replace_once(
    "src/core/filmHistoryChapterTenAuditContract.test.ts",
    '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 421;/);',
    '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 422;/);',
)
replace_once(
    "src/core/filmHistoryChapterTenAuditContract.test.ts",
    '  assert.match(audit, /expectedScenarioId: "scenario_the_red_heroine_1929"/);\n',
    '  assert.match(audit, /expectedScenarioId: "scenario_the_red_heroine_1929"/);\n  assert.match(audit, /expectedScenarioId: "scenario_haxan_1922"/);\n',
)
replace_once(
    "src/core/filmHistoryChapterTenAuditContract.test.ts",
    '  assert.equal(resolved.atlas.expectedCount, 421);\n  assert.equal(resolved.atlas.actualCount, 421);',
    '  assert.equal(resolved.atlas.expectedCount, 422);\n  assert.equal(resolved.atlas.actualCount, 422);',
)
replace_once(
    "src/core/filmHistoryChapterTenAuditContract.test.ts",
    '  assert.deepEqual(resolved.byDecision.USE_EXISTING, ["A Page of Madness", "Laborer\'s Love", "A Throw of Dice", "Growth of the Soil", "Orochi", "The Red Heroine", "Afgrunden", "The Phantom Carriage"]);',
    '  assert.deepEqual(resolved.byDecision.USE_EXISTING, ["A Page of Madness", "Laborer\'s Love", "A Throw of Dice", "Growth of the Soil", "Orochi", "The Red Heroine", "Häxan", "Afgrunden", "The Phantom Carriage"]);',
)

print("Materialized Häxan census and Chapter 10 audit cutover")

from pathlib import Path


def replace_once(path: str, old: str, new: str) -> None:
    p = Path(path)
    text = p.read_text()
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{path}: expected exactly one match, found {count}: {old!r}")
    p.write_text(text.replace(old, new, 1))


# Runtime Atlas wiring.
replace_once(
    "src/ui/data/filmScenarios.ts",
    'import { mergeChapterElevenEnthusiasmExpansion } from "../../core/chapterElevenEnthusiasmExpansion.js";\n',
    'import { mergeChapterElevenEnthusiasmExpansion } from "../../core/chapterElevenEnthusiasmExpansion.js";\nimport { mergeChapterElevenBlueAngelExpansion } from "../../core/chapterElevenBlueAngelExpansion.js";\n',
)
replace_once(
    "src/ui/data/filmScenarios.ts",
    "const modernCanonScenarios = mergeModernCanonExpansion(chapterElevenEnthusiasmScenarios);",
    "const chapterElevenBlueAngelScenarios = mergeChapterElevenBlueAngelExpansion(chapterElevenEnthusiasmScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterElevenBlueAngelScenarios);",
)
replace_once(
    "src/ui/data/filmScenarios.ts",
    "+manual_chapter_eleven_enthusiasm_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eleven_enthusiasm_expansion_2026+manual_chapter_eleven_blue_angel_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
)
replace_once(
    "src/ui/data/filmScenarios.ts",
    "Chapter 11 The Jazz Singer, Blackmail, Applause, The Neighbor's Wife and Mine, The Broadway Melody, Sous les toits de Paris, and Enthusiasm sound-transition expansions, modern independent/Asian/prize-cinema expansion",
    "Chapter 11 The Jazz Singer, Blackmail, Applause, The Neighbor's Wife and Mine, The Broadway Melody, Sous les toits de Paris, Enthusiasm, and The Blue Angel sound-transition expansions, modern independent/Asian/prize-cinema expansion",
)

# Film Study wiring.
replace_once(
    "src/ui/data/scenarioFilmStudyMap.ts",
    'import { enthusiasmFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionEnthusiasm";\n',
    'import { enthusiasmFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionEnthusiasm";\nimport { blueAngelFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionBlueAngel";\n',
)
replace_once(
    "src/ui/data/scenarioFilmStudyMap.ts",
    "  [enthusiasmFilmHistoryProfile.scenarioId]: enthusiasmFilmHistoryProfile,\n",
    "  [enthusiasmFilmHistoryProfile.scenarioId]: enthusiasmFilmHistoryProfile,\n  [blueAngelFilmHistoryProfile.scenarioId]: blueAngelFilmHistoryProfile,\n",
)

# Production Verification wiring.
replace_once(
    "src/ui/data/scenarioProductionVerificationRegistry.ts",
    'import { enthusiasmProductionCaseVerification } from "./scenarioProductionVerificationEnthusiasm";\n',
    'import { enthusiasmProductionCaseVerification } from "./scenarioProductionVerificationEnthusiasm";\nimport { blueAngelProductionCaseVerification } from "./scenarioProductionVerificationBlueAngel";\n',
)
replace_once(
    "src/ui/data/scenarioProductionVerificationRegistry.ts",
    "  enthusiasmProductionCaseVerification,\n",
    "  enthusiasmProductionCaseVerification,\n  blueAngelProductionCaseVerification,\n",
)

# Chapter 11 Atlas audit.
replace_once(
    "scripts/film-history-chapter-eleven-atlas-audit.mjs",
    "const EXPECTED_ATLAS_COUNT = 429;",
    "const EXPECTED_ATLAS_COUNT = 430;",
)
replace_once(
    "scripts/film-history-chapter-eleven-atlas-audit.mjs",
    '  "chapterElevenEnthusiasmExpansion.ts",\n',
    '  "chapterElevenEnthusiasmExpansion.ts",\n  "chapterElevenBlueAngelExpansion.ts",\n',
)
replace_once(
    "scripts/film-history-chapter-eleven-atlas-audit.mjs",
    '    title: "The Blue Angel",\n    originalTitle: "Der blaue Engel",\n    year: 1930,\n    aliases: ["Der blaue Engel"],\n    role: "major_comparison",\n    decisionIfMissing: "P1",\n',
    '    title: "The Blue Angel",\n    originalTitle: "Der blaue Engel",\n    year: 1930,\n    aliases: ["Der blaue Engel"],\n    role: "major_comparison",\n    decisionIfMissing: "P1",\n    expectedScenarioId: "scenario_the_blue_angel_1930",\n',
)

# Global Production Case audit.
replace_once(
    "scripts/production-case-rest-audit.mjs",
    "const EXPECTED_PLAYABLE_SCENARIOS = 429;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 429;",
    "const EXPECTED_PLAYABLE_SCENARIOS = 430;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 430;",
)
replace_once(
    "scripts/production-case-rest-audit.mjs",
    '  "chapterElevenEnthusiasmExpansion.ts",\n',
    '  "chapterElevenEnthusiasmExpansion.ts",\n  "chapterElevenBlueAngelExpansion.ts",\n',
)

# Permanent Chapter 11 regression contract.
replace_once(
    "src/core/filmHistoryChapterElevenAuditContract.test.ts",
    'const useExisting = ["M", "City Lights", "The Jazz Singer", "Blackmail", "Applause", "The Neighbor\'s Wife and Mine", "The Broadway Melody", "Sous les toits de Paris", "Enthusiasm", "King Kong"];\nconst p0: string[] = [];\nconst p1 = ["The Blue Angel"];',
    'const useExisting = ["M", "City Lights", "The Jazz Singer", "Blackmail", "Applause", "The Neighbor\'s Wife and Mine", "The Broadway Melody", "Sous les toits de Paris", "Enthusiasm", "The Blue Angel", "King Kong"];\nconst p0: string[] = [];\nconst p1: string[] = [];',
)
replace_once(
    "src/core/filmHistoryChapterElevenAuditContract.test.ts",
    "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 429;/);",
    "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 430;/);",
)
replace_once(
    "src/core/filmHistoryChapterElevenAuditContract.test.ts",
    '  assert.match(audit, /expectedScenarioId: "scenario_enthusiasm_1930"/);\n',
    '  assert.match(audit, /expectedScenarioId: "scenario_enthusiasm_1930"/);\n  assert.match(audit, /expectedScenarioId: "scenario_the_blue_angel_1930"/);\n',
)
replace_once(
    "src/core/filmHistoryChapterElevenAuditContract.test.ts",
    "  assert.equal(resolved.atlas.expectedCount, 429);\n  assert.equal(resolved.atlas.actualCount, 429);",
    "  assert.equal(resolved.atlas.expectedCount, 430);\n  assert.equal(resolved.atlas.actualCount, 430);",
)
replace_once(
    "src/core/filmHistoryChapterElevenAuditContract.test.ts",
    '  assert.equal(byTitle.get("Enthusiasm")?.scenarioId, "scenario_enthusiasm_1930");\n',
    '  assert.equal(byTitle.get("Enthusiasm")?.scenarioId, "scenario_enthusiasm_1930");\n  assert.equal(byTitle.get("The Blue Angel")?.scenarioId, "scenario_the_blue_angel_1930");\n',
)

print("The Blue Angel materialization patches applied deterministically.")

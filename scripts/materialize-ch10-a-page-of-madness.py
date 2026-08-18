from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def replace_once(path: str, old: str, new: str) -> None:
    file_path = ROOT / path
    text = file_path.read_text(encoding="utf-8")
    count = text.count(old)
    if count != 1:
        raise RuntimeError(f"Expected exactly one match in {path}, found {count}: {old[:120]!r}")
    file_path.write_text(text.replace(old, new, 1), encoding="utf-8")


# Runtime scenario construction.
replace_once(
    "src/ui/data/filmScenarios.ts",
    'import { mergeChapterNineSovietMontageExpansion } from "../../core/chapterNineSovietMontageExpansion.js";\n',
    'import { mergeChapterNineSovietMontageExpansion } from "../../core/chapterNineSovietMontageExpansion.js";\nimport { mergeChapterTenSilentCinemasExpansion } from "../../core/chapterTenSilentCinemasExpansion.js";\n',
)
replace_once(
    "src/ui/data/filmScenarios.ts",
    'const chapterNineSovietMontageScenarios = mergeChapterNineSovietMontageExpansion(chapterEightFrenchAvantGardeScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineSovietMontageScenarios);',
    'const chapterNineSovietMontageScenarios = mergeChapterNineSovietMontageExpansion(chapterEightFrenchAvantGardeScenarios);\nconst chapterTenSilentCinemasScenarios = mergeChapterTenSilentCinemasExpansion(chapterNineSovietMontageScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTenSilentCinemasScenarios);',
)
replace_once(
    "src/ui/data/filmScenarios.ts",
    '+manual_chapter_nine_soviet_montage_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
    '+manual_chapter_nine_soviet_montage_expansion_2026+manual_chapter_ten_silent_cinemas_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
)
replace_once(
    "src/ui/data/filmScenarios.ts",
    'Chapter 8 French avant-garde expansion, Chapter 9 Soviet montage expansion, modern independent/Asian/prize-cinema expansion',
    'Chapter 8 French avant-garde expansion, Chapter 9 Soviet montage expansion, Chapter 10 silent-cinemas expansion, modern independent/Asian/prize-cinema expansion',
)

# Film Study runtime registry.
replace_once(
    "src/ui/data/scenarioFilmStudyMap.ts",
    'import { motherFilmHistoryProfile, fallRomanovDynastyFilmHistoryProfile, earthFilmHistoryProfile, octoberFilmHistoryProfile, mrWestFilmHistoryProfile } from "./scenarioFilmStudySovietMontageBatch";\n',
    'import { motherFilmHistoryProfile, fallRomanovDynastyFilmHistoryProfile, earthFilmHistoryProfile, octoberFilmHistoryProfile, mrWestFilmHistoryProfile } from "./scenarioFilmStudySovietMontageBatch";\nimport { aPageOfMadnessFilmHistoryProfile } from "./scenarioFilmStudySilentCinemasAPageOfMadness";\n',
)
replace_once(
    "src/ui/data/scenarioFilmStudyMap.ts",
    '  [mrWestFilmHistoryProfile.scenarioId]: mrWestFilmHistoryProfile,\n',
    '  [mrWestFilmHistoryProfile.scenarioId]: mrWestFilmHistoryProfile,\n  [aPageOfMadnessFilmHistoryProfile.scenarioId]: aPageOfMadnessFilmHistoryProfile,\n',
)

# Production Verification runtime registry.
replace_once(
    "src/ui/data/scenarioProductionVerificationRegistry.ts",
    'import { sovietMontageProductionVerificationRecords } from "./scenarioProductionVerificationSovietMontageBatch";\n',
    'import { sovietMontageProductionVerificationRecords } from "./scenarioProductionVerificationSovietMontageBatch";\nimport { aPageOfMadnessProductionCaseVerification } from "./scenarioProductionVerificationAPageOfMadness";\n',
)
replace_once(
    "src/ui/data/scenarioProductionVerificationRegistry.ts",
    '  ...sovietMontageProductionVerificationRecords,\n',
    '  ...sovietMontageProductionVerificationRecords,\n  aPageOfMadnessProductionCaseVerification,\n',
)

# Global 416/416 census and expansion order.
replace_once(
    "scripts/production-case-rest-audit.mjs",
    'const EXPECTED_PLAYABLE_SCENARIOS = 415;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 415;',
    'const EXPECTED_PLAYABLE_SCENARIOS = 416;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 416;',
)
replace_once(
    "scripts/production-case-rest-audit.mjs",
    '  "chapterNineSovietMontageExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterNineSovietMontageExpansion.ts",\n  "chapterTenSilentCinemasExpansion.ts",\n  "modernCanonExpansion.ts",',
)

# Chapter 10 audit moves the newly materialized P0 into the exact existing set.
replace_once(
    "scripts/film-history-chapter-ten-atlas-audit.mjs",
    'const EXPECTED_ATLAS_COUNT = 415;',
    'const EXPECTED_ATLAS_COUNT = 416;',
)
replace_once(
    "scripts/film-history-chapter-ten-atlas-audit.mjs",
    '  "chapterNineSovietMontageExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterNineSovietMontageExpansion.ts",\n  "chapterTenSilentCinemasExpansion.ts",\n  "modernCanonExpansion.ts",',
)
replace_once(
    "scripts/film-history-chapter-ten-atlas-audit.mjs",
    '    role: "anchor_film",\n    decisionIfMissing: "P0",\n    chapterFunction: "Kinugasa and the New Perceptions circle provide the chapter\'s essential Japanese avant-garde anchor:',
    '    role: "anchor_film",\n    decisionIfMissing: "P0",\n    expectedScenarioId: "scenario_a_page_of_madness_1926",\n    chapterFunction: "Kinugasa and the New Perceptions circle provide the chapter\'s essential Japanese avant-garde anchor:',
)
replace_once(
    "scripts/film-history-chapter-ten-atlas-audit.mjs",
    '  USE_EXISTING: ["Afgrunden", "The Phantom Carriage"],\n  P0: ["A Page of Madness", "A Throw of Dice", "Growth of the Soil", "Laborer\'s Love"],',
    '  USE_EXISTING: ["A Page of Madness", "Afgrunden", "The Phantom Carriage"],\n  P0: ["A Throw of Dice", "Growth of the Soil", "Laborer\'s Love"],',
)

# Permanent Chapter 10 contract follows the new exact census and queue.
replace_once(
    "src/core/filmHistoryChapterTenAuditContract.test.ts",
    'const p0 = ["A Page of Madness", "A Throw of Dice", "Growth of the Soil", "Laborer\'s Love"];',
    'const p0 = ["A Throw of Dice", "Growth of the Soil", "Laborer\'s Love"];',
)
replace_once(
    "src/core/filmHistoryChapterTenAuditContract.test.ts",
    '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 415;/);',
    '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 416;/);\n  assert.match(audit, /expectedScenarioId: "scenario_a_page_of_madness_1926"/);',
)
replace_once(
    "src/core/filmHistoryChapterTenAuditContract.test.ts",
    '  assert.equal(resolved.atlas.expectedCount, 415);\n  assert.equal(resolved.atlas.actualCount, 415);\n  assert.deepEqual(resolved.byDecision.USE_EXISTING, ["Afgrunden", "The Phantom Carriage"]);',
    '  assert.equal(resolved.atlas.expectedCount, 416);\n  assert.equal(resolved.atlas.actualCount, 416);\n  assert.deepEqual(resolved.byDecision.USE_EXISTING, ["A Page of Madness", "Afgrunden", "The Phantom Carriage"]);',
)

print("Materialized A Page of Madness wiring and Chapter 10 416/416 cutover")

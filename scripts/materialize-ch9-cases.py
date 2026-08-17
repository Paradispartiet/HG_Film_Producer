from pathlib import Path


def replace_once(path: str, old: str, new: str) -> None:
    p = Path(path)
    text = p.read_text()
    if old not in text:
        raise SystemExit(f"marker missing in {path}: {old[:120]}")
    p.write_text(text.replace(old, new, 1))


replace_once(
    "src/ui/data/filmScenarios.ts",
    'import { mergeChapterEightFrenchAvantGardeExpansion } from "../../core/chapterEightFrenchAvantGardeExpansion.js";\n',
    'import { mergeChapterEightFrenchAvantGardeExpansion } from "../../core/chapterEightFrenchAvantGardeExpansion.js";\nimport { mergeChapterNineSovietMontageExpansion } from "../../core/chapterNineSovietMontageExpansion.js";\n',
)
replace_once(
    "src/ui/data/filmScenarios.ts",
    'const chapterEightFrenchAvantGardeScenarios = mergeChapterEightFrenchAvantGardeExpansion(chapterSevenWeimarScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEightFrenchAvantGardeScenarios);',
    'const chapterEightFrenchAvantGardeScenarios = mergeChapterEightFrenchAvantGardeExpansion(chapterSevenWeimarScenarios);\nconst chapterNineSovietMontageScenarios = mergeChapterNineSovietMontageExpansion(chapterEightFrenchAvantGardeScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineSovietMontageScenarios);',
)
replace_once(
    "src/ui/data/filmScenarios.ts",
    '+manual_chapter_eight_french_avant_garde_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
    '+manual_chapter_eight_french_avant_garde_expansion_2026+manual_chapter_nine_soviet_montage_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
)
replace_once(
    "src/ui/data/filmScenarios.ts",
    'Chapter 8 French avant-garde expansion, modern independent/Asian/prize-cinema expansion',
    'Chapter 8 French avant-garde expansion, Chapter 9 Soviet montage expansion, modern independent/Asian/prize-cinema expansion',
)

replace_once(
    "src/ui/data/scenarioFilmStudyMap.ts",
    'import { smilingMadameBeudetFilmHistoryProfile } from "./scenarioFilmStudyFrenchAvantGardeSmilingMadameBeudet";\n',
    'import { smilingMadameBeudetFilmHistoryProfile } from "./scenarioFilmStudyFrenchAvantGardeSmilingMadameBeudet";\nimport { motherFilmHistoryProfile, fallRomanovDynastyFilmHistoryProfile, earthFilmHistoryProfile, octoberFilmHistoryProfile, mrWestFilmHistoryProfile } from "./scenarioFilmStudySovietMontageBatch";\n',
)
replace_once(
    "src/ui/data/scenarioFilmStudyMap.ts",
    '  [smilingMadameBeudetFilmHistoryProfile.scenarioId]: smilingMadameBeudetFilmHistoryProfile,\n',
    '  [smilingMadameBeudetFilmHistoryProfile.scenarioId]: smilingMadameBeudetFilmHistoryProfile,\n  [motherFilmHistoryProfile.scenarioId]: motherFilmHistoryProfile,\n  [fallRomanovDynastyFilmHistoryProfile.scenarioId]: fallRomanovDynastyFilmHistoryProfile,\n  [earthFilmHistoryProfile.scenarioId]: earthFilmHistoryProfile,\n  [octoberFilmHistoryProfile.scenarioId]: octoberFilmHistoryProfile,\n  [mrWestFilmHistoryProfile.scenarioId]: mrWestFilmHistoryProfile,\n',
)

replace_once(
    "src/ui/data/scenarioProductionVerificationRegistry.ts",
    'import { smilingMadameBeudetProductionCaseVerification } from "./scenarioProductionVerificationSmilingMadameBeudet";\n',
    'import { smilingMadameBeudetProductionCaseVerification } from "./scenarioProductionVerificationSmilingMadameBeudet";\nimport { sovietMontageProductionVerificationRecords } from "./scenarioProductionVerificationSovietMontageBatch";\n',
)
replace_once(
    "src/ui/data/scenarioProductionVerificationRegistry.ts",
    '  smilingMadameBeudetProductionCaseVerification,\n',
    '  smilingMadameBeudetProductionCaseVerification,\n  ...sovietMontageProductionVerificationRecords,\n',
)

replace_once("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 410;", "const EXPECTED_PLAYABLE_SCENARIOS = 415;")
replace_once("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 410;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 415;")
replace_once(
    "scripts/production-case-rest-audit.mjs",
    '  "chapterEightFrenchAvantGardeExpansion.ts",\n',
    '  "chapterEightFrenchAvantGardeExpansion.ts",\n  "chapterNineSovietMontageExpansion.ts",\n',
)

replace_once("scripts/film-history-chapter-nine-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 410;", "const EXPECTED_ATLAS_COUNT = 415;")
replace_once(
    "scripts/film-history-chapter-nine-atlas-audit.mjs",
    '  "chapterEightFrenchAvantGardeExpansion.ts",\n',
    '  "chapterEightFrenchAvantGardeExpansion.ts",\n  "chapterNineSovietMontageExpansion.ts",\n',
)
# Non-Latin aliases such as Cyrillic normalize to an empty ASCII key in this audit.
# Drop empty normalized keys so same-year films can never match through "".
replace_once(
    "scripts/film-history-chapter-nine-atlas-audit.mjs",
    'function acceptedTitles(item) { return [item.title, item.originalTitle, ...(item.aliases ?? [])].filter(Boolean).map(normalizeTitle); }',
    'function acceptedTitles(item) { return [item.title, item.originalTitle, ...(item.aliases ?? [])].filter(Boolean).map(normalizeTitle).filter(Boolean); }',
)

p = Path("scripts/film-history-chapter-nine-atlas-audit.mjs")
text = p.read_text()
for title_marker, decision_marker, expected_line in [
    ('title: "Mother",', 'decisionIfMissing: "P0",', 'expectedScenarioId: "scenario_mother_1926",'),
    ('title: "The Fall of the Romanov Dynasty",', 'decisionIfMissing: "P0",', 'expectedScenarioId: "scenario_the_fall_of_the_romanov_dynasty_1927",'),
    ('title: "Earth",', 'decisionIfMissing: "P0",', 'expectedScenarioId: "scenario_earth_1930",'),
    ('title: "October",', 'decisionIfMissing: "P1",', 'expectedScenarioId: "scenario_october_1928",'),
    ('title: "The Extraordinary Adventures of Mr. West in the Land of the Bolsheviks",', 'decisionIfMissing: "P1",', 'expectedScenarioId: "scenario_mr_west_bolsheviks_1924",'),
]:
    start = text.find(title_marker)
    if start < 0:
        raise SystemExit(f"missing candidate {title_marker}")
    pos = text.find(decision_marker, start)
    if pos < 0:
        raise SystemExit(f"missing decision for {title_marker}")
    insert = pos + len(decision_marker)
    if expected_line not in text[start:insert + 200]:
        text = text[:insert] + "\n    " + expected_line + text[insert:]
old_matrix = '''const expectedDecisions = {
  USE_EXISTING: ["Battleship Potemkin", "Man with a Movie Camera"],
  P0: ["Earth", "Mother", "The Fall of the Romanov Dynasty"],
  P1: ["October", "The Extraordinary Adventures of Mr. West in the Land of the Bolsheviks"],'''
new_matrix = '''const expectedDecisions = {
  USE_EXISTING: ["Battleship Potemkin", "Earth", "Man with a Movie Camera", "Mother", "October", "The Extraordinary Adventures of Mr. West in the Land of the Bolsheviks", "The Fall of the Romanov Dynasty"],
  P0: [],
  P1: [],'''
if old_matrix not in text:
    raise SystemExit("Chapter 9 expected decision matrix marker missing")
p.write_text(text.replace(old_matrix, new_matrix, 1))

p = Path("src/core/filmHistoryChapterNineAuditContract.test.ts")
text = p.read_text().replace('/const EXPECTED_ATLAS_COUNT = 410;/', '/const EXPECTED_ATLAS_COUNT = 415;/')
old = '''  assert.deepEqual(resolved.byDecision.USE_EXISTING, ["Battleship Potemkin", "Man with a Movie Camera"]);
  assert.deepEqual(resolved.byDecision.P0, ["Mother", "The Fall of the Romanov Dynasty", "Earth"]);
  assert.deepEqual(resolved.byDecision.P1, ["October", "The Extraordinary Adventures of Mr. West in the Land of the Bolsheviks"]);
  assert.deepEqual(resolved.recommendedNewProductionCases, [
    "Mother",
    "The Fall of the Romanov Dynasty",
    "Earth",
    "October",
    "The Extraordinary Adventures of Mr. West in the Land of the Bolsheviks",
  ]);'''
new = '''  assert.deepEqual(resolved.byDecision.USE_EXISTING, ["Battleship Potemkin", "Man with a Movie Camera", "Mother", "The Fall of the Romanov Dynasty", "Earth", "October", "The Extraordinary Adventures of Mr. West in the Land of the Bolsheviks"]);
  assert.deepEqual(resolved.byDecision.P0, []);
  assert.deepEqual(resolved.byDecision.P1, []);
  assert.deepEqual(resolved.recommendedNewProductionCases, []);'''
if old not in text:
    raise SystemExit("Chapter 9 contract matrix marker missing")
p.write_text(text.replace(old, new, 1))

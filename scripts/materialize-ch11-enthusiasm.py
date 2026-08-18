from pathlib import Path


def replace_once(path: str, old: str, new: str) -> None:
    p = Path(path)
    text = p.read_text()
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{path}: expected exactly one match, found {count}: {old!r}")
    p.write_text(text.replace(old, new, 1))

# Runtime Atlas wiring.
replace_once("src/ui/data/filmScenarios.ts", 'import { mergeChapterElevenSousLesToitsExpansion } from "../../core/chapterElevenSousLesToitsExpansion.js";\n', 'import { mergeChapterElevenSousLesToitsExpansion } from "../../core/chapterElevenSousLesToitsExpansion.js";\nimport { mergeChapterElevenEnthusiasmExpansion } from "../../core/chapterElevenEnthusiasmExpansion.js";\n')
replace_once("src/ui/data/filmScenarios.ts", "const modernCanonScenarios = mergeModernCanonExpansion(chapterElevenSousLesToitsScenarios);", "const chapterElevenEnthusiasmScenarios = mergeChapterElevenEnthusiasmExpansion(chapterElevenSousLesToitsScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterElevenEnthusiasmScenarios);")
replace_once("src/ui/data/filmScenarios.ts", "+manual_chapter_eleven_sous_les_toits_expansion_2026+manual_modern_indie_asian_prize_expansion_2026", "+manual_chapter_eleven_sous_les_toits_expansion_2026+manual_chapter_eleven_enthusiasm_expansion_2026+manual_modern_indie_asian_prize_expansion_2026")
replace_once("src/ui/data/filmScenarios.ts", "Chapter 11 The Jazz Singer, Blackmail, Applause, The Neighbor's Wife and Mine, The Broadway Melody, and Sous les toits de Paris sound-transition expansions, modern independent/Asian/prize-cinema expansion", "Chapter 11 The Jazz Singer, Blackmail, Applause, The Neighbor's Wife and Mine, The Broadway Melody, Sous les toits de Paris, and Enthusiasm sound-transition expansions, modern independent/Asian/prize-cinema expansion")

# Film Study wiring.
replace_once("src/ui/data/scenarioFilmStudyMap.ts", 'import { sousLesToitsFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionSousLesToits";\n', 'import { sousLesToitsFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionSousLesToits";\nimport { enthusiasmFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionEnthusiasm";\n')
replace_once("src/ui/data/scenarioFilmStudyMap.ts", "  [sousLesToitsFilmHistoryProfile.scenarioId]: sousLesToitsFilmHistoryProfile,\n", "  [sousLesToitsFilmHistoryProfile.scenarioId]: sousLesToitsFilmHistoryProfile,\n  [enthusiasmFilmHistoryProfile.scenarioId]: enthusiasmFilmHistoryProfile,\n")

# Production Verification wiring.
replace_once("src/ui/data/scenarioProductionVerificationRegistry.ts", 'import { sousLesToitsProductionCaseVerification } from "./scenarioProductionVerificationSousLesToits";\n', 'import { sousLesToitsProductionCaseVerification } from "./scenarioProductionVerificationSousLesToits";\nimport { enthusiasmProductionCaseVerification } from "./scenarioProductionVerificationEnthusiasm";\n')
replace_once("src/ui/data/scenarioProductionVerificationRegistry.ts", "  sousLesToitsProductionCaseVerification,\n", "  sousLesToitsProductionCaseVerification,\n  enthusiasmProductionCaseVerification,\n")

# Chapter 11 audit.
replace_once("scripts/film-history-chapter-eleven-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 428;", "const EXPECTED_ATLAS_COUNT = 429;")
replace_once("scripts/film-history-chapter-eleven-atlas-audit.mjs", '  "chapterElevenSousLesToitsExpansion.ts",\n', '  "chapterElevenSousLesToitsExpansion.ts",\n  "chapterElevenEnthusiasmExpansion.ts",\n')
replace_once("scripts/film-history-chapter-eleven-atlas-audit.mjs", '    title: "Enthusiasm",\n    originalTitle: "Entuziazm: Simfoniya Donbassa",\n    year: 1930,\n    aliases: ["Enthusiasm: Symphony of the Donbas", "Symphony of the Donbas", "Entuziazm"],\n    role: "major_comparison",\n    decisionIfMissing: "P1",\n', '    title: "Enthusiasm",\n    originalTitle: "Entuziazm: Simfoniya Donbassa",\n    year: 1930,\n    aliases: ["Enthusiasm: Symphony of the Donbas", "Symphony of the Donbas", "Entuziazm"],\n    role: "major_comparison",\n    decisionIfMissing: "P1",\n    expectedScenarioId: "scenario_enthusiasm_1930",\n')

# Global Production Case audit.
replace_once("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 428;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 428;", "const EXPECTED_PLAYABLE_SCENARIOS = 429;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 429;")
replace_once("scripts/production-case-rest-audit.mjs", '  "chapterElevenSousLesToitsExpansion.ts",\n', '  "chapterElevenSousLesToitsExpansion.ts",\n  "chapterElevenEnthusiasmExpansion.ts",\n')

# Permanent Chapter 11 contract.
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", 'const useExisting = ["M", "City Lights", "The Jazz Singer", "Blackmail", "Applause", "The Neighbor\'s Wife and Mine", "The Broadway Melody", "Sous les toits de Paris", "King Kong"];\nconst p0: string[] = [];\nconst p1 = ["Enthusiasm", "The Blue Angel"];', 'const useExisting = ["M", "City Lights", "The Jazz Singer", "Blackmail", "Applause", "The Neighbor\'s Wife and Mine", "The Broadway Melody", "Sous les toits de Paris", "Enthusiasm", "King Kong"];\nconst p0: string[] = [];\nconst p1 = ["The Blue Angel"];')
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 428;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 429;/);")
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", '  assert.match(audit, /expectedScenarioId: "scenario_sous_les_toits_de_paris_1930"/);\n', '  assert.match(audit, /expectedScenarioId: "scenario_sous_les_toits_de_paris_1930"/);\n  assert.match(audit, /expectedScenarioId: "scenario_enthusiasm_1930"/);\n')
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", "  assert.equal(resolved.atlas.expectedCount, 428);\n  assert.equal(resolved.atlas.actualCount, 428);", "  assert.equal(resolved.atlas.expectedCount, 429);\n  assert.equal(resolved.atlas.actualCount, 429);")
replace_once("src/core/filmHistoryChapterElevenAuditContract.test.ts", '  assert.equal(byTitle.get("Sous les toits de Paris")?.scenarioId, "scenario_sous_les_toits_de_paris_1930");\n', '  assert.equal(byTitle.get("Sous les toits de Paris")?.scenarioId, "scenario_sous_les_toits_de_paris_1930");\n  assert.equal(byTitle.get("Enthusiasm")?.scenarioId, "scenario_enthusiasm_1930");\n')

print("Enthusiasm materialization patches applied deterministically.")

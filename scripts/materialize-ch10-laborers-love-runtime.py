from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]

def r(path, old, new):
    p = ROOT / path
    s = p.read_text(encoding="utf-8")
    if s.count(old) != 1:
        raise RuntimeError(f"match count for {path}: {s.count(old)}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")

r("src/ui/data/filmScenarios.ts",
  'import { mergeChapterTenSilentCinemasExpansion } from "../../core/chapterTenSilentCinemasExpansion.js";\n',
  'import { mergeChapterTenSilentCinemasExpansion } from "../../core/chapterTenSilentCinemasExpansion.js";\nimport { mergeChapterTenLaborersLoveExpansion } from "../../core/chapterTenLaborersLoveExpansion.js";\n')
r("src/ui/data/filmScenarios.ts",
  'const chapterTenSilentCinemasScenarios = mergeChapterTenSilentCinemasExpansion(chapterNineSovietMontageScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTenSilentCinemasScenarios);',
  'const chapterTenSilentCinemasScenarios = mergeChapterTenSilentCinemasExpansion(chapterNineSovietMontageScenarios);\nconst chapterTenLaborersLoveScenarios = mergeChapterTenLaborersLoveExpansion(chapterTenSilentCinemasScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTenLaborersLoveScenarios);')
r("src/ui/data/filmScenarios.ts",
  '+manual_chapter_ten_silent_cinemas_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_ten_silent_cinemas_expansion_2026+manual_chapter_ten_laborers_love_expansion_2026+manual_modern_indie_asian_prize_expansion_2026')
r("src/ui/data/filmScenarios.ts",
  'Chapter 10 silent-cinemas expansion, modern independent/Asian/prize-cinema expansion',
  'Chapter 10 silent-cinemas expansion plus Laborer\'s Love, modern independent/Asian/prize-cinema expansion')

r("src/ui/data/scenarioFilmStudyMap.ts",
  'import { aPageOfMadnessFilmHistoryProfile } from "./scenarioFilmStudySilentCinemasAPageOfMadness";\n',
  'import { aPageOfMadnessFilmHistoryProfile } from "./scenarioFilmStudySilentCinemasAPageOfMadness";\nimport { laborersLoveFilmHistoryProfile } from "./scenarioFilmStudySilentCinemasLaborersLove";\n')
r("src/ui/data/scenarioFilmStudyMap.ts",
  '  [aPageOfMadnessFilmHistoryProfile.scenarioId]: aPageOfMadnessFilmHistoryProfile,\n',
  '  [aPageOfMadnessFilmHistoryProfile.scenarioId]: aPageOfMadnessFilmHistoryProfile,\n  [laborersLoveFilmHistoryProfile.scenarioId]: laborersLoveFilmHistoryProfile,\n')

r("src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { aPageOfMadnessProductionCaseVerification } from "./scenarioProductionVerificationAPageOfMadness";\n',
  'import { aPageOfMadnessProductionCaseVerification } from "./scenarioProductionVerificationAPageOfMadness";\nimport { laborersLoveProductionCaseVerification } from "./scenarioProductionVerificationLaborersLove";\n')
r("src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  aPageOfMadnessProductionCaseVerification,\n',
  '  aPageOfMadnessProductionCaseVerification,\n  laborersLoveProductionCaseVerification,\n')
print("runtime wiring ready")

from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]

def r(path, old, new):
    p = ROOT / path
    s = p.read_text(encoding="utf-8")
    if s.count(old) != 1:
        raise RuntimeError(f"match count for {path}: {s.count(old)}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")

r("src/ui/data/filmScenarios.ts",
  'import { mergeChapterTenLaborersLoveExpansion } from "../../core/chapterTenLaborersLoveExpansion.js";\n',
  'import { mergeChapterTenLaborersLoveExpansion } from "../../core/chapterTenLaborersLoveExpansion.js";\nimport { mergeChapterTenAThrowOfDiceExpansion } from "../../core/chapterTenAThrowOfDiceExpansion.js";\n')
r("src/ui/data/filmScenarios.ts",
  'const chapterTenLaborersLoveScenarios = mergeChapterTenLaborersLoveExpansion(chapterTenSilentCinemasScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTenLaborersLoveScenarios);',
  'const chapterTenLaborersLoveScenarios = mergeChapterTenLaborersLoveExpansion(chapterTenSilentCinemasScenarios);\nconst chapterTenAThrowOfDiceScenarios = mergeChapterTenAThrowOfDiceExpansion(chapterTenLaborersLoveScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTenAThrowOfDiceScenarios);')
r("src/ui/data/filmScenarios.ts",
  '+manual_chapter_ten_laborers_love_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_ten_laborers_love_expansion_2026+manual_chapter_ten_a_throw_of_dice_expansion_2026+manual_modern_indie_asian_prize_expansion_2026')
r("src/ui/data/filmScenarios.ts",
  "Chapter 10 silent-cinemas expansion plus Laborer's Love, modern independent/Asian/prize-cinema expansion",
  "Chapter 10 silent-cinemas expansion plus Laborer's Love and A Throw of Dice, modern independent/Asian/prize-cinema expansion")

r("src/ui/data/scenarioFilmStudyMap.ts",
  'import { laborersLoveFilmHistoryProfile } from "./scenarioFilmStudySilentCinemasLaborersLove";\n',
  'import { laborersLoveFilmHistoryProfile } from "./scenarioFilmStudySilentCinemasLaborersLove";\nimport { aThrowOfDiceFilmHistoryProfile } from "./scenarioFilmStudySilentCinemasAThrowOfDice";\n')
r("src/ui/data/scenarioFilmStudyMap.ts",
  '  [laborersLoveFilmHistoryProfile.scenarioId]: laborersLoveFilmHistoryProfile,\n',
  '  [laborersLoveFilmHistoryProfile.scenarioId]: laborersLoveFilmHistoryProfile,\n  [aThrowOfDiceFilmHistoryProfile.scenarioId]: aThrowOfDiceFilmHistoryProfile,\n')

r("src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { laborersLoveProductionCaseVerification } from "./scenarioProductionVerificationLaborersLove";\n',
  'import { laborersLoveProductionCaseVerification } from "./scenarioProductionVerificationLaborersLove";\nimport { aThrowOfDiceProductionCaseVerification } from "./scenarioProductionVerificationAThrowOfDice";\n')
r("src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  laborersLoveProductionCaseVerification,\n',
  '  laborersLoveProductionCaseVerification,\n  aThrowOfDiceProductionCaseVerification,\n')
print("runtime wiring ready")

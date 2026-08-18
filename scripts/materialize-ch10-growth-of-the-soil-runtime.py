from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]

def r(path, old, new):
    p = ROOT / path
    s = p.read_text(encoding="utf-8")
    if s.count(old) != 1:
        raise RuntimeError(f"match count for {path}: {s.count(old)}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")

r("src/ui/data/filmScenarios.ts",
  'import { mergeChapterTenAThrowOfDiceExpansion } from "../../core/chapterTenAThrowOfDiceExpansion.js";\n',
  'import { mergeChapterTenAThrowOfDiceExpansion } from "../../core/chapterTenAThrowOfDiceExpansion.js";\nimport { mergeChapterTenGrowthOfTheSoilExpansion } from "../../core/chapterTenGrowthOfTheSoilExpansion.js";\n')
r("src/ui/data/filmScenarios.ts",
  'const chapterTenAThrowOfDiceScenarios = mergeChapterTenAThrowOfDiceExpansion(chapterTenLaborersLoveScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTenAThrowOfDiceScenarios);',
  'const chapterTenAThrowOfDiceScenarios = mergeChapterTenAThrowOfDiceExpansion(chapterTenLaborersLoveScenarios);\nconst chapterTenGrowthOfTheSoilScenarios = mergeChapterTenGrowthOfTheSoilExpansion(chapterTenAThrowOfDiceScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTenGrowthOfTheSoilScenarios);')
r("src/ui/data/filmScenarios.ts",
  '+manual_chapter_ten_a_throw_of_dice_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_ten_a_throw_of_dice_expansion_2026+manual_chapter_ten_growth_of_the_soil_expansion_2026+manual_modern_indie_asian_prize_expansion_2026')
r("src/ui/data/filmScenarios.ts",
  "Chapter 10 silent-cinemas expansion plus Laborer's Love and A Throw of Dice, modern independent/Asian/prize-cinema expansion",
  "Chapter 10 silent-cinemas expansion plus Laborer's Love, A Throw of Dice, and Growth of the Soil, modern independent/Asian/prize-cinema expansion")

r("src/ui/data/scenarioFilmStudyMap.ts",
  'import { aThrowOfDiceFilmHistoryProfile } from "./scenarioFilmStudySilentCinemasAThrowOfDice";\n',
  'import { aThrowOfDiceFilmHistoryProfile } from "./scenarioFilmStudySilentCinemasAThrowOfDice";\nimport { growthOfTheSoilFilmHistoryProfile } from "./scenarioFilmStudySilentCinemasGrowthOfTheSoil";\n')
r("src/ui/data/scenarioFilmStudyMap.ts",
  '  [aThrowOfDiceFilmHistoryProfile.scenarioId]: aThrowOfDiceFilmHistoryProfile,\n',
  '  [aThrowOfDiceFilmHistoryProfile.scenarioId]: aThrowOfDiceFilmHistoryProfile,\n  [growthOfTheSoilFilmHistoryProfile.scenarioId]: growthOfTheSoilFilmHistoryProfile,\n')

r("src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { aThrowOfDiceProductionCaseVerification } from "./scenarioProductionVerificationAThrowOfDice";\n',
  'import { aThrowOfDiceProductionCaseVerification } from "./scenarioProductionVerificationAThrowOfDice";\nimport { growthOfTheSoilProductionCaseVerification } from "./scenarioProductionVerificationGrowthOfTheSoil";\n')
r("src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  aThrowOfDiceProductionCaseVerification,\n',
  '  aThrowOfDiceProductionCaseVerification,\n  growthOfTheSoilProductionCaseVerification,\n')
print("runtime wiring ready")

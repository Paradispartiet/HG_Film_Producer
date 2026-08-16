from pathlib import Path


def replace_once(path: str, old: str, new: str) -> None:
    p = Path(path)
    text = p.read_text(encoding="utf-8")
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{path}: expected one marker, got {count}: {old!r}")
    p.write_text(text.replace(old, new, 1), encoding="utf-8")


definition = '''  {
    id: "scenario_the_smiling_madame_beudet_1923",
    title: "The Smiling Madame Beudet",
    originalTitle: "La Souriante Madame Beudet",
    aliases: ["La Souriante madame Beudet", "The Smiling Mme Beudet"],
    year: 1923,
    titleType: "Short",
    runtimeMins: 36,
    directors: ["Germaine Dulac"],
    genres: ["Drama", "Short"],
    premise: "Build The Smiling Madame Beudet as Germaine Dulac's 1923 Film d'Art – Vandal et Delac production problem in domestic subjectivity, gendered power and French Impressionist image construction. Dulac and André Obey adapt the Denys Amiel/Obey stage play; Charles Delac and Marcel Vandal produce; Maurice Forster and Paul Parguel photograph; and Germaine Dermoz and Alexandre Arquillière organize a constricted bourgeois marriage around gesture, fantasy, recurring objects and unequal control. Use superimposed or distorted fantasy imagery, associative montage and visual-symbolic contrast to externalize Madame Beudet's interior life without turning Impressionism into a fixed effects preset. Treat the revolver plot strictly as narrative evidence: gameplay uses an inert prop or non-functional substitute and never handles live ammunition or teaches weapon operation. Preserve feminist historiography with qualified language—the film is an important early explicitly feminist work, not an uncontested 'first feminist film ever.' Store 36 minutes as the representative Cinémathèque presentation length while preserving 38-minute and 39-minute-30-second archival/presentation variants as distinct copy histories.",
    sourceId: "manual_the_smiling_madame_beudet_1923",
    sourceUrl: "https://www.cinematheque.fr/film/57083.html",
    scenarioType: "domestic_subjectivity_feminist_impressionist_production",
    requiredChoicesSeed: {
      screenplay: ["dulac_obey_stage_adaptation", "domestic_constraint_inner_life", "revolver_plot_without_weapon_instruction"],
      camera: ["subjective_fantasy_inserts", "distortion_and_superimposition", "domestic_space_as_psychological_field"],
      editing: ["associative_inner_outer_montage", "fantasy_reality_transitions", "gesture_object_visual_rhythm"],
      sound: ["silent_1923_production", "variable_live_accompaniment", "modern_music_not_original_synchronized_sound"],
      themes: ["film_history", "french_impressionism", "germaine_dulac", "feminist_film_history", "domestic_subjectivity", "representation_ethics"],
    },
    learningGoals: [
      "Plan a chamber-scale adaptation in which domestic routine, gesture and recurring objects make unequal marital power legible before fantasy effects intensify Madame Beudet's interior life.",
      "Use distortion, superimposition and fantasy inserts as motivated points of subjectivity rather than decorating every scene with an Impressionist preset.",
      "Coordinate Dermoz and Arquillière's contrasting performance with Forster/Parguel photography and associative montage so private imagination and external behavior remain perceptibly distinct but causally connected.",
      "Preserve Germaine Dulac's feminist and avant-garde authorship without erasing André Obey, Charles Delac, Marcel Vandal, the cinematographers or the stage-play source, and avoid an unsupported first-feminist-film claim.",
      "Treat the revolver as a historical narrative prop only: use an inert/non-functional substitute, never live ammunition, and teach dramatic implication and editing rather than weapon handling.",
      "Preserve copy history: the 36-minute Cinémathèque presentation, 38-minute Fondation copy and 39-minute-30-second Pompidou object are related preservation states, not evidence for one immutable runtime or soundtrack.",
    ],
    phases: [
      { id: "pitch", label: "Domestic subjectivity pitch", player_task: "Define why a confined bourgeois marriage needs image-based access to Madame Beudet's interior freedom rather than external spectacle or a more complicated plot." },
      { id: "research", label: "Dulac, company and feminist-history research", player_task: "Ground Dulac/Obey writing, Film d'Art – Vandal et Delac, Delac/Vandal production, Forster/Parguel photography, the central cast, silent format and qualified feminist historiography in institutional sources." },
      { id: "screenplay", label: "Adaptation and inner life", player_task: "Condense the stage-play conflict into recurring domestic pressures, fantasy escapes and the revolver misunderstanding without turning the prop into an operational weapon lesson." },
      { id: "casting", label: "Gesture, irritation and imagined freedom", player_task: "Direct Dermoz and Arquillière so posture, gaze, routine and reaction establish the marriage's unequal emotional system before fantasy imagery modifies perception." },
      { id: "production_design", label: "Domestic space as constraint", player_task: "Organize desk, piano, window, room boundaries and recurring props as a stable everyday system against which Madame Beudet's imagined alternatives can register clearly." },
      { id: "cinematography", label: "Subjective image transformations", player_task: "Coordinate Forster/Parguel photography with distortion, layered imagery and fantasy inserts only where they externalize a specific mental relation; do not infer undocumented lenses or lamp packages." },
      { id: "editing", label: "Associate inner and outer worlds", player_task: "Use associative cuts, repeated objects and controlled fantasy/reality transitions to make thought and constraint legible without abandoning the story's causal line." },
      { id: "sound", label: "Silent object, variable accompaniment", player_task: "Keep the 1923 photographed object silent and treat live piano or later accompaniment as presentation history rather than synchronized original production sound." },
      { id: "release", label: "Early feminist canon and copy history", player_task: "Model later feminist/avant-garde recognition and archival copy differences without claiming unanimous 1923 reception, an absolute first, or one uniquely authoritative modern runtime." },
    ],
  },
'''

p = Path("src/core/chapterEightFrenchAvantGardeExpansion.ts")
text = p.read_text(encoding="utf-8")
marker = "\n] as const;\n\nexport function mergeChapterEightFrenchAvantGardeExpansion("
if text.count(marker) != 1:
    raise SystemExit(f"expansion marker count={text.count(marker)}")
p.write_text(text.replace(marker, "\n" + definition + "] as const;\n\nexport function mergeChapterEightFrenchAvantGardeExpansion(", 1), encoding="utf-8")

p = Path("src/core/chapterEightFrenchAvantGardeExpansion.test.ts")
text = p.read_text(encoding="utf-8")
text = text.replace("Chapter 8 materializes Coeur fidele, Napoleon and Un Chien Andalou as distinct French avant-garde production cases", "Chapter 8 materializes Coeur fidele, Napoleon, Un Chien Andalou and The Smiling Madame Beudet as distinct French avant-garde production cases", 1)
text = text.replace("assert.equal(chapterEightFrenchAvantGardeExpansionDefinitions.length, 3);", "assert.equal(chapterEightFrenchAvantGardeExpansionDefinitions.length, 4);", 1)
test_block = '''

  const beudet = chapterEightFrenchAvantGardeExpansionDefinitions.find((item) => item.id === "scenario_the_smiling_madame_beudet_1923");
  assert.ok(beudet);
  assert.equal(beudet.title, "The Smiling Madame Beudet");
  assert.equal(beudet.originalTitle, "La Souriante Madame Beudet");
  assert.equal(beudet.year, 1923);
  assert.equal(beudet.runtimeMins, 36);
  assert.equal(beudet.scenarioType, "domestic_subjectivity_feminist_impressionist_production");
  assert.equal(beudet.sourceId, "manual_the_smiling_madame_beudet_1923");
  assert.equal(beudet.sourceUrl, "https://www.cinematheque.fr/film/57083.html");
  assert.ok(beudet.premise.includes("Germaine Dulac"));
  assert.ok(beudet.premise.includes("Le Film d'Art – Vandal et Delac"));
  assert.ok(beudet.premise.includes("Maurice Forster and Paul Parguel"));
  assert.ok(beudet.premise.includes("not an uncontested 'first feminist film ever'"));
  assert.ok(beudet.premise.includes("inert prop or non-functional substitute"));
  assert.ok(beudet.requiredChoicesSeed.camera.includes("distortion_and_superimposition"));
  assert.ok(beudet.requiredChoicesSeed.editing.includes("associative_inner_outer_montage"));
  assert.ok(beudet.requiredChoicesSeed.themes.includes("feminist_film_history"));
  assert.ok(beudet.learningGoals.some((goal) => goal.includes("avoid an unsupported first-feminist-film claim")));
  assert.ok(beudet.learningGoals.some((goal) => goal.includes("never live ammunition")));
  assert.ok(beudet.learningGoals.length >= 6);
  assert.ok(beudet.phases.length >= 9);'''
if text.count("\n});") != 1:
    raise SystemExit("scenario test close marker mismatch")
p.write_text(text.replace("\n});", test_block + "\n});", 1), encoding="utf-8")

replace_once(
    "src/ui/data/scenarioFilmStudyMap.ts",
    'import { unChienAndalouFilmHistoryProfile } from "./scenarioFilmStudyFrenchAvantGardeUnChienAndalou";\n',
    'import { unChienAndalouFilmHistoryProfile } from "./scenarioFilmStudyFrenchAvantGardeUnChienAndalou";\nimport { smilingMadameBeudetFilmHistoryProfile } from "./scenarioFilmStudyFrenchAvantGardeSmilingMadameBeudet";\n',
)
replace_once(
    "src/ui/data/scenarioFilmStudyMap.ts",
    "  [unChienAndalouFilmHistoryProfile.scenarioId]: unChienAndalouFilmHistoryProfile,\n",
    "  [unChienAndalouFilmHistoryProfile.scenarioId]: unChienAndalouFilmHistoryProfile,\n  [smilingMadameBeudetFilmHistoryProfile.scenarioId]: smilingMadameBeudetFilmHistoryProfile,\n",
)

replace_once(
    "src/ui/data/scenarioProductionVerificationRegistry.ts",
    'import { unChienAndalouProductionCaseVerification } from "./scenarioProductionVerificationUnChienAndalou";\n',
    'import { unChienAndalouProductionCaseVerification } from "./scenarioProductionVerificationUnChienAndalou";\nimport { smilingMadameBeudetProductionCaseVerification } from "./scenarioProductionVerificationSmilingMadameBeudet";\n',
)
replace_once(
    "src/ui/data/scenarioProductionVerificationRegistry.ts",
    "  unChienAndalouProductionCaseVerification,\n",
    "  unChienAndalouProductionCaseVerification,\n  smilingMadameBeudetProductionCaseVerification,\n",
)

replace_once("scripts/film-history-chapter-eight-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 408;", "const EXPECTED_ATLAS_COUNT = 409;")
replace_once(
    "scripts/film-history-chapter-eight-atlas-audit.mjs",
    '  USE_EXISTING: ["Cœur fidèle", "Napoléon", "The Passion of Joan of Arc", "Un Chien Andalou"],\n  P0: [],\n  P1: ["Entr\'acte", "The Smiling Madame Beudet"],',
    '  USE_EXISTING: ["Cœur fidèle", "Napoléon", "The Passion of Joan of Arc", "The Smiling Madame Beudet", "Un Chien Andalou"],\n  P0: [],\n  P1: ["Entr\'acte"],',
)

replace_once("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 408;", "const EXPECTED_PLAYABLE_SCENARIOS = 409;")
replace_once("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 408;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 409;")

p = Path("src/core/filmHistoryChapterEightAuditContract.test.ts")
text = p.read_text(encoding="utf-8")
replacements = [
    ('assert.match(audit, /const EXPECTED_ATLAS_COUNT = 408;/);', 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 409;/);'),
    ('assert.match(audit, /USE_EXISTING: \\["Cœur fidèle", "Napoléon", "The Passion of Joan of Arc", "Un Chien Andalou"\\]/);', 'assert.match(audit, /USE_EXISTING: \\["Cœur fidèle", "Napoléon", "The Passion of Joan of Arc", "The Smiling Madame Beudet", "Un Chien Andalou"\\]/);'),
    ('assert.match(audit, /P1: \\["Entr\'acte", "The Smiling Madame Beudet"\\]/);', 'assert.match(audit, /P1: \\["Entr\'acte"\\]/);'),
    ('assert.deepEqual(resolved.byDecision.USE_EXISTING, ["The Passion of Joan of Arc", "Cœur fidèle", "Napoléon", "Un Chien Andalou"]);', 'assert.deepEqual(resolved.byDecision.USE_EXISTING, ["The Passion of Joan of Arc", "Cœur fidèle", "Napoléon", "Un Chien Andalou", "The Smiling Madame Beudet"]);'),
    ('assert.deepEqual(resolved.byDecision.P1, ["The Smiling Madame Beudet", "Entr\'acte"]);', 'assert.deepEqual(resolved.byDecision.P1, ["Entr\'acte"]);'),
    ('assert.deepEqual(resolved.recommendedNewProductionCases, ["The Smiling Madame Beudet", "Entr\'acte"]);', 'assert.deepEqual(resolved.recommendedNewProductionCases, ["Entr\'acte"]);'),
]
for old, new in replacements:
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"Chapter 8 contract marker mismatch {count}: {old!r}")
    text = text.replace(old, new, 1)
p.write_text(text, encoding="utf-8")

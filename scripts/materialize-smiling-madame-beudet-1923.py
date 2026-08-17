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
    originalTitle: "La Souriante madame Beudet",
    aliases: ["The Smiling Mrs. Beudet"],
    year: 1923,
    titleType: "Short",
    runtimeMins: 36,
    directors: ["Germaine Dulac"],
    genres: ["Drama", "Short"],
    premise: "Build La Souriante madame Beudet as Germaine Dulac's 1923 Film d'Art - Vandal et Delac adaptation of the Denys Amiel-André Obey play, organized around Madame Beudet's constrained bourgeois daily life and subjective inner world rather than as a neutral filmed-stage comedy. Dulac directs and co-writes with André Obey; Charles Delac and Marcel Vandal produce; Maurice Forster and Paul Parguel photograph; Germaine Dermoz and Alexandre Arquillière carry the central marriage. Translate theatrical material into cinema through controlled performance, domestic spatial pressure, symbolic objects, fantasy, subjective emphasis and associative montage so the spectator can distinguish external routine from imagined freedom. Treat feminist interpretation as a historically grounded perspective rather than a simplistic empowerment score, and avoid claiming the film single-handedly invented feminist cinema or film Impressionism. The husband's recurring revolver joke and Madame Beudet's later intervention remain historical narrative evidence only: gameplay must never ask the player or performers to handle a functional firearm or recreate dangerous weapon behavior; use an inert prop or off-screen/non-operational substitute. Preserve copy history: La Cinémathèque française lists a 36-minute 35mm presentation while Fondation Jérôme Seydoux-Pathé lists a 38-minute 35mm Eye Filmmuseum copy, so the stored 36-minute runtime is representative rather than universal.",
    sourceId: "manual_the_smiling_madame_beudet_1923",
    sourceUrl: "https://www.cinematheque.fr/film/57083.html",
    scenarioType: "feminist_impressionist_subjective_marriage_adaptation",
    requiredChoicesSeed: {
      screenplay: ["dulac_obey_stage_to_screen_adaptation", "subjective_inner_life_structure", "domestic_routine_vs_imagined_freedom"],
      camera: ["forster_parguel_subjective_emphasis", "domestic_spatial_constraint", "safe_inert_weapon_substitution"],
      editing: ["associative_montage", "fantasy_reality_contrast", "symbolic_object_recurrence"],
      sound: ["silent_image_production", "variable_live_accompaniment", "no_canonical_synchronized_1923_score_claim"],
      themes: ["film_history", "french_impressionism", "germaine_dulac", "feminist_film_history", "subjectivity", "adaptation_ethics"],
    },
    learningGoals: [
      "Transform a stage-derived bourgeois-marriage drama into cinema by assigning subjective framing, fantasy, symbolic detail and associative montage to Madame Beudet's point of view rather than simply photographing dialogue and blocking.",
      "Coordinate Dulac and Obey's screenplay adaptation with Delac/Vandal production, Forster/Parguel photography and Dermoz/Arquillière performance as a collaborative system rather than a director-only legend.",
      "Use a constrained domestic interior as an active production problem: repetition, object placement, gesture and visual emphasis should make routine feel restrictive while fantasy passages open a contrasting subjective space.",
      "Treat the film's feminist historical importance critically and specifically—gendered marriage, autonomy, desire and authorship—without converting feminism into a player score or claiming one uncontested first.",
      "Keep the revolver motif ethically bounded: use only an inert or non-operational substitute, never require firearm handling or dangerous reenactment, and make the object function narratively through framing, reaction and editing.",
      "Preserve version and exhibition boundaries by distinguishing the 36-minute Cinémathèque presentation, the 38-minute Eye/Fondation Pathé copy and modern live accompaniment from one supposedly immutable 1923 object.",
    ],
    phases: [
      { id: "pitch", label: "Subjective adaptation pitch", player_task: "Define how the adaptation will make Madame Beudet's inner life—not merely the marriage plot—the organizing cinematic problem." },
      { id: "research", label: "Dulac, production and feminist-history research", player_task: "Ground the play adaptation, Film d'Art - Vandal et Delac, Delac/Vandal producing, Forster/Parguel photography, cast, impressionist context, feminist historiography and copy-runtime variation in institutional evidence." },
      { id: "screenplay", label: "From stage action to screen subjectivity", player_task: "Map routine domestic beats against fantasies, symbolic objects and subjective interruptions so the screenplay creates a visual argument instead of relying on theatrical dialogue." },
      { id: "casting", label: "Gesture under domestic pressure", player_task: "Direct Dermoz and Arquillière through contrasting gesture, timing and attention so the marriage's power imbalance is legible without reducing either performer to appearance-based scoring." },
      { id: "production_design", label: "The room as constraint", player_task: "Organize the piano, desk, doors and recurring objects so everyday geography reinforces confinement while remaining clear enough for fantasy and symbolic deviations to register." },
      { id: "cinematography", label: "Subjective emphasis and safe prop work", player_task: "Use Forster/Parguel's credited photographic role as the basis for controlled emphasis, contrast and fantasy transitions; any revolver image must use an inert or non-operational substitute with no dangerous handling task." },
      { id: "editing", label: "Associative inner-life montage", player_task: "Cut among routine action, imagined alternatives, symbolic inserts and reaction so subjective meaning accumulates through association rather than arbitrary discontinuity." },
      { id: "sound", label: "Silent production, variable accompaniment", player_task: "Keep the silent image production historically distinct from modern or venue-specific live accompaniment; do not invent one canonical synchronized 1923 soundtrack." },
      { id: "release", label: "Print, runtime and canon afterlife", player_task: "Model archival/presentation variation and later feminist/avant-garde canonization separately from original production, preserving the documented 36/38-minute copy boundary." },
    ],
  },
'''

# Append scenario.
p = Path("src/core/chapterEightFrenchAvantGardeExpansion.ts")
text = p.read_text(encoding="utf-8")
marker = "\n] as const;\n\nexport function mergeChapterEightFrenchAvantGardeExpansion("
if text.count(marker) != 1:
    raise SystemExit(f"expansion marker count={text.count(marker)}")
p.write_text(text.replace(marker, "\n" + definition + "] as const;\n\nexport function mergeChapterEightFrenchAvantGardeExpansion(", 1), encoding="utf-8")

# Scenario regression.
p = Path("src/core/chapterEightFrenchAvantGardeExpansion.test.ts")
text = p.read_text(encoding="utf-8")
old_title = "Chapter 8 materializes Coeur fidele, Napoleon, Un Chien Andalou and Entr'acte as distinct French avant-garde production cases"
new_title = "Chapter 8 materializes Coeur fidele, Napoleon, Un Chien Andalou, Entr'acte and The Smiling Madame Beudet as distinct French avant-garde production cases"
if text.count(old_title) != 1:
    raise SystemExit("scenario test title marker mismatch")
text = text.replace(old_title, new_title, 1)
if text.count("assert.equal(chapterEightFrenchAvantGardeExpansionDefinitions.length, 4);") != 1:
    raise SystemExit("scenario count marker mismatch")
text = text.replace("assert.equal(chapterEightFrenchAvantGardeExpansionDefinitions.length, 4);", "assert.equal(chapterEightFrenchAvantGardeExpansionDefinitions.length, 5);", 1)
test_block = '''

  const beudet = chapterEightFrenchAvantGardeExpansionDefinitions.find((item) => item.id === "scenario_the_smiling_madame_beudet_1923");
  assert.ok(beudet);
  assert.equal(beudet.title, "The Smiling Madame Beudet");
  assert.equal(beudet.originalTitle, "La Souriante madame Beudet");
  assert.equal(beudet.year, 1923);
  assert.equal(beudet.runtimeMins, 36);
  assert.equal(beudet.scenarioType, "feminist_impressionist_subjective_marriage_adaptation");
  assert.equal(beudet.sourceId, "manual_the_smiling_madame_beudet_1923");
  assert.equal(beudet.sourceUrl, "https://www.cinematheque.fr/film/57083.html");
  assert.ok(beudet.premise.includes("Germaine Dulac"));
  assert.ok(beudet.premise.includes("Le Film d'Art - Vandal et Delac"));
  assert.ok(beudet.premise.includes("Maurice Forster and Paul Parguel"));
  assert.ok(beudet.premise.includes("36-minute"));
  assert.ok(beudet.premise.includes("38-minute"));
  assert.ok(beudet.premise.includes("must never ask the player or performers to handle a functional firearm"));
  assert.ok(beudet.requiredChoicesSeed.editing.includes("associative_montage"));
  assert.ok(beudet.requiredChoicesSeed.camera.includes("safe_inert_weapon_substitution"));
  assert.ok(beudet.requiredChoicesSeed.themes.includes("feminist_film_history"));
  assert.ok(beudet.learningGoals.some((goal) => goal.includes("uncontested first")));
  assert.ok(beudet.learningGoals.some((goal) => goal.includes("36-minute Cinémathèque presentation")));
  assert.ok(beudet.learningGoals.length >= 6);
  assert.ok(beudet.phases.length >= 9);'''
if text.count("\n});") != 1:
    raise SystemExit("scenario test close marker mismatch")
p.write_text(text.replace("\n});", test_block + "\n});", 1), encoding="utf-8")

# Film Study registration.
replace_once(
    "src/ui/data/scenarioFilmStudyMap.ts",
    'import { entrActeFilmHistoryProfile } from "./scenarioFilmStudyFrenchAvantGardeEntrActe";\n',
    'import { entrActeFilmHistoryProfile } from "./scenarioFilmStudyFrenchAvantGardeEntrActe";\nimport { smilingMadameBeudetFilmHistoryProfile } from "./scenarioFilmStudyFrenchAvantGardeSmilingMadameBeudet";\n',
)
replace_once(
    "src/ui/data/scenarioFilmStudyMap.ts",
    "  [entrActeFilmHistoryProfile.scenarioId]: entrActeFilmHistoryProfile,\n",
    "  [entrActeFilmHistoryProfile.scenarioId]: entrActeFilmHistoryProfile,\n  [smilingMadameBeudetFilmHistoryProfile.scenarioId]: smilingMadameBeudetFilmHistoryProfile,\n",
)

# Verification registration.
replace_once(
    "src/ui/data/scenarioProductionVerificationRegistry.ts",
    'import { entrActeProductionCaseVerification } from "./scenarioProductionVerificationEntrActe";\n',
    'import { entrActeProductionCaseVerification } from "./scenarioProductionVerificationEntrActe";\nimport { smilingMadameBeudetProductionCaseVerification } from "./scenarioProductionVerificationSmilingMadameBeudet";\n',
)
replace_once(
    "src/ui/data/scenarioProductionVerificationRegistry.ts",
    "  entrActeProductionCaseVerification,\n",
    "  entrActeProductionCaseVerification,\n  smilingMadameBeudetProductionCaseVerification,\n",
)

# Chapter 8 Atlas state: final P1 moves to existing.
replace_once("scripts/film-history-chapter-eight-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 409;", "const EXPECTED_ATLAS_COUNT = 410;")
replace_once(
    "scripts/film-history-chapter-eight-atlas-audit.mjs",
    '  USE_EXISTING: ["Cœur fidèle", "Napoléon", "The Passion of Joan of Arc", "Un Chien Andalou", "Entr\'acte"],\n  P0: [],\n  P1: ["The Smiling Madame Beudet"],',
    '  USE_EXISTING: ["Cœur fidèle", "Napoléon", "The Passion of Joan of Arc", "Un Chien Andalou", "Entr\'acte", "The Smiling Madame Beudet"],\n  P0: [],\n  P1: [],',
)

replace_once("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 409;", "const EXPECTED_PLAYABLE_SCENARIOS = 410;")
replace_once("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 409;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 410;")

# Permanent Chapter 8 contract.
p = Path("src/core/filmHistoryChapterEightAuditContract.test.ts")
text = p.read_text(encoding="utf-8")
replacements = [
    ('assert.match(audit, /const EXPECTED_ATLAS_COUNT = 409;/);', 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 410;/);'),
    ('assert.match(audit, /USE_EXISTING: \\["Cœur fidèle", "Napoléon", "The Passion of Joan of Arc", "Un Chien Andalou", "Entr\'acte"\\]/);', 'assert.match(audit, /USE_EXISTING: \\["Cœur fidèle", "Napoléon", "The Passion of Joan of Arc", "Un Chien Andalou", "Entr\'acte", "The Smiling Madame Beudet"\\]/);'),
    ('assert.match(audit, /P1: \\["The Smiling Madame Beudet"\\]/);', 'assert.match(audit, /P1: \\[\\]/);'),
    ('assert.deepEqual(resolved.byDecision.USE_EXISTING, ["The Passion of Joan of Arc", "Cœur fidèle", "Napoléon", "Un Chien Andalou", "Entr\'acte"]);', 'assert.deepEqual(resolved.byDecision.USE_EXISTING, ["The Passion of Joan of Arc", "Cœur fidèle", "Napoléon", "Un Chien Andalou", "Entr\'acte", "The Smiling Madame Beudet"]);'),
    ('assert.deepEqual(resolved.byDecision.P1, ["The Smiling Madame Beudet"]);', 'assert.deepEqual(resolved.byDecision.P1, []);'),
    ('assert.deepEqual(resolved.recommendedNewProductionCases, ["The Smiling Madame Beudet"]);', 'assert.deepEqual(resolved.recommendedNewProductionCases, []);'),
]
for old, new in replacements:
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"Chapter 8 contract marker mismatch {count}: {old!r}")
    text = text.replace(old, new, 1)
p.write_text(text, encoding="utf-8")

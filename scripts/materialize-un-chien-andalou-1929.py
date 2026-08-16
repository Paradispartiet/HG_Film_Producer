from pathlib import Path


def replace_once(path: str, old: str, new: str) -> None:
    p = Path(path)
    text = p.read_text(encoding="utf-8")
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{path}: expected one marker, got {count}: {old!r}")
    p.write_text(text.replace(old, new, 1), encoding="utf-8")


definition = '''  {
    id: "scenario_un_chien_andalou_1929",
    title: "Un Chien Andalou",
    originalTitle: "Un chien andalou",
    aliases: ["An Andalusian Dog"],
    year: 1929,
    titleType: "Short",
    runtimeMins: 17,
    directors: ["Luis Buñuel"],
    genres: ["Fantasy", "Horror", "Short"],
    premise: "Build Un Chien Andalou as the 1928–1929 Buñuel-Dalí small-scale Surrealist production and Paris exhibition problem rather than as a random-image generator. Luis Buñuel and Salvador Dalí write the scenario collaboratively; Buñuel directs, produces and edits; Pierre Braunberger is executive producer; Albert Duverger photographs; Pierre Schildknecht designs; and Studio-Films produces and originally distributes the work. Organize dream-derived association through concrete shot relations—montage, dissolves, superimpositions, slow motion, discontinuous transitions and parodic intertitles—without forcing a classical causal explanation onto the sequence. Treat the 6 June 1929 Studio des Ursulines presentation and later Surrealist canonization as reception history, not proof that every technique was unprecedented. The eye-cutting image, dead-animal imagery, sexual threat and other disturbing material remain historical evidence only: gameplay must never instruct the player to injure a person or animal, reproduce coercion, or score shock value; safe substitution and analysis are mandatory.",
    sourceId: "manual_un_chien_andalou_1929",
    sourceUrl: "https://www.cinematheque.fr/film/47197.html",
    scenarioType: "surrealist_discontinuous_association_production",
    requiredChoicesSeed: {
      screenplay: ["bunuel_dali_dream_derived_collaboration", "free_association_without_classical_explanation", "concrete_image_constraints_over_randomness"],
      camera: ["duverger_clear_image_capture", "ordinary_space_for_irrational_conjunction", "safe_substitution_for_harm_images"],
      editing: ["discontinuous_associative_montage", "dissolve_superimposition_slow_motion", "parodic_intertitle_time_disruption"],
      sound: ["silent_era_image_production", "preexisting_music_exhibition_context", "later_recorded_tracks_not_location_sound"],
      themes: ["film_history", "surrealism", "bunuel_dali", "alternative_financing", "alternative_exhibition", "representation_ethics"],
    },
    learningGoals: [
      "Plan a Surrealist short from concrete image associations and rejected rational links rather than equating non-classical structure with arbitrary shot order.",
      "Coordinate Buñuel and Dalí's documented screenplay collaboration with Duverger's photography, Schildknecht's design, Batcheff's assistant-direction work and Braunberger's production role instead of collapsing the film into a two-name legend.",
      "Use montage, dissolve, superimposition, slow motion and intertitle disruption to create associative pressure while keeping each photographed action operationally clear enough for the transition to register.",
      "Treat Studio-Films, small-scale financing and the Studio des Ursulines presentation as part of the production/exhibition system that allowed a short experimental work to circulate outside a normal feature model.",
      "Keep shocking historical images ethically bounded: never reproduce injury to a person or animal, never make coercion a performance objective, and use safe substitution, non-harmful effects or critical analysis instead.",
      "Separate production and afterlife: 1928-era filming, the June 1929 Paris presentation, Surrealist reception and later digital restoration/presentation states are related but distinct historical layers.",
    ],
    phases: [
      { id: "pitch", label: "Associative short-film pitch", player_task: "Define a short whose power comes from collision among specific images and desires rather than conventional plot explanation or random shock accumulation." },
      { id: "research", label: "Credits, Surrealism and safety research", player_task: "Ground Buñuel, Dalí, Studio-Films, Braunberger, Duverger, Schildknecht, Batcheff, the 1929 presentation, later restoration and the ethical status of disturbing images in institutional evidence." },
      { id: "screenplay", label: "Dream-derived constraints", player_task: "Build an ordered chain of images from the Buñuel-Dalí collaborative principle of rejecting rational explanation while still specifying concrete actions, transitions and recurring motifs." },
      { id: "casting", label: "Legible bodies in impossible relations", player_task: "Direct Mareuil, Batcheff and the ensemble so gesture and reaction remain precise even when time, identity and causality become unstable; coercion and injury are never actor tasks." },
      { id: "production_design", label: "Ordinary matter, irrational conjunction", player_task: "Use Schildknecht's design logic to keep rooms, props and clothing materially recognizable so montage can make their combinations strange without requiring unsafe spectacle." },
      { id: "cinematography", label: "Clear capture, safe effects", player_task: "Use Duverger's photography to make each constituent image readable, and replace any harmful historical act with safe props, compositing, off-screen implication or analysis rather than reenactment." },
      { id: "editing", label: "Discontinuity with internal discipline", player_task: "Join images through dissolve, superimposition, slow motion, temporal intertitles and abrupt cuts so free association remains perceptible as design rather than accidental sequencing." },
      { id: "sound", label: "Silent image, exhibition music", player_task: "Keep photographed production separate from music attached in exhibition or later presentations; pre-existing music is historical context, not evidence of synchronized location sound." },
      { id: "release", label: "Specialist venue and Surrealist reception", player_task: "Model the Studio des Ursulines presentation and later movement affiliation as alternative exhibition/reception history without pretending later canonical status was guaranteed during production." },
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

# Scenario test.
p = Path("src/core/chapterEightFrenchAvantGardeExpansion.test.ts")
text = p.read_text(encoding="utf-8")
text = text.replace("Chapter 8 materializes Coeur fidele and Napoleon as distinct French avant-garde production cases", "Chapter 8 materializes Coeur fidele, Napoleon and Un Chien Andalou as distinct French avant-garde production cases", 1)
text = text.replace("assert.equal(chapterEightFrenchAvantGardeExpansionDefinitions.length, 2);", "assert.equal(chapterEightFrenchAvantGardeExpansionDefinitions.length, 3);", 1)
test_block = '''

  const chien = chapterEightFrenchAvantGardeExpansionDefinitions.find((item) => item.id === "scenario_un_chien_andalou_1929");
  assert.ok(chien);
  assert.equal(chien.title, "Un Chien Andalou");
  assert.equal(chien.originalTitle, "Un chien andalou");
  assert.equal(chien.year, 1929);
  assert.equal(chien.runtimeMins, 17);
  assert.equal(chien.scenarioType, "surrealist_discontinuous_association_production");
  assert.equal(chien.sourceId, "manual_un_chien_andalou_1929");
  assert.equal(chien.sourceUrl, "https://www.cinematheque.fr/film/47197.html");
  assert.ok(chien.premise.includes("Luis Buñuel and Salvador Dalí"));
  assert.ok(chien.premise.includes("Studio-Films"));
  assert.ok(chien.premise.includes("Albert Duverger"));
  assert.ok(chien.premise.includes("Studio des Ursulines"));
  assert.ok(chien.premise.includes("must never instruct the player to injure a person or animal"));
  assert.ok(chien.requiredChoicesSeed.editing.includes("discontinuous_associative_montage"));
  assert.ok(chien.requiredChoicesSeed.camera.includes("safe_substitution_for_harm_images"));
  assert.ok(chien.requiredChoicesSeed.themes.includes("representation_ethics"));
  assert.ok(chien.learningGoals.some((goal) => goal.includes("never reproduce injury")));
  assert.ok(chien.learningGoals.some((goal) => goal.includes("distinct historical layers")));
  assert.ok(chien.learningGoals.length >= 6);
  assert.ok(chien.phases.length >= 9);'''
if text.count("\n});") != 1:
    raise SystemExit("scenario test close marker mismatch")
p.write_text(text.replace("\n});", test_block + "\n});", 1), encoding="utf-8")

# Film Study registration.
replace_once(
    "src/ui/data/scenarioFilmStudyMap.ts",
    'import { napoleonFilmHistoryProfile } from "./scenarioFilmStudyFrenchAvantGardeNapoleon";\n',
    'import { napoleonFilmHistoryProfile } from "./scenarioFilmStudyFrenchAvantGardeNapoleon";\nimport { unChienAndalouFilmHistoryProfile } from "./scenarioFilmStudyFrenchAvantGardeUnChienAndalou";\n',
)
replace_once(
    "src/ui/data/scenarioFilmStudyMap.ts",
    "  [napoleonFilmHistoryProfile.scenarioId]: napoleonFilmHistoryProfile,\n",
    "  [napoleonFilmHistoryProfile.scenarioId]: napoleonFilmHistoryProfile,\n  [unChienAndalouFilmHistoryProfile.scenarioId]: unChienAndalouFilmHistoryProfile,\n",
)

# Verification registration.
replace_once(
    "src/ui/data/scenarioProductionVerificationRegistry.ts",
    'import { napoleonProductionCaseVerification } from "./scenarioProductionVerificationNapoleon";\n',
    'import { napoleonProductionCaseVerification } from "./scenarioProductionVerificationNapoleon";\nimport { unChienAndalouProductionCaseVerification } from "./scenarioProductionVerificationUnChienAndalou";\n',
)
replace_once(
    "src/ui/data/scenarioProductionVerificationRegistry.ts",
    "  napoleonProductionCaseVerification,\n",
    "  napoleonProductionCaseVerification,\n  unChienAndalouProductionCaseVerification,\n",
)

# Chapter 8 gap state.
replace_once("scripts/film-history-chapter-eight-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 407;", "const EXPECTED_ATLAS_COUNT = 408;")
replace_once(
    "scripts/film-history-chapter-eight-atlas-audit.mjs",
    '  USE_EXISTING: ["Cœur fidèle", "Napoléon", "The Passion of Joan of Arc"],\n  P0: ["Un Chien Andalou"],',
    '  USE_EXISTING: ["Cœur fidèle", "Napoléon", "The Passion of Joan of Arc", "Un Chien Andalou"],\n  P0: [],',
)

replace_once("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 407;", "const EXPECTED_PLAYABLE_SCENARIOS = 408;")
replace_once("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 407;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 408;")

# Permanent Chapter 8 contract.
p = Path("src/core/filmHistoryChapterEightAuditContract.test.ts")
text = p.read_text(encoding="utf-8")
replacements = [
    ('assert.match(audit, /const EXPECTED_ATLAS_COUNT = 407;/);', 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 408;/);'),
    ('assert.match(audit, /USE_EXISTING: \\["Cœur fidèle", "Napoléon", "The Passion of Joan of Arc"\\]/);', 'assert.match(audit, /USE_EXISTING: \\["Cœur fidèle", "Napoléon", "The Passion of Joan of Arc", "Un Chien Andalou"\\]/);'),
    ('assert.match(audit, /P0: \\["Un Chien Andalou"\\]/);', 'assert.match(audit, /P0: \\[\\]/);'),
    ('assert.deepEqual(resolved.byDecision.USE_EXISTING, ["The Passion of Joan of Arc", "Cœur fidèle", "Napoléon"]);', 'assert.deepEqual(resolved.byDecision.USE_EXISTING, ["The Passion of Joan of Arc", "Cœur fidèle", "Napoléon", "Un Chien Andalou"]);'),
    ('assert.deepEqual(resolved.byDecision.P0, ["Un Chien Andalou"]);', 'assert.deepEqual(resolved.byDecision.P0, []);'),
    ('assert.deepEqual(resolved.recommendedNewProductionCases, ["Un Chien Andalou", "The Smiling Madame Beudet", "Entr\'acte"]);', 'assert.deepEqual(resolved.recommendedNewProductionCases, ["The Smiling Madame Beudet", "Entr\'acte"]);'),
]
for old, new in replacements:
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"Chapter 8 contract marker mismatch {count}: {old!r}")
    text = text.replace(old, new, 1)
p.write_text(text, encoding="utf-8")

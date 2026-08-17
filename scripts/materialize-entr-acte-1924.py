from pathlib import Path


def replace_once(path: str, old: str, new: str) -> None:
    p = Path(path)
    text = p.read_text(encoding="utf-8")
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{path}: expected one marker, got {count}: {old!r}")
    p.write_text(text.replace(old, new, 1), encoding="utf-8")


definition = '''  {
    id: "scenario_entr_acte_1924",
    title: "Entr'acte",
    originalTitle: "Entr'acte",
    aliases: ["Entr’acte"],
    year: 1924,
    titleType: "Short",
    runtimeMins: 23,
    directors: ["René Clair"],
    genres: ["Comedy", "Experimental", "Short"],
    premise: "Build Entr'acte as the 1924 Ballets Suédois commission made for Francis Picabia's Relâche rather than as an isolated anthology of random Dada images. Rolf de Maré commissions the film; René Clair directs, adapts and edits; Francis Picabia provides the scenario; Jimmy Berliet photographs; Erik Satie composes the original accompaniment; and performers including Jean Börlin, Inge Frïss, Marcel Duchamp, Man Ray, Picabia, Satie and de Maré connect the screen event to Parisian ballet and artist networks. Coordinate frame-by-frame/stop-motion work, accelerated and slowed motion, multiple exposure, unusual viewpoints, rapid cutting, inversion, disappearance and chase rhythm as concrete camera-and-editing procedures whose comic effect depends on timing and legibility. Preserve the historical inheritance from Méliès and Pathé-era trick/chase comedy instead of claiming Clair invented these devices. Treat the 4 December 1924 Théâtre des Champs-Élysées Relâche presentation as part of the production design, and preserve version criticism: Clair removed shots in 1967 when reshaping the work as an autonomous film, while the Fondation Jérôme Seydoux-Pathé restoration reinstated first-version material. The stored 23-minute runtime is a representative restoration value, not a claim that every 1924 or modern presentation has one identical duration.",
    sourceId: "manual_entr_acte_1924",
    sourceUrl: "https://www.fondation-jeromeseydoux-pathe.com/cms/restaurations",
    scenarioType: "dada_ballet_interval_trick_montage_production",
    requiredChoicesSeed: {
      screenplay: ["picabia_visual_argument", "relache_interval_function", "comic_incidents_over_classical_causality"],
      camera: ["berliet_multiple_exposure_and_viewpoint", "frame_by_frame_stop_motion", "accelerated_and_slowed_motion"],
      editing: ["clair_rapid_rhythmic_cutting", "chase_acceleration_and_reversal", "version_1924_1967_restoration_control"],
      sound: ["satie_original_accompaniment", "silent_image_production", "modern_recording_not_location_sound"],
      themes: ["film_history", "dada", "ballets_suedois", "relache", "cross_art_collaboration", "alternative_exhibition"],
    },
    learningGoals: [
      "Plan Entr'acte as a commissioned screen component of Relâche, so duration, rhythm, performers and musical accompaniment answer to a theatrical event rather than a conventional feature-release model.",
      "Coordinate Clair, Picabia, de Maré, Berliet and Satie as distinct production roles instead of collapsing Dada collaboration into a lone-director legend.",
      "Use frame-by-frame work, speed changes, multiple exposure, viewpoint and rapid cutting as planned procedures with readable inputs and comic timing rather than a one-click avant-garde effect.",
      "Preserve the trick-film and chase-comedy inheritance documented by Fondation Pathé: formal irreverence can reuse older cinema without falsely claiming every device as a 1924 invention.",
      "Make music an exhibition-time structural partner by coordinating Satie's original accompaniment with image rhythm while keeping silent image production distinct from later recorded playback.",
      "Track the version tree from the 1924 Relâche form through Clair's 1967 removals to the later restoration, and never treat the representative 23-minute restoration runtime as one immutable original duration.",
    ],
    phases: [
      { id: "pitch", label: "Interval-film commission", player_task: "Define what a film must do inside Relâche's theatrical interval and why provocation, laughter, speed and visual surprise serve that event better than a conventional self-contained plot." },
      { id: "research", label: "Ballet, credits and version research", player_task: "Ground de Maré, Ballets Suédois, Picabia, Clair, Berliet, Satie, the Théâtre des Champs-Élysées presentation, earlier trick-film inheritance and the 1967/restoration version tree in institutional evidence." },
      { id: "screenplay", label: "Visual argument, not random list", player_task: "Translate Picabia's scenario into a sequence of concrete incidents whose absurdity is designed through recurrence, escalation, inversion and collision rather than arbitrary shot accumulation." },
      { id: "casting", label: "Artists, dancers and comic bodies", player_task: "Coordinate Börlin, Frïss, Duchamp, Man Ray, Picabia, Satie, de Maré and the ensemble around precise poses, dance-derived movement and pursuit timing without turning physical identity into a score." },
      { id: "production_design", label: "Paris, props and event logic", player_task: "Use rooftops, streets, fairground imagery, the hearse, chess, cannon and everyday objects as clear visual materials whose collision can become absurd without inventing unsupported set-construction history." },
      { id: "cinematography", label: "Berliet's trick-image capture", player_task: "Plan ordinary viewpoints, low or inverted viewpoints, frame-by-frame capture, multiple exposure and speed-change material so each optical or temporal transformation has a reproducible production input." },
      { id: "editing", label: "Acceleration, chase and reversal", player_task: "Build rhythm from rapid cutting, increasing pursuit speed, repetition, disappearance and reversal while keeping the 1924, 1967 and restored assemblies historically distinct." },
      { id: "sound", label: "Satie as structural accompaniment", player_task: "Coordinate the silent image track with Satie's original accompaniment as part of the Relâche event, while treating modern recorded performances as later presentation states rather than synchronized production sound." },
      { id: "release", label: "Relâche event and restoration afterlife", player_task: "Model the 4 December 1924 theatrical presentation, later autonomous circulation and restoration as different exhibition states instead of assuming one stable release object from 1924 to the present." },
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
replace_title_old = "Chapter 8 materializes Coeur fidele, Napoleon and Un Chien Andalou as distinct French avant-garde production cases"
replace_title_new = "Chapter 8 materializes Coeur fidele, Napoleon, Un Chien Andalou and Entr'acte as distinct French avant-garde production cases"
if text.count(replace_title_old) != 1:
    raise SystemExit("scenario test title marker mismatch")
text = text.replace(replace_title_old, replace_title_new, 1)
if text.count("assert.equal(chapterEightFrenchAvantGardeExpansionDefinitions.length, 3);") != 1:
    raise SystemExit("scenario count marker mismatch")
text = text.replace("assert.equal(chapterEightFrenchAvantGardeExpansionDefinitions.length, 3);", "assert.equal(chapterEightFrenchAvantGardeExpansionDefinitions.length, 4);", 1)
test_block = '''

  const entrActe = chapterEightFrenchAvantGardeExpansionDefinitions.find((item) => item.id === "scenario_entr_acte_1924");
  assert.ok(entrActe);
  assert.equal(entrActe.title, "Entr'acte");
  assert.equal(entrActe.year, 1924);
  assert.equal(entrActe.runtimeMins, 23);
  assert.equal(entrActe.scenarioType, "dada_ballet_interval_trick_montage_production");
  assert.equal(entrActe.sourceId, "manual_entr_acte_1924");
  assert.equal(entrActe.sourceUrl, "https://www.fondation-jeromeseydoux-pathe.com/cms/restaurations");
  assert.ok(entrActe.premise.includes("Rolf de Maré"));
  assert.ok(entrActe.premise.includes("Francis Picabia"));
  assert.ok(entrActe.premise.includes("Jimmy Berliet"));
  assert.ok(entrActe.premise.includes("Erik Satie"));
  assert.ok(entrActe.premise.includes("4 December 1924"));
  assert.ok(entrActe.premise.includes("1967"));
  assert.ok(entrActe.premise.includes("representative restoration value"));
  assert.ok(entrActe.requiredChoicesSeed.camera.includes("frame_by_frame_stop_motion"));
  assert.ok(entrActe.requiredChoicesSeed.editing.includes("version_1924_1967_restoration_control"));
  assert.ok(entrActe.requiredChoicesSeed.sound.includes("satie_original_accompaniment"));
  assert.ok(entrActe.learningGoals.some((goal) => goal.includes("trick-film and chase-comedy inheritance")));
  assert.ok(entrActe.learningGoals.some((goal) => goal.includes("version tree")));
  assert.ok(entrActe.learningGoals.length >= 6);
  assert.ok(entrActe.phases.length >= 9);'''
if text.count("\n});") != 1:
    raise SystemExit("scenario test close marker mismatch")
p.write_text(text.replace("\n});", test_block + "\n});", 1), encoding="utf-8")

# Film Study registration.
replace_once(
    "src/ui/data/scenarioFilmStudyMap.ts",
    'import { unChienAndalouFilmHistoryProfile } from "./scenarioFilmStudyFrenchAvantGardeUnChienAndalou";\n',
    'import { unChienAndalouFilmHistoryProfile } from "./scenarioFilmStudyFrenchAvantGardeUnChienAndalou";\nimport { entrActeFilmHistoryProfile } from "./scenarioFilmStudyFrenchAvantGardeEntrActe";\n',
)
replace_once(
    "src/ui/data/scenarioFilmStudyMap.ts",
    "  [unChienAndalouFilmHistoryProfile.scenarioId]: unChienAndalouFilmHistoryProfile,\n",
    "  [unChienAndalouFilmHistoryProfile.scenarioId]: unChienAndalouFilmHistoryProfile,\n  [entrActeFilmHistoryProfile.scenarioId]: entrActeFilmHistoryProfile,\n",
)

# Verification registration.
replace_once(
    "src/ui/data/scenarioProductionVerificationRegistry.ts",
    'import { unChienAndalouProductionCaseVerification } from "./scenarioProductionVerificationUnChienAndalou";\n',
    'import { unChienAndalouProductionCaseVerification } from "./scenarioProductionVerificationUnChienAndalou";\nimport { entrActeProductionCaseVerification } from "./scenarioProductionVerificationEntrActe";\n',
)
replace_once(
    "src/ui/data/scenarioProductionVerificationRegistry.ts",
    "  unChienAndalouProductionCaseVerification,\n",
    "  unChienAndalouProductionCaseVerification,\n  entrActeProductionCaseVerification,\n",
)

# Chapter 8 Atlas state: Entr'acte moves from P1 to existing.
replace_once("scripts/film-history-chapter-eight-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 408;", "const EXPECTED_ATLAS_COUNT = 409;")
replace_once(
    "scripts/film-history-chapter-eight-atlas-audit.mjs",
    '  USE_EXISTING: ["Cœur fidèle", "Napoléon", "The Passion of Joan of Arc", "Un Chien Andalou"],\n  P0: [],\n  P1: ["Entr\'acte", "The Smiling Madame Beudet"],',
    '  USE_EXISTING: ["Cœur fidèle", "Napoléon", "The Passion of Joan of Arc", "Un Chien Andalou", "Entr\'acte"],\n  P0: [],\n  P1: ["The Smiling Madame Beudet"],',
)

replace_once("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 408;", "const EXPECTED_PLAYABLE_SCENARIOS = 409;")
replace_once("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 408;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 409;")

# Permanent Chapter 8 contract.
p = Path("src/core/filmHistoryChapterEightAuditContract.test.ts")
text = p.read_text(encoding="utf-8")
replacements = [
    ('assert.match(audit, /const EXPECTED_ATLAS_COUNT = 408;/);', 'assert.match(audit, /const EXPECTED_ATLAS_COUNT = 409;/);'),
    ('assert.match(audit, /USE_EXISTING: \\["Cœur fidèle", "Napoléon", "The Passion of Joan of Arc", "Un Chien Andalou"\\]/);', 'assert.match(audit, /USE_EXISTING: \\["Cœur fidèle", "Napoléon", "The Passion of Joan of Arc", "Un Chien Andalou", "Entr\'acte"\\]/);'),
    ('assert.match(audit, /P1: \\["Entr\'acte", "The Smiling Madame Beudet"\\]/);', 'assert.match(audit, /P1: \\["The Smiling Madame Beudet"\\]/);'),
    ('assert.deepEqual(resolved.byDecision.USE_EXISTING, ["The Passion of Joan of Arc", "Cœur fidèle", "Napoléon", "Un Chien Andalou"]);', 'assert.deepEqual(resolved.byDecision.USE_EXISTING, ["The Passion of Joan of Arc", "Cœur fidèle", "Napoléon", "Un Chien Andalou", "Entr\'acte"]);'),
    ('assert.deepEqual(resolved.byDecision.P1, ["The Smiling Madame Beudet", "Entr\'acte"]);', 'assert.deepEqual(resolved.byDecision.P1, ["The Smiling Madame Beudet"]);'),
    ('assert.deepEqual(resolved.recommendedNewProductionCases, ["The Smiling Madame Beudet", "Entr\'acte"]);', 'assert.deepEqual(resolved.recommendedNewProductionCases, ["The Smiling Madame Beudet"]);'),
]
for old, new in replacements:
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"Chapter 8 contract marker mismatch {count}: {old!r}")
    text = text.replace(old, new, 1)
p.write_text(text, encoding="utf-8")

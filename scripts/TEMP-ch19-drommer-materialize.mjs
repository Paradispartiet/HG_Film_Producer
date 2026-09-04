import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const read = (file) => readFileSync(path.join(root, file), "utf8");
const write = (file, content) => {
  const absolute = path.join(root, file);
  mkdirSync(path.dirname(absolute), { recursive: true });
  writeFileSync(absolute, content);
};

function replaceOnce(file, before, after) {
  const source = read(file);
  const first = source.indexOf(before);
  if (first === -1) throw new Error(`${file}: required marker not found: ${before.slice(0, 120)}`);
  if (source.indexOf(before, first + before.length) !== -1) throw new Error(`${file}: marker is not unique: ${before.slice(0, 120)}`);
  write(file, source.slice(0, first) + after + source.slice(first + before.length));
}

function createPermanent(file, content) {
  const absolute = path.join(root, file);
  if (existsSync(absolute)) throw new Error(`${file}: permanent file already exists; refusing to overwrite`);
  write(file, content);
}

const expansion = `import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenDrommerExpansionDefinitions = [
  {
    id: "scenario_drommer_2024",
    title: "Drømmer",
    originalTitle: "Drømmer",
    aliases: ["Dreams", "Dreams (Sex Love)", "Dreams (Sex, Love)"],
    year: 2024,
    titleType: "Movie",
    runtimeMins: 110,
    directors: ["Dag Johan Haugerud"],
    genres: ["Drama"],
    sourceId: "nfi_drommer_2024",
    sourceUrl: "https://www.nfi.no/filmer-og-serier/drommer",
    scenarioType: "award_priority_berlinale_2025_golden_bear_norway_2024_motlys_public_support_intimate_first_person_writing_trilogy_compressed_production_cinematography_editing_collaboration_digital_dcp_110_min_uncertainty_bounded",
    premise: "Build Drømmer as Chapter 19 corrective case #2 by separating film year from award year. Norwegian Film Institute records the film as a 2024 Norwegian feature from Motlys AS, directed and written by Dag Johan Haugerud, produced by Yngve Sæther and Hege Hauff Hvattum, released in Norway on 4 October 2024 and running 110 minutes. NFI records NOK 6,350,000 in production support; this is one public-support component and must not be inflated into a complete budget, equity structure, broadcaster contribution or recoupment waterfall. The Berlinale's 2025 awards archive records Drømmer as the Golden Bear for Best Film, awarded to producers Sæther and Hvattum. That 2025 prize establishes festival priority and reception, not a 2025 film year and not craft proof. Berlinale competition material identifies the Norwegian film as a 2024 work shown in international premiere. Rushprint's direct conversation with cinematographer Cecilie Semec and editor Jens Christian Fodstad identifies both as central collaborators across Sex, Drømmer and Kjærlighet, describes three features moving through one calendar year and emphasizes that the compressed process depended on precise communication, an open collaborative climate and deliberately different visual approaches across the trilogy. Karlovy Vary's festival record independently credits Semec for cinematography, Fodstad for editing, Anna Berg for music, Yvonne Stenberg and Gisle Tveito for sound, Tuva Hølmebakk for art direction, Sæther and Hvattum as producers, Motlys as production company and Oslo Filmfond as co-production partner. Montages' close analysis documents Drømmer's first-person voice-over, strong close-up emphasis, comparatively guiding editorial flow and the texture of the central apartment; those observations are useful for formal study but do not substitute for production records. The playable case therefore locks the documented production identity, public-support boundary, 110-minute version, credited departments and cinematography-editing collaboration while refusing to invent an exact shooting calendar, day count, camera body, lenses, filtration, lighting package, data workflow, complete set/costume/makeup ledgers, production-sound chain, ADR/Foley/mix infrastructure, music-session ledger, VFX census, final budget or financing waterfall.",
    requiredChoicesSeed: {
      screenplay: ["film_year_2024_award_year_2025", "first_person_written_memory", "intimacy_and_intergenerational_reading", "festival_award_not_workflow_evidence", "finance_boundary"],
      camera: ["cecilie_semec_verified", "close_performance_attention", "trilogy_visual_differentiation", "camera_package_unresolved"],
      editing: ["jens_christian_fodstad_verified", "voiceover_picture_structure", "compressed_trilogy_collaboration", "edit_infrastructure_unresolved"],
      sound: ["gisle_tveito_yvonne_stenberg_verified", "voice_and_intimacy", "anna_berg_music_separate", "full_audio_chain_unresolved"],
      themes: ["film_history", "2024", "drommer", "norway", "motlys", "berlinale_2025", "public_support", "first_love", "writing", "chapter19"]
    },
    learningGoals: [
      "Separate Drømmer's 2024 film year from its 2025 Berlinale award year.",
      "Explain why the Golden Bear establishes selection priority and reception rather than production workflow.",
      "Identify Dag Johan Haugerud as director and screenwriter.",
      "Identify Yngve Sæther and Hege Hauff Hvattum as producers for Motlys AS.",
      "Use 4 October 2024 as the documented Norwegian premiere date.",
      "Use 110 minutes as the documented NFI runtime.",
      "Treat NOK 6,350,000 as NFI production support rather than total budget.",
      "Keep complete equity, broadcaster, co-finance, cash-flow and recoupment data unresolved.",
      "Recognize Drømmer as one part of Haugerud's Sex–Drømmer–Kjærlighet trilogy without treating trilogy branding as a production specification.",
      "Identify Cecilie Semec as cinematographer through direct craft discussion and festival credits.",
      "Identify Jens Christian Fodstad as editor through direct craft discussion and festival credits.",
      "Explain why three features moving through one calendar year increased the importance of precise communication.",
      "Explain the documented open collaboration between cinematography and editing without claiming the departments became one role.",
      "Recognize that the trilogy deliberately pursued different styles while retaining recurring collaborators.",
      "Keep exact camera body, lens, filtration, media and data specifications unresolved.",
      "Keep exact lighting fixtures, power distribution and exposure records unresolved.",
      "Identify Tuva Hølmebakk as the credited art-direction/production-design lead in the locked festival record.",
      "Keep construction, dressing, prop and complete continuity ledgers unresolved.",
      "Keep full costume and makeup continuity records unresolved.",
      "Recognize first-person voice-over and written testimony as central formal systems in Drømmer.",
      "Distinguish formal analysis of close-ups and editorial guidance from documentary proof of equipment or schedule.",
      "Identify Yvonne Stenberg and Gisle Tveito as credited sound collaborators.",
      "Identify Anna Berg as credited composer.",
      "Keep production sound, ADR, Foley, premix, final mix and delivery specifications unresolved.",
      "Keep complete music recording, orchestration, cue and licensing records unresolved.",
      "Recognize Oslo Filmfond as a documented co-production partner without inferring its exact financial share.",
      "Keep exact shooting dates, number of shooting days, overtime and company-move records unresolved.",
      "Keep stunt, intimacy-coordination, safeguarding and special-effects ledgers unresolved unless sourced.",
      "Keep VFX shot count, vendors and conform pipeline unresolved.",
      "Use award, production, craft and formal-analysis sources for distinct evidentiary purposes.",
      "Close the case only when year, award, runtime, producers, public support, department credits and uncertainty boundaries agree."
    ],
    phases: [
      { id: "year_boundary", label: "Separate film and award years", player_task: "Lock 2024 as film year and 2025 as Berlinale award year." },
      { id: "award_priority", label: "Lock the Golden Bear", player_task: "Use the prize for historical priority, never as craft proof." },
      { id: "runtime", label: "Lock the 110-minute version", player_task: "Use the NFI runtime without inventing alternate-master lineage." },
      { id: "production_identity", label: "Map Motlys", player_task: "Lock Haugerud, Sæther, Hvattum and the documented production company." },
      { id: "public_support", label: "Bound the NFI grant", player_task: "Keep NOK 6.35m separate from the unknown total budget." },
      { id: "trilogy_context", label: "Place the trilogy", player_task: "Use the three-film context without turning it into unsupported workflow detail." },
      { id: "screenplay_voice", label: "Build written memory", player_task: "Treat Johanne's writing and first-person voice as structural production requirements." },
      { id: "performance", label: "Protect intimate performance", player_task: "Plan coverage around close interpersonal attention without inventing rehearsal records." },
      { id: "cinematography", label: "Lock Semec's role", player_task: "Use the verified cinematography credit and collaboration evidence while leaving the camera package open." },
      { id: "visual_difference", label: "Differentiate the trilogy", player_task: "Preserve the documented intention for distinct visual styles across the three films." },
      { id: "production_design", label: "Lock Hølmebakk's role", player_task: "Use the verified design credit while keeping construction and continuity ledgers open." },
      { id: "editing", label: "Lock Fodstad's role", player_task: "Shape voice-over, close attention and narrative guidance through the verified editing collaboration." },
      { id: "compressed_process", label: "Coordinate a compressed slate", player_task: "Treat precise communication as a production constraint across three films in one calendar year." },
      { id: "sound", label: "Separate sound from music", player_task: "Keep Stenberg/Tveito sound and Berg music as distinct credited systems." },
      { id: "finance_boundary", label: "Freeze unknown financing", player_task: "Do not infer total budget or recoupment from public-support records." },
      { id: "schedule_boundary", label: "Freeze unknown schedule", player_task: "Do not invent shoot dates or day count from the trilogy's compressed calendar." },
      { id: "camera_boundary", label: "Freeze unknown camera package", player_task: "Do not infer bodies, lenses, filters or media from screen appearance." },
      { id: "post_boundary", label: "Freeze unknown post chain", player_task: "Keep edit infrastructure, VFX, color, audio and delivery specifics open unless sourced." },
      { id: "production_verification", label: "Close Drømmer audit", player_task: "Verify film year, award year, runtime, production identity, credits, public support and uncertainty boundaries." }
    ]
  }
] as const;

export function mergeChapterNineteenDrommerExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenDrommerExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_drommer_verified",
      source: { list_id: "manual_chapter_nineteen_drommer_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
      film: { title: definition.title, original_title: definition.originalTitle, year: definition.year, title_type: definition.titleType, runtime_mins: definition.runtimeMins, directors: definition.directors, genres: definition.genres, genre_keys: definition.genres.map((genre) => genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")), imdb_rating: 0, user_rating: 0 },
      scenario_type: definition.scenarioType,
      production_challenge: definition.premise,
      required_choices_seed: definition.requiredChoicesSeed,
      phases: definition.phases,
      learning_goals_seed: definition.learningGoals,
      manual_enrichment_needed: [],
    });
    nextPosition += 1;
  }
  return merged;
}
`;

const expansionTest = `import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenDrommerExpansionDefinitions, mergeChapterNineteenDrommerExpansion } from "./chapterNineteenDrommerExpansion.js";

test("Drømmer source-first production case separates film year, award year and uncertainty", () => {
  assert.equal(chapterNineteenDrommerExpansionDefinitions.length, 1);
  const film = chapterNineteenDrommerExpansionDefinitions[0];
  assert.equal(film.id, "scenario_drommer_2024");
  assert.equal(film.title, "Drømmer");
  assert.equal(film.year, 2024);
  assert.equal(film.runtimeMins, 110);
  assert.deepEqual(film.directors, ["Dag Johan Haugerud"]);
  assert.ok(film.aliases.includes("Dreams (Sex Love)"));
  assert.match(film.scenarioType, /berlinale_2025_golden_bear/);
  assert.ok(film.premise.includes("4 October 2024"));
  assert.ok(film.premise.includes("NOK 6,350,000"));
  assert.ok(film.premise.includes("2025 prize establishes festival priority"));
  assert.ok(film.premise.includes("Cecilie Semec"));
  assert.ok(film.premise.includes("Jens Christian Fodstad"));
  assert.ok(film.premise.includes("refusing to invent an exact shooting calendar"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("film_year_2024_award_year_2025"));
  assert.ok(film.requiredChoicesSeed.camera.includes("camera_package_unresolved"));
  assert.ok(film.learningGoals.length >= 30);
  assert.ok(film.phases.length >= 18);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("Drømmer expansion merges idempotently by normalized title and 2024 year", () => {
  const once = mergeChapterNineteenDrommerExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_drommer_2024");
  const twice = mergeChapterNineteenDrommerExpansion(once);
  assert.equal(twice.length, 1);
});
`;

const filmStudy = `import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const drommerFilmHistoryProfile = {
  scenarioId: "scenario_drommer_2024",
  period: "2024 Norwegian relationship cinema: publicly supported Motlys production, first-person written memory and compressed trilogy collaboration, followed by the 2025 Berlinale Golden Bear",
  traditions: ["Norwegian auteur cinema", "Nordic relationship drama", "literary first-person narration", "publicly supported European cinema", "festival circulation", "performance-centered urban drama"],
  before: "Drømmer belongs to Dag Johan Haugerud's Sex–Drømmer–Kjærlighet trilogy, three independent relationship films produced through Motlys and released in 2024. NFI locks Drømmer itself to 2024, a 4 October Norwegian premiere, 110 minutes, Haugerud as writer-director, Yngve Sæther and Hege Hauff Hvattum as producers and NOK 6.35 million in NFI production support. That subsidy is evidence of public support, not the complete production budget. The film's production-history value lies less in a spectacular technical invention than in how a recurring team could make three stylistically differentiated features within a compressed calendar while retaining precise craft communication.",
  moment: "Rushprint's conversation with cinematographer Cecilie Semec and editor Jens Christian Fodstad directly identifies them as central collaborators across all three films and describes a generous, open working climate in which precise communication became essential because three features were moving through one calendar year. Semec says the trilogy could have used three cinematographers because the films sought different styles, yet one photographer's imprint remains visible; she also describes editing as the place where the photographed material acquires its final particularity. Festival records independently credit Semec, Fodstad, Tuva Hølmebakk, Yvonne Stenberg, Gisle Tveito and Anna Berg. Drømmer's first-person written account and voice-over make language an upstream structural element, while formal analysis notes stronger close-up emphasis and more guiding cutting than in Sex. Those observations support study of form, but they do not license guesses about bodies, lenses, lighting, shooting days or post infrastructure.",
  after: "The 2025 Berlinale Golden Bear, awarded to producers Sæther and Hvattum, changed the film's international historical visibility without changing its film year: Drømmer remains a 2024 film. The case therefore models a crucial audit distinction between production chronology and reception chronology. It also demonstrates that a production-history chapter needs room for lower-scale craft systems built from writing, performance, recurring collaborators, public support and editorial coordination, not only new camera technologies. The locked evidence does not establish total budget, full financing waterfall, exact shoot dates/day count, camera/lens/media package, lighting ledger, complete art/costume/makeup continuity, effects/VFX census, edit storage/conform path, production-sound/ADR/Foley/mix chain or complete music-session and licensing records.",
  historyQuestion: "How did Drømmer turn a 2024 publicly supported Norwegian production, first-person written memory and a compressed three-film collaboration into a distinct intimate feature whose 2025 Golden Bear belongs to reception history rather than production dating?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "NFI fixes the Norwegian premiere to 4 October 2024; Berlinale records the 2025 Golden Bear. Film and award years remain separate." },
    { area: "movement_and_tradition", status: "mapped", note: "The case intersects Norwegian auteur cinema, relationship drama, literary narration and European festival circulation without reducing the film to one movement." },
    { area: "industry_and_production_context", status: "source_verified", note: "NFI verifies Motlys, producers and NOK 6.35m production support; festival records identify Oslo Filmfond as co-production partner. Total budget and financing shares remain unresolved." },
    { area: "reception_and_legacy", status: "source_verified", note: "Berlinale records the Golden Bear for Best Film in 2025, awarded to producers Sæther and Hvattum; the prize is not used as workflow evidence." },
    { area: "screenplay", status: "source_verified", note: "NFI verifies Haugerud as writer-director; Johanne's written account and first-person narration are treated as structural requirements, not as evidence for undocumented production mechanics." },
    { area: "directing", status: "source_verified", note: "Haugerud's authorship and the recurring trilogy collaboration are documented; exact rehearsal and blocking processes remain unresolved." },
    { area: "performance", status: "mapped", note: "The production centers intimate ensemble performance and a teenage viewpoint, but rehearsal, safeguarding and intimacy-process records are not inferred." },
    { area: "production_design", status: "source_verified", note: "Festival records credit Tuva Hølmebakk; complete construction, dressing, prop and continuity ledgers remain unresolved." },
    { area: "costume_makeup", status: "mapped", note: "Published credits identify costume work in the film's production record, but full fabrication, fittings, makeup and continuity records are not locked here." },
    { area: "cinematography", status: "source_verified", note: "Rushprint directly identifies Cecilie Semec and documents the trilogy's deliberately differentiated visual approaches and cinematography-editing dialogue." },
    { area: "lighting", status: "research_pending", note: "No locked source in this case establishes a complete lighting package or exposure method; screen appearance is not reverse-engineered into equipment claims." },
    { area: "camera_format", status: "mapped", note: "Festival material identifies a digital exhibition/production context, but exact body, lenses, filtration, media and data workflow remain unresolved." },
    { area: "editing", status: "source_verified", note: "Rushprint directly identifies Jens Christian Fodstad and documents the creative cinematography-editing relationship under the trilogy's compressed production calendar." },
    { area: "sound_design", status: "source_verified", note: "Festival credits identify Yvonne Stenberg and Gisle Tveito; production sound, ADR, Foley, premix, stems and delivery specs remain unresolved." },
    { area: "music", status: "source_verified", note: "Festival records credit Anna Berg; complete composition, recording, orchestration, cue and licensing ledgers remain unresolved." },
    { area: "effects_animation", status: "research_pending", note: "No complete practical-effects or VFX census is established; none is inferred from the finished image." },
    { area: "documentary_method", status: "not_central", note: "Drømmer is scripted fiction; documentary method is not central to this production case." }
  ]
} as const satisfies FilmHistoryProfile;
`;

const verification = `import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const drommerProductionCaseVerification = {
  scenarioId: "scenario_drommer_2024",
  status: "verified",
  verifiedAt: "2026-09-04",
  summary: "Drømmer is verified as a 2024 Norwegian Chapter 19 festival-priority Production Case. NFI locks Haugerud, Motlys, producers Yngve Sæther and Hege Hauff Hvattum, 4 October 2024 Norwegian premiere, 110-minute runtime and NOK 6.35m production support. Berlinale separately locks the 2025 Golden Bear, awarded to the producers, so award year cannot overwrite film year. Rushprint directly documents cinematographer Cecilie Semec and editor Jens Christian Fodstad as recurring collaborators across the three-film 2024 trilogy and describes the compressed calendar, precise communication and deliberate visual differentiation. Karlovy Vary independently credits Semec, Fodstad, Tuva Hølmebakk, Yvonne Stenberg, Gisle Tveito, Anna Berg, Motlys and Oslo Filmfond. Total budget/recoupment, exact shoot schedule, camera/lens/lighting/data package, complete art/costume/makeup ledgers, effects/VFX census, edit infrastructure, full audio chain and music ledger remain unresolved.",
  sources: [
    {
      title: "Drømmer",
      publisher: "Norwegian Film Institute",
      url: "https://www.nfi.no/filmer-og-serier/drommer",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "NFI film record supporting director/writer, Motlys, producers, 4 October 2024 premiere, 110-minute runtime and the documented production-support record."
    },
    {
      title: "Golden Bear for Dag Johan Haugerud's Drømmer in Berlin",
      publisher: "Norwegian Film Institute",
      url: "https://www.nfi.no/nyheter/gullbjoern-til-dag-johan-haugeruds-droemmer-i-berlin",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "NFI separates the 2025 Berlin award event from the film's 2024 Norwegian premiere and records NOK 6.35m production support."
    },
    {
      title: "International Jury 2025 – Golden Bear for Best Film",
      publisher: "Berlin International Film Festival",
      url: "https://www.berlinale.de/en/archive/awards-juries/awards.html",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Official Berlinale archive awarding the 2025 Golden Bear for Best Film to Drømmer and naming producers Yngve Sæther and Hege Hauff Hvattum."
    },
    {
      title: "Filmsamtalen med Cecilie Semec og Jens Christian Fodstad",
      publisher: "Rushprint",
      url: "https://rushprint.no/2025/04/filmsamtalen-med-cecilie-semec-og-jens-christian-fodstad/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct craft conversation supporting Semec/Fodstad's roles across Sex, Drømmer and Kjærlighet, the three-film calendar, precise communication, open collaboration and deliberately different visual approaches."
    },
    {
      title: "Dreams",
      publisher: "Karlovy Vary International Film Festival",
      url: "https://www.kviff.com/en/programme/film/75/45946-dreams",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Festival record supporting Norway 2024, 110 minutes and credits for Semec, Fodstad, Anna Berg, Yvonne Stenberg, Gisle Tveito, Tuva Hølmebakk, the producers, Motlys and Oslo Filmfond."
    },
    {
      title: "Analysen: Drømmer (2024)",
      publisher: "Montages",
      url: "https://montages.no/2024/11/analysen-drommer-2024/",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Close formal analysis supporting the first-person voice-over, close-up emphasis and comparatively guiding editorial form; not used to infer undocumented equipment or schedule."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
`;

createPermanent("src/core/chapterNineteenDrommerExpansion.ts", expansion);
createPermanent("src/core/chapterNineteenDrommerExpansion.test.ts", expansionTest);
createPermanent("src/ui/data/scenarioFilmStudyChapterNineteenDrommer.ts", filmStudy);
createPermanent("src/ui/data/scenarioProductionVerificationDrommer.ts", verification);

replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'import { mergeChapterNineteenSoundOfFallingExpansion } from "../../core/chapterNineteenSoundOfFallingExpansion.js";\n',
  'import { mergeChapterNineteenSoundOfFallingExpansion } from "../../core/chapterNineteenSoundOfFallingExpansion.js";\nimport { mergeChapterNineteenDrommerExpansion } from "../../core/chapterNineteenDrommerExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "const chapterNineteenSoundOfFallingScenarios = mergeChapterNineteenSoundOfFallingExpansion(chapterNineteenTheSecretAgentScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenSoundOfFallingScenarios);",
  "const chapterNineteenSoundOfFallingScenarios = mergeChapterNineteenSoundOfFallingExpansion(chapterNineteenTheSecretAgentScenarios);\nconst chapterNineteenDrommerScenarios = mergeChapterNineteenDrommerExpansion(chapterNineteenSoundOfFallingScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenDrommerScenarios);",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { soundOfFallingFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenSoundOfFalling";\n',
  'import { soundOfFallingFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenSoundOfFalling";\nimport { drommerFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenDrommer";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [soundOfFallingFilmHistoryProfile.scenarioId]: soundOfFallingFilmHistoryProfile,\n",
  "  [soundOfFallingFilmHistoryProfile.scenarioId]: soundOfFallingFilmHistoryProfile,\n  [drommerFilmHistoryProfile.scenarioId]: drommerFilmHistoryProfile,\n",
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { soundOfFallingProductionCaseVerification } from "./scenarioProductionVerificationSoundOfFalling";\n',
  'import { soundOfFallingProductionCaseVerification } from "./scenarioProductionVerificationSoundOfFalling";\nimport { drommerProductionCaseVerification } from "./scenarioProductionVerificationDrommer";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  soundOfFallingProductionCaseVerification,\n",
  "  soundOfFallingProductionCaseVerification,\n  drommerProductionCaseVerification,\n",
);

let restAudit = read("scripts/production-case-rest-audit.mjs");
if (!restAudit.includes('"chapterNineteenSoundOfFallingExpansion.ts",')) throw new Error("REST audit Sound of Falling expansion marker missing");
restAudit = restAudit.replace(/\b590\b/g, "591");
restAudit = restAudit.replace('  "chapterNineteenSoundOfFallingExpansion.ts",\n', '  "chapterNineteenSoundOfFallingExpansion.ts",\n  "chapterNineteenDrommerExpansion.ts",\n');
write("scripts/production-case-rest-audit.mjs", restAudit);

let chapter18Completion = read("scripts/film-history-chapter-eighteen-completion-audit.mjs");
chapter18Completion = chapter18Completion.replace(/\b590\b/g, "591");
chapter18Completion = chapter18Completion.replace(
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 60, "Chapter 19 foundation must contain exactly 60 baseline candidates.");',
  'invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 62, "Chapter 19 current candidate set must contain exactly 62 candidates after Triangle of Sadness and Drømmer reconciliation.");',
);
chapter18Completion = chapter18Completion.replace(
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 58 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 58 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 60 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 60 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
);
if (!chapter18Completion.includes("exactly 62 candidates") || !chapter18Completion.includes("60 USE_EXISTING")) throw new Error("Chapter 18 completion audit candidate census patch failed");
write("scripts/film-history-chapter-eighteen-completion-audit.mjs", chapter18Completion);

const wrapper = `import { execFileSync } from "node:child_process";
import { readFileSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const CLOSED_CHAPTER_EIGHTEEN_ATLAS_COUNT = 539;
const BASE_EXPECTED_ATLAS_COUNT = 590;
const EXPECTED_ATLAS_COUNT = 591;

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const basePath = path.join(scriptDir, "film-history-chapter-nineteen-atlas-audit-base.mjs");
const insertionMarker = "const candidates = [";
const triangleNeedles = ['"title": "Triangle of Sadness"', 'title: "Triangle of Sadness"'];
const drommerNeedles = ['"title": "Drømmer"', 'title: "Drømmer"'];

const triangleCandidate = \`
  {
    "title": "Triangle of Sadness",
    "originalTitle": "Triangle of Sadness",
    "year": 2022,
    "aliases": ["Sans filtre"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Cannes 2022 Palme d'Or reconciliation: reuse the existing verified production case rather than materializing a duplicate Atlas scenario."
  },\`;

const drommerCandidate = \`
  {
    "title": "Drømmer",
    "originalTitle": "Drømmer",
    "year": 2024,
    "aliases": ["Dreams", "Dreams (Sex Love)", "Dreams (Sex, Love)"],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Berlinale 2025 Golden Bear corrective case: preserve 2024 as film year, materialize the source-backed Norwegian Production Case, and keep award year separate from production chronology."
  },\`;

const baseSource = readFileSync(basePath, "utf8");
const requiredBaselineConstants = [
  \`const CLOSED_CHAPTER_EIGHTEEN_ATLAS_COUNT = \${CLOSED_CHAPTER_EIGHTEEN_ATLAS_COUNT};\`,
  \`const EXPECTED_ATLAS_COUNT = \${BASE_EXPECTED_ATLAS_COUNT};\`,
];
for (const baselineConstant of requiredBaselineConstants) {
  if (!baseSource.includes(baselineConstant)) throw new Error(\`Chapter 19 base audit lost required baseline contract: \${baselineConstant}\`);
}
if (triangleNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Triangle of Sadness; consolidate the wrapper deliberately before continuing.");
if (drommerNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Drømmer; consolidate the wrapper deliberately before continuing.");
if (!baseSource.includes(insertionMarker)) throw new Error("Chapter 19 candidate insertion marker is missing; refusing to run a partially reconciled audit.");

const reconciledSource = baseSource
  .replace(\`const EXPECTED_ATLAS_COUNT = \${BASE_EXPECTED_ATLAS_COUNT};\`, \`const EXPECTED_ATLAS_COUNT = \${EXPECTED_ATLAS_COUNT};\`)
  .replace('auditDate: "2026-08-28"', 'auditDate: "2026-09-04"')
  .replace(insertionMarker, \`\${insertionMarker}\${triangleCandidate}\${drommerCandidate}\`);
const temporaryAuditPath = path.join(scriptDir, \`.film-history-chapter-nineteen-atlas-audit-reconciled-\${process.pid}.mjs\`);

try {
  writeFileSync(temporaryAuditPath, reconciledSource);
  const stdout = execFileSync(process.execPath, [temporaryAuditPath, ...process.argv.slice(2)], {
    cwd: process.cwd(), encoding: "utf8", maxBuffer: 32 * 1024 * 1024, stdio: ["ignore", "pipe", "inherit"],
  });
  process.stdout.write(stdout);
} finally {
  try { unlinkSync(temporaryAuditPath); } catch (error) { if (error?.code !== "ENOENT") throw error; }
}
`;
write("scripts/film-history-chapter-nineteen-atlas-audit.mjs", wrapper);

let festivalAudit = read("scripts/film-history-chapter-nineteen-festival-awards-completion-audit.mjs");
const obligationsStart = festivalAudit.indexOf("const topPrizeObligations = [");
const noAwardStart = festivalAudit.indexOf("const knownNoAwardYears = [");
if (obligationsStart === -1 || noAwardStart === -1 || noAwardStart <= obligationsStart) throw new Error("Festival audit manifest boundaries missing");
let obligationsPart = festivalAudit.slice(obligationsStart, noAwardStart);
obligationsPart = obligationsPart.replace(/\n    year: (20\d{2}),/g, "\n    awardYear: $1,\n    filmYear: $1,");
obligationsPart = obligationsPart.replace(
  'filmYear: 2025,\n    award: "Golden Bear for Best Film",\n    title: "Drømmer"',
  'filmYear: 2024,\n    award: "Golden Bear for Best Film",\n    title: "Drømmer"',
);
if (/\n    year: 20\d{2},/.test(obligationsPart)) throw new Error("Festival top-prize manifest still contains ambiguous year fields");
festivalAudit = festivalAudit.slice(0, obligationsStart) + obligationsPart + festivalAudit.slice(noAwardStart);
festivalAudit = festivalAudit.replace('    year: 2020,\n    reason: "The 2020 Festival de Cannes was cancelled;', '    awardYear: 2020,\n    reason: "The 2020 Festival de Cannes was cancelled;');
festivalAudit = festivalAudit.replace("if (candidate.year !== obligation.year) return false;", "if (candidate.year !== obligation.filmYear) return false;");
festivalAudit = festivalAudit.replace("if (item.year < 2020 || item.year > 2025)", "if (item.awardYear < 2020 || item.awardYear > 2025)");
festivalAudit = festivalAudit.replace("const key = `${item.festival}|${item.year}|${item.award}`;", "const key = `${item.festival}|${item.awardYear}|${item.award}`;");
festivalAudit = festivalAudit.replace(
  "    year: item.year,\n    festival: item.festival,",
  "    filmYear: item.filmYear,\n    awardYear: item.awardYear,\n    festival: item.festival,",
);
festivalAudit = festivalAudit.replace(
  '    technicalAtlasCompletion: "The existing 590/590 Atlas count proves completeness only against the already-materialized Atlas and Production Verification registry.",',
  '    technicalAtlasCompletion: "The current Atlas count proves completeness only against the materialized Atlas and Production Verification registry; it does not prove festival-selection completeness.",\n    awardFilmYearSeparation: "Festival award year and film production/release year are separate fields. Drømmer is a 2024 film whose Golden Bear was awarded in 2025.",',
);
if (/\bobligation\.year\b|\bitem\.year\b/.test(festivalAudit)) throw new Error("Festival audit still contains ambiguous obligation/item year references");
if (!festivalAudit.includes("filmYear: 2024") || !festivalAudit.includes("awardYear: 2025")) throw new Error("Drømmer film/award year separation failed");
write("scripts/film-history-chapter-nineteen-festival-awards-completion-audit.mjs", festivalAudit);

let contract = read("src/core/filmHistoryChapterNineteenAuditContract.test.ts");
contract = contract.replace('const exactCandidateTitles = [\n  "Tenet",', 'const exactCandidateTitles = [\n  "Triangle of Sadness",\n  "Drømmer",\n  "Tenet",');
contract = contract.replace('const exactP1Priority = [\n  "Nomadland",', 'const exactP1Priority = [\n  "Triangle of Sadness",\n  "Drømmer",\n  "Nomadland",');
contract = contract.replace('const exactUseExisting = [\n  "Tenet",', 'const exactUseExisting = [\n  "Triangle of Sadness",\n  "Drømmer",\n  "Tenet",');
contract = contract.replace(/\b590\b/g, "591");
contract = contract.replace('test("Chapter 19 locks exactly sixty candidates across 2020-2025", () => {', 'test("Chapter 19 locks exactly sixty-two candidates across 2020-2025", () => {');
contract = contract.replace('assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 60);', 'assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 62);');
contract = contract.replace('assert.equal(resolved.candidates.length, 60);', 'assert.equal(resolved.candidates.length, 62);');
contract = contract.replace(
  '  for (const year of [2020, 2021, 2022, 2023, 2024, 2025]) {\n    assert.equal(resolved.candidates.filter((item) => item.year === year).length, 10, `Expected ten candidates for ${year}`);\n  }',
  '  const expectedCandidatesByYear = new Map([[2020, 10], [2021, 10], [2022, 11], [2023, 10], [2024, 11], [2025, 10]]);\n  for (const [year, expected] of expectedCandidatesByYear) {\n    assert.equal(resolved.candidates.filter((item) => item.year === year).length, expected, `Unexpected candidate count for ${year}`);\n  }',
);
contract = contract.replace('assert.equal(exactP1Priority.length, 33);', 'assert.equal(exactP1Priority.length, 35);');
contract = contract.replace('assert.equal(exactUseExisting.length, 58);', 'assert.equal(exactUseExisting.length, 60);');
if (!contract.includes("sixty-two candidates") || !contract.includes("[2024, 11]") || !contract.includes("exactP1Priority.length, 35")) throw new Error("Chapter 19 contract census patch failed");
write("src/core/filmHistoryChapterNineteenAuditContract.test.ts", contract);

execFileSync(process.execPath, [path.join(root, "scripts", "film-history-chapter-nineteen-atlas-audit.mjs"), "--write=docs/film-history-chapter-nineteen-atlas-resolved.json"], {
  cwd: root,
  stdio: "inherit",
  maxBuffer: 32 * 1024 * 1024,
});

const resolved = JSON.parse(read("docs/film-history-chapter-nineteen-atlas-resolved.json"));
if (resolved.atlas?.actualCount !== 591 || resolved.verificationIndex?.literalVerifiedScenarioIds !== 591) throw new Error(`Drømmer materialization failed Atlas/verification gate: ${resolved.atlas?.actualCount}/${resolved.verificationIndex?.literalVerifiedScenarioIds}`);
if (resolved.candidates?.length !== 62) throw new Error(`Drømmer materialization failed candidate census: ${resolved.candidates?.length}`);
const drommer = resolved.candidates.find((candidate) => candidate.title === "Drømmer");
if (!drommer || drommer.year !== 2024 || drommer.decision !== "USE_EXISTING" || drommer.scenarioId !== "scenario_drommer_2024" || drommer.matches !== 1 || drommer.productionVerified !== true) throw new Error(`Drømmer did not close as one production-verified USE_EXISTING case: ${JSON.stringify(drommer)}`);

for (const temp of ["scripts/TEMP-ch19-drommer-materialize.mjs", ".github/workflows/TEMP-ch19-drommer-materialize.yml"]) {
  const absolute = path.join(root, temp);
  if (existsSync(absolute)) unlinkSync(absolute);
}

console.log(JSON.stringify({ atlas: resolved.atlas, verificationIndex: resolved.verificationIndex, candidates: resolved.candidates.length, drommer }, null, 2));

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
const invariant = (condition, message) => {
  if (!condition) throw new Error(message);
};

function countOccurrences(source, needle) {
  if (!needle) return 0;
  let count = 0;
  let cursor = 0;
  while (true) {
    const index = source.indexOf(needle, cursor);
    if (index === -1) return count;
    count += 1;
    cursor = index + needle.length;
  }
}

function replaceExact(file, before, after, expectedCount = 1) {
  const source = read(file);
  const count = countOccurrences(source, before);
  if (count !== expectedCount) throw new Error(`${file}: expected ${expectedCount} occurrences of marker, found ${count}: ${before.slice(0, 180)}`);
  write(file, source.split(before).join(after));
}

function createPermanent(file, content) {
  const absolute = path.join(root, file);
  if (existsSync(absolute)) throw new Error(`${file}: permanent file already exists; refusing to overwrite`);
  write(file, content);
}

function runJson(script, args = []) {
  const stdout = execFileSync(process.execPath, [path.join(root, script), ...args], {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    stdio: ["ignore", "pipe", "inherit"],
  });
  return JSON.parse(stdout);
}

function run(command, args) {
  execFileSync(command, args, { cwd: root, stdio: "inherit", maxBuffer: 64 * 1024 * 1024 });
}

const baseline = runJson("scripts/film-history-chapter-nineteen-atlas-audit.mjs");
const festivalBaseline = runJson("scripts/film-history-chapter-nineteen-festival-awards-completion-audit.mjs");
invariant(baseline.atlas?.actualCount === baseline.atlas?.expectedCount, `Baseline Atlas is not internally closed: ${baseline.atlas?.actualCount}/${baseline.atlas?.expectedCount}`);
invariant(baseline.verificationIndex?.literalVerifiedScenarioIds === baseline.atlas.actualCount, "Baseline Atlas/PV identity invariant is already broken.");
invariant(baseline.candidates?.length === 68, `Expected locked pre-Adamant candidate baseline 68, found ${baseline.candidates?.length}`);
invariant(baseline.byDecision?.USE_EXISTING?.length === 66 && baseline.byDecision?.P2?.length === 2, "Expected locked pre-Adamant 66 USE_EXISTING / 2 P2 queue.");
const adamantBefore = festivalBaseline.obligations?.find((item) => item.title === "On the Adamant");
invariant(adamantBefore?.status === "MISSING_CANDIDATE" && adamantBefore?.filmYear === 2023 && adamantBefore?.awardYear === 2023, `Festival gate does not expose the expected Adamant source-first gap: ${JSON.stringify(adamantBefore)}`);

const newScenarioIds = ["scenario_on_the_adamant_2023"];
const nextAtlasCount = baseline.atlas.actualCount + newScenarioIds.length;
const nextCandidateCount = baseline.candidates.length + newScenarioIds.length;
const nextUseExistingCount = baseline.byDecision.USE_EXISTING.length + newScenarioIds.length;
const next2023CandidateCount = baseline.candidates.filter((candidate) => candidate.year === 2023).length + newScenarioIds.length;

for (const file of [
  "src/ui/data/filmScenarios.ts",
  "src/ui/data/scenarioFilmStudyMap.ts",
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "scripts/production-case-rest-audit.mjs",
  "scripts/film-history-chapter-nineteen-atlas-audit.mjs",
]) {
  const source = read(file);
  invariant(!source.includes("scenario_on_the_adamant_2023"), `${file}: Adamant scenario identity already exists; refusing duplicate materialization.`);
}

const expansion = `import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenOnTheAdamantExpansionDefinitions = [
  {
    id: "scenario_on_the_adamant_2023",
    title: "On the Adamant",
    originalTitle: "Sur l'Adamant",
    aliases: ["Sur l’Adamant"],
    year: 2023,
    productionYear: 2022,
    titleType: "Movie",
    runtimeMins: 109,
    directors: ["Nicolas Philibert"],
    genres: ["Documentary"],
    sourceId: "nicolas_philibert_sur_ladamant",
    sourceUrl: "https://www.nicolasphilibert.fr/en/films/sur-ladamant/",
    scenarioType: "award_priority_berlinale_2023_golden_bear_france_japan_production_year_2022_film_year_2023_observational_documentary_small_crew_single_operator_trust_improvisation_editing_sound_1_85_5_1_109_min_uncertainty_bounded",
    premise: "Build On the Adamant / Sur l'Adamant as a new Chapter 19 source-first Production Case while keeping two chronology fields separate. The Chapter 19 festival manifest uses filmYear 2023 because the film entered the 2023 Berlinale cycle and won the Golden Bear there; Unifrance independently records productionYear 2022. Production year must therefore remain 2022 and must never be rewritten to 2023 merely to satisfy the Chapter 19 matching key. Nicolas Philibert's production page identifies the France/Japan film, 109-minute runtime and 1.85 ratio; credits Philibert for camera and editing, Erik Ménard and François Abdelnour for sound, Nathalie Vidal for sound editing and mix, Christophe Bousquet for grading, Miléna Poylo, Gilles Sacuto and Céline Loiseau as producers, Norio Hatano as co-producer, and TS Productions, France 3 cinéma and Longride in the co-production structure. Unifrance independently records 2022 as production year, 1.85 and 5.1. Philibert's official press material describes filming across several stages from May to November 2021 with isolated days in early 2022, a deliberately small crew, Philibert often operating alone, selected two-camera situations and more than one hundred hours of material. Those records support a production method built around availability, trust, observation and improvisation rather than a rigid pre-scripted encounter system. BFI's critical documentation supports the film's observational, portrait-based movement among meetings, workshops, collective life and individual encounters. The 2023 Golden Bear establishes historical selection and reception priority, not production-year evidence. The playable case therefore locks the documented chronology, 109-minute version, France/Japan co-production, credited image/sound/edit/color roles, small-crew observational method, 1.85 and 5.1 delivery facts while refusing to invent an exact total shoot-day count, camera body, lenses, filters, media, data workflow, lighting package, complete budget or financing shares, consent-release ledger, production-sound equipment chain, ADR/Foley infrastructure, grading system, VFX census or complete delivery-master lineage.",
    requiredChoicesSeed: {
      screenplay: ["production_year_2022_film_year_2023", "observational_structure_not_scripted_fiction", "trust_consent_and_availability", "golden_bear_not_production_year", "finance_boundary"],
      camera: ["nicolas_philibert_camera_verified", "small_crew_single_operator", "selected_two_camera_days", "ratio_1_85_verified", "camera_package_unresolved"],
      editing: ["nicolas_philibert_editor_verified", "daily_life_and_intimate_portrait_balance", "hundred_plus_hours_source_material", "edit_infrastructure_unresolved"],
      sound: ["erik_menard_francois_abdelnour_verified", "nathalie_vidal_sound_edit_mix_verified", "5_1_master_verified", "production_audio_chain_unresolved"],
      themes: ["film_history", "production_2022", "film_year_2023", "on_the_adamant", "sur_ladamant", "france", "japan", "berlinale_2023", "documentary", "observation", "psychiatry", "ethics", "chapter19"]
    },
    learningGoals: [
      "Separate Unifrance's 2022 production year from Chapter 19's 2023 film/festival year.",
      "Explain why the 2023 Golden Bear establishes festival priority and reception rather than production dating.",
      "Identify Nicolas Philibert as director, camera operator and editor in the locked production record.",
      "Use 109 minutes as the source-backed runtime while recognizing that some catalogues round duration differently.",
      "Use 1.85 as the documented aspect ratio without inferring camera sensor or lens geometry.",
      "Use 5.1 as a documented sound-format fact without inventing the underlying track, stem or monitoring architecture.",
      "Identify France and Japan as the documented co-producing countries.",
      "Identify Miléna Poylo, Gilles Sacuto and Céline Loiseau as producers in the official production record.",
      "Identify Norio Hatano as the documented co-producer without inferring an ownership or recoupment share.",
      "Recognize TS Productions, France 3 cinéma and Longride as documented co-production entities.",
      "Keep total budget, partner shares, cash flow and recoupment waterfall unresolved.",
      "Identify Erik Ménard and François Abdelnour in the documented sound crew.",
      "Identify Nathalie Vidal for sound editing and mix and keep production recording separate from post sound.",
      "Identify Christophe Bousquet for color grading without inventing grading software, display or transform details.",
      "Explain how a deliberately small crew supported observational access without treating smallness as automatic ethical virtue.",
      "Distinguish Philibert operating alone in some situations from a claim that the whole film was made by one person.",
      "Recognize selected two-camera situations without generalizing them to the complete shoot.",
      "Place the documented May-November 2021 filming stages and isolated early-2022 days inside a 2022 production-year record.",
      "Keep exact total shooting-day count, call sheets, overtime and company-move records unresolved.",
      "Explain why documentary availability and contingency can shape schedule and scene construction.",
      "Treat trust, consent and requests not to be filmed as production constraints rather than decorative ethics language.",
      "Recognize meetings, workshops, collective life and individual portraits as recurring observational material.",
      "Explain why more than one hundred hours of source material makes editing a major structuring phase.",
      "Keep edit hardware, storage, project architecture, conform and backup details unresolved.",
      "Keep exact camera body, lens set, filtration, codec, media and data-management workflow unresolved.",
      "Keep exact lighting fixtures, exposure records and power-distribution method unresolved.",
      "Do not infer a VFX-free pipeline merely because the film is observational documentary.",
      "Keep complete rights, releases, safeguarding and medical-confidentiality paperwork unresolved unless directly sourced.",
      "Distinguish an institutional mental-health setting from a clinical claim about any participant.",
      "Use filmmaker, institutional catalogue, festival and critical sources for distinct evidentiary purposes.",
      "Close the case only when production year, film/festival year, runtime, co-production, credits, documentary method and uncertainty boundaries agree."
    ],
    phases: [
      { id: "year_boundary", label: "Separate production and film years", player_task: "Lock productionYear 2022 and Chapter 19 filmYear 2023 as different fields." },
      { id: "award_priority", label: "Lock the 2023 Golden Bear", player_task: "Use the prize for historical priority, never as production-year or workflow proof." },
      { id: "runtime_ratio", label: "Lock runtime and frame", player_task: "Use 109 minutes and 1.85 without reverse-engineering the camera package." },
      { id: "coproduction_identity", label: "Map France/Japan production", player_task: "Lock the documented producers, co-producer and production entities while leaving financial shares open." },
      { id: "observational_method", label: "Build around observation", player_task: "Let contingency, access and availability shape the nonfiction production plan." },
      { id: "trust_and_consent", label: "Protect access and refusal", player_task: "Treat consent boundaries and requests not to be filmed as active production constraints." },
      { id: "small_crew", label: "Use a small crew deliberately", player_task: "Preserve documented small-team practice without claiming every scene used the same staffing." },
      { id: "camera_role", label: "Lock Philibert on camera", player_task: "Use the verified camera role while leaving bodies, lenses and media unresolved." },
      { id: "two_camera_boundary", label: "Bound two-camera use", player_task: "Use two cameras only where the source supports selected situations." },
      { id: "shooting_chronology", label: "Map filming stages", player_task: "Place May-November 2021 and isolated early-2022 days inside the 2022 production record without inventing total day count." },
      { id: "collective_observation", label: "Observe shared life", player_task: "Build meetings, workshops and collective activity as recurring nonfiction material." },
      { id: "portrait_observation", label: "Protect individual encounters", player_task: "Balance intimate portraits with participant agency and uncertainty." },
      { id: "editing", label: "Structure the accumulated material", player_task: "Use Philibert's verified editing role and the large source-material volume without inventing edit infrastructure." },
      { id: "sound_recording", label: "Lock recorded sound roles", player_task: "Use Ménard and Abdelnour's verified credits while leaving equipment-chain details open." },
      { id: "sound_post", label: "Separate sound post", player_task: "Lock Nathalie Vidal's sound editing/mix role and 5.1 format without inventing stems or room configuration." },
      { id: "grading", label: "Lock grading credit", player_task: "Use Christophe Bousquet's grading credit without inferring the color pipeline." },
      { id: "finance_boundary", label: "Freeze unknown financing", player_task: "Do not infer budget, ownership shares or recoupment from co-production credits." },
      { id: "rights_boundary", label: "Freeze undocumented rights records", player_task: "Do not invent complete releases, confidentiality or safeguarding paperwork." },
      { id: "technical_boundary", label: "Freeze unsupported technical detail", player_task: "Keep camera, lighting, data, VFX and delivery-master details unresolved where sources do not establish them." },
      { id: "production_verification", label: "Close On the Adamant audit", player_task: "Verify chronology, runtime, credits, co-production, observational method, sound format and uncertainty boundaries." }
    ]
  }
] as const;

export function mergeChapterNineteenOnTheAdamantExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenOnTheAdamantExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_on_the_adamant_verified",
      source: { list_id: "manual_chapter_nineteen_on_the_adamant_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
import { chapterNineteenOnTheAdamantExpansionDefinitions, mergeChapterNineteenOnTheAdamantExpansion } from "./chapterNineteenOnTheAdamantExpansion.js";

test("On the Adamant source-first production case separates production year from Chapter 19 film year", () => {
  assert.equal(chapterNineteenOnTheAdamantExpansionDefinitions.length, 1);
  const film = chapterNineteenOnTheAdamantExpansionDefinitions[0];
  assert.equal(film.id, "scenario_on_the_adamant_2023");
  assert.equal(film.title, "On the Adamant");
  assert.equal(film.originalTitle, "Sur l'Adamant");
  assert.equal(film.year, 2023);
  assert.equal(film.productionYear, 2022);
  assert.notEqual(film.year, film.productionYear);
  assert.equal(film.runtimeMins, 109);
  assert.deepEqual(film.directors, ["Nicolas Philibert"]);
  assert.deepEqual(film.genres, ["Documentary"]);
  assert.match(film.scenarioType, /production_year_2022_film_year_2023/);
  assert.ok(film.premise.includes("productionYear 2022"));
  assert.ok(film.premise.includes("filmYear 2023"));
  assert.ok(film.premise.includes("1.85"));
  assert.ok(film.premise.includes("5.1"));
  assert.ok(film.premise.includes("May to November 2021"));
  assert.ok(film.premise.includes("more than one hundred hours"));
  assert.ok(film.premise.includes("refusing to invent an exact total shoot-day count"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("production_year_2022_film_year_2023"));
  assert.ok(film.requiredChoicesSeed.camera.includes("camera_package_unresolved"));
  assert.ok(film.learningGoals.length >= 30);
  assert.ok(film.phases.length >= 19);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("On the Adamant expansion merges idempotently by normalized title and 2023 Chapter 19 year", () => {
  const once = mergeChapterNineteenOnTheAdamantExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_on_the_adamant_2023");
  assert.equal(once[0]?.film.year, 2023);
  const twice = mergeChapterNineteenOnTheAdamantExpansion(once);
  assert.equal(twice.length, 1);
});
`;

const filmStudy = `import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const onTheAdamantFilmHistoryProfile = {
  scenarioId: "scenario_on_the_adamant_2023",
  period: "2022-produced, 2023 festival-era French-Japanese observational documentary: small-crew access, contingency-led filming, editing from extensive accumulated material and the Berlinale Golden Bear",
  traditions: ["French observational documentary", "institutional documentary", "portrait documentary", "small-crew nonfiction", "European-Japanese co-production", "festival documentary cinema"],
  before: "On the Adamant belongs to Nicolas Philibert's long documentary practice of observing institutions through the people who inhabit them rather than reducing those spaces to explanatory systems. Unifrance records 2022 as production year, while Chapter 19 and the 2023 Berlinale prize place the film in a 2023 film/festival classification. Those dates describe different chronology fields and must remain separate. Official production records identify a France/Japan co-production, 109-minute runtime, 1.85 frame, Philibert on camera and editing, a small sound/camera team, dedicated sound post and grading roles, and a multi-company production structure.",
  moment: "Philibert's official production and press materials describe filming in stages from May through November 2021 with isolated early-2022 days, usually with a deliberately small crew and with Philibert sometimes filming alone. Selected situations used two cameras, but that does not establish a two-camera norm for the whole film. The press material describes documentary practice as dependent on accident, availability, improvisation and trust; some people could refuse filming. More than one hundred hours of material made editing central to discovering the film's balance between meetings, workshops, shared daily life and intimate encounters. BFI criticism describes a fluid observational movement through collective and individual moments rather than a rigid explanatory analysis. These sources establish method and credited labor but not an exact camera package, light plot, data workflow or complete consent ledger.",
  after: "The 2023 Golden Bear amplified the film's international visibility without changing Unifrance's 2022 production year. The case is historically useful because it makes documentary production constraints legible as production systems: access, trust, participant refusal, crew scale, duration of observation, editorial selection, voice and sound all shape what can be filmed and how it can be assembled. The locked evidence still does not establish total budget or partner shares, exact total shoot days, camera body/lens/filter/media package, full lighting method, edit hardware/storage/conform path, detailed production-sound equipment, ADR/Foley architecture, grading software, VFX census, complete rights paperwork or master-delivery lineage beyond the documented 1.85 and 5.1 facts.",
  historyQuestion: "How did a 2022-produced small-crew observational documentary become a 2023 Golden Bear film while preserving trust, contingency, participant agency and editing as distinct production systems?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Unifrance records production year 2022, while the Berlinale obligation and Chapter 19 use film/festival year 2023; the fields are explicitly separated." },
    { area: "movement_and_tradition", status: "mapped", note: "The film sits within Philibert's observational institutional documentary practice and contemporary festival nonfiction without being reduced to one school label." },
    { area: "industry_and_production_context", status: "source_verified", note: "Official records document France/Japan co-production, TS Productions, France 3 cinéma, Longride, producers Poylo, Sacuto and Loiseau, and co-producer Hatano; financial shares remain unresolved." },
    { area: "reception_and_legacy", status: "source_verified", note: "The 2023 Berlinale Golden Bear establishes festival reception and historical priority, not production-year or workflow evidence." },
    { area: "screenplay", status: "not_central", note: "This is observational nonfiction; the case is structured through access, encounters and editing rather than a locked fiction screenplay." },
    { area: "directing", status: "source_verified", note: "Philibert's official materials describe contingency, improvisation, trust and participant refusal as active directing/production constraints." },
    { area: "performance", status: "mapped", note: "Participants are observed as people in an institutional setting rather than treated as scripted performers; complete consent and safeguarding records are not inferred." },
    { area: "production_design", status: "not_central", note: "The Adamant is a real working environment rather than a purpose-built fiction set in this case; dressing or construction claims are not invented." },
    { area: "costume_makeup", status: "not_central", note: "No source-backed costume/makeup production system is central to the case, and participant appearance is not reverse-engineered into craft claims." },
    { area: "cinematography", status: "source_verified", note: "Official credits identify Philibert on camera; press materials support small-crew and sometimes solo operation plus selected two-camera situations." },
    { area: "lighting", status: "research_pending", note: "No locked source establishes a complete lighting package, exposure method or power plan; observational appearance is not converted into equipment claims." },
    { area: "camera_format", status: "mapped", note: "1.85 is documented, but camera body, lenses, filtration, codec, recording media and data workflow remain unresolved." },
    { area: "editing", status: "source_verified", note: "Philibert is the credited editor; official press material describes more than one hundred hours of material and the need to balance collective daily life with intimate encounters." },
    { area: "sound_design", status: "source_verified", note: "Ménard and Abdelnour are credited for sound and Nathalie Vidal for sound editing/mix; Unifrance records 5.1, while equipment, stems and room configuration remain unresolved." },
    { area: "music", status: "research_pending", note: "Music is not used here as a production-history anchor without a stronger locked source for its complete creation/licensing system." },
    { area: "effects_animation", status: "research_pending", note: "No complete effects/VFX census is established; an observational documentary must not be declared effects-free merely from appearance." },
    { area: "documentary_method", status: "source_verified", note: "Official Philibert material and BFI analysis support observation, contingency, trust, workshops/meetings and individual portraits as central nonfiction production methods." }
  ]
} as const satisfies FilmHistoryProfile;
`;

const verification = `import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const onTheAdamantProductionCaseVerification = {
  scenarioId: "scenario_on_the_adamant_2023",
  status: "verified",
  verifiedAt: "2026-09-05",
  summary: "On the Adamant / Sur l'Adamant is verified as a new Chapter 19 festival-priority documentary Production Case with an explicit chronology boundary: Unifrance records production year 2022, while Chapter 19 matches the film to the 2023 Berlinale cycle and Golden Bear under filmYear 2023. Nicolas Philibert's official production page locks the 109-minute France/Japan identity, 1.85 ratio, Philibert on camera and editing, Erik Ménard and François Abdelnour on sound, Nathalie Vidal on sound editing/mix, Christophe Bousquet on grading, producers Miléna Poylo, Gilles Sacuto and Céline Loiseau, co-producer Norio Hatano and the documented co-production entities. Unifrance independently locks 2022 production year and 5.1. Philibert's official press material documents staged filming from May-November 2021 plus isolated early-2022 days, small-crew/sometimes-solo camera practice, selected two-camera situations, trust/refusal boundaries and more than one hundred hours of material. BFI supports the observational portrait method. Total budget/shares, exact total shoot days, camera/lens/light/data package, complete rights ledger, detailed audio chain, grading system, VFX census and full master lineage remain unresolved.",
  sources: [
    {
      title: "On the Adamant — Sur l'Adamant",
      publisher: "Nicolas Philibert",
      url: "https://www.nicolasphilibert.fr/en/films/sur-ladamant/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Filmmaker's official production page supporting the 109-minute France/Japan identity, 1.85 ratio, camera, sound, editing, sound-post, grading, producer and co-production credits."
    },
    {
      title: "On the Adamant",
      publisher: "Unifrance",
      url: "https://en.unifrance.org/movie/52940/on-the-adamant",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "sound"],
      note: "Institutional catalogue record supporting production year 2022, 109-minute runtime, France/Japan co-production, 1.85 and 5.1."
    },
    {
      title: "On the Adamant press kit",
      publisher: "Nicolas Philibert",
      url: "https://www.nicolasphilibert.fr/wp-content/uploads/2025/08/dpresse-va.pdf",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Official filmmaker press material describing filming stages from May-November 2021 and isolated early-2022 days, deliberately small crew/sometimes solo operation, selected two-camera situations, participant refusal, contingency and more than one hundred hours of material for editing."
    },
    {
      title: "On the Adamant: Nicolas Philibert's warm-hearted portrait of a floating mental health centre",
      publisher: "British Film Institute / Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/reviews/adamant-nicolas-philiberts-warm-hearted-portrait-floating-mental-health-centre",
      sourceKind: "film_institute",
      supports: ["overall", "editing"],
      note: "Institutional critical analysis supporting the film's observational movement among collective meetings, workshops and individual portraits; not used to infer undocumented equipment or medical claims."
    },
    {
      title: "Awards 2023 — Golden Bear for Best Film",
      publisher: "Berlin International Film Festival",
      url: "https://www.berlinale.de/media/en/download/awards-juries/berlinale-awards-2023.pdf",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Official 2023 Berlinale award record establishing the Golden Bear for On the Adamant; used for festival/reception priority, not to overwrite production year 2022."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
`;

createPermanent("src/core/chapterNineteenOnTheAdamantExpansion.ts", expansion);
createPermanent("src/core/chapterNineteenOnTheAdamantExpansion.test.ts", expansionTest);
createPermanent("src/ui/data/scenarioFilmStudyChapterNineteenOnTheAdamant.ts", filmStudy);
createPermanent("src/ui/data/scenarioProductionVerificationOnTheAdamant.ts", verification);

replaceExact(
  "src/ui/data/filmScenarios.ts",
  'import { mergeChapterNineteenDrommerExpansion } from "../../core/chapterNineteenDrommerExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";',
  'import { mergeChapterNineteenDrommerExpansion } from "../../core/chapterNineteenDrommerExpansion.js";\nimport { mergeChapterNineteenOnTheAdamantExpansion } from "../../core/chapterNineteenOnTheAdamantExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";',
);
replaceExact(
  "src/ui/data/filmScenarios.ts",
  "const chapterNineteenDrommerScenarios = mergeChapterNineteenDrommerExpansion(chapterNineteenSoundOfFallingScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenDrommerScenarios);",
  "const chapterNineteenDrommerScenarios = mergeChapterNineteenDrommerExpansion(chapterNineteenSoundOfFallingScenarios);\nconst chapterNineteenOnTheAdamantScenarios = mergeChapterNineteenOnTheAdamantExpansion(chapterNineteenDrommerScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenOnTheAdamantScenarios);",
);
replaceExact(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_nineteen_drommer_expansion_2026+manual_chapter_nineteen_eo_expansion_2026",
  "+manual_chapter_nineteen_drommer_expansion_2026+manual_chapter_nineteen_on_the_adamant_expansion_2026+manual_chapter_nineteen_eo_expansion_2026",
);

replaceExact(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { drommerFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenDrommer";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";',
  'import { drommerFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenDrommer";\nimport { onTheAdamantFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenOnTheAdamant";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";',
);
replaceExact(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [drommerFilmHistoryProfile.scenarioId]: drommerFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,",
  "  [drommerFilmHistoryProfile.scenarioId]: drommerFilmHistoryProfile,\n  [onTheAdamantFilmHistoryProfile.scenarioId]: onTheAdamantFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,",
);

replaceExact(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { drommerProductionCaseVerification } from "./scenarioProductionVerificationDrommer";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";',
  'import { drommerProductionCaseVerification } from "./scenarioProductionVerificationDrommer";\nimport { onTheAdamantProductionCaseVerification } from "./scenarioProductionVerificationOnTheAdamant";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";',
);
replaceExact(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  drommerProductionCaseVerification,\n  eoProductionCaseVerification,",
  "  drommerProductionCaseVerification,\n  onTheAdamantProductionCaseVerification,\n  eoProductionCaseVerification,",
);

replaceExact(
  "scripts/production-case-rest-audit.mjs",
  `const EXPECTED_PLAYABLE_SCENARIOS = ${baseline.atlas.actualCount};\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = ${baseline.verificationIndex.literalVerifiedScenarioIds};`,
  `const EXPECTED_PLAYABLE_SCENARIOS = ${nextAtlasCount};\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = ${nextAtlasCount};`,
);
replaceExact(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenDrommerExpansion.ts",\n  "chapterNineteenEoExpansion.ts",',
  '  "chapterNineteenDrommerExpansion.ts",\n  "chapterNineteenOnTheAdamantExpansion.ts",\n  "chapterNineteenEoExpansion.ts",',
);

replaceExact(
  "scripts/film-history-chapter-nineteen-atlas-audit.mjs",
  `const EXPECTED_ATLAS_COUNT = ${baseline.atlas.actualCount};`,
  `const EXPECTED_ATLAS_COUNT = ${nextAtlasCount};`,
);
replaceExact(
  "scripts/film-history-chapter-nineteen-atlas-audit.mjs",
  "const alcarrasNeedles = ['\"title\": \"Alcarràs\"', 'title: \"Alcarràs\"'];\n",
  "const alcarrasNeedles = ['\"title\": \"Alcarràs\"', 'title: \"Alcarràs\"'];\nconst adamantNeedles = ['\"title\": \"On the Adamant\"', 'title: \"On the Adamant\"', '\"originalTitle\": \"Sur l\\\'Adamant\"'];\n",
);
const adamantCandidateDeclaration = `const adamantCandidate = \`\n  {\n    "title": "On the Adamant",\n    "originalTitle": "Sur l'Adamant",\n    "year": 2023,\n    "aliases": ["Sur l’Adamant"],\n    "role": "major_comparison",\n    "decisionIfMissing": "P1",\n    "chapterFunction": "Berlinale 2023 Golden Bear source-first case: materialize a new documentary Atlas/PV identity, preserve Unifrance productionYear 2022 separately from Chapter 19 filmYear 2023, and lock the documented small-crew observational, editing and sound-production boundaries without inventing unsupported technical detail."\n  },\`;\n\n`;
replaceExact(
  "scripts/film-history-chapter-nineteen-atlas-audit.mjs",
  "const baseSource = readFileSync(basePath, \"utf8\");",
  `${adamantCandidateDeclaration}const baseSource = readFileSync(basePath, "utf8");`,
);
replaceExact(
  "scripts/film-history-chapter-nineteen-atlas-audit.mjs",
  'if (alcarrasNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Alcarràs; consolidate the wrapper deliberately before continuing.");\n',
  'if (alcarrasNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains Alcarràs; consolidate the wrapper deliberately before continuing.");\nif (adamantNeedles.some((needle) => baseSource.includes(needle))) throw new Error("Chapter 19 base audit already contains On the Adamant; consolidate the wrapper deliberately before continuing.");\n',
);
replaceExact(
  "scripts/film-history-chapter-nineteen-atlas-audit.mjs",
  '.replace(\'auditDate: "2026-08-28"\', \'auditDate: "2026-09-04"\')',
  '.replace(\'auditDate: "2026-08-28"\', \'auditDate: "2026-09-05"\')',
);
replaceExact(
  "scripts/film-history-chapter-nineteen-atlas-audit.mjs",
  '${badLuckCandidate}${alcarrasCandidate}`);',
  '${badLuckCandidate}${alcarrasCandidate}${adamantCandidate}`);',
);

replaceExact(
  "scripts/film-history-chapter-nineteen-festival-awards-completion-audit.mjs",
  '  auditDate: "2026-09-04",',
  '  auditDate: "2026-09-05",',
);
replaceExact(
  "scripts/film-history-chapter-nineteen-festival-awards-completion-audit.mjs",
  '    awardFilmYearSeparation: "Festival award year and film production/release year are separate fields. Drømmer is a 2024 film whose Golden Bear was awarded in 2025.",',
  '    awardFilmYearSeparation: "Festival award year and film-year classification are separate fields. Drømmer is a 2024 film whose Golden Bear was awarded in 2025.",\n    productionYearFilmYearSeparation: "Production year and Chapter 19 film/festival year may also differ. On the Adamant keeps Unifrance productionYear 2022 while the frozen Chapter 19/Berlinale obligation uses filmYear 2023.",',
);

replaceExact(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  `invariant(verificationIds.size === ${baseline.verificationIndex.literalVerifiedScenarioIds}, \`Global Production Verification registry must contain exactly ${baseline.verificationIndex.literalVerifiedScenarioIds} unique scenarioIds after the fifty-first Chapter 19 case: \${verificationIds.size}\`);`,
  `invariant(verificationIds.size === ${nextAtlasCount}, \`Global Production Verification registry must contain exactly ${nextAtlasCount} unique scenarioIds after On the Adamant Chapter 19 materialization: \${verificationIds.size}\`);`,
);
replaceExact(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  `invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === ${baseline.atlas.actualCount}, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to ${baseline.atlas.actualCount}.");`,
  `invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === ${nextAtlasCount}, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to ${nextAtlasCount}.");`,
);
replaceExact(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  `invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === ${baseline.candidates.length}, "Chapter 19 current candidate set must contain exactly ${baseline.candidates.length} candidates after Triangle of Sadness, Drømmer, Happening, All the Beauty and the Bloodshed, The Room Next Door, There Is No Evil, Bad Luck Banging or Loony Porn and Alcarràs reconciliation.");`,
  `invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === ${nextCandidateCount}, "Chapter 19 current candidate set must contain exactly ${nextCandidateCount} candidates after the festival reconciliation through On the Adamant.");`,
);
replaceExact(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  `invariant(chapter19.byDecision?.USE_EXISTING?.length === ${baseline.byDecision.USE_EXISTING.length} && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from ${baseline.byDecision.USE_EXISTING.length} USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");`,
  `invariant(chapter19.byDecision?.USE_EXISTING?.length === ${nextUseExistingCount} && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from ${nextUseExistingCount} USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");`,
);
replaceExact(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");',
  'const onTheAdamant = chapter19.candidates.find((candidate) => candidate.title === "On the Adamant");\ninvariant(onTheAdamant?.decision === "USE_EXISTING" && onTheAdamant?.scenarioId === "scenario_on_the_adamant_2023" && onTheAdamant?.matches === 1 && onTheAdamant?.productionVerified === true, "On the Adamant is not closed as one new production-verified Chapter 19 case with filmYear 2023.");\nconst tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");',
);

replaceExact(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  "Alcarràs",\n  "Tenet",',
  '  "Alcarràs",\n  "On the Adamant",\n  "Tenet",',
  2,
);
replaceExact(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  "Alcarràs",\n  "Nomadland",',
  '  "Alcarràs",\n  "On the Adamant",\n  "Nomadland",',
);
replaceExact(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  `  assert.match(audit, /const EXPECTED_ATLAS_COUNT = ${baseline.atlas.actualCount};/);\n  assert.equal(resolved.atlas.baselineFromClosedChapter18, 539);\n  assert.equal(resolved.atlas.expectedCount, ${baseline.atlas.expectedCount});\n  assert.equal(resolved.atlas.actualCount, ${baseline.atlas.actualCount});\n  assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, ${baseline.verificationIndex.literalVerifiedScenarioIds});`,
  `  assert.match(audit, /const EXPECTED_ATLAS_COUNT = ${nextAtlasCount};/);\n  assert.equal(resolved.atlas.baselineFromClosedChapter18, 539);\n  assert.equal(resolved.atlas.expectedCount, ${nextAtlasCount});\n  assert.equal(resolved.atlas.actualCount, ${nextAtlasCount});\n  assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, ${nextAtlasCount});`,
);
replaceExact(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  `test("Chapter 19 locks exactly sixty-eight candidates across 2020-2025", () => {\n  assert.deepEqual(resolved.candidates.map((item) => item.title), [...exactCandidateTitles]);\n  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, ${baseline.candidates.length});\n  assert.equal(resolved.candidates.length, ${baseline.candidates.length});\n  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 12], [2022, 13], [2023, 10], [2024, 12], [2025, 10]]);`,
  `test("Chapter 19 locks exactly sixty-nine candidates across 2020-2025", () => {\n  assert.deepEqual(resolved.candidates.map((item) => item.title), [...exactCandidateTitles]);\n  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, ${nextCandidateCount});\n  assert.equal(resolved.candidates.length, ${nextCandidateCount});\n  const expectedCandidatesByYear = new Map([[2020, 11], [2021, 12], [2022, 13], [2023, ${next2023CandidateCount}], [2024, 12], [2025, 10]]);`,
);
replaceExact(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  `  assert.equal(exactP1Priority.length, 41);`,
  `  assert.equal(exactP1Priority.length, 42);`,
);
replaceExact(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  `  assert.equal(exactUseExisting.length, ${baseline.byDecision.USE_EXISTING.length});`,
  `  assert.equal(exactUseExisting.length, ${nextUseExistingCount});`,
);
replaceExact(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");',
  '  const onTheAdamant = resolved.candidates.find((candidate) => candidate.title === "On the Adamant");\n  assert.ok(onTheAdamant);\n  assert.equal(onTheAdamant.year, 2023);\n  assert.equal(onTheAdamant.decision, "USE_EXISTING");\n  assert.equal(onTheAdamant.scenarioId, "scenario_on_the_adamant_2023");\n  assert.equal(onTheAdamant.matches, 1);\n  assert.equal(onTheAdamant.productionVerified, true);\n\n  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");',
);

const resolvedAfter = runJson("scripts/film-history-chapter-nineteen-atlas-audit.mjs", ["--write=docs/film-history-chapter-nineteen-atlas-resolved.json"]);
invariant(resolvedAfter.atlas?.actualCount === nextAtlasCount && resolvedAfter.atlas?.expectedCount === nextAtlasCount, `Materializer did not append exactly one Atlas identity: ${resolvedAfter.atlas?.actualCount}/${resolvedAfter.atlas?.expectedCount}`);
invariant(resolvedAfter.verificationIndex?.literalVerifiedScenarioIds === nextAtlasCount, `Materializer did not append exactly one PV identity: ${resolvedAfter.verificationIndex?.literalVerifiedScenarioIds}`);
invariant(resolvedAfter.candidates?.length === nextCandidateCount, `Materializer candidate count mismatch: ${resolvedAfter.candidates?.length}/${nextCandidateCount}`);
invariant(resolvedAfter.byDecision?.USE_EXISTING?.length === nextUseExistingCount && resolvedAfter.byDecision?.P2?.length === 2, `Materializer queue mismatch: ${JSON.stringify(resolvedAfter.byDecision)}`);
const adamant = resolvedAfter.candidates.find((candidate) => candidate.title === "On the Adamant");
invariant(adamant?.year === 2023 && adamant?.scenarioId === "scenario_on_the_adamant_2023" && adamant?.matches === 1 && adamant?.productionVerified === true && adamant?.decision === "USE_EXISTING", `Adamant did not close as one new production-verified identity: ${JSON.stringify(adamant)}`);
invariant(resolvedAfter.candidates.filter((candidate) => candidate.year === 2023).length === next2023CandidateCount, "2023 candidate bucket did not advance by exactly one.");

run(process.execPath, [path.join(root, "scripts/production-case-rest-audit.mjs")]);
const festivalAfter = runJson("scripts/film-history-chapter-nineteen-festival-awards-completion-audit.mjs");
const adamantFestival = festivalAfter.obligations.find((item) => item.title === "On the Adamant");
invariant(adamantFestival?.filmYear === 2023 && adamantFestival?.awardYear === 2023 && adamantFestival?.scenarioId === "scenario_on_the_adamant_2023" && adamantFestival?.status === "PRODUCTION_VERIFIED", `Adamant festival obligation did not close: ${JSON.stringify(adamantFestival)}`);
invariant(festivalAfter.correctiveQueue.every((item) => item.title !== "On the Adamant"), "Adamant remains in the festival corrective queue after materialization.");

for (const temporaryPath of [
  "scripts/TEMP-ch19-on-the-adamant-materialize.mjs",
  ".github/workflows/TEMP-ch19-on-the-adamant-materialize.yml",
]) {
  try { unlinkSync(path.join(root, temporaryPath)); } catch (error) { if (error?.code !== "ENOENT") throw error; }
}

console.log(JSON.stringify({
  baseline: {
    atlas: baseline.atlas.actualCount,
    productionVerificationIds: baseline.verificationIndex.literalVerifiedScenarioIds,
    candidates: baseline.candidates.length,
    useExisting: baseline.byDecision.USE_EXISTING.length,
    p2: baseline.byDecision.P2.length,
  },
  materialized: {
    atlas: resolvedAfter.atlas.actualCount,
    productionVerificationIds: resolvedAfter.verificationIndex.literalVerifiedScenarioIds,
    candidates: resolvedAfter.candidates.length,
    useExisting: resolvedAfter.byDecision.USE_EXISTING.length,
    p2: resolvedAfter.byDecision.P2.length,
    adamant,
    festivalStatus: adamantFestival.status,
  },
}, null, 2));

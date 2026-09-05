import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const dataDirectory = path.join(root, "src", "ui", "data");
const resolvedPath = path.join(root, "docs", "film-history-chapter-eighteen-atlas-resolved.json");
const completionPath = path.join(root, "docs", "film-history-chapter-eighteen-completion.json");
const chapter19ResolvedPath = path.join(root, "docs", "film-history-chapter-nineteen-atlas-resolved.json");
const filmStudyCoveragePath = path.join(root, "src", "core", "filmStudyCoverage.ts");
const filmStudyMapPath = path.join(dataDirectory, "scenarioFilmStudyMap.ts");

function readText(filePath) {
  return readFileSync(filePath, "utf8");
}

function readJson(filePath) {
  return JSON.parse(readText(filePath));
}

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

function collectLiteralScenarioIds(filePrefix) {
  const ids = [];
  for (const fileName of readdirSync(dataDirectory)) {
    if (!fileName.startsWith(filePrefix) || !fileName.endsWith(".ts")) continue;
    const source = readText(path.join(dataDirectory, fileName));
    for (const match of source.matchAll(/scenarioId\s*:\s*"([^"]+)"/g)) ids.push(match[1]);
  }
  return ids;
}

function listNames(directory) {
  return readdirSync(path.join(root, directory)).map((name) => `${directory}/${name}`);
}

const resolved = readJson(resolvedPath);
const completion = readJson(completionPath);
const chapter19 = readJson(chapter19ResolvedPath);

invariant(resolved.chapter?.number === 18, "Chapter 18 completion audit must read the Chapter 18 resolved Atlas.");
invariant(resolved.chapter?.period === "2000–2019", "Chapter 18 period drifted from 2000–2019.");
invariant(resolved.atlas?.expectedCount === 539, `Chapter 18 expected Atlas count drifted: ${resolved.atlas?.expectedCount}`);
invariant(resolved.atlas?.actualCount === 539, `Chapter 18 Atlas is not closed at 539/539: ${resolved.atlas?.actualCount}`);
invariant(resolved.verificationIndex?.literalVerifiedScenarioIds === 539, `Production Verification census is not closed at 539: ${resolved.verificationIndex?.literalVerifiedScenarioIds}`);
invariant(Array.isArray(resolved.candidates) && resolved.candidates.length === 82, `Chapter 18 candidate census is not 82: ${resolved.candidates?.length}`);
invariant(resolved.byDecision?.USE_EXISTING?.length === 82, `Chapter 18 USE_EXISTING census is not 82: ${resolved.byDecision?.USE_EXISTING?.length}`);
for (const decision of ["P0", "P1", "P2", "EXISTING_REQUIRED"]) {
  invariant(Array.isArray(resolved.byDecision?.[decision]) && resolved.byDecision[decision].length === 0, `Chapter 18 ${decision} queue is not empty.`);
}
invariant(Array.isArray(resolved.recommendedNewProductionCases) && resolved.recommendedNewProductionCases.length === 0, "Chapter 18 still recommends new Production Cases.");

const candidateScenarioIds = resolved.candidates.map((candidate) => candidate.scenarioId);
invariant(candidateScenarioIds.every((scenarioId) => typeof scenarioId === "string" && scenarioId.length > 0), "Every Chapter 18 candidate must resolve to a canonical scenarioId.");
invariant(new Set(candidateScenarioIds).size === 82, "Chapter 18 candidate scenarioIds are not unique.");
invariant(resolved.candidates.every((candidate) => candidate.decision === "USE_EXISTING" && candidate.matches === 1 && candidate.productionVerified === true), "Every Chapter 18 candidate must be one matched, production-verified USE_EXISTING case.");

const literalVerificationIds = collectLiteralScenarioIds("scenarioProductionVerification");
const verificationIds = new Set(literalVerificationIds);
invariant(verificationIds.size === 591, `Global Production Verification registry must contain exactly 591 unique scenarioIds after the fifty-first Chapter 19 case: ${verificationIds.size}`);
invariant(candidateScenarioIds.every((scenarioId) => verificationIds.has(scenarioId)), "At least one Chapter 18 candidate is missing its Production Verification record.");

const literalFilmStudyIds = collectLiteralScenarioIds("scenarioFilmStudy");
const filmStudyIds = new Set(literalFilmStudyIds);
invariant(candidateScenarioIds.every((scenarioId) => filmStudyIds.has(scenarioId)), "At least one Chapter 18 candidate is missing its source-backed Film Study profile.");

const filmStudyCoverageSource = readText(filmStudyCoveragePath);
const filmStudyAreaIds = [...filmStudyCoverageSource.matchAll(/\{ id: "([^"]+)", label: "[^"]+", group: "(?:history|craft)" \}/g)].map((match) => match[1]);
invariant(filmStudyAreaIds.length === 17, `Film Study coverage contract drifted from 17 areas: ${filmStudyAreaIds.length}`);
invariant(new Set(filmStudyAreaIds).size === 17, "Film Study area IDs are not unique.");
invariant(readText(filmStudyMapPath).includes("const coverage = completeFilmStudyCoverage("), "Film Study map no longer completes every profile through the 17-area coverage contract.");

const inspectedPermanentPaths = [
  ...listNames(".github/workflows"),
  ...listNames("scripts"),
  ...listNames("docs"),
];
const forbiddenTemporaryPaths = inspectedPermanentPaths.filter((filePath) =>
  /(?:^|\/)TEMP-|chapter[-_ ]?18.*(?:materializ|diagnostic)|ch18.*(?:materializ|diagnostic)|the[-_ ]new[-_ ]world.*diagnostic/i.test(filePath),
);
invariant(forbiddenTemporaryPaths.length === 0, `Temporary artifacts remain: ${forbiddenTemporaryPaths.join(", ")}`);

invariant(completion.schemaVersion === "1.0", "Chapter 18 completion schemaVersion must remain 1.0.");
invariant(completion.status === "complete", "Chapter 18 canonical completion status is not complete.");
invariant(completion.completedOn === "2026-08-28", "Chapter 18 completion date drifted.");
invariant(completion.chapter?.number === 18 && completion.chapter?.id === resolved.chapter.id && completion.chapter?.period === resolved.chapter.period, "Chapter 18 completion metadata does not match the resolved Atlas.");
invariant(completion.baseline?.mainCommitBeforeClosure === "a2568689cb4414ebeaea7764aeb0dc6194a8d09a", "Chapter 18 completion baseline no longer points to the post-The-New-World main commit.");
invariant(completion.proof?.atlas === "539/539", "Chapter 18 completion proof must lock the 539/539 Atlas.");
invariant(completion.proof?.candidateCount === 82 && completion.proof?.useExistingCount === 82, "Chapter 18 completion proof must lock all 82 candidates as USE_EXISTING.");
invariant(completion.proof?.productionVerifiedScenarioIds === 539, "Chapter 18 completion proof must lock 539 Production Verification IDs.");
invariant(completion.proof?.filmStudyAreaCount === 17, "Chapter 18 completion proof must lock the 17-area Film Study contract.");
invariant(completion.proof?.unresolved?.P0 === 0 && completion.proof?.unresolved?.P1 === 0 && completion.proof?.unresolved?.P2 === 0 && completion.proof?.unresolved?.EXISTING_REQUIRED === 0, "Chapter 18 completion proof contains an unresolved queue.");
invariant(completion.proof?.allCandidatesProductionVerified === true, "Chapter 18 completion proof must require Production Verification for every candidate.");
invariant(completion.proof?.allCandidatesHaveFilmStudy === true, "Chapter 18 completion proof must require Film Study coverage for every candidate.");
invariant(completion.proof?.temporaryArtifacts === 0, "Chapter 18 completion proof must require zero temporary artifacts.");

invariant(chapter19.status === "foundation_established", "Chapter 19 source-first foundation is not established.");
invariant(chapter19.chapter?.number === 19 && chapter19.chapter?.period === "2020–present" && chapter19.chapter?.candidateBaseline === "2020–2025", "Chapter 19 scope or candidate baseline drifted.");
invariant(chapter19.governance?.openCurrentPeriod === true && chapter19.governance?.currentYearExcludedFromFrozenBaseline === 2026, "Chapter 19 must remain an open current-period chapter with 2026 excluded from the frozen baseline.");
invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 591, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 591.");
invariant(Array.isArray(chapter19.candidates) && chapter19.candidates.length === 64, "Chapter 19 current candidate set must contain exactly 64 candidates after Triangle of Sadness, Drømmer, Happening and All the Beauty and the Bloodshed reconciliation.");
invariant(chapter19.byDecision?.USE_EXISTING?.length === 62 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 62 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");
const happening = chapter19.candidates.find((candidate) => candidate.title === "Happening");
invariant(happening?.decision === "USE_EXISTING" && happening?.scenarioId === "scenario_happening_2021" && happening?.matches === 1 && happening?.productionVerified === true, "Happening is not closed as one existing production-verified Chapter 19 case.");
const allTheBeautyAndTheBloodshed = chapter19.candidates.find((candidate) => candidate.title === "All the Beauty and the Bloodshed");
invariant(allTheBeautyAndTheBloodshed?.decision === "USE_EXISTING" && allTheBeautyAndTheBloodshed?.scenarioId === "scenario_all_the_beauty_and_the_bloodshed_2022" && allTheBeautyAndTheBloodshed?.matches === 1 && allTheBeautyAndTheBloodshed?.productionVerified === true, "All the Beauty and the Bloodshed is not closed as one existing production-verified Chapter 19 case.");
const tenet = chapter19.candidates.find((candidate) => candidate.title === "Tenet");
invariant(tenet?.decision === "USE_EXISTING" && tenet?.scenarioId === "scenario_tenet_2020" && tenet?.matches === 1 && tenet?.productionVerified === true, "Tenet is not closed as the first production-verified Chapter 19 USE_EXISTING case.");
const soul = chapter19.candidates.find((candidate) => candidate.title === "Soul");
invariant(soul?.decision === "USE_EXISTING" && soul?.scenarioId === "scenario_soul_2020" && soul?.matches === 1 && soul?.productionVerified === true, "Soul is not closed as the second production-verified Chapter 19 USE_EXISTING case.");
const wolfwalkers = chapter19.candidates.find((candidate) => candidate.title === "Wolfwalkers");
invariant(wolfwalkers?.decision === "USE_EXISTING" && wolfwalkers?.scenarioId === "scenario_wolfwalkers_2020" && wolfwalkers?.matches === 1 && wolfwalkers?.productionVerified === true, "Wolfwalkers is not closed as the third production-verified Chapter 19 USE_EXISTING case.");
const dune = chapter19.candidates.find((candidate) => candidate.title === "Dune");
invariant(dune?.decision === "USE_EXISTING" && dune?.scenarioId === "scenario_dune_2021" && dune?.matches === 1 && dune?.productionVerified === true, "Dune is not closed as the fourth production-verified Chapter 19 USE_EXISTING case.");
const flee = chapter19.candidates.find((candidate) => candidate.title === "Flee");
invariant(flee?.decision === "USE_EXISTING" && flee?.scenarioId === "scenario_flee_2021" && flee?.matches === 1 && flee?.productionVerified === true, "Flee is not closed as the fifth production-verified Chapter 19 USE_EXISTING case.");
const avatarWayOfWater = chapter19.candidates.find((candidate) => candidate.title === "Avatar: The Way of Water");
invariant(avatarWayOfWater?.decision === "USE_EXISTING" && avatarWayOfWater?.scenarioId === "scenario_avatar_the_way_of_water_2022" && avatarWayOfWater?.matches === 1 && avatarWayOfWater?.productionVerified === true, "Avatar: The Way of Water is not closed as the sixth production-verified Chapter 19 USE_EXISTING case.");
const nomadland = chapter19.candidates.find((candidate) => candidate.title === "Nomadland");
invariant(nomadland?.decision === "USE_EXISTING" && nomadland?.scenarioId === "scenario_nomadland_2020" && nomadland?.matches === 1 && nomadland?.productionVerified === true, "Nomadland is not closed as the seventh production-verified Chapter 19 USE_EXISTING case.");
const driveMyCar = chapter19.candidates.find((candidate) => candidate.title === "Drive My Car");
invariant(driveMyCar?.decision === "USE_EXISTING" && driveMyCar?.scenarioId === "scenario_drive_my_car_2021" && driveMyCar?.matches === 1 && driveMyCar?.productionVerified === true, "Drive My Car is not closed as the eighth production-verified Chapter 19 USE_EXISTING case.");
const collective = chapter19.candidates.find((candidate) => candidate.title === "Collective");
invariant(collective?.decision === "USE_EXISTING" && collective?.scenarioId === "scenario_collective_2020" && collective?.matches === 1 && collective?.productionVerified === true, "Collective is not closed as the ninth production-verified Chapter 19 USE_EXISTING case.");
const rrr = chapter19.candidates.find((candidate) => candidate.title === "RRR");
invariant(rrr?.decision === "USE_EXISTING" && rrr?.scenarioId === "scenario_rrr_2022" && rrr?.matches === 1 && rrr?.productionVerified === true, "RRR is not closed as the tenth production-verified Chapter 19 USE_EXISTING case.");
const topGunMaverick = chapter19.candidates.find((candidate) => candidate.title === "Top Gun: Maverick");
invariant(topGunMaverick?.decision === "USE_EXISTING" && topGunMaverick?.scenarioId === "scenario_top_gun_maverick_2022" && topGunMaverick?.matches === 1 && topGunMaverick?.productionVerified === true, "Top Gun: Maverick is not closed as the eleventh production-verified Chapter 19 USE_EXISTING case.");
const titane = chapter19.candidates.find((candidate) => candidate.title === "Titane");
invariant(titane?.decision === "USE_EXISTING" && titane?.scenarioId === "scenario_titane_2021" && titane?.matches === 1 && titane?.productionVerified === true, "Titane is not closed as the twelfth production-verified Chapter 19 USE_EXISTING case.");
const everythingEverywhereAllAtOnce = chapter19.candidates.find((candidate) => candidate.title === "Everything Everywhere All at Once");
invariant(everythingEverywhereAllAtOnce?.decision === "USE_EXISTING" && everythingEverywhereAllAtOnce?.scenarioId === "scenario_everything_everywhere_all_at_once_2022" && everythingEverywhereAllAtOnce?.matches === 1 && everythingEverywhereAllAtOnce?.productionVerified === true, "Everything Everywhere All at Once is not closed as the thirteenth production-verified Chapter 19 USE_EXISTING case.");
const fourDaughters = chapter19.candidates.find((candidate) => candidate.title === "Four Daughters");
invariant(fourDaughters?.decision === "USE_EXISTING" && fourDaughters?.scenarioId === "scenario_four_daughters_2023" && fourDaughters?.matches === 1 && fourDaughters?.productionVerified === true, "Four Daughters is not closed as the fourteenth production-verified Chapter 19 USE_EXISTING case.");
const decisionToLeave = chapter19.candidates.find((candidate) => candidate.title === "Decision to Leave");
invariant(decisionToLeave?.decision === "USE_EXISTING" && decisionToLeave?.scenarioId === "scenario_decision_to_leave_2022" && decisionToLeave?.matches === 1 && decisionToLeave?.productionVerified === true, "Decision to Leave is not closed as the fifteenth production-verified Chapter 19 USE_EXISTING case.");
const nope = chapter19.candidates.find((candidate) => candidate.title === "Nope");
invariant(nope?.decision === "USE_EXISTING" && nope?.scenarioId === "scenario_nope_2022" && nope?.matches === 1 && nope?.productionVerified === true, "Nope is not closed as the sixteenth production-verified Chapter 19 USE_EXISTING case.");
const saintOmer = chapter19.candidates.find((candidate) => candidate.title === "Saint Omer");
invariant(saintOmer?.decision === "USE_EXISTING" && saintOmer?.scenarioId === "scenario_saint_omer_2022" && saintOmer?.matches === 1 && saintOmer?.productionVerified === true, "Saint Omer is not closed as the seventeenth production-verified Chapter 19 USE_EXISTING case.");
const coda = chapter19.candidates.find((candidate) => candidate.title === "CODA");
invariant(coda?.decision === "USE_EXISTING" && coda?.scenarioId === "scenario_coda_2021" && coda?.matches === 1 && coda?.productionVerified === true, "CODA is not closed as the eighteenth production-verified Chapter 19 USE_EXISTING case.");
const allWeImagineAsLight = chapter19.candidates.find((candidate) => candidate.title === "All We Imagine as Light");
invariant(allWeImagineAsLight?.decision === "USE_EXISTING" && allWeImagineAsLight?.scenarioId === "scenario_all_we_imagine_as_light_2024" && allWeImagineAsLight?.matches === 1 && allWeImagineAsLight?.productionVerified === true, "All We Imagine as Light is not closed as the nineteenth production-verified Chapter 19 USE_EXISTING case.");
const oppenheimer = chapter19.candidates.find((candidate) => candidate.title === "Oppenheimer");
invariant(oppenheimer?.decision === "USE_EXISTING" && oppenheimer?.scenarioId === "scenario_oppenheimer_2023" && oppenheimer?.matches === 1 && oppenheimer?.productionVerified === true, "Oppenheimer is not closed as the twentieth production-verified Chapter 19 USE_EXISTING case.");
const memoria = chapter19.candidates.find((candidate) => candidate.title === "Memoria");
invariant(memoria?.decision === "USE_EXISTING" && memoria?.scenarioId === "scenario_memoria_2021" && memoria?.matches === 1 && memoria?.productionVerified === true, "Memoria is not closed as the twenty-first production-verified Chapter 19 USE_EXISTING case.");
const anora = chapter19.candidates.find((candidate) => candidate.title === "Anora");
invariant(anora?.decision === "USE_EXISTING" && anora?.scenarioId === "scenario_anora_2024" && anora?.matches === 1 && anora?.productionVerified === true, "Anora is not closed as the twenty-second production-verified Chapter 19 USE_EXISTING case.");
const theSeedOfTheSacredFig = chapter19.candidates.find((candidate) => candidate.title === "The Seed of the Sacred Fig");
invariant(theSeedOfTheSacredFig?.decision === "USE_EXISTING" && theSeedOfTheSacredFig?.scenarioId === "scenario_the_seed_of_the_sacred_fig_2024" && theSeedOfTheSacredFig?.matches === 1 && theSeedOfTheSacredFig?.productionVerified === true, "The Seed of the Sacred Fig is not closed as the twenty-third production-verified Chapter 19 USE_EXISTING case.");
const killersOfTheFlowerMoon = chapter19.candidates.find((candidate) => candidate.title === "Killers of the Flower Moon");
invariant(killersOfTheFlowerMoon?.decision === "USE_EXISTING" && killersOfTheFlowerMoon?.scenarioId === "scenario_killers_of_the_flower_moon_2023" && killersOfTheFlowerMoon?.matches === 1 && killersOfTheFlowerMoon?.productionVerified === true, "Killers of the Flower Moon is not closed as the twenty-fourth production-verified Chapter 19 USE_EXISTING case.");
const anatomyOfAFall = chapter19.candidates.find((candidate) => candidate.title === "Anatomy of a Fall");
invariant(anatomyOfAFall?.decision === "USE_EXISTING" && anatomyOfAFall?.scenarioId === "scenario_anatomy_of_a_fall_2023" && anatomyOfAFall?.matches === 1 && anatomyOfAFall?.productionVerified === true, "Anatomy of a Fall is not closed as the twenty-fifth production-verified Chapter 19 USE_EXISTING case.");
const flow = chapter19.candidates.find((candidate) => candidate.title === "Flow");
invariant(flow?.decision === "USE_EXISTING" && flow?.scenarioId === "scenario_flow_2024" && flow?.matches === 1 && flow?.productionVerified === true, "Flow is not closed as the twenty-sixth production-verified Chapter 19 USE_EXISTING case.");
const godzillaMinusOne = chapter19.candidates.find((candidate) => candidate.title === "Godzilla Minus One");
invariant(godzillaMinusOne?.decision === "USE_EXISTING" && godzillaMinusOne?.scenarioId === "scenario_godzilla_minus_one_2023" && godzillaMinusOne?.matches === 1 && godzillaMinusOne?.productionVerified === true, "Godzilla Minus One is not closed as the twenty-seventh production-verified Chapter 19 USE_EXISTING case.");
const poorThings = chapter19.candidates.find((candidate) => candidate.title === "Poor Things");
invariant(poorThings?.decision === "USE_EXISTING" && poorThings?.scenarioId === "scenario_poor_things_2023" && poorThings?.matches === 1 && poorThings?.productionVerified === true, "Poor Things is not closed as the twenty-eighth production-verified Chapter 19 USE_EXISTING case.");
const sentimentalValue = chapter19.candidates.find((candidate) => candidate.title === "Sentimental Value");
invariant(sentimentalValue?.decision === "USE_EXISTING" && sentimentalValue?.scenarioId === "scenario_sentimental_value_2025" && sentimentalValue?.matches === 1 && sentimentalValue?.productionVerified === true, "Sentimental Value is not closed as the twenty-ninth production-verified Chapter 19 USE_EXISTING case.");
const theSubstance = chapter19.candidates.find((candidate) => candidate.title === "The Substance");
invariant(theSubstance?.decision === "USE_EXISTING" && theSubstance?.scenarioId === "scenario_the_substance_2024" && theSubstance?.matches === 1 && theSubstance?.productionVerified === true, "The Substance is not closed as the thirtieth production-verified Chapter 19 USE_EXISTING case.");
const theZoneOfInterest = chapter19.candidates.find((candidate) => candidate.title === "The Zone of Interest");
invariant(theZoneOfInterest?.decision === "USE_EXISTING" && theZoneOfInterest?.scenarioId === "scenario_the_zone_of_interest_2023" && theZoneOfInterest?.matches === 1 && theZoneOfInterest?.productionVerified === true, "The Zone of Interest is not closed as the thirty-first production-verified Chapter 19 USE_EXISTING case.");
const itWasJustAnAccident = chapter19.candidates.find((candidate) => candidate.title === "It Was Just an Accident");
invariant(itWasJustAnAccident?.decision === "USE_EXISTING" && itWasJustAnAccident?.scenarioId === "scenario_it_was_just_an_accident_2025" && itWasJustAnAccident?.matches === 1 && itWasJustAnAccident?.productionVerified === true, "It Was Just an Accident is not closed as the thirty-second production-verified Chapter 19 USE_EXISTING case.");
const oneBattleAfterAnother = chapter19.candidates.find((candidate) => candidate.title === "One Battle After Another");
invariant(oneBattleAfterAnother?.decision === "USE_EXISTING" && oneBattleAfterAnother?.scenarioId === "scenario_one_battle_after_another_2025" && oneBattleAfterAnother?.matches === 1 && oneBattleAfterAnother?.productionVerified === true, "One Battle After Another is not closed as the thirty-third production-verified Chapter 19 USE_EXISTING case.");
const allQuietOnTheWesternFront = chapter19.candidates.find((candidate) => candidate.title === "All Quiet on the Western Front");
invariant(allQuietOnTheWesternFront?.decision === "USE_EXISTING" && allQuietOnTheWesternFront?.scenarioId === "scenario_all_quiet_on_the_western_front_2022" && allQuietOnTheWesternFront?.matches === 1 && allQuietOnTheWesternFront?.productionVerified === true, "All Quiet on the Western Front is not closed as the thirty-fourth production-verified Chapter 19 USE_EXISTING case.");
const thePowerOfTheDog = chapter19.candidates.find((candidate) => candidate.title === "The Power of the Dog");
invariant(thePowerOfTheDog?.decision === "USE_EXISTING" && thePowerOfTheDog?.scenarioId === "scenario_the_power_of_the_dog_2021" && thePowerOfTheDog?.matches === 1 && thePowerOfTheDog?.productionVerified === true, "The Power of the Dog is not closed as the thirty-fifth production-verified Chapter 19 USE_EXISTING case.");
const theBoyAndTheHeron = chapter19.candidates.find((candidate) => candidate.title === "The Boy and the Heron");
invariant(theBoyAndTheHeron?.decision === "USE_EXISTING" && theBoyAndTheHeron?.scenarioId === "scenario_the_boy_and_the_heron_2023" && theBoyAndTheHeron?.matches === 1 && theBoyAndTheHeron?.productionVerified === true, "The Boy and the Heron is not closed as the thirty-sixth production-verified Chapter 19 USE_EXISTING case.");
const guillermoDelTorosPinocchio = chapter19.candidates.find((candidate) => candidate.title === "Guillermo del Toro's Pinocchio");
invariant(guillermoDelTorosPinocchio?.decision === "USE_EXISTING" && guillermoDelTorosPinocchio?.scenarioId === "scenario_guillermo_del_toros_pinocchio_2022" && guillermoDelTorosPinocchio?.matches === 1 && guillermoDelTorosPinocchio?.productionVerified === true, "Guillermo del Toro's Pinocchio is not closed as the thirty-seventh production-verified Chapter 19 USE_EXISTING case.");
const theBrutalist = chapter19.candidates.find((candidate) => candidate.title === "The Brutalist");
invariant(theBrutalist?.decision === "USE_EXISTING" && theBrutalist?.scenarioId === "scenario_the_brutalist_2024" && theBrutalist?.matches === 1 && theBrutalist?.productionVerified === true, "The Brutalist is not closed as the thirty-eighth production-verified Chapter 19 USE_EXISTING case.");
const sinners = chapter19.candidates.find((candidate) => candidate.title === "Sinners");
invariant(sinners?.decision === "USE_EXISTING" && sinners?.scenarioId === "scenario_sinners_2025" && sinners?.matches === 1 && sinners?.productionVerified === true, "Sinners is not closed as the thirty-ninth production-verified Chapter 19 USE_EXISTING case.");
const kPopDemonHunters = chapter19.candidates.find((candidate) => candidate.title === "KPop Demon Hunters");
invariant(kPopDemonHunters?.decision === "USE_EXISTING" && kPopDemonHunters?.scenarioId === "scenario_kpop_demon_hunters_2025" && kPopDemonHunters?.matches === 1 && kPopDemonHunters?.productionVerified === true, "KPop Demon Hunters is not closed as the fortieth production-verified Chapter 19 USE_EXISTING case.");
const dunePartTwo = chapter19.candidates.find((candidate) => candidate.title === "Dune: Part Two");
invariant(dunePartTwo?.decision === "USE_EXISTING" && dunePartTwo?.scenarioId === "scenario_dune_part_two_2024" && dunePartTwo?.matches === 1 && dunePartTwo?.productionVerified === true, "Dune: Part Two is not closed as the forty-first production-verified Chapter 19 USE_EXISTING case.");
const f1 = chapter19.candidates.find((candidate) => candidate.title === "F1");
invariant(f1?.decision === "USE_EXISTING" && f1?.scenarioId === "scenario_f1_2025" && f1?.matches === 1 && f1?.productionVerified === true, "F1 is not closed as the forty-second production-verified Chapter 19 USE_EXISTING case.");
const sirat = chapter19.candidates.find((candidate) => candidate.title === "Sirāt");
invariant(sirat?.decision === "USE_EXISTING" && sirat?.scenarioId === "scenario_sirat_2025" && sirat?.matches === 1 && sirat?.productionVerified === true, "Sirāt is not closed as the forty-third production-verified Chapter 19 USE_EXISTING case.");
const resurrection = chapter19.candidates.find((candidate) => candidate.title === "Resurrection");
invariant(resurrection?.decision === "USE_EXISTING" && resurrection?.scenarioId === "scenario_resurrection_2025" && resurrection?.matches === 1 && resurrection?.productionVerified === true, "Resurrection is not closed as the forty-fourth production-verified Chapter 19 USE_EXISTING case.");
const theSecretAgent = chapter19.candidates.find((candidate) => candidate.title === "The Secret Agent");
invariant(theSecretAgent?.decision === "USE_EXISTING" && theSecretAgent?.scenarioId === "scenario_the_secret_agent_2025" && theSecretAgent?.matches === 1 && theSecretAgent?.productionVerified === true, "The Secret Agent is not closed as the forty-fifth production-verified Chapter 19 USE_EXISTING case.");
const soundOfFalling = chapter19.candidates.find((candidate) => candidate.title === "Sound of Falling");
invariant(soundOfFalling?.decision === "USE_EXISTING" && soundOfFalling?.scenarioId === "scenario_sound_of_falling_2025" && soundOfFalling?.matches === 1 && soundOfFalling?.productionVerified === true, "Sound of Falling is not closed as the forty-sixth production-verified Chapter 19 USE_EXISTING case.");
const eo = chapter19.candidates.find((candidate) => candidate.title === "EO");
invariant(eo?.decision === "USE_EXISTING" && eo?.scenarioId === "scenario_eo_2022" && eo?.matches === 1 && eo?.productionVerified === true, "EO is not closed as the forty-seventh production-verified Chapter 19 USE_EXISTING case.");
const barbie = chapter19.candidates.find((candidate) => candidate.title === "Barbie");
invariant(barbie?.decision === "USE_EXISTING" && barbie?.scenarioId === "scenario_barbie_2023" && barbie?.matches === 1 && barbie?.productionVerified === true, "Barbie is not closed as the forty-eighth production-verified Chapter 19 USE_EXISTING case.");
const acrossTheSpiderVerse = chapter19.candidates.find((candidate) => candidate.title === "Spider-Man: Across the Spider-Verse");
invariant(acrossTheSpiderVerse?.decision === "USE_EXISTING" && acrossTheSpiderVerse?.scenarioId === "scenario_spider_man_across_the_spider_verse_2023" && acrossTheSpiderVerse?.matches === 1 && acrossTheSpiderVerse?.productionVerified === true, "Spider-Man: Across the Spider-Verse is not closed as the forty-ninth production-verified Chapter 19 USE_EXISTING case.");
const furiosa = chapter19.candidates.find((candidate) => candidate.title === "Furiosa: A Mad Max Saga");
invariant(furiosa?.decision === "USE_EXISTING" && furiosa?.scenarioId === "scenario_furiosa_a_mad_max_saga_2024" && furiosa?.matches === 1 && furiosa?.productionVerified === true, "Furiosa: A Mad Max Saga is not closed as the fiftieth production-verified Chapter 19 USE_EXISTING case.");
const mitchellsVsTheMachines = chapter19.candidates.find((candidate) => candidate.title === "The Mitchells vs. the Machines");
invariant(mitchellsVsTheMachines?.decision === "USE_EXISTING" && mitchellsVsTheMachines?.scenarioId === "scenario_the_mitchells_vs_the_machines_2021" && mitchellsVsTheMachines?.matches === 1 && mitchellsVsTheMachines?.productionVerified === true, "The Mitchells vs. the Machines is not closed as the fifty-first production-verified Chapter 19 USE_EXISTING case.");
invariant(chapter19.productionStrategy?.nextRecommendedCase === null && chapter19.productionStrategy?.nextRecommendedLane === null && chapter19.productionStrategy?.remainingSequence?.length === 0, "Chapter 19 balanced scheduler must be exhausted after The Mitchells vs. the Machines closes the final P0/P1 case.");
invariant(Array.isArray(chapter19.recommendedNewProductionCases) && chapter19.recommendedNewProductionCases.length === 0, "Chapter 19 must have no recommended P0/P1 Production Cases after Mitchells closes.");

invariant(completion.nextPhase?.status === "foundation_established" && completion.nextPhase?.chapter === 19 && completion.nextPhase?.firstDeliverable === "source-first scope and candidate matrix", "Chapter 18 handoff must point to the established Chapter 19 source-first matrix.");
invariant(completion.nextPhase?.firstDeliverablePath === "docs/film-history-chapter-nineteen-atlas-resolved.json", "Chapter 18 handoff must point to the canonical Chapter 19 resolved matrix.");
invariant(completion.nextPhase?.productionCasesMayStartAfterMatrix === true, "Chapter 19 Production Cases must remain gated on the established matrix.");

console.log(JSON.stringify({
  chapter: 18,
  status: completion.status,
  atlas: completion.proof.atlas,
  candidates: completion.proof.candidateCount,
  useExisting: completion.proof.useExistingCount,
  productionVerifiedScenarioIds: verificationIds.size,
  filmStudyAreaCount: filmStudyAreaIds.length,
  unresolved: completion.proof.unresolved,
  temporaryArtifacts: forbiddenTemporaryPaths.length,
  nextPhase: completion.nextPhase,
  chapter19Foundation: {
    status: chapter19.status,
    candidates: chapter19.candidates.length,
    byDecision: Object.fromEntries(Object.entries(chapter19.byDecision).map(([key, value]) => [key, value.length])),
  },
}, null, 2));
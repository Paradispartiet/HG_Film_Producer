import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { allTheBeautyAndTheBloodshedFilmHistoryProfile } from "./scenarioFilmStudyBodyArchiveAllBeauty";
import { dahomeyFilmHistoryProfile } from "./scenarioFilmStudyBodyArchiveDahomey";
import { happeningFilmHistoryProfile } from "./scenarioFilmStudyBodyArchiveHappening";
import { nickelBoysFilmHistoryProfile } from "./scenarioFilmStudyBodyArchiveNickelBoys";
import { dancerInTheDarkFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceDancerDark";
import { secretsAndLiesFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceSecretsLies";
import { theSonsRoomFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceSonsRoom";
import { winterSleepFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceWinterSleep";
import { poetryFilmHistoryProfile } from "./scenarioFilmStudyAsianLandscapePoetry";
import { secretSunshineFilmHistoryProfile } from "./scenarioFilmStudyAsianLandscapeSecretSunshine";
import { stillLifeFilmHistoryProfile } from "./scenarioFilmStudyAsianLandscapeStillLife";
import { tropicalMaladyFilmHistoryProfile } from "./scenarioFilmStudyAsianLandscapeTropicalMalady";
import { cycloFilmHistoryProfile } from "./scenarioFilmStudyAsianTransnationalCyclo";
import { happyTogetherFilmHistoryProfile } from "./scenarioFilmStudyAsianTransnationalHappyTogether";
import { infernalAffairsFilmHistoryProfile } from "./scenarioFilmStudyAsianTransnationalInfernalAffairs";
import { returnToSeoulFilmHistoryProfile } from "./scenarioFilmStudyAsianTransnationalReturnToSeoul";
import { aTouchOfSinFilmHistoryProfile } from "./scenarioFilmStudyChineseLanguageATouchOfSin";
import { longDaysJourneyIntoNightFilmHistoryProfile } from "./scenarioFilmStudyChineseLanguageLongDaysJourney";
import { raiseTheRedLanternFilmHistoryProfile } from "./scenarioFilmStudyChineseLanguageRaiseTheRedLantern";
import { theAssassinFilmHistoryProfile } from "./scenarioFilmStudyChineseLanguageTheAssassin";
import { aCityOfSadnessFilmHistoryProfile } from "./scenarioFilmStudyChineseLanguageModernityCityOfSadness";
import { farewellMyConcubineFilmHistoryProfile } from "./scenarioFilmStudyChineseLanguageModernityFarewellMyConcubine";
import { platformFilmHistoryProfile } from "./scenarioFilmStudyChineseLanguageModernityPlatform";
import { taipeiStoryFilmHistoryProfile } from "./scenarioFilmStudyChineseLanguageModernityTaipeiStory";
import { daysOfBeingWildFilmHistoryProfile } from "./scenarioFilmStudyEastAsianDaysOfBeingWild";
import { goodbyeDragonInnFilmHistoryProfile } from "./scenarioFilmStudyEastAsianGoodbyeDragonInn";
import { millenniumMamboFilmHistoryProfile } from "./scenarioFilmStudyEastAsianMillenniumMambo";
import { viveLAmourFilmHistoryProfile } from "./scenarioFilmStudyEastAsianViveLAmour";
import { americanSplendorFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingAmericanSplendor";
import { daughtersOfTheDustFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingDaughtersOfTheDust";
import { killerOfSheepFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingKillerOfSheep";
import { manWhoWasntThereFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingManWhoWasntThere";
import { mysteryTrainFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingMysteryTrain";
import { sexLiesVideotapeFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingSexLiesVideotape";
import { slackerFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingSlacker";
import { smokeFilmHistoryProfile } from "./scenarioFilmStudyIndependentStorytellingSmoke";
import { cureFilmHistoryProfile } from "./scenarioFilmStudyJapaneseAmbiguityCure";
import { evilDoesNotExistFilmHistoryProfile } from "./scenarioFilmStudyJapaneseAmbiguityEvilDoesNotExist";
import { monsterKoreedaFilmHistoryProfile } from "./scenarioFilmStudyJapaneseAmbiguityMonster";
import { wheelOfFortuneFilmHistoryProfile } from "./scenarioFilmStudyJapaneseAmbiguityWheelOfFortune";
import { afterLifeFilmHistoryProfile } from "./scenarioFilmStudyJapaneseEverydayMemoryAfterLife";
import { blackRainImamuraFilmHistoryProfile } from "./scenarioFilmStudyJapaneseEverydayMemoryBlackRain";
import { stillWalkingFilmHistoryProfile } from "./scenarioFilmStudyJapaneseEverydayMemoryStillWalking";
import { tampopoFilmHistoryProfile } from "./scenarioFilmStudyJapaneseEverydayMemoryTampopo";
import { oasisFilmHistoryProfile } from "./scenarioFilmStudySouthKoreanOasis";
import { peppermintCandyFilmHistoryProfile } from "./scenarioFilmStudySouthKoreanPeppermintCandy";
import { theHostFilmHistoryProfile } from "./scenarioFilmStudySouthKoreanTheHost";
import { theWailingFilmHistoryProfile } from "./scenarioFilmStudySouthKoreanTheWailing";
import { courtFilmHistoryProfile } from "./scenarioFilmStudySouthSoutheastAsianCourt";
import { marlinaFilmHistoryProfile } from "./scenarioFilmStudySouthSoutheastAsianMarlina";
import { syndromesAndACenturyFilmHistoryProfile } from "./scenarioFilmStudySouthSoutheastAsianSyndromes";
import { theDiscipleFilmHistoryProfile } from "./scenarioFilmStudySouthSoutheastAsianTheDisciple";
import { bartonFinkFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureBartonFink";
import { burningFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureBurning";
import { anElephantSittingStillFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureElephant";
import { kagemushaFilmHistoryProfile } from "./scenarioFilmStudySubjectiveEnclosureKagemusha";

export type IndependentStorytellingProfileGroup =
  | "general"
  | "south_korean_genre"
  | "south_southeast_asian"
  | "hong_kong_taiwan_urban_time"
  | "chinese_language_space_genre"
  | "chinese_language_modernity_memory"
  | "asian_landscape_grief_attention"
  | "subjective_enclosure_performance"
  | "family_performance_grief_power"
  | "body_archive_restitution_perspective"
  | "asian_transnational_urban_identity"
  | "japanese_ambiguity_dialogue";

const profiles = [
  tampopoFilmHistoryProfile,
  killerOfSheepFilmHistoryProfile,
  mysteryTrainFilmHistoryProfile,
  blackRainImamuraFilmHistoryProfile,
  sexLiesVideotapeFilmHistoryProfile,
  slackerFilmHistoryProfile,
  daughtersOfTheDustFilmHistoryProfile,
  smokeFilmHistoryProfile,
  afterLifeFilmHistoryProfile,
  manWhoWasntThereFilmHistoryProfile,
  americanSplendorFilmHistoryProfile,
  stillWalkingFilmHistoryProfile,
  peppermintCandyFilmHistoryProfile,
  oasisFilmHistoryProfile,
  theHostFilmHistoryProfile,
  theWailingFilmHistoryProfile,
  syndromesAndACenturyFilmHistoryProfile,
  courtFilmHistoryProfile,
  marlinaFilmHistoryProfile,
  theDiscipleFilmHistoryProfile,
  daysOfBeingWildFilmHistoryProfile,
  viveLAmourFilmHistoryProfile,
  millenniumMamboFilmHistoryProfile,
  goodbyeDragonInnFilmHistoryProfile,
  raiseTheRedLanternFilmHistoryProfile,
  aTouchOfSinFilmHistoryProfile,
  theAssassinFilmHistoryProfile,
  longDaysJourneyIntoNightFilmHistoryProfile,
  taipeiStoryFilmHistoryProfile,
  aCityOfSadnessFilmHistoryProfile,
  farewellMyConcubineFilmHistoryProfile,
  platformFilmHistoryProfile,
  tropicalMaladyFilmHistoryProfile,
  stillLifeFilmHistoryProfile,
  secretSunshineFilmHistoryProfile,
  poetryFilmHistoryProfile,
  burningFilmHistoryProfile,
  anElephantSittingStillFilmHistoryProfile,
  kagemushaFilmHistoryProfile,
  bartonFinkFilmHistoryProfile,
  secretsAndLiesFilmHistoryProfile,
  dancerInTheDarkFilmHistoryProfile,
  theSonsRoomFilmHistoryProfile,
  winterSleepFilmHistoryProfile,
  happeningFilmHistoryProfile,
  allTheBeautyAndTheBloodshedFilmHistoryProfile,
  dahomeyFilmHistoryProfile,
  nickelBoysFilmHistoryProfile,
  cycloFilmHistoryProfile,
  happyTogetherFilmHistoryProfile,
  infernalAffairsFilmHistoryProfile,
  returnToSeoulFilmHistoryProfile,
  cureFilmHistoryProfile,
  wheelOfFortuneFilmHistoryProfile,
  monsterKoreedaFilmHistoryProfile,
  evilDoesNotExistFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

const profilesByScenarioId = new Map<string, FilmHistoryProfile>(
  profiles.map((profile) => [profile.scenarioId, profile] as const),
);

const groupByScenarioId = new Map<string, IndependentStorytellingProfileGroup>();

function assignGroup(group: IndependentStorytellingProfileGroup, scenarioIds: readonly string[]): void {
  for (const scenarioId of scenarioIds) groupByScenarioId.set(scenarioId, group);
}

assignGroup("south_korean_genre", [
  peppermintCandyFilmHistoryProfile.scenarioId,
  oasisFilmHistoryProfile.scenarioId,
  theHostFilmHistoryProfile.scenarioId,
  theWailingFilmHistoryProfile.scenarioId,
]);
assignGroup("south_southeast_asian", [
  syndromesAndACenturyFilmHistoryProfile.scenarioId,
  courtFilmHistoryProfile.scenarioId,
  marlinaFilmHistoryProfile.scenarioId,
  theDiscipleFilmHistoryProfile.scenarioId,
]);
assignGroup("hong_kong_taiwan_urban_time", [
  daysOfBeingWildFilmHistoryProfile.scenarioId,
  viveLAmourFilmHistoryProfile.scenarioId,
  millenniumMamboFilmHistoryProfile.scenarioId,
  goodbyeDragonInnFilmHistoryProfile.scenarioId,
]);
assignGroup("chinese_language_space_genre", [
  raiseTheRedLanternFilmHistoryProfile.scenarioId,
  aTouchOfSinFilmHistoryProfile.scenarioId,
  theAssassinFilmHistoryProfile.scenarioId,
  longDaysJourneyIntoNightFilmHistoryProfile.scenarioId,
]);
assignGroup("chinese_language_modernity_memory", [
  taipeiStoryFilmHistoryProfile.scenarioId,
  aCityOfSadnessFilmHistoryProfile.scenarioId,
  farewellMyConcubineFilmHistoryProfile.scenarioId,
  platformFilmHistoryProfile.scenarioId,
]);
assignGroup("asian_landscape_grief_attention", [
  tropicalMaladyFilmHistoryProfile.scenarioId,
  stillLifeFilmHistoryProfile.scenarioId,
  secretSunshineFilmHistoryProfile.scenarioId,
  poetryFilmHistoryProfile.scenarioId,
]);
assignGroup("subjective_enclosure_performance", [
  burningFilmHistoryProfile.scenarioId,
  anElephantSittingStillFilmHistoryProfile.scenarioId,
  kagemushaFilmHistoryProfile.scenarioId,
  bartonFinkFilmHistoryProfile.scenarioId,
]);
assignGroup("family_performance_grief_power", [
  secretsAndLiesFilmHistoryProfile.scenarioId,
  dancerInTheDarkFilmHistoryProfile.scenarioId,
  theSonsRoomFilmHistoryProfile.scenarioId,
  winterSleepFilmHistoryProfile.scenarioId,
]);
assignGroup("body_archive_restitution_perspective", [
  happeningFilmHistoryProfile.scenarioId,
  allTheBeautyAndTheBloodshedFilmHistoryProfile.scenarioId,
  dahomeyFilmHistoryProfile.scenarioId,
  nickelBoysFilmHistoryProfile.scenarioId,
]);
assignGroup("asian_transnational_urban_identity", [
  cycloFilmHistoryProfile.scenarioId,
  happyTogetherFilmHistoryProfile.scenarioId,
  infernalAffairsFilmHistoryProfile.scenarioId,
  returnToSeoulFilmHistoryProfile.scenarioId,
]);
assignGroup("japanese_ambiguity_dialogue", [
  cureFilmHistoryProfile.scenarioId,
  wheelOfFortuneFilmHistoryProfile.scenarioId,
  monsterKoreedaFilmHistoryProfile.scenarioId,
  evilDoesNotExistFilmHistoryProfile.scenarioId,
]);

export function getIndependentStorytellingCatalogProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return profilesByScenarioId.get(scenarioId);
}

export function getIndependentStorytellingProfileGroup(
  scenarioId: string,
): IndependentStorytellingProfileGroup {
  return groupByScenarioId.get(scenarioId) ?? "general";
}

export function getIndependentStorytellingDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] {
  const group = getIndependentStorytellingProfileGroup(profile.scenarioId);
  return profiles
    .filter((candidate) => candidate.scenarioId !== profile.scenarioId)
    .filter((candidate) => getIndependentStorytellingProfileGroup(candidate.scenarioId) === group)
    .sort((left, right) => left.scenarioId.localeCompare(right.scenarioId));
}

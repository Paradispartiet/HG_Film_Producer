import {
  getProductionCaseVerification as getFoundationVerification,
  getProductionCaseVerificationRecords as getFoundationVerificationRecords,
  type ProductionCaseVerificationRecord,
} from "./scenarioProductionVerification";
import { politicalPalme1980sVerificationRecords } from "./scenarioProductionVerification1980sPoliticalPalmeSystemsBatch";
import { productionSystems1930sVerificationRecords } from "./scenarioProductionVerification1930sProductionSystemsBatch";
import { noirRealism1940sVerificationRecords } from "./scenarioProductionVerification1940sNoirRealismBatch";
import { asianPostwar1950sVerificationRecords } from "./scenarioProductionVerification1950sAsianPostwarBatch";
import { expressivePostwar1950sVerificationRecords } from "./scenarioProductionVerification1950sExpressivePostwarBatch";
import { sixtiesScaleIndependentVerificationRecords } from "./scenarioProductionVerification1960sScaleIndependentBatch";
import { americanIndependentBreakthroughsVerificationRecords } from "./scenarioProductionVerificationAmericanIndependentBreakthroughsBatch";
import { asianLandscapeGriefAttentionVerificationRecords } from "./scenarioProductionVerificationAsianLandscapeGriefAttentionBatch";
import { asianTransnationalUrbanIdentityVerificationRecords } from "./scenarioProductionVerificationAsianTransnationalUrbanIdentityBatch";
import { balkanWarInstitutionVerificationRecords } from "./scenarioProductionVerificationBalkanWarInstitutionSystemsBatch";
import { bodyArchiveRestitutionPerspectiveVerificationRecords } from "./scenarioProductionVerificationBodyArchiveRestitutionPerspectiveBatch";
import { britishIrishPlaceBodyVerificationRecords } from "./scenarioProductionVerificationBritishIrishPlaceBodySystemsBatch";
import { chineseLanguageModernityMemoryVerificationRecords } from "./scenarioProductionVerificationChineseLanguageModernityMemoryBatch";
import { chineseLanguageSpaceGenreVerificationRecords } from "./scenarioProductionVerificationChineseLanguageSpaceGenreBatch";
import { classicalHollywoodVerificationRecords } from "./scenarioProductionVerificationClassicalHollywoodBatch";
import { constructedWorldsVerificationRecords } from "./scenarioProductionVerificationConstructedWorldsBatch";
import { contemporaryDissentRuralVerificationRecords } from "./scenarioProductionVerificationContemporaryDissentRuralSystemsBatch";
import { contemporaryEuropeanSocialCareVerificationRecords } from "./scenarioProductionVerificationContemporaryEuropeanSocialCareSystemsBatch";
import { crimeNoirTransformationsVerificationRecords } from "./scenarioProductionVerificationCrimeNoirTransformationsBatch";
import { crossEraVerificationRecords } from "./scenarioProductionVerificationCrossEraBatch";
import { czechoslovakNewWaveVerificationRecords } from "./scenarioProductionVerificationCzechoslovakNewWaveBatch";
import { early1960sProductionSystemsVerificationRecords } from "./scenarioProductionVerificationEarly1960sProductionSystemsBatch";
import { european1960sSpaceVerificationRecords } from "./scenarioProductionVerificationEuropean1960sSpaceSystemsBatch";
import { europeanModernistProductionVerificationRecords } from "./scenarioProductionVerificationEuropeanModernistProductionBatch";
import { europeanPoeticMemoryVerificationRecords } from "./scenarioProductionVerificationEuropeanPoeticMemorySystemsBatch";
import { europeanPoliticalFeministModernismVerificationRecords } from "./scenarioProductionVerificationEuropeanPoliticalFeministModernismBatch";
import { europeanPressureVerificationRecords } from "./scenarioProductionVerificationEuropeanPressureBatch";
import { europeanTimeIdentityVerificationRecords } from "./scenarioProductionVerificationEuropeanTimeIdentitySystemsBatch";
import { familyPerformanceGriefPowerVerificationRecords } from "./scenarioProductionVerificationFamilyPerformanceGriefPowerBatch";
import { festivalJourneyDisplacementVerificationRecords } from "./scenarioProductionVerificationFestivalJourneyDisplacementSystemsBatch";
import { festivalUrbanIntimacyVerificationRecords } from "./scenarioProductionVerificationFestivalUrbanIntimacySystemsBatch";
import { hongKongTaiwanUrbanTimeVerificationRecords } from "./scenarioProductionVerificationHongKongTaiwanUrbanTimeBatch";
import { iberianPortugueseMemoryVerificationRecords } from "./scenarioProductionVerificationIberianPortugueseMemorySystemsBatch";
import { independentStorytellingVerificationRecords } from "./scenarioProductionVerificationIndependentStorytellingBatch";
import { intimateFestivalBodyCareVerificationRecords } from "./scenarioProductionVerificationIntimateFestivalBodyCareSystemsBatch";
import { japaneseAmbiguityDialogueVerificationRecords } from "./scenarioProductionVerificationJapaneseAmbiguityDialogueBatch";
import { japaneseEverydayMemoryVerificationRecords } from "./scenarioProductionVerificationJapaneseEverydayMemoryBatch";
import { landscapeCinemaVerificationRecords } from "./scenarioProductionVerificationLandscapeBatch";
import { lateSilentEarlySoundVerificationRecords } from "./scenarioProductionVerificationLateSilentEarlySoundBatch";
import { minimalistRoadVerificationRecords } from "./scenarioProductionVerificationMinimalistRoadBatch";
import { productionMethodVerificationRecords } from "./scenarioProductionVerificationMethodBatch";
import { modernCraftVerificationRecords } from "./scenarioProductionVerificationModernBatch";
import { modernNordicBehaviorSystemsVerificationRecords } from "./scenarioProductionVerificationModernNordicBehaviorSystemsBatch";
import { newGermanCinemaVerificationRecords } from "./scenarioProductionVerificationNewGermanCinemaSystemsBatch";
import { newHollywoodBlockbusterVerificationRecords } from "./scenarioProductionVerificationNewHollywoodBlockbusterBatch";
import { nordicMinimalistSocialSystemsVerificationRecords } from "./scenarioProductionVerificationNordicMinimalistSocialSystemsBatch";
import { norwegianPostwarGenreSystemsVerificationRecords } from "./scenarioProductionVerificationNorwegianPostwarGenreSystemsBatch";
import { postwarEuropeanModernismVerificationRecords } from "./scenarioProductionVerificationPostwarEuropeanModernismBatch";
import { queerIndependentBodyCommunityArchiveVerificationRecords } from "./scenarioProductionVerificationQueerIndependentBodyCommunityArchiveBatch";
import { silentFoundationsVerificationRecords } from "./scenarioProductionVerificationSilentFoundationsBatch";
import { silentStudioSystemsVerificationRecords } from "./scenarioProductionVerificationSilentStudioSystemsBatch";
import { southKoreanGenreSystemsVerificationRecords } from "./scenarioProductionVerificationSouthKoreanGenreSystemsBatch";
import { southSoutheastAsianSystemsVerificationRecords } from "./scenarioProductionVerificationSouthSoutheastAsianSystemsBatch";
import { subjectiveEnclosurePerformanceVerificationRecords } from "./scenarioProductionVerificationSubjectiveEnclosurePerformanceBatch";
import { technologyHistoryVerificationRecords } from "./scenarioProductionVerificationTechnologyBatch";

export type {
  ProductionCaseVerificationArea,
  ProductionCaseVerificationRecord,
  ProductionCaseVerificationSource,
} from "./scenarioProductionVerification";

const additionalVerificationRecords = [
  ...productionMethodVerificationRecords,
  ...modernCraftVerificationRecords,
  ...crossEraVerificationRecords,
  ...technologyHistoryVerificationRecords,
  ...landscapeCinemaVerificationRecords,
  ...constructedWorldsVerificationRecords,
  ...minimalistRoadVerificationRecords,
  ...europeanPressureVerificationRecords,
  ...independentStorytellingVerificationRecords,
  ...americanIndependentBreakthroughsVerificationRecords,
  ...japaneseEverydayMemoryVerificationRecords,
  ...southKoreanGenreSystemsVerificationRecords,
  ...southSoutheastAsianSystemsVerificationRecords,
  ...hongKongTaiwanUrbanTimeVerificationRecords,
  ...chineseLanguageSpaceGenreVerificationRecords,
  ...chineseLanguageModernityMemoryVerificationRecords,
  ...asianLandscapeGriefAttentionVerificationRecords,
  ...subjectiveEnclosurePerformanceVerificationRecords,
  ...familyPerformanceGriefPowerVerificationRecords,
  ...bodyArchiveRestitutionPerspectiveVerificationRecords,
  ...queerIndependentBodyCommunityArchiveVerificationRecords,
  ...asianTransnationalUrbanIdentityVerificationRecords,
  ...japaneseAmbiguityDialogueVerificationRecords,
  ...silentFoundationsVerificationRecords,
  ...silentStudioSystemsVerificationRecords,
  ...lateSilentEarlySoundVerificationRecords,
  ...productionSystems1930sVerificationRecords,
  ...classicalHollywoodVerificationRecords,
  ...noirRealism1940sVerificationRecords,
  ...crimeNoirTransformationsVerificationRecords,
  ...norwegianPostwarGenreSystemsVerificationRecords,
  ...nordicMinimalistSocialSystemsVerificationRecords,
  ...modernNordicBehaviorSystemsVerificationRecords,
  ...politicalPalme1980sVerificationRecords,
  ...festivalJourneyDisplacementVerificationRecords,
  ...intimateFestivalBodyCareVerificationRecords,
  ...festivalUrbanIntimacyVerificationRecords,
  ...contemporaryDissentRuralVerificationRecords,
  ...contemporaryEuropeanSocialCareVerificationRecords,
  ...britishIrishPlaceBodyVerificationRecords,
  ...iberianPortugueseMemoryVerificationRecords,
  ...balkanWarInstitutionVerificationRecords,
  ...european1960sSpaceVerificationRecords,
  ...newGermanCinemaVerificationRecords,
  ...europeanTimeIdentityVerificationRecords,
  ...europeanPoeticMemoryVerificationRecords,
  ...asianPostwar1950sVerificationRecords,
  ...expressivePostwar1950sVerificationRecords,
  ...postwarEuropeanModernismVerificationRecords,
  ...czechoslovakNewWaveVerificationRecords,
  ...europeanPoliticalFeministModernismVerificationRecords,
  ...newHollywoodBlockbusterVerificationRecords,
  ...sixtiesScaleIndependentVerificationRecords,
  ...europeanModernistProductionVerificationRecords,
  ...early1960sProductionSystemsVerificationRecords,
] as const satisfies readonly ProductionCaseVerificationRecord[];

const additionalVerificationByScenarioId = new Map<string, ProductionCaseVerificationRecord>(
  additionalVerificationRecords.map((record) => [record.scenarioId, record]),
);

export function getProductionCaseVerification(
  scenarioId: string,
): ProductionCaseVerificationRecord | undefined {
  return additionalVerificationByScenarioId.get(scenarioId)
    ?? getFoundationVerification(scenarioId);
}

export function getProductionCaseVerificationRecords(): readonly ProductionCaseVerificationRecord[] {
  return [
    ...getFoundationVerificationRecords(),
    ...additionalVerificationRecords,
  ];
}

export function getVerifiedProductionCaseIds(): readonly string[] {
  return getProductionCaseVerificationRecords().map((record) => record.scenarioId);
}

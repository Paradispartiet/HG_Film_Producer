import type { FilmScenarioSeed } from "./filmScenarios";
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";
import { getSourceBackedFilmHistoryProfile, resolveScenarioFilmStudyMap, type FilmHistoryProfile, type ScenarioFilmStudyMap } from "./scenarioFilmStudyMap";
import { getEuropeanTimeIdentitySystemsFilmHistoryProfile, resolveEuropeanTimeIdentitySystemsFilmStudyMap } from "./scenarioFilmStudyEuropeanTimeIdentitySystemsBatch";
import { getNewGermanCinemaSystemsFilmHistoryProfile, resolveNewGermanCinemaSystemsFilmStudyMap } from "./scenarioFilmStudyNewGermanCinemaSystemsBatch";
import { getEuropean1960sSpaceSystemsFilmHistoryProfile, resolveEuropean1960sSpaceSystemsFilmStudyMap } from "./scenarioFilmStudyEuropean1960sSpaceSystemsBatch";
import { getBalkanWarInstitutionSystemsFilmHistoryProfile, resolveBalkanWarInstitutionSystemsFilmStudyMap } from "./scenarioFilmStudyBalkanWarInstitutionSystemsBatch";
import { getIberianPortugueseMemorySystemsFilmHistoryProfile, resolveIberianPortugueseMemorySystemsFilmStudyMap } from "./scenarioFilmStudyIberianPortugueseMemorySystemsBatch";
import { getBritishIrishPlaceBodySystemsFilmHistoryProfile, resolveBritishIrishPlaceBodySystemsFilmStudyMap } from "./scenarioFilmStudyBritishIrishPlaceBodySystemsBatch";
import { getEuropeanPoeticMemorySystemsFilmHistoryProfile, resolveEuropeanPoeticMemorySystemsFilmStudyMap } from "./scenarioFilmStudyEuropeanPoeticMemorySystemsBatch";
import { getContemporaryEuropeanSocialCareSystemsFilmHistoryProfile, resolveContemporaryEuropeanSocialCareSystemsFilmStudyMap } from "./scenarioFilmStudyContemporaryEuropeanSocialCareSystemsBatch";
import { getContemporaryDissentRuralSystemsFilmHistoryProfile, resolveContemporaryDissentRuralSystemsFilmStudyMap } from "./scenarioFilmStudyContemporaryDissentRuralSystemsBatch";
import { getFestivalUrbanIntimacySystemsFilmHistoryProfile, resolveFestivalUrbanIntimacySystemsFilmStudyMap } from "./scenarioFilmStudyFestivalUrbanIntimacySystemsBatch";
import { getIntimateFestivalBodyCareSystemsFilmHistoryProfile, resolveIntimateFestivalBodyCareSystemsFilmStudyMap } from "./scenarioFilmStudyIntimateFestivalBodyCareSystemsBatch";
import { getFestivalJourneyDisplacementSystemsFilmHistoryProfile, resolveFestivalJourneyDisplacementSystemsFilmStudyMap } from "./scenarioFilmStudyFestivalJourneyDisplacementSystemsBatch";
import { get1980sPoliticalPalmeSystemsFilmHistoryProfile, resolve1980sPoliticalPalmeSystemsFilmStudyMap } from "./scenarioFilmStudy1980sPoliticalPalmeSystemsBatch";
import { getModernNordicBehaviorSystemsFilmHistoryProfile, resolveModernNordicBehaviorSystemsFilmStudyMap } from "./scenarioFilmStudyModernNordicBehaviorSystemsBatch";
import { getNordicMinimalistSocialSystemsFilmHistoryProfile, resolveNordicMinimalistSocialSystemsFilmStudyMap } from "./scenarioFilmStudyNordicMinimalistSocialSystemsBatch";
import { getNorwegianPostwarGenreSystemsFilmHistoryProfile, resolveNorwegianPostwarGenreSystemsFilmStudyMap } from "./scenarioFilmStudyNorwegianPostwarGenreSystemsBatch";
import { getCrimeNoirTransformationsFilmHistoryProfile, resolveCrimeNoirTransformationsFilmStudyMap } from "./scenarioFilmStudyCrimeNoirTransformationsBatch";
import { getEarly1960sProductionSystemsFilmHistoryProfile, resolveEarly1960sProductionSystemsFilmStudyMap } from "./scenarioFilmStudyEarly1960sProductionSystemsBatch";
import { get1950sExpressivePostwarFilmHistoryProfile, resolve1950sExpressivePostwarFilmStudyMap } from "./scenarioFilmStudy1950sExpressivePostwarBatch";
import { getEuropeanModernistProductionFilmHistoryProfile, resolveEuropeanModernistProductionFilmStudyMap } from "./scenarioFilmStudyEuropeanModernistProductionBatch";
import { get1960sScaleIndependentFilmHistoryProfile, resolve1960sScaleIndependentFilmStudyMap } from "./scenarioFilmStudy1960sScaleIndependentBatch";
import { getNewHollywoodBlockbusterFilmHistoryProfile, resolveNewHollywoodBlockbusterFilmStudyMap } from "./scenarioFilmStudyNewHollywoodBlockbusterBatch";
import { getEuropeanPoliticalFeministModernismFilmHistoryProfile, resolveEuropeanPoliticalFeministModernismFilmStudyMap } from "./scenarioFilmStudyEuropeanPoliticalFeministModernismBatch";
import { getCzechoslovakNewWaveFilmHistoryProfile, resolveCzechoslovakNewWaveFilmStudyMap } from "./scenarioFilmStudyCzechoslovakNewWaveBatch";
import { getPostwarEuropeanModernismFilmHistoryProfile, resolvePostwarEuropeanModernismFilmStudyMap } from "./scenarioFilmStudyPostwarEuropeanModernismBatch";
import { get1950sAsianPostwarFilmHistoryProfile, resolve1950sAsianPostwarFilmStudyMap } from "./scenarioFilmStudy1950sAsianPostwarBatch";
import { get1940sNoirRealismFilmHistoryProfile, resolve1940sNoirRealismFilmStudyMap } from "./scenarioFilmStudy1940sNoirRealismBatch";
import { getClassicalHollywoodFilmHistoryProfile, resolveClassicalHollywoodFilmStudyMap } from "./scenarioFilmStudyClassicalHollywoodBatch";
import { get1930sProductionSystemsFilmHistoryProfile, resolve1930sProductionSystemsFilmStudyMap } from "./scenarioFilmStudy1930sProductionSystemsBatch";
import { getLateSilentEarlySoundFilmHistoryProfile, resolveLateSilentEarlySoundFilmStudyMap } from "./scenarioFilmStudyLateSilentEarlySoundBatch";
import { getSilentStudioSystemsFilmHistoryProfile, resolveSilentStudioSystemsFilmStudyMap } from "./scenarioFilmStudySilentStudioSystemsBatch";
import { getSilentFoundationsFilmHistoryProfile, resolveSilentFoundationsFilmStudyMap } from "./scenarioFilmStudySilentFoundationsBatch";
import { getIndependentStorytellingFilmHistoryProfile, resolveIndependentStorytellingFilmStudyMap } from "./scenarioFilmStudyIndependentStorytellingBatch";
import { getEuropeanPressureFilmHistoryProfile, resolveEuropeanPressureFilmStudyMap } from "./scenarioFilmStudyEuropeanPressureBatch";
import { getMinimalistRoadFilmHistoryProfile, resolveMinimalistRoadFilmStudyMap } from "./scenarioFilmStudyMinimalistRoadBatch";
import { getConstructedWorldsFilmHistoryProfile, resolveConstructedWorldsFilmStudyMap } from "./scenarioFilmStudyConstructedWorldsBatch";
import { getLandscapeFilmHistoryProfile, resolveLandscapeFilmStudyMap } from "./scenarioFilmStudyLandscapeBatch";
import { getTechnologyFilmHistoryProfile, resolveTechnologyFilmStudyMap } from "./scenarioFilmStudyTechnologyBatch";

// Same precedence formerly used directly in ScenarioFilmStudyPanel.
// One registry for both history display and the verified production-brief bridge.
const profileResolvers = [
  { getProfile: getEuropeanTimeIdentitySystemsFilmHistoryProfile, resolveMap: resolveEuropeanTimeIdentitySystemsFilmStudyMap },
  { getProfile: getNewGermanCinemaSystemsFilmHistoryProfile, resolveMap: resolveNewGermanCinemaSystemsFilmStudyMap },
  { getProfile: getEuropean1960sSpaceSystemsFilmHistoryProfile, resolveMap: resolveEuropean1960sSpaceSystemsFilmStudyMap },
  { getProfile: getBalkanWarInstitutionSystemsFilmHistoryProfile, resolveMap: resolveBalkanWarInstitutionSystemsFilmStudyMap },
  { getProfile: getIberianPortugueseMemorySystemsFilmHistoryProfile, resolveMap: resolveIberianPortugueseMemorySystemsFilmStudyMap },
  { getProfile: getBritishIrishPlaceBodySystemsFilmHistoryProfile, resolveMap: resolveBritishIrishPlaceBodySystemsFilmStudyMap },
  { getProfile: getEuropeanPoeticMemorySystemsFilmHistoryProfile, resolveMap: resolveEuropeanPoeticMemorySystemsFilmStudyMap },
  { getProfile: getContemporaryEuropeanSocialCareSystemsFilmHistoryProfile, resolveMap: resolveContemporaryEuropeanSocialCareSystemsFilmStudyMap },
  { getProfile: getContemporaryDissentRuralSystemsFilmHistoryProfile, resolveMap: resolveContemporaryDissentRuralSystemsFilmStudyMap },
  { getProfile: getFestivalUrbanIntimacySystemsFilmHistoryProfile, resolveMap: resolveFestivalUrbanIntimacySystemsFilmStudyMap },
  { getProfile: getIntimateFestivalBodyCareSystemsFilmHistoryProfile, resolveMap: resolveIntimateFestivalBodyCareSystemsFilmStudyMap },
  { getProfile: getFestivalJourneyDisplacementSystemsFilmHistoryProfile, resolveMap: resolveFestivalJourneyDisplacementSystemsFilmStudyMap },
  { getProfile: get1980sPoliticalPalmeSystemsFilmHistoryProfile, resolveMap: resolve1980sPoliticalPalmeSystemsFilmStudyMap },
  { getProfile: getModernNordicBehaviorSystemsFilmHistoryProfile, resolveMap: resolveModernNordicBehaviorSystemsFilmStudyMap },
  { getProfile: getNordicMinimalistSocialSystemsFilmHistoryProfile, resolveMap: resolveNordicMinimalistSocialSystemsFilmStudyMap },
  { getProfile: getNorwegianPostwarGenreSystemsFilmHistoryProfile, resolveMap: resolveNorwegianPostwarGenreSystemsFilmStudyMap },
  { getProfile: getCrimeNoirTransformationsFilmHistoryProfile, resolveMap: resolveCrimeNoirTransformationsFilmStudyMap },
  { getProfile: getEarly1960sProductionSystemsFilmHistoryProfile, resolveMap: resolveEarly1960sProductionSystemsFilmStudyMap },
  { getProfile: get1950sExpressivePostwarFilmHistoryProfile, resolveMap: resolve1950sExpressivePostwarFilmStudyMap },
  { getProfile: getEuropeanModernistProductionFilmHistoryProfile, resolveMap: resolveEuropeanModernistProductionFilmStudyMap },
  { getProfile: get1960sScaleIndependentFilmHistoryProfile, resolveMap: resolve1960sScaleIndependentFilmStudyMap },
  { getProfile: getNewHollywoodBlockbusterFilmHistoryProfile, resolveMap: resolveNewHollywoodBlockbusterFilmStudyMap },
  { getProfile: getEuropeanPoliticalFeministModernismFilmHistoryProfile, resolveMap: resolveEuropeanPoliticalFeministModernismFilmStudyMap },
  { getProfile: getCzechoslovakNewWaveFilmHistoryProfile, resolveMap: resolveCzechoslovakNewWaveFilmStudyMap },
  { getProfile: getPostwarEuropeanModernismFilmHistoryProfile, resolveMap: resolvePostwarEuropeanModernismFilmStudyMap },
  { getProfile: get1950sAsianPostwarFilmHistoryProfile, resolveMap: resolve1950sAsianPostwarFilmStudyMap },
  { getProfile: get1940sNoirRealismFilmHistoryProfile, resolveMap: resolve1940sNoirRealismFilmStudyMap },
  { getProfile: getClassicalHollywoodFilmHistoryProfile, resolveMap: resolveClassicalHollywoodFilmStudyMap },
  { getProfile: get1930sProductionSystemsFilmHistoryProfile, resolveMap: resolve1930sProductionSystemsFilmStudyMap },
  { getProfile: getLateSilentEarlySoundFilmHistoryProfile, resolveMap: resolveLateSilentEarlySoundFilmStudyMap },
  { getProfile: getSilentStudioSystemsFilmHistoryProfile, resolveMap: resolveSilentStudioSystemsFilmStudyMap },
  { getProfile: getSilentFoundationsFilmHistoryProfile, resolveMap: resolveSilentFoundationsFilmStudyMap },
  { getProfile: getIndependentStorytellingFilmHistoryProfile, resolveMap: resolveIndependentStorytellingFilmStudyMap },
  { getProfile: getEuropeanPressureFilmHistoryProfile, resolveMap: resolveEuropeanPressureFilmStudyMap },
  { getProfile: getMinimalistRoadFilmHistoryProfile, resolveMap: resolveMinimalistRoadFilmStudyMap },
  { getProfile: getConstructedWorldsFilmHistoryProfile, resolveMap: resolveConstructedWorldsFilmStudyMap },
  { getProfile: getLandscapeFilmHistoryProfile, resolveMap: resolveLandscapeFilmStudyMap },
  { getProfile: getTechnologyFilmHistoryProfile, resolveMap: resolveTechnologyFilmStudyMap },
] as const;

export function getResolvedFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  for (const resolver of profileResolvers) {
    const profile = resolver.getProfile(scenarioId);
    if (profile?.scenarioId === scenarioId) return profile;
  }
  return getSourceBackedFilmHistoryProfile(scenarioId);
}

export function resolveFullScenarioFilmStudyMap(
  scenario: FilmScenarioSeed,
  brief: ScenarioProductionBrief,
): ScenarioFilmStudyMap {
  for (const resolver of profileResolvers) {
    const study = resolver.resolveMap(scenario, brief);
    if (study) return study;
  }
  return resolveScenarioFilmStudyMap(scenario, brief);
}

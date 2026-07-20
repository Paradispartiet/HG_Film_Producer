import {
  getProductionCaseVerification as getFoundationVerification,
  getProductionCaseVerificationRecords as getFoundationVerificationRecords,
  type ProductionCaseVerificationRecord,
} from "./scenarioProductionVerification";
import { productionSystems1930sVerificationRecords } from "./scenarioProductionVerification1930sProductionSystemsBatch";
import { noirRealism1940sVerificationRecords } from "./scenarioProductionVerification1940sNoirRealismBatch";
import { asianPostwar1950sVerificationRecords } from "./scenarioProductionVerification1950sAsianPostwarBatch";
import { classicalHollywoodVerificationRecords } from "./scenarioProductionVerificationClassicalHollywoodBatch";
import { constructedWorldsVerificationRecords } from "./scenarioProductionVerificationConstructedWorldsBatch";
import { crossEraVerificationRecords } from "./scenarioProductionVerificationCrossEraBatch";
import { czechoslovakNewWaveVerificationRecords } from "./scenarioProductionVerificationCzechoslovakNewWaveBatch";
import { europeanPoliticalFeministModernismVerificationRecords } from "./scenarioProductionVerificationEuropeanPoliticalFeministModernismBatch";
import { europeanPressureVerificationRecords } from "./scenarioProductionVerificationEuropeanPressureBatch";
import { independentStorytellingVerificationRecords } from "./scenarioProductionVerificationIndependentStorytellingBatch";
import { landscapeCinemaVerificationRecords } from "./scenarioProductionVerificationLandscapeBatch";
import { lateSilentEarlySoundVerificationRecords } from "./scenarioProductionVerificationLateSilentEarlySoundBatch";
import { minimalistRoadVerificationRecords } from "./scenarioProductionVerificationMinimalistRoadBatch";
import { productionMethodVerificationRecords } from "./scenarioProductionVerificationMethodBatch";
import { modernCraftVerificationRecords } from "./scenarioProductionVerificationModernBatch";
import { newHollywoodBlockbusterVerificationRecords } from "./scenarioProductionVerificationNewHollywoodBlockbusterBatch";
import { postwarEuropeanModernismVerificationRecords } from "./scenarioProductionVerificationPostwarEuropeanModernismBatch";
import { silentFoundationsVerificationRecords } from "./scenarioProductionVerificationSilentFoundationsBatch";
import { silentStudioSystemsVerificationRecords } from "./scenarioProductionVerificationSilentStudioSystemsBatch";
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
  ...silentFoundationsVerificationRecords,
  ...silentStudioSystemsVerificationRecords,
  ...lateSilentEarlySoundVerificationRecords,
  ...productionSystems1930sVerificationRecords,
  ...classicalHollywoodVerificationRecords,
  ...noirRealism1940sVerificationRecords,
  ...asianPostwar1950sVerificationRecords,
  ...postwarEuropeanModernismVerificationRecords,
  ...czechoslovakNewWaveVerificationRecords,
  ...europeanPoliticalFeministModernismVerificationRecords,
  ...newHollywoodBlockbusterVerificationRecords,
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

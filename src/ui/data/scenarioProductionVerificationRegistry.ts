import {
  getProductionCaseVerification as getFoundationVerification,
  getProductionCaseVerificationRecords as getFoundationVerificationRecords,
  type ProductionCaseVerificationRecord,
} from "./scenarioProductionVerification";
import { crossEraVerificationRecords } from "./scenarioProductionVerificationCrossEraBatch";
import { productionMethodVerificationRecords } from "./scenarioProductionVerificationMethodBatch";
import { modernCraftVerificationRecords } from "./scenarioProductionVerificationModernBatch";
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

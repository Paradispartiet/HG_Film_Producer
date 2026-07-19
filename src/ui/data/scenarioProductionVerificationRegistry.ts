import {
  getProductionCaseVerification as getFoundationVerification,
  getProductionCaseVerificationRecords as getFoundationVerificationRecords,
  type ProductionCaseVerificationRecord,
} from "./scenarioProductionVerification";
import { productionMethodVerificationRecords } from "./scenarioProductionVerificationMethodBatch";

export type {
  ProductionCaseVerificationArea,
  ProductionCaseVerificationRecord,
  ProductionCaseVerificationSource,
} from "./scenarioProductionVerification";

const productionMethodVerificationByScenarioId = new Map<string, ProductionCaseVerificationRecord>(
  productionMethodVerificationRecords.map((record) => [record.scenarioId, record]),
);

export function getProductionCaseVerification(
  scenarioId: string,
): ProductionCaseVerificationRecord | undefined {
  return productionMethodVerificationByScenarioId.get(scenarioId)
    ?? getFoundationVerification(scenarioId);
}

export function getProductionCaseVerificationRecords(): readonly ProductionCaseVerificationRecord[] {
  return [
    ...getFoundationVerificationRecords(),
    ...productionMethodVerificationRecords,
  ];
}

export function getVerifiedProductionCaseIds(): readonly string[] {
  return getProductionCaseVerificationRecords().map((record) => record.scenarioId);
}

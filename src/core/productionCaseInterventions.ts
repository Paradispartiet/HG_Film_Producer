export type ProductionCaseInterventionId =
  | "cut_scope"
  | "bridge_financing"
  | "add_shoot_days";

export type ProductionCaseIntervention = {
  readonly id: ProductionCaseInterventionId;
  readonly label: string;
  readonly description: string;
  readonly budgetDelta: number;
  readonly scheduleDelta: number;
  readonly creativeControlDelta: number;
};

export const productionCaseInterventions = [
  {
    id: "cut_scope",
    label: "Cut scope",
    description: "Remove planned production scope to recover budget and time, at the cost of creative control.",
    budgetDelta: 2,
    scheduleDelta: 1,
    creativeControlDelta: -2,
  },
  {
    id: "bridge_financing",
    label: "Secure bridge financing",
    description: "Bring in emergency financing. Budget recovers, but negotiations consume time and reduce control.",
    budgetDelta: 3,
    scheduleDelta: -1,
    creativeControlDelta: -1,
  },
  {
    id: "add_shoot_days",
    label: "Buy extra shoot days",
    description: "Spend contingency money to recover schedule capacity without surrendering creative control.",
    budgetDelta: -2,
    scheduleDelta: 3,
    creativeControlDelta: 0,
  },
] as const satisfies readonly ProductionCaseIntervention[];

const interventionById = Object.fromEntries(
  productionCaseInterventions.map((intervention) => [intervention.id, intervention]),
) as Readonly<Record<ProductionCaseInterventionId, ProductionCaseIntervention>>;

export function isProductionCaseInterventionId(value: unknown): value is ProductionCaseInterventionId {
  return typeof value === "string" && value in interventionById;
}

export function getProductionCaseIntervention(
  interventionId: string | undefined,
): ProductionCaseIntervention | undefined {
  return isProductionCaseInterventionId(interventionId)
    ? interventionById[interventionId]
    : undefined;
}

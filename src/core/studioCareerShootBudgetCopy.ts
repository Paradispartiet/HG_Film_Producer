import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import type { ShootBudgetRisk } from "./calculateShootBudgetPosition.js";

type BudgetMonitorCopy = {
  readonly eyebrow: string;
  readonly heading: string;
  readonly intro: string;
  readonly spent: string;
  readonly remaining: string;
  readonly plannedToFinish: string;
  readonly reserveHeadroom: string;
  readonly allocation: string;
  readonly nextProjection: string;
  readonly projectedDayCost: string;
  readonly projectedReserve: string;
  readonly unselected: string;
  readonly risk: Readonly<Record<ShootBudgetRisk, string>>;
  readonly warning: Readonly<Record<ShootBudgetRisk, string>>;
  readonly assumption: string;
};

export const SHOOT_BUDGET_MONITOR_COPY: Readonly<Record<FilmWorkLanguage, BudgetMonitorCopy>> = {
  en: {
    eyebrow: "Shooting finances", heading: "Budget and risk during the shoot",
    intro: "Actual costs from completed days, against the film's shooting allocation. This is not the studio's bank balance.",
    spent: "Spent so far", remaining: "Remaining shoot budget", plannedToFinish: "Planned cost of remaining days",
    reserveHeadroom: "Reserve after planned days", allocation: "Shooting allocation",
    nextProjection: "Before you confirm today's decision", projectedDayCost: "Estimated cost of this day",
    projectedReserve: "Estimated reserve after remaining planned days", unselected: "Choose a production event to preview the cost of your response.",
    risk: { healthy: "Reserve available", tight: "Reserve running low", over: "Over budget" },
    warning: { healthy: "There is room for additional production costs.", tight: "The remaining plan would use most of the contingency.", over: "Current or projected costs exceed the shooting allocation." },
    assumption: "Estimate: unplayed days are assumed to cost exactly their original plan. Delays may still create additional costs."
  },
  nb: {
    eyebrow: "Opptaksøkonomi", heading: "Budsjett og risiko under innspillingen",
    intro: "Faktiske kostnader fra fullførte dager mot opptaksbudsjettet, ikke studioets bankkonto.",
    spent: "Brukt hittil", remaining: "Gjenværende opptaksbudsjett", plannedToFinish: "Planlagt kostnad for resterende dager",
    reserveHeadroom: "Reserve etter planlagte dager", allocation: "Opptaksramme",
    nextProjection: "Før du bekrefter dagens valg", projectedDayCost: "Beregnet kostnad for dagen",
    projectedReserve: "Beregnet reserve etter gjenværende dager", unselected: "Velg en produksjonshendelse for å se kostnaden av produksjonsvalget.",
    risk: { healthy: "Reserve tilgjengelig", tight: "Reserven er nesten brukt", over: "Over budsjett" },
    warning: { healthy: "Det er fortsatt rom for uforutsette opptakskostnader.", tight: "Resten av planen vil bruke mesteparten av reserven.", over: "Faktiske eller beregnede kostnader overskrider opptaksrammen." },
    assumption: "Anslag: Ikke gjennomførte dager forutsettes å koste som planlagt. Forsinkelser kan fortsatt gi ekstra utgifter."
  },
  fr: {
    eyebrow: "Finances du tournage", heading: "Budget et risques pendant le tournage",
    intro: "Coûts réels des journées terminées par rapport au budget de tournage, pas la trésorerie du studio.",
    spent: "Déjà dépensé", remaining: "Budget de tournage restant", plannedToFinish: "Coût prévu des jours restants",
    reserveHeadroom: "Réserve après les jours prévus", allocation: "Enveloppe de tournage",
    nextProjection: "Avant de confirmer la décision du jour", projectedDayCost: "Coût estimé de cette journée",
    projectedReserve: "Réserve estimée après les journées restantes", unselected: "Choisissez un incident de production pour prévoir le coût de votre réponse.",
    risk: { healthy: "Réserve disponible", tight: "Réserve presque épuisée", over: "Dépassement budgétaire" },
    warning: { healthy: "Une marge reste disponible pour les imprévus.", tight: "Le programme restant consommerait presque toute la réserve.", over: "Les coûts réels ou projetés dépassent l'enveloppe de tournage." },
    assumption: "Estimation : les journées restantes sont supposées respecter leur coût initial. Les retards peuvent encore ajouter des frais."
  },
  pt: {
    eyebrow: "Finanças da rodagem", heading: "Orçamento e risco durante a rodagem",
    intro: "Custos reais dos dias terminados face à verba de rodagem, não ao saldo bancário do estúdio.",
    spent: "Gasto até agora", remaining: "Orçamento de rodagem restante", plannedToFinish: "Custo previsto dos dias restantes",
    reserveHeadroom: "Reserva após os dias planeados", allocation: "Verba de rodagem",
    nextProjection: "Antes de confirmar a decisão de hoje", projectedDayCost: "Custo estimado deste dia",
    projectedReserve: "Reserva estimada após os dias restantes", unselected: "Escolha um evento de produção para prever o custo da sua resposta.",
    risk: { healthy: "Reserva disponível", tight: "Reserva quase esgotada", over: "Acima do orçamento" },
    warning: { healthy: "Ainda há margem para custos imprevistos.", tight: "O plano restante consumiria quase toda a reserva.", over: "Os custos reais ou estimados ultrapassam a verba de rodagem." },
    assumption: "Estimativa: os dias ainda não filmados seguem os custos originais. Os atrasos podem gerar despesas adicionais."
  }
};

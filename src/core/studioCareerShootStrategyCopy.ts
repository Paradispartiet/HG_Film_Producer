import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import type { ShootStrategyId } from "./applyShootStrategy.js";

type StrategyText = {
  readonly heading: string;
  readonly intro: string;
  readonly quality: string;
  readonly cost: string;
  readonly schedule: string;
  readonly response: string;
  readonly delayPotential: string;
  readonly dayUnit: (days: number) => string;
  readonly choices: Readonly<Record<ShootStrategyId, { readonly name: string; readonly description: string; readonly timing: string }>>;
};

export const SHOOT_STRATEGY_COPY = {
  en: {
    heading: "How will you respond?", intro: "A real tradeoff: protect the footage, protect the schedule, or keep the original plan.",
    quality: "Take quality", cost: "Daily cost", schedule: "Time", response: "Your response",
    delayPotential: "Recover up to one delayed day", dayUnit: (days) => `${days} day${Math.abs(days) === 1 ? "" : "s"}`,
    choices: {
      steady: { name: "Stay on plan", description: "Keep the planned time and cost. No additional advantage.", timing: "No added delay" },
      extra_takes: { name: "Shoot extra takes", description: "Invest more time and money to protect the finished footage.", timing: "+1 day" },
      fast_setup: { name: "Speed up the setup", description: "Save money and recover time, but risk weaker footage.", timing: "May recover 1 delayed day" }
    }
  },
  nb: {
    heading: "Hvordan vil du løse dette?", intro: "Et reelt valg: prioriter opptakene, tidsplanen eller den opprinnelige planen.",
    quality: "Opptakskvalitet", cost: "Dagskostnad", schedule: "Tid", response: "Ditt produksjonsvalg",
    delayPotential: "Kan hente inn én forsinket dag", dayUnit: (days) => `${days} dag${Math.abs(days) === 1 ? "" : "er"}`,
    choices: {
      steady: { name: "Hold planen", description: "Behold budsjettrammen og tidsbruken uten ekstra gevinst.", timing: "Ingen ekstra forsinkelse" },
      extra_takes: { name: "Ta flere opptak", description: "Bruk mer tid og penger for bedre filmmateriale.", timing: "+1 dag" },
      fast_setup: { name: "Rigg raskere", description: "Spar penger og hent inn tid, men risiker svakere opptak.", timing: "Kan hente inn 1 dag" }
    }
  },
  fr: {
    heading: "Comment réagir ?", intro: "Un vrai compromis : protéger les prises, le calendrier ou le plan initial.",
    quality: "Qualité des prises", cost: "Coût du jour", schedule: "Temps", response: "Votre décision",
    delayPotential: "Peut rattraper un jour de retard", dayUnit: (days) => `${days} jour${Math.abs(days) === 1 ? "" : "s"}`,
    choices: {
      steady: { name: "Suivre le plan", description: "Garder le budget et la durée prévus, sans avantage supplémentaire.", timing: "Aucun retard ajouté" },
      extra_takes: { name: "Multiplier les prises", description: "Consacrer plus de temps et d'argent aux images.", timing: "+1 jour" },
      fast_setup: { name: "Accélérer l'installation", description: "Économiser et rattraper du temps, au risque de réduire la qualité.", timing: "Peut gagner 1 jour" }
    }
  },
  pt: {
    heading: "Como vais reagir?", intro: "Uma escolha com consequências: proteger as imagens, o calendário ou o plano original.",
    quality: "Qualidade das tomadas", cost: "Custo diário", schedule: "Tempo", response: "A tua decisão",
    delayPotential: "Pode recuperar um dia de atraso", dayUnit: (days) => `${days} dia${Math.abs(days) === 1 ? "" : "s"}`,
    choices: {
      steady: { name: "Manter o plano", description: "Respeitar o orçamento e o tempo previstos, sem ganhos adicionais.", timing: "Sem atraso adicional" },
      extra_takes: { name: "Gravar mais tomadas", description: "Investir tempo e dinheiro para melhorar as imagens.", timing: "+1 dia" },
      fast_setup: { name: "Acelerar a preparação", description: "Poupar dinheiro e recuperar tempo, com risco para a qualidade.", timing: "Pode recuperar 1 dia" }
    }
  }
} as const satisfies Record<FilmWorkLanguage, StrategyText>;

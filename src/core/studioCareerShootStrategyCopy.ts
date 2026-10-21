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
  readonly budgetPressure: Readonly<Record<"tight" | "over", string>>;
  readonly dayUnit: (days: number) => string;
  readonly choices: Readonly<Record<ShootStrategyId, { readonly name: string; readonly description: string; readonly timing: string }>>;
};

export const SHOOT_STRATEGY_COPY = {
  en: {
    heading: "How will you respond?", intro: "A real tradeoff: protect the footage, protect the schedule, or keep the original plan.",
    quality: "Take quality", cost: "Daily cost", schedule: "Time", response: "Your response",
    delayPotential: "Recover up to one delayed day", dayUnit: (days) => `${days} day${Math.abs(days) === 1 ? "" : "s"}`,
    budgetPressure: { tight: "The shoot reserve is running low. Cut coverage or re-plan the day to save cash, or accept extra cost to protect quality.", over: "This plan exceeds the shoot allocation. Choose a cost-saving response or consciously accept the overspend." },
    choices: {
      steady: { name: "Stay on plan", description: "Keep the planned time and cost. No additional advantage.", timing: "No added delay" },
      extra_takes: { name: "Shoot extra takes", description: "Invest more time and money to protect the finished footage.", timing: "+1 day" },
      fast_setup: { name: "Speed up the setup", description: "Save money and recover time, but risk weaker footage.", timing: "May recover 1 delayed day" },
      trim_scope: { name: "Cut shot coverage", description: "Drop optional angles and setup extras to save 18% of the planned day budget at the expense of footage quality.", timing: "No extra delay" },
      replan_shoot: { name: "Re-plan the shooting day", description: "Avoid costly overtime by splitting the work over a longer schedule. Save 10%, but add one calendar day.", timing: "+1 day" }
    }
  },
  nb: {
    heading: "Hvordan vil du løse dette?", intro: "Et reelt valg: prioriter opptakene, tidsplanen eller den opprinnelige planen.",
    quality: "Opptakskvalitet", cost: "Dagskostnad", schedule: "Tid", response: "Ditt produksjonsvalg",
    delayPotential: "Kan hente inn én forsinket dag", dayUnit: (days) => `${days} dag${Math.abs(days) === 1 ? "" : "er"}`,
    budgetPressure: { tight: "Opptaksreserven er nesten brukt. Kutt i dekningen eller legg om dagen for å spare, eller bruk mer for å beskytte kvaliteten.", over: "Planen overskrider opptaksrammen. Velg et kostnadskutt eller aksepter en bevisst overskridelse." },
    choices: {
      steady: { name: "Hold planen", description: "Behold budsjettrammen og tidsbruken uten ekstra gevinst.", timing: "Ingen ekstra forsinkelse" },
      extra_takes: { name: "Ta flere opptak", description: "Bruk mer tid og penger for bedre filmmateriale.", timing: "+1 dag" },
      fast_setup: { name: "Rigg raskere", description: "Spar penger og hent inn tid, men risiker svakere opptak.", timing: "Kan hente inn 1 dag" },
      trim_scope: { name: "Kutt i opptaksomfanget", description: "Dropp ekstra kameravinkler og rigg for å spare 18 % av dagsbudsjettet, men svekk opptakskvaliteten.", timing: "Ingen ekstra forsinkelse" },
      replan_shoot: { name: "Legg om opptaksdagen", description: "Unngå dyr overtid med kortere opptaksdager. Spar 10 %, men legg til én kalenderdag.", timing: "+1 dag" }
    }
  },
  fr: {
    heading: "Comment réagir ?", intro: "Un vrai compromis : protéger les prises, le calendrier ou le plan initial.",
    quality: "Qualité des prises", cost: "Coût du jour", schedule: "Temps", response: "Votre décision",
    delayPotential: "Peut rattraper un jour de retard", dayUnit: (days) => `${days} jour${Math.abs(days) === 1 ? "" : "s"}`,
    budgetPressure: { tight: "La réserve de tournage s’épuise. Réduisez les prises ou réorganisez la journée pour économiser, ou dépensez plus pour protéger la qualité.", over: "Ce plan dépasse l’enveloppe. Choisissez une économie ou acceptez consciemment le dépassement." },
    choices: {
      steady: { name: "Suivre le plan", description: "Garder le budget et la durée prévus, sans avantage supplémentaire.", timing: "Aucun retard ajouté" },
      extra_takes: { name: "Multiplier les prises", description: "Consacrer plus de temps et d'argent aux images.", timing: "+1 jour" },
      fast_setup: { name: "Accélérer l'installation", description: "Économiser et rattraper du temps, au risque de réduire la qualité.", timing: "Peut gagner 1 jour" },
      trim_scope: { name: "Réduire la couverture", description: "Supprimer les angles supplémentaires et économiser 18 % du coût prévu, au détriment de la qualité.", timing: "Aucun retard ajouté" },
      replan_shoot: { name: "Réorganiser la journée", description: "Éviter les heures supplémentaires : économiser 10 %, mais ajouter une journée au calendrier.", timing: "+1 jour" }
    }
  },
  pt: {
    heading: "Como vais reagir?", intro: "Uma escolha com consequências: proteger as imagens, o calendário ou o plano original.",
    quality: "Qualidade das tomadas", cost: "Custo diário", schedule: "Tempo", response: "A tua decisão",
    delayPotential: "Pode recuperar um dia de atraso", dayUnit: (days) => `${days} dia${Math.abs(days) === 1 ? "" : "s"}`,
    budgetPressure: { tight: "A reserva da rodagem está a acabar. Reduz as tomadas ou reorganiza o dia para poupar, ou gasta mais para proteger a qualidade.", over: "Este plano excede a verba. Escolhe uma poupança ou aceita conscientemente o custo extra." },
    choices: {
      steady: { name: "Manter o plano", description: "Respeitar o orçamento e o tempo previstos, sem ganhos adicionais.", timing: "Sem atraso adicional" },
      extra_takes: { name: "Gravar mais tomadas", description: "Investir tempo e dinheiro para melhorar as imagens.", timing: "+1 dia" },
      fast_setup: { name: "Acelerar a preparação", description: "Poupar dinheiro e recuperar tempo, com risco para a qualidade.", timing: "Pode recuperar 1 dia" },
      trim_scope: { name: "Reduzir a cobertura", description: "Dispensar ângulos adicionais para poupar 18 % do custo previsto, mas perder qualidade nas tomadas.", timing: "Sem atraso adicional" },
      replan_shoot: { name: "Reorganizar o dia", description: "Evitar horas extra: poupar 10 %, mas acrescentar um dia ao calendário.", timing: "+1 dia" }
    }
  }
} as const satisfies Record<FilmWorkLanguage, StrategyText>;

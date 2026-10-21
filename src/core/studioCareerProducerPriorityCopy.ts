import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import type { ProducerPriorityId } from "./applyProducerPriority.js";

type PriorityCopy = {
  readonly eyebrow: string;
  readonly heading: string;
  readonly intro: string;
  readonly options: Readonly<Record<ProducerPriorityId, { readonly title: string; readonly description: string }>>;
  readonly resultHeading: string;
  readonly consequence: (delta: number) => string;
  readonly matched: string;
  readonly partial: string;
  readonly interrupted: string;
  readonly why: Readonly<Record<ProducerPriorityId, string>>;
  readonly budgetSummary: string;
};

export const PRODUCER_PRIORITY_COPY = {
  en: {
    eyebrow: "Producer's creative decision", heading: "What will you protect on set?",
    intro: "Support the director and departments by deciding what matters most for this challenge. This is a producing decision, not a camera or directing exercise.",
    options: {
      story_clarity: { title: "Protect the story", description: "Bring the director, script supervisor and editor into alignment on what the scene must communicate." },
      performance_trust: { title: "Support the performers", description: "Give the director and cast enough trust and rehearsal space to resolve the scene together." },
      crew_coordination: { title: "Coordinate the departments", description: "Get departments and production leadership working together to preserve safe, usable footage." }
    },
    resultHeading: "Your producing decision", consequence: (delta) => `Footage quality ${delta > 0 ? "+" : ""}${delta}`,
    matched: "This response addressed the challenge directly.", partial: "This helped, but a different department needed the strongest support.",
    interrupted: "Filming was interrupted. Good producer support cannot create usable takes from an unsafe or stopped day.",
    why: {
      story_clarity: "Learning: the producer safeguards the film's shared story goal while the director decides how to stage it.",
      performance_trust: "Learning: a producer can protect trust, rehearsal conditions and working relationships without directing the actors.",
      crew_coordination: "Learning: the producer coordinates resources, safety and departments so the director can carry out the creative plan."
    },
    budgetSummary: "Production finances (details)"
  },
  nb: {
    eyebrow: "Kreativt produsentvalg", heading: "Hva vil du ivareta på settet?",
    intro: "Støtt regissøren og fagavdelingene ved å velge hva denne utfordringen krever mest. Dette er produsentarbeid, ikke kameraregi.",
    options: {
      story_clarity: { title: "Ta vare på historien", description: "Samordne regissør, manusansvarlig og klipper om hva scenen skal formidle." },
      performance_trust: { title: "Støtt skuespillerne", description: "Gi regissør og skuespillere tillit og rom for prøver, slik at de kan løse scenen sammen." },
      crew_coordination: { title: "Samordne filmteamet", description: "Hjelp fagavdelingene og produksjonsledelsen å sikre trygg gjennomføring og brukbart filmmateriale." }
    },
    resultHeading: "Ditt produsentvalg", consequence: (delta) => `Opptakskvalitet ${delta > 0 ? "+" : ""}${delta}`,
    matched: "Valget traff utfordringen direkte.", partial: "Valget hjalp, men en annen avdeling trengte den viktigste støtten.",
    interrupted: "Innspillingen ble avbrutt. God produsentstøtte kan ikke skape ferdige opptak på en stanset eller utrygg dag.",
    why: {
      story_clarity: "Lærdom: Produsenten ivaretar filmens felles fortellermål, mens regissøren bestemmer iscenesettelsen.",
      performance_trust: "Lærdom: Produsenten kan beskytte tillit, prøvevilkår og samarbeid uten å instruere skuespillerne.",
      crew_coordination: "Lærdom: Produsenten samordner ressurser, sikkerhet og fagavdelinger slik at regissøren kan virkeliggjøre planen."
    },
    budgetSummary: "Produksjonsøkonomi (detaljer)"
  },
  fr: {
    eyebrow: "Décision créative du producteur", heading: "Que protéger sur le plateau ?",
    intro: "Soutenez le réalisateur et les équipes en choisissant la priorité de production. Il ne s'agit pas de diriger la caméra ou les acteurs.",
    options: {
      story_clarity: { title: "Protéger le récit", description: "Aligner le réalisateur, la continuité et le montage sur le sens de la scène." },
      performance_trust: { title: "Soutenir les interprètes", description: "Donner au réalisateur et aux acteurs la confiance et l'espace de répétition nécessaires." },
      crew_coordination: { title: "Coordonner les équipes", description: "Réunir les départements et la production pour préserver un tournage sûr et des prises utilisables." }
    },
    resultHeading: "Votre choix de production", consequence: (delta) => `Qualité des prises ${delta > 0 ? "+" : ""}${delta}`,
    matched: "Cette réponse correspondait directement au défi.", partial: "Ce choix a aidé, mais un autre département avait davantage besoin de soutien.",
    interrupted: "Le tournage a été interrompu. Un bon soutien ne crée pas de prises utilisables si le plateau est à l'arrêt.",
    why: {
      story_clarity: "À retenir : le producteur préserve le but narratif commun ; le réalisateur décide de la mise en scène.",
      performance_trust: "À retenir : le producteur protège la confiance et les répétitions sans diriger les acteurs.",
      crew_coordination: "À retenir : le producteur coordonne moyens, sécurité et équipes pour soutenir le projet du réalisateur."
    },
    budgetSummary: "Finances de production (détails)"
  },
  pt: {
    eyebrow: "Decisão criativa de produção", heading: "O que vais proteger no plateau?",
    intro: "Apoia a realização e as equipas escolhendo a prioridade desta situação. Não é uma decisão de câmara nem de direção de atores.",
    options: {
      story_clarity: { title: "Proteger a história", description: "Alinhar realização, continuidade e montagem sobre o sentido da cena." },
      performance_trust: { title: "Apoiar os intérpretes", description: "Dar à realização e ao elenco confiança e espaço para ensaiar em conjunto." },
      crew_coordination: { title: "Coordenar as equipas", description: "Articular departamentos e produção para manter condições seguras e material utilizável." }
    },
    resultHeading: "A tua decisão de produção", consequence: (delta) => `Qualidade das tomadas ${delta > 0 ? "+" : ""}${delta}`,
    matched: "Esta resposta correspondeu diretamente ao desafio.", partial: "Ajudou, mas outro departamento precisava de maior apoio.",
    interrupted: "A rodagem foi interrompida. O apoio da produção não cria tomadas utilizáveis num dia inseguro ou parado.",
    why: {
      story_clarity: "Aprendizagem: a produção protege o objetivo narrativo comum; a realização decide a encenação.",
      performance_trust: "Aprendizagem: a produção protege a confiança e os ensaios sem dirigir os atores.",
      crew_coordination: "Aprendizagem: a produção coordena recursos, segurança e equipas para concretizar a visão do realizador."
    },
    budgetSummary: "Finanças de produção (detalhes)"
  }
} as const satisfies Record<FilmWorkLanguage, PriorityCopy>;

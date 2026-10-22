import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

interface CastingPreviewCopy {
  readonly heading: string;
  readonly pending: string;
  readonly score: (value: number) => string;
  readonly strong: string;
  readonly developing: string;
  readonly challenging: string;
  readonly common: (count: number) => string;
  readonly tension: (count: number) => string;
  readonly context: string;
}

export const STUDIO_CAREER_CASTING_PREVIEW_COPY = {
  en: {
    heading: "Ensemble chemistry · live preview",
    pending: "Select at least two actors to compare how they might work together.",
    score: (value) => `Estimated ensemble chemistry: ${value}/100`,
    strong: "These performers share useful working instincts. Discuss roles and expectations before rehearsals.",
    developing: "The partnership has potential, but the producer should make space for rehearsals and trust-building.",
    challenging: "Different working styles may create friction. Plan a chemistry read and agree on a shared approach.",
    common: (count) => `${count} shared acting trait${count === 1 ? "" : "s"}`,
    tension: (count) => `${count} potential style tension${count === 1 ? "" : "s"}`,
    context: "A planning estimate, not a verdict on talent. Consider role fit as well as chemistry; this preview does not change costs or scores.",
  },
  nb: {
    heading: "Samspill i ensemblet · forhåndsvisning",
    pending: "Velg minst to skuespillere for å undersøke hvordan de kan fungere sammen.",
    score: (value) => `Beregnet samspill i ensemblet: ${value}/100`,
    strong: "Skuespillerne har flere felles arbeidsmåter. Avklar roller og forventninger før prøvene.",
    developing: "Samarbeidet har potensial, men produsenten bør sette av tid til prøver og tillitsbygging.",
    challenging: "Ulike arbeidsstiler kan gi friksjon. Planlegg samspillprøve og finn en felles arbeidsform.",
    common: (count) => `${count} felles spilleegenskap${count === 1 ? "" : "er"}`,
    tension: (count) => `${count} mulig stilkonflikt${count === 1 ? "" : "er"}`,
    context: "Et planleggingsanslag, ikke en dom over talent. Vurder rolleegnethet i tillegg til samspill; forhåndsvisningen endrer ikke kostnader eller poeng.",
  },
  fr: {
    heading: "Alchimie de la distribution · aperçu",
    pending: "Choisissez au moins deux interprètes pour évaluer leur collaboration possible.",
    score: (value) => `Alchimie estimée de la distribution : ${value}/100`,
    strong: "Ces interprètes partagent des habitudes de travail utiles. Clarifiez les rôles et les attentes avant les répétitions.",
    developing: "La collaboration est prometteuse, mais la production devrait prévoir des répétitions pour renforcer la confiance.",
    challenging: "Des approches différentes peuvent créer des frictions. Prévoyez un essai ensemble et une méthode commune.",
    common: (count) => `${count} trait${count === 1 ? "" : "s"} de jeu partagé${count === 1 ? "" : "s"}`,
    tension: (count) => `${count} tension${count === 1 ? "" : "s"} stylistique${count === 1 ? "" : "s"} possible${count === 1 ? "" : "s"}`,
    context: "Une estimation de planification, pas un jugement sur le talent. Tenez aussi compte de l’adéquation aux rôles ; cet aperçu ne modifie ni les coûts ni les scores.",
  },
  pt: {
    heading: "Química do elenco · pré-visualização",
    pending: "Selecione pelo menos dois intérpretes para avaliar como poderão trabalhar em conjunto.",
    score: (value) => `Química estimada do elenco: ${value}/100`,
    strong: "Estes intérpretes partilham hábitos de trabalho úteis. Clarifique papéis e expectativas antes dos ensaios.",
    developing: "A colaboração tem potencial, mas a produção deve reservar tempo para ensaios e construção de confiança.",
    challenging: "Estilos diferentes podem criar tensão. Organize uma prova de química e definam uma abordagem comum.",
    common: (count) => `${count} característica${count === 1 ? "" : "s"} de representação partilhada${count === 1 ? "" : "s"}`,
    tension: (count) => `${count} possível${count === 1 ? "" : "eis"} tensão${count === 1 ? "" : "ões"} de estilo`,
    context: "Uma estimativa de planeamento, não um juízo sobre talento. Considere também a adequação aos papéis; esta pré-visualização não altera custos nem pontuações.",
  }
} as const satisfies Record<FilmWorkLanguage, CastingPreviewCopy>;

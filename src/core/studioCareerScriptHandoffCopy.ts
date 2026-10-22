import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

type HandoffCopy = {
  readonly heading: string;
  readonly intro: string;
  readonly pressure: (before: number, after: number) => string;
  readonly consequence: string;
  readonly result: string;
};

export const STUDIO_CAREER_SCRIPT_HANDOFF_COPY = {
  en: {
    heading: "From screenplay to set",
    intro: "The producer's approved screenplay note now shapes the scenes being scheduled and filmed. Notice how the practical demands change.",
    pressure: (before, after) => `Average scene pressure: ${before}/100 before revision → ${after}/100 for this shoot.`,
    consequence: "This affects scene difficulty and may change usable take quality. It does not automatically add money or days; shooting decisions still matter.",
    result: "The screenplay decision shaped this shoot's scenes and was included in its quality evaluation."
  },
  nb: {
    heading: "Fra manus til opptak",
    intro: "Produsentens godkjente manusnotat påvirker nå scenene som planlegges og spilles inn. Se hvordan kravene til gjennomføringen endres.",
    pressure: (before, after) => `Gjennomsnittlig scenebelastning: ${before}/100 før manusendringen → ${after}/100 ved innspillingen.`,
    consequence: "Dette påvirker scenevanskelighet og kan endre kvaliteten på brukbare opptak. Kostnader og dager legges ikke automatisk til; valgene på settet teller fortsatt.",
    result: "Manusbeslutningen formet scenene på opptak og inngår i vurderingen av opptakskvalitet."
  },
  fr: {
    heading: "Du scénario au tournage",
    intro: "La note approuvée par la production façonne désormais les scènes planifiées et tournées. Observez comment les exigences changent.",
    pressure: (before, after) => `Difficulté moyenne des scènes : ${before}/100 avant la révision → ${after}/100 pour ce tournage.`,
    consequence: "Cela modifie la difficulté et peut affecter la qualité des prises exploitables. Aucun coût ni jour supplémentaire n’est ajouté automatiquement.",
    result: "La décision scénaristique a façonné les scènes filmées et intervient dans l’évaluation des prises."
  },
  pt: {
    heading: "Do argumento à rodagem",
    intro: "A nota aprovada pela produção molda agora as cenas planeadas e filmadas. Veja como as exigências de execução mudam.",
    pressure: (before, after) => `Dificuldade média das cenas: ${before}/100 antes da revisão → ${after}/100 nesta rodagem.`,
    consequence: "Isto altera a dificuldade e pode afetar a qualidade das tomadas utilizáveis. Não acrescenta automaticamente custos nem dias.",
    result: "A decisão sobre o argumento moldou as cenas e entrou na avaliação da qualidade das tomadas."
  }
} as const satisfies Record<FilmWorkLanguage, HandoffCopy>;

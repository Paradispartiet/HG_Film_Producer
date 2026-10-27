import type { TestScreeningResult } from "../domain/post.js";
import type { StudioCareerEditingApproachId } from "./studioCareerEditingApproach.js";
import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

export type ScreeningFocus = "clarity" | "pacing" | "emotion" | "audienceHook";

/** The least convincing measured dimension, not a fabricated audience quote. */
export function getScreeningRevisionFocus(result: TestScreeningResult): ScreeningFocus {
  const axes = [
    ["clarity", result.clarityScore],
    ["pacing", result.pacingScore],
    ["emotion", result.emotionScore],
    ["audienceHook", result.audienceHookScore]
  ] as const;
  return axes.reduce((lowest, candidate) => candidate[1] < lowest[1] ? candidate : lowest)[0];
}

interface RevisionCopy {
  readonly eyebrow: string;
  readonly heading: string;
  readonly explanation: string;
  readonly focusHeading: (metric: string, score: number) => string;
  readonly focus: Readonly<Record<ScreeningFocus, string>>;
  readonly approachTechnique: Readonly<Record<StudioCareerEditingApproachId, string>>;
  readonly projected: string;
  readonly action: string;
  readonly footnote: string;
}

export const STUDIO_CAREER_SCREENING_REVISION_COPY: Readonly<Record<FilmWorkLanguage, RevisionCopy>> = {
  en: {
    eyebrow: "Editing room",
    heading: "Try a different cut",
    explanation: "The weakest audience measure gives you a craft question to investigate. Compare two real editing alternatives, then screen your choice again.",
    focusHeading: (metric, score) => `First investigate ${metric} (${score}/100)`,
    focus: {
      clarity: "Would earlier reactions and clearer scene transitions help viewers follow cause and effect?",
      pacing: "Could fewer repeated beats give the middle act more forward movement?",
      emotion: "Would holding on a character reaction longer give the turning point more weight?",
      audienceHook: "Could a stronger contrast or a clearer dramatic promise keep viewers curious?"
    },
    approachTechnique: {
      balanced: "Keep a steady narrative rhythm without adding a new stylistic tradeoff.",
      story_first: "Prioritize cause-and-effect and readable transitions, at a cost to emotional intensity.",
      bold_cut: "Use sharper contrasts and daring ellipses, accepting a greater risk of confusion."
    },
    projected: "Predicted changes from this screening",
    action: "Choose this cut and retest",
    footnote: "These are model projections from your actual project choices, not comments from real audience members. Choosing a cut does not lock the film."
  },
  nb: {
    eyebrow: "Klipperommet",
    heading: "Prøv et annet klipp",
    explanation: "Det svakeste måleresultatet gir et filmfaglig spørsmål å utforske. Sammenlign to reelle klippevalg og prøvevis på nytt.",
    focusHeading: (metric, score) => `Undersøk først ${metric.toLowerCase()} (${score}/100)`,
    focus: {
      clarity: "Vil tydeligere sceneoverganger og tidligere reaksjonsbilder gjøre årsak og virkning lettere å følge?",
      pacing: "Kan færre gjentakelser gi midtpartiet mer fremdrift?",
      emotion: "Kan et lengre reaksjonsbilde gi vendepunktet større følelsesmessig tyngde?",
      audienceHook: "Kan sterkere kontraster eller et tydeligere dramatisk løfte vekke mer nysgjerrighet?"
    },
    approachTechnique: {
      balanced: "Behold jevn fortellerrytme uten et nytt stilistisk kompromiss.",
      story_first: "Prioriter årsak og virkning og lesbare overganger, på bekostning av noe følelsestrykk.",
      bold_cut: "Bruk skarpere kontraster og dristige sprang, med større risiko for forvirring."
    },
    projected: "Beregnet endring fra denne prøvevisningen",
    action: "Velg klippet og test på nytt",
    footnote: "Dette er modellberegninger fra dine faktiske filmvalg, ikke sitater fra et virkelig testpublikum. Valget låser ikke filmen."
  },
  fr: {
    eyebrow: "Salle de montage",
    heading: "Essayer un autre montage",
    explanation: "Le score le plus fragile suggère une question de cinéma à explorer. Comparez deux montages, puis relancez la projection.",
    focusHeading: (metric, score) => `Examiner d’abord : ${metric.toLowerCase()} (${score}/100)`,
    focus: {
      clarity: "Des raccords plus lisibles et des réactions montrées plus tôt rendraient-ils les causes et les effets plus clairs ?",
      pacing: "En retirant des répétitions, le deuxième acte gagnerait-il en mouvement ?",
      emotion: "Un plan de réaction plus long donnerait-il davantage de poids au tournant dramatique ?",
      audienceHook: "Un contraste plus fort ou une promesse dramatique plus claire éveillerait-il la curiosité ?"
    },
    approachTechnique: {
      balanced: "Préserver un rythme narratif stable sans nouveau compromis stylistique.",
      story_first: "Privilégier les liens de cause à effet et des raccords lisibles, au détriment d'une partie de l'intensité.",
      bold_cut: "Chercher des contrastes et ellipses audacieux, au risque de perdre en clarté."
    },
    projected: "Variations simulées par rapport à cette projection",
    action: "Choisir ce montage et retester",
    footnote: "Ces chiffres sont des simulations fondées sur vos choix, pas des commentaires de vrais spectateurs. Le film reste déverrouillé."
  },
  pt: {
    eyebrow: "Sala de montagem",
    heading: "Experimentar outra montagem",
    explanation: "O resultado menos forte indica uma questão de cinema a investigar. Compare duas montagens e repita a sessão.",
    focusHeading: (metric, score) => `Investigar primeiro: ${metric.toLowerCase()} (${score}/100)`,
    focus: {
      clarity: "Transições mais claras e reações mostradas mais cedo ajudariam a perceber causa e efeito?",
      pacing: "Eliminar repetições daria maior progressão ao segundo ato?",
      emotion: "Manter um plano de reação por mais tempo daria maior peso ao ponto de viragem?",
      audienceHook: "Contrastes mais fortes ou uma promessa dramática mais clara despertariam curiosidade?"
    },
    approachTechnique: {
      balanced: "Preservar um ritmo narrativo estável sem novo compromisso estilístico.",
      story_first: "Privilegiar causa e efeito e transições claras, sacrificando alguma intensidade emocional.",
      bold_cut: "Usar contrastes e elipses mais ousados, aceitando maior risco de confusão."
    },
    projected: "Variações previstas em relação a esta sessão",
    action: "Escolher esta montagem e testar novamente",
    footnote: "Estes resultados são simulações baseadas nas suas escolhas, não comentários de espectadores reais. O filme não fica fechado."
  }
};

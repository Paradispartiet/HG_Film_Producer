import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import type { ProducerPrioritySummary } from "./applyProducerPriority.js";
import { getOnSetConversation } from "./studioCareerOnSetDialogue.js";

/** Only data actually saved with a resolved shoot day may be replayed in the edit room. */
interface RecordedProducerDay {
  readonly selectedEventId?: string;
  readonly practicalActionVersion?: 1 | 2;
  readonly producerPrioritySummary?: ProducerPrioritySummary;
}

export interface EditingHandoff {
  readonly dayNumber: number;
  readonly action: string;
  readonly teamResponse: string;
}

/** Read-only evidence. Never infer a producer decision from a missing legacy field. */
export function getStudioCareerEditingHandoff(
  language: FilmWorkLanguage,
  days: readonly RecordedProducerDay[]
): EditingHandoff | undefined {
  for (let index = days.length - 1; index >= 0; index--) {
    const day = days[index];
    if (!day?.selectedEventId || !day.producerPrioritySummary) continue;
    const conversation = getOnSetConversation(
      language, day.selectedEventId, day.producerPrioritySummary.id,
      day.producerPrioritySummary, day.practicalActionVersion
    );
    if (conversation) {
      return {
        dayNumber: index + 1,
        action: conversation.reply,
        teamResponse: conversation.teamResponse
      };
    }
  }
  return undefined;
}

interface EditingHandoffCopy {
  readonly heading: string;
  readonly introduction: string;
  readonly averageTake: (score: number) => string;
  readonly footageHeading: string;
  readonly sceneCoverage: (completed: number, delayed: number) => string;
  readonly lowestTake: (day: number, quality: number) => string;
  readonly gapsAdvice: string;
  readonly storySupport: string;
  readonly completeAdvice: string;
  readonly dayLabel: (day: number) => string;
  readonly crewResponse: string;
  readonly limits: string;
}

export const STUDIO_CAREER_EDITING_HANDOFF_COPY = {
  en: {
    heading: "From the set to the edit",
    introduction: "The cut starts with footage recorded under your actual production decisions.",
    averageTake: (score: number) => "Average take quality across the shoot: " + score + "/100",
    footageHeading: "Recorded footage",
    sceneCoverage: (done: number, missing: number) => `${done} scenes recorded · ${missing} still missing`,
    lowestTake: (day: number, quality: number) => `Lowest day-level take quality: day ${day} · ${quality}/100`,
    gapsAdvice: "Missing scenes create continuity pressure: the cut may need clearer transitions. No extra takes are assumed.",
    storySupport: "Story-first editing softens the measured continuity penalty, but cannot replace footage.",
    completeAdvice: "All recorded scene IDs are complete. Your editing approach can focus on the film's rhythm and emotion.",
    dayLabel: (day: number) => "Revisit your producer decision on shoot day " + day,
    crewResponse: "The team's response",
    limits: "The test screening uses the whole shoot's measured footage quality. This example is a saved decision, not an invented bonus or an isolated score attribution."
  },
  nb: {
    heading: "Fra innspilling til klipp",
    introduction: "Klippingen tar utgangspunkt i opptakene som ble gjort etter produksjonsvalgene dine.",
    averageTake: (score: number) => "Gjennomsnittlig opptakskvalitet for hele innspillingen: " + score + "/100",
    footageHeading: "Opptaksmaterialet",
    sceneCoverage: (done: number, missing: number) => `${done} scener innspilt · ${missing} fremdeles utsatt`,
    lowestTake: (day: number, quality: number) => `Laveste opptakskvalitet på dagsnivå: dag ${day} · ${quality}/100`,
    gapsAdvice: "Manglende scener gjør kontinuiteten vanskeligere: klippen kan trenge tydeligere overganger. Ingen ekstra opptak forutsettes.",
    storySupport: "Historiefokusert klipp reduserer den målte kontinuitetsulempen, men kan ikke erstatte manglende opptak.",
    completeAdvice: "Alle registrerte scener er ferdige. Nå kan klippevalget prioritere rytme og følelser.",
    dayLabel: (day: number) => "Se produsentvalget fra opptaksdag " + day,
    crewResponse: "Filmteamets respons",
    limits: "Testvisningen bruker målt opptakskvalitet fra hele innspillingen. Dette er et lagret valg, ikke en oppdiktet bonus eller en isolert poengvirkning."
  },
  fr: {
    heading: "Du tournage au montage",
    introduction: "Le montage part des prises obtenues grâce aux décisions réellement prises pendant la production.",
    averageTake: (score: number) => "Qualité moyenne des prises sur tout le tournage : " + score + "/100",
    footageHeading: "Matière filmée",
    sceneCoverage: (done: number, missing: number) => `${done} scènes tournées · ${missing} encore manquantes`,
    lowestTake: (day: number, quality: number) => `Qualité de prise la plus faible par journée : jour ${day} · ${quality}/100`,
    gapsAdvice: "Les scènes manquantes compliquent la continuité. Le montage peut nécessiter des transitions plus nettes, sans supposer de nouvelles prises.",
    storySupport: "Un montage axé sur le récit réduit le malus de continuité, sans remplacer les images absentes.",
    completeAdvice: "Toutes les scènes enregistrées sont terminées. Le montage peut privilégier le rythme et l'émotion.",
    dayLabel: (day: number) => "Revoir votre décision de production du jour " + day,
    crewResponse: "Réponse de l'équipe",
    limits: "La projection test utilise la qualité mesurée de tout le tournage. Cette décision enregistrée ne représente ni un bonus inventé ni une attribution isolée de points."
  },
  pt: {
    heading: "Da rodagem à montagem",
    introduction: "A montagem começa com as tomadas obtidas após as decisões reais da produção.",
    averageTake: (score: number) => "Qualidade média das tomadas de toda a rodagem: " + score + "/100",
    footageHeading: "Material filmado",
    sceneCoverage: (done: number, missing: number) => `${done} cenas filmadas · ${missing} ainda em falta`,
    lowestTake: (day: number, quality: number) => `Qualidade mais baixa por dia: dia ${day} · ${quality}/100`,
    gapsAdvice: "Cenas em falta dificultam a continuidade. A montagem pode precisar de transições mais claras, sem presumir novas filmagens.",
    storySupport: "A montagem centrada na história reduz a penalização de continuidade, mas não substitui imagens em falta.",
    completeAdvice: "Todas as cenas registadas estão concluídas. A montagem pode concentrar-se no ritmo e na emoção.",
    dayLabel: (day: number) => "Rever a decisão de produção do dia " + day,
    crewResponse: "Resposta da equipa",
    limits: "A sessão de teste utiliza a qualidade medida de toda a rodagem. Esta decisão guardada não é um bónus inventado nem uma atribuição isolada de pontos."
  }
} satisfies Record<FilmWorkLanguage, EditingHandoffCopy>;

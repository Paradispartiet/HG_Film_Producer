import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import type { ScriptProducerNoteId } from "./applyScriptProducerNote.js";

type NoteOptionCopy = { readonly title: string; readonly tradeoff: string; readonly lesson: string };
type ScriptNoteCopy = {
  readonly heading: string;
  readonly intro: string;
  readonly options: Readonly<Record<ScriptProducerNoteId, NoteOptionCopy>>;
  readonly preview: string;
  readonly conflict: string;
  readonly pacing: string;
  readonly emotion: string;
  readonly disclaimer: string;
  readonly decision: string;
};

export const STUDIO_CAREER_SCRIPT_NOTE_COPY = {
  en: {
    heading: "Choose a producer note for the writer",
    intro: "Support the writing process. Decide what deserves a revision before shooting, without directing scenes yourself.",
    options: {
      character_depth: { title: "Deepen the characters", tradeoff: "More emotional weight, slower scenes.", lesson: "Time spent on motivation can strengthen attachment, but may reduce momentum." },
      dramatic_stakes: { title: "Clarify the dramatic stakes", tradeoff: "Stronger conflict, slightly less pace.", lesson: "Clearer obstacles heighten tension, but scenes need room for consequences." },
      scene_momentum: { title: "Sharpen scene momentum", tradeoff: "Quicker progression, less emotional space.", lesson: "A leaner rhythm moves the story forward, but can sacrifice nuance." }
    },
    preview: "Draft evaluation after this note",
    conflict: "Conflict",
    pacing: "Pacing",
    emotion: "Emotion",
    disclaimer: "These are simplified teaching-model revisions; the screenplay is not replaced by a score.",
    decision: "Producer note applied"
  },
  nb: {
    heading: "Gi manusforfatteren et produsentnotat",
    intro: "Støtt manusarbeidet. Velg hva som bør bearbeides før opptak, uten å overta regien.",
    options: {
      character_depth: { title: "Gi karakterene større dybde", tradeoff: "Mer følelser, roligere scener.", lesson: "Tydeligere motivasjon kan engasjere publikum, men dempe fremdriften." },
      dramatic_stakes: { title: "Skjerp de dramatiske innsatsene", tradeoff: "Sterkere konflikt, litt lavere tempo.", lesson: "Tydelige hindringer øker spenningen, men følgene trenger plass." },
      scene_momentum: { title: "Stram inn scenenes fremdrift", tradeoff: "Raskere utvikling, mindre rom for følelser.", lesson: "Strammere rytme driver historien videre, men kan fjerne nyanser." }
    },
    preview: "Manusvurdering etter dette notatet",
    conflict: "Konflikt",
    pacing: "Tempo",
    emotion: "Følelser",
    disclaimer: "Dette er forenklede endringer i en læringsmodell; et manus kan ikke reduseres til en poengsum.",
    decision: "Produsentnotat gjennomført"
  },
  fr: {
    heading: "Choisir une note de production pour le scénariste",
    intro: "Soutenez le travail d’écriture : décidez ce qui mérite une révision avant le tournage, sans réaliser les scènes.",
    options: {
      character_depth: { title: "Approfondir les personnages", tradeoff: "Plus d’émotion, scènes plus lentes.", lesson: "Des motivations plus claires renforcent l’attachement, mais peuvent ralentir le récit." },
      dramatic_stakes: { title: "Clarifier les enjeux dramatiques", tradeoff: "Conflit accru, rythme légèrement ralenti.", lesson: "Des obstacles clairs augmentent la tension, mais leurs conséquences exigent du temps." },
      scene_momentum: { title: "Accélérer la progression des scènes", tradeoff: "Plus de rythme, moins de place pour l’émotion.", lesson: "Un récit resserré avance mieux, au risque de perdre de la nuance." }
    },
    preview: "Évaluation du scénario après cette note",
    conflict: "Conflit",
    pacing: "Rythme",
    emotion: "Émotion",
    disclaimer: "Ces révisions appartiennent à un modèle pédagogique simplifié ; une note ne remplace pas un vrai scénario.",
    decision: "Note de production appliquée"
  },
  pt: {
    heading: "Escolha uma nota de produção para o argumentista",
    intro: "Apoie a escrita. Decida o que precisa de revisão antes da rodagem, sem dirigir as cenas.",
    options: {
      character_depth: { title: "Aprofundar as personagens", tradeoff: "Mais emoção, cenas mais lentas.", lesson: "Motivações mais claras criam ligação, mas podem abrandar a narrativa." },
      dramatic_stakes: { title: "Clarificar os riscos dramáticos", tradeoff: "Mais conflito, ritmo ligeiramente menor.", lesson: "Obstáculos claros aumentam a tensão, mas as consequências precisam de espaço." },
      scene_momentum: { title: "Acelerar o ritmo das cenas", tradeoff: "Maior ritmo, menos espaço emocional.", lesson: "Uma narrativa concisa avança melhor, mas pode perder subtileza." }
    },
    preview: "Avaliação do argumento após esta nota",
    conflict: "Conflito",
    pacing: "Ritmo",
    emotion: "Emoção",
    disclaimer: "Estas são revisões de um modelo pedagógico simplificado; a pontuação não substitui o argumento.",
    decision: "Nota de produção aplicada"
  }
} as const satisfies Record<FilmWorkLanguage, ScriptNoteCopy>;

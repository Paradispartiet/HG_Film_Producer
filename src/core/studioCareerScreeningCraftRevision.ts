import type { TestScreeningResult } from "../domain/post.js";
import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import { getScreeningRevisionFocus } from "./studioCareerScreeningRevision.js";

export type ScreeningCraftKind = "sound" | "music";
export interface ScreeningCraftAlternative {
  readonly id: string;
  readonly result: TestScreeningResult;
  /** Difference in production cost from the already selected craft choice. */
  readonly costDelta: number;
}

const FOCUS_SCORE = {
  clarity: "clarityScore",
  pacing: "pacingScore",
  emotion: "emotionScore",
  audienceHook: "audienceHookScore"
} as const;

const SCORE_KEYS = ["clarityScore", "pacingScore", "emotionScore", "audienceHookScore"] as const;

/** Rank real alternative screenings by improvement on the weakest measured axis.
 * Never promise a gain; ties prefer the overall audience effect and stable IDs.
 */
export function selectScreeningCraftAlternatives(
  screening: TestScreeningResult,
  choices: readonly ScreeningCraftAlternative[],
  limit = 2
): readonly ScreeningCraftAlternative[] {
  const key = FOCUS_SCORE[getScreeningRevisionFocus(screening)];
  const total = (result: TestScreeningResult) =>
    SCORE_KEYS.reduce((sum, axis) => sum + result[axis] - screening[axis], 0);
  return [...choices].sort((a, b) =>
    (b.result[key] - a.result[key])
      || (total(b.result) - total(a.result))
      || a.id.localeCompare(b.id)
  ).slice(0, Math.max(0, limit));
}

interface CraftCopy {
  readonly heading: string;
  readonly explanation: string;
  readonly sound: string;
  readonly music: string;
  readonly question: Readonly<Record<ScreeningCraftKind, string>>;
  readonly predicted: string;
  readonly cost: string;
  readonly action: string;
  readonly note: string;
  readonly names: Readonly<Record<string, string>>;
}

export const SCREENING_CRAFT_REVISION_COPY: Readonly<Record<FilmWorkLanguage, CraftCopy>> = {
  nb: {
    heading: "Prøv lyd og musikk i klipperommet",
    explanation: "Dramaturgien kan endres i klippevalgene over. Her kan du teste konkrete lyd- og musikkgrep på den samme filmen, med beregnet utslag på fem publikumsverdier.",
    sound: "Lydgrep", music: "Musikkgrep",
    question: {
      sound: "Ville et annet forhold mellom dialog, romlyd, stillhet og lydperspektiv hjelpe fortellingen?",
      music: "Ville en annen plassering eller karakter av musikken endre rytmen og følelsen?"
    },
    predicted: "Beregnet endring", cost: "Endring i kostnad", action: "Velg og prøvevis på nytt",
    note: "Tallene er beregnet fra filmens eksisterende manus, opptak og produksjonsvalg. Ingen virkelig publikumsuttalelse eller garantier; valget låser ikke filmen.",
    names: {
      sound_offscreen_threat: "Trussel utenfor bildet", sound_dialogue_clarity: "Tydeligere dialog",
      sound_city_ambience: "Byens romlyd", sound_subjective_perspective: "Subjektivt lydperspektiv",
      sound_silence_tension: "Stillhet skaper spenning", sound_practical_location: "Autentisk opptakslyd",
      music_recurring_motif: "Tilbakevendende motiv", music_minimal_score: "Sparsom filmmusikk",
      music_emotional_theme: "Følelsesmessig tema", music_rhythmic_pulse: "Rytmisk puls",
      music_period_texture: "Tidsriktig klang", music_no_score_realism: "Realisme uten filmmusikk"
    }
  },
  en: {
    heading: "Test sound and music choices",
    explanation: "You can change story structure using the cut choices above. Here, try specific sound and music techniques on the same film, with calculated changes to all five audience measures.",
    sound: "Sound technique", music: "Music technique",
    question: {
      sound: "Could dialogue, ambience, silence or sound perspective tell the story more clearly?",
      music: "Would the placement or character of the score change the story's rhythm and emotion?"
    },
    predicted: "Projected change", cost: "Cost difference", action: "Choose and rescreen",
    note: "Projections use the film's actual script, footage and production choices. They are not real audience quotes or guaranteed improvements. The film remains unlocked.",
    names: {
      sound_offscreen_threat: "Offscreen threat", sound_dialogue_clarity: "Dialogue clarity",
      sound_city_ambience: "Urban ambience", sound_subjective_perspective: "Subjective sound",
      sound_silence_tension: "Silence for tension", sound_practical_location: "Location sound",
      music_recurring_motif: "Recurring motif", music_minimal_score: "Minimal score",
      music_emotional_theme: "Emotional theme", music_rhythmic_pulse: "Rhythmic pulse",
      music_period_texture: "Period music", music_no_score_realism: "Realism without score"
    }
  },
  fr: {
    heading: "Tester le son et la musique",
    explanation: "Les montages ci-dessus modifient la dramaturgie. Ici, comparez des choix sonores et musicaux sur le même film, avec leurs effets simulés sur cinq mesures du public.",
    sound: "Choix sonore", music: "Choix musical",
    question: {
      sound: "Un autre équilibre entre dialogues, ambiances, silence et point d'écoute aiderait-il le récit ?",
      music: "La place et la couleur de la musique changeraient-elles le rythme et l'émotion du film ?"
    },
    predicted: "Variation simulée", cost: "Différence de coût", action: "Choisir et relancer le test",
    note: "Les prévisions utilisent le scénario, les prises et les choix de production du film. Ce ne sont ni des citations de spectateurs ni des améliorations garanties. Le film reste déverrouillé.",
    names: {
      sound_offscreen_threat: "Menace hors-champ", sound_dialogue_clarity: "Dialogues plus clairs",
      sound_city_ambience: "Ambiance urbaine", sound_subjective_perspective: "Écoute subjective",
      sound_silence_tension: "Silence et tension", sound_practical_location: "Son direct",
      music_recurring_motif: "Motif récurrent", music_minimal_score: "Musique minimale",
      music_emotional_theme: "Thème émotionnel", music_rhythmic_pulse: "Pulsation rythmique",
      music_period_texture: "Musique d'époque", music_no_score_realism: "Réalisme sans musique"
    }
  },
  pt: {
    heading: "Experimentar som e música",
    explanation: "As montagens acima alteram a dramaturgia. Aqui, compare escolhas sonoras e musicais no mesmo filme, com efeitos simulados nas cinco medidas do público.",
    sound: "Escolha sonora", music: "Escolha musical",
    question: {
      sound: "Outro equilíbrio entre diálogo, ambiente, silêncio e perspetiva sonora ajudaria a narrativa?",
      music: "A colocação e o caráter da música mudariam o ritmo e a emoção do filme?"
    },
    predicted: "Alteração prevista", cost: "Diferença de custo", action: "Escolher e testar novamente",
    note: "As previsões usam o guião, as imagens e as decisões reais do filme. Não são citações de espectadores nem melhorias garantidas. O filme permanece desbloqueado.",
    names: {
      sound_offscreen_threat: "Ameaça fora de campo", sound_dialogue_clarity: "Diálogo claro",
      sound_city_ambience: "Ambiente urbano", sound_subjective_perspective: "Som subjetivo",
      sound_silence_tension: "Silêncio e tensão", sound_practical_location: "Som direto",
      music_recurring_motif: "Motivo recorrente", music_minimal_score: "Banda sonora mínima",
      music_emotional_theme: "Tema emocional", music_rhythmic_pulse: "Pulso rítmico",
      music_period_texture: "Música de época", music_no_score_realism: "Realismo sem música"
    }
  }
};

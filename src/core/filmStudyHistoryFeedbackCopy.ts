import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

export const SILENT_FOUNDATIONS_HISTORY_FEEDBACK = {
  match: {
    canonical: "This connects the film to its documented silent-cinema production system and historical craft method.",
    en: "This connects the film to its documented silent-cinema production system and historical craft method.",
    nb: "Dette knytter filmen til det dokumenterte produksjonssystemet i stumfilmen og den historiske håndverksmetoden.",
    fr: "Cela relie le film à son système de production documenté du cinéma muet et à sa méthode historique de travail cinématographique.",
    pt: "Isto liga o filme ao seu sistema de produção documentado do cinema mudo e ao seu método histórico de trabalho cinematográfico.",
  },
  partial: {
    canonical: "This is a real silent-cinema production system, but it belongs to another relationship between design, location, effects, staging and editing.",
    en: "This is a real silent-cinema production system, but it belongs to another relationship between design, location, effects, staging and editing.",
    nb: "Dette er et reelt produksjonssystem fra stumfilmen, men det tilhører et annet samspill mellom design, opptakssted, effekter, iscenesettelse og klipp.",
    fr: "Il s’agit d’un véritable système de production du cinéma muet, mais il relève d’une autre articulation entre décors, lieux de tournage, effets, mise en scène et montage.",
    pt: "Este é um sistema de produção real do cinema mudo, mas pertence a outra relação entre cenografia, local de rodagem, efeitos, encenação e montagem.",
  },
  miss: {
    canonical: "This places the film inside the wrong silent-cinema tradition and production logic.",
    en: "This places the film inside the wrong silent-cinema tradition and production logic.",
    nb: "Dette plasserer filmen i feil stumfilmtradisjon og produksjonslogikk.",
    fr: "Cela place le film dans la mauvaise tradition du cinéma muet et dans la mauvaise logique de production.",
    pt: "Isto coloca o filme na tradição errada do cinema mudo e na lógica de produção errada.",
  },
} as const;

export type SilentFoundationsHistoryFeedbackKey = keyof typeof SILENT_FOUNDATIONS_HISTORY_FEEDBACK;

type SilentFoundationsHistoryFeedbackEntry =
  (typeof SILENT_FOUNDATIONS_HISTORY_FEEDBACK)[SilentFoundationsHistoryFeedbackKey];

const SILENT_FOUNDATIONS_FEEDBACK_BY_CANONICAL = new Map<string, SilentFoundationsHistoryFeedbackEntry>(
  Object.values(SILENT_FOUNDATIONS_HISTORY_FEEDBACK).map((entry) => [entry.canonical, entry]),
);

export function formatFilmStudyHistoryFeedback(
  language: FilmWorkLanguage,
  canonicalFeedback: string,
): string {
  const entry = SILENT_FOUNDATIONS_FEEDBACK_BY_CANONICAL.get(canonicalFeedback);
  return entry?.[language] ?? canonicalFeedback;
}

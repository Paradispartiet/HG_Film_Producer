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

export const SILENT_STUDIO_SYSTEMS_HISTORY_FEEDBACK = {
  match: {
    canonical: "This matches the film's documented production system and the way its departments work together.",
    en: "This matches the film's documented production system and the way its departments work together.",
    nb: "Dette samsvarer med filmens dokumenterte produksjonssystem og måten avdelingene arbeider sammen på.",
    fr: "Cela correspond au système de production documenté du film et à la manière dont ses départements travaillent ensemble.",
    pt: "Isto corresponde ao sistema de produção documentado do filme e à forma como os seus departamentos trabalham em conjunto.",
  },
  partial: {
    canonical: "This is a real early-cinema production system, but it uses a different relation between body, studio, effects, architecture and sound.",
    en: "This is a real early-cinema production system, but it uses a different relation between body, studio, effects, architecture and sound.",
    nb: "Dette er et reelt produksjonssystem fra den tidlige filmen, men det bygger på et annet samspill mellom kropp, studio, effekter, arkitektur og lyd.",
    fr: "Il s’agit d’un véritable système de production du cinéma des débuts, mais il repose sur une autre relation entre corps, studio, effets, architecture et son.",
    pt: "Este é um sistema de produção real do cinema inicial, mas assenta numa relação diferente entre corpo, estúdio, efeitos, arquitetura e som.",
  },
  miss: {
    canonical: "This assigns the film to the wrong production tradition and departmental logic.",
    en: "This assigns the film to the wrong production tradition and departmental logic.",
    nb: "Dette plasserer filmen i feil produksjonstradisjon og feil avdelingslogikk.",
    fr: "Cela rattache le film à la mauvaise tradition de production et à la mauvaise logique d’organisation des départements.",
    pt: "Isto associa o filme à tradição de produção errada e à lógica departamental errada.",
  },
} as const;

export type SilentFoundationsHistoryFeedbackKey = keyof typeof SILENT_FOUNDATIONS_HISTORY_FEEDBACK;
export type SilentStudioSystemsHistoryFeedbackKey = keyof typeof SILENT_STUDIO_SYSTEMS_HISTORY_FEEDBACK;

type FilmStudyHistoryFeedbackEntry =
  | (typeof SILENT_FOUNDATIONS_HISTORY_FEEDBACK)[SilentFoundationsHistoryFeedbackKey]
  | (typeof SILENT_STUDIO_SYSTEMS_HISTORY_FEEDBACK)[SilentStudioSystemsHistoryFeedbackKey];

const FILM_STUDY_HISTORY_FEEDBACK_BY_CANONICAL = new Map<string, FilmStudyHistoryFeedbackEntry>(
  [
    ...Object.values(SILENT_FOUNDATIONS_HISTORY_FEEDBACK),
    ...Object.values(SILENT_STUDIO_SYSTEMS_HISTORY_FEEDBACK),
  ].map((entry) => [entry.canonical, entry]),
);

export function formatFilmStudyHistoryFeedback(
  language: FilmWorkLanguage,
  canonicalFeedback: string,
): string {
  const entry = FILM_STUDY_HISTORY_FEEDBACK_BY_CANONICAL.get(canonicalFeedback);
  return entry?.[language] ?? canonicalFeedback;
}

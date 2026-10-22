import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

/** Shared copy for selecting a practical emphasis instead of submitting written homework. */
export const FILM_SCHOOL_CHOICE_ONLY_COPY: Record<FilmWorkLanguage, {
  readonly question: string;
  readonly guidance: string;
}> = {
  nb: {
    question: "Hvilket filmfaglig hensyn vil du legge mest vekt på?",
    guidance: "Velg ett av alternativene. Ingen fritekstsvar er nødvendig."
  },
  en: {
    question: "Which filmmaking consideration will you prioritize?",
    guidance: "Choose one of the options. No written answer is needed."
  },
  fr: {
    question: "Quel aspect de la réalisation allez-vous privilégier ?",
    guidance: "Choisissez une option. Aucune réponse écrite n'est nécessaire."
  },
  pt: {
    question: "Que aspeto da realização vai priorizar?",
    guidance: "Escolha uma das opções. Não é necessário escrever uma resposta."
  }
};

/** Kept separate from course progress so existing version-one saves remain readable. */
export function isSelectedFilmSchoolOption(options: readonly string[], savedValue: string): boolean {
  return options.includes(savedValue) && savedValue.trim().length > 0;
}

export const STUDIO_NAME_OPTIONS = [
  "Northlight Pictures",
  "Harbor Film Studio",
  "New Wave Productions",
  "Open Frame Films",
  "Northern Stories"
] as const;

export const FILM_TITLE_OPTIONS = [
  "Harbor Lights",
  "Second Winter",
  "The Last Signal",
  "Open Road",
  "Quiet City",
  "A New Beginning",
  "Beyond the River",
  "The Long Goodbye"
] as const;

import type { StudioIdentityTag } from "../domain/career.js";
import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

interface StudioCareerCarryoverCopy {
  readonly studioCarryover: string;
  readonly afterSourceFilm: (sourceFilmLabel: string) => string;
  readonly period: (year: number, quarter: string) => string;
  readonly money: string;
  readonly reputation: string;
  readonly prestige: string;
  readonly completedFilms: string;
  readonly studioIdentity: string;
  readonly stillForming: string;
  readonly identityTags: Readonly<Record<StudioIdentityTag, string>>;
}

export const STUDIO_CAREER_CARRYOVER_COPY = {
  en: {
    studioCarryover: "Studio carryover",
    afterSourceFilm: (sourceFilmLabel) => `Studio after ${formatSourceFilmLabel("en", sourceFilmLabel)}`,
    period: (year, quarter) => `Year ${year} · ${quarter}`,
    money: "Money",
    reputation: "Reputation",
    prestige: "Prestige",
    completedFilms: "Completed films",
    studioIdentity: "Studio identity",
    stillForming: "Still forming",
    identityTags: {
      prestige: "prestige",
      commercial: "commercial",
      arthouse: "arthouse",
      genre: "genre",
      documentary: "documentary",
      local: "local",
      international: "international",
      low_budget: "low budget",
      talent_lab: "talent lab",
      technical_craft: "technical craft",
      political: "political",
      youth: "youth",
    },
  },
  nb: {
    studioCarryover: "Videreført studio",
    afterSourceFilm: (sourceFilmLabel) => `Studio etter ${formatSourceFilmLabel("nb", sourceFilmLabel)}`,
    period: (year, quarter) => `År ${year} · ${quarter}`,
    money: "Penger",
    reputation: "Omdømme",
    prestige: "Prestisje",
    completedFilms: "Fullførte filmer",
    studioIdentity: "Studioidentitet",
    stillForming: "Fortsatt under utvikling",
    identityTags: {
      prestige: "prestisje",
      commercial: "kommersiell",
      arthouse: "kunstfilm",
      genre: "sjanger",
      documentary: "dokumentar",
      local: "lokal",
      international: "internasjonal",
      low_budget: "lavbudsjett",
      talent_lab: "talentlaboratorium",
      technical_craft: "teknisk håndverk",
      political: "politisk",
      youth: "ungdom",
    },
  },
  fr: {
    studioCarryover: "Continuité du studio",
    afterSourceFilm: (sourceFilmLabel) => `Studio après ${formatSourceFilmLabel("fr", sourceFilmLabel)}`,
    period: (year, quarter) => `Année ${year} · ${quarter}`,
    money: "Trésorerie",
    reputation: "Réputation",
    prestige: "Prestige",
    completedFilms: "Films terminés",
    studioIdentity: "Identité du studio",
    stillForming: "Encore en formation",
    identityTags: {
      prestige: "prestige",
      commercial: "commercial",
      arthouse: "cinéma d’auteur",
      genre: "genre",
      documentary: "documentaire",
      local: "local",
      international: "international",
      low_budget: "petit budget",
      talent_lab: "laboratoire de talents",
      technical_craft: "savoir-faire technique",
      political: "politique",
      youth: "jeunesse",
    },
  },
  pt: {
    studioCarryover: "Continuidade do estúdio",
    afterSourceFilm: (sourceFilmLabel) => `Estúdio após ${formatSourceFilmLabel("pt", sourceFilmLabel)}`,
    period: (year, quarter) => `Ano ${year} · ${quarter}`,
    money: "Tesouraria",
    reputation: "Reputação",
    prestige: "Prestígio",
    completedFilms: "Filmes concluídos",
    studioIdentity: "Identidade do estúdio",
    stillForming: "Ainda em formação",
    identityTags: {
      prestige: "prestígio",
      commercial: "comercial",
      arthouse: "cinema de autor",
      genre: "género",
      documentary: "documentário",
      local: "local",
      international: "internacional",
      low_budget: "baixo orçamento",
      talent_lab: "laboratório de talentos",
      technical_craft: "domínio técnico",
      political: "político",
      youth: "juventude",
    },
  },
} as const satisfies Record<FilmWorkLanguage, StudioCareerCarryoverCopy>;

export function getStudioIdentityTagLabel(language: FilmWorkLanguage, tag: string): string {
  const identityTags = STUDIO_CAREER_CARRYOVER_COPY[language].identityTags;
  if (!(tag in identityTags)) {
    throw new Error(`Unknown studio identity tag: ${tag}`);
  }
  return identityTags[tag as StudioIdentityTag];
}

function formatSourceFilmLabel(language: FilmWorkLanguage, sourceFilmLabel: string): string {
  const match = sourceFilmLabel.trim().match(/^film\s+(\d+)$/i);
  if (!match) return sourceFilmLabel;
  const filmNumber = match[1];
  switch (language) {
    case "fr": return `le film ${filmNumber}`;
    case "pt": return `o filme ${filmNumber}`;
    case "nb":
    case "en": return `Film ${filmNumber}`;
  }
}

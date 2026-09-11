export const FILMWORK_LANGUAGE_STORAGE_KEY = "hg_filmwork_language_v1";
export const FILMWORK_LANGUAGE_EVENT = "hg-filmwork-language-change";

export const FILMWORK_LANGUAGES = ["en", "nb", "fr", "pt"] as const;
export type FilmWorkLanguage = (typeof FILMWORK_LANGUAGES)[number];

export function coerceFilmWorkLanguage(value: unknown): FilmWorkLanguage | undefined {
  if (value === "en" || value === "nb" || value === "fr" || value === "pt") return value;
  if (typeof value !== "string") return undefined;
  const normalized = value.trim().toLowerCase();
  if (normalized === "no" || normalized === "nn" || normalized.startsWith("nb-") || normalized.startsWith("nn-") || normalized.startsWith("no-")) return "nb";
  if (normalized.startsWith("en-")) return "en";
  if (normalized.startsWith("fr-")) return "fr";
  if (normalized.startsWith("pt-")) return "pt";
  return undefined;
}

export function resolveFilmWorkLanguage(storedValue: unknown, browserLanguage: unknown): FilmWorkLanguage {
  return coerceFilmWorkLanguage(storedValue) ?? coerceFilmWorkLanguage(browserLanguage) ?? "en";
}

export function getFilmWorkHtmlLanguage(language: FilmWorkLanguage): string {
  return language;
}

export function getFilmWorkIntlLocale(language: FilmWorkLanguage): string {
  switch (language) {
    case "nb": return "nb-NO";
    case "fr": return "fr-FR";
    case "pt": return "pt-PT";
    case "en": return "en-GB";
  }
}

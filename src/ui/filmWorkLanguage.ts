import { useCallback, useEffect, useState } from "react";

import {
  FILMWORK_LANGUAGE_EVENT,
  FILMWORK_LANGUAGE_STORAGE_KEY,
  getFilmWorkHtmlLanguage,
  resolveFilmWorkLanguage,
  type FilmWorkLanguage,
} from "../core/filmWorkLanguage";

function readFilmWorkLanguage(): FilmWorkLanguage {
  if (typeof window === "undefined") return "en";
  let storedValue: string | null = null;
  try {
    storedValue = window.localStorage.getItem(FILMWORK_LANGUAGE_STORAGE_KEY);
  } catch {
    storedValue = null;
  }
  return resolveFilmWorkLanguage(storedValue, window.navigator.language);
}

function applyDocumentLanguage(language: FilmWorkLanguage) {
  if (typeof document !== "undefined") document.documentElement.lang = getFilmWorkHtmlLanguage(language);
}

export function useFilmWorkLanguage() {
  const [language, setLanguageState] = useState<FilmWorkLanguage>(() => readFilmWorkLanguage());

  useEffect(() => {
    applyDocumentLanguage(language);
  }, [language]);

  useEffect(() => {
    const sync = () => setLanguageState(readFilmWorkLanguage());
    window.addEventListener("storage", sync);
    window.addEventListener(FILMWORK_LANGUAGE_EVENT, sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener(FILMWORK_LANGUAGE_EVENT, sync);
    };
  }, []);

  const setLanguage = useCallback((nextLanguage: FilmWorkLanguage) => {
    try {
      window.localStorage.setItem(FILMWORK_LANGUAGE_STORAGE_KEY, nextLanguage);
    } catch {
      // Language switching still works for the current session when storage is unavailable.
    }
    setLanguageState(nextLanguage);
    applyDocumentLanguage(nextLanguage);
    window.dispatchEvent(new Event(FILMWORK_LANGUAGE_EVENT));
  }, []);

  return [language, setLanguage] as const;
}

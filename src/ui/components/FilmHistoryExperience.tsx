import { useEffect, useMemo } from "react";

import {
  createFilmSlug,
  type FilmverketRoute,
  type FilmverketSection,
} from "../../core/filmverketRoutes";
import { getClassicFilmScenarios, type FilmScenarioSeed } from "../data/filmScenarios";
import { FilmHistoryBook } from "./FilmHistoryBook";
import { FilmverketKnowledgeShell } from "./FilmverketKnowledgeShell";

export function FilmHistoryExperience({
  navigate,
}: {
  readonly navigate: (route: FilmverketRoute) => void;
}) {
  const scenarios = useMemo(() => getClassicFilmScenarios(), []);

  useEffect(() => {
    document.title = "Film History · Filmverket";
  }, []);

  function navigateSection(section: FilmverketSection) {
    navigate(routeForSection(section));
  }

  function openFilm(scenario: FilmScenarioSeed) {
    navigate({ section: "atlas", filmSlug: createFilmSlug(scenario.film.title, scenario.film.year) });
  }

  return (
    <FilmverketKnowledgeShell activeSection="history" onNavigate={navigateSection}>
      <FilmHistoryBook onOpenFilm={openFilm} scenarios={scenarios} />
    </FilmverketKnowledgeShell>
  );
}

function routeForSection(section: FilmverketSection): FilmverketRoute {
  switch (section) {
    case "home": return { section: "home" };
    case "producer": return { section: "producer" };
    case "atlas": return { section: "atlas" };
    case "director": return { section: "director" };
    case "school": return { section: "school" };
    case "history": return { section: "history" };
    case "research": return { section: "research" };
  }
}

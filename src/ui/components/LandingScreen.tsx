import { useEffect, useMemo, useRef } from "react";

import { createFilmSlug, type FilmverketRoute } from "../../core/filmverketRoutes";
import { getClassicFilmScenarios } from "../data/filmScenarios";
import { useFilmverketHashRoute } from "../routing/useFilmverketHashRoute";
import { FilmCraftLibraryOverlay } from "./FilmCraftLibraryOverlay";
import { FilmDirectorExperience } from "./FilmDirectorExperience";
import { FilmResearchControlRoom } from "./FilmResearchControlRoom";
import { RoutedFilmverketPlatform } from "./RoutedFilmverketPlatform";

interface LandingScreenProps {
  readonly onStart: () => void;
  readonly onContinue: () => void;
  readonly onProductionCases: () => void;
  readonly hasSave: boolean;
}

export function LandingScreen(props: LandingScreenProps) {
  const { navigate, route } = useFilmverketHashRoute();
  const scenarios = useMemo(() => getClassicFilmScenarios(), []);
  const previousNonResearchRoute = useRef<FilmverketRoute>({ section: "home" });
  const directorRoute = route.section === "director" ? route : undefined;

  useEffect(() => {
    if (route.section !== "research") previousNonResearchRoute.current = route;
  }, [route]);

  function openScenario(scenarioId: string, destination: "atlas" | "director") {
    const scenario = scenarios.find((candidate) => candidate.id === scenarioId);
    if (!scenario) return;
    const filmSlug = createFilmSlug(scenario.film.title, scenario.film.year);
    navigate(destination === "atlas" ? { section: "atlas", filmSlug } : { section: "director", filmSlug });
  }

  return (
    <>
      {directorRoute ? (
        <FilmDirectorExperience navigate={navigate} route={directorRoute} />
      ) : (
        <RoutedFilmverketPlatform {...props} navigate={navigate} route={route} />
      )}
      <FilmCraftLibraryOverlay />
      <FilmResearchControlRoom
        onClose={() => navigate(previousNonResearchRoute.current)}
        onOpen={() => navigate({ section: "research" })}
        onOpenAtlas={(scenarioId) => openScenario(scenarioId, "atlas")}
        onOpenDirector={(scenarioId) => openScenario(scenarioId, "director")}
        open={route.section === "research"}
      />
    </>
  );
}

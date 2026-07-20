import { useEffect, useMemo, useRef } from "react";

import { createFilmSlug, type FilmverketRoute } from "../../core/filmverketRoutes";
import { getClassicFilmScenarios } from "../data/filmScenarios";
import { useFilmverketHashRoute } from "../routing/useFilmverketHashRoute";
import { DirectorCourseAssignmentBanner } from "./DirectorCourseAssignmentBanner";
import { DirectorKnowledgeDesk } from "./DirectorKnowledgeDesk";
import { DirectorPracticeCoach } from "./DirectorPracticeCoach";
import { FilmCraftLibraryOverlay } from "./FilmCraftLibraryOverlay";
import { FilmDirectorExperience } from "./FilmDirectorExperience";
import { FilmResearchControlRoom } from "./FilmResearchControlRoom";
import { FilmSchoolScreenplayCourse } from "./FilmSchoolScreenplayCourse";
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
      ) : route.section === "school" ? (
        <FilmSchoolScreenplayCourse
          navigate={navigate}
          onOpenAtlas={(scenario) => openScenario(scenario.id, "atlas")}
          onOpenDirector={(scenario) => openScenario(scenario.id, "director")}
          scenarios={scenarios}
        />
      ) : (
        <RoutedFilmverketPlatform {...props} navigate={navigate} route={route} />
      )}
      <DirectorCourseAssignmentBanner filmSlug={directorRoute?.filmSlug} visible={route.section === "director"} />
      <DirectorPracticeCoach visible={route.section === "director"} />
      <DirectorKnowledgeDesk visible={route.section === "director"} />
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

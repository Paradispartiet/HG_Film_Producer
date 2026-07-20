import { useEffect, useMemo, useRef, useState } from "react";

import { createFilmSlug, type FilmverketRoute } from "../../core/filmverketRoutes";
import { getClassicFilmScenarios } from "../data/filmScenarios";
import { useFilmverketHashRoute } from "../routing/useFilmverketHashRoute";
import { DirectorCourseAssignmentBanner } from "./DirectorCourseAssignmentBanner";
import { DirectorKnowledgeDesk } from "./DirectorKnowledgeDesk";
import { DirectorPracticeCoach } from "./DirectorPracticeCoach";
import { FilmCraftLibraryOverlay } from "./FilmCraftLibraryOverlay";
import { FilmDirectorExperience } from "./FilmDirectorExperience";
import { FilmResearchControlRoom } from "./FilmResearchControlRoom";
import { FilmSchoolCameraCourse } from "./FilmSchoolCameraCourse";
import { FilmSchoolCourseNavigation, type FilmSchoolCourseId } from "./FilmSchoolCourseNavigation";
import { FilmSchoolPerformanceCourse } from "./FilmSchoolPerformanceCourse";
import { FilmSchoolScreenplayCourse } from "./FilmSchoolScreenplayCourse";
import { RoutedFilmverketPlatform } from "./RoutedFilmverketPlatform";

const SCHOOL_ACTIVE_COURSE_STORAGE_KEY = "hg_film_school_active_course_v1";

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
  const [schoolCourseId, setSchoolCourseId] = useState<FilmSchoolCourseId>(() => loadSchoolCourseId());
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

  function selectSchoolCourse(courseId: FilmSchoolCourseId) {
    setSchoolCourseId(courseId);
    try {
      window.localStorage.setItem(SCHOOL_ACTIVE_COURSE_STORAGE_KEY, courseId);
    } catch {
      // Course switching still works for the current session.
    }
  }

  function renderFilmSchool() {
    const sharedProps = {
      navigate,
      onOpenAtlas: (scenario: ReturnType<typeof getClassicFilmScenarios>[number]) => openScenario(scenario.id, "atlas"),
      onOpenDirector: (scenario: ReturnType<typeof getClassicFilmScenarios>[number]) => openScenario(scenario.id, "director"),
      scenarios,
    };
    if (schoolCourseId === "performance") {
      return <FilmSchoolPerformanceCourse {...sharedProps} onSelectCourse={selectSchoolCourse} />;
    }
    if (schoolCourseId === "camera") {
      return <FilmSchoolCameraCourse {...sharedProps} onSelectCourse={selectSchoolCourse} />;
    }
    return (
      <>
        <FilmSchoolScreenplayCourse {...sharedProps} />
        <FilmSchoolCourseNavigation activeCourseId="screenplay" onSelectCourse={selectSchoolCourse} />
      </>
    );
  }

  return (
    <>
      {directorRoute ? (
        <FilmDirectorExperience navigate={navigate} route={directorRoute} />
      ) : route.section === "school" ? (
        renderFilmSchool()
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

function loadSchoolCourseId(): FilmSchoolCourseId {
  try {
    const stored = window.localStorage.getItem(SCHOOL_ACTIVE_COURSE_STORAGE_KEY);
    if (stored === "performance" || stored === "camera") return stored;
    return "screenplay";
  } catch {
    return "screenplay";
  }
}

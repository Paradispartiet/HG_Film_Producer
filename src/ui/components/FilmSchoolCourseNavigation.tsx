import type { FilmWorkLanguage } from "../../core/filmWorkLanguage";

export type FilmSchoolCourseId = "overview" | "screenplay" | "performance" | "camera" | "lightingDesign" | "editingSound";

type FilmSchoolCourseNavigationProps = {
  readonly activeCourseId: FilmSchoolCourseId;
  readonly language: FilmWorkLanguage;
  readonly onSelectCourse: (courseId: FilmSchoolCourseId) => void;
};

const availableCourses = {
  nb: [
    { id: "overview" as const, number: "00", title: "Oversikt og regieksamen" },
    { id: "screenplay" as const, number: "01", title: "Manus og sceneanalyse" },
    { id: "performance" as const, number: "02", title: "Skuespillerregi og blocking" },
    { id: "camera" as const, number: "03", title: "Bilde, kamera og optikk" },
    { id: "lightingDesign" as const, number: "04", title: "Lys, farge og produksjonsdesign" },
    { id: "editingSound" as const, number: "05", title: "Klipp, lyd og ferdigstilling" },
  ],
  en: [
    { id: "overview" as const, number: "00", title: "Overview and directing exam" },
    { id: "screenplay" as const, number: "01", title: "Screenplay and scene analysis" },
    { id: "performance" as const, number: "02", title: "Performance direction and blocking" },
    { id: "camera" as const, number: "03", title: "Image, camera and optics" },
    { id: "lightingDesign" as const, number: "04", title: "Lighting, colour and production design" },
    { id: "editingSound" as const, number: "05", title: "Editing, sound and finishing" },
  ],
} as const;

export function FilmSchoolCourseNavigation({ activeCourseId, language, onSelectCourse }: FilmSchoolCourseNavigationProps) {
  const isNorwegian = language === "nb";
  return (
    <aside className="school-course-selector" aria-label={isNorwegian ? "Film School-kurs" : "Film School courses"}>
      <header><span>Film School</span><strong>{isNorwegian ? "Regi grunnkurs" : "Directing foundations"}</strong></header>
      <div>
        {availableCourses[language].map((course) => (
          <button
            className={course.id === activeCourseId ? "is-active" : ""}
            key={course.id}
            onClick={() => onSelectCourse(course.id)}
            type="button"
          >
            <span>{course.number}</span>
            <strong>{course.title}</strong>
            <b>{course.id === activeCourseId ? (isNorwegian ? "Åpent" : "Open") : (isNorwegian ? "Åpne →" : "Open →")}</b>
          </button>
        ))}
      </div>
    </aside>
  );
}

export type FilmSchoolCourseId = "screenplay" | "performance" | "camera";

type FilmSchoolCourseNavigationProps = {
  readonly activeCourseId: FilmSchoolCourseId;
  readonly onSelectCourse: (courseId: FilmSchoolCourseId) => void;
};

const availableCourses = [
  { id: "screenplay" as const, number: "01", title: "Manus og sceneanalyse" },
  { id: "performance" as const, number: "02", title: "Skuespillerregi og blocking" },
  { id: "camera" as const, number: "03", title: "Bilde, kamera og optikk" },
] as const;

export function FilmSchoolCourseNavigation({ activeCourseId, onSelectCourse }: FilmSchoolCourseNavigationProps) {
  return (
    <aside className="school-course-selector" aria-label="Film School-kurs">
      <header><span>Film School</span><strong>Regi grunnkurs</strong></header>
      <div>
        {availableCourses.map((course) => (
          <button
            className={course.id === activeCourseId ? "is-active" : ""}
            key={course.id}
            onClick={() => onSelectCourse(course.id)}
            type="button"
          >
            <span>{course.number}</span>
            <strong>{course.title}</strong>
            <b>{course.id === activeCourseId ? "Åpent" : "Åpne →"}</b>
          </button>
        ))}
      </div>
    </aside>
  );
}

export type FilmSchoolCourseId = "screenplay" | "performance";

type FilmSchoolCourseNavigationProps = {
  readonly activeCourseId: FilmSchoolCourseId;
  readonly onSelectCourse: (courseId: FilmSchoolCourseId) => void;
};

const availableCourses = [
  {
    id: "screenplay" as const,
    number: "01",
    title: "Manus og sceneanalyse",
    description: "Synsvinkel, mål, hindring, beats, undertekst og planting.",
  },
  {
    id: "performance" as const,
    number: "02",
    title: "Skuespillerregi og blocking",
    description: "Spillbar handling, lytting, rom, blikk, marks og justeringer.",
  },
] as const;

const futureCourses = [
  ["03", "Bilde, kamera og optikk"],
  ["04", "Lys, farge og produksjonsdesign"],
  ["05", "Klipp, lyd og ferdigstilling"],
] as const;

export function FilmSchoolCourseNavigation({ activeCourseId, onSelectCourse }: FilmSchoolCourseNavigationProps) {
  return (
    <section className="school-course-selector" aria-label="Film School-kurs">
      <header>
        <div><span className="filmverket-kicker">Regi grunnkurs</span><h2>Velg kurskapittel</h2></div>
        <p>Hvert kapittel bruker samme løkke: begrep, filmeksempel, kontrollspørsmål, praksis og oppgave i Film Director.</p>
      </header>
      <div className="school-course-selector-grid">
        {availableCourses.map((course) => (
          <button
            className={course.id === activeCourseId ? "school-course-selector-card is-active" : "school-course-selector-card"}
            key={course.id}
            onClick={() => onSelectCourse(course.id)}
            type="button"
          >
            <span>{course.number}</span>
            <div><strong>{course.title}</strong><small>{course.description}</small></div>
            <b>{course.id === activeCourseId ? "Åpent" : "Åpne →"}</b>
          </button>
        ))}
        {futureCourses.map(([number, title]) => (
          <article className="school-course-selector-card is-future" key={number}>
            <span>{number}</span><div><strong>{title}</strong><small>Bygges som neste kurskapittel.</small></div><b>Senere</b>
          </article>
        ))}
      </div>
    </section>
  );
}

import type { FilmWorkLanguage } from "../../core/filmWorkLanguage";
import { useFilmWorkLanguage } from "../filmWorkLanguage";

export type FilmSchoolCourseId = "overview" | "screenplay" | "performance" | "camera" | "lightingDesign" | "editingSound";

type FilmSchoolCourseNavigationProps = {
  readonly activeCourseId: FilmSchoolCourseId;
  readonly language?: FilmWorkLanguage;
  readonly onSelectCourse: (courseId: FilmSchoolCourseId) => void;
};

const availableCourses = {
  en: [
    { id: "overview" as const, number: "00", title: "Overview and directing exam" },
    { id: "screenplay" as const, number: "01", title: "Screenplay and scene analysis" },
    { id: "performance" as const, number: "02", title: "Performance direction and blocking" },
    { id: "camera" as const, number: "03", title: "Image, camera and optics" },
    { id: "lightingDesign" as const, number: "04", title: "Lighting, colour and production design" },
    { id: "editingSound" as const, number: "05", title: "Editing, sound and finishing" },
  ],
  nb: [
    { id: "overview" as const, number: "00", title: "Oversikt og regieksamen" },
    { id: "screenplay" as const, number: "01", title: "Manus og sceneanalyse" },
    { id: "performance" as const, number: "02", title: "Skuespillerregi og blocking" },
    { id: "camera" as const, number: "03", title: "Bilde, kamera og optikk" },
    { id: "lightingDesign" as const, number: "04", title: "Lys, farge og produksjonsdesign" },
    { id: "editingSound" as const, number: "05", title: "Klipp, lyd og ferdigstilling" },
  ],
  fr: [
    { id: "overview" as const, number: "00", title: "Vue d’ensemble et examen de réalisation" },
    { id: "screenplay" as const, number: "01", title: "Scénario et analyse de scène" },
    { id: "performance" as const, number: "02", title: "Direction d’acteurs et mise en place" },
    { id: "camera" as const, number: "03", title: "Image, caméra et optique" },
    { id: "lightingDesign" as const, number: "04", title: "Lumière, couleur et décors" },
    { id: "editingSound" as const, number: "05", title: "Montage, son et finition" },
  ],
  pt: [
    { id: "overview" as const, number: "00", title: "Visão geral e exame de realização" },
    { id: "screenplay" as const, number: "01", title: "Argumento e análise de cena" },
    { id: "performance" as const, number: "02", title: "Direção de atores e marcação" },
    { id: "camera" as const, number: "03", title: "Imagem, câmara e ótica" },
    { id: "lightingDesign" as const, number: "04", title: "Luz, cor e design de produção" },
    { id: "editingSound" as const, number: "05", title: "Montagem, som e finalização" },
  ],
} as const;

type NavigationCopy = {
  readonly ariaLabel: string;
  readonly foundation: string;
  readonly structure: string;
  readonly open: string;
  readonly openAction: string;
};

const navigationCopy: Record<FilmWorkLanguage, NavigationCopy> = {
  en: { ariaLabel: "Film School ground-course navigation", foundation: "Directing foundations", structure: "5 courses × 5 modules", open: "Open", openAction: "Open →" },
  nb: { ariaLabel: "Navigasjon for Film School-grunnkurset", foundation: "Regi grunnkurs", structure: "5 kurs × 5 moduler", open: "Åpent", openAction: "Åpne →" },
  fr: { ariaLabel: "Navigation du cursus fondamental Film School", foundation: "Fondamentaux de la réalisation", structure: "5 cours × 5 modules", open: "Ouvert", openAction: "Ouvrir →" },
  pt: { ariaLabel: "Navegação do curso fundamental Film School", foundation: "Fundamentos de realização", structure: "5 cursos × 5 módulos", open: "Aberto", openAction: "Abrir →" },
};

export function FilmSchoolCourseNavigation({ activeCourseId, language, onSelectCourse }: FilmSchoolCourseNavigationProps) {
  const [storedLanguage] = useFilmWorkLanguage();
  const resolvedLanguage = language ?? storedLanguage;
  const copy = navigationCopy[resolvedLanguage];
  return (
    <aside className="school-course-selector" aria-label={copy.ariaLabel}>
      <header><span>Film School · {copy.structure}</span><strong>{copy.foundation}</strong></header>
      <div>
        {availableCourses[resolvedLanguage].map((course) => (
          <button
            className={course.id === activeCourseId ? "is-active" : ""}
            key={course.id}
            onClick={() => onSelectCourse(course.id)}
            type="button"
          >
            <span>{course.number}</span>
            <strong>{course.title}</strong>
            <b>{course.id === activeCourseId ? copy.open : copy.openAction}</b>
          </button>
        ))}
      </div>
    </aside>
  );
}

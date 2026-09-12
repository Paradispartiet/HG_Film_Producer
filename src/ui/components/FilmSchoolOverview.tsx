import { useEffect, useMemo, useState, type ChangeEvent } from "react";

import { DIRECTOR_BRIEF_FIELDS } from "../../core/directorBrief";
import { getFilmWorkIntlLocale, type FilmWorkLanguage } from "../../core/filmWorkLanguage";
import {
  FILM_SCHOOL_CAPSTONE_SUBMISSION_STORAGE_KEY,
  coerceFilmSchoolCapstoneSubmission,
  type FilmSchoolCapstoneSubmission,
} from "../../core/filmSchoolCapstoneSubmission";
import {
  FILM_SCHOOL_CAPSTONE_ASSIGNMENT_STORAGE_KEY,
  FILM_SCHOOL_GROUND_COURSES,
  createFilmSchoolCapstoneAssignment,
  summarizeFilmSchoolGroundCourse,
  type FilmSchoolGroundCourseId,
  type FilmSchoolGroundCourseSummary,
} from "../../core/filmSchoolGroundCourse";
import { createFilmSlug, type FilmverketRoute, type FilmverketSection } from "../../core/filmverketRoutes";
import { useFilmWorkLanguage } from "../filmWorkLanguage";
import type { FilmScenarioSeed } from "../data/filmScenarios";
import { FilmSchoolCourseNavigation, type FilmSchoolCourseId } from "./FilmSchoolCourseNavigation";

const courseCopy: Record<FilmWorkLanguage, Record<FilmSchoolGroundCourseId, { readonly title: string; readonly summary: string }>> = {
  en: {
    screenplay: { title: "Screenplay and scene analysis", summary: "Context, objective, conflict, turning point, subtext and scene function." },
    performance: { title: "Performance direction and blocking", summary: "Playable action, listening, movement, eyelines, rehearsal and adjustment." },
    camera: { title: "Image, camera and optics", summary: "Framing, perspective, focal length, camera movement, focus and shot planning." },
    lightingDesign: { title: "Lighting, colour and production design", summary: "Sources, contrast, palette, materials, space and visual continuity." },
    editingSound: { title: "Editing, sound and finishing", summary: "Rhythm, cinematic time, sound perspective, mix, grading and delivery." },
  },
  nb: {
    screenplay: { title: "Manus og sceneanalyse", summary: "Kontekst, mål, konflikt, vendepunkt, undertekst og scenens funksjon." },
    performance: { title: "Skuespillerregi og blocking", summary: "Spillbar handling, lytting, bevegelse, blikk, prøve og justering." },
    camera: { title: "Bilde, kamera og optikk", summary: "Utsnitt, perspektiv, brennvidde, kamerabevegelse, fokus og shotplan." },
    lightingDesign: { title: "Lys, farge og produksjonsdesign", summary: "Lyskilder, kontrast, palett, materialer, rom og visuell kontinuitet." },
    editingSound: { title: "Klipp, lyd og ferdigstilling", summary: "Rytme, filmisk tid, lydperspektiv, miks, grading og levering." },
  },
  fr: {
    screenplay: { title: "Scénario et analyse de scène", summary: "Contexte, objectif, conflit, point de bascule, sous-texte et fonction de la scène." },
    performance: { title: "Direction d’acteurs et mise en place", summary: "Action jouable, écoute, mouvement, regards, répétition et ajustement." },
    camera: { title: "Image, caméra et optique", summary: "Cadrage, perspective, focale, mouvement de caméra, mise au point et plan de prises." },
    lightingDesign: { title: "Lumière, couleur et décors", summary: "Sources, contraste, palette, matériaux, espace et continuité visuelle." },
    editingSound: { title: "Montage, son et finition", summary: "Rythme, temps filmique, perspective sonore, mixage, étalonnage et livraison." },
  },
  pt: {
    screenplay: { title: "Argumento e análise de cena", summary: "Contexto, objetivo, conflito, ponto de viragem, subtexto e função da cena." },
    performance: { title: "Direção de atores e marcação", summary: "Ação jogável, escuta, movimento, linhas de olhar, ensaio e ajuste." },
    camera: { title: "Imagem, câmara e ótica", summary: "Enquadramento, perspetiva, distância focal, movimento de câmara, foco e planeamento de planos." },
    lightingDesign: { title: "Luz, cor e design de produção", summary: "Fontes, contraste, paleta, materiais, espaço e continuidade visual." },
    editingSound: { title: "Montagem, som e finalização", summary: "Ritmo, tempo cinematográfico, perspetiva sonora, mistura, correção de cor e entrega." },
  },
};

type OverviewCopy = {
  readonly homeLabel: string;
  readonly navAria: string;
  readonly foundation: string;
  readonly heroStart: string;
  readonly heroEmphasis: string;
  readonly heroDescription: string;
  readonly overallProgress: string;
  readonly progressAria: (percent: number) => string;
  readonly progressSummary: (masteredCourses: number, totalCourses: number, completedMilestones: number, totalMilestones: number) => string;
  readonly examSubmitted: string;
  readonly mastered: string;
  readonly modulesMastered: (masteredModules: number, totalModules: number) => string;
  readonly reopenCourse: string;
  readonly continueCourse: string;
  readonly finalExam: string;
  readonly examHeadline: string;
  readonly examDescription: string;
  readonly foundationsCompleted: string;
  readonly foundationCompleted: string;
  readonly examLocked: string;
  readonly submitted: string;
  readonly submissionSummary: (briefFieldCount: number, completeShotCount: number) => string;
  readonly openSubmittedExam: string;
  readonly chooseReference: string;
  readonly remainingCourses: (remaining: number) => string;
  readonly newOrUpdatedExam: string;
  readonly chooseReferenceFilm: string;
  readonly openNewExam: string;
  readonly startExam: string;
  readonly footerFlow: string;
};

const overviewCopy: Record<FilmWorkLanguage, OverviewCopy> = {
  en: {
    homeLabel: "Front page",
    navAria: "FilmWork sections",
    foundation: "Directing foundations",
    heroStart: "From scene analysis to a",
    heroEmphasis: "complete cinematic plan",
    heroDescription: "Five courses follow the same scene through screenplay, performance, camera, lighting and design, editing, sound and delivery. Each course contains five modules, for 25 modules in total. The progress below comes directly from your course work.",
    overallProgress: "Overall progress",
    progressAria: (percent) => `${percent}% complete`,
    progressSummary: (masteredCourses, totalCourses, completedMilestones, totalMilestones) => `${masteredCourses} of ${totalCourses} courses mastered · ${completedMilestones} of ${totalMilestones} milestones`,
    examSubmitted: "Directing exam submitted",
    mastered: "Mastered",
    modulesMastered: (masteredModules, totalModules) => `${masteredModules} of ${totalModules} modules mastered`,
    reopenCourse: "Open course again →",
    continueCourse: "Continue course →",
    finalExam: "Final directing exam",
    examHeadline: "One scene. One coherent directing system.",
    examDescription: "The exam uses the complete scene brief in Film Director. Every decision must build the same dramatic progression and be assessable in an imagined finished result.",
    foundationsCompleted: "Directing foundations completed",
    foundationCompleted: "Foundation course completed",
    examLocked: "Exam locked",
    submitted: "Submitted",
    submissionSummary: (briefFieldCount, completeShotCount) => `${briefFieldCount} directing fields · ${completeShotCount} complete shot cards`,
    openSubmittedExam: "Open submitted directing exam →",
    chooseReference: "Choose a film as your craft reference and open the complete assignment in Film Director.",
    remainingCourses: (remaining) => `Master ${remaining} more courses. All 75 milestones must be completed.`,
    newOrUpdatedExam: "New or updated exam",
    chooseReferenceFilm: "Choose reference film",
    openNewExam: "Open a new exam assignment →",
    startExam: "Start directing exam in Film Director →",
    footerFlow: "Screenplay → performance → image → look → post-production",
  },
  nb: {
    homeLabel: "Forside",
    navAria: "Filmverket-seksjoner",
    foundation: "Regi grunnkurs",
    heroStart: "Fra sceneanalyse til",
    heroEmphasis: "ferdig filmisk plan",
    heroDescription: "Fem kurs følger den samme scenen gjennom manus, skuespillerarbeid, kamera, lys og design, klipp, lyd og levering. Hvert kurs har fem moduler, totalt 25 moduler. Progresjonen nedenfor kommer direkte fra kursarbeidet ditt.",
    overallProgress: "Samlet progresjon",
    progressAria: (percent) => `${percent}% fullført`,
    progressSummary: (masteredCourses, totalCourses, completedMilestones, totalMilestones) => `${masteredCourses} av ${totalCourses} kurs mestret · ${completedMilestones} av ${totalMilestones} milepæler`,
    examSubmitted: "Regieksamen levert",
    mastered: "Mestret",
    modulesMastered: (masteredModules, totalModules) => `${masteredModules} av ${totalModules} moduler mestret`,
    reopenCourse: "Åpne kurset igjen →",
    continueCourse: "Fortsett kurset →",
    finalExam: "Avsluttende regieksamen",
    examHeadline: "Én scene. Ett sammenhengende regisystem.",
    examDescription: "Eksamen bruker hele scenebrieffet i Film Director. Alle beslutninger skal bygge den samme dramatiske utviklingen og kunne vurderes i et tenkt ferdig resultat.",
    foundationsCompleted: "Regi-grunnkurs fullført",
    foundationCompleted: "Grunnkurset er fullført",
    examLocked: "Eksamen er låst",
    submitted: "Levert",
    submissionSummary: (briefFieldCount, completeShotCount) => `${briefFieldCount} regifelt · ${completeShotCount} komplette shot cards`,
    openSubmittedExam: "Åpne levert regieksamen →",
    chooseReference: "Velg en film som faglig referanse og åpne den komplette oppgaven i Film Director.",
    remainingCourses: (remaining) => `Mestre ${remaining} kurs til. Alle 75 milepæler må være gjennomført.`,
    newOrUpdatedExam: "Ny eller oppdatert eksamen",
    chooseReferenceFilm: "Velg referansefilm",
    openNewExam: "Åpne ny eksamensoppgave →",
    startExam: "Start regieksamen i Film Director →",
    footerFlow: "Manus → prestasjon → bilde → look → postproduksjon",
  },
  fr: {
    homeLabel: "Accueil",
    navAria: "Sections de FilmWork",
    foundation: "Fondamentaux de la réalisation",
    heroStart: "De l’analyse de scène à un",
    heroEmphasis: "plan cinématographique complet",
    heroDescription: "Cinq cours suivent la même scène à travers le scénario, le jeu, la caméra, la lumière et les décors, le montage, le son et la livraison. Chaque cours comprend cinq modules, soit 25 modules au total. La progression ci-dessous provient directement de votre travail de cours.",
    overallProgress: "Progression globale",
    progressAria: (percent) => `${percent}% terminé`,
    progressSummary: (masteredCourses, totalCourses, completedMilestones, totalMilestones) => `${masteredCourses} cours maîtrisés sur ${totalCourses} · ${completedMilestones} jalons sur ${totalMilestones}`,
    examSubmitted: "Examen de réalisation remis",
    mastered: "Maîtrisé",
    modulesMastered: (masteredModules, totalModules) => `${masteredModules} modules maîtrisés sur ${totalModules}`,
    reopenCourse: "Rouvrir le cours →",
    continueCourse: "Continuer le cours →",
    finalExam: "Examen final de réalisation",
    examHeadline: "Une scène. Un système de réalisation cohérent.",
    examDescription: "L’examen utilise l’intégralité du brief de scène dans Film Director. Chaque décision doit construire la même progression dramatique et pouvoir être évaluée dans un résultat final imaginé.",
    foundationsCompleted: "Fondamentaux de la réalisation terminés",
    foundationCompleted: "Cours fondamental terminé",
    examLocked: "Examen verrouillé",
    submitted: "Remis",
    submissionSummary: (briefFieldCount, completeShotCount) => `${briefFieldCount} champs de réalisation · ${completeShotCount} shot cards complètes`,
    openSubmittedExam: "Ouvrir l’examen remis →",
    chooseReference: "Choisissez un film comme référence de métier et ouvrez l’exercice complet dans Film Director.",
    remainingCourses: (remaining) => `Maîtrisez encore ${remaining} cours. Les 75 jalons doivent être terminés.`,
    newOrUpdatedExam: "Nouvel examen ou mise à jour",
    chooseReferenceFilm: "Choisir le film de référence",
    openNewExam: "Ouvrir un nouvel exercice d’examen →",
    startExam: "Commencer l’examen dans Film Director →",
    footerFlow: "Scénario → jeu → image → look → postproduction",
  },
  pt: {
    homeLabel: "Início",
    navAria: "Secções do FilmWork",
    foundation: "Fundamentos de realização",
    heroStart: "Da análise de cena a um",
    heroEmphasis: "plano cinematográfico completo",
    heroDescription: "Cinco cursos acompanham a mesma cena através do argumento, interpretação, câmara, luz e design, montagem, som e entrega. Cada curso contém cinco módulos, num total de 25 módulos. O progresso abaixo vem diretamente do seu trabalho no curso.",
    overallProgress: "Progresso geral",
    progressAria: (percent) => `${percent}% concluído`,
    progressSummary: (masteredCourses, totalCourses, completedMilestones, totalMilestones) => `${masteredCourses} de ${totalCourses} cursos dominados · ${completedMilestones} de ${totalMilestones} marcos`,
    examSubmitted: "Exame de realização entregue",
    mastered: "Dominado",
    modulesMastered: (masteredModules, totalModules) => `${masteredModules} de ${totalModules} módulos dominados`,
    reopenCourse: "Abrir o curso novamente →",
    continueCourse: "Continuar o curso →",
    finalExam: "Exame final de realização",
    examHeadline: "Uma cena. Um sistema de realização coerente.",
    examDescription: "O exame utiliza o brief completo da cena no Film Director. Todas as decisões devem construir a mesma progressão dramática e poder ser avaliadas num resultado final imaginado.",
    foundationsCompleted: "Fundamentos de realização concluídos",
    foundationCompleted: "Curso de fundamentos concluído",
    examLocked: "Exame bloqueado",
    submitted: "Entregue",
    submissionSummary: (briefFieldCount, completeShotCount) => `${briefFieldCount} campos de realização · ${completeShotCount} shot cards completos`,
    openSubmittedExam: "Abrir o exame entregue →",
    chooseReference: "Escolha um filme como referência técnica e abra o exercício completo no Film Director.",
    remainingCourses: (remaining) => `Domine mais ${remaining} cursos. Todos os 75 marcos têm de estar concluídos.`,
    newOrUpdatedExam: "Exame novo ou atualizado",
    chooseReferenceFilm: "Escolher filme de referência",
    openNewExam: "Abrir um novo exercício de exame →",
    startExam: "Iniciar o exame no Film Director →",
    footerFlow: "Argumento → interpretação → imagem → look → pós-produção",
  },
};

type DirectorBriefFieldId = (typeof DIRECTOR_BRIEF_FIELDS)[number]["id"];

const localizedDirectorBriefLabels: Record<Exclude<FilmWorkLanguage, "en">, Record<DirectorBriefFieldId, string>> = {
  nb: {
    sceneTitle: "Scenetittel",
    sceneContext: "Scenekontekst",
    sceneObjective: "Scenemål",
    audienceEffect: "Publikumseffekt",
    conflictTurn: "Konflikt og vending",
    formalStrategy: "Formstrategi",
    blocking: "Blocking",
    performanceDirection: "Skuespillerregi",
    productionDesign: "Produksjonsdesign",
    shotPlan: "Shotplan",
    cameraMovementLenses: "Kamera, bevegelse og optikk",
    lightingPalette: "Lys og palett",
    editingRhythm: "Klipperytme",
    soundStrategy: "Lydstrategi",
    practicalConstraints: "Praktiske begrensninger",
    proofOfIntent: "Bevis på intensjon",
  },
  fr: {
    sceneTitle: "Titre de la scène",
    sceneContext: "Contexte de la scène",
    sceneObjective: "Objectif de la scène",
    audienceEffect: "Effet sur le public",
    conflictTurn: "Conflit et bascule",
    formalStrategy: "Stratégie formelle",
    blocking: "Mise en place",
    performanceDirection: "Direction d’acteurs",
    productionDesign: "Décors et design de production",
    shotPlan: "Plan de plans",
    cameraMovementLenses: "Caméra, mouvement et optiques",
    lightingPalette: "Lumière et palette",
    editingRhythm: "Rythme de montage",
    soundStrategy: "Stratégie sonore",
    practicalConstraints: "Contraintes pratiques",
    proofOfIntent: "Preuve d’intention",
  },
  pt: {
    sceneTitle: "Título da cena",
    sceneContext: "Contexto da cena",
    sceneObjective: "Objetivo da cena",
    audienceEffect: "Efeito no público",
    conflictTurn: "Conflito e viragem",
    formalStrategy: "Estratégia formal",
    blocking: "Marcação",
    performanceDirection: "Direção de atores",
    productionDesign: "Design de produção",
    shotPlan: "Plano de planos",
    cameraMovementLenses: "Câmara, movimento e ótica",
    lightingPalette: "Luz e paleta",
    editingRhythm: "Ritmo de montagem",
    soundStrategy: "Estratégia sonora",
    practicalConstraints: "Restrições práticas",
    proofOfIntent: "Prova de intenção",
  },
};

const languageOptions: readonly { readonly id: FilmWorkLanguage; readonly label: string; readonly ariaLabel: string }[] = [
  { id: "en", label: "EN", ariaLabel: "Use English" },
  { id: "nb", label: "NO", ariaLabel: "Bruk norsk" },
  { id: "fr", label: "FR", ariaLabel: "Utiliser le français" },
  { id: "pt", label: "PT", ariaLabel: "Usar português" },
];

type FilmSchoolOverviewProps = {
  readonly navigate: (route: FilmverketRoute) => void;
  readonly onOpenDirector: (scenario: FilmScenarioSeed) => void;
  readonly onSelectCourse: (courseId: FilmSchoolCourseId) => void;
  readonly scenarios: readonly FilmScenarioSeed[];
};

export function FilmSchoolOverview({ navigate, onOpenDirector, onSelectCourse, scenarios }: FilmSchoolOverviewProps) {
  const [language, setLanguage] = useFilmWorkLanguage();
  const copy = overviewCopy[language];
  const productBrand = language === "nb" ? "Filmverket" : "FilmWork";
  const productMonogram = language === "nb" ? "FV" : "FW";
  const [summary, setSummary] = useState<FilmSchoolGroundCourseSummary>(() => loadSummary());
  const [submission, setSubmission] = useState<FilmSchoolCapstoneSubmission | undefined>(() => loadSubmission());
  const [assignmentFilmId, setAssignmentFilmId] = useState(() => submission?.filmId ?? scenarios[0]?.id ?? "");
  const summaryByCourseId = useMemo(() => new Map(summary.courses.map((course) => [course.courseId, course])), [summary]);
  const navItems: readonly { readonly id: FilmverketSection; readonly label: string }[] = [
    { id: "home", label: copy.homeLabel },
    { id: "producer", label: "Film Producer" },
    { id: "atlas", label: "Film Atlas" },
    { id: "director", label: "Film Director" },
    { id: "school", label: "Film School" },
    { id: "history", label: "Film History" },
    { id: "research", label: "Research" },
  ];

  useEffect(() => {
    document.title = `${copy.foundation} · Film School · ${productBrand}`;
  }, [copy.foundation, productBrand]);

  useEffect(() => {
    const refresh = () => {
      const nextSubmission = loadSubmission();
      setSummary(loadSummary());
      setSubmission(nextSubmission);
      if (nextSubmission) setAssignmentFilmId((current) => current || nextSubmission.filmId);
    };
    window.addEventListener("focus", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("focus", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  function navigateSection(section: FilmverketSection) {
    navigate(routeForSection(section));
  }

  function startCapstone() {
    if (!summary.mastered) return;
    const scenario = scenarios.find((candidate) => candidate.id === assignmentFilmId);
    if (!scenario) return;
    const assignment = createFilmSchoolCapstoneAssignment({
      id: scenario.id,
      title: scenario.film.title,
      year: scenario.film.year,
      slug: createFilmSlug(scenario.film.title, scenario.film.year),
    });
    try {
      window.localStorage.setItem(FILM_SCHOOL_CAPSTONE_ASSIGNMENT_STORAGE_KEY, JSON.stringify(assignment));
    } catch {
      // The Director can still be opened when local storage is unavailable.
    }
    onOpenDirector(scenario);
  }

  function openSubmittedCapstone() {
    if (!submission) return;
    const scenario = scenarios.find((candidate) => candidate.id === submission.filmId);
    if (scenario) onOpenDirector(scenario);
  }

  return (
    <div className="filmverket-shell school-overview-shell">
      <header className="filmverket-header">
        <button className="filmverket-brand" onClick={() => navigate({ section: "home" })} type="button"><span>{productMonogram}</span><strong>{productBrand}</strong></button>
        <nav aria-label={copy.navAria}>
          {navItems.map((item) => <button className={item.id === "school" ? "filmverket-nav-button filmverket-nav-button--active" : "filmverket-nav-button"} key={item.id} onClick={() => navigateSection(item.id)} type="button">{item.label}</button>)}
          {languageOptions.map((option) => <button aria-label={option.ariaLabel} aria-pressed={language === option.id} className={language === option.id ? "filmverket-nav-button filmverket-nav-button--active" : "filmverket-nav-button"} key={option.id} onClick={() => setLanguage(option.id)} type="button">{option.label}</button>)}
        </nav>
      </header>

      <main className="school-overview-page">
        <FilmSchoolCourseNavigation activeCourseId="overview" language={language} onSelectCourse={onSelectCourse} />

        <section className="school-overview-hero">
          <div>
            <span className="filmverket-kicker">Film School · {copy.foundation}</span>
            <h1>{copy.heroStart} <em>{copy.heroEmphasis}</em></h1>
            <p>{copy.heroDescription}</p>
          </div>
          <aside>
            <span>{copy.overallProgress}</span>
            <strong>{summary.completionPercent}<small>%</small></strong>
            <div className="school-overview-progress" aria-label={copy.progressAria(summary.completionPercent)}><span style={{ width: `${summary.completionPercent}%` }} /></div>
            <p>{copy.progressSummary(summary.masteredCourses, FILM_SCHOOL_GROUND_COURSES.length, summary.completedMilestones, summary.totalMilestones)}</p>
            {submission ? <p className="school-overview-completion-line">{copy.examSubmitted} · {formatDate(submission.submittedAt, language)}</p> : null}
          </aside>
        </section>

        <section className="school-overview-course-grid" aria-label={copy.foundation}>
          {FILM_SCHOOL_GROUND_COURSES.map((course) => {
            const courseSummary = summaryByCourseId.get(course.id);
            const complete = courseSummary?.mastered ?? false;
            const display = courseCopy[language][course.id];
            return (
              <article className={complete ? "is-mastered" : ""} key={course.id}>
                <header><span>{course.number}</span><small>{complete ? copy.mastered : `${courseSummary?.completionPercent ?? 0}%`}</small></header>
                <h2>{display.title}</h2>
                <p>{display.summary}</p>
                <div className="school-overview-course-progress"><span style={{ width: `${courseSummary?.completionPercent ?? 0}%` }} /></div>
                <footer>
                  <span>{copy.modulesMastered(courseSummary?.masteredLessons ?? 0, courseSummary?.totalLessons ?? 5)}</span>
                  <button onClick={() => onSelectCourse(course.id as FilmSchoolGroundCourseId)} type="button">{complete ? copy.reopenCourse : copy.continueCourse}</button>
                </footer>
              </article>
            );
          })}
        </section>

        <section className={submission ? "school-capstone is-unlocked is-completed" : summary.mastered ? "school-capstone is-unlocked" : "school-capstone"}>
          <div>
            <span className="filmverket-kicker">{copy.finalExam}</span>
            <h2>{copy.examHeadline}</h2>
            <p>{copy.examDescription}</p>
            <div className="school-capstone-fields">{DIRECTOR_BRIEF_FIELDS.map((field, index) => <span key={field.id}><b>{String(index + 1).padStart(2, "0")}</b>{getDirectorBriefLabel(field, language)}</span>)}</div>
          </div>
          <aside>
            <strong>{submission ? copy.foundationsCompleted : summary.mastered ? copy.foundationCompleted : copy.examLocked}</strong>
            {submission ? (
              <section className="school-capstone-completion">
                <span>{copy.submitted} {formatDateTime(submission.submittedAt, language)}</span>
                <h3>{submission.sceneTitle}</h3>
                <p>{submission.filmYear} · {submission.filmTitle}</p>
                <small>{copy.submissionSummary(submission.briefFieldCount, submission.completeShotCount)}</small>
                <button onClick={openSubmittedCapstone} type="button">{copy.openSubmittedExam}</button>
              </section>
            ) : <p>{summary.mastered ? copy.chooseReference : copy.remainingCourses(FILM_SCHOOL_GROUND_COURSES.length - summary.masteredCourses)}</p>}
            <label>
              <span>{submission ? copy.newOrUpdatedExam : copy.chooseReferenceFilm}</span>
              <select disabled={!summary.mastered} onChange={(event: ChangeEvent<HTMLSelectElement>) => setAssignmentFilmId(event.target.value)} value={assignmentFilmId}>
                {scenarios.map((scenario) => <option key={scenario.id} value={scenario.id}>{scenario.film.year} · {scenario.film.title}</option>)}
              </select>
            </label>
            <button className="filmverket-primary-action" disabled={!summary.mastered || !assignmentFilmId} onClick={startCapstone} type="button">{submission ? copy.openNewExam : copy.startExam}</button>
          </aside>
        </section>
      </main>

      <footer className="filmverket-footer"><span>{productBrand} · Film School</span><span>{copy.footerFlow}</span></footer>
    </div>
  );
}

function getDirectorBriefLabel(field: (typeof DIRECTOR_BRIEF_FIELDS)[number], language: FilmWorkLanguage): string {
  return language === "en" ? field.label : localizedDirectorBriefLabels[language][field.id];
}

function loadSummary(): FilmSchoolGroundCourseSummary {
  const values: Partial<Record<FilmSchoolGroundCourseId, unknown>> = {};
  for (const course of FILM_SCHOOL_GROUND_COURSES) {
    try {
      values[course.id] = JSON.parse(window.localStorage.getItem(course.progressStorageKey) ?? "null") as unknown;
    } catch {
      values[course.id] = undefined;
    }
  }
  return summarizeFilmSchoolGroundCourse(values);
}

function loadSubmission(): FilmSchoolCapstoneSubmission | undefined {
  try {
    return coerceFilmSchoolCapstoneSubmission(JSON.parse(window.localStorage.getItem(FILM_SCHOOL_CAPSTONE_SUBMISSION_STORAGE_KEY) ?? "null") as unknown);
  } catch {
    return undefined;
  }
}

function formatDate(value: string, language: FilmWorkLanguage): string {
  const timestamp = Date.parse(value);
  return Number.isFinite(timestamp) ? new Intl.DateTimeFormat(getFilmWorkIntlLocale(language), { dateStyle: "medium" }).format(new Date(timestamp)) : value;
}

function formatDateTime(value: string, language: FilmWorkLanguage): string {
  const timestamp = Date.parse(value);
  return Number.isFinite(timestamp) ? new Intl.DateTimeFormat(getFilmWorkIntlLocale(language), { dateStyle: "medium", timeStyle: "short" }).format(new Date(timestamp)) : value;
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
import { DIRECTOR_BRIEF_FIELDS, type DirectorBriefFieldId } from "./directorBrief.js";
import { getDirectorTerm, type DirectorTerm } from "./directorKnowledge.js";

export const PERFORMANCE_COURSE_ID = "director_performance_blocking";
export const PERFORMANCE_COURSE_PROGRESS_STORAGE_KEY = "hg_film_school_performance_blocking_course_v1";
export const PERFORMANCE_DIRECTOR_ASSIGNMENT_STORAGE_KEY = "hg_film_school_performance_assignment_v1";

export type PerformanceCourseMasteryStage = "not_started" | "seen" | "understood" | "used" | "mastered";

export type PerformanceCourseQuiz = {
  readonly question: string;
  readonly options: readonly string[];
  readonly correctIndex: number;
  readonly explanation: string;
};

export type PerformanceCourseFilmReference = {
  readonly title: string;
  readonly year: number;
  readonly analysisQuestion: string;
};

export type PerformanceCourseLesson = {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly summary: string;
  readonly principle: string;
  readonly termIds: readonly string[];
  readonly film: PerformanceCourseFilmReference;
  readonly practicePrompt: string;
  readonly checklist: readonly string[];
  readonly quiz: PerformanceCourseQuiz;
};

export const PERFORMANCE_COURSE_LESSONS: readonly PerformanceCourseLesson[] = [
  {
    id: "circumstances_intention",
    number: "01",
    title: "Omstendigheter, mål og hensikt",
    summary: "Gi skuespilleren konkrete fakta og et tydelig forsøk i stedet for en generell stemning.",
    principle: "Prestasjonen blir spillbar når skuespilleren vet hva som allerede er sant, hva karakteren vil oppnå og hva karakteren forsøker å gjøre med partneren akkurat nå.",
    termIds: ["given_circumstances", "scene_objective", "intention", "playable_action"],
    film: {
      title: "Kes",
      year: 1969,
      analysisQuestion: "Hvordan gjør miljø, sosial posisjon og konkrete behov guttens handlinger tydelige uten at filmen forklarer følelsene hans?",
    },
    practicePrompt: "Skriv fem gitte omstendigheter for en scene. Formuler deretter scenemålet som «X vil få Y til å …» og velg ett aktivt verb for karakterens første hensikt.",
    checklist: [
      "Faktaene kan observeres eller utledes fra manus.",
      "Målet kan lykkes eller mislykkes i scenen.",
      "Hensikten er formulert som noe karakteren gjør mot partneren.",
    ],
    quiz: {
      question: "Hvilken beskjed gir skuespilleren mest spillbart materiale?",
      options: [
        "Vær mer ensom.",
        "Gjør scenen mørkere.",
        "Få læreren til å la deg gå uten å avsløre hvorfor.",
        "Vis publikum at du er redd.",
      ],
      correctIndex: 2,
      explanation: "En konkret handling mot en partner kan prøves, mislykkes og justeres. En følelsesetikett beskriver bare et ønsket resultat.",
    },
  },
  {
    id: "playable_action_listening",
    number: "02",
    title: "Spillbar handling, undertekst og lytting",
    summary: "La responsen oppstå fra partneren i stedet for å låse replikken til en forhåndsbestemt levering.",
    principle: "Regissøren kan styre underteksten gjennom aktive verb og omstendigheter, men prestasjonen må fortsatt motta og reagere på det som faktisk skjer i tagningen.",
    termIds: ["playable_action", "subtext", "listening", "intention"],
    film: {
      title: "Naked",
      year: 1993,
      analysisQuestion: "Hvordan skifter karakterene taktikk gjennom lytting, provokasjon og forsvar mens replikkene skjuler andre behov?",
    },
    practicePrompt: "Velg seks replikker fra en dialogscene. Skriv ett aktivt verb over hvert beat, og beskriv hva karakteren må høre eller se hos partneren før taktikken endres.",
    checklist: [
      "Verbvalgene kan rettes mot partneren.",
      "Minst ett beat endrer handling på grunn av lytting.",
      "Underteksten er tydelig uten at skuespilleren må demonstrere den direkte.",
    ],
    quiz: {
      question: "Hva er aktiv lytting i en filmtagning?",
      options: [
        "Å vente på sin egen replikk med riktig ansiktsuttrykk.",
        "Å motta partnerens handling slik at responsen kan oppstå i øyeblikket.",
        "Å spille svakere enn motspilleren.",
        "Å unngå pauser i dialogen.",
      ],
      correctIndex: 1,
      explanation: "Lytting er en aktiv mottakelse av partnerens handling, ikke bare teknisk venting på neste replikk.",
    },
  },
  {
    id: "blocking_power_movement",
    number: "03",
    title: "Blocking, makt og motivert bevegelse",
    summary: "Organiser kropper og bevegelser slik at rommet uttrykker handling, press og skiftende relasjoner.",
    principle: "Blocking er dramatisk når bevegelsen springer ut av karakterens behov og endrer avstand, tilgang, dominans eller publikums informasjon.",
    termIds: ["blocking", "staging", "motivated_movement", "business", "cross"],
    film: {
      title: "Hunger",
      year: 2008,
      analysisQuestion: "Hvordan bruker filmen avstand, stillhet, kropp og plassering til å gjøre ideologisk og fysisk makt synlig?",
    },
    practicePrompt: "Tegn et enkelt rom ovenfra. Plasser to karakterer og én viktig gjenstand. Planlegg tre motiverte bevegelser som endrer makt eller tilgang, og skriv hvorfor hver bevegelse skjer akkurat da.",
    checklist: [
      "Hver bevegelse har en årsak i handlingen.",
      "Avstand eller maktforhold endres minst én gang.",
      "Fysisk aktivitet støtter scenen uten å bli tilfeldig travelhet.",
    ],
    quiz: {
      question: "Når er en bevegelse motivert?",
      options: [
        "Når skuespilleren flyttes fordi bildet ellers blir tomt.",
        "Når bevegelsen springer ut av karakterens handling, informasjon eller situasjon.",
        "Når kameraet samtidig beveger seg.",
        "Når den står i shotlisten.",
      ],
      correctIndex: 1,
      explanation: "Produksjonen kan tilpasse blocking, men publikumsopplevelsen styrkes når bevegelsen har en lesbar dramatisk årsak.",
    },
  },
  {
    id: "eyeline_marks_camera",
    number: "04",
    title: "Blikk, marks og forholdet til kamera",
    summary: "Bevar prestasjonens troverdighet samtidig som blikk, fokus, lys og skjermretning fungerer teknisk.",
    principle: "Presis filmblocking krever at regissøren forener skuespillerens oppmerksomhet med kameraets geometri uten at teknikken blir synlig som teknikk.",
    termIds: ["eyeline", "mark", "cheat", "axis_of_action", "screen_direction"],
    film: {
      title: "4 Months, 3 Weeks and 2 Days",
      year: 2007,
      analysisQuestion: "Hvordan holder lange bilder rom, blikk og kroppslig press tydelig mens karakterene må forholde seg til flere samtidige krav?",
    },
    practicePrompt: "Planlegg en samtale med tre personer. Marker handlingsakse, blikkretninger og to gulvmerker. Beskriv én liten cheat som hjelper kameraet uten å endre karakterens hensikt.",
    checklist: [
      "Publikum kan forstå hvem som ser på hvem.",
      "Marks er knyttet til handling i stedet for mekanisk stopp.",
      "En eventuell cheat bevarer relasjonen og prestasjonen.",
    ],
    quiz: {
      question: "Hva er en cheat i blocking?",
      options: [
        "En feil som skjules i klippen.",
        "En liten justering av kropp eller gjenstand for kameraets behov.",
        "En improvisert replikk.",
        "Et brudd på opptaksplanen.",
      ],
      correctIndex: 1,
      explanation: "En cheat justerer plasseringen diskret slik at ansikt, lys, fokus eller komposisjon fungerer uten at rommet oppleves endret.",
    },
  },
  {
    id: "rehearsal_adjustment_continuity",
    number: "05",
    title: "Prøve, justering og kontinuitet mellom tagninger",
    summary: "Bruk prøven til å finne scenen, og bruk tagningene til å forbedre én konkret ting om gangen.",
    principle: "En god justering beskriver hva som skal gjøres annerledes og når, samtidig som regissøren beskytter scenens emosjonelle bue og kontinuitet.",
    termIds: ["rehearsal", "adjustment", "take", "continuity", "emotional_arc", "print_take"],
    film: {
      title: "The Banshees of Inisherin",
      year: 2022,
      analysisQuestion: "Hvordan bevarer prestasjonene en tydelig emosjonell utvikling gjennom gjentatte møter, små taktiske skift og presise reaksjoner?",
    },
    practicePrompt: "Beskriv tre tagninger av samme scene. Tagning 1 kartlegger handlingen. Gi deretter én konkret justering til tagning 2 og én ny justering til tagning 3. Skriv hva som må være kontinuerlig gjennom alle tre.",
    checklist: [
      "Hver justering endrer bare ett tydelig forhold.",
      "Beskjeden sier hva skuespilleren skal gjøre, ikke hvilken følelse som skal vises.",
      "Den emosjonelle buen og nødvendige kontinuiteten er dokumentert.",
    ],
    quiz: {
      question: "Hvilken justering er mest presis mellom to tagninger?",
      options: [
        "Mer energi.",
        "Vær mindre teatralsk.",
        "Neste gang venter du til hun tar nøkkelen før du prøver å stanse henne.",
        "Gjør det bedre, men behold følelsen.",
      ],
      correctIndex: 2,
      explanation: "Beskjeden endrer tidspunkt og handling konkret. Skuespilleren kan utføre den uten å måtte tolke en vag kvalitetsdom.",
    },
  },
];

export type PerformanceCourseProgress = {
  readonly version: 1;
  readonly activeLessonId: string;
  readonly seenLessonIds: readonly string[];
  readonly understoodLessonIds: readonly string[];
  readonly usedLessonIds: readonly string[];
  readonly notesByLessonId: Readonly<Record<string, string>>;
  readonly updatedAt: string;
};

export type PerformanceDirectorAssignment = {
  readonly version: 1;
  readonly courseId: typeof PERFORMANCE_COURSE_ID;
  readonly filmId: string;
  readonly filmTitle: string;
  readonly filmYear: number;
  readonly filmSlug: string;
  readonly title: string;
  readonly prompt: string;
  readonly fieldIds: readonly DirectorBriefFieldId[];
  readonly createdAt: string;
};

export const PERFORMANCE_DIRECTOR_ASSIGNMENT_FIELDS: readonly DirectorBriefFieldId[] = [
  "sceneObjective",
  "performanceDirection",
  "blocking",
  "shotPlan",
  "proofOfIntent",
];

export function createBlankPerformanceCourseProgress(now = new Date().toISOString()): PerformanceCourseProgress {
  return {
    version: 1,
    activeLessonId: PERFORMANCE_COURSE_LESSONS[0]?.id ?? "",
    seenLessonIds: [],
    understoodLessonIds: [],
    usedLessonIds: [],
    notesByLessonId: {},
    updatedAt: now,
  };
}

export function coercePerformanceCourseProgress(value: unknown, now = new Date().toISOString()): PerformanceCourseProgress {
  if (!isRecord(value)) return createBlankPerformanceCourseProgress(now);
  const validIds = new Set(PERFORMANCE_COURSE_LESSONS.map((lesson) => lesson.id));
  const activeLessonId = typeof value.activeLessonId === "string" && validIds.has(value.activeLessonId)
    ? value.activeLessonId
    : PERFORMANCE_COURSE_LESSONS[0]?.id ?? "";
  const notesByLessonId: Record<string, string> = {};
  if (isRecord(value.notesByLessonId)) {
    for (const lessonId of validIds) {
      const note = value.notesByLessonId[lessonId];
      if (typeof note === "string") notesByLessonId[lessonId] = note;
    }
  }
  return {
    version: 1,
    activeLessonId,
    seenLessonIds: validLessonIds(value.seenLessonIds, validIds),
    understoodLessonIds: validLessonIds(value.understoodLessonIds, validIds),
    usedLessonIds: validLessonIds(value.usedLessonIds, validIds),
    notesByLessonId,
    updatedAt: typeof value.updatedAt === "string" ? value.updatedAt : now,
  };
}

export function getPerformanceCourseLessonTerms(lesson: PerformanceCourseLesson): readonly DirectorTerm[] {
  return lesson.termIds.map((termId) => getDirectorTerm(termId)).filter((term): term is DirectorTerm => Boolean(term));
}

export function isPerformanceCourseQuizAnswerCorrect(lesson: PerformanceCourseLesson, answerIndex: number): boolean {
  return Number.isInteger(answerIndex) && answerIndex === lesson.quiz.correctIndex;
}

export function getPerformanceLessonMasteryStage(
  progress: PerformanceCourseProgress,
  lessonId: string,
): PerformanceCourseMasteryStage {
  const seen = progress.seenLessonIds.includes(lessonId);
  const understood = progress.understoodLessonIds.includes(lessonId);
  const used = progress.usedLessonIds.includes(lessonId);
  if (seen && understood && used) return "mastered";
  if (used) return "used";
  if (understood) return "understood";
  if (seen) return "seen";
  return "not_started";
}

export function countPerformanceCourseMilestones(progress: PerformanceCourseProgress): number {
  return PERFORMANCE_COURSE_LESSONS.reduce((count, lesson) => (
    count
    + Number(progress.seenLessonIds.includes(lesson.id))
    + Number(progress.understoodLessonIds.includes(lesson.id))
    + Number(progress.usedLessonIds.includes(lesson.id))
  ), 0);
}

export function getPerformanceCourseCompletionPercent(progress: PerformanceCourseProgress): number {
  const possible = PERFORMANCE_COURSE_LESSONS.length * 3;
  return possible > 0 ? Math.round((countPerformanceCourseMilestones(progress) / possible) * 100) : 0;
}

export function isPerformanceCourseMastered(progress: PerformanceCourseProgress): boolean {
  return PERFORMANCE_COURSE_LESSONS.every((lesson) => getPerformanceLessonMasteryStage(progress, lesson.id) === "mastered");
}

export function createPerformanceDirectorAssignment(
  film: { readonly id: string; readonly title: string; readonly year: number; readonly slug: string },
  now = new Date().toISOString(),
): PerformanceDirectorAssignment {
  return {
    version: 1,
    courseId: PERFORMANCE_COURSE_ID,
    filmId: film.id,
    filmTitle: film.title,
    filmYear: film.year,
    filmSlug: film.slug,
    title: "Avsluttende regioppgave: skuespillerregi og blocking",
    prompt: "Planlegg én scene der karakterens mål, spillbare handling, lytting, blocking og justering mellom tagninger virker sammen. Bruk de fem markerte Director-feltene som leveranse.",
    fieldIds: PERFORMANCE_DIRECTOR_ASSIGNMENT_FIELDS,
    createdAt: now,
  };
}

export function getPerformanceDirectorAssignmentFieldLabels(): readonly string[] {
  return PERFORMANCE_DIRECTOR_ASSIGNMENT_FIELDS.map((fieldId) => (
    DIRECTOR_BRIEF_FIELDS.find((field) => field.id === fieldId)?.label ?? fieldId
  ));
}

function validLessonIds(value: unknown, validIds: ReadonlySet<string>): readonly string[] {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.filter((candidate): candidate is string => typeof candidate === "string" && validIds.has(candidate)))];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

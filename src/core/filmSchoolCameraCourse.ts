import { DIRECTOR_BRIEF_FIELDS, type DirectorBriefFieldId } from "./directorBrief.js";
import { getDirectorTerm, type DirectorTerm } from "./directorKnowledge.js";

export const CAMERA_COURSE_ID = "director_camera_optics";
export const CAMERA_COURSE_PROGRESS_STORAGE_KEY = "hg_film_school_camera_optics_course_v1";
export const CAMERA_DIRECTOR_ASSIGNMENT_STORAGE_KEY = "hg_film_school_camera_assignment_v1";

export type CameraCourseMasteryStage = "not_started" | "seen" | "understood" | "used" | "mastered";

export type CameraCourseQuiz = {
  readonly question: string;
  readonly options: readonly string[];
  readonly correctIndex: number;
  readonly explanation: string;
};

export type CameraCourseFilmReference = {
  readonly title: string;
  readonly year: number;
  readonly analysisQuestion: string;
};

export type CameraCourseLesson = {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly summary: string;
  readonly principle: string;
  readonly termIds: readonly string[];
  readonly film: CameraCourseFilmReference;
  readonly practicePrompt: string;
  readonly checklist: readonly string[];
  readonly quiz: CameraCourseQuiz;
};

export const CAMERA_COURSE_LESSONS: readonly CameraCourseLesson[] = [
  {
    id: "shot_size_composition",
    number: "01",
    title: "Bildeutsnitt, komposisjon og dramatisk funksjon",
    summary: "Velg hvor mye publikum skal se, hva som skal dominere og når et nytt utsnitt faktisk endrer scenen.",
    principle: "Et bildeutsnitt er ikke bare en størrelse. Det fordeler informasjon, nærhet og oppmerksomhet, og må derfor ha en konkret dramatisk funksjon i scenens utvikling.",
    termIds: ["shot_size", "wide_shot", "medium_shot", "close_up", "two_shot", "dramatic_purpose"],
    film: {
      title: "The Spirit of the Beehive",
      year: 1973,
      analysisQuestion: "Hvordan bruker filmen avstand, tomrom og tilbakeholdne nærbilder til å organisere barnets oppmerksomhet og publikums usikkerhet?",
    },
    practicePrompt: "Planlegg fire bilder av samme dramatiske øyeblikk: total, to-shot, halvnært og nærbilde. Skriv hvilken ny informasjon eller følelsesmessig endring hvert bilde må levere.",
    checklist: [
      "Hvert utsnitt har en egen dramatisk funksjon.",
      "Komposisjonen viser tydelig hva publikum skal oppdage først.",
      "Nærbildet brukes ved en faktisk endring, ikke automatisk ved viktig dialog.",
    ],
    quiz: {
      question: "Hva er den beste begrunnelsen for å gå til et nærbilde?",
      options: [
        "Scenen har vart lenge nok i totalbildet.",
        "Nærbildet gjør produksjonen mer filmatisk.",
        "Bildet viser en avgjørende oppdagelse som ikke kan leses like presist i det videre utsnittet.",
        "Alle dialogscener trenger minst ett nærbilde.",
      ],
      correctIndex: 2,
      explanation: "Et utsnitt bør velges ut fra hva publikum må erfare eller forstå akkurat da, ikke fra en mekanisk dekningsregel.",
    },
  },
  {
    id: "camera_position_perspective",
    number: "02",
    title: "Kameraposisjon, perspektiv og rom",
    summary: "Forstå hvordan avstand, høyde, retning og optisk perspektiv bestemmer forholdet mellom publikum, karakter og miljø.",
    principle: "Kameraets fysiske plassering avgjør perspektivet. Regissøren må skille mellom å flytte kameraet og å endre brennvidde, fordi valgene former rom og relasjon på forskjellige måter.",
    termIds: ["focal_length", "angle_of_view", "sensor_size", "lens_distortion", "axis_of_action", "screen_direction"],
    film: {
      title: "Ashes and Diamonds",
      year: 1958,
      analysisQuestion: "Hvordan gjør skiftende kameraposisjoner og romlige lag den historiske konflikten personlig, ustabil og fysisk nær?",
    },
    practicePrompt: "Tegn samme to-personscene fra tre kameraposisjoner: nær aksen, vinkelrett på relasjonen og langt tilbake i rommet. Beskriv hvordan hvert ståsted endrer makt, nærhet og bakgrunn.",
    checklist: [
      "Kameraposisjonen er begrunnet i publikums forhold til handlingen.",
      "Forskjellen mellom fysisk avstand og brennvidde er beskrevet.",
      "Handlingsakse og skjermretning er kontrollert eller bevisst brutt.",
    ],
    quiz: {
      question: "Hva skjer når kameraet flyttes nærmere motivet og et videre objektiv brukes for å beholde omtrent samme utsnitt?",
      options: [
        "Perspektivet blir identisk fordi utsnittet er likt.",
        "Rommet og avstandsforholdene oppleves mer utstrakt, og nær–fjern-forskjeller blir tydeligere.",
        "Bare eksponeringen endres.",
        "Bakgrunnen blir alltid skarpere.",
      ],
      correctIndex: 1,
      explanation: "Perspektiv styres av kameraets plassering. Et videre objektiv på kortere avstand fremhever nær–fjern-forhold selv når motivstørrelsen ligner.",
    },
  },
  {
    id: "lenses_depth",
    number: "03",
    title: "Brennvidde, objektivvalg og dybdeskarphet",
    summary: "Velg optikk etter hvordan rom, ansikter, bakgrunn og samtidig handling skal oppleves.",
    principle: "Objektivvalg er en del av iscenesettelsen. Brennvidde, kameraavstand, blender og fokus må planlegges sammen fordi de bestemmer både perspektiv og hvor mye av rommet som kan leses samtidig.",
    termIds: ["prime_lens", "zoom_lens", "depth_of_field", "shallow_focus", "deep_focus", "aperture"],
    film: {
      title: "Hunger",
      year: 2008,
      analysisQuestion: "Hvordan bruker filmen presise romlige avstander, skarphetsplan og tilbakeholdt optikk til å gjøre kropp, institusjon og makt samtidig lesbart?",
    },
    practicePrompt: "Lag to optiske versjoner av samme scene. Versjon A bruker stor dybdeskarphet og samtidig handling i forgrunn og bakgrunn. Versjon B isolerer én karakter med grunn dybdeskarphet. Forklar hvilken versjon som best uttrykker scenens hensikt.",
    checklist: [
      "Objektivvalget beskriver romopplevelse, ikke bare et millimetertall.",
      "Dybdeskarpheten er knyttet til hvor mye publikum skal kunne lese samtidig.",
      "Kameraavstand, blender og fokus er vurdert som ett system.",
    ],
    quiz: {
      question: "Hva er den viktigste dramatiske forskjellen mellom shallow focus og deep focus?",
      options: [
        "Shallow focus brukes bare i nærbilder, deep focus bare i totalbilder.",
        "Shallow focus begrenser lesbar oppmerksomhet til et smalere plan, mens deep focus kan holde flere dybdeplan meningsfulle samtidig.",
        "Deep focus krever alltid zoomobjektiv.",
        "Shallow focus gjør automatisk prestasjonen sterkere.",
      ],
      correctIndex: 1,
      explanation: "Skarphetsområdet styrer hvilken samtidig informasjon publikum kan lese. Det er et fortellervalg, ikke bare en estetisk effekt.",
    },
  },
  {
    id: "camera_movement",
    number: "04",
    title: "Kamerabevegelse og motivasjon",
    summary: "Bestem når kameraet skal rotere, flyttes, bæres eller stå stille, og hva bevegelsen forandrer for publikum.",
    principle: "Kamerabevegelse blir meningsfull når den svarer på handling, avslører rom, endrer perspektiv eller flytter publikums oppmerksomhet. Bevegelse uten funksjon blir bare generell energi.",
    termIds: ["pan", "tilt", "dolly", "truck", "handheld", "steadicam"],
    film: {
      title: "4 Months, 3 Weeks and 2 Days",
      year: 2007,
      analysisQuestion: "Hvordan skaper kombinasjonen av tilbakeholdt kamera, lange observasjoner og presise forflytninger et vedvarende praktisk og moralsk press?",
    },
    practicePrompt: "Planlegg én scene i tre versjoner: statisk kamera, en dollybevegelse og håndholdt kamera. Beskriv nøyaktig når bevegelsen begynner, hva den følger eller avslører, og hvorfor én versjon er riktigst.",
    checklist: [
      "Bevegelsen starter på en konkret dramatisk impuls.",
      "Det er tydelig om kameraet roterer eller fysisk flytter perspektivet.",
      "Valget mellom statisk, stabilisert og håndholdt uttrykk er begrunnet.",
    ],
    quiz: {
      question: "Hva skiller en dollybevegelse fra en zoom?",
      options: [
        "En dolly kan bare gå fremover.",
        "En zoom endrer perspektivet, mens en dolly bare endrer utsnittet.",
        "En dolly flytter kameraets fysiske posisjon og endrer perspektivet; en zoom endrer brennvidde fra samme posisjon.",
        "Det er ingen synlig forskjell dersom motivet beholder samme størrelse.",
      ],
      correctIndex: 2,
      explanation: "Fysisk kameraforflytning endrer perspektiv og forholdet mellom dybdeplan. Zoom endrer bildevinkel uten å flytte ståstedet.",
    },
  },
  {
    id: "focus_attention",
    number: "05",
    title: "Fokus, oppmerksomhet og shotplan",
    summary: "Planlegg hvor blikket skal ligge gjennom bildet, og bruk fokusskift bare når oppmerksomheten faktisk må flyttes.",
    principle: "Fokus er en fortellende prioritering. Et fokusdrag eller rack focus bør være timet til en oppdagelse, reaksjon eller endring i dybden og må inngå i en gjennomførbar shotplan.",
    termIds: ["focus_pull", "rack_focus", "eyeline", "reaction_shot", "shot_list", "camera_test"],
    film: {
      title: "Kes",
      year: 1969,
      analysisQuestion: "Hvordan holder filmen oppmerksomheten på gutten og omgivelsene gjennom naturlistiske utsnitt, responsiv fotografering og presise reaksjonsbilder?",
    },
    practicePrompt: "Skriv en shotplan på fem bilder med utsnitt, kameraposisjon, objektivfamilie og fokusprioritet. Minst ett bilde skal flytte fokus mellom to dybdeplan ved et bestemt dramatisk øyeblikk.",
    checklist: [
      "Hvert bilde har definert dramatisk funksjon og fokusmotiv.",
      "Fokusskiftet skjer på en konkret informasjons- eller reaksjonsendring.",
      "Planen kan testes praktisk med blocking, eyelines og valgt optikk.",
    ],
    quiz: {
      question: "Når er et rack focus mest begrunnet?",
      options: [
        "Når bildet har vart mer enn fem sekunder.",
        "Når fokusflyttingen overfører publikums oppmerksomhet til ny dramatisk informasjon i et annet dybdeplan.",
        "Når bakgrunnen er visuelt pen.",
        "Når produksjonen vil unngå et klipp uansett grunn.",
      ],
      correctIndex: 1,
      explanation: "Et markert fokusskift bør utføre en tydelig informasjons- eller oppmerksomhetsendring, ikke bare demonstrere teknikken.",
    },
  },
];

export type CameraCourseProgress = {
  readonly version: 1;
  readonly activeLessonId: string;
  readonly seenLessonIds: readonly string[];
  readonly understoodLessonIds: readonly string[];
  readonly usedLessonIds: readonly string[];
  readonly notesByLessonId: Readonly<Record<string, string>>;
  readonly updatedAt: string;
};

export type CameraDirectorAssignment = {
  readonly version: 1;
  readonly courseId: typeof CAMERA_COURSE_ID;
  readonly filmId: string;
  readonly filmTitle: string;
  readonly filmYear: number;
  readonly filmSlug: string;
  readonly title: string;
  readonly prompt: string;
  readonly fieldIds: readonly DirectorBriefFieldId[];
  readonly createdAt: string;
};

export const CAMERA_DIRECTOR_ASSIGNMENT_FIELDS: readonly DirectorBriefFieldId[] = [
  "audienceEffect",
  "formalStrategy",
  "shotPlan",
  "cameraMovementLenses",
  "proofOfIntent",
];

export function createBlankCameraCourseProgress(now = new Date().toISOString()): CameraCourseProgress {
  return {
    version: 1,
    activeLessonId: CAMERA_COURSE_LESSONS[0]?.id ?? "",
    seenLessonIds: [],
    understoodLessonIds: [],
    usedLessonIds: [],
    notesByLessonId: {},
    updatedAt: now,
  };
}

export function coerceCameraCourseProgress(value: unknown, now = new Date().toISOString()): CameraCourseProgress {
  if (!isRecord(value)) return createBlankCameraCourseProgress(now);
  const validIds = new Set(CAMERA_COURSE_LESSONS.map((lesson) => lesson.id));
  const activeLessonId = typeof value.activeLessonId === "string" && validIds.has(value.activeLessonId)
    ? value.activeLessonId
    : CAMERA_COURSE_LESSONS[0]?.id ?? "";
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

export function getCameraCourseLessonTerms(lesson: CameraCourseLesson): readonly DirectorTerm[] {
  return lesson.termIds.map((termId) => getDirectorTerm(termId)).filter((term): term is DirectorTerm => Boolean(term));
}

export function isCameraCourseQuizAnswerCorrect(lesson: CameraCourseLesson, answerIndex: number): boolean {
  return Number.isInteger(answerIndex) && answerIndex === lesson.quiz.correctIndex;
}

export function getCameraLessonMasteryStage(
  progress: CameraCourseProgress,
  lessonId: string,
): CameraCourseMasteryStage {
  const seen = progress.seenLessonIds.includes(lessonId);
  const understood = progress.understoodLessonIds.includes(lessonId);
  const used = progress.usedLessonIds.includes(lessonId);
  if (seen && understood && used) return "mastered";
  if (used) return "used";
  if (understood) return "understood";
  if (seen) return "seen";
  return "not_started";
}

export function countCameraCourseMilestones(progress: CameraCourseProgress): number {
  return CAMERA_COURSE_LESSONS.reduce((count, lesson) => (
    count
    + Number(progress.seenLessonIds.includes(lesson.id))
    + Number(progress.understoodLessonIds.includes(lesson.id))
    + Number(progress.usedLessonIds.includes(lesson.id))
  ), 0);
}

export function getCameraCourseCompletionPercent(progress: CameraCourseProgress): number {
  const possible = CAMERA_COURSE_LESSONS.length * 3;
  return possible > 0 ? Math.round((countCameraCourseMilestones(progress) / possible) * 100) : 0;
}

export function isCameraCourseMastered(progress: CameraCourseProgress): boolean {
  return CAMERA_COURSE_LESSONS.every((lesson) => getCameraLessonMasteryStage(progress, lesson.id) === "mastered");
}

export function createCameraDirectorAssignment(
  film: { readonly id: string; readonly title: string; readonly year: number; readonly slug: string },
  now = new Date().toISOString(),
): CameraDirectorAssignment {
  return {
    version: 1,
    courseId: CAMERA_COURSE_ID,
    filmId: film.id,
    filmTitle: film.title,
    filmYear: film.year,
    filmSlug: film.slug,
    title: "Avsluttende regioppgave: bilde, kamera og optikk",
    prompt: "Planlegg én scene der utsnitt, kameraposisjon, optikk, bevegelse og fokus styres av scenens dramatiske utvikling. Bruk de fem markerte Director-feltene som leveranse.",
    fieldIds: CAMERA_DIRECTOR_ASSIGNMENT_FIELDS,
    createdAt: now,
  };
}

export function getCameraDirectorAssignmentFieldLabels(): readonly string[] {
  return CAMERA_DIRECTOR_ASSIGNMENT_FIELDS.map((fieldId) => (
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

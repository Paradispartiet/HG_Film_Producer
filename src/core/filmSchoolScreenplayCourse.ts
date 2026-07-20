import { DIRECTOR_BRIEF_FIELDS, type DirectorBriefFieldId } from "./directorBrief.js";
import { getDirectorTerm, type DirectorTerm } from "./directorKnowledge.js";

export const SCREENPLAY_COURSE_ID = "director_screenplay_scene_analysis";
export const SCREENPLAY_COURSE_PROGRESS_STORAGE_KEY = "hg_film_school_screenplay_course_v1";
export const SCREENPLAY_DIRECTOR_ASSIGNMENT_STORAGE_KEY = "hg_film_school_director_assignment_v1";

export type ScreenplayCourseMasteryStage = "not_started" | "seen" | "understood" | "used" | "mastered";

export type ScreenplayCourseQuiz = {
  readonly question: string;
  readonly options: readonly string[];
  readonly correctIndex: number;
  readonly explanation: string;
};

export type ScreenplayCourseFilmReference = {
  readonly title: string;
  readonly year: number;
  readonly analysisQuestion: string;
};

export type ScreenplayCourseLesson = {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly summary: string;
  readonly principle: string;
  readonly termIds: readonly string[];
  readonly film: ScreenplayCourseFilmReference;
  readonly practicePrompt: string;
  readonly checklist: readonly string[];
  readonly quiz: ScreenplayCourseQuiz;
};

export const SCREENPLAY_COURSE_LESSONS: readonly ScreenplayCourseLesson[] = [
  {
    id: "context_point_of_view",
    number: "01",
    title: "Kontekst, informasjon og synsvinkel",
    summary: "Bestem hva som allerede er sant, hva publikum vet og hvem scenen oppleves gjennom.",
    principle: "En scene begynner før første replikk. Regissøren må forstå de gitte omstendighetene og styre publikums tilgang til informasjon.",
    termIds: ["point_of_view", "given_circumstances", "exposition"],
    film: {
      title: "The Spirit of the Beehive",
      year: 1973,
      analysisQuestion: "Hvordan begrenser filmen informasjon slik at barnets opplevelse blir publikums vei inn i verden?",
    },
    practicePrompt: "Skriv fire setninger: hva har skjedd før scenen, hva vet hovedpersonen, hva vet publikum, og hvilken avgjørende informasjon holdes tilbake?",
    checklist: [
      "Tid, sted og relasjon er konkretisert.",
      "Publikums kunnskap er skilt fra karakterens kunnskap.",
      "Eksposisjon er knyttet til handling i stedet for forklaring alene.",
    ],
    quiz: {
      question: "Hva beskriver scenens point of view mest presist?",
      options: [
        "Hvilket objektiv fotografen bruker.",
        "Hvem eller hva publikums kunnskap og opplevelse organiseres rundt.",
        "Hvor mange karakterer som står i bildet.",
        "Om scenen er filmet kronologisk.",
      ],
      correctIndex: 1,
      explanation: "Synsvinkel handler om tilgang til erfaring og informasjon, ikke bare fysisk kameravinkel.",
    },
  },
  {
    id: "objective_obstacle_stakes",
    number: "02",
    title: "Mål, hindring og innsats",
    summary: "Gjør scenen spillbar ved å definere hva noen forsøker å oppnå, hva som stopper dem og hva et nederlag koster.",
    principle: "Dramatisk press oppstår når et konkret mål møter aktiv motstand under meningsfulle konsekvenser.",
    termIds: ["scene_objective", "obstacle", "conflict", "stakes"],
    film: {
      title: "Ashes and Diamonds",
      year: 1958,
      analysisQuestion: "Hvordan gjør et konkret oppdrag og et historisk tidspress hovedpersonens private tvil dramatisk spillbar?",
    },
    practicePrompt: "Formuler scenemålet som et aktivt resultat: «X vil få Y til å …». Legg deretter til hindringen og den konkrete konsekvensen av å mislykkes.",
    checklist: [
      "Målet kan lykkes eller mislykkes i scenen.",
      "Hindringen handler aktivt mot målet.",
      "Det som står på spill er konkret, ikke bare en generell følelse.",
    ],
    quiz: {
      question: "Hvilken formulering er et spillbart scenemål?",
      options: [
        "Hun er trist.",
        "Han føler press.",
        "Hun vil få broren til å bli i rommet.",
        "Scenen skal være intens.",
      ],
      correctIndex: 2,
      explanation: "Et scenemål beskriver et resultat karakteren aktivt forsøker å skape i møte med noen eller noe.",
    },
  },
  {
    id: "beats_turn_reversal",
    number: "03",
    title: "Beats, vendepunkt og reversering",
    summary: "Bryt scenen ned i små endringer og finn øyeblikket som tvinger handlingen over i en ny retning.",
    principle: "En scene er ikke én jevn intensitet. Den består av beats der taktikk, informasjon, makt eller følelsesverdi endres.",
    termIds: ["beat", "turning_point", "reversal"],
    film: {
      title: "The Banshees of Inisherin",
      year: 2022,
      analysisQuestion: "Hvordan endrer små avvisninger og nye ultimatum gradvis scenenes verdi og maktbalanse?",
    },
    practicePrompt: "Del en scene i minst tre beats. Beskriv hva som endres i hvert beat, og marker hvilket øyeblikk som er scenens avgjørende vendepunkt.",
    checklist: [
      "Hvert beat inneholder en faktisk endring.",
      "Vendepunktet endrer handlingsmulighetene.",
      "En eventuell reversering har motsatt verdi av forventningen før den.",
    ],
    quiz: {
      question: "Hva skiller et vendepunkt fra en vanlig replikk?",
      options: [
        "Det er alltid scenens lengste replikk.",
        "Det endrer retning, makt eller handlingsmuligheter i scenen.",
        "Det må komme midt i scenen.",
        "Det krever et klipp til nærbilde.",
      ],
      correctIndex: 1,
      explanation: "Vendepunktet defineres av funksjonen det har i dramatikken, ikke av plassering, lengde eller bildeutsnitt.",
    },
  },
  {
    id: "subtext_playable_action",
    number: "04",
    title: "Undertekst og spillbar handling",
    summary: "Oversett følelser og skjulte behov til handlinger skuespilleren faktisk kan forsøke mot en partner.",
    principle: "Regissøren bør gi handling, omstendighet og motstand fremfor å be skuespilleren produsere en bestemt følelse.",
    termIds: ["subtext", "playable_action", "intention", "listening"],
    film: {
      title: "All About My Mother",
      year: 1999,
      analysisQuestion: "Hvordan lar filmen det karakterene gjør for hverandre uttrykke mer enn replikkene forklarer direkte?",
    },
    practicePrompt: "Velg én replikk med undertekst. Skriv hva karakteren egentlig forsøker å gjøre med den andre, som et aktivt verb: overtale, avvæpne, skjule, teste eller presse.",
    checklist: [
      "Underteksten avviker meningsfullt fra ordlyden.",
      "Handlingen kan rettes mot en partner.",
      "Responsen oppstår gjennom lytting, ikke som forhåndsbestemt levering.",
    ],
    quiz: {
      question: "Hvilken regi er mest spillbar?",
      options: [
        "Vær mer såret.",
        "Gjør scenen sterkere.",
        "Få henne til å innrømme at hun lyver.",
        "Vis publikum at du er redd.",
      ],
      correctIndex: 2,
      explanation: "En spillbar handling gir skuespilleren et konkret forsøk rettet mot partneren, ikke et krav om å demonstrere en følelse.",
    },
  },
  {
    id: "setup_payoff_sequence",
    number: "05",
    title: "Planting, innfrielse og sceneplassering",
    summary: "Koble scenens detaljer til større forløp slik at informasjon får konsekvens senere og scenen gjør nødvendig arbeid i sekvensen.",
    principle: "En effektiv scene både virker i øyeblikket og forbereder, endrer eller innfrir noe i filmens større struktur.",
    termIds: ["setup_payoff", "sequence", "emotional_arc"],
    film: {
      title: "Closely Watched Trains",
      year: 1966,
      analysisQuestion: "Hvordan får hverdagslige rutiner og karakterdetaljer ny betydning når den avsluttende handlingen innfrir dem?",
    },
    practicePrompt: "Finn én planting i scenen og skriv hvordan den skal innfris senere. Forklar også hvilken funksjon scenen har i den større sekvensen og karakterens emosjonelle bue.",
    checklist: [
      "Plantingen er tydelig nok til å registreres, men ikke overforklart.",
      "Innfrielsen endrer forståelse, handling eller følelse.",
      "Scenen har en definert funksjon i sekvensen rundt den.",
    ],
    quiz: {
      question: "Hva gjør en planting og innfrielse dramatisk virksom?",
      options: [
        "Den samme gjenstanden vises to ganger uten endret betydning.",
        "Et etablert element får senere konsekvens eller ny betydning.",
        "Publikum får hele forklaringen første gang elementet vises.",
        "Plantingen må alltid være en fysisk rekvisitt.",
      ],
      correctIndex: 1,
      explanation: "Planting og innfrielse kan være informasjon, handling, lyd, relasjon eller gjenstand; det avgjørende er senere konsekvens.",
    },
  },
];

export type ScreenplayCourseProgress = {
  readonly version: 1;
  readonly activeLessonId: string;
  readonly seenLessonIds: readonly string[];
  readonly understoodLessonIds: readonly string[];
  readonly usedLessonIds: readonly string[];
  readonly notesByLessonId: Readonly<Record<string, string>>;
  readonly updatedAt: string;
};

export type ScreenplayDirectorAssignment = {
  readonly version: 1;
  readonly courseId: typeof SCREENPLAY_COURSE_ID;
  readonly filmId: string;
  readonly filmTitle: string;
  readonly filmYear: number;
  readonly filmSlug: string;
  readonly title: string;
  readonly prompt: string;
  readonly fieldIds: readonly DirectorBriefFieldId[];
  readonly createdAt: string;
};

export const SCREENPLAY_DIRECTOR_ASSIGNMENT_FIELDS: readonly DirectorBriefFieldId[] = [
  "sceneContext",
  "sceneObjective",
  "conflictTurn",
  "audienceEffect",
  "proofOfIntent",
];

export function createBlankScreenplayCourseProgress(now = new Date().toISOString()): ScreenplayCourseProgress {
  return {
    version: 1,
    activeLessonId: SCREENPLAY_COURSE_LESSONS[0]?.id ?? "",
    seenLessonIds: [],
    understoodLessonIds: [],
    usedLessonIds: [],
    notesByLessonId: {},
    updatedAt: now,
  };
}

export function coerceScreenplayCourseProgress(value: unknown, now = new Date().toISOString()): ScreenplayCourseProgress {
  if (!isRecord(value)) return createBlankScreenplayCourseProgress(now);
  const validIds = new Set(SCREENPLAY_COURSE_LESSONS.map((lesson) => lesson.id));
  const activeLessonId = typeof value.activeLessonId === "string" && validIds.has(value.activeLessonId)
    ? value.activeLessonId
    : SCREENPLAY_COURSE_LESSONS[0]?.id ?? "";
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

export function getScreenplayCourseLessonTerms(lesson: ScreenplayCourseLesson): readonly DirectorTerm[] {
  return lesson.termIds.map((termId) => getDirectorTerm(termId)).filter((term): term is DirectorTerm => Boolean(term));
}

export function isScreenplayCourseQuizAnswerCorrect(lesson: ScreenplayCourseLesson, answerIndex: number): boolean {
  return Number.isInteger(answerIndex) && answerIndex === lesson.quiz.correctIndex;
}

export function getScreenplayLessonMasteryStage(
  progress: ScreenplayCourseProgress,
  lessonId: string,
): ScreenplayCourseMasteryStage {
  const seen = progress.seenLessonIds.includes(lessonId);
  const understood = progress.understoodLessonIds.includes(lessonId);
  const used = progress.usedLessonIds.includes(lessonId);
  if (seen && understood && used) return "mastered";
  if (used) return "used";
  if (understood) return "understood";
  if (seen) return "seen";
  return "not_started";
}

export function countScreenplayCourseMilestones(progress: ScreenplayCourseProgress): number {
  return SCREENPLAY_COURSE_LESSONS.reduce((count, lesson) => (
    count
    + Number(progress.seenLessonIds.includes(lesson.id))
    + Number(progress.understoodLessonIds.includes(lesson.id))
    + Number(progress.usedLessonIds.includes(lesson.id))
  ), 0);
}

export function getScreenplayCourseCompletionPercent(progress: ScreenplayCourseProgress): number {
  const possible = SCREENPLAY_COURSE_LESSONS.length * 3;
  return possible > 0 ? Math.round((countScreenplayCourseMilestones(progress) / possible) * 100) : 0;
}

export function isScreenplayCourseMastered(progress: ScreenplayCourseProgress): boolean {
  return SCREENPLAY_COURSE_LESSONS.every((lesson) => getScreenplayLessonMasteryStage(progress, lesson.id) === "mastered");
}

export function createScreenplayDirectorAssignment(
  film: { readonly id: string; readonly title: string; readonly year: number; readonly slug: string },
  now = new Date().toISOString(),
): ScreenplayDirectorAssignment {
  return {
    version: 1,
    courseId: SCREENPLAY_COURSE_ID,
    filmId: film.id,
    filmTitle: film.title,
    filmYear: film.year,
    filmSlug: film.slug,
    title: "Avsluttende regioppgave: sceneanalyse",
    prompt: "Planlegg én scene der synsvinkel, scenemål, hindring, vendepunkt, undertekst og publikumsinformasjon virker sammen. Bruk de fem markerte Director-feltene som leveranse.",
    fieldIds: SCREENPLAY_DIRECTOR_ASSIGNMENT_FIELDS,
    createdAt: now,
  };
}

export function getScreenplayDirectorAssignmentFieldLabels(): readonly string[] {
  return SCREENPLAY_DIRECTOR_ASSIGNMENT_FIELDS.map((fieldId) => (
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

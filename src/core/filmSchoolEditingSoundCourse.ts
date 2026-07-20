import { DIRECTOR_BRIEF_FIELDS, type DirectorBriefFieldId } from "./directorBrief.js";
import { getDirectorTerm, type DirectorTerm } from "./directorKnowledge.js";

export const EDITING_SOUND_COURSE_ID = "director_editing_sound_finishing";
export const EDITING_SOUND_COURSE_PROGRESS_STORAGE_KEY = "hg_film_school_editing_sound_course_v1";
export const EDITING_SOUND_DIRECTOR_ASSIGNMENT_STORAGE_KEY = "hg_film_school_editing_sound_assignment_v1";

export type EditingSoundCourseMasteryStage = "not_started" | "seen" | "understood" | "used" | "mastered";

export type EditingSoundCourseQuiz = {
  readonly question: string;
  readonly options: readonly string[];
  readonly correctIndex: number;
  readonly explanation: string;
};

export type EditingSoundCourseFilmReference = {
  readonly title: string;
  readonly year: number;
  readonly analysisQuestion: string;
};

export type EditingSoundCourseLesson = {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly summary: string;
  readonly principle: string;
  readonly termIds: readonly string[];
  readonly film: EditingSoundCourseFilmReference;
  readonly practicePrompt: string;
  readonly checklist: readonly string[];
  readonly quiz: EditingSoundCourseQuiz;
};

export const EDITING_SOUND_COURSE_LESSONS: readonly EditingSoundCourseLesson[] = [
  {
    id: "coverage_performance_rhythm",
    number: "01",
    title: "Dekning, prestasjon og klipperytme",
    summary: "Bygg scenen fra de tagningene og reaksjonene som best uttrykker handlingen, ikke fra en automatisk mal for dekning.",
    principle: "Klippingen begynner allerede i opptaksplanen. Regissøren må skaffe nok materiale til å forme prestasjon og informasjon, men hvert bilde og hvert klipp må fortsatt ha en konkret dramatisk funksjon.",
    termIds: ["coverage", "assembly", "rough_cut", "fine_cut", "rhythm", "reaction_shot"],
    film: {
      title: "Secrets & Lies",
      year: 1996,
      analysisQuestion: "Hvordan beskytter filmen prestasjonenes varighet, pauser og reaksjoner samtidig som klippingen gjør maktskiftene i familiesamtalene tydelige?",
    },
    practicePrompt: "Lag en klippeplan for en to-personscene med master, to singles og ett reaksjonsbilde. Beskriv hvilke prestasjonsøyeblikk som må beskyttes, hvor du vil holde igjen et klipp, og hva som avgjør rytmen.",
    checklist: [
      "Hvert planlagt bilde gir en tydelig klippemulighet eller dramatisk verdi.",
      "Rytmen følger endringer i handling og lytting, ikke bare replikkveksling.",
      "Reaksjoner og pauser er planlagt som aktivt materiale.",
    ],
    quiz: {
      question: "Hva er den beste grunnen til å klippe fra den som snakker til den som lytter?",
      options: [
        "Dialogen har vart i mer enn fem sekunder.",
        "Den lyttendes reaksjon endrer hvordan publikum forstår replikken eller relasjonen.",
        "Alle dialogscener må veksle jevnt mellom ansiktene.",
        "Klipperen trenger å bruke alle kameraoppsettene.",
      ],
      correctIndex: 1,
      explanation: "Et reaksjonsklipp er sterkest når mottaket av handlingen tilfører eller endrer dramatisk informasjon.",
    },
  },
  {
    id: "ellipsis_time_structure",
    number: "02",
    title: "Ellipser, montasje og filmisk tid",
    summary: "Bestem hva publikum må se, hva de kan slutte seg til og hvordan tidshopp kan gjøre utviklingen tydeligere i stedet for mer uklar.",
    principle: "Filmisk tid skapes gjennom utvalg. Ellipser, montasje og kryssklipp må komprimere eller sammenstille handling uten å miste den emosjonelle og kausale orienteringen publikum trenger.",
    termIds: ["ellipsis", "montage", "cross_cutting", "match_cut", "jump_cut", "cut_on_action"],
    film: {
      title: "Platform",
      year: 2000,
      analysisQuestion: "Hvordan lar filmen store tidshopp, gjentatte steder og endrede sanger gjøre historisk forandring synlig uten forklarende mellomscener?",
    },
    practicePrompt: "Komprimer én uke til en sekvens på seks bilder. Marker hvilke handlinger som utelates, hva som binder tidshoppene sammen, og hvordan publikum fortsatt forstår endringen i karakter eller situasjon.",
    checklist: [
      "Hvert utelatt tidsledd kan forstås gjennom spor før eller etter klippet.",
      "Overgangene bruker handling, form, lyd eller idé som forbindelsesledd.",
      "Komprimeringen bevarer den emosjonelle utviklingen.",
    ],
    quiz: {
      question: "Når fungerer en ellipse best?",
      options: [
        "Når den fjerner alt som er vanskelig å filme.",
        "Når publikum kan rekonstruere det utelatte og hoppet skjerper scenens eller sekvensens utvikling.",
        "Når hvert tidshopp forklares med tekstplakat.",
        "Når filmen trenger å bli kortere uansett sammenheng.",
      ],
      correctIndex: 1,
      explanation: "En god ellipse fjerner tid eller handling, men etterlater nok årsak, konsekvens og emosjonell orientering til at spranget blir meningsfullt.",
    },
  },
  {
    id: "sound_space_perspective",
    number: "03",
    title: "Lydperspektiv, rom og subjektivitet",
    summary: "Bygg stedet og publikums lytteposisjon med opptakslyd, atmosfære, romtone, avstand og overganger mellom bilder.",
    principle: "Lyd er ikke bare støtte til bildet. Perspektiv, romtone, atmosfære og lyd som kommer før eller fortsetter etter et klipp kan styre geografi, forventning og subjektiv erfaring.",
    termIds: ["production_sound", "room_tone", "ambience", "sound_perspective", "j_cut", "l_cut"],
    film: {
      title: "Cure",
      year: 1997,
      analysisQuestion: "Hvordan bruker filmen vann, ventilasjon, fjern trafikk, romklang og brå stillhet til å gjøre ordinære rom ustabile og truende?",
    },
    practicePrompt: "Lag et lydkart for én scene med forgrunn, mellomgrunn, bakgrunn og lyd utenfor bildet. Planlegg minst én J-cut og én L-cut, og skriv når lydperspektivet skal bli mer subjektivt.",
    checklist: [
      "Stedet har en definert grunnlyd og tydelige avstandsplan.",
      "J- og L-klippene utfører en overgang i informasjon eller oppmerksomhet.",
      "Subjektiv lyd har et presist dramatisk start- og sluttpunkt.",
    ],
    quiz: {
      question: "Hva gjør lydperspektiv dramatisk lesbart?",
      options: [
        "At alle lyder har samme nivå og klarhet.",
        "At avstand, rom, retning eller subjektivitet endres i samsvar med publikums plass i scenen.",
        "At bakgrunnslyd fjernes helt.",
        "At dialog alltid ligger høyere enn resten av miksen.",
      ],
      correctIndex: 1,
      explanation: "Lydperspektiv organiserer hvor lyder oppleves å være og hvordan publikum fysisk eller subjektivt er plassert i forhold til dem.",
    },
  },
  {
    id: "music_spotting_mix",
    number: "04",
    title: "Musikk, lydbroer og sluttmiks",
    summary: "Bestem når musikk skal begynne, hva den skal gjøre og hvordan dialog, effekter, atmosfære og musikk prioriteres i miksen.",
    principle: "Musikk og miks må fordele oppmerksomhet gjennom tid. Diegetiske og ikke-diegetiske elementer, spotting og lydbroer bør ha avtalte funksjoner slik at musikken ikke bare gjentar følelsen bildet allerede viser.",
    termIds: ["diegetic_sound", "non_diegetic_sound", "score", "spotting_session", "sound_bridge", "final_mix"],
    film: {
      title: "Dancer in the Dark",
      year: 2000,
      analysisQuestion: "Hvordan forvandles fabrikklyd, tog og gjentatte arbeidsrytmer til musikk, og hvordan skiller miksen realistisk rom fra musikalsk fantasi?",
    },
    practicePrompt: "Spot én treminutters scene. Angi nøyaktig hvor musikken begynner og slutter, om den er diegetisk, hva den tilfører, og hvilke lydelementer som skal ha prioritet gjennom tre viktige øyeblikk.",
    checklist: [
      "Hvert musikkinnslag har en definert dramatisk funksjon.",
      "Overgangen mellom diegetisk og ikke-diegetisk lyd er planlagt.",
      "Miksprioriteten endres bevisst mellom dialog, kropp, rom, effekt og musikk.",
    ],
    quiz: {
      question: "Hva er et presist resultat av en spotting session?",
      options: [
        "En liste over all musikk regissøren liker.",
        "Avtalte inn- og utpunkter og en dramatisk funksjon for hvert musikk- eller lydinnslag.",
        "En ferdig sluttmiks uten videre arbeid.",
        "Et krav om musikk under alle emosjonelle scener.",
      ],
      correctIndex: 1,
      explanation: "Spotting gjør plassering, varighet og funksjon konkret før komponering, lydarbeid og miks ferdigstilles.",
    },
  },
  {
    id: "lock_grade_delivery",
    number: "05",
    title: "Bildelås, grading, master og levering",
    summary: "Lås filmen i riktig rekkefølge, kontroller at bilde og lyd følger samme intensjon og kvalitetssikre den faktiske visningsmasteren.",
    principle: "Ferdigstilling er en kreativ og teknisk kjede. Picture lock beskytter tidslinjen før sluttmiks og grading, mens fargerom, output-transform, DCP og kvalitetskontroll avgjør om filmens intensjon overlever til visning.",
    termIds: ["picture_lock", "color_grade", "final_mix", "dcp", "lut", "output_transform"],
    film: {
      title: "sex, lies, and videotape",
      year: 1989,
      analysisQuestion: "Hvordan gjør filmen forskjellen mellom observerte rom og videobekjennelser lesbar gjennom bildeformat, tekstur, klipperytme og lydlig nærhet?",
    },
    practicePrompt: "Lag en ferdigstillingsplan fra godkjent finklipp til visningsklar master. Beskriv bildelås, lydleveranser, grading, output-transform, DCP-kontroll og tre konkrete feil som må oppdages i kvalitetssikringen.",
    checklist: [
      "Rekkefølgen mellom picture lock, sluttmiks, grading og master er tydelig.",
      "Fargerom og output-transform er knyttet til den faktiske visningen.",
      "Kvalitetskontrollen dekker både bilde, lyd, teksting og synkronisering.",
    ],
    quiz: {
      question: "Hvorfor bør picture lock komme før endelig lydmiks og conformert grading?",
      options: [
        "Fordi klipperen ikke får lov til å se den ferdige filmen.",
        "Fordi endringer i bilderekkefølge og varighet ellers kan gjøre ferdig lyd- og fargearbeid ugyldig eller feiljustert.",
        "Fordi DCP bare kan inneholde én scene.",
        "Fordi grading bestemmer manusstrukturen.",
      ],
      correctIndex: 1,
      explanation: "Sluttmiks, grading og leveranser bygger på en stabil tidslinje. Senere bildeendringer skaper nye synk-, conform- og kvalitetsproblemer.",
    },
  },
];

export type EditingSoundCourseProgress = {
  readonly version: 1;
  readonly activeLessonId: string;
  readonly seenLessonIds: readonly string[];
  readonly understoodLessonIds: readonly string[];
  readonly usedLessonIds: readonly string[];
  readonly notesByLessonId: Readonly<Record<string, string>>;
  readonly updatedAt: string;
};

export type EditingSoundDirectorAssignment = {
  readonly version: 1;
  readonly courseId: typeof EDITING_SOUND_COURSE_ID;
  readonly filmId: string;
  readonly filmTitle: string;
  readonly filmYear: number;
  readonly filmSlug: string;
  readonly title: string;
  readonly prompt: string;
  readonly fieldIds: readonly DirectorBriefFieldId[];
  readonly createdAt: string;
};

export const EDITING_SOUND_DIRECTOR_ASSIGNMENT_FIELDS: readonly DirectorBriefFieldId[] = [
  "formalStrategy",
  "editingRhythm",
  "soundStrategy",
  "practicalConstraints",
  "proofOfIntent",
];

export function createBlankEditingSoundCourseProgress(now = new Date().toISOString()): EditingSoundCourseProgress {
  return {
    version: 1,
    activeLessonId: EDITING_SOUND_COURSE_LESSONS[0]?.id ?? "",
    seenLessonIds: [],
    understoodLessonIds: [],
    usedLessonIds: [],
    notesByLessonId: {},
    updatedAt: now,
  };
}

export function coerceEditingSoundCourseProgress(value: unknown, now = new Date().toISOString()): EditingSoundCourseProgress {
  if (!isRecord(value)) return createBlankEditingSoundCourseProgress(now);
  const validIds = new Set(EDITING_SOUND_COURSE_LESSONS.map((lesson) => lesson.id));
  const activeLessonId = typeof value.activeLessonId === "string" && validIds.has(value.activeLessonId)
    ? value.activeLessonId
    : EDITING_SOUND_COURSE_LESSONS[0]?.id ?? "";
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

export function getEditingSoundCourseLessonTerms(lesson: EditingSoundCourseLesson): readonly DirectorTerm[] {
  return lesson.termIds.map((termId) => getDirectorTerm(termId)).filter((term): term is DirectorTerm => Boolean(term));
}

export function isEditingSoundCourseQuizAnswerCorrect(lesson: EditingSoundCourseLesson, answerIndex: number): boolean {
  return Number.isInteger(answerIndex) && answerIndex === lesson.quiz.correctIndex;
}

export function getEditingSoundLessonMasteryStage(progress: EditingSoundCourseProgress, lessonId: string): EditingSoundCourseMasteryStage {
  const seen = progress.seenLessonIds.includes(lessonId);
  const understood = progress.understoodLessonIds.includes(lessonId);
  const used = progress.usedLessonIds.includes(lessonId);
  if (seen && understood && used) return "mastered";
  if (used) return "used";
  if (understood) return "understood";
  if (seen) return "seen";
  return "not_started";
}

export function getEditingSoundCourseCompletionPercent(progress: EditingSoundCourseProgress): number {
  const totalUnits = EDITING_SOUND_COURSE_LESSONS.length * 3;
  if (totalUnits === 0) return 0;
  const completedUnits = EDITING_SOUND_COURSE_LESSONS.reduce((count, lesson) => (
    count
    + Number(progress.seenLessonIds.includes(lesson.id))
    + Number(progress.understoodLessonIds.includes(lesson.id))
    + Number(progress.usedLessonIds.includes(lesson.id))
  ), 0);
  return Math.round((completedUnits / totalUnits) * 100);
}

export function isEditingSoundCourseMastered(progress: EditingSoundCourseProgress): boolean {
  return EDITING_SOUND_COURSE_LESSONS.every((lesson) => getEditingSoundLessonMasteryStage(progress, lesson.id) === "mastered");
}

export function createEditingSoundDirectorAssignment(
  film: { readonly id: string; readonly title: string; readonly year: number; readonly slug: string },
  now = new Date().toISOString(),
): EditingSoundDirectorAssignment {
  return {
    version: 1,
    courseId: EDITING_SOUND_COURSE_ID,
    filmId: film.id,
    filmTitle: film.title,
    filmYear: film.year,
    filmSlug: film.slug,
    title: "Klipp-, lyd- og ferdigstillingsoppgave",
    prompt: "Planlegg en komplett postproduksjonskjede for scenen. Begrunn klipperytme, tidsstruktur, lydperspektiv, musikk og miks, praktiske leveranser og hvordan den ferdige masteren skal bevise scenens dramatiske intensjon.",
    fieldIds: EDITING_SOUND_DIRECTOR_ASSIGNMENT_FIELDS,
    createdAt: now,
  };
}

function validLessonIds(value: unknown, validIds: ReadonlySet<string>): readonly string[] {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.filter((lessonId): lessonId is string => typeof lessonId === "string" && validIds.has(lessonId)))];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

const validDirectorFieldIds = new Set(DIRECTOR_BRIEF_FIELDS.map((field) => field.id));
for (const fieldId of EDITING_SOUND_DIRECTOR_ASSIGNMENT_FIELDS) {
  if (!validDirectorFieldIds.has(fieldId)) throw new Error(`Unknown Director brief field in editing/sound course: ${fieldId}`);
}

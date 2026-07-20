import { DIRECTOR_BRIEF_FIELDS, type DirectorBriefFieldId } from "./directorBrief.js";
import { getDirectorTerm, type DirectorTerm } from "./directorKnowledge.js";

export const LIGHTING_DESIGN_COURSE_ID = "director_lighting_design";
export const LIGHTING_DESIGN_COURSE_PROGRESS_STORAGE_KEY = "hg_film_school_lighting_design_course_v1";
export const LIGHTING_DESIGN_DIRECTOR_ASSIGNMENT_STORAGE_KEY = "hg_film_school_lighting_design_assignment_v1";

export type LightingDesignCourseMasteryStage = "not_started" | "seen" | "understood" | "used" | "mastered";

export type LightingDesignCourseQuiz = {
  readonly question: string;
  readonly options: readonly string[];
  readonly correctIndex: number;
  readonly explanation: string;
};

export type LightingDesignCourseFilmReference = {
  readonly title: string;
  readonly year: number;
  readonly analysisQuestion: string;
};

export type LightingDesignCourseLesson = {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly summary: string;
  readonly principle: string;
  readonly termIds: readonly string[];
  readonly film: LightingDesignCourseFilmReference;
  readonly practicePrompt: string;
  readonly checklist: readonly string[];
  readonly quiz: LightingDesignCourseQuiz;
};

export const LIGHTING_DESIGN_COURSE_LESSONS: readonly LightingDesignCourseLesson[] = [
  {
    id: "source_direction_quality",
    number: "01",
    title: "Lyskilde, retning og kvalitet",
    summary: "Bestem hvor lyset oppleves å komme fra, hvordan det former kroppen og hvorfor kilden finnes i scenens verden.",
    principle: "Lyssetting blir dramatisk tydelig når hovedretning, hardhet og synlige eller antydede kilder springer ut av sted, tid og handling i stedet for å legges på som generell stemning.",
    termIds: ["key_light", "practical_light", "motivated_lighting", "hard_light", "soft_light", "backlight"],
    film: {
      title: "Tropical Malady",
      year: 2004,
      analysisQuestion: "Hvordan bruker filmen mørke, begrensede kilder og gradvis lesbarhet til å gjøre skogen til både fysisk rom og psykisk erfaring?",
    },
    practicePrompt: "Velg én natt- eller interiørscene. Definer hovedkilden, én synlig practical, lysretning og hardhet. Skriv hva publikum skal kunne lese, og hva som bevisst skal forbli skjult.",
    checklist: [
      "Hovedlyset har en troverdig kilde i eller utenfor scenen.",
      "Hardt eller mykt lys er valgt etter handling og overflater.",
      "Mørke og baklys styrer informasjon uten å gjøre handlingen uleselig.",
    ],
    quiz: {
      question: "Hva gjør en lyssetting motivert?",
      options: [
        "At alle lamper er synlige i bildet.",
        "At lyset oppleves å komme fra troverdige kilder og støtter scenens handling.",
        "At lyset er realistisk målt i lux.",
        "At scenen bare bruker én lampe.",
      ],
      correctIndex: 1,
      explanation: "Motivert lys kan forsterkes og formes kraftig, men retning og karakter må fortsatt oppleves som begrunnet i scenens verden.",
    },
  },
  {
    id: "contrast_exposure",
    number: "02",
    title: "Kontrast, eksponering og toneomfang",
    summary: "Prioriter hvilke toner som må beholdes, hvor mørkt skyggene kan gå og hvordan høylys skal oppføre seg.",
    principle: "Eksponering er en kreativ prioritering, ikke bare korrekt lysmengde. Regissør og fotograf må bestemme hvilke ansikter, vinduer, praktiske kilder og mørke flater som bærer scenens viktigste informasjon.",
    termIds: ["exposure", "dynamic_range", "highlight_rolloff", "fill_light", "negative_fill", "bounce_light"],
    film: {
      title: "Safe",
      year: 1995,
      analysisQuestion: "Hvordan gjør kontrollerte lyse interiører, sterile flater og gradvis visuell isolasjon tilsynelatende trygghet ubehagelig?",
    },
    practicePrompt: "Lag en eksponeringsplan for et interiør med ansikt, vindu og praktisk lampe. Skriv hva som må ha detalj, hva som kan falle mot svart eller hvitt, og hvordan fill eller negativ fill former kontrasten.",
    checklist: [
      "Planen sier hvilke toneområder som er viktigst for historien.",
      "Fill eller negativ fill brukes for å styre kontrast, ikke bare lysstyrke.",
      "Høylys og mørke er vurdert mot kameraets dynamiske omfang.",
    ],
    quiz: {
      question: "Hva er den mest presise eksponeringsbeslutningen?",
      options: [
        "Alt i bildet skal alltid ligge midt på måleren.",
        "Ansiktet prioriteres, mens vinduet får gå lysere fordi rommets press er viktigere enn utsiktsdetaljen.",
        "Ingen høylys kan noen gang klippe.",
        "Skyggene må løftes til samme nivå som hovedlyset.",
      ],
      correctIndex: 1,
      explanation: "Eksponering handler om å plassere filmens viktigste informasjon bevisst innenfor eller utenfor tilgjengelig toneomfang.",
    },
  },
  {
    id: "temperature_palette",
    number: "03",
    title: "Fargetemperatur, hvitbalanse og palett",
    summary: "Bygg et fargesystem som binder lys, kostyme, landskap og emosjonell utvikling sammen.",
    principle: "En palett er et system av dominerende, fraværende og aksentfarger. Fargetemperatur, hvitbalanse og visningstransform må planlegges slik at systemet overlever fra opptak til ferdig bilde.",
    termIds: ["color_temperature", "white_balance", "palette", "lut", "color_space", "output_transform"],
    film: {
      title: "Daughters of the Dust",
      year: 1991,
      analysisQuestion: "Hvordan virker hvite tekstiler, hudtoner, landskap, mat og naturlige elementer sammen som et historisk og kulturelt fargesystem?",
    },
    practicePrompt: "Definer tre dominerende farger, én aksentfarge og én farge som skal holdes tilbake. Knytt dem til lys, kostyme og miljø, og beskriv hvordan hvitbalanse og visnings-LUT skal bevare intensjonen.",
    checklist: [
      "Paletten beskriver både farger som brukes og farger som unngås.",
      "Lys, kostyme og miljø følger samme system.",
      "Hvitbalanse og LUT er verktøy for intensjonen, ikke tilfeldige ettereffekter.",
    ],
    quiz: {
      question: "Hva skiller en fargepalett fra en liste over pene farger?",
      options: [
        "Paletten bruker alltid komplementærfarger.",
        "Paletten fordeler farger etter dramatisk funksjon, utvikling og avdeling.",
        "Paletten må inneholde minst seks farger.",
        "Paletten bestemmes først under grading.",
      ],
      correctIndex: 1,
      explanation: "Et fargesystem kobler gjentakelse, fravær og aksenter til filmens utvikling og må deles av foto, design, kostyme og post.",
    },
  },
  {
    id: "world_materials_space",
    number: "04",
    title: "Produksjonsdesign, materialer og rom",
    summary: "Form miljøet slik at arkitektur, møbler, tekstur og rekvisitter uttrykker karakterens handlingsrom.",
    principle: "Produksjonsdesign er ikke bakgrunn. Romgeografi, materialer, dekor og aktive rekvisitter bestemmer hvordan karakterene kan bevege seg, hva kameraet kan se og hvilke konflikter miljøet gjør fysiske.",
    termIds: ["production_design", "art_direction", "set_decoration", "prop", "texture", "spatial_geography"],
    film: {
      title: "Barton Fink",
      year: 1991,
      analysisQuestion: "Hvordan gjør korridorer, tapet, varme, møblering og gjentatt hotellgeometri skrivearbeid og industripress fysisk?",
    },
    practicePrompt: "Tegn ett rom ovenfra og velg tre materialer, to møbler og én hero prop. Beskriv hvordan hvert valg påvirker blocking, kameraposisjon, lyd og karakterens tilgang til utgangen.",
    checklist: [
      "Rommet gir konkrete handlingsmuligheter og hindringer.",
      "Materialer og dekor støtter filmens tone og lysrespons.",
      "Den viktige rekvisitten har funksjon, plassering og kontinuitetsbehov.",
    ],
    quiz: {
      question: "Når fungerer produksjonsdesign dramatisk?",
      options: [
        "Når rommet inneholder mange detaljer.",
        "Når miljø, materialer og gjenstander påvirker handling, relasjoner og kameraets muligheter.",
        "Når alle sett er bygget i studio.",
        "Når designet er historisk korrekt uansett sceneformål.",
      ],
      correctIndex: 1,
      explanation: "Detalj og korrekthet kan være viktige, men designets dramatiske verdi ligger i hvordan den fysiske verden virker på handlingen.",
    },
  },
  {
    id: "continuity_color_pipeline",
    number: "05",
    title: "Visuell kontinuitet fra opptak til grading",
    summary: "Bevar eller bryt lys, kostyme, scenografi og farge systematisk gjennom opptaksrekkefølge og etterarbeid.",
    principle: "Visuell kontinuitet betyr ikke at alt alltid skal være likt. Det betyr at endringer i lys, palett, kostyme, tekstur og look er dokumenterte og dramatiske, slik at opptak og grading bygger samme utvikling.",
    termIds: ["continuity", "costume_design", "makeup_hair", "lut", "color_space", "output_transform"],
    film: {
      title: "Dancer in the Dark",
      year: 2000,
      analysisQuestion: "Hvordan skiller og forbinder filmen realistiske opptak og musikalske fantasier gjennom forskjellige bilde-, farge- og bevegelsessystemer?",
    },
    practicePrompt: "Planlegg en scene som filmes over to dager og har ett bevisst look-skifte. Lag kontinuitetsnotater for lysretning, eksponering, kostyme, sminke, viktige farger og LUT før og etter skiftet.",
    checklist: [
      "Alle elementer som må matche mellom opptaksdagene er dokumentert.",
      "Det bevisste look-skiftet har et tydelig dramatisk startpunkt.",
      "Opptaks- og postproduksjonsplanen bruker samme fargerom og visningsintensjon.",
    ],
    quiz: {
      question: "Hva er god visuell kontinuitet når filmen har et bevisst stilskifte?",
      options: [
        "Å gjøre begge delene helt like i grading.",
        "Å dokumentere hva som skal matche og hva som skal endres, slik at skiftet blir kontrollert og lesbart.",
        "Å la hver avdeling velge sin egen overgang.",
        "Å unngå LUT-er og fargestyring.",
      ],
      correctIndex: 1,
      explanation: "Kontinuitet beskytter både sammenheng og planlagte brudd ved å gjøre endringene sporbare gjennom alle avdelinger og postproduksjonen.",
    },
  },
];

export type LightingDesignCourseProgress = {
  readonly version: 1;
  readonly activeLessonId: string;
  readonly seenLessonIds: readonly string[];
  readonly understoodLessonIds: readonly string[];
  readonly usedLessonIds: readonly string[];
  readonly notesByLessonId: Readonly<Record<string, string>>;
  readonly updatedAt: string;
};

export type LightingDesignDirectorAssignment = {
  readonly version: 1;
  readonly courseId: typeof LIGHTING_DESIGN_COURSE_ID;
  readonly filmId: string;
  readonly filmTitle: string;
  readonly filmYear: number;
  readonly filmSlug: string;
  readonly title: string;
  readonly prompt: string;
  readonly fieldIds: readonly DirectorBriefFieldId[];
  readonly createdAt: string;
};

export const LIGHTING_DESIGN_DIRECTOR_ASSIGNMENT_FIELDS: readonly DirectorBriefFieldId[] = [
  "formalStrategy",
  "productionDesign",
  "lightingPalette",
  "practicalConstraints",
  "proofOfIntent",
];

export function createBlankLightingDesignCourseProgress(now = new Date().toISOString()): LightingDesignCourseProgress {
  return {
    version: 1,
    activeLessonId: LIGHTING_DESIGN_COURSE_LESSONS[0]?.id ?? "",
    seenLessonIds: [],
    understoodLessonIds: [],
    usedLessonIds: [],
    notesByLessonId: {},
    updatedAt: now,
  };
}

export function coerceLightingDesignCourseProgress(value: unknown, now = new Date().toISOString()): LightingDesignCourseProgress {
  if (!isRecord(value)) return createBlankLightingDesignCourseProgress(now);
  const validIds = new Set(LIGHTING_DESIGN_COURSE_LESSONS.map((lesson) => lesson.id));
  const activeLessonId = typeof value.activeLessonId === "string" && validIds.has(value.activeLessonId)
    ? value.activeLessonId
    : LIGHTING_DESIGN_COURSE_LESSONS[0]?.id ?? "";
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

export function getLightingDesignCourseLessonTerms(lesson: LightingDesignCourseLesson): readonly DirectorTerm[] {
  return lesson.termIds.map((termId) => getDirectorTerm(termId)).filter((term): term is DirectorTerm => Boolean(term));
}

export function isLightingDesignCourseQuizAnswerCorrect(lesson: LightingDesignCourseLesson, answerIndex: number): boolean {
  return Number.isInteger(answerIndex) && answerIndex === lesson.quiz.correctIndex;
}

export function getLightingDesignLessonMasteryStage(progress: LightingDesignCourseProgress, lessonId: string): LightingDesignCourseMasteryStage {
  const seen = progress.seenLessonIds.includes(lessonId);
  const understood = progress.understoodLessonIds.includes(lessonId);
  const used = progress.usedLessonIds.includes(lessonId);
  if (seen && understood && used) return "mastered";
  if (used) return "used";
  if (understood) return "understood";
  if (seen) return "seen";
  return "not_started";
}

export function getLightingDesignCourseCompletionPercent(progress: LightingDesignCourseProgress): number {
  const totalUnits = LIGHTING_DESIGN_COURSE_LESSONS.length * 3;
  if (totalUnits === 0) return 0;
  const completedUnits = LIGHTING_DESIGN_COURSE_LESSONS.reduce((count, lesson) => (
    count
    + Number(progress.seenLessonIds.includes(lesson.id))
    + Number(progress.understoodLessonIds.includes(lesson.id))
    + Number(progress.usedLessonIds.includes(lesson.id))
  ), 0);
  return Math.round((completedUnits / totalUnits) * 100);
}

export function isLightingDesignCourseMastered(progress: LightingDesignCourseProgress): boolean {
  return LIGHTING_DESIGN_COURSE_LESSONS.every((lesson) => getLightingDesignLessonMasteryStage(progress, lesson.id) === "mastered");
}

export function createLightingDesignDirectorAssignment(
  film: { readonly id: string; readonly title: string; readonly year: number; readonly slug: string },
  now = new Date().toISOString(),
): LightingDesignDirectorAssignment {
  return {
    version: 1,
    courseId: LIGHTING_DESIGN_COURSE_ID,
    filmId: film.id,
    filmTitle: film.title,
    filmYear: film.year,
    filmSlug: film.slug,
    title: "Lys-, farge- og designoppgave",
    prompt: "Planlegg ett samlet look-system for scenen. Begrunn lyskilder, kontrast, palett, fysisk miljø, produksjonsbegrensninger og hvordan du skal bevise at valgene støtter scenens dramatiske utvikling.",
    fieldIds: LIGHTING_DESIGN_DIRECTOR_ASSIGNMENT_FIELDS,
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
for (const fieldId of LIGHTING_DESIGN_DIRECTOR_ASSIGNMENT_FIELDS) {
  if (!validDirectorFieldIds.has(fieldId)) throw new Error(`Unknown Director brief field in lighting/design course: ${fieldId}`);
}

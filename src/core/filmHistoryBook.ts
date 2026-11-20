import { filmHistoryChapterOne } from "./filmHistoryChapterOne.js";
import { filmHistoryChapterTwo } from "./filmHistoryChapterTwo.js";
import { filmHistoryChapterThree } from "./filmHistoryChapterThree.js";
import { filmHistoryChapterFour } from "./filmHistoryChapterFour.js";
import { filmHistoryChapterFive } from "./filmHistoryChapterFive.js";
import { filmHistoryChapterSix } from "./filmHistoryChapterSix.js";
import { filmHistoryChapterSeven } from "./filmHistoryChapterSeven.js";
import { filmHistoryChapterEight } from "./filmHistoryChapterEight.js";
import { filmHistoryChapterNine } from "./filmHistoryChapterNine.js";
import { filmHistoryChapterTen } from "./filmHistoryChapterTen.js";
import { filmHistoryChapterEleven } from "./filmHistoryChapterEleven.js";
import { filmHistoryChapterTwelve } from "./filmHistoryChapterTwelve.js";
import { filmHistoryChapterThirteen } from "./filmHistoryChapterThirteen.js";
import { filmHistoryChapterFourteen } from "./filmHistoryChapterFourteen.js";
import { filmHistoryChapterFifteen } from "./filmHistoryChapterFifteen.js";
import { filmHistoryChapterSixteen } from "./filmHistoryChapterSixteen.js";
import { filmHistoryChapterSeventeen } from "./filmHistoryChapterSeventeen.js";
import { filmHistoryChapterEighteen } from "./filmHistoryChapterEighteen.js";
import { filmHistoryChapterNineteen } from "./filmHistoryChapterNineteen.js";
import { filmHistoryChapterTwenty } from "./filmHistoryChapterTwenty.js";
import { filmHistoryChapterTwentyOne } from "./filmHistoryChapterTwentyOne.js";
import { filmHistoryChapterTwentyTwo } from "./filmHistoryChapterTwentyTwo.js";
import { filmHistoryChapterTwentyThree } from "./filmHistoryChapterTwentyThree.js";
import { filmHistoryChapterTwentyFour } from "./filmHistoryChapterTwentyFour.js";
import { filmHistoryChapterTwentyFive } from "./filmHistoryChapterTwentyFive.js";
import { filmHistoryChapterTwentySix } from "./filmHistoryChapterTwentySix.js";
import { filmHistoryChapterTwentySeven } from "./filmHistoryChapterTwentySeven.js";
import { filmHistoryChapterTwentyEight } from "./filmHistoryChapterTwentyEight.js";
import { filmHistoryChapterTwentyNine } from "./filmHistoryChapterTwentyNine.js";

export type FilmHistoryBookSource = {
  readonly id: string;
  readonly title: string;
  readonly publisher: string;
  readonly url: string;
};

export type FilmHistoryBookSection = {
  readonly id: string;
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly sourceIds: readonly string[];
};

export type FilmHistoryFilmRole = "anchor_film" | "comparative_film" | "historical_object";
export type FilmHistoryAtlasDecision = "use_existing_atlas_case" | "P0" | "P1" | "P2" | "no_production_case";

export type FilmHistoryBookFilmReference = {
  readonly title: string;
  readonly year: number;
  readonly note: string;
  readonly role: FilmHistoryFilmRole;
  readonly atlasDecision: Exclude<FilmHistoryAtlasDecision, "no_production_case">;
  readonly atlasScenarioId?: string;
};

export type FilmHistoryBookHistoricalObject = {
  readonly label: string;
  readonly note: string;
  readonly role: "historical_object";
  readonly atlasDecision: "no_production_case";
};

export type FilmHistoryBookChapter = {
  readonly id: string;
  readonly number: number;
  readonly title: string;
  readonly period: string;
  readonly summary: string;
  readonly status: "full" | "draft" | "outline";
  readonly learningObjectives: readonly string[];
  readonly keyTerms: readonly string[];
  readonly sections: readonly FilmHistoryBookSection[];
  readonly filmReferences: readonly FilmHistoryBookFilmReference[];
  readonly historicalObjects: readonly FilmHistoryBookHistoricalObject[];
  readonly sources: readonly FilmHistoryBookSource[];
};

export type FilmHistoryBookPart = {
  readonly id: string;
  readonly number: number;
  readonly title: string;
  readonly period: string;
  readonly thesis: string;
  readonly chapters: readonly FilmHistoryBookChapter[];
};

const outline = (
  id: string,
  number: number,
  title: string,
  period: string,
  summary: string,
  learningObjectives: readonly string[],
  keyTerms: readonly string[],
): FilmHistoryBookChapter => ({
  id,
  number,
  title,
  period,
  summary,
  status: "outline",
  learningObjectives,
  keyTerms,
  sections: [],
  filmReferences: [],
  historicalObjects: [],
  sources: [],
});

export const filmHistoryBookParts: readonly FilmHistoryBookPart[] = [
  {
    id: "emergence",
    number: 1,
    title: "The medium emerges",
    period: "1870s–1914",
    thesis: "Cinema becomes a reproducible public medium through intertwined changes in apparatus, exhibition, film form, production and distribution.",
    chapters: [
      filmHistoryChapterOne,
      filmHistoryChapterTwo,
      filmHistoryChapterThree,
      filmHistoryChapterFour,
      filmHistoryChapterFive,
    ],
  },
  {
    id: "silent-systems",
    number: 2,
    title: "Silent cinema as a global system",
    period: "1914–1929",
    thesis: "During and after World War I, industrial consolidation and radical modernist alternatives transform what films look like, how they are edited and how national cinemas define themselves.",
    chapters: [
      filmHistoryChapterSix,
      filmHistoryChapterSeven,
      filmHistoryChapterEight,
      filmHistoryChapterNine,
      filmHistoryChapterTen,
    ],
  },
  {
    id: "sound-states-studios",
    number: 3,
    title: "Sound, studios and state power",
    period: "1927–1945",
    thesis: "Synchronized sound reorganizes film form and industry while depression, authoritarian states and world war reshape cinema's institutions and political uses.",
    chapters: [
      filmHistoryChapterEleven,
      filmHistoryChapterTwelve,
      filmHistoryChapterThirteen,
      filmHistoryChapterFourteen,
      filmHistoryChapterFifteen,
    ],
  },
  {
    id: "postwar-modern",
    number: 4,
    title: "Postwar reconstruction and modern cinema",
    period: "1945–1968",
    thesis: "Postwar cinema combines industrial reconstruction, new realism, changing audiences, decolonization and a wave of modernist challenges to classical storytelling.",
    chapters: [
      filmHistoryChapterSixteen,
      filmHistoryChapterSeventeen,
      filmHistoryChapterEighteen,
      filmHistoryChapterNineteen,
      filmHistoryChapterTwenty,
    ],
  },
  {
    id: "late-century",
    number: 5,
    title: "New Hollywood and global art cinema",
    period: "1968–1989",
    thesis: "The collapse of older production assumptions produces both intensified blockbuster economics and new political, independent, experimental and transnational film cultures.",
    chapters: [
      filmHistoryChapterTwentyOne,
      filmHistoryChapterTwentyTwo,
      filmHistoryChapterTwentyThree,
      filmHistoryChapterTwentyFour,
      filmHistoryChapterTwentyFive,
    ],
  },
  {
    id: "contemporary",
    number: 6,
    title: "Global and digital cinema",
    period: "1989–present",
    thesis: "Digital tools, transnational finance, new national movements, franchise economics and platform distribution reorganize both cinema's aesthetics and the institutions through which films reach audiences.",
    chapters: [
      filmHistoryChapterTwentySix,
      filmHistoryChapterTwentySeven,
      filmHistoryChapterTwentyEight,
      filmHistoryChapterTwentyNine,
      outline(
        "contemporary-forms",
        30,
        "Contemporary forms and the unfinished present",
        "2000s–present",
        "Hybrid documentary, essay film, low-cost digital production, virtual production, expanded animation and new exhibition contexts show a medium still being redefined.",
        ["Analyze contemporary cinema as multiple overlapping production cultures.", "Connect low-cost tools to new authorship and distribution possibilities.", "Treat the present as historically unfinished rather than as a settled endpoint."],
        ["hybrid documentary", "essay film", "virtual production", "desktop cinema", "digital exhibition"],
      ),
    ],
  },
];

export const filmHistoryBookChapters = filmHistoryBookParts.flatMap((part) => part.chapters);

export function getFilmHistoryBookChapter(chapterId: string): FilmHistoryBookChapter | undefined {
  return filmHistoryBookChapters.find((chapter) => chapter.id === chapterId);
}

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
      outline(
        "feminist-queer-political",
        22,
        "Feminist, queer and political counter-cinemas",
        "1960s–1980s",
        "Filmmakers, theorists and collectives challenge dominant representation, authorship and spectatorship through new institutions and forms.",
        ["Connect film form to feminist and queer critique.", "Identify alternative production/distribution networks.", "Distinguish counter-cinema from a single visual style."],
        ["counter-cinema", "feminist film", "queer cinema", "collective", "spectatorship"],
      ),
      outline(
        "popular-asian-cinemas",
        23,
        "Popular cinemas across Asia",
        "1960s–1980s",
        "Indian popular cinema, Hong Kong action, Japanese genre production and other industries build powerful regional and diasporic audiences.",
        ["Compare industrial models across major Asian industries.", "Analyze music, action and star systems as production forms.", "Explain regional circulation beyond festival canons."],
        ["popular Hindi cinema", "Hong Kong action", "star system", "martial arts", "regional market"],
      ),
      outline(
        "blockbuster-home-video",
        24,
        "Blockbusters, conglomerates and home video",
        "1975–1989",
        "Event films, saturation marketing, multiplexes, cable and home video change how films are financed, released, watched and valued.",
        ["Explain the economics of event-film release.", "Connect home video to catalog value and audience behavior.", "Analyze effects technology inside blockbuster production."],
        ["saturation booking", "multiplex", "home video", "conglomerate", "high concept"],
      ),
      outline(
        "festival-art-cinema",
        25,
        "Global auteurs and festival networks",
        "1960s–1989",
        "Festivals, art-house distribution, state funding and co-production support filmmakers whose work circulates across national borders and critical institutions.",
        ["Explain the festival circuit as an institution.", "Relate state funding and co-production to art cinema.", "Avoid equating auteur cinema with national isolation."],
        ["festival circuit", "art-house", "state funding", "co-production", "auteur"],
      ),
    ],
  },
  {
    id: "contemporary",
    number: 6,
    title: "Global and digital cinema",
    period: "1989–present",
    thesis: "Digital tools, transnational finance, new national movements, franchise economics and platform distribution reorganize both cinema's aesthetics and the institutions through which films reach audiences.",
    chapters: [
      outline(
        "post-cold-war",
        26,
        "Post-Cold War transnational cinema",
        "1989–2005",
        "Co-productions, migration, new funding systems and revived national industries reshape films that move between languages, countries and markets.",
        ["Define transnational cinema without erasing national institutions.", "Connect migration and co-production to film form.", "Map major post-1989 production shifts."],
        ["transnational cinema", "co-production", "diaspora", "regional fund", "world cinema"],
      ),
      outline(
        "digital-production",
        27,
        "Digital production and the transformed image",
        "1990s–2010s",
        "Digital editing, digital intermediate workflows, CGI, motion capture and digital cinematography change what can be photographed, constructed and revised.",
        ["Distinguish major stages of digital workflow change.", "Analyze CGI as integrated production rather than a post-production add-on.", "Explain the digital intermediate's importance."],
        ["digital intermediate", "CGI", "motion capture", "digital cinematography", "nonlinear editing"],
      ),
      outline(
        "east-asian-turn",
        28,
        "East Asian new waves and global genre cinema",
        "1980s–2010s",
        "Hong Kong, Taiwan, mainland China, South Korea and Japan become major centers of art cinema, action, horror and genre reinvention with worldwide influence.",
        ["Compare several East Asian industrial contexts.", "Trace genre circulation and remake cultures.", "Connect festival prestige to commercial regional markets."],
        ["Hong Kong New Wave", "Taiwan New Cinema", "Korean New Wave", "J-horror", "genre circulation"],
      ),
      outline(
        "platform-era",
        29,
        "Franchises, streaming and platform distribution",
        "2000s–present",
        "Franchise filmmaking, global day-and-date release, streaming services and data-driven platforms alter theatrical windows, financing and audience access.",
        ["Explain changing release windows and distribution models.", "Distinguish franchise logic from genre alone.", "Analyze how streaming changes production and circulation."],
        ["franchise", "streaming", "release window", "platform", "day-and-date"],
      ),
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

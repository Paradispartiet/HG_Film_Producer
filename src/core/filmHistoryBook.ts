import { filmHistoryChapterOne } from "./filmHistoryChapterOne.js";
import { filmHistoryChapterTwo } from "./filmHistoryChapterTwo.js";
import { filmHistoryChapterThree } from "./filmHistoryChapterThree.js";
import { filmHistoryChapterFour } from "./filmHistoryChapterFour.js";
import { filmHistoryChapterFive } from "./filmHistoryChapterFive.js";
import { filmHistoryChapterSix } from "./filmHistoryChapterSix.js";
import { filmHistoryChapterSeven } from "./filmHistoryChapterSeven.js";

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
  readonly status: "full" | "outline";
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
      outline(
        "french-avant-gardes",
        8,
        "French Impressionism, Surrealism and the avant-gardes",
        "1918–1930",
        "French filmmakers and artists pursue photogénie, subjective vision, abstraction, Surrealism and alternatives to commercial narrative norms.",
        ["Define photogénie in historical context.", "Compare Impressionist and Surrealist strategies.", "Connect avant-garde production to alternative institutions."],
        ["photogénie", "French Impressionism", "Surrealism", "pure cinema", "avant-garde"],
      ),
      outline(
        "soviet-montage",
        9,
        "Revolution and Soviet Montage",
        "1917–1930",
        "Kuleshov, Eisenstein, Vertov, Pudovkin and others make editing a site of political theory, perception and formal experiment.",
        ["Compare major montage theories.", "Analyze editing as argument rather than continuity alone.", "Place Soviet production inside revolutionary institutions."],
        ["montage", "Kuleshov effect", "collision", "kino-eye", "constructivism"],
      ),
      outline(
        "silent-beyond-west",
        10,
        "Silent cinemas beyond the usual canon",
        "1910s–1929",
        "Japan, China, India, Scandinavia and other film cultures develop distinctive performance, exhibition, genre and production traditions while exchanging forms internationally.",
        ["Compare at least three silent-era film cultures outside Hollywood and central Europe.", "Explain the role of local exhibition practices.", "Recognize uneven archival survival as a historiographic problem."],
        ["benshi", "studio culture", "mythological", "archival survival", "transnational cinema"],
      ),
    ],
  },
  {
    id: "sound-states-studios",
    number: 3,
    title: "Sound, studios and state power",
    period: "1927–1945",
    thesis: "Synchronized sound reorganizes film form and industry while depression, authoritarian states and world war reshape cinema's institutions and political uses.",
    chapters: [
      outline(
        "sound-transition",
        11,
        "The sound transition",
        "1927–1934",
        "Recorded dialogue, music and effects alter acting, camera practice, editing, exhibition, language markets and industrial power.",
        ["Explain why sound was an industrial transition, not just a technical addition.", "Analyze early sound space and off-screen sound.", "Compare multilingual and dubbing/subtitling strategies."],
        ["synchronization", "sound-on-film", "sound-on-disc", "dubbing", "multilingual version"],
      ),
      outline(
        "hollywood-genres",
        12,
        "Hollywood genres in the studio era",
        "1930s–1945",
        "Musicals, horror, gangster films, screwball comedy, animation, melodrama and other genres become coordinated studio products and laboratories of style.",
        ["Relate genre cycles to studio organization.", "Compare genre conventions and variation.", "Analyze sound, performance and production design as genre systems."],
        ["genre cycle", "production unit", "backlot", "B picture", "house style"],
      ),
      outline(
        "europe-crisis",
        13,
        "European cinemas between crisis and dictatorship",
        "1930–1945",
        "Poetic realism, British documentary, German state cinema, Italian production and other traditions respond to economic crisis and authoritarian politics.",
        ["Compare state and commercial film institutions.", "Analyze realism and stylization across national contexts.", "Explain how exile redistributed film labor."],
        ["poetic realism", "state cinema", "exile", "documentary movement", "co-production"],
      ),
      outline(
        "documentary-animation-experiment",
        14,
        "Documentary, animation and experimental film",
        "1920s–1945",
        "Nonfiction, animation and experimental practices develop their own industrial pipelines, political functions and aesthetic possibilities.",
        ["Distinguish major documentary modes before 1945.", "Describe feature animation as an industrial system.", "Connect experimental film to artistic and political networks."],
        ["documentary", "animation pipeline", "city symphony", "sponsored film", "experimental cinema"],
      ),
      outline(
        "war-propaganda",
        15,
        "Cinema at war",
        "1939–1945",
        "Feature films, newsreels, documentaries, animation and military production become instruments of morale, persuasion, information and memory across combatant states.",
        ["Differentiate propaganda, information and entertainment functions.", "Compare wartime film institutions.", "Analyze how war accelerates technical and organizational change."],
        ["propaganda", "newsreel", "morale", "wartime documentary", "state sponsorship"],
      ),
    ],
  },
  {
    id: "postwar-modern",
    number: 4,
    title: "Postwar reconstruction and modern cinema",
    period: "1945–1968",
    thesis: "Postwar cinema combines industrial reconstruction, new realism, changing audiences, decolonization and a wave of modernist challenges to classical storytelling.",
    chapters: [
      outline(
        "italian-neorealism",
        16,
        "Italian Neorealism",
        "1943–1954",
        "Location shooting, social crisis, nonprofessional performers and open narrative forms become central to a highly influential postwar movement.",
        ["Identify Neorealist production conditions and stylistic tendencies.", "Avoid reducing the movement to a single visual formula.", "Trace its international influence."],
        ["Neorealism", "location shooting", "nonprofessional actor", "open form", "postwar realism"],
      ),
      outline(
        "postwar-japan-asia",
        17,
        "Postwar Japan and Asian modernisms",
        "1945–1960s",
        "Japanese studio masters and emerging Asian cinemas combine local traditions, genre systems and modernist experimentation amid rapid social change.",
        ["Compare major Japanese studio and auteur practices.", "Connect postwar institutions to film form.", "Situate Asian modernisms within transnational festival culture."],
        ["Japanese studio system", "jidaigeki", "gendaigeki", "festival circuit", "modernism"],
      ),
      outline(
        "hollywood-after-war",
        18,
        "Hollywood after the studio peak",
        "1945–1960",
        "Antitrust decisions, television, widescreen, color, location production, film noir and changing stars alter classical Hollywood's business and style.",
        ["Explain the Paramount decision's structural significance.", "Relate television competition to widescreen and spectacle.", "Analyze noir and melodrama within postwar culture."],
        ["Paramount decision", "widescreen", "film noir", "television", "package-unit production"],
      ),
      outline(
        "new-waves-europe",
        19,
        "New Waves and new cinemas",
        "1955–1968",
        "French, British, Czech, Polish and other new cinemas challenge studio norms through location work, new performers, reflexive style and generational politics.",
        ["Compare several New Wave movements rather than treating them as one style.", "Connect lightweight production to formal change.", "Analyze criticism, cinephilia and film schools as institutions."],
        ["French New Wave", "Free Cinema", "Czech New Wave", "cinephilia", "reflexivity"],
      ),
      outline(
        "decolonization-third-cinema",
        20,
        "Decolonization and Third Cinema",
        "1950s–1970s",
        "Filmmakers in Latin America, Africa and other decolonizing contexts develop new production networks and political theories of cinema.",
        ["Explain Third Cinema historically and distinguish it from a geographic label.", "Connect anti-colonial politics to production and distribution.", "Identify key African and Latin American institutions and filmmakers."],
        ["Third Cinema", "decolonization", "anti-colonial cinema", "collective production", "alternative distribution"],
      ),
    ],
  },
  {
    id: "late-century",
    number: 5,
    title: "New Hollywood and global art cinema",
    period: "1968–1989",
    thesis: "The collapse of older production assumptions produces both intensified blockbuster economics and new political, independent, experimental and transnational film cultures.",
    chapters: [
      outline(
        "new-hollywood",
        21,
        "New Hollywood",
        "1967–1980",
        "A generation of filmmakers works between countercultural audiences, genre revision, location production, auteur discourse and renewed corporate control.",
        ["Explain New Hollywood as an industrial as well as stylistic change.", "Analyze genre revision and youth audiences.", "Trace the shift toward blockbuster economics."],
        ["New Hollywood", "auteurism", "counterculture", "road movie", "blockbuster"],
      ),
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

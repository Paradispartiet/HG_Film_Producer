import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const norteProductionCaseVerification = {
  scenarioId: "scenario_norte_the_end_of_history_2013",
  status: "verified",
  verifiedAt: "2026-07-28",
  summary: "Festival and institutional records, Lav Diaz interviews, cinematography and exhibition documentation support Norte as a four-hour Philippine political-literary production system built from a Dostoevskian parallel screenplay, post-Marcos moral history, northern locations, colour anamorphic observation, extended performance, self-editing and minimally manipulated environmental sound.",
  sources: [
    {
      title: "Norte, Hangganan ng Kasaysayan",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/norte-hangganan-ng-kasaysayan/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official Cannes record confirms the Un Certain Regard selection, Lav Diaz and Rody Vera screenplay, Larry Manda cinematography, Perry Dizon production design, Diaz editing, Corinne de San Jose sound, Wacky O Productions and the 250-minute Philippine feature."
    },
    {
      title: "A Conversation with Lav Diaz",
      publisher: "Harvard Film Archive",
      url: "https://harvardfilmarchive.org/conversations/107",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Diaz connects Norte to Crime and Punishment, Fukuyama, Ferdinand Marcos, class inequality, André Bazin and the decision to depart from his established black-and-white visual mode."
    },
    {
      title: "Norte, the End of History to Open on June 20",
      publisher: "Film at Lincoln Center",
      url: "https://www.filmlinc.org/press/norte-the-end-of-history-to-open-on-june-20-time-regained-the-films-of-lav/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The release archive supplies the screenplay, story, production and department credits together with colour, anamorphic 2.40:1, Stereo 5.1, DCP and 250-minute presentation data."
    },
    {
      title: "Norte, the End of History",
      publisher: "Museum of Modern Art",
      url: "https://www.moma.org/collection/works/316865",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "MoMA places the film inside slow cinema, Philippine social history and the Marcos legacy and identifies its static and near-static long takes as the basis of a broad moral and social panorama."
    },
    {
      title: "Film of the week: Norte, the End of History",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/sight-and-sound/reviews/film-week-norte-end-history",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Sight and Sound records the colour 2.35:1 presentation and analyses the four-hour family chronicle, social panorama, static wide observation and redistribution of Crime and Punishment across several lives."
    },
    {
      title: "Cannes 2013: Norte, the End of History",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/article/cannes-2013-dennis-lim/",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "editing"],
      note: "The Cannes report treats the film's duration as an ethical commitment that makes attention and empathy inseparable from its parallel structure, ordinary routines and unequal consequences."
    },
    {
      title: "Intervista a Lav Diaz",
      publisher: "Uzak",
      url: "https://www.uzak.it/rivista/uzak-11/lo-stato-delle-cose/intervista-a-lav-diaz.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Diaz discusses Dostoevsky's lifelong importance, his preference for minimal manipulation and minimally added sound and the northern location scouting that made changing colour and light central to Norte."
    },
    {
      title: "Entretien avec Lav Diaz",
      publisher: "Débordements",
      url: "https://debordements.fr/lav-diaz/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Diaz identifies Larry Manda as a long-term film-school collaborator and describes the cinematographer's scrupulous, analytical engagement with the screenplay and the demands of each project."
    },
    {
      title: "Militant Elegy: A Conversation with Lav Diaz",
      publisher: "La Furia Umana",
      url: "https://www.lafuriaumana.com/michael-guarneri-militant-elegy-a-conversation-with-lav-diaz/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The extended filmmaker conversation situates Diaz's durational practice, political history, production independence and literary engagement inside a cinema where time and lived environment carry the argument."
    },
    {
      title: "From the Vault: An Interview with Lav Diaz",
      publisher: "UMass Boston Cinema Studies",
      url: "https://blogs.umb.edu/cinemastudies/2019/10/28/from-the-vault-a-never-before-seen-interview-with-visionary-director-lav-diaz/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The archived interview documents Diaz's political and aesthetic commitments, long-duration working method and refusal to separate Philippine historical experience from the material form of production and spectatorship."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

export const norteVerificationRecords = [
  norteProductionCaseVerification,
] as const satisfies readonly ProductionCaseVerificationRecord[];

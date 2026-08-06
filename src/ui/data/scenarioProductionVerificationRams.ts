import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const ramsProductionCaseVerification = {
  scenarioId: "scenario_rams_2015",
  status: "verified",
  verifiedAt: "2026-08-06",
  summary: "The case's three-year rural and sheep-farming research, actor and animal preparation, isolated Bárðardalur locations, Icelandic-Danish-Norwegian-Polish co-production, wide anamorphic image system, patient editing, environmental sound, restrained score and international craft legacy are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "UN CERTAIN REGARD – Hrútar (Rams), interview with Grímur Hákonarson",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/2015/un-certain-regard-hrutar-rams-interview-with-grimur-hakonarson/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Hákonarson details three years of writing and research, farmer interviews, sheep-shed visits, agricultural reading, actor preparation, several days of sheep-only rehearsal, animal auditions and the film's Scandinavian tragicomic and realist influences."
    },
    {
      title: "A Forthright Collaboration",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/english/forthright-collaboration",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "The official Danish account documents Profile Pictures' co-production with Netop Films and the contribution of cinematographer Sturla Brandth Grøvlen and lighting designer Aslak Lytthans to the Nordic production structure."
    },
    {
      title: "RAMS",
      publisher: "European Film Academy",
      url: "https://www.europeanfilmawards.eu/efa-movie/rams/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "EFA verifies the flock-disease and forced-culling structure, producer Grímar Jónsson, principal cast and the screenplay, cinematography, editing and production-design credits, together with the 2015 European Film selection."
    },
    {
      title: "Rams",
      publisher: "Oslo Pictures",
      url: "https://www.oslo-pictures.com/en/films/rams",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The Norwegian co-producer records the four-country production, producers and co-producers, principal cast, Sturla Brandth Grøvlen, Bjarni Massi, costume designers, Kristján Loðmfjörð, Huldar Freyr Arnarson and Atli Örvarsson, plus the major festival and craft awards."
    },
    {
      title: "Rams",
      publisher: "Sturla Brandth Grøvlen",
      url: "https://sturla-brandthgroevlen.squarespace.com/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "The cinematographer's professional production record specifies ARRI Alexa XT capture, Hawk C-Series anamorphic lenses and 2.39:1 presentation and records the Cannes Grand Prix, Camerimage Silver Frog and Icelandic cinematography award."
    },
    {
      title: "Beards, sheep and brotherly hate: All in a day's work for 'Rams' pair",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/entertainment/movies/la-et-mn-rams-actors-20160205-story.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Hákonarson and the actors describe spending extensive preparation time with farmers and prioritising practical rehearsal with sheep and agricultural life over conventional dialogue rehearsal."
    },
    {
      title: "Interview: Grímur Hákonarson on Leading the Pack with Rams",
      publisher: "The Moveable Fest",
      url: "https://moveablefest.com/grimur-hakonarson-rams/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Hákonarson connects his documentary and childhood farm experience to wide static shots, slow pans, single-shot observation and slow-paced editing designed to preserve the tempo and dignity of rural work."
    },
    {
      title: "TheWrap Screening Series: Rams Director Grímur Hákonarson Talks Decision to Focus on the Sheep",
      publisher: "TheWrap",
      url: "https://www.thewrap.com/thewrap-screening-series-rams-director-grimur-hakonarson-talks-decision-to-focus-on-the-sheep/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "The director explains the decision to make sheep and the brothers' attachment to them the story's emotional centre rather than adding a conventional romantic plot."
    },
    {
      title: "Rams: Brothers at war",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/newsdetail/292961/",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The Cannes production report describes the physical world of the farmers, the brothers' indirect communication, the progression from isolation to shared crisis and the Netop-led Icelandic co-production with Denmark, Norway and Poland."
    },
    {
      title: "Sturla Brandth Grøvlen – Cinematographer",
      publisher: "Team Deakins",
      url: "https://teamdeakins.libsyn.com/sturla-brandth-grvlen-cinematographer",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Grøvlen discusses working through the harsh weather conditions on Rams as part of a broader first-person account of his cinematographic practice and adaptation of visual method to story and place."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

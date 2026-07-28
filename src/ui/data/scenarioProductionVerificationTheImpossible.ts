import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theImpossibleProductionCaseVerification = {
  scenarioId: "scenario_the_impossible_2012",
  status: "verified",
  verifiedAt: "2026-07-28",
  summary: "The film's survivor-derived screenplay, Thai locations, controlled practical water, miniature resort destruction, mobile camera work, bodily performance, parallel family editing and digital extensions are supported by institutional records, filmmaker interviews and effects reporting.",
  sources: [
    {
      title: "The Impossible",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/69188-THE-IMPOSSIBLE",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional credit record confirming the María Belón story source, Sergio G. Sánchez screenplay, J. A. Bayona direction, Óscar Faura photography, Eugenio Caballero design, Elena Ruiz and Bernat Vilaplana editing, and Fernando Velázquez music."
    },
    {
      title: "Lo imposible",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/2b5c6e00-2060-5c0c-8366-47c6fc66f6ef/lo-imposible",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "BFI collection record supporting the film's Spanish production identity, historical-disaster framing, principal credits and international exhibition context."
    },
    {
      title: "The Impossible",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/film/226350/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "European production record documenting the Telecinco Cinema and Apaches system, producers, public backing, screenplay, cast, cinematography, editing, design and distribution network."
    },
    {
      title: "The Impossible",
      publisher: "San Sebastian Film Festival",
      url: "https://www.sansebastianfestival.com/2012/sections_and_films/official_selection/7/1118/in",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Festival programme confirming the Spanish production, Bayona and Sánchez credits, Óscar Faura photography, Ruiz and Vilaplana editing, Velázquez score, principal cast and Summit sales context."
    },
    {
      title: "Making The Impossible",
      publisher: "FXGuide",
      url: "https://www.fxguide.com/fxfeatured/the_impossible/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Detailed effects account documenting one-third-scale resort buildings, 1:50 tests, the 80-by-100-metre Alicante tank, water dumps, Thailand plates, tracked cameras and the integration of practical, miniature and digital destruction."
    },
    {
      title: "Interview: Director Juan Antonio Bayona Recreates The Impossible",
      publisher: "HollywoodChicago",
      url: "https://www.hollywoodchicago.com/news/20861/interview-director-juan-antonio-bayona-recreates-the-impossible",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Bayona explains the long production, real-water tank work, rigged practical debris and the decision to preserve physical reality rather than stage the central sequence as a CGI-water spectacle."
    },
    {
      title: "The Impossible - Juan Antonio Bayona and Tom Holland interview",
      publisher: "IndieLondon",
      url: "https://www.indielondon.co.uk/Film-Review/the-impossible-juan-antonio-bayona-and-tom-holland-interview/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Bayona describes choosing real water for credibility, a year of effects development and six weeks of water work for Watts and Holland, connecting performance directly to the practical production method."
    },
    {
      title: "Q&A: Naomi Watts On The Impossible",
      publisher: "AwardsLine",
      url: "https://awardsline.com/2012/11/24/naomi-watts-the-impossible/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Watts describes bidirectional tank currents, submerged chairs, weights, oxygen procedures and the emotional consequences of performing the sequence inside a controlled but physically demanding water system."
    },
    {
      title: "The Impossible Movie and PhotoModeler",
      publisher: "PhotoModeler",
      url: "https://www.photomodeler.com/pm-applications/film-anim/theimpossiblemovie/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Technical case study explaining camera reconstruction for moving handheld tank footage and the compositing of the narrow practical current with Thailand plates, wider water layers, vegetation and transported objects."
    },
    {
      title: "The 85th Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2013",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Official awards record confirming Naomi Watts's Actress in a Leading Role nomination and the film's immediate recognition for a performance built around the production's sustained bodily and emotional demands."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

export const theImpossibleVerificationRecords = [
  theImpossibleProductionCaseVerification,
] as const satisfies readonly ProductionCaseVerificationRecord[];

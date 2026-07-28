import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theImpossibleProductionCaseVerification = {
  scenarioId: "scenario_the_impossible_2012",
  status: "verified",
  verifiedAt: "2026-07-28",
  summary: "Survivor testimony, institutional credits, actor interviews, effects reporting, camera records, awards history and composer testimony support The Impossible as a coordinated historical disaster reconstruction built from Thailand locations, controlled water stages, miniature and digital destruction, physical performance, restricted family viewpoint, sound and music.",
  sources: [
    {
      title: "Lo imposible",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/impossible",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional record confirming the Spanish production, 114-minute runtime, screenplay, producers, cinematographer, editor, composer, production designer and principal cast."
    },
    {
      title: "The Impossible",
      publisher: "American Film Institute",
      url: "https://catalog.afi.com/Film/69188-THE-IMPOSSIBLE",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI production record identifying Apaches Entertainment and Telecinco, Bayona, Sánchez, Maria Belón's story credit, producers, Oscar Faura, Elena Ruiz, Bernat Vilaplana, Eugenio Caballero and Fernando Velázquez."
    },
    {
      title: "Making The Impossible",
      publisher: "fxguide",
      url: "https://www.fxguide.com/fxfeatured/the_impossible/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Detailed effects account documenting historical visual references, one-third-scale resort buildings, million-litre wave systems, the sixty-metre actor channel, safety rigs, Thailand plates, practical debris and digital integration."
    },
    {
      title: "The 85th Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2013",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Official Academy record confirming Naomi Watts's Actress in a Leading Role nomination for The Impossible and the film's immediate performance recognition."
    },
    {
      title: "Naomi Watts on acting The Impossible",
      publisher: "CBS News",
      url: "https://www.cbsnews.com/news/naomi-watts-on-acting-the-impossible/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Watts and Maria Belón discuss the responsibility of representing survivors, their preparation together and the extended physical production inside the water tank."
    },
    {
      title: "Q&A: Naomi Watts On The Impossible",
      publisher: "AwardsLine",
      url: "https://awardsline.com/2012/11/24/naomi-watts-the-impossible/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Watts describes the engineered current, controlled actor pots, underwater chair and oxygen procedure, showing how physical performance, safety and emotional continuity were built into the effects production."
    },
    {
      title: "Naomi Watts, Mulling The Impossible",
      publisher: "North Country Public Radio",
      url: "https://www.northcountrypublicradio.org/news/npr/167095001/naomi-watts-mulling-the-impossible",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "sound"],
      note: "The actor describes four weeks of exhausting water-tank production and connects the physical method to the film's sustained experience of restricted survival."
    },
    {
      title: "Tom Holland on The Impossible",
      publisher: "Vanity Fair",
      url: "https://www.vanityfair.com/video/watch/video--tom-holland-on-the-impossible",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Contemporary TIFF interview documenting Holland's casting from Billy Elliot and the young performer's entry into the family-centred production."
    },
    {
      title: "Breakout Star Tom Holland on His Film Debut The Impossible",
      publisher: "Teen Vogue",
      url: "https://www.teenvogue.com/story/tom-holland-the-impossible",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Holland distinguishes the Spanish water-stage work from Thailand location photography and describes the rail-guided cups and pumps used to create the current around performers."
    },
    {
      title: "The Impossible composer Fernando Velazquez talks emotion",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/entertainment/envelope/la-xpm-2012-dec-12-la-et-mn-the-impossible-composer-fernando-velazquez-20121212-story.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Velázquez discusses scoring a real tragedy, Maria Belón's participation at the Abbey Road recording and the need to balance emotional expression with respect for the historical event."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

export const theImpossibleVerificationRecords = [
  theImpossibleProductionCaseVerification,
] as const satisfies readonly ProductionCaseVerificationRecord[];

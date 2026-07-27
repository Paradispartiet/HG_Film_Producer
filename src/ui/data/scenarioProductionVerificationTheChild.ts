import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theChildProductionCaseVerification = {
  scenarioId: "scenario_the_child_2005",
  status: "verified",
  verifiedAt: "2026-07-27",
  summary: "The film's observed-pram origin, Seraing young-father story, Belgian-French financing, rehearsed real-location method, Jérémie Renier and Déborah François performances, colour 35 mm body-camera system, Marie-Hélène Dozo editing, practical sound field, withheld conventional score and Palme d'Or legacy are supported by ten institutional, professional and filmmaker sources.",
  sources: [
    {
      title: "L'Enfant",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/l-enfant/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official 2005 Competition record confirms the Palme d'Or, Belgian-French production identity, runtime and principal writing, directing, cinematography, editing, design, sound and cast credits."
    },
    {
      title: "The Child",
      publisher: "European Film Academy",
      url: "https://www.europeanfilmawards.eu/efa-movie/the-child/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The EFA record documents the film and actor nominations and reproduces the directors' account of seeing a girl repeatedly circling Seraing with a pram, imagining the missing father and developing a love and fatherhood story."
    },
    {
      title: "Jean-Pierre et Luc Dardenne",
      publisher: "Les Films du Fleuve",
      url: "https://lesfilmsdufleuve.be/les-freres-dardenne/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The official production-company history records L'Enfant as a 2005 colour 35 mm fiction feature, identifies the Archipel 35 partnership and lists its Palme d'Or and Belgian and French awards history."
    },
    {
      title: "Dardenne brothers' The Child hits Belgian screens",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/newsdetail/54787/",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The European industry report documents the Les Films du Fleuve, Archipel 35, RTBF and Arte France Cinéma production, Belgian and French public support, Eurimages and MEDIA backing, budget and international distribution structure."
    },
    {
      title: "Where to begin with the Dardenne brothers",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/features/where-begin-with-dardenne-brothers",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "BFI identifies The Child as a central entry point to the brothers' ethically grounded action cinema and analyzes its bodies, unsentimental street life, chase tension and final movement toward grace."
    },
    {
      title: "Acting for the Dardennes",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/2416-acting-for-the-dardennes",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "Criterion's actor accounts include Jérémie Renier in L'Enfant and describe the camera as another actor inside the Dardennes' scenes, supporting the integration of performance, rehearsal and mobile framing."
    },
    {
      title: "L'Enfant",
      publisher: "Viennale",
      url: "https://www.viennale.at/en/films/enfant",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The festival archive confirms the colour 35 mm format and credits Alain Marcoen, Marie-Hélène Dozo, Igor Gabriel, Monic Parelle, Benoît De Clerck, Les Films du Fleuve and the principal cast."
    },
    {
      title: "43rd New York Film Festival",
      publisher: "Film at Lincoln Center",
      url: "https://www.filmlinc.org/nyff/43rd-new-york-film-festival/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The official festival history records The Child in the 2005 New York Film Festival Main Slate, supporting the film's immediate international circulation after Cannes."
    },
    {
      title: "Jérémie Renier: interview for L'Enfant",
      publisher: "AlloCiné",
      url: "https://www.allocine.fr/article/fichearticle_gen_carticle=18377362.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Renier discusses returning to the Dardennes, their attention to performance truth, the freedom created by preparation and the lightweight, independent production method used around the actors."
    },
    {
      title: "Dardenne brothers: We felt the rhythm of the film was wrong",
      publisher: "The Irish Times",
      url: "https://www.irishtimes.com/culture/film/dardenne-brothers-we-felt-the-rhythm-of-the-film-was-wrong-1.2876481",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The filmmakers describe their stable working method of chronological shooting and a month or more of rehearsal on the actual sets, with actors prepared before the technical crew enters the process."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

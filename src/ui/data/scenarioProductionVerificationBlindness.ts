import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const blindnessProductionCaseVerification = {
  scenarioId: "scenario_blindness_2008",
  status: "verified",
  verifiedAt: "2026-07-27",
  summary: "The film's Saramago adaptation, Brazil-Canada-Japan co-production, blindfold performance workshops, three-part outbreak-quarantine-city structure, transnational locations, white-blindness image system, credited design-editing-sound-music departments and 2008 Cannes opening are supported by ten inspectable institutional, trade and filmmaker sources.",
  sources: [
    {
      title: "Blindness",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/blindness/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official Competition and opening-film record confirms the Brazil-Canada-Japan feature and credits Fernando Meirelles, Don McKellar, César Charlone, Tulé Peak, Daniel Rezende and Marco Antônio Guimarães."
    },
    {
      title: "Blindness",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/viden-om-film/filmdatabasen/film/blindness",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "DFI documents Rhombus Media, the Canada-Brazil-Japan production, producers Niv Fichman, Andrea Barata Ribeiro and Sonoko Sakai and the principal screenplay, camera, editing, design, music and Dolby SRD credits."
    },
    {
      title: "Second sight",
      publisher: "The Guardian",
      url: "https://www.theguardian.com/film/2008/nov/14/fernando-meirelles-interview",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Meirelles discusses adapting Saramago's allegory, building a nameless city, directing the collapse from recognizable reality into sensory uncertainty and using blindness to question how civilization sees or ignores others."
    },
    {
      title: "Scene Stealer: Blindness",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/archives/la-xpm-2008-oct-09-et-scene9-story.html",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "The craft feature documents Charlone's milk, paint and water tests for the washed-out white-blindness image, coordinated art and costume degradation and the post-Cannes grading adjustment toward a more human image."
    },
    {
      title: "Canada - Blindness In sight",
      publisher: "Screen Daily",
      url: "https://www.screendaily.com/canada-blindness-in-sight/4034595.article",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The location production report traces the rights history, Niv Fichman's role, Meirelles's preproduction, the Guelph prison unit and the international financing and location strategy behind the adaptation."
    },
    {
      title: "Telefilm Canada Annual Report 2008-2009",
      publisher: "Telefilm Canada",
      url: "https://telefilm.ca/wp-content/uploads/2016/08/telefilm-annualreport-2008-2009.pdf",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The national agency's annual report records Blindness among the internationally visible Canadian-supported productions of the period and situates the Rhombus-led feature within Canadian audiovisual investment and export activity."
    },
    {
      title: "Blindness",
      publisher: "Library and Archives Canada",
      url: "https://recherche-collection-search.bac-lac.gc.ca/eng/home/record?app=filvidandsou&idnumber=416268",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The Canadian national collection preserves the completed feature and its catalog identity, providing an institutional record of the Canadian production and release object alongside its credited creative system."
    },
    {
      title: "Blindness",
      publisher: "Miramax",
      url: "https://www.miramax.com/movie/Blindness/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "The distributor's official catalog records the epidemic premise, Julianne Moore and Mark Ruffalo ensemble and the film's release identity as Meirelles's adaptation of Saramago's social-collapse narrative."
    },
    {
      title: "Blindness",
      publisher: "Filmfest Hamburg",
      url: "https://www.filmfesthamburg.de/en/film-info/blindness/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The festival record confirms the 2008 Canada-Japan-Brazil feature, producers and O2-Rhombus-Bee Vine companies and the principal screenplay, cinematography, editing, music and production-design credits."
    },
    {
      title: "Blindness",
      publisher: "Cinémathèque québécoise",
      url: "https://www.cinematheque.qc.ca/en/cinema/blindness/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The cinematheque's repertory record preserves the film as a Canadian-linked international feature and documents Meirelles's epidemic allegory, principal cast, duration and continuing exhibition context."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

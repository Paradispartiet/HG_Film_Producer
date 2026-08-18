import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const haxanProductionCaseVerification = {
  scenarioId: "scenario_haxan_1922",
  status: "verified",
  verifiedAt: "2026-08-18",
  summary: "The Danish Film Institute and Swedish Film Institute support Häxan as a 1922 Swedish silent production written and directed by Benjamin Christensen, photographed by Johan Ankerstjerne, designed by Richard Louw and credited with music by Emil Reesen. DFI records 35mm, black-and-white, silent format and a 122-minute current presentation. Swedish Film Institute documentation describes Swedish financing, Danish studio production, roughly three years to complete and the film as the most expensive Scandinavian silent film to that point, while DFI records the production company as Svenska Biografteatern. Both institutes document the film's combination of historical exposition, staged material, trick imagery and controversial reception/censorship. SFI's 2016 restoration account is especially important: surviving duplicate negatives, interpositive/nitrate evidence and period color instructions were used to restore tinting/toning and intertitle presentation. The Production Case therefore keeps historical illustration, explanatory claim, reenactment, fantasy and Christensen's 1922 psychology distinct; it does not treat staged witchcraft or persecution as neutral documentary evidence, does not present period psychiatric claims as current medical consensus, and does not convert torture, sexuality, religious persecution or stigma into scoreable shock. The film remains a silent production even where music is documented, and later accompaniment, recuts, restored color and current runtime remain presentation/restoration states rather than synchronized production sound or one immutable release version.",
  sources: [
    {
      title: "The Witches / Heksen",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/heksen",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "DFI identifies original title Häxan, 1922 Sweden, Benjamin Christensen as director/screenwriter, Johan Ankerstjerne as cinematographer, Richard Louw as production designer, Emil Reesen as composer, Svenska Biografteatern as production company, and 35mm black-and-white silent technical data. Its database description distinguishes documentary-like exposition from dramatized sequences and records contemporary controversy/censorship context."
    },
    {
      title: "Om Häxans digitala restaurering",
      publisher: "Swedish Film Institute",
      url: "https://www.filminstitutet.se/sv/nyheter/2016/om-haxans-digitala-restaurering/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "SFI's restoration account documents the 2016 digital restoration, scanning of preserved duplicate negatives, use of interpositive/nitrate evidence, Christensen-era color instructions, restoration of scene-specific tinting/toning, intertitle-size evidence and earlier 1976/2007 restorations as comparison material."
    },
    {
      title: "Worldwide success for Häxan",
      publisher: "Swedish Film Institute",
      url: "https://www.filminstitutet.se/en/news/2022/wordwide-success-for-haxan/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "SFI's centenary account describes Swedish Film Industry financing, the film as the most expensive Scandinavian silent film in history to that point, Danish studio shooting, a roughly three-year completion period, international censorship and the 2016 digital restoration."
    },
    {
      title: "Benjamin Christensen",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/viden-om-film/filmdatabasen/person/benjamin-christensen",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "DFI's Christensen biography documents the long research period, approximately eight months of shooting, Swedish financing and unusually high budget, supporting the case's treatment of Häxan as research-intensive large-scale silent production rather than an improvised horror curiosity."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

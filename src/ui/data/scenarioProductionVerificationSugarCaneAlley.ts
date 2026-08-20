import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const sugarCaneAlleyProductionCaseVerification = {
  scenarioId: "scenario_sugar_cane_alley_1983",
  status: "verified",
  verifiedAt: "2026-08-20",
  summary: "Sugar Cane Alley / Rue Cases-Nègres is verified as Euzhan Palcy's 1983 French-Martinican first feature and Joseph Zobel adaptation using CNC, Cinémathèque française, Film France-CNC, Palcy's official film record and a CNC educational dossier interview reviewed by Palcy. The sources distinguish Palcy's credited screenplay/directing from François Truffaut's mentor/network role; document difficult financing through CNC advance-on-receipts support and Aimé Césaire/Fort-de-France backing; identify Sumafa Productions, Orca Productions and N.E.F./Nouvelles Éditions de Films with Michel Loulergue and Alix Régis as delegated producers, Jean-Luc Ormières as executive producer and Christine Renaud as production director; and place the production in Martinique, with Film France-CNC specifically recording Fort-de-France. The Cinémathèque credits Dominique Chapuis as director of photography, Marie-Josèphe Yoyotte as editor, Thanh/At Hoang in décor/production design, Isabelle Filleul in costume, Pierre Befve and Yves Osmu in sound, and Malavoi plus additional composers/musicians. Palcy's official film page records French/Creole dialogue and 35mm Fujicolor. In the CNC dossier interview, Palcy explains that she rejected both flat conventional period imagery and sepia nostalgia, coordinated décor/color/costume research with Chapuis and Hoang, worked lighting during production and completed the image in grading; Hoang developed wood-aging/patina methods and costume work emphasized selected fabrics/colors. The same interview distinguishes specially composed music using traditional rhythms from retained traditional workers' songs and records Palcy's roughly 4,000-child audition process as filmmaker testimony. Institutional runtime records differ: 103 minutes on Palcy's official page and the Cinémathèque, 106 minutes at the Danish Film Institute and 107 minutes in the CNC visa record. The verification model uses 103 minutes canonically while retaining the discrepancy as catalog/release metadata. It does not invent camera body, lens package, focal lengths, stock emulsion number, exposure ratios, lab process, sound hardware, exact financing shares or an unsupported production chronology, and it keeps Venice/César/Sundance/restoration history downstream from production evidence.",
  sources: [
    {
      title: "La Rue Cases Nègres — Visa 56059",
      publisher: "Centre national du cinéma et de l'image animée (CNC)",
      url: "https://www.cnc.fr/professionnels/visas-et-classification/56059",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Official CNC work record confirming Euzhan Palcy, the French theatrical release record, visa metadata and the 107-minute catalog duration."
    },
    {
      title: "Rue Cases-Nègres (Euzhan Palcy, 1983)",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/film/50527.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional credits for Palcy/Zobel, production companies and producers, Dominique Chapuis, Marie-Josèphe Yoyotte, Pierre Befve/Yves Osmu, Thanh At Hoang, Isabelle Filleul, composers and the 103-minute record."
    },
    {
      title: "Rue Cases-Nègres (1983)",
      publisher: "Euzhan Palcy — official film archive",
      url: "https://euzhanpalcyweb.wixsite.com/euzhan-palcy-fr/rue-cases-negres",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Palcy's official film page confirms her writer-director credit, Zobel adaptation, key craft credits, French/Creole languages, 35mm Fujicolor photography and a 103-minute duration."
    },
    {
      title: "Rue Cases-Nègres — Collège au cinéma dossier 186, interview with Euzhan Palcy",
      publisher: "CNC / Réseau Canopé",
      url: "https://cdn.reseau-canope.fr/archivage/valid/N-9297-13844.pdf",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "The dossier documents the CNC advance-on-receipts genesis and contains a 2010 interview reviewed by Palcy on casting scale, rejection of sepia/flat period imagery, lighting plus grading, decor/color/costume coordination, Hoang's wood patina and the distinction between specially composed music/traditional rhythms and retained workers' songs."
    },
    {
      title: "Rue Cases Nègres",
      publisher: "Film France — CNC",
      url: "https://www.filmfrance.net/films/rue-cases-negres/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "Official production/location record confirming the 1983 French feature, Orca Productions as delegated production and Martinique/Fort-de-France filming territory."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

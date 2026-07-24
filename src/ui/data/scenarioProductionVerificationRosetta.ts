import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const rosettaProductionCaseVerification = {
  scenarioId: "scenario_rosetta_1999",
  status: "verified",
  verifiedAt: "2026-07-24",
  summary: "The film's Belgian postindustrial labour setting, Films du Fleuve and ARP production, unknown lead performance, documentary-derived but intensively staged body-camera method, Super 16 capture and 35 mm blow-up, Marie-Hélène Dozo editing, practical sound system and Cannes legacy are supported by ten institutional, professional and archival sources.",
  sources: [
    {
      title: "Rosetta",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/rosetta/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official Competition record confirms the unanimous 1999 Palme d'Or, Émilie Dequenne's Best Actress award and the principal writing, directing, cinematography, editing, design and sound credits."
    },
    {
      title: "Rosetta",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/28056-rosetta",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Criterion records the Belgian 1999 feature, colour 1.66:1 presentation, director-approved restoration supervised by Alain Marcoen and the principal camera, sound, design, wardrobe and makeup departments."
    },
    {
      title: "Rosetta — BFI Southbank Programme Notes",
      publisher: "British Film Institute",
      url: "https://bfidatadigipres.github.io/big%20screen%20classics/2022/06/10/rosetta/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The programme notes document Films du Fleuve, ARP, RTBF, Canal+ and public support, provide extended production credits and explain the decision to cast an unknown performer as Rosetta."
    },
    {
      title: "Rosetta",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/rosetta",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The institutional film record confirms the 35 mm release format, colour and Dolby presentation together with the directors, cast and principal cinematography, editing, design, music and sound credits."
    },
    {
      title: "Rosetta",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/film/131210/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The European industry record confirms the Belgian-French production structure, producers, companies, international release history and the film's work-driven social narrative."
    },
    {
      title: "Rosetta",
      publisher: "Cinergie",
      url: "https://www.cinergie.be/film/rosetta",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The Belgian cinema record supplies production, camera, editing, sound, mixing, design, costume and music credits and places the film within Belgian cinema's sustained engagement with labour and economy."
    },
    {
      title: "Le corps-caméra. Rencontre avec Benoît Dervaux",
      publisher: "Fonction:Cinéma",
      url: "https://www.fonction-cinema.ch/agenda/detail/article/1724061881-le-corps-camera-rencontre-avec-benoit-dervaux",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "The professional event describes Dervaux's camera as a moving body and dancer within the Dardennes' fiction, emphasizing choreography, physical proximity and handheld movement without Steadicam."
    },
    {
      title: "Mr Benoît Dervaux, Cadreur",
      publisher: "Métiers.be",
      url: "https://metiers.siep.be/interviews/benoit-dervaux-cadreur/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Dervaux explains that the camera acts inside rehearsed staging, uses handheld freedom and wireless focus, records multiple positions for editing and deliberately accepts backs, walls and bodily collisions."
    },
    {
      title: "When less is more",
      publisher: "The Guardian",
      url: "https://www.theguardian.com/culture/1999/nov/09/artsfeatures3",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "The contemporary account places the brothers' work in Liège, identifies the low-budget hard-realist method and describes the camera's physical pursuit of Dequenne through Rosetta's labour and survival routines."
    },
    {
      title: "Rosetta",
      publisher: "CINEMATEK",
      url: "https://cinematek.be/2025-11-27-19-00/rosetta",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Belgium's royal film archive documents the restored circulation and historical status of the Cannes-winning film, confirming its continuing institutional legacy within Belgian and European cinema."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

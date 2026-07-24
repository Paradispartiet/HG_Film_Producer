import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const laHaineVerificationRecords = [
  {
    scenarioId: "scenario_la_haine_1995",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The case's origin in the police killing of Makomé M'Bowolé, ending-first twenty-four-hour screenplay, symbolic three-man ensemble, Chanteloup-les-Vignes preparation, local extras, wide banlieue and long-lens Paris production split, black-and-white 35mm image system, clock-and-gunshot editing, offscreen sound design, environmental music and institutional legacy are supported by filmmaker interviews, production archives, film institutes and award records.",
    sources: [
      {
        title: "Mathieu Kassovitz on La Haine: ‘I made the movie because kids die’",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/sight-and-sound/interviews/mathieu-kassovitz-la-haine-legacy",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "Kassovitz documents the real police killing, three-to-four-month writing process, ending-first twenty-four-hour structure, casting logic, black-and-white choice, wide-versus-long-lens geography, reduced Paris crew, environmental music and American Graffiti-inspired offscreen sound method."
      },
      {
        title: "La haine",
        publisher: "The Criterion Collection",
        url: "https://www.criterion.com/films/216-la-haine",
        sourceKind: "archive_feature",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "Criterion supplies the complete principal craft credits, confirms the black-and-white 1.85:1 presentation, records the Aïm-supervised restoration and preserves production footage, setting material, deleted scenes and cast-and-crew documentary evidence."
      },
      {
        title: "La Haine",
        publisher: "Festival de Cannes",
        url: "https://www.festival-cannes.com/en/f/la-haine/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "The official festival record confirms the 1995 competition selection, Best Director award, 95-minute French production and credits for Kassovitz, Pierre Aïm, Scott Stevenson and Giuseppe Ponturo."
      },
      {
        title: "La haine",
        publisher: "Académie des César",
        url: "https://www.academie-cinema.org/films/la-haine-29751/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The official César record documents two wins from ten nominations, including Best Film and Best Editing, alongside nominations for directing, screenplay, cinematography, sound and the three central performers."
      },
      {
        title: "Mathieu Kassovitz à propos du point de départ de son film La Haine",
        publisher: "Institut national de l'audiovisuel",
        url: "https://www.ina.fr/ina-eclaire-actu/video/i15146685/mathieu-kassovitz-a-propos-du-point-de-depart-de-son-film-la-haine",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay"],
        note: "The December 1995 France 2 archive records Kassovitz identifying the death of seventeen-year-old Makomé M'Bowolé in police custody as the tragic event that initiated the film."
      },
      {
        title: "La haine",
        publisher: "Danish Film Institute",
        url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/hadet",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The national film database confirms the French production companies and principal direction, screenplay, cinematography, editing, music and production-design credits, independently grounding the craft structure."
      },
      {
        title: "La Haine Turns 25 – And Is As Relevant As Ever",
        publisher: "AnOther",
        url: "https://www.anothermag.com/design-living/12574/la-haine-25-anniversary-mathieu-kassovitz-hubert-kounde-pierre-aim-interview-bfi",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "cinematography"],
        note: "The anniversary interviews with Kassovitz, Hubert Koundé and Pierre Aïm document the young low-resource production, the director's exact visual plan and the black-and-white decision as a means of depth, documentary feeling and political force."
      },
      {
        title: "La Haine",
        publisher: "Minerva Pictures",
        url: "https://www.minervapictures.com/film/la-haine/?lang=en",
        sourceKind: "archive_feature",
        supports: ["overall", "cinematography"],
        note: "The rights-holder record confirms the Canal+, Cofinergie 6, Egg Pictures and Lazennec production structure and documents the 4K restoration from original negatives supervised by Pierre Aïm and approved by Kassovitz."
      },
      {
        title: "La Haine, jusqu'ici tout va bien",
        publisher: "Maison CF",
        url: "https://maisoncf.fr/en/products/la-haine-gilles-favier-mathieu-kassovitz/",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography"],
        note: "Gilles Favier's production archive records eight weeks of filming in Chanteloup-les-Vignes, daily photographic observation and the recruitment of housing-project residents as extras, preserving the shoot's local relationship and material conditions."
      },
      {
        title: "Comment Mathieu Kassovitz a recruté les acteurs de La Haine",
        publisher: "Le Monde",
        url: "https://www.lemonde.fr/archives/article/1995/06/01/comment-mathieu-kassovitz-a-recrute-les-acteurs-de-la-haine_3867777_1819218.html",
        sourceKind: "trade_feature",
        supports: ["overall", "screenplay"],
        note: "The contemporary June 1995 report documents the film's Cannes impact, controlled black-and-white presentation and the recruitment and positioning of its central young ensemble at the moment of release."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];

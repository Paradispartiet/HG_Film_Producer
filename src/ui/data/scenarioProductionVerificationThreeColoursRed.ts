import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const threeColoursRedProductionCaseVerification = {
  scenarioId: "scenario_three_colours_red_1994",
  status: "verified",
  verifiedAt: "2026-08-23",
  summary: "Three Colours: Red is verified as a Swiss-French-Polish transnational production directed by Krzysztof Kieślowski, produced/presented by Marin Karmitz and built through a multi-company/public-support network rather than a single national production structure. Festival de Cannes records the film in the 1994 competition with Switzerland/France/Poland, 95 minutes, Kieślowski direction, Kieślowski and Krzysztof Piesiewicz screenplay, Piotr Sobociński cinematography, Zbigniew Preisner music, Jacques Witta editing and Claude Lenoir production design. BFI records France/Switzerland/Poland, Marin Karmitz producing and 99 minutes, while its broad writer listing includes Agnieszka Holland, Edward Zebrowski and Piotr Sobociński. Criterion resolves that credit structure more precisely by listing Kieślowski and Piesiewicz as screenplay writers and Holland, Zebrowski and Sobociński as screenplay consultants; it also credits Jean-Claude Laureux for sound, William Flageollet as sound mixer, Corinne Jorry for costumes, Emmanuel Finkiel as assistant director, Gérard Ruey as production manager, Yvon Crenn as executive producer, David Campbell as Technocrane operator and Riccardo Brunner as Steadicam operator. BFI Southbank programme notes document MK2 Productions, France 3 Cinéma, CAB Productions and Film Studio Tor as production companies, Canal+ participation, Eurimages support, Télévision Suisse Romande co-production and Swiss Federal Office of Culture support. These roles remain institutionally distinct rather than being flattened into one generic finance source. A 2023 Guardian oral history provides participant testimony from Piesiewicz and Irène Jacob: the shoot was in Geneva; Jacob says the first three weeks covered the judge's house, she and Jean-Louis Trintignant rehearsed their relative standing/sitting positions, Kieślowski worked closely beside the camera, and Kieślowski with Sobociński sought new ways to convey feeling through camera movement. She identifies the opening crane shot and describes the chiaroscuro lighting as exceptionally present. This is direct process evidence but does not establish a camera body, lens, film stock, crane model, lighting fixture/ratio, exposure or laboratory recipe. The red motif is therefore treated as a collaboration among finished-image composition, cinematography, design and costume, not as evidence of one universal filter, stock, LUT or printer-light formula. Piesiewicz's account of the judge's eavesdropping premise and the trilogy's fraternity concept is narrative/development evidence only; no real-world interception method is taught. Runtime/date records remain version-sensitive: Cannes gives 95 minutes/1994, BFI and Criterion give 99 minutes/1994, and Cinémathèque française catalogues 1993/96 minutes while documenting the transnational production companies. The case uses 99 minutes canonically because two major institutional records converge there, while retaining 95/96/99 and 1993/1994 as explicit catalogue variance. Later Criterion restoration and modern soundtrack metadata are strictly downstream preservation/release history and do not prove original-production technology.",
  sources: [
    {
      title: "TROIS COULEURS ROUGE",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/trois-couleurs-rouge/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional 1994 competition record for Switzerland/France/Poland, 95 minutes, Kieślowski/Piesiewicz screenplay, Sobociński cinematography, Preisner music, Witta editing and Lenoir production design."
    },
    {
      title: "Trois couleurs rouge (1994)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/ab9fc02d-7f6b-586c-90c6-8b2458fabef1/trois-couleurs-rouge",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Institutional record for France/Switzerland/Poland, Marin Karmitz production, 99 minutes and a broad writer listing including Holland, Zebrowski and Sobociński."
    },
    {
      title: "Three Colors: Red",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/27733-three-colors-red",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Detailed credits distinguishing Kieślowski/Piesiewicz screenplay from Holland/Zebrowski/Sobociński consultancy and documenting Witta, Laureux, Flageollet, Lenoir, Jorry, Campbell, Brunner, Ruey and Crenn; 99-minute record. Later restoration metadata is treated as downstream."
    },
    {
      title: "Three Colours - Red - BFI Southbank Programme Notes",
      publisher: "British Film Institute",
      url: "https://bfidatadigipres.github.io/the%20three%20colours%20trilogy/2023/05/26/three-colours-red/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Programme-note credits for MK2, France 3, CAB, Film Studio Tor, Canal+, Eurimages, TSR, Swiss federal cultural support, Yvon Crenn, Marin Karmitz, Gérard Ruey and Emmanuel Finkiel."
    },
    {
      title: "‘What makes you angry?’ How we made Three Colours: Red",
      publisher: "The Guardian",
      url: "https://www.theguardian.com/culture/2023/may/01/how-we-made-three-colours-red-krzysztof-kieslowski-french-revolution",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Participant oral history from Piesiewicz and Irène Jacob documenting development context, Geneva, the first three weeks in the judge's house, blocking, camera collaboration, opening crane movement, chiaroscuro and trilogy production pressure."
    },
    {
      title: "Trois couleurs : Rouge",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/film/52785.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional catalogue preserving 1993/96-minute variance and the MK2/France 3/CAB/Tor transnational production-company structure, plus primary screenplay and production-management credits."
    },
    {
      title: "Three Colours: Red",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/film/401451/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "European film-industry record corroborating Switzerland/Poland/France, 99 minutes, Sobociński cinematography, Witta editing, Lenoir art direction and Karmitz/Crenn producing roles."
    },
    {
      title: "The conclusion we came to about equality is that nobody really wants it: Krzysztof Kieślowski on the Three Colours trilogy",
      publisher: "BFI Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/features/kieslowski-three-colours-interview",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Contemporary 1994 Kieślowski interview used for trilogy/retirement and cultural context only, not as proof of undocumented camera or post-production technique."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const inTheNameOfTheFatherVerificationRecords = [
  {
    scenarioId: "scenario_in_the_name_of_the_father_1993",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The case's Irish-British-American production context, Gerry Conlon adaptation, Guildford Four miscarriage-of-justice history, father-son prison structure, credited design, Technicolor photography, Academy-nominated editing, Dolby sound, Trevor Jones music and international reception are supported by institutional, festival and awards records.",
    sources: [
      {
        title: "In the Name of the Father (1993)",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/film/87147aca-1354-58dd-b620-af74a93ab4da/in-the-name-of-the-father",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography"],
        note: "BFI confirms the 1993 Ireland-United Kingdom-United States production, Sheridan's direction and production, the Sheridan-George screenplay and the principal Day-Lewis, Postlethwaite and Thompson cast."
      },
      {
        title: "10 great films about the Troubles",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/lists/10-great-films-about-troubles",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "editing"],
        note: "BFI identifies the Guildford Four arrest, wrongful conviction and acquittal as the film's political basis, records the Golden Bear and Oscar recognition and explicitly notes the enlarged dramatic role assigned to Gareth Peirce."
      },
      {
        title: "In the Name of the Father",
        publisher: "Danish Film Institute",
        url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/name-father",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "DFI records the 133-minute Ireland-United Kingdom-United States feature, Hell's Kitchen and Universal production, Technicolor and Dolby presentation, Peter Biziou photography, Gerry Hambling and Clive Barrett editing, Trevor Jones music and Caroline Amies design."
      },
      {
        title: "In the Name of the Father",
        publisher: "Festival Premiers Plans d'Angers",
        url: "https://www.premiersplans.org/en/film/in-the-name-of-the-father",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The festival record connects Sheridan and Terry George's adaptation to Gerry Conlon's Proved Innocent, summarizes the coerced-confession and father-son prison structure, lists the principal craft credits and records the 1994 Golden Bear."
      },
      {
        title: "1994 Academy Awards",
        publisher: "Academy of Motion Picture Arts and Sciences",
        url: "https://www.oscars.org/oscars/ceremonies/1994/P?qt-honorees=1",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "editing"],
        note: "The Academy's official record documents seven nominations for picture, Sheridan's direction, adapted screenplay, Gerry Hambling's editing and the performances of Daniel Day-Lewis, Pete Postlethwaite and Emma Thompson."
      },
      {
        title: "1994 Film Awards results",
        publisher: "BAFTA",
        url: "https://www.bafta.org/awards/film/?award-year=1994",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay"],
        note: "BAFTA's official results record adapted-screenplay nominations for Terry George and Jim Sheridan and a leading-actor nomination for Daniel Day-Lewis, supporting the film's recognized adaptation and performance system."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];

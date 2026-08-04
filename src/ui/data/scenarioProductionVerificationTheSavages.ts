import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";
import { fortyFiveYearsProductionCaseVerification } from "./scenarioProductionVerification45Years";

export const theSavagesProductionCaseVerification = {
  scenarioId: "scenario_the_savages_2007",
  status: "verified",
  verifiedAt: "2026-07-27",
  summary: "The case's American independent financing history, testimony-derived elder-care screenplay, protected sibling casting, thirty-day location shoot, real institutional spaces, handheld 35 mm image, performance-led editing, practical sound, restrained music and Sundance-to-Academy legacy are supported by filmmaker, institute, archive and craft records.",
  sources: [
    {
      title: "The Savages",
      publisher: "Searchlight Pictures",
      url: "https://www.searchlightpictures.com/thesavages",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The official distributor page preserves the film's sibling-and-father premise, principal cast, writer-director authorship and Searchlight release identity."
    },
    {
      title: "The Savages",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/55184-THE-SAVAGES",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI documents the five-page 1997 origin, Focus casting dispute, CAA-Lone Star and Fox Searchlight financing, Sun City-New York-Buffalo locations, Sundance premiere and complete production, camera, design, editing, costume, music and sound credits."
    },
    {
      title: "The 80th Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2008",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The Academy records Laura Linney's Actress nomination and Tamara Jenkins's Original Screenplay nomination, supporting the film's reception and institutional legacy."
    },
    {
      title: "Sundance Interview: RT Talks With The Savages' Tamara Jenkins",
      publisher: "Rotten Tomatoes",
      url: "https://editorial.rottentomatoes.com/article/sundance-interview-rt-talks-with-the-savages-tamara-jenkins/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Jenkins discusses the personal and fictional roots of the sibling story, its inverse relationship to Tokyo Story and the independent struggle to make an unglamorous elder-care film."
    },
    {
      title: "The Savages – Tamara Jenkins interview",
      publisher: "IndieLondon",
      url: "https://www.indielondon.co.uk/Film-Review/the-savages-tamara-jenkins-interview",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Jenkins explains why the dementia-and-nursing-home premise was difficult to finance and how personal experiences were transformed rather than directly reproduced."
    },
    {
      title: "The Savages",
      publisher: "Santa Barbara International Film Festival",
      url: "https://sbiff.org/the-savages/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The production account documents a thirty-day shoot across New York City, Buffalo and Sun City and the deliberate geographic contrast among the three family members' worlds and care environments."
    },
    {
      title: "The Savages (2007)",
      publisher: "Swedish Film Database",
      url: "https://www.svenskfilmdatabas.se/en/item/?itemid=65896&type=film",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The national database verifies the April 2006 production, locations, companies and principal craft credits and records colour 35 mm, 1.66:1, Technicolor and Dolby Digital presentation."
    },
    {
      title: "Mott Hupfel III Integrates the Camera into the Scene for The Savages",
      publisher: "ICG Magazine",
      url: "https://icgmagazine.com/2007/dec/dec07.html",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "The cinematography feature documents Hupfel and Jenkins's visual references, performance-responsive handheld method, the disused nursing-home location and colour-finishing choices that preserved editorial flexibility."
    },
    {
      title: "The Savages",
      publisher: "Irish Film Institute",
      url: "https://ifi.ie/film/the-savages/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "IFI records the colour feature, 113-minute duration, Dolby and DTS presentation and describes Jenkins's subtle, performance-dominated direction of the family-care story."
    },
    {
      title: "Tamara Jenkins, Laughing with The Savages",
      publisher: "Fresh Air",
      url: "https://www.tpr.org/2007-11-27/tamara-jenkins-laughing-with-the-savages",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "sound"],
      note: "The contemporary interview connects Jenkins's family experience to the fictional siblings and explains the comic attention she uses to approach dementia, nursing homes and adult family obligation."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

export const theSavagesVerificationRecords = [
  theSavagesProductionCaseVerification,
  fortyFiveYearsProductionCaseVerification,
] as const satisfies readonly ProductionCaseVerificationRecord[];

import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const leavingLasVegasVerificationRecords = [
  {
    scenarioId: "scenario_leaving_las_vegas_1995",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The case's John O'Brien adaptation, protected non-redemptive ending, transatlantic low-budget production, four-million-dollar twenty-eight-day schedule, two-camera Super 16 method, minimal lighting, mobile Nevada locations, actor rehearsal and field research, donated Vivienne Westwood costume system, Figgis-composed jazz score and hand-built optical title sequence are supported by filmmaker interviews, institutional records, craft documentation and contemporary awards archives.",
    sources: [
      {
        title: "Mike Figgis looks back on Leaving Las Vegas: ‘My credit rating had gone down a lot. I was known as a troublemaker’",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/interviews/mike-figgis-leaving-las-vegas-nicolas-cage",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "Figgis documents the rights and adaptation, John O'Brien's death, reduced fees, Cage and Shue casting and research, Vivienne Westwood's donated costumes, Super 16 aesthetic and economics, two-camera method, minimal lighting, Las Vegas restrictions, vehicle shooting, Laughlin substitutions, MGM/UA pickup and the later restoration."
      },
      {
        title: "Visual History with Mike Figgis",
        publisher: "Directors Guild of America",
        url: "https://www.dga.org/Craft/VisualHistory/Interviews/Mike-Figgis",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography"],
        note: "The DGA career interview places Leaving Las Vegas inside Figgis's jazz-informed experimental narrative practice and confirms the film's DGA, directing and adapted-screenplay recognition."
      },
      {
        title: "Mike Figgis webchat – your questions answered on Nicolas Cage, rule breaking and guilty pleasures",
        publisher: "The Guardian",
        url: "https://www.theguardian.com/books/live/2017/jun/16/mike-figgis-webchat-post-your-questions-now",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography"],
        note: "Figgis explains his cut-and-paste adaptation process and confirms that he owned the Aaton 16mm camera, that Declan Quinn embraced the format and that Figgis operated the second camera."
      },
      {
        title: "Mike Figgis by Bette Gordon",
        publisher: "BOMB Magazine",
        url: "https://bombmagazine.org/articles/1996/01/01/mike-figgis/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "sound"],
        note: "The contemporary writer-director-composer interview documents the jazz construction of the film, Figgis's trumpet and keyboard performance, his production of the music tracks and the score's role as the emotional spine."
      },
      {
        title: "Leaving Las Vegas (1995)",
        publisher: "Turner Classic Movies",
        url: "https://www.tcm.com/articles/021190/leaving-las-vegas-1995",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography"],
        note: "TCM records the independent four-million-dollar twenty-eight-day location production, small crew, Cage's physiological alcoholism research, Shue's research with sex workers and the improvised therapist material filmed on the first production day."
      },
      {
        title: "Leaving Las Vegas",
        publisher: "Danish Film Institute",
        url: "https://www.dfi.dk/viden-om-film/filmdatabasen/film/leaving-las-vegas",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The national film database confirms the France-United States-United Kingdom production, John O'Brien source novel, producer Stuart Regen and the principal screenplay, camera, editing, music and production-design credits."
      },
      {
        title: "Leaving Las Vegas",
        publisher: "American Film Institute",
        url: "https://catalog.afi.com/Film/59945-LEAVING-LAS-VEGAS?cxt=filmography",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "AFI confirms Initial Productions, MGM/UA distribution, the transatlantic countries, literary source, producers, principal cast and the direction, screenplay, cinematography, editing, design and music departments."
      },
      {
        title: "The 68th Academy Awards — 1996",
        publisher: "Academy of Motion Picture Arts and Sciences",
        url: "https://www.oscars.org/oscars/ceremonies/1996/m",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay"],
        note: "The Academy record documents four nominations—actor, actress, directing and adapted screenplay—and Nicolas Cage's Best Actor win, grounding the film's immediate institutional reception and performance legacy."
      },
      {
        title: "Cage relishes operatic role in tragic ‘Leaving Las Vegas’",
        publisher: "RogerEbert.com",
        url: "https://www.rogerebert.com/interviews/cage-relishes-operatic-role-in-tragic-leaving-las-vegas",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "cinematography", "sound"],
        note: "Cage confirms the four-million-dollar budget, twenty-eight-day shoot, 16mm format and its muted pastel quality, the smaller camera's effect on performance, his alcoholism research and the blues-to-jazz-to-opera musical progression."
      },
      {
        title: "Leaving Las Vegas",
        publisher: "John Goodinson",
        url: "https://www.jgoodinson.co.uk/index.php/leaving-las-vegas",
        sourceKind: "archive_feature",
        supports: ["overall", "cinematography", "editing"],
        note: "The title designer's production record documents the open brief, storyboard, hand-lettered alphabet, process-camera duplication, optical assembly at Cine Image and use of an accidental helicopter whip-pan in the animated main-title sequence."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];

import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const downByLawVerificationRecords = [
  {
    scenarioId: "scenario_down_by_law_1986",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The case's mid-1980s American independent context, neo-Beat noir construction, entirely Louisiana location production, three-performer language system, omitted jailbreak procedure, Robby Müller's black-and-white 35 mm photography, patient editing and Waits–Lurie music structure are supported by institutional, craft, catalog and filmmaker-interview sources.",
    sources: [
      {
        title: "Down by Law",
        publisher: "The Criterion Collection",
        url: "https://www.criterion.com/films/719-down-by-law",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "Criterion records Jarmusch's neo-Beat noir description, the director-approved restoration, 1.78:1 black-and-white presentation, interviews with Jarmusch and Robby Müller, location stills, outtakes, isolated music and Cannes production material."
      },
      {
        title: "Jim Jarmusch: Down By Law",
        publisher: "Academy of Motion Picture Arts and Sciences",
        url: "https://www.oscars.org/events/jim-jarmusch-down-law",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "sound"],
        note: "The Academy identifies the 35 mm black-and-white production, Jarmusch's American independent position, Müller's first collaboration with him, the Southern Gothic and beatnik visual balance, and the Waits–Lurie music system."
      },
      {
        title: "Remembering Robby Müller",
        publisher: "American Cinematographer",
        url: "https://theasc.com/articles/remembering-robby-m%C3%BCller",
        sourceKind: "trade_feature",
        supports: ["overall", "cinematography"],
        note: "ASC documents the 1985 Louisiana shoot as the first Jarmusch–Müller collaboration and characterizes its languid black-and-white photography as a response to both Jarmusch's storytelling rhythm and the New Orleans and bayou locations."
      },
      {
        title: "AFI Catalog: Down by Law",
        publisher: "American Film Institute",
        url: "https://catalog.afi.com/Film/57310-DOWN-BY-LAW",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography", "sound"],
        note: "AFI documents that production began in late 1985, was filmed entirely on location in Louisiana, used black-and-white 35 mm with Arriflex cameras and Zeiss lenses, and incorporated songs by Tom Waits and Irma Thomas."
      },
      {
        title: "Jim Jarmusch Is the God of Small Things",
        publisher: "GQ",
        url: "https://www.gq.com/story/jim-jarmusch-is-the-god-of-small-things",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "editing"],
        note: "Jarmusch explains that he deliberately avoids expected dramatic peaks and is specifically proud of skipping the jailbreak mechanics in Down by Law; the interview also describes his blueprint-like scripts, adaptable shot planning and collaborator-led process."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];

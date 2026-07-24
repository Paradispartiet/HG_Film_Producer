import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const clockersVerificationRecords = [
  {
    scenarioId: "scenario_clockers_1995",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The case's Universal-to-Spike-Lee adaptation history, Richard Price collaboration, Brooklyn housing-project locations, crime-scene research, newcomer casting, production-design references, eight-week stock testing, cross-processed Ektachrome, scene-specific lighting and lenses, subjective flashbacks, practical photographic effects and institutional craft credits are supported by contemporary cinematography reporting, archives, film institutes and filmmaker-career records.",
    sources: [
      {
        title: "Clockers: Between ‘Rock’ and a Hard Place",
        publisher: "American Cinematographer",
        url: "https://theasc.com/article/clockers-lee-sayeed/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The original September 1995 production feature documents the Scorsese-to-Lee transition, Price and Lee's new draft, crime-scene research, location authenticity, newcomer casting, Gowanus production, design references, eight weeks of stock tests, cross-processed 5239, lighting, lenses, flashbacks and practical camera effects."
      },
      {
        title: "Clockers — BFI Southbank Programme Notes",
        publisher: "British Film Institute",
        url: "https://bfidatadigipres.github.io/moviedrome%3Cbr%3Ebringing%20the%20cult%20tv%20series%20to%20the%20big%20screen/2025/07/26/clockers/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The BFI programme record preserves contemporary Sight and Sound reception and supplies the full production, camera, editorial, design, costume, makeup, music, sound, effects and technical-consultant credits for the Universal and 40 Acres and a Mule production."
      },
      {
        title: "Clockers",
        publisher: "Danish Film Institute",
        url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/clockers",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The national film database confirms the 1995 American feature, 40 Acres and a Mule production, Richard Price screenplay credit and the principal photography, editing, music and production-design departments."
      },
      {
        title: "Clockers",
        publisher: "Australian Centre for the Moving Image",
        url: "https://www.acmi.net.au/works/90470--clockers/",
        sourceKind: "film_institute",
        supports: ["overall"],
        note: "ACMI's collection record documents the film as a 1995 United States production by 40 Acres and a Mule and Universal, credits Lee, Kilik, Scorsese and the running time, and records physical 16mm and VHS access holdings."
      },
      {
        title: "Clockers",
        publisher: "American Film Institute",
        url: "https://catalog.afi.com/Film/59850-CLOCKERS?cxt=filmography",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography"],
        note: "AFI's filmography record confirms the 1995 drama, principal cast, director, writers, producers and cinematographer, independently grounding the core authorship and industry structure."
      },
      {
        title: "Spike Lee research catalog holdings",
        publisher: "New York Public Library",
        url: "https://www.nypl.org/research/research-catalog/search?filters%5BcontributorLiteral%5D%5B0%5D=Lee%2C+Spike",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay"],
        note: "The NYPL research catalog records a June 1994 fourth-draft Clockers typescript by Richard Price and Spike Lee, David Lee's 1995 motion-picture stills collection and the Schomburg Center's preserved release copy."
      },
      {
        title: "Go Behind the Scenes of a Spike Lee Joint",
        publisher: "Academy of Motion Picture Arts and Sciences",
        url: "https://www.oscars.org/news/go-behind-scenes-spike-lee-joint",
        sourceKind: "archive_feature",
        supports: ["overall", "cinematography"],
        note: "The Academy's David Lee still-photography exhibition preserves behind-the-scenes production documentation of Spike Lee, Martin Scorsese and Harvey Keitel working on Clockers."
      },
      {
        title: "Sam Pollard",
        publisher: "National Endowment for the Arts",
        url: "https://www.arts.gov/stories/podcast/sam-pollard",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "editing"],
        note: "Pollard describes the origin and long duration of his collaboration with Spike Lee and explicitly identifies Clockers among the fiction features he edited, placing its postproduction within his documentary-informed editorial career."
      },
      {
        title: "Sam Pollard in Conversation with Geeta Gandbhir",
        publisher: "International Documentary Association",
        url: "https://www.documentary.org/public/sam-pollard-conversation-geeta-gandbhir",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "editing"],
        note: "The IDA career record independently confirms Pollard's editing of Clockers within his sustained 1990–2010 collaboration with Lee and connects that fiction work to his wider documentary practice."
      },
      {
        title: "Richard Price's Street Life",
        publisher: "The New Yorker",
        url: "https://www.newyorker.com/culture/persons-of-interest/richard-prices-street-life",
        sourceKind: "trade_feature",
        supports: ["overall", "screenplay"],
        note: "The author profile documents Universal's pre-publication rights purchase, Scorsese's original attachment, Lee's takeover of screenwriting, the move from New Jersey to Brooklyn and the narrowing of Price's many-voiced novel around Strike."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];

import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const brownsAtlasWorksProductionCaseVerification = {
  scenarioId: "scenario_employees_leaving_browns_atlas_works_sheffield_1901",
  status: "verified",
  verifiedAt: "2026-08-14",
  summary: "Employees Leaving Brown's Atlas Works is verified as a 1901 Sheffield Mitchell and Kenyon local actuality built around factory-gate staging, recognizable crowd participation and the wider showman-commissioned business of screening local people back to paying local audiences, with film-specific evidence from BFI and local archival context from Sheffield Libraries plus broader early-exhibition context from the National Science and Media Museum.",
  sources: [
    {
      title: "Employees Leaving Brown's Atlas Works, Sheffield (1901)",
      publisher: "British Film Institute",
      url: "https://player.bfi.org.uk/free/film/watch-employees-leaving-browns-atlas-works-sheffield-1901-1901-online",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "BFI identifies the two-minute 1901 Sheffield nonfiction film, records that workers are visibly marshalled past the camera, treats staging as common in Mitchell and Kenyon factory-gate films, notes the possible but unconfirmed Thomas connection, and describes the concluding workers and children waving to camera."
    },
    {
      title: "Mitchell & Kenyon's Edwardian Britain",
      publisher: "BFI National Archive",
      url: "https://replay.bfi.org.uk/collection/430",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The collection history identifies Sagar Mitchell and James Kenyon as a Blackburn filmmaking duo who toured Britain making films for fairground operators and other showmen to screen to paying audiences, explicitly describing the recognition promise as an opportunity to see yourself as others see you."
    },
    {
      title: "Introducing our Writer in Residence, Désirée Reynolds",
      publisher: "Sheffield Libraries / Sheffield City Archives",
      url: "https://shefflibraries.blogspot.com/2021/07/introducing-our-writer-in-residence.html",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Sheffield Libraries and City Archives use the surviving 1901 Brown's Atlas Works film as local historical evidence and direct readers to the complete Mitchell and Kenyon view, independently confirming the film's place in Sheffield's preserved social record."
    },
    {
      title: "A very short history of cinema",
      publisher: "National Science and Media Museum",
      url: "https://blog.scienceandmediamuseum.org.uk/very-short-history-of-cinema/",
      sourceKind: "archive_feature",
      supports: ["overall", "sound"],
      note: "The museum's early-cinema history supplies the broader exhibition context in which films circulated through fairgrounds and music halls before dedicated cinemas, with showmanship and variable live presentation surrounding silent projected images. It supports the exhibition layer only, not film-specific authorship claims."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

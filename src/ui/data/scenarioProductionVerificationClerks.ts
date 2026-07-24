import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const clerksVerificationRecords = [
  {
    scenarioId: "scenario_clerks_1994",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The case's $27,575 View Askew production, real New Jersey stores, overnight access, single-camera 16mm black-and-white photography, fluorescent-light solution, unknown ensemble, dialogue-led workplace structure, Smith-Mosier editing, Sundance breakthrough, Miramax acquisition and National Film Registry afterlife are supported by institutional, archival and filmmaker sources.",
    sources: [
      {
        title: "Clerks",
        publisher: "AFI Catalog of Feature Films",
        url: "https://catalog.afi.com/Film/59764-CLERKS",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "AFI identifies View Askew and Miramax, Kevin Smith and Scott Mosier as producers and editors, Smith as writer-director, David Klein as cinematographer, Scott Angley as musician, black-and-white sound presentation and the 1994 New Directors/New Films and theatrical dates."
      },
      {
        title: "Clerks (1994)",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/film/ba56a30a-3c8c-5ad3-8b55-33be992d91c1/clerks",
        sourceKind: "film_institute",
        supports: ["overall"],
        note: "The BFI film record confirms the United States production, Kevin Smith's writing and direction, Smith and Mosier's producing roles, the principal ensemble and the feature runtime."
      },
      {
        title: "Watch Clerks online",
        publisher: "BFI Player",
        url: "https://player.bfi.org.uk/rentals/film/watch-clerks-1994-online",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay"],
        note: "BFI describes the $27,000 store-based production, its more than $3 million return, its place in the new wave of American independent filmmaking and the dialogue, slacker comedy and memorable character system that carried the film."
      },
      {
        title: "As Clerks Turns 30, Look Back at Kevin Smith's Iconic Fest Appearances",
        publisher: "Sundance Institute",
        url: "https://www.sundance.org/blogs/as-clerks-turns-30-look-back-at-kevin-smiths-iconic-fest-appearances/",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay"],
        note: "Sundance documents the under-$30,000 black-and-white production, working-class dialogue and characters, 1994 premiere, Miramax acquisition, Filmmaker Trophy Dramatic and the film's later status as an independent cultural touchstone."
      },
      {
        title: "How Kevin Smith Made and Distributed Red State His Own Way",
        publisher: "Sundance Institute",
        url: "https://www.sundance.org/blogs/how-kevin-smith-made-and-distributed-red-state-his-own-way-3/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "editing"],
        note: "Smith gives the exact Clerks production cost as $27,575 and explains the long path to profit, providing direct evidence for the scale and economics of the original independent production."
      },
      {
        title: "Women Rule 2019 National Film Registry",
        publisher: "Library of Congress",
        url: "https://www.loc.gov/item/prn-19-116/women-rule-2019-national-film-registry/2019-12-11/",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay"],
        note: "The Library of Congress records Smith's $27,000 debut, New Jersey convenience-store premise, sleeper-hit gross above $3 million, cult and generational legacy, public-vote result and 2019 National Film Registry selection."
      },
      {
        title: "Kevin and David Make a Porno",
        publisher: "MovieMaker Magazine",
        url: "https://www.moviemaker.com/kevin-smith-david-klein-zack-and-miri-make-a-porno-20081014/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography"],
        note: "Smith and David Klein describe meeting at film school, Smith returning to write from convenience-store experience and Clerks being produced in black and white with a single 16mm camera while Smith worked two store shifts."
      },
      {
        title: "Kevin Smith Breaks Down His Most Iconic Films",
        publisher: "GQ",
        url: "https://www.gq.com/video/watch/iconic-characters-kevin-smith-breaks-down-his-most-iconic-films",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "cinematography"],
        note: "Smith directly explains that the stores' fluorescent lights would contaminate 16mm colour, that the production could not afford a corrective lighting package and that Klein proposed black-and-white capture as the practical solution."
      },
      {
        title: "Clerks",
        publisher: "British Board of Film Classification",
        url: "https://www.bbfc.co.uk/release/clerks-q29sbgvjdglvbjpwwc0zmdgxnjg",
        sourceKind: "film_institute",
        supports: ["overall", "editing", "sound"],
        note: "The BBFC records the 1994 production, Kevin Smith, principal cast, cinema and home-video versions, audio-commentary editions and the preserved first-cut supplementary material documenting the film's version history."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];

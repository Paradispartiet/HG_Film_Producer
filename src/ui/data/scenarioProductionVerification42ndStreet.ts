import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const fortySecondStreetProductionCaseVerification = {
  scenarioId: "scenario_42nd_street_1933",
  status: "verified",
  verifiedAt: "2026-08-18",
  summary: "AFI, the Academy, Library of Congress and BFI support 42nd Street as a tightly scheduled Warner Bros. backstage-musical production rather than a generic Busby Berkeley spectacle preset. AFI records Warner Bros. Pictures as production company, Warner Bros. and The Vitaphone Corp. as distributors, Lloyd Bacon directing after Mervyn LeRoy was replaced because of illness, Darryl F. Zanuck producing, Hal B. Wallis supervising, Rian James and James Seymour adapting Bradford Ropes's novel, Sol Polito photographing with Michael Joyce on second camera and Speed Mitchell assisting, Jack Okey handling art direction, Frank Ware and Thomas Pratt editing, Orry-Kelly supplying gowns, Harry Warren and Al Dubin writing songs, Leo F. Forbstein directing the Vitaphone orchestra, Nathan Levinson and Dolph Thomas handling sound, and Busby Berkeley explicitly credited with creating and staging the dances and ensembles. AFI also documents a 28-day shooting schedule, a $340,000 total cost, Western Electric sound and an 89-minute runtime. BFI explains Berkeley's practice of synchronizing musical sequences to pre-recorded tracks so the camera could move freely through large studio sets and identifies 42nd Street as the breakthrough where choreography is designed for cinema rather than merely recorded from a stage. The Academy separately records nominations for Outstanding Production and Sound Recording, the latter for Warner Bros. Studio Sound Department under Nathan Levinson. Library of Congress records the film's 1998 National Film Registry selection. The case keeps Bacon's overall film direction distinct from Berkeley's dance authorship, treats chorus labor, gender display and Depression precarity critically, and refuses unsupported claims about crane models, lenses, film stock, microphone types, exact dancer counts, rehearsal duration or shot-by-shot rigging.",
  sources: [
    {
      title: "42nd Street (1933)",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/3955-42ND-STREET",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI verifies Warner Bros. production/distribution, Bacon/Zanuck/Wallis, James/Seymour/Ropes, Polito/Joyce/Mitchell, Okey, Ware/Pratt, Orry-Kelly, Warren/Dubin, Forbstein, Levinson/Thomas, Berkeley's separate dance-and-ensemble credit, Western Electric sound, 89-minute runtime, 28-day schedule and $340,000 cost."
    },
    {
      title: "The 6th Academy Awards | 1934",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/1934",
      sourceKind: "film_institute",
      supports: ["overall", "sound"],
      note: "The Academy records 42nd Street nominations for Outstanding Production and Sound Recording, with the latter credited to Warner Bros. Studio Sound Department and sound director Nathan Levinson."
    },
    {
      title: "Complete National Film Registry Listing",
      publisher: "Library of Congress / National Film Preservation Board",
      url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/complete-national-film-registry-listing/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The Library of Congress lists 42nd Street (1933) as selected to the National Film Registry in 1998, keeping later preservation recognition on the reception side of the timeline."
    },
    {
      title: "National Film Registry Personnel Credits",
      publisher: "Library of Congress / National Film Preservation Board",
      url: "https://www.loc.gov/static/programs/national-film-preservation-board/film-registry/personnel-credits.html",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The Library's Registry personnel index identifies Busby Berkeley with choreography for 42nd Street, supporting the separation between Berkeley's dance authorship and Lloyd Bacon's overall direction."
    },
    {
      title: "Where to begin with Busby Berkeley",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/features/where-begin-busby-berkeley",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "sound"],
      note: "BFI describes Berkeley synchronizing musical sequences to pre-recorded tracks so the camera could move freely through elaborate studio sets, and treats 42nd Street as the central breakthrough in choreography made specifically for the camera."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

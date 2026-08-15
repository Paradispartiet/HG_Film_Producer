import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const wingsProductionCaseVerification = {
  scenarioId: "scenario_wings_1927",
  status: "verified",
  verifiedAt: "2026-08-15",
  summary: "AFI and the Academy support Wings as a 1927 Paramount Famous Lasky aviation feature directed by William A. Wellman and produced as a Lucien Hubbard production from John Monk Saunders' story and Hope Loring/Louis D. Lighton's screenplay. AFI documents extensive United States War Department cooperation, San Antonio-area military locations, aircraft, pilots, servicemen, trench construction and explosives; it also credits Harry Perry and a large specialist photography unit, E. Lloyd Sheldon and additional cutters, and Roy Pomeroy's engineering effects. AFI further distinguishes the 1927 premiere/roadshow period from the 1929 national release, when a musical score and sound effects were added. The Academy confirms the major craft credits, Pomeroy's Engineering Effects award and the 2011 restoration's recovery of color tints and recreated Handschiegl color effects. The Production Case therefore teaches large-scale studio and military logistics, aerial-camera coordination, effects and version-aware exhibition without claiming that one film or filmmaker invented aviation cinema.",
  sources: [
    {
      title: "Wings — AFI Catalog",
      publisher: "American Film Institute",
      url: "https://catalog.afi.com/Film/13362-WINGS",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI identifies Paramount Famous Lasky production/distribution, William A. Wellman, Lucien Hubbard, Saunders/Loring/Lighton/Johnson writing, Harry Perry and the broad photography unit, E. Lloyd Sheldon and cutters, Roy Pomeroy, San Antonio production, War Department aircraft/pilots/servicemen/trench/explosives cooperation, and the distinction between 1927 roadshow exhibition and the 1929 score-and-sound-effects national release."
    },
    {
      title: "Wings — 2011 digital restoration screening",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/events/wings-2011",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The Academy credits Wellman, Hubbard, Saunders, Loring, Lighton, Harry Perry, E. Lloyd Sheldon, Hans Dreier and Roy Pomeroy, identifies Paramount Famous Lasky, and documents the Paramount/Academy restoration with original color tints and recreated Handschiegl color effects plus modern live organ accompaniment."
    },
    {
      title: "The 1st Academy Awards — 1929",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/1929",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Official Academy record confirming Wings as the Outstanding Picture winner for Paramount Famous Lasky and Roy Pomeroy as the Engineering Effects winner."
    },
    {
      title: "Films Selected to the National Film Registry 1997",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/loc/lcib/9712/nfr.html",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Library of Congress announcement confirming Wings (1927) as a 1997 National Film Registry selection and placing its preservation legacy in the national archival record."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

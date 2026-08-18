import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const itHappenedOneNightProductionCaseVerification = {
  scenarioId: "scenario_it_happened_one_night_1934",
  status: "verified",
  verifiedAt: "2026-08-18",
  summary: "AFI, the Academy, Library of Congress and BFI support It Happened One Night as a Columbia smaller-studio screwball/road production built through borrowed stars, Capra-Riskin collaboration, location movement and sound-era dialogue rather than a generic romantic-comedy preset. AFI records Columbia Pictures Corp. as production and distribution company; Harry Cohn as producer; Frank Capra directing with C. C. Coleman assisting; Robert Riskin adapting Samuel Hopkins Adams's Night Bus; Joseph Walker photographing; Stephen Goosson handling art direction; Gene Havlick editing; Robert Kalloch designing costumes; Louis Silvers as music director; and Edward Bernds as sound engineer. AFI documents Clark Gable borrowed from MGM and Claudette Colbert borrowed from Paramount, principal photography from 13 November to 22 December 1933, retakes from 8 to 12 January 1934, Western Electric Noiseless Recording, black-and-white photography and a 105-minute runtime. Location reporting includes Pasadena's Busch Gardens and later production recollections of additional California work, but the case does not promote those recollections into a complete location itinerary. The production chronology is kept before the centralized July 1934 PCA seal regime rather than retroactively governed by it. The Academy records the later five-major-award sweep, while Library of Congress records the 1993 National Film Registry selection; both remain reception/preservation outcomes. BFI independently positions the film as a foundational screwball comedy and preserves its Capra/Riskin and 105-minute identity. The case refuses unsupported lenses, stock, microphone models, camera vehicles, transport rigs or a claim that later genre canonization caused the 1933 production choices.",
  sources: [
    {
      title: "It Happened One Night (1934)",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/6316-IT-HAPPENEDONENIGHT",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI verifies Columbia production/distribution, Cohn/Capra/Riskin/Adams, Walker, Goosson, Havlick, Kalloch, Silvers, Bernds, the MGM/Paramount star loans, November–December 1933 photography, January 1934 retakes, Western Electric Noiseless Recording, 105-minute runtime and documented location work."
    },
    {
      title: "The 7th Academy Awards | 1935",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/1935",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The Academy records It Happened One Night winning Outstanding Production, Directing, Actor, Actress and Writing Adaptation. The case keeps this historic sweep as reception evidence rather than production-era foresight."
    },
    {
      title: "It Happened One Night — National Film Registry essay",
      publisher: "Library of Congress / National Film Preservation Board",
      url: "https://www.loc.gov/static/programs/national-film-preservation-board/documents/it_happened.pdf",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The Library essay situates the Columbia film, Capra/Riskin collaboration, Gable's MGM loan and the film's later screwball and cultural legacy without turning that later reputation into a production cause."
    },
    {
      title: "Complete National Film Registry Listing",
      publisher: "Library of Congress / National Film Preservation Board",
      url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/complete-national-film-registry-listing/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The Library lists It Happened One Night (1934) as selected to the National Film Registry in 1993, preserving the distinction between production history and later preservation status."
    },
    {
      title: "It Happened One Night (1934)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/7a1146e1-5ea3-5a8b-8e89-895ada9f3220/it-happened-one-night",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "BFI independently identifies Capra's 1934 screwball comedy, Robert Riskin's screenplay, Clark Gable and Claudette Colbert, Columbia and the 105-minute runtime, supporting the case's genre and production identity."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

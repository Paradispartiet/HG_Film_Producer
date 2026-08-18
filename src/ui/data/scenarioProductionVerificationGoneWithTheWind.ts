import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const goneWithTheWindProductionCaseVerification = {
  scenarioId: "scenario_gone_with_the_wind_1939",
  status: "verified",
  verifiedAt: "2026-08-18",
  summary: "AFI, the Academy, Library of Congress and BFI support Gone with the Wind as a producer-centered Selznick package production assembled with MGM association, Loew's distribution, multiple principal directors and units, Technicolor, extensive production design, costume, editing, sound, music and effects labor. AFI records Selznick International Pictures as production company, in association with Metro-Goldwyn-Mayer, Loew's as distributor and David O. Selznick as producer; its production credits list Victor Fleming, Sam Wood and George Cukor as directors, William Cameron Menzies as production designer and second-unit director, Sidney Howard as screenwriter with documented contributing writers, Ernest Haller and Lee Garmes as photographers, Lyle Wheeler as art director, Hal C. Kern and James E. Newcom in editorial roles, Walter Plunkett as costume designer, Max Steiner as score composer and a large technical organization. AFI history documents Menzies's watercolor storyboards for every scene, director turnover, five-unit acceleration, production from the December 1938 Atlanta-fire work through additional shooting ending 11 November 1939, Technicolor, PCA no. 5729 and a 220-minute duration. The Academy records 14 nominations and nine wins on its current ceremony page, including Outstanding Production, Directing, Actress, Supporting Actress, Art Direction, Color Cinematography, Film Editing and Screenplay, plus nominations for sound, score and effects. Library of Congress lists the film in the National Film Registry from 1989. BFI independently emphasizes Selznick's producer-centered authorship, multiple directors/writers and Technicolor scale while also explicitly criticizing the film's racial stereotyping and romanticized treatment of slavery and the antebellum South. The case therefore never treats production scale as an ideological alibi: Lost Cause mythology, plantation nostalgia, slavery erasure/minimization and racist representation remain permanent critical safeguards. It also does not universalize the documented seven-Technicolor-camera Atlanta-fire setup to every scene or invent exact lenses, film stocks, microphones, track layouts or effects methods beyond source evidence.",
  sources: [
    {
      title: "Gone with the Wind (1939)",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/1181-GONE-WITH-THE-WIND",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI verifies Selznick International/MGM association/Loew's, Selznick, Fleming-Wood-Cukor and unit direction, Howard plus contributing writers, Haller/Garmes, Menzies/Wheeler, Kern/Newcom, Plunkett, Steiner, sound/effects/color personnel, production chronology, Technicolor, PCA 5729, 220 minutes and the sequence-specific seven-camera Atlanta-fire history."
    },
    {
      title: "The 12th Academy Awards | 1940",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/1940",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The Academy records 14 nominations and nine wins on the current ceremony page, including Outstanding Production, Directing, Supporting Actress for Hattie McDaniel, Art Direction, Color Cinematography, Film Editing and Screenplay, plus nominations for score, sound recording and special effects."
    },
    {
      title: "Complete National Film Registry Listing",
      publisher: "Library of Congress / National Film Preservation Board",
      url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/complete-national-film-registry-listing/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The Library of Congress lists Gone With the Wind (1939) among the inaugural 1989 National Film Registry selections, keeping preservation status chronologically downstream from production."
    },
    {
      title: "Gone with the Wind (1939)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/c00d4d53-3498-5f3d-b461-748d678a837e/gone-with-the-wind",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "BFI independently identifies Selznick as the producer-centered force, notes the handful of directors and writers, 220-minute runtime and the production's Technicolor scale, while also acknowledging its dated racial politics."
    },
    {
      title: "Gone with the Wind — BFI Player contextual note",
      publisher: "British Film Institute",
      url: "https://player.bfi.org.uk/rentals/film/watch-gone-with-the-wind-1939-online",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "BFI explicitly contextualizes the film's stereotyped Black roles, romanticized antebellum South and treatment of slavery as background, supporting the permanent representation safeguard rather than allowing Technicolor spectacle or awards history to neutralize ideology."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

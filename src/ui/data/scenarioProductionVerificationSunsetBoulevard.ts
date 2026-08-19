import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const sunsetBoulevardProductionCaseVerification = {
  scenarioId: "scenario_sunset_boulevard_1950",
  status: "verified",
  verifiedAt: "2026-08-19",
  summary: "AFI, the Academy, Library of Congress and BFI support Sunset Boulevard as a Paramount postwar noir built from Hollywood's own studio infrastructure, locations, personnel, silent-era memory and version history. AFI identifies Paramount Pictures as production and distribution company; Charles Brackett as producer; Billy Wilder as director; Charles Brackett, Billy Wilder and D. M. Marshman Jr. as writers; John F. Seitz as director of photography; Hans Dreier and John Meehan as art directors; Arthur Schmidt as editor with Doane Harrison as editorial supervisor; Sam Comer and Ray Moyer as set decorators; Edith Head as costume designer; Franz Waxman as score composer; Harry Lindgren and John Cope as sound recordists; Gordon Jennings and Farciot Edouart in special/process photography; and Wally Westmore as makeup supervisor. AFI records production from 18 April through 11 June 1949 with additional scenes and retakes on later dates through 5 January 1950, Western Electric recording, black-and-white presentation, PCA no. 13955 and runtime variants of 109–110 or 115 minutes. Its history documents the working title A Can of Beans, PCA concern about the Gillis-Norma relationship before July 1949 approval, the originally shot morgue opening, preview laughter that led to removal of that opening and a six-month release delay, and Doane Harrison's on-set editorial collaboration. AFI also documents the Jenkins/Getty mansion exterior and Paramount-added pool, the Janss estate driveway, Paramount gate and other Los Angeles locations, along with constructed replicas of Schwab's Drug Store and the morgue interior. The production deliberately uses Gloria Swanson's silent-era career, Erich von Stroheim, footage from Queen Kelly, Cecil B. DeMille on the Samson and Delilah set, Buster Keaton and other silent performers as material industrial memory rather than generic cameos. The Academy records eleven nominations and three wins for story/screenplay, black-and-white art direction and Franz Waxman's score; Library of Congress lists the film among the inaugural 1989 National Film Registry selections. BFI independently characterizes the film as a self-reflexive film noir and Hollywood self-satire, while its Gloria Swanson archive interview preserves Swanson's own account of the production and the film's relationship to her prior career. The case does not invent camera bodies, lenses, stock, microphone models, lighting ratios, optical setups, narration-recording procedure or a universal nitrate claim beyond the institutional evidence.",
  sources: [
    {
      title: "Sunset Blvd. (1950)",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/26513-SUNSET-BLVD",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI verifies Paramount production/distribution, Brackett-Wilder-Marshman writing, Brackett producing, Seitz, Dreier/Meehan, Schmidt/Harrison, Comer/Moyer, Head, Waxman, Lindgren/Cope, Jennings/Edouart and Westmore; production/retake dates, PCA 13955, Western Electric, runtime variants, the rejected morgue opening, preview-driven revision and detailed Los Angeles/studio/replica locations."
    },
    {
      title: "The 23rd Academy Awards | 1951",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/1951",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The Academy records eleven nominations and three wins: Story and Screenplay for Brackett/Wilder/Marshman, black-and-white Art Direction for Dreier/Meehan with Comer/Moyer, and Franz Waxman's score, plus nominations for picture, acting, directing, Seitz cinematography and Schmidt/Harrison editing."
    },
    {
      title: "Complete National Film Registry Listing",
      publisher: "Library of Congress / National Film Preservation Board",
      url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/complete-national-film-registry-listing/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Library of Congress lists Sunset Boulevard (1950) among the inaugural 1989 National Film Registry selections, preserving registry status as a later reception/preservation layer rather than a production input."
    },
    {
      title: "Sunset Blvd. (1950)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/f43ad3dd-1b5b-5f19-aa10-5f29d8f33da2/sunset-blvd",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "BFI identifies Wilder, Brackett, the principal cast and 110-minute form and characterizes the film as a film-noir/metafictional Hollywood self-satire in which silent-cinema figures and industrial memory are central to the dramatic system."
    },
    {
      title: "I am NOT going to write my memoirs!: Gloria Swanson",
      publisher: "BFI / Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/features/i-am-not-going-write-my-memoirs-gloria-swanson-talks-pictures",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "BFI's archival Swanson interview records her recollection that the project began for her with only part of the script, her resistance to cruelly literal use of living Hollywood figures, the roughly twelve-week shoot and the deliberate overlap between Norma Desmond and selected facts of Swanson's real career."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

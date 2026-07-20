import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const silentStudioSystemsVerificationRecords = [
  {
    scenarioId: "scenario_the_general_1926",
    status: "verified",
    verifiedAt: "2026-07-20",
    summary: "The case's Civil War source, independent Keaton production, real locomotive action, practical bridge destruction, body-and-machine performance, spatially clear editing and silent accompaniment are supported by AFI, BFI, MoMA and Library of Congress records.",
    sources: [
      {
        title: "The General (1926)", publisher: "AFI Catalog",
        url: "https://catalog.afi.com/Film/9303-THE-GENERAL", sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "AFI verifies the Civil War source incident, Buster Keaton Productions, Joseph M. Schenck, Keaton and Clyde Bruckman, photographers Bert Haines and Dev Jennings, technical director Fred Gabourie and the silent black-and-white release format."
      },
      {
        title: "The General (1926)", publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/film/136a6211-90d9-5d18-b047-7967deac8bab/the-general", sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "BFI identifies the film as Keaton's most lavish production and analyzes its blend of action, comedy, Civil War pursuit, practical stunts and later critical rehabilitation."
      },
      {
        title: "The birth of action: 10 sensational stunts from the silent era", publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/lists/birth-action-10-sensational-stunts-from-silent-era", sourceKind: "film_institute",
        supports: ["overall", "cinematography", "editing"],
        note: "BFI documents the borrowed vintage locomotives, Keaton's close physical interaction with railway machinery, Fred Gabourie's technical role, six-camera bridge stunt and the unprecedented cost of the locomotive crash."
      },
      {
        title: "Buster's Best", publisher: "Museum of Modern Art",
        url: "https://www.moma.org/explore/inside_out/2010/03/16/busters-best/", sourceKind: "archive_feature",
        supports: ["overall", "cinematography", "editing"],
        note: "MoMA curator Charles Silver places The General inside Keaton's precise artistic system linking bodily performance, machinery, nature and the mechanics of film form."
      },
      {
        title: "Buster Keaton in The General", publisher: "Library of Congress",
        url: "https://www.loc.gov/item/2021563520", sourceKind: "archive_feature",
        supports: ["overall", "sound"],
        note: "The Library of Congress preserves a contemporary thematic music cue sheet for the film, documenting its original silent-era accompaniment context rather than a fixed synchronized soundtrack."
      }
    ]
  },
  {
    scenarioId: "scenario_the_phantom_carriage_1921",
    status: "verified",
    verifiedAt: "2026-07-20",
    summary: "The case's Filmstaden production, Selma Lagerlöf adaptation, nested flashbacks, layered double exposure, controlled silent performance, deep studio staging and restored musical presentation are supported by Swedish Film Institute, BFI and Criterion records.",
    sources: [
      {
        title: "Körkarlen", publisher: "Swedish Film Institute",
        url: "https://www.filminstitutet.se/sv/fa-kunskap-om-film/ta-del-av-filmsamlingarna/filmer/korkarlen/", sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "SFI identifies Körkarlen as the first production in the new Filmstaden studios, records Sjöström's continued Lagerlöf collaboration, highlights nested flashbacks and double exposure, and documents live-music and recorded-score exhibition versions."
      },
      {
        title: "Körkarlen – film study guide", publisher: "Swedish Film Institute",
        url: "https://www.filminstitutet.se/sv/fa-kunskap-om-film/filmpedagogik/filmhandledningar/korkarlen/", sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "The institute's teaching record places the film in Swedish film history and emphasizes flashback within flashback, complex double-exposure layers and the relationship between technical and narrative virtuosity."
      },
      {
        title: "The Phantom Carriage", publisher: "The Criterion Collection",
        url: "https://www.criterion.com/films/27630-the-phantom-carriage", sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography", "sound"],
        note: "Criterion verifies Sjöström's direction and script, Lagerlöf source, Julius Jaenzon's cinematography, art directors Alexander Bakó and Axel Esbensen, the SFI-supported restoration and multiple modern scores."
      },
      {
        title: "Phantom Forms: The Phantom Carriage", publisher: "The Criterion Collection",
        url: "https://www.criterion.com/current/posts/2000-phantom-forms-the-phantom-carriage", sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "The essay analyzes the layered superimpositions, differently lit spectral images, moving camera, deep-focus studio work, nested narration and Sjöström's controlled approach to silent performance."
      },
      {
        title: "10 great silent horror films", publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/lists/10-great-silent-horror-films", sourceKind: "film_institute",
        supports: ["overall", "cinematography", "editing"],
        note: "BFI describes the soul-redemption structure and confirms that the ghostly multiple exposures were achieved in-camera with hand-cranked equipment rather than created later in a laboratory."
      }
    ]
  },
  {
    scenarioId: "scenario_metropolis_1927",
    status: "verified",
    verifiedAt: "2026-07-20",
    summary: "The case's UFA production, monumental architecture, mass choreography, Schüfftan and miniature effects, mobile photography, original orchestral score, version history and international restoration are supported by filmportal, BFI, Deutsche Kinemathek and UNESCO.",
    sources: [
      {
        title: "Metropolis", publisher: "filmportal.de",
        url: "https://www.filmportal.de/en/movie/metropolis_ea43d4a6990b5006e03053d50b37753d", sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The official German record verifies UFA, Erich Pommer, Fritz Lang, Thea von Harbou, cinematographers Karl Freund and Günther Rittau, production designers, costume and sculpture credits, the studio dates, 35mm format and Gottfried Huppertz score."
      },
      {
        title: "Fritz Lang's Metropolis Over Time", publisher: "filmportal.de",
        url: "https://www.filmportal.de/en/topic/fritz-langs-metropolis-over-time", sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "editing", "sound"],
        note: "filmportal documents the three original negatives, severe early recutting, decades of reconstruction, the Buenos Aires discovery and the 2010 return of the nearly complete version."
      },
      {
        title: "Metropolis", publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/film/bda6ff8a-ed7e-5942-980d-c2910c0120ec/metropolis", sourceKind: "film_institute",
        supports: ["overall", "cinematography", "editing"],
        note: "BFI analyzes the future city's inequality, Expressionist design, miniature cityscapes, Schüfftan effects, robot Maria and the film's continuing influence on dystopian science fiction."
      },
      {
        title: "Fritz Langs Metropolis", publisher: "Deutsche Kinemathek",
        url: "https://www.deutsche-kinemathek.de/en/node/787", sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "Deutsche Kinemathek documents the two-year production, original and shortened versions, surviving photographs, designs, screenplay and props, the Buenos Aires material and the restored relationship between images, narrative and Huppertz's music."
      },
      {
        title: "Metropolis – Memory of the World", publisher: "UNESCO",
        url: "https://www.unesco.org/en/memory-world/metropolis-sicherungsstuck-nr-1-negative-restored-and-reconstructed-version-2001", sourceKind: "film_institute",
        supports: ["overall", "cinematography"],
        note: "UNESCO recognizes the restored negative as documentary heritage and identifies the film's historically significant combination of motion picture and future architecture."
      }
    ]
  },
  {
    scenarioId: "scenario_frankenstein_1931",
    status: "verified",
    verifiedAt: "2026-07-20",
    summary: "The case's Universal production, stage-to-screen adaptation, James Whale direction, Arthur Edeson photography, Charles D. Hall design, Jack Pierce makeup, Kenneth Strickfaden laboratory apparatus, Western Electric sound and Karloff performance are supported by AFI, BFI and Library of Congress records.",
    sources: [
      {
        title: "Frankenstein (1931)", publisher: "AFI Catalog",
        url: "https://catalog.afi.com/Catalog/moviedetails/3925", sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "AFI verifies Universal Pictures, Carl Laemmle Jr., James Whale, the stage-adaptation history, Arthur Edeson, Charles D. Hall, Clarence Kolster, Jack Pierce, Kenneth Strickfaden, the production dates and Western Electric sound system."
      },
      {
        title: "10 great horror films of the 1930s", publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/lists/10-great-horror-films-1930s", sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography"],
        note: "BFI places Frankenstein at the beginning of the 1930s horror boom, identifies the stage-adaptation route, Whale's moving camera and Expressionist design, Jack Pierce's makeup and Karloff's creature performance."
      },
      {
        title: "Where to begin with the Universal horror cycle", publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/features/where-begin-universal-horror-cycle", sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography"],
        note: "BFI distinguishes Whale's cinematic staging from the more static Dracula, describes the pared-down Shelley adaptation and positions Frankenstein as the central early Universal horror production."
      },
      {
        title: "Frankenstein (1931)", publisher: "AFI Silver Theatre and Cultural Center",
        url: "https://silver.afi.com/movies/detail/0100000350/", sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography"],
        note: "AFI Silver confirms Whale, the credited screenplay and stage sources, Carl Laemmle Jr., Jack Pierce's makeup and Karloff's physical and emotional interpretation of the Monster."
      },
      {
        title: "Complete National Film Registry Listing", publisher: "Library of Congress",
        url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/complete-national-film-registry-listing/", sourceKind: "film_institute",
        supports: ["overall"],
        note: "The Library of Congress records Frankenstein as a National Film Registry title, confirming its recognized cultural, historical and aesthetic importance within American film heritage."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];

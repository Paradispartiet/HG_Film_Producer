import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const lateSilentEarlySoundVerificationRecords = [
  {
    scenarioId: "scenario_the_passion_of_joan_of_arc_1928",
    status: "verified",
    verifiedAt: "2026-07-20",
    summary: "The case's trial-record basis, single-day compression, Falconetti performance, close-up system, sparse white design, discontinuous editing and restoration history are supported by BFI and Danish Film Institute records.",
    sources: [
      { title: "Where to begin with Carl Dreyer", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/where-begin-carl-dreyer", sourceKind: "film_institute", supports: ["overall", "screenplay", "cinematography", "editing"], note: "BFI documents the French production, creative control, trial-transcript source, single-day compression, close-ups, sparse décor and psychological rather than epic historical method." },
      { title: "4 rules of filmmaking and how The Passion of Joan of Arc breaks them", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/passion-joan-arc-carl-dreyer-style", sourceKind: "film_institute", supports: ["overall", "cinematography", "editing"], note: "BFI analyzes the missing master shots, inconsistent eyelines, lack of matches on action, flattened backgrounds and deliberate emotional coherence of Dreyer's editing system." },
      { title: "The peak of silent cinema", publisher: "BFI Sight and Sound", url: "https://www.bfi.org.uk/sight-and-sound/features/peak-silent-cinema", sourceKind: "film_institute", supports: ["overall", "screenplay", "cinematography"], note: "Sight and Sound records the expensive sets, limited release, severe shortening, recovery of Dreyer's original version in Oslo and Falconetti's makeup-free central performance." },
      { title: "Carl Th. Dreyer", publisher: "Danish Film Institute", url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/person/carl-th-dreyer", sourceKind: "film_institute", supports: ["overall", "screenplay"], note: "DFI places the film inside Dreyer's international 1920s career and verifies the French 1928 production as his best-known silent masterpiece." }
    ]
  },
  {
    scenarioId: "scenario_man_with_a_movie_camera_1929",
    status: "verified",
    verifiedAt: "2026-07-20",
    summary: "The case's city-day structure, rejection of actors and intertitles, Kino-Eye theory, Kaufman cinematography, Svilova editing, split-screen and superimposition techniques, reflexive documentary method and reconstructed accompaniment are supported by Eye, MoMA and BFI.",
    sources: [
      { title: "The Man with a Movie Camera", publisher: "Eye Filmmuseum", url: "https://www.eyefilm.nl/en/whats-on/the-man-with-a-movie-camera/1346017", sourceKind: "film_institute", supports: ["overall", "screenplay", "cinematography", "editing", "sound"], note: "Eye records the 1929 production, original title, one-day urban structure, rejection of theatrical language, extensive film techniques and preservation of its unusually complete print." },
      { title: "Reconstructing the original music for Man with a Movie Camera", publisher: "Eye Filmmuseum", url: "https://www.eyefilm.nl/en/magazine/reconstructing-the-original-music-for-man-with-a-movie-camera/1636481", sourceKind: "archive_feature", supports: ["overall", "sound"], note: "Eye documents reconstruction of the Moscow premiere accompaniment from cue notes found in the Vertov archive and distinguishes intended music from later replacement scores." },
      { title: "Man with a Movie Camera", publisher: "Museum of Modern Art", url: "https://www.moma.org/collection/works/303131", sourceKind: "film_institute", supports: ["overall", "cinematography", "editing"], note: "MoMA analyzes Kino-Eye, the eye-camera superimposition, exposure of camera and editor, industrial associations, split screens, superimposition and varied speed." },
      { title: "10 great Soviet films of the 1920s", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-soviet-films-1920s", sourceKind: "film_institute", supports: ["overall", "cinematography", "editing"], note: "BFI identifies Mikhail Kaufman's hazardous camera work, Yelizaveta Svilova's editorial construction, the multi-city production and the unusually rapid 1,775-shot montage." }
    ]
  },
  {
    scenarioId: "scenario_m_1931",
    status: "verified",
    verifiedAt: "2026-07-20",
    summary: "The case's Nero-Film production, Weimar urban procedure, parallel police and criminal structures, Peter Lorre performance, black-and-white Tobis sound format, offscreen whistle, silence and sound bridges are supported by filmportal and BFI.",
    sources: [
      { title: "M", publisher: "filmportal.de", url: "https://www.filmportal.de/en/movie/m_ea43d4a7669a5006e03053d50b37753d", sourceKind: "film_institute", supports: ["overall", "screenplay", "cinematography", "editing", "sound"], note: "The official German record verifies Nero-Film, Seymour Nebenzahl, Lang and Thea von Harbou, the Berlin shoot, 35mm 1.19:1 format, Tobis-Klangfilm sound and 1931 premiere." },
      { title: "M (1931)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/77dfae8a-b9af-517e-97ca-257f6cb87849/m", sourceKind: "film_institute", supports: ["overall", "screenplay", "cinematography", "sound"], note: "BFI places Lang's first talkie in Weimar crime cinema and emphasizes its social cross-section, Peter Lorre performance, offscreen sound and moral ambiguity." },
      { title: "10 great early sound films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-early-sound-films", sourceKind: "film_institute", supports: ["overall", "editing", "sound"], note: "BFI analyzes the opening absence, killer's whistle, strategic silence and sound bridges that connect the meetings of police and criminal underworld." },
      { title: "Fritz Langs erster Tonfilm", publisher: "filmportal.de", url: "https://www.filmportal.de/node/20141/material/740341", sourceKind: "archive_feature", supports: ["overall", "sound"], note: "The preserved contemporary Film-Kurier report documents the major Berlin premiere, audience response and historical reception of Lang's first sound feature." }
    ]
  },
  {
    scenarioId: "scenario_city_lights_1931",
    status: "verified",
    verifiedAt: "2026-07-20",
    summary: "The case's independent Chaplin production, deliberate refusal of dialogue, pantomime structure, long rehearsal process, synchronized Chaplin score, selective comic effects and visual recognition ending are supported by Chaplin, AFI, BFI and Library of Congress records.",
    sources: [
      { title: "Filming City Lights", publisher: "Charlie Chaplin Official Website", url: "https://www.charliechaplin.com/en/films/5-city-lights/articles/4-Filming-City-Lights", sourceKind: "archive_feature", supports: ["overall", "screenplay", "editing", "sound"], note: "The Chaplin archive explains his refusal to assign the Tramp a spoken voice, use of synchronized score and selected effects, composition of the score and the film's successful premieres." },
      { title: "AFI Movie Club: City Lights", publisher: "American Film Institute", url: "https://www.afi.com/news/afi-movie-club-city-lights/", sourceKind: "film_institute", supports: ["overall", "cinematography", "editing", "sound"], note: "AFI documents the two-year self-financed production, Chaplin's resistance to dialogue, addition of a musical soundtrack and sound sequences, and independent distribution context." },
      { title: "City Lights (1931)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/18e7950b-fa7e-5a5e-a897-a782a40f1c5c/city-lights", sourceKind: "film_institute", supports: ["overall", "screenplay", "cinematography", "editing"], note: "BFI verifies Chaplin's production, writing and direction and analyzes the deliberate continuation of pantomime, balance of comedy and pathos, boxing set piece and final recognition scene." },
      { title: "Brief descriptions and expanded essays of National Film Registry titles", publisher: "Library of Congress", url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/", sourceKind: "film_institute", supports: ["overall", "screenplay"], note: "The Library of Congress records City Lights as a National Film Registry title and describes Chaplin's combination of pantomime, comedy and pathos despite the industry's embrace of talking pictures." }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];

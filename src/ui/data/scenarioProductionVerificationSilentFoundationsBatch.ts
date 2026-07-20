import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const silentFoundationsVerificationRecords = [
  {
    scenarioId: "scenario_a_trip_to_the_moon_1902",
    status: "verified",
    verifiedAt: "2026-07-20",
    summary: "The case's attraction-led voyage, theatrical tableaux, painted fantasy world, camera transformations, hand-coloured afterlife and restoration history are supported by Cannes, Library of Congress and preservation records.",
    sources: [
      {
        title: "Le Voyage dans la lune (A Trip to the Moon)",
        publisher: "Festival de Cannes",
        url: "https://www.festival-cannes.com/en/f/le-voyage-dans-la-lune/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The official Cannes record verifies Georges Méliès as director and screenwriter, Star Film as production company, the 1902 expedition structure and Air's music for the restored presentation."
      },
      {
        title: "A Trip to the Moon – a return journey",
        publisher: "Festival de Cannes",
        url: "https://www.festival-cannes.com/en/2011/a-trip-to-the-moon-a-return-journey/",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "Cannes describes the film as a special-effects milestone and documents the rediscovery, image-by-image digitization and 2010 completion of the colour restoration with a new Air soundtrack."
      },
      {
        title: "Cannes Classics 2011",
        publisher: "Festival de Cannes",
        url: "https://www.festival-cannes.com/2011/cannes-classics-2011/",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography", "editing"],
        note: "The restoration announcement records Lobster Films and foundation partners reassembling and restoring fragments from 13,375 individual images of the recovered colour version."
      },
      {
        title: "Lost 19th century film by Méliès discovered at the Library",
        publisher: "Library of Congress",
        url: "https://blogs.loc.gov/loc/2026/02/lost-19th-century-film-by-melies-discovered-at-the-library/",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography", "editing"],
        note: "The Library of Congress documents Méliès's glass studio, self-built camera and development of camera stoppage, double exposure, black screens and forced perspective as a repeatable filmmaking system."
      }
    ]
  },
  {
    scenarioId: "scenario_the_cabinet_of_dr_caligari_1920",
    status: "verified",
    verifiedAt: "2026-07-20",
    summary: "The case's Expressionist world, frame-story ambiguity, studio production, graphic sets and shadows, stylized performance, tinted silent format and restoration history are supported by BFI, filmportal and Deutsche Kinemathek records.",
    sources: [
      {
        title: "100 years of The Cabinet of Dr. Caligari",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/features/100-years-cabinet-dr-caligari",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "BFI connects postwar Expressionism, the ambiguous frame story, angular all-encompassing set design and Max Reinhardt-influenced performance to the film's psychological horror system and later influence."
      },
      {
        title: "Das Cabinet des Dr. Caligari",
        publisher: "filmportal.de",
        url: "https://www.filmportal.de/en/movie/das-cabinet-des-dr-caligari_ea43d4a69c1a5006e03053d50b37753d",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "sound"],
        note: "The official record verifies Wiene, Mayer, Janowitz, Hameister, designers Warm, Reimann and Röhrig, the Decla production, Lixie Atelier shoot, 35mm 1.33 tinted silent format and premiere."
      },
      {
        title: "Be Caligari! – The Virtual Cabinet",
        publisher: "Deutsche Kinemathek",
        url: "https://www.deutsche-kinemathek.de/en/visit/exhibitions/be-caligari-virtual-cabinet",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography", "sound"],
        note: "Deutsche Kinemathek documents the 2014 restoration from the surviving camera negative, replacement of the missing first act, reinstated original intertitles, restored tinting, 4K mastering and loss of most original music."
      },
      {
        title: "Der expressionistische Film",
        publisher: "filmportal.de",
        url: "https://www.filmportal.de/en/node/6103/material/758439",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography"],
        note: "A preserved 1920 contemporary response identifies the stylized architecture, rooms and lighting as a complete Expressionist film experiment rather than isolated decoration."
      }
    ]
  },
  {
    scenarioId: "scenario_nosferatu_1922",
    status: "verified",
    verifiedAt: "2026-07-20",
    summary: "The case's unauthorized Dracula adaptation, multi-location Weimar production, plague-and-voyage structure, Albin Grau design, Max Schreck silhouette, Fritz Arno Wagner photography and silent musical record are supported by official German film records and BFI history.",
    sources: [
      {
        title: "Nosferatu",
        publisher: "filmportal.de",
        url: "https://www.filmportal.de/en/movie/nosferatu_ea43d4a6a62b5006e03053d50b37753d",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "sound"],
        note: "The official record verifies Murnau, Galeen, Fritz Arno Wagner, Prana-Film, Albin Grau, the Dracula source, August-to-October 1921 locations and the original 35mm 1.33 silent format."
      },
      {
        title: "10 great German expressionist films",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/lists/10-great-german-expressionist-films",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography", "editing"],
        note: "BFI places Nosferatu within German Expressionism while distinguishing its use of real landscapes, architecture, shadow and physical presence from a wholly painted studio world."
      },
      {
        title: "Nosferatu – production and versions",
        publisher: "filmportal.de",
        url: "https://www.filmportal.de/film/nosferatu_d70835e558264328a39112994449d17f",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography", "sound"],
        note: "The detailed record adds Günther Krampf, Albin Grau's set and costume credits, Hans Erdmann's cinema music and the specifications of the digitized restored version."
      },
      {
        title: "Contemporary review of Nosferatu",
        publisher: "filmportal.de",
        url: "https://www.filmportal.de/en/node/3737/material/693225",
        sourceKind: "archive_feature",
        supports: ["overall", "cinematography", "sound"],
        note: "The preserved contemporary response records the reception of the carefully composed images, castle and house environments, Max Schreck's performance and Hans Erdmann's accompanying score."
      }
    ]
  },
  {
    scenarioId: "scenario_battleship_potemkin_1925",
    status: "verified",
    verifiedAt: "2026-07-20",
    summary: "The case's five-movement revolutionary structure, collective protagonist, graphic cinematography, temporal expansion, repetition, contrast and collision montage are supported by MoMA, BFI and international film-archive records.",
    sources: [
      {
        title: "Battleship Potemkin",
        publisher: "Museum of Modern Art",
        url: "https://www.moma.org/collection/works/305815?art_term_slug=montage&sov_referrer=art_term",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "MoMA identifies the five major sequences and analyzes Eisenstein's percussive editing, detailed shots, repetition, contrast, temporal compression and expansion, and collisions opposing seamless illusion."
      },
      {
        title: "Battleship Potemkin",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/film/9c02c20b-1487-52c8-bbfc-0849e204fe59/battleship-potemkin",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "BFI records the five-part mutiny narrative, dynamic composition, frame-precise montage, historical canonization and censorship history."
      },
      {
        title: "Battleship Potemkin – 1925 programme record",
        publisher: "Museum of Modern Art",
        url: "https://www.moma.org/calendar/events/6129",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "The programme record verifies Eisenstein's writing and direction, Eduard Tisse's photography, the 35mm silent presentation and the concentrated production of major set pieces."
      },
      {
        title: "Battleship Potemkin",
        publisher: "International Documentary Film Festival Amsterdam",
        url: "https://www.idfa.nl/en/film/a599f835-9770-4bb9-a9f9-93aa604fb946/battleship-potemkin/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "editing"],
        note: "IDFA places the film between historical reconstruction and revolutionary statement and emphasizes the deliberate editorial manipulation that produces political meaning rather than neutral historical record."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];

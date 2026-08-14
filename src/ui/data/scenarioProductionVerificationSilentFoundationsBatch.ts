import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";
import { attackChinaMissionProductionCaseVerification } from "./scenarioProductionVerificationAttackChinaMission";
import { queenElizabethProductionCaseVerification } from "./scenarioProductionVerificationQueenElizabeth";

export const silentFoundationsVerificationRecords = [
  {
    scenarioId: "scenario_blacksmith_scene_1893",
    status: "verified",
    verifiedAt: "2026-08-14",
    summary: "Blacksmith Scene's staged laboratory performance, fixed single-take photography, Kinetograph/Kinetoscope system, Black Maria sunlight architecture and 1893 exhibition context are supported by MoMA, Library of Congress and National Park Service records.",
    sources: [
      { title: "Blacksmithing Scene", publisher: "Museum of Modern Art", url: "https://www.moma.org/collection/works/316644", sourceKind: "film_institute", supports: ["overall", "cinematography", "editing"], note: "MoMA documents Edison laboratory employees performing the blacksmith action, a fixed single unedited take, Dickson and Heise as makers, Kinetograph capture, Kinetoscope viewing and the Black Maria environment." },
      { title: "Blacksmith Scene (1893)", publisher: "Library of Congress", url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/", sourceKind: "film_institute", supports: ["overall", "cinematography"], note: "The National Film Registry description identifies Edison employees as staged performers, attributes the 1893 photography to W. K. L. Dickson and records the May 9 Brooklyn Kinetoscope demonstration." },
      { title: "Black Maria Grand Reopening", publisher: "National Park Service", url: "https://www.nps.gov/edis/learn/news/black-maria-reopening.htm", sourceKind: "film_institute", supports: ["overall", "cinematography"], note: "Thomas Edison National Historical Park documents the Black Maria's 1893 completion, circular-track pivot, opening roof for maximum sunlight and Dickson-Heise production work." },
      { title: "Complete National Film Registry Listing", publisher: "Library of Congress", url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/complete-national-film-registry-listing/", sourceKind: "film_institute", supports: ["overall"], note: "The Registry listing records Blacksmith Scene as an 1893 film selected in 1995, providing an institutional preservation and legacy cross-check." }
    ]
  },
  {
    scenarioId: "scenario_workers_leaving_lumiere_factory_1895",
    status: "verified",
    verifiedAt: "2026-08-14",
    summary: "Workers Leaving the Lumière Factory's portable Cinématographe context, factory-gate actuality method, fixed event framing, short-roll limits, 1895 demonstration history and multiple surviving versions are supported by Institut Lumière, BFI, Library of Congress and ACMI records.",
    sources: [
      { title: "Le Cinématographe Lumière", publisher: "Institut Lumière", url: "https://www.institut-lumiere.org/le-cinematographe-lumiere", sourceKind: "film_institute", supports: ["overall", "cinematography", "editing"], note: "Institut Lumière documents Cinématographe development, the 22 March 1895 demonstration using Sortie d'usine, later projections and the 28 December commercial programme." },
      { title: "In the beginning: cinema's murky origin story", publisher: "British Film Institute", url: "https://www.bfi.org.uk/sight-and-sound/features/origins-cinema-early-inventors-pioneers", sourceKind: "film_institute", supports: ["overall", "cinematography", "editing"], note: "BFI places Lumière work among competing systems and describes the compact Cinématographe and short-film capacity that made apparatus, duration and timing practical constraints." },
      { title: "Documentary and Actuality Films", publisher: "Library of Congress", url: "https://guides.loc.gov/french-and-francophone-film/movements-and-genres/documentary-and-actuality", sourceKind: "film_institute", supports: ["overall", "cinematography"], note: "The Library of Congress places Workers Leaving the Lumière Factory among foundational actuality films and supports treating early nonfiction as produced rather than automatically neutral evidence." },
      { title: "Workers Leaving the Lumiere Factory", publisher: "Australian Centre for the Moving Image", url: "https://www.acmi.net.au/works/5476--workers-leaving-the-lumiere-factory/", sourceKind: "film_institute", supports: ["overall", "cinematography", "editing"], note: "ACMI identifies the 1895 Lumière production and catalogues distinct surviving versions, supporting version history as a production issue." }
    ]
  },
  attackChinaMissionProductionCaseVerification,
  queenElizabethProductionCaseVerification,
  {
    scenarioId: "scenario_fire_1901",
    status: "verified",
    verifiedAt: "2026-08-14",
    summary: "Fire!'s five-tableau rescue structure, Hove Fire Station and Ivy Lodge geography, matching movement, 35mm silent material and role in early multi-shot narrative are supported by BFI, Screen Archive South East, Science Museum Group and George Eastman Museum records.",
    sources: [
      { title: "Fire! (1901)", publisher: "British Film Institute", url: "https://www.screenonline.org.uk/film/id/520632/index.html", sourceKind: "film_institute", supports: ["overall", "screenplay", "cinematography", "editing"], note: "BFI Screenonline credits James Williamson and his company, records 35mm silent material, identifies Hove Fire Station and Ivy Lodge and analyzes the five tableaux, suspense and chronological multi-shot construction." },
      { title: "Fire! — Title ID 8389", publisher: "Screen Archive South East", url: "https://screenarchive.brighton.ac.uk/detail/8389/", sourceKind: "film_institute", supports: ["overall", "screenplay", "cinematography"], note: "The regional archive identifies the 1901 Williamson production and describes the policeman, fire-station mobilization, horse-drawn response and staged burning-room rescue." },
      { title: "Four frames of silent 35mm positive film taken from Fire!", publisher: "Science Museum Group", url: "https://collection.sciencemuseumgroup.org.uk/objects/co8588481/four-frames-of-silent-35mm-tinted-positive-film-taken-from-fire-by-r-w-paul", sourceKind: "film_institute", supports: ["overall", "cinematography"], note: "Science Museum Group preserves nitrate 35mm positive frames identified with James Williamson's 1901 Fire!, providing a material-format and preservation cross-check." },
      { title: "James Card Program #2: Development of the Narrative", publisher: "George Eastman Museum", url: "https://www.eastman.org/event/film-screenings/james-card-program-2-development-narrative-35mm-16mm", sourceKind: "film_institute", supports: ["overall", "editing"], note: "George Eastman Museum programs Fire! within a historical sequence on narrative development across multiple scenes, sets and editing." }
    ]
  },
  {
    scenarioId: "scenario_life_of_an_american_fireman_1903",
    status: "verified",
    verifiedAt: "2026-08-14",
    summary: "Life of an American Fireman's large Edison fire-service production, staged rescue, original scene-based inside-then-outside ending and later mistaken cross-cut re-edit are supported by Library of Congress, BFI, American Film Institute and MoMA records.",
    sources: [
      { title: "The Life of an American Fireman (1903)", publisher: "Library of Congress", url: "https://www.loc.gov/static/programs/national-film-preservation-board/film-registry/descriptions.html", sourceKind: "film_institute", supports: ["overall", "screenplay", "editing"], note: "The National Film Registry description identifies Porter's film as an important early work and states that a later modern cross-cut re-edit was mistakenly treated as original until scholars checked the original Library of Congress copyright paper print." },
      { title: "The Innovators 1900-1910: Time After Time", publisher: "British Film Institute", url: "https://old.bfi.org.uk/sightandsound/feature/145", sourceKind: "film_institute", supports: ["overall", "screenplay", "editing"], note: "Charles Musser details Porter's overlapping action and specifies the original final construction: the rescue is completed inside in one shot and then replayed outside in the next, rather than cross-cut between spaces." },
      { title: "Life of an American Fireman", publisher: "American Film Institute", url: "https://catalog.afi.com/Film/31950-LIFE-OFANAMERICANFIREMAN", sourceKind: "film_institute", supports: ["overall", "screenplay", "cinematography"], note: "AFI credits Edwin S. Porter and Edison Manufacturing Company and preserves the Edison catalog account of extensive rehearsals, four city fire departments and about 300 firefighters used to create the fire-service spectacle and rescue." },
      { title: "Edwin S. Porter: A Portrait", publisher: "Museum of Modern Art", url: "https://www.moma.org/explore/inside_out/2009/09/22/an-auteurist-history-of-film-a-portrait-of-edwin-s-porte/", sourceKind: "film_institute", supports: ["overall", "cinematography", "editing"], note: "MoMA situates Life of an American Fireman among Porter's consequential works and preservation-era scholarship, providing an institutional cross-check on the film's place in early American narrative and editing history." }
    ]
  },
  {
    scenarioId: "scenario_the_great_train_robbery_1903",
    status: "verified",
    verifiedAt: "2026-08-14",
    summary: "The Great Train Robbery's Edison studio-location production, railway action, multi-scene temporal organization, moving-train photography, double exposure, hand-applied color and flexible direct-address bandit shot are supported by Library of Congress, MoMA, BFI and National Gallery of Art records.",
    sources: [
      { title: "The great train robbery", publisher: "Library of Congress", url: "https://www.loc.gov/item/00694220/", sourceKind: "film_institute", supports: ["overall", "screenplay", "cinematography", "editing"], note: "The Library catalog credits Porter with production and camera, records Edison Manufacturing Company, a partial basis in Scott Marble's play, November 1903 studio/New Jersey filming and 35mm holdings." },
      { title: "Edwin S. Porter. The Great Train Robbery. 1903", publisher: "Museum of Modern Art", url: "https://www.moma.org/collection/works/304708", sourceKind: "film_institute", supports: ["overall", "screenplay", "cinematography", "editing"], note: "MoMA documents studio interiors, New Jersey exterior action, moving-train photography, double exposure, hand-painted color and editing across changing locations and partially simultaneous action." },
      { title: "The Innovators 1900-1910: Time After Time", publisher: "British Film Institute", url: "https://old.bfi.org.uk/sightandsound/feature/145", sourceKind: "film_institute", supports: ["overall", "screenplay", "editing"], note: "Charles Musser rejects reductive inventor-of-editing claims and analyzes the robbers/posse structure as historically specific pre-1908 temporal organization." },
      { title: "Cine-Concert: The Great Train Robbery followed by Sand!", publisher: "National Gallery of Art", url: "https://www.nga.gov/calendar/treasures-american-cinema-westerns-reel-americana/cine-concert-great-train-robbery-followed-sand?evd=202604191800", sourceKind: "film_institute", supports: ["overall", "cinematography", "sound"], note: "The National Gallery cross-checks the November 1903 production, Porter credit, 35mm silent presentation, approximate duration and direct-address bandit image." }
    ]
  },
  {
    scenarioId: "scenario_a_trip_to_the_moon_1902",
    status: "verified",
    verifiedAt: "2026-07-20",
    summary: "The case's attraction-led voyage, theatrical tableaux, painted fantasy world, camera transformations, hand-coloured afterlife and restoration history are supported by Cannes, Library of Congress and preservation records.",
    sources: [
      { title: "Le Voyage dans la lune (A Trip to the Moon)", publisher: "Festival de Cannes", url: "https://www.festival-cannes.com/en/f/le-voyage-dans-la-lune/", sourceKind: "film_institute", supports: ["overall", "screenplay", "cinematography", "editing", "sound"], note: "The official Cannes record verifies Méliès as director and screenwriter, Star Film as production company, the 1902 expedition structure and Air's music for the restored presentation." },
      { title: "A Trip to the Moon – a return journey", publisher: "Festival de Cannes", url: "https://www.festival-cannes.com/en/2011/a-trip-to-the-moon-a-return-journey/", sourceKind: "film_institute", supports: ["overall", "cinematography", "editing", "sound"], note: "Cannes documents the special-effects history, rediscovery, image-by-image digitization and restoration of the colour version with a new soundtrack." },
      { title: "Cannes Classics 2011", publisher: "Festival de Cannes", url: "https://www.festival-cannes.com/2011/cannes-classics-2011/", sourceKind: "film_institute", supports: ["overall", "cinematography", "editing"], note: "The restoration announcement records partners reassembling and restoring fragments from thousands of individual images of the recovered colour version." },
      { title: "Lost 19th century film by Méliès discovered at the Library", publisher: "Library of Congress", url: "https://blogs.loc.gov/loc/2026/02/lost-19th-century-film-by-melies-discovered-at-the-library/", sourceKind: "film_institute", supports: ["overall", "cinematography", "editing"], note: "The Library documents Méliès's glass studio, self-built camera and camera stoppage, double exposure, black screens and forced perspective as a repeatable filmmaking system." }
    ]
  },
  {
    scenarioId: "scenario_the_cabinet_of_dr_caligari_1920",
    status: "verified",
    verifiedAt: "2026-07-20",
    summary: "The case's Expressionist world, frame-story ambiguity, studio production, graphic sets and shadows, stylized performance, tinted silent format and restoration history are supported by BFI, filmportal and Deutsche Kinemathek records.",
    sources: [
      { title: "100 years of The Cabinet of Dr. Caligari", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/100-years-cabinet-dr-caligari", sourceKind: "film_institute", supports: ["overall", "screenplay", "cinematography", "editing"], note: "BFI connects Expressionism, the ambiguous frame story, angular set design and stylized performance to the film's psychological horror system." },
      { title: "Das Cabinet des Dr. Caligari", publisher: "filmportal.de", url: "https://www.filmportal.de/en/movie/das-cabinet-des-dr-caligari_ea43d4a69c1a5006e03053d50b37753d", sourceKind: "film_institute", supports: ["overall", "screenplay", "cinematography", "sound"], note: "The official record verifies Wiene, writers, cinematography, designers, Decla production, studio, 35mm 1.33 tinted silent format and premiere." },
      { title: "Be Caligari! – The Virtual Cabinet", publisher: "Deutsche Kinemathek", url: "https://www.deutsche-kinemathek.de/en/visit/exhibitions/be-caligari-virtual-cabinet", sourceKind: "film_institute", supports: ["overall", "cinematography", "sound"], note: "Deutsche Kinemathek documents restoration from surviving camera-negative material, replacement of missing material, original intertitles, tinting and music history." },
      { title: "Der expressionistische Film", publisher: "filmportal.de", url: "https://www.filmportal.de/en/node/6103/material/758439", sourceKind: "archive_feature", supports: ["overall", "screenplay", "cinematography"], note: "A preserved contemporary response identifies the stylized architecture, rooms and lighting as a complete Expressionist film experiment." }
    ]
  },
  {
    scenarioId: "scenario_nosferatu_1922",
    status: "verified",
    verifiedAt: "2026-07-20",
    summary: "The case's unauthorized Dracula adaptation, multi-location Weimar production, plague-and-voyage structure, Albin Grau design, Max Schreck silhouette, Fritz Arno Wagner photography and silent musical record are supported by official German film records and BFI history.",
    sources: [
      { title: "Nosferatu", publisher: "filmportal.de", url: "https://www.filmportal.de/en/movie/nosferatu_ea43d4a6a62b5006e03053d50b37753d", sourceKind: "film_institute", supports: ["overall", "screenplay", "cinematography", "sound"], note: "The official record verifies Murnau, Galeen, Fritz Arno Wagner, Prana-Film, Albin Grau, the Dracula source, production locations and original silent format." },
      { title: "10 great German expressionist films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-german-expressionist-films", sourceKind: "film_institute", supports: ["overall", "cinematography", "editing"], note: "BFI places Nosferatu within German Expressionism while distinguishing real landscapes, architecture, shadow and physical presence from a wholly painted studio world." },
      { title: "Nosferatu – production and versions", publisher: "filmportal.de", url: "https://www.filmportal.de/film/nosferatu_d70835e558264328a39112994449d17f", sourceKind: "film_institute", supports: ["overall", "cinematography", "sound"], note: "The detailed record adds production-design, cinematography and original cinema-music credits and specifications of restored versions." },
      { title: "Contemporary review of Nosferatu", publisher: "filmportal.de", url: "https://www.filmportal.de/en/node/3737/material/693225", sourceKind: "archive_feature", supports: ["overall", "cinematography", "sound"], note: "The preserved contemporary response records reception of the images, environments, Max Schreck's performance and Hans Erdmann's accompanying score." }
    ]
  },
  {
    scenarioId: "scenario_battleship_potemkin_1925",
    status: "verified",
    verifiedAt: "2026-07-20",
    summary: "The case's five-movement revolutionary structure, collective protagonist, graphic cinematography, temporal expansion, repetition, contrast and collision montage are supported by MoMA, BFI and international film-archive records.",
    sources: [
      { title: "Battleship Potemkin", publisher: "Museum of Modern Art", url: "https://www.moma.org/collection/works/305815?art_term_slug=montage&sov_referrer=art_term", sourceKind: "film_institute", supports: ["overall", "screenplay", "cinematography", "editing"], note: "MoMA identifies the five major sequences and analyzes Eisenstein's editing, detailed shots, repetition, contrast, temporal compression and expansion." },
      { title: "Battleship Potemkin", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/9c02c20b-1487-52c8-bbfc-0849e204fe59/battleship-potemkin", sourceKind: "film_institute", supports: ["overall", "screenplay", "cinematography", "editing"], note: "BFI records the five-part mutiny narrative, dynamic composition, montage, historical canonization and censorship history." },
      { title: "Battleship Potemkin – 1925 programme record", publisher: "Museum of Modern Art", url: "https://www.moma.org/calendar/events/6129", sourceKind: "film_institute", supports: ["overall", "cinematography", "editing", "sound"], note: "The programme record verifies Eisenstein's writing and direction, Eduard Tisse's photography and the 35mm silent presentation." },
      { title: "Battleship Potemkin", publisher: "International Documentary Film Festival Amsterdam", url: "https://www.idfa.nl/en/film/a599f835-9770-4bb9-a9f9-93aa604fb946/battleship-potemkin/", sourceKind: "film_institute", supports: ["overall", "screenplay", "editing"], note: "IDFA places the film between historical reconstruction and revolutionary statement and emphasizes deliberate editorial manipulation rather than neutral historical record." }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
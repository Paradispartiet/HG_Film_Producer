import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const requiemForADreamProductionCaseVerification = {
  scenarioId: "scenario_requiem_for_a_dream_2000",
  status: "verified",
  verifiedAt: "2026-07-24",
  summary: "Darren Aronofsky and Hubert Selby Jr.'s Coney Island adaptation, Artisan and Protozoa production, Matthew Libatique's seasonal 35 mm and practical-light system, James Chinlund's red-withholding design, Jay Rabinowitz's hip-hop montage, Brian Emrich's production-integrated sound, Clint Mansell and Kronos Quartet score, Amoeba Proteus effects and Cannes-to-Academy legacy are supported by ten inspectable institutional, trade and direct craft sources.",
  sources: [
    {
      title: "Requiem for a Dream",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/53879-REQUIEM-FORADREAM",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI records the Selby adaptation, Artisan, Thousand Words and Protozoa companies, Sundance development assistance, Brooklyn and Coney Island locations, principal department credits, hip-hop editing, 35 mm Panavision production, release history and rating dispute."
    },
    {
      title: "Requiem for a Dream: Downward Spiral",
      publisher: "American Cinematographer",
      url: "https://theasc.com/article/requiem-for-a-dream-downward-spiral/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Matthew Libatique details 1.85 composition, lenses, filtration, pull processing, seasonal palette, practical fluorescent and Kino systems, sodium-vapour and metal-halide shifts, SnorriCam, Milo motion control and integrated visual effects."
    },
    {
      title: "Coney Island baby",
      publisher: "The Guardian",
      url: "https://www.theguardian.com/culture/2000/oct/30/artsfeatures",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Aronofsky describes the Selby collaboration, Coney Island context, addiction as escape, expressionist direction and the aim of marrying split screens, rapid hip-hop montage and other stylistic devices to performance."
    },
    {
      title: "We'll Fix It in Post",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/archives/issues/winter2003/line_items/fix_it.php",
      sourceKind: "trade_feature",
      supports: ["overall", "editing"],
      note: "Editor Jay Rabinowitz explains that Requiem permitted maximum emotional intensity and that reaction shots, rhythmic contrast and subtle editorial shading were used to tune performances inside the film's deliberately heightened design."
    },
    {
      title: "Requiem for a Dream",
      publisher: "James Chinlund",
      url: "https://www.jameschinlund.com/features/requiem-for-a-dream",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "The production designer documents the film's microbudget visual manifesto, especially the removal of red from the palette until Sara's red dress turns the colour into a marker of her deteriorating mental state."
    },
    {
      title: "The Sound of Requiem for a Dream",
      publisher: "The Awl",
      url: "https://www.theawl.com/2012/07/the-sound-of-requiem-for-a-dream/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "The sound team explains that Brian Emrich developed the hip-hop montage sounds during filming and picture editing, after which final editorial enlarged details such as the dilating pupil into a more forceful cinematic system."
    },
    {
      title: "Film: Addicted to Noise",
      publisher: "Live Design",
      url: "https://www.livedesignonline.com/film-0",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Brian Emrich describes joining during production, watching dailies and creating temporary effects during the cut, allowing the repeated drug and pill rituals to evolve as an integrated image-and-sound structure rather than a late postproduction layer."
    },
    {
      title: "Method Man: Jay Rabinowitz Finds that the Film Tells Him How to Edit It",
      publisher: "CineMontage",
      url: "https://cinemontage.org/method-man-jay-rabinowitz/",
      sourceKind: "trade_feature",
      supports: ["overall", "editing", "sound"],
      note: "Rabinowitz and Aronofsky discuss their extreme emotional and rhythmic editing approach, the editor's musical sensibility and the contrast between Requiem's heightened cutting and Rabinowitz's restrained work for Jim Jarmusch."
    },
    {
      title: "Requiem for a Dream",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/requiem-for-a-dream/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official archive records the 2000 out-of-competition midnight screening and confirms Aronofsky and Selby screenplay, Libatique cinematography, Rabinowitz editing, Chinlund design, Mansell music and the principal cast."
    },
    {
      title: "The 73rd Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2001",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The Academy's official ceremony record confirms Ellen Burstyn's nomination for Actress in a Leading Role, documenting the film's major performance recognition and durable awards-season legacy."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

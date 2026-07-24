import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theBigLebowskiProductionCaseVerification = {
  scenarioId: "scenario_the_big_lebowski_1998",
  status: "verified",
  verifiedAt: "2026-07-24",
  summary: "Joel and Ethan Coen's Working Title and PolyGram Los Angeles post-noir, noir-parody screenplay, Jeff Bridges-led ensemble, Roger Deakins 35 mm photography, Rick Heinrichs design, Mary Zophres costumes, Roderick Jaynes and Tricia Cooke editing, Skip Lievsay sound, Carter Burwell and T-Bone Burnett music, elaborate dream effects and National Film Registry legacy are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "The Big Lebowski",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/60644-THE-BIG-LEBOWSKI",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI documents Working Title and Gramercy, Ethan and Joel Coen's writing and production roles, Roger Deakins photography, Rick Heinrichs design, Roderick Jaynes and Tricia Cooke editing, Carter Burwell music, colour, sound and release information."
    },
    {
      title: "Sleeping and Severed Toes: Ethan Coen & Joel Coen on the Art of Screenwriting",
      publisher: "Focus Features",
      url: "https://www.focusfeatures.com/article/sleeping_and_severed_toes__ethan_coen___joel_coen_on_the_art_o",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "The Coens discuss their writing division, juxtaposition, character viewpoint and the two elaborate dream sequences, including the flying-carpet, bowling and inner-life logic built into the screenplay."
    },
    {
      title: "The Big Lebowski",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/item/99402622/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The Library records PolyGram and Gramercy, the principal authors and cast, Roger Deakins, Tricia Cooke, Carter Burwell, colour sound presentation, twelve 35 mm reels and the film's National Film Registry status."
    },
    {
      title: "ASC Cinematographers Behind 11 New National Film Registry Picks",
      publisher: "American Society of Cinematographers",
      url: "https://theasc.com/news/asc-cameramen-behind-11-new-national-film-registry-picks",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "American Cinematographer identifies Roger Deakins as the cinematographer of The Big Lebowski and records the film among the 2014 National Film Registry selections preserved for lasting influence."
    },
    {
      title: "The Big Lebowski — BFI Southbank Programme Notes",
      publisher: "British Film Institute",
      url: "https://bfidatadigipres.github.io/big%20screen%20classics/2021/08/06/big-lebowski/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "BFI provides the detailed production, camera, art, costume, makeup, editing, sound, music, choreography, optical, mechanical and visual-effects credits needed to inspect the complete craft system."
    },
    {
      title: "Mary Zophres — Costume Designer",
      publisher: "Team Deakins",
      url: "https://teamdeakins.libsyn.com/mary-zophres-costume-designer",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Mary Zophres explains her actor-centred fitting and camera-test process and discusses dressing Jeff Bridges for The Big Lebowski, showing how costume helped create the Dude's posture and character."
    },
    {
      title: "The Big Lebowski",
      publisher: "Carter Burwell",
      url: "https://www.carterburwell.com/projects/Big_Lebowski.shtml",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Burwell explains the score's source-music conceit, jazz detective cue, nihilist techno-pop song, movement between score and car radio, T-Bone Burnett's song assembly and the recording personnel."
    },
    {
      title: "The Perfect Match — Hollywood Costume Collaborations",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/events/perfect-match-hollywood-costume-collaborations",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "The Academy presents the film with Mary Zophres in person and emphasizes its indelible Los Angeles locations, large ensemble, Jeff Bridges performance, quotable writing and elaborate fantasy sequences."
    },
    {
      title: "Michael Barry on His Career in Film Sound",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/35311-michael-barry-talks-about-sound-in-film/",
      sourceKind: "trade_feature",
      supports: ["overall", "sound"],
      note: "Re-recording mixer Michael Barry discusses film mixing practice and his Coen collaborations including The Big Lebowski, supporting the documented relationship between dialogue, effects, music and final mix."
    },
    {
      title: "Jeff Bridges: The Wanderer",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/jeff-bridges-the-wanderer/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "Film Comment analyzes Bridges's non-persona performance, his use of his own wardrobe and memories, the Dude's social and political residue and the human performance foundation beneath the Coens' constructed plot."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

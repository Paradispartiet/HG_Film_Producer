import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const treeOfLifeProductionCaseVerification = {
  scenarioId: "scenario_tree_of_life_2011",
  status: "verified",
  verifiedAt: "2026-08-27",
  summary: "The Tree of Life is verified as a 2011 Chapter 18 Production Case in which photochemical capture, available-light production, mobile documentary-style camera practice, period location design, multi-editor assembly, a restrained 4K digital intermediate and a creation sequence combining practical photography, scientific simulation and digital VFX all coexist. Festival de Cannes anchors the released film at 138 minutes and credits Terrence Malick as writer-director, Emmanuel Lubezki as cinematographer, Jack Fisk as production designer, Alexandre Desplat as composer, and Hank Corwin, Jay Rabinowitz, Mark Yoshikawa, Daniel Rezende and Billy Weber as editors. Lubezki's title-specific British Cinematographer interview establishes the mixed 35 mm/regular 65 mm/IMAX strategy, ARRI LT and 235 cameras for 35 mm work, a Panavision camera for 65 mm scenes, generally ARRI Master Prime spherical lenses, Kodak Vision2 500T 5218 and 200T 5217 stocks, 1.85:1 framing, mostly available-light photography with two or three acknowledged exceptions including an HMI-assisted church interior, Jack Fisk's window modifications and six-block Smithville dress, remote-iris collaboration with Jörg Widmer, other-unit landscape work usually captured on 35 mm, and a LaserPacific/EFilm full-4K DI kept intentionally free of windows and heavy secondary correction. AFI's production record, drawing on studio notes and contemporary reporting, corroborates Smithville as the principal location, records three houses matched as one dramatic home so the company could follow changing light, documents substantial neighborhood-periodization work, and states that the three young O'Brien brothers were non-actors selected after a year-long search among more than 10,000 children without scripted audition readings. Visual-effects supervisor Dan Glass documents a heterogeneous creation pipeline: Douglas Trumbull's Austin skunkworks photographed fluids, dyes, smoke, dry ice, flares and other physical phenomena at high speed; plates and institutional imagery were integrated with digital work; Dr. Volker Bromm's Population III research and an NCSA simulation informed specific first-star imagery; concept art translated scientific data into aesthetic targets; and Double Negative plus other vendors composited and constructed final shots. This evidence directly rejects the common no-CGI simplification while also preventing the opposite error of describing the sequence as wholly computer generated. Mark Yoshikawa's Editors Guild interview confirms that several editors worked on The Tree of Life and that he remained from beginning to end to help pull the material together, without establishing sequence-by-sequence ownership. Exact shot-to-format mapping, exact focal lengths by shot, exposure indexes and processing variants, total footage/shooting ratio, VFX shot totals, edit ownership by sequence, detailed sound-chain claims and scientific accuracy beyond the documented adviser/simulation scope remain outside the high-confidence layer.",
  sources: [
    {
      title: "The Tree of Life",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/the-tree-of-life/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official festival record supporting the 2011 Competition identity, 138-minute released runtime, Malick writing/directing, Lubezki cinematography, Fisk production design, Desplat music and all five credited editors; the Palme d'Or is used only as reception evidence."
    },
    {
      title: "Emmanuel Lubezki AMC, ASC / The Tree of Life",
      publisher: "British Cinematographer",
      url: "https://britishcinematographer.co.uk/emmanuel-lubezki-amc-asc-the-tree-of-life/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Title-specific Lubezki testimony supporting 35 mm/65 mm/IMAX use, ARRI LT and 235, Panavision 65 mm camera, generally Master Prime spherical lenses, Kodak 5218/5217, 1.85:1, available-light method and exceptions, Fisk's lighting-enabling design, Widmer remote-iris collaboration, remote-unit 35 mm work and the restrained LaserPacific/EFilm 4K DI."
    },
    {
      title: "The Tree of Life (2011)",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/68352-THE-TREE-OF-LIFE",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Institutional production record summarizing studio production notes and contemporary reporting: Smithville and other locations, three matched houses used to follow changing light, neighborhood design interventions, principal credits and the year-long search among more than 10,000 children for three non-actor brothers."
    },
    {
      title: "VFX supe Dan Glass on The Tree of Life",
      publisher: "fxguide",
      url: "https://www.fxguide.com/fxfeatured/vfx-supe-dan-glass-on-the-tree-of-life/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct interview with VFX supervisor Dan Glass documenting Trumbull's practical skunkworks, high-speed photographed elements, location plates, scientific simulations including Volker Bromm/NCSA Population III work, concept-art translation, Double Negative integration, digital creatures and mixed compositing."
    },
    {
      title: "Mark Yoshikawa Talks of Editing Terrence Malick, Christopher Guest, and the new Reminiscence",
      publisher: "CineMontage / Motion Picture Editors Guild",
      url: "https://cinemontage.org/mark-yoshikawa-talks-of-editing-terrence-malick-christopher-guest-and-the-new-reminiscence/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing"],
      note: "Direct editor testimony confirming the several-editor workflow on The Tree of Life and Yoshikawa's beginning-to-end role pulling the material together; used without assigning specific sequences to individual editors."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

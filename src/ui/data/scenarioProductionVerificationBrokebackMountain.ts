import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const brokebackMountainProductionCaseVerification = {
  scenarioId: "scenario_brokeback_mountain_2005",
  status: "verified",
  verifiedAt: "2026-08-26",
  summary: "Brokeback Mountain is verified as a 2005 US Production Case whose 2004 Alberta location shoot, restrained 35mm image strategy, subtle period design, costume/performance aging, exterior logistics, differentiated sound post, shared editing credit and sparse score can be taught without confusing Wyoming/Texas story geography with Canadian production geography or treating later awards as production evidence. AFI records a 134-minute film, a production period of 24 May to early August 2004, Alberta locations including the Canadian Rockies, Cowley, Fort MacLeod and Calgary, and credits Ang Lee, Larry McMurtry, Diana Ossana, Rodrigo Prieto, Geraldine Peroni, Dylan Tichenor, Judy Becker and Gustavo Santaolalla. Focus Features' original EPK interviews document the 1997 option and screenplay, the nearly seven-year development path, late-2003 Focus/Lee/Schamus commitment, performance and dialect research, naturalistic production design, costume strategy, cowboy preparation, local rodeo advice, extensive exterior work and rapidly changing mountain weather. Ang Lee's DGA interview documents his request for a tranquil, almost passive visual style, a drama-first collaboration with Prieto, selective landscape CGI and two-camera coverage in the Twist family-house sequence. American Cinematographer's production reporting documents 35mm Arricam cameras, Cooke S4 primes, 1.85:1 composition and stock differentiation across mountain, town, night and Texas material; a separate Prieto interview states the film would not use a digital intermediate. BFI compiled credits preserve second-unit cinematography, visual effects, digital opticals, color timing, production sound, boom, sound editorial, ADR, rerecording, art, costume and music departments. Exact exposure, filtration, printer-light values, body-by-shot allocation, shot-specific VFX methods, animal/stunt safety procedures and a definitive budget total remain outside the high-confidence boundary unless title-specific sources establish them.",
  sources: [
    {
      title: "Brokeback Mountain",
      publisher: "American Film Institute Catalog",
      url: "https://catalog.afi.com/Catalog/moviedetails/54466",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional production record supporting the 134-minute runtime, 24 May to early August 2004 production dates, Alberta locations, principal production and craft credits, 35mm/Kodak physical properties, sound formats, negative cutting, production sound, ADR and rerecording credits."
    },
    {
      title: "Voices of Brokeback Mountain",
      publisher: "Focus Features",
      url: "https://www.focusfeatures.com/article/voices_of_brokeback_mountain?film=brokeback_mountain",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Original filmmaker/crew EPK testimony supporting the 1997 option and screenplay, long development path, naturalistic production design, Wyoming/Texas research, Avedon reference, period dressing, costume strategy, Alberta locations, local rodeo advisors, actor training, exterior/weather logistics and sparse Santaolalla score."
    },
    {
      title: "Brokeback Mountain's Cast and Crew Remember How the Movie Came to Be",
      publisher: "Focus Features",
      url: "https://www.focusfeatures.com/article/brokeback-mountain_filmmaker-voices",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Focus 20th-anniversary republication of original production interviews supporting adaptation chronology, young-cast strategy, Avedon visual research, Becker's naturalistic design approach and Lee's sparse-score collaboration with Santaolalla."
    },
    {
      title: "Crossing Borders - Ang Lee interview",
      publisher: "Directors Guild of America",
      url: "https://www.dga.org/craft/dgaq/issues/1001-spring-2010/dga-interview-ang-lee",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct Ang Lee interview supporting the tranquil/almost-passive Brokeback visual strategy, drama-first DP collaboration, selective landscape CGI including cloud placement, and the two-camera/lens-change coverage used for the Twist family-house sequence."
    },
    {
      title: "Peaks and Valleys - Brokeback Mountain",
      publisher: "American Cinematographer, January 2006 archival issue",
      url: "https://www.scribd.com/document/63868874/American-Cinematographer-Magazine-January-2006",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Archived American Cinematographer production account documenting 35mm Arricam cameras, Cooke S4 primes, the mountain/town/night film-stock strategy including 5245, 5246, 5218 and 5279, and the deliberately simple, stoic visual approach."
    },
    {
      title: "American Cinematographer: Alexander - Rodrigo Prieto interview",
      publisher: "American Cinematographer",
      url: "https://theasc.com/magazine/nov04/alexander/page6.html",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Prieto states immediately after shooting Brokeback Mountain that the production would not use a digital intermediate because the controlled shoot did not require one, providing a direct finishing-workflow boundary."
    },
    {
      title: "Brokeback Mountain - BFI Southbank Programme Notes",
      publisher: "BFI Documentation Unit / Sight and Sound",
      url: "https://bfidatadigipres.github.io/big%20screen%20classics/2022/02/09/brokeback-mountain/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Compiled credits supporting second-unit cinematography, visual effects, special effects, digital opticals, color timing, art direction, set decoration, costume, production sound, boom, music, Geraldine Peroni and Dylan Tichenor editing, and the Alberta production structure."
    },
    {
      title: "Rodrigo Prieto on Brokeback Mountain's 1.85:1 mountain framing",
      publisher: "American Cinematographer",
      url: "https://theasc.com/articles/killers-of-the-flower-moon-greed-hubris-and-homicide",
      sourceKind: "trade_feature",
      supports: ["cinematography"],
      note: "In later ASC craft testimony Prieto explicitly contrasts Killers of the Flower Moon with Brokeback Mountain and states that Brokeback was shot in 1.85:1 because the filmmakers wanted the height of the mountains."
    },
    {
      title: "Dylan Tichenor on the Editing Process and POV",
      publisher: "Sundance Collab",
      url: "https://collab.sundance.org/catalog/Dylan-Tichenor-on-the-Editing-Process-and-POV",
      sourceKind: "filmmaker_interview",
      supports: ["editing"],
      note: "Sundance Institute editor conversation identifying Brokeback Mountain as one of Tichenor's case studies for point of view and editing process; used only as contextual support beside AFI/BFI's shared Geraldine Peroni and Dylan Tichenor credit."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

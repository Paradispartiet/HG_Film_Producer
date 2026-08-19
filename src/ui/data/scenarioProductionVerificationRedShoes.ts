import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const redShoesProductionCaseVerification = {
  scenarioId: "scenario_the_red_shoes_1948",
  status: "verified",
  verifiedAt: "2026-08-19",
  summary: "Criterion, BFI, MoMA and the Academy support The Red Shoes as an Archers postwar British Technicolor and ballet production built through collective authorship, dancer casting, painter-led design, choreography, score, cinematography and editing rather than as a generic prestige-musical preset. Criterion credits Michael Powell and Emeric Pressburger jointly as directors and as writers/producers, Jack Cardiff as cinematographer, Hein Heckroth as production designer, Arthur Lawson as art director, Reginald Mills as editor, Brian Easdale as composer/arranger/conductor, Robert Helpmann as choreographer of the Ballet of the Red Shoes, Léonide Massine as creator/dancer of the shoemaker and Thomas Beecham conducting the Royal Philharmonic Orchestra. BFI traces Pressburger's prewar Korda-era project and the Archers' 1946 revival, identifies the film as a decisive rejection of postwar realism, records that Rank Organisation resentment over the major budget overrun contributed to a small initial British release, and documents the later two-year New York run. BFI's Technicolor history states that colour was integral to Hein Heckroth's precisely planned scheme and that a short film was made from his sketches to guide preparation; its archive exhibition shows Heckroth and Ivor Beddoes designs and emphasizes that music, art, light and dance combine in the central ballet. Criterion's Heckroth study identifies The Red Shoes as his first feature as production designer and frames Archers authorship as a fusion of crafts, while Criterion's film page preserves the core production credits. BFI's discussion of the Archers' composed-film method supports soundtrack-first construction for some Red Shoes sequences; this record explicitly refuses to turn that into a claim that the entire feature was shot to playback. The Academy records five nominations and two wins, including colour art direction and dramatic/comedy score, while MoMA/Criterion document the later UCLA Film & Television Archive restoration with BFI, The Film Foundation, ITV and Janus Films. Runtime references vary around 133–136 minutes across institutions, so the canonical 136-minute BFI form is kept with version-provenance caution. The case does not invent camera bodies, lenses, stock batches, Technicolor camera count, lighting ratios, microphones, shooting dates, stage allocation or effects mechanisms beyond the source set.",
  sources: [
    {
      title: "The Red Shoes (1948)",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/233-the-red-shoes",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Criterion verifies Powell/Pressburger joint directing and writing/producing, Cardiff, Heckroth, Lawson, Mills, Easdale, Helpmann, Massine, Beecham and the central Technicolor ballet; it also documents the modern UCLA/BFI/Film Foundation/ITV/Janus restoration."
    },
    {
      title: "5 things to know about The Red Shoes",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/features/red-shoes-michael-powell-emeric-pressburger",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "BFI traces the prewar Korda/Pressburger origin, the 1946 revival, Cardiff's expressive Technicolor, the film's anti-realist postwar position, the budget overrun, Rank Organisation hostility and the later two-year New York run."
    },
    {
      title: "10 great British Technicolor films",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/10-great-british-technicolor-films",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "BFI states that colour was integral to Hein Heckroth's precisely planned design scheme and that a short film made from his sketches guided preparation for the actual shoot, supporting previsualized colour/design coordination."
    },
    {
      title: "The 21st Academy Awards | 1949",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/1949",
      sourceKind: "film_institute",
      supports: ["overall", "editing"],
      note: "The Academy records The Red Shoes as a Best Motion Picture nominee, winner for colour Art Direction (Hein Heckroth/Arthur Lawson) and dramatic/comedy score (Brian Easdale), and nominee for Film Editing (Reginald Mills) and Motion Picture Story (Emeric Pressburger)."
    },
    {
      title: "The Red Shoes. 1948",
      publisher: "Museum of Modern Art",
      url: "https://www.moma.org/calendar/events/9701",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "MoMA identifies Powell/Pressburger, Moira Shearer and the ballet-company cast, Jack Cardiff's Technicolor and the UCLA/BFI/Film Foundation/ITV/Janus restoration, keeping restoration separate from original-production claims."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

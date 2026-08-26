import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const pansLabyrinthProductionCaseVerification = {
  scenarioId: "scenario_pans_labyrinth_2006",
  status: "verified",
  verifiedAt: "2026-08-26",
  summary: "Pan's Labyrinth is verified as a 2006 Spain/Mexico/USA Production Case built around photochemical capture, opposed real/fantasy production-design systems, practical creature performance, selective digital intervention and 2K DI finishing. BFI and AFI preserve the 112-minute institutional runtime, writer-director Guillermo del Toro, cinematographer Guillermo Navarro, production designer Eugenio Caballero, editor Bernat Vilaplana and the transnational production context. American Cinematographer's title-specific 'Fear and Fantasy' reporting documents Moviecam Compact and Arriflex 435 ES bodies, Zeiss Ultra Prime/Variable Prime lenses, Kodak 5217/5218/5246 stocks, extensive day-for-night work, selected three-to-four-stop underexposure and bounce/concealed-source lighting solutions. Eugenio Caballero's production-design testimony documents the opposed shape grammars, overscaled furniture, pine-forest intervention and artificial moss. Guillermo del Toro's DGA account establishes a set-oriented practical-effects philosophy without denying selective CG. Doug Jones and VFX trade reporting preserve the physical Faun/Pale Man performance, long prosthetic applications, digital lower-leg cleanup and CafeFX's storyboard-driven collaboration. The case therefore treats practical sets, prosthetics, animatronics, 35mm negative, compositing and DI as linked but distinct handoffs. Exact per-shot lenses, filters, shutter angles, laboratory scan settings, sound hardware, total film-wide VFX shot count and final release-print details remain outside the high-confidence boundary unless title-specific evidence establishes them.",
  sources: [
    {
      title: "Pan's Labyrinth (2006)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/80a5c68c-6519-56a5-b38c-0d246f6e278b/pans-labyrinth",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Institutional record supporting 2006, Spain/Mexico/USA, 112 minutes, Guillermo del Toro, the producer group and the film's historical placement."
    },
    {
      title: "Pan's Labyrinth (2006)",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/63906-PAN%27S-LABYRINTH",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Institutional production record supporting del Toro, Guillermo Navarro, Bernat Vilaplana, Eugenio Caballero, the principal producer group and Tequila Gang/Esperanto Filmoj/Estudios Picasso."
    },
    {
      title: "Fear and Fantasy",
      publisher: "American Cinematographer",
      url: "https://web.archive.org/web/20070511033220/http://www.ascmag.com/magazine_dynamic/January2007/PansLabyrinth/page1.php",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Title-specific craft reporting supporting Moviecam Compact/Arriflex 435 ES, Zeiss Ultra Prime/Variable Prime lenses, Kodak 5217/5218/5246, day-for-night, selected three-to-four-stop underexposure and bounce/concealed-source lighting strategies."
    },
    {
      title: "Beauty and the Beasts",
      publisher: "Directors Guild of America",
      url: "https://www.dga.org/craft/dgaq/issues/1401-winter-2014/dga-interview-del-toro",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Direct del Toro interview supporting his set-oriented preference for physical environments and using CG when it is the better solution rather than the default."
    },
    {
      title: "Qumra 2019: Oscar Winner Eugenio Caballero on Pan's Labyrinth, Roma and more",
      publisher: "The Playlist / Doha Film Institute Qumra coverage",
      url: "https://theplaylist.net/qumra-2019-eugenio-caballero-20190319/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Caballero's production-design testimony supporting straight/angled reality versus curved fantasy, overscaled furniture, practical set constraints, the pine-forest choice and artificial moss."
    },
    {
      title: "A VFX Labyrinth",
      publisher: "fxguide",
      url: "https://www.fxguide.com/fxfeatured/a_vfx_labyrinth/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Title-specific interview with CafeFX VFX supervisor Everett Burrell supporting the Madrid collaboration, production-partner role, detailed-storyboard handoff and selective VFX integration."
    },
    {
      title: "Interview: Doug Jones (Pan's Labyrinth)",
      publisher: "CHUD",
      url: "https://www.chud.com/8772/interview-doug-jones-pans-labyrinth/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Performer testimony supporting the demanding Faun/Pale Man prosthetic performances, restricted visibility/mobility and the practical-plus-digital boundary for the creatures."
    },
    {
      title: "2007 Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2007/H",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "Institutional reception record confirming the cinematography, art-direction and makeup awards; used only as downstream reception evidence, not as proof of production method."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

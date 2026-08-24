import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const sonOfSaulProductionCaseVerification = {
  scenarioId: "scenario_son_of_saul_2015",
  status: "verified",
  verifiedAt: "2026-08-24",
  summary: "Son of Saul is verified as a 2015 photochemical-persistence and restricted-representation production case whose image, set, performance, edit and sound systems were designed around the decision to remain with Saul while refusing omniscient or spectacularized access to the extermination process. Sony Pictures Classics identifies László Nemes and Clara Royer as screenwriters, Gábor Rajna and Gábor Sipos as producers, Mátyás Erdély as cinematographer, Matthieu Taponier as editor, László Rajk as production designer, Edit Szücs as costume designer and Tamás Zányi as sound editor/mixer. Nemes's official production interview documents research in Sonderkommando testimony, Shoah and consultation with historians Gideon Greif, Philippe Mesnard and Zoltán Vági; it also establishes the decision not to depict killing inside the gas chamber, the camera-as-companion rule, shallow-focus/extended-take restriction, traditional 35mm capture, photochemical processing at every stage, simple diffused industrial lighting and a single 40mm lens. Filmmaker Magazine's direct Nemes interview independently identifies practical lighting, an interconnected set, handheld rather than Steadicam operation, the 40mm Zeiss Master Prime, roughly T2.8-T4.0, on-set practical effects, no digital intermediate and a demanding edit despite extensive cutting in camera. Kodak/Hungarian Filmlab specifies four-perf 35mm VISION3 500T 5219, a 28-day Hungarian shoot, 85 finished shots in 107 minutes, 28,000m/92,000ft of negative, one-stop push processing for night exteriors, projected film dailies, negative cutting, photochemical color timing and final 35mm prints; the DCP was matched to the film print rather than serving as a DI master. ASC records the 1.37:1 35mm presentation. Rajk's direct interview and Nemes's production account preserve the functional-set boundary: the production researched crematorium workflow and built connected working spaces in an existing warehouse, but did not recreate Auschwitz or the entire crematorium at full scale. Sony and contemporary sound reporting identify Zányi's raw, layered, multilingual acoustic strategy in which orders, machinery and human voices construct offscreen information that the narrowed image deliberately withholds. The verification therefore does not infer that photochemical capture is inherently more truthful than digital media, that practical effects and no DI mean no post-production, that restricted viewpoint equals documentary omniscience, or that awards and emotional intensity validate historical claims.",
  sources: [
    {
      title: "Son of Saul",
      publisher: "Sony Pictures Classics",
      url: "https://www.sonyclassics.com/sonofsaul/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official distributor production material and Nemes interview supporting principal credits, Sonderkommando/testimony research, named historian consultation, the gas-chamber representation boundary, shallow focus and extended takes, the camera-as-companion rule, 35mm/photochemical-at-every-stage intent, one 40mm lens, simple industrial lighting, multilingual dialogue and Zányi's raw layered sound concept."
    },
    {
      title: "Hungarian Filmlab shines a light on its photochemical pipeline for 'Son of Saul' and film archiving services",
      publisher: "Kodak",
      url: "https://www.kodak.com/en/motion/blog-post/hungarian-filmlab/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Lab/manufacturer production record specifying the pure end-to-end photochemical finish, 28-day Hungarian shoot, four-perf 35mm VISION3 500T 5219, Master Prime lenses, 85 shots/107 minutes, 28,000m negative, one-stop push for night exteriors, daily projected rush prints, negative cutting, color timing, final 35mm prints and DCP matched to the print."
    },
    {
      title: "Hell on Earth: László Nemes on Son of Saul",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/96169-hell-on-earth/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Direct Nemes interview supporting practical-only factory lighting, one interconnected set, handheld rather than Steadicam movement, eye-level operation, 40mm Zeiss Master Prime after lens tests, T2.8-T4.0, on-set practical effects, no DI/optical finishing, cutting-in-camera discipline, substantial later editing and intentionally difficult-to-separate overlapping voices."
    },
    {
      title: "2015 in Review: 6 Cinematography Trends",
      publisher: "American Society of Cinematographers",
      url: "https://theasc.com/post/the-film-book/2015-in-review-6-trends/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "ASC record confirming Mátyás Erdély's 35mm 1.37:1 cinematography and the film's 35mm Cannes projection, used as an aspect-ratio/presentation boundary rather than evidence for the broader production method."
    },
    {
      title: "László Rajk • Production designer",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/interview/307299/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Direct Rajk interview supporting Auschwitz-museum research, the crematorium's functional workflow feeding screenplay/design decisions, the need to build details even when blurred, and the use of bodies, movement and sound to define interconnected space."
    },
    {
      title: "Director László Nemes on how 'Son of Saul' is a Renaissance-style portrait of a Holocaust victim",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/entertainment/movies/la-et-cam-laszlo-nemes-son-of-saul-palm-springs-film-fest-20160104-column.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct Nemes production interview supporting dedicated background direction, take-level rhythm/choreography, the real warehouse rather than flat studio walls, connected levels and near-360-degree continuity of practical space."
    },
    {
      title: "Anatomy of a Contender: Son of Saul",
      publisher: "The Hollywood Reporter / Sony Pictures Classics",
      url: "https://www.sonyclassics.com/sonofsaul/hollywoodreporter-sonofsaul.pdf",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Contemporary production booklet supporting extensive shot rehearsal/choreography, three-to-four-minute takes, the functional rather than literal full-crematorium design boundary, an acoustic counterpoint to narrowed imagery, eight-language dialogue and an unusually extended sound-post process."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

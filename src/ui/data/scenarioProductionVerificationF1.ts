import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const f1ProductionCaseVerification = {
  scenarioId: "scenario_f1_2025",
  status: "verified",
  verifiedAt: "2026-09-02",
  summary: "F1 is verified as Chapter 19's next award-priority industrial-scale production case through the Academy, BAFTA, BBFC, American Cinematographer, Sony Cine, Formula 1, Dolby, Avid, fxguide and official production credits. The Academy records the 2026 Sound Oscar and a Best Picture nomination; BAFTA records the 2026 Sound win. Awards establish selection/reception priority rather than workflow. BBFC records the UK 2D cinema version at 155m05s, rounded to 155 minutes for the playable record while later IMAX/streaming/home masters remain separate provenance questions. Formula 1 documents production embedded into live Grand Prix weekends with F1/FIA/team cooperation, Lewis Hamilton as producer/adviser, six Dallara F2 chassis modified with Mercedes input, a 400mm wheelbase extension, custom APXGP bodywork and multiple mechanical vehicle configurations including an electric pit-lane car. American Cinematographer and Sony document Sony VENICE 2 dramatic photography plus the FX6-derived Carmen prototype, Voigtländer and Zeiss Loxia in-car optics, Panavision remote heads, about fifteen mount positions with no more than four active cameras per car/setup, multi-track wireless control, approximately 5,000 hours of racing footage and protection for 2.39:1 and 1.90:1 rather than a 1.43:1 IMAX-film claim. ASC also documents race/broadcast/track sources and custom 4K raw iPhone-derived cameras as separate acquisition layers. Ryan Tudhope's direct VFX account documents more than 2,500 largely invisible VFX shots with Framestore and ILM, including car reskinning and continuity/environment work. Avid documents Stephen Mirrione editing in Media Composer with ScriptSync and picture/sound collaboration, while Dolby/Avid direct sound-team material documents Al Nelson, Gwendolyn Yates Whittle, Gary Rizzo and Juan Peralta building technically synchronized Formula 1 sound with Lewis Hamilton's input and Dolby Atmos delivery; Gareth John is the production sound mixer credited in the Oscar-winning team. Official credits identify Hans Zimmer as composer and keep score distinct from engine sound design and soundtrack songs. Complete budget/finance, race-access contracts, shooting-day and safety ledgers, vehicle serial/mechanical revisions, all camera/network/broadcast/iPhone settings, every stunt handoff, full 5,000-hour media provenance, complete 2,500-plus VFX shot/vendor ledger, all edit revisions, production-sound/ADR/Foley/mix details, score/song rights and every IMAX/DCP/HDR/SDR/streaming/home master remain unresolved.",
  sources: [
    {
      title: "The 98th Academy Awards | 2026",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2026",
      sourceKind: "film_institute",
      supports: ["overall", "sound", "editing"],
      note: "Institutional award record supporting the Sound win, Best Picture nomination, Film Editing nomination and Visual Effects nomination; awards establish priority/reception, not production method."
    },
    {
      title: "Film Awards 2026 Results",
      publisher: "BAFTA",
      url: "https://www.bafta.org/awards/film/?award-year=2026",
      sourceKind: "film_institute",
      supports: ["overall", "sound", "editing"],
      note: "Institutional record supporting the BAFTA Sound win and editing/VFX nominations without converting award credits into complete production task ledgers."
    },
    {
      title: "F1 The Movie",
      publisher: "British Board of Film Classification",
      url: "https://www.bbfc.co.uk/release/f1-the-movie-q29sbgvjdglvbjpwwc0xmdi4odm5",
      sourceKind: "film_institute",
      supports: ["overall", "editing"],
      note: "Institutional version record supporting the UK 2D cinema runtime of 155m05s used for the 155-minute playable record."
    },
    {
      title: "On the Fast Track for F1: The Movie",
      publisher: "American Cinematographer / American Society of Cinematographers",
      url: "https://theasc.com/article/on-the-fast-track-for-f1-the-movie/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct Miranda/Ming craft record supporting Carmen prototype design, FX6/VENICE 2 use, lenses, Panavision remote heads, camera-position constraints, live-race integration, multi-source capture, estimated 5,000 hours of race footage and 2.39/1.90 framing."
    },
    {
      title: "Go Behind the Scenes of F1 the Movie",
      publisher: "Sony Cine",
      url: "https://sony-cinematography.com/go-behind-the-scenes-of-f1-the-movie/",
      sourceKind: "archive_feature",
      supports: ["cinematography", "overall"],
      note: "Manufacturer/filmmaker account supporting the FX6-derived detachable full-frame prototype, S-Gamut3.Cine/XAVC compatibility and Sony VENICE 2 as the main camera reference."
    },
    {
      title: "F1 EXPLAINS: How F1 The Movie was made – with director Joseph Kosinski",
      publisher: "Formula 1",
      url: "https://www.formula1.com/en/latest/article/f1-explains-how-f1-the-movie-was-made-with-director-joseph-kosinski.2uaPicSZRTDSK1GoLMLBQ7",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct Kosinski interview supporting six Dallara F2 chassis, 400mm extension, Mercedes engineering/design input, custom APXGP bodywork, built-in camera-mount planning and actor driving."
    },
    {
      title: "How the APXGP car was built for F1 The Movie",
      publisher: "Formula 1",
      url: "https://www.formula1.com/en/latest/article/how-the-apxgp-car-was-built-for-f1-the-movie.25pGZbLVZGQHvhj4zpEiyZ.25pGZbLVZGQHvhj4zpEiyZ",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Direct action-vehicle/engineering reporting supporting Mercedes Applied Science bodywork, Mecachrome/GP3-era/electric vehicle variants and the production constraints of running race hardware on real circuits."
    },
    {
      title: "How APXGP was brought to life",
      publisher: "Formula 1",
      url: "https://www.formula1.com/en/latest/article/how-apxgp-was-brought-to-life-inside-the-rapid-creation-of-f1-the-movies.73ZVNOiyddgPL7jtNhX6Jq.73ZVNOiyddgPL7jtNhX6Jq",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "Direct Julian Day interview supporting fictional-team identity/costume work inside live Grand Prix environments and the production disruption/recovery around the 2023 SAG-AFTRA strike."
    },
    {
      title: "F1: The Movie, with VFX Supervisor Ryan Tudhope",
      publisher: "fxguide",
      url: "https://www.fxguide.com/fxpodcasts/fxpodcast-f1-the-movie-with-vfx-supervisor-ryan-tudhope/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct VFX-supervisor interview supporting a largely invisible VFX philosophy and more than 2,500 shots involving Framestore and ILM."
    },
    {
      title: "Behind the Scenes: Mixing and Editing F1 The Movie",
      publisher: "Avid",
      url: "https://connect.avid.com/f1-the-movie-lp.html",
      sourceKind: "filmmaker_interview",
      supports: ["editing", "sound"],
      note: "Direct editor/mix-team material supporting Media Composer, ScriptSync, Pro Tools, Lewis Hamilton technical sound input and the race-dialogue-music balance problem."
    },
    {
      title: "The Sound of F1: The Movie",
      publisher: "Dolby Creator Lab",
      url: "https://www.dolby.com/creator-lab/podcast/the-sound-of-f1-the-movie/",
      sourceKind: "filmmaker_interview",
      supports: ["sound", "overall"],
      note: "Direct Skywalker Sound panel supporting early sound planning, Al Nelson/Gwendolyn Yates Whittle/Gary Rizzo/Juan Peralta roles and Dolby Atmos theatrical delivery context."
    },
    {
      title: "F1 The Movie Official Synopsis and Credits",
      publisher: "Apple Original Films / Warner Bros. Pictures",
      url: "https://www.f1themovie.com/synopsis/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official credits supporting Kosinski, Kruger, Miranda, Tildesley/Munro, Mirrione, Day, Zimmer and the production-company/distribution context."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
